function Header() {
  return (
    <header className="header">
      <div className="logo">Craving</div>

      <div className="nav-links">
        <a href="/login">Login</a>

        <a href="/register" className="register-btn">
          Register
        </a>
      </div>
    </header>
  );
}

export default Header;
