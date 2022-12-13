module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ['./src'],
          alias: {
            '@@generated': './src/__generated__',
            '@@assets': './src/assets',
            '@@components': './src/components',
            '@@context': './src/context',
            '@@graphql': './src/graphql',
            '@@helpers': './src/helpers',
            '@@screens': './src/screens',
          },
        },
      ],
    ],
  };
};
