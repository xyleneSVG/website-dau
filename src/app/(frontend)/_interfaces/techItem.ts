export interface TechIcon {
  id: number;
  filename: string;
  alt: string;
  url: string;
}

export interface TechDetail {
  id: string;
  techName: string;
  techIcon: TechIcon;
}

export interface TechItem {
  id: number;
  tech: TechDetail[];
}
