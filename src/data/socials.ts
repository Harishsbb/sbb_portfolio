export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  badge?: string;
  primary?: boolean;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://www.youtube.com/@sbbgamingff2001',
    icon: 'Youtube',
    badge: 'SBB GAMING FF',
    primary: true,
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/sbb_gaming007/',
    icon: 'Instagram',
    badge: '@sbb_gaming007',
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/SBB-Gaming',
    icon: 'Github',
    badge: 'Code & Repos',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/sbb-gaming',
    icon: 'Linkedin',
    badge: 'Professional',
  },
];

