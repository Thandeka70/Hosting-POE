// Form Validation
//Get the References to the form and its Elements

var bookingForm = document.getElementById("bookingForm");

// Form inputs and Error Spans
var fullnameInput = document.getElementById("fullname");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var checkinInput = document.getElementById("checkin");
var checkoutInput = document.getElementById("checkout");
var guestInput = document.getElementById("guest");
var specialRequestInput = document.getElementById("specialRequest");

var nameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var phoneError = document.getElementById("phoneError");
var apartmentError = document.getElementById("apartmentError");
var checkinError = document.getElementById("checkinError");
var checkoutError = document.getElementById("checkoutError");
var guestError = document.getElementById("guestError");

//Prevent past date selection for check-in
var today = new Date().toISOString().split("T")[0];
checkinInput.setAttribute("min", today);
checkoutInput.setAttribute("min", today);

//Form submission validation handler
bookingForm.addEventListener("submit",function(event){
    event.preventDefault();
    var isValid = true;

    //Clear all previous errors
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    phoneError.innerHTML = "";
    apartmentError.innerHTML= "";
    checkinError.innerHTML = "";
    checkoutError.innerHTML = "";
    guestError.innerHTML = "";

     //1. Validate the Full name Field

    if (fullnameInput.value.trim() === "") {
        nameError.innerHTML = "Full Name is required";
        isValid = false;
    }

    //2.Validate the Phone Number Field

    if (phoneInput.value.trim() === "") {
        phoneError.innerHTML = "Phone Number is required";
        isValid = false;
    }

    //3. Validate the Email Field
    //A simple regex pattern to check for a basic email patter

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
        emailError.innerHTML = "Email is required";
        isValid = false;
    } else if (!
        emailPattern.test(emailInput.value)) {
        emailError.innerHTML = "Please enter a valid email address";
        isValid = false;
    }
    //4.Accommodation Selection Validation
    var selectedApartment = document.querySelector('input[name="apartment"]:checked');
    if(!selectedApartment){
        apartmentError.innerHTML = "Please select ana accommodation option.";
        isValid = false
    }

    //5.check-In and check-out Date Validation
    var checkinVal = checkinInput.value;
    var checkoutVal = checkoutInput.value;

    if(checkinVal.value.trim()===""){
        checkinError.innerHTML = "Check-in date is required.";
        isValid = false;
    }

    if(checkoutVal.value.trim()===""){
        checkoutError.innerHTML = "Check-out date is required.";
        isValid = false;
    }else if (checkinVal !=="" && checkoutVal <= checkinVal){
        checkoutError.innerHTML = "Check-out must be after check-in date.";
        isValid = false;
    }

    //6. Number of guiests Validation
    var guestCount = parseInt(guestInput.value.trim(), 4);
    if (guestInput.value.trim() ==="" || isNaN(guestCount) || guestCount < 1) {
        guestError.innerHTML = "Please enyer a valid number of guest (minimum 1).";
        isValid = false
    }

    //If the form is valid, you can submit it or process the data
    if (isValid) {

        //Step 1: Specify the email recipient (your email address)
        var recipient = "ST10505979@myemeris.edu.za";

        //Step 2: Create the email subject
        var subject = "New Booking Reservation Request -" + fullnameInput.value.trim();

        //Step 3: Create the email message
        var body = "Good day Da Luna Apartments,\n\n" +
            "I would like to placea resrvation request:\n\n" +
            "Guest Name: " + fullnameInput.value.trim() + "\n" +
            "Email: " + emailInput.value.trim() + "\n\n" +
            "Phone: " + phoneInput.value.trim() + "\n"+
            "Accommodation:" +selectedApartment.value+ "\n"+
            "Check-in Date:" +checkinVal+ "\n" + 
            "Check-out Date:" +checkoutVal+ "\n" +
            "Number of Guests:" + guestCount + "\n" +
            "Special Requests: " + (specialRequestInput.value.trim()|| "None")+"\n\n" +
            "Kind regards,\n" +
            fullnameInput.value.trim();

        //step 4: Create the mailto link
        var mailtoLink = "mailto:" +
            recipient +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);

        //step 5: Open the users default email application
        window.location.href = mailtoLink;
    }


});

