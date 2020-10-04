function vpa () {
    var totalvpa = Number(document.getElementById("totalvpa").value);
    var albumin = Number(document.getElementById("albumin").value);
    var alfa;
    if (albumin >= 42.000 && albumin <=42.999) {
        alfa = 6.5;
    } else if (albumin >= 41.000 && albumin <= 41.999) {
        alfa = 6.8;
      }
      else if (albumin >= 40.000 && albumin <= 40.999) {
        alfa = 7.3;
      }
      else if (albumin >= 39.000 && albumin <= 39.999) {
        alfa = 7.9;
      }
      else if (albumin >= 38.000 && albumin <= 38.999) {
        alfa = 8.5;
      }
      else if (albumin >= 37.000 && albumin <= 37.999) {
        alfa = 9.1;
      }
      else if (albumin >= 36.000 && albumin <= 36.999) {
        alfa = 9.8;
      }
      else if (albumin >= 35.000 && albumin <= 35.999) {
        alfa = 10.5;
      }
      else if (albumin >= 34.000 && albumin <= 34.999) {
        alfa = 11.3;
      }
      else if (albumin >= 33.000 && albumin <= 33.999) {
        alfa = 12.1;
      }
      else if (albumin >= 32.000 && albumin <= 32.999) {
        alfa = 13;
      }
      else if (albumin >= 31.000 && albumin <= 31.999) {
        alfa = 14;
      }
      else if (albumin >= 30.000 && albumin <= 30.999) {
        alfa = 15;
      }
      else if (albumin >= 29.000 && albumin <= 29.999) {
        alfa = 16.2;
      }
      else if (albumin >= 28.000 && albumin <= 28.999) {
        alfa = 17.4;
      }
      else if (albumin >= 27.000 && albumin <= 27.999) {
        alfa = 18.7;
      }
      else if (albumin >= 26.000 && albumin <= 26.999) {
        alfa = 20.1;
      }
      else if (albumin >= 25.000 && albumin <= 25.999) {
        alfa = 21.6;
      }
      else if (albumin >= 24.000 && albumin <= 24.999) {
        alfa = 23.2;
      }
      else if (albumin >= 23.000 && albumin <= 23.999) {
        alfa = 24.9;
      }
      else if (albumin >= 22.000 && albumin <= 22.999) {
        alfa = 26.8;
      }
      else if (albumin >= 21.000 && albumin <= 21.999) {
        alfa = 28.9;
      }
      else if (albumin >= 20.000 && albumin <= 20.999) {
        alfa = 31;
      }
      else if (albumin >= 19.000 && albumin <= 19.999) {
        alfa = 33.3;
      }
      else if (albumin >= 18.000 && albumin <= 18.999) {
        alfa = 35.8;
      }
      else if (albumin >= 42.000 && albumin <= 43.999) {
        alfa = 6.5  
      }
      else if (albumin >= 44.000 && albumin <= 45.999) {
        alfa = 6.5
      }
      else if (albumin >= 46.000 && albumin <= 55.999)  {
        alfa = 6.3
      }
    var x = 6.5;
    var result = alfa * totalvpa / x; 
    document.getElementById("result").innerHTML = "Free concentration of valproic acid is " + result.toFixed(2) + " mg/dL";
    }
