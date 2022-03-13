import type { NextPage } from "next";
import * as React from "react";
import {
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer/lib/react-pdf.browser.cjs.js";
import Work from "interfaces/work";
import { getWorks } from "api/works";
import Loading from "components/atoms/loading";
import CurriculumVitae from "components/organisms/curriculumVitae";
import CVDownloadLink from "components/molecules/cVDownloadLink";

const Home: NextPage = () => {
  const [works, setWorks] = React.useState<Work[]>([]);

  React.useEffect(() => {
    (async () => {
      const worksData = await getWorks();
      setWorks(worksData);
    })();
  }, []);

  return (
    <>
      {works.length ? (
        <PDFViewer width={"100%"} height={"900px"}>
          <CurriculumVitae works={works} />
        </PDFViewer>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
