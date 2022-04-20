const pickColors= () =>{
    const random = Math.floor(Math.random() * colors.length)
    return colors[random];
};


const generatecolor=()=>{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;    
}

const generaterandomcolors=(num)=>{
    let output = [];
    for (let i =0; i<num; i++){
        output.push(generatecolor())
    }
    return output;
}

const changeColors = (color) =>{
    squares.forEach((square)=>{
        square.style.backgroundColor= color;
    })
}
let clicked=0;

let chanceleft;
const reset = ()=>{
    colors= generaterandomcolors(numsquares);
    pickcolor=pickColors();
    // resetbutton.textContent="Refres";
    colorDisplay.textContent=pickcolor;
    if(numsquares==9){
        chLeftCount.textContent=4;
    }
    else if(numsquares==6){
        chLeftCount.textContent=3;
    }
    else if(numsquares==3){
        chLeftCount.textContent=2;
    }
    
    
    for(let i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display="block";
        }
        else {
            
            squares[i].style.display="none";
            // squares[i].style.backgroundColor ="aqua"; 
        }
        
    }
    colorDisplay.style.color='rgb(63, 187, 146)';
    message.textContent="Play";
    clicked=0;
}


let numsquares= 6;

colors = generaterandomcolors(numsquares);
let pickcolor=pickColors();


const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colordisplay");
const message = document.getElementById('msg');
const resetbutton = document.getElementById('resetbutton');
const chLeftCount = document.getElementById('chanceleftcount');
const modebutton = document.querySelectorAll('.mode'); 
const total_game_count = document.getElementById("total_game");
const total_win_count = document.getElementById("win_score");
const total_lose_count = document.getElementById("lose_score");

let total_count=0;
let win_count=0;
let lose_count=0;

function main(){
    
    colorDisplay.textContent =pickcolor;
    resetbutton.addEventListener("click", reset)
    modebutton.forEach((button)=> {
        button.addEventListener("click", function(){
            modebutton[0].classList.remove("selected");
            modebutton[1].classList.remove("selected");
            modebutton[2].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent=="Easy"){
                numsquares=3;
                chanceleft= 2;
                chLeftCount.textContent=chanceleft;
            }
            else if(this.textContent=="Medium"){
                numsquares=6;
                chanceleft=3;
                chLeftCount.textContent=chanceleft;
            }
            else{
                numsquares=9;
                chanceleft=4;
                chLeftCount.textContent=chanceleft;
            }
            reset();
        });
    });
    
    for (let i = 0; i< squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        
    
        squares[i].addEventListener("click", function(){
            let get_mode= document.getElementsByClassName('selected mode');
            let mode=(get_mode[0].innerText).toLowerCase()
            
            // console.log(mode==='medium' && clicked==2);
            clicked++;
            
            const clickedcolor = this.style.backgroundColor;
            console.log(clickedcolor);
            if(clickedcolor === pickcolor){
                total_count++;
                win_count++;
                total_game_count.textContent=total_count;
                total_win_count.textContent=win_count;
                message.textContent="Correct Answer";
                changeColors(pickcolor);
                colorDisplay.style.color=pickcolor;
                resetbutton.textContent="Play again"
            }
            else{
                
                this.style.backgroundColor = "aqua";
                if(mode==='medium' && clicked==3){
                    changeColors(pickcolor);
                    colorDisplay.style.color=pickcolor;
                    resetbutton.textContent="Play again";
                    chLeftCount.textContent=0;
                    total_count++;
                    lose_count++;
                    total_game_count.textContent=total_count;
                    total_lose_count.textContent=lose_count;
                    return message.textContent="You Lose"
                 }
                else if(mode==='easy' && clicked==2){
                    changeColors(pickcolor);
                colorDisplay.style.color=pickcolor;
                total_count++;
                lose_count++;
                total_game_count.textContent=total_count;
                total_lose_count.textContent=lose_count;
                resetbutton.textContent="Play again";
                chLeftCount.textContent=0;
                
                return message.textContent="You Lose"
                }
                else if(mode==='hard' && clicked==4){
                    changeColors(pickcolor);
                colorDisplay.style.color=pickcolor;
                total_count++;
                lose_count++;
                total_game_count.textContent=total_count;
                total_lose_count.textContent=lose_count;
                resetbutton.textContent="Play again";
                chLeftCount.textContent=0;
                
                return message.textContent="You Lose"
                }
                message.textContent=("Wrong Answer "+(clicked));
                
                let curcout=chLeftCount.textContent
                curcout=curcout-1;
                chLeftCount.textContent=curcout;
            }
        })
        squares[i].addEventListener("mouseover",function(){
            const mouseabove = this.style.backgroundColor;
            console.log(mouseabove);
        })

    };

}
main();





// Mode button 



// easybutton.addEventListener("click", function() {
//     this.classList.add('selected');
//     hardbutton.classList.remove('selected');
//     mediumbutton.classList.remove('selected');
//     numsquares=3;
//     colors = generaterandomcolors(numsquares);
//     pickcolor=pickColors();
//     colorDisplay.textContent=pickcolor
//     for (let i=0; i< squares.length;i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor =colors[i]
//         }
//         else{
//             squares[i].style.display="none";
//         }
//     }
// })
// hardbutton.addEventListener("click", function() {
//     this.classList.add('selected');
//     easybutton.classList.remove('selected');
//     mediumbutton.classList.remove('selected');
//     numsquares=9;
//     colors = generaterandomcolors(numsquares);
//     pickcolor=pickColors();
//     colorDisplay.textContent=pickcolor
//     for (let i=0; i< squares.length;i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor =colors[i];
//             squares[i].style.display="block";
//         }
//         else{
//             squares[i].style.display="none";
//         }
//     }

// })
// mediumbutton.addEventListener("click", function() {
//     this.classList.add('selected');
//     easybutton.classList.remove('selected');
//     hardbutton.classList.remove('selected');
//     numsquares=6;
//     colors = generaterandomcolors(numsquares);
//     pickcolor=pickColors();
//     colorDisplay.textContent=pickcolor
//     for (let i=0; i< squares.length;i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor =colors[i];
//             squares[i].style.display="block";
//         }
//         else{
//             squares[i].style.display="none";
//         }
//     }
// })


