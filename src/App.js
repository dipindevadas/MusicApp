
import './App.css';
import Experience from './components/Experience';
import Header from './components/Header';
import Hero from './components/Hero';
import Download from './components/Download';
import Footer from './components/Footer';
import Search from './components/Search';

function App() {
  return (
    <div className="App text-white overflow-hidden ">
      <Header></Header>
      <Hero></Hero>
      <Experience></Experience>
      <Search></Search>
      <Download></Download>
      <Footer></Footer>

     
    </div>
  );
}

export default App;
