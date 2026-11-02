class he{diff(e,t,n={}){let s;typeof n=="function"?(s=n,n={}):"callback"in n&&(s=n.callback);const l=this.castInput(e,n),i=this.castInput(t,n),a=this.removeEmpty(this.tokenize(l,n)),r=this.removeEmpty(this.tokenize(i,n));return this.diffWithOptionsObj(a,r,n,s)}diffWithOptionsObj(e,t,n,s){var l;const i=u=>{if(u=this.postProcess(u,n),s){setTimeout(function(){s(u)},0);return}else return u},a=t.length,r=e.length;let c=1,f=a+r;n.maxEditLength!=null&&(f=Math.min(f,n.maxEditLength));const d=(l=n.timeout)!==null&&l!==void 0?l:1/0,m=Date.now()+d,g=[{oldPos:-1,lastComponent:void 0}];let x=this.extractCommon(g[0],t,e,0,n);if(g[0].oldPos+1>=r&&x+1>=a)return i(this.buildValues(g[0].lastComponent,t,e));let P=-1/0,$=1/0;const H=()=>{for(let u=Math.max(P,-c);u<=Math.min($,c);u+=2){let w;const T=g[u-1],k=g[u+1];T&&(g[u-1]=void 0);let S=!1;if(k){const O=k.oldPos-u;S=k&&0<=O&&O<a}const I=T&&T.oldPos+1<r;if(!S&&!I){g[u]=void 0;continue}if(!I||S&&T.oldPos<k.oldPos?w=this.addToPath(k,!0,!1,0,n):w=this.addToPath(T,!1,!0,1,n),x=this.extractCommon(w,t,e,u,n),w.oldPos+1>=r&&x+1>=a)return i(this.buildValues(w.lastComponent,t,e))||!0;g[u]=w,w.oldPos+1>=r&&($=Math.min($,u-1)),x+1>=a&&(P=Math.max(P,u+1))}c++};if(s)(function u(){setTimeout(function(){if(c>f||Date.now()>m)return s(void 0);H()||u()},0)})();else for(;c<=f&&Date.now()<=m;){const u=H();if(u)return u}}addToPath(e,t,n,s,l){const i=e.lastComponent;return i&&!l.oneChangePerToken&&i.added===t&&i.removed===n?{oldPos:e.oldPos+s,lastComponent:{count:i.count+1,added:t,removed:n,previousComponent:i.previousComponent}}:{oldPos:e.oldPos+s,lastComponent:{count:1,added:t,removed:n,previousComponent:i}}}extractCommon(e,t,n,s,l){const i=t.length,a=n.length;let r=e.oldPos,c=r-s,f=0;for(;c+1<i&&r+1<a&&this.equals(n[r+1],t[c+1],l);)c++,r++,f++,l.oneChangePerToken&&(e.lastComponent={count:1,previousComponent:e.lastComponent,added:!1,removed:!1});return f&&!l.oneChangePerToken&&(e.lastComponent={count:f,previousComponent:e.lastComponent,added:!1,removed:!1}),e.oldPos=r,c}equals(e,t,n){return n.comparator?n.comparator(e,t):e===t||!!n.ignoreCase&&e.toLowerCase()===t.toLowerCase()}removeEmpty(e){const t=[];for(let n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}castInput(e,t){return e}tokenize(e,t){return Array.from(e)}join(e){return e.join("")}postProcess(e,t){return e}get useLongestToken(){return!1}buildValues(e,t,n){const s=[];let l;for(;e;)s.push(e),l=e.previousComponent,delete e.previousComponent,e=l;s.reverse();const i=s.length;let a=0,r=0,c=0;for(;a<i;a++){const f=s[a];if(f.removed)f.value=this.join(n.slice(c,c+f.count)),c+=f.count;else{if(!f.added&&this.useLongestToken){let d=t.slice(r,r+f.count);d=d.map(function(m,g){const x=n[c+g];return x.length>m.length?x:m}),f.value=this.join(d)}else f.value=this.join(t.slice(r,r+f.count));r+=f.count,f.added||(c+=f.count)}}return s}}function se(o,e){let t;for(t=0;t<o.length&&t<e.length;t++)if(o[t]!=e[t])return o.slice(0,t);return o.slice(0,t)}function le(o,e){let t;if(!o||!e||o[o.length-1]!=e[e.length-1])return"";for(t=0;t<o.length&&t<e.length;t++)if(o[o.length-(t+1)]!=e[e.length-(t+1)])return o.slice(-t);return o.slice(-t)}function G(o,e,t){if(o.slice(0,e.length)!=e)throw Error(`string ${JSON.stringify(o)} doesn't start with prefix ${JSON.stringify(e)}; this is a bug`);return t+o.slice(e.length)}function U(o,e,t){if(!e)return o+t;if(o.slice(-e.length)!=e)throw Error(`string ${JSON.stringify(o)} doesn't end with suffix ${JSON.stringify(e)}; this is a bug`);return o.slice(0,-e.length)+t}function W(o,e){return G(o,e,"")}function R(o,e){return U(o,e,"")}function ie(o,e){return e.slice(0,Ce(o,e))}function Ce(o,e){let t=0;o.length>e.length&&(t=o.length-e.length);let n=e.length;o.length<e.length&&(n=o.length);const s=Array(n);let l=0;s[0]=0;for(let i=1;i<n;i++){for(e[i]==e[l]?s[i]=s[l]:s[i]=l;l>0&&e[i]!=e[l];)l=s[l];e[i]==e[l]&&l++}l=0;for(let i=t;i<o.length;i++){for(;l>0&&o[i]!=e[l];)l=s[l];o[i]==e[l]&&l++}return l}function xe(o,e){const t=[];for(const n of Array.from(e.segment(o))){const s=n.segment;t.length&&/\s/.test(t[t.length-1])&&/\s/.test(s)?t[t.length-1]+=s:t.push(s)}return t}function J(o,e){if(e)return D(o,e)[1];let t;for(t=o.length-1;t>=0&&o[t].match(/\s/);t--);return o.substring(t+1)}function M(o,e){if(e)return D(o,e)[0];const t=o.match(/^\s*/);return t?t[0]:""}function D(o,e){if(!e)return[M(o),J(o)];if(e.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');const t=xe(o,e),n=t[0],s=t[t.length-1],l=/\s/.test(n)?n:"",i=/\s/.test(s)?s:"";return[l,i]}const re="a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",Te=new RegExp(`[${re}]+|\\s+|[^${re}]`,"ug");class ke extends he{equals(e,t,n){return n.ignoreCase&&(e=e.toLowerCase(),t=t.toLowerCase()),e.trim()===t.trim()}tokenize(e,t={}){let n;if(t.intlSegmenter){const i=t.intlSegmenter;if(i.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');n=xe(e,i)}else n=e.match(Te)||[];const s=[];let l=null;return n.forEach(i=>{/\s/.test(i)?l==null?s.push(i):s.push(s.pop()+i):l!=null&&/\s/.test(l)?s[s.length-1]==l?s.push(s.pop()+i):s.push(l+i):s.push(i),l=i}),s}join(e){return e.map((t,n)=>n==0?t:t.replace(/^\s+/,"")).join("")}postProcess(e,t){if(!e||t.oneChangePerToken)return e;let n=null,s=null,l=null;return e.forEach(i=>{i.added?s=i:i.removed?l=i:((s||l)&&ae(n,l,s,i,t.intlSegmenter),n=i,s=null,l=null)}),(s||l)&&ae(n,l,s,null,t.intlSegmenter),e}}const Ie=new ke;function Pe(o,e,t){return Ie.diff(o,e,t)}function ae(o,e,t,n,s){if(e&&t){const[l,i]=D(e.value,s),[a,r]=D(t.value,s);if(o){const c=se(l,a);o.value=U(o.value,a,c),e.value=W(e.value,c),t.value=W(t.value,c)}if(n){const c=le(i,r);n.value=G(n.value,r,c),e.value=R(e.value,c),t.value=R(t.value,c)}}else if(t){if(o){const l=M(t.value,s);t.value=t.value.substring(l.length)}if(n){const l=M(n.value,s);n.value=n.value.substring(l.length)}}else if(o&&n){const l=M(n.value,s),[i,a]=D(e.value,s),r=se(l,i);e.value=W(e.value,r);const c=le(W(l,r),a);e.value=R(e.value,c),n.value=G(n.value,l,c),o.value=U(o.value,l,l.slice(0,l.length-c.length))}else if(n){const l=M(n.value,s),i=J(e.value,s),a=ie(i,l);e.value=R(e.value,a)}else if(o){const l=J(o.value,s),i=M(e.value,s),a=ie(l,i);e.value=W(e.value,a)}}class $e extends he{constructor(){super(...arguments),this.tokenize=Se}equals(e,t,n){return n.ignoreWhitespace?((!n.newlineIsToken||!e.includes(`
`))&&(e=e.trim()),(!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(e.endsWith(`
`)&&(e=e.slice(0,-1)),t.endsWith(`
`)&&(t=t.slice(0,-1))),super.equals(e,t,n)}}const Be=new $e;function Me(o,e,t){return Be.diff(o,e,t)}function Se(o,e){e.stripTrailingCr&&(o=o.replace(/\r\n/g,`
`));const t=[],n=o.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(let s=0;s<n.length;s++){const l=n[s];s%2&&!e.newlineIsToken?t[t.length-1]+=l:t.push(l)}return t}const We=`// Original server configuration
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

console.log("Server started on port: " + serverConfig.port);`,De=`// Updated server configuration (Production)
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

console.log(\`Server for \${serverConfig.environment} running on port \${serverConfig.port}\`);`,Z=document.getElementById("btn-view-side"),Q=document.getElementById("btn-view-unified"),Ae=document.getElementById("btn-toggle-inputs"),ce=document.getElementById("btn-toggle-inputs-icon"),fe=document.getElementById("btn-toggle-inputs-text"),B=document.getElementById("inputs-panel-wrapper"),X=document.getElementById("btn-load-example"),Ne=document.getElementById("btn-clear"),He=document.getElementById("btn-swap"),L=document.getElementById("text-input-left"),E=document.getElementById("text-input-right"),ee=document.getElementById("file-input-left"),te=document.getElementById("file-input-right"),A=document.getElementById("file-name-left-container"),N=document.getElementById("file-name-right-container"),j=document.getElementById("file-name-left"),q=document.getElementById("file-name-right"),F=document.getElementById("btn-copy-left"),z=document.getElementById("btn-copy-right"),de=document.getElementById("stats-removed"),ue=document.getElementById("stats-added"),V=document.getElementById("stats-no-changes"),ve=document.getElementById("diff-search"),pe=document.getElementById("diff-output-headers"),Oe=document.getElementById("diff-render-container"),v=document.getElementById("diff-output-pane"),Y=document.getElementById("change-map"),be=document.getElementById("change-position"),we=document.getElementById("change-previous"),Le=document.getElementById("change-next");let b=[],y=-1;function me(){const o=Array.from(v.children);b=o.filter(e=>e.querySelector('[class*="bg-[#ffebe9]"], [class*="bg-[#e6ffec]"]')||e.className.includes("bg-[#ffebe9]")||e.className.includes("bg-[#e6ffec]")),y=-1,Y.replaceChildren(),b.forEach((e,t)=>{const n=document.createElement("button");n.type="button",n.className=`change-marker ${e.className.includes("bg-[#ffebe9]")||e.querySelector('[class*="bg-[#ffebe9]"]')?"is-removed":"is-added"}`,n.style.left=`${o.indexOf(e)/Math.max(o.length-1,1)*100}%`,n.setAttribute("aria-label",`Go to change ${t+1}`),n.title=`Change ${t+1}`,n.addEventListener("click",()=>ne(t)),Y.appendChild(n)}),we.disabled=Le.disabled=b.length===0,be.textContent=`0 / ${b.length}`}function ne(o){if(!b.length)return;y=(o+b.length)%b.length;const e=b[y];Oe.scrollTo({top:e.offsetTop-v.offsetTop,behavior:"smooth"}),be.textContent=`${y+1} / ${b.length}`,Y.querySelectorAll("button").forEach((t,n)=>t.classList.toggle("is-active",n===y))}we.addEventListener("click",()=>ne(y<0?b.length-1:y-1));Le.addEventListener("click",()=>ne(y+1));const Re=document.getElementById("drop-zone-left"),je=document.getElementById("drop-zone-right");let oe="side",_=!1,p="";function h(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function K(o,e){const t=Pe(o,e);let n=0,s=0,l=0;for(const f of t)f.added?n+=f.value.length:f.removed?s+=f.value.length:l+=f.value.length;const i=Math.max(o.length,e.length);if((i>0?l/i:1)<.35)return{leftHTML:h(o),rightHTML:h(e)};let r="",c="";for(const f of t){const d=h(f.value);f.removed?r+=`<span class="bg-[rgba(248,81,73,0.4)] text-[#ff9e9a] rounded px-0.5 font-semibold">${d}</span>`:f.added?c+=`<span class="bg-[rgba(46,160,67,0.4)] text-[#acf2bd] rounded px-0.5 font-semibold">${d}</span>`:(r+=d,c+=d)}return{leftHTML:r,rightHTML:c}}function qe(o,e){let t;return function(...s){const l=()=>{clearTimeout(t),o(...s)};clearTimeout(t),t=setTimeout(l,e)}}function ge(o,e){const t=new FileReader;t.onload=n=>{const s=n.target?.result;e==="left"?(L.value=s,j.innerText=o.name,A.classList.remove("hidden")):(E.value=s,q.innerText=o.name,N.classList.remove("hidden")),C()},t.readAsText(o)}[{zone:Re,input:ee,side:"left"},{zone:je,input:te,side:"right"}].forEach(({zone:o,input:e,side:t})=>{e.addEventListener("change",n=>{const s=e.files?.[0];s&&ge(s,t)}),o.addEventListener("dragover",n=>{n.preventDefault(),o.classList.add("border-[#58a6ff]","bg-indigo-500/5")}),o.addEventListener("dragleave",()=>{o.classList.remove("border-[#58a6ff]","bg-indigo-500/5")}),o.addEventListener("drop",n=>{n.preventDefault(),o.classList.remove("border-[#58a6ff]","bg-indigo-500/5");const s=n.dataTransfer?.files?.[0];s&&ge(s,t)})});function C(){const o=L.value,e=E.value;if(!o&&!e){v.innerHTML=`
        <div class="p-8 text-center text-[#8b949e] italic">
          Introduce textos en los editores de arriba para ver las diferencias.
        </div>
      `,de.innerText="0",ue.innerText="0",V.classList.add("hidden"),me();return}const t=Me(o,e);let n=0,s=0;t.forEach(l=>{const i=l.value.split(`
`);i.length>0&&i[i.length-1]===""&&i.pop(),l.removed?n+=i.length:l.added&&(s+=i.length)}),de.innerText=n.toString(),ue.innerText=s.toString(),n===0&&s===0&&(o||e)?V.classList.remove("hidden"):V.classList.add("hidden"),oe==="side"?(pe.classList.remove("hidden"),v.classList.add("min-w-[768px]"),v.classList.remove("w-full"),Fe(t)):(pe.classList.add("hidden"),v.classList.remove("min-w-[768px]"),v.classList.add("w-full"),ze(t)),me()}function Fe(o){let e=1,t=1,n="";for(let s=0;s<o.length;s++){const l=o[s],i=o[s+1],a=l.value.split(`
`);if(a.length>0&&a[a.length-1]===""&&a.pop(),l.removed&&i&&i.added){const r=i.value.split(`
`);r.length>0&&r[r.length-1]===""&&r.pop();const c=Math.max(a.length,r.length);for(let f=0;f<c;f++){const d=f<a.length,m=f<r.length,g=d?a[f]:"",x=m?r[f]:"";let P=h(g),$=h(x);if(d&&m){const I=K(g,x);P=I.leftHTML,$=I.rightHTML}if(p){const I=g.toLowerCase().includes(p),O=x.toLowerCase().includes(p);if(!I&&!O){d&&e++,m&&t++;continue}}const H=d?"bg-[#ffebe9]/10 text-[#ff7b72]":"bg-[#161b22]/20 opacity-30",u=m?"bg-[#e6ffec]/10 text-[#7ee787]":"bg-[#161b22]/20 opacity-30",w=d?"bg-[#ffebe9]/15 text-[#ff7b72]":"",T=m?"bg-[#e6ffec]/15 text-[#7ee787]":"",k=d?"text-[#ff7b72] font-semibold":"text-[#8b949e]/10",S=m?"text-[#7ee787] font-semibold":"text-[#8b949e]/10";n+=`
            <div class="flex w-full divide-x divide-[#30363d] hover:bg-[#161b22]/10">
              <!-- Left Cell -->
              <div class="flex-1 flex min-w-0 py-0.5 pr-2 ${H}">
                <span class="w-10 select-none text-right pr-3 text-[#8b949e] font-mono flex-shrink-0 ${w}">${d?e++:""}</span>
                <span class="w-4 select-none text-center font-mono flex-shrink-0 ${k}">${d?"-":""}</span>
                <pre class="flex-1 overflow-x-auto whitespace-pre font-mono scrollbar-none text-[#c9d1d9]">${P}</pre>
              </div>
              <!-- Right Cell -->
              <div class="flex-1 flex min-w-0 py-0.5 pr-2 ${u}">
                <span class="w-10 select-none text-right pr-3 pl-4 text-[#8b949e] font-mono flex-shrink-0 ${T}">${m?t++:""}</span>
                <span class="w-4 select-none text-center font-mono flex-shrink-0 ${S}">${m?"+":""}</span>
                <pre class="flex-1 overflow-x-auto whitespace-pre font-mono scrollbar-none text-[#c9d1d9]">${$}</pre>
              </div>
            </div>
          `}s++}else if(l.removed)for(const r of a){if(p&&!r.toLowerCase().includes(p)){e++;continue}n+=`
            <div class="flex w-full divide-x divide-[#30363d] hover:bg-[#161b22]/10">
              <div class="flex-1 flex min-w-0 py-0.5 pr-2 bg-[#ffebe9]/10 text-[#ff7b72]">
                <span class="w-10 select-none text-right pr-3 text-[#ff7b72] bg-[#ffebe9]/15 font-mono flex-shrink-0">${e++}</span>
                <span class="w-4 select-none text-center text-[#ff7b72] font-semibold font-mono flex-shrink-0">-</span>
                <pre class="flex-1 overflow-x-auto whitespace-pre font-mono scrollbar-none text-[#c9d1d9]">${h(r)}</pre>
              </div>
              <div class="flex-1 flex min-w-0 py-0.5 pr-2 bg-[#161b22]/20 opacity-30">
                <span class="w-10 select-none text-right pr-3 pl-4 text-[#8b949e] font-mono flex-shrink-0"></span>
                <span class="w-4 select-none text-center text-[#8b949e]/10 font-mono flex-shrink-0"></span>
                <pre class="flex-1 overflow-x-auto whitespace-pre font-mono scrollbar-none text-[#c9d1d9]"></pre>
              </div>
            </div>
          `}else if(l.added)for(const r of a){if(p&&!r.toLowerCase().includes(p)){t++;continue}n+=`
            <div class="flex w-full divide-x divide-[#30363d] hover:bg-[#161b22]/10">
              <div class="flex-1 flex min-w-0 py-0.5 pr-2 bg-[#161b22]/20 opacity-30">
                <span class="w-10 select-none text-right pr-3 text-[#8b949e] font-mono flex-shrink-0"></span>
                <span class="w-4 select-none text-center text-[#8b949e]/10 font-mono flex-shrink-0"></span>
                <pre class="flex-1 overflow-x-auto whitespace-pre font-mono scrollbar-none text-[#c9d1d9]"></pre>
              </div>
              <div class="flex-1 flex min-w-0 py-0.5 pr-2 bg-[#e6ffec]/10 text-[#7ee787]">
                <span class="w-10 select-none text-right pr-3 pl-4 text-[#7ee787] bg-[#e6ffec]/15 font-mono flex-shrink-0">${t++}</span>
                <span class="w-4 select-none text-center text-[#7ee787] font-semibold font-mono flex-shrink-0">+</span>
                <pre class="flex-1 overflow-x-auto whitespace-pre font-mono scrollbar-none text-[#c9d1d9]">${h(r)}</pre>
              </div>
            </div>
          `}else for(const r of a){if(p&&!r.toLowerCase().includes(p)){e++,t++;continue}n+=`
            <div class="flex w-full divide-x divide-[#30363d] hover:bg-[#161b22]/10">
              <div class="flex-1 flex min-w-0 py-0.5 pr-2 text-[#8b949e]">
                <span class="w-10 select-none text-right pr-3 text-[#8b949e] font-mono flex-shrink-0">${e++}</span>
                <span class="w-4 select-none text-center text-[#8b949e]/20 font-mono flex-shrink-0"></span>
                <pre class="flex-1 overflow-x-auto whitespace-pre font-mono scrollbar-none text-[#c9d1d9]">${h(r)}</pre>
              </div>
              <div class="flex-1 flex min-w-0 py-0.5 pr-2 text-[#8b949e]">
                <span class="w-10 select-none text-right pr-3 pl-4 text-[#8b949e] font-mono flex-shrink-0">${t++}</span>
                <span class="w-4 select-none text-center text-[#8b949e]/20 font-mono flex-shrink-0"></span>
                <pre class="flex-1 overflow-x-auto whitespace-pre font-mono scrollbar-none text-[#c9d1d9]">${h(r)}</pre>
              </div>
            </div>
          `}}n?v.innerHTML=n:v.innerHTML='<div class="p-8 text-center text-[#8b949e] italic">No se encontraron líneas que coincidan con la búsqueda.</div>'}function ze(o){let e=1,t=1,n="";for(let s=0;s<o.length;s++){const l=o[s],i=o[s+1],a=l.value.split(`
`);if(a.length>0&&a[a.length-1]===""&&a.pop(),l.removed&&i&&i.added){const r=i.value.split(`
`);r.length>0&&r[r.length-1]===""&&r.pop();for(let c=0;c<a.length;c++){const f=a[c];if(p&&!f.toLowerCase().includes(p)){e++;continue}let d=h(f);c<r.length&&(d=K(f,r[c]).leftHTML),n+=`
            <div class="flex w-full py-0.5 pr-2 bg-[#ffebe9]/10 text-[#ff7b72] border-l-2 border-[#ff7b72]/50 hover:bg-[#ffebe9]/15">
              <span class="w-10 select-none text-right pr-3 text-[#ff7b72] bg-[#ffebe9]/15 font-mono flex-shrink-0">${e++}</span>
              <span class="w-10 select-none text-right pr-3 text-[#8b949e]/10 font-mono flex-shrink-0"></span>
              <span class="w-4 select-none text-center text-[#ff7b72] font-semibold font-mono flex-shrink-0">-</span>
              <pre class="flex-1 overflow-x-auto whitespace-pre font-mono scrollbar-none text-[#c9d1d9]">${d}</pre>
            </div>
          `}for(let c=0;c<r.length;c++){const f=r[c];if(p&&!f.toLowerCase().includes(p)){t++;continue}let d=h(f);c<a.length&&(d=K(a[c],f).rightHTML),n+=`
            <div class="flex w-full py-0.5 pr-2 bg-[#e6ffec]/10 text-[#7ee787] border-l-2 border-[#7ee787]/50 hover:bg-[#e6ffec]/15">
              <span class="w-10 select-none text-right pr-3 text-[#8b949e]/10 font-mono flex-shrink-0"></span>
              <span class="w-10 select-none text-right pr-3 text-[#7ee787] bg-[#e6ffec]/15 font-mono flex-shrink-0">${t++}</span>
              <span class="w-4 select-none text-center text-[#7ee787] font-semibold font-mono flex-shrink-0">+</span>
              <pre class="flex-1 overflow-x-auto whitespace-pre font-mono scrollbar-none text-[#c9d1d9]">${d}</pre>
            </div>
          `}s++}else if(l.removed)for(const r of a){if(p&&!r.toLowerCase().includes(p)){e++;continue}n+=`
            <div class="flex w-full py-0.5 pr-2 bg-[#ffebe9]/10 text-[#ff7b72] border-l-2 border-[#ff7b72]/50 hover:bg-[#ffebe9]/15">
              <span class="w-10 select-none text-right pr-3 text-[#ff7b72] bg-[#ffebe9]/15 font-mono flex-shrink-0">${e++}</span>
              <span class="w-10 select-none text-right pr-3 text-[#8b949e]/10 font-mono flex-shrink-0"></span>
              <span class="w-4 select-none text-center text-[#ff7b72] font-semibold font-mono flex-shrink-0">-</span>
              <pre class="flex-1 overflow-x-auto whitespace-pre font-mono scrollbar-none text-[#c9d1d9]">${h(r)}</pre>
            </div>
          `}else if(l.added)for(const r of a){if(p&&!r.toLowerCase().includes(p)){t++;continue}n+=`
            <div class="flex w-full py-0.5 pr-2 bg-[#e6ffec]/10 text-[#7ee787] border-l-2 border-[#7ee787]/50 hover:bg-[#e6ffec]/15">
              <span class="w-10 select-none text-right pr-3 text-[#8b949e]/10 font-mono flex-shrink-0"></span>
              <span class="w-10 select-none text-right pr-3 text-[#7ee787] bg-[#e6ffec]/15 font-mono flex-shrink-0">${t++}</span>
              <span class="w-4 select-none text-center text-[#7ee787] font-semibold font-mono flex-shrink-0">+</span>
              <pre class="flex-1 overflow-x-auto whitespace-pre font-mono scrollbar-none text-[#c9d1d9]">${h(r)}</pre>
            </div>
          `}else for(const r of a){if(p&&!r.toLowerCase().includes(p)){e++,t++;continue}n+=`
            <div class="flex w-full py-0.5 pr-2 text-[#8b949e] hover:bg-[#161b22]/10">
              <span class="w-10 select-none text-right pr-3 text-[#8b949e] font-mono flex-shrink-0">${e++}</span>
              <span class="w-10 select-none text-right pr-3 text-[#8b949e] font-mono flex-shrink-0">${t++}</span>
              <span class="w-4 select-none text-center text-[#8b949e]/20 font-mono flex-shrink-0"></span>
              <pre class="flex-1 overflow-x-auto whitespace-pre font-mono scrollbar-none text-[#c9d1d9]">${h(r)}</pre>
            </div>
          `}}n?v.innerHTML=n:v.innerHTML='<div class="p-8 text-center text-[#8b949e] italic">No matching lines found.</div>'}const ye=qe(C,150);L.addEventListener("input",ye);E.addEventListener("input",ye);ve.addEventListener("input",o=>{p=o.target.value.toLowerCase(),C()});function Ee(o,e){o.className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 sm:px-4 text-xs sm:text-sm font-semibold transition-all duration-200 bg-[#21262d] text-[#c9d1d9] border border-[#8b949e]/40 shadow-sm",e.className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 sm:px-4 text-xs sm:text-sm font-medium text-[#8b949e] hover:text-[#c9d1d9] bg-transparent border-0 transition-all duration-200"}Z.addEventListener("click",()=>{oe="side",Ee(Z,Q),C()});Q.addEventListener("click",()=>{oe="unified",Ee(Q,Z),C()});Ae.addEventListener("click",()=>{_=!_,_?(B.style.gridTemplateRows="0fr",B.style.opacity="0",B.style.marginBottom="0px",fe.innerText="Show Inputs",ce.setAttribute("d","M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M3 3l18 18")):(B.style.gridTemplateRows="1fr",B.style.opacity="1",B.style.marginBottom="24px",fe.innerText="Hide Inputs",ce.setAttribute("d","M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"))});F.addEventListener("click",()=>{navigator.clipboard.writeText(L.value),F.innerText="Copied!",setTimeout(()=>{F.innerText="Copy"},2e3)});z.addEventListener("click",()=>{navigator.clipboard.writeText(E.value),z.innerText="Copied!",setTimeout(()=>{z.innerText="Copy"},2e3)});He.addEventListener("click",()=>{[L.value,E.value]=[E.value,L.value],[j.innerText,q.innerText]=[q.innerText,j.innerText];const o=A.classList.contains("hidden");A.classList.toggle("hidden",N.classList.contains("hidden")),N.classList.toggle("hidden",o),ee.value="",te.value="",C()});Ne.addEventListener("click",()=>{L.value="",E.value="",ee.value="",te.value="",A.classList.add("hidden"),N.classList.add("hidden"),ve.value="",p="",C(),L.focus()});X.addEventListener("click",()=>{L.value=We,E.value=De,j.innerText="config_original.js",A.classList.remove("hidden"),q.innerText="config_production.js",N.classList.remove("hidden"),C()});document.readyState==="loading"?window.addEventListener("DOMContentLoaded",()=>{X.click()}):X.click();
