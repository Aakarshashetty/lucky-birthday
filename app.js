const dob = document.querySelector('.dob');
const luckyNo = document.querySelector('.luckyNo');
const output = document.querySelector('.output');
const button = document.querySelector('button');

let myFunc = num => Number(num);
const dateArray = Array.from(String(dob.value), myFunc);
//console.log(dateArray);
const displayOutput = (res) =>{
    output.style.display = "block";
    if(res % luckyNo.value === 0){
        let html = `<h2>${luckyNo.value} is a lucky number!!</h2>`;
        output.innerHTML = html;
    }else{
        let html = `<h2>${luckyNo.value} is not that lucky<h2>`;
        output.innerHTML = html;
    }
}

button.addEventListener('click', (e) => {
    const res = dateArray.reduce((acc, curr) => {
        acc += curr;
        console.log(acc);
        return acc;
    },0);
    //console.log(res);
    displayOutput(res);
    //console.log("clicked!");
});

