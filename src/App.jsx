import "./App.css";
import { Result } from "./components/Result";
import { Summary } from "./components/Summary";

function App() {
  return (
    <main>
      <div className="flex flex-col min-w-[375px] md:flex-row bg-white justify-between rounded-4xl">
        <Result />
        <Summary />
      </div>
    </main>
  );
}

export default App;
