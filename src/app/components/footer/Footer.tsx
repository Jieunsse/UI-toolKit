import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

interface Props {
  firstRow: string[];
  secondRow: string[];
  thirdRow: string[];
}

const Footer = ({ firstRow, secondRow, thirdRow }: Props) => {
  const firstRows: React.JSX.Element[] = firstRow.map(
    (name: string, index: number) => (
      <li key={index} className={styles.footerItems}>
        {name}
      </li>
    ),
  );

  const secondRows: React.JSX.Element[] = secondRow.map(
    (name: string, index: number) => (
      <li key={index} className={styles.footerItems}>
        {name}
      </li>
    ),
  );

  const thirdRows: React.JSX.Element[] = thirdRow.map(
    (name: string, index: number) => (
      <li key={index} className={styles.footerItems}>
        {name}
      </li>
    ),
  );

  return (
    <div className={styles.footer}>
      <ul className={styles.footerContent}>
        <Link href="/">{firstRows}</Link>
        <Link href="/">{secondRows}</Link>
        <Link href="/">{thirdRows}</Link>
      </ul>
    </div>
  );
};

export default Footer;
