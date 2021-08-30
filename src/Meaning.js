import React from "react";

import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <div className="border border-3">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div className="meanings">
              <div key={index}>
                <p>
                  <strong>Definition:</strong> {definition.definition}
                  <br />
                  <strong>Example:</strong> <em>{definition.example}</em>
                  <br />
                  <Synonyms synonyms={definition.synonyms} />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
