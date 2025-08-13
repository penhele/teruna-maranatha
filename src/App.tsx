import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Wrapper from "./pages/Wrapper";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/admin"
        element={
          <Wrapper>
            <Admin />
          </Wrapper>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
