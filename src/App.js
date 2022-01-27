import "./App.css";
import { ComputedStyles } from "./components/ComputedStyles";
import { GSAPref } from "./components/GSAPref";
import { GSAPreact } from "./components/GSAPreact";

function App() {
  return (
    <div className="App">
      <GSAPreact />
      <ComputedStyles />
      <GSAPref />
    </div>
  );
}

export default App;
