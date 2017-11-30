$(document).ready(function() {
  $("form#cele").submit(function(event) {
    event.preventDefault();

    //debugger;
    var beverage = parseInt($("#favdrink").val());
    var food = parseInt($("#favfood").val());
    var vaca = parseInt($("#favvaca").val());

    var results = beverage + food + vaca

    if (results >= 10 || results === 12) {
      alert("Your Celebrity match is: Brad Pitt!")
    } else if (results > 4 && results < 5) {
      alert("Your Celebrity match is: Chris Hemingsworth!")
    } else if ( results > 5 || results < 10) {
      alert("Your Celebrity match is: Morgan Freeman!")
    }
    else {

    }



  });

});
