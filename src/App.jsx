import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import { Home, Dashboard, Authentication } from './pages'
import LoadingWidget from "./components/_/modal/loading";

const App = () => {
  return (
    <>
        <LoadingWidget/>
        <BrowserRouter>
          <Routes>
              <Route path="/" index element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/auth" element={<Authentication />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
