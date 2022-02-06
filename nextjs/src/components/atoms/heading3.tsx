import * as React from "react";
import { css } from "@emotion/react";
import { fontSize } from "styles/variables";

const style = css({
  fontSize: fontSize.h3,
  lineHeight: 1.2,
});

type Props = {
  text: string;
};

const Heading3: React.FC<Props> = (props: Props) => {
  return <h3 css={style}>{props.text}</h3>;
};

export default Heading3;
