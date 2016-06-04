//  ******ADMIN SETTINGS********
//  USERNAME: ADMIN
//  PASSWORD: TBD

//URLs

urlLogin = "../login.php";
urlNewStudent = "../newstudent.php";
urlNewTeacher = "../newteacher.php";
urlUpdateStudent = "../updatestudent.php";
urlUpdateMarks = "../updatemarks.php";
urlNewClass = "../newclass.php";
urlData = "../data.php";
urlReport = "../report.php";
urlGetReport = "../getreport.php";
urlLoad = "../load.php";




var remote = require('remote');

document.getElementById("close").addEventListener("click", function (e) {
       var window = remote.getCurrentWindow();
       window.close();
});
document.getElementById("minimize").addEventListener("click", function (e) {
       var window = remote.getCurrentWindow();
       window.minimize();
});

function loadReport(cl, sec){
  var op = null;
  switch(cl){
    case 1:
    case 2:
    case 3:
      op =  "<table>"+
            "<tr><th rowspan=2>Language 1</th><th colspan=2>Term 1</th><th colspan=2>Term 2</th></tr>"+
            "<tr><th>Description</th><th>Grade</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Reading</td><td><textarea id='l1t1r' cols=30 rows=3></textarea></td><td><input type=text id='l1t1r' /></td><td><textarea id='l1t2r' cols=30 rows=3></textarea></td><td><input type=text id='l1t2r' /></td></tr>"+
            "<tr><td>Writing</td><td><textarea id='l1t1w' cols=30 rows=3></textarea></td><td><input type=text id='l1t1w' /></td><td><textarea id='l1t2w' cols=30 rows=3></textarea></td><td><input type=text id='l1t2w' /></td></tr>"+
            "<tr><td>Speaking</td><td><textarea id='l1t1s' cols=30 rows=3></textarea></td><td><input type=text id='l1t1s' /></td><td><textarea id='l1t2s' cols=30 rows=3></textarea></td><td><input type=text id='l1t2s' /></td></tr>"+
            "<tr><td>Listening</td><td><textarea id='l1t1l' cols=30 rows=3></textarea></td><td><input type=text id='l1t1l' /></td><td><textarea id='l1t2l' cols=30 rows=3></textarea></td><td><input type=text id='l1t2l' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th rowspan=2>Language 2</th><th colspan=2>Term 1</th><th colspan=2>Term 2</th></tr>"+
            "<tr><th>Description</th><th>Grade</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Reading</td><td><textarea id='l2t1r' cols=30 rows=3></textarea></td><td><input type=text id='l2t1r' /></td><td><textarea id='l2t2r' cols=30 rows=3></textarea></td><td><input type=text id='l2t2r' /></td></tr>"+
            "<tr><td>Writing</td><td><textarea id='l2t1w' cols=30 rows=3></textarea></td><td><input type=text id='l2t1w' /></td><td><textarea id='l2t2w' cols=30 rows=3></textarea></td><td><input type=text id='l2t2w' /></td></tr>"+
            "<tr><td>Speaking</td><td><textarea id='l2t1s' cols=30 rows=3></textarea></td><td><input type=text id='l2t1s' /></td><td><textarea id='l2t2s' cols=30 rows=3></textarea></td><td><input type=text id='l2t2s' /></td></tr>"+
            "<tr><td>Listening</td><td><textarea id='l2t1l' cols=30 rows=3></textarea></td><td><input type=text id='l2t1l' /></td><td><textarea id='l2t2l' cols=30 rows=3></textarea></td><td><input type=text id='l2t2l' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th rowspan=2>Mathematics</th><th colspan=2>Term 1</th><th colspan=2>Term 2</th></tr>"+
            "<tr><th>Description</th><th>Grade</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Mental Ability</td><td><textarea id='mt1m' cols=30 rows=3></textarea></td><td><input type=text id='mt1m' /></td><td><textarea id='mt2m' cols=30 rows=3></textarea></td><td><input type=text id='mt2m' /></td></tr>"+
            "<tr><td>Activity</td><td><textarea id='mt1a' cols=30 rows=3></textarea></td><td></td><input type=text id='mt1a' /><td><textarea id='mt2a' cols=30 rows=3></textarea></td><td><input type=text id='mt2a' /></td></tr>"+
            "<tr><td>Tables</td><td><textarea id='mt1t' cols=30 rows=3></textarea></td><td><input type=text id='mt1t' /></td><td><textarea id='mt2t' cols=30 rows=3></textarea></td><td><input type=text id='mt2t' /></td></tr>"+
            "<tr><td>Clarity of concepts</td><td><textarea id='mt1c' cols=30 rows=3></textarea></td><td><input type=text id='mt1c' /></td><td><textarea id='mt2c' cols=30 rows=3></textarea></td><td><input type=text id='mt2c' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th rowspan=2>EVS</th><th colspan=2>Term 1</th><th colspan=2>Term 2</th></tr>"+
            "<tr><th>Description</th><th>Grade</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Environmental Sensitivity</td><td><textarea id='et1e' cols=30 rows=3></textarea></td><td><input type=text id='et1e' /></td><td><textarea id='et2e' cols=30 rows=3></textarea></td><td><input type=text id='et1e' /></td></tr>"+
            "<tr><td>Activity/Project</td><td><textarea id='et1a' cols=30 rows=3></textarea></td><td><input type=text id='et1a' /></td><td><textarea id='et2a' cols=30 rows=3></textarea></td><td><input type=text id='et1a' /></td></tr>"+
            "<tr><td>Group Discussion</td><td><textarea id='et1g' cols=30 rows=3></textarea></td><td><input type=text id='et1g' /></td><td><textarea id='et2g' cols=30 rows=3></textarea></td><td><input type=text id='et1g' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th rowspan=2>Computer Science</th><th colspan=2>Term 1</th><th colspan=2>Term 2</th></tr>"+
            "<tr><th>Description</th><th>Grade</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Skills</td><td><textarea id='ct1s' cols=30 rows=3></textarea></td><td><input type=text id='ct1s' /></td><td><textarea id='ct2s' cols=30 rows=3></textarea></td><td><input type=text id='ct2s' /></td></tr>"+
            "<tr><td>Aptitude</td><td><textarea id='ct1a' cols=30 rows=3></textarea></td><td><input type=text id='ct1a' /></td><td><textarea id='ct2a' cols=30 rows=3></textarea></td><td><input type=text id='ct2a' /></td></tr>"+
            "</table>";
    case 4:
      op =  "<table>"+
            "<tr><th rowspan=2>Language 1</th><th colspan=2>Term 1</th><th colspan=2>Term 2</th></tr>"+
            "<tr><th>Description</th><th>Grade</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Reading</td><td><textarea id='l1t1r' cols=30 rows=3></textarea></td><td><input type=text id='l1t1r' /></td><td><textarea id='l1t2r' cols=30 rows=3></textarea></td><td><input type=text id='l1t2r' /></td></tr>"+
            "<tr><td>Writing</td><td><textarea id='l1t1w' cols=30 rows=3></textarea></td><td><input type=text id='l1t1w' /></td><td><textarea id='l1t2w' cols=30 rows=3></textarea></td><td><input type=text id='l1t2w' /></td></tr>"+
            "<tr><td>Speaking</td><td><textarea id='l1t1s' cols=30 rows=3></textarea></td><td><input type=text id='l1t1s' /></td><td><textarea id='l1t2s' cols=30 rows=3></textarea></td><td><input type=text id='l1t2s' /></td></tr>"+
            "<tr><td>Listening</td><td><textarea id='l1t1l' cols=30 rows=3></textarea></td><td><input type=text id='l1t1l' /></td><td><textarea id='l1t2l' cols=30 rows=3></textarea></td><td><input type=text id='l1t2l' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th rowspan=2>Language 2</th><th colspan=2>Term 1</th><th colspan=2>Term 2</th></tr>"+
            "<tr><th>Description</th><th>Grade</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Reading</td><td><textarea id='l2t1r' cols=30 rows=3></textarea></td><td><input type=text id='l2t1r' /></td><td><textarea id='l2t2r' cols=30 rows=3></textarea></td><td><input type=text id='l2t2r' /></td></tr>"+
            "<tr><td>Writing</td><td><textarea id='l2t1w' cols=30 rows=3></textarea></td><td><input type=text id='l2t1w' /></td><td><textarea id='l2t2w' cols=30 rows=3></textarea></td><td><input type=text id='l2t2w' /></td></tr>"+
            "<tr><td>Speaking</td><td><textarea id='l2t1s' cols=30 rows=3></textarea></td><td><input type=text id='l2t1s' /></td><td><textarea id='l2t2s' cols=30 rows=3></textarea></td><td><input type=text id='l2t2s' /></td></tr>"+
            "<tr><td>Listening</td><td><textarea id='l2t1l' cols=30 rows=3></textarea></td><td><input type=text id='l2t1l' /></td><td><textarea id='l2t2l' cols=30 rows=3></textarea></td><td><input type=text id='l2t2l' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th rowspan=2>Mathematics</th><th colspan=2>Term 1</th><th colspan=2>Term 2</th></tr>"+
            "<tr><th>Description</th><th>Grade</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Mental Ability</td><td><textarea id='mt1m' cols=30 rows=3></textarea></td><td><input type=text id='mt1m' /></td><td><textarea id='mt2m' cols=30 rows=3></textarea></td><td><input type=text id='mt2m' /></td></tr>"+
            "<tr><td>Written Work</td><td><textarea id='mt1w' cols=30 rows=3></textarea></td><td></td><input type=text id='mt1w' /><td><textarea id='mt2w' cols=30 rows=3></textarea></td><td><input type=text id='mt2w' /></td></tr>"+
            "<tr><td>Clarity of concepts</td><td><textarea id='mt1c' cols=30 rows=3></textarea></td><td><input type=text id='mt1c' /></td><td><textarea id='mt2c' cols=30 rows=3></textarea></td><td><input type=text id='mt2c' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th rowspan=2>EVS</th><th colspan=2>Term 1</th><th colspan=2>Term 2</th></tr>"+
            "<tr><th>Description</th><th>Grade</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Concept</td><td><textarea id='et1c' cols=30 rows=3></textarea></td><td><input type=text id='et1c' /></td><td><textarea id='et2c' cols=30 rows=3></textarea></td><td><input type=text id='et1c' /></td></tr>"+
            "<tr><td>Activity/Project</td><td><textarea id='et1a' cols=30 rows=3></textarea></td><td><input type=text id='et1a' /></td><td><textarea id='et2a' cols=30 rows=3></textarea></td><td><input type=text id='et1a' /></td></tr>"+
            "<tr><td>Group Discussion</td><td><textarea id='et1g' cols=30 rows=3></textarea></td><td><input type=text id='et1g' /></td><td><textarea id='et2g' cols=30 rows=3></textarea></td><td><input type=text id='et1g' /></td></tr>"+
            "<tr><td>Written Work</td><td><textarea id='et1w' cols=30 rows=3></textarea></td><td><input type=text id='et1w' /></td><td><textarea id='et2w' cols=30 rows=3></textarea></td><td><input type=text id='et1w' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th rowspan=2>Computer Science</th><th colspan=2>Term 1</th><th colspan=2>Term 2</th></tr>"+
            "<tr><th>Description</th><th>Grade</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Skills</td><td><textarea id='ct1s' cols=30 rows=3></textarea></td><td><input type=text id='ct1s' /></td><td><textarea id='ct2s' cols=30 rows=3></textarea></td><td><input type=text id='ct2s' /></td></tr>"+
            "<tr><td>Aptitude</td><td><textarea id='ct1a' cols=30 rows=3></textarea></td><td><input type=text id='ct1a' /></td><td><textarea id='ct2a' cols=30 rows=3></textarea></td><td><input type=text id='ct2a' /></td></tr>"+
            "</table>";
    case 5:
      op =  "<table>"+
            "<tr><th rowspan=2>Language 1</th><th colspan=2>Term 1</th><th colspan=2>Term 2</th></tr>"+
            "<tr><th>Description</th><th>Grade</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Reading</td><td><textarea id='l1t1r' cols=30 rows=3></textarea></td><td><input type=text id='l1t1r' /></td><td><textarea id='l1t2r' cols=30 rows=3></textarea></td><td><input type=text id='l1t2r' /></td></tr>"+
            "<tr><td>Writing</td><td><textarea id='l1t1w' cols=30 rows=3></textarea></td><td><input type=text id='l1t1w' /></td><td><textarea id='l1t2w' cols=30 rows=3></textarea></td><td><input type=text id='l1t2w' /></td></tr>"+
            "<tr><td>Speaking</td><td><textarea id='l1t1s' cols=30 rows=3></textarea></td><td><input type=text id='l1t1s' /></td><td><textarea id='l1t2s' cols=30 rows=3></textarea></td><td><input type=text id='l1t2s' /></td></tr>"+
            "<tr><td>Listening</td><td><textarea id='l1t1l' cols=30 rows=3></textarea></td><td><input type=text id='l1t1l' /></td><td><textarea id='l1t2l' cols=30 rows=3></textarea></td><td><input type=text id='l1t2l' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th rowspan=2>Language 2</th><th colspan=2>Term 1</th><th colspan=2>Term 2</th></tr>"+
            "<tr><th>Description</th><th>Grade</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Reading</td><td><textarea id='l2t1r' cols=30 rows=3></textarea></td><td><input type=text id='l2t1r' /></td><td><textarea id='l2t2r' cols=30 rows=3></textarea></td><td><input type=text id='l2t2r' /></td></tr>"+
            "<tr><td>Writing</td><td><textarea id='l2t1w' cols=30 rows=3></textarea></td><td><input type=text id='l2t1w' /></td><td><textarea id='l2t2w' cols=30 rows=3></textarea></td><td><input type=text id='l2t2w' /></td></tr>"+
            "<tr><td>Speaking</td><td><textarea id='l2t1s' cols=30 rows=3></textarea></td><td><input type=text id='l2t1s' /></td><td><textarea id='l2t2s' cols=30 rows=3></textarea></td><td><input type=text id='l2t2s' /></td></tr>"+
            "<tr><td>Listening</td><td><textarea id='l2t1l' cols=30 rows=3></textarea></td><td><input type=text id='l2t1l' /></td><td><textarea id='l2t2l' cols=30 rows=3></textarea></td><td><input type=text id='l2t2l' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th rowspan=2>Language 2</th><th colspan=2>Term 1</th><th colspan=2>Term 2</th></tr>"+
            "<tr><th>Description</th><th>Grade</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Reading</td><td><textarea id='l3t1r' cols=30 rows=3></textarea></td><td><input type=text id='l3t1r' /></td><td><textarea id='l3t2r' cols=30 rows=3></textarea></td><td><input type=text id='l3t2r' /></td></tr>"+
            "<tr><td>Writing</td><td><textarea id='l3t1w' cols=30 rows=3></textarea></td><td><input type=text id='l3t1w' /></td><td><textarea id='l3t2w' cols=30 rows=3></textarea></td><td><input type=text id='l3t2w' /></td></tr>"+
            "<tr><td>Speaking</td><td><textarea id='l3t1s' cols=30 rows=3></textarea></td><td><input type=text id='l3t1s' /></td><td><textarea id='l3t2s' cols=30 rows=3></textarea></td><td><input type=text id='l3t2s' /></td></tr>"+
            "<tr><td>Listening</td><td><textarea id='l3t1l' cols=30 rows=3></textarea></td><td><input type=text id='l3t1l' /></td><td><textarea id='l3t2l' cols=30 rows=3></textarea></td><td><input type=text id='l3t2l' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th rowspan=2>Mathematics</th><th colspan=2>Term 1</th><th colspan=2>Term 2</th></tr>"+
            "<tr><th>Description</th><th>Grade</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Mental Ability</td><td><textarea id='mt1m' cols=30 rows=3></textarea></td><td><input type=text id='mt1m' /></td><td><textarea id='mt2m' cols=30 rows=3></textarea></td><td><input type=text id='mt2m' /></td></tr>"+
            "<tr><td>Written Work</td><td><textarea id='mt1w' cols=30 rows=3></textarea></td><td></td><input type=text id='mt1w' /><td><textarea id='mt2w' cols=30 rows=3></textarea></td><td><input type=text id='mt2w' /></td></tr>"+
            "<tr><td>Clarity of concepts</td><td><textarea id='mt1c' cols=30 rows=3></textarea></td><td><input type=text id='mt1c' /></td><td><textarea id='mt2c' cols=30 rows=3></textarea></td><td><input type=text id='mt2c' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th rowspan=2>EVS</th><th colspan=2>Term 1</th><th colspan=2>Term 2</th></tr>"+
            "<tr><th>Description</th><th>Grade</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Concept</td><td><textarea id='et1c' cols=30 rows=3></textarea></td><td><input type=text id='et1c' /></td><td><textarea id='et2c' cols=30 rows=3></textarea></td><td><input type=text id='et1c' /></td></tr>"+
            "<tr><td>Activity/Project</td><td><textarea id='et1a' cols=30 rows=3></textarea></td><td><input type=text id='et1a' /></td><td><textarea id='et2a' cols=30 rows=3></textarea></td><td><input type=text id='et1a' /></td></tr>"+
            "<tr><td>Group Discussion</td><td><textarea id='et1g' cols=30 rows=3></textarea></td><td><input type=text id='et1g' /></td><td><textarea id='et2g' cols=30 rows=3></textarea></td><td><input type=text id='et1g' /></td></tr>"+
            "<tr><td>Written Work</td><td><textarea id='et1w' cols=30 rows=3></textarea></td><td><input type=text id='et1w' /></td><td><textarea id='et2w' cols=30 rows=3></textarea></td><td><input type=text id='et1w' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th rowspan=2>Computer Science</th><th colspan=2>Term 1</th><th colspan=2>Term 2</th></tr>"+
            "<tr><th>Description</th><th>Grade</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Skills</td><td><textarea id='ct1s' cols=30 rows=3></textarea></td><td><input type=text id='ct1s' /></td><td><textarea id='ct2s' cols=30 rows=3></textarea></td><td><input type=text id='ct2s' /></td></tr>"+
            "<tr><td>Aptitude</td><td><textarea id='ct1a' cols=30 rows=3></textarea></td><td><input type=text id='ct1a' /></td><td><textarea id='ct2a' cols=30 rows=3></textarea></td><td><input type=text id='ct2a' /></td></tr>"+
            "</table>";
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      op =  "<table>"+
            "<tr><th>Life Skills</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Self Awareness</td><td><textarea cols=30 rows=3 id='lsd'></textarea></td><td><input type=text id='lsg' /></td></tr>"+
            "<tr><td>Problem Solving</td><td><textarea cols=30 rows=3 id='lpd'></textarea></td><td><input type=text id='lpg' /></td></tr>"+
            "<tr><td>Decision Making</td><td><textarea cols=30 rows=3 id='ldd'></textarea></td><td><input type=text id='ldg' /></td></tr>"+
            "<tr><td>Critical Thinking</td><td><textarea cols=30 rows=3 id='lctd'></textarea></td><td><input type=text id='lctg' /></td></tr>"+
            "<tr><td>Creative Thinking</td><td><textarea cols=30 rows=3 id='lcrd'></textarea></td><td><input type=text id='lcrg' /></td></tr>"+
            "<tr><td>Interpersonal Relationships</td><td><textarea cols=30 rows=3 id='lid'></textarea></td><td><input type=text id='lig' /></td></tr>"+
            "<tr><td>Effective Communication</td><td><textarea cols=30 rows=3 id='lecd'></textarea></td><td><input type=text id='lecg' /></td></tr>"+
            "<tr><td>Empathy</td><td><textarea cols=30 rows=3 id='lemd'></textarea></td><td><input type=text id='lemg' /></td></tr>"+
            "<tr><td>Managing Emotions</td><td><textarea cols=30 rows=3 id='lmd'></textarea></td><td><input type=text id='lmg' /></td></tr>"+
            "<tr><td>Dealing with Stress</td><td><textarea cols=30 rows=3 id='ldd'></textarea></td><td><input type=text id='ldg' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th>Work Education</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Computer Operations & Maintenance</td><td><textarea cols=30 rows=3 id='wcd'></textarea></td><td><input type=text id='wcg' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th>Visual & Performing Arts</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Music/Dance/Art & Craft</td><td><textarea cols=30 rows=3 id='vmd'></textarea></td><td><input type=text id='vmg' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th>Attitude & Values</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Attitude Towards School Mates</td><td><textarea cols=30 rows=3 id='amd'></textarea></td><td><input type=text id='amg' /></td></tr>"+
            "<tr><td>Attitude Towards School Programme & Environment</td><td><textarea cols=30 rows=3 id='aed'></textarea></td><td><input type=text id='aeg' /></td></tr>"+
            "<tr><td>Value Systems</td><td><textarea cols=30 rows=3 id='avd'></textarea></td><td><input type=text id='avg' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th>Co-Scholastic Activities</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Literary Skills</td><td><textarea cols=30 rows=3 id='cld'></textarea></td><td><input type=text id='clg' /></td></tr>"+
            "<tr><td>Scientific Skills</td><td><textarea cols=30 rows=3 id='csd'></textarea></td><td><input type=text id='csg' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th>Health & Physical Education</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Sports</td><td><textarea cols=30 rows=3 id='hsd'></textarea></td><td><input type=text id='hsg' /></td></tr>"+
            "<tr><td>Yoga</td><td><textarea cols=30 rows=3 id='hyd'></textarea></td><td><input type=text id='hyg' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th>Self Awareness</th><th>Description</th></tr>"+
            "<tr><td>Goals</td><td><textarea cols=30 rows=3 id='sg'></textarea></td>"+
            "<tr><td>Strength</td><td><textarea cols=30 rows=3 id='ss'></textarea></td>"+
            "<tr><td>Interests & Hobbies</td><td><textarea cols=30 rows=3 id='si'></textarea></td>"+
            "<tr><td>Responsibilities</td><td><textarea cols=30 rows=3 id='sr'></textarea></td>"+
            "</table>";
    case 11:
    case 12:
      op =  "<table>"+
            "<tr><th>Co-Scholastic Activities</th><th>Term 1</th><th>Term 2</th></tr>"+
            "<tr><td>Work Experience</td><td><input type=text id='cw1' /></td><td><input type=text id='cw2' /></td></tr>"+
            "<tr><td>Physical/Health Education</td><td><input type=text id='cp1' /></td><td><input type=text id='cp2' /></td></tr>"+
            "<tr><td>General Studies</td><td><input type=text id='cg1' /></td><td><input type=text id='cg2' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th>Behavorial Assessment</th><th>Term 1</th><th>Term 2</th></tr>"+
            "<tr><td>Discipline</td><td><input type=text id='bd1' /></td><td><input type=text id='bd2' /></td></tr>"+
            "<tr><td>Puncualtiy</td><td><input type=text id='bp1' /></td><td><input type=text id='bp2' /></td></tr>"+
            "<tr><td>Obeys Rules</td><td><input type=text id='bo1' /></td><td><input type=text id='bo2' /></td></tr>"+
            "<tr><td>Uniform</td><td><input type=text id='bu1' /></td><td><input type=text id='bu2' /></td></tr>"+
            "<tr><td>Conduct</td><td><input type=text id='bt1' /></td><td><input type=text id='bt2' /></td></tr>"+
            "<tr><td>Cleanliness</td><td><input type=text id='bc1' /></td><td><input type=text id='bc2' /></td></tr>"+
            "</table>";
  }
  op += "<table>"+
        "<tr><th>Attendance</th><th>Term 1</th><th>Term 2</th></tr>"+
        "<tr><td>Number of days attended</td><td><input type=text id='aa1' /></td><td><input type=text id='aa2' /></td></tr>"+
        "<tr><td>Total number of working days</td><td><input type=text id='at1' /></td><td><input type=text id='at2' /></td></tr>"+
        "</table>";

  $.ajax({
    url: urlGetReport,
    data: {
        1: cl,
        2: sec
    },
    type: "GET",
  }).done(function( json ){
      $(".admctrl").hide();
      $("#clapp").html("<span class='void' align='left'>No classes assigned!</span>");
      $("#clapp").append(json);
    })
}

