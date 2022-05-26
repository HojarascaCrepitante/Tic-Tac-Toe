 
 let gameBoard = (function(){
    let myBoard = [,,,
                   ,,,
                   ,,,];
    
    const pushToAray = function(arg){
        myBoard.splice(0,1,arg)
        console.log(myBoard)
    }
    
   
    const display = () =>{
        for(let i = 0; i < myBoard.length; i++){
               if(myBoard[i]) {
                spot[i].textContent = myBoard[i];
            }
        }
    }
    return { pushToAray, display}
}())

const flowOfTheGame = function(){
    let spot = document.querySelectorAll('.spot');

}
gameBoard.pushToAray("w")
gameBoard.display()


const playerObj = (name, legend) => {
    let player = {
       name,
       legend,
    }
}
