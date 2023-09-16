
import Write from './pages/write/Write'
import TopBar from "./components/TopBar/Topbar";
import FullPost from "./pages/FullPost/FullPost.jsx";
import Settings from './pages/settings/Settings';
import Login from './pages/Login/Login';
import Register from './pages/register/Register';
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Fragment } from 'react';


function App() {
  const user = false;
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact
            path='/register'
            element={user ? <Home /> : <Register />} />
          <Route
            exact path='/login'
            element={user ? <Home/> :<Login />}
          />
          <Route
            exact path='/write'
            element={user ? <Write/> :<Register />}
          />
          <Route
            exact path='/settings'
            element={user ? <Settings/> :<Register/> }
          />
          <Route
            exact path='/post/:postId'
            element={<FullPost />}
          />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
