!function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(n){return e[n]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=6)}([,,,,,,function(e,n,t){e.exports=t(7)},function(e,n,t){var o=t(8);document.getElementById("container").innerHTML=o},function(e,n,t){e.exports='<h4 id="download-the-recording---audio-recorder">Download the recording - audio recorder</h4>\n<p>Add a file download to the previous example to get the audio recording file to your device&#39;s &quot;download&quot; folder. Using a new HTML <a href="https://www.w3schools.com/tags/att_a_download.asp">tag</a> complimented by a javascript variable representing the download action get the recoding on your device. See javascript code. There is an\naction for &quot;stop recording&quot;  at # 27 in the first code block below. We add a bit of code in order to tie the recording&#39;s URL reference to a link for a file download.</p>\n<h4 id="run-the-code">Run the code</h4>\n<p>You can use the <a href="https://jsfiddle.net/rowntreerob/nchu17x6/64">editor on JSFiddle</a> to inspect / run the code.</p>\n<h4 id="instructions">Instructions:</h4>\n<ul>\n<li>Use the start button to make a short recording.</li>\n<li>Stop recording with the stop button.</li>\n<li>Click the Play control for playback of your audio.</li>\n<li>Click the download link to download the file to your device.</li>\n<li>find the downloaded file in the folder containing other downloaded using the browser.</li>\n</ul>\n<p><img src="'+t(9)+'#thumb" alt="run window"></p>\n<h4 id="line-by-line-download-code-explain">Line by line, download code explain</h4>\n<ul>\n<li>The following actions occur after the recorder is stopped.</li>\n<li>at Line #28 the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Blob">blob</a> object holds audio data/recording in a file-like object.</li>\n<li>At the end of the web page is a clickable link used to download the audio file. Using the file object from #28 along with an HTML download link, the browser includes the download link.  </li>\n<li>Line #29 creates the URL to represent the recording in the web page.</li>\n<li>#30 sets the audio playback control to the URL&#39;s value, permitting playback.</li>\n<li>#31 sets the local data source, in the browser page, where the download originates.</li>\n<li>#32 and #33 together, set the destination files name/type on the device where the file gets downloaded to. Imagine a copy of something from inside the browser page to the filesystem of the device that was running the browser.</li>\n</ul>\n<script src="https://gist.github.com/rowntreerob/c37cd52201c6d88d62355e58fcd91949.js"><\/script>\n\n<p>Review  <a href="https://www.dummies.com/web-design-development/javascript/jsfiddle-and-javascript/">how-to on JSFiddle</a> to inspect / run the code.  </p>\n<p>Whenever you commit to this repository, GitHub Pages will run <a href="https://jekyllrb.com/">Jekyll</a> to rebuild the pages in your site, from the content in your Markdown files.</p>\n<pre><code class="language-markdown"><span class="hljs">Syntax highlighted code block\n\n<span class="hljs-section"># Header 1</span>\n<span class="hljs-section">## Header 2</span>\n<span class="hljs-section">### Header 3</span>\n<span class="hljs-bullet">\n- </span>Bulleted\n<span class="hljs-bullet">- </span>List\n<span class="hljs-bullet">\n1. </span>Numbered\n<span class="hljs-bullet">2. </span>List\n\n<span class="hljs-strong">**Bold**</span> and <span class="hljs-emphasis">_Italic_</span> and <span class="hljs-code">`Code`</span> text\n\n[<span class="hljs-string">Link</span>](<span class="hljs-link">url</span>) and ![<span class="hljs-string">Image</span>](<span class="hljs-link">src</span>)</span></code></pre>\n<p>For more details see <a href="https://guides.github.com/features/mastering-markdown/">GitHub Flavored Markdown</a>.</p>\n'},function(e,n,t){e.exports=t.p+"0c3eecd66357fc6eb953c66fd6aed1cc.png"}]);
//# sourceMappingURL=ntry2.js.map