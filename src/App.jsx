import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/page";
import Login from "./pages/auth/login/page";
import Register from "./pages/auth/register/page";
import PageMitra from "./pages/auth/register/form/pageMitra";
import PagePembeli from "./pages/auth/register/form/pagePembeli";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/form-pembeli" element={<PagePembeli />} />
          <Route path="/form-penjual" element={<PageMitra />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
