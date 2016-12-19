<?php


<?php 
	$nombe = $_GET["nombre"];
	$edad = $_GET["edad"];
	
	$array = array(
	 	'nombre' => $nombre,
	  'edad' => $edad;)
		);
 
echo json_encode( $array );


?>