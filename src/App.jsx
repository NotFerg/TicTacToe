import Player from "./assets/components/Player/Player.jsx";
import GameBoard from "./assets/components/GameBoard/GameBoard.jsx";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X"/>
          <Player initialName="Player 2" symbol="0"/>
        
        </ol>
       <GameBoard/>
      </div>
      Log
    </main>
  );
}

export default App;
