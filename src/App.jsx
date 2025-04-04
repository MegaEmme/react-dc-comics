// import './App.css'
import Header from "./components/Header";
import Main from "./components/Main";
import Bluestrip from "./components/Bluestrip";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Bluestrip />
      <Footer />
    </>   // il tag aperto a riga 9 e chiuso qua serve perchè il return può mandare un solo elemento 
  )
}

export default App;
