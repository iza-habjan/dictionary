import "./Phonetic.css";

import Audio from "./Audio";

export default function Phonetic(props) {
  return (
    <span className="Phonetic">
      <li className="word">
        <Audio audio={props.phonetic.audio} />
      </li>
      <li className="word" id="text">
        <h2>{props.phonetic.text}</h2>
      </li>
    </span>
  );
}
