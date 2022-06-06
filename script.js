const playerObj = function(symbol){
     symbol
    return {symbol}
}
const gameLogic = (function(){
    let player1 = null;
    let player2 = null;
    let turn = 1;
    let symbol = "";

    let button1 = document.getElementById('player1')
    button1.addEventListener('click', () => {
        player1 =playerObj(button1.dataset.player)
        console.log(player1)
    })

    let button2 = document.getElementById('player2')
    button2.addEventListener('click', () =>{
        player2 = playerObj(button2.dataset.player)
        console.log(player2)
    })

    const getSymbol = function(){
        if (turn == 1){
            turn ++
            return player1.symbol
        }
        if (turn == 2){
            turn --
            return player2.symbol
        }
    }
    return {getSymbol}
})()

const gameBoard = (function(){
    let myBoard = [,,,,,,,,,];
     console.log(myBoard)
    let spots = document.querySelectorAll('.spot'); 
    
    
    
    let index = null;

    const findIndex = function(){
         return index = this.dataset.index
    }     
    const populateArray = function(){
        myBoard.splice(index ,1, gameLogic.getSymbol())
        displayBoard()
    }   
    const displayBoard = function(){
        for(let i = 0; i < myBoard.length; i++){
            spots[i].textContent = myBoard[i]
        }
        console.log(myBoard)
    }
    spots.forEach(spot => spot.addEventListener('click', findIndex))
    spots.forEach(spot => spot.addEventListener('click', populateArray))    
    return {populateArray}
})()



