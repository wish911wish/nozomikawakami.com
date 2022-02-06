import * as React from "react";
import Heading2 from "components/atoms/heading2";
import { css } from "@emotion/react";

type Props = {
  title: string;
  children: React.ReactNode;
};

const heading = css({
  paddingBottom: 8,
});

const aboutPageSection: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <div css={heading}>
        <Heading2 text={props.title} />
      </div>
      {props.children}
    </div>
  );
};

export default aboutPageSection;
