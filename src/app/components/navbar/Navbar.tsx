import Link from "next/link";
import styles from "./navbar.module.css";

interface Props {
  title: string;
  href: string;
}

const Navbar = ({ title, href }: Props) => {
  return (
    <nav className={styles.nav}>
      <div>{title}</div>
      <div>
        <ul>
          <li>
            <Link href={href}></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
