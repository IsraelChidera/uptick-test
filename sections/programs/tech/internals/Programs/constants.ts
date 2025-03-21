import { AI_TECH, NON_TECH, SE_TECH, UI_TECH } from '@/public';

export const programId = {
  SE_TECH: 'fa137134-6ab2-4b0b-907b-324c3d6cad93',
  AI_TECH: '10e4b915-b686-4415-a14a-1caacb942d6e',
  DESIGN_TECH: '213ee078-2067-4942-a6ad-cd058a428014',
  MGMT_TECH: '0cdc576b-918d-4201-b003-63c2993813d6',
};
export const programs = [
  {
    id: programId.SE_TECH,
    title: 'Software Engineering',
    identifier: 'software',
    profession: 'Become a Top 1% Engineer',
    desc: 'Our immersive, project-based approach, combined with mentorship-led learning, is designed to transform self-taught developers into top-tier engineers. Gain real-world internship experience and unlock your potential. Join our Software Engineering Fellowship and explore four specialized tracks:',
    tracks: [
      {
        id: 1,
        track: 'Frontend',
      },
      {
        id: 2,
        track: 'Backend',
      },
      {
        id: 3,
        track: 'Mobile',
      },
      {
        id: 4,
        track: 'Fullstack',
      },
    ],
    btnText: 'Apply Now',
    type: 'tech',
    image: SE_TECH,
  },
  {
    id: programId.AI_TECH,
    title: 'AI & Data',
    identifier: 'data',
    profession: 'Shape the Future of AI and Data',
    desc: 'Explore the limitless possibilities of AI and data engineering through our comprehensive fellowship programs. From data science to machine learning, data analysis to core data engineering, we offer a diverse range of opportunities. Join us and become part of a community that is building the future:',
    desc2:
      'Our AI & Data Engineering Fellowship is your gateway to becoming a data scientist, data engineer, analyst, or AI engineer. Learn, collaborate, and build the future with Uptick Talent.',
    tracks: [
      {
        id: 1,
        track: 'Data Science',
      },
      {
        id: 2,
        track: 'Machine Learning',
      },
      {
        id: 3,
        track: 'Data Analysis',
      },
      {
        id: 4,
        track: 'Data Engineering',
      },
    ],
    btnText: 'Apply Now',
    type: 'tech',
    image: AI_TECH,
  },
  {
    id: programId.DESIGN_TECH,
    title: 'Design',
    identifier: 'design',
    profession: 'Unleash Your Creative Genius',
    desc: 'Explore the art of design through our design program, which cuts across critical concepts such as design thinking, systems thinking, design systems & design engineering, and unlock your creative potential and shape user experiences. Choose from a variety of core tracks, including:',
    tracks: [
      {
        id: 1,
        track: 'UI Design',
      },
      {
        id: 2,
        track: 'UX Design',
      },
      {
        id: 3,
        track: 'Graphics Design',
      },
      {
        id: 4,
        track: 'UX Researcher',
      },
    ],
    btnText: 'Apply Now',
    type: 'tech',
    image: UI_TECH,
  },
  {
    id: programId.MGMT_TECH,
    title: 'Non-Technical Programs',
    identifier: 'product',
    profession: 'Master the Art of Scaling Technology Products',
    desc: 'Our Non-Technical Fellowship programs are designed for business enthusiasts working to scale technology products, processes and operations. Dive into practical case studies and access weekly mentorship. Curriculum covers:',
    tracks: [
      {
        id: 1,
        track: 'Product Marketing Management',
      },
      {
        id: 2,
        track: 'Operations',
      },
      {
        id: 3,
        track: 'Sales',
      },
      {
        id: 4,
        track: 'Business Development',
      },
      {
        id: 5,
        track: 'Project/Product Management',
      },
    ],
    btnText: 'Apply Now',
    type: 'tech',
    image: NON_TECH,
  },
];

export const join = {
  title: 'Ready to Join Uptick Talent Tech?',
  desc: "If you're ready to embark on an exciting journey of learning, growth, and innovation, Uptick Talent Tech is here to guide you. Apply for your desired program or reach out to us for more information. Your future in technology starts here.",
  btnText: 'Apply Now',
  type: 'tech',
};

export const _programLinks: { [key: string]: string } = {
  software:
    'https://docs.google.com/forms/d/e/1FAIpQLSfmF_Vuqkll-PZ0EZRWnJHbBOmHwhAr12mg6VkPhdGzylF8Ug/viewform',
  data: 'https://docs.google.com/forms/d/e/1FAIpQLSfCKRe6N29tnvLktm_l4x_OfDpNgF-8j3_AScEmeQi9nPpzEg/viewform',
  design:
    'https://docs.google.com/forms/d/e/1FAIpQLSd-sf1Dc1PXQ8iJMwxynvaRgtMnOvnTiiw7y1fozKdGUy1E9g/viewform?usp=sf_link',
  product:
    'https://docs.google.com/forms/d/e/1FAIpQLSdw-aySFlAMVbWANrEi0nLxzftRC29LrVnLBM1SeLoa3SQ2Wg/viewform?usp=sf_link',
};
