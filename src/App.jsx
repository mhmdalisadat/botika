import "./App.css";
import FashionSection from "./components/fashionSec";
import Header from "./components/header";
import Landing from "./components/landing";
import PricingSection from "./components/priceSec";

function App() {
  return (
    <>
      <Header />
      <Landing />
      <FashionSection />
      <PricingSection />
    </>
  );
}

export default App;
