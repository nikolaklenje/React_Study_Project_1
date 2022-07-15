
import './App.css';
import Info from './components/Info';
import About from './components/About';
import Footer from './components/Footer';
import Interest from'./components/Interest'



function App() {
  return (
    <div className='container'>
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}

export default App;
