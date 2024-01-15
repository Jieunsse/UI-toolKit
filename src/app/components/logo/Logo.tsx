import Image from "next/image";
import styles from "./logo.module.css";

interface Props {
  src: string;
  alt: string;
}
const Logo = ({ src, alt }: Props) => {
  return (
    <div>
      <Image src={src} alt={alt} />
    </div>
  );
};

export default Logo;
