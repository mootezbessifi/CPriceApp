<?php
	//$userId=$_COOKIE['idAbonnee'];
	$filename = "my_sql.php";
	if (file_exists($filename)) 
	include($filename);
	
	$maclasse = new my_sql();
	$maclasse->query("SELECT com.name as marchant,sum(cat.nbConsult) as partConsult FROM catalog cat,commercial com where cat.idAbonnee=com.idAbonnee group by cat.idAbonnee");
	$count=$maclasse->num_rows();
	
	$count=$maclasse->num_rows();
	$sum=0;
	while($data[]=$maclasse->fetch_array()){
		$sum=$sum+$maclasse->row['partConsult'];
		}
		unset($data[$maclasse->num_rows()]);
	foreach($data as $row){
		$percentage[] = round($row['partConsult']*100/$sum,2);		
		}
	$finish = "{\"success\":true,\"data\":[";
	$i=0;
	$cote="\"";
	foreach($data as $row1){	
			$finish=$finish."{\"marchant\":\"".$row1['marchant']."\",\"percentage\":\"".$percentage[$i]."\"}";
			$i++;
			if($i<$count)
			$finish=$finish.",";
	}
	$finish=$finish."]}";
	die($finish); 

?>
