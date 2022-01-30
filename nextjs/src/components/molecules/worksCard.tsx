import * as React from "react";
import { css } from "@emotion/react";
import Work from "interfaces/work";
import Image from "components/atoms/Image";

type Props = {
  work: Work;
};

const worksCard = css({
  width: "100%",
});

const WorksCard: React.FC<Props> = (props: Props) => {
  return (
    <div css={worksCard}>
      <Image
        alt={props.work.name}
        src={props.work.imageUrl}
        width={300}
        height={200}
      />
      <p>{props.work.name}</p>
      <p>
        {props.work.technicalSkills.slice(0, 3).map((s, index) => (
          <span key={s}>
            {s}
            {index === 2 ? "" : " / "}
          </span>
        ))}
      </p>
    </div>
  );
};

export default WorksCard;
