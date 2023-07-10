import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./Layout";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutMe />} />
          {/*  <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} /> */}
          <Route path="*" element={<AboutMe />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

// import Home from "./Home"
// import About from "./About"
// import Contact from "./Contact"
// import Layout from "./components/Layout";

// function App() {
//  return (
//    <div className="App">
//      <BrowserRouter>
//      </BrowserRouter>
//    </div>
//  )
// }

// export default App
