import "./App.css";
import Listing from "./Listing.jsx";
import data from "./Etsy.json";

function App() {
   return (
    <div className="app">
      <Listing items={data} />
    </div>
  );
}

export default App;