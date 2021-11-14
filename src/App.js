import './App.css';
import { Routes, Route,BrowserRouter} from 'react-router-dom';
import Index from './Component/HomePage/Index/Index';
import PricingBody from './Component/Pricing/PricingBody/PricingBody';
import AboutUs from './Component/AboutUs/AboutUs';
import ContactUs from './Component/ContactUs/ContactUs';
import JoinUsFull from './Component/JoinUsFull/JoinUsFull';
import NotFound from './Component/NotFound/NotFound';
import ClassIndex from './Component/OurClass/ClassIndex/ClassIndex';
function App() {
  return (
<BrowserRouter>
<Routes>
       <Route path='/Home' element={<Index/>}/>
       <Route path="/" element={<Index />}/>
       <Route path="OurClass" element={<ClassIndex />}/>
       <Route path="/Pricing" element={<PricingBody />}/>
       <Route path="/AboutUs" element={<AboutUs/>}/>
       <Route path="/Services" element={<ClassIndex/>}/>
       <Route path="/ContactUs" element={<ContactUs/>}/>
       <Route path="/JoinUs" element={<JoinUsFull/>}/>
       <Route path="/*" element={<NotFound/>}/>
     </Routes>
</BrowserRouter>
  );
}

export default App;
