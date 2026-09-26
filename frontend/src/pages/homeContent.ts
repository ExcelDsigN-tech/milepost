/**
 * Copy for the landing page's content sections.
 *
 * Kept out of `Home.tsx` so tests can check it against the app's routes
 * without rendering the page. This is real copy, not stand-in data, so none
 * of it is named FIXTURE_.
 */

export interface RoleLink {
  label: string;
  path: string;
}

export interface Role {
  role: string;
  does: string;
  body: string;
  links: RoleLink[];
}

/**
 * Between them the links cover every role route in `APP_ROUTES`, so nothing
 * the navbar exposes is unreachable from this section. `routes.test.ts`
 * checks that stays true.
 */
export const ROLES: Role[] = [
  {
    role: 'Funder',
    does: 'Commit money to a programme',
    body: 'Contribute, follow every release, and get unawarded funds back in proportion.',
    links: [
      { label: 'Funder dashboard', path: '/funders' },
      { label: 'Browse programmes', path: '/directory' },
      { label: 'Programme detail', path: '/programme' },
    ],
  },
  {
    role: 'Recipient',
    does: 'Apply, then receive in tranches',
    body: 'Request what you need, track each tranche, and carry your standing to the next programme.',
    links: [
      { label: 'Recipient dashboard', path: '/recipients' },
      { label: 'Award progress', path: '/recipients/award-progress' },
      { label: 'Application timeline', path: '/recipients/application-timeline' },
      { label: 'Standing', path: '/recipients/standing' },
      { label: 'Spend policy', path: '/policy' },
    ],
  },
  {
    role: 'Verifier',
    does: 'Attest that a condition was met',
    body: 'Each attestation you sign unlocks exactly one tranche for one recipient. You never decide how much anyone gets.',
    links: [
      { label: 'Verifier dashboard', path: '/verifiers' },
      { label: 'Look up attestations', path: '/attestations' },
    ],
  },
  {
    role: 'Admin',
    does: 'Deploy and settle programmes',
    body: 'Configure schemas and programmes through the registry, and finalize awards.',
    links: [
      { label: 'Registry admin', path: '/admin' },
      { label: 'Finalize awards', path: '/finalize' },
      { label: 'Register schema', path: '/schemas/register' },
      { label: 'Standing lookup', path: '/admin/standing' },
    ],
  },
];
