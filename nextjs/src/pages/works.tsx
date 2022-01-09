import React from "react";
import type { NextPage } from "next";
import Image from "components/atoms/Image";
import { css } from "@emotion/react";
import Heading2 from "components/atoms/heading2";
import Heading4 from "components/atoms/heading4";
import WorksCard from "components/molecules/worksCard";
import Layout from "components/template/layout";
import Work from "interfaces/work";
import { getWorks } from "api/works";

const title = css({
  height: "50vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "end",
  rowGap: 14,
});

const worksList = css({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: 12,
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
      <div css={title}>
        <Heading2 text="Works" />
        <Heading4 text="My works." />
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
