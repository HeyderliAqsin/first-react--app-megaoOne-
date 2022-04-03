import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MyRoute from './config/MyRoute';

function App() {
  return (
    <div className="App">
      <Header/>
      <MyRoute/>
      <Footer/>
    </div>
  );
}

export default App;
