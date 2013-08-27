<?php
session_start();
	$name = htmlentities($_POST['name'], ENT_QUOTES);
	$email = htmlentities($_POST['email'], ENT_QUOTES);
	$dest="mootez.bessifi@gmail.com";
	$subject="password Forgotten from ";
	$message=" has forgot his password !";
	
	$dbConnectConfig = "my_sql.php";
	if (file_exists($dbConnectConfig))
		include($dbConnectConfig);
	
	$maclasse = new my_sql();
	$maclasse->query("SELECT * FROM commercial WHERE name='".$name."' and email='".$email."'");
	$maclasse->fetch_array();
	if($maclasse->num_rows() == 0)
	{
		die("{success: false}");
	}
	else
	{
		if(mail($dest,$subject,$message))
			die("{success: true}");
	}

?>
