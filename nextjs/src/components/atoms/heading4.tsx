import * as React from "react";
import { css } from "@emotion/react";

const style = css({
  fontSize: 20,
  lineHeight: 1,
});

type Props = {
  text: string;
};

const Heading1: React.FC<Props> = (props: Props) => {
  return <h4 css={style}>{props.text}</h4>;
};

export default Heading1;
