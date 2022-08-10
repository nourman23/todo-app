

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