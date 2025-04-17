export type Project = {
  title: string;
  description: string;
  chips: { label: string; className: string }[];
  repoURL: string;
  demoURL?: string;
  imageURL: string;
};
