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

    viewModel.items = ["I can't go a day without peanut butter",
    "I'll have a burger and fries","Peanut butter is my favorite food"]

    viewModel.item = 0;
    viewModel.something ='Testme';

   // viewModel.counter = 42;
    viewModel.message = getMessage(viewModel.something);

    viewModel.onTap = () => {
        let str = viewModel.something;
        makePrediction(str)
       // viewModel.counter--;
       // viewModel.set("message", getMessage(viewModel.counter));
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
            sentence = "I can't go a day without peanut butter"
        break
        case 1:
            sentence = "I'll have a burger and fries";
        break;
        case 2:
            sentence = "Peanut butter is my favorite food";
        break;
    }//end switch
    console.log("sentence to categorize: ", sentence )

    const classifier = new natural.BayesClassifier();

    //Training Data
    classifier.addDocument("I love peanut butter","true")
    classifier.addDocument("biscuits and jelly","false")
    classifier.addDocument("I love creamy spreads","true")
    classifier.addDocument("How about fish and chips","false")
    classifier.addDocument("Burgers are fattening","false")
    classifier.addDocument("Fries are bad for you..","false")
    //Train
    classifier.train();

       //Predict
       alert("I predict you selected pro peanut butter: " + classifier.classify(sentence));

}//end testfunc 

const makePrediction = (string) =>{
    console.log("makePrediction: ", string );
    const classifier = new natural.BayesClassifier();

    //Training Data
    classifier.addDocument("I love peanut butter","true")
    classifier.addDocument("biscuits and jelly","false")
    classifier.addDocument("I love creamy spreads","true")
    classifier.addDocument("How about fish and chips","false")
    classifier.addDocument("Burgers are fattening","false")
    classifier.addDocument("Fries are bad for you..","false")
    //Train
    classifier.train();

       //Predict
       alert("I predict you selected pro peanut butter: " + classifier.classify(string));


}//end makePrediction
exports.createViewModel = createViewModel;
