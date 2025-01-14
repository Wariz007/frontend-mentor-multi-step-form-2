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

//function to update next btns for each page
function updateNextPageBtn(previousPageBtn, nextPageBtn){
    previousPageBtn.forEach(btn => btn.classList.add('hide'));
    nextPageBtn.forEach(btn => btn.classList.remove('hide'));
}

//function to validat input containers in page 1
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
            /*add a forEach method to the go back btn variable because by default 
            the variable is a nodelist. This because we have 2 btns and we are 
            selecting the 2 with querySelectorAll*/
            goBackBtnPageTwo.forEach(btn => btn.classList.remove('hide'));
            updateNextPageBtn(pageOneNextBtn, pageTwoNextBtn);
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

const plansBtns = document.querySelectorAll('.plans-btns');
const goBackBtnPageTwo = document.querySelectorAll('.go-back-btn');
const pageTwoNextBtn = document.querySelectorAll('#nextBtnPage2');

//loop through each btn in the node list
plansBtns.forEach((btn) => {
    //add an event listener to each btn
    btn.addEventListener('click', () => {
        //remove the selected class style from all btns when a btn is clicked
        plansBtns.forEach(btns => btns.classList.remove('selected'));
        //add the selected class style to the clicked btn
        btn.classList.add('selected');
        console.log(`${btn.id} clicked`)
    })
})

toggleBtn.addEventListener('click', () => {
   arcadeYearlyPlan.classList.toggle('hide');
   advancedYearlyPlan.classList.toggle('hide');
   proYearlyPlan.classList.toggle('hide');
   
   arcadeMonthlyPrice.classList.toggle('hide');
   advancedMonthlyPrice.classList.toggle('hide');
   proMonthlyPrice.classList.toggle('hide');
})

/*pageTwoNextBtn.addEventListener('click', () => {

})*/