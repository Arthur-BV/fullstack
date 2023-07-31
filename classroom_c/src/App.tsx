import './App.css';
import { Route, Routes } from "react-router";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Main from "./components/layouts/Main";
import Lessons from "./pages/Lessons";
import Groups from "./pages/Groups";
import ClassRooms from "./pages/ClassRooms";
import Users from "./pages/Users";
import P404 from "./pages/P404";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Users" element={<Users/>}/>
        <Route path="/ClassRooms" element={<ClassRooms/>}/>
        <Route path="/Groups" element={<Groups/>}/>
        <Route path="/Lessons" element={<Lessons/>}/>
        <Route path="*" element={<P404/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
