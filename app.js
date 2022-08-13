const dob = document.querySelector('.dob');
const luckyNo = document.querySelector('.luckyNo');
const output = document.querySelector('.output');
const button = document.querySelector('button');

const calculateBithdayLucky = () =>{
    const sum = calculateSum(dob.value); 
    console.log(sum, luckyNo.value);
    output.style.display = "block";
    if(sum&&luckyNo.value !== null){
    compare(sum, luckyNo.value);
    }else{
        output.innerText = "Please enter valid Input🙂"
    }
}
const calculateSum = (birthdate) => {
    let sum = 0;
    birthdate = birthdate.replaceAll("-","");
    for(let i = 0;i < birthdate.length; i++){
        sum += Number(birthdate.charAt(i));
    }
    return sum;
}
const compare = (sum, lucky) => {
    if(sum % lucky === 0){
        console.log("divisible");
        let html = `<h2>${lucky} is a lucky number 🤩</h2>`;
        output.innerHTML = html;
    }else{
        console.log("not divisible");
        let html = `<h2>${lucky} is not that lucky, make your own luck 😎<h2>`;
        output.innerHTML = html;
    }
}
button.addEventListener('click', calculateBithdayLucky);

