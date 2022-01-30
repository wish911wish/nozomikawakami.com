import * as React from "react";
import { css, keyframes } from "@emotion/react";
import ArrowDown from "components/atoms/arrowDown";

const sdb = keyframes([
  { "0%": { opacity: 0, transform: "translate(0, 0)" } },
  { "50%": { opacity: 1 } },
  {
    "100%": { opacity: 0, transform: "translate(0, 20px)" },
  },
]);

const arrow = css({
  width: 36,
  height: 36,
  animation: `${sdb} 1.5s infinite`,
});

const ScrollArrow: React.FC = () => {
  return (
    <div css={arrow}>
      <ArrowDown />
    </div>
  );
};

export default ScrollArrow;
