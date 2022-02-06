import * as React from "react";
import { css } from "@emotion/react";
import { fontSize } from "styles/variables";

const style = css({
  fontSize: fontSize.h5,
  lineHeight: 1.2,
});

type Props = {
  text: string;
};

const Heading5: React.FC<Props> = (props: Props) => {
  return <h5 css={style}>{props.text}</h5>;
};

export default Heading5;
