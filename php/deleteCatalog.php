<?php
	$upload_dir = "/var/www/CPriceApp/assets/UploadedCatalog/";
	//$idAbonnee=$_COOKIE['idAbonnee'];
	$idCatalog=htmlentities($_POST['deletedId'], ENT_QUOTES);
	$cataName = htmlentities($_POST['deletedName'], ENT_QUOTES);
	$nameAbonnee=$_COOKIE['name'];
	$dbConnectConfig = "my_sql.php";
	
	if (file_exists($dbConnectConfig))
		include($dbConnectConfig);
		$maclasse = new my_sql();
		$maclasse->query("DELETE FROM `catalog` WHERE `idCatalog` = '".$idCatalog."'");
		$absPath = "$upload_dir"."$nameAbonnee"."/"."$cataName";
		unlink($absPath);
		echo "{success: true}";

?>
