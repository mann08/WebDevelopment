import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <br />
      <div id="abcd">My first React App</div>
      <br />
      <div> Mann Verma </div>
      <br />
      <p className="bg-success">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, iste
        maxime recusandae doloribus natus praesentium fuga voluptas quidem,
        alias quo vero. Explicabo quas tempore reprehenderit.
      </p>
      <div> Learning MERN Stack</div>
      <br />
      <button>click here</button>
      <br />
      <br />
      <Footer />
    </>
  );
}

export default App;
