"use strict"; 

class AddressBook {
    constructor(contact){
        this.contact = [];
        };
    add(info){
        this.contact.splice(this.contact.length, 0, info);
        this.display(this.contact[this.contact.length - 1]); 
        
    }
    deleteAt(index){
        let theIndex = parseInt(index);
        this.contact.splice(theIndex, 1); 
        console.log(book)
    }
    print(){
        for(let i in this.contact){
            let str = JSON.stringify(this.contact[i]);
            let useStr = str.replace(/([",])/g, ' ');
            console.log(i + ".  " + useStr);
        }

    }
    deleteByName(name){
        name = name.toLowerCase().trim(); 
        for(let i in this.contact){
            let com = this.contact[i].name.toLowerCase().trim();
            console.log(com); 
            console.log(name);
            if(com == name){
                this.contact.splice(i, 1); 
            }
        }

    }
    updateByName(name, newNumber, newEmail){
        for(let i in this.contact){
            let com = this.contact[i].name.toLowerCase().trim();
            console.log(com); 
            console.log(name);
            if(com == name){
                if(!newNumber){

                }
                else{
                    this.contact[i].phone = newNumber; 
                }
                if(!newEmail){

                }
                else{
                    this.contact[i].email = newEmail; 
                }
            }
        }
    }
    display(newE){
        console.log(this.contact.length)
        console.log(newE); 
        let email = newE.email; 
        let name = newE.name;
        let phone = newE.phone; 
        let rel = newE.relation; 
       
        
        let emDiv = document.createElement("div"); 
        let nDiv = document.createElement("div");
        let phDiv = document.createElement("div");
        let relDiv = document.createElement("div");
        let trDiv = document.createElement("div");
        let icon = document.createElement("i")
        
        emDiv.classList.add("e");
        nDiv.classList.add("n");
        phDiv.classList.add("ph");
        relDiv.classList.add("rel");
        trDiv.classList.add("trash");
        icon.classList.add("tbr");
        icon.classList.add("material-icons");
        
        let nText = document.createTextNode(name); 
        let emText = document.createTextNode(email);
        let phText = document.createTextNode(phone);
        let relText = document.createTextNode(rel);
        let trTextNode = document.createTextNode("delete");
        
        nDiv.appendChild(nText);
        emDiv.appendChild(emText);
        phDiv.appendChild(phText);
        relDiv.appendChild(relText);
        icon.appendChild(trTextNode);


        let disContact = document.createElement("section");
        disContact.classList.add("contact");
        document.getElementById("cont-list").appendChild(disContact);
        disContact.appendChild(nDiv);
        disContact.appendChild(emDiv);
        disContact.appendChild(phDiv);
        disContact.appendChild(relDiv);
        disContact.appendChild(icon);

        icon.addEventListener("click", function(){
            let inter = setInterval(function(){
                if (!disContact.style.opacity){
                    disContact.style.opacity = 1; 
                }
                if(disContact.style.opacity > 0){
                    disContact.style.opacity -= 0.1; 
                }
                else{
                    disContact.parentNode.removeChild(disContact);
                    clearInterval(inter)
                }
            }, 100);
            inter();
           
        });

    }
}

class Contact { 
    constructor(name, email, phone, relation){
        this.name = name; 
        this.email = email; 
        this.phone = phone; 
        this.relation = relation; 
    }
}

const book = new AddressBook();

book.add(new Contact("Megan", "megan@grandcircus.co", "111-222-3333", "friend")); 
book.add(new Contact("Julie", "julie@grandcircus.co", "111-222-3333", "coworker")); 
book.add(new Contact("Jon", "jon@grandcircus.co", "111-222-3333", "coworker")); 


document.getElementById('form').addEventListener("submit", function(event){
    let name = document.getElementById("name").value; 
    let email = document.getElementById("email").value; 
    let phone = document.getElementById("phone").value; 
    let rel = document.getElementById("relation").value; 
    book.add(new Contact(name, email, phone, rel));
});



// let eithOr = (nOrIn) => {
//     nOrIn = nOrIn.toLowerCase().trim(); 
//     let sel = nOrIn.replace(/[\W0-9_]+/g, '').slice(0, 1); 
//     if(sel === "n"){
//         let whatName = prompt("What name do you want to delete?");
//         book.deleteByName(whatName); 
//     }
//     else if(sel === "i"){
//         let whatIndex = prompt("What index do you want to delete?");
//         book.deleteAt(whatIndex);
//         let p = prompt("Add, Remove, Print, or Quit?");
//         tree(p); 
//     }
//     else{
//       let plSelRight = prompt("Select either index or name!");   
//       eithOr(plSelRight);  
//     }
// }

// let tree = (p) => {
//     p = p.toLowerCase().trim(); 
//     let rep = p.replace(/[\W0-9_]+/g, '').slice(0, 1); 
//     if(rep === "a"){
//         let n = prompt("What is the name of your new contact?");
//         let ph = prompt("What is the phone number of your new contact?");
//         let e = prompt("What is the email of your new contact?");
//         let r = prompt("What is the relation of your new contact?");
//         book.add(new Contact(n, ph, e, r, p));
//         p = prompt("Add, Remove, Print, or Quit?");
//         tree(p); 
       
//     }
//     else if(rep === "r"){
//         let nOrIn = prompt("Do you want to remove by index or name?");
//         eithOr(nOrIn); 
//         p = prompt("Add, Remove, Print, or Quit?");
//         tree(p);

//     }
//     else if(rep === "p"){
//         book.print(); 
//         p = prompt("Add, Remove, Print, or Quit?");
//         tree(p);
//     }
//     else if(rep === "q"){
//         return; 
//     }
//     else{
//         p = prompt("I didnt catch that please enter either print, add, remove, update, or quit."); 
//         tree(p); 
//     }
// }

// let p = prompt("Add, Remove, Print, or Quit?");

// tree(p);

// function(num, n){
//     let d = num / n;
//     let ceiling = Math.ceil(d); 
//     if(d === ceiling){
//         return 0; 
//     }
//     else{
//         let whatever = ceiling - d; 
//     }
// }


