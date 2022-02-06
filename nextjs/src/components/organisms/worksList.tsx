import * as React from "react";
import { css } from "@emotion/react";
import Work from "interfaces/work";
import { motion } from "framer-motion";
import WorksCard from "components/molecules/worksCard";

type Props = {
  works: Work[];
};

const container = css({
  padding: "120px 24px 24px 120px",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: 24,
});

const WorksList: React.FC<Props> = (props: Props) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div css={container}>
        {props.works.map((w) => (
          <WorksCard work={w} key={w.id} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorksList;
