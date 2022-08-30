import "./App.css";
import Feed from "./components/Feed";

function App() {
  return (
    <div className="App dark">
      <header className="App-header dark:text-white dark:bg-slate-800">
        <Feed />
      </header>
    </div>
  );
}

export default App;
