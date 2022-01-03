import * as React from "react";
import { css } from "@emotion/react";
import { fontSize } from "styles/variables";

const style = css({
  fontSize: fontSize.md,
  lineHeight: 1.5,
});

type Props = {
  text: string;
};

const Paragraph: React.FC<Props> = (props: Props) => {
  return <p css={style}>{props.text}</p>;
};

export default Paragraph;
