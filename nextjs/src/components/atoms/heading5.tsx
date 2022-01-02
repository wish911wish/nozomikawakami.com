import * as React from "react";
import { css } from "@emotion/react";

const style = css({
  fontSize: 16,
  lineHeight: 1,
});

type Props = {
  text: string;
};

const Heading1: React.FC<Props> = (props: Props) => {
  return <h5 css={style}>{props.text}</h5>;
};

export default Heading1;
