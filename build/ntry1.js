!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){var o=n(2);document.getElementById("container").innerHTML=o},function(e,t,n){e.exports='<h4 id="learn-coding---audio-recorder-in-javascript">Learn Coding - audio recorder in javascript</h4>\n<p>Learn javascript code required to run a recorder / audio player.\nUse a powerful code editing and code run environment in your browser.\nMake a short audio recording and play it back while you browse/ learn\nthe short simple code that runs the media session.</p>\n<h4 id="run-the-code">Run the code</h4>\n<p>You can use the <a href="https://jsfiddle.net/rowntreerob/nchu17x6/">editor on JSFiddle</a> to inspect / run the code.</p>\n<h4 id="instructions">Instructions:</h4>\n<p> Use the start button to make a short recording. Stop recording\nwith the stop button. Click the Play control for playback of your audio.\nFind the buttons/controls in the lower right-hand quadrant of the JSFiddle screen.</p>\n<p>Lower right - run view:\n<img src="'+n(3)+'#thumb" alt="run window"></p>\n<h4 id="line-by-line-learn-code">Line by line, learn code</h4>\n<p>Lines #1 , 2 define HTML while the script tag in #3 thru #41 is a block of Javascript code. HTML puts 2 things on the user interface: a button and the playback controls. Recorder\nstart , recorder stop\nare controlled by a button with a text label that is revised according to the status of\nthe recorder ( is paused, is started).\nFind more info on html5 tags (button, audio ) <a href="https://www.w3schools.com/tags/">here</a>\n<img src="'+n(4)+'" alt="code window">\nLine #3 to the end is javascript code inserted within the html using a &quot;script&quot; tag.</p>\n<h4 id="controlling-the-recorder">controlling the recorder</h4>\n<ul>\n<li>an HTML button controls start and stop actions on the voice Recorder</li>\n<li>a separate variable holds a boolean value indicating whether the button has already been clicked ie that the recorder was started already</li>\n<li>Look for the javascript variables <strong>&quot;b&quot; &quot;clicked&quot;</strong> in Lines #4, 5, 9 30. the start button is <code>b</code>. the boolean variable is <code>clicked</code><h4 id="first-click">first click</h4>\n</li>\n<li><strong>clicked</strong> variable #5 gets initial value of false. The record button has not been clicked when the code starts off and the first time its clicked, the code reaches #10 with <strong>clicked</strong> still at &quot;false&quot;.</li>\n<li>The first of 2 &quot;if&quot; conditions #10,  allows lines from 11 to 31 to be invoked on the first time the start button is clicked.</li>\n<li>lines 20 - 28 use regular behavior of the <a href="https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder">MediaRecorder class</a> to define how to handle raw data from the microphone and how start/ stop the recorder.</li>\n<li>more explain on MediaRecorder <a href="https://www.twilio.com/blog/mediastream-recording-api">here</a><h4 id="2nd-click-stops-recorder">2nd click stops recorder</h4>\n</li>\n<li>see lines 29, 30 which change the button&#39;s label to &quot;stop record&quot; and set <strong>clicked</strong> variable to true. This true value shows that the recorder &quot;is running&quot; so that the next button click will stop the recorder.</li>\n<li>with <strong>clicked</strong> equal to true, look at #10 which uses the &quot;!&quot; syntax checking for a &quot;not true&quot;. The ! operator reverses the logical (true or false) state of the value so on the 2nd click of the button # 10\nis asking &quot;if not true&quot;. Not-true  evaluates to false because <strong>clicked</strong> is true. The &quot;false &quot;  portion of the if statement runs at #37 and the recorder is stopped.\n<img src="'+n(5)+'" alt="code window"><h4 id="details-on-audio-data">details on audio data</h4>\n</li>\n<li>lines 15 - 17 supply details on how the audio is stored in computer binary codes. more info on &quot;channel-count, sample-size, sample-rate&quot; <a href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_concepts#Audio_data_format_and_structure">here</a><h4 id="accessing-recorded-media-in-the-browser">accessing recorded media in the browser</h4>\n</li>\n<li>raw microphone data delivered by the computer-system to this app is bundled in a <strong>buffer</strong>. At a rate of a 15 a second, an arriving buffer with its data just gets added to a javascript array. See <strong>chunks</strong> variable at line 22.</li>\n<li>when the recording is stopped, all of the array-data is converted to a form of audio media that is playable by the player controls from line 2. The <code>blob</code> at line 25 is a file-like object on which a URL reference can be created and the value of the URL passed to the player.</li>\n<li>line 26 passes the URL, setting an attribute called &quot;src&quot; that belongs to the control. Now the player is configured to playback the audio file created using data from the mic.<br>Review  <a href="https://www.dummies.com/web-design-development/javascript/jsfiddle-and-javascript/">how-to on JSFiddle</a> to inspect / run the code.  </li>\n</ul>\n<p>Whenever you commit to this repository, GitHub Pages will run <a href="https://jekyllrb.com/">Jekyll</a> to rebuild the pages in your site, from the content in your Markdown files.</p>\n<pre><code class="language-markdown"><span class="hljs">Syntax highlighted code block\n\n<span class="hljs-section"># Header 1</span>\n<span class="hljs-section">## Header 2</span>\n<span class="hljs-section">### Header 3</span>\n<span class="hljs-bullet">\n- </span>Bulleted\n<span class="hljs-bullet">- </span>List\n<span class="hljs-bullet">\n1. </span>Numbered\n<span class="hljs-bullet">2. </span>List\n\n<span class="hljs-strong">**Bold**</span> and <span class="hljs-emphasis">_Italic_</span> and <span class="hljs-code">`Code`</span> text\n\n[<span class="hljs-string">Link</span>](<span class="hljs-link">url</span>) and ![<span class="hljs-string">Image</span>](<span class="hljs-link">src</span>)</span></code></pre>\n<p>For more details see <a href="https://guides.github.com/features/mastering-markdown/">GitHub Flavored Markdown</a>.</p>\n'},function(e,t,n){e.exports=n.p+"30e6ea90870fffb0671c81f0ef6aabbc.png"},function(e,t,n){e.exports=n.p+"e8e4da3ba36785d58237ac49a2c22a77.png"},function(e,t,n){e.exports=n.p+"48093763eba1de5517d7e67103ea03e4.png"}]);
//# sourceMappingURL=ntry1.js.map