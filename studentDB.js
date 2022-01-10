let person = [
    {
        "Name": "Phillip",
        "Hometown": "Canton, MI",
        "FavoriteFood": "Fried Chicken"
    },
    {
        "Name":"Andy",  
        "Hometown": "Berkely, MI",
        "FavoriteFood": "French Fries"
    },
    {
        "Name":"Cassly",
        "Hometown": "Detroit, MI",
        "FavoriteFood": "Steak"
    },
    {
        "Name":"Zachary",  
        "Hometown": "Wyandotte, MI",
        "FavoriteFood": "Sushi"
    },
    {
        "Name":"Cortez",  
        "Hometown": "Detroit, MI",
        "FavoriteFood": "Chicken Fettuccine Alfredo"
    },
    {
        "Name":"Richard",  
        "Hometown": "Canton, MI",
        "FavoriteFood": "Sushi"
    },
    {
        "Name":"Erin",  
        "Hometown": "Troy, MI",
        "FavoriteFood": "Tacos"
    },
    {
        "Name":"James",  
        "Hometown": "Yap, FSM",
        "FavoriteFood": "Katsu"
    },
    {
        "Name":"Cullin",  
        "Hometown": "Fowlerville, MI",
        "FavoriteFood": "Pad Thai"
    }];

function learnAboutAStudent(num){
    var student = person[num];
    var userChoice = prompt("Student " + num + " is " + student.Name + "! Would you like to learn about " + student.Name + "'s hometown or favorite food?");
    if(userChoice.trim().toLowerCase() == "hometown"){
        console.log(student.Name + "'s hometown is " + student.Hometown);        
    } else if (userChoice.trim().toLowerCase() === "favorite food" || userChoice.trim().toLowerCase() === "food" || userChoice.trim().toLowerCase() === "favorite"){
        console.log(student.Name + "'s favorite food is " + student.FavoriteFood)
    }
}

function studentLoop(){    
    var loop = true;
    while(loop){
        var num = prompt("Enter a number between 0 - 8");
        if(num>=8 && num <=0 || isNaN(num)){
            num = prompt("Enter a number between 0 - 8");
        } else {
        learnAboutAStudent(num);
        }
        var check = prompt("Enter lakdfjalkdfjaslkfjasdfklj to stop learning about students");
        if(check === "lakdfjalkdfjaslkfjasdfklj"){
            loop = false;
        }
    }
}

