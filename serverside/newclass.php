<?php
	include('server.php');


$a = $_GET['1'];
$b = $_GET['2'];

$q = "INSERT INTO  `952224`.`classes` (`id` ,`class` ,`section`) VALUES (NULL ,  '".$a."', '".$b."');";

if ($result=mysqli_query($conn, $q)){
	echo "1";
}else{
	echo "0";
}

?>		