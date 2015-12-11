<?php
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = 'root';
$reg = $_GET["region"];
$course = $_GET["course"];

$conn = mysql_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
  die('Could not connect: ' . mysql_error());
}
$sql = "SELECT DISTINCT universities.PROVIDER_NAME, universities.TOWN, universities.POSTCODE, universities.WEBSITE_ADDRESS FROM universities, courses WHERE courses.TITLE='".$course."' AND universities.REGION='".$reg."'";

mysql_select_db('webres');
$retval = mysql_query($sql, $conn);
$rows = array();
if(!$retval){
  die('Could not get data: ' . mysql_error());
}
while($r1 = mysql_fetch_array($retval, MYSQL_ASSOC)){
	$rows[] = $r1;
} 
$data = array('Universities' => $rows);
$json = json_encode($data);
echo $json;
mysql_close($conn);
?>