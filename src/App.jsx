// import './App.css'
import Header from "./components/Header";
import Main from "./components/Main";
import Bluestrip from "./components/Bluestrip";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";

const FooterDcComics = ["Characters", "Comics", "Movies", "TV", "Games", "Videos", "News", "Shop DC", "Shop DC Collectibles"];
const FooterShop = ["Shop DC", "Shop DC Collectibles"];
const FooterDc = ["Terms Of Use", "Privacy policy (New)", "Ad Choices", "Advertising", "Jobs", "Subscriptions", "Talent Workshops", "CPSC Certificates", "Ratings", "Shop Help", "Contact Us"];
const FooterSites = ["DC", "MAD Magazine", "DC Kids", "DC Universe", "DC Power Visa"];
function App() {
  return (
    <>
      <Header />
      <Jumbotron />
      <Main />
      <Bluestrip />
      <Footer FooterListOne={FooterDcComics} FooterListTwo={FooterShop} FooterListThree={FooterDc} FooterListFour={FooterSites} />
    </>   // il tag aperto a riga 9 e chiuso qua serve perchè il return può mandare un solo elemento 
  )
}

export default App;
