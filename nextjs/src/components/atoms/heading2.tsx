import * as React from "react";
import { css } from "@emotion/react";

const style = css({
  fontSize: 60,
  lineHeight: 1,
});

type Props = {
  text: string;
};

const Heading1: React.FC<Props> = (props: Props) => {
  return <h2 css={style}>{props.text}</h2>;
};

export default Heading1;
