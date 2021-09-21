import logo from './logo.svg';
import './App.css';
import Countries from './components/countries/Countries';
import Header from './components/countries/Header';
import Footer from './components/countries/footer/Footer';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>

    </div>
  );
}

export default App;
