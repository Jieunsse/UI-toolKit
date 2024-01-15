import Navbar from "@/app/components/navbar/Navbar";
import styles from "./navbar.module.css";
import ToDiary from "@/asset/ToDiary.svg";
export default function Page() {
  return (
    <div style={{ display: "flex", justifyContent: "end" }}>
      <Navbar href="/" title="Item 01" />
      <Navbar href="/" title="Item 02" />
      <Navbar href="/" title="Item 03" />
      <Navbar href="/" title="Item 04" />
      <Navbar href="/" title="Item 05" />
    </div>
  );
}
