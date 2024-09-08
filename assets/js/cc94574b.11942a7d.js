"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[2464],{2319:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=s(4848),n=s(8453);const o={title:"Stream Assist Integration",sidebar_position:3},r=void 0,a={id:"tablet-satellite/android/streamassist",title:"Stream Assist Integration",description:"Stream Assist integration is used to receive the RTSP stream from the Android device to do wake word detection.  Stream Assist depends on a Home Assistant Assist being configured.",source:"@site/docs/tablet-satellite/android/streamassist.md",sourceDirName:"tablet-satellite/android",slug:"/tablet-satellite/android/streamassist",permalink:"/View-Assist/docs/tablet-satellite/android/streamassist",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tablet-satellite/android/streamassist.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Stream Assist Integration",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Browser Display Software",permalink:"/View-Assist/docs/tablet-satellite/android/browser"},next:{title:"Browser Mod Integration",permalink:"/View-Assist/docs/tablet-satellite/android/browsermod"}},d={},l=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Additional Notes",id:"additional-notes",level:3},{value:"Microphone State",id:"microphone-state",level:4}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Stream Assist integration is used to receive the RTSP stream from the Android device to do wake word detection.  Stream Assist depends on a Home Assistant Assist being configured."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://youtu.be/DkRCgv2LzR8",children:(0,i.jsx)(t.img,{src:"https://img.youtube.com/vi/DkRCgv2LzR8/mqdefault.jpg",alt:""})})}),"\n",(0,i.jsxs)(t.p,{children:["Detailed install video:\n",(0,i.jsx)(t.a,{href:"https://youtu.be/DkRCgv2LzR8",children:"https://youtu.be/DkRCgv2LzR8"}),"\n",(0,i.jsx)(t.strong,{children:"Repo:"})," ",(0,i.jsx)(t.a,{href:"https://github.com/AlexxIT/StreamAssist",children:"https://github.com/AlexxIT/StreamAssist"})]}),"\n",(0,i.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Open HACS (typically in side navigation in your Home Assistant instance)"}),"\n",(0,i.jsx)(t.li,{children:"Go to Integrations"}),"\n",(0,i.jsx)(t.li,{children:"Click the 3 dots (upper top corner)"}),"\n",(0,i.jsx)(t.li,{children:"Choose Custom repositories"}),"\n",(0,i.jsxs)(t.li,{children:["Copy paste ",(0,i.jsx)(t.code,{children:"AlexxIT/StreamAssist"})]}),"\n",(0,i.jsx)(t.li,{children:"Go to Category: Integration"}),"\n",(0,i.jsx)(t.li,{children:"Click Add"}),"\n",(0,i.jsx)(t.li,{children:"Choose Stream Assist"}),"\n",(0,i.jsx)(t.li,{children:"Click Install"}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{title:"Restart Required",type:"danger",children:(0,i.jsxs)(t.p,{children:["You ",(0,i.jsx)(t.strong,{children:"must"})," restart Home Assistant to complete the installation."]})}),"\n",(0,i.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Once Home Assistant has restarted, Go to ",(0,i.jsx)(t.strong,{children:"Settings"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Choose ",(0,i.jsx)(t.strong,{children:"Devices and Services"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Click ",(0,i.jsx)(t.strong,{children:"+ Add Integration"})," button at bottom right"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Search for ",(0,i.jsx)(t.em,{children:"Stream Assist"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Give the device a name (eg streamassist-livingroom)"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Enter the Stream URL for the microphone software you are using being sure to replace the example IP address with your IP tablet device's IP address"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Example format for RTPMic ",(0,i.jsx)(t.code,{children:"rtp://192.168.0.152:55555"})]}),"\n",(0,i.jsxs)(t.li,{children:["Example format for IPWebcam video and audio ",(0,i.jsx)(t.code,{children:"rtsp://192.168.0.152:8080/h264_ulaw.sdp"})," or ",(0,i.jsx)(t.code,{children:"rtsp://192.168.0.152:8080/pcm_ulaw.sdp"})]}),"\n",(0,i.jsxs)(t.li,{children:["Example format for IPWebcam audio only ",(0,i.jsx)(t.code,{children:"http://192.168.0.152:8080/audio.wav"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"The media player device should be set to the device you'd like the audio to play from.  We recommend using the media player provided by Browser Mod."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"You can use any media player you wish and some users leverage the media player provided by Fully Kiosk or other integrations depending on their specific use case."})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["You can choose a sound effect to alert when Assist is expecting a command.  You can find many free sound effects at Pixabay.  Here is one you may like.  Pixabay has tons of free sounds.  The one I chose for testing is: ",(0,i.jsx)(t.a,{href:"https://pixabay.com/sound-effects/system-notification-199277/",children:"https://pixabay.com/sound-effects/system-notification-199277/"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"After uploading to your Home Assistant local media, you can specify using media-source syntax as follows:"}),"\n",(0,i.jsx)(t.p,{children:"Enter this value to add it to your configuration:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"media-source://media_source/local/system-notification-199277.mp3"})}),"\n",(0,i.jsx)(t.p,{children:"Docker users may need to modify their paths like this:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"media-source://media_source/media/system-notification-199277.mp3"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"additional-notes",children:"Additional Notes"}),"\n",(0,i.jsxs)(t.p,{children:["For help finding your tablet's IP address, see this guide:  ",(0,i.jsx)(t.a,{href:"https://github.com/dinki/View-Assist/wiki/Find-IP-of-Android-device",children:"https://github.com/dinki/View-Assist/wiki/Find-IP-of-Android-device"})]}),"\n",(0,i.jsxs)(t.p,{children:["Additional installation and configuration can be found here:\n",(0,i.jsx)(t.a,{href:"https://github.com/AlexxIT/StreamAssist?tab=readme-ov-file#installation",children:"https://github.com/AlexxIT/StreamAssist?tab=readme-ov-file#installation"})]}),"\n",(0,i.jsx)(t.h4,{id:"microphone-state",children:"Microphone State"}),"\n",(0,i.jsx)(t.p,{children:"Upon restart, the Microphone for Stream Assist is often in the off state. Before attempting to use, you'll need to make sure it is on for it to recognize voice prompts. As part of the control automation discussed later, we'll make sure this mic is always on."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://github.com/dinki/View-Assist/assets/2521542/f8355663-1653-41bc-ac25-61f806e9c479",alt:"banner"})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var i=s(6540);const n={},o=i.createContext(n);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);