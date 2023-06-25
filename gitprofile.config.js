// gitprofile.config.js

const config = {
  github: {
    username: 'FedericoMz', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 2, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'federico-mazzoni-728953247',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'mazzoni.federico1@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1ek61fdO2T5V3lJSn6r9Q9bjXOilcX81N/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'R',
    'Java',
    'JavaScript',
    'Tabular Data Analysis',
    'Text Analysis / NLP',
    'Network Analysis',
    'Machine Learning',
    'Incremental Learning',
    'Human-Machine Interaction',
  ],
  experiences: [
    {
      company: 'University of Pisa',
      position: 'PhD Student in AI',
      from: 'November 2022',
      to: 'Present',
      companyLink: 'https://example.com',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'University of Pisa',
      degree: 'Master\'s Degree in Digital Humanities',
      from: '2020',
      to: '2022',
    },
    {
      institution: 'University of Pisa',
      degree: 'Bachelor\'s Degree in Philosophy',
      from: '2014',
      to: '2017',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Frank',
      description:
        'Hybrid decision maker based on Skeptical Learning. Also, a friend.',
      imageUrl: 'https://i.imgur.com/42PhvFU.jpg',
      link: 'https://drive.google.com/file/d/199WsUBmAGolzcMYpdPuM_-Y3l5JOb1cd/view?usp=sharing',
    },
    {
      title: 'FairNet',
      description:
        'Pre-processing framework for networks, employing a genetic algorithm to reduce marginalization and promote diversity.',
      imageUrl: 'https://i.imgur.com/M0ncKwu.jpg',
      link: 'https://drive.google.com/file/d/1rPOY6xiKxi3WggnMkfii2HhSC1x3bnvt/view?usp=sharing',
    },
    {
      title: 'GenFair',
      description:
        'Pre-processing framework for tabular data, employing a genetic algorithm to create fair synthetic data.',
      imageUrl: 'https://i.imgur.com/utmCqQY.png',
      link: 'https://etd.adm.unipi.it/t/etd-06012022-053415/',
    },

  ],
  // Display blog posts from your medium or dev account. (Optional)


  
  // blog: {
    //source: 'dev', // medium | dev
    //username: 'arifszn', // to hide blog section, keep it empty
    //limit: 2, // How many posts to display. Max is 10.
  //},




  
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'procyon',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'procyon',
      'light',
      'dark',
      'black',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.

  
  // footer: `<p style="text-align:center;"><img src="https://i.imgur.com/DGuPmTn.gif" alt="Bye!"></p>`,
};

export default config;
