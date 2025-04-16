import Link from "next/link";
import sty from "./styles/Header.module.css";

function Header() {
  return (
    <nav className={sty.Nav}>
      <Link href="/">
        <img src="/media/AlasDeMariposaB.png" alt="" />
      </Link>

      <Link href="/about">
        <button className={sty.button}>Nosotros </button>
      </Link>
      <Link href="/comments">
        <button className={sty.button}>Comentarios </button>
      </Link>
    </nav>
  );
}

export default Header;
