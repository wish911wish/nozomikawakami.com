import React from "react";
import type { NextPage } from "next";
import { css } from "@emotion/react";
import Heading2 from "components/atoms/heading2";
import Heading4 from "components/atoms/heading4";
import WorksCard from "components/molecules/worksCard";
import Layout from "components/template/layout";
import Work from "interfaces/work";
import { getWorks } from "api/works";

const mainVisual = css({
  height: "100vh",
});

const title = css({
  height: "50vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "end",
  rowGap: 14,
});

const scroll = css({
  height: "25vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "end",
});

const arrow = css({
  position: "absolute",
  width: 24,
  height: 24,
  marginLeft: -12,
  borderLeft: "3px solid #2c3e50",
  borderBottom: "3px solid#2c3e50",
  transform: "rotate(-45deg)",
  animation: "sdb 1.5s infinite",
  boxSizing: "border-box",
});

const worksList = css({
  marginTop: 120,
  marginBottom: 24,
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: 24,
});

const worksCard = css({
  width: "100%",
  maxWidth: 300,
});

const Home: NextPage = () => {
  const [works, setWorks] = React.useState<Work[]>([]);

  React.useEffect(() => {
    (async () => {
      const worksData = await getWorks();
      setWorks(worksData);
    })();
  }, []);

  return (
    <Layout>
      <div css={mainVisual}>
        <div css={title}>
          <Heading2 text="Works" />
          <Heading4 text="My works." />
        </div>
        <div css={scroll}>
          <p>scroll</p>
          <a className="arrow"></a>
        </div>
      </div>
      <div css={worksList}>
        {works.map((w) => (
          <div css={worksCard} key={w.id}>
            <WorksCard work={w} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
