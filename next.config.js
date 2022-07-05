module.exports = {
  excludeFile: (str) => /\*.{spec,test}.js/.test(str),
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  outDir: '.next',
  reactStrictMode: false,
  concurrentFeatures: true,
  images: {
    domains: ['ddragon.leagueoflegends.com', 'ddragon.canisback.com', 'via.placeholder.com'],
  },
};
