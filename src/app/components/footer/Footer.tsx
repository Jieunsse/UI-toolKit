import React from "react";

interface Props {
  title: string[];
}

const Footer = ({ title }: Props) => {
  const titleList: React.JSX.Element[] = title.map(
    (name: string, index: number) => <li key={index}>{name}</li>,
  );

  return (
    <div>
      <ul>{titleList}</ul>
    </div>
  );
};

export default Footer;
