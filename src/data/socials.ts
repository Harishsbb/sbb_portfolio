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
    url: 'https://www.instagram.com/harishk_sbb?stkn=MWJzZ3pkMHd3ZTI4bg==',
    icon: 'Instagram',
    badge: '@harishk_sbb',
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/Harishsbb',
    icon: 'Github',
    badge: 'Harishsbb',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/harishk06944/',
    icon: 'Linkedin',
    badge: 'Harish Kumar',
  },
];

