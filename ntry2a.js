!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=4)}([,,,,function(e,t,o){e.exports=o(5)},function(e,t,o){var n=o(6);document.getElementById("container").innerHTML=n},function(e,t,o){e.exports='<h4 id="download-the-recording---audio-recorder">Download the recording - audio recorder</h4>\n<p>Add a file download to the previous example to get the audio recording file to your device&#39;s &quot;download&quot; folder. Using a new HTML <a href="https://www.w3schools.com/tags/att_a_download.asp">tag</a> complimented by a javascript variable representing the download action, get the recoding on your device. See javascript code. There is an\naction for &quot;stop recording&quot;  at # 27 in the first code block below. We add a bit of javascript code to tie the recording&#39;s URL reference to a link for a file download.</p>\n<h4 id="run-the-code">Run the code</h4>\n<p>You can use the <a href="https://jsfiddle.net/rowntreerob/nchu17x6/64">editor on JSFiddle</a> to inspect / run the code.</p>\n<h4 id="instructions">Instructions:</h4>\n<ul>\n<li>Use the start button to make a short recording.</li>\n<li>Stop recording with the stop button.</li>\n<li>Click the Play control for playback of your audio.</li>\n<li>Click the download link to download the file to your device.</li>\n<li>find the downloaded file in the folder containing other downloaded using the browser.</li>\n</ul>\n<p><img src="'+o(7)+'#thumb" alt="run window"></p>\n<hr>\n<h4 id="line-by-line-download-code-explain">Line by line, download code explain</h4>\n<ul>\n<li>The following actions occur after the recorder is stopped.</li>\n<li>at Line #29 the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Blob">blob</a> object holds audio data/recording in a file-like object.</li>\n<li>At the end of the web page is a clickable link used to download the audio file. Using the file object from #29 along with an HTML download link, the browser includes the download link. See the link on the UI underneath the button for start / stop on the recorder.   </li>\n<li>Line #30 creates the URL to represent the recording in the web page.</li>\n<li>#31 sets the audio playback control to the URL&#39;s value, permitting playback.</li>\n<li>#32 sets the local data source, in the browser page, where the download originates.</li>\n<li>#33 and #34 together, set the destination files name/type on the device where the file gets downloaded to. Imagine a copy of something from inside the browser page to the filesystem of the device that was running the browser.</li>\n</ul>\n'},function(e,t,o){e.exports=o.p+"0c3eecd66357fc6eb953c66fd6aed1cc.png"}]);
//# sourceMappingURL=ntry2a.js.map