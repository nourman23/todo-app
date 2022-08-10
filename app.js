

let name = prompt("Your name ?");
let gender = prompt("Your gender ? ");
let age = prompt("Your age ?");



if(confirm("do you want to skip the welcoming message ?") == false){
    switch(gender){
        case "female":
        case "Female":
        window.alert("Welcome  Ms  " + name );
        break;

        case "male": case "Male":
            window.alert("Welcome  Mr" + name );
            default:
                window.alert("Welcome  " + name );
            

    }
}