import * as React from "react";
import { css } from "@emotion/react";
import Link from "next/link";
import Button from "components/atoms/button";

const header = css({
  display: "flex",
  justifyContent: "end",
  paddingTop: 8,
  paddingBottom: 8,
  paddingRight: 24,
  paddingLeft: 24,
});

const navList = css({
  display: "flex",
  columnGap: 24,
});

const Header: React.FC = () => {
  return (
    <header css={header}>
      <nav>
        <ul css={navList}>
          <li>
            <Link href="/">
              <a>
                <Button text="top" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/works">
              <a>
                <Button text="Works" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>
                <Button text="About" />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
