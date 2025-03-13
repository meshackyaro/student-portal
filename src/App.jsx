import { ROUTES } from "./router/router";
import {useRoutes} from 'react-router-dom';

function App() {
  return(
    useRoutes(ROUTES)
  )
}

export default App;