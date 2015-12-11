window.onload = initPage;


var busCourses = [];
var compCourses = [];
var creatCourses = [];
var engCourses = [];

busCourses = ["Accounting", "Business", "Business Management", "Economics", "Marketing", "Human Resource Management", "Hospitality Management", "Digital Marketing", "Law"];
compCourses = ["Business Information Systems", "Computer Science", "Computing", "Computing and Information Systems", "Forensic Computing", "Software Engineering", "Web Technologies"];
creatCourses = ["Animation", "Computer Games Technology", "Digital Media", "Entertainment Technology", "Music and Sound Technology", "Television and Broadcasting"];
engCourses = ["Computer Engineering", "Computer Networks", "Electronic Engineering", "Mechanical Engineering", "Petroleum Engineering", "Civil Engineering", "Product Design and Innovation"];



function initPage(){
  eventHandler(); 
}

function eventHandler() {
  x = document.getElementById('deptdd');
  x.addEventListener('change', getDept,false);
  submit = document.getElementById('submit');
  submit.addEventListener('click', getUnis, false);
}



function getDept() {
  var dept1 = document.getElementById('deptdd');
//console.log(dept1);
if (dept1.selectedIndex == 0){
  return;
}
else if (dept1.selectedIndex == 1){
  popDropbown(busCourses);
}
else if (dept1.selectedIndex == 2){
  popDropbown(compCourses);
}
else if (dept1.selectedIndex == 3){
  popDropbown(creatCourses);
}
else if (dept1.selectedIndex == 4){
  popDropbown(engCourses);
}
else {
  console.log('error');
}
}

function popDropbown(popText){
  var lstbx = document.getElementById("coursedd");
  var options = lstbx.getElementsByTagName('OPTION');
  for (var i = 0; i < options.length; i++) {
    lstbx.removeChild(options[i]);
    i--;
  }
  for (var i=0; i<popText.length; i++) {
   var option = new Option(popText[i]);

   lstbx.options.add(option); 
 }
}

function getUnis() {
  var region = "?region="+document.getElementById('regiondd').value;
  var course = "&course="+document.getElementById('coursedd').value;
  console.log(course);

  console.log(region);
  // creates a new request
  request = new XMLHttpRequest();
  if (request == null) {
    alert("Unable to create request");
    return;
  }
  // the url of the request contains the ID parameter used by the php file
  var url= "outputList.php"+region+course;
  // the method is set to get and url from previous line.
  request.open("GET", url, true);
  // when request is completed the function display products is called.
  request.onreadystatechange = displayUnis;
  request.send(null);
}

function displayUnis() {
  // checks the integrity of the response using if statements
  if (request.readyState == 4) {
    if (request.status == 200) {
      // variables created using the responseText from the request and parsed using a Javascript method
      list = request.responseText;
      parsd = JSON.parse(list);
      unis = parsd.Universities;
      // for loop loops through the produces array
      var ul = document.getElementById('useroutput');
      if(ul.children.length == 0){
        for (var i = 0; i < unis.length; i++) {
        // creates the html structure and places the various parameters and replys from server to create a dynamic grid
        var ele = document.createElement("li");
        var name = document.createElement("p");
        name.innerHTML = unis[i].PROVIDER_NAME;
        var town = document.createElement("p");
        town.innerHTML = unis[i].TOWN;
        var postcode = document.createElement("p");
        postcode.innerHTML = unis[i].POSTCODE;
        var url = document.createElement("a");
        url.innerHTML = unis[i].WEBSITE_ADDRESS;
        url.href = "http://" + unis[i].WEBSITE_ADDRESS;
        ulli = ul.appendChild(ele);    
        ulli.appendChild(name);
        ulli.appendChild(town);
        ulli.appendChild(postcode);
        ulli.appendChild(url);
        // removes empty text nodes and tidies up DOM tree 
        ulli.normalize();
      }
    }
    else {
      while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
        displayUnis;
      }
      displayUnis();
    }
  }    
}
}


