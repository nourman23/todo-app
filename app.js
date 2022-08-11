

let name = prompt("Your name ?");
let gender = prompt("Your gender ? ");
let age = prompt("Your age ?");
if(age<0){
    alert("Your age should be greater than 0");

}

if(confirm("do you want to skip the welcoming message ?") == false){
    switch(gender){
        case "female":
        case "Female":
        window.alert("Welcome  Ms " + name );
        break;

        case "male": case "Male":
            window.alert("Welcome  Mr " + name );
            break;
            default:
                window.alert("Welcome  " + name );
            

    }
}



let answers =[];
answers[0]=prompt(" Do you like Red ?");
answers[1]=prompt("Do you like Yellow ?");
answers[2]=prompt("Do you like Black ?");

for(let i=0 ; i<3 ; i++){
 switch(answers[i]){
    case "Yes":
    case "y":
    case "yes":

        break;

    case "No":
    case "n":
    case "no":
        break;

    default:
        answers[i]="invalid";

}
}

console.log(answers);

let num =prompt("How many stars you rate my website ?");

while(isNaN(num))
    num =prompt("How many stars you rate my website ?");
if(num<0)
num=0;
else if (num>5)
num=5;


console.log("u rated :    "+ num);
alert("thank u");



