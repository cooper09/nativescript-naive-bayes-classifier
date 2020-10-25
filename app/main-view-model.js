const Observable = require("@nativescript/core").Observable;

const natural = require('natural');

function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return `${counter} taps left`;
    }
}

function createViewModel() {
    const viewModel = new Observable();

    viewModel.items = ["These are the times to try Men's souls",
    "Kiss My Black Ass","Half a League, half a league, half a league forward!"]

    viewModel.item = 0;
    viewModel.something ='';

   // viewModel.counter = 42;
    viewModel.message = getMessage(viewModel.something);

    viewModel.onTap = () => {
        viewModel.counter--;
        viewModel.set("message", getMessage(viewModel.counter));
    };

    viewModel.selectItem = (e) => {
        console.log("Item Selected: ", e.index);
        testfunc(e.index);
        viewModel.set("item",e.index);
    }

    return viewModel;
}

const testfunc =(num) =>{
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

    const classifier = new natural.BayesClassifier();

    //Training Data
    classifier.addDocument("I love peanut butter","true")
    classifier.addDocument("biscuits and jelly","false")
    classifier.addDocument("I love creamy spreads","true")
    classifier.addDocument("How about fish and chips","false")

    //Train
    classifier.train();

       //Predict
       console.log("I predict: " + classifier.classify(sentence));

}//end testfunc 

exports.createViewModel = createViewModel;
