// Form Validation
//Get the References to the form and its Elements
var myForm = document.getElementById("myForm");
var fullNameInput = document.getElementById("fullName");
var phonenumberInput =document.getElementById("phonenumber")
var emailInput = document.getElementById("email");
var inquiryInput = document.getElementById("inqury");


//Error Spans
var nameErrorSpan = document.getElementById("nameError");
var phonenumberErrorSpan = document.getElementById("phonenumberError")
var emailErrorSpan = document.getElementById("emailError");
var inqiryErrorSpan = document.getElementById("inquiryError");

//Add an event listener to the forms submit button
myForm.addEventListener("submit", function (event) {

    //prevent the default form submission (so we can validate first)
    event.preventDefault();

    //Assume that the form is valid Initially
    var isValid = true;

    //clear previous error messages
    nameErrorSpan.innerHTML = "";
    phonenumberErrorSpan.innerHTML="";
    emailErrorSpan.innerHTML = "";
    inqiryErrorSpan.innerHTML ="";
    


    //1. Validate the Full name Field

    if (fullNameInput.value.trim() === "") {
        nameErrorSpan.innerHTML = "Full Name is required";
        isValid = false;
    }

    //2.Validate the Phone Number Field

    if (phonenumberInput.value.trim() === "") {
        phonenumberErrorSpan.innerHTML = "Phone Number is required";
        isValid = false;
    }

    //3. Validate the Email Field
    //A simple regex pattern to check for a basic email patter

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
        emailErrorSpan.innerHTML = "Email is required";
        isValid = false;
    } else if (!
        emailPattern.test(emailInput.value)) {
        emailErrorSpan.innerHTML = "Please enter a valid email address";
        isValid = false;
    }

    //4. Validate Inquiry Text area
    if (inquiryInput.value.trim()===""){
        inqiryErrorSpan.innerHTML= "Please Enter your Inquiry";
        isValid= false;
    }

    


    //If the form is valid, you can submit it or process the data
    if (isValid) {

        //Step 1: Get the information entered by the Customer
        var fullName = fullNameInput.value.trim();
        var phoneNumber = phonenumberInput.value.trim();
        var email = emailInput.value.trim();
        var Inquiry = inquiryInput.value.trim();

        //Step 2: Specify the email recipient (your email address)
        var recipient = "ST10505979@myemeris.edu.za";

        //Step 3: Create the email subject
        var subject = "Da Luna Apartments - Customer Inquiry Form";

        //Step 4: Create the email message
        var body = "Good day,\n\n" +
            "You have received a new inquiry from Da Luna Apartments Website:\n\n" +
            "Full Name: " + fullName + "\n" +
            "Phone Number: " + phoneNumber + "\n"+
            "Email: " + email + "\n\n" +
            "Inquiry Details: " + Inquiry+ "\n\n" +
            "Kind regards,\n" +
            fullName;

        //step 5: Create the mailto link
        var mailtoLink = "mailto:" +
            recipient +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);

        //step 6: Open the users default email application
        window.location.href = mailtoLink;
    }

    //Here, you would typically use myForm.submit() to send the data to a server
    //For this example we will just show the alert and not submit



});
