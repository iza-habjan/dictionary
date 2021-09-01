import "./Audio.css";

export default function Audio(props) {
  return (
    <div className="Audio">
      <button
        onClick={function () {
          const audio = document.getElementsByClassName("audioFile")[0];
          audio.play();
        }}
      >
        <i className="fas fa-volume-up"></i>
        <audio className="audioFile" src={props.audio}></audio>
      </button>
    </div>
  );
}
