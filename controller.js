
class Character{
    constructor(name, tier, style, age){
        this.name = name;
        this.tier = tier;
        this.style = style;
        this.age = age;
    }

    toString(){
        return `name: ${this.name}, tier: ${this.tier}, style: ${this.style}, age: ${this.age}`;
    }
}

console.log("Hello World!");

let josieObj = {
    "name": "Josie",
    "tier": "bottom",
    "style": "escrima",
    "age": 18
};

let numList = [];

console.log(numList);

function enter(){
    let num = document.getElementById("input").value;
    console.log(num); 
    numList.push(num);
    document.getElementById("hello").innerHTML = numList;
    console.log(josieObj);
}

function sort(){
    // numList.sort((a,b)=>a-b);
    // console.log(numList);
    // document.getElementById("hello").innerHTML = numList;
    //let strObject = printObject();
    //document.getElementById("hello").innerHTML = strObject;    
    console.log(josieObj);

    
    let name = document.getElementById("inputName").value;
    let tier = document.getElementById("inputTier").value;
    let style = document.getElementById("inputStyle").value;
    let age = document.getElementById("inputAge").value;
    let summon = new Character(name,tier,style,age);

    numList.push(summon.toString());
    console.log(numList);


    //I will teach this way later
    let ex = document.createElement("p");
    let node = document.createTextNode(summon.toString());
    ex.appendChild(node);
    document.getElementById("charList").append(ex);
}

function printObject(){
    let words = "";


    return words;
}