//Javascript for Terminal Command Cheatsheet WebApp
//Function that generates a table after reading the xml command data

//Function to generate the table, will only be triggered once the xml file has been read
function generateTable(title,description,options){

        for(var i=0; i < title.length ; i++){
			
			var tr = document.createElement('tr');
			document.getElementById('renderArea').appendChild(tr);
			
				for(var j=0; j < 3; j++){
					
					var td = document.createElement('td');
					tr.appendChild(td);
				
					if(j==0)td.innerHTML = title[i];
					else if(j==1)td.innerHTML = description[i];
					else if(j==2)td.innerHTML = options[i];
				}
            
			
		}
    
 };