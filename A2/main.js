const convert = document.querySelector('button')
const rInput = document.getElementById('R-input')
const gInput = document.getElementById('G-input')
const bInput = document.getElementById('B-input')
const hexoutput = document.querySelector('.hex-output')
const hexcolor = document.querySelector('.hex-color')
const Routput = document.querySelector('.R-output')
const Goutput = document.querySelector('.G-output')
const Boutput = document.querySelector('.B-output')

convert.addEventListener('click', event => {
  event.preventDefault()
  if ((Number(rInput.value) >= 0 && (Number(rInput.value)) <= 255) && (Number(gInput.value) >= 0 && (Number(gInput.value)) <= 255) && (Number(bInput.value) >= 0 && (Number(bInput.value)) <= 255) && (isNaN(rInput.value) === false && isNaN(gInput.value) === false && isNaN(bInput.value) === false) && (rInput.value.length > 0 && gInput.value.length > 0 && bInput.value.length > 0)) {
    let color = rgbToHex(Number(rInput.value), Number(gInput.value), Number(bInput.value))
    hexoutput.textContent = color
    hexcolor.style.backgroundColor = color
    Routput.style.backgroundColor = `#${numberToHex(Number(rInput.value))}0000`
    Goutput.style.backgroundColor = `#00${numberToHex(Number(gInput.value))}00`
    Boutput.style.backgroundColor = `#0000${numberToHex(Number(bInput.value))}`
  } else {
    alert('輸入值錯誤，請輸入0至255的數字')
  }

})


function numberToHex(number) {
  let hex = number.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + numberToHex(r) + numberToHex(g) + numberToHex(b);
}

