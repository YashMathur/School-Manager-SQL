<?php
	include('server.php');
	
	$a = $_GET['1'];

	$q1 = "select * from `teachers` where (`login` = '".$a."');";
	$class = "";
	$classo="";
	$seco="";
	$q2 = "";
	$subject = null;
	$teacher = null;
	if ($result1=mysqli_query($conn, $q1)){
		if(mysqli_num_rows($result1) != 0){
			while($rw = mysqli_fetch_assoc($result1)){
				$q2 = "select * from `students` where (concat(`class`, ' ', `section`) = '".$rw['class']."') order by `name`";
				$class = $rw['class'];
				$subject = $rw['subject'];
				$teacher = $rw['id'];
			}
			if ($result2=mysqli_query($conn, $q2)){
				$roll = 1; 
				$html1 = "<div id='classadd'><div style='overflow:auto'>";
				$html1 .= "<div style='float:left'><span class='class-title'>".$class."</span><br>Strength: ".mysqli_num_rows($result2)."<br>";
				$html1 .= "<table id='students' class='stud'><tr><th><input type='checkbox' id='selall' data-class='$class'/></th><th>Roll</th><th class='name'>Name</th></tr>";
				while($row = mysqli_fetch_assoc($result2)){
					$html1 .= "<tr><td><input type='checkbox' id='class$class' data-name='".$row['name']."' data-admnum='".$row['admnum']."' data-fname='".$row['father']."' data-mname='".$row['mother']."' data-dob='".$row['dob']."' data-class='".$row['class']."' data-section='".$row['section']."' data-contact1='".$row['contact1']."' data-contact2='".$row['contact2']."' data-address='".$row['address']."' /></td><td>".$roll."</td><td class='name rep' data-name='".$row['name']."' data-admnum='".$row['admnum']."' data-fname='".$row['father']."' data-mname='".$row['mother']."' data-dob='".$row['dob']."' data-class='".$row['class']."' data-section='".$row['section']."' data-contact1='".$row['contact1']."' data-contact2='".$row['contact2']."' data-address='".$row['address']."'>".$row['name']." ".$row['lname']."</td></tr>";
					$roll++;
					$classo=$row['class'];
					$seco=$row['section'];
				}
				
				$html1 .= "</table></div>";
				echo $html1;
			}
		}
		else{
			echo "0 rows";
		}
	}
	else{
		echo "Incorrect query";
	}
	$terms = array("FA1", "FA2", "SA1", "FA3", "FA4", "SA2");
	$subs = array("English", "Maths", "Science", "Social Studies", "History", "Civics", "Geography", "Economics", "Physics", "Chemistry",
              "Business Studies", "Accounts", "Hindi", "French", "German", "Kannada", "PE", "Computer Science", "Biology", "EVS");
	
	
	$qq1 = "SELECT teachers.subject AS sub, name, teachers.class AS tc FROM `teacherclass`, `teachers` WHERE(concat(teacherclass.class, ' ', teacherclass.section) = '$class') ";
	if ($result1=mysqli_query($conn, $qq1)){
		$html3 = "<div style='float:right'><span class='class-title'>$class Teachers</span><br><br><table class='stud'><tr><th>Name</th><th>Subject</th></tr>";
		while($rw = mysqli_fetch_assoc($result1)){
			$in = $rw['sub'];
			$html3 .= "<tr><td>".$rw['name']."</td><td>".$subs[$in]."</td></tr>";
		}
		$html3 .= "</table></div></div><div style='margin-top: 3px;'><button class='control' id='add' data-class='$class'>Add</button> <button class='control'>Remove</button> <button class='control' id='edit' data-class='$class'>Edit</button> <button class='control' id='rep' data-class='$classo' data-section='$seco'>Report Card</button></div></div><hr>";
	}
	
	echo $html3;
	
	
	$qu1 = "SELECT * FROM `teacherclass` WHERE(`teacher` = '$teacher');";
	$html2 = null;
	if($result1 = mysqli_query($conn, $qu1)){
		while($rw=mysqli_fetch_assoc($result1)){
			$class = $rw['class'];
			$section = $rw['section'];
			$subject = $rw['subject'];
			
			$qu2 = "SELECT * FROM `students` WHERE(`class` = '$class' AND `section` = '$section') ORDER BY `name`";	
			if($result2 = mysqli_query($conn, $qu2)){
				$roll = 1;
				$html2 .= "<h2>$class $section</h2><table id='students' class='stud'><tr><th><input type='checkbox' /></th><th>Roll</th><th class='name'>Name</th>";
				for($i=0;$i<6;$i++){
					$html2 .= "<th>$terms[$i]</th>";
				}
				$html2 .= "</tr>";
				while($res22 = mysqli_fetch_assoc($result2)){
					$html2 .= "<tr><td><input type='checkbox' /></td><td>".$roll."</td><td class='name'>".$res22['name']." ".$res22['lname']."</td>";
					$roll++;
					$student = $res22['admnum'];
					for($i=0;$i<6;$i++){
						$qu22 = "SELECT * FROM `marks` WHERE(`student` = '$student' and `subject` = '$subject' and `exam` = '$terms[$i]' and `class` = '$class')";
						$res2 = mysqli_query($conn, $qu22);
						while($row2 = mysqli_fetch_assoc($res2)){
							$marks = $row2['marks'];
							if($marks==-1){
								$marks="N/A";
							}
							$html2 .= "<td data-edit='0' data-subject='$subject' data-exam='$terms[$i]' data-cl='$class' data-student='$student' id='marks'>".$marks."</td>";
						}
					}
					$html2 .= "</tr>";
				}
				$html2 .= "</table>";
			}	
		}
		echo $html2;
	}

?>