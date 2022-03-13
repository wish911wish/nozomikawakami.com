import React from "react";
import type { NextPage } from "next";
import { PDFDownloadLink } from "@react-pdf/renderer/lib/react-pdf.browser.cjs.js";
import { css } from "@emotion/react";
import Heading2 from "components/atoms/heading2";
import Heading4 from "components/atoms/heading4";
import Loading from "components/atoms/loading";
import ScrollArrow from "components/molecules/scrollArrow";
import WorksList from "components/organisms/worksList";
import Layout from "components/template/layout";
import Work from "interfaces/work";
import { getWorks } from "api/works";
import CurriculumVitae from "components/organisms/curriculumVitae";
import CVDownloadLink from "components/molecules/cVDownloadLink";

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
        </div>
        <div css={arrowContainer}>
          <ScrollArrow />
        </div>
      </div>
      {works.length ? (
        <>
          <PDFDownloadLink
            document={<CurriculumVitae works={works} />}
            fileName="職務経歴書_川上望.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? <Loading size="sm" /> : <CVDownloadLink />
            }
          </PDFDownloadLink>

          <WorksList works={works} />
        </>
      ) : (
        <Loading />
      )}
    </Layout>
  );
};

export default Home;
