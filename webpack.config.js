const highlight = require('highlight.js');
const path = require('path');
module.exports = {
  entry: {ntry1: ['./ent.js',],
  ntry2a: ['./ent2a.js',],
  ntry2b: ['./ent2b.js',]
},
  output: {
    path: path.resolve(__dirname, './'),
    filename: '[name].js'
  },
  module: {
    rules: [
{
    test: /\.(md)$/,
    use: [
      'html-loader',
      {
        loader: 'markdown-loader',
        options: {
          highlight: (code, lang) => {
            if (!lang || ['text', 'literal', 'nohighlight'].includes(lang)) {
              return `<pre class="hljs">${code}</pre>`;
            }
            const html = highlight.highlight(lang, code).value;
            return `<span class="hljs">${html}</span>`;
          },
          gfm: true,
          breaks: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
        },
      },
    ],
  },
  {  test: /\.(gif|png|jpe?g|svg)$/i,
   use: [
     'file-loader',
     {
       loader: 'image-webpack-loader',
       options: {
         disable: true, // webpack@2.x and newer
       },
     },
   ],
 },
]},
devtool: 'source-map',
  devServer: {
    contentBase: [ `${__dirname}`],
    compress: true,
    host: '0.0.0.0',
    port: 8080,
    https: true,
    index: 'index.html',
    historyApiFallback: true,

    overlay: {
      warnings: true,
      errors: true
    },
    watchOptions: {
      poll: false
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  }
}
