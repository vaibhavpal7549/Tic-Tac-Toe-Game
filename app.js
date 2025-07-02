const buttonn = document.querySelectorAll(".buttonn");
console.log(buttonn[0].textContent);
let change='0';
let cuonnt=0;

const draw = document.getElementById('draw');


buttonn[0].addEventListener('click',function(){
    if(buttonn[0].textContent != ''){
        console.warn("Already filled place");
    }else{
        cuonnt++;
        if(change == 'X'){
            change='0';
        }else{
            change='X';
        }
        buttonn[0].textContent = change
        if(buttonn[0].textContent == buttonn[1].textContent && buttonn[2].textContent == buttonn[1].textContent && buttonn[0]!=''){
            let msg = `${change} has won!`;
            draw.innerText = msg;
            showMessage();
        }
        if(buttonn[6].textContent == buttonn[3].textContent && buttonn[6].textContent == buttonn[0].textContent && buttonn[6]!=''){
            let msg = `${change} has won!`;
            draw.innerText = msg;
            showMessage();
        }
        if(buttonn[0].textContent == buttonn[4].textContent && buttonn[0].textContent == buttonn[8].textContent && buttonn[0]!=''){
            let msg = `${change} has won!`;
            draw.innerText = msg;
            showMessage();
        }
    }
    if(cuonnt==9){
        showMessage();
    }
})
buttonn[1].addEventListener('click',function(){
    if(buttonn[1].textContent == ''){
        cuonnt++;
        if(change == 'X'){
            change='0';
        }else{
            change='X';
        }
        buttonn[1].textContent = change
        if(buttonn[0].textContent == buttonn[1].textContent && buttonn[2].textContent == buttonn[1].textContent && buttonn[0]!=null){
            let msg = `${change} has won!`;
            draw.innerText = msg;
            showMessage();
        }
        if(buttonn[4].textContent == buttonn[1].textContent && buttonn[7].textContent == buttonn[1].textContent && buttonn[0]!=''){
            let msg = `${change} has won!`;
            draw.innerText = msg;
            showMessage();
        }
    }else{
        console.warn("already filled place");
    }
    if(cuonnt==9){
        showMessage();
    }
    
})
buttonn[2].addEventListener('click',function(){
    if(buttonn[2].textContent == ''){
        cuonnt++;
        if(change == 'X'){
            change='0';
        }else{
            change='X';
        }
        buttonn[2].textContent = change

        if(buttonn[0].textContent == buttonn[1].textContent && buttonn[2].textContent == buttonn[1].textContent && buttonn[0]!=null){
            let msg = `${change} has won!`;
            draw.innerText = msg;
            showMessage();
        }
        if(buttonn[2].textContent == buttonn[5].textContent && buttonn[5].textContent == buttonn[8].textContent && buttonn[6]!=''){
            let msg = `${change} has won!`;
            draw.innerText = msg;
            showMessage();
        }
        if(buttonn[2].textContent == buttonn[4].textContent && buttonn[4].textContent == buttonn[6].textContent && buttonn[0]!=''){
            let msg = `${change} has won!`;
            draw.innerText = msg;
            showMessage();
        }
    }else{
        console.warn("already filled place");
    }
    if(cuonnt==9){
        showMessage();
    }
    
})
buttonn[3].addEventListener('click',function(){
    if(buttonn[3].textContent == ''){
        cuonnt++;
        if(change == 'X'){
            change='0';
        }else{
            change='X';
        }
        buttonn[3].textContent = change
        if(buttonn[3].textContent == buttonn[4].textContent && buttonn[4].textContent == buttonn[5].textContent && buttonn[3]!=null){
            let msg = `${change} has won!`;
            draw.innerText = msg;
            showMessage();
        }
        if(buttonn[6].textContent == buttonn[3].textContent && buttonn[6].textContent == buttonn[0].textContent && buttonn[6]!=''){
            let msg = `${change} has won!`;
            draw.innerText = msg;
            showMessage();
        }
    }else{
        console.warn("already filled place");
    }
    if(cuonnt==9){
        showMessage();
    }
})
buttonn[4].addEventListener('click',function(){
    if(buttonn[4].textContent == ''){
        cuonnt++;
        if(change == 'X'){
            change='0';
        }else{
            change='X';
        }
        buttonn[4].textContent = change
        if(buttonn[3].textContent == buttonn[4].textContent && buttonn[4].textContent == buttonn[5].textContent && buttonn[3]!=null){
            let msg = `${change} has won!`;
            draw.innerText = msg;
            showMessage();
        }
        if(buttonn[4].textContent == buttonn[1].textContent && buttonn[7].textContent == buttonn[1].textContent && buttonn[0]!=''){
            let msg = `${change} has won!`;
            draw.innerText = msg;
            showMessage();
        }
        if(buttonn[0].textContent == buttonn[4].textContent && buttonn[0].textContent == buttonn[8].textContent && buttonn[0]!=''){
            let msg = `${change} has won!`;
            draw.innerText = msg;
            showMessage();
        }
        if(buttonn[2].textContent == buttonn[4].textContent && buttonn[4].textContent == buttonn[6].textContent && buttonn[0]!=''){
            let msg = `${change} has won!`;
            draw.innerText = msg;
            showMessage();
        }
    }else{
        console.warn("already filled place");
    }
    if(cuonnt==9){
        showMessage();
    }
})
buttonn[5].addEventListener('click',function(){
    if(buttonn[5].textContent == ''){
        cuonnt++;
        if(change == 'X'){
            change='0';
        }else{
            change='X';
        }
        buttonn[5].textContent = change
        if(buttonn[3].textContent == buttonn[4].textContent && buttonn[4].textContent == buttonn[5].textContent && buttonn[3]!=null){
            let msg = `${change} has won!`;
            draw.innerText = msg;
            showMessage();
        }
        if(buttonn[2].textContent == buttonn[5].textContent && buttonn[5].textContent == buttonn[8].textContent && buttonn[6]!=''){
            let msg = `${change} has won!`;
            draw.innerText = msg;
            showMessage();
        }
    }else{
        console.warn("already filled place");
    }
    if(cuonnt==9){
        showMessage();
    }
})
buttonn[6].addEventListener('click',function(){
    if(buttonn[6].textContent == ''){
        cuonnt++;
        if(change == 'X'){
            change='0';
        }else{
            change='X';
        }
        buttonn[6].textContent = change
        if(buttonn[6].textContent == buttonn[7].textContent && buttonn[6].textContent == buttonn[8].textContent && buttonn[6]!=''){
            let msg = `${change} has won!`;
            draw.innerText = msg;
            showMessage();
        }
        if(buttonn[6].textContent == buttonn[3].textContent && buttonn[6].textContent == buttonn[0].textContent && buttonn[6]!=''){
            let msg = `${change} has won!`;
            draw.innerText = msg;
            showMessage();
        }
        if(buttonn[2].textContent == buttonn[4].textContent && buttonn[4].textContent == buttonn[6].textContent && buttonn[0]!=''){
            let msg = `${change} has won!`;
            draw.innerText = msg;
            showMessage();
        }
    }else{
        console.warn("already filled place");
    }
    if(cuonnt==9){
        showMessage();
    }
})
buttonn[7].addEventListener('click',function(){
    if(buttonn[7].textContent == ''){
        cuonnt++;
        if(change == 'X'){
            change='0';
        }else{
            change='X';
        }
        buttonn[7].textContent = change
        if(buttonn[6].textContent == buttonn[7].textContent && buttonn[6].textContent == buttonn[8].textContent && buttonn[6]!=''){
            let msg = `${change} has won!!`;
            draw.innerText = msg;
            showMessage();
        }
        if(buttonn[4].textContent == buttonn[1].textContent && buttonn[7].textContent == buttonn[1].textContent && buttonn[0]!=''){
            let msg = `${change} has won!!`;
            draw.innerText = msg;
            showMessage();
        }
    }else{
        console.warn("already filled place");
    }
    if(cuonnt==9){
        showMessage();
    }
})
buttonn[8].addEventListener('click',function(){
    if(buttonn[8].textContent == ''){
        cuonnt++;
        if(change == 'X'){
            change='0';
        }else{
            change='X';
        }
        buttonn[8].textContent = change
        if(buttonn[6].textContent == buttonn[7].textContent && buttonn[6].textContent == buttonn[8].textContent && buttonn[6]!=''){
            let msg = `${change} has won!`;
            draw.innerText = msg;
            showMessage();
        }
        if(buttonn[2].textContent == buttonn[5].textContent && buttonn[5].textContent == buttonn[8].textContent && buttonn[6]!=''){
            let msg = `${change} has won!`;
            draw.innerText = msg;
            showMessage();
        }
        if(buttonn[0].textContent == buttonn[4].textContent && buttonn[0].textContent == buttonn[8].textContent && buttonn[0]!=''){
            let msg = `${change} has won!`;
            draw.innerText = msg;
            showMessage();
        }
    }else{
        console.warn("already filled place");
    }
    if(cuonnt==9){
        showMessage();
    }
})

function showMessage() {
    draw.style.display = 'block';
}