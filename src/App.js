import logo from './logo.svg';
import './App.css';

// import Tech from'./tech';
// function App(){
//   return(
//     <Tech/>
//   );


// import Login from'./login.js';
// function App(){
//   return(
//     <>
//     <Login/>
//     </>
//   );
// }
// import './sq.css';
// import Super from'./super';
// import Btn from'./social btn';
// import Note from'./notification.js';
// function App() {
//   return (
//     <div class="sl">

// <Super/>      
//       </div>
//   );
// }
// function App(){
//   return(
//     <>
//     <Btn/>
//     </>
//   )
// }
// function App(){
//   return(
//     <>
//     <Note/>
//     </>

//   );
// }
import{ BrowserRouter,Routes,Route } from 'react-router-dom';
import Super from'./super.js';
import Btn from'./social btn.js';
import Note from'./notification.js'; 
import Login from'./login';
import Tech from'./tech';
import Menu from'./menu';   
import Home1 from './Responsivelayout/home';
import Work from './Responsivelayout/work';
import Organic from './Responsivelayout/organic';
import Testimonial from './Responsivelayout/testimonial';
import Organicfram from './Responsivelayout/organicfarm';
import Product from './Responsivelayout/products';
import About from './Responsivelayout/about';
import Menu1 from './Responsivelayout/menu1';
import Respon from './Responsivelayout/responsive';
import Add from './moodle/increment';
import Fruit from './moodle/fruit';
import Feedback from './moodle/feedback';
import Date1 from './moodle/datefn';
import Comic from './moodle/comic';
import Product1 from './moodle/jsontask2';
import Jdetails from './moodle/jdetails';





function App(){
  return(
    <div>
      {/* <Home1/>
      <Work/>
      <Organic/>
      <Testimonial/>
      <Organicfram/>
      <Product/>
      <About/> */
      // 
      // <Fruit/>
      }
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu/>}/>
          <Route path='/super' element={<Super/>}/>
          <Route path='/notification' element={<Note/>}/>
          <Route path='/social btn' element={<Btn/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/tech' element={<Tech/>}/>
          <Route path='/responsive' element={<Respon/>}/>
          

         
          <Route path='/home' element={[<Menu/>,<Menu1/>,<Home1/>]}/>
          <Route path='/work' element={[<Menu/>,<Menu1/>,<Work/>]}/>
          <Route path='/organicfarm' element={[<Menu/>,<Menu1/>,<Organicfram/>]}/>
          <Route path='/about' element={[<Menu/>,<Menu1/>,<About/>]}/>
          <Route path='/happyfarming' element={[<Menu/>,<Menu1/>,<Testimonial/>]}/>
          <Route path='/product' element={[<Menu/>,<Menu1/>,<Product/>]}/>
          <Route path='/organic' element={[<Menu/>,<Menu1/>,<Organic/>]}/>
          <Route path='/increment' element={[<Menu/>,<Menu1/>,<Add/>]}/>
          <Route path='/fruit' element={[<Menu/>,<Menu1/>,<Fruit/>]}/>
          <Route path="/feedback" element={[<Menu/>,<Menu1/>,<Feedback/>]}/>
          <Route path="/datefn" element={[<Menu/>,<Menu1/>,<Date1/>]}/>
          <Route path="/comic" element={[<Menu/>,<Menu1/>,<Comic/>]}/>
          <Route path='/jsontask2' element={[<Menu1/>,<Product1/>]}/>
          <Route path='/jdetails/:id' element={[<Menu1/>,<Jdetails/>]}/>
          
          
          
          
       

        </Routes>
      </BrowserRouter>
    </div>
  );
}export default App;
// function App(){
//   return(
//     <>
//     <Comic/>
//     </>
//   );
// }
// export default App;