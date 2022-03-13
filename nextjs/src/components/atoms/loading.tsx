import * as React from "react";
import { css, keyframes } from "@emotion/react";

type Props = {
  size?: "sm" | "md";
};

const Loading: React.FC<Props> = (props: Props) => {
  const height = props.size === "sm" ? 50 : 100;
  const width = props.size === "sm" ? 5 : 10;
  const load = keyframes([
    { "0%": { height: height * 0.4 } },
    { "40%": { height: height * 0.8 } },
    { "80%": { height: height * 0.4 } },
    { "100%": { height: height * 0.4 } },
  ]);

  const base = css({
    background: "currentColor",
    opacity: 0.5,
    width: width,
    height: height * 0.4,
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
    height: height,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    columnGap: width,
  });

  return (
    <div css={style}>
      <div css={left} />
      <div css={center} />
      <div css={right} />
    </div>
  );
};

export default Loading;
