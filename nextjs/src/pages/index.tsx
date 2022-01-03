import type { NextPage } from "next";
import Link from "next/link";
import { css } from "@emotion/react";
import Heading1 from "components/atoms/heading1";
import Heading2 from "components/atoms/heading2";
import Heading4 from "components/atoms/heading4";
import Button from "components/atoms/button";
import Paragraph from "components/atoms/paragraph";

const main = css({
  height: "100vh",
  display: "grid",
  gridTemplateRows: "repeat(3, minmax(0, 1fr));",
});

const title = css({
  gridRowStart: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: 14,
  rowGap: 14,
});

const menu = css({
  gridRowStart: 3,
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "column",
});

const menuList = css({
  display: "flex",
  justifyContent: "center",
  columnGap: 28,
});

const Home: NextPage = () => {
  return (
    <main css={main}>
      <div css={title}>
        <Heading2 text="Be honest with myself." />
        <Heading4 text="Nozomi Kawakami" />
      </div>
      <div css={menu}>
        <div css={menuList}>
          <Link href="/works">
            <a>
              <Button text="Works" size="xl" />
            </a>
          </Link>
          <Link href="/about">
            <a>
              <Button text="About" size="xl" />
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
