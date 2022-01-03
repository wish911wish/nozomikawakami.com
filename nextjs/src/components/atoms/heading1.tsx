import * as React from "react";
import { css } from "@emotion/react";

const style = css({
  fontSize: 72,
  lineHeight: 1,
});

type Props = {
  text: string;
};

const Heading1: React.FC<Props> = (props: Props) => {
  return <h1 css={style}>{props.text}</h1>;
};

export default Heading1;
