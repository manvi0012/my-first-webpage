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
    document.getElementById('ans').innerHTML = ''
}

function backButton(){
    let hitContent = document.getElementById('hit').innerHTML;
    document.getElementById('hit').innerHTML = hitContent.slice(0, -1);
}

function opearatorButton(op){
    previous(document.getElementById('hit').innerHTML.slice(-1))
    document.getElementById('hit').innerHTML += op
}

function equalToButton() {
    previous(document.getElementById('hit').innerHTML.slice(-1))
    let content = document.getElementById('hit').innerHTML;
    let result = eval(content);
    document.getElementById('ans').innerHTML = result
}

function previous(content){
    if(content == '/' || content == '+' || content == '-' || content == '*' || content ==  '.' )
        backButton()
}
