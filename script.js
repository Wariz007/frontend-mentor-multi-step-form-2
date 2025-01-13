//PAGES
const pageOne = document.getElementById('page-one');
const pageTwo = document.getElementById('page-two');

//PAGE ONE
const nameContainer = document.getElementById('name');
const nameErrorMessage = document.getElementById('name-error-message');

const emailContainer = document.getElementById('email');
const emailErrorMessage = document.getElementById('email-error-message');

const phoneNumberContainer = document.getElementById('number');
const phoneNumberErrorMessage = document.getElementById('number-error-message');

const pageOneNextBtn = document.querySelectorAll('.next-btn');

//PAGE INDICATORS
const indicatorOne = document.querySelectorAll('.indicator-one');
const indicatorTwo = document.querySelectorAll('.indicator-two');
const indicatorThree = document.querySelectorAll('.indicator-three');
const indicatorFour = document.querySelectorAll('.indicator-four');

indicatorOne.forEach(indicator => {
    indicator.style.color = 'hsl(213, 96%, 18%)';
    indicator.style.backgroundColor = 'hsl(229, 24%, 87%)';
})

//function to update page indicators
const updateIndicator = (previousIndicator, nextIndicator) => {
    previousIndicator.forEach(indicator => {
        indicator.style.color = 'hsl(0, 0%, 100%)';
        indicator.style.backgroundColor = '';
    })

    nextIndicator.forEach(indicator => {
        indicator.style.color = 'hsl(213, 96%, 18%)';
        indicator.style.backgroundColor = 'hsl(229, 24%, 87%)';
    })
}

//function to validatw input containers in page 1
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
            updateIndicator(indicatorOne, indicatorTwo);
            pageOne.classList.add('hide');
            pageTwo.classList.remove('hide');
        }

    })
})




//PAGE TWO
const toggleBtn = document.querySelector('.slider');
const arcadeYearlyPlan = document.getElementById('arcde-yearly-plan');
const advancedYearlyPlan = document.getElementById('advanced-yearly-plan');
const proYearlyPlan = document.getElementById('pro-yearly-plan');

const arcadeMonthlyPrice = document.getElementById('arcade-monthly-price');
const advancedMonthlyPrice = document.getElementById('advanced-monthly-price');
const proMonthlyPrice = document.getElementById('pro-monthly-price');


toggleBtn.addEventListener('click', () => {
   arcadeYearlyPlan.classList.toggle('hide');
   advancedYearlyPlan.classList.toggle('hide');
   proYearlyPlan.classList.toggle('hide');
   
   arcadeMonthlyPrice.classList.toggle('hide');
   advancedMonthlyPrice.classList.toggle('hide');
   proMonthlyPrice.classList.toggle('hide');
})