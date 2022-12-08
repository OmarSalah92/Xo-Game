
// let myText1=document.querySelector('.text1')

// let mySquare = document.querySelectorAll('.square')
let myCardTitle = document.querySelector('.card-title');
let turn = false

let square = [];

function endOfGame(num1,num2,num3){
    myCardTitle.innerHTML=`<h3 class='card-title'>${square[num1]} wins</h3>`
        document.getElementById('item'+num1).style.background = '#e76f51'
        document.getElementById('item'+num2).style.background = '#e76f51'
        document.getElementById('item'+num3).style.background = '#e76f51'
        setInterval(function(){
            myCardTitle.innerHTML +='.'
        },1000)
        setTimeout(function(){
            location.reload();
        },4000)
}

function checkWinner(){

    for(let i=1;i<10;i++){

        square[i] = document.getElementById('item'+i).innerHTML
       
    }
    if(square[1]==square[2]&&square[2]==square[3]&&square[1]!=''){
        endOfGame(1,2,3)
    }else if(square[4]==square[5]&&square[5]==square[6]&&square[4]!=''){
        endOfGame(4,5,6)
    }else if(square[7]==square[8]&&square[8]==square[9]&&square[9]!=''){
        endOfGame(7,8,9)
    }else if(square[1]==square[4]&&square[4]==square[7]&&square[7]!=''){
        endOfGame(1,4,7)
    }else if(square[2]==square[5]&&square[5]==square[8]&&square[5]!=''){
        endOfGame(2,5,8)
    } else if(square[3]==square[6]&&square[6]==square[9]&&square[6]!=''){
        endOfGame(3,6,9)
    }else if(square[1]==square[5]&&square[5]==square[9]&&square[1]!=''){
        endOfGame(1,5,9)
    }else if(square[3]==square[5]&&square[5]==square[7]&&square[7]!=''){
        endOfGame(3,5,7)
    }else if (square[1]!=''&&square[2]!=''&&square[3]!=''&&square[4]!=''&&square[5]!=''&&square[6]!=''&&square[7]!=''&&square[8]!=''&&square[9]!=''){
        myCardTitle.innerHTML=`<h5 class='Draw'>Draw</h5>`;
        setInterval(function(){
            myCardTitle.innerHTML +='.'
        },1000)
        setTimeout(function(){
            location.reload();
        },4000)
    }

     


}


function startGame(id){

    let myCardTitle = document.querySelector('.card-title');
    
    let element = document.getElementById(id)
    if(turn===false&& element.innerHTML==''){
        element.innerHTML=`<h5 class='text1'>X</h5>`
        turn =true
        myCardTitle.innerHTML=`<h3 class='card-title'>O's turn</h3>`

    }else if(turn===true&& element.innerHTML==''){
        element.innerHTML=`<h5 class='text1'>O</h5>`
        turn =false
        myCardTitle.innerHTML=`<h3 class='card-title'>X's turn</h3>`
    }
    
    checkWinner();

}




