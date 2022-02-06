import * as React from "react";
import { css, keyframes } from "@emotion/react";

const load = keyframes([
  { "0%": { height: 40 } },
  { "40%": { height: 80 } },
  { "80%": { height: 40 } },
  { "100%": { height: 40 } },
]);

const base = css({
  background: "currentColor",
  opacity: 0.5,
  width: 10,
  height: 40,
  animation: `${load} 1s infinite ease-in-out`,
});

const center = css(base, {
  animationDelay: "-0.16s",
});
const right = base;
const left = css(base, {
  animationDelay: "-0.32s",
});

const style = css({
  height: 100,
  display: "flex",
  alignItems: "center",
  columnGap: 10,
});

const Loading: React.FC = () => {
  return (
    <div css={style}>
      <div css={left} />
      <div css={center} />
      <div css={right} />
    </div>
  );
};

export default Loading;
