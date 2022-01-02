import * as React from "react";
import { css } from "@emotion/react";

const style = css({
  fontSize: 30,
  lineHeight: 1,
});

type Props = {
  text: string;
};

const Heading1: React.FC<Props> = (props: Props) => {
  return <h3 css={style}>{props.text}</h3>;
};

export default Heading1;
