import { FormBody } from '../constants';

export const title = 'Project/Product Management';

export const subText1 =
  'Explore our Product Management Fellowship, a 4-month initiative providing mentorship and job prep resources. Our program evaluates and bridges skill gaps, shaping you into a skilled product manager.';
export const subText2 = 'Applications close on January 21st.';

export const productInput: FormBody[] = [
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
    label: 'City, State',
    type: 'text',
    required: false,
    name: 'cityState',
    placeHolder: 'eg.Jos, Plateau',
  },
  {
    id: 6,
    label: 'How many years of product management experience do you have?',
    type: 'select',
    options: ['Less than a year', '1-2 years', 'Above 2 years'],
    required: true,
    name: 'yearsOfExperience',
    placeHolder: 'Less than a year',
  },
  {
    id: 7,
    label: 'What are your career goals between the next two years?',
    type: 'textarea',
    required: false,
    name: 'careerGoals',
    placeHolder: 'What are your career goals',
  },
  {
    id: 8,
    label: 'Link to portfolio or one of your completed Projects',
    type: 'url',
    required: false,
    name: 'portfolioLink',
    placeHolder: 'Portfolio Link',
  },
  {
    id: 9,
    label:
      'Are you able to commit at least 40 hours per week to participate fully in the fellowship?',
    type: 'select',
    options: ['Yes', 'No'],
    required: true,
    name: 'commitment',
    placeHolder: 'Yes',
  },
  {
    id: 10,
    label: 'How did you get to know about the fellowship?',
    type: 'select',
    options: [
      'Andela Learning Community',
      'Google Developer Group Jos',
      'Google Developer Group Lagos',
      'Google Developer Group Ikorodu',
      'GDSC Unilag',
      'GDSC Unijos',
      'GDSC FUTA',
      'GDSC OAU',
      'GDSC UI',
      'nHub',
      'Akure Tech Hub',
      'Code Plateau',
      'Meta developer Circle Accra Ghana',
      'Meta developer Circle Aba',
      'Meta developer Circle Lagos',
      'Meta developer Circle Abuja',
      'Other...',
    ],
    required: true,
    name: 'howDidYouHearAboutUs',
    placeHolder: 'Andela Learning Community',
  },
];
