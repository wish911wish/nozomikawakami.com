import React from "react";
import type { NextPage } from "next";
import Image from "components/atoms/Image";
import { css } from "@emotion/react";
import Heading2 from "components/atoms/heading2";
import Heading4 from "components/atoms/heading4";
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
      <div>
        {works.map((w) => (
          <div key={w.id}>
            <p>
              {w.name} at{" "}
              {`${w.periodStart.getFullYear()}/${
                w.periodStart.getMonth() + 1
              }/${w.periodStart.getDate()}`}
            </p>
            <Image alt={w.name} src={w.imageUrl} width={300} height={200} />
          </div>
        ))}
        <div></div>
      </div>
    </Layout>
  );
};

export default Home;
