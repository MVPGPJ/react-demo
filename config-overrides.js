const path = require('path')

const { override, addWebpackAlias, fixBabelImports } = require('customize-cra')

addCustomize = () => {
  return (config) =>{
    config.output.publicPath = './'
    return config
  }
}

module.exports = override(
  addWebpackAlias({
    assets: path.resolve(__dirname, './src/assets'),
    components: path.resolve(__dirname, './src/components'),
    utils: path.resolve(__dirname, './src/utils'),
    pages: path.resolve(__dirname, './src/pages'),
    '@': path.resolve(__dirname, './src')
  }),
  fixBabelImports('import',
    {
      libraryName: 'antd-mobile',
      style: 'css',
    }),

  addCustomize()
)