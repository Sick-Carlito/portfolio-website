export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  featured?: boolean;
  tags?: string[];
  image?: string;
}

export interface BlogMetadata {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author?: string;
  featured?: boolean;
  tags?: string[];
  image?: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  count?: number;
}