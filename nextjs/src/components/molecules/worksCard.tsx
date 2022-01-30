import * as React from "react";
import { css } from "@emotion/react";
import Work from "interfaces/work";
import Image from "components/atoms/Image";

const style = css({
  fontSize: 14,
  lineHeight: 1,
  padding: [8, 16],
});

type Props = {
  work: Work;
};

const worksCard = css({
  width: "100%",
});

const WorksCard: React.FC<Props> = (props: Props) => {
  const start = `${props.work.periodStart.getFullYear()}/${
    props.work.periodStart.getMonth() + 1
  }/${props.work.periodStart.getDate()}`;
  return (
    <div css={worksCard}>
      <Image
        alt={props.work.name}
        src={props.work.imageUrl}
        width={300}
        height={200}
      />
      <p>{props.work.name}</p>
      <p>{start}</p>
    </div>
  );
};

export default WorksCard;
