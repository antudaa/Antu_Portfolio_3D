import {
  displayAt,
  STOPS,
  PAGE_DEPH_MARGIN,
  SKILLS_LIST,
  EXPERIENCE,
} from './constants/pageData';


const configs = {
  title: 'Antu Das',
  subTitle: 'Dev Portfolio.',
  stars: {
    maxSize: 20,
    emissionIntencity: 40,
    //optionally stars can be an image
    // url: 'icons/three-js-logo.png',
    dencity: 900,
  },
  navTitle: 'Antu Das Portfolio.',
  relevantStops: STOPS,
  pages: [
    // About Section Data
    {
      scale: 15,
      rotation: [Math.PI, 0, Math.PI],
      position: [0, 0, -PAGE_DEPH_MARGIN],
      displayAt: displayAt('About'),
      title: 'Who Am I?',
      infos: [
        "* I am a computer science undergraduate. I have a great hunger of learn new technologies. I love to explore",

        '* My expertise is in the area of React JS & Responsive Design. With every line of code, I strive to make the web a beautiful place. Feel free to take a look at my latest projects on the web portfolio page. Thank you for visiting my portfolio.',

        '* I have a good range of skills, of which I can say that I’ve mastered some.',
      ],
    },

    // EXPERIENCE Section Data 
    {
      scale: 15,
      displayAt: displayAt('Experience'),
      rotation: [0, -Math.PI / 2, 0],
      position: [-PAGE_DEPH_MARGIN, 0, 0],
      title: 'Experience',
      imageList: EXPERIENCE,
      footer: 'You can click the icons to find out more.',
    },

    // SKILL Set Data 
    {
      scale: 15,
      displayAt: displayAt('Skills'),
      rotation: [-Math.PI / 2, 0, -Math.PI / 2],
      position: [0, PAGE_DEPH_MARGIN, 0],
      title: 'Skills',
      footer: 'And more...',
      imageList: SKILLS_LIST,
    },

    // CLICK TO VIEW RESUME DATA 
    {
      scale: 15,
      displayAt: displayAt('Download CV'),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: 'Here is my CV!',
      footer: 'Click the icon above to View & Download!',
      imageList: {
        rows: 1,
        separation: 3,
        leftPadding: 0,
        topPadding: 0,
        scale: 0.8,
        items: [
          {
            url: 'icons/resume.png',
            websiteURL:
              'Resume/Antu Resume.pdf',
          },
        ],
      },
    },

    // DISPLAY PROJECT SECTION DATA 
    {
      scale: 15,
      displayAt: displayAt('Personal Projects'),
      rotation: [Math.PI / 2, 0, 0],
      position: [0, -PAGE_DEPH_MARGIN, 0],
      title: 'Personal Projects',
      footer: '(And also this web-app)',
      imageList: {
        rows: 2,
        separation: 2.5,
        leftPadding: -0.4,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'websites-preview/bit-nft.png',
            websiteURL: 'https://github.com/antudaa/Bit-NFT',
          },
          {
            url: 'websites-preview/lens-king.png',
            websiteURL: 'https://github.com/antudaa/Lens-King-Client-Site',
          },
          {
            url: 'websites-preview/learn-skills.png',
            websiteURL:
              'https://github.com/antudaa/learn.info',
          },
          {
            url: 'websites-preview/panda-commerce.png',
            websiteURL: 'https://github.com/antudaa/panda-commerce-website',
          },
          {
            url: 'websites-preview/resaleLand.png',
            websiteURL: 'https://github.com/antudaa/Resale-Land-Client-Site',
          },
          {
            url: 'websites-preview/helping-hand.png',
            websiteURL: 'https://github.com/antudaa/helping-hand',
          },
        ],
      },
    },

    // CONTACT SECTION DATA 
    {
      scale: 15,
      displayAt: displayAt('Get In Touch'),
      rotation: [0, Math.PI / 2, 0],
      position: [PAGE_DEPH_MARGIN, 0, 0],
      title: 'You can find me in:',
      footer: 'Almost done but keep scrolling :)',
      imageList: {
        rows: 2,
        separation: 1.8,
        leftPadding: -0.25,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'icons/twitter.png',
            websiteURL: 'https://twitter.com/antu_daa',
          },
          {
            url: 'icons/linkedin.png',
            websiteURL:
              'https://www.linkedin.com/in/antu-antu/',
          },
          {
            url: 'icons/github.png',
            websiteURL: 'https://github.com/antudaa',
          },
          {
            url: 'icons/gmail.png',
            websiteURL: 'antu.haks@gmail.com',
          },
        ],
      },
    },
  ],
};

export default configs;
