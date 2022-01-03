import * as React from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type ImageLoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

const myLoader = (param: ImageLoaderProps) => {
  return `${param.src}`;
};

const Heading1: React.FC<Props> = (props: Props) => {
  return (
    <Image
      loader={myLoader}
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  );
};

export default Heading1;
