<?php
	include('server.php');


mysqli_select_db($conn, "952224");

$a = $_GET['1'];//name
$b = $_GET['2'];//login
$c = $_GET['3'];//pass
$d = $_GET['4'];//subj
$e = $_GET['5'];//class teacher
$f = $_GET['6'];//sub teacher
$size = $_GET['s'];//number of classes as subject teacher
$class = [];
$sec = [];


$q = "INSERT INTO  `952224`.`teachers` (`id` , `login`, `name` ,`subject` ,`class`) VALUES (NULL ,  '$b', '$a', '$d', '$e');";
mysqli_query($conn, $q);
$id = mysqli_insert_id($conn);
$q2 = "INSERT INTO `login` VALUES(NULL, '$b', '$c')";
mysqli_query($conn, $q2);

for($i = 0;$i<$size;++$i){
	$cc = substr($f[$i], 0, strpos($f[$i], " "));
	$ss = substr($f[$i], strpos($f[$i], " ")+1);
	$q3 = "INSERT INTO `teacherclass` VALUES('$id', '$cc', '$ss', '$d')";
	mysqli_query($conn, $q3);
	
}
echo "1";
?>	