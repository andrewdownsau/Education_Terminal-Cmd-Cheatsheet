//Javascript for Terminal Command Cheatsheet WebApp
//Function that generates a tabbed list after reading the xml command data

//Function to generate the tabbed list, will only be triggered once the xml file has been read
function generateTabbedList(title,description,options){
	var ul = document.createElement('ul');

        document.getElementById('renderArea').appendChild(ul);

        for(var i=0; i < title.length ; i++){
			var li = document.createElement('li');
			var pre = document.createElement('pre');

			ul.appendChild(li);
			li.appendChild(pre);
			
			var listItemTitle = title[i];
			var listItemDescription = description[i];
			
			
			for(var k=0; k < 10-title[i].length; k++) listItemTitle += " ";
			if(i == 12) listItemTitle += "        ";
			
			for(var k=0; k < 75-description[i].length; k++) listItemDescription += " ";

			pre.innerHTML = listItemTitle + listItemDescription + options[i];
            
			
		}
    
 };

