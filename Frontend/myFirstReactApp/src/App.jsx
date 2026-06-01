import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUS from "./pages/ContactUS";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <ContactUS />
      <Product />
      <Login />
      <Register />
      <Footer />
    </>
  );
}

export default App;
