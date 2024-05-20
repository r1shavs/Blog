const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Rishav S",
    image: "https://notion-avatar.vercel.app/api/img/eyJmYWNlIjozLCJub3NlIjo3LCJtb3V0aCI6MTEsImV5ZXMiOjAsImV5ZWJyb3dzIjo0LCJnbGFzc2VzIjoxMSwiaGFpciI6NSwiYWNjZXNzb3JpZXMiOjAsImRldGFpbHMiOjAsImJlYXJkIjowLCJmbGlwIjowLCJjb2xvciI6IiMyZjU0ZWIiLCJzaGFwZSI6InNxdWFyZSJ9", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Security Researcher",
    bio: "Strengthening Defense Mechanisms",
    email: "",
    linkedin: "https://www.linkedin.com/in/rishav-s-50797b155/",
    github: "",
    instagram: "",
  },
  projects: [
    {
      name: `Research Blog`,
      href: "",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Research Blog",
    description: "welcome to my Knowledge Base",
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "r1shavs/blog",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
