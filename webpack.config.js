const highlight = require('highlight.js');
const path = require('path');
module.exports = {
  entry: {ntry1: ['./ent.js',],ntry2: ['./ent.js',]},
  output: {
    path: path.resolve(__dirname, './build'),
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
        },
      },
    ],
  },
]}
}
