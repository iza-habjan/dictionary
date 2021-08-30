import React from "react";

import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <hr className="line"></hr>
        <ul>
          <li className="word">
            <h1>{props.results.word}</h1>
          </li>
          <li className="word">
            {props.results.phonetics.map(function (phonetic, index) {
              return (
                <span key={index}>
                  <Phonetic phonetic={phonetic} />
                </span>
              );
            })}
          </li>
        </ul>
        <hr className="line"></hr>
        <br />
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
