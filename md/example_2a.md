#### Download the recording - audio recorder

Add a file download to the previous example to get the audio recording file to your device's "download" folder. Using a new HTML [tag](https://www.w3schools.com/tags/att_a_download.asp) complimented by a javascript variable representing the download action, get the recoding on your device. See javascript code. There is an
action for "stop recording"  at # 27 in the first code block below. We add a bit of javascript code to tie the recording's URL reference to a link for a file download.
#### Run the code
You can use the [editor on JSFiddle](https://jsfiddle.net/rowntreerob/nchu17x6/64) to inspect / run the code.

#### Instructions:
* Use the start button to make a short recording.
* Stop recording with the stop button.
* Click the Play control for playback of your audio.
* Click the download link to download the file to your device.
* find the downloaded file in the folder containing other downloaded using the browser.

![run window](../pics/downld_audio.png#thumb)

----
#### Line by line, download code explain

* The following actions occur after the recorder is stopped.
* at Line #29 the [blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) object holds audio data/recording in a file-like object.
* At the end of the web page is a clickable link used to download the audio file. Using the file object from #29 along with an HTML download link, the browser includes the download link. See the link on the UI underneath the button for start / stop on the recorder.   
* Line #30 creates the URL to represent the recording in the web page.
* #31 sets the audio playback control to the URL's value, permitting playback.
* #32 sets the local data source, in the browser page, where the download originates.
* #33 and #34 together, set the destination files name/type on the device where the file gets downloaded to. Imagine a copy of something from inside the browser page to the filesystem of the device that was running the browser.
