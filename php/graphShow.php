<?php
	$dbConnectConfig = "my_sql.php";
		$idAbonnee=$_COOKIE['idAbonnee'];	
	if (file_exists($dbConnectConfig))
		include($dbConnectConfig);
	
	$maclasse = new my_sql();
	$sql="SELECT cat.nomCategorie AS name, sum( pro.nbAchat ) AS somme
		FROM produit pro, prix, categories cat
		WHERE pro.iidProduit = prix.iidProduit
		AND cat.idCategorie = pro.idCategorie
		AND prix.idAbonnee ='".$idAbonnee."'
		GROUP BY (
		pro.idCategorie
		)";
	$maclasse->query($sql);
	//$data=array();
	$count=$maclasse->num_rows();
	$sum=0;
	while($data[]=$maclasse->fetch_array()){
		$sum=$sum+$maclasse->row['somme'];
		}
		unset($data[$maclasse->num_rows()]);
	foreach($data as $row){
		$percentage[] = round($row['somme']*100/$sum,2);		
		}
	$finish = "{\"success\":true,\"data\":[";
	$i=0;
	$cote="\"";
	foreach($data as $row1){	
			$finish=$finish."{\"category\":\"".$row1['name']."\",\"percentage\":\"".$percentage[$i]."\"}";
			$i++;
			if($i<$count)
			$finish=$finish.",";
	}
	$finish=$finish."]}";
	die($finish); 
	?>
