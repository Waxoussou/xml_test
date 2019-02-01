"use strict";

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=top-500-des-imprimes-les-plus-empruntes-a-la-bibliotheque-de-toulouse&rows=500");
xhr.onload = onDataLoaded;
xhr.send(null);


function onDataLoaded(evt) {
    if (this.status == 200) {
        const response = JSON.parse(this.responseText);
        //  console.log ('titre', response.records["0"].fields.titre); 
        // console.log('TITRE', response.parameters.dataset["0"]);
        console.log("element : ", response.parameters.dataset);
        


        const arrayRecords = response.records;

        const title = response.parameters.dataset["0"];



        //create h1
        let h1 = document.createElement('h1');
        h1.innerHTML = title;
        document.body.appendChild(h1);

        //create ul
        let ul = document.createElement('ul');
        document.body.appendChild(ul);

        //boucle for == create 'li'
        for (let index = 0; index < arrayRecords.length; index++) {
            const element = arrayRecords[index];
            //   console.log("element.titre", element.fields.titre);

            let li = document.createElement('li'); 
            li.innerHTML = element.fields.titre+" "+element.fi;  

            ul.appendChild(li);
            

        }
    }

}