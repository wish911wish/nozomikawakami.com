import * as React from "react";
import { css } from "@emotion/react";
import IconDownLoad from "components/atoms/iconDownLoad";
import Text from "components/atoms/heading3";

const style = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  columnGap: 8,
  cursor: "pointer",
  fontSize: 2,
});

const cVDownloadLink: React.FC = () => {
  return (
    <div css={style}>
      <div>
        <IconDownLoad />
      </div>
      <Text text="Download resume" />
    </div>
  );
};

export default cVDownloadLink;
