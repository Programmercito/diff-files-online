class re{diff(e,t,n={}){let s;typeof n=="function"?(s=n,n={}):"callback"in n&&(s=n.callback);const l=this.castInput(e,n),i=this.castInput(t,n),a=this.removeEmpty(this.tokenize(l,n)),r=this.removeEmpty(this.tokenize(i,n));return this.diffWithOptionsObj(a,r,n,s)}diffWithOptionsObj(e,t,n,s){var l;const i=u=>{if(u=this.postProcess(u,n),s){setTimeout(function(){s(u)},0);return}else return u},a=t.length,r=e.length;let c=1,f=a+r;n.maxEditLength!=null&&(f=Math.min(f,n.maxEditLength));const d=(l=n.timeout)!==null&&l!==void 0?l:1/0,m=Date.now()+d,x=[{oldPos:-1,lastComponent:void 0}];let h=this.extractCommon(x[0],t,e,0,n);if(x[0].oldPos+1>=r&&h+1>=a)return i(this.buildValues(x[0].lastComponent,t,e));let T=-1/0,k=1/0;const W=()=>{for(let u=Math.max(T,-c);u<=Math.min(k,c);u+=2){let v;const w=x[u-1],L=x[u+1];w&&(x[u-1]=void 0);let B=!1;if(L){const D=L.oldPos-u;B=L&&0<=D&&D<a}const y=w&&w.oldPos+1<r;if(!B&&!y){x[u]=void 0;continue}if(!y||B&&w.oldPos<L.oldPos?v=this.addToPath(L,!0,!1,0,n):v=this.addToPath(w,!1,!0,1,n),h=this.extractCommon(v,t,e,u,n),v.oldPos+1>=r&&h+1>=a)return i(this.buildValues(v.lastComponent,t,e))||!0;x[u]=v,v.oldPos+1>=r&&(k=Math.min(k,u-1)),h+1>=a&&(T=Math.max(T,u+1))}c++};if(s)(function u(){setTimeout(function(){if(c>f||Date.now()>m)return s(void 0);W()||u()},0)})();else for(;c<=f&&Date.now()<=m;){const u=W();if(u)return u}}addToPath(e,t,n,s,l){const i=e.lastComponent;return i&&!l.oneChangePerToken&&i.added===t&&i.removed===n?{oldPos:e.oldPos+s,lastComponent:{count:i.count+1,added:t,removed:n,previousComponent:i.previousComponent}}:{oldPos:e.oldPos+s,lastComponent:{count:1,added:t,removed:n,previousComponent:i}}}extractCommon(e,t,n,s,l){const i=t.length,a=n.length;let r=e.oldPos,c=r-s,f=0;for(;c+1<i&&r+1<a&&this.equals(n[r+1],t[c+1],l);)c++,r++,f++,l.oneChangePerToken&&(e.lastComponent={count:1,previousComponent:e.lastComponent,added:!1,removed:!1});return f&&!l.oneChangePerToken&&(e.lastComponent={count:f,previousComponent:e.lastComponent,added:!1,removed:!1}),e.oldPos=r,c}equals(e,t,n){return n.comparator?n.comparator(e,t):e===t||!!n.ignoreCase&&e.toLowerCase()===t.toLowerCase()}removeEmpty(e){const t=[];for(let n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}castInput(e,t){return e}tokenize(e,t){return Array.from(e)}join(e){return e.join("")}postProcess(e,t){return e}get useLongestToken(){return!1}buildValues(e,t,n){const s=[];let l;for(;e;)s.push(e),l=e.previousComponent,delete e.previousComponent,e=l;s.reverse();const i=s.length;let a=0,r=0,c=0;for(;a<i;a++){const f=s[a];if(f.removed)f.value=this.join(n.slice(c,c+f.count)),c+=f.count;else{if(!f.added&&this.useLongestToken){let d=t.slice(r,r+f.count);d=d.map(function(m,x){const h=n[c+x];return h.length>m.length?h:m}),f.value=this.join(d)}else f.value=this.join(t.slice(r,r+f.count));r+=f.count,f.added||(c+=f.count)}}return s}}function Q(o,e){let t;for(t=0;t<o.length&&t<e.length;t++)if(o[t]!=e[t])return o.slice(0,t);return o.slice(0,t)}function X(o,e){let t;if(!o||!e||o[o.length-1]!=e[e.length-1])return"";for(t=0;t<o.length&&t<e.length;t++)if(o[o.length-(t+1)]!=e[e.length-(t+1)])return o.slice(-t);return o.slice(-t)}function j(o,e,t){if(o.slice(0,e.length)!=e)throw Error(`string ${JSON.stringify(o)} doesn't start with prefix ${JSON.stringify(e)}; this is a bug`);return t+o.slice(e.length)}function F(o,e,t){if(!e)return o+t;if(o.slice(-e.length)!=e)throw Error(`string ${JSON.stringify(o)} doesn't end with suffix ${JSON.stringify(e)}; this is a bug`);return o.slice(0,-e.length)+t}function M(o,e){return j(o,e,"")}function A(o,e){return F(o,e,"")}function Y(o,e){return e.slice(0,ge(o,e))}function ge(o,e){let t=0;o.length>e.length&&(t=o.length-e.length);let n=e.length;o.length<e.length&&(n=o.length);const s=Array(n);let l=0;s[0]=0;for(let i=1;i<n;i++){for(e[i]==e[l]?s[i]=s[l]:s[i]=l;l>0&&e[i]!=e[l];)l=s[l];e[i]==e[l]&&l++}l=0;for(let i=t;i<o.length;i++){for(;l>0&&o[i]!=e[l];)l=s[l];o[i]==e[l]&&l++}return l}function ae(o,e){const t=[];for(const n of Array.from(e.segment(o))){const s=n.segment;t.length&&/\s/.test(t[t.length-1])&&/\s/.test(s)?t[t.length-1]+=s:t.push(s)}return t}function q(o,e){if(e)return S(o,e)[1];let t;for(t=o.length-1;t>=0&&o[t].match(/\s/);t--);return o.substring(t+1)}function P(o,e){if(e)return S(o,e)[0];const t=o.match(/^\s*/);return t?t[0]:""}function S(o,e){if(!e)return[P(o),q(o)];if(e.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');const t=ae(o,e),n=t[0],s=t[t.length-1],l=/\s/.test(n)?n:"",i=/\s/.test(s)?s:"";return[l,i]}const K="a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",he=new RegExp(`[${K}]+|\\s+|[^${K}]`,"ug");class ve extends re{equals(e,t,n){return n.ignoreCase&&(e=e.toLowerCase(),t=t.toLowerCase()),e.trim()===t.trim()}tokenize(e,t={}){let n;if(t.intlSegmenter){const i=t.intlSegmenter;if(i.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');n=ae(e,i)}else n=e.match(he)||[];const s=[];let l=null;return n.forEach(i=>{/\s/.test(i)?l==null?s.push(i):s.push(s.pop()+i):l!=null&&/\s/.test(l)?s[s.length-1]==l?s.push(s.pop()+i):s.push(l+i):s.push(i),l=i}),s}join(e){return e.map((t,n)=>n==0?t:t.replace(/^\s+/,"")).join("")}postProcess(e,t){if(!e||t.oneChangePerToken)return e;let n=null,s=null,l=null;return e.forEach(i=>{i.added?s=i:i.removed?l=i:((s||l)&&ee(n,l,s,i,t.intlSegmenter),n=i,s=null,l=null)}),(s||l)&&ee(n,l,s,null,t.intlSegmenter),e}}const be=new ve;function we(o,e,t){return be.diff(o,e,t)}function ee(o,e,t,n,s){if(e&&t){const[l,i]=S(e.value,s),[a,r]=S(t.value,s);if(o){const c=Q(l,a);o.value=F(o.value,a,c),e.value=M(e.value,c),t.value=M(t.value,c)}if(n){const c=X(i,r);n.value=j(n.value,r,c),e.value=A(e.value,c),t.value=A(t.value,c)}}else if(t){if(o){const l=P(t.value,s);t.value=t.value.substring(l.length)}if(n){const l=P(n.value,s);n.value=n.value.substring(l.length)}}else if(o&&n){const l=P(n.value,s),[i,a]=S(e.value,s),r=Q(l,i);e.value=M(e.value,r);const c=X(M(l,r),a);e.value=A(e.value,c),n.value=j(n.value,l,c),o.value=F(o.value,l,l.slice(0,l.length-c.length))}else if(n){const l=P(n.value,s),i=q(e.value,s),a=Y(i,l);e.value=A(e.value,a)}else if(o){const l=q(o.value,s),i=P(e.value,s),a=Y(l,i);e.value=M(e.value,a)}}class Le extends re{constructor(){super(...arguments),this.tokenize=Ce}equals(e,t,n){return n.ignoreWhitespace?((!n.newlineIsToken||!e.includes(`
`))&&(e=e.trim()),(!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(e.endsWith(`
`)&&(e=e.slice(0,-1)),t.endsWith(`
`)&&(t=t.slice(0,-1))),super.equals(e,t,n)}}const ye=new Le;function Ee(o,e,t){return ye.diff(o,e,t)}function Ce(o,e){e.stripTrailingCr&&(o=o.replace(/\r\n/g,`
`));const t=[],n=o.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(let s=0;s<n.length;s++){const l=n[s];s%2&&!e.newlineIsToken?t[t.length-1]+=l:t.push(l)}return t}const Te=`// Original server configuration
const serverConfig = {
  port: 8080,
  host: "localhost",
  environment: "development",
  database: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3"
    },
    useNullAsDefault: true
  },
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  },
  features: {
    websockets: false,
    analytics: false,
    debugMode: true
  },
  maxConnections: 100,
  timeout: 5000
};

console.log("Server started on port: " + serverConfig.port);`,ke=`// Updated server configuration (Production)
const serverConfig = {
  port: 443,
  host: "api.mydomain.com",
  environment: "production",
  database: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: { min: 2, max: 10 }
  },
  cors: {
    origin: ["https://mydomain.com", "https://admin.mydomain.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  },
  features: {
    websockets: true,
    analytics: true,
    debugMode: false
  },
  maxConnections: 1000,
  timeout: 3000,
  ssl: {
    cert: "/etc/ssl/certs/server.crt",
    key: "/etc/ssl/private/server.key"
  }
};

console.log(\`Server for \${serverConfig.environment} running on port \${serverConfig.port}\`);`,z=document.getElementById("btn-view-side"),V=document.getElementById("btn-view-unified"),Ie=document.getElementById("btn-toggle-inputs"),te=document.getElementById("btn-toggle-inputs-icon"),ne=document.getElementById("btn-toggle-inputs-text"),I=document.getElementById("inputs-panel-wrapper"),_=document.getElementById("btn-load-example"),Pe=document.getElementById("btn-clear"),E=document.getElementById("text-input-left"),$=document.getElementById("text-input-right"),ce=document.getElementById("file-input-left"),fe=document.getElementById("file-input-right"),G=document.getElementById("file-name-left-container"),J=document.getElementById("file-name-right-container"),de=document.getElementById("file-name-left"),ue=document.getElementById("file-name-right"),H=document.getElementById("btn-copy-left"),N=document.getElementById("btn-copy-right"),oe=document.getElementById("stats-removed"),se=document.getElementById("stats-added"),O=document.getElementById("stats-no-changes"),pe=document.getElementById("diff-search"),le=document.getElementById("diff-output-headers");document.getElementById("diff-render-container");const b=document.getElementById("diff-output-pane"),$e=document.getElementById("drop-zone-left"),Be=document.getElementById("drop-zone-right");let Z="side",R=!1,p="";function g(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function U(o,e){const t=we(o,e);let n=0,s=0,l=0;for(const f of t)f.added?n+=f.value.length:f.removed?s+=f.value.length:l+=f.value.length;const i=Math.max(o.length,e.length);if((i>0?l/i:1)<.35)return{leftHTML:g(o),rightHTML:g(e)};let r="",c="";for(const f of t){const d=g(f.value);f.removed?r+=`<span class="bg-[rgba(248,81,73,0.4)] text-[#ff9e9a] rounded px-0.5 font-semibold">${d}</span>`:f.added?c+=`<span class="bg-[rgba(46,160,67,0.4)] text-[#acf2bd] rounded px-0.5 font-semibold">${d}</span>`:(r+=d,c+=d)}return{leftHTML:r,rightHTML:c}}function Me(o,e){let t;return function(...s){const l=()=>{clearTimeout(t),o(...s)};clearTimeout(t),t=setTimeout(l,e)}}function ie(o,e){const t=new FileReader;t.onload=n=>{const s=n.target?.result;e==="left"?(E.value=s,de.innerText=o.name,G.classList.remove("hidden")):($.value=s,ue.innerText=o.name,J.classList.remove("hidden")),C()},t.readAsText(o)}[{zone:$e,input:ce,side:"left"},{zone:Be,input:fe,side:"right"}].forEach(({zone:o,input:e,side:t})=>{e.addEventListener("change",n=>{const s=e.files?.[0];s&&ie(s,t)}),o.addEventListener("dragover",n=>{n.preventDefault(),o.classList.add("border-[#58a6ff]","bg-indigo-500/5")}),o.addEventListener("dragleave",()=>{o.classList.remove("border-[#58a6ff]","bg-indigo-500/5")}),o.addEventListener("drop",n=>{n.preventDefault(),o.classList.remove("border-[#58a6ff]","bg-indigo-500/5");const s=n.dataTransfer?.files?.[0];s&&ie(s,t)})});function C(){const o=E.value,e=$.value;if(!o&&!e){b.innerHTML=`
        <div class="p-8 text-center text-[#8b949e] italic">
          Introduce textos en los editores de arriba para ver las diferencias.
        </div>
      `,oe.innerText="0",se.innerText="0",O.classList.add("hidden");return}const t=Ee(o,e);let n=0,s=0;t.forEach(l=>{const i=l.value.split(`
`);i.length>0&&i[i.length-1]===""&&i.pop(),l.removed?n+=i.length:l.added&&(s+=i.length)}),oe.innerText=n.toString(),se.innerText=s.toString(),n===0&&s===0&&(o||e)?O.classList.remove("hidden"):O.classList.add("hidden"),Z==="side"?(le.classList.remove("hidden"),b.classList.add("min-w-[768px]"),b.classList.remove("w-full"),Se(t)):(le.classList.add("hidden"),b.classList.remove("min-w-[768px]"),b.classList.add("w-full"),We(t))}function Se(o){let e=1,t=1,n="";for(let s=0;s<o.length;s++){const l=o[s],i=o[s+1],a=l.value.split(`
`);if(a.length>0&&a[a.length-1]===""&&a.pop(),l.removed&&i&&i.added){const r=i.value.split(`
`);r.length>0&&r[r.length-1]===""&&r.pop();const c=Math.max(a.length,r.length);for(let f=0;f<c;f++){const d=f<a.length,m=f<r.length,x=d?a[f]:"",h=m?r[f]:"";let T=g(x),k=g(h);if(d&&m){const y=U(x,h);T=y.leftHTML,k=y.rightHTML}if(p){const y=x.toLowerCase().includes(p),D=h.toLowerCase().includes(p);if(!y&&!D)continue}const W=d?"bg-[#ffebe9]/10 text-[#ff7b72]":"bg-[#161b22]/20 opacity-30",u=m?"bg-[#e6ffec]/10 text-[#7ee787]":"bg-[#161b22]/20 opacity-30",v=d?"bg-[#ffebe9]/15 text-[#ff7b72]":"",w=m?"bg-[#e6ffec]/15 text-[#7ee787]":"",L=d?"text-[#ff7b72] font-semibold":"text-[#8b949e]/10",B=m?"text-[#7ee787] font-semibold":"text-[#8b949e]/10";n+=`
            <div class="flex w-full divide-x divide-[#30363d] hover:bg-[#161b22]/10">
              <!-- Left Cell -->
              <div class="flex-1 flex min-w-0 py-0.5 pr-2 ${W}">
                <span class="w-10 select-none text-right pr-3 text-[#8b949e] font-mono flex-shrink-0 ${v}">${d?e++:""}</span>
                <span class="w-4 select-none text-center font-mono flex-shrink-0 ${L}">${d?"-":""}</span>
                <pre class="flex-1 overflow-x-auto whitespace-pre font-mono scrollbar-none text-[#c9d1d9]">${T}</pre>
              </div>
              <!-- Right Cell -->
              <div class="flex-1 flex min-w-0 py-0.5 pr-2 ${u}">
                <span class="w-10 select-none text-right pr-3 pl-4 text-[#8b949e] font-mono flex-shrink-0 ${w}">${m?t++:""}</span>
                <span class="w-4 select-none text-center font-mono flex-shrink-0 ${B}">${m?"+":""}</span>
                <pre class="flex-1 overflow-x-auto whitespace-pre font-mono scrollbar-none text-[#c9d1d9]">${k}</pre>
              </div>
            </div>
          `}s++}else if(l.removed)for(const r of a)p&&!r.toLowerCase().includes(p)||(n+=`
            <div class="flex w-full divide-x divide-[#30363d] hover:bg-[#161b22]/10">
              <div class="flex-1 flex min-w-0 py-0.5 pr-2 bg-[#ffebe9]/10 text-[#ff7b72]">
                <span class="w-10 select-none text-right pr-3 text-[#ff7b72] bg-[#ffebe9]/15 font-mono flex-shrink-0">${e++}</span>
                <span class="w-4 select-none text-center text-[#ff7b72] font-semibold font-mono flex-shrink-0">-</span>
                <pre class="flex-1 overflow-x-auto whitespace-pre font-mono scrollbar-none text-[#c9d1d9]">${g(r)}</pre>
              </div>
              <div class="flex-1 flex min-w-0 py-0.5 pr-2 bg-[#161b22]/20 opacity-30">
                <span class="w-10 select-none text-right pr-3 pl-4 text-[#8b949e] font-mono flex-shrink-0"></span>
                <span class="w-4 select-none text-center text-[#8b949e]/10 font-mono flex-shrink-0"></span>
                <pre class="flex-1 overflow-x-auto whitespace-pre font-mono scrollbar-none text-[#c9d1d9]"></pre>
              </div>
            </div>
          `);else if(l.added)for(const r of a)p&&!r.toLowerCase().includes(p)||(n+=`
            <div class="flex w-full divide-x divide-[#30363d] hover:bg-[#161b22]/10">
              <div class="flex-1 flex min-w-0 py-0.5 pr-2 bg-[#161b22]/20 opacity-30">
                <span class="w-10 select-none text-right pr-3 text-[#8b949e] font-mono flex-shrink-0"></span>
                <span class="w-4 select-none text-center text-[#8b949e]/10 font-mono flex-shrink-0"></span>
                <pre class="flex-1 overflow-x-auto whitespace-pre font-mono scrollbar-none text-[#c9d1d9]"></pre>
              </div>
              <div class="flex-1 flex min-w-0 py-0.5 pr-2 bg-[#e6ffec]/10 text-[#7ee787]">
                <span class="w-10 select-none text-right pr-3 pl-4 text-[#7ee787] bg-[#e6ffec]/15 font-mono flex-shrink-0">${t++}</span>
                <span class="w-4 select-none text-center text-[#7ee787] font-semibold font-mono flex-shrink-0">+</span>
                <pre class="flex-1 overflow-x-auto whitespace-pre font-mono scrollbar-none text-[#c9d1d9]">${g(r)}</pre>
              </div>
            </div>
          `);else for(const r of a)p&&!r.toLowerCase().includes(p)||(n+=`
            <div class="flex w-full divide-x divide-[#30363d] hover:bg-[#161b22]/10">
              <div class="flex-1 flex min-w-0 py-0.5 pr-2 text-[#8b949e]">
                <span class="w-10 select-none text-right pr-3 text-[#8b949e] font-mono flex-shrink-0">${e++}</span>
                <span class="w-4 select-none text-center text-[#8b949e]/20 font-mono flex-shrink-0"></span>
                <pre class="flex-1 overflow-x-auto whitespace-pre font-mono scrollbar-none text-[#c9d1d9]">${g(r)}</pre>
              </div>
              <div class="flex-1 flex min-w-0 py-0.5 pr-2 text-[#8b949e]">
                <span class="w-10 select-none text-right pr-3 pl-4 text-[#8b949e] font-mono flex-shrink-0">${t++}</span>
                <span class="w-4 select-none text-center text-[#8b949e]/20 font-mono flex-shrink-0"></span>
                <pre class="flex-1 overflow-x-auto whitespace-pre font-mono scrollbar-none text-[#c9d1d9]">${g(r)}</pre>
              </div>
            </div>
          `)}n?b.innerHTML=n:b.innerHTML='<div class="p-8 text-center text-[#8b949e] italic">No se encontraron líneas que coincidan con la búsqueda.</div>'}function We(o){let e=1,t=1,n="";for(let s=0;s<o.length;s++){const l=o[s],i=o[s+1],a=l.value.split(`
`);if(a.length>0&&a[a.length-1]===""&&a.pop(),l.removed&&i&&i.added){const r=i.value.split(`
`);r.length>0&&r[r.length-1]===""&&r.pop();for(let c=0;c<a.length;c++){const f=a[c];if(p&&!f.toLowerCase().includes(p))continue;let d=g(f);c<r.length&&(d=U(f,r[c]).leftHTML),n+=`
            <div class="flex w-full py-0.5 pr-2 bg-[#ffebe9]/10 text-[#ff7b72] border-l-2 border-[#ff7b72]/50 hover:bg-[#ffebe9]/15">
              <span class="w-10 select-none text-right pr-3 text-[#ff7b72] bg-[#ffebe9]/15 font-mono flex-shrink-0">${e++}</span>
              <span class="w-10 select-none text-right pr-3 text-[#8b949e]/10 font-mono flex-shrink-0"></span>
              <span class="w-4 select-none text-center text-[#ff7b72] font-semibold font-mono flex-shrink-0">-</span>
              <pre class="flex-1 overflow-x-auto whitespace-pre font-mono scrollbar-none text-[#c9d1d9]">${d}</pre>
            </div>
          `}for(let c=0;c<r.length;c++){const f=r[c];if(p&&!f.toLowerCase().includes(p))continue;let d=g(f);c<a.length&&(d=U(a[c],f).rightHTML),n+=`
            <div class="flex w-full py-0.5 pr-2 bg-[#e6ffec]/10 text-[#7ee787] border-l-2 border-[#7ee787]/50 hover:bg-[#e6ffec]/15">
              <span class="w-10 select-none text-right pr-3 text-[#8b949e]/10 font-mono flex-shrink-0"></span>
              <span class="w-10 select-none text-right pr-3 text-[#7ee787] bg-[#e6ffec]/15 font-mono flex-shrink-0">${t++}</span>
              <span class="w-4 select-none text-center text-[#7ee787] font-semibold font-mono flex-shrink-0">+</span>
              <pre class="flex-1 overflow-x-auto whitespace-pre font-mono scrollbar-none text-[#c9d1d9]">${d}</pre>
            </div>
          `}s++}else if(l.removed)for(const r of a)p&&!r.toLowerCase().includes(p)||(n+=`
            <div class="flex w-full py-0.5 pr-2 bg-[#ffebe9]/10 text-[#ff7b72] border-l-2 border-[#ff7b72]/50 hover:bg-[#ffebe9]/15">
              <span class="w-10 select-none text-right pr-3 text-[#ff7b72] bg-[#ffebe9]/15 font-mono flex-shrink-0">${e++}</span>
              <span class="w-10 select-none text-right pr-3 text-[#8b949e]/10 font-mono flex-shrink-0"></span>
              <span class="w-4 select-none text-center text-[#ff7b72] font-semibold font-mono flex-shrink-0">-</span>
              <pre class="flex-1 overflow-x-auto whitespace-pre font-mono scrollbar-none text-[#c9d1d9]">${g(r)}</pre>
            </div>
          `);else if(l.added)for(const r of a)p&&!r.toLowerCase().includes(p)||(n+=`
            <div class="flex w-full py-0.5 pr-2 bg-[#e6ffec]/10 text-[#7ee787] border-l-2 border-[#7ee787]/50 hover:bg-[#e6ffec]/15">
              <span class="w-10 select-none text-right pr-3 text-[#8b949e]/10 font-mono flex-shrink-0"></span>
              <span class="w-10 select-none text-right pr-3 text-[#7ee787] bg-[#e6ffec]/15 font-mono flex-shrink-0">${t++}</span>
              <span class="w-4 select-none text-center text-[#7ee787] font-semibold font-mono flex-shrink-0">+</span>
              <pre class="flex-1 overflow-x-auto whitespace-pre font-mono scrollbar-none text-[#c9d1d9]">${g(r)}</pre>
            </div>
          `);else for(const r of a)p&&!r.toLowerCase().includes(p)||(n+=`
            <div class="flex w-full py-0.5 pr-2 text-[#8b949e] hover:bg-[#161b22]/10">
              <span class="w-10 select-none text-right pr-3 text-[#8b949e] font-mono flex-shrink-0">${e++}</span>
              <span class="w-10 select-none text-right pr-3 text-[#8b949e] font-mono flex-shrink-0">${t++}</span>
              <span class="w-4 select-none text-center text-[#8b949e]/20 font-mono flex-shrink-0"></span>
              <pre class="flex-1 overflow-x-auto whitespace-pre font-mono scrollbar-none text-[#c9d1d9]">${g(r)}</pre>
            </div>
          `)}n?b.innerHTML=n:b.innerHTML='<div class="p-8 text-center text-[#8b949e] italic">No matching lines found.</div>'}const me=Me(C,150);E.addEventListener("input",me);$.addEventListener("input",me);pe.addEventListener("input",o=>{p=o.target.value.toLowerCase(),C()});function xe(o,e){o.className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 sm:px-4 text-xs sm:text-sm font-semibold transition-all duration-200 bg-[#21262d] text-[#c9d1d9] border border-[#8b949e]/40 shadow-sm",e.className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 sm:px-4 text-xs sm:text-sm font-medium text-[#8b949e] hover:text-[#c9d1d9] bg-transparent border-0 transition-all duration-200"}z.addEventListener("click",()=>{Z="side",xe(z,V),C()});V.addEventListener("click",()=>{Z="unified",xe(V,z),C()});Ie.addEventListener("click",()=>{R=!R,R?(I.style.gridTemplateRows="0fr",I.style.opacity="0",I.style.marginBottom="0px",ne.innerText="Show Inputs",te.setAttribute("d","M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M3 3l18 18")):(I.style.gridTemplateRows="1fr",I.style.opacity="1",I.style.marginBottom="24px",ne.innerText="Hide Inputs",te.setAttribute("d","M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"))});H.addEventListener("click",()=>{navigator.clipboard.writeText(E.value),H.innerText="Copied!",setTimeout(()=>{H.innerText="Copy"},2e3)});N.addEventListener("click",()=>{navigator.clipboard.writeText($.value),N.innerText="Copied!",setTimeout(()=>{N.innerText="Copy"},2e3)});Pe.addEventListener("click",()=>{E.value="",$.value="",ce.value="",fe.value="",G.classList.add("hidden"),J.classList.add("hidden"),pe.value="",p="",C(),E.focus()});_.addEventListener("click",()=>{E.value=Te,$.value=ke,de.innerText="config_original.js",G.classList.remove("hidden"),ue.innerText="config_production.js",J.classList.remove("hidden"),C()});document.readyState==="loading"?window.addEventListener("DOMContentLoaded",()=>{_.click()}):_.click();
