const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const button = document.getElementById('button');
// button.addEventListener('click', function(e){
//     console.log(e);
// })


// dumb way bto do this check
// form.addEventListener('submit', function(e){
//     e.preventDefault();

//     if(username.value == ""){
//         showError(username , 'Please enter a username');
//     }
//     else{
//         showSuccess(username);
//     }

//     if(email.value == ""){
//         showError(email , 'Please enter your email');
//     }
//     else{

//         if( !String(email.value)
//             .toLowerCase().match(
//             /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//           )){
//             showError(email , 'Please enter a valid email');
//           }
//           else{

//               showSuccess(email);
//           }
//     }
//     if(password.value == ""){
//     showError(password , 'Please enter password');
//     }
//     else{
//         showSuccess(password);
//     }
//     if(confirmPassword.value == ""){
//         showError(confirmPassword , 'Do not match with your password');
//     }
//     else{
//         showSuccess(confirmPassword);
//     }



// })


// elegant way to dpo that 

function checkRequired(array) {

    array.forEach(element => {

        if (element.value.trim() === "") {
            showError(element, `${element.previousElementSibling.textContent
                }  is Required`)

                return false;
        }
        else {
            showSuccess(element);
            
        }
    });
    return true;
}

function checkEmail(input) {
    if (!String(email.value)
        .toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) 
    {
                showError(email, 'Please enter a valid email');
                return false;
    }   
    else {

        showSuccess(email);
        
    }
    return true;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if(checkRequired([username, email, password, confirmPassword]) &&
    checkEmail(email) &&
    checkPassword(password, confirmPassword)){
        alert('Form submitted successfully');
        form.reset();
        removeclass([username, email, password, confirmPassword]);
    }


});

function removeclass(inputs){
    inputs.forEach(input =>{
        const formControl = input.parentElement;
        formControl.className = "form_control"
    })
}

function checkPassword(password, confirmPassword) {
    if (password.value!== confirmPassword.value) {
        showError(confirmPassword, 'Passwords do not match');
        return false;
    } else {
        showSuccess(confirmPassword);
        
    }
    return true;
}

// let context =this;
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className += " error";
    const small = formControl.querySelector('small');
    small.innerText = message;
}
function showSuccess(username) {
    const formControl = username.parentElement;
    formControl.className = "form_control success";

}