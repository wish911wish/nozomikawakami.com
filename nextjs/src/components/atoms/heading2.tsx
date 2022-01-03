import * as React from "react";
import { css } from "@emotion/react";
import { fontSize } from "styles/variables";

const style = css({
  fontSize: fontSize.h2,
  lineHeight: 1.2,
});

type Props = {
  text: string;
};

const Heading2: React.FC<Props> = (props: Props) => {
  return <h2 css={style}>{props.text}</h2>;
};

export default Heading2;
