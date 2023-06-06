import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lagos" />
        <Weather />
        <footer>
          This is coded by Shakirat Adeyemi and it is{" "}
          <a
            href="https://github.com/shakiratkemi/my-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced{" "}
          </a>
          on GitHub.
        </footer>
      </div>
    </div>
  );
}
export default App;
