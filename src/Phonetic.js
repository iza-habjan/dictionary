import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <span className="Phonetic">
      <li className="word">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          🗣
        </a>
      </li>
      <li className="word" id="text">
        <h2>{props.phonetic.text}</h2>
      </li>
    </span>
  );
}
