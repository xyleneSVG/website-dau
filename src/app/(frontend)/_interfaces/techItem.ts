export interface TechItem {
  id: number;
  techName: string;
  techIcon: TechIcon;
}

export interface TechIcon {
  id: number;
  filename: string;
  alt: string;
  url: string;
}