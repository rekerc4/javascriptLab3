"use strict"; 

class AddressBook {
    constructor(contact){
        this.contact = [];
        };
    add(info){
        this.contact.splice(this.contact.length, 0, info);
    }
    deleteAt(index){
        this.contact.splice(index, 1); 
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
        for(let i in this.contact){
            if(this.contact[i] == name){
                this.contact.splice(i, 1); 
            }
        }

    }
    updateByName(name, newNumber, newEmail){
        for(let i in this.contact){
            if(this.contact[i] == name){
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
}

class Contact { 
    constructor(name, email, phone, relation){
        this.name = name; 
        this.email = email; 
        this.phone = phone; 
        this.relation = relation; 
    }
}

let tree = (p) => {
    p = p.toLocaleLowerCase().trim(); 
    let rep = p.replace(/[\W0-9_]+/g, ''); 
    if(rep === "a"){
        let n = prompt("What is the name of your new contact?");
        let ph = prompt("What is the phone number of your new contact?");
        let e = prompt("What is the email of your new contact?");
        let r = prompt("What is the relation of your new contact?");
        book.add(new Contact(n, ph, e, r, p));
        let p = prompt("Add, Remove, Print, or Quit?");
        tree(p); 
       
    }
    else if(rep === "r"){
        let p = prompt("Add, Remove, Print, or Quit?");
    }
    else if(rep === "p"){
        let p = prompt("Add, Remove, Print, or Quit?");
    }
    else if(rep === "q"){
        return; 
    }
    else{
        p = prompt("I didnt catch that please enter either print, add, remove, update, or quit.")
    }
}

let p = prompt("Add, Remove, Print, or Quit?");

tree(p);


const book = new AddressBook();

book.add(new Contact("You", "you@you.org", 2345679876, "you")); 
book.add(new Contact("Them", "them@them.net", 9195853952, "them")); 
book.add(new Contact("They", "they@they.biz", 9883929476, "they")); 
book.add(new Contact("Those", "those@co.uk", 4858339287, "those"));
book.add(new Contact("Me", "me@whitehouse.gov", 5982671976, "me"));
console.log(book); 

book.deleteAt(1); 

book.print();

book.deleteByName

