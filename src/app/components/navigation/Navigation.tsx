import styles from "./Navigation.module.css";
import Link from "next/link";

interface Props {
  name: string;
}
const Navigation = ({ name }: Props) => {
  return (
    <>
      <div className={styles.nav}>
        <Link href="/">{name}</Link>
      </div>
    </>
  );
};

export default Navigation;
