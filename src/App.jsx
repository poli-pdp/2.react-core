import VideoItem from "./components/VideoItem";
import VideoList from "./components/VideoList";

const playListP = [
  { title: "Java", duration: "60", date: "", description: "" },
  { title: "Node", duration: "50", date: "", description: "" },
];

const playListM = [
  { title: "Rock", duration: "60", date: "", description: "" },
  { title: "Salsa", duration: "25", date: "", description: "" },
];

const App = () => {
  return (
    <div>
      <VideoList title="PROGRAMACION" playList={playListP} />
      <VideoList title="MUSIC" playList={playListM} />
    </div>
  );
};

export default App;
