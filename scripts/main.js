let myHeading = document.querySelector('h1');
myHeading.textContent='Hello world!';
alert('hello!');
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt("请输入你的名字！");
    if(!myName) {
        setUserName();
    }
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 爽翻了， " + myName;
}

if(!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 爽翻了， " + storedName;
}

myButton.onclick = setUserName;