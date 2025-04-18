function vpa () {
    var totalvpa = Number(document.getElementById("totalvpa").value);
    var albumin = Number(document.getElementById("albumin").value);
    var alfa;
    if (albumin === 42) {
        alfa = 6.5;
    } else if (albumin === 41) {
        alfa = 6.8;
      }
      else if (albumin === 40) {
        alfa = 7.3;
      }
      else if (albumin === 39) {
        alfa = 7.9;
      }
      else if (albumin === 38) {
        alfa = 8.5;
      }
      else if (albumin === 37) {
        alfa = 9.1;
      }
      else if (albumin === 36) {
        alfa = 9.8;
      }
      else if (albumin === 35) {
        alfa = 10.5;
      }
      else if (albumin === 34) {
        alfa = 11.3;
      }
      else if (albumin === 33) {
        alfa = 12.1;
      }
      else if (albumin === 32) {
        alfa = 13;
      }
      else if (albumin === 31) {
        alfa = 14;
      }
      else if (albumin === 30) {
        alfa = 15;
      }
      else if (albumin === 29) {
        alfa = 16.2;
      }
      else if (albumin === 28) {
        alfa = 17.4;
      }
      else if (albumin === 27) {
        alfa = 18.7;
      }
      else if (albumin === 26) {
        alfa = 20.1;
      }
      else if (albumin === 25) {
        alfa = 21.6;
      }
      else if (albumin === 24) {
        alfa = 23.2;
      }
      else if (albumin === 23) {
        alfa = 24.9;
      }
      else if (albumin === 22) {
        alfa = 26.8;
      }
      else if (albumin === 21) {
        alfa = 28.9;
      }
      else if (albumin === 20) {
        alfa = 31;
      }
      else if (albumin === 19) {
        alfa = 33.3;
      }
      else if (albumin === 18) {
        alfa = 35.8;
      }
    var x = 6.5;
    var result = alfa * totalvpa / x; 
    document.getElementById("result").innerHTML = "Free concentration of valproic acid is " + result.toFixed(2) + " mg/dL";
    }
