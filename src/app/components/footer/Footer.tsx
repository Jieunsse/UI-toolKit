import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

interface Props {
  firstRow: string[];
  secondRow: string[];
  thirdRow: string[];
}

const Footer = ({ firstRow, secondRow, thirdRow }: Props) => {
  const createLinks = (row: string[]) => {
    return row.map((name: string, index: number) => (
      <li key={index} className={styles.footerItems}>
        <Link href="/">{name}</Link>
      </li>
    ));
  };

  return (
    <div className={styles.footer}>
      <div className={styles.box}>
        <ul className={styles.footerContent}>{createLinks(firstRow)}</ul>
        <ul className={styles.footerContent}>{createLinks(secondRow)}</ul>
        <ul className={styles.footerContent}>{createLinks(thirdRow)}</ul>
      </div>
    </div>
  );
};

export default Footer;
