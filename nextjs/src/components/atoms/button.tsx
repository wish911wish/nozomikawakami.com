import * as React from "react";
import { css } from "@emotion/react";

const container = css({
  fontSize: 14,
  lineHeight: 1,
  paddingTop: 4,
  paddingBottom: 4,
  paddingRight: 16,
  paddingLeft: 16,
  overflow: "hidden",
  cursor: "pointer",
  position: "relative",
});

const onContainer = css(container, {
  color: "white",
});

const decoration = css({
  width: "100%",
  height: "100%",
  position: "absolute",
  left: 0,
  top: 0,
  backgroundColor: "black",
  opacity: 0.6,
  transitionDuration: ".5s",
});

const textStyle = css({
  zIndex: 3,
  position: "relative",
});

const leftStyle = css(decoration, {
  transform: "translateX(101%)",
});

const leftStyleOver = css(leftStyle, {
  transform: "translateX(0)",
});

const rightStyle = css(decoration, {
  transform: "translateX(-101%)",
});

const rightStyleOver = css(decoration, {
  transform: "translateX(0)",
});

type Props = {
  text: string;
};

const Button: React.FC<Props> = (props: Props) => {
  const [mouseOver, setMouseOver] = React.useState(false);

  return (
    <div
      css={mouseOver ? onContainer : container}
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <div css={mouseOver ? rightStyleOver : rightStyle} />
      <div css={textStyle}>{props.text}</div>
      <div css={mouseOver ? leftStyleOver : leftStyle} />
    </div>
  );
};

export default Button;
