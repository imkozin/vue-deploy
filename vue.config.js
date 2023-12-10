const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: `/vue-deploy/`,
  transpileDependencies: ['vuetify'],
})
