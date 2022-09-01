const { execSync } = require('child_process');

const lastCommitCommand = 'git rev-parse HEAD';

module.exports = {
  excludeFile: (str) => /\*.{spec,test}.js/.test(str),
  outDir: '.next',
  reactStrictMode: false,
  concurrentFeatures: true,
  i18n: {
    locales: ['ko'],
    defaultLocale: 'ko',
  },
  images: {
    domains: ['ddragon.leagueoflegends.com', 'ddragon.canisback.com', 'via.placeholder.com'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.txt$/i,
      use: 'raw-loader',
    });
    return {
      ...config,
      mode: 'production',
      devtool: 'hidden-source-map',
    };
  },
  generateBuildId: async () => execSync(lastCommitCommand).toString().trim(),
};
