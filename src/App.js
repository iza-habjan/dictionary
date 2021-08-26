import Dictionary from "./Dictionary"

import logo from "./logo.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <ul>
            <li>
              <img src={logo} className="App-logo" alt="Iza-Habjan-logo" />
            </li>
            <li>
              <h1>DICTIONARY</h1>
            </li>
          </ul>
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
    </div>
  );
}