function loadDataForm(cl){
  var op = null;
  switch(cl){
    case 1:
    case 2:
    case 3:
      op =  "<table>"+
            "<tr><th rowspan=2>Language 1</th><th colspan=2>Term 1</th><th colspan=2>Term 2</th></tr>"+
            "<tr><th>Description</th><th>Grade</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Reading</td><td><textarea id='l1t1r' cols=30 rows=3></textarea></td><td><input type=text id='l1t1r' /></td><td><textarea id='l1t2r' cols=30 rows=3></textarea></td><td><input type=text id='l1t2r' /></td></tr>"+
            "<tr><td>Writing</td><td><textarea id='l1t1w' cols=30 rows=3></textarea></td><td><input type=text id='l1t1w' /></td><td><textarea id='l1t2w' cols=30 rows=3></textarea></td><td><input type=text id='l1t2w' /></td></tr>"+
            "<tr><td>Speaking</td><td><textarea id='l1t1s' cols=30 rows=3></textarea></td><td><input type=text id='l1t1s' /></td><td><textarea id='l1t2s' cols=30 rows=3></textarea></td><td><input type=text id='l1t2s' /></td></tr>"+
            "<tr><td>Listening</td><td><textarea id='l1t1l' cols=30 rows=3></textarea></td><td><input type=text id='l1t1l' /></td><td><textarea id='l1t2l' cols=30 rows=3></textarea></td><td><input type=text id='l1t2l' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th rowspan=2>Language 2</th><th colspan=2>Term 1</th><th colspan=2>Term 2</th></tr>"+
            "<tr><th>Description</th><th>Grade</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Reading</td><td><textarea id='l2t1r' cols=30 rows=3></textarea></td><td><input type=text id='l2t1r' /></td><td><textarea id='l2t2r' cols=30 rows=3></textarea></td><td><input type=text id='l2t2r' /></td></tr>"+
            "<tr><td>Writing</td><td><textarea id='l2t1w' cols=30 rows=3></textarea></td><td><input type=text id='l2t1w' /></td><td><textarea id='l2t2w' cols=30 rows=3></textarea></td><td><input type=text id='l2t2w' /></td></tr>"+
            "<tr><td>Speaking</td><td><textarea id='l2t1s' cols=30 rows=3></textarea></td><td><input type=text id='l2t1s' /></td><td><textarea id='l2t2s' cols=30 rows=3></textarea></td><td><input type=text id='l2t2s' /></td></tr>"+
            "<tr><td>Listening</td><td><textarea id='l2t1l' cols=30 rows=3></textarea></td><td><input type=text id='l2t1l' /></td><td><textarea id='l2t2l' cols=30 rows=3></textarea></td><td><input type=text id='l2t2l' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th rowspan=2>Mathematics</th><th colspan=2>Term 1</th><th colspan=2>Term 2</th></tr>"+
            "<tr><th>Description</th><th>Grade</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Mental Ability</td><td><textarea id='mt1m' cols=30 rows=3></textarea></td><td><input type=text id='mt1m' /></td><td><textarea id='mt2m' cols=30 rows=3></textarea></td><td><input type=text id='mt2m' /></td></tr>"+
            "<tr><td>Activity</td><td><textarea id='mt1a' cols=30 rows=3></textarea></td><td></td><input type=text id='mt1a' /><td><textarea id='mt2a' cols=30 rows=3></textarea></td><td><input type=text id='mt2a' /></td></tr>"+
            "<tr><td>Tables</td><td><textarea id='mt1t' cols=30 rows=3></textarea></td><td><input type=text id='mt1t' /></td><td><textarea id='mt2t' cols=30 rows=3></textarea></td><td><input type=text id='mt2t' /></td></tr>"+
            "<tr><td>Clarity of concepts</td><td><textarea id='mt1c' cols=30 rows=3></textarea></td><td><input type=text id='mt1c' /></td><td><textarea id='mt2c' cols=30 rows=3></textarea></td><td><input type=text id='mt2c' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th rowspan=2>EVS</th><th colspan=2>Term 1</th><th colspan=2>Term 2</th></tr>"+
            "<tr><th>Description</th><th>Grade</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Environmental Sensitivity</td><td><textarea id='et1e' cols=30 rows=3></textarea></td><td><input type=text id='et1e' /></td><td><textarea id='et2e' cols=30 rows=3></textarea></td><td><input type=text id='et1e' /></td></tr>"+
            "<tr><td>Activity/Project</td><td><textarea id='et1a' cols=30 rows=3></textarea></td><td><input type=text id='et1a' /></td><td><textarea id='et2a' cols=30 rows=3></textarea></td><td><input type=text id='et1a' /></td></tr>"+
            "<tr><td>Group Discussion</td><td><textarea id='et1g' cols=30 rows=3></textarea></td><td><input type=text id='et1g' /></td><td><textarea id='et2g' cols=30 rows=3></textarea></td><td><input type=text id='et1g' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th rowspan=2>Computer Science</th><th colspan=2>Term 1</th><th colspan=2>Term 2</th></tr>"+
            "<tr><th>Description</th><th>Grade</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Skills</td><td><textarea id='ct1s' cols=30 rows=3></textarea></td><td><input type=text id='ct1s' /></td><td><textarea id='ct2s' cols=30 rows=3></textarea></td><td><input type=text id='ct2s' /></td></tr>"+
            "<tr><td>Aptitude</td><td><textarea id='ct1a' cols=30 rows=3></textarea></td><td><input type=text id='ct1a' /></td><td><textarea id='ct2a' cols=30 rows=3></textarea></td><td><input type=text id='ct2a' /></td></tr>"+
            "</table>";
    case 4:
      op =  "<table>"+
            "<tr><th rowspan=2>Language 1</th><th colspan=2>Term 1</th><th colspan=2>Term 2</th></tr>"+
            "<tr><th>Description</th><th>Grade</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Reading</td><td><textarea id='l1t1r' cols=30 rows=3></textarea></td><td><input type=text id='l1t1r' /></td><td><textarea id='l1t2r' cols=30 rows=3></textarea></td><td><input type=text id='l1t2r' /></td></tr>"+
            "<tr><td>Writing</td><td><textarea id='l1t1w' cols=30 rows=3></textarea></td><td><input type=text id='l1t1w' /></td><td><textarea id='l1t2w' cols=30 rows=3></textarea></td><td><input type=text id='l1t2w' /></td></tr>"+
            "<tr><td>Speaking</td><td><textarea id='l1t1s' cols=30 rows=3></textarea></td><td><input type=text id='l1t1s' /></td><td><textarea id='l1t2s' cols=30 rows=3></textarea></td><td><input type=text id='l1t2s' /></td></tr>"+
            "<tr><td>Listening</td><td><textarea id='l1t1l' cols=30 rows=3></textarea></td><td><input type=text id='l1t1l' /></td><td><textarea id='l1t2l' cols=30 rows=3></textarea></td><td><input type=text id='l1t2l' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th rowspan=2>Language 2</th><th colspan=2>Term 1</th><th colspan=2>Term 2</th></tr>"+
            "<tr><th>Description</th><th>Grade</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Reading</td><td><textarea id='l2t1r' cols=30 rows=3></textarea></td><td><input type=text id='l2t1r' /></td><td><textarea id='l2t2r' cols=30 rows=3></textarea></td><td><input type=text id='l2t2r' /></td></tr>"+
            "<tr><td>Writing</td><td><textarea id='l2t1w' cols=30 rows=3></textarea></td><td><input type=text id='l2t1w' /></td><td><textarea id='l2t2w' cols=30 rows=3></textarea></td><td><input type=text id='l2t2w' /></td></tr>"+
            "<tr><td>Speaking</td><td><textarea id='l2t1s' cols=30 rows=3></textarea></td><td><input type=text id='l2t1s' /></td><td><textarea id='l2t2s' cols=30 rows=3></textarea></td><td><input type=text id='l2t2s' /></td></tr>"+
            "<tr><td>Listening</td><td><textarea id='l2t1l' cols=30 rows=3></textarea></td><td><input type=text id='l2t1l' /></td><td><textarea id='l2t2l' cols=30 rows=3></textarea></td><td><input type=text id='l2t2l' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th rowspan=2>Mathematics</th><th colspan=2>Term 1</th><th colspan=2>Term 2</th></tr>"+
            "<tr><th>Description</th><th>Grade</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Mental Ability</td><td><textarea id='mt1m' cols=30 rows=3></textarea></td><td><input type=text id='mt1m' /></td><td><textarea id='mt2m' cols=30 rows=3></textarea></td><td><input type=text id='mt2m' /></td></tr>"+
            "<tr><td>Written Work</td><td><textarea id='mt1w' cols=30 rows=3></textarea></td><td></td><input type=text id='mt1w' /><td><textarea id='mt2w' cols=30 rows=3></textarea></td><td><input type=text id='mt2w' /></td></tr>"+
            "<tr><td>Clarity of concepts</td><td><textarea id='mt1c' cols=30 rows=3></textarea></td><td><input type=text id='mt1c' /></td><td><textarea id='mt2c' cols=30 rows=3></textarea></td><td><input type=text id='mt2c' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th rowspan=2>EVS</th><th colspan=2>Term 1</th><th colspan=2>Term 2</th></tr>"+
            "<tr><th>Description</th><th>Grade</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Concept</td><td><textarea id='et1c' cols=30 rows=3></textarea></td><td><input type=text id='et1c' /></td><td><textarea id='et2c' cols=30 rows=3></textarea></td><td><input type=text id='et1c' /></td></tr>"+
            "<tr><td>Activity/Project</td><td><textarea id='et1a' cols=30 rows=3></textarea></td><td><input type=text id='et1a' /></td><td><textarea id='et2a' cols=30 rows=3></textarea></td><td><input type=text id='et1a' /></td></tr>"+
            "<tr><td>Group Discussion</td><td><textarea id='et1g' cols=30 rows=3></textarea></td><td><input type=text id='et1g' /></td><td><textarea id='et2g' cols=30 rows=3></textarea></td><td><input type=text id='et1g' /></td></tr>"+
            "<tr><td>Written Work</td><td><textarea id='et1w' cols=30 rows=3></textarea></td><td><input type=text id='et1w' /></td><td><textarea id='et2w' cols=30 rows=3></textarea></td><td><input type=text id='et1w' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th rowspan=2>Computer Science</th><th colspan=2>Term 1</th><th colspan=2>Term 2</th></tr>"+
            "<tr><th>Description</th><th>Grade</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Skills</td><td><textarea id='ct1s' cols=30 rows=3></textarea></td><td><input type=text id='ct1s' /></td><td><textarea id='ct2s' cols=30 rows=3></textarea></td><td><input type=text id='ct2s' /></td></tr>"+
            "<tr><td>Aptitude</td><td><textarea id='ct1a' cols=30 rows=3></textarea></td><td><input type=text id='ct1a' /></td><td><textarea id='ct2a' cols=30 rows=3></textarea></td><td><input type=text id='ct2a' /></td></tr>"+
            "</table>";
    case 5:
      op =  "<table>"+
            "<tr><th rowspan=2>Language 1</th><th colspan=2>Term 1</th><th colspan=2>Term 2</th></tr>"+
            "<tr><th>Description</th><th>Grade</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Reading</td><td><textarea id='l1t1r' cols=30 rows=3></textarea></td><td><input type=text id='l1t1r' /></td><td><textarea id='l1t2r' cols=30 rows=3></textarea></td><td><input type=text id='l1t2r' /></td></tr>"+
            "<tr><td>Writing</td><td><textarea id='l1t1w' cols=30 rows=3></textarea></td><td><input type=text id='l1t1w' /></td><td><textarea id='l1t2w' cols=30 rows=3></textarea></td><td><input type=text id='l1t2w' /></td></tr>"+
            "<tr><td>Speaking</td><td><textarea id='l1t1s' cols=30 rows=3></textarea></td><td><input type=text id='l1t1s' /></td><td><textarea id='l1t2s' cols=30 rows=3></textarea></td><td><input type=text id='l1t2s' /></td></tr>"+
            "<tr><td>Listening</td><td><textarea id='l1t1l' cols=30 rows=3></textarea></td><td><input type=text id='l1t1l' /></td><td><textarea id='l1t2l' cols=30 rows=3></textarea></td><td><input type=text id='l1t2l' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th rowspan=2>Language 2</th><th colspan=2>Term 1</th><th colspan=2>Term 2</th></tr>"+
            "<tr><th>Description</th><th>Grade</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Reading</td><td><textarea id='l2t1r' cols=30 rows=3></textarea></td><td><input type=text id='l2t1r' /></td><td><textarea id='l2t2r' cols=30 rows=3></textarea></td><td><input type=text id='l2t2r' /></td></tr>"+
            "<tr><td>Writing</td><td><textarea id='l2t1w' cols=30 rows=3></textarea></td><td><input type=text id='l2t1w' /></td><td><textarea id='l2t2w' cols=30 rows=3></textarea></td><td><input type=text id='l2t2w' /></td></tr>"+
            "<tr><td>Speaking</td><td><textarea id='l2t1s' cols=30 rows=3></textarea></td><td><input type=text id='l2t1s' /></td><td><textarea id='l2t2s' cols=30 rows=3></textarea></td><td><input type=text id='l2t2s' /></td></tr>"+
            "<tr><td>Listening</td><td><textarea id='l2t1l' cols=30 rows=3></textarea></td><td><input type=text id='l2t1l' /></td><td><textarea id='l2t2l' cols=30 rows=3></textarea></td><td><input type=text id='l2t2l' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th rowspan=2>Language 2</th><th colspan=2>Term 1</th><th colspan=2>Term 2</th></tr>"+
            "<tr><th>Description</th><th>Grade</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Reading</td><td><textarea id='l3t1r' cols=30 rows=3></textarea></td><td><input type=text id='l3t1r' /></td><td><textarea id='l3t2r' cols=30 rows=3></textarea></td><td><input type=text id='l3t2r' /></td></tr>"+
            "<tr><td>Writing</td><td><textarea id='l3t1w' cols=30 rows=3></textarea></td><td><input type=text id='l3t1w' /></td><td><textarea id='l3t2w' cols=30 rows=3></textarea></td><td><input type=text id='l3t2w' /></td></tr>"+
            "<tr><td>Speaking</td><td><textarea id='l3t1s' cols=30 rows=3></textarea></td><td><input type=text id='l3t1s' /></td><td><textarea id='l3t2s' cols=30 rows=3></textarea></td><td><input type=text id='l3t2s' /></td></tr>"+
            "<tr><td>Listening</td><td><textarea id='l3t1l' cols=30 rows=3></textarea></td><td><input type=text id='l3t1l' /></td><td><textarea id='l3t2l' cols=30 rows=3></textarea></td><td><input type=text id='l3t2l' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th rowspan=2>Mathematics</th><th colspan=2>Term 1</th><th colspan=2>Term 2</th></tr>"+
            "<tr><th>Description</th><th>Grade</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Mental Ability</td><td><textarea id='mt1m' cols=30 rows=3></textarea></td><td><input type=text id='mt1m' /></td><td><textarea id='mt2m' cols=30 rows=3></textarea></td><td><input type=text id='mt2m' /></td></tr>"+
            "<tr><td>Written Work</td><td><textarea id='mt1w' cols=30 rows=3></textarea></td><td></td><input type=text id='mt1w' /><td><textarea id='mt2w' cols=30 rows=3></textarea></td><td><input type=text id='mt2w' /></td></tr>"+
            "<tr><td>Clarity of concepts</td><td><textarea id='mt1c' cols=30 rows=3></textarea></td><td><input type=text id='mt1c' /></td><td><textarea id='mt2c' cols=30 rows=3></textarea></td><td><input type=text id='mt2c' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th rowspan=2>EVS</th><th colspan=2>Term 1</th><th colspan=2>Term 2</th></tr>"+
            "<tr><th>Description</th><th>Grade</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Concept</td><td><textarea id='et1c' cols=30 rows=3></textarea></td><td><input type=text id='et1c' /></td><td><textarea id='et2c' cols=30 rows=3></textarea></td><td><input type=text id='et1c' /></td></tr>"+
            "<tr><td>Activity/Project</td><td><textarea id='et1a' cols=30 rows=3></textarea></td><td><input type=text id='et1a' /></td><td><textarea id='et2a' cols=30 rows=3></textarea></td><td><input type=text id='et1a' /></td></tr>"+
            "<tr><td>Group Discussion</td><td><textarea id='et1g' cols=30 rows=3></textarea></td><td><input type=text id='et1g' /></td><td><textarea id='et2g' cols=30 rows=3></textarea></td><td><input type=text id='et1g' /></td></tr>"+
            "<tr><td>Written Work</td><td><textarea id='et1w' cols=30 rows=3></textarea></td><td><input type=text id='et1w' /></td><td><textarea id='et2w' cols=30 rows=3></textarea></td><td><input type=text id='et1w' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th rowspan=2>Computer Science</th><th colspan=2>Term 1</th><th colspan=2>Term 2</th></tr>"+
            "<tr><th>Description</th><th>Grade</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Skills</td><td><textarea id='ct1s' cols=30 rows=3></textarea></td><td><input type=text id='ct1s' /></td><td><textarea id='ct2s' cols=30 rows=3></textarea></td><td><input type=text id='ct2s' /></td></tr>"+
            "<tr><td>Aptitude</td><td><textarea id='ct1a' cols=30 rows=3></textarea></td><td><input type=text id='ct1a' /></td><td><textarea id='ct2a' cols=30 rows=3></textarea></td><td><input type=text id='ct2a' /></td></tr>"+
            "</table>";
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      op =  "<table>"+
            "<tr><th>Life Skills</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Self Awareness</td><td><textarea cols=30 rows=3 id='lsd'></textarea></td><td><input type=text id='lsg' /></td></tr>"+
            "<tr><td>Problem Solving</td><td><textarea cols=30 rows=3 id='lpd'></textarea></td><td><input type=text id='lpg' /></td></tr>"+
            "<tr><td>Decision Making</td><td><textarea cols=30 rows=3 id='ldd'></textarea></td><td><input type=text id='ldg' /></td></tr>"+
            "<tr><td>Critical Thinking</td><td><textarea cols=30 rows=3 id='lctd'></textarea></td><td><input type=text id='lctg' /></td></tr>"+
            "<tr><td>Creative Thinking</td><td><textarea cols=30 rows=3 id='lcrd'></textarea></td><td><input type=text id='lcrg' /></td></tr>"+
            "<tr><td>Interpersonal Relationships</td><td><textarea cols=30 rows=3 id='lid'></textarea></td><td><input type=text id='lig' /></td></tr>"+
            "<tr><td>Effective Communication</td><td><textarea cols=30 rows=3 id='lecd'></textarea></td><td><input type=text id='lecg' /></td></tr>"+
            "<tr><td>Empathy</td><td><textarea cols=30 rows=3 id='lemd'></textarea></td><td><input type=text id='lemg' /></td></tr>"+
            "<tr><td>Managing Emotions</td><td><textarea cols=30 rows=3 id='lmd'></textarea></td><td><input type=text id='lmg' /></td></tr>"+
            "<tr><td>Dealing with Stress</td><td><textarea cols=30 rows=3 id='ldd'></textarea></td><td><input type=text id='ldg' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th>Work Education</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Computer Operations & Maintenance</td><td><textarea cols=30 rows=3 id='wcd'></textarea></td><td><input type=text id='wcg' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th>Visual & Performing Arts</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Music/Dance/Art & Craft</td><td><textarea cols=30 rows=3 id='vmd'></textarea></td><td><input type=text id='vmg' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th>Attitude & Values</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Attitude Towards School Mates</td><td><textarea cols=30 rows=3 id='amd'></textarea></td><td><input type=text id='amg' /></td></tr>"+
            "<tr><td>Attitude Towards School Programme & Environment</td><td><textarea cols=30 rows=3 id='aed'></textarea></td><td><input type=text id='aeg' /></td></tr>"+
            "<tr><td>Value Systems</td><td><textarea cols=30 rows=3 id='avd'></textarea></td><td><input type=text id='avg' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th>Co-Scholastic Activities</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Literary Skills</td><td><textarea cols=30 rows=3 id='cld'></textarea></td><td><input type=text id='clg' /></td></tr>"+
            "<tr><td>Scientific Skills</td><td><textarea cols=30 rows=3 id='csd'></textarea></td><td><input type=text id='csg' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th>Health & Physical Education</th><th>Description</th><th>Grade</th></tr>"+
            "<tr><td>Sports</td><td><textarea cols=30 rows=3 id='hsd'></textarea></td><td><input type=text id='hsg' /></td></tr>"+
            "<tr><td>Yoga</td><td><textarea cols=30 rows=3 id='hyd'></textarea></td><td><input type=text id='hyg' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th>Self Awareness</th><th>Description</th></tr>"+
            "<tr><td>Goals</td><td><textarea cols=30 rows=3 id='sg'></textarea></td>"+
            "<tr><td>Strength</td><td><textarea cols=30 rows=3 id='ss'></textarea></td>"+
            "<tr><td>Interests & Hobbies</td><td><textarea cols=30 rows=3 id='si'></textarea></td>"+
            "<tr><td>Responsibilities</td><td><textarea cols=30 rows=3 id='sr'></textarea></td>"+
            "</table>";
    case 11:
    case 12:
      op =  "<table>"+
            "<tr><th>Co-Scholastic Activities</th><th>Term 1</th><th>Term 2</th></tr>"+
            "<tr><td>Work Experience</td><td><input type=text id='cw1' /></td><td><input type=text id='cw2' /></td></tr>"+
            "<tr><td>Physical/Health Education</td><td><input type=text id='cp1' /></td><td><input type=text id='cp2' /></td></tr>"+
            "<tr><td>General Studies</td><td><input type=text id='cg1' /></td><td><input type=text id='cg2' /></td></tr>"+
            "</table>"+
            "<table>"+
            "<tr><th>Behavorial Assessment</th><th>Term 1</th><th>Term 2</th></tr>"+
            "<tr><td>Discipline</td><td><input type=text id='bd1' /></td><td><input type=text id='bd2' /></td></tr>"+
            "<tr><td>Puncualtiy</td><td><input type=text id='bp1' /></td><td><input type=text id='bp2' /></td></tr>"+
            "<tr><td>Obeys Rules</td><td><input type=text id='bo1' /></td><td><input type=text id='bo2' /></td></tr>"+
            "<tr><td>Uniform</td><td><input type=text id='bu1' /></td><td><input type=text id='bu2' /></td></tr>"+
            "<tr><td>Conduct</td><td><input type=text id='bt1' /></td><td><input type=text id='bt2' /></td></tr>"+
            "<tr><td>Cleanliness</td><td><input type=text id='bc1' /></td><td><input type=text id='bc2' /></td></tr>"+
            "</table>";
  }
  op += "<table>"+
        "<tr><th>Attendance</th><th>Term 1</th><th>Term 2</th></tr>"+
        "<tr><td>Number of days attended</td><td><input type=text id='aa1' /></td><td><input type=text id='aa2' /></td></tr>"+
        "<tr><td>Total number of working days</td><td><input type=text id='at1' /></td><td><input type=text id='at2' /></td></tr>"+
        "</table>";
  $("#dcontainer").html(op);
  $("#desc-edit").show();
  $("#tint").fadeIn();
}

