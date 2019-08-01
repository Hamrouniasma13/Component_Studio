export default {
  // Allow zeit/now to be faster
  dest: '/docz-dist',

  // Our components doesn't work on codeSandbox
  codeSandbox: false,

  // Put default theme
  wrapper: 'docs/Wrapper',

  // Don't conflict with website-studio or eb-portal
  port: 3001,

  // modifybundle config for react-day-picker
  modifyBundlerConfig: config => {
    config.resolve.extensions.push('.css')
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    })

    return config
  },

  // menu
  menu: [
    { name: 'Introduction' },
    { name: '---' },
    { name: '📐 Templates' },
    { name: '🌐 Organisms' },
    { name: '🧬 Molecules' },
    { name: '⚛️ Atoms' },
    { name: '----' },
    { name: '💥 Bugs' },
    { name: '🧰 Technical' },
    { name: '🗑️ Deprecated' },
  ],
}
