module.exports = {
  devServer: {
    host: 'p4.loc'
  },
  transpileDependencies: ['vuetify'],
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'test') {
      const sassRule = config.module.rule('sass');
      sassRule.uses.clear();
      sassRule.use('null-loader').loader('null-loader');
    }
  }
};
