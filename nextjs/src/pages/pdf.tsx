import React from "react";
import type { NextPage } from "next";
import { Page, Text, View, Document } from "@react-pdf/renderer";
import {
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer/lib/react-pdf.browser.cjs.js";
const WorksList: React.FC = () => {
  return (
    <Document>
      <Page size="A4">
        <View>
          <Text>Section #1</Text>
        </View>
        <View>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <PDFViewer>
        <WorksList />
      </PDFViewer>
      <PDFDownloadLink document={<WorksList />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </>
  );
};

export default Home;
