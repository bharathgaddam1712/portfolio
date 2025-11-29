export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  external?: string;
  image?: string;
  featured?: boolean;
}

export interface Job {
  company: string;
  title: string;
  range: string;
  url: string;
  duties: string[];
}

export interface NavItem {
  name: string;
  url: string;
}