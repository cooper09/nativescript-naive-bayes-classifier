
const createViewModel = require("./main-view-model").createViewModel;

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = createViewModel();
}
exports.onNavigatingTo = onNavigatingTo;

exports.myFunction = args =>{
    console.log("MyFunction: ", args.object );
    const page = args.object;
    page.bindingContext = {
     //   something:"Yowsa"
    };
}//end MyFunction

exports.nextPage = args => {
    console.log("Go to Next page: " );

    const button = args.object;
    const page = button.page;

    page.frame.navigate('page2')
    
}//nextPage
