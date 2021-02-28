module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js', '.android.js', '.js', '.json', '.svg',
          '.ios.jsx', '.android.jsx', '.jsx',
        ],
      },
    ],
  ],
};
