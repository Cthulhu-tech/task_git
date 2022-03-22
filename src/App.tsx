import { Routes, Route, BrowserRouter}  from "react-router-dom";
import { Loyout } from "./components/layout/layout";
import { ResultPage } from "./page/results/result";
import { HomePage } from "./page/home/home";

export const App = () => {

  return  <BrowserRouter>
            <Routes>
              <Route path="/" element={<Loyout/>}>
                  <Route index element={<HomePage/>}/>
                  <Route path="result" element={<ResultPage/>}/>
              </Route>
            </Routes>
          </BrowserRouter>

}
