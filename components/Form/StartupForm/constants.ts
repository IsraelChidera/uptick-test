export const title = 'Uptick Ventures Lab';

export const subText1 =
  'Uptick Ventures Lab Cohort is a 4-month intense program for founders supporting them with incredible talent resources to get your MVP shipped, access tech and business resources and an end-to-end investment readiness support to enable you attract external funding and scale your company.';
export const subText2 =
  'Join the next generation of great founders to build the future with Uptick Talent.';

export const startupInput = [
  {
    id: 1,
    label: 'First Name',
    type: 'text',
    required: true,
    name: 'firstName',
    placeHolder: 'First name',
  },
  {
    id: 2,
    label: 'Last Name',
    type: 'text',
    required: true,
    name: 'lastName',
    placeHolder: 'Last name',
  },
  {
    id: 3,
    label: 'Email',
    type: 'email',
    required: true,
    name: 'email',
    placeHolder: 'Email address',
  },
  {
    id: 4,
    label: 'Phone Number',
    type: 'tel',
    required: true,
    name: 'phone',
    placeHolder: '+2348010101010',
  },
  {
    id: 5,
    label: 'Name of Startup',
    type: 'text',
    required: true,
    name: 'nameOfStartup',
    placeHolder: '',
  },
  {
    id: 6,
    label: 'Link to your what you are working on?',
    type: 'url',
    required: true,
    name: 'project',
    placeHolder: '',
  },
  {
    id: 7,
    label: 'Give a short description of what you are working on.',
    type: 'textarea',
    required: true,
    name: 'projectDescription',
  },
  {
    id: 8,
    label: 'What are your needs right now?',
    type: 'select',
    options: [
      'Deciding on a problem to work on',
      'Shipping a working MVP as soon as possible',
      'Acquiring your first 100 paying users',
      'Attracting funding to build your startup',
      'Understanding how to scale your startup',
      'Other...',
    ],
    required: true,
    name: 'needs',
    placeHolder: 'Deciding on a problem to work on',
  },
  {
    id: 9,
    label: 'Country',
    type: 'text',
    required: true,
    name: 'country',
    placeHolder: 'eg.Nigeria',
  },
  {
    id: 10,
    label: 'City',
    type: 'text',
    required: true,
    name: 'city',
    placeHolder: 'eg.Jos, Plateau',
  },
  {
    id: 11,
    label: 'How do you hear about us?',
    type: 'select',
    options: [
      'Friends and Families',
      'LinkedIn',
      'Twitter',
      'Instagram',
      'Facebook',
      'Tech Communities',
      'Other...',
    ],
    required: true,
    name: 'how',
    placeHolder: 'Nil',
  },
];
