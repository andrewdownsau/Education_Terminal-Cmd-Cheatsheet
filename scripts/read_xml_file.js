//Javascript for Terminal Command Cheatsheet WebApp
//Function that reads the xml command data and builds 3 arrays that contain titles, descriptions and options
   
//Global Variable arrays for xml content
var title = [];
var description = [];
var options = [];


let getXMLFile = function(path, callback){
	//Create a new request object
	let request = new XMLHttpRequest();
	
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
	
	title = xmlDoc.getElementsByTagName("TITLE");
	description = xmlDoc.getElementsByTagName("DESCRIPTION");
	options = xmlDoc.getElementsByTagName("OPTIONS");
});


