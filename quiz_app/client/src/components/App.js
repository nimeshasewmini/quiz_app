
import '../styles/App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
/**import components*/
import Main from './Main';
import Quiz from './quiz';
import Result from './result';


/**react router */
const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>
  },
  {
    path : '/quiz',
    element : <Quiz></Quiz>
  },
  {
    path : '/result',
    element : <Result></Result>
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
