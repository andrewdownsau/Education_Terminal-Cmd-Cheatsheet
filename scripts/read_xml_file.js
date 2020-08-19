//Javascript for Terminal Command Cheatsheet WebApp
//Function that reads the xml command data and builds 3 arrays that contain titles, descriptions and options
   
//Global Variable arrays for xml content
var title = [];
var description = [];
var options = [];


let getXMLFile = function(path, callback){
	//Create a new request object
	let request = new XMLHttpRequest();
	
	//Add an Event listener to use the data after it has been loaded
	request.addEventListener("load", CheckPageAndRender);
	
	//Open the object and specify verb and file path 
	request.open("GET", path);
	
	//Set the request header
	request.setRequestHeader("Content-Type", "text/xml");
	
	//Ensure the XML file is set to the right format
	request.overrideMimeType('application/xml');
	
	//Define the event listener
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			callback(request.responseXML);
		}
	};
	
	//Send the request
	request.send();
};


getXMLFile("raw_commands.xml", function(xml) {
	//Log the document on the console to ensure there are no errors
	console.log(xml);
	
	var titleTags = xml.getElementsByTagName("TITLE");
	var descriptionTags = xml.getElementsByTagName("DESCRIPTION");
	var optionsTags = xml.getElementsByTagName("OPTIONS");
	
	//Setting the values inside the tags to the arrays to be used later
	for(var i = 0; i < titleTags.length; i++) title[i] = titleTags[i].innerHTML;
	for(var i = 0; i < descriptionTags.length; i++) description[i] = descriptionTags[i].innerHTML;
	for(var i = 0; i < optionsTags.length; i++) options[i] = optionsTags[i].innerHTML;
	
	
	//console.log(title);
	//console.log(description);
	//console.log(options);
	
});



function CheckPageAndRender(){
	var fileName = location.pathname.split("/").slice(-1)
	
	if(fileName == "list_nested.html") generateNestedList(title,description,options);
	if(fileName == "list_tabs.html") generateTabbedList(title,description,options);
	if(fileName == "table.html") generateTable(title,description,options);
	if(fileName == "dropdown.html") generateDropdown(title,description,options);
}


