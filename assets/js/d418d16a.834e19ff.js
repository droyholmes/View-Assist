"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[1782],{3085:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>r,toc:()=>c});var s=i(4848),o=i(8453);const n={title:"Control Automations",sidebar_position:3},a="Control Automations",r={id:"view-assist/control-automations",title:"Control Automations",description:"View Assist is controlled using core control automations per view device.  Other automations control things like alarms and reminders.  This page details the installation and configuration of some of these automations",source:"@site/docs/view-assist/control-automations.md",sourceDirName:"view-assist",slug:"/view-assist/control-automations",permalink:"/View-Assist/docs/view-assist/control-automations",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/view-assist/control-automations.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Control Automations",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Browsermod Settings",permalink:"/View-Assist/docs/view-assist/dashboard-views/browsermod-settings"},next:{title:"Showcase Gallery",permalink:"/View-Assist/docs/gallery/"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"View Assist device control through Python set_state",id:"view-assist-device-control-through-python-set_state",level:3},{value:"Per device display control",id:"per-device-display-control",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"control-automations",children:"Control Automations"}),"\n",(0,s.jsx)(t.p,{children:"View Assist is controlled using core control automations per view device.  Other automations control things like alarms and reminders.  This page details the installation and configuration of some of these automations"}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(t.h3,{id:"view-assist-device-control-through-python-set_state",children:"View Assist device control through Python set_state"}),"\n",(0,s.jsxs)(t.p,{children:["The View Assist satellite devices hold data and settings.  These devices and their attributes are updated using a python script called set_state .  This will involve file manipulation so if you need help you can watch this ",(0,s.jsx)(t.a,{href:"https://www.youtube.com/watch?v=ncKWaLpJ1DQ",children:"video for installing file editor addon"})," in HASSOS.  Here is how to install this python script for use with View Assist"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://www.youtube.com/watch?v=iDJH2bn_Wao",children:(0,s.jsx)(t.img,{src:"https://img.youtube.com/vi/iDJH2bn_Wao/mqdefault.jpg",alt:"Image"})})}),"\n",(0,s.jsxs)(t.p,{children:["Detailed install video:\n",(0,s.jsx)(t.a,{href:"https://youtu.be/iDJH2bn_Wao",children:"https://youtu.be/iDJH2bn_Wao"})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Download the set_state.py by right clicking this link and choose 'save link as':   ",(0,s.jsx)("a",{id:"raw-url",href:"https://raw.githubusercontent.com/xannor/hass_py_set_state/master/python_scripts/set_state.py",children:"set_state.py"})]}),"\n",(0,s.jsx)(t.li,{children:"Open the configuration.yaml file located in the 'homeassistant' config directory in a file editor"}),"\n",(0,s.jsxs)(t.li,{children:["Add a line to the bottom of the configuration file containing ",(0,s.jsx)(t.code,{children:"python_script:"})," and save the file"]}),"\n",(0,s.jsxs)(t.li,{children:["Go back into file editor and create a new folder in the config directory called ",(0,s.jsx)(t.code,{children:"python_scripts"})]}),"\n",(0,s.jsx)(t.li,{children:"Find that new folder and click it to enter"}),"\n",(0,s.jsx)(t.li,{children:"Use the upload file option and upload the 'set_state.py' file into the 'python_scripts' folder you created"}),"\n",(0,s.jsx)(t.li,{children:"Restart Home Assistant"}),"\n",(0,s.jsx)(t.li,{children:"Check that the service is installed by going to Developer Tools -> Services and search for 'set_state'.  You should see the service listed in the results as 'Python Scripts: set_state'"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Note that for HASSOS users the configuration folder shows up as ",(0,s.jsx)(t.code,{children:"homeassistant"})," where other installs have this defined as ",(0,s.jsx)(t.code,{children:"/config"})]}),"\n",(0,s.jsxs)(t.p,{children:["For more information see the set_state Github page at: ",(0,s.jsx)(t.a,{href:"https://github.com/xannor/hass_py_set_state",children:"https://github.com/xannor/hass_py_set_state"})]}),"\n",(0,s.jsx)(t.h3,{id:"per-device-display-control",children:"Per device display control"}),"\n",(0,s.jsx)(t.p,{children:"The View Assist display satellites have different modes for how screens are shown on the device and for how long.  This behavior is controlled by an automation.  Each View Assist visual device will need its own control automation."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://www.youtube.com/watch?v=Vrm4TCotEqA",children:(0,s.jsx)(t.img,{src:"https://img.youtube.com/vi/Vrm4TCotEqA/mqdefault.jpg",alt:"Image"})})}),"\n",(0,s.jsxs)(t.p,{children:["Detailed install video:\n",(0,s.jsx)(t.a,{href:"https://youtu.be/Vrm4TCotEqA",children:"https://youtu.be/Vrm4TCotEqA"})]}),"\n",(0,s.jsx)(t.p,{children:"These are the configuration parameters needed for configuration:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Satellite -The View Assist device entity to control (example sensor.viewassist_living_room)"}),"\n",(0,s.jsx)(t.li,{children:"Display Device - The browsermod display device used by View Assist (example sensor.browsermod_livingroom_browser_path)"}),"\n",(0,s.jsx)(t.li,{children:"Timer - The associated timer device entity for the satellite (example timer.viewassist_living_room)"}),"\n",(0,s.jsx)(t.li,{children:"Dashboard - The base dashboard for View Assist (default /dashboard-viewassist/)"}),"\n",(0,s.jsx)(t.li,{children:"Default Home screen - The screen to return to after timeout (default /dashboard-viewassist/clock)"}),"\n",(0,s.jsx)(t.li,{children:"Unmute Mic - Unmute microphone on HA start/restart. This is helpful for Stream Assist devices which default to muted on HA start"}),"\n",(0,s.jsx)(t.li,{children:"Mic device - The microphone entity to unmute on HA start/restart. (example switch.viewassist_living_room_mic)  Only needed if Unmute Mic option is turned on"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Below is the blueprint that will configure these automations for each device.  Click the link to import the blueprint:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https%3A%2F%2Fraw.githubusercontent.com%2Fdinki%2FView-Assist%2Fmain%2FView+Assist+control+automations%2Fblueprint-devicecontrol.yaml",children:(0,s.jsx)(t.img,{src:"https://my.home-assistant.io/badges/blueprint_import.svg",alt:"Open your Home Assistant instance and show the blueprint import dialog with a specific blueprint pre-filled."})})}),"\n",(0,s.jsx)(t.p,{children:"After importing, click on the newly imported blueprint and set the configuration options as detailed above.  Hit save to write out an automation based on that blueprint.  Change the word 'template' in the name to your device name so it can be unique and identifiable."})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var s=i(6540);const o={},n=s.createContext(o);function a(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);