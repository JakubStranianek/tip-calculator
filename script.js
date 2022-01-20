document.getElementById("tbPeople").addEventListener("input", function() {
    var valueOfTb = document.getElementById("tbPeople").value;
    var pError = document.getElementById("showError");
    var borderInput = document.getElementById("tbPeople");
    if (isNaN(valueOfTb)) {
        pError.innerHTML = "Can't be text";
        pError.style.display = "block";
        borderInput.style.border = "1px solid red";
    } else if(valueOfTb == "0"){
        pError.innerHTML = "Can't be zero";
        pError.style.display = "block";
        borderInput.style.border = "1px solid red";
    } else {
        pError.style.display = "none";
        borderInput.style.border = "none";
    }
})

var valuePercent;

function getVal(value) {
    valuePercent = value;  
    //alert(valuePercent);  
}

function calculate() {
    var valueOfTbPeople = document.getElementById("tbPeople").value;
    var valueOfTbAmount = document.getElementById("tbAmount").value;
    var tipAmount;
    var total;

    if (valueOfTbPeople <= 0 || valueOfTbAmount <= 0) {
        tipAmount = 0;
        total = 0;   
    } else {
        tipAmount = (valueOfTbAmount) * (valuePercent/100);
        tipAmount = (tipAmount) / (valueOfTbPeople); 
        total = ((valueOfTbAmount) / (valueOfTbPeople)) + (tipAmount);
    }

    document.getElementById("firstMount").innerHTML = "$" + tipAmount.toFixed(2);
    document.getElementById("secondMount").innerHTML = "$" + total.toFixed(2);
}

function reset() {
    var zero = 0;
    var valueOfTbPeople = document.getElementById("tbPeople").value = "";
    var valueOfTbAmount = document.getElementById("tbAmount").value = "";
    document.getElementById("firstMount").innerHTML = "$" + zero.toFixed(2);
    document.getElementById("secondMount").innerHTML = "$" + zero.toFixed(2);

}
