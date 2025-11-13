import Nav from "./Nav";

export default function Header() {
  return (
    <header id="header">
      <div className="header">
        <div className="container header-wrap">

          {/* Logo */}
          <a href="/" className="logo d-inline-flex align-items-center h-100" title="메인으로">
            <img src="/assets/images/main/logo.png" className="logo-img" alt="지오스토리" />
            <img src="/assets/images/main/logo_color.png" className="logo-img--color" alt="지오스토리" />
          </a>

          {/* Navigation */}
          <Nav />
        </div>
      </div>
    </header>
  );
}
