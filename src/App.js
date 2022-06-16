import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Home from './component/home/Home';
import Desc from './component/home/description/Desc';
import Services from './component/services/Services';
import Sample from './component/sample/Sample';
import Quality from './component/quality/Quality';
import { Industry } from './component/industry/Industry';
import Questions from './component/questions/Questions';
import Hiring from './component/hiring/Hiring';
import Tech from './component/tech/Tech';
import Experience from './component/experience/Experience';
import Story from './component/story/Story';
import Footer from './component/footer/Footer';


AOS.init({
  duration : 500
});


function App() {
  return (
    <>
    <Home />
   <Desc />
   <Services />
   <Sample />
   <Quality />
   <Industry />
   <Questions />
   <Hiring />
   <Tech />
   <Experience />
   <Story />
   <Footer />
    </>
  );
}

export default App;
