import * as React from "react";
import { css } from "@emotion/react";

const style = css({
  fontSize: 16,
  lineHeight: 1,
});

type Props = {
  text: string;
};

const Paragraph: React.FC<Props> = (props: Props) => {
  return <p css={style}>{props.text}</p>;
};

export default Paragraph;
