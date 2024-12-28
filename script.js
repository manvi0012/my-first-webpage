
// alert("Hello World")
// step 1 download 6 images
// name them properly [dice-1.jpeg]
// add a img tag


function buttonClicked(){
    const numbers = [1,2,3,4,5,6];
    const outcome = numbers[Math.floor(Math.random() * numbers.length)];
    document.getElementById('result').innerHTML = outcome+' is your lucky number';
}

function numButton(digit){
    document.getElementById('hit').innerHTML += digit
}

function clearButton(){
    document.getElementById('hit').innerHTML = ''
}
function backButton(){
    let hitContent = document.getElementById('hit').innerHTML;
    document.getElementById('hit').innerHTML = hitContent.slice(0, -1);
}

