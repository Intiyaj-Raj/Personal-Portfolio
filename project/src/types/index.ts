export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}

export interface Certification {
  id: number;
  title: string;
  platform: string;
  year: string;
  issuer: string;
  description: string;
  imageUrl: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}


export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: string;
}

export interface ParticleConfig {
  id: number;
  x: number;
  y: number;
  angle: number;
  speed: number;
  life: number;
}