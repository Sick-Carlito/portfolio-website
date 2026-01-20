export interface PortfolioItem {
  slug: string;
  category: string;
  title: string;
  description: string;
  metrics: string;
  content?: string;
  tags?: string[];
  client?: string;
  year?: string;
  featured?: boolean;
  image?: string;
  link?: string;
}

export interface PortfolioMetadata {
  category: string;
  title: string;
  description: string;
  metrics: string;
  client?: string;
  year?: string;
  featured?: boolean;
  tags?: string[];
}