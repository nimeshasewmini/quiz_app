import '../styles/App.css';

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
/**import components*/
import Main from './Main';
import Quiz from './quiz';
import Result from './result';
import { CheckUserExist } from '../helper/helper';



/**react router */
const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>
  },
  {
    path : '/quiz',
    element :<Quiz/>
  },
  {
    path : '/result',
    element : <CheckUserExist><Result/> </CheckUserExist> 
  },
])


function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