function loadTeacher(){
  $.ajax({
    url: urlLoad,
    data: {
        1: $("#teach-id").val()
    },
    type: "GET",
  }).done(function( json ){
      $(".admctrl").hide();
      $("#clapp").html("<span class='void' align='left'>No classes assigned!</span>");
      $("#clapp").append(json);
    })
}

function loadAdmin(){
  $("#class-add-edit").show();
}

$(document).ready(function(){

  $("#submit-desc").click(function(){
    var th = $(this);
    var grade = [];
    var desc = [];
    $("#dcontainer input").each(function(){
      var id = $(this).attr('id');
      var v = $(this).val();
      var data = {};
      data['id'] = id;
      data['value'] = v;
      grade.push(data);
    });
    $("#dcontainer textarea").each(function(){
      var id = $(this).attr('id');
      var v = $(this).val();
      var data = {};
      data['id'] = id;
      data['value'] = v;
      desc.push(data);
    });


    $.ajax({
      url: urlReport,
      data: {
          1: th.data('admnum'),
          2: '2016-17',
          3: th.data('class'),
          4: desc,
          5: grade
      },
      type: "GET",
    }).done(function( json ){
        $("#submit-desc").hide();
        $("#tint").fadeOut();
      })
  });

  $("#showmenu").click(function(){
    if($(this).hasClass('show')){
      $(".left-menu, #showmenu").animate({'left': '+=20%'}, 500, function(){});
      $(this).addClass('hide').removeClass('show');
    }else{
      $(".left-menu, #showmenu").animate({'left': '-=20%'}, 500, function(){});
      $(this).addClass('show').removeClass('hide');
    }
  });
  $("#submit").click(function(){
    var urlA = null;
    if($(this).attr('data-mode')=='edit'){
      urlA = urlUpdateStudent;
    }else{
      urlA = urlNewStudent;
    }
      var count = $('#subappend input:checkbox:checked').length;
      var ss = [];

      $('#subappend input:checkbox:checked').each(function(){
        ss.push(this.value);
      });
      $.ajax({
        url: urlA,
        data: {
          l: count,
          s: ss,
          1: $("#1").val(),
          2: $("#2").val(),
          3: $("#3").val(),
          4: $("#4").val(),
          5: $("#5").val(),
          6: $("#6").val(),
          7: $("#7").val(),
          8: $("#8").val(),
          9: $("#9").val(),
          10: $("#10").val(),
          11: $("#11").val(),
          12: $("#12").val()
        },
        type: "GET",
        success: function(json){
          if(json=="1"){
            alert("Insterted");
            loadTeacher();
          }else{
            alert("Failed");
          }
        }
      });

  });

  $("#clapp").on("click", ".showdata", function(){
    $.ajax({
      url: urlData,
      data: {
          1: $("#u").val(),
          2: $("#p").val()
      },
      type: "POST",
    }).done(function( json ){
        if(json=="1"){
          $("#teach-id").val($("#u").val());
          $(".login-show").attr("style", "display: none");
          $(".main").attr("style", "display: block");
          loadTeacher();
        }else{
          alert("Invalid login");
        }
      })
  });

  $("#l").click(function(){
    if($("#u").val()=="admin"&&$("#p").val()=="admin"){
      $(".login-show").attr("style", "display: none");
      $(".main").attr("style", "display: block");
      loadAdmin();
    }
    else{
      $.ajax({
        url: urlLogin,
        data: {
            1: $("#u").val(),
            2: $("#p").val()
        },
        type: "POST",
      }).done(function( json ){
          if(json=="1"){
            $("#teach-id").val($("#u").val());
            $(".login-show").attr("style", "display: none");
            $(".main").attr("style", "display: block");
            loadTeacher();
          }else{
            alert("Invalid login");
          }
        })
      }
  });

  $("#clapp").on("click", '#marks', function(){
    if($(this).attr('data-edit')=='0'){
      var m = $(this).html();
      var adm = $(this).attr('data-student');
      var cl = $(this).attr('data-cl');
      var sub = $(this).attr('data-subject');
      var exam = $(this).attr('data-exam');
      $(this).html("<input id='td"+adm+sub+exam+"' class='mark-edit' type='text' value='"+m+"' size='1' data-admnum='"+adm+"'"+
      " data-class='"+cl+"' data-subject='"+sub+"' data-exam='"+exam+"' />");
      $(this).attr('data-edit', '1');
    }
  });

  $("#clapp").on("keypress", '.mark-edit', function(e){
    var $t = $(this);
    if(e.keyCode==13){
      $.ajax({
        url: urlUpdateMarks,
        data: {
            1: $(this).attr('data-admnum'),
            2: $(this).val(),
            3: $(this).attr('data-exam'),
            4: $(this).attr('data-class'),
            5: $(this).attr('data-subject')
        },
        type: "GET",
      }).done(function( json ){
          if(json!="-2"){
            $t.replaceWith(json);
            $t.parent().attr('data-edit', '0');
          }else{
            alert(json);
          }
        })
      return false;
    }
  });

  $("#clapp").on("click", '#selall', function(){
    var cl = $(this).attr('data-class');
    $("[id^='class"+cl+"']").prop('checked', $(this).prop('checked'));

  });

  $("#10").on("keypress", function(){
    var cl = $("#10").val();
    cl = parseInt(cl);
    var html = null;
    switch(cl){
      case 1:
      case 2:
      case 3:
      case 4:
        html = "<input type='checkbox' value='00' checked disabled />English"+
        "<input type='checkbox'  value='12' checked disabled />Hindi"+
        "<input type='checkbox' value='01' checked disabled />Maths"+
        "<input type='checkbox'  value='19' checked disabled />EVS"+
        "<input type='checkbox'  value='17' checked disabled />Computer Science";
        break;
      case 5:
        html = "<input type='checkbox' value='00' checked disabled />English"+
        "<input type='checkbox'  value='12' checked disabled />Hindi"+
        "<input type='checkbox' value='01' checked disabled />Maths"+
        "<input type='checkbox'  value='19' checked disabled />EVS"+
        "<input type='checkbox'  value='17' checked disabled />Computer Science"+
        "<input type='checkbox' value='13' />French"+
        "<input type='checkbox' value='14' />German"+
        "<input type='checkbox'  value='15' />Kannada";
        break;
      case 6:
      case 7:
      case 8:
        html = "<input type='checkbox' value='00' checked disabled />English"+
        "<input type='checkbox'  value='12' checked disabled />Hindi"+
        "<input type='checkbox' value='01' checked disabled />Maths"+
        "<input type='checkbox' value='02' checked disabled />Science"+
        "<input type='checkbox' value='03' checked disabled />Social Studies"+
        "<input type='checkbox' value='13' />French"+
        "<input type='checkbox' value='14' />German"+
        "<input type='checkbox'  value='15' />Kannada";
        break;
      case 9:
      case 10:
        html = "<input type='checkbox' value='00' checked disabled />English"+
        "<input type='checkbox' value='01' checked disabled />Maths"+
        "<input type='checkbox' value='02' checked disabled />Science"+
        "<input type='checkbox' value='03' checked disabled />Social Studies"+
        "<input type='checkbox'  value='12' />Hindi"+
        "<input type='checkbox' value='13' />French"+
        "<input type='checkbox' value='14' />German"+
        "<input type='checkbox'  value='15' />Kannada";
        break;
      case 11:
      case 12:
        html = "<input type='checkbox' value='00' checked disabled />English"+
        "<input type='checkbox' value='01' />Maths"+
        "<input type='checkbox'  value='08' />Physics"+
        "<input type='checkbox'  value='09' />Chemistry"+
        "<input type='checkbox'  value='17' />Computer Science"+
        "<input type='checkbox'  value='18' />Biology<br>"+
        "<input type='checkbox'  value='19' />Economics"+
        "<input type='checkbox' value='10' />Business Studies"+
        "<input type='checkbox'  value='11' />Accounts";
        break;
      default:
        html = "Enter a valid class first";
    }
    $("#subappend").html(html);
  })

  $("#cs").click(function(){
    $("#submit").attr('data-mode', 'add');
    $(".tbs").show();
    $("#tint").fadeIn();
    $("#student-add-edit").show();
  })

  $("#clapp").on("click", '#add', function(){
    $("#submit").attr('data-mode', 'add');
    $("#10").val($(this).attr('data-class').substring(0, $(this).attr('data-class').indexOf(' ')));
    $("#11").val($(this).attr('data-class').substring($(this).attr('data-class').indexOf(' ')+1,
                                                      $(this).attr('data-class').length));
    $(".tbs").show();
    var cl = $("#10").val();
    cl = parseInt(cl);
    var html = null;
    switch(cl){
      case 1:
      case 2:
      case 3:
      case 4:
        html = "<input type='checkbox' value='00' checked disabled />English"+
        "<input type='checkbox'  value='12' checked disabled />Hindi"+
        "<input type='checkbox' value='01' checked disabled />Maths"+
        "<input type='checkbox'  value='19' checked disabled />EVS"+
        "<input type='checkbox'  value='17' checked disabled />Computer Science";
        break;
      case 5:
        html = "<input type='checkbox' value='00' checked disabled />English"+
        "<input type='checkbox'  value='12' checked disabled />Hindi"+
        "<input type='checkbox' value='01' checked disabled />Maths"+
        "<input type='checkbox'  value='19' checked disabled />EVS"+
        "<input type='checkbox'  value='17' checked disabled />Computer Science"+
        "<input type='checkbox' value='13' />French"+
        "<input type='checkbox' value='14' />German"+
        "<input type='checkbox'  value='15' />Kannada";
        break;
      case 6:
      case 7:
      case 8:
        html = "<input type='checkbox' value='00' checked disabled />English"+
        "<input type='checkbox'  value='12' checked disabled />Hindi"+
        "<input type='checkbox' value='01' checked disabled />Maths"+
        "<input type='checkbox' value='02' checked disabled />Science"+
        "<input type='checkbox' value='03' checked disabled />Social Studies"+
        "<input type='checkbox' value='13' />French"+
        "<input type='checkbox' value='14' />German"+
        "<input type='checkbox'  value='15' />Kannada";
        break;
      case 9:
      case 10:
        html = "<input type='checkbox' value='00' checked disabled />English"+
        "<input type='checkbox' value='01' checked disabled />Maths"+
        "<input type='checkbox' value='02' checked disabled />Science"+
        "<input type='checkbox' value='03' checked disabled />Social Studies"+
        "<input type='checkbox'  value='12' />Hindi"+
        "<input type='checkbox' value='13' />French"+
        "<input type='checkbox' value='14' />German"+
        "<input type='checkbox'  value='15' />Kannada";
        break;
      case 11:
      case 12:
        html = "<input type='checkbox' value='00' checked disabled />English"+
        "<input type='checkbox' value='01' />Maths"+
        "<input type='checkbox'  value='08' />Physics"+
        "<input type='checkbox'  value='09' />Chemistry"+
        "<input type='checkbox'  value='17' />Computer Science"+
        "<input type='checkbox'  value='18' />Biology<br>"+
        "<input type='checkbox'  value='19' />Economics"+
        "<input type='checkbox' value='10' />Business Studies"+
        "<input type='checkbox'  value='11' />Accounts";
        break;
      default:
        html = "Enter a valid class first";
    }
    $("#subappend").html(html);
    $("#tint").fadeIn();
    $("#student-add-edit").show();
  });

  $("#clapp").on("click", '#edit', function(){
    var cccc = $(this).attr('data-class');
    if($("[id^='class"+cccc+"']:checked").length>0){
      $(".admm").hide();
      $("#submit").attr('data-mode', 'edit');
      $("#tint").fadeIn();
      $("#student-add-edit").show();
      $('.ed').show();
      $("#2").val($("[id^='class"+cccc+"']:checked:first").attr('data-admnum'));
      $("#3").val($("[id^='class"+cccc+"']:checked:first").attr('data-name'));
      $("#5").val($("[id^='class"+cccc+"']:checked:first").attr('data-fname'));
      $("#6").val($("[id^='class"+cccc+"']:checked:first").attr('data-mname'));
      $("#7").val($("[id^='class"+cccc+"']:checked:first").attr('data-contact1'));
      $("#8").val($("[id^='class"+cccc+"']:checked:first").attr('data-contact2'));
      $("#9").val($("[id^='class"+cccc+"']:checked:first").attr('data-address'));
      $("#10").val($("[id^='class"+cccc+"']:checked:first").attr('data-class'));
      $("#11").val($("[id^='class"+cccc+"']:checked:first").attr('data-section'));
      $("#12").val($("[id^='class"+cccc+"']:checked:first").attr('data-dob'));
      var cl = $("#10").val();
      cl = parseInt(cl);
      var html = null;
      switch(cl){
        case 1:
        case 2:
        case 3:
        case 4:
          html = "<input type='checkbox' value='00' checked disabled />English"+
          "<input type='checkbox'  value='12' checked disabled />Hindi"+
          "<input type='checkbox' value='01' checked disabled />Maths"+
          "<input type='checkbox'  value='19' checked disabled />EVS"+
          "<input type='checkbox'  value='17' checked disabled />Computer Science";
          break;
        case 5:
          html = "<input type='checkbox' value='00' checked disabled />English"+
          "<input type='checkbox'  value='12' checked disabled />Hindi"+
          "<input type='checkbox' value='01' checked disabled />Maths"+
          "<input type='checkbox'  value='19' checked disabled />EVS"+
          "<input type='checkbox'  value='17' checked disabled />Computer Science"+
          "<input type='checkbox' value='13' />French"+
          "<input type='checkbox' value='14' />German"+
          "<input type='checkbox'  value='15' />Kannada";
          break;
        case 6:
        case 7:
        case 8:
          html = "<input type='checkbox' value='00' checked disabled />English"+
          "<input type='checkbox'  value='12' checked disabled />Hindi"+
          "<input type='checkbox' value='01' checked disabled />Maths"+
          "<input type='checkbox' value='02' checked disabled />Science"+
          "<input type='checkbox' value='03' checked disabled />Social Studies"+
          "<input type='checkbox' value='13' />French"+
          "<input type='checkbox' value='14' />German"+
          "<input type='checkbox'  value='15' />Kannada";
          break;
        case 9:
        case 10:
          html = "<input type='checkbox' value='00' checked disabled />English"+
          "<input type='checkbox' value='01' checked disabled />Maths"+
          "<input type='checkbox' value='02' checked disabled />Science"+
          "<input type='checkbox' value='03' checked disabled />Social Studies"+
          "<input type='checkbox'  value='12' />Hindi"+
          "<input type='checkbox' value='13' />French"+
          "<input type='checkbox' value='14' />German"+
          "<input type='checkbox'  value='15' />Kannada";
          break;
        case 11:
        case 12:
          html = "<input type='checkbox' value='00' checked disabled />English"+
          "<input type='checkbox' value='01' />Maths"+
          "<input type='checkbox'  value='08' />Physics"+
          "<input type='checkbox'  value='09' />Chemistry"+
          "<input type='checkbox'  value='17' />Computer Science"+
          "<input type='checkbox'  value='18' />Biology<br>"+
          "<input type='checkbox'  value='19' />Economics"+
          "<input type='checkbox' value='10' />Business Studies"+
          "<input type='checkbox'  value='11' />Accounts";
          break;
        default:
          html = "Enter a valid class first";
      }
      $("#subappend").html(html);
    }
  });

  $("#tint").click(function(){
    $(this).fadeOut();
    $(".popup").fadeOut();
  });

  $("#clapp").on("click", '.rep', function(){
    //$("#clapp").hide();
    //$("#report-cards").show();
    $("#submit-desc").attr('data-admnum', $(this).data('admnum'));
    $("#submit-desc").attr('data-class', $(this).data('class'));
    loadDataForm($(this).data('class'));
  });

  $("#clapp").on("click", '#rep', function(){
    $("#clapp").hide();
    $("#report-cards").show();
    loadReport($(this).data('class'));
  });

  $("#create-teacher-but").click(function(){
    var na = $("#ct1").val();
    var lo = $("#ct2").val();
    var pa = $("#ct3").val();
    var su = $("#ct4 option:selected").val();
    var clt = $("#ct5").val();
    var cls = [];
    $("#multi-cont span.multi-cl").each(function(i){
      cls.push($(this).text());
      alert($(this).text());
    });
    var si = cls.length;
    alert(na+" "+lo+" "+pa+" "+su+" "+clt+si);

    $.ajax({
      url: urlNewTeacher,
      data: {
        1: na,
        2: lo,
        3: pa,
        4: su,
        5: clt,
        6: cls,
        s: si
      },
      type: "GET",
      success: function(json){
        if(json=="1"){
          alert("Insterted");
          loadTeacher();
        }else{
          alert(json);
        }
      }
    });

  });

  $("#create-class-but").click(function(){
    var cl = $("#cl1").val();
    var se = $("#cl2").val();

    $.ajax({
      url: urlNewClass,
      data: {
        1: cl,
        2: se
      },
      type: "GET",
      success:function(json){
        if(json==1){
          alert("Created");
        }else{
          alert("Error");
        }
      }
    });

  });

  $("#multi").on("keypress", function(e){
    if(e.keyCode==13){
      $("#multi-cont").prepend("<span class='multi-cl'>"+$(this).val()+"</span> ");
      $(this).val("");
    }
  });

  $("#ct").click(function(){
    $(".left-menu, #showmenu").animate({'left': '-=20%'}, 500, function(){});
    $("#showmenu").addClass('show').removeClass('hide');
    $("#teacher-add-edit").show();
    $("#tint").fadeIn();
  });

  $("#cc").click(function(){
    $(".left-menu, #showmenu").animate({'left': '-=20%'}, 500, function(){});
    $("#showmenu").addClass('show').removeClass('hide');
    $("#class-add-edit").show();
    $("#tint").fadeIn();
  });


});
