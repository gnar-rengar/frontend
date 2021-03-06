module.exports = {
  excludeFile: (str) => /\*.{spec,test}.js/.test(str),
  outDir: '.next',
  reactStrictMode: false,
  concurrentFeatures: true,
  images: {
    domains: ['ddragon.leagueoflegends.com', 'ddragon.canisback.com', 'via.placeholder.com'],
  },
};
