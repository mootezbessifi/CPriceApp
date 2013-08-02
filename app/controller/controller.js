Ext.define('CP.controller.controller', {
    extend: 'Ext.app.Controller',
	
	views:['login.login'],
	 
	 init: function() {
        this.control({
            'loginview button[action=connect]': {
                click: this.actionSignIn
            }
            
        });
    },
    actionSignIn: function(button) {
		
		//var but = Ext.getCmp('signin'); 
        var username = button.up('form').down('#username').getValue();
		var password = button.up('form').down('#password').getValue();
		var session = button.up('form').down('#save');
		//alert(username+"   "+password);
		var form = button.up('form').getForm();
		var sb = Ext.getCmp('form-statusbar');				
		//var log = Ext.getCmp("mainPortal");
		sb.setStatus({text:'connexion...',iconCls: 'x-status-busy' });
		//on applique un masque gris sur la fenêtre nommée login 
		if(form.isValid()){
			Ext.Ajax.request({
				params:{
					log:username,
					pass:password,
					sess:session,
					},
				url:'php/log_post.php',
				reset:false,

				failure: function(result, action){
					//L'objet JSON vas rechercher dans lire le résultat du POST et le décoder
					var obj = Ext.JSON.decode(action.response.responseText);
					//S'il s'agit d'une phrase générale on l'affiche(errors = type d'action ; reason : nom de l'action, on peut nommer cela comme on veut dans le formulaire post)
					var message = obj.errors.reason;		
					//si le message n'inclue pas un ID précis d'un champ de notre formulaire, on affiche simplement un message d'erreur général dans notre status bar, et non a droite du champ concerné
					if (message == undefined) message = obj.errors[0].msg;		
						
					sb.setStatus({		//On modifie le texte de notre status bar
						text:'Erreur : '+ message, 
						iconCls:'x-status-error',
						clear: true
					});
				},
				
				success: function(result, action){
					//Message de bienvenue
					var obj = Ext.JSON.decode(result.responseText);
					console.log(obj);
					var message = obj.success;		//on recherche le message à afficher
					var info = obj.msg; 
					if(message==false){
					sb.setStatus({
						text:'Authentification erronée ! '+ info, 
						iconCls:'x-status-error',
						clear: true
					});
					}
					else{
					sb.setStatus({
						text:'Authentification reussite ! ' + info, 
						iconCls:'x-status-valid',
						clear: true
					});
					window.location='http://localhost/CPriceApp/catalog.html';
					}
					//msgbox affichant le message de connexion, puis redirige l'utilisateur s'il clique sur ok
					//Ext.MessageBox.alert('Bienvenue', message, fct_inscription);
					
				}	
			
			});
		}
		else
		{		//Si le formulaire n'est pas valide, on change la phrase dans notre status bar
			sb.setStatus({
				text:'<b><font color="red">Error : invalid form !</font></b>', 
				iconCls:'',
				clear: true
			});
		}
    }
});
