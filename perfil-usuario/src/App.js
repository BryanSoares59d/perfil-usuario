import './App.css';
import Header from './components/Header';
import Cartao from './components/Cartao';
import Footer from './components/Footer';
import './Cartao.module.css';
import './Header.module.css';
import './Footer.module.css'

function App() {
  return (
    <div className='App'>
         <Header />
         <Cartao 
           nome="Bryan"
           foto="https://cdn-icons-png.flaticon.com/256/21/21294.png"
           prof="Analista de Segurança"
         />
         <Footer data="13 de agosto de 2025"/>
    </div>
  );
}

export default App;
