import * as React from "react";
import { css } from "@emotion/react";

const style = css({
  fontSize: 14,
  lineHeight: 1,
});

type Props = {
  text: string;
};

const Heading1: React.FC<Props> = (props: Props) => {
  return <h6 css={style}>{props.text}</h6>;
};

export default Heading1;
