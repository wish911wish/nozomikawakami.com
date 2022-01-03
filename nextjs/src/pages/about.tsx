import type { NextPage } from "next";
import { css } from "@emotion/react";
import Heading2 from "components/atoms/heading2";
import Layout from "components/template/layout";

const title = css({
  height: "50vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "end",
  rowGap: 14,
});

const Home: NextPage = () => {
  return (
    <Layout>
      <div css={title}>
        <Heading2 text="About" />
      </div>
    </Layout>
  );
};

export default Home;
