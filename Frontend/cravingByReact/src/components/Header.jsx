import logo from "../images/craveing logo.png";

function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-md bg-orange-600">
      <img src={logo} alt="Craving" className="h-12 w-auto object-contain" />

      <div className="flex items-center gap-4">
        <a
          href="/login"
          className="text-white font-medium hover:text-orange-500 transition"
        >
          Login
        </a>

        <a
          href="/register"
          className="bg-white text-orange-600 px-5 py-2 rounded-lg font-medium hover:bg-orange-600 transition"
        >
          Register
        </a>
      </div>
    </header>
  );
}

export default Header;
