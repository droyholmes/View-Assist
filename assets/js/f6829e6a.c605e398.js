"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[6480],{1747:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=s(4848),t=s(8453);const o={title:"Device Configuration",sidebar_position:1},r="Device Configuration",a={id:"homeassistant-configuration/viewassist-configuration/device-configuration",title:"Device Configuration",description:"View Assist devices are created using custom template sensors. These devices contain important information like browser mod ID, media_player device, microphone device, and timer device.  Additionally this configuration sets the attributes needed for different modes, data to displayed and more. These attributes are consumed by control automations and display views.",source:"@site/docs/homeassistant-configuration/viewassist-configuration/device-configuration.md",sourceDirName:"homeassistant-configuration/viewassist-configuration",slug:"/homeassistant-configuration/viewassist-configuration/device-configuration",permalink:"/View-Assist/docs/homeassistant-configuration/viewassist-configuration/device-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/homeassistant-configuration/viewassist-configuration/device-configuration.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Device Configuration",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"View Assist Installation",permalink:"/View-Assist/docs/homeassistant-configuration/viewassist-configuration/"},next:{title:"Dashboard & Views",permalink:"/View-Assist/docs/homeassistant-configuration/viewassist-configuration/dashboard-views/"}},l={},d=[{value:"Create Timer Helper",id:"create-timer-helper",level:2},{value:"Satellite Custom Device Configuration",id:"satellite-custom-device-configuration",level:2},{value:"View Assist Config Definitions:",id:"view-assist-config-definitions",level:3},{value:"View Assist Satellite Group",id:"view-assist-satellite-group",level:2},{value:"Example configuration",id:"example-configuration",level:2}];function c(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:s}=i;return s||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"device-configuration",children:"Device Configuration"}),"\n",(0,n.jsx)(i.p,{children:"View Assist devices are created using custom template sensors. These devices contain important information like browser mod ID, media_player device, microphone device, and timer device.  Additionally this configuration sets the attributes needed for different modes, data to displayed and more. These attributes are consumed by control automations and display views."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://www.youtube.com/watch?v=5RQvzEFfwuY",children:(0,n.jsx)(i.img,{src:"https://img.youtube.com/vi/5RQvzEFfwuY/mqdefault.jpg",alt:"Image"})})}),"\n",(0,n.jsxs)(i.p,{children:["Detailed install video:\n",(0,n.jsx)(i.a,{href:"https://youtu.be/5RQvzEFfwuY",children:"https://youtu.be/5RQvzEFfwuY"})]}),"\n",(0,n.jsx)(i.admonition,{type:"warning",children:(0,n.jsx)(i.p,{children:"An error exists in the video where I do not configure the browser_id attribute.  I have corrected the code below but do know that you must input this value."})}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h2,{id:"create-timer-helper",children:"Create Timer Helper"}),"\n",(0,n.jsxs)(i.p,{children:["Each ",(0,n.jsx)(i.code,{children:"view_audio"})," or ",(0,n.jsx)(i.code,{children:"view_only"})," View Assist device needs a timer helper that allows the control automation to reset the display to a default state. If you are using an ",(0,n.jsx)(i.code,{children:"audio_only"})," device you can skip this step."]}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["In Home Assistant click on *",(0,n.jsx)(i.em,{children:"Settings"}),"- in the sidebar"]}),"\n",(0,n.jsxs)(i.li,{children:["Click on ",(0,n.jsx)(i.strong,{children:"Devices & Services"})]}),"\n",(0,n.jsxs)(i.li,{children:["Click on *",(0,n.jsx)(i.em,{children:"Helpers"}),"- at the top of the screen"]}),"\n",(0,n.jsxs)(i.li,{children:["Click the *",(0,n.jsx)(i.em,{children:"+ Create Helper"}),"- button in bottom right corner"]}),"\n",(0,n.jsxs)(i.li,{children:["Scroll down and select ",(0,n.jsx)(i.strong,{children:"Timer"})]}),"\n",(0,n.jsxs)(i.li,{children:["Give this a meaningful name such as ",(0,n.jsx)(i.code,{children:"va_livingroom"})]}),"\n",(0,n.jsxs)(i.li,{children:["Choose an appropriate icon such as ",(0,n.jsx)(i.code,{children:"mdi:clock-digital"})]}),"\n",(0,n.jsx)(i.li,{children:"Click the **Restore?*- checkbox."}),"\n",(0,n.jsxs)(i.li,{children:["Click ",(0,n.jsx)(i.strong,{children:"Create"})]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"satellite-custom-device-configuration",children:"Satellite Custom Device Configuration"}),"\n",(0,n.jsxs)(i.p,{children:["Each View Assist device must have its own configuration in Home Assistant. This allows for setting properties for each device that may have a unique condition for that device (eg night mode for a device in a dark room).  These devices are set up in YAML as a template device in ",(0,n.jsx)(i.code,{children:"configuration.yaml"}),".  When setting up more than one device, you'll duplicate everything from the ",(0,n.jsx)(i.code,{children:"-name:"})," line and below for each device you are configuring.  The Home Assistant service must be restarted any time a change is made to the ",(0,n.jsx)(i.code,{children:"configuration.yaml"})," file."]}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsxs)(i.p,{children:["As an alternative you can use the ",(0,n.jsx)(i.a,{href:"https://www.home-assistant.io/docs/configuration/packages/#create-a-packages-folder",children:"packages approach"})," if you find your ",(0,n.jsx)(i.code,{children:"configuration.yaml"})," file becoming long/unwieldy."]})}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-yaml",children:'template:\n  - sensor:\n    - name: ViewAssist-livingroom\n      state: ""\n      attributes:\n        type: view_audio\n        mic_device: "sensor.streamassist_livingroom_stt" \n        mediaplayer_device: "media_player.browsermod_livingroom" \n        display_device: "sensor.browsermod-livingroom_browser_path" \n        browser_id: "ViewAssist-livingroom"\n        timer_device: "timer.viewassist-livingroom" \n        view_timeout: "20"\n        mode: "normal"\n        title: ""\n        message: ""\n        message_font_size: "3vw"\n        image: ""\n        timer: ""\n        alarm: "idle"\n        cycle_view: ""\n        do_not_disturb: false\n'})}),"\n",(0,n.jsx)(i.h3,{id:"view-assist-config-definitions",children:"View Assist Config Definitions:"}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"User Defined"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"name:"})," Device name (eg ViewAssist-livingroom)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"type:"}),"  Used to determine a/v capabilities","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Values: ",(0,n.jsx)(i.code,{children:"view_audio"}),", ",(0,n.jsx)(i.code,{children:"view_only"}),", ",(0,n.jsx)(i.code,{children:"audio_only"})]}),"\n",(0,n.jsxs)(i.li,{children:["Default: ",(0,n.jsx)(i.code,{children:"view_audio"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"mic_device:"}),"  Used to assign microphone to View Assist device"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"mediaplayer_device:"})," Used to assign the media player used for View Assist audio playback"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"browser_id:"})," Used to assign the browser being used by Browsermod.","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"This will match the name you give the device in your Browsermod configuration. Capitalization matters!"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"timer_device:"})," Used to assign the timer helper device used for screen time outs"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"display_device:"})," Used to determine the correct Browser Mod instance to use for display"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"view_timeout:"})," Amount of time (seconds) before switching views as controlled by mode","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Default: 20"}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Default values (do not change)"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"state:"})," Required"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"mode:"})," Used to control actions based on conditions","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Values: ",(0,n.jsx)(i.code,{children:"normal"}),", ",(0,n.jsx)(i.code,{children:"music"}),", ",(0,n.jsx)(i.code,{children:"night"}),", ",(0,n.jsx)(i.code,{children:"hold"}),", ",(0,n.jsx)(i.code,{children:"cycle"})]}),"\n",(0,n.jsxs)(i.li,{children:["Default: ",(0,n.jsx)(i.code,{children:"normal"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"title:"})," Text for displaying title of multiuse cards"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"message:"})," Blob text for displaying to informational views"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"message_font_size:"})," Text containing size of font to be used in message for informational views","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Default: ",(0,n.jsx)(i.code,{children:"3vw"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"image:"})," Text containing image path for display on informational views"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"alarm:"})," Used to trigger alarm sound and display","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Values: ",(0,n.jsx)(i.code,{children:"idle"}),", ",(0,n.jsx)(i.code,{children:"alarming"})]}),"\n",(0,n.jsxs)(i.li,{children:["Default: ",(0,n.jsx)(i.code,{children:"idle"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"cycle_view:"})," List containing view names to cycle through using view_timeout when in ",(0,n.jsx)(i.code,{children:"cycle"})," mode","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["must be in Python list format eg. ",(0,n.jsx)(i.code,{children:"[ 'weather', 'frontcamera' ]"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"dnd:"})," Do not disturb mode.  Do not broadcast or play sounds when in DND mode","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Default: ",(0,n.jsx)(i.code,{children:"false"})]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,n.jsx)(i.h2,{id:"view-assist-satellite-group",children:"View Assist Satellite Group"}),"\n",(0,n.jsxs)(i.p,{children:["A group containing all View Assist Satellite devices (eg group.viewassist_satellites) must be created and all VA Satellite devices must be added to this group.  This group ",(0,n.jsx)(i.strong,{children:"MUST"})," be added to the ",(0,n.jsx)(i.code,{children:"configuration.yaml"})," file similar to the View Assist device configuration below:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"group:\n  viewassist_satellites:\n    name: View Assist Satellites\n    entities:\n      - sensor.viewassist_livingroom\n      - sensor.viewassist_kitchen\n      - sensor.viewassist_bedroom\n"})}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsx)(i.p,{children:"Dashes in template sensor names will be replaced by underscores to a template sensor named ViewAssistant-livingroom like in the example above, will become sensor.viewassist_livingroom for the group."})}),"\n",(0,n.jsx)(i.admonition,{type:"warning",children:(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"The group configuration must be reloaded after any edits by way of Home Assistant restart."}),"\n",(0,n.jsx)(i.li,{children:"Do not create this group as helper from the Home Assistant GUI.  It will not work and you will have problems."}),"\n"]})}),"\n",(0,n.jsx)(i.h2,{id:"example-configuration",children:"Example configuration"}),"\n",(0,n.jsx)(i.p,{children:"Here is the example configuration.  You can copy paste this into your configuration.yaml file, modify the values to those of your satellite sensors and timer, save the file and then restart Home Assistant for the configuration to be loaded.  You will repeat the sensor definition for any additional satellites.  All View Assist satellites must be added to the View Assist Satellite group as described above."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://raw.githubusercontent.com/dinki/View-Assist/main/View%20Assist%20device%20configuration/device_config_example.yaml",children:"Example device configuration"})})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,i,s)=>{s.d(i,{R:()=>r,x:()=>a});var n=s(6540);const t={},o=n.createContext(t);function r(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);