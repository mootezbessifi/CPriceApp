<?php
session_start();		//On initialise les sessions

//if(isset($_POST['connexion']))		//S'il s'agit du POST du formulaire de connexion 
//{
   $username = htmlentities($_POST['log'], ENT_QUOTES);
   $pass = htmlentities($_POST['pass'], ENT_QUOTES);
   //$filename = $adrr."php/my_sql.php";	//Classe de connexion � la bdd --> plus s�curis�, pratique et simple
//if(isset($_SESSION['log']) && isset($_SESSION['pass'])){
   $filename = "my_sql.php";
   if (file_exists($filename)) 
		include($filename);

   $maclasse = new my_sql();
   $maclasse->query("SELECT * FROM commercial WHERE name='".$username."'");
   $maclasse->fetch_array();
   if($maclasse->num_rows() == 0)		//login non trouv�
   {
      //message d'erreur g�n�ral : on met la raison de l'erreur sans pr�ciser quel type de champ est a l'origine du probl�me
      die("{success: false, msg: 'Authentification echouee. Veuillez reessayer.' }");
   }
   else
   {
      if ($pass <> $maclasse->row['password'])		//pass incorrecte
      {
         //message d'erreur particulier car on sait quel champ est � l'origine du probl�me, et on note donc l'id
         die("{success: false, msg:'Votre mot de passe est incorrect'}");
      }
      elseif($maclasse->row['idAbonnee']==0)		//compte non activ�
      {
         die("{success: false,msg: 'Vous devez valider votre compte avant de pouvoir l'utiliser. }");
      }
      else
      {
         //On enregistre les info de l'utilisateur dans des cookies car elles ne peuvent pas �tre enregistr�e en tant que variable de session pour le moment
         $_SESSION['idAbonnee'] = $maclasse->row['idAbonnee'];
         $_SESSION['name'] = $maclasse->row['name'];
         $_SESSION['password'] = $maclasse->row['password'];
         $_SESSION['logged-in']=true;
         if (isset($_POST['sess']))		//si l'utilisateur veut conserver les cookies
         {
            setcookie("idAbonnee", $maclasse->row['idAbonnee'], time()+365*60*3600);
            setcookie("password", $maclasse->row['password'], time()+365*60*3600);
            setcookie("name", $maclasse->row['name'], time()+365*60*3600);
         }
         //On concat�ne le pr�nom et le nom de l'utilisateur pour le message d'accueil
         $msg = "Bienvenue ".$_SESSION['name']." ";
         die("{success: true, msg:'".$msg."'}");
         echo $msg;
         }
   }
   $maclasse.close();
//}
?>
