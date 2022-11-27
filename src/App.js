import "./App.css";
import Users from "./Components/users";
import SignIn from "./Components/signIn";
import Footer from "./Components/footer";
import { getData } from "./Components/server";
import { useEffect, useState } from "react";
import Header from "./Components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/home";
import NotFound from "./Components/NotFound";
function App() {
  const [user, setUsers] = useState([]);
  const dataFetch = async () => {
    const userData = await getData();
    setUsers(userData);
  };
  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/users" element={<Users users={user} />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" exact element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
