import type { NextPage } from "next";
import { css } from "@emotion/react";
import Layout from "components/template/layout";
import Heading2 from "components/atoms/heading2";
import Heading4 from "components/atoms/heading4";
import Anchor from "components/atoms/anchor";
import AboutPageSection from "components/molecules/aboutPageSection";
import AboutPageItem from "components/molecules/aboutPageItem";
import ScrollArrow from "components/molecules/scrollArrow";

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

const aboutContents = css({
  maxWidth: 1000,
  padding: 42,
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  rowGap: 24,
});

const careerContents = css({
  display: "flex",
  flexDirection: "column",
  rowGap: 18,
});

const mediaContents = css({
  display: "flex",
  flexDirection: "column",
  rowGap: 10,
});

const Home: NextPage = () => {
  return (
    <Layout>
      <div css={mainVisual}>
        <div css={title}>
          <Heading2 text="About" />
          <Heading4 text="My career and skills." />
        </div>
        <div css={scroll}>
          <p>scroll</p>
        </div>
        <div css={arrowContainer}>
          <ScrollArrow />
        </div>
      </div>
      <div css={aboutContents}>
        <AboutPageSection title="Career">
          <div css={careerContents}>
            <AboutPageItem title="個人事業主: 2020.02 ~ now">
              <p>
                スタートアップ案件を中心に参画しています。フロントエンド・バックエンド・インフラ構築（AWS）を担当しています。
              </p>
            </AboutPageItem>
            <AboutPageItem title="株式会社アグレックス: 2016.08 ~ 2020.01">
              <p>
                金融系業務アプリケーションの開発・保守を担当。
                １〜２年目は某信託銀行に常駐し、EUCアプリケーションの開発業務の要件定義〜テスト工程を担当。
                ３年目から金融企業向けにSalesforce.comの導入支援・開発業務を担当。
              </p>
            </AboutPageItem>
          </div>
        </AboutPageSection>
        <AboutPageSection title="Media">
          <div css={mediaContents}>
            <AboutPageItem title="GitHub">
              <Anchor
                href="https://github.com/wish911wish"
                text="https://github.com/wish911wish"
              />
            </AboutPageItem>
            <AboutPageItem title="Qiita">
              <Anchor
                href="https://qiita.com/nozomi53motomachi"
                text="https://qiita.com/nozomi53motomachi"
              />
            </AboutPageItem>
          </div>
        </AboutPageSection>
        <AboutPageSection title="Skills">
          <p>
            PHP / JavaScript / TypeScript / React / Vue / Laravel / Docker / AWS
          </p>
        </AboutPageSection>
        <AboutPageSection title="Contact">
          <p>wish911wish@gmail.com</p>
        </AboutPageSection>
      </div>
    </Layout>
  );
};

export default Home;
