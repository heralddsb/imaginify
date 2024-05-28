import React from "react";

const Header = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <>
      <h2 className="ps-2 h2-bold text-dark-600">{title}</h2>
      {subtitle && <p className="ps-2 p-16-regular mt-4">{subtitle}</p>}
    </>
  );
};

export default Header;
