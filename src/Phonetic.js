import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <span className="Phonetic">
      <li>
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          🗣
        </a>
      </li>
      <li>{props.phonetic.text}</li>
    </span>
  );
}
