const celsiusInput = document.querySelector('.celcius > input')
const fahrenheitInput = document.querySelector('.fahrenheit > input')
const kelvinInput = document.querySelector('.kelvin > input')
function roundNum(num) {
  return Math.round(num*100)/100;
}
function celsiusToFk() {
  const cTemp = parseFloat(celsiusInput.value);
  const fTemp = (cTemp *(9/5)) +32;
  const kTemp = cTemp + 273.15;

  fahrenheitInput.value = roundNum(fTemp);
  kelvinInput.value = roundNum(kTemp);
}

function fahrenheitToCk () {
  const fTemp = parseFloat(fahrenheitInput.value);
  const cTemp = (fTemp - 32) * (5/9);
  const kTemp = (fTemp + 459.67) * 5/9;

  kelvinInput.value = roundNum(kTemp);
  celsiusInput.value = roundNum(cTemp);
}

function kelvinToCf() {
  const kTemp = parseFloat(kelvinInput.value);
  const cTemp = kTemp -273.15;
  const fTemp = 9/5 * (kTemp -273) + 32;

  celsiusInput.value = roundNum(cTemp);
  fahrenheitInput.value = roundNum(fTemp);
}

celsiusInput.addEventListener('input', celsiusToFk);
fahrenheitInput.addEventListener('input', fahrenheitToCk);
kelvinInput.addEventListener('input', kelvinToCf);
