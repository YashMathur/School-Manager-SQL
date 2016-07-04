<?php
	include('server.php');


	$a = $_GET['1'];
	$b = $_GET['2'];
	$c = $_GET['3'];
	$d = $_GET['4'];
	$e = $_GET['5'];
	$f = $_GET['6'];
	$g = $_GET['7'];
	$h = $_GET['8'];
	$i = $_GET['9'];
	$j = $_GET['10'];
	$k = $_GET['11'];
	$l = $_GET['12'];
	
	$sub = $_GET['s'];
	$length = $_GET['l'];

	$q = "INSERT INTO  `952224`.`students` (`id` ,`admnum`, `name` ,`lname` ,`father` ,`mother` ,`contact1` ,`contact2` ,`address` ,`class` ,`section` ,`dob`)
	VALUES (NULL ,  '".$a."', '".$c."', '".$d."', '".$e."', '".$f."', '".$g."', '".$h."', '".$i."', '".$j."', '".$k."', '".$l."');";

	$terms = array("FA1", "FA2", "SA1", "FA3", "FA4", "SA2");

	for($ii=0;$ii<6;++$ii){
		for($jj=0;$jj<$length;++$jj){
			$qq = "INSERT INTO `marks` VALUES('$a', '$sub[$jj]', '-1', '100', '$terms[$ii]', '', '$j');";
			mysqli_query($conn, $qq);
		}
	}

	if ($result=mysqli_query($conn, $q)){
		echo "1";
	}else{
		echo "0";
	}

?>