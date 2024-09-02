"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6044],{1333:function(e,t,n){n.d(t,{Pc:function(){return I},ck:function(){return A},fC:function(){return D}});var o=n(65122),r=n(3546),a=n(65727),i=n(85656),u=n(79869),l=n(47091),c=n(29434),s=n(72205),f=n(17957),d=n(27250),p=n(57541);let b="rovingFocusGroup.onEntryFocus",v={bubbles:!1,cancelable:!0},m="RovingFocusGroup",[w,g,E]=(0,i.B)(m),[h,I]=(0,l.b)(m,[E]),[F,T]=h(m),C=(0,r.forwardRef)((e,t)=>(0,r.createElement)(w.Provider,{scope:e.__scopeRovingFocusGroup},(0,r.createElement)(w.Slot,{scope:e.__scopeRovingFocusGroup},(0,r.createElement)(R,(0,o.Z)({},e,{ref:t}))))),R=(0,r.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,orientation:i,loop:l=!1,dir:c,currentTabStopId:m,defaultCurrentTabStopId:w,onCurrentTabStopIdChange:E,onEntryFocus:h,...I}=e,T=(0,r.useRef)(null),C=(0,u.e)(t,T),R=(0,p.gm)(c),[M=null,_]=(0,d.T)({prop:m,defaultProp:w,onChange:E}),[D,A]=(0,r.useState)(!1),V=(0,f.W)(h),k=g(n),S=(0,r.useRef)(!1),[P,Z]=(0,r.useState)(0);return(0,r.useEffect)(()=>{let e=T.current;if(e)return e.addEventListener(b,V),()=>e.removeEventListener(b,V)},[V]),(0,r.createElement)(F,{scope:n,orientation:i,dir:R,loop:l,currentTabStopId:M,onItemFocus:(0,r.useCallback)(e=>_(e),[_]),onItemShiftTab:(0,r.useCallback)(()=>A(!0),[]),onFocusableItemAdd:(0,r.useCallback)(()=>Z(e=>e+1),[]),onFocusableItemRemove:(0,r.useCallback)(()=>Z(e=>e-1),[])},(0,r.createElement)(s.WV.div,(0,o.Z)({tabIndex:D||0===P?-1:0,"data-orientation":i},I,{ref:C,style:{outline:"none",...e.style},onMouseDown:(0,a.M)(e.onMouseDown,()=>{S.current=!0}),onFocus:(0,a.M)(e.onFocus,e=>{let t=!S.current;if(e.target===e.currentTarget&&t&&!D){let t=new CustomEvent(b,v);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=k().filter(e=>e.focusable),t=e.find(e=>e.active),n=e.find(e=>e.id===M),o=[t,n,...e].filter(Boolean),r=o.map(e=>e.ref.current);y(r)}}S.current=!1}),onBlur:(0,a.M)(e.onBlur,()=>A(!1))})))}),M=(0,r.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,focusable:i=!0,active:u=!1,tabStopId:l,...f}=e,d=(0,c.M)(),p=l||d,b=T("RovingFocusGroupItem",n),v=b.currentTabStopId===p,m=g(n),{onFocusableItemAdd:E,onFocusableItemRemove:h}=b;return(0,r.useEffect)(()=>{if(i)return E(),()=>h()},[i,E,h]),(0,r.createElement)(w.ItemSlot,{scope:n,id:p,focusable:i,active:u},(0,r.createElement)(s.WV.span,(0,o.Z)({tabIndex:v?0:-1,"data-orientation":b.orientation},f,{ref:t,onMouseDown:(0,a.M)(e.onMouseDown,e=>{i?b.onItemFocus(p):e.preventDefault()}),onFocus:(0,a.M)(e.onFocus,()=>b.onItemFocus(p)),onKeyDown:(0,a.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){b.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,n){var o;let r=(o=e.key,"rtl"!==n?o:"ArrowLeft"===o?"ArrowRight":"ArrowRight"===o?"ArrowLeft":o);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(r))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(r)))return _[r]}(e,b.orientation,b.dir);if(void 0!==t){e.preventDefault();let r=m().filter(e=>e.focusable),a=r.map(e=>e.ref.current);if("last"===t)a.reverse();else if("prev"===t||"next"===t){var n,o;"prev"===t&&a.reverse();let r=a.indexOf(e.currentTarget);a=b.loop?(n=a,o=r+1,n.map((e,t)=>n[(o+t)%n.length])):a.slice(r+1)}setTimeout(()=>y(a))}})})))}),_={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function y(e){let t=document.activeElement;for(let n of e)if(n===t||(n.focus(),document.activeElement!==t))return}let D=C,A=M},6044:function(e,t,n){n.d(t,{VY:function(){return y},aV:function(){return M},fC:function(){return R},xz:function(){return _}});var o=n(65122),r=n(3546),a=n(65727),i=n(47091),u=n(1333),l=n(96497),c=n(72205),s=n(57541),f=n(27250),d=n(29434);let p="Tabs",[b,v]=(0,i.b)(p,[u.Pc]),m=(0,u.Pc)(),[w,g]=b(p),E=(0,r.forwardRef)((e,t)=>{let{__scopeTabs:n,value:a,onValueChange:i,defaultValue:u,orientation:l="horizontal",dir:p,activationMode:b="automatic",...v}=e,m=(0,s.gm)(p),[g,E]=(0,f.T)({prop:a,onChange:i,defaultProp:u});return(0,r.createElement)(w,{scope:n,baseId:(0,d.M)(),value:g,onValueChange:E,orientation:l,dir:m,activationMode:b},(0,r.createElement)(c.WV.div,(0,o.Z)({dir:m,"data-orientation":l},v,{ref:t})))}),h=(0,r.forwardRef)((e,t)=>{let{__scopeTabs:n,loop:a=!0,...i}=e,l=g("TabsList",n),s=m(n);return(0,r.createElement)(u.fC,(0,o.Z)({asChild:!0},s,{orientation:l.orientation,dir:l.dir,loop:a}),(0,r.createElement)(c.WV.div,(0,o.Z)({role:"tablist","aria-orientation":l.orientation},i,{ref:t})))}),I=(0,r.forwardRef)((e,t)=>{let{__scopeTabs:n,value:i,disabled:l=!1,...s}=e,f=g("TabsTrigger",n),d=m(n),p=T(f.baseId,i),b=C(f.baseId,i),v=i===f.value;return(0,r.createElement)(u.ck,(0,o.Z)({asChild:!0},d,{focusable:!l,active:v}),(0,r.createElement)(c.WV.button,(0,o.Z)({type:"button",role:"tab","aria-selected":v,"aria-controls":b,"data-state":v?"active":"inactive","data-disabled":l?"":void 0,disabled:l,id:p},s,{ref:t,onMouseDown:(0,a.M)(e.onMouseDown,e=>{l||0!==e.button||!1!==e.ctrlKey?e.preventDefault():f.onValueChange(i)}),onKeyDown:(0,a.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&f.onValueChange(i)}),onFocus:(0,a.M)(e.onFocus,()=>{let e="manual"!==f.activationMode;v||l||!e||f.onValueChange(i)})})))}),F=(0,r.forwardRef)((e,t)=>{let{__scopeTabs:n,value:a,forceMount:i,children:u,...s}=e,f=g("TabsContent",n),d=T(f.baseId,a),p=C(f.baseId,a),b=a===f.value,v=(0,r.useRef)(b);return(0,r.useEffect)(()=>{let e=requestAnimationFrame(()=>v.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,r.createElement)(l.z,{present:i||b},({present:n})=>(0,r.createElement)(c.WV.div,(0,o.Z)({"data-state":b?"active":"inactive","data-orientation":f.orientation,role:"tabpanel","aria-labelledby":d,hidden:!n,id:p,tabIndex:0},s,{ref:t,style:{...e.style,animationDuration:v.current?"0s":void 0}}),n&&u))});function T(e,t){return`${e}-trigger-${t}`}function C(e,t){return`${e}-content-${t}`}let R=E,M=h,_=I,y=F}}]);