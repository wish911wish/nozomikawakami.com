import * as React from "react";
import { css } from "@emotion/react";
import { fontSize } from "styles/variables";

const style = css({
  fontSize: fontSize.h4,
  lineHeight: 1.2,
});

type Props = {
  text: string;
};

const Heading4: React.FC<Props> = (props: Props) => {
  return <h4 css={style}>{props.text}</h4>;
};

export default Heading4;
