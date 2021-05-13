import{useState as e,useRef as t,useEffect as n}from"react";var o=function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function r(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((o=o.apply(e,t||[])).next())}))}function i(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}function a(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var o=Array(e),r=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,r++)o[r]=i[a];return o}var s,c=l;function l(){}l.mixin=function(e){var t=e.prototype||e;t.isWildEmitter=!0,t.on=function(e,t,n){this.callbacks=this.callbacks||{};var o=3===arguments.length,r=o?arguments[1]:void 0,i=o?arguments[2]:arguments[1];return i._groupName=r,(this.callbacks[e]=this.callbacks[e]||[]).push(i),this},t.once=function(e,t,n){var o=this,r=3===arguments.length,i=r?arguments[1]:void 0,a=r?arguments[2]:arguments[1];function s(){o.off(e,s),a.apply(this,arguments)}return this.on(e,i,s),this},t.releaseGroup=function(e){var t,n,o,r;for(t in this.callbacks=this.callbacks||{},this.callbacks)for(n=0,o=(r=this.callbacks[t]).length;n<o;n++)r[n]._groupName===e&&(r.splice(n,1),n--,o--);return this},t.off=function(e,t){this.callbacks=this.callbacks||{};var n,o=this.callbacks[e];return o?1===arguments.length?(delete this.callbacks[e],this):(-1!==(n=o.indexOf(t))&&(o.splice(n,1),0===o.length&&delete this.callbacks[e]),this):this},t.emit=function(e){this.callbacks=this.callbacks||{};var t,n,o,r=[].slice.call(arguments,1),i=this.callbacks[e],a=this.getWildcardCallbacks(e);if(i)for(t=0,n=(o=i.slice()).length;t<n&&o[t];++t)o[t].apply(this,r);if(a)for(n=a.length,t=0,n=(o=a.slice()).length;t<n&&o[t];++t)o[t].apply(this,[e].concat(r));return this},t.getWildcardCallbacks=function(e){this.callbacks=this.callbacks||{};var t,n,o=[];for(t in this.callbacks)n=t.split("*"),("*"===t||2===n.length&&e.slice(0,n[0].length)===n[0])&&(o=o.concat(this.callbacks[t]));return o}},l.mixin(l),"undefined"!=typeof window&&(s=window.AudioContext||window.webkitAudioContext);var u=null,f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},h=!!(f===f.window&&f.URL&&f.Blob&&f.Worker);function d(e,t){var n,o=this;if(t=t||{},h)return n=e.toString().trim().match(/^function\s*\w*\s*\([\w\s,]*\)\s*{([\w\W]*?)}$/)[1],new f.Worker(f.URL.createObjectURL(new f.Blob([n],{type:"text/javascript"})));this.self=t,this.self.postMessage=function(e){setTimeout((function(){o.onmessage({data:e})}),0)},setTimeout(e.bind(t,t),0)}d.prototype.postMessage=function(e){var t=this;setTimeout((function(){t.self.onmessage({data:e})}),0)};var p=d;class g{constructor(e,t){this.config={bufferLen:4096,numChannels:1,mimeType:"audio/wav",...t},this.recording=!1,this.callbacks={getBuffer:[],exportWAV:[]},this.context=e.context,this.node=(this.context.createScriptProcessor||this.context.createJavaScriptNode).call(this.context,this.config.bufferLen,this.config.numChannels,this.config.numChannels),this.node.onaudioprocess=e=>{if(this.recording){for(var t=[],n=0;n<this.config.numChannels;n++)t.push(e.inputBuffer.getChannelData(n));this.worker.postMessage({command:"record",buffer:t})}},e.connect(this.node),this.node.connect(this.context.destination);this.worker=new p((function(){let e,t,n,o=0,r=[];function i(){for(let e=0;e<t;e++)r[e]=[]}function a(e,t){let n=new Float32Array(t),o=0;for(let t=0;t<e.length;t++)n.set(e[t],o),o+=e[t].length;return n}function s(e,t,n){for(let o=0;o<n.length;o++)e.setUint8(t+o,n.charCodeAt(o))}this.onmessage=function(c){switch(c.data.command){case"init":l=c.data.config,e=l.sampleRate,t=l.numChannels,i(),n=e>48e3?48e3:e;break;case"record":!function(e){for(var n=0;n<t;n++)r[n].push(e[n]);o+=e[0].length}(c.data.buffer);break;case"exportWAV":!function(i){let c,l=[];for(let e=0;e<t;e++)l.push(a(r[e],o));c=2===t?function(e,t){let n=e.length+t.length,o=new Float32Array(n),r=0,i=0;for(;r<n;)o[r++]=e[i],o[r++]=t[i],i++;return o}(l[0],l[1]):l[0];let u=function(e){let o=new ArrayBuffer(44+2*e.length),r=new DataView(o);return s(r,0,"RIFF"),r.setUint32(4,36+2*e.length,!0),s(r,8,"WAVE"),s(r,12,"fmt "),r.setUint32(16,16,!0),r.setUint16(20,1,!0),r.setUint16(22,t,!0),r.setUint32(24,n,!0),r.setUint32(28,4*n,!0),r.setUint16(32,2*t,!0),r.setUint16(34,16,!0),s(r,36,"data"),r.setUint32(40,2*e.length,!0),function(e,t,n){for(let o=0;o<n.length;o++,t+=2){let r=Math.max(-1,Math.min(1,n[o]));e.setInt16(t,r<0?32768*r:32767*r,!0)}}(r,44,e),r}(function(t,n){if(n==e)return t;if(n>e)throw"downsampling rate show be smaller than original sample rate";var o=e/n,r=Math.round(t.length/o),i=new Float32Array(r),a=0,s=0;for(;a<i.length;){for(var c=Math.round((a+1)*o),l=0,u=0,f=s;f<c&&f<t.length;f++)l+=t[f],u++;i[a]=l/u,a++,s=c}return i}(c,n)),f=new Blob([u],{type:i});this.postMessage({command:"exportWAV",data:f})}(c.data.type);break;case"getBuffer":!function(){let e=[];for(let n=0;n<t;n++)e.push(a(r[n],o));this.postMessage({command:"getBuffer",data:e})}();break;case"clear":o=0,r=[],i()}var l}}),{}),this.worker.postMessage({command:"init",config:{sampleRate:this.context.sampleRate,numChannels:this.config.numChannels}}),this.worker.onmessage=e=>{let t=this.callbacks[e.data.command].pop();"function"==typeof t&&t(e.data.data)}}record(){this.recording=!0}stop(){this.recording=!1}clear(){this.worker.postMessage({command:"clear"})}getBuffer(e){if(!(e=e||this.config.callback))throw new Error("Callback not set");this.callbacks.getBuffer.push(e),this.worker.postMessage({command:"getBuffer"})}exportWAV(e,t){if(t=t||this.config.mimeType,!(e=e||this.config.callback))throw new Error("Callback not set");this.callbacks.exportWAV.push(e),this.worker.postMessage({command:"exportWAV",type:t})}static forceDownload(e,t){let n=(window.URL||window.webkitURL).createObjectURL(e),o=window.document.createElement("a");o.href=n,o.download=t||"output.wav";let r=document.createEvent("Event");r.initEvent("click",!0,!0),o.dispatchEvent(r)}}let v,m,w=g;async function b({audioContext:e,errHandler:t,onStreamLoad:n}){try{const t=await navigator.mediaDevices.getUserMedia({audio:!0});return n&&n(),v=t,m=e.createMediaStreamSource(t),w=new g(m),w.record(),t}catch(e){console.log(e),t&&t()}}function k({exportWAV:e,wavCallback:t}){w.stop(),v.getAudioTracks()[0].stop(),e&&t&&w.exportWAV((e=>t(e))),w.clear()}var y,x=-1!==navigator.userAgent.indexOf("Edg/"),A=window.AudioContext||window.webkitAudioContext,C=window.SpeechRecognition||window.webkitSpeechRecognition;function R(l){var f=this,h=l.continuous,d=l.crossBrowser,p=l.googleApiKey,g=l.googleCloudRecognitionConfig,v=l.onStartSpeaking,m=l.onStoppedSpeaking,w=l.speechRecognitionProperties,x=l.timeout,C=l.useOnlyGoogleCloud,R=void 0!==C&&C,T=e(!1),S=T[0],M=T[1],U=t(),W=e([]),E=W[0],B=W[1],H=e(),V=H[0],L=H[1],O=e(""),F=O[0],P=O[1],j=t(),I=t();n((function(){var e;d||y||P("Speech Recognition API is only available on Chrome"),(null===(e=null===navigator||void 0===navigator?void 0:navigator.mediaDevices)||void 0===e?void 0:e.getUserMedia)||P("getUserMedia is not supported on this device/browser :("),!d&&!R||p||console.error("No google cloud API key was passed, google API will not be able to process speech"),U.current||(U.current=new A)}),[]);var _=function(){return r(f,void 0,void 0,(function(){var e,t,n,o;return i(this,(function(r){switch(r.label){case 0:return R||!y||S?d||R?("suspended"===(null===(n=U.current)||void 0===n?void 0:n.state)&&(null===(o=U.current)||void 0===o||o.resume()),[4,b({errHandler:function(){return P("Microphone permission was denied")},audioContext:U.current})]):[2]:(function(){if(y){h&&(y.continuous=!0);var e=w||{},t=e.grammars,n=e.interimResults,o=e.lang,r=e.maxAlternatives;t&&(y.grammars=t),o&&(y.lang=o),y.interimResults=n||!1,y.maxAlternatives=r||1,y.start(),y.onresult=function(e){var t=e.results[e.results.length-1],o=t[0].transcript;if(n)if(t.isFinal)L(void 0),B((function(e){return a(e,[o])}));else{for(var r="",i=e.resultIndex;i<e.results.length;i++)r+=e.results[i][0].transcript;L(r)}else B((function(e){return a(e,[o])}))},y.onaudiostart=function(){return M(!0)},y.onend=function(){M(!1)}}}(),[2]);case 1:return e=r.sent(),x&&D(),I.current&&I.current.getAudioTracks()[0].stop(),I.current=e.clone(),(t=function(e,t){var n=new c;if(!s)return n;var o,r,i,a=(t=t||{}).smoothing||.1,l=t.interval||50,f=t.threshold,h=t.play,d=t.history||10,p=!0;u=t.audioContext||u||new s,(i=u.createAnalyser()).fftSize=512,i.smoothingTimeConstant=a,r=new Float32Array(i.frequencyBinCount),e.jquery&&(e=e[0]),e instanceof HTMLAudioElement||e instanceof HTMLVideoElement?(o=u.createMediaElementSource(e),void 0===h&&(h=!0),f=f||-50):(o=u.createMediaStreamSource(e),f=f||-50),o.connect(i),h&&i.connect(u.destination),n.speaking=!1,n.suspend=function(){return u.suspend()},n.resume=function(){return u.resume()},Object.defineProperty(n,"state",{get:function(){return u.state}}),u.onstatechange=function(){n.emit("state_change",u.state)},n.setThreshold=function(e){f=e},n.setInterval=function(e){l=e},n.stop=function(){p=!1,n.emit("volume_change",-100,f),n.speaking&&(n.speaking=!1,n.emit("stopped_speaking")),i.disconnect(),o.disconnect()},n.speakingHistory=[];for(var g=0;g<d;g++)n.speakingHistory.push(0);var v=function(){setTimeout((function(){if(p){var e=function(e,t){var n=-1/0;e.getFloatFrequencyData(t);for(var o=4,r=t.length;o<r;o++)t[o]>n&&t[o]<0&&(n=t[o]);return n}(i,r);n.emit("volume_change",e,f);var t=0;if(e>f&&!n.speaking){for(var o=n.speakingHistory.length-3;o<n.speakingHistory.length;o++)t+=n.speakingHistory[o];t>=2&&(n.speaking=!0,n.emit("speaking"))}else if(e<f&&n.speaking){for(o=0;o<n.speakingHistory.length;o++)t+=n.speakingHistory[o];0==t&&(n.speaking=!1,n.emit("stopped_speaking"))}n.speakingHistory.shift(),n.speakingHistory.push(0+(e>f)),v()}}),l)};return v(),n}(I.current,{audioContext:U.current})).on("speaking",(function(){v&&v(),clearTimeout(j.current)})),t.on("stopped_speaking",(function(){var e;m&&m(),M(!1),null===(e=I.current)||void 0===e||e.getAudioTracks()[0].stop(),k({exportWAV:!0,wavCallback:function(e){return N({blob:e,continuous:h||!1})}})})),M(!0),[2]}}))}))},D=function(){j.current=window.setTimeout((function(){var e;M(!1),null===(e=I.current)||void 0===e||e.getAudioTracks()[0].stop(),k({exportWAV:!1})}),x)},N=function(e){var t=e.blob,n=e.continuous,s=new FileReader;s.readAsDataURL(t),s.onloadend=function(){return r(f,void 0,void 0,(function(){var e,t,r,c,l,u,f,h;return i(this,(function(i){switch(i.label){case 0:return e=s.result,(t=null===(f=U.current)||void 0===f?void 0:f.sampleRate)&&t>48e3&&(t=48e3),r={content:""},c=o({encoding:"LINEAR16",languageCode:"en-US",sampleRateHertz:t},g),l={config:c,audio:r},r.content=e.substr(e.indexOf(",")+1),[4,fetch("https://speech.googleapis.com/v1/speech:recognize?key="+p,{method:"POST",body:JSON.stringify(l)})];case 1:return[4,i.sent().json()];case 2:return u=i.sent(),(null===(h=u.results)||void 0===h?void 0:h.length)>0&&B((function(e){return a(e,[u.results[0].alternatives[0].transcript])})),n&&_(),[2]}}))}))}};return{error:F,interimResult:V,isRecording:S,results:E,setResults:B,startSpeechToText:_,stopSpeechToText:function(){var e;y&&!R?y.stop():(M(!1),null===(e=I.current)||void 0===e||e.getAudioTracks()[0].stop(),k({exportWAV:!0,wavCallback:function(e){return N({blob:e,continuous:!1})}}))}}}navigator.brave&&navigator.brave.isBrave().then((function(e){e&&(y=null)})),!x&&C&&(y=new C);export default R;
//# sourceMappingURL=index.js.map
