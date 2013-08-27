<?php

class my_sql{
	// déclaration et Initialisation des variables que l'on aura besoin (option explicite)
	var $db_id  = false;
	var $host   = '';
	var $dbname = '';
	var $login  = '';
	var $pass   = '';
    var $user   = '';

    var $res    = '';
	//Il s'agit du "dataset" (connexion + commande)
    var $row    = array();
	//Il s'agit du tableau où seront stockés les résultats de la requête sql
    var $num    = 0;

//constructeur de la classe
function my_sql(
$host    = 'localhost',
$user    = 'root',
$pass    = 'huckerman1990',       // string    Mot de passe
$dbname  = 'base_projet',    // string    Nom de la base de données
$connect = true      // boolean    Connexion lors de la création de l'objet
)
{
    $this->host   = (string)$host;
    $this->pass   = (string)$pass;
    $this->user   = (string)$user;
	$this->dbname = (string)$dbname;

	if ( (bool)$connect === true )
	{
		// Etablie la connexion à la base de données
		$this->connect();
	}
}

//Méthode de connection à la bdd
function connect(){
	if ( (bool)$this->db_id === false )
    {
        // Connexion au serveur MySQL
        $this->db_id = mysql_connect($this->host, $this->user, $this->pass);

		if ( $this->db_id )
		{
            // Selection de la base de données
            if ( ! mysql_select_db( $this->dbname ) )
            {
                // Fermeture de la connexion si la connexion à la base de données échoue
                $this->close();
            }

            return $this->db_id;
        }
        else
        {
            return false;
        }
    }
    else
    {
		return $this->db_id;
    }
} 

//Execute la requete SQl et enregistre le resultset dans les attributs
function query($query)
{
	$this->num = 0;
    $this->row = array();
    $this->res = mysql_query($query, $this->db_id );
    return $this->res;
}

// Ferme la connexion si celle-ci est active
function close(){
    if ( $this->db_id )
    {
        if ( $this->res )
            mysql_free_result( $this->res );
            return mysql_close( $this->db_id );
    }
    else
    {
        return false;
    }
}

//Fonction qui lit la requete SQL et l'enregistre dans un datarow
function fetch_array($res = false)
{
    if ( (bool)$res === false )
	
    $res = $this->res;
    $this->row = mysql_fetch_array( $res, MYSQL_ASSOC );
    return $this->row;
}

//Méthode qui compte le nombre de lignes retournées par la requete SQL
function num_rows($res = false)
{
    if ( (bool)$res === false )

    $res = $this->res;
    $this->num = mysql_num_rows( $res );
	return $this->num;
	} 

//Méthode qui retourne l'id qui vient d'être enregistré par la requete INSERT INTO
function next_id(){
	$this->res = mysql_insert_id( $this->db_id );
	return $this->res;
}

} //fin de la classe
?>
