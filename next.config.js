module.exports = {
  excludeFile: (str) => /\*.{spec,test}.js/.test(str),
  outDir: '.next',
  reactStrictMode: true,
  concurrentFeatures: true,
};
