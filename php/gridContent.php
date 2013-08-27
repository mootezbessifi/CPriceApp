<?php
	session_start();
	//echo $_SESSION['logged-in'];
	if ( !isset($_SESSION['logged-in']) || $_SESSION['logged-in'] !== true) {
		//header('Location: login.php');
		echo $_SESSION['logged-in'];
		$result="{\"success\":false}";
		echo $result;
		exit;
	}
	$userId=$_SESSION['idAbonnee'];
	//$username = htmlentities('carrefour'/*$_POST['log']*/, ENT_QUOTES);
	$filename = "my_sql.php";
	if (file_exists($filename)) 
	include($filename);
   
    $maclasse = new my_sql();
	$maclasse->query("SELECT * FROM catalog WHERE idAbonnee='".$userId."'");
	$count=$maclasse->num_rows();
	while($count){
		$dataArray[] = $maclasse->fetch_array();
		$count--;
	}
	$result = array( 'success'=>true, 'dataGrid'=>$dataArray);
    echo( json_encode($result));
?>
