import * as React from "react";
import Header from "components/organisms/header";

const IndexLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default IndexLayout;
