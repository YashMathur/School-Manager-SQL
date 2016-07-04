<?php
	include('server.php');

	
	$a = $_GET['1'];//admnum
	$b = $_GET['2'];//marks
	$c = $_GET['3'];//Exam
	$d = $_GET['4'];//class
	$e = $_GET['5'];//subject
	
	$q = "UPDATE `marks` SET `marks` = '$b' WHERE (`student` = '$a' and `subject` = '$e' and `exam` = '$c' and `class` = '$d')";
	
	if($res = mysqli_query($conn, $q)){
		echo $b;
	}
	else{
		echo "-2";
	}
	
?>