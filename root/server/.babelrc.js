const isTest = String(process.env.NODE_ENV).toLowerCase() === 'test'

module.exports = {
  presets: [['@babel/preset-env', { modules: isTest ? 'commonjs' : false }]],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime',
  ],
}
