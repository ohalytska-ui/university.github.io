function countValues() {
    //Get the values and then calculate them
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let years = parseInt(document.getElementById("years").value);
    let interest = principal * years * rate / 100;
    let yearInTheFuture = new Date().getFullYear() + years;
    //Create the output text
    document.getElementById("result").innerHTML = "Interest : If you deposit <mark>" + principal + "</mark>,<br/>" +
        "at an interest rate of <mark>" + rate + "</mark>,<br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
        "in the year <mark>" + yearInTheFuture + "</mark>";

}

//Update ther input values
function getSliderValue() {
    document.getElementById("rateSpan").innerHTML = document.getElementById("rate").value;
}

//IsPositive values
function validateAmount() {
    let principal = document.getElementById("principal").value;
    let biggerThanZero = parseInt(principal) > 0;
    if (!biggerThanZero) {
        alert("Enter a positive number!");
        document.getElementById("principal").focus();
    }
}
