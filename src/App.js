import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Canvas from "./components/screens/Canvas";
import GameActions from "./components/GameActions";
import GameOver from "./components/screens/GameOver";
import Scores from "./components/Scores";
import StartGame from "./components/screens/StartGame";
import { canvasActions } from "./store/canvas";
import { handleKeyDown, handleKeyUp } from "./util/eventsListeners";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.canvas);

  const { player1, player2, screen } = state;

  const onChangeScreen = (screen) =>
    dispatch(canvasActions.changeScreen(screen));

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
  }, []);

  return (
    <div className="App">
      {screen === "start" && <StartGame changeScreen={onChangeScreen} />}
      {screen === "gameOver" && <GameOver changeScreen={onChangeScreen} />}
      {screen === "play" && (
        <>
          <Scores player1={player1} player2={player2} />
          <Canvas
            width="900"
            height="500"
            style={{ border: "2px solid white" }}
          />
          <GameActions changeScreen={onChangeScreen} />
        </>
      )}
    </div>
  );
}

export default App;
