// gitprofile.config.js

const config = {
  github: {
    username: 'FedericoMz', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 2, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['FairGen', 'DDAM-APPEAL', 'DM2-FMAProject', 'streamlit-exp'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
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
      'https://raw.githubusercontent.com/FedericoMz/FedericoMz.github.io/main/CV.pdf', // Empty fileUrl will hide the `Download Resume` button.
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
      company: 'Consiglio Nazionale delle Ricerche',
      position: 'Associate Researcher',
      from: 'February 2023',
      to: 'Present',
      companyLink: 'https://www.isti.cnr.it/en/chi-siamo/people-detail/1023/Federico_Mazzoni',
    },
    {
      company: 'University of Pisa',
      position: 'PhD Student in AI',
      from: 'November 2022',
      to: 'Present',
      companyLink: 'https://www.unipi.it/',
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
      degree: 'Master\'s Degree in Digital Humanities \n \(Data Science and NLP\)',
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
      title: 'WIP. Trust Analyzer',
      description:
        'Quantifying and analysing trust in human - human networks and human - LLM interactions.',
      imageUrl: 'https://raw.githubusercontent.com/FedericoMz/FedericoMz.github.io/main/icons/Trust.png',
      link: 'https://federicomz.github.io/',

    },
    {
      title: '2023. Frank',
      description:
        'Multi-purpose hybrid decision maker based on Skeptical Learning. Also, a friend.',
      imageUrl: 'https://raw.githubusercontent.com/FedericoMz/FedericoMz.github.io/main/icons/Frank.jpg',
      link: 'https://raw.githubusercontent.com/FedericoMz/FedericoMz.github.io/main/Frank_Poster.pdf',
    },
    {
      title: '2023. FairNet',
      description:
        'A library to reduce marginalization and promote diversity in networks.',
      imageUrl: 'https://raw.githubusercontent.com/FedericoMz/FedericoMz.github.io/main/icons/FairNet.jpg',
      link: 'https://raw.githubusercontent.com/FedericoMz/FedericoMz.github.io/main/FairNet_Poster.pdf',
    },
    {
      title: '2022. GenFair',
      description:
        'Improving fairness in tabular data, creating synthetic data with a genetic algorithm.',
      imageUrl: 'https://raw.githubusercontent.com/FedericoMz/FedericoMz.github.io/main/icons/GenFair.png', //'https://i.imgur.com/utmCqQY.png',
      link: 'https://github.com/FedericoMz/GenFair',
    },
    {
      title: '2022. Text Analytics',
      description:
        'University project. Classifying the genres of several books from Goodreads.',
      imageUrl: '', //'https://i.imgur.com/utmCqQY.png',
      link: 'https://github.com/lyereth/Text-Analytics',
    },
    {
      title: '2022. Laboratory of Data Science',
      description:
        'University project. Employing an ETL framework (including MDX, Visual Studio) for BI.',
      imageUrl: '', //'https://i.imgur.com/utmCqQY.png',
      link: 'https://github.com/FedericoMz/LDS',
    },
    {
      title: '2022. Distributed Data Mining',
      description:
        'University project. Distributed analysis of a large dataset of Android apps.',
      imageUrl: '', //'https://i.imgur.com/utmCqQY.png',
      link: 'https://github.com/FedericoMz/DDAM-APPEAL',
    },
    {
      title: '2021. Social Network Analysis',
      description:
        'University project. Temporal analysis of Nintendo communities from Twitter.',
      imageUrl: '', //'https://i.imgur.com/utmCqQY.png',
      link: 'https://github.com/andreafailla/Who-Made-the-Switch',
    },
    {
      title: '2021. Statistics',
      description:
        'University project. Textual and statistical analysis of tweets from Italian politicians.',
      imageUrl: '', //'https://i.imgur.com/utmCqQY.png',
      link: 'https://github.com/FedericoMz/StagedPolitics',
    },
    {
      title: '2021. Advanced Data Mining',
      description:
        'University project. Analysis and classification of songs with advanced Data Mining techniques.',
      imageUrl: '', //'https://i.imgur.com/utmCqQY.png',
      link: 'https://github.com/FedericoMz/DM2-FMAProject/',
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
