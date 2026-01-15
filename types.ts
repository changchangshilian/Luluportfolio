
export interface Project {
  id: string;
  title: string;
  bg: string;
  badSolution: string;
  goodSolution: string;
  mechanisms: string[];
  results: { label: string; value: string }[];
  h5Url: string;
  h5Img: string;
}

export interface QuickProject {
  tag: string;
  title: string;
  desc: string;
  data: string;
  link: string;
}

export interface CollectionSystem {
  title: string;
  thinking: string;
  links: { title: string; url: string }[];
}
