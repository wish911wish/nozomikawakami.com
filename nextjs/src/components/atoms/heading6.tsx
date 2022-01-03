import * as React from "react";
import { css } from "@emotion/react";
import { fontSize } from "styles/variables";

const style = css({
  fontSize: fontSize.h6,
  lineHeight: 1.2,
});

type Props = {
  text: string;
};

const Heading6: React.FC<Props> = (props: Props) => {
  return <h6 css={style}>{props.text}</h6>;
};

export default Heading6;
