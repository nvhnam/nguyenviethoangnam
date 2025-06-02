/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://nguyenviethoangnam.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: ["https://nguyenviethoangnam.vercel.app/sitemap-0.xml"],
  },
};
