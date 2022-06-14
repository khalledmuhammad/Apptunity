import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Home from './component/home/Home';
import Desc from './component/home/description/Desc';
import Services from './component/services/Services';
import Sample from './component/sample/Sample';


AOS.init({
  duration : 1000
});


function App() {
  return (
    <div>
    <Home />
   <Desc />
   <Services />
   <Sample />
    </div>
  );
}

export default App;
