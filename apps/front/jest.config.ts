/* eslint-disable */
export default {
  displayName: 'front',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/front',
  transformIgnorePatterns: [
    `/node_modules/(?!react-leaflet|react-leaflet|@react-leaflet)`,
  ],
};
