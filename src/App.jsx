// import './App.css'
import Header from "./components/Header";
import Main from "./components/Main";
import Bluestrip from "./components/Bluestrip";
import Footer from "./components/Footer";

const FooterDcComics = ["Characters", "Comics", "Movies", "TV", "Games", "Videos", "News", "Shop DC", "Shop DC Collectibles"];
const FooterShop = ["Shop DC", "Shop DC Collectibles"];
const FooterDc = ["Terms Of Use"];
const FooterSites = [];
function App() {
  return (
    <>
      <Header />
      <Main />
      <Bluestrip />
      <Footer FooterListOne={FooterDcComics} FooterListTwo={FooterShop} />
    </>   // il tag aperto a riga 9 e chiuso qua serve perchè il return può mandare un solo elemento 
  )
}

export default App;
