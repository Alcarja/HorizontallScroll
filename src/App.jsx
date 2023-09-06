import "./App.css";
import Carousel1 from "./Components/Carousel1";
import Carousel2 from "./Components/Carousel2";
import Contact from "./Components/Contact";
import HomeScreen from "./Components/HomeScreen";
import YourTurn from "./Components/YourTurn";

function App() {
  return (
    <>
      <HomeScreen />
      <Carousel1 />
      <Carousel2 />
      <YourTurn />
      <Contact />
    </>
  );
}

export default App;
