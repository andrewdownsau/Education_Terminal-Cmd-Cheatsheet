//Javascript for Terminal Command Cheatsheet WebApp
//Function that generates a dropdown list after reading the xml command data


//Function to generate the dropdown list, will only be triggered once the xml file has been read
function generateDropdown(title,description,options){
	var commandInstance = document.createElement('tr');
	document.getElementById('renderArea').appendChild(commandInstance);
	
		var selectInstanceCell = document.createElement('td');
		commandInstance.appendChild(selectInstanceCell);
		
		var selectInstance = document.createElement('select');
		selectInstance.setAttribute("id", "commands");
		selectInstance.onchange  =  displayText;
		selectInstanceCell.appendChild(selectInstance);

		var optgroup = document.createElement('optgroup');
		optgroup.setAttribute("label", "Commands");
		
		selectInstance.appendChild(optgroup);
		
		var selectOption = document.createElement('option');
		selectOption.setAttribute("value", "select");
		selectOption.innerHTML = "Select:";
		
		selectInstance.appendChild(selectOption);
		
		for(var i=0; i < title.length; i++){
			var Option = document.createElement('option');
			Option.setAttribute("value", i);
			Option.innerHTML = title[i];
		
			selectInstance.appendChild(Option);
			
		}
		
		
		//Create instance of description and options for selected command
		var descriptionInstance = document.createElement('td');
		commandInstance.appendChild(descriptionInstance);
		descriptionInstance.setAttribute("id", "description");
		
		var optionsInstance = document.createElement('td');
		commandInstance.appendChild(optionsInstance);
		optionsInstance.setAttribute("id", "options");
 };


function displayText(){
	
	var commandIndex = document.getElementById("commands").value;
	var optionsInstance = document.getElementById('options');
	var descriptionInstance = document.getElementById('description');
	
	//If command selected, display description and possible options
	if(commandIndex != "select" ){
		descriptionInstance.innerHTML = description[commandIndex];
		optionsInstance.innerHTML = options[commandIndex];
	}else{
		descriptionInstance.innerHTML = "";
		optionsInstance.innerHTML = "";
	}
	
	
	
	
}