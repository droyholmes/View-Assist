"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[8175],{9618:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=t(4848),s=t(8453);const l={sidebar_position:2,title:"Browser Display Software"},r="Installing Browser Display Software",o={id:"tablet-satellite/android/browser",title:"Browser Display Software",description:"In order to render your Home Assistant dashboards in full screen on your Android tablet, you'll need an application that will render in a full screen fashion and provides additional functionality to make interacting with the dashboards easier.",source:"@site/docs/tablet-satellite/android/browser.md",sourceDirName:"tablet-satellite/android",slug:"/tablet-satellite/android/browser",permalink:"/View-Assist/docs/tablet-satellite/android/browser",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tablet-satellite/android/browser.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Browser Display Software"},sidebar:"tutorialSidebar",previous:{title:"Microphone Streaming Software",permalink:"/View-Assist/docs/tablet-satellite/android/microphone"},next:{title:"Stream Assist Integration",permalink:"/View-Assist/docs/tablet-satellite/android/streamassist"}},a={},d=[{value:"Wallpanel",id:"wallpanel",level:2},{value:"Installation",id:"installation",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Fully Kiosk",id:"fullykiosk",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Configuration",id:"configuration-1",level:3},{value:"Web Content Settings -&gt;",id:"web-content-settings--",level:4},{value:"Advanced Web Settings -&gt;",id:"advanced-web-settings--",level:4},{value:"Universal Launcher -&gt;",id:"universal-launcher--",level:4},{value:"Remote Administration (PLUS) -&gt;",id:"remote-administration-plus--",level:4}];function c(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"installing-browser-display-software",children:"Installing Browser Display Software"}),"\n",(0,i.jsx)(n.p,{children:"In order to render your Home Assistant dashboards in full screen on your Android tablet, you'll need an application that will render in a full screen fashion and provides additional functionality to make interacting with the dashboards easier."}),"\n",(0,i.jsx)(n.p,{children:"There are currently two applications supported:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#wallpanel",children:"Wallpanel"})," - Recommended. Free to Use."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#fullykiosk",children:"Fully Kiosk"})," - $10 USD / 7.90 \u20ac per device for Plus features like remote management, capturing images from the webcam, etc."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"wallpanel",children:"Wallpanel"}),"\n",(0,i.jsx)(n.p,{children:"Wallpanel is used for full screen display and is comparable to Fully Kiosk. The application is free to use and is the preferred app for View Assist use."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://img.youtube.com/vi/pFrCahUR2ZE/mqdefault.jpg",alt:"https://www.youtube.com/watch?v=pFrCahUR2ZE"})}),"\n",(0,i.jsxs)(n.p,{children:["Detailed install video: ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=pFrCahUR2ZE",children:"https://www.youtube.com/watch?v=pFrCahUR2ZE"})]}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Download and install the app on the ",(0,i.jsx)(n.a,{href:"https://play.google.com/store/search?q=wallpanel&c=apps",children:"Google Play Store"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Open WallPanel"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Click Get Started"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Click the blue circle with rectangles on the bottom right to open the Wallpanel configuration."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click on the Dashboard URL and enter your Home Assistant URL (format is ",(0,i.jsx)(n.a,{href:"http://192.168.1.1:8123/",children:"http://192.168.1.1:8123/"}),", where 192.168.1.1 is the IP Address of your Home Assistant instance and 8123 is the port your HA uses)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"(optional) Change the Security Code from the default of 1234"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Toggle the options to true/on for:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Open on Device Boot"}),"\n",(0,i.jsx)(n.li,{children:"Browser Refresh"}),"\n",(0,i.jsx)(n.li,{children:"Network Disconnect"}),"\n",(0,i.jsx)(n.li,{children:"Hardware Acceleration"}),"\n",(0,i.jsx)(n.li,{children:"Fullscreen"}),"\n",(0,i.jsx)(n.li,{children:"Prevent Screen Sleep"}),"\n",(0,i.jsx)(n.li,{children:'Screen Brightness (requires additional permissions to be turned on, click OK then toggle on "allow modifying system settings", then back button)'}),"\n",(0,i.jsx)(n.li,{children:"(optional) Dark Theme"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"(optional, potential security risk) Toggle the option to true/on for Ignore SSL Errors"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"(optional) After everything is working, you can turn off Browser Refresh and turn on Settings Transparent to have a full kiosk mode"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Hit the back arrow"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"It should load the login page for Home Assistant."}),"\n",(0,i.jsx)(n.p,{children:'First, check the "Keep me logged in" checkbox, then enter your username and password'}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"It may be useful to create a unique HA user for your WallPanel devices. This allows better control of security and prevents users from making accidental changes."})}),"\n",(0,i.jsx)(n.p,{children:"Special thanks to @mngarchow for the written instructions and continued support"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"fullykiosk",children:"Fully Kiosk"}),"\n",(0,i.jsx)(n.p,{children:"The free version of the application will work for some functions but will display a watermark.  This is great for testing but for production you will more than likely want to support the developer by purchasing a license.  Money well spent.  Settings labeled (PLUS) require the license."}),"\n",(0,i.jsx)(n.h3,{id:"installation-1",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["Download and install the app via the ",(0,i.jsx)(n.a,{href:"https://play.google.com/store/apps/details?id=de.ozerov.fully",children:"Google Play Store"})]}),"\n",(0,i.jsx)(n.h3,{id:"configuration-1",children:"Configuration"}),"\n",(0,i.jsx)(n.h4,{id:"web-content-settings--",children:"Web Content Settings ->"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Set 'Start URL' to your local HA server by name or your server address  (eg ",(0,i.jsx)(n.a,{href:"http://homeassistant.local:8123",children:"http://homeassistant.local:8123"})," or ",(0,i.jsx)(n.a,{href:"http://192.168.0.23:8123",children:"http://192.168.0.23:8123"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Set 'Username' to your HA username"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Set 'Password' to your HA password"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"advanced-web-settings--",children:"Advanced Web Settings ->"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Turn on 'Ignore SSL Errors'  You may not need to do this but my old tablet did show notifications when trying to show Wikipedia images"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Change color of 'Default Webview Background Color' to black or your favorite color"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"universal-launcher--",children:"Universal Launcher ->"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Applications to Run on Start in Background (PLUS) choose 'Ip Webcam'"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"remote-administration-plus--",children:"Remote Administration (PLUS) ->"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Turn on 'Enable Remote Administration'   This is needed to expose FK media player to Music Assistant addon"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(6540);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);