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
