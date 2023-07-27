import{r as l,R as m,v as we,o as te,A as Se,D as Ee,S as re,E as k,H as Te,I as V,J,K as Ce,M as _e,N as xe,O as W,Q as Oe,V as b,W as Ae,X as se,Y as Ie,Z as Qe,$ as qe,a0 as Pe,a1 as ke,a2 as Fe,a3 as C,a4 as v,c as ze,a as Me}from"./index-4e0b3dbf.js";function Zt(t){const e=l.createContext(null);return[({children:n,value:i})=>m.createElement(e.Provider,{value:i},n),()=>{const n=l.useContext(e);if(n===null)throw new Error(t);return n}]}function Ue(t){return Array.isArray(t)||t===null?!1:typeof t=="object"?t.type!==m.Fragment:!1}function Gt({opened:t,shouldReturnFocus:e=!0}){const r=l.useRef(),s=()=>{var n;r.current&&"focus"in r.current&&typeof r.current.focus=="function"&&((n=r.current)==null||n.focus({preventScroll:!0}))};return we(()=>{let n=-1;const i=o=>{o.key==="Tab"&&window.clearTimeout(n)};return document.addEventListener("keydown",i),t?r.current=document.activeElement:e&&(n=window.setTimeout(s,10)),()=>{window.clearTimeout(n),document.removeEventListener("keydown",i)}},[t,e]),s}const Le=/input|select|textarea|button|object/,ne="a, input, select, textarea, button, object, [tabindex]";function Ne(t){return t.style.display==="none"}function je(t){if(t.getAttribute("aria-hidden")||t.getAttribute("hidden")||t.getAttribute("type")==="hidden")return!1;let r=t;for(;r&&!(r===document.body||r.nodeType===11);){if(Ne(r))return!1;r=r.parentNode}return!0}function ie(t){let e=t.getAttribute("tabindex");return e===null&&(e=void 0),parseInt(e,10)}function F(t){const e=t.nodeName.toLowerCase(),r=!Number.isNaN(ie(t));return(Le.test(e)&&!t.disabled||t instanceof HTMLAnchorElement&&t.href||r)&&je(t)}function oe(t){const e=ie(t);return(Number.isNaN(e)||e>=0)&&F(t)}function De(t){return Array.from(t.querySelectorAll(ne)).filter(oe)}function Be(t,e){const r=De(t);if(!r.length){e.preventDefault();return}const s=r[e.shiftKey?0:r.length-1],n=t.getRootNode();if(!(s===n.activeElement||t===n.activeElement))return;e.preventDefault();const o=r[e.shiftKey?r.length-1:0];o&&o.focus()}function He(t,e="body > :not(script)"){const r=te(),s=Array.from(document.querySelectorAll(e)).map(n=>{var i;if((i=n==null?void 0:n.shadowRoot)!=null&&i.contains(t)||n.contains(t))return;const o=n.getAttribute("aria-hidden"),a=n.getAttribute("data-hidden"),u=n.getAttribute("data-focus-id");return n.setAttribute("data-focus-id",r),o===null||o==="false"?n.setAttribute("aria-hidden","true"):!a&&!u&&n.setAttribute("data-hidden",o),{node:n,ariaHidden:a||null}});return()=>{s.forEach(n=>{!n||r!==n.node.getAttribute("data-focus-id")||(n.ariaHidden===null?n.node.removeAttribute("aria-hidden"):n.node.setAttribute("aria-hidden",n.ariaHidden),n.node.removeAttribute("data-focus-id"),n.node.removeAttribute("data-hidden"))})}}function Ke(t=!0){const e=l.useRef(),r=l.useRef(null),s=i=>{let o=i.querySelector("[data-autofocus]");if(!o){const a=Array.from(i.querySelectorAll(ne));o=a.find(oe)||a.find(F)||null,!o&&F(i)&&(o=i)}o&&o.focus({preventScroll:!0})},n=l.useCallback(i=>{if(t){if(i===null){r.current&&(r.current(),r.current=null);return}r.current=He(i),e.current!==i&&(i?(setTimeout(()=>{i.getRootNode()&&s(i)}),e.current=i):e.current=null)}},[t]);return l.useEffect(()=>{if(!t)return;e.current&&setTimeout(()=>s(e.current));const i=o=>{o.key==="Tab"&&e.current&&Be(e.current,o)};return document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i),r.current&&r.current()}},[t]),n}const Ve=m["useId".toString()]||(()=>{});function Je(){const t=Ve();return t?`mantine-${t.replace(/:/g,"")}`:""}function $t(t){const e=Je(),[r,s]=l.useState(e);return Se(()=>{s(te())},[]),typeof t=="string"?t:typeof window>"u"?e:r}function er(t,e,r){l.useEffect(()=>(window.addEventListener(t,e,r),()=>window.removeEventListener(t,e,r)),[t,e])}function We(t,e){typeof t=="function"?t(e):typeof t=="object"&&t!==null&&"current"in t&&(t.current=e)}function Ye(...t){return e=>{t.forEach(r=>We(r,e))}}function Xe(...t){return l.useCallback(Ye(...t),t)}var Ze=Object.defineProperty,_=Object.getOwnPropertySymbols,ae=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable,Y=(t,e,r)=>e in t?Ze(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ge=(t,e)=>{for(var r in e||(e={}))ae.call(e,r)&&Y(t,r,e[r]);if(_)for(var r of _(e))ue.call(e,r)&&Y(t,r,e[r]);return t},$e=(t,e)=>{var r={};for(var s in t)ae.call(t,s)&&e.indexOf(s)<0&&(r[s]=t[s]);if(t!=null&&_)for(var s of _(t))e.indexOf(s)<0&&ue.call(t,s)&&(r[s]=t[s]);return r};function et(t){var e=t,{withinPortal:r=!0,children:s}=e,n=$e(e,["withinPortal","children"]);return r?m.createElement(Ee,Ge({},n),s):m.createElement(m.Fragment,null,s)}et.displayName="@mantine/core/OptionalPortal";function tt({children:t,active:e=!0,refProp:r="ref"}){const s=Ke(e),n=Xe(s,t==null?void 0:t.ref);return Ue(t)?l.cloneElement(t,{[r]:n}):t}tt.displayName="@mantine/core/FocusTrap";class rt extends re{constructor(e,r){super(),this.client=e,this.options=r,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(r)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),X(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return z(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return z(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,r){const s=this.options,n=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),k(s,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=s.queryKey),this.updateQuery();const i=this.hasListeners();i&&Z(this.currentQuery,n,this.options,s)&&this.executeFetch(),this.updateResult(r),i&&(this.currentQuery!==n||this.options.enabled!==s.enabled||this.options.staleTime!==s.staleTime)&&this.updateStaleTimeout();const o=this.computeRefetchInterval();i&&(this.currentQuery!==n||this.options.enabled!==s.enabled||o!==this.currentRefetchInterval)&&this.updateRefetchInterval(o)}getOptimisticResult(e){const r=this.client.getQueryCache().build(this.client,e),s=this.createResult(r,e);return nt(this,s,e)&&(this.currentResult=s,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),s}getCurrentResult(){return this.currentResult}trackResult(e){const r={};return Object.keys(e).forEach(s=>{Object.defineProperty(r,s,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(s),e[s])})}),r}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...r}={}){return this.fetch({...r,meta:{refetchPage:e}})}fetchOptimistic(e){const r=this.client.defaultQueryOptions(e),s=this.client.getQueryCache().build(this.client,r);return s.isFetchingOptimistic=!0,s.fetch().then(()=>this.createResult(s,r))}fetch(e){var r;return this.executeFetch({...e,cancelRefetch:(r=e.cancelRefetch)!=null?r:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let r=this.currentQuery.fetch(this.options,e);return e!=null&&e.throwOnError||(r=r.catch(Te)),r}updateStaleTimeout(){if(this.clearStaleTimeout(),V||this.currentResult.isStale||!J(this.options.staleTime))return;const r=Ce(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},r)}computeRefetchInterval(){var e;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(e=this.options.refetchInterval)!=null?e:!1}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!(V||this.options.enabled===!1||!J(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||_e.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,r){const s=this.currentQuery,n=this.options,i=this.currentResult,o=this.currentResultState,a=this.currentResultOptions,u=e!==s,c=u?e.state:this.currentQueryInitialState,h=u?this.currentResult:this.previousQueryResult,{state:f}=e;let{dataUpdatedAt:S,error:D,errorUpdatedAt:B,fetchStatus:g,status:y}=f,H=!1,K=!1,p;if(r._optimisticResults){const d=this.hasListeners(),Q=!d&&X(e,r),ge=d&&Z(e,s,r,n);(Q||ge)&&(g=xe(e.options.networkMode)?"fetching":"paused",S||(y="loading")),r._optimisticResults==="isRestoring"&&(g="idle")}if(r.keepPreviousData&&!f.dataUpdatedAt&&h!=null&&h.isSuccess&&y!=="error")p=h.data,S=h.dataUpdatedAt,y=h.status,H=!0;else if(r.select&&typeof f.data<"u")if(i&&f.data===(o==null?void 0:o.data)&&r.select===this.selectFn)p=this.selectResult;else try{this.selectFn=r.select,p=r.select(f.data),p=W(i==null?void 0:i.data,p,r),this.selectResult=p,this.selectError=null}catch(d){this.selectError=d}else p=f.data;if(typeof r.placeholderData<"u"&&typeof p>"u"&&y==="loading"){let d;if(i!=null&&i.isPlaceholderData&&r.placeholderData===(a==null?void 0:a.placeholderData))d=i.data;else if(d=typeof r.placeholderData=="function"?r.placeholderData():r.placeholderData,r.select&&typeof d<"u")try{d=r.select(d),this.selectError=null}catch(Q){this.selectError=Q}typeof d<"u"&&(y="success",p=W(i==null?void 0:i.data,d,r),K=!0)}this.selectError&&(D=this.selectError,p=this.selectResult,B=Date.now(),y="error");const O=g==="fetching",A=y==="loading",I=y==="error";return{status:y,fetchStatus:g,isLoading:A,isSuccess:y==="success",isError:I,isInitialLoading:A&&O,data:p,dataUpdatedAt:S,error:D,errorUpdatedAt:B,failureCount:f.fetchFailureCount,failureReason:f.fetchFailureReason,errorUpdateCount:f.errorUpdateCount,isFetched:f.dataUpdateCount>0||f.errorUpdateCount>0,isFetchedAfterMount:f.dataUpdateCount>c.dataUpdateCount||f.errorUpdateCount>c.errorUpdateCount,isFetching:O,isRefetching:O&&!A,isLoadingError:I&&f.dataUpdatedAt===0,isPaused:g==="paused",isPlaceholderData:K,isPreviousData:H,isRefetchError:I&&f.dataUpdatedAt!==0,isStale:U(e,r),refetch:this.refetch,remove:this.remove}}updateResult(e){const r=this.currentResult,s=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,k(s,r))return;this.currentResult=s;const n={cache:!0},i=()=>{if(!r)return!0;const{notifyOnChangeProps:o}=this.options,a=typeof o=="function"?o():o;if(a==="all"||!a&&!this.trackedProps.size)return!0;const u=new Set(a??this.trackedProps);return this.options.useErrorBoundary&&u.add("error"),Object.keys(this.currentResult).some(c=>{const h=c;return this.currentResult[h]!==r[h]&&u.has(h)})};(e==null?void 0:e.listeners)!==!1&&i()&&(n.listeners=!0),this.notify({...n,...e})}updateQuery(){const e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;const r=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(r==null||r.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){const r={};e.type==="success"?r.onSuccess=!e.manual:e.type==="error"&&!Oe(e.error)&&(r.onError=!0),this.updateResult(r),this.hasListeners()&&this.updateTimers()}notify(e){b.batch(()=>{if(e.onSuccess){var r,s,n,i;(r=(s=this.options).onSuccess)==null||r.call(s,this.currentResult.data),(n=(i=this.options).onSettled)==null||n.call(i,this.currentResult.data,null)}else if(e.onError){var o,a,u,c;(o=(a=this.options).onError)==null||o.call(a,this.currentResult.error),(u=(c=this.options).onSettled)==null||u.call(c,void 0,this.currentResult.error)}e.listeners&&this.listeners.forEach(({listener:h})=>{h(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function st(t,e){return e.enabled!==!1&&!t.state.dataUpdatedAt&&!(t.state.status==="error"&&e.retryOnMount===!1)}function X(t,e){return st(t,e)||t.state.dataUpdatedAt>0&&z(t,e,e.refetchOnMount)}function z(t,e,r){if(e.enabled!==!1){const s=typeof r=="function"?r(t):r;return s==="always"||s!==!1&&U(t,e)}return!1}function Z(t,e,r,s){return r.enabled!==!1&&(t!==e||s.enabled===!1)&&(!r.suspense||t.state.status!=="error")&&U(t,r)}function U(t,e){return t.isStaleByTime(e.staleTime)}function nt(t,e,r){return r.keepPreviousData?!1:r.placeholderData!==void 0?e.isPlaceholderData:t.getCurrentResult()!==e}class it extends re{constructor(e,r){super(),this.client=e,this.setOptions(r),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){var r;const s=this.options;this.options=this.client.defaultMutationOptions(e),k(s,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(r=this.currentMutation)==null||r.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.currentMutation)==null||e.removeObserver(this)}}onMutationUpdate(e){this.updateResult();const r={listeners:!0};e.type==="success"?r.onSuccess=!0:e.type==="error"&&(r.onError=!0),this.notify(r)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(e,r){return this.mutateOptions=r,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof e<"u"?e:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const e=this.currentMutation?this.currentMutation.state:Ae(),r={...e,isLoading:e.status==="loading",isSuccess:e.status==="success",isError:e.status==="error",isIdle:e.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=r}notify(e){b.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(e.onSuccess){var r,s,n,i;(r=(s=this.mutateOptions).onSuccess)==null||r.call(s,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(n=(i=this.mutateOptions).onSettled)==null||n.call(i,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(e.onError){var o,a,u,c;(o=(a=this.mutateOptions).onError)==null||o.call(a,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(u=(c=this.mutateOptions).onSettled)==null||u.call(c,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}e.listeners&&this.listeners.forEach(({listener:h})=>{h(this.currentResult)})})}}var ce={exports:{}},le={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R=l;function ot(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var at=typeof Object.is=="function"?Object.is:ot,ut=R.useState,ct=R.useEffect,lt=R.useLayoutEffect,ht=R.useDebugValue;function ft(t,e){var r=e(),s=ut({inst:{value:r,getSnapshot:e}}),n=s[0].inst,i=s[1];return lt(function(){n.value=r,n.getSnapshot=e,q(n)&&i({inst:n})},[t,r,e]),ct(function(){return q(n)&&i({inst:n}),t(function(){q(n)&&i({inst:n})})},[t]),ht(r),r}function q(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!at(t,r)}catch{return!0}}function dt(t,e){return e()}var pt=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?dt:ft;le.useSyncExternalStore=R.useSyncExternalStore!==void 0?R.useSyncExternalStore:pt;ce.exports=le;var yt=ce.exports;const he=yt.useSyncExternalStore,fe=l.createContext(!1),bt=()=>l.useContext(fe);fe.Provider;function mt(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}const vt=l.createContext(mt()),Rt=()=>l.useContext(vt);function de(t,e){return typeof t=="function"?t(...e):!!t}const gt=(t,e)=>{(t.suspense||t.useErrorBoundary)&&(e.isReset()||(t.retryOnMount=!1))},wt=t=>{l.useEffect(()=>{t.clearReset()},[t])},St=({result:t,errorResetBoundary:e,useErrorBoundary:r,query:s})=>t.isError&&!e.isReset()&&!t.isFetching&&de(r,[t.error,s]),Et=t=>{t.suspense&&typeof t.staleTime!="number"&&(t.staleTime=1e3)},Tt=(t,e)=>t.isLoading&&t.isFetching&&!e,Ct=(t,e,r)=>(t==null?void 0:t.suspense)&&Tt(e,r),_t=(t,e,r)=>e.fetchOptimistic(t).then(({data:s})=>{t.onSuccess==null||t.onSuccess(s),t.onSettled==null||t.onSettled(s,null)}).catch(s=>{r.clearReset(),t.onError==null||t.onError(s),t.onSettled==null||t.onSettled(void 0,s)});function xt(t,e){const r=se({context:t.context}),s=bt(),n=Rt(),i=r.defaultQueryOptions(t);i._optimisticResults=s?"isRestoring":"optimistic",i.onError&&(i.onError=b.batchCalls(i.onError)),i.onSuccess&&(i.onSuccess=b.batchCalls(i.onSuccess)),i.onSettled&&(i.onSettled=b.batchCalls(i.onSettled)),Et(i),gt(i,n),wt(n);const[o]=l.useState(()=>new e(r,i)),a=o.getOptimisticResult(i);if(he(l.useCallback(u=>{const c=s?()=>{}:o.subscribe(b.batchCalls(u));return o.updateResult(),c},[o,s]),()=>o.getCurrentResult(),()=>o.getCurrentResult()),l.useEffect(()=>{o.setOptions(i,{listeners:!1})},[i,o]),Ct(i,a,s))throw _t(i,o,n);if(St({result:a,errorResetBoundary:n,useErrorBoundary:i.useErrorBoundary,query:o.getCurrentQuery()}))throw a.error;return i.notifyOnChangeProps?a:o.trackResult(a)}function L(t,e,r){const s=Ie(t,e,r);return xt(s,rt)}function N(t,e,r){const s=Qe(t,e,r),n=se({context:s.context}),[i]=l.useState(()=>new it(n,s));l.useEffect(()=>{i.setOptions(s)},[i,s]);const o=he(l.useCallback(u=>i.subscribe(b.batchCalls(u)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),a=l.useCallback((u,c)=>{i.mutate(u,c).catch(Ot)},[i]);if(o.error&&de(i.options.useErrorBoundary,[o.error]))throw o.error;return{...o,mutate:a,mutateAsync:o.mutate}}function Ot(){}class G extends Error{constructor(e,r,s){const n=e.status||e.status===0?e.status:"",i=e.statusText||"",o=`${n} ${i}`.trim(),a=o?`status code ${o}`:"an unknown error";super(`Request failed with ${a}`),Object.defineProperty(this,"response",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"request",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name="HTTPError",this.response=e,this.request=r,this.options=s}}class pe extends Error{constructor(e){super("Request timed out"),Object.defineProperty(this,"request",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name="TimeoutError",this.request=e}}const T=t=>t!==null&&typeof t=="object",E=(...t)=>{for(const e of t)if((!T(e)||Array.isArray(e))&&typeof e<"u")throw new TypeError("The `options` argument must be an object");return j({},...t)},ye=(t={},e={})=>{const r=new globalThis.Headers(t),s=e instanceof globalThis.Headers,n=new globalThis.Headers(e);for(const[i,o]of n.entries())s&&o==="undefined"||o===void 0?r.delete(i):r.set(i,o);return r},j=(...t)=>{let e={},r={};for(const s of t)if(Array.isArray(s))Array.isArray(e)||(e=[]),e=[...e,...s];else if(T(s)){for(let[n,i]of Object.entries(s))T(i)&&n in e&&(i=j(e[n],i)),e={...e,[n]:i};T(s.headers)&&(r=ye(r,s.headers),e.headers=r)}return e},At=(()=>{let t=!1,e=!1;const r=typeof globalThis.ReadableStream=="function",s=typeof globalThis.Request=="function";return r&&s&&(e=new globalThis.Request("https://a.com",{body:new globalThis.ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type")),t&&!e})(),It=typeof globalThis.AbortController=="function",Qt=typeof globalThis.ReadableStream=="function",qt=typeof globalThis.FormData=="function",be=["get","post","put","patch","head","delete"],Pt={json:"application/json",text:"text/*",formData:"multipart/form-data",arrayBuffer:"*/*",blob:"*/*"},P=2147483647,me=Symbol("stop"),kt=t=>be.includes(t)?t.toUpperCase():t,Ft=["get","put","head","delete","options","trace"],zt=[408,413,429,500,502,503,504],ve=[413,429,503],$={limit:2,methods:Ft,statusCodes:zt,afterStatusCodes:ve,maxRetryAfter:Number.POSITIVE_INFINITY,backoffLimit:Number.POSITIVE_INFINITY},Mt=(t={})=>{if(typeof t=="number")return{...$,limit:t};if(t.methods&&!Array.isArray(t.methods))throw new Error("retry.methods must be an array");if(t.statusCodes&&!Array.isArray(t.statusCodes))throw new Error("retry.statusCodes must be an array");return{...$,...t,afterStatusCodes:ve}};async function Ut(t,e,r){return new Promise((s,n)=>{const i=setTimeout(()=>{e&&e.abort(),n(new pe(t))},r.timeout);r.fetch(t).then(s).catch(n).then(()=>{clearTimeout(i)})})}const Lt=!!globalThis.DOMException;function ee(t){if(Lt)return new DOMException((t==null?void 0:t.reason)??"The operation was aborted.","AbortError");const e=new Error((t==null?void 0:t.reason)??"The operation was aborted.");return e.name="AbortError",e}async function Nt(t,{signal:e}){return new Promise((r,s)=>{if(e){if(e.aborted){s(ee(e));return}e.addEventListener("abort",n,{once:!0})}function n(){s(ee(e)),clearTimeout(i)}const i=setTimeout(()=>{e==null||e.removeEventListener("abort",n),r()},t)})}class x{static create(e,r){const s=new x(e,r),n=async()=>{if(s._options.timeout>P)throw new RangeError(`The \`timeout\` option cannot be greater than ${P}`);await Promise.resolve();let a=await s._fetch();for(const u of s._options.hooks.afterResponse){const c=await u(s.request,s._options,s._decorateResponse(a.clone()));c instanceof globalThis.Response&&(a=c)}if(s._decorateResponse(a),!a.ok&&s._options.throwHttpErrors){let u=new G(a,s.request,s._options);for(const c of s._options.hooks.beforeError)u=await c(u);throw u}if(s._options.onDownloadProgress){if(typeof s._options.onDownloadProgress!="function")throw new TypeError("The `onDownloadProgress` option must be a function");if(!Qt)throw new Error("Streams are not supported in your environment. `ReadableStream` is missing.");return s._stream(a.clone(),s._options.onDownloadProgress)}return a},o=s._options.retry.methods.includes(s.request.method.toLowerCase())?s._retry(n):n();for(const[a,u]of Object.entries(Pt))o[a]=async()=>{s.request.headers.set("accept",s.request.headers.get("accept")||u);const h=(await o).clone();if(a==="json"){if(h.status===204||(await h.clone().arrayBuffer()).byteLength===0)return"";if(r.parseJson)return r.parseJson(await h.text())}return h[a]()};return o}constructor(e,r={}){if(Object.defineProperty(this,"request",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"abortController",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_retryCount",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_input",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_options",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this._input=e,this._options={credentials:this._input.credentials||"same-origin",...r,headers:ye(this._input.headers,r.headers),hooks:j({beforeRequest:[],beforeRetry:[],beforeError:[],afterResponse:[]},r.hooks),method:kt(r.method??this._input.method),prefixUrl:String(r.prefixUrl||""),retry:Mt(r.retry),throwHttpErrors:r.throwHttpErrors!==!1,timeout:typeof r.timeout>"u"?1e4:r.timeout,fetch:r.fetch??globalThis.fetch.bind(globalThis)},typeof this._input!="string"&&!(this._input instanceof URL||this._input instanceof globalThis.Request))throw new TypeError("`input` must be a string, URL, or Request");if(this._options.prefixUrl&&typeof this._input=="string"){if(this._input.startsWith("/"))throw new Error("`input` must not begin with a slash when using `prefixUrl`");this._options.prefixUrl.endsWith("/")||(this._options.prefixUrl+="/"),this._input=this._options.prefixUrl+this._input}if(It){if(this.abortController=new globalThis.AbortController,this._options.signal){const s=this._options.signal;this._options.signal.addEventListener("abort",()=>{this.abortController.abort(s.reason)})}this._options.signal=this.abortController.signal}if(At&&(this._options.duplex="half"),this.request=new globalThis.Request(this._input,this._options),this._options.searchParams){const n="?"+(typeof this._options.searchParams=="string"?this._options.searchParams.replace(/^\?/,""):new URLSearchParams(this._options.searchParams).toString()),i=this.request.url.replace(/(?:\?.*?)?(?=#|$)/,n);(qt&&this._options.body instanceof globalThis.FormData||this._options.body instanceof URLSearchParams)&&!(this._options.headers&&this._options.headers["content-type"])&&this.request.headers.delete("content-type"),this.request=new globalThis.Request(new globalThis.Request(i,{...this.request}),this._options)}this._options.json!==void 0&&(this._options.body=JSON.stringify(this._options.json),this.request.headers.set("content-type",this._options.headers.get("content-type")??"application/json"),this.request=new globalThis.Request(this.request,{body:this._options.body}))}_calculateRetryDelay(e){if(this._retryCount++,this._retryCount<this._options.retry.limit&&!(e instanceof pe)){if(e instanceof G){if(!this._options.retry.statusCodes.includes(e.response.status))return 0;const s=e.response.headers.get("Retry-After");if(s&&this._options.retry.afterStatusCodes.includes(e.response.status)){let n=Number(s);return Number.isNaN(n)?n=Date.parse(s)-Date.now():n*=1e3,typeof this._options.retry.maxRetryAfter<"u"&&n>this._options.retry.maxRetryAfter?0:n}if(e.response.status===413)return 0}const r=.3;return Math.min(this._options.retry.backoffLimit,r*2**(this._retryCount-1)*1e3)}return 0}_decorateResponse(e){return this._options.parseJson&&(e.json=async()=>this._options.parseJson(await e.text())),e}async _retry(e){try{return await e()}catch(r){const s=Math.min(this._calculateRetryDelay(r),P);if(s!==0&&this._retryCount>0){await Nt(s,{signal:this._options.signal});for(const n of this._options.hooks.beforeRetry)if(await n({request:this.request,options:this._options,error:r,retryCount:this._retryCount})===me)return;return this._retry(e)}throw r}}async _fetch(){for(const e of this._options.hooks.beforeRequest){const r=await e(this.request,this._options);if(r instanceof Request){this.request=r;break}if(r instanceof Response)return r}return this._options.timeout===!1?this._options.fetch(this.request.clone()):Ut(this.request.clone(),this.abortController,this._options)}_stream(e,r){const s=Number(e.headers.get("content-length"))||0;let n=0;return e.status===204?(r&&r({percent:1,totalBytes:s,transferredBytes:n},new Uint8Array),new globalThis.Response(null,{status:e.status,statusText:e.statusText,headers:e.headers})):new globalThis.Response(new globalThis.ReadableStream({async start(i){const o=e.body.getReader();r&&r({percent:0,transferredBytes:0,totalBytes:s},new Uint8Array);async function a(){const{done:u,value:c}=await o.read();if(u){i.close();return}if(r){n+=c.byteLength;const h=s===0?0:n/s;r({percent:h,transferredBytes:n,totalBytes:s},c)}i.enqueue(c),await a()}await a()}}),{status:e.status,statusText:e.statusText,headers:e.headers})}}/*! MIT License © Sindre Sorhus */const M=t=>{const e=(r,s)=>x.create(r,E(t,s));for(const r of be)e[r]=(s,n)=>x.create(s,E(t,n,{method:r}));return e.create=r=>M(E(r)),e.extend=r=>M(E(t,r)),e.stop=me,e},jt=M(),Dt=jt,w=Dt.create({prefixUrl:qe,retry:0,headers:{"Content-Type":"application/json"}}),Re=()=>{const t=Pe(),e=ke(),{id:r}=Fe(),s=()=>t(-1),n=e.state;return{goBack:s,id:r,state:n}},Bt=async()=>await(await fetch("http://quiz-maker.apidocs.enterwell.space/api/questions")).json(),tr=()=>L({queryKey:["questions"],queryFn:()=>Bt()}),Ht=async()=>await w.get("quizzes").json(),Kt=async t=>await w.get(`quizzes/${t}`).json(),Vt=async t=>{await w.post("quizzes",{json:t})},Jt=async(t,e)=>{await w.put(`quizzes/${t}`,{json:e})},Wt=async t=>{await w.delete(`quizzes/${t}`)},rr=()=>L({queryKey:["quizzes"],queryFn:()=>Ht()}),sr=t=>L({queryKey:["quiz",t],queryFn:()=>Kt(t)}),nr=()=>{const{goBack:t}=Re();return N({mutationKey:["createQuiz"],mutationFn:e=>Vt(e),onSuccess:()=>{C.invalidateQueries(["quizzes"]),t(),v.show({title:"Success",message:"Quiz created successfully"})},onError:e=>{v.show({title:"Error",message:e.message,color:"red"})}})},ir=t=>{const{goBack:e}=Re();return N({mutationKey:["updateQuiz",t],mutationFn:r=>Jt(t,r),onSuccess:()=>{C.invalidateQueries(["quizzes"]),C.invalidateQueries(["quiz",t]),e(),v.show({title:"Success",message:"Quiz updated successfully"})},onError:r=>{v.show({title:"Error",message:r.message,color:"red"})}})},or=t=>N({mutationKey:["deleteQuiz",t],mutationFn:()=>Wt(t),onSuccess:()=>{C.invalidateQueries(["quizzes"]),v.show({title:"Success",message:"Quiz deleted successfully"})},onError:e=>{v.show({title:"Error",message:e.message,color:"red"})}}),ar=ze(t=>({value:{fontSize:t.fontSizes.sm,height:"auto",paddingInline:t.spacing.sm},defaultValueLabel:{whiteSpace:"break-spaces"},carouselContainer:{alignItems:"center"},carouselTextRoot:{maxHeight:"300px",overflow:"auto"},carouselSlide:{padding:Me(72)},carouselControl:{"&[data-inactive]":{opacity:0,cursor:"default"}}}));export{tt as F,et as O,er as a,Gt as b,Zt as c,or as d,ar as e,rr as f,Re as g,sr as h,tr as i,ir as j,nr as k,Ue as l,Xe as m,$t as u};