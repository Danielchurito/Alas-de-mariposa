import Link from "next/link";
import "./styles/Header.css";

function Header() {
  return (
    <header>
      <nav className="Nav">
        <Link href="/">
          <img src="/media/AlasDeMariposaN.png" alt="" />
        </Link>

        <Link href="/about">
          <button className="button">about </button>
        </Link>
        <Link href="/comments">
          <button className="button">comments </button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
