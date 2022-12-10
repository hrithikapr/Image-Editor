import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import ImageEditor from './Components/ImageEditor';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Authorisor from './Components/Authorisor';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="" />
          <Route element={<Contact />} path="contact" />
          <Route element={<Login />} path="login" />
          <Route element={<Signup />} path="signup" />
          <Route element={
            <Authorisor>

              <ImageEditor />
            </Authorisor>
          } path="editor" />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
