import React from "react";
import type { NextPage } from "next";
import { css } from "@emotion/react";
import Heading2 from "components/atoms/heading2";
import Heading4 from "components/atoms/heading4";
import ScrollArrow from "components/molecules/scrollArrow";
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

const arrowContainer = css({
  display: "flex",
  justifyContent: "center",
  paddingTop: 12,
});

const worksList = css({
  padding: "120px 24px 24px 24px",
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
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    (async () => {
      const worksData = await getWorks();
      setWorks(worksData);
      setLoading(false);
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
        </div>
        <div css={arrowContainer}>
          <ScrollArrow />
        </div>
      </div>
      <div css={worksList}>
        {works.length ? (
          works.map((w) => (
            <div css={worksCard} key={w.id}>
              <WorksCard work={w} />
            </div>
          ))
        ) : (
          <>loading</>
        )}
      </div>
    </Layout>
  );
};

export default Home;
