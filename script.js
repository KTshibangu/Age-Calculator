const submitBtn = document.getElementById('submit-btn');

const inputDay = document.querySelector('.day');
const inputMonth = document.querySelector('.month');
const inputYear = document.querySelector('.year');

//const dayInput = document.getElementById('day').value;
//const monthInput = document.getElementById('month').value;
//const yearInput = document.getElementById('year').value;

isValid = false; 

inputDay.addEventListener('input', (e) => {
    if(inputDay.value > 31){
        document.querySelector('.invalid-day').classList.add('error');
        document.querySelector('.invalid-day').innerHTML = 'Must be a valid date';
        document.querySelector('.day').classList.add('error');
        isValid = false;
        return;
    } else {
        isValid = true;
        document.querySelector('.invalid-day').innerHTML = '';
        document.querySelector('.invalid-day').classList.remove('error');
        document.querySelector('.day').classList.remove('error');
    }

    if(inputDay.value === ''){
        document.querySelector('.invalid-day').classList.add('error');
        document.querySelector('.invalid-day').innerHTML = 'This field is required';
        document.querySelector('.day').classList.add('error');
        isValid = false;
        return;
    } else {
        isValid = true;
        document.querySelector('.invalid-day').innerHTML = '';
        document.querySelector('.invalid-day').classList.remove('error');
        document.querySelector('.day').classList.remove('error');
    }
})

inputMonth.addEventListener('input', (e) => {
    if(inputMonth.value > 12){
        document.querySelector('.invalid-month').classList.add('error');
        document.querySelector('.invalid-month').innerHTML = 'Must be a valid month';
        document.querySelector('.month').classList.add('error');
        isValid = false
        return;
    } else {
        isValid = true;
        document.querySelector('.invalid-month').innerHTML = '';
        document.querySelector('.invalid-month').classList.remove('error');
        document.querySelector('.month').classList.remove('error');
    }

    if(inputMonth.value === ''){
        document.querySelector('.invalid-month').classList.add('error');
        document.querySelector('.invalid-month').innerHTML = 'This field is required';
        document.querySelector('.month').classList.add('error');
        isValid = false;
        return;
    } else {
        isValid = true;
        document.querySelector('.invalid-month').innerHTML = '';
        document.querySelector('.invalid-month').classList.remove('error');
        document.querySelector('.month').classList.remove('error');
    }
})

inputYear.addEventListener('input', (e) => {
    if(inputYear.value > 2024){
        document.querySelector('.invalid-year').classList.add('error');
        document.querySelector('.invalid-year').innerHTML = 'Must be in the past';
        document.querySelector('.year').classList.add('error');
        isValid = false;
        return;
    } else {
        isValid = true;
        document.querySelector('.invalid-year').innerHTML = '';
        document.querySelector('.invalid-year').classList.remove('error');
        document.querySelector('.invalid-year').innerHTML = '';
        document.querySelector('.year').classList.remove('error');
    }

    if(inputYear.value === ''){
        document.querySelector('.invalid-year').classList.add('error');
        document.querySelector('.invalid-year').innerHTML = 'This field is required';
        document.querySelector('.year').classList.add('error');
        isValid = false; 
        return;
    } else {
        document.querySelector('.invalid-year').innerHTML = '';
        document.querySelector('.invalid-year').classList.remove('error');
        document.querySelector('.invalid-year').innerHTML = '';
        document.querySelector('.year').classList.remove('error');
    }
})


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.form-item').forEach(el => {
        el.classList.remove('error');
    })
    if(isValid){
        let userInput = `${inputYear.value}-${inputMonth.value}-${inputDay.value}`;
        userInput.max = new Date().toISOString().split("T")[0];

        let birthDay = new Date(userInput);
        let ageDiff = Date.now() - birthDay;
        let ageDate = new Date(ageDiff);
        let ageYear = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDate();

        document.querySelector('.day-blanks').innerHTML = ageDay;
        document.querySelector('.month-blanks').innerHTML = ageMonth;
        document.querySelector('.year-blanks').innerHTML = ageYear;
    } else {
        alert('error');
    }
    
    
    
})