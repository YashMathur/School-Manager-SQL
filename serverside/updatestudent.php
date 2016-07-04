<?php
	include('server.php');


	$a = $_GET['1'];
	$b = $_GET['2'];
	$c = $_GET['3'];
	$d = $_GET['4'];
	$e = $_GET['5'];//father
	$f = $_GET['6'];//mother
	$g = $_GET['7'];//contact1
	$h = $_GET['8'];//contact2
	$i = $_GET['9'];//address
	$j = $_GET['10'];//class
	$k = $_GET['11'];//section
	$l = $_GET['12'];//dob
	
	$sub = $_GET['s'];
	$length = $_GET['l'];
	
	$q = "UPDATE `students` SET `name` = '$c', `father` = '$e', `mother` = '$f', `contact1` = '$g', `contact2` = '$h', `address` = '$i', `class` = '$j', `section` = '$k', `dob` = '$l' WHERE `admnum` = '$b'";
	
	if ($result=mysqli_query($conn, $q)){
		echo "1";
	}else{
		echo "0";
	}
	
?>