import * as React from "react";
import { css } from "@emotion/react";

const style = css({
  height: "100%",
  width: "100%",
});

const arrowDown: React.FC = () => {
  return (
    <svg css={style} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M831.872 340.864L512 652.672 192.128 340.864a30.592 30.592 0 00-42.752 0 29.12 29.12 0 000 41.6L489.664 714.24a32 32 0 0044.672 0l340.288-331.712a29.12 29.12 0 000-41.728 30.592 30.592 0 00-42.752 0z"
      />
    </svg>
  );
};

export default arrowDown;
