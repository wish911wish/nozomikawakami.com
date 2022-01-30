import * as React from "react";
import Heading4 from "components/atoms/heading4";
import { css } from "@emotion/react";

const heading = css({
  paddingBottom: 4,
});

type Props = {
  title: string;
  children: React.ReactNode;
};

const aboutCareerSection: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <div css={heading}>
        <Heading4 text={props.title} />
      </div>
      {props.children}
    </div>
  );
};

export default aboutCareerSection;
