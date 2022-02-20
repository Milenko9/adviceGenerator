let adviceH1 = document.querySelector('#adviceH1');
let idAdvice = document.querySelector('#idAdvice');
let btnId = document.querySelector('#btnId');

let xml = new XMLHttpRequest();

xml.open("GET", "https://api.adviceslip.com/advice");

xml.send();

xml.addEventListener('readystatechange', function () {
  if (xml.readyState == 4 && xml.status == 200) {

    display()

  }
})

function display() {
  const data = xml.responseText;
  const parsedData = JSON.parse(data);

  adviceH1.innerHTML = '"' + parsedData.slip.advice + '"';
  idAdvice.innerHTML = parsedData.slip.id;
}

btnId.addEventListener('click', resetAdvice);

function resetAdvice() {
  document.location.reload();
}
