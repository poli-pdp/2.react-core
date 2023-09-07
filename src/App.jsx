import VideoList from "./components/VideoList";
import { playListM, playListP } from "./data/data";
import style from "./App.module.css";

const App = () => {
  return (
    <div className={style.container}>
      <VideoList title="PROGRAMACION" playList={playListP} />
      <VideoList title="MUSIC" playList={playListM} />
    </div>
  );
};

export default App;
