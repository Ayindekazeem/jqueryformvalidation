$(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  $(".toggle-confirm").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });


  $( function() {
    $( "#birthday" ).datepicker();
  } );




  // function ValidateDOB(dateString) {
  //   var birthday = $("#birthday");
  //   var parts = dateString.split("/");
  //   var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
  //   var dtCurrent = new Date();
  //   birthday.html("Eligibility 18 years ONLY.")
  //   if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
  //       return false;
  //   }

  //   if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {

  //       //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
  //       if (dtCurrent.getMonth() < dtDOB.getMonth()) {
  //           return false;
  //       }