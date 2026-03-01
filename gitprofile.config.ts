// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'scariajanthomas', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/my-profile/', // Base name for the deployed site. For example, '/portfolio/' if your repo is 'github.com/username/portfolio'
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['scariajanthomas/my-portfolio', 'scariajanthomas/another-project']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['scariajanthomas/my-portfolio'] // List of repository names to display. example: ['scariajanthomas/my-portfolio', 'scariajanthomas/another-project']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [

      ],
    },
  },
  seo: { title: 'Jan Thomas', 
    description: 'Senior QA Engineer transitioning to Automation and SDET roles. Experienced in Python and API Testing. Seeking international opportunities.', 
    imageURL: 'https://github.com/scariajanthomas.png' 
  },
  social: {
    linkedin: 'jan-scaria-thomas',
    x: '', //'arif_szn',
    mastodon: '', // 'arifszn@mastodon.social',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '', //'arifszn',
    dev: '', // 'arifszn',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '', //'https://www.arifszn.com',
    phone: '+91 9188682763',
    email: 'scaria.jan.thomas@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1_IOl5CANygjuvpik0fLgDRRqBGtHx3qX/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Manual Testing',
    'Automation Testing',
    'Selenium',
    'PyTest',
    'REST API Testing',
    'Structured Test Design',
    'Python',
    'JSON',
    'Git',
    'Browser Automation',
    'JIRA',
  ],
  experiences: [
    {
      company: 'LG Soft India Pvt. Ltd.',
      position: 'Test Engineer',
      from: 'August 2021',
      to: 'Present',
      companyLink: '', //'https://example.com',
    },
    // {
    //   company: 'Company Name',
    //   position: 'Position',
    //   from: 'July 2019',
    //   to: 'August 2021',
    //   companyLink: 'https://example.com',
    // },
  ],
  certifications: [
    {
      name: 'ISTQB',
      body: 'Foundation Level ',
      year: 'March 2023',
      link: '', //'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Annamalai University, Tamil Nadu',
      degree: 'BCA',
      from: '', //'2015',
      to: '2025',
    },
    {
      institution: 'NTTF, Bangalore',
      degree: 'Diploma in Computer Engineering & IT Infrastructure',
      from: '', //'2012',
      to: '2021',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', //'dev', // medium | dev
    username: '', //'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    // Choose right theme as per choice form https://daisyui.com/themes/ or create a custom theme using https://daisyui.com/docs/themes/
    themes: [
      'light',
      'dark',
      // 'cupcake',
      // 'bumblebee',
      // 'emerald',
      // 'corporate',
      // 'synthwave',
      // 'retro',
      // 'cyberpunk',
      // 'valentine',
      // 'halloween',
      // 'garden',
      // 'forest',
      // 'aqua',
      // 'lofi',
      // 'pastel',
      // 'fantasy',
      // 'wireframe',
      // 'black',
      // 'luxury',
      // 'dracula',
      // 'cmyk',
      // 'autumn',
      // 'business',
      // 'acid',
      // 'lemonade',
      // 'night',
      // 'coffee',
      // 'winter',
      // 'dim',
      // 'nord',
      // 'sunset',
      // 'caramellatte',
      // 'abyss',
      // 'silk',
      // 'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `© 2026 Jan Thomas · QA Engineer · <a class="text-primary" 
  href="mailto:scaria.jan.thomas@gmail.com">scaria.jan.thomas@gmail.com</a>`,

  enablePWA: true,
};

export default CONFIG;