import "./App.css";
import Counter from "./Components/Counter";
import Excuse from "./Components/Excuse";
import ShowHide from "./Components/ShowHide";
import ToDoList from "./Components/ToDoList";
import Planets from "./Components/Planets";
import Navbar from "./Components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Form from "./Pages/Form";
import { Provider } from "react-redux";
import Store from "./Components/Store";
import Login from "./Pages/Login";

function App() {
  return (
    <>
    <i>It include practices done for learning ReactJS. #PedroTech</i>
      <Provider store={Store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Project" element={<Project />} />
            <Route path="Form" element={<Form />} />
            <Route path="Login" element={<Login />} />
          </Routes>
        </Router>
      </Provider>
      <div className="Card">
        <Planets />
      </div>
      <div className="Card">
        <Counter />
      </div>
      <div className="Card">
        <ShowHide />
      </div>
      <div className="Card">
        <ToDoList />
      </div>
      <div className="Card">
        <Excuse />
      </div>
    </>
  );
}

export default App;
