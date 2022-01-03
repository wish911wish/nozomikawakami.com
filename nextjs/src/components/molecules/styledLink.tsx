import * as React from "react";
import { css } from "@emotion/react";
import Button from "components/atoms/button";

const style = css({
  fontSize: 14,
  lineHeight: 1,
  padding: [8, 16],
});

type Props = {
  text: string;
};

const StyledLink: React.FC<Props> = (props: Props) => {
  return <div css={style}>{props.text}</div>;
};

export default StyledLink;
