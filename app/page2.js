
exports.lastPage = args => {
    console.log("Go to Last page: " );

    const button = args.object;
    const page = button.page;

    page.frame.goBack();
    
}//lastPage

exports.onTap = () => {
    alert("Go Back!!")
}