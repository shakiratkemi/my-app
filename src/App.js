import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lagos" />
        <footer>
          This is coded by Shakirat Adeyemi and it is{" "}
          <a
            href="https://github.com/shakiratkemi/my-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub{" "}
          </a>
          and hosted on{" "}
          <a
            href="https://heroic-cannoli-f7a8ef.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
export default App;
