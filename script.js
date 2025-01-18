const form = document.getElementById('formid');
window.addEventListener('load', () => {
    form.reset();
})
//PAGES
const pageOne = document.getElementById('page-one');
const pageTwo = document.getElementById('page-two');
const pageThreeMonthlyAddons = document.getElementById('page-three-monthly');
const pageThreeYearlyAddons = document.getElementById('page-three-yearly');
const pageFourMonthlyReceipt = document.getElementById('page-four-monthly');
const pageFourYearlyReceipt = document.getElementById('page-four-yearly');

//PAGE ONE
const nameContainer = document.getElementById('name');
const nameErrorMessage = document.getElementById('name-error-message');

const emailContainer = document.getElementById('email');
const emailErrorMessage = document.getElementById('email-error-message');

const phoneNumberContainer = document.getElementById('number');
const phoneNumberErrorMessage = document.getElementById('number-error-message');

//BUTTONS TO NAVIGATE TO NEXT PAGE
const pageOneNextBtn = document.querySelectorAll('.next-btn');
const pageTwoNextBtn = document.querySelectorAll('#nextBtnPage2');
const pageThreeNextBtn = document.querySelectorAll('#nextBtnPage3');
const pageFourNextBtn = document.querySelectorAll('#nextBtnPage4');

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

//loop through each btn in the node list
plansBtns.forEach((btn) => {
    //add an event listener to each btn
    btn.addEventListener('click', () => {
        //remove the selected class style from all btns when a btn is clicked
        plansBtns.forEach(btns => btns.classList.remove('selected'));
        //add the selected class style to the clicked btn
        btn.classList.add('selected');
    })
})

toggleBtn.addEventListener('click', () => {
   arcadeYearlyPlan.classList.toggle('hide');
   advancedYearlyPlan.classList.toggle('hide');
   proYearlyPlan.classList.toggle('hide');
   
   arcadeMonthlyPrice.classList.toggle('hide');
   advancedMonthlyPrice.classList.toggle('hide');
   proMonthlyPrice.classList.toggle('hide');

   const activePlan = getActivePlan();
})

//function to get wether the user selected a monthly or yearly plan
function getActivePlan(){
    const isYearlyPlanActive = !arcadeMonthlyPrice.classList.contains('hide');
    return isYearlyPlanActive ? 'monthly' : 'yearly';
}
//function assigned to a variable
const activePlan = getActivePlan();

//values of plans depending on monthly or yearly plan
const plans = [
    monthly = {
        arcade: 9,
        advanced: 12,
        pro: 15
    },

    yearly = {
        arcade: 90,
        advanced: 120,
        pro: 150
    }
]

//function to navigate to page three depending on if the user selects a monthly or yearly plan
function pageThreeFunction(activePlan){
    if(activePlan === 'monthly'){
        pageThreeMonthlyAddons.classList.remove('hide');
        pageThreeYearlyAddons.classList.add('hide');
    } else {
        pageThreeYearlyAddons.classList.remove('hide');
        pageThreeMonthlyAddons.classList.add('hide');
    }
}

let planValue = null;
let selectedPlan = null;

pageTwoNextBtn.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        const activePlan = getActivePlan();

        //loop through each btn to see which one has the selected class attribute
        plansBtns.forEach((btn) => {
            if(btn.classList.contains('selected')){
                selectedPlan = btn.id;
            }
        });

        if(!selectedPlan){
            console.log('no plan selected');
            return;
        }
        
        /*use the if statement to dynamically pick the value based on if the
        activePlan is set to monthly or yearly plan*/
        if(activePlan === 'monthly'){
            //get the value of the selected plan from the object 
            //make sure the plan id is the same as that of the key name in the object
            planValue = plans[0][selectedPlan];
        } else {
            planValue = plans[1][selectedPlan];
        }

        pageTwo.classList.add('hide');
        pageThreeFunction(activePlan);
        updateIndicator(indicatorTwo, indicatorThree);
        updateNextPageBtn(pageTwoNextBtn, pageThreeNextBtn);

        console.log(`selected plan: ${selectedPlan}, Price: $${planValue}`);
    })
})

//PAGE THREE
const checkboxesContainer = document.getElementById('checkboxes-container');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const checkboxLabel = document.querySelectorAll('.checkbox-btn');

//logic to select checkboxes
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        //use the 'closest' DOM selector to find the closest label tag in the DOM
       const label = checkbox.closest('label');

       //the if statement is used to make sure a label exist for that checkbox. If not the rest of the logic does not proceed
       if(label){
        //if the checkbox is checked, add the selected class style to the closest label
        if(checkbox.checked){
            label.classList.add('selected');
        } else {
            label.classList.remove('selected');
        }
       }
    })
})

