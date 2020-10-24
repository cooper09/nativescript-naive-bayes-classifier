const Observable = require("@nativescript/core").Observable;

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

    viewModel.item = 12;

    viewModel.counter = 42;
    viewModel.message = getMessage(viewModel.counter);

    viewModel.onTap = () => {
        viewModel.counter--;
        viewModel.set("message", getMessage(viewModel.counter));
    };

    viewModel.selectItem = (e) => {
        console.log("Item Selected: ", e.index );
        testfunc();
        viewModel.set("item",e.index);
    }

    return viewModel;
}

const testfunc =() =>{
    alert("Ah-Ha!!!")
}
exports.createViewModel = createViewModel;
