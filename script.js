//PAGE ONE
const nameContainer = document.getElementById('name');
const nameErrorMessage = document.getElementById('name-error-message');

const emailContainer = document.getElementById('email');
const emailErrorMessage = document.getElementById('email-error-message');

const phoneNumberContainer = document.getElementById('number');
const phoneNumberErrorMessage = document.getElementById('number-error-message');

const pageOneNextBtn = document.querySelectorAll('.next-btn');
console.log(pageOneNextBtn)

function validateInput(container, regex, errorMessage){
    //get the value of the user's input from the container
    const userInput = container.value.trim();

    //logic to check if the input is valid
    if(!userInput || !regex.test(userInput)){
        container.style.borderColor = 'red';
        errorMessage.classList.remove('hide');
        return false;
    } else {
        container.style.borderColor = '';
        errorMessage.classList.add('hide');
        return true;
    }
}

validateName = () => validateInput(nameContainer, /^[A-Za-z\s]+$/, nameErrorMessage);
validateMail = () => validateInput(emailContainer, /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, emailErrorMessage);
validatePhoneNumber = () => validateInput(phoneNumberContainer, /^[0-9]{11}$/, phoneNumberErrorMessage);

/*the forEach method is to loop through the 2 btns; 
1 for mobile and other for desktop screensize.
The preventDefault() is to prevent the btns from immediately 
submitting the form*/
pageOneNextBtn.forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();

        isNameValid = validateName();
        isMailValid = validateMail();
        isPhoneNumberValid = validatePhoneNumber();

        if(isNameValid && isMailValid && isPhoneNumberValid){
            return console.log('validation successful');
        } else {
            return console.log('validation unsuccessful');
        }

    })
})