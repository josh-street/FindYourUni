<!DOCTYPE html>
<html lang="en-GB">
<head>
	<title>Find Your Uni</title>
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
	<link href="style.css" rel="stylesheet" type="text/css" />	
	<script src='scripts.js' type='text/javascript'></script>
</head>

<body>
	<div id="header">
		<div id="logo">
			<h1><a href="./">Find Your Uni</a></h1>
		</div>
		<div id='cssmenu'>
			<ul>
			<li class='active'><a href='./'><span>Home</span></a></li>
			<li class='last'><a href='#'><span>About</span></a></li>
			</ul>
		</div>
	</div>
	<div id="content">
	<div id='userinput'>
	<h4>Select a Department</h4>
	<select id='deptdd'>
		<option value="">Select an Option</option>
 		<option value="business">Business</option>
  		<option value="computing">Computing</option>
  		<option value="creative">Creative</option>
  		<option value="engineering">Engineering</option>
	</select>
	<h4>Select a Course</h4>
	<select id='coursedd'>
	</select>
	<h4>Select a Region</h4>
	<select id='regiondd'>
 		<option value="EM">East Midlands</option>
 		<option value="WM">West Midlands</option>
  		<option value="LDN">Greater London</option>
  		<option value="NE">North East</option>
  		<option value="NW">North West</option>
  		<option value="SE">South East</option>
  		<option value="SE">South West</option>
  		<option value="IRE">Ireland</option>
  		<option value="SL">Scotland</option>
  		<option value="WA">Wales</option>
	</select>
	<button id="submit">Submit</button>
	<h4>
	</div>
	<div id='useroutput'>
	</div>

		<div class="footer">
			<p class='left'>Josh Street</p>
		</div>	
	</body>
	</html>
