//Javascript for Terminal Command Cheatsheet WebApp
//Function that generates a nested list after reading the xml command data


//Function to generate the nested list, will only be triggered once the xml file has been read
function generateNestedList(title,description,options){
	var ul = document.createElement('ul');

        document.getElementById('renderArea').appendChild(ul);

        for(var i=0; i < title.length ; i++){
			var li = document.createElement('li');

			ul.appendChild(li);

			li.innerHTML = title[i];
            
			var ul2 = document.createElement('ul');
            li.appendChild(ul2);

			    var li2 = document.createElement('li');
			    var li3 = document.createElement('li');

			    if(description[i] != "") {
			    	ul2.appendChild(li2);
			        li2.innerHTML = description[i];
			    }
			    
			    if(options[i] != "") {
			    	ul2.appendChild(li3);
			        li3.innerHTML = options[i];
			    }

		}
    
 };
 
