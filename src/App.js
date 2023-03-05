import "./App.css";
import { Routing } from "./routes/Routing";
import { Header, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
