import "./App.css";
import Ad from "./components/Ad";
import AdDesigner from "./components/AdDesigner";
import Header from "./components/Header";
import Votes from "./components/Votes";

function App() {
  return (
    <div className="App">
      <Header user="Sara" />
      <Ad flavor={"Chocolate"} fontSize={20} darkTheme={false} />
      <Ad flavor={"Vanilla"} fontSize={30} darkTheme={true} />
      <Ad flavor={"Strawberry"} fontSize={40} darkTheme={false} />
      <main className="main">
        <AdDesigner />
        <Votes />
      </main>
    </div>
  );
}

export default App;
