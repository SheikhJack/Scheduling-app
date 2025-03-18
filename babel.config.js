module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxRuntime: 'automatic' }] // ✅ Use correct JSX runtime
    ],
    plugins: [
      'react-native-reanimated/plugin',
    ],
  };
};

