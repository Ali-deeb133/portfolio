import type { ComponentType } from 'react';

// Any icon component from lucide-react or react-icons
export type Icon = ComponentType<{ className?: string }>;

export type SectionId = 'home' | 'about' | 'skills' | 'projects' | 'contact';

export interface NavLink {
  id: SectionId;
  label: string;
}

export interface CodeSnippet {
  fileName: string;
  code: string;
}

export interface Skill {
  name: string;
  icon: Icon;
  note?: string; // e.g. "learning"
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

interface ProjectBase {
  name: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  liveLabel?: string; // overrides the default "Live Demo" button text
  githubUrl: string;
}

export interface FrontendProject extends ProjectBase {
  kind: 'frontend';
  image: string;
  imageAlt: string;
}

export interface BackendProject extends ProjectBase {
  kind: 'backend';
  features: string[];
  codeSample: string;
}

export type Project = FrontendProject | BackendProject;

export interface SocialLink {
  label: string;
  href: string;
  icon: Icon;
}
