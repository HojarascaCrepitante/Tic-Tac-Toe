const playerObj = function(name,symbol){
    name 
    symbol
    return {name,symbol}
}
const gameLogic = (function(){
    let player1 = null;
    let player2 = null;
    let turn = 1;
    
    let congratulations = document.createElement('div')
        congratulations.classList.add('congrats')
    
    let message = document.createElement('p')
        message.setAttribute('id', 'message')
    
    let restartGame = document.createElement('button')
        restartGame.textContent = "Restart"
        restartGame.addEventListener('click', ()=>{
            window.location.reload()
        })

    let button1 = document.getElementById('player1')
    button1.addEventListener('click', () => {
        player1 =playerObj(document.getElementById('Player1').value ,button1.dataset.player)
    })

    let button2 = document.getElementById('player2')
    button2.addEventListener('click', () =>{
        player2 = playerObj(document.getElementById('Player2').value ,button2.dataset.player)
    })

    const getSymbol = function(){
        if (turn == 1 ){
            turn ++
            return player1.symbol
        }
        if (turn == 2){
            turn --
            return player2.symbol
        }
    }
    const isWinner = function(){
        gameBoard.winningBoard.call(player1.symbol, player1.name)
        gameBoard.winningBoard.call(player2.symbol, player2.name)
    }

    const announceWinner = function(){
        if(this == "Tie"){
            message.textContent = "Tie"
            congratulations.appendChild(message)
            congratulations.appendChild(restartGame)
            document.body.appendChild(congratulations)
        }
        if(this == player1.name){
            message.textContent = ` "${player1.name}" wins`
            congratulations.appendChild(message)
            congratulations.appendChild(restartGame)
            document.body.appendChild(congratulations)
        }

        if(this == player2.name){
            message.textContent = ` "${player2.name}" wins`
            congratulations.appendChild(message)
            congratulations.appendChild(restartGame)
            document.body.appendChild(congratulations)
        }
    }
    return {getSymbol, isWinner,announceWinner}
})()

const gameBoard = (function(){
    let myBoard = [,,,,,,,,,];
    let spots = document.querySelectorAll('.spot'); 
    let index = null;
    let totalMoves = 0;
    let winningState = undefined;

    const findIndex = function(){
         return index = this.dataset.index
    }     
    const populateArray = function(){
        if (!myBoard[index]){
        myBoard.splice(index ,1, gameLogic.getSymbol())
        displayBoard()
        gameLogic.isWinner()
        gameLogic.announceWinner.call(winningState)
        }
    }   
    const displayBoard = function(){
        for(let i = 0; i < myBoard.length; i++){
            spots[i].textContent = myBoard[i]
        }
        totalMoves ++
    }
    const winningBoard = function(winner){
        if(myBoard[0] == this && myBoard[1] == this && myBoard[2] == this){
            winningState = winner
        }
        if(myBoard[3] == this && myBoard[4] == this && myBoard[5] == this){
            winningState = winner
        }
        if(myBoard[6] == this && myBoard[7] == this && myBoard[8] == this){
            winningState = winner
        }
        if(myBoard[0] == this && myBoard[3] == this && myBoard[6] == this){
            winningState = winner
        }
        if(myBoard[1] == this && myBoard[4] == this && myBoard[7] == this){
            winningState = winner
        }
        if(myBoard[2] == this && myBoard[5] == this && myBoard[8] == this){
            winningState = true
        }
        if(myBoard[2] == this && myBoard[5] == this && myBoard[8] == this){
            winningState = winner;
        }
        if(myBoard[0] == this && myBoard[4] == this && myBoard[8] == this){
            winningState = winner;
        }
        if(myBoard[2] == this && myBoard[4] == this && myBoard[6] == this){
            winningState = winner;
        }
        if(totalMoves == 9 && winningState == undefined){
            winningState = "Tie"
        }
    }
   
    spots.forEach(spot => spot.addEventListener('click', findIndex))
    spots.forEach(spot => spot.addEventListener('click', populateArray))    
    return {populateArray, winningBoard}
})()



