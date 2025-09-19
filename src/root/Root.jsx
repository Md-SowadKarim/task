import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/Mainlayouts';
import App from '../App';
import Course2 from '../pages/Course2';

const Root = createBrowserRouter([
 
    {
     path:"/",
     element:<MainLayout></MainLayout>,
    
     children:[
      
       {
         path:"/",
         element:<App/>
       },
       {
         path:"/course",
         element:<Course2/>
       },
      
     
     ]
   
     
    
   
    }
])
   
   export default Root