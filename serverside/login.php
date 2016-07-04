<?php
	include('server.php');


$a = $_POST['1'];
$b = $_POST['2'];

$q = "select * from `login` where (`user` = '".$a."' AND `pass` = '".$b."')";

if ($result=mysqli_query($conn, $q)){
	if(mysqli_num_rows($result) == 1){
           echo "1";
    }
	else{
		echo "0";
	}	
}else{
	echo "-1";
}
?>