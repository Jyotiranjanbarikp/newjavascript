const person={};
    person.name="Web_bocket";
    person.location="bbsr";
    person.age=23;
    person.inloggedIn=false;
    person["height"]="5.6";

    console.log(person);
    console.log(person.name);
    console.log(person.location);
    console.log(person["height"]);

    console.log(Object.keys(person));
    console.log(Object.values(person));
    console.log(person.hasOwnProperty("isLoggedIn"));
    // console.log(person1.hasOwnProperty("isLoggedIn"));
    // console.log(Object.entries(person1));
    console.log(Object.entries(person));


