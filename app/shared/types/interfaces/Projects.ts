import { StaticImageData } from "next/image";

export interface Project {
  src: StaticImageData;
  header: string;
  description: string;
  link: string;
}