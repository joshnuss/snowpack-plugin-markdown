const fs = require('fs')
const marked = require('marked')
const frontMatter = require('front-matter')

module.exports = function(snowpackConfig, pluginOptions) {
  return {
    name: 'markdown-plugin',
    resolve: { input: [".md"], output: [".js"] },

    config() {
      marked.setOptions(pluginOptions)
    },

    load({filePath}) {
      const contents = fs.readFileSync(filePath, 'utf-8') 
      const {attributes, body} = frontMatter(contents)
      const result = { ...attributes, markdown: body, body: marked(body) }

      return `export default ${JSON.stringify(result)}`
    }
  }
}