const checkboxPrice = [
    monthly = {
        onlineService: 1,
        largerStorage: 2,
        customizableProfile: 2
    },

    yearly = {
        onlineServiceYr: 10,
        largerStorageYr: 20,
        customizableProfileYr: 20
    }
]

pageThreeNextBtn.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        //active plan to always check if it's a monthly or yearly plan
        const activePlan = getActivePlan();

        //an empty array to store push the checkboxes into
        const selectedCheckboxes = [];

        checkboxes.forEach((checkbox) => {
            if(checkbox.checked){
                selectedCheckboxes.push(checkbox.id);
            }
        })
        console.log(selectedCheckboxes);


        /**logic to toggle the addons selected on/off in the receipt page
         * depending on if the user selected it
         */
        if(onlineService.checked){
            osAddonContainer.classList.toggle('hide');
        }

        if(largerStorage.checked){
            lsAddonContainer.classList.toggle('hide');
        }

        if(customizableProfile.checked){
            cpAddonContainer.classList.toggle('hide');
        }

        if(onlineServiceYr.checked){
            osAddonContainerYr.classList.toggle('hide');
        }

        if(largerStorageYr.checked){
            lsAddonContainerYr.classList.toggle('hide');
        }

        if(customizableProfileYr.checked){
            cpAddonContainerYr.classList.toggle('hide');
        }

        //if the array is empty, restrict the user from moving forward
        if(selectedCheckboxes.length === 0){
            console.log('no addon selected');
            return;
        }

        /**create a total price variable with a value of 0. This
         * is where we're going to add the values of the addons
         */
        let totalPrice = 0;

        //varaible to assign the value of each addon
        let addonValue;

        selectedCheckboxes.forEach((id) => {
            if(activePlan === 'monthly'){
                //the 'checkboxPrice' here is an array of objects used to store the values of each addon
                /**indexs are used to access arrays, so index 0 is for monthly values
                 * index 1 is for yearly addon values.
                 * Note that the id of each checkbox must be exactly the same as the key name it is trying to access
                */
                addonValue = checkboxPrice[0][id];
            } else {
                addonValue = checkboxPrice[1][id];
            }

            /**this logic accumulates the values of selected checkboxes 
             * to give us the total price
             */
            if(addonValue !== undefined){
                totalPrice += addonValue;
                console.log(`${id}: ${addonValue}`);
            }
        });

        console.log('Total price:', totalPrice);

        if(activePlan === 'monthly'){
            pageThreeMonthlyAddons.classList.add('hide');
            pageFourMonthlyReceipt.classList.remove('hide');
        } else {
            pageThreeYearlyAddons.classList.add('hide');
            pageFourYearlyReceipt.classList.remove('hide');
        }

        updateIndicator(indicatorThree, indicatorFour);
        updateNextPageBtn(pageThreeNextBtn, pageFourNextBtn);

        monthlyReceiptPlanPrice.textContent = `$${planValue}`;
        yearlyReceiptPlanPrice.textContent = `$${planValue}`;

        typeOfPlanMonthly.textContent = `${selectedPlan.charAt(0).toUpperCase()}${selectedPlan.slice(1)} (Monthly)`;
        typeOfPlanYearly.textContent = `${selectedPlan.charAt(0).toUpperCase()}${selectedPlan.slice(1)} (Yearly)`;

        totalPerMonth.textContent = `+$${totalPrice + planValue}/mo`;
        totalPerYear.textContent = `+$${totalPrice + planValue}/yr`;
    })
})

//PAGE FOUR
const monthlyReceiptPlanPrice = document.getElementById('plan-price-monthly');
const yearlyReceiptPlanPrice = document.getElementById('plan-price-yearly');

const typeOfPlanMonthly = document.getElementById('plan-type-monthly');
const typeOfPlanYearly = document.getElementById('plan-type-yearly');

const totalPerMonth = document.getElementById('total-price-monthly');
const totalPerYear = document.getElementById('total-price-yearly');

const osAddonContainer = document.getElementById('os-addon-container');
const lsAddonContainer = document.getElementById('ls-addon-container');
const cpAddonContainer = document.getElementById('cp-addon-container');

const osAddonContainerYr = document.getElementById('os-addon-container-yr');
const lsAddonContainerYr = document.getElementById('ls-addon-container-yr');
const cpAddonContainerYr = document.getElementById('cp-addon-container-yr');