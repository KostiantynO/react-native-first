module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            hooks: './src/hooks',
            utils: './src/utils',
            context: './src/context',
            common: './src/common',
            helpers: './src/helpers',
            components: './src/components',
            assets: './src/assets',
          },
        },
      ],
    ],
  };
};
