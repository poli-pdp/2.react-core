/* eslint-disable react/jsx-key */
import VideoItem from "./VideoItem";

/* eslint-disable react/prop-types */
const VideoList = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.playList.map((item, index) => (
        <VideoItem
          key={index}
          title={item.title}
          duration={item.duration}
          date={item.date}
          description={item.description}
        />
      ))}
    </div>
  );
};
export default VideoList;
