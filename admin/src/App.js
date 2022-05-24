import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { AllRoutes } from "./routes";
import Layout from "./components/common/Layout";
import Dashboard from "./components/Dashboard";
import Courses from "./components/Courses";
import CourseDetails from "./components/CourseDetails";
import MarketPlace from "./components/MarketPlace";
import MarketPlaceDetails from "./components/MarketPlaceDetails";

function App() {
  return (
    <>
      <Layout>
        <BrowserRouter >
          <Routes>
            <Route exact path={AllRoutes.Dashboard.path} element={<Dashboard />} />
            <Route exact path={AllRoutes.Courses.path} element={<Courses />} />
            <Route path={`${AllRoutes.CourseDetails.path(':id')}`} element={<CourseDetails />} />
            <Route exact path={AllRoutes.MarketPlace.path} element={<MarketPlace />} />
            <Route path={`${AllRoutes.MarketPlaceDetails.path(':id')}`} element={<MarketPlaceDetails />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
