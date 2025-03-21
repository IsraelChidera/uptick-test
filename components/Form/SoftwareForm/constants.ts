import { FormBody } from '../constants';

export const title = 'Software Engineering';

export const subText1 =
  'Embark on a 4-month journey in our Software Engineering Fellowship. Gain mentorship and job prep resources to secure your entry-level role in tech. \nThis is a structured program where we assess and bridge skill gaps to shape you into a world-class software engineer.';
export const subText2 = 'Applications close on January 21st.';

export const softwareInput: FormBody[] = [
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
    required: true,
    name: 'cityState',
    placeHolder: 'eg.Jos, Plateau',
  },
  {
    id: 6,
    label: 'How many years of programming experience do you have?',
    type: 'select',
    options: ['Less than a year', '1-2 years', 'Above 2 years'],
    required: true,
    name: 'yearsOfExperience',
    placeHolder: 'Less than a year',
  },
];

export const stackInput = {
  id: 7,
  label:
    'What stack are you most proficient in or looking to land a job in this fellowship?',
  type: 'select',
  options: ['Frontend', 'Backend', 'Full Stack', 'Mobile', 'Other...'],
  required: true,
  name: 'stack',
  placeHolder: 'Frontend',
};

export const techStack = [
  {
    id: 8,
    label: 'If you are a front end engineer, what technology do you use?',
    type: 'select',
    options: ['ReactJS', 'Angular', 'VueJS', 'NextJS', 'Other...'],
    required: true,
    name: 'frontendTechStack',
    placeHolder: 'Nil',
  },
  {
    id: 9,
    label: 'If you are a back end engineer, what technology do you use?',
    type: 'select',
    options: [
      'NodeJS',
      'Python (Django/Flask',
      'Java (Springboot)',
      'C# (.Net)',
      'Typescript',
      'NestJS',
      'PHP',
      'Lavarel',
      'Other PHP Frameworks (Xend, Code, Igniter)',
      'Ruby on Ralls',
      'Golang',
      'Other...',
    ],
    required: true,
    name: 'backendTechStack',
    placeHolder: 'Nil',
  },
  {
    id: 10,
    label: 'If you are a mobile engineer, what technology do you use?',
    type: 'select',
    options: [
      'Flutter (Dart Engineering)',
      'React Native',
      'Native Android (Kotlin)',
      'Native Android (Java)',
      'iOS (Swift/Objective C)',
      '.Net (Xamarain)',
      'Ionic Framework',
      'Other...',
    ],
    required: true,
    name: 'mobileTechStack',
    placeHolder: 'Nil',
  },
  {
    id: 11,
    label: 'Other tracks? List your most proficient technologies below?',
    type: 'textarea',
    required: true,
    name: 'otherFieldStack',
    placeHolder: 'Other tracks',
  },
];

export const remainingInputs = [
  {
    id: 12,
    label: 'What are your career goals between the next two years?',
    type: 'textarea',
    required: false,
    name: 'careerGoals',
    placeHolder: 'What are your career goals',
  },
  {
    id: 13,
    label: 'Link to Github',
    type: 'url',
    required: true,
    name: 'githubLink',
    placeHolder: 'Github Link',
  },
  {
    id: 14,
    label: 'Link to portfolio or one of your completed Projects',
    type: 'url',
    required: true,
    name: 'portfolioLink',
    placeHolder: 'Portfolio Link',
  },
  {
    id: 15,
    label:
      'Are you able to commit at least 40 hours per week to participate fully in the fellowship?',
    type: 'select',
    options: ['Yes', 'No'],
    required: true,
    name: 'commitment',
    placeHolder: 'Yes',
  },
  {
    id: 16,
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
