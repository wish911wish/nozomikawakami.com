import * as React from "react";
import { css } from "@emotion/react";

const style = css({
  cursor: "pointer",
  textDecoration: "underline",
});

type Props = {
  text: string;
  href: string;
};

const Anchor: React.FC<Props> = (props: Props) => {
  return (
    <a css={style} href={props.href}>
      {props.text}
    </a>
  );
};

export default Anchor;
