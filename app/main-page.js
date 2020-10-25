/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

/*
NativeScript adheres to the CommonJS specification for dealing with
JavaScript modules. The CommonJS require() function is how you import
JavaScript modules defined in other files.
*/

const createViewModel = require("./main-view-model").createViewModel;

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = createViewModel();
}
exports.onNavigatingTo = onNavigatingTo;

exports.myFunction = args =>{
    alert("MyFunction....");
    const page = args.object;
    page.bindingContext = {
        something:"Yowsa"
    };
}//end MyFunction

/*
exports.testfunc =(num) =>{
    console.log("testfunc string: ", num )

    let sentence = "";

    switch (num){
        case 0:
            alert("sentence 1")
            sentence = "These are the times to try Men's souls"
        break
        case 1:
            alert("sentence 2")
            sentence = "Kiss My Black Ass";
        break;
        case 2:
            alert("sentence 3");
            sentence = "Half a League, half a league, half a league forward!";
        break;
    }//end switch
    console.log("sentence to categorize: ", sentence )
    
}//end testfunc */