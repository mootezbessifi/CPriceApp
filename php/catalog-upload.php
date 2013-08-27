<?php
	session_start();
	if ( !isset($_SESSION['logged-in']) || $_SESSION['logged-in'] !== true) {
		//header('Location: login.php');
		$result="{\"success\":false}";
		echo $result;
		exit;
	}
	$upload_dir = "/var/www/CPriceApp/assets/UploadedCatalog";
	$idAbonnee=$_SESSION['idAbonnee'];
	$nameAbonnee=$_SESSION['name'];
	$nameCatalog=htmlentities($_POST['filename'], ENT_QUOTES);
	
	$dbConnectConfig = "my_sql.php";
	if (file_exists($dbConnectConfig))
		include($dbConnectConfig);

	if(isset($_FILES)){
		$file_tmp  = $_FILES['AddCatalog']['tmp_name'];
		//$file_name = $_FILES['AddCatalog']['name'];
		if(is_uploaded_file($file_tmp)) {
			if(move_uploaded_file($file_tmp, $upload_dir."/"."$nameAbonnee"."/"."$nameCatalog")){
				sleep(6);
				$maclasse = new my_sql();
				$maclasse->query("INSERT INTO `catalog` (`idAbonnee`,`nomCatalog`,`dateUploadCatalog`) VALUES ('".$idAbonnee."','".$nameCatalog."',CURDATE())");
				
				echo "{success: true}";
			} else {
				echo "{success: false}";
			}    
		} else {
			echo "{success: false}";
		}
	}

?>
