<?php
	$upload_dir = "/var/www/CPriceApp/assets/UploadedCatalog/";
	//$idAbonnee=$_COOKIE['idAbonnee'];
	$idCatalog=htmlentities($_POST['deletedId'], ENT_QUOTES);
	$cataName = htmlentities($_POST['deletedName'], ENT_QUOTES);
	$dbConnectConfig = "my_sql.php";
	
	if (file_exists($dbConnectConfig))
		include($dbConnectConfig);
		$maclasse = new my_sql();
		$maclasse->query("DELETE FROM `catalog` WHERE `idCatalog` = '".$idCatalog."'");
		$absPath = "$upload_dir"."$cataName";
		unlink($absPath);
		echo "{success: true}";

?>
