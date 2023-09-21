import VideoList from "./components/VideoList";
import { playListM, playListP } from "./data/data";
import style from "./App.module.css";
import FormControlado from "./components/FormControlado";
import LifeCycle from "./components/LifeCycle";
import { useState } from "react";

const App = () => {
  const [showLifeCycle, setShowLifeCycle] = useState(false);
  return (
    <div className={style.container}>
      <VideoList title="PROGRAMACION" playList={playListP} />
      <VideoList title="MUSIC" playList={playListM} />
      <FormControlado />
      <br />
      <button onClick={() => setShowLifeCycle(!showLifeCycle)}>
        {showLifeCycle ? "Ocultar" : "Mostrar"}
      </button>
      {showLifeCycle && <LifeCycle />}
    </div>
  );
};

export default App;
