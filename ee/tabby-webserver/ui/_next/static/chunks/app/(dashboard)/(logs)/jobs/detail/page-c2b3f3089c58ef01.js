(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1908],{50613:function(e,s,t){Promise.resolve().then(t.bind(t,77930))},77930:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return j}});var n=t(36164),r=t(3546),l=t(11978),i=t(70787),a=t(97651),c=t.n(a),d=t(99092),u=t.n(d),o=t(40055),f=t(70410),x=t(1544),m=t(81565),h=t(50538),g=t(90379),v=t(17484);function j(){var e,s,t;let i=(0,l.useRouter)(),a=(0,l.useSearchParams)(),d=a.get("id"),[{data:x,error:j,fetching:N},b]=(0,o.aM)({query:f.GG,variables:{ids:[d]},pause:!d}),w=null==x?void 0:null===(t=x.jobRuns)||void 0===t?void 0:null===(s=t.edges)||void 0===s?void 0:null===(e=s[0])||void 0===e?void 0:e.node,y=(0,v.H)(w),k=("Pending"===y||"Running"===y)&&!(null==w?void 0:w.stdout)&&!(null==w?void 0:w.stderr);return r.useEffect(()=>{let e;return(null==w?void 0:w.createdAt)&&!(null==w?void 0:w.finishedAt)&&(e=window.setTimeout(()=>{b()},5e3)),()=>{e&&clearInterval(e)}},[w]),(0,n.jsx)(n.Fragment,{children:N?(0,n.jsx)(g.cg,{}):(0,n.jsx)("div",{className:"flex flex-1 flex-col items-stretch gap-2",children:w&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{onClick:()=>i.back(),className:"-ml-1 flex cursor-pointer items-center transition-opacity hover:opacity-60",children:[(0,n.jsx)(m.IconChevronLeft,{className:"mr-1 h-6 w-6"}),(0,n.jsx)("h2",{className:"scroll-m-20 text-3xl font-bold tracking-tight first:mt-0",children:(0,v.Y)(w.job)})]}),(0,n.jsxs)("div",{className:"mb-8 flex gap-x-5 text-sm text-muted-foreground lg:gap-x-10",children:[(0,n.jsxs)("div",{className:"flex items-center gap-1",children:[(0,n.jsx)(m.IconStopWatch,{}),(0,n.jsxs)("p",{children:["State: ",y]})]}),w.createdAt&&(0,n.jsxs)("div",{className:"flex items-center gap-1",children:[(0,n.jsx)(m.IconClock,{}),(0,n.jsxs)("p",{children:["Created:"," ",u()(w.createdAt).format("YYYY-MM-DD HH:mm")]})]}),w.startedAt&&(0,n.jsxs)("div",{className:"flex items-center gap-1",children:[(0,n.jsx)(m.IconClock,{}),(0,n.jsxs)("p",{children:["Started:"," ",u()(w.startedAt).format("YYYY-MM-DD HH:mm")]})]}),w.createdAt&&w.finishedAt&&(0,n.jsxs)("div",{className:"flex items-center gap-1",children:[(0,n.jsx)(m.IconHistory,{}),(0,n.jsxs)("p",{children:["Duration:"," ",c()(u().duration(u()(w.finishedAt).diff(w.startedAt)).asMilliseconds())]})]})]}),(0,n.jsxs)(h.mQ,{defaultValue:"stdout",className:"flex flex-1 flex-col",children:[(0,n.jsxs)(h.dr,{className:"grid w-[400px] grid-cols-2",children:[(0,n.jsxs)(h.SP,{value:"stdout",children:[(0,n.jsx)(m.IconTerminalSquare,{className:"mr-1"}),"stdout"]}),(0,n.jsxs)(h.SP,{value:"stderr",children:[(0,n.jsx)(m.IconAlertTriangle,{className:"mr-1"}),"stderr"]})]}),(0,n.jsxs)("div",{className:"flex flex-1 flex-col",children:[(0,n.jsx)(h.nU,{value:"stdout",children:(0,n.jsx)(p,{value:null==w?void 0:w.stdout,pending:k})}),(0,n.jsx)(h.nU,{value:"stderr",children:(0,n.jsx)(p,{value:null==w?void 0:w.stderr,pending:k})})]})]})]})})})}function p(e){let{children:s,className:t,value:r,pending:l,...a}=e;return(0,n.jsxs)("div",{className:(0,x.cn)("relative mt-2 h-[66vh] w-full overflow-y-auto overflow-x-hidden rounded-lg border bg-gray-50 font-mono text-[0.9rem] dark:bg-gray-800",t),...a,children:[l&&!r&&(0,n.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-background/60",children:(0,n.jsx)(m.IconSpinner,{className:"h-8 w-8"})}),r&&(0,n.jsx)("pre",{className:"whitespace-pre-wrap p-4",children:(0,n.jsx)(i.Z,{children:r})})]})}},17484:function(e,s,t){"use strict";t.d(s,{H:function(){return i},Y:function(){return l}});var n=t(74630);let r={scheduler_git:"Git",scheduler_github_gitlab:"Github / Gitlab",web_crawler:"Web"};function l(e){return e in r?r[e]:e}function i(e){return e?(0,n.Z)(e.exitCode)?e.startedAt?"Running":"Pending":0===e.exitCode?"Success":"Failed":"Pending"}},90379:function(e,s,t){"use strict";t.d(s,{PF:function(){return c},cg:function(){return i},tB:function(){return a}});var n=t(36164),r=t(1544),l=t(3448);let i=e=>{let{className:s,...t}=e;return(0,n.jsxs)("div",{className:(0,r.cn)("space-y-3",s),...t,children:[(0,n.jsx)(l.O,{className:"h-4 w-full"}),(0,n.jsx)(l.O,{className:"h-4 w-full"}),(0,n.jsx)(l.O,{className:"h-4 w-full"}),(0,n.jsx)(l.O,{className:"h-4 w-full"})]})},a=e=>{let{className:s,...t}=e;return(0,n.jsx)(l.O,{className:(0,r.cn)("h-4 w-full",s),...t})},c=e=>{let{className:s,...t}=e;return(0,n.jsxs)("div",{className:(0,r.cn)("flex flex-col gap-3",s),...t,children:[(0,n.jsx)(l.O,{className:"h-4 w-[20%]"}),(0,n.jsx)(l.O,{className:"h-4 w-full"}),(0,n.jsx)(l.O,{className:"h-4 w-[20%]"}),(0,n.jsx)(l.O,{className:"h-4 w-full"})]})}},3448:function(e,s,t){"use strict";t.d(s,{O:function(){return l}});var n=t(36164),r=t(1544);function l(e){let{className:s,...t}=e;return(0,n.jsx)("div",{className:(0,r.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",s),...t})}},50538:function(e,s,t){"use strict";t.d(s,{SP:function(){return d},dr:function(){return c},mQ:function(){return a},nU:function(){return u}});var n=t(36164),r=t(3546),l=t(6044),i=t(1544);let a=l.fC,c=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,n.jsx)(l.aV,{ref:s,className:(0,i.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",t),...r})});c.displayName=l.aV.displayName;let d=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,n.jsx)(l.xz,{ref:s,className:(0,i.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",t),...r})});d.displayName=l.xz.displayName;let u=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,n.jsx)(l.VY,{ref:s,className:(0,i.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",t),...r})});u.displayName=l.VY.displayName}},function(e){e.O(0,[7565,1386,5498,8439,7651,6044,8504,1544,1565,410,3375,5289,1744],function(){return e(e.s=50613)}),_N_E=e.O()}]);