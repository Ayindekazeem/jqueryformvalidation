
$(document).ready(function(){
$("#myform").submit(function(event){
event.preventDefault();
var Fullname = $.trim($("#fullname").val());
var Othername = $.trim($("#othername").val());
var Email = $.trim($("#email").val());
var Password = $.trim($("#password").val());
var Confirmpass= $.trim($("#confirm").val());
var Phonenumber = $.trim($("#phone").val());
var Areacode = $.trim($("#areacode").val());
var Birthdate = $.trim($("#birthday").val());
var Occupation = $.trim($("#occupation").val());
var chang = Fullname.toLowerCase();
var Names = chang.split(" ");
var  regfname = /^[a-zA-Z]+(?:\s[a-zA-Z]+)$/
var  regname = /^[a-zA-Z\-]+$/;
var regmail = /^[a-z]{1,40}_?\d{0,10}@.*\.[a-z]{2,}$/
var regpass=  /^[A-Za-z]\w{7,16}$/;
var regphone = /^[0-9]+$/;

$("#fullname_err").html("");
$("#othername_err").html("");
$("#email_err").html("");
$("#password_err").html("");
$("#confirm_err").html("");
$("#phone_err").html("");
$("#areacode_err").html("");
$("#birthday_err").html("");
$("#occupation_err").html("");
$("#gender_err").html("");
$("#sumbit_err").html("");

// Full name validation
  if(Fullname == ""){
    $("#fullname").focus();
    $("#fullname_err").show();
    $("#fullname_err").html("Please enter your full name");
}
   else if(!Fullname.match(regfname))
       {
    $("#fullname").focus();
    $("#fullname_err").show();
    $("#fullname_err").html("Please Enter your first name and your last name only");
    }
      
      //  Other name validation
    else if(Othername == "" ){
    $("#othername").focus();
    $("#othername_err").show();
    $("#othername_err").html("please enter your other name");
     }

     else if(Othername.length < 3){
    $("#othername").focus();
    $("#othername_err").show();
    $("#othername_err").html("Please your other name should less than 3 characters");
    }
    else if(!Othername.match(regname))
    {
    $("#othername").focus();
    $("#othername_err").show();
    $("#othername_err").html("Please your name is not well formated");
    }

    // Email validation
    else if(Email == ""){
    $("#email").focus();
    $("#email_err").show();
    $("#email_err").html("Please enter your enter your email");
    }
    else if (Email.length < 3 ){
    $("#email").focus();
    $("#email_err").show();
    $("#email_err").html("Please email should not less than 3 characters");
    }

    else if (!Email.match(Names[0]) && !Email.match(Names[1]) ){
      $("#email").focus();
      $("#email_err").show();
      $("#email_err").html("Please one of your full names should be part of your email and should be lowercase");
      }

    else if(!Email.match(regmail))
    {
    $("#email").focus();
    $("#email_err").show();
    $("#email_err").html("Please email is not well formated");
    }
    
    // Password validation
    else if(Password == ""){
    $("#password").focus();
    $("#password_err").show();
    $("#password_err").html("Please enter your password ");
    }
    else if (Password.length < 8 ){
    $("#password").focus();
    $("#password_err").show();
    $("#password_err").html("Please password should not less than 8 characters");
    }
    else if(!Password.match(regpass))
    {
    $("#password").focus();
    $("#password_err").show();
    $("#password_err").html("Wrong password!... Password must be between 8 to 17 characters, it can contain letters, numbers, underscore and first character must be a letter");
    }

    // ConfirmPassword validation
    else if(Confirmpass == ""){
    $("#confirm").focus();
    $("#confirm_err").show();
    $("#confirm_err").html("Please confirm your password ");
    }
    else if (Confirmpass.length < 8 ){
    $("#confirm").focus();
    $("#confirm_err").show();
    $("#confirm_err").html("Wrong password!");
    }
    else if(!Confirmpass.match(regpass))
    {
    $("#confirm").focus();
    $("#confirm_err").show();
    $("#confirm_err").html("Wrong password!");
    }
    else if (Confirmpass != Password){
    $("#confirm").focus();
    $("#confirm_err").show();
    $("#confirm_err").html("Ooops! password dosnt match");
    }

    // Area code
    else if(Areacode == ""){
    $("#areacode").focus();
    $("#areacode_err").show();
    $("#areacode_err").html("Please select your area code ");
    }
    else if(Areacode != "+234"){
    $("#areacode").focus();
    $("#areacode_err").show();
    $("#areacode_err").html("Please select your area code +234  Nigeria only");
    }

    // Phone validation
    else if(Phonenumber == ""){
    $("#phone").focus();
    $("#phone_err").show();
    $("#phone_err").html("Please enter your phone number ");
    }
    else if(Phonenumber == ""){
    $("#phone").focus();
    $("#phone_err").show();
    $("#phone_err").html("Please enter your phone number ");
    }
    else if (Phonenumber.substring(0,1)==0){
    $("#phone").focus();
    $("#phone_err").show();
    $("#phone_err").html("Please your phone number should not start with 0");
    }
    else if (Phonenumber.length > 10 || Phonenumber.length < 10){
    $("#phone").focus();
    $("#phone_err").show();
    $("#phone_err").html("Wrong phone number! it should be 10 digits");
    }
    else if (!Phonenumber.match(regphone))
    {
    $("#phone").focus();
    $("#phone_err").show();
    $("#phone_err").html("Phone number is not well formated, letter(s) should not be included");
    }
   
     // Birthdate validation
     else if(Birthdate == ""){
      $("#birthday").focus();
      $("#birthday_err").show();
      $("#birthday_err").html("Please select your date of birth");
      }

      // Occupation validation
     else if(Occupation == ""){
      $("#occupation").focus();
      $("#occupation_err").show();
      $("#occupation_err").html("Please select your occupation");
      }

      // Gender validation
      else if ($("#gender:checked").length == 0){
      $("#gender_err").show();
      $("#gender_err").html("Please select your gender");
      }

      // Terms and Condition validation
      else if ($("#agree:checked").length == 0){
      $("#agree_err").show();
      $("#agree_err").html("Please agree with terms and condition");
      }
  
      else{
      $("#submit_err").show();
      $("#submit_err").html('Form Successfully Submitted');
      $('#myform').get(0).reset();
      }
//   else{
// alert('Form Successfully Submitted');
// window.location.reload()
// return true;}

 
  

});

});


  
  // function myFunction() {
  //   var x = document.getElementById("password");
  //   if (x.type === "password") {
  //     x.type = "text";
  //   } else {
  //     x.type = "password";
  //   }
  // }

  // function myConfirm() {
  //   var y = document.getElementById("confirm");
  //   if (y.type === "password") {
  //     y.type = "text";
  //   } else {
  //     y.type = "password";
  //   }
  // }
  

  
  

