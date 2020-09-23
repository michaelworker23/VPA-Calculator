function bmi () {
    var totalvpa = Number(document.getElementById("totalvpa").value);
    var albumin = Number(document.getElementById("albumin").value);
    var result = totalvpa / albumin;
    document.getElementById("result").innerHTML = "The level of free VPA is : " + result;
    }
