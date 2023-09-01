export default defineAppConfig({
  docus: {
    title: 'HashbrownKazang',
    description: 'This is my personal portfolio website and if you don\'t like it then I don\'t care.',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',

    socials: {
      twitter: 'T33M_N0_5L33P',
      github: 'HashbrownKazang/hashx',

      nuxt: {
        label: 'Nuxt',
        icon: 'simple-icons:nuxtdotjs',
        href: 'https://nuxt.com'
      },

      facebook: 'https://facebook.com/hashbrownkazang',
      instagram: 'https://instagram.com/hashbrownkazang',
      tiktok: 'https://tiktok.com/hashbrownkazang',
      youtube: 'https://youtube.com/@hashbrownkazang'
    },

    github: {
      dir: '',
      branch: 'alpha_branch',
      repo: 'hashx',
      owner: 'HashbrownKazang',
      edit: false,
      baseUrl: ''
    },

    aside: {
      level: 1,
      collapsed: true,
      exclude: []
    },

    main: {
      padded: true,
      fluid: true
    },

    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
      title: 'HashbrownKazang'
    },

    footer: {
      credits: {
        icon: '',
        text: 'HashbrownKazang',
        href: 'https://hashbrownkazang.xyz'
      }
    },

    titleTemplate: 'HashbrownKazang'
  }
})