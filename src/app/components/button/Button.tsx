import styles from "./Button.module.css";

interface Props {
  name: string;
}

const Button = ({ name }: Props) => {
  return (
    <div>
      <div className={styles.button}>{name}</div>
    </div>
  );
};

export default Button;
