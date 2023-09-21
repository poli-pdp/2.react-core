import VideoList from "./components/VideoList";
import { playListM, playListP } from "./data/data";
import style from "./App.module.css";
import FormControlado from "./components/FormControlado";
import LifeCycle from "./components/LifeCycle";

const App = () => {
  return (
    <div className={style.container}>
      <VideoList title="PROGRAMACION" playList={playListP} />
      <VideoList title="MUSIC" playList={playListM} />
      <FormControlado />
      <br />
      <LifeCycle />
    </div>
  );
};

export default App;
