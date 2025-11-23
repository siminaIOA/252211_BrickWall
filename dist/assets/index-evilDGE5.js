(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))A(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&A(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function A(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))t(A);new MutationObserver(A=>{for(const i of A)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(A){const i={};return A.integrity&&(i.integrity=A.integrity),A.referrerPolicy&&(i.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?i.credentials="include":A.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(A){if(A.ep)return;A.ep=!0;const i=e(A);fetch(A.href,i)}})();(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))t(A);new MutationObserver(A=>{for(const i of A)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(A){const i={};return A.integrity&&(i.integrity=A.integrity),A.referrerPolicy&&(i.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?i.credentials="include":A.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(A){if(A.ep)return;A.ep=!0;const i=e(A);fetch(A.href,i)}})();const Gc="181",Xi={ROTATE:0,DOLLY:1,PAN:2},Gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sg=0,Ih=1,Fg=2,hp=1,up=2,fr=3,kr=0,cA=1,mr=2,XA=0,ji=1,Ca=2,Lh=3,Rh=4,Tg=5,ii=100,Qg=101,Ig=102,Lg=103,Rg=104,Dg=200,Hg=201,Pg=202,Ng=203,bl=204,Ml=205,Og=206,Vg=207,Gg=208,zg=209,kg=210,Kg=211,Wg=212,Xg=213,jg=214,Ul=0,Sl=1,Fl=2,Zi=3,Tl=4,Ql=5,Il=6,Ll=7,dp=0,Yg=1,qg=2,Vr=0,Jg=1,Zg=2,$g=3,pp=4,em=5,tm=6,Am=7,fp=300,$i=301,en=302,Rl=303,Dl=304,Xa=306,Kn=1e3,Br=1001,Hl=1002,rA=1003,rm=1004,ds=1005,EA=1006,go=1007,ai=1008,qA=1009,gp=1010,mp=1011,Wn=1012,zc=1013,di=1014,wr=1015,jA=1016,kc=1017,Kc=1018,Xn=1020,Bp=35902,wp=35899,vp=1021,Wc=1022,DA=1023,jn=1026,Yn=1027,yp=1028,Xc=1029,jc=1030,Yc=1031,qc=1033,pa=33776,fa=33777,ga=33778,ma=33779,Pl=35840,Nl=35841,Ol=35842,Vl=35843,Gl=36196,zl=37492,kl=37496,Kl=37808,Wl=37809,Xl=37810,jl=37811,Yl=37812,ql=37813,Jl=37814,Zl=37815,$l=37816,ec=37817,tc=37818,Ac=37819,rc=37820,ic=37821,nc=36492,sc=36494,ac=36495,oc=36283,lc=36284,cc=36285,hc=36286,im=3200,nm=3201,Jc=0,sm=1,Dr="",zt="srgb",tn="srgb-linear",Ea="linear",nt="srgb",mi=7680,Dh=519,am=512,om=513,lm=514,_p=515,cm=516,hm=517,um=518,dm=519,Hh=35044,Ph="300 es",WA=2e3,ba=2001;function xp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ma(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pm(){const r=Ma("canvas");return r.style.display="block",r}const Nh={};function Oh(...r){const e="THREE."+r.shift();console.log(e,...r)}function De(...r){const e="THREE."+r.shift();console.warn(e,...r)}function vt(...r){const e="THREE."+r.shift();console.error(e,...r)}function qn(...r){const e=r.join(" ");e in Nh||(Nh[e]=!0,De(...r))}function fm(r,e,t){return new Promise(function(A,i){function n(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(n,t);break;default:A()}}setTimeout(n,t)})}class pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const A=this._listeners;A[e]===void 0&&(A[e]=[]),A[e].indexOf(t)===-1&&A[e].push(t)}hasEventListener(e,t){const A=this._listeners;return A===void 0?!1:A[e]!==void 0&&A[e].indexOf(t)!==-1}removeEventListener(e,t){const A=this._listeners;if(A===void 0)return;const i=A[e];if(i!==void 0){const n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const A=t[e.type];if(A!==void 0){e.target=this;const i=A.slice(0);for(let n=0,s=i.length;n<s;n++)i[n].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vh=1234567;const Yi=Math.PI/180,An=180/Math.PI;function on(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,A=Math.random()*4294967295|0;return(Wt[r&255]+Wt[r>>8&255]+Wt[r>>16&255]+Wt[r>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[A&255]+Wt[A>>8&255]+Wt[A>>16&255]+Wt[A>>24&255]).toLowerCase()}function Xe(r,e,t){return Math.max(e,Math.min(t,r))}function Zc(r,e){return(r%e+e)%e}function gm(r,e,t,A,i){return A+(r-e)*(i-A)/(t-e)}function mm(r,e,t){return r!==e?(t-r)/(e-r):0}function Pn(r,e,t){return(1-t)*r+t*e}function Bm(r,e,t,A){return Pn(r,e,1-Math.exp(-t*A))}function wm(r,e=1){return e-Math.abs(Zc(r,e*2)-e)}function vm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function ym(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function _m(r,e){return r+Math.floor(Math.random()*(e-r+1))}function xm(r,e){return r+Math.random()*(e-r)}function Cm(r){return r*(.5-Math.random())}function Em(r){r!==void 0&&(Vh=r);let e=Vh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bm(r){return r*Yi}function Mm(r){return r*An}function Um(r){return(r&r-1)===0&&r!==0}function Sm(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Fm(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Tm(r,e,t,A,i){const n=Math.cos,s=Math.sin,a=n(t/2),o=s(t/2),l=n((e+A)/2),c=s((e+A)/2),u=n((e-A)/2),h=s((e-A)/2),p=n((A-e)/2),f=s((A-e)/2);switch(i){case"XYX":r.set(a*c,o*u,o*h,a*l);break;case"YZY":r.set(o*h,a*c,o*u,a*l);break;case"ZXZ":r.set(o*u,o*h,a*c,a*l);break;case"XZX":r.set(a*c,o*f,o*p,a*l);break;case"YXY":r.set(o*p,a*c,o*f,a*l);break;case"ZYZ":r.set(o*f,o*p,a*c,a*l);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ni(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function qt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Je={DEG2RAD:Yi,RAD2DEG:An,generateUUID:on,clamp:Xe,euclideanModulo:Zc,mapLinear:gm,inverseLerp:mm,lerp:Pn,damp:Bm,pingpong:wm,smoothstep:vm,smootherstep:ym,randInt:_m,randFloat:xm,randFloatSpread:Cm,seededRandom:Em,degToRad:bm,radToDeg:Mm,isPowerOfTwo:Um,ceilPowerOfTwo:Sm,floorPowerOfTwo:Fm,setQuaternionFromProperEuler:Tm,normalize:qt,denormalize:Ni};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,A=this.y,i=e.elements;return this.x=i[0]*t+i[3]*A+i[6],this.y=i[1]*t+i[4]*A+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const A=this.length();return this.divideScalar(A||1).multiplyScalar(Xe(A,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const A=this.dot(e)/t;return Math.acos(Xe(A,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,A=this.y-e.y;return t*t+A*A}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,A){return this.x=e.x+(t.x-e.x)*A,this.y=e.y+(t.y-e.y)*A,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const A=Math.cos(t),i=Math.sin(t),n=this.x-e.x,s=this.y-e.y;return this.x=n*A-s*i+e.x,this.y=n*i+s*A+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let Kr=class{constructor(r=0,e=0,t=0,A=1){this.isQuaternion=!0,this._x=r,this._y=e,this._z=t,this._w=A}static slerpFlat(r,e,t,A,i,n,s){let a=t[A+0],o=t[A+1],l=t[A+2],c=t[A+3],u=i[n+0],h=i[n+1],p=i[n+2],f=i[n+3];if(s<=0){r[e+0]=a,r[e+1]=o,r[e+2]=l,r[e+3]=c;return}if(s>=1){r[e+0]=u,r[e+1]=h,r[e+2]=p,r[e+3]=f;return}if(c!==f||a!==u||o!==h||l!==p){let m=a*u+o*h+l*p+c*f;m<0&&(u=-u,h=-h,p=-p,f=-f,m=-m);let g=1-s;if(m<.9995){const d=Math.acos(m),B=Math.sin(d);g=Math.sin(g*d)/B,s=Math.sin(s*d)/B,a=a*g+u*s,o=o*g+h*s,l=l*g+p*s,c=c*g+f*s}else{a=a*g+u*s,o=o*g+h*s,l=l*g+p*s,c=c*g+f*s;const d=1/Math.sqrt(a*a+o*o+l*l+c*c);a*=d,o*=d,l*=d,c*=d}}r[e]=a,r[e+1]=o,r[e+2]=l,r[e+3]=c}static multiplyQuaternionsFlat(r,e,t,A,i,n){const s=t[A],a=t[A+1],o=t[A+2],l=t[A+3],c=i[n],u=i[n+1],h=i[n+2],p=i[n+3];return r[e]=s*p+l*c+a*h-o*u,r[e+1]=a*p+l*u+o*c-s*h,r[e+2]=o*p+l*h+s*u-a*c,r[e+3]=l*p-s*c-a*u-o*h,r}get x(){return this._x}set x(r){this._x=r,this._onChangeCallback()}get y(){return this._y}set y(r){this._y=r,this._onChangeCallback()}get z(){return this._z}set z(r){this._z=r,this._onChangeCallback()}get w(){return this._w}set w(r){this._w=r,this._onChangeCallback()}set(r,e,t,A){return this._x=r,this._y=e,this._z=t,this._w=A,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(r){return this._x=r.x,this._y=r.y,this._z=r.z,this._w=r.w,this._onChangeCallback(),this}setFromEuler(r,e=!0){const t=r._x,A=r._y,i=r._z,n=r._order,s=Math.cos,a=Math.sin,o=s(t/2),l=s(A/2),c=s(i/2),u=a(t/2),h=a(A/2),p=a(i/2);switch(n){case"XYZ":this._x=u*l*c+o*h*p,this._y=o*h*c-u*l*p,this._z=o*l*p+u*h*c,this._w=o*l*c-u*h*p;break;case"YXZ":this._x=u*l*c+o*h*p,this._y=o*h*c-u*l*p,this._z=o*l*p-u*h*c,this._w=o*l*c+u*h*p;break;case"ZXY":this._x=u*l*c-o*h*p,this._y=o*h*c+u*l*p,this._z=o*l*p+u*h*c,this._w=o*l*c-u*h*p;break;case"ZYX":this._x=u*l*c-o*h*p,this._y=o*h*c+u*l*p,this._z=o*l*p-u*h*c,this._w=o*l*c+u*h*p;break;case"YZX":this._x=u*l*c+o*h*p,this._y=o*h*c+u*l*p,this._z=o*l*p-u*h*c,this._w=o*l*c-u*h*p;break;case"XZY":this._x=u*l*c-o*h*p,this._y=o*h*c-u*l*p,this._z=o*l*p+u*h*c,this._w=o*l*c+u*h*p;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(r,e){const t=e/2,A=Math.sin(t);return this._x=r.x*A,this._y=r.y*A,this._z=r.z*A,this._w=Math.cos(t),this._onChangeCallback(),this}setFromRotationMatrix(r){const e=r.elements,t=e[0],A=e[4],i=e[8],n=e[1],s=e[5],a=e[9],o=e[2],l=e[6],c=e[10],u=t+s+c;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(l-a)*h,this._y=(i-o)*h,this._z=(n-A)*h}else if(t>s&&t>c){const h=2*Math.sqrt(1+t-s-c);this._w=(l-a)/h,this._x=.25*h,this._y=(A+n)/h,this._z=(i+o)/h}else if(s>c){const h=2*Math.sqrt(1+s-t-c);this._w=(i-o)/h,this._x=(A+n)/h,this._y=.25*h,this._z=(a+l)/h}else{const h=2*Math.sqrt(1+c-t-s);this._w=(n-A)/h,this._x=(i+o)/h,this._y=(a+l)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(r,e){let t=r.dot(e)+1;return t<1e-8?(t=0,Math.abs(r.x)>Math.abs(r.z)?(this._x=-r.y,this._y=r.x,this._z=0,this._w=t):(this._x=0,this._y=-r.z,this._z=r.y,this._w=t)):(this._x=r.y*e.z-r.z*e.y,this._y=r.z*e.x-r.x*e.z,this._z=r.x*e.y-r.y*e.x,this._w=t),this.normalize()}angleTo(r){return 2*Math.acos(Math.abs(Xe(this.dot(r),-1,1)))}rotateTowards(r,e){const t=this.angleTo(r);if(t===0)return this;const A=Math.min(1,e/t);return this.slerp(r,A),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(r){return this._x*r._x+this._y*r._y+this._z*r._z+this._w*r._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let r=this.length();return r===0?(this._x=0,this._y=0,this._z=0,this._w=1):(r=1/r,this._x=this._x*r,this._y=this._y*r,this._z=this._z*r,this._w=this._w*r),this._onChangeCallback(),this}multiply(r){return this.multiplyQuaternions(this,r)}premultiply(r){return this.multiplyQuaternions(r,this)}multiplyQuaternions(r,e){const t=r._x,A=r._y,i=r._z,n=r._w,s=e._x,a=e._y,o=e._z,l=e._w;return this._x=t*l+n*s+A*o-i*a,this._y=A*l+n*a+i*s-t*o,this._z=i*l+n*o+t*a-A*s,this._w=n*l-t*s-A*a-i*o,this._onChangeCallback(),this}slerp(r,e){if(e<=0)return this;if(e>=1)return this.copy(r);let t=r._x,A=r._y,i=r._z,n=r._w,s=this.dot(r);s<0&&(t=-t,A=-A,i=-i,n=-n,s=-s);let a=1-e;if(s<.9995){const o=Math.acos(s),l=Math.sin(o);a=Math.sin(a*o)/l,e=Math.sin(e*o)/l,this._x=this._x*a+t*e,this._y=this._y*a+A*e,this._z=this._z*a+i*e,this._w=this._w*a+n*e,this._onChangeCallback()}else this._x=this._x*a+t*e,this._y=this._y*a+A*e,this._z=this._z*a+i*e,this._w=this._w*a+n*e,this.normalize();return this}slerpQuaternions(r,e,t){return this.copy(r).slerp(e,t)}random(){const r=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),t=Math.random(),A=Math.sqrt(1-t),i=Math.sqrt(t);return this.set(A*Math.sin(r),A*Math.cos(r),i*Math.sin(e),i*Math.cos(e))}equals(r){return r._x===this._x&&r._y===this._y&&r._z===this._z&&r._w===this._w}fromArray(r,e=0){return this._x=r[e],this._y=r[e+1],this._z=r[e+2],this._w=r[e+3],this._onChangeCallback(),this}toArray(r=[],e=0){return r[e]=this._x,r[e+1]=this._y,r[e+2]=this._z,r[e+3]=this._w,r}fromBufferAttribute(r,e){return this._x=r.getX(e),this._y=r.getY(e),this._z=r.getZ(e),this._w=r.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(r){return this._onChangeCallback=r,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class N{constructor(e=0,t=0,A=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=A}set(e,t,A){return A===void 0&&(A=this.z),this.x=e,this.y=t,this.z=A,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,A=this.y,i=this.z,n=e.elements;return this.x=n[0]*t+n[3]*A+n[6]*i,this.y=n[1]*t+n[4]*A+n[7]*i,this.z=n[2]*t+n[5]*A+n[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,A=this.y,i=this.z,n=e.elements,s=1/(n[3]*t+n[7]*A+n[11]*i+n[15]);return this.x=(n[0]*t+n[4]*A+n[8]*i+n[12])*s,this.y=(n[1]*t+n[5]*A+n[9]*i+n[13])*s,this.z=(n[2]*t+n[6]*A+n[10]*i+n[14])*s,this}applyQuaternion(e){const t=this.x,A=this.y,i=this.z,n=e.x,s=e.y,a=e.z,o=e.w,l=2*(s*i-a*A),c=2*(a*t-n*i),u=2*(n*A-s*t);return this.x=t+o*l+s*u-a*c,this.y=A+o*c+a*l-n*u,this.z=i+o*u+n*c-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,A=this.y,i=this.z,n=e.elements;return this.x=n[0]*t+n[4]*A+n[8]*i,this.y=n[1]*t+n[5]*A+n[9]*i,this.z=n[2]*t+n[6]*A+n[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const A=this.length();return this.divideScalar(A||1).multiplyScalar(Xe(A,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,A){return this.x=e.x+(t.x-e.x)*A,this.y=e.y+(t.y-e.y)*A,this.z=e.z+(t.z-e.z)*A,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const A=e.x,i=e.y,n=e.z,s=t.x,a=t.y,o=t.z;return this.x=i*o-n*a,this.y=n*s-A*o,this.z=A*a-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const A=e.dot(this)/t;return this.copy(e).multiplyScalar(A)}projectOnPlane(e){return mo.copy(this).projectOnVector(e),this.sub(mo)}reflect(e){return this.sub(mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const A=this.dot(e)/t;return Math.acos(Xe(A,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,A=this.y-e.y,i=this.z-e.z;return t*t+A*A+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,A){const i=Math.sin(t)*e;return this.x=i*Math.sin(A),this.y=Math.cos(t)*e,this.z=i*Math.cos(A),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,A){return this.x=e*Math.sin(t),this.y=A,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),A=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=A,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,A=Math.sqrt(1-t*t);return this.x=A*Math.cos(e),this.y=t,this.z=A*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mo=new N,Gh=new Kr;class Ge{constructor(e,t,A,i,n,s,a,o,l){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,A,i,n,s,a,o,l)}set(e,t,A,i,n,s,a,o,l){const c=this.elements;return c[0]=e,c[1]=i,c[2]=a,c[3]=t,c[4]=n,c[5]=o,c[6]=A,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,A=e.elements;return t[0]=A[0],t[1]=A[1],t[2]=A[2],t[3]=A[3],t[4]=A[4],t[5]=A[5],t[6]=A[6],t[7]=A[7],t[8]=A[8],this}extractBasis(e,t,A){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),A.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const A=e.elements,i=t.elements,n=this.elements,s=A[0],a=A[3],o=A[6],l=A[1],c=A[4],u=A[7],h=A[2],p=A[5],f=A[8],m=i[0],g=i[3],d=i[6],B=i[1],v=i[4],y=i[7],x=i[2],w=i[5],M=i[8];return n[0]=s*m+a*B+o*x,n[3]=s*g+a*v+o*w,n[6]=s*d+a*y+o*M,n[1]=l*m+c*B+u*x,n[4]=l*g+c*v+u*w,n[7]=l*d+c*y+u*M,n[2]=h*m+p*B+f*x,n[5]=h*g+p*v+f*w,n[8]=h*d+p*y+f*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],A=e[1],i=e[2],n=e[3],s=e[4],a=e[5],o=e[6],l=e[7],c=e[8];return t*s*c-t*a*l-A*n*c+A*a*o+i*n*l-i*s*o}invert(){const e=this.elements,t=e[0],A=e[1],i=e[2],n=e[3],s=e[4],a=e[5],o=e[6],l=e[7],c=e[8],u=c*s-a*l,h=a*o-c*n,p=l*n-s*o,f=t*u+A*h+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/f;return e[0]=u*m,e[1]=(i*l-c*A)*m,e[2]=(a*A-i*s)*m,e[3]=h*m,e[4]=(c*t-i*o)*m,e[5]=(i*n-a*t)*m,e[6]=p*m,e[7]=(A*o-l*t)*m,e[8]=(s*t-A*n)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,A,i,n,s,a){const o=Math.cos(n),l=Math.sin(n);return this.set(A*o,A*l,-A*(o*s+l*a)+s+e,-i*l,i*o,-i*(-l*s+o*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Bo.makeScale(e,t)),this}rotate(e){return this.premultiply(Bo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),A=Math.sin(e);return this.set(t,-A,0,A,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,A=e.elements;for(let i=0;i<9;i++)if(t[i]!==A[i])return!1;return!0}fromArray(e,t=0){for(let A=0;A<9;A++)this.elements[A]=e[A+t];return this}toArray(e=[],t=0){const A=this.elements;return e[t]=A[0],e[t+1]=A[1],e[t+2]=A[2],e[t+3]=A[3],e[t+4]=A[4],e[t+5]=A[5],e[t+6]=A[6],e[t+7]=A[7],e[t+8]=A[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bo=new Ge,zh=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kh=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qm(){const r={enabled:!0,workingColorSpace:tn,spaces:{},convert:function(i,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===nt&&(i.r=yr(i.r),i.g=yr(i.g),i.b=yr(i.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(i.applyMatrix3(this.spaces[n].toXYZ),i.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===nt&&(i.r=qi(i.r),i.g=qi(i.g),i.b=qi(i.b))),i},workingToColorSpace:function(i,n){return this.convert(i,this.workingColorSpace,n)},colorSpaceToWorking:function(i,n){return this.convert(i,n,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Dr?Ea:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,n=this.workingColorSpace){return i.fromArray(this.spaces[n].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,n,s){return i.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,n){return qn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,n)},toWorkingColorSpace:function(i,n){return qn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,n)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],A=[.3127,.329];return r.define({[tn]:{primaries:e,whitePoint:A,transfer:Ea,toXYZ:zh,fromXYZ:kh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:A,transfer:nt,toXYZ:zh,fromXYZ:kh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),r}const qe=Qm();function yr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function qi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Bi;class Im{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let A;if(e instanceof HTMLCanvasElement)A=e;else{Bi===void 0&&(Bi=Ma("canvas")),Bi.width=e.width,Bi.height=e.height;const i=Bi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),A=Bi}return A.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ma("canvas");t.width=e.width,t.height=e.height;const A=t.getContext("2d");A.drawImage(e,0,0,e.width,e.height);const i=A.getImageData(0,0,e.width,e.height),n=i.data;for(let s=0;s<n.length;s++)n[s]=yr(n[s]/255)*255;return A.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let A=0;A<t.length;A++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[A]=Math.floor(yr(t[A]/255)*255):t[A]=yr(t[A]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lm=0;class $c{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=on(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const A={uuid:this.uuid,url:""},i=this.data;if(i!==null){let n;if(Array.isArray(i)){n=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?n.push(wo(i[s].image)):n.push(wo(i[s]))}else n=wo(i);A.url=n}return t||(e.images[this.uuid]=A),A}}function wo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Im.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let Rm=0;const vo=new N;class Yt extends pi{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,A=Br,i=Br,n=EA,s=ai,a=DA,o=qA,l=Yt.DEFAULT_ANISOTROPY,c=Dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=on(),this.name="",this.source=new $c(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=A,this.wrapT=i,this.magFilter=n,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vo).x}get height(){return this.source.getSize(vo).y}get depth(){return this.source.getSize(vo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const A=e[t];if(A===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&A&&i.isVector2&&A.isVector2||i&&A&&i.isVector3&&A.isVector3||i&&A&&i.isMatrix3&&A.isMatrix3?i.copy(A):this[t]=A}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const A={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(A.userData=this.userData),t||(e.textures[this.uuid]=A),A}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kn:e.x=e.x-Math.floor(e.x);break;case Br:e.x=e.x<0?0:1;break;case Hl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kn:e.y=e.y-Math.floor(e.y);break;case Br:e.y=e.y<0?0:1;break;case Hl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=fp;Yt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,A=0,i=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=A,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,A,i){return this.x=e,this.y=t,this.z=A,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,A=this.y,i=this.z,n=this.w,s=e.elements;return this.x=s[0]*t+s[4]*A+s[8]*i+s[12]*n,this.y=s[1]*t+s[5]*A+s[9]*i+s[13]*n,this.z=s[2]*t+s[6]*A+s[10]*i+s[14]*n,this.w=s[3]*t+s[7]*A+s[11]*i+s[15]*n,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,A,i,n;const s=e.elements,a=s[0],o=s[4],l=s[8],c=s[1],u=s[5],h=s[9],p=s[2],f=s[6],m=s[10];if(Math.abs(o-c)<.01&&Math.abs(l-p)<.01&&Math.abs(h-f)<.01){if(Math.abs(o+c)<.1&&Math.abs(l+p)<.1&&Math.abs(h+f)<.1&&Math.abs(a+u+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const d=(a+1)/2,B=(u+1)/2,v=(m+1)/2,y=(o+c)/4,x=(l+p)/4,w=(h+f)/4;return d>B&&d>v?d<.01?(A=0,i=.707106781,n=.707106781):(A=Math.sqrt(d),i=y/A,n=x/A):B>v?B<.01?(A=.707106781,i=0,n=.707106781):(i=Math.sqrt(B),A=y/i,n=w/i):v<.01?(A=.707106781,i=.707106781,n=0):(n=Math.sqrt(v),A=x/n,i=w/n),this.set(A,i,n,t),this}let g=Math.sqrt((f-h)*(f-h)+(l-p)*(l-p)+(c-o)*(c-o));return Math.abs(g)<.001&&(g=1),this.x=(f-h)/g,this.y=(l-p)/g,this.z=(c-o)/g,this.w=Math.acos((a+u+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const A=this.length();return this.divideScalar(A||1).multiplyScalar(Xe(A,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,A){return this.x=e.x+(t.x-e.x)*A,this.y=e.y+(t.y-e.y)*A,this.z=e.z+(t.z-e.z)*A,this.w=e.w+(t.w-e.w)*A,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dm extends pi{constructor(e=1,t=1,A={}){super(),A=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:EA,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},A),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=A.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const i={width:e,height:t,depth:A.depth},n=new Yt(i);this.textures=[];const s=A.count;for(let a=0;a<s;a++)this.textures[a]=n.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(A),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,this.resolveDepthBuffer=A.resolveDepthBuffer,this.resolveStencilBuffer=A.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=A.depthTexture,this.samples=A.samples,this.multiview=A.multiview}_setTextureOptions(e={}){const t={minFilter:EA,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let A=0;A<this.textures.length;A++)this.textures[A].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,A=1){if(this.width!==e||this.height!==t||this.depth!==A){this.width=e,this.height=t,this.depth=A;for(let i=0,n=this.textures.length;i<n;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=A,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,A=e.textures.length;t<A;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new $c(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class PA extends Dm{constructor(e=1,t=1,A={}){super(e,t,A),this.isWebGLRenderTarget=!0}}class Cp extends Yt{constructor(e=null,t=1,A=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:A,depth:i},this.magFilter=rA,this.minFilter=rA,this.wrapR=Br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hm extends Yt{constructor(e=null,t=1,A=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:A,depth:i},this.magFilter=rA,this.minFilter=rA,this.wrapR=Br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ln{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,A=e.length;t<A;t+=3)this.expandByPoint(TA.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,A=e.count;t<A;t++)this.expandByPoint(TA.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,A=e.length;t<A;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const A=TA.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(A),this.max.copy(e).add(A),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const A=e.geometry;if(A!==void 0){const n=A.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=n.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,TA):TA.fromBufferAttribute(n,s),TA.applyMatrix4(e.matrixWorld),this.expandByPoint(TA);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ps.copy(e.boundingBox)):(A.boundingBox===null&&A.computeBoundingBox(),ps.copy(A.boundingBox)),ps.applyMatrix4(e.matrixWorld),this.union(ps)}const i=e.children;for(let n=0,s=i.length;n<s;n++)this.expandByObject(i[n],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,TA),TA.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,A;return e.normal.x>0?(t=e.normal.x*this.min.x,A=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,A=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,A+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,A+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,A+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,A+=e.normal.z*this.min.z),t<=-e.constant&&A>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gn),fs.subVectors(this.max,gn),wi.subVectors(e.a,gn),vi.subVectors(e.b,gn),yi.subVectors(e.c,gn),br.subVectors(vi,wi),Mr.subVectors(yi,vi),qr.subVectors(wi,yi);let t=[0,-br.z,br.y,0,-Mr.z,Mr.y,0,-qr.z,qr.y,br.z,0,-br.x,Mr.z,0,-Mr.x,qr.z,0,-qr.x,-br.y,br.x,0,-Mr.y,Mr.x,0,-qr.y,qr.x,0];return!yo(t,wi,vi,yi,fs)||(t=[1,0,0,0,1,0,0,0,1],!yo(t,wi,vi,yi,fs))?!1:(gs.crossVectors(br,Mr),t=[gs.x,gs.y,gs.z],yo(t,wi,vi,yi,fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,TA).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(TA).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const rr=[new N,new N,new N,new N,new N,new N,new N,new N],TA=new N,ps=new ln,wi=new N,vi=new N,yi=new N,br=new N,Mr=new N,qr=new N,gn=new N,fs=new N,gs=new N,Jr=new N;function yo(r,e,t,A,i){for(let n=0,s=r.length-3;n<=s;n+=3){Jr.fromArray(r,n);const a=i.x*Math.abs(Jr.x)+i.y*Math.abs(Jr.y)+i.z*Math.abs(Jr.z),o=e.dot(Jr),l=t.dot(Jr),c=A.dot(Jr);if(Math.max(-Math.max(o,l,c),Math.min(o,l,c))>a)return!1}return!0}const Pm=new ln,mn=new N,_o=new N;class ja{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const A=this.center;t!==void 0?A.copy(t):Pm.setFromPoints(e).getCenter(A);let i=0;for(let n=0,s=e.length;n<s;n++)i=Math.max(i,A.distanceToSquared(e[n]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const A=this.center.distanceToSquared(e);return t.copy(e),A>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mn.subVectors(e,this.center);const t=mn.lengthSq();if(t>this.radius*this.radius){const A=Math.sqrt(t),i=(A-this.radius)*.5;this.center.addScaledVector(mn,i/A),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mn.copy(e.center).add(_o)),this.expandByPoint(mn.copy(e.center).sub(_o))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ir=new N,xo=new N,ms=new N,Ur=new N,Co=new N,Bs=new N,Eo=new N;let Ya=class{constructor(r=new N,e=new N(0,0,-1)){this.origin=r,this.direction=e}set(r,e){return this.origin.copy(r),this.direction.copy(e),this}copy(r){return this.origin.copy(r.origin),this.direction.copy(r.direction),this}at(r,e){return e.copy(this.origin).addScaledVector(this.direction,r)}lookAt(r){return this.direction.copy(r).sub(this.origin).normalize(),this}recast(r){return this.origin.copy(this.at(r,ir)),this}closestPointToPoint(r,e){e.subVectors(r,this.origin);const t=e.dot(this.direction);return t<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,t)}distanceToPoint(r){return Math.sqrt(this.distanceSqToPoint(r))}distanceSqToPoint(r){const e=ir.subVectors(r,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(r):(ir.copy(this.origin).addScaledVector(this.direction,e),ir.distanceToSquared(r))}distanceSqToSegment(r,e,t,A){xo.copy(r).add(e).multiplyScalar(.5),ms.copy(e).sub(r).normalize(),Ur.copy(this.origin).sub(xo);const i=r.distanceTo(e)*.5,n=-this.direction.dot(ms),s=Ur.dot(this.direction),a=-Ur.dot(ms),o=Ur.lengthSq(),l=Math.abs(1-n*n);let c,u,h,p;if(l>0)if(c=n*a-s,u=n*s-a,p=i*l,c>=0)if(u>=-p)if(u<=p){const f=1/l;c*=f,u*=f,h=c*(c+n*u+2*s)+u*(n*c+u+2*a)+o}else u=i,c=Math.max(0,-(n*u+s)),h=-c*c+u*(u+2*a)+o;else u=-i,c=Math.max(0,-(n*u+s)),h=-c*c+u*(u+2*a)+o;else u<=-p?(c=Math.max(0,-(-n*i+s)),u=c>0?-i:Math.min(Math.max(-i,-a),i),h=-c*c+u*(u+2*a)+o):u<=p?(c=0,u=Math.min(Math.max(-i,-a),i),h=u*(u+2*a)+o):(c=Math.max(0,-(n*i+s)),u=c>0?i:Math.min(Math.max(-i,-a),i),h=-c*c+u*(u+2*a)+o);else u=n>0?-i:i,c=Math.max(0,-(n*u+s)),h=-c*c+u*(u+2*a)+o;return t&&t.copy(this.origin).addScaledVector(this.direction,c),A&&A.copy(xo).addScaledVector(ms,u),h}intersectSphere(r,e){ir.subVectors(r.center,this.origin);const t=ir.dot(this.direction),A=ir.dot(ir)-t*t,i=r.radius*r.radius;if(A>i)return null;const n=Math.sqrt(i-A),s=t-n,a=t+n;return a<0?null:s<0?this.at(a,e):this.at(s,e)}intersectsSphere(r){return r.radius<0?!1:this.distanceSqToPoint(r.center)<=r.radius*r.radius}distanceToPlane(r){const e=r.normal.dot(this.direction);if(e===0)return r.distanceToPoint(this.origin)===0?0:null;const t=-(this.origin.dot(r.normal)+r.constant)/e;return t>=0?t:null}intersectPlane(r,e){const t=this.distanceToPlane(r);return t===null?null:this.at(t,e)}intersectsPlane(r){const e=r.distanceToPoint(this.origin);return e===0||r.normal.dot(this.direction)*e<0}intersectBox(r,e){let t,A,i,n,s,a;const o=1/this.direction.x,l=1/this.direction.y,c=1/this.direction.z,u=this.origin;return o>=0?(t=(r.min.x-u.x)*o,A=(r.max.x-u.x)*o):(t=(r.max.x-u.x)*o,A=(r.min.x-u.x)*o),l>=0?(i=(r.min.y-u.y)*l,n=(r.max.y-u.y)*l):(i=(r.max.y-u.y)*l,n=(r.min.y-u.y)*l),t>n||i>A||((i>t||isNaN(t))&&(t=i),(n<A||isNaN(A))&&(A=n),c>=0?(s=(r.min.z-u.z)*c,a=(r.max.z-u.z)*c):(s=(r.max.z-u.z)*c,a=(r.min.z-u.z)*c),t>a||s>A)||((s>t||t!==t)&&(t=s),(a<A||A!==A)&&(A=a),A<0)?null:this.at(t>=0?t:A,e)}intersectsBox(r){return this.intersectBox(r,ir)!==null}intersectTriangle(r,e,t,A,i){Co.subVectors(e,r),Bs.subVectors(t,r),Eo.crossVectors(Co,Bs);let n=this.direction.dot(Eo),s;if(n>0){if(A)return null;s=1}else if(n<0)s=-1,n=-n;else return null;Ur.subVectors(this.origin,r);const a=s*this.direction.dot(Bs.crossVectors(Ur,Bs));if(a<0)return null;const o=s*this.direction.dot(Co.cross(Ur));if(o<0||a+o>n)return null;const l=-s*Ur.dot(Eo);return l<0?null:this.at(l/n,i)}applyMatrix4(r){return this.origin.applyMatrix4(r),this.direction.transformDirection(r),this}equals(r){return r.origin.equals(this.origin)&&r.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ft{constructor(e,t,A,i,n,s,a,o,l,c,u,h,p,f,m,g){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,A,i,n,s,a,o,l,c,u,h,p,f,m,g)}set(e,t,A,i,n,s,a,o,l,c,u,h,p,f,m,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=A,d[12]=i,d[1]=n,d[5]=s,d[9]=a,d[13]=o,d[2]=l,d[6]=c,d[10]=u,d[14]=h,d[3]=p,d[7]=f,d[11]=m,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,A=e.elements;return t[0]=A[0],t[1]=A[1],t[2]=A[2],t[3]=A[3],t[4]=A[4],t[5]=A[5],t[6]=A[6],t[7]=A[7],t[8]=A[8],t[9]=A[9],t[10]=A[10],t[11]=A[11],t[12]=A[12],t[13]=A[13],t[14]=A[14],t[15]=A[15],this}copyPosition(e){const t=this.elements,A=e.elements;return t[12]=A[12],t[13]=A[13],t[14]=A[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,A){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),A.setFromMatrixColumn(this,2),this}makeBasis(e,t,A){return this.set(e.x,t.x,A.x,0,e.y,t.y,A.y,0,e.z,t.z,A.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,A=e.elements,i=1/_i.setFromMatrixColumn(e,0).length(),n=1/_i.setFromMatrixColumn(e,1).length(),s=1/_i.setFromMatrixColumn(e,2).length();return t[0]=A[0]*i,t[1]=A[1]*i,t[2]=A[2]*i,t[3]=0,t[4]=A[4]*n,t[5]=A[5]*n,t[6]=A[6]*n,t[7]=0,t[8]=A[8]*s,t[9]=A[9]*s,t[10]=A[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,A=e.x,i=e.y,n=e.z,s=Math.cos(A),a=Math.sin(A),o=Math.cos(i),l=Math.sin(i),c=Math.cos(n),u=Math.sin(n);if(e.order==="XYZ"){const h=s*c,p=s*u,f=a*c,m=a*u;t[0]=o*c,t[4]=-o*u,t[8]=l,t[1]=p+f*l,t[5]=h-m*l,t[9]=-a*o,t[2]=m-h*l,t[6]=f+p*l,t[10]=s*o}else if(e.order==="YXZ"){const h=o*c,p=o*u,f=l*c,m=l*u;t[0]=h+m*a,t[4]=f*a-p,t[8]=s*l,t[1]=s*u,t[5]=s*c,t[9]=-a,t[2]=p*a-f,t[6]=m+h*a,t[10]=s*o}else if(e.order==="ZXY"){const h=o*c,p=o*u,f=l*c,m=l*u;t[0]=h-m*a,t[4]=-s*u,t[8]=f+p*a,t[1]=p+f*a,t[5]=s*c,t[9]=m-h*a,t[2]=-s*l,t[6]=a,t[10]=s*o}else if(e.order==="ZYX"){const h=s*c,p=s*u,f=a*c,m=a*u;t[0]=o*c,t[4]=f*l-p,t[8]=h*l+m,t[1]=o*u,t[5]=m*l+h,t[9]=p*l-f,t[2]=-l,t[6]=a*o,t[10]=s*o}else if(e.order==="YZX"){const h=s*o,p=s*l,f=a*o,m=a*l;t[0]=o*c,t[4]=m-h*u,t[8]=f*u+p,t[1]=u,t[5]=s*c,t[9]=-a*c,t[2]=-l*c,t[6]=p*u+f,t[10]=h-m*u}else if(e.order==="XZY"){const h=s*o,p=s*l,f=a*o,m=a*l;t[0]=o*c,t[4]=-u,t[8]=l*c,t[1]=h*u+m,t[5]=s*c,t[9]=p*u-f,t[2]=f*u-p,t[6]=a*c,t[10]=m*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nm,e,Om)}lookAt(e,t,A){const i=this.elements;return pA.subVectors(e,t),pA.lengthSq()===0&&(pA.z=1),pA.normalize(),Sr.crossVectors(A,pA),Sr.lengthSq()===0&&(Math.abs(A.z)===1?pA.x+=1e-4:pA.z+=1e-4,pA.normalize(),Sr.crossVectors(A,pA)),Sr.normalize(),ws.crossVectors(pA,Sr),i[0]=Sr.x,i[4]=ws.x,i[8]=pA.x,i[1]=Sr.y,i[5]=ws.y,i[9]=pA.y,i[2]=Sr.z,i[6]=ws.z,i[10]=pA.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const A=e.elements,i=t.elements,n=this.elements,s=A[0],a=A[4],o=A[8],l=A[12],c=A[1],u=A[5],h=A[9],p=A[13],f=A[2],m=A[6],g=A[10],d=A[14],B=A[3],v=A[7],y=A[11],x=A[15],w=i[0],M=i[4],S=i[8],C=i[12],_=i[1],F=i[5],T=i[9],I=i[13],L=i[2],P=i[6],R=i[10],k=i[14],z=i[3],X=i[7],te=i[11],ve=i[15];return n[0]=s*w+a*_+o*L+l*z,n[4]=s*M+a*F+o*P+l*X,n[8]=s*S+a*T+o*R+l*te,n[12]=s*C+a*I+o*k+l*ve,n[1]=c*w+u*_+h*L+p*z,n[5]=c*M+u*F+h*P+p*X,n[9]=c*S+u*T+h*R+p*te,n[13]=c*C+u*I+h*k+p*ve,n[2]=f*w+m*_+g*L+d*z,n[6]=f*M+m*F+g*P+d*X,n[10]=f*S+m*T+g*R+d*te,n[14]=f*C+m*I+g*k+d*ve,n[3]=B*w+v*_+y*L+x*z,n[7]=B*M+v*F+y*P+x*X,n[11]=B*S+v*T+y*R+x*te,n[15]=B*C+v*I+y*k+x*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],A=e[4],i=e[8],n=e[12],s=e[1],a=e[5],o=e[9],l=e[13],c=e[2],u=e[6],h=e[10],p=e[14],f=e[3],m=e[7],g=e[11],d=e[15];return f*(+n*o*u-i*l*u-n*a*h+A*l*h+i*a*p-A*o*p)+m*(+t*o*p-t*l*h+n*s*h-i*s*p+i*l*c-n*o*c)+g*(+t*l*u-t*a*p-n*s*u+A*s*p+n*a*c-A*l*c)+d*(-i*a*c-t*o*u+t*a*h+i*s*u-A*s*h+A*o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,A){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=A),this}invert(){const e=this.elements,t=e[0],A=e[1],i=e[2],n=e[3],s=e[4],a=e[5],o=e[6],l=e[7],c=e[8],u=e[9],h=e[10],p=e[11],f=e[12],m=e[13],g=e[14],d=e[15],B=u*g*l-m*h*l+m*o*p-a*g*p-u*o*d+a*h*d,v=f*h*l-c*g*l-f*o*p+s*g*p+c*o*d-s*h*d,y=c*m*l-f*u*l+f*a*p-s*m*p-c*a*d+s*u*d,x=f*u*o-c*m*o-f*a*h+s*m*h+c*a*g-s*u*g,w=t*B+A*v+i*y+n*x;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=B*M,e[1]=(m*h*n-u*g*n-m*i*p+A*g*p+u*i*d-A*h*d)*M,e[2]=(a*g*n-m*o*n+m*i*l-A*g*l-a*i*d+A*o*d)*M,e[3]=(u*o*n-a*h*n-u*i*l+A*h*l+a*i*p-A*o*p)*M,e[4]=v*M,e[5]=(c*g*n-f*h*n+f*i*p-t*g*p-c*i*d+t*h*d)*M,e[6]=(f*o*n-s*g*n-f*i*l+t*g*l+s*i*d-t*o*d)*M,e[7]=(s*h*n-c*o*n+c*i*l-t*h*l-s*i*p+t*o*p)*M,e[8]=y*M,e[9]=(f*u*n-c*m*n-f*A*p+t*m*p+c*A*d-t*u*d)*M,e[10]=(s*m*n-f*a*n+f*A*l-t*m*l-s*A*d+t*a*d)*M,e[11]=(c*a*n-s*u*n-c*A*l+t*u*l+s*A*p-t*a*p)*M,e[12]=x*M,e[13]=(c*m*i-f*u*i+f*A*h-t*m*h-c*A*g+t*u*g)*M,e[14]=(f*a*i-s*m*i-f*A*o+t*m*o+s*A*g-t*a*g)*M,e[15]=(s*u*i-c*a*i+c*A*o-t*u*o-s*A*h+t*a*h)*M,this}scale(e){const t=this.elements,A=e.x,i=e.y,n=e.z;return t[0]*=A,t[4]*=i,t[8]*=n,t[1]*=A,t[5]*=i,t[9]*=n,t[2]*=A,t[6]*=i,t[10]*=n,t[3]*=A,t[7]*=i,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],A=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,A,i))}makeTranslation(e,t,A){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,A,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),A=Math.sin(e);return this.set(1,0,0,0,0,t,-A,0,0,A,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),A=Math.sin(e);return this.set(t,0,A,0,0,1,0,0,-A,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),A=Math.sin(e);return this.set(t,-A,0,0,A,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const A=Math.cos(t),i=Math.sin(t),n=1-A,s=e.x,a=e.y,o=e.z,l=n*s,c=n*a;return this.set(l*s+A,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+A,c*o-i*s,0,l*o-i*a,c*o+i*s,n*o*o+A,0,0,0,0,1),this}makeScale(e,t,A){return this.set(e,0,0,0,0,t,0,0,0,0,A,0,0,0,0,1),this}makeShear(e,t,A,i,n,s){return this.set(1,A,n,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,A){const i=this.elements,n=t._x,s=t._y,a=t._z,o=t._w,l=n+n,c=s+s,u=a+a,h=n*l,p=n*c,f=n*u,m=s*c,g=s*u,d=a*u,B=o*l,v=o*c,y=o*u,x=A.x,w=A.y,M=A.z;return i[0]=(1-(m+d))*x,i[1]=(p+y)*x,i[2]=(f-v)*x,i[3]=0,i[4]=(p-y)*w,i[5]=(1-(h+d))*w,i[6]=(g+B)*w,i[7]=0,i[8]=(f+v)*M,i[9]=(g-B)*M,i[10]=(1-(h+m))*M,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,A){const i=this.elements;let n=_i.set(i[0],i[1],i[2]).length();const s=_i.set(i[4],i[5],i[6]).length(),a=_i.set(i[8],i[9],i[10]).length();this.determinant()<0&&(n=-n),e.x=i[12],e.y=i[13],e.z=i[14],QA.copy(this);const o=1/n,l=1/s,c=1/a;return QA.elements[0]*=o,QA.elements[1]*=o,QA.elements[2]*=o,QA.elements[4]*=l,QA.elements[5]*=l,QA.elements[6]*=l,QA.elements[8]*=c,QA.elements[9]*=c,QA.elements[10]*=c,t.setFromRotationMatrix(QA),A.x=n,A.y=s,A.z=a,this}makePerspective(e,t,A,i,n,s,a=WA,o=!1){const l=this.elements,c=2*n/(t-e),u=2*n/(A-i),h=(t+e)/(t-e),p=(A+i)/(A-i);let f,m;if(o)f=n/(s-n),m=s*n/(s-n);else if(a===WA)f=-(s+n)/(s-n),m=-2*s*n/(s-n);else if(a===ba)f=-s/(s-n),m=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,A,i,n,s,a=WA,o=!1){const l=this.elements,c=2/(t-e),u=2/(A-i),h=-(t+e)/(t-e),p=-(A+i)/(A-i);let f,m;if(o)f=1/(s-n),m=s/(s-n);else if(a===WA)f=-2/(s-n),m=-(s+n)/(s-n);else if(a===ba)f=-1/(s-n),m=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,A=e.elements;for(let i=0;i<16;i++)if(t[i]!==A[i])return!1;return!0}fromArray(e,t=0){for(let A=0;A<16;A++)this.elements[A]=e[A+t];return this}toArray(e=[],t=0){const A=this.elements;return e[t]=A[0],e[t+1]=A[1],e[t+2]=A[2],e[t+3]=A[3],e[t+4]=A[4],e[t+5]=A[5],e[t+6]=A[6],e[t+7]=A[7],e[t+8]=A[8],e[t+9]=A[9],e[t+10]=A[10],e[t+11]=A[11],e[t+12]=A[12],e[t+13]=A[13],e[t+14]=A[14],e[t+15]=A[15],e}}const _i=new N,QA=new ft,Nm=new N(0,0,0),Om=new N(1,1,1),Sr=new N,ws=new N,pA=new N,Kh=new ft,Wh=new Kr;class JA{constructor(e=0,t=0,A=0,i=JA.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=A,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,A,i=this._order){return this._x=e,this._y=t,this._z=A,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,A=!0){const i=e.elements,n=i[0],s=i[4],a=i[8],o=i[1],l=i[5],c=i[9],u=i[2],h=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-u,n),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(o,n));break;case"ZYX":this._y=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(o,n)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,n)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Xe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,n)):(this._x=Math.atan2(-c,p),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,A===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,A){return Kh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kh,t,A)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wh.setFromEuler(this),this.setFromQuaternion(Wh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}JA.DEFAULT_ORDER="XYZ";class eh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vm=0;const Xh=new N,xi=new Kr,nr=new ft,vs=new N,Bn=new N,Gm=new N,zm=new Kr,jh=new N(1,0,0),Yh=new N(0,1,0),qh=new N(0,0,1),Jh={type:"added"},km={type:"removed"},Ci={type:"childadded",child:null},bo={type:"childremoved",child:null};class Ut extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=on(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new N,t=new JA,A=new Kr,i=new N(1,1,1);function n(){A.setFromEuler(t,!1)}function s(){t.setFromQuaternion(A,void 0,!1)}t._onChange(n),A._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:A},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ft},normalMatrix:{value:new Ge}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.multiply(xi),this}rotateOnWorldAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.premultiply(xi),this}rotateX(e){return this.rotateOnAxis(jh,e)}rotateY(e){return this.rotateOnAxis(Yh,e)}rotateZ(e){return this.rotateOnAxis(qh,e)}translateOnAxis(e,t){return Xh.copy(e).applyQuaternion(this.quaternion),this.position.add(Xh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jh,e)}translateY(e){return this.translateOnAxis(Yh,e)}translateZ(e){return this.translateOnAxis(qh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nr.copy(this.matrixWorld).invert())}lookAt(e,t,A){e.isVector3?vs.copy(e):vs.set(e,t,A);const i=this.parent;this.updateWorldMatrix(!0,!1),Bn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nr.lookAt(Bn,vs,this.up):nr.lookAt(vs,Bn,this.up),this.quaternion.setFromRotationMatrix(nr),i&&(nr.extractRotation(i.matrixWorld),xi.setFromRotationMatrix(nr),this.quaternion.premultiply(xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(vt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jh),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):vt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let A=0;A<arguments.length;A++)this.remove(arguments[A]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(km),bo.child=e,this.dispatchEvent(bo),bo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nr.multiply(e.parent.matrixWorld)),e.applyMatrix4(nr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jh),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let A=0,i=this.children.length;A<i;A++){const n=this.children[A].getObjectByProperty(e,t);if(n!==void 0)return n}}getObjectsByProperty(e,t,A=[]){this[e]===t&&A.push(this);const i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].getObjectsByProperty(e,t,A);return A}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bn,e,Gm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bn,zm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let A=0,i=t.length;A<i;A++)t[A].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let A=0,i=t.length;A<i;A++)t[A].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let A=0,i=t.length;A<i;A++)t[A].updateMatrixWorld(e)}updateWorldMatrix(e,t){const A=this.parent;if(e===!0&&A!==null&&A.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",A={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},A.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function n(a,o){return a[o.uuid]===void 0&&(a[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=n(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){const u=o[l];n(e.shapes,u)}else n(e.shapes,o)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(n(e.materials,this.material[o]));i.material=a}else i.material=n(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const o=this.animations[a];i.animations.push(n(e.animations,o))}}if(t){const a=s(e.geometries),o=s(e.materials),l=s(e.textures),c=s(e.images),u=s(e.shapes),h=s(e.skeletons),p=s(e.animations),f=s(e.nodes);a.length>0&&(A.geometries=a),o.length>0&&(A.materials=o),l.length>0&&(A.textures=l),c.length>0&&(A.images=c),u.length>0&&(A.shapes=u),h.length>0&&(A.skeletons=h),p.length>0&&(A.animations=p),f.length>0&&(A.nodes=f)}return A.object=i,A;function s(a){const o=[];for(const l in a){const c=a[l];delete c.metadata,o.push(c)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let A=0;A<e.children.length;A++){const i=e.children[A];this.add(i.clone())}return this}}Ut.DEFAULT_UP=new N(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const IA=new N,sr=new N,Mo=new N,ar=new N,Ei=new N,bi=new N,Zh=new N,Uo=new N,So=new N,Fo=new N,To=new yt,Qo=new yt,Io=new yt;class CA{constructor(e=new N,t=new N,A=new N){this.a=e,this.b=t,this.c=A}static getNormal(e,t,A,i){i.subVectors(A,t),IA.subVectors(e,t),i.cross(IA);const n=i.lengthSq();return n>0?i.multiplyScalar(1/Math.sqrt(n)):i.set(0,0,0)}static getBarycoord(e,t,A,i,n){IA.subVectors(i,t),sr.subVectors(A,t),Mo.subVectors(e,t);const s=IA.dot(IA),a=IA.dot(sr),o=IA.dot(Mo),l=sr.dot(sr),c=sr.dot(Mo),u=s*l-a*a;if(u===0)return n.set(0,0,0),null;const h=1/u,p=(l*o-a*c)*h,f=(s*c-a*o)*h;return n.set(1-p-f,f,p)}static containsPoint(e,t,A,i){return this.getBarycoord(e,t,A,i,ar)===null?!1:ar.x>=0&&ar.y>=0&&ar.x+ar.y<=1}static getInterpolation(e,t,A,i,n,s,a,o){return this.getBarycoord(e,t,A,i,ar)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(n,ar.x),o.addScaledVector(s,ar.y),o.addScaledVector(a,ar.z),o)}static getInterpolatedAttribute(e,t,A,i,n,s){return To.setScalar(0),Qo.setScalar(0),Io.setScalar(0),To.fromBufferAttribute(e,t),Qo.fromBufferAttribute(e,A),Io.fromBufferAttribute(e,i),s.setScalar(0),s.addScaledVector(To,n.x),s.addScaledVector(Qo,n.y),s.addScaledVector(Io,n.z),s}static isFrontFacing(e,t,A,i){return IA.subVectors(A,t),sr.subVectors(e,t),IA.cross(sr).dot(i)<0}set(e,t,A){return this.a.copy(e),this.b.copy(t),this.c.copy(A),this}setFromPointsAndIndices(e,t,A,i){return this.a.copy(e[t]),this.b.copy(e[A]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,A,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,A),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return IA.subVectors(this.c,this.b),sr.subVectors(this.a,this.b),IA.cross(sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return CA.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return CA.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,A,i,n){return CA.getInterpolation(e,this.a,this.b,this.c,t,A,i,n)}containsPoint(e){return CA.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return CA.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const A=this.a,i=this.b,n=this.c;let s,a;Ei.subVectors(i,A),bi.subVectors(n,A),Uo.subVectors(e,A);const o=Ei.dot(Uo),l=bi.dot(Uo);if(o<=0&&l<=0)return t.copy(A);So.subVectors(e,i);const c=Ei.dot(So),u=bi.dot(So);if(c>=0&&u<=c)return t.copy(i);const h=o*u-c*l;if(h<=0&&o>=0&&c<=0)return s=o/(o-c),t.copy(A).addScaledVector(Ei,s);Fo.subVectors(e,n);const p=Ei.dot(Fo),f=bi.dot(Fo);if(f>=0&&p<=f)return t.copy(n);const m=p*l-o*f;if(m<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(A).addScaledVector(bi,a);const g=c*f-p*u;if(g<=0&&u-c>=0&&p-f>=0)return Zh.subVectors(n,i),a=(u-c)/(u-c+(p-f)),t.copy(i).addScaledVector(Zh,a);const d=1/(g+m+h);return s=m*d,a=h*d,t.copy(A).addScaledVector(Ei,s).addScaledVector(bi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ep={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fr={h:0,s:0,l:0},ys={h:0,s:0,l:0};function Lo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Qe{constructor(e,t,A){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,A)}set(e,t,A){if(t===void 0&&A===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,A);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,A,i=qe.workingColorSpace){return this.r=e,this.g=t,this.b=A,qe.colorSpaceToWorking(this,i),this}setHSL(e,t,A,i=qe.workingColorSpace){if(e=Zc(e,1),t=Xe(t,0,1),A=Xe(A,0,1),t===0)this.r=this.g=this.b=A;else{const n=A<=.5?A*(1+t):A+t-A*t,s=2*A-n;this.r=Lo(s,n,e+1/3),this.g=Lo(s,n,e),this.b=Lo(s,n,e-1/3)}return qe.colorSpaceToWorking(this,i),this}setStyle(e,t=zt){function A(n){n!==void 0&&parseFloat(n)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return A(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return A(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,t);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return A(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=i[1],s=n.length;if(s===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(n,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const A=Ep[e.toLowerCase()];return A!==void 0?this.setHex(A,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}copyLinearToSRGB(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return qe.workingToColorSpace(Xt.copy(this),e),Math.round(Xe(Xt.r*255,0,255))*65536+Math.round(Xe(Xt.g*255,0,255))*256+Math.round(Xe(Xt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(Xt.copy(this),t);const A=Xt.r,i=Xt.g,n=Xt.b,s=Math.max(A,i,n),a=Math.min(A,i,n);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const u=s-a;switch(l=c<=.5?u/(s+a):u/(2-s-a),s){case A:o=(i-n)/u+(i<n?6:0);break;case i:o=(n-A)/u+2;break;case n:o=(A-i)/u+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=zt){qe.workingToColorSpace(Xt.copy(this),e);const t=Xt.r,A=Xt.g,i=Xt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${A.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(A*255)},${Math.round(i*255)})`}offsetHSL(e,t,A){return this.getHSL(Fr),this.setHSL(Fr.h+e,Fr.s+t,Fr.l+A)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,A){return this.r=e.r+(t.r-e.r)*A,this.g=e.g+(t.g-e.g)*A,this.b=e.b+(t.b-e.b)*A,this}lerpHSL(e,t){this.getHSL(Fr),e.getHSL(ys);const A=Pn(Fr.h,ys.h,t),i=Pn(Fr.s,ys.s,t),n=Pn(Fr.l,ys.l,t);return this.setHSL(A,i,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,A=this.g,i=this.b,n=e.elements;return this.r=n[0]*t+n[3]*A+n[6]*i,this.g=n[1]*t+n[4]*A+n[7]*i,this.b=n[2]*t+n[5]*A+n[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Qe;Qe.NAMES=Ep;let Km=0,Xr=class extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=on(),this.name="",this.type="Material",this.blending=ji,this.side=kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bl,this.blendDst=Ml,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mi,this.stencilZFail=mi,this.stencilZPass=mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(r){this._alphaTest>0!=r>0&&this.version++,this._alphaTest=r}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(r){if(r!==void 0)for(const e in r){const t=r[e];if(t===void 0){De(`Material: parameter '${e}' has value of undefined.`);continue}const A=this[e];if(A===void 0){De(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}A&&A.isColor?A.set(t):A&&A.isVector3&&t&&t.isVector3?A.copy(t):this[e]=t}}toJSON(r){const e=r===void 0||typeof r=="string";e&&(r={textures:{},images:{}});const t={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen!==void 0&&(t.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(t.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(t.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(t.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(t.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(r).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(r).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(r).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(t.sheenColorMap=this.sheenColorMap.toJSON(r).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(t.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(r).uuid),this.dispersion!==void 0&&(t.dispersion=this.dispersion),this.iridescence!==void 0&&(t.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(t.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(t.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(t.iridescenceMap=this.iridescenceMap.toJSON(r).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(t.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(r).uuid),this.anisotropy!==void 0&&(t.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(t.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(t.anisotropyMap=this.anisotropyMap.toJSON(r).uuid),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(r).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(r).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(r).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(r).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(r).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(r).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(r).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(r).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(r).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(r).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(r).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(r).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(t.specularIntensityMap=this.specularIntensityMap.toJSON(r).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(t.specularColorMap=this.specularColorMap.toJSON(r).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(r).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapRotation!==void 0&&(t.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(r).uuid),this.transmission!==void 0&&(t.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(t.transmissionMap=this.transmissionMap.toJSON(r).uuid),this.thickness!==void 0&&(t.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(t.thicknessMap=this.thicknessMap.toJSON(r).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(t.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(t.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(t.blending=this.blending),this.side!==kr&&(t.side=this.side),this.vertexColors===!0&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=!0),this.blendSrc!==bl&&(t.blendSrc=this.blendSrc),this.blendDst!==Ml&&(t.blendDst=this.blendDst),this.blendEquation!==ii&&(t.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(t.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(t.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(t.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(t.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(t.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(t.depthFunc=this.depthFunc),this.depthTest===!1&&(t.depthTest=this.depthTest),this.depthWrite===!1&&(t.depthWrite=this.depthWrite),this.colorWrite===!1&&(t.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(t.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dh&&(t.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(t.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(t.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mi&&(t.stencilFail=this.stencilFail),this.stencilZFail!==mi&&(t.stencilZFail=this.stencilZFail),this.stencilZPass!==mi&&(t.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(t.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaHash===!0&&(t.alphaHash=!0),this.alphaToCoverage===!0&&(t.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=!0),this.forceSinglePass===!0&&(t.forceSinglePass=!0),this.wireframe===!0&&(t.wireframe=!0),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(t.flatShading=!0),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),this.fog===!1&&(t.fog=!1),Object.keys(this.userData).length>0&&(t.userData=this.userData);function A(i){const n=[];for(const s in i){const a=i[s];delete a.metadata,n.push(a)}return n}if(e){const i=A(r.textures),n=A(r.images);i.length>0&&(t.textures=i),n.length>0&&(t.images=n)}return t}clone(){return new this.constructor().copy(this)}copy(r){this.name=r.name,this.blending=r.blending,this.side=r.side,this.vertexColors=r.vertexColors,this.opacity=r.opacity,this.transparent=r.transparent,this.blendSrc=r.blendSrc,this.blendDst=r.blendDst,this.blendEquation=r.blendEquation,this.blendSrcAlpha=r.blendSrcAlpha,this.blendDstAlpha=r.blendDstAlpha,this.blendEquationAlpha=r.blendEquationAlpha,this.blendColor.copy(r.blendColor),this.blendAlpha=r.blendAlpha,this.depthFunc=r.depthFunc,this.depthTest=r.depthTest,this.depthWrite=r.depthWrite,this.stencilWriteMask=r.stencilWriteMask,this.stencilFunc=r.stencilFunc,this.stencilRef=r.stencilRef,this.stencilFuncMask=r.stencilFuncMask,this.stencilFail=r.stencilFail,this.stencilZFail=r.stencilZFail,this.stencilZPass=r.stencilZPass,this.stencilWrite=r.stencilWrite;const e=r.clippingPlanes;let t=null;if(e!==null){const A=e.length;t=new Array(A);for(let i=0;i!==A;++i)t[i]=e[i].clone()}return this.clippingPlanes=t,this.clipIntersection=r.clipIntersection,this.clipShadows=r.clipShadows,this.shadowSide=r.shadowSide,this.colorWrite=r.colorWrite,this.precision=r.precision,this.polygonOffset=r.polygonOffset,this.polygonOffsetFactor=r.polygonOffsetFactor,this.polygonOffsetUnits=r.polygonOffsetUnits,this.dithering=r.dithering,this.alphaTest=r.alphaTest,this.alphaHash=r.alphaHash,this.alphaToCoverage=r.alphaToCoverage,this.premultipliedAlpha=r.premultipliedAlpha,this.forceSinglePass=r.forceSinglePass,this.visible=r.visible,this.toneMapped=r.toneMapped,this.userData=JSON.parse(JSON.stringify(r.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(r){r===!0&&this.version++}};class cn extends Xr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new JA,this.combine=dp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new N,_s=new Ee;let Wm=0;class hA{constructor(e,t,A=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=A,this.usage=Hh,this.updateRanges=[],this.gpuType=wr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,A){e*=this.itemSize,A*=t.itemSize;for(let i=0,n=this.itemSize;i<n;i++)this.array[e+i]=t.array[A+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,A=this.count;t<A;t++)_s.fromBufferAttribute(this,t),_s.applyMatrix3(e),this.setXY(t,_s.x,_s.y);else if(this.itemSize===3)for(let t=0,A=this.count;t<A;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,A=this.count;t<A;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,A=this.count;t<A;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,A=this.count;t<A;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let A=this.array[e*this.itemSize+t];return this.normalized&&(A=Ni(A,this.array)),A}setComponent(e,t,A){return this.normalized&&(A=qt(A,this.array)),this.array[e*this.itemSize+t]=A,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,A){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),A=qt(A,this.array)),this.array[e+0]=t,this.array[e+1]=A,this}setXYZ(e,t,A,i){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),A=qt(A,this.array),i=qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=A,this.array[e+2]=i,this}setXYZW(e,t,A,i,n){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),A=qt(A,this.array),i=qt(i,this.array),n=qt(n,this.array)),this.array[e+0]=t,this.array[e+1]=A,this.array[e+2]=i,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hh&&(e.usage=this.usage),e}}class bp extends hA{constructor(e,t,A){super(new Uint16Array(e),t,A)}}class Mp extends hA{constructor(e,t,A){super(new Uint32Array(e),t,A)}}class Pt extends hA{constructor(e,t,A){super(new Float32Array(e),t,A)}}let Xm=0;const _A=new ft,Ro=new Ut,Mi=new N,fA=new ln,wn=new ln,Rt=new N;class uA extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=on(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xp(e)?Mp:bp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,A=0){this.groups.push({start:e,count:t,materialIndex:A})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const A=this.attributes.normal;if(A!==void 0){const n=new Ge().getNormalMatrix(e);A.applyNormalMatrix(n),A.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _A.makeRotationFromQuaternion(e),this.applyMatrix4(_A),this}rotateX(e){return _A.makeRotationX(e),this.applyMatrix4(_A),this}rotateY(e){return _A.makeRotationY(e),this.applyMatrix4(_A),this}rotateZ(e){return _A.makeRotationZ(e),this.applyMatrix4(_A),this}translate(e,t,A){return _A.makeTranslation(e,t,A),this.applyMatrix4(_A),this}scale(e,t,A){return _A.makeScale(e,t,A),this.applyMatrix4(_A),this}lookAt(e){return Ro.lookAt(e),Ro.updateMatrix(),this.applyMatrix4(Ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const A=[];for(let i=0,n=e.length;i<n;i++){const s=e[i];A.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Pt(A,3))}else{const A=Math.min(e.length,t.count);for(let i=0;i<A;i++){const n=e[i];t.setXYZ(i,n.x,n.y,n.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let A=0,i=t.length;A<i;A++){const n=t[A];fA.setFromBufferAttribute(n),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,fA.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,fA.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(fA.min),this.boundingBox.expandByPoint(fA.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ja);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const A=this.boundingSphere.center;if(fA.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];wn.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(fA.min,wn.min),fA.expandByPoint(Rt),Rt.addVectors(fA.max,wn.max),fA.expandByPoint(Rt)):(fA.expandByPoint(wn.min),fA.expandByPoint(wn.max))}fA.getCenter(A);let i=0;for(let n=0,s=e.count;n<s;n++)Rt.fromBufferAttribute(e,n),i=Math.max(i,A.distanceToSquared(Rt));if(t)for(let n=0,s=t.length;n<s;n++){const a=t[n],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++)Rt.fromBufferAttribute(a,l),o&&(Mi.fromBufferAttribute(e,l),Rt.add(Mi)),i=Math.max(i,A.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const A=t.position,i=t.normal,n=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hA(new Float32Array(4*A.count),4));const s=this.getAttribute("tangent"),a=[],o=[];for(let S=0;S<A.count;S++)a[S]=new N,o[S]=new N;const l=new N,c=new N,u=new N,h=new Ee,p=new Ee,f=new Ee,m=new N,g=new N;function d(S,C,_){l.fromBufferAttribute(A,S),c.fromBufferAttribute(A,C),u.fromBufferAttribute(A,_),h.fromBufferAttribute(n,S),p.fromBufferAttribute(n,C),f.fromBufferAttribute(n,_),c.sub(l),u.sub(l),p.sub(h),f.sub(h);const F=1/(p.x*f.y-f.x*p.y);isFinite(F)&&(m.copy(c).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(F),g.copy(u).multiplyScalar(p.x).addScaledVector(c,-f.x).multiplyScalar(F),a[S].add(m),a[C].add(m),a[_].add(m),o[S].add(g),o[C].add(g),o[_].add(g))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let S=0,C=B.length;S<C;++S){const _=B[S],F=_.start,T=_.count;for(let I=F,L=F+T;I<L;I+=3)d(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const v=new N,y=new N,x=new N,w=new N;function M(S){x.fromBufferAttribute(i,S),w.copy(x);const C=a[S];v.copy(C),v.sub(x.multiplyScalar(x.dot(C))).normalize(),y.crossVectors(w,C);const _=y.dot(o[S])<0?-1:1;s.setXYZW(S,v.x,v.y,v.z,_)}for(let S=0,C=B.length;S<C;++S){const _=B[S],F=_.start,T=_.count;for(let I=F,L=F+T;I<L;I+=3)M(e.getX(I+0)),M(e.getX(I+1)),M(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let A=this.getAttribute("normal");if(A===void 0)A=new hA(new Float32Array(t.count*3),3),this.setAttribute("normal",A);else for(let h=0,p=A.count;h<p;h++)A.setXYZ(h,0,0,0);const i=new N,n=new N,s=new N,a=new N,o=new N,l=new N,c=new N,u=new N;if(e)for(let h=0,p=e.count;h<p;h+=3){const f=e.getX(h+0),m=e.getX(h+1),g=e.getX(h+2);i.fromBufferAttribute(t,f),n.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),c.subVectors(s,n),u.subVectors(i,n),c.cross(u),a.fromBufferAttribute(A,f),o.fromBufferAttribute(A,m),l.fromBufferAttribute(A,g),a.add(c),o.add(c),l.add(c),A.setXYZ(f,a.x,a.y,a.z),A.setXYZ(m,o.x,o.y,o.z),A.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)i.fromBufferAttribute(t,h+0),n.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),c.subVectors(s,n),u.subVectors(i,n),c.cross(u),A.setXYZ(h+0,c.x,c.y,c.z),A.setXYZ(h+1,c.x,c.y,c.z),A.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),A.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,A=e.count;t<A;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,o){const l=a.array,c=a.itemSize,u=a.normalized,h=new l.constructor(o.length*c);let p=0,f=0;for(let m=0,g=o.length;m<g;m++){a.isInterleavedBufferAttribute?p=o[m]*a.data.stride+a.offset:p=o[m]*c;for(let d=0;d<c;d++)h[f++]=l[p++]}return new hA(h,c,u)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new uA,A=this.index.array,i=this.attributes;for(const a in i){const o=i[a],l=e(o,A);t.setAttribute(a,l)}const n=this.morphAttributes;for(const a in n){const o=[],l=n[a];for(let c=0,u=l.length;c<u;c++){const h=l[c],p=e(h,A);o.push(p)}t.morphAttributes[a]=o}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,o=s.length;a<o;a++){const l=s[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const l in o)o[l]!==void 0&&(e[l]=o[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const A=this.attributes;for(const o in A){const l=A[o];e.data.attributes[o]=l.toJSON(e.data)}const i={};let n=!1;for(const o in this.morphAttributes){const l=this.morphAttributes[o],c=[];for(let u=0,h=l.length;u<h;u++){const p=l[u];c.push(p.toJSON(e.data))}c.length>0&&(i[o]=c,n=!0)}n&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const A=e.index;A!==null&&this.setIndex(A.clone());const i=e.attributes;for(const l in i){const c=i[l];this.setAttribute(l,c.clone(t))}const n=e.morphAttributes;for(const l in n){const c=[],u=n[l];for(let h=0,p=u.length;h<p;h++)c.push(u[h].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,c=s.length;l<c;l++){const u=s[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $h=new ft,Zr=new Ya,xs=new ja,eu=new N,Cs=new N,Es=new N,bs=new N,Do=new N,Ms=new N,tu=new N,Us=new N;class iA extends Ut{constructor(e=new uA,t=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const A=e[t[0]];if(A!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,n=A.length;i<n;i++){const s=A[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}getVertexPosition(e,t){const A=this.geometry,i=A.attributes.position,n=A.morphAttributes.position,s=A.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(n&&a){Ms.set(0,0,0);for(let o=0,l=n.length;o<l;o++){const c=a[o],u=n[o];c!==0&&(Do.fromBufferAttribute(u,e),s?Ms.addScaledVector(Do,c):Ms.addScaledVector(Do.sub(t),c))}t.add(Ms)}return t}raycast(e,t){const A=this.geometry,i=this.material,n=this.matrixWorld;i!==void 0&&(A.boundingSphere===null&&A.computeBoundingSphere(),xs.copy(A.boundingSphere),xs.applyMatrix4(n),Zr.copy(e.ray).recast(e.near),!(xs.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(xs,eu)===null||Zr.origin.distanceToSquared(eu)>(e.far-e.near)**2))&&($h.copy(n).invert(),Zr.copy(e.ray).applyMatrix4($h),!(A.boundingBox!==null&&Zr.intersectsBox(A.boundingBox)===!1)&&this._computeIntersections(e,t,Zr)))}_computeIntersections(e,t,A){let i;const n=this.geometry,s=this.material,a=n.index,o=n.attributes.position,l=n.attributes.uv,c=n.attributes.uv1,u=n.attributes.normal,h=n.groups,p=n.drawRange;if(a!==null)if(Array.isArray(s))for(let f=0,m=h.length;f<m;f++){const g=h[f],d=s[g.materialIndex],B=Math.max(g.start,p.start),v=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=B,x=v;y<x;y+=3){const w=a.getX(y),M=a.getX(y+1),S=a.getX(y+2);i=Ss(this,d,e,A,l,c,u,w,M,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const f=Math.max(0,p.start),m=Math.min(a.count,p.start+p.count);for(let g=f,d=m;g<d;g+=3){const B=a.getX(g),v=a.getX(g+1),y=a.getX(g+2);i=Ss(this,s,e,A,l,c,u,B,v,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(o!==void 0)if(Array.isArray(s))for(let f=0,m=h.length;f<m;f++){const g=h[f],d=s[g.materialIndex],B=Math.max(g.start,p.start),v=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let y=B,x=v;y<x;y+=3){const w=y,M=y+1,S=y+2;i=Ss(this,d,e,A,l,c,u,w,M,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const f=Math.max(0,p.start),m=Math.min(o.count,p.start+p.count);for(let g=f,d=m;g<d;g+=3){const B=g,v=g+1,y=g+2;i=Ss(this,s,e,A,l,c,u,B,v,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function jm(r,e,t,A,i,n,s,a){let o;if(e.side===cA?o=A.intersectTriangle(s,n,i,!0,a):o=A.intersectTriangle(i,n,s,e.side===kr,a),o===null)return null;Us.copy(a),Us.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Us);return l<t.near||l>t.far?null:{distance:l,point:Us.clone(),object:r}}function Ss(r,e,t,A,i,n,s,a,o,l){r.getVertexPosition(a,Cs),r.getVertexPosition(o,Es),r.getVertexPosition(l,bs);const c=jm(r,e,t,A,Cs,Es,bs,tu);if(c){const u=new N;CA.getBarycoord(tu,Cs,Es,bs,u),i&&(c.uv=CA.getInterpolatedAttribute(i,a,o,l,u,new Ee)),n&&(c.uv1=CA.getInterpolatedAttribute(n,a,o,l,u,new Ee)),s&&(c.normal=CA.getInterpolatedAttribute(s,a,o,l,u,new N),c.normal.dot(A.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:o,c:l,normal:new N,materialIndex:0};CA.getNormal(Cs,Es,bs,h.normal),c.face=h,c.barycoord=u}return c}class hn extends uA{constructor(e=1,t=1,A=1,i=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:A,widthSegments:i,heightSegments:n,depthSegments:s};const a=this;i=Math.floor(i),n=Math.floor(n),s=Math.floor(s);const o=[],l=[],c=[],u=[];let h=0,p=0;f("z","y","x",-1,-1,A,t,e,s,n,0),f("z","y","x",1,-1,A,t,-e,s,n,1),f("x","z","y",1,1,e,A,t,i,s,2),f("x","z","y",1,-1,e,A,-t,i,s,3),f("x","y","z",1,-1,e,t,A,i,n,4),f("x","y","z",-1,-1,e,t,-A,i,n,5),this.setIndex(o),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(c,3)),this.setAttribute("uv",new Pt(u,2));function f(m,g,d,B,v,y,x,w,M,S,C){const _=y/M,F=x/S,T=y/2,I=x/2,L=w/2,P=M+1,R=S+1;let k=0,z=0;const X=new N;for(let te=0;te<R;te++){const ve=te*F-I;for(let re=0;re<P;re++){const Ne=re*_-T;X[m]=Ne*B,X[g]=ve*v,X[d]=L,l.push(X.x,X.y,X.z),X[m]=0,X[g]=0,X[d]=w>0?1:-1,c.push(X.x,X.y,X.z),u.push(re/M),u.push(1-te/S),k+=1}}for(let te=0;te<S;te++)for(let ve=0;ve<M;ve++){const re=h+ve+P*te,Ne=h+ve+P*(te+1),je=h+(ve+1)+P*(te+1),Ke=h+(ve+1)+P*te;o.push(re,Ne,Ke),o.push(Ne,je,Ke),z+=6}a.addGroup(p,z,C),p+=z,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rn(r){const e={};for(const t in r){e[t]={};for(const A in r[t]){const i=r[t][A];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][A]=null):e[t][A]=i.clone():Array.isArray(i)?e[t][A]=i.slice():e[t][A]=i}}return e}function Jt(r){const e={};for(let t=0;t<r.length;t++){const A=rn(r[t]);for(const i in A)e[i]=A[i]}return e}function Ym(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Up(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Ua={clone:rn,merge:Jt};var qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class AA extends Xr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qm,this.fragmentShader=Jm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rn(e.uniforms),this.uniformsGroups=Ym(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const n=this.uniforms[i].value;n&&n.isTexture?t.uniforms[i]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[i]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[i]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[i]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[i]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[i]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[i]={type:"m4",value:n.toArray()}:t.uniforms[i]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const A={};for(const i in this.extensions)this.extensions[i]===!0&&(A[i]=!0);return Object.keys(A).length>0&&(t.extensions=A),t}}class Sp extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=WA,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tr=new N,Au=new Ee,ru=new Ee;class mA extends Sp{constructor(e=50,t=1,A=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=A,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=An*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return An*2*Math.atan(Math.tan(Yi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,A){Tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z),Tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),A.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z)}getViewSize(e,t){return this.getViewBounds(e,Au,ru),t.subVectors(ru,Au)}setViewOffset(e,t,A,i,n,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=A,this.view.offsetY=i,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yi*.5*this.fov)/this.zoom,A=2*t,i=this.aspect*A,n=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,l=s.fullHeight;n+=s.offsetX*i/o,t-=s.offsetY*A/l,i*=s.width/o,A*=s.height/l}const a=this.filmOffset;a!==0&&(n+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+i,t,t-A,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ui=-90,Si=1;class Zm extends Ut{constructor(e,t,A){super(),this.type="CubeCamera",this.renderTarget=A,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new mA(Ui,Si,e,t);i.layers=this.layers,this.add(i);const n=new mA(Ui,Si,e,t);n.layers=this.layers,this.add(n);const s=new mA(Ui,Si,e,t);s.layers=this.layers,this.add(s);const a=new mA(Ui,Si,e,t);a.layers=this.layers,this.add(a);const o=new mA(Ui,Si,e,t);o.layers=this.layers,this.add(o);const l=new mA(Ui,Si,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[A,i,n,s,a,o]=t;for(const l of t)this.remove(l);if(e===WA)A.up.set(0,1,0),A.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===ba)A.up.set(0,-1,0),A.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:A,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[n,s,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;const m=A.texture.generateMipmaps;A.texture.generateMipmaps=!1,e.setRenderTarget(A,0,i),e.render(t,n),e.setRenderTarget(A,1,i),e.render(t,s),e.setRenderTarget(A,2,i),e.render(t,a),e.setRenderTarget(A,3,i),e.render(t,o),e.setRenderTarget(A,4,i),e.render(t,l),A.texture.generateMipmaps=m,e.setRenderTarget(A,5,i),e.render(t,c),e.setRenderTarget(u,h,p),e.xr.enabled=f,A.texture.needsPMREMUpdate=!0}}class Fp extends Yt{constructor(e=[],t=$i,A,i,n,s,a,o,l,c){super(e,t,A,i,n,s,a,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $m extends PA{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const A={width:e,height:e,depth:1},i=[A,A,A,A,A,A];this.texture=new Fp(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const A={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new hn(5,5,5),n=new AA({name:"CubemapFromEquirect",uniforms:rn(A.uniforms),vertexShader:A.vertexShader,fragmentShader:A.fragmentShader,side:cA,blending:XA});n.uniforms.tEquirect.value=t;const s=new iA(i,n),a=t.minFilter;return t.minFilter===ai&&(t.minFilter=EA),new Zm(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,A=!0,i=!0){const n=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,A,i);e.setRenderTarget(n)}}class zi extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eB={type:"move"};class Ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const A of e.hand.values())this._getHandJoint(t,A)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,A){let i=null,n=null,s=null;const a=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const m of e.hand.values()){const g=t.getJointPose(m,A),d=this._getHandJoint(l,m);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=c.position.distanceTo(u.position),p=.02,f=.005;l.inputState.pinching&&h>p+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,A),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,A),i===null&&n!==null&&(i=n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eB)))}return a!==null&&(a.visible=i!==null),o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const A=new zi;A.matrixAutoUpdate=!1,A.visible=!1,e.joints[t.jointName]=A,e.add(A)}return e.joints[t.jointName]}}class th{constructor(e,t=1,A=1e3){this.isFog=!0,this.name="",this.color=new Qe(e),this.near=t,this.far=A}clone(){return new th(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class tB extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new JA,this.environmentIntensity=1,this.environmentRotation=new JA,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Tp extends Yt{constructor(e=null,t=1,A=1,i,n,s,a,o,l=rA,c=rA,u,h){super(null,s,a,o,l,c,i,n,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:A},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Po=new N,AB=new N,rB=new Ge;class gr{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,A,i){return this.normal.set(e,t,A),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,A){const i=Po.subVectors(A,t).cross(AB.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const A=e.delta(Po),i=this.normal.dot(A);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/i;return n<0||n>1?null:t.copy(e.start).addScaledVector(A,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),A=this.distanceToPoint(e.end);return t<0&&A>0||A<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const A=t||rB.getNormalMatrix(e),i=this.coplanarPoint(Po).applyMatrix4(e),n=this.normal.applyMatrix3(A).normalize();return this.constant=-i.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $r=new ja,iB=new Ee(.5,.5),Fs=new N;class Ah{constructor(e=new gr,t=new gr,A=new gr,i=new gr,n=new gr,s=new gr){this.planes=[e,t,A,i,n,s]}set(e,t,A,i,n,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(A),a[3].copy(i),a[4].copy(n),a[5].copy(s),this}copy(e){const t=this.planes;for(let A=0;A<6;A++)t[A].copy(e.planes[A]);return this}setFromProjectionMatrix(e,t=WA,A=!1){const i=this.planes,n=e.elements,s=n[0],a=n[1],o=n[2],l=n[3],c=n[4],u=n[5],h=n[6],p=n[7],f=n[8],m=n[9],g=n[10],d=n[11],B=n[12],v=n[13],y=n[14],x=n[15];if(i[0].setComponents(l-s,p-c,d-f,x-B).normalize(),i[1].setComponents(l+s,p+c,d+f,x+B).normalize(),i[2].setComponents(l+a,p+u,d+m,x+v).normalize(),i[3].setComponents(l-a,p-u,d-m,x-v).normalize(),A)i[4].setComponents(o,h,g,y).normalize(),i[5].setComponents(l-o,p-h,d-g,x-y).normalize();else if(i[4].setComponents(l-o,p-h,d-g,x-y).normalize(),t===WA)i[5].setComponents(l+o,p+h,d+g,x+y).normalize();else if(t===ba)i[5].setComponents(o,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$r.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(e){$r.center.set(0,0,0);const t=iB.distanceTo(e.center);return $r.radius=.7071067811865476+t,$r.applyMatrix4(e.matrixWorld),this.intersectsSphere($r)}intersectsSphere(e){const t=this.planes,A=e.center,i=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(A)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let A=0;A<6;A++){const i=t[A];if(Fs.x=i.normal.x>0?e.max.x:e.min.x,Fs.y=i.normal.y>0?e.max.y:e.min.y,Fs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let A=0;A<6;A++)if(t[A].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rh extends Xr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sa=new N,Fa=new N,iu=new ft,vn=new Ya,Ts=new ja,No=new N,nu=new N;class nB extends Ut{constructor(e=new uA,t=new rh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,A=[0];for(let i=1,n=t.count;i<n;i++)Sa.fromBufferAttribute(t,i-1),Fa.fromBufferAttribute(t,i),A[i]=A[i-1],A[i]+=Sa.distanceTo(Fa);e.setAttribute("lineDistance",new Pt(A,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const A=this.geometry,i=this.matrixWorld,n=e.params.Line.threshold,s=A.drawRange;if(A.boundingSphere===null&&A.computeBoundingSphere(),Ts.copy(A.boundingSphere),Ts.applyMatrix4(i),Ts.radius+=n,e.ray.intersectsSphere(Ts)===!1)return;iu.copy(i).invert(),vn.copy(e.ray).applyMatrix4(iu);const a=n/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=this.isLineSegments?2:1,c=A.index,u=A.attributes.position;if(c!==null){const h=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let f=h,m=p-1;f<m;f+=l){const g=c.getX(f),d=c.getX(f+1),B=Qs(this,e,vn,o,g,d,f);B&&t.push(B)}if(this.isLineLoop){const f=c.getX(p-1),m=c.getX(h),g=Qs(this,e,vn,o,f,m,p-1);g&&t.push(g)}}else{const h=Math.max(0,s.start),p=Math.min(u.count,s.start+s.count);for(let f=h,m=p-1;f<m;f+=l){const g=Qs(this,e,vn,o,f,f+1,f);g&&t.push(g)}if(this.isLineLoop){const f=Qs(this,e,vn,o,p-1,h,p-1);f&&t.push(f)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const A=e[t[0]];if(A!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,n=A.length;i<n;i++){const s=A[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}}function Qs(r,e,t,A,i,n,s){const a=r.geometry.attributes.position;if(Sa.fromBufferAttribute(a,i),Fa.fromBufferAttribute(a,n),t.distanceSqToSegment(Sa,Fa,No,nu)>A)return;No.applyMatrix4(r.matrixWorld);const o=e.ray.origin.distanceTo(No);if(!(o<e.near||o>e.far))return{distance:o,point:nu.clone().applyMatrix4(r.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:r}}const su=new N,au=new N;class Qp extends nB{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,A=[];for(let i=0,n=t.count;i<n;i+=2)su.fromBufferAttribute(t,i),au.fromBufferAttribute(t,i+1),A[i]=i===0?0:A[i-1],A[i+1]=A[i]+su.distanceTo(au);e.setAttribute("lineDistance",new Pt(A,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ip extends Yt{constructor(e,t,A,i,n,s,a,o,l){super(e,t,A,i,n,s,a,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Lp extends Yt{constructor(e,t,A=di,i,n,s,a=rA,o=rA,l,c=jn,u=1){if(c!==jn&&c!==Yn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,i,n,s,a,o,c,A,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $c(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Rp extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}const Is=new N,Ls=new N,Oo=new N,Rs=new CA;class sB extends uA{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const A=Math.pow(10,4),i=Math.cos(Yi*t),n=e.getIndex(),s=e.getAttribute("position"),a=n?n.count:s.count,o=[0,0,0],l=["a","b","c"],c=new Array(3),u={},h=[];for(let p=0;p<a;p+=3){n?(o[0]=n.getX(p),o[1]=n.getX(p+1),o[2]=n.getX(p+2)):(o[0]=p,o[1]=p+1,o[2]=p+2);const{a:f,b:m,c:g}=Rs;if(f.fromBufferAttribute(s,o[0]),m.fromBufferAttribute(s,o[1]),g.fromBufferAttribute(s,o[2]),Rs.getNormal(Oo),c[0]=`${Math.round(f.x*A)},${Math.round(f.y*A)},${Math.round(f.z*A)}`,c[1]=`${Math.round(m.x*A)},${Math.round(m.y*A)},${Math.round(m.z*A)}`,c[2]=`${Math.round(g.x*A)},${Math.round(g.y*A)},${Math.round(g.z*A)}`,!(c[0]===c[1]||c[1]===c[2]||c[2]===c[0]))for(let d=0;d<3;d++){const B=(d+1)%3,v=c[d],y=c[B],x=Rs[l[d]],w=Rs[l[B]],M=`${v}_${y}`,S=`${y}_${v}`;S in u&&u[S]?(Oo.dot(u[S].normal)<=i&&(h.push(x.x,x.y,x.z),h.push(w.x,w.y,w.z)),u[S]=null):M in u||(u[M]={index0:o[d],index1:o[B],normal:Oo.clone()})}}for(const p in u)if(u[p]){const{index0:f,index1:m}=u[p];Is.fromBufferAttribute(s,f),Ls.fromBufferAttribute(s,m),h.push(Is.x,Is.y,Is.z),h.push(Ls.x,Ls.y,Ls.z)}this.setAttribute("position",new Pt(h,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class aB{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){De("Curve: .getPoint() not implemented.")}getPointAt(e,t){const A=this.getUtoTmapping(e);return this.getPoint(A,t)}getPoints(e=5){const t=[];for(let A=0;A<=e;A++)t.push(this.getPoint(A/e));return t}getSpacedPoints(e=5){const t=[];for(let A=0;A<=e;A++)t.push(this.getPointAt(A/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let A,i=this.getPoint(0),n=0;t.push(0);for(let s=1;s<=e;s++)A=this.getPoint(s/e),n+=A.distanceTo(i),t.push(n),i=A;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const A=this.getLengths();let i=0;const n=A.length;let s;t?s=t:s=e*A[n-1];let a=0,o=n-1,l;for(;a<=o;)if(i=Math.floor(a+(o-a)/2),l=A[i]-s,l<0)a=i+1;else if(l>0)o=i-1;else{o=i;break}if(i=o,A[i]===s)return i/(n-1);const c=A[i],u=A[i+1]-c,h=(s-c)/u;return(i+h)/(n-1)}getTangent(e,t){let A=e-1e-4,i=e+1e-4;A<0&&(A=0),i>1&&(i=1);const n=this.getPoint(A),s=this.getPoint(i),a=t||(n.isVector2?new Ee:new N);return a.copy(s).sub(n).normalize(),a}getTangentAt(e,t){const A=this.getUtoTmapping(e);return this.getTangent(A,t)}computeFrenetFrames(e,t=!1){const A=new N,i=[],n=[],s=[],a=new N,o=new ft;for(let p=0;p<=e;p++){const f=p/e;i[p]=this.getTangentAt(f,new N)}n[0]=new N,s[0]=new N;let l=Number.MAX_VALUE;const c=Math.abs(i[0].x),u=Math.abs(i[0].y),h=Math.abs(i[0].z);c<=l&&(l=c,A.set(1,0,0)),u<=l&&(l=u,A.set(0,1,0)),h<=l&&A.set(0,0,1),a.crossVectors(i[0],A).normalize(),n[0].crossVectors(i[0],a),s[0].crossVectors(i[0],n[0]);for(let p=1;p<=e;p++){if(n[p]=n[p-1].clone(),s[p]=s[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const f=Math.acos(Xe(i[p-1].dot(i[p]),-1,1));n[p].applyMatrix4(o.makeRotationAxis(a,f))}s[p].crossVectors(i[p],n[p])}if(t===!0){let p=Math.acos(Xe(n[0].dot(n[e]),-1,1));p/=e,i[0].dot(a.crossVectors(n[0],n[e]))>0&&(p=-p);for(let f=1;f<=e;f++)n[f].applyMatrix4(o.makeRotationAxis(i[f],p*f)),s[f].crossVectors(i[f],n[f])}return{tangents:i,normals:n,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function ih(){let r=0,e=0,t=0,A=0;function i(n,s,a,o){r=n,e=a,t=-3*n+3*s-2*a-o,A=2*n-2*s+a+o}return{initCatmullRom:function(n,s,a,o,l){i(s,a,l*(a-n),l*(o-s))},initNonuniformCatmullRom:function(n,s,a,o,l,c,u){let h=(s-n)/l-(a-n)/(l+c)+(a-s)/c,p=(a-s)/c-(o-s)/(c+u)+(o-a)/u;h*=c,p*=c,i(s,a,h,p)},calc:function(n){const s=n*n,a=s*n;return r+e*n+t*s+A*a}}}const Ds=new N,Vo=new ih,Go=new ih,zo=new ih;class uc extends aB{constructor(e=[],t=!1,A="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=A,this.tension=i}getPoint(e,t=new N){const A=t,i=this.points,n=i.length,s=(n-(this.closed?0:1))*e;let a=Math.floor(s),o=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/n)+1)*n:o===0&&a===n-1&&(a=n-2,o=1);let l,c;this.closed||a>0?l=i[(a-1)%n]:(Ds.subVectors(i[0],i[1]).add(i[0]),l=Ds);const u=i[a%n],h=i[(a+1)%n];if(this.closed||a+2<n?c=i[(a+2)%n]:(Ds.subVectors(i[n-1],i[n-2]).add(i[n-1]),c=Ds),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let f=Math.pow(l.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(c),p);m<1e-4&&(m=1),f<1e-4&&(f=m),g<1e-4&&(g=m),Vo.initNonuniformCatmullRom(l.x,u.x,h.x,c.x,f,m,g),Go.initNonuniformCatmullRom(l.y,u.y,h.y,c.y,f,m,g),zo.initNonuniformCatmullRom(l.z,u.z,h.z,c.z,f,m,g)}else this.curveType==="catmullrom"&&(Vo.initCatmullRom(l.x,u.x,h.x,c.x,this.tension),Go.initCatmullRom(l.y,u.y,h.y,c.y,this.tension),zo.initCatmullRom(l.z,u.z,h.z,c.z,this.tension));return A.set(Vo.calc(o),Go.calc(o),zo.calc(o)),A}copy(e){super.copy(e),this.points=[];for(let t=0,A=e.points.length;t<A;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,A=this.points.length;t<A;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,A=e.points.length;t<A;t++){const i=e.points[t];this.points.push(new N().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class ts extends uA{constructor(e=1,t=1,A=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:A,heightSegments:i};const n=e/2,s=t/2,a=Math.floor(A),o=Math.floor(i),l=a+1,c=o+1,u=e/a,h=t/o,p=[],f=[],m=[],g=[];for(let d=0;d<c;d++){const B=d*h-s;for(let v=0;v<l;v++){const y=v*u-n;f.push(y,-B,0),m.push(0,0,1),g.push(v/a),g.push(1-d/o)}}for(let d=0;d<o;d++)for(let B=0;B<a;B++){const v=B+l*d,y=B+l*(d+1),x=B+1+l*(d+1),w=B+1+l*d;p.push(v,y,w),p.push(y,x,w)}this.setIndex(p),this.setAttribute("position",new Pt(f,3)),this.setAttribute("normal",new Pt(m,3)),this.setAttribute("uv",new Pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ts(e.width,e.height,e.widthSegments,e.heightSegments)}}class nh extends uA{constructor(e=1,t=32,A=16,i=0,n=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:A,phiStart:i,phiLength:n,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),A=Math.max(2,Math.floor(A));const o=Math.min(s+a,Math.PI);let l=0;const c=[],u=new N,h=new N,p=[],f=[],m=[],g=[];for(let d=0;d<=A;d++){const B=[],v=d/A;let y=0;d===0&&s===0?y=.5/t:d===A&&o===Math.PI&&(y=-.5/t);for(let x=0;x<=t;x++){const w=x/t;u.x=-e*Math.cos(i+w*n)*Math.sin(s+v*a),u.y=e*Math.cos(s+v*a),u.z=e*Math.sin(i+w*n)*Math.sin(s+v*a),f.push(u.x,u.y,u.z),h.copy(u).normalize(),m.push(h.x,h.y,h.z),g.push(w+y,1-v),B.push(l++)}c.push(B)}for(let d=0;d<A;d++)for(let B=0;B<t;B++){const v=c[d][B+1],y=c[d][B],x=c[d+1][B],w=c[d+1][B+1];(d!==0||s>0)&&p.push(v,y,w),(d!==A-1||o<Math.PI)&&p.push(y,x,w)}this.setIndex(p),this.setAttribute("position",new Pt(f,3)),this.setAttribute("normal",new Pt(m,3)),this.setAttribute("uv",new Pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class oB extends Xr{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Qe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class lB extends Xr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jc,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new JA,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cB extends Xr{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Qe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jc,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class hB extends Xr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=im,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uB extends Xr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class sh extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class dB extends sh{constructor(e,t,A){super(e,A),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ko=new ft,ou=new N,lu=new N;class Dp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=qA,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ah,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,A=this.matrix;ou.setFromMatrixPosition(e.matrixWorld),t.position.copy(ou),lu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lu),t.updateMatrixWorld(),ko.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ko,t.coordinateSystem,t.reversedDepth),t.reversedDepth?A.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):A.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),A.multiply(ko)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class pB extends Dp{constructor(){super(new mA(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,A=An*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,n=e.distance||t.far;(A!==t.fov||i!==t.aspect||n!==t.far)&&(t.fov=A,t.aspect=i,t.far=n,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class fB extends sh{constructor(e,t,A=0,i=Math.PI/3,n=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=A,this.angle=i,this.penumbra=n,this.decay=s,this.map=null,this.shadow=new pB}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ah extends Sp{constructor(e=-1,t=1,A=1,i=-1,n=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=A,this.bottom=i,this.near=n,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,A,i,n,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=A,this.view.offsetY=i,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),A=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let n=A-e,s=A+e,a=i+t,o=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=l*this.view.offsetX,s=n+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(n,s,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class gB extends Dp{constructor(){super(new ah(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hp extends sh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new gB}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class mB extends mA{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Pp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const cu=new ft;class BB{constructor(e,t,A=0,i=1/0){this.ray=new Ya(e,t),this.near=A,this.far=i,this.camera=null,this.layers=new eh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):vt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return cu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cu),this}intersectObject(e,t=!0,A=[]){return dc(e,this,A,t),A.sort(hu),A}intersectObjects(e,t=!0,A=[]){for(let i=0,n=e.length;i<n;i++)dc(e[i],this,A,t);return A.sort(hu),A}}function hu(r,e){return r.distance-e.distance}function dc(r,e,t,A){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&A===!0){const n=r.children;for(let s=0,a=n.length;s<a;s++)dc(n[s],e,t,!0)}}class uu{constructor(e=1,t=0,A=0){this.radius=e,this.phi=t,this.theta=A}set(e,t,A){return this.radius=e,this.phi=t,this.theta=A,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,A){return this.radius=Math.sqrt(e*e+t*t+A*A),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,A),this.phi=Math.acos(Xe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class wB extends Qp{constructor(e=10,t=10,A=4473924,i=8947848){A=new Qe(A),i=new Qe(i);const n=t/2,s=e/t,a=e/2,o=[],l=[];for(let h=0,p=0,f=-a;h<=t;h++,f+=s){o.push(-a,0,f,a,0,f),o.push(f,0,-a,f,0,a);const m=h===n?A:i;m.toArray(l,p),p+=3,m.toArray(l,p),p+=3,m.toArray(l,p),p+=3,m.toArray(l,p),p+=3}const c=new uA;c.setAttribute("position",new Pt(o,3)),c.setAttribute("color",new Pt(l,3));const u=new rh({vertexColors:!0,toneMapped:!1});super(c,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class vB extends pi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){De("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function du(r,e,t,A){const i=yB(A);switch(t){case vp:return r*e;case yp:return r*e/i.components*i.byteLength;case Xc:return r*e/i.components*i.byteLength;case jc:return r*e*2/i.components*i.byteLength;case Yc:return r*e*2/i.components*i.byteLength;case Wc:return r*e*3/i.components*i.byteLength;case DA:return r*e*4/i.components*i.byteLength;case qc:return r*e*4/i.components*i.byteLength;case pa:case fa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ga:case ma:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Nl:case Vl:return Math.max(r,16)*Math.max(e,8)/4;case Pl:case Ol:return Math.max(r,8)*Math.max(e,8)/2;case Gl:case zl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case kl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case jl:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ql:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case $l:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ec:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case tc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ac:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case rc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ic:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case nc:case sc:case ac:return Math.ceil(r/4)*Math.ceil(e/4)*16;case oc:case lc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case cc:case hc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yB(r){switch(r){case qA:case gp:return{byteLength:1,components:1};case Wn:case mp:case jA:return{byteLength:2,components:1};case kc:case Kc:return{byteLength:2,components:4};case di:case zc:case wr:return{byteLength:4,components:1};case Bp:case wp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gc}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gc);function Np(){let r=null,e=!1,t=null,A=null;function i(n,s){t(n,s),A=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(A=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(A),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){r=n}}}function _B(r){const e=new WeakMap;function t(a,o){const l=a.array,c=a.usage,u=l.byteLength,h=r.createBuffer();r.bindBuffer(o,h),r.bufferData(o,l,c),a.onUploadCallback();let p;if(l instanceof Float32Array)p=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=r.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=r.SHORT;else if(l instanceof Uint32Array)p=r.UNSIGNED_INT;else if(l instanceof Int32Array)p=r.INT;else if(l instanceof Int8Array)p=r.BYTE;else if(l instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function A(a,o,l){const c=o.array,u=o.updateRanges;if(r.bindBuffer(l,a),u.length===0)r.bufferSubData(l,0,c);else{u.sort((p,f)=>p.start-f.start);let h=0;for(let p=1;p<u.length;p++){const f=u[h],m=u[p];m.start<=f.start+f.count+1?f.count=Math.max(f.count,m.start+m.count-f.start):(++h,u[h]=m)}u.length=h+1;for(let p=0,f=u.length;p<f;p++){const m=u[p];r.bufferSubData(l,m.start*c.BYTES_PER_ELEMENT,c,m.start,m.count)}o.clearUpdateRanges()}o.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function n(a){a.isInterleavedBufferAttribute&&(a=a.data);const o=e.get(a);o&&(r.deleteBuffer(o.buffer),e.delete(a))}function s(a,o){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,o));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");A(l.buffer,a,o),l.version=a.version}}return{get:i,remove:n,update:s}}var xB=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CB=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,EB=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bB=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MB=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UB=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,SB=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,FB=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TB=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,QB=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IB=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LB=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RB=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,DB=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,HB=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,PB=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,NB=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OB=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VB=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GB=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zB=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kB=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,KB=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,WB=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,XB=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jB=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,YB=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qB=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JB=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZB=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$B="gl_FragColor = linearToOutputTexel( gl_FragColor );",e0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,t0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,A0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,r0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,i0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,n0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,s0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,c0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,h0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,u0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,p0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,f0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,g0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,B0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,w0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,y0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,x0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,C0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,b0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,S0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Q0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,L0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,H0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,N0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,V0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,G0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,K0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,W0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,j0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Y0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Z0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ew=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Aw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,nw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,aw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ow=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ww=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _w=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ew=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Fw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Iw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ow=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ww=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$w=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ev=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:xB,alphahash_pars_fragment:CB,alphamap_fragment:EB,alphamap_pars_fragment:bB,alphatest_fragment:MB,alphatest_pars_fragment:UB,aomap_fragment:SB,aomap_pars_fragment:FB,batching_pars_vertex:TB,batching_vertex:QB,begin_vertex:IB,beginnormal_vertex:LB,bsdfs:RB,iridescence_fragment:DB,bumpmap_pars_fragment:HB,clipping_planes_fragment:PB,clipping_planes_pars_fragment:NB,clipping_planes_pars_vertex:OB,clipping_planes_vertex:VB,color_fragment:GB,color_pars_fragment:zB,color_pars_vertex:kB,color_vertex:KB,common:WB,cube_uv_reflection_fragment:XB,defaultnormal_vertex:jB,displacementmap_pars_vertex:YB,displacementmap_vertex:qB,emissivemap_fragment:JB,emissivemap_pars_fragment:ZB,colorspace_fragment:$B,colorspace_pars_fragment:e0,envmap_fragment:t0,envmap_common_pars_fragment:A0,envmap_pars_fragment:r0,envmap_pars_vertex:i0,envmap_physical_pars_fragment:f0,envmap_vertex:n0,fog_vertex:s0,fog_pars_vertex:a0,fog_fragment:o0,fog_pars_fragment:l0,gradientmap_pars_fragment:c0,lightmap_pars_fragment:h0,lights_lambert_fragment:u0,lights_lambert_pars_fragment:d0,lights_pars_begin:p0,lights_toon_fragment:g0,lights_toon_pars_fragment:m0,lights_phong_fragment:B0,lights_phong_pars_fragment:w0,lights_physical_fragment:v0,lights_physical_pars_fragment:y0,lights_fragment_begin:_0,lights_fragment_maps:x0,lights_fragment_end:C0,logdepthbuf_fragment:E0,logdepthbuf_pars_fragment:b0,logdepthbuf_pars_vertex:M0,logdepthbuf_vertex:U0,map_fragment:S0,map_pars_fragment:F0,map_particle_fragment:T0,map_particle_pars_fragment:Q0,metalnessmap_fragment:I0,metalnessmap_pars_fragment:L0,morphinstance_vertex:R0,morphcolor_vertex:D0,morphnormal_vertex:H0,morphtarget_pars_vertex:P0,morphtarget_vertex:N0,normal_fragment_begin:O0,normal_fragment_maps:V0,normal_pars_fragment:G0,normal_pars_vertex:z0,normal_vertex:k0,normalmap_pars_fragment:K0,clearcoat_normal_fragment_begin:W0,clearcoat_normal_fragment_maps:X0,clearcoat_pars_fragment:j0,iridescence_pars_fragment:Y0,opaque_fragment:q0,packing:J0,premultiplied_alpha_fragment:Z0,project_vertex:$0,dithering_fragment:ew,dithering_pars_fragment:tw,roughnessmap_fragment:Aw,roughnessmap_pars_fragment:rw,shadowmap_pars_fragment:iw,shadowmap_pars_vertex:nw,shadowmap_vertex:sw,shadowmask_pars_fragment:aw,skinbase_vertex:ow,skinning_pars_vertex:lw,skinning_vertex:cw,skinnormal_vertex:hw,specularmap_fragment:uw,specularmap_pars_fragment:dw,tonemapping_fragment:pw,tonemapping_pars_fragment:fw,transmission_fragment:gw,transmission_pars_fragment:mw,uv_pars_fragment:Bw,uv_pars_vertex:ww,uv_vertex:vw,worldpos_vertex:yw,background_vert:_w,background_frag:xw,backgroundCube_vert:Cw,backgroundCube_frag:Ew,cube_vert:bw,cube_frag:Mw,depth_vert:Uw,depth_frag:Sw,distanceRGBA_vert:Fw,distanceRGBA_frag:Tw,equirect_vert:Qw,equirect_frag:Iw,linedashed_vert:Lw,linedashed_frag:Rw,meshbasic_vert:Dw,meshbasic_frag:Hw,meshlambert_vert:Pw,meshlambert_frag:Nw,meshmatcap_vert:Ow,meshmatcap_frag:Vw,meshnormal_vert:Gw,meshnormal_frag:zw,meshphong_vert:kw,meshphong_frag:Kw,meshphysical_vert:Ww,meshphysical_frag:Xw,meshtoon_vert:jw,meshtoon_frag:Yw,points_vert:qw,points_frag:Jw,shadow_vert:Zw,shadow_frag:$w,sprite_vert:ev,sprite_frag:tv},oe={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},KA={basic:{uniforms:Jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Jt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Jt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Jt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Jt([oe.points,oe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Jt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Jt([oe.common,oe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Jt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Jt([oe.sprite,oe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Jt([oe.common,oe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Jt([oe.lights,oe.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};KA.physical={uniforms:Jt([KA.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Hs={r:0,b:0,g:0},ei=new JA,Av=new ft;function rv(r,e,t,A,i,n,s){const a=new Qe(0);let o=n===!0?0:1,l,c,u=null,h=0,p=null;function f(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function m(v){let y=!1;const x=f(v);x===null?d(a,o):x&&x.isColor&&(d(x,1),y=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?A.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&A.buffers.color.setClear(0,0,0,0,s),(r.autoClear||y)&&(A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(v,y){const x=f(y);x&&(x.isCubeTexture||x.mapping===Xa)?(c===void 0&&(c=new iA(new hn(1,1,1),new AA({name:"BackgroundCubeMaterial",uniforms:rn(KA.backgroundCube.uniforms),vertexShader:KA.backgroundCube.vertexShader,fragmentShader:KA.backgroundCube.fragmentShader,side:cA,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,M,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),ei.copy(y.backgroundRotation),ei.x*=-1,ei.y*=-1,ei.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Av.makeRotationFromEuler(ei)),c.material.toneMapped=qe.getTransfer(x.colorSpace)!==nt,(u!==x||h!==x.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,u=x,h=x.version,p=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new iA(new ts(2,2),new AA({name:"BackgroundMaterial",uniforms:rn(KA.background.uniforms),vertexShader:KA.background.vertexShader,fragmentShader:KA.background.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=qe.getTransfer(x.colorSpace)!==nt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||h!==x.version||p!==r.toneMapping)&&(l.material.needsUpdate=!0,u=x,h=x.version,p=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function d(v,y){v.getRGB(Hs,Up(r)),A.buffers.color.setClear(Hs.r,Hs.g,Hs.b,y,s)}function B(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),o=y,d(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,d(a,o)},render:m,addToRenderList:g,dispose:B}}function iv(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),A={},i=h(null);let n=i,s=!1;function a(_,F,T,I,L){let P=!1;const R=u(I,T,F);n!==R&&(n=R,l(n.object)),P=p(_,I,T,L),P&&f(_,I,T,L),L!==null&&e.update(L,r.ELEMENT_ARRAY_BUFFER),(P||s)&&(s=!1,y(_,F,T,I),L!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function o(){return r.createVertexArray()}function l(_){return r.bindVertexArray(_)}function c(_){return r.deleteVertexArray(_)}function u(_,F,T){const I=T.wireframe===!0;let L=A[_.id];L===void 0&&(L={},A[_.id]=L);let P=L[F.id];P===void 0&&(P={},L[F.id]=P);let R=P[I];return R===void 0&&(R=h(o()),P[I]=R),R}function h(_){const F=[],T=[],I=[];for(let L=0;L<t;L++)F[L]=0,T[L]=0,I[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:T,attributeDivisors:I,object:_,attributes:{},index:null}}function p(_,F,T,I){const L=n.attributes,P=F.attributes;let R=0;const k=T.getAttributes();for(const z in k)if(k[z].location>=0){const X=L[z];let te=P[z];if(te===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(te=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(te=_.instanceColor)),X===void 0||X.attribute!==te||te&&X.data!==te.data)return!0;R++}return n.attributesNum!==R||n.index!==I}function f(_,F,T,I){const L={},P=F.attributes;let R=0;const k=T.getAttributes();for(const z in k)if(k[z].location>=0){let X=P[z];X===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(X=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(X=_.instanceColor));const te={};te.attribute=X,X&&X.data&&(te.data=X.data),L[z]=te,R++}n.attributes=L,n.attributesNum=R,n.index=I}function m(){const _=n.newAttributes;for(let F=0,T=_.length;F<T;F++)_[F]=0}function g(_){d(_,0)}function d(_,F){const T=n.newAttributes,I=n.enabledAttributes,L=n.attributeDivisors;T[_]=1,I[_]===0&&(r.enableVertexAttribArray(_),I[_]=1),L[_]!==F&&(r.vertexAttribDivisor(_,F),L[_]=F)}function B(){const _=n.newAttributes,F=n.enabledAttributes;for(let T=0,I=F.length;T<I;T++)F[T]!==_[T]&&(r.disableVertexAttribArray(T),F[T]=0)}function v(_,F,T,I,L,P,R){R===!0?r.vertexAttribIPointer(_,F,T,L,P):r.vertexAttribPointer(_,F,T,I,L,P)}function y(_,F,T,I){m();const L=I.attributes,P=T.getAttributes(),R=F.defaultAttributeValues;for(const k in P){const z=P[k];if(z.location>=0){let X=L[k];if(X===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(X=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(X=_.instanceColor)),X!==void 0){const te=X.normalized,ve=X.itemSize,re=e.get(X);if(re===void 0)continue;const Ne=re.buffer,je=re.type,Ke=re.bytesPerElement,j=je===r.INT||je===r.UNSIGNED_INT||X.gpuType===zc;if(X.isInterleavedBufferAttribute){const q=X.data,ye=q.stride,ze=X.offset;if(q.isInstancedInterleavedBuffer){for(let be=0;be<z.locationSize;be++)d(z.location+be,q.meshPerAttribute);_.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let be=0;be<z.locationSize;be++)g(z.location+be);r.bindBuffer(r.ARRAY_BUFFER,Ne);for(let be=0;be<z.locationSize;be++)v(z.location+be,ve/z.locationSize,je,te,ye*Ke,(ze+ve/z.locationSize*be)*Ke,j)}else{if(X.isInstancedBufferAttribute){for(let q=0;q<z.locationSize;q++)d(z.location+q,X.meshPerAttribute);_.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let q=0;q<z.locationSize;q++)g(z.location+q);r.bindBuffer(r.ARRAY_BUFFER,Ne);for(let q=0;q<z.locationSize;q++)v(z.location+q,ve/z.locationSize,je,te,ve*Ke,ve/z.locationSize*q*Ke,j)}}else if(R!==void 0){const te=R[k];if(te!==void 0)switch(te.length){case 2:r.vertexAttrib2fv(z.location,te);break;case 3:r.vertexAttrib3fv(z.location,te);break;case 4:r.vertexAttrib4fv(z.location,te);break;default:r.vertexAttrib1fv(z.location,te)}}}}B()}function x(){S();for(const _ in A){const F=A[_];for(const T in F){const I=F[T];for(const L in I)c(I[L].object),delete I[L];delete F[T]}delete A[_]}}function w(_){if(A[_.id]===void 0)return;const F=A[_.id];for(const T in F){const I=F[T];for(const L in I)c(I[L].object),delete I[L];delete F[T]}delete A[_.id]}function M(_){for(const F in A){const T=A[F];if(T[_.id]===void 0)continue;const I=T[_.id];for(const L in I)c(I[L].object),delete I[L];delete T[_.id]}}function S(){C(),s=!0,n!==i&&(n=i,l(n.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:S,resetDefaultState:C,dispose:x,releaseStatesOfGeometry:w,releaseStatesOfProgram:M,initAttributes:m,enableAttribute:g,disableUnusedAttributes:B}}function nv(r,e,t){let A;function i(l){A=l}function n(l,c){r.drawArrays(A,l,c),t.update(c,A,1)}function s(l,c,u){u!==0&&(r.drawArraysInstanced(A,l,c,u),t.update(c,A,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(A,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,A,1)}function o(l,c,u,h){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<l.length;f++)s(l[f],c[f],h[f]);else{p.multiDrawArraysInstancedWEBGL(A,l,0,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=c[m]*h[m];t.update(f,A,1)}}this.setMode=i,this.render=n,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=o}function sv(r,e,t,A){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){return!(M!==DA&&A.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const S=M===jA&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==qA&&A.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==wr&&!S)}function o(M){if(M==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const c=o(l);c!==l&&(De("WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),d=r.getParameter(r.MAX_VERTEX_ATTRIBS),B=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:o,textureFormatReadable:s,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:B,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:x,maxSamples:w}}function av(r){const e=this;let t=null,A=0,i=!1,n=!1;const s=new gr,a=new Ge,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const p=u.length!==0||h||A!==0||i;return i=h,A=u.length,p},this.beginShadows=function(){n=!0,c(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(u,h){t=c(u,h,0)},this.setState=function(u,h,p){const f=u.clippingPlanes,m=u.clipIntersection,g=u.clipShadows,d=r.get(u);if(!i||f===null||f.length===0||n&&!g)n?c(null):l();else{const B=n?0:A,v=B*4;let y=d.clippingState||null;o.value=y,y=c(f,h,v,p);for(let x=0;x!==v;++x)y[x]=t[x];d.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=B}};function l(){o.value!==t&&(o.value=t,o.needsUpdate=A>0),e.numPlanes=A,e.numIntersection=0}function c(u,h,p,f){const m=u!==null?u.length:0;let g=null;if(m!==0){if(g=o.value,f!==!0||g===null){const d=p+m*4,B=h.matrixWorldInverse;a.getNormalMatrix(B),(g===null||g.length<d)&&(g=new Float32Array(d));for(let v=0,y=p;v!==m;++v,y+=4)s.copy(u[v]).applyMatrix4(B,a),s.normal.toArray(g,y),g[y+3]=s.constant}o.value=g,o.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function ov(r){let e=new WeakMap;function t(s,a){return a===Rl?s.mapping=$i:a===Dl&&(s.mapping=en),s}function A(s){if(s&&s.isTexture){const a=s.mapping;if(a===Rl||a===Dl)if(e.has(s)){const o=e.get(s).texture;return t(o,s.mapping)}else{const o=s.image;if(o&&o.height>0){const l=new $m(o.height);return l.fromEquirectangularTexture(r,s),e.set(s,l),s.addEventListener("dispose",i),t(l.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const o=e.get(a);o!==void 0&&(e.delete(a),o.dispose())}function n(){e=new WeakMap}return{get:A,dispose:n}}const Hr=4,pu=[.125,.215,.35,.446,.526,.582],ni=20,lv=256,yn=new ah,fu=new Qe;let Ko=null,Wo=0,Xo=0,jo=!1;const cv=new N;class gu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,A=.1,i=100,n={}){const{size:s=256,position:a=cv}=n;Ko=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,A,i,o,a),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ko,Wo,Xo),this._renderer.xr.enabled=jo,e.scissorTest=!1,Fi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$i||e.mapping===en?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ko=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const A=t||this._allocateTargets();return this._textureToCubeUV(e,A),this._applyPMREM(A),this._cleanup(A),A}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,A={magFilter:EA,minFilter:EA,generateMipmaps:!1,type:jA,format:DA,colorSpace:tn,depthBuffer:!1},i=mu(e,t,A);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mu(e,t,A);const{_lodMax:n}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=hv(n)),this._blurMaterial=dv(n,e,t),this._ggxMaterial=uv(n,e,t)}return i}_compileMaterial(e){const t=new iA(new uA,e);this._renderer.compile(t,yn)}_sceneToCubeUV(e,t,A,i,n){const s=new mA(90,1,t,A),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,u=l.toneMapping;l.getClearColor(fu),l.toneMapping=Vr,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(i),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new iA(new hn,new cn({name:"PMREM.Background",side:cA,depthWrite:!1,depthTest:!1})));const h=this._backgroundBox,p=h.material;let f=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,f=!0):(p.color.copy(fu),f=!0);for(let g=0;g<6;g++){const d=g%3;d===0?(s.up.set(0,a[g],0),s.position.set(n.x,n.y,n.z),s.lookAt(n.x+o[g],n.y,n.z)):d===1?(s.up.set(0,0,a[g]),s.position.set(n.x,n.y,n.z),s.lookAt(n.x,n.y+o[g],n.z)):(s.up.set(0,a[g],0),s.position.set(n.x,n.y,n.z),s.lookAt(n.x,n.y,n.z+o[g]));const B=this._cubeSize;Fi(i,d*B,g>2?B:0,B,B),l.setRenderTarget(i),f&&l.render(h,s),l.render(e,s)}l.toneMapping=u,l.autoClear=c,e.background=m}_textureToCubeUV(e,t){const A=this._renderer,i=e.mapping===$i||e.mapping===en;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bu());const n=i?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=n;const a=n.uniforms;a.envMap.value=e;const o=this._cubeSize;Fi(t,0,0,3*o,2*o),A.setRenderTarget(t),A.render(s,yn)}_applyPMREM(e){const t=this._renderer,A=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let n=1;n<i;n++)this._applyGGXFilter(e,n-1,n);t.autoClear=A}_applyGGXFilter(e,t,A){const i=this._renderer,n=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[A];a.material=s;const o=s.uniforms,l=A/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-c*c),h=.05+l*.95,p=u*h,{_lodMax:f}=this,m=this._sizeLods[A],g=3*m*(A>f-Hr?A-f+Hr:0),d=4*(this._cubeSize-m);o.envMap.value=e.texture,o.roughness.value=p,o.mipInt.value=f-t,Fi(n,g,d,3*m,2*m),i.setRenderTarget(n),i.render(a,yn),o.envMap.value=n.texture,o.roughness.value=0,o.mipInt.value=f-A,Fi(e,g,d,3*m,2*m),i.setRenderTarget(e),i.render(a,yn)}_blur(e,t,A,i,n){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,A,i,"latitudinal",n),this._halfBlur(s,e,A,A,i,"longitudinal",n)}_halfBlur(e,t,A,i,n,s,a){const o=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&vt("blur direction must be either latitudinal or longitudinal!");const c=3,u=this._lodMeshes[i];u.material=l;const h=l.uniforms,p=this._sizeLods[A]-1,f=isFinite(n)?Math.PI/(2*p):2*Math.PI/(2*ni-1),m=n/f,g=isFinite(n)?1+Math.floor(c*m):ni;g>ni&&De(`sigmaRadians, ${n}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ni}`);const d=[];let B=0;for(let M=0;M<ni;++M){const S=M/m,C=Math.exp(-S*S/2);d.push(C),M===0?B+=C:M<g&&(B+=2*C)}for(let M=0;M<d.length;M++)d[M]=d[M]/B;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=f,h.mipInt.value=v-A;const y=this._sizeLods[i],x=3*y*(i>v-Hr?i-v+Hr:0),w=4*(this._cubeSize-y);Fi(t,x,w,3*y,2*y),o.setRenderTarget(t),o.render(u,yn)}}function hv(r){const e=[],t=[],A=[];let i=r;const n=r-Hr+1+pu.length;for(let s=0;s<n;s++){const a=Math.pow(2,i);e.push(a);let o=1/a;s>r-Hr?o=pu[s-r+Hr-1]:s===0&&(o=0),t.push(o);const l=1/(a-2),c=-l,u=1+l,h=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,f=6,m=3,g=2,d=1,B=new Float32Array(m*f*p),v=new Float32Array(g*f*p),y=new Float32Array(d*f*p);for(let w=0;w<p;w++){const M=w%3*2/3-1,S=w>2?0:-1,C=[M,S,0,M+2/3,S,0,M+2/3,S+1,0,M,S,0,M+2/3,S+1,0,M,S+1,0];B.set(C,m*f*w),v.set(h,g*f*w);const _=[w,w,w,w,w,w];y.set(_,d*f*w)}const x=new uA;x.setAttribute("position",new hA(B,m)),x.setAttribute("uv",new hA(v,g)),x.setAttribute("faceIndex",new hA(y,d)),A.push(new iA(x,null)),i>Hr&&i--}return{lodMeshes:A,sizeLods:e,sigmas:t}}function mu(r,e,t){const A=new PA(r,e,t);return A.texture.mapping=Xa,A.texture.name="PMREM.cubeUv",A.scissorTest=!0,A}function Fi(r,e,t,A,i){r.viewport.set(e,t,A,i),r.scissor.set(e,t,A,i)}function uv(r,e,t){return new AA({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:XA,depthTest:!1,depthWrite:!1})}function dv(r,e,t){const A=new Float32Array(ni),i=new N(0,1,0);return new AA({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:A},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:XA,depthTest:!1,depthWrite:!1})}function Bu(){return new AA({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:XA,depthTest:!1,depthWrite:!1})}function wu(){return new AA({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:XA,depthTest:!1,depthWrite:!1})}function qa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pv(r){let e=new WeakMap,t=null;function A(a){if(a&&a.isTexture){const o=a.mapping,l=o===Rl||o===Dl,c=o===$i||o===en;if(l||c){let u=e.get(a);const h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new gu(r)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||c&&p&&i(p)?(t===null&&(t=new gu(r)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",n),u.texture):null}}}return a}function i(a){let o=0;const l=6;for(let c=0;c<l;c++)a[c]!==void 0&&o++;return o===l}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:A,dispose:s}}function fv(r){const e={};function t(A){if(e[A]!==void 0)return e[A];const i=r.getExtension(A);return e[A]=i,i}return{has:function(A){return t(A)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(A){const i=t(A);return i===null&&qn("WebGLRenderer: "+A+" extension not supported."),i}}}function gv(r,e,t,A){const i={},n=new WeakMap;function s(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const f in h.attributes)e.remove(h.attributes[f]);h.removeEventListener("dispose",s),delete i[h.id];const p=n.get(h);p&&(e.remove(p),n.delete(h)),A.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return i[h.id]===!0||(h.addEventListener("dispose",s),i[h.id]=!0,t.memory.geometries++),h}function o(u){const h=u.attributes;for(const p in h)e.update(h[p],r.ARRAY_BUFFER)}function l(u){const h=[],p=u.index,f=u.attributes.position;let m=0;if(p!==null){const B=p.array;m=p.version;for(let v=0,y=B.length;v<y;v+=3){const x=B[v+0],w=B[v+1],M=B[v+2];h.push(x,w,w,M,M,x)}}else if(f!==void 0){const B=f.array;m=f.version;for(let v=0,y=B.length/3-1;v<y;v+=3){const x=v+0,w=v+1,M=v+2;h.push(x,w,w,M,M,x)}}else return;const g=new(xp(h)?Mp:bp)(h,1);g.version=m;const d=n.get(u);d&&e.remove(d),n.set(u,g)}function c(u){const h=n.get(u);if(h){const p=u.index;p!==null&&h.version<p.version&&l(u)}else l(u);return n.get(u)}return{get:a,update:o,getWireframeAttribute:c}}function mv(r,e,t){let A;function i(h){A=h}let n,s;function a(h){n=h.type,s=h.bytesPerElement}function o(h,p){r.drawElements(A,p,n,h*s),t.update(p,A,1)}function l(h,p,f){f!==0&&(r.drawElementsInstanced(A,p,n,h*s,f),t.update(p,A,f))}function c(h,p,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(A,p,0,n,h,0,f);let m=0;for(let g=0;g<f;g++)m+=p[g];t.update(m,A,1)}function u(h,p,f,m){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<h.length;d++)l(h[d]/s,p[d],m[d]);else{g.multiDrawElementsInstancedWEBGL(A,p,0,n,h,0,m,0,f);let d=0;for(let B=0;B<f;B++)d+=p[B]*m[B];t.update(d,A,1)}}this.setMode=i,this.setIndex=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function Bv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function A(n,s,a){switch(t.calls++,s){case r.TRIANGLES:t.triangles+=a*(n/3);break;case r.LINES:t.lines+=a*(n/2);break;case r.LINE_STRIP:t.lines+=a*(n-1);break;case r.LINE_LOOP:t.lines+=a*n;break;case r.POINTS:t.points+=a*n;break;default:vt("WebGLInfo: Unknown draw mode:",s);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:A}}function wv(r,e,t){const A=new WeakMap,i=new yt;function n(s,a,o){const l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=c!==void 0?c.length:0;let h=A.get(a);if(h===void 0||h.count!==u){let p=function(){S.dispose(),A.delete(a),a.removeEventListener("dispose",p)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],B=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),m===!0&&(y=2),g===!0&&(y=3);let x=a.attributes.position.count*y,w=1;x>e.maxTextureSize&&(w=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const M=new Float32Array(x*w*4*u),S=new Cp(M,x,w,u);S.type=wr,S.needsUpdate=!0;const C=y*4;for(let _=0;_<u;_++){const F=d[_],T=B[_],I=v[_],L=x*w*4*_;for(let P=0;P<F.count;P++){const R=P*C;f===!0&&(i.fromBufferAttribute(F,P),M[L+R+0]=i.x,M[L+R+1]=i.y,M[L+R+2]=i.z,M[L+R+3]=0),m===!0&&(i.fromBufferAttribute(T,P),M[L+R+4]=i.x,M[L+R+5]=i.y,M[L+R+6]=i.z,M[L+R+7]=0),g===!0&&(i.fromBufferAttribute(I,P),M[L+R+8]=i.x,M[L+R+9]=i.y,M[L+R+10]=i.z,M[L+R+11]=I.itemSize===4?i.w:1)}}h={count:u,texture:S,size:new Ee(x,w)},A.set(a,h),a.addEventListener("dispose",p)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let p=0;for(let m=0;m<l.length;m++)p+=l[m];const f=a.morphTargetsRelative?1:1-p;o.getUniforms().setValue(r,"morphTargetBaseInfluence",f),o.getUniforms().setValue(r,"morphTargetInfluences",l)}o.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:n}}function vv(r,e,t,A){let i=new WeakMap;function n(o){const l=A.render.frame,c=o.geometry,u=e.get(o,c);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),i.get(o)!==l&&(t.update(o.instanceMatrix,r.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,r.ARRAY_BUFFER),i.set(o,l))),o.isSkinnedMesh){const h=o.skeleton;i.get(h)!==l&&(h.update(),i.set(h,l))}return u}function s(){i=new WeakMap}function a(o){const l=o.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:n,dispose:s}}const Op=new Yt,vu=new Lp(1,1),Vp=new Cp,Gp=new Hm,zp=new Fp,yu=[],_u=[],xu=new Float32Array(16),Cu=new Float32Array(9),Eu=new Float32Array(4);function un(r,e,t){const A=r[0];if(A<=0||A>0)return r;const i=e*t;let n=yu[i];if(n===void 0&&(n=new Float32Array(i),yu[i]=n),e!==0){A.toArray(n,0);for(let s=1,a=0;s!==e;++s)a+=t,r[s].toArray(n,a)}return n}function Qt(r,e){if(r.length!==e.length)return!1;for(let t=0,A=r.length;t<A;t++)if(r[t]!==e[t])return!1;return!0}function It(r,e){for(let t=0,A=e.length;t<A;t++)r[t]=e[t]}function Ja(r,e){let t=_u[e];t===void 0&&(t=new Int32Array(e),_u[e]=t);for(let A=0;A!==e;++A)t[A]=r.allocateTextureUnit();return t}function yv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function _v(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2fv(this.addr,e),It(t,e)}}function xv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;r.uniform3fv(this.addr,e),It(t,e)}}function Cv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4fv(this.addr,e),It(t,e)}}function Ev(r,e){const t=this.cache,A=e.elements;if(A===void 0){if(Qt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Qt(t,A))return;Eu.set(A),r.uniformMatrix2fv(this.addr,!1,Eu),It(t,A)}}function bv(r,e){const t=this.cache,A=e.elements;if(A===void 0){if(Qt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Qt(t,A))return;Cu.set(A),r.uniformMatrix3fv(this.addr,!1,Cu),It(t,A)}}function Mv(r,e){const t=this.cache,A=e.elements;if(A===void 0){if(Qt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Qt(t,A))return;xu.set(A),r.uniformMatrix4fv(this.addr,!1,xu),It(t,A)}}function Uv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Sv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2iv(this.addr,e),It(t,e)}}function Fv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3iv(this.addr,e),It(t,e)}}function Tv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4iv(this.addr,e),It(t,e)}}function Qv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Iv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2uiv(this.addr,e),It(t,e)}}function Lv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3uiv(this.addr,e),It(t,e)}}function Rv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4uiv(this.addr,e),It(t,e)}}function Dv(r,e,t){const A=this.cache,i=t.allocateTextureUnit();A[0]!==i&&(r.uniform1i(this.addr,i),A[0]=i);let n;this.type===r.SAMPLER_2D_SHADOW?(vu.compareFunction=_p,n=vu):n=Op,t.setTexture2D(e||n,i)}function Hv(r,e,t){const A=this.cache,i=t.allocateTextureUnit();A[0]!==i&&(r.uniform1i(this.addr,i),A[0]=i),t.setTexture3D(e||Gp,i)}function Pv(r,e,t){const A=this.cache,i=t.allocateTextureUnit();A[0]!==i&&(r.uniform1i(this.addr,i),A[0]=i),t.setTextureCube(e||zp,i)}function Nv(r,e,t){const A=this.cache,i=t.allocateTextureUnit();A[0]!==i&&(r.uniform1i(this.addr,i),A[0]=i),t.setTexture2DArray(e||Vp,i)}function Ov(r){switch(r){case 5126:return yv;case 35664:return _v;case 35665:return xv;case 35666:return Cv;case 35674:return Ev;case 35675:return bv;case 35676:return Mv;case 5124:case 35670:return Uv;case 35667:case 35671:return Sv;case 35668:case 35672:return Fv;case 35669:case 35673:return Tv;case 5125:return Qv;case 36294:return Iv;case 36295:return Lv;case 36296:return Rv;case 35678:case 36198:case 36298:case 36306:case 35682:return Dv;case 35679:case 36299:case 36307:return Hv;case 35680:case 36300:case 36308:case 36293:return Pv;case 36289:case 36303:case 36311:case 36292:return Nv}}function Vv(r,e){r.uniform1fv(this.addr,e)}function Gv(r,e){const t=un(e,this.size,2);r.uniform2fv(this.addr,t)}function zv(r,e){const t=un(e,this.size,3);r.uniform3fv(this.addr,t)}function kv(r,e){const t=un(e,this.size,4);r.uniform4fv(this.addr,t)}function Kv(r,e){const t=un(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Wv(r,e){const t=un(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Xv(r,e){const t=un(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function jv(r,e){r.uniform1iv(this.addr,e)}function Yv(r,e){r.uniform2iv(this.addr,e)}function qv(r,e){r.uniform3iv(this.addr,e)}function Jv(r,e){r.uniform4iv(this.addr,e)}function Zv(r,e){r.uniform1uiv(this.addr,e)}function $v(r,e){r.uniform2uiv(this.addr,e)}function e1(r,e){r.uniform3uiv(this.addr,e)}function t1(r,e){r.uniform4uiv(this.addr,e)}function A1(r,e,t){const A=this.cache,i=e.length,n=Ja(t,i);Qt(A,n)||(r.uniform1iv(this.addr,n),It(A,n));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||Op,n[s])}function r1(r,e,t){const A=this.cache,i=e.length,n=Ja(t,i);Qt(A,n)||(r.uniform1iv(this.addr,n),It(A,n));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Gp,n[s])}function i1(r,e,t){const A=this.cache,i=e.length,n=Ja(t,i);Qt(A,n)||(r.uniform1iv(this.addr,n),It(A,n));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||zp,n[s])}function n1(r,e,t){const A=this.cache,i=e.length,n=Ja(t,i);Qt(A,n)||(r.uniform1iv(this.addr,n),It(A,n));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Vp,n[s])}function s1(r){switch(r){case 5126:return Vv;case 35664:return Gv;case 35665:return zv;case 35666:return kv;case 35674:return Kv;case 35675:return Wv;case 35676:return Xv;case 5124:case 35670:return jv;case 35667:case 35671:return Yv;case 35668:case 35672:return qv;case 35669:case 35673:return Jv;case 5125:return Zv;case 36294:return $v;case 36295:return e1;case 36296:return t1;case 35678:case 36198:case 36298:case 36306:case 35682:return A1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return i1;case 36289:case 36303:case 36311:case 36292:return n1}}class a1{constructor(e,t,A){this.id=e,this.addr=A,this.cache=[],this.type=t.type,this.setValue=Ov(t.type)}}class o1{constructor(e,t,A){this.id=e,this.addr=A,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=s1(t.type)}}class l1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,A){const i=this.seq;for(let n=0,s=i.length;n!==s;++n){const a=i[n];a.setValue(e,t[a.id],A)}}}const Yo=/(\w+)(\])?(\[|\.)?/g;function bu(r,e){r.seq.push(e),r.map[e.id]=e}function c1(r,e,t){const A=r.name,i=A.length;for(Yo.lastIndex=0;;){const n=Yo.exec(A),s=Yo.lastIndex;let a=n[1];const o=n[2]==="]",l=n[3];if(o&&(a=a|0),l===void 0||l==="["&&s+2===i){bu(t,l===void 0?new a1(a,r,e):new o1(a,r,e));break}else{let c=t.map[a];c===void 0&&(c=new l1(a),bu(t,c)),t=c}}}class Ba{constructor(e,t){this.seq=[],this.map={};const A=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<A;++i){const n=e.getActiveUniform(t,i),s=e.getUniformLocation(t,n.name);c1(n,s,this)}}setValue(e,t,A,i){const n=this.map[t];n!==void 0&&n.setValue(e,A,i)}setOptional(e,t,A){const i=t[A];i!==void 0&&this.setValue(e,A,i)}static upload(e,t,A,i){for(let n=0,s=t.length;n!==s;++n){const a=t[n],o=A[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,i)}}static seqWithValue(e,t){const A=[];for(let i=0,n=e.length;i!==n;++i){const s=e[i];s.id in t&&A.push(s)}return A}}function Mu(r,e,t){const A=r.createShader(e);return r.shaderSource(A,t),r.compileShader(A),A}const h1=37297;let u1=0;function d1(r,e){const t=r.split(`
`),A=[],i=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let s=i;s<n;s++){const a=s+1;A.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return A.join(`
`)}const Uu=new Ge;function p1(r){qe._getMatrix(Uu,qe.workingColorSpace,r);const e=`mat3( ${Uu.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(r)){case Ea:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Su(r,e,t){const A=r.getShaderParameter(e,r.COMPILE_STATUS),i=(r.getShaderInfoLog(e)||"").trim();if(A&&i==="")return"";const n=/ERROR: 0:(\d+)/.exec(i);if(n){const s=parseInt(n[1]);return t.toUpperCase()+`

`+i+`

`+d1(r.getShaderSource(e),s)}else return i}function f1(r,e){const t=p1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function g1(r,e){let t;switch(e){case Jg:t="Linear";break;case Zg:t="Reinhard";break;case $g:t="Cineon";break;case pp:t="ACESFilmic";break;case tm:t="AgX";break;case Am:t="Neutral";break;case em:t="Custom";break;default:De("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ps=new N;function m1(){qe.getLuminanceCoefficients(Ps);const r=Ps.x.toFixed(4),e=Ps.y.toFixed(4),t=Ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fn).join(`
`)}function w1(r){const e=[];for(const t in r){const A=r[t];A!==!1&&e.push("#define "+t+" "+A)}return e.join(`
`)}function v1(r,e){const t={},A=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<A;i++){const n=r.getActiveAttrib(e,i),s=n.name;let a=1;n.type===r.FLOAT_MAT2&&(a=2),n.type===r.FLOAT_MAT3&&(a=3),n.type===r.FLOAT_MAT4&&(a=4),t[s]={type:n.type,location:r.getAttribLocation(e,s),locationSize:a}}return t}function Fn(r){return r!==""}function Fu(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const y1=/^[ \t]*#include +<([\w\d./]+)>/gm;function pc(r){return r.replace(y1,x1)}const _1=new Map;function x1(r,e){let t=We[e];if(t===void 0){const A=_1.get(e);if(A!==void 0)t=We[A],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,A);else throw new Error("Can not resolve #include <"+e+">")}return pc(t)}const C1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qu(r){return r.replace(C1,E1)}function E1(r,e,t,A){let i="";for(let n=parseInt(e);n<parseInt(t);n++)i+=A.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return i}function Iu(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function b1(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===hp?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===up?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===fr&&(e="SHADOWMAP_TYPE_VSM"),e}function M1(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case $i:case en:e="ENVMAP_TYPE_CUBE";break;case Xa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function U1(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case en:e="ENVMAP_MODE_REFRACTION";break}return e}function S1(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case dp:e="ENVMAP_BLENDING_MULTIPLY";break;case Yg:e="ENVMAP_BLENDING_MIX";break;case qg:e="ENVMAP_BLENDING_ADD";break}return e}function F1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,A=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:A,maxMip:t}}function T1(r,e,t,A){const i=r.getContext(),n=t.defines;let s=t.vertexShader,a=t.fragmentShader;const o=b1(t),l=M1(t),c=U1(t),u=S1(t),h=F1(t),p=B1(t),f=w1(n),m=i.createProgram();let g,d,B=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Fn).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Fn).join(`
`),d.length>0&&(d+=`
`)):(g=[Iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fn).join(`
`),d=[Iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vr?"#define TONE_MAPPING":"",t.toneMapping!==Vr?We.tonemapping_pars_fragment:"",t.toneMapping!==Vr?g1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,f1("linearToOutputTexel",t.outputColorSpace),m1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fn).join(`
`)),s=pc(s),s=Fu(s,t),s=Tu(s,t),a=pc(a),a=Fu(a,t),a=Tu(a,t),s=Qu(s),a=Qu(a),t.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===Ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=B+g+s,y=B+d+a,x=Mu(i,i.VERTEX_SHADER,v),w=Mu(i,i.FRAGMENT_SHADER,y);i.attachShader(m,x),i.attachShader(m,w),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function M(F){if(r.debug.checkShaderErrors){const T=i.getProgramInfoLog(m)||"",I=i.getShaderInfoLog(x)||"",L=i.getShaderInfoLog(w)||"",P=T.trim(),R=I.trim(),k=L.trim();let z=!0,X=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,x,w);else{const te=Su(i,x,"vertex"),ve=Su(i,w,"fragment");vt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+P+`
`+te+`
`+ve)}else P!==""?De("WebGLProgram: Program Info Log:",P):(R===""||k==="")&&(X=!1);X&&(F.diagnostics={runnable:z,programLog:P,vertexShader:{log:R,prefix:g},fragmentShader:{log:k,prefix:d}})}i.deleteShader(x),i.deleteShader(w),S=new Ba(i,m),C=v1(i,m)}let S;this.getUniforms=function(){return S===void 0&&M(this),S};let C;this.getAttributes=function(){return C===void 0&&M(this),C};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(m,h1)),_},this.destroy=function(){A.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=u1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=x,this.fragmentShader=w,this}let Q1=0;class I1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,A=e.fragmentShader,i=this._getShaderStage(t),n=this._getShaderStage(A),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const A of t)A.usedTimes--,A.usedTimes===0&&this.shaderCache.delete(A.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let A=t.get(e);return A===void 0&&(A=new Set,t.set(e,A)),A}_getShaderStage(e){const t=this.shaderCache;let A=t.get(e);return A===void 0&&(A=new L1(e),t.set(e,A)),A}}class L1{constructor(e){this.id=Q1++,this.code=e,this.usedTimes=0}}function R1(r,e,t,A,i,n,s){const a=new eh,o=new I1,l=new Set,c=[],u=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(C){return l.add(C),C===0?"uv":`uv${C}`}function g(C,_,F,T,I){const L=T.fog,P=I.geometry,R=C.isMeshStandardMaterial?T.environment:null,k=(C.isMeshStandardMaterial?t:e).get(C.envMap||R),z=k&&k.mapping===Xa?k.image.height:null,X=f[C.type];C.precision!==null&&(p=i.getMaxPrecision(C.precision),p!==C.precision&&De("WebGLProgram.getParameters:",C.precision,"not supported, using",p,"instead."));const te=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ve=te!==void 0?te.length:0;let re=0;P.morphAttributes.position!==void 0&&(re=1),P.morphAttributes.normal!==void 0&&(re=2),P.morphAttributes.color!==void 0&&(re=3);let Ne,je,Ke,j;if(X){const it=KA[X];Ne=it.vertexShader,je=it.fragmentShader}else Ne=C.vertexShader,je=C.fragmentShader,o.update(C),Ke=o.getVertexShaderID(C),j=o.getFragmentShaderID(C);const q=r.getRenderTarget(),ye=r.state.buffers.depth.getReversed(),ze=I.isInstancedMesh===!0,be=I.isBatchedMesh===!0,Se=!!C.map,ot=!!C.matcap,tt=!!k,Ze=!!C.aoMap,H=!!C.lightMap,Nt=!!C.bumpMap,et=!!C.normalMap,lt=!!C.displacementMap,xe=!!C.emissiveMap,gt=!!C.metalnessMap,Me=!!C.roughnessMap,Ve=C.anisotropy>0,Q=C.clearcoat>0,E=C.dispersion>0,G=C.iridescence>0,J=C.sheen>0,Z=C.transmission>0,Y=Ve&&!!C.anisotropyMap,Ue=Q&&!!C.clearcoatMap,le=Q&&!!C.clearcoatNormalMap,Ie=Q&&!!C.clearcoatRoughnessMap,fe=G&&!!C.iridescenceMap,ee=G&&!!C.iridescenceThicknessMap,ne=J&&!!C.sheenColorMap,ke=J&&!!C.sheenRoughnessMap,Fe=!!C.specularMap,de=!!C.specularColorMap,Oe=!!C.specularIntensityMap,D=Z&&!!C.transmissionMap,ce=Z&&!!C.thicknessMap,se=!!C.gradientMap,ae=!!C.alphaMap,Ae=C.alphaTest>0,$=!!C.alphaHash,_e=!!C.extensions;let Te=Vr;C.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Te=r.toneMapping);const Lt={shaderID:X,shaderType:C.type,shaderName:C.name,vertexShader:Ne,fragmentShader:je,defines:C.defines,customVertexShaderID:Ke,customFragmentShaderID:j,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:p,batching:be,batchingColor:be&&I._colorsTexture!==null,instancing:ze,instancingColor:ze&&I.instanceColor!==null,instancingMorph:ze&&I.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:q===null?r.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:tn,alphaToCoverage:!!C.alphaToCoverage,map:Se,matcap:ot,envMap:tt,envMapMode:tt&&k.mapping,envMapCubeUVHeight:z,aoMap:Ze,lightMap:H,bumpMap:Nt,normalMap:et,displacementMap:h&&lt,emissiveMap:xe,normalMapObjectSpace:et&&C.normalMapType===sm,normalMapTangentSpace:et&&C.normalMapType===Jc,metalnessMap:gt,roughnessMap:Me,anisotropy:Ve,anisotropyMap:Y,clearcoat:Q,clearcoatMap:Ue,clearcoatNormalMap:le,clearcoatRoughnessMap:Ie,dispersion:E,iridescence:G,iridescenceMap:fe,iridescenceThicknessMap:ee,sheen:J,sheenColorMap:ne,sheenRoughnessMap:ke,specularMap:Fe,specularColorMap:de,specularIntensityMap:Oe,transmission:Z,transmissionMap:D,thicknessMap:ce,gradientMap:se,opaque:C.transparent===!1&&C.blending===ji&&C.alphaToCoverage===!1,alphaMap:ae,alphaTest:Ae,alphaHash:$,combine:C.combine,mapUv:Se&&m(C.map.channel),aoMapUv:Ze&&m(C.aoMap.channel),lightMapUv:H&&m(C.lightMap.channel),bumpMapUv:Nt&&m(C.bumpMap.channel),normalMapUv:et&&m(C.normalMap.channel),displacementMapUv:lt&&m(C.displacementMap.channel),emissiveMapUv:xe&&m(C.emissiveMap.channel),metalnessMapUv:gt&&m(C.metalnessMap.channel),roughnessMapUv:Me&&m(C.roughnessMap.channel),anisotropyMapUv:Y&&m(C.anisotropyMap.channel),clearcoatMapUv:Ue&&m(C.clearcoatMap.channel),clearcoatNormalMapUv:le&&m(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&m(C.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&m(C.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&m(C.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&m(C.sheenColorMap.channel),sheenRoughnessMapUv:ke&&m(C.sheenRoughnessMap.channel),specularMapUv:Fe&&m(C.specularMap.channel),specularColorMapUv:de&&m(C.specularColorMap.channel),specularIntensityMapUv:Oe&&m(C.specularIntensityMap.channel),transmissionMapUv:D&&m(C.transmissionMap.channel),thicknessMapUv:ce&&m(C.thicknessMap.channel),alphaMapUv:ae&&m(C.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(et||Ve),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!P.attributes.uv&&(Se||ae),fog:!!L,useFog:C.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:I.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:re,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:Te,decodeVideoTexture:Se&&C.map.isVideoTexture===!0&&qe.getTransfer(C.map.colorSpace)===nt,decodeVideoTextureEmissive:xe&&C.emissiveMap.isVideoTexture===!0&&qe.getTransfer(C.emissiveMap.colorSpace)===nt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===mr,flipSided:C.side===cA,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:_e&&C.extensions.clipCullDistance===!0&&A.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&C.extensions.multiDraw===!0||be)&&A.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:A.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function d(C){const _=[];if(C.shaderID?_.push(C.shaderID):(_.push(C.customVertexShaderID),_.push(C.customFragmentShaderID)),C.defines!==void 0)for(const F in C.defines)_.push(F),_.push(C.defines[F]);return C.isRawShaderMaterial===!1&&(B(_,C),v(_,C),_.push(r.outputColorSpace)),_.push(C.customProgramCacheKey),_.join()}function B(C,_){C.push(_.precision),C.push(_.outputColorSpace),C.push(_.envMapMode),C.push(_.envMapCubeUVHeight),C.push(_.mapUv),C.push(_.alphaMapUv),C.push(_.lightMapUv),C.push(_.aoMapUv),C.push(_.bumpMapUv),C.push(_.normalMapUv),C.push(_.displacementMapUv),C.push(_.emissiveMapUv),C.push(_.metalnessMapUv),C.push(_.roughnessMapUv),C.push(_.anisotropyMapUv),C.push(_.clearcoatMapUv),C.push(_.clearcoatNormalMapUv),C.push(_.clearcoatRoughnessMapUv),C.push(_.iridescenceMapUv),C.push(_.iridescenceThicknessMapUv),C.push(_.sheenColorMapUv),C.push(_.sheenRoughnessMapUv),C.push(_.specularMapUv),C.push(_.specularColorMapUv),C.push(_.specularIntensityMapUv),C.push(_.transmissionMapUv),C.push(_.thicknessMapUv),C.push(_.combine),C.push(_.fogExp2),C.push(_.sizeAttenuation),C.push(_.morphTargetsCount),C.push(_.morphAttributeCount),C.push(_.numDirLights),C.push(_.numPointLights),C.push(_.numSpotLights),C.push(_.numSpotLightMaps),C.push(_.numHemiLights),C.push(_.numRectAreaLights),C.push(_.numDirLightShadows),C.push(_.numPointLightShadows),C.push(_.numSpotLightShadows),C.push(_.numSpotLightShadowsWithMaps),C.push(_.numLightProbes),C.push(_.shadowMapType),C.push(_.toneMapping),C.push(_.numClippingPlanes),C.push(_.numClipIntersection),C.push(_.depthPacking)}function v(C,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),_.gradientMap&&a.enable(22),C.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),C.push(a.mask)}function y(C){const _=f[C.type];let F;if(_){const T=KA[_];F=Ua.clone(T.uniforms)}else F=C.uniforms;return F}function x(C,_){let F;for(let T=0,I=c.length;T<I;T++){const L=c[T];if(L.cacheKey===_){F=L,++F.usedTimes;break}}return F===void 0&&(F=new T1(r,_,C,n),c.push(F)),F}function w(C){if(--C.usedTimes===0){const _=c.indexOf(C);c[_]=c[c.length-1],c.pop(),C.destroy()}}function M(C){o.remove(C)}function S(){o.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:y,acquireProgram:x,releaseProgram:w,releaseShaderCache:M,programs:c,dispose:S}}function D1(){let r=new WeakMap;function e(s){return r.has(s)}function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function A(s){r.delete(s)}function i(s,a,o){r.get(s)[a]=o}function n(){r=new WeakMap}return{has:e,get:t,remove:A,update:i,dispose:n}}function H1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Lu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ru(){const r=[];let e=0;const t=[],A=[],i=[];function n(){e=0,t.length=0,A.length=0,i.length=0}function s(u,h,p,f,m,g){let d=r[e];return d===void 0?(d={id:u.id,object:u,geometry:h,material:p,groupOrder:f,renderOrder:u.renderOrder,z:m,group:g},r[e]=d):(d.id=u.id,d.object=u,d.geometry=h,d.material=p,d.groupOrder=f,d.renderOrder=u.renderOrder,d.z=m,d.group=g),e++,d}function a(u,h,p,f,m,g){const d=s(u,h,p,f,m,g);p.transmission>0?A.push(d):p.transparent===!0?i.push(d):t.push(d)}function o(u,h,p,f,m,g){const d=s(u,h,p,f,m,g);p.transmission>0?A.unshift(d):p.transparent===!0?i.unshift(d):t.unshift(d)}function l(u,h){t.length>1&&t.sort(u||H1),A.length>1&&A.sort(h||Lu),i.length>1&&i.sort(h||Lu)}function c(){for(let u=e,h=r.length;u<h;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:A,transparent:i,init:n,push:a,unshift:o,finish:c,sort:l}}function P1(){let r=new WeakMap;function e(A,i){const n=r.get(A);let s;return n===void 0?(s=new Ru,r.set(A,[s])):i>=n.length?(s=new Ru,n.push(s)):s=n[i],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function N1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Qe};break;case"SpotLight":t={position:new N,direction:new N,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new N,halfWidth:new N,halfHeight:new N};break}return r[e.id]=t,t}}}function O1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let V1=0;function G1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function z1(r){const e=new N1,t=O1(),A={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)A.probe.push(new N);const i=new N,n=new ft,s=new ft;function a(l){let c=0,u=0,h=0;for(let C=0;C<9;C++)A.probe[C].set(0,0,0);let p=0,f=0,m=0,g=0,d=0,B=0,v=0,y=0,x=0,w=0,M=0;l.sort(G1);for(let C=0,_=l.length;C<_;C++){const F=l[C],T=F.color,I=F.intensity,L=F.distance,P=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)c+=T.r*I,u+=T.g*I,h+=T.b*I;else if(F.isLightProbe){for(let R=0;R<9;R++)A.probe[R].addScaledVector(F.sh.coefficients[R],I);M++}else if(F.isDirectionalLight){const R=e.get(F);if(R.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const k=F.shadow,z=t.get(F);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,A.directionalShadow[p]=z,A.directionalShadowMap[p]=P,A.directionalShadowMatrix[p]=F.shadow.matrix,B++}A.directional[p]=R,p++}else if(F.isSpotLight){const R=e.get(F);R.position.setFromMatrixPosition(F.matrixWorld),R.color.copy(T).multiplyScalar(I),R.distance=L,R.coneCos=Math.cos(F.angle),R.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),R.decay=F.decay,A.spot[m]=R;const k=F.shadow;if(F.map&&(A.spotLightMap[x]=F.map,x++,k.updateMatrices(F),F.castShadow&&w++),A.spotLightMatrix[m]=k.matrix,F.castShadow){const z=t.get(F);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,A.spotShadow[m]=z,A.spotShadowMap[m]=P,y++}m++}else if(F.isRectAreaLight){const R=e.get(F);R.color.copy(T).multiplyScalar(I),R.halfWidth.set(F.width*.5,0,0),R.halfHeight.set(0,F.height*.5,0),A.rectArea[g]=R,g++}else if(F.isPointLight){const R=e.get(F);if(R.color.copy(F.color).multiplyScalar(F.intensity),R.distance=F.distance,R.decay=F.decay,F.castShadow){const k=F.shadow,z=t.get(F);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,z.shadowCameraNear=k.camera.near,z.shadowCameraFar=k.camera.far,A.pointShadow[f]=z,A.pointShadowMap[f]=P,A.pointShadowMatrix[f]=F.shadow.matrix,v++}A.point[f]=R,f++}else if(F.isHemisphereLight){const R=e.get(F);R.skyColor.copy(F.color).multiplyScalar(I),R.groundColor.copy(F.groundColor).multiplyScalar(I),A.hemi[d]=R,d++}}g>0&&(r.has("OES_texture_float_linear")===!0?(A.rectAreaLTC1=oe.LTC_FLOAT_1,A.rectAreaLTC2=oe.LTC_FLOAT_2):(A.rectAreaLTC1=oe.LTC_HALF_1,A.rectAreaLTC2=oe.LTC_HALF_2)),A.ambient[0]=c,A.ambient[1]=u,A.ambient[2]=h;const S=A.hash;(S.directionalLength!==p||S.pointLength!==f||S.spotLength!==m||S.rectAreaLength!==g||S.hemiLength!==d||S.numDirectionalShadows!==B||S.numPointShadows!==v||S.numSpotShadows!==y||S.numSpotMaps!==x||S.numLightProbes!==M)&&(A.directional.length=p,A.spot.length=m,A.rectArea.length=g,A.point.length=f,A.hemi.length=d,A.directionalShadow.length=B,A.directionalShadowMap.length=B,A.pointShadow.length=v,A.pointShadowMap.length=v,A.spotShadow.length=y,A.spotShadowMap.length=y,A.directionalShadowMatrix.length=B,A.pointShadowMatrix.length=v,A.spotLightMatrix.length=y+x-w,A.spotLightMap.length=x,A.numSpotLightShadowsWithMaps=w,A.numLightProbes=M,S.directionalLength=p,S.pointLength=f,S.spotLength=m,S.rectAreaLength=g,S.hemiLength=d,S.numDirectionalShadows=B,S.numPointShadows=v,S.numSpotShadows=y,S.numSpotMaps=x,S.numLightProbes=M,A.version=V1++)}function o(l,c){let u=0,h=0,p=0,f=0,m=0;const g=c.matrixWorldInverse;for(let d=0,B=l.length;d<B;d++){const v=l[d];if(v.isDirectionalLight){const y=A.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),u++}else if(v.isSpotLight){const y=A.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const y=A.rectArea[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),s.identity(),n.copy(v.matrixWorld),n.premultiply(g),s.extractRotation(n),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),f++}else if(v.isPointLight){const y=A.point[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),h++}else if(v.isHemisphereLight){const y=A.hemi[m];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),m++}}}return{setup:a,setupView:o,state:A}}function Du(r){const e=new z1(r),t=[],A=[];function i(c){l.camera=c,t.length=0,A.length=0}function n(c){t.push(c)}function s(c){A.push(c)}function a(){e.setup(t)}function o(c){e.setupView(t,c)}const l={lightsArray:t,shadowsArray:A,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:o,pushLight:n,pushShadow:s}}function k1(r){let e=new WeakMap;function t(i,n=0){const s=e.get(i);let a;return s===void 0?(a=new Du(r),e.set(i,[a])):n>=s.length?(a=new Du(r),s.push(a)):a=s[n],a}function A(){e=new WeakMap}return{get:t,dispose:A}}const K1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function X1(r,e,t){let A=new Ah;const i=new Ee,n=new Ee,s=new yt,a=new hB({depthPacking:nm}),o=new uB,l={},c=t.maxTextureSize,u={[kr]:cA,[cA]:kr,[mr]:mr},h=new AA({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:K1,fragmentShader:W1}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const f=new uA;f.setAttribute("position",new hA(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new iA(f,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hp;let d=this.type;this.render=function(w,M,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const C=r.getRenderTarget(),_=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),T=r.state;T.setBlending(XA),T.buffers.depth.getReversed()===!0?T.buffers.color.setClear(0,0,0,0):T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);const I=d!==fr&&this.type===fr,L=d===fr&&this.type!==fr;for(let P=0,R=w.length;P<R;P++){const k=w[P],z=k.shadow;if(z===void 0){De("WebGLShadowMap:",k,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const X=z.getFrameExtents();if(i.multiply(X),n.copy(z.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(n.x=Math.floor(c/X.x),i.x=n.x*X.x,z.mapSize.x=n.x),i.y>c&&(n.y=Math.floor(c/X.y),i.y=n.y*X.y,z.mapSize.y=n.y)),z.map===null||I===!0||L===!0){const ve=this.type!==fr?{minFilter:rA,magFilter:rA}:{};z.map!==null&&z.map.dispose(),z.map=new PA(i.x,i.y,ve),z.map.texture.name=k.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const te=z.getViewportCount();for(let ve=0;ve<te;ve++){const re=z.getViewport(ve);s.set(n.x*re.x,n.y*re.y,n.x*re.z,n.y*re.w),T.viewport(s),z.updateMatrices(k,ve),A=z.getFrustum(),y(M,S,z.camera,k,this.type)}z.isPointLightShadow!==!0&&this.type===fr&&B(z,S),z.needsUpdate=!1}d=this.type,g.needsUpdate=!1,r.setRenderTarget(C,_,F)};function B(w,M){const S=e.update(m);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new PA(i.x,i.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(M,null,S,h,m,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(M,null,S,p,m,null)}function v(w,M,S,C){let _=null;const F=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)_=F;else if(_=S.isPointLight===!0?o:a,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const T=_.uuid,I=M.uuid;let L=l[T];L===void 0&&(L={},l[T]=L);let P=L[I];P===void 0&&(P=_.clone(),L[I]=P,M.addEventListener("dispose",x)),_=P}if(_.visible=M.visible,_.wireframe=M.wireframe,C===fr?_.side=M.shadowSide!==null?M.shadowSide:M.side:_.side=M.shadowSide!==null?M.shadowSide:u[M.side],_.alphaMap=M.alphaMap,_.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,_.map=M.map,_.clipShadows=M.clipShadows,_.clippingPlanes=M.clippingPlanes,_.clipIntersection=M.clipIntersection,_.displacementMap=M.displacementMap,_.displacementScale=M.displacementScale,_.displacementBias=M.displacementBias,_.wireframeLinewidth=M.wireframeLinewidth,_.linewidth=M.linewidth,S.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const T=r.properties.get(_);T.light=S}return _}function y(w,M,S,C,_){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===fr)&&(!w.frustumCulled||A.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);const T=e.update(w),I=w.material;if(Array.isArray(I)){const L=T.groups;for(let P=0,R=L.length;P<R;P++){const k=L[P],z=I[k.materialIndex];if(z&&z.visible){const X=v(w,z,C,_);w.onBeforeShadow(r,w,M,S,T,X,k),r.renderBufferDirect(S,null,T,X,w,k),w.onAfterShadow(r,w,M,S,T,X,k)}}}else if(I.visible){const L=v(w,I,C,_);w.onBeforeShadow(r,w,M,S,T,L,null),r.renderBufferDirect(S,null,T,L,w,null),w.onAfterShadow(r,w,M,S,T,L,null)}}const F=w.children;for(let T=0,I=F.length;T<I;T++)y(F[T],M,S,C,_)}function x(w){w.target.removeEventListener("dispose",x);for(const M in l){const S=l[M],C=w.target.uuid;C in S&&(S[C].dispose(),delete S[C])}}}const j1={[Ul]:Sl,[Fl]:Il,[Tl]:Ll,[Zi]:Ql,[Sl]:Ul,[Il]:Fl,[Ll]:Tl,[Ql]:Zi};function Y1(r,e){function t(){let D=!1;const ce=new yt;let se=null;const ae=new yt(0,0,0,0);return{setMask:function(Ae){se!==Ae&&!D&&(r.colorMask(Ae,Ae,Ae,Ae),se=Ae)},setLocked:function(Ae){D=Ae},setClear:function(Ae,$,_e,Te,Lt){Lt===!0&&(Ae*=Te,$*=Te,_e*=Te),ce.set(Ae,$,_e,Te),ae.equals(ce)===!1&&(r.clearColor(Ae,$,_e,Te),ae.copy(ce))},reset:function(){D=!1,se=null,ae.set(-1,0,0,0)}}}function A(){let D=!1,ce=!1,se=null,ae=null,Ae=null;return{setReversed:function($){if(ce!==$){const _e=e.get("EXT_clip_control");$?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),ce=$;const Te=Ae;Ae=null,this.setClear(Te)}},getReversed:function(){return ce},setTest:function($){$?q(r.DEPTH_TEST):ye(r.DEPTH_TEST)},setMask:function($){se!==$&&!D&&(r.depthMask($),se=$)},setFunc:function($){if(ce&&($=j1[$]),ae!==$){switch($){case Ul:r.depthFunc(r.NEVER);break;case Sl:r.depthFunc(r.ALWAYS);break;case Fl:r.depthFunc(r.LESS);break;case Zi:r.depthFunc(r.LEQUAL);break;case Tl:r.depthFunc(r.EQUAL);break;case Ql:r.depthFunc(r.GEQUAL);break;case Il:r.depthFunc(r.GREATER);break;case Ll:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ae=$}},setLocked:function($){D=$},setClear:function($){Ae!==$&&(ce&&($=1-$),r.clearDepth($),Ae=$)},reset:function(){D=!1,se=null,ae=null,Ae=null,ce=!1}}}function i(){let D=!1,ce=null,se=null,ae=null,Ae=null,$=null,_e=null,Te=null,Lt=null;return{setTest:function(it){D||(it?q(r.STENCIL_TEST):ye(r.STENCIL_TEST))},setMask:function(it){ce!==it&&!D&&(r.stencilMask(it),ce=it)},setFunc:function(it,OA,UA){(se!==it||ae!==OA||Ae!==UA)&&(r.stencilFunc(it,OA,UA),se=it,ae=OA,Ae=UA)},setOp:function(it,OA,UA){($!==it||_e!==OA||Te!==UA)&&(r.stencilOp(it,OA,UA),$=it,_e=OA,Te=UA)},setLocked:function(it){D=it},setClear:function(it){Lt!==it&&(r.clearStencil(it),Lt=it)},reset:function(){D=!1,ce=null,se=null,ae=null,Ae=null,$=null,_e=null,Te=null,Lt=null}}}const n=new t,s=new A,a=new i,o=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,p=[],f=null,m=!1,g=null,d=null,B=null,v=null,y=null,x=null,w=null,M=new Qe(0,0,0),S=0,C=!1,_=null,F=null,T=null,I=null,L=null;const P=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let R=!1,k=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(z)[1]),R=k>=1):z.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),R=k>=2);let X=null,te={};const ve=r.getParameter(r.SCISSOR_BOX),re=r.getParameter(r.VIEWPORT),Ne=new yt().fromArray(ve),je=new yt().fromArray(re);function Ke(D,ce,se,ae){const Ae=new Uint8Array(4),$=r.createTexture();r.bindTexture(D,$),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let _e=0;_e<se;_e++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(ce,0,r.RGBA,1,1,ae,0,r.RGBA,r.UNSIGNED_BYTE,Ae):r.texImage2D(ce+_e,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ae);return $}const j={};j[r.TEXTURE_2D]=Ke(r.TEXTURE_2D,r.TEXTURE_2D,1),j[r.TEXTURE_CUBE_MAP]=Ke(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[r.TEXTURE_2D_ARRAY]=Ke(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),j[r.TEXTURE_3D]=Ke(r.TEXTURE_3D,r.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),a.setClear(0),q(r.DEPTH_TEST),s.setFunc(Zi),Nt(!1),et(Ih),q(r.CULL_FACE),Ze(XA);function q(D){c[D]!==!0&&(r.enable(D),c[D]=!0)}function ye(D){c[D]!==!1&&(r.disable(D),c[D]=!1)}function ze(D,ce){return u[D]!==ce?(r.bindFramebuffer(D,ce),u[D]=ce,D===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ce),D===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ce),!0):!1}function be(D,ce){let se=p,ae=!1;if(D){se=h.get(ce),se===void 0&&(se=[],h.set(ce,se));const Ae=D.textures;if(se.length!==Ae.length||se[0]!==r.COLOR_ATTACHMENT0){for(let $=0,_e=Ae.length;$<_e;$++)se[$]=r.COLOR_ATTACHMENT0+$;se.length=Ae.length,ae=!0}}else se[0]!==r.BACK&&(se[0]=r.BACK,ae=!0);ae&&r.drawBuffers(se)}function Se(D){return f!==D?(r.useProgram(D),f=D,!0):!1}const ot={[ii]:r.FUNC_ADD,[Qg]:r.FUNC_SUBTRACT,[Ig]:r.FUNC_REVERSE_SUBTRACT};ot[Lg]=r.MIN,ot[Rg]=r.MAX;const tt={[Dg]:r.ZERO,[Hg]:r.ONE,[Pg]:r.SRC_COLOR,[bl]:r.SRC_ALPHA,[kg]:r.SRC_ALPHA_SATURATE,[Gg]:r.DST_COLOR,[Og]:r.DST_ALPHA,[Ng]:r.ONE_MINUS_SRC_COLOR,[Ml]:r.ONE_MINUS_SRC_ALPHA,[zg]:r.ONE_MINUS_DST_COLOR,[Vg]:r.ONE_MINUS_DST_ALPHA,[Kg]:r.CONSTANT_COLOR,[Wg]:r.ONE_MINUS_CONSTANT_COLOR,[Xg]:r.CONSTANT_ALPHA,[jg]:r.ONE_MINUS_CONSTANT_ALPHA};function Ze(D,ce,se,ae,Ae,$,_e,Te,Lt,it){if(D===XA){m===!0&&(ye(r.BLEND),m=!1);return}if(m===!1&&(q(r.BLEND),m=!0),D!==Tg){if(D!==g||it!==C){if((d!==ii||y!==ii)&&(r.blendEquation(r.FUNC_ADD),d=ii,y=ii),it)switch(D){case ji:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ca:r.blendFunc(r.ONE,r.ONE);break;case Lh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Rh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:vt("WebGLState: Invalid blending: ",D);break}else switch(D){case ji:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ca:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Lh:vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rh:vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:vt("WebGLState: Invalid blending: ",D);break}B=null,v=null,x=null,w=null,M.set(0,0,0),S=0,g=D,C=it}return}Ae=Ae||ce,$=$||se,_e=_e||ae,(ce!==d||Ae!==y)&&(r.blendEquationSeparate(ot[ce],ot[Ae]),d=ce,y=Ae),(se!==B||ae!==v||$!==x||_e!==w)&&(r.blendFuncSeparate(tt[se],tt[ae],tt[$],tt[_e]),B=se,v=ae,x=$,w=_e),(Te.equals(M)===!1||Lt!==S)&&(r.blendColor(Te.r,Te.g,Te.b,Lt),M.copy(Te),S=Lt),g=D,C=!1}function H(D,ce){D.side===mr?ye(r.CULL_FACE):q(r.CULL_FACE);let se=D.side===cA;ce&&(se=!se),Nt(se),D.blending===ji&&D.transparent===!1?Ze(XA):Ze(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),n.setMask(D.colorWrite);const ae=D.stencilWrite;a.setTest(ae),ae&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),xe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?q(r.SAMPLE_ALPHA_TO_COVERAGE):ye(r.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(D){_!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),_=D)}function et(D){D!==Sg?(q(r.CULL_FACE),D!==F&&(D===Ih?r.cullFace(r.BACK):D===Fg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ye(r.CULL_FACE),F=D}function lt(D){D!==T&&(R&&r.lineWidth(D),T=D)}function xe(D,ce,se){D?(q(r.POLYGON_OFFSET_FILL),(I!==ce||L!==se)&&(r.polygonOffset(ce,se),I=ce,L=se)):ye(r.POLYGON_OFFSET_FILL)}function gt(D){D?q(r.SCISSOR_TEST):ye(r.SCISSOR_TEST)}function Me(D){D===void 0&&(D=r.TEXTURE0+P-1),X!==D&&(r.activeTexture(D),X=D)}function Ve(D,ce,se){se===void 0&&(X===null?se=r.TEXTURE0+P-1:se=X);let ae=te[se];ae===void 0&&(ae={type:void 0,texture:void 0},te[se]=ae),(ae.type!==D||ae.texture!==ce)&&(X!==se&&(r.activeTexture(se),X=se),r.bindTexture(D,ce||j[D]),ae.type=D,ae.texture=ce)}function Q(){const D=te[X];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function G(){try{r.compressedTexImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function J(){try{r.texSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Z(){try{r.texSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function Y(){try{r.compressedTexSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Ue(){try{r.compressedTexSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function le(){try{r.texStorage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Ie(){try{r.texStorage3D(...arguments)}catch(D){D("WebGLState:",D)}}function fe(){try{r.texImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function ee(){try{r.texImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function ne(D){Ne.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Ne.copy(D))}function ke(D){je.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),je.copy(D))}function Fe(D,ce){let se=l.get(ce);se===void 0&&(se=new WeakMap,l.set(ce,se));let ae=se.get(D);ae===void 0&&(ae=r.getUniformBlockIndex(ce,D.name),se.set(D,ae))}function de(D,ce){const se=l.get(ce).get(D);o.get(ce)!==se&&(r.uniformBlockBinding(ce,se,D.__bindingPointIndex),o.set(ce,se))}function Oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),s.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},X=null,te={},u={},h=new WeakMap,p=[],f=null,m=!1,g=null,d=null,B=null,v=null,y=null,x=null,w=null,M=new Qe(0,0,0),S=0,C=!1,_=null,F=null,T=null,I=null,L=null,Ne.set(0,0,r.canvas.width,r.canvas.height),je.set(0,0,r.canvas.width,r.canvas.height),n.reset(),s.reset(),a.reset()}return{buffers:{color:n,depth:s,stencil:a},enable:q,disable:ye,bindFramebuffer:ze,drawBuffers:be,useProgram:Se,setBlending:Ze,setMaterial:H,setFlipSided:Nt,setCullFace:et,setLineWidth:lt,setPolygonOffset:xe,setScissorTest:gt,activeTexture:Me,bindTexture:Ve,unbindTexture:Q,compressedTexImage2D:E,compressedTexImage3D:G,texImage2D:fe,texImage3D:ee,updateUBOMapping:Fe,uniformBlockBinding:de,texStorage2D:le,texStorage3D:Ie,texSubImage2D:J,texSubImage3D:Z,compressedTexSubImage2D:Y,compressedTexSubImage3D:Ue,scissor:ne,viewport:ke,reset:Oe}}function q1(r,e,t,A,i,n,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ee,c=new WeakMap;let u;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(Q,E){return p?new OffscreenCanvas(Q,E):Ma("canvas")}function m(Q,E,G){let J=1;const Z=Ve(Q);if((Z.width>G||Z.height>G)&&(J=G/Math.max(Z.width,Z.height)),J<1)if(typeof HTMLImageElement<"u"&&Q instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Q instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Q instanceof ImageBitmap||typeof VideoFrame<"u"&&Q instanceof VideoFrame){const Y=Math.floor(J*Z.width),Ue=Math.floor(J*Z.height);u===void 0&&(u=f(Y,Ue));const le=E?f(Y,Ue):u;return le.width=Y,le.height=Ue,le.getContext("2d").drawImage(Q,0,0,Y,Ue),De("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+Ue+")."),le}else return"data"in Q&&De("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),Q;return Q}function g(Q){return Q.generateMipmaps}function d(Q){r.generateMipmap(Q)}function B(Q){return Q.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:Q.isWebGL3DRenderTarget?r.TEXTURE_3D:Q.isWebGLArrayRenderTarget||Q.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(Q,E,G,J,Z=!1){if(Q!==null){if(r[Q]!==void 0)return r[Q];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+Q+"'")}let Y=E;if(E===r.RED&&(G===r.FLOAT&&(Y=r.R32F),G===r.HALF_FLOAT&&(Y=r.R16F),G===r.UNSIGNED_BYTE&&(Y=r.R8)),E===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(Y=r.R8UI),G===r.UNSIGNED_SHORT&&(Y=r.R16UI),G===r.UNSIGNED_INT&&(Y=r.R32UI),G===r.BYTE&&(Y=r.R8I),G===r.SHORT&&(Y=r.R16I),G===r.INT&&(Y=r.R32I)),E===r.RG&&(G===r.FLOAT&&(Y=r.RG32F),G===r.HALF_FLOAT&&(Y=r.RG16F),G===r.UNSIGNED_BYTE&&(Y=r.RG8)),E===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(Y=r.RG8UI),G===r.UNSIGNED_SHORT&&(Y=r.RG16UI),G===r.UNSIGNED_INT&&(Y=r.RG32UI),G===r.BYTE&&(Y=r.RG8I),G===r.SHORT&&(Y=r.RG16I),G===r.INT&&(Y=r.RG32I)),E===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),G===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),G===r.UNSIGNED_INT&&(Y=r.RGB32UI),G===r.BYTE&&(Y=r.RGB8I),G===r.SHORT&&(Y=r.RGB16I),G===r.INT&&(Y=r.RGB32I)),E===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),G===r.UNSIGNED_INT&&(Y=r.RGBA32UI),G===r.BYTE&&(Y=r.RGBA8I),G===r.SHORT&&(Y=r.RGBA16I),G===r.INT&&(Y=r.RGBA32I)),E===r.RGB&&(G===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(Y=r.R11F_G11F_B10F)),E===r.RGBA){const Ue=Z?Ea:qe.getTransfer(J);G===r.FLOAT&&(Y=r.RGBA32F),G===r.HALF_FLOAT&&(Y=r.RGBA16F),G===r.UNSIGNED_BYTE&&(Y=Ue===nt?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function y(Q,E){let G;return Q?E===null||E===di||E===Xn?G=r.DEPTH24_STENCIL8:E===wr?G=r.DEPTH32F_STENCIL8:E===Wn&&(G=r.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===di||E===Xn?G=r.DEPTH_COMPONENT24:E===wr?G=r.DEPTH_COMPONENT32F:E===Wn&&(G=r.DEPTH_COMPONENT16),G}function x(Q,E){return g(Q)===!0||Q.isFramebufferTexture&&Q.minFilter!==rA&&Q.minFilter!==EA?Math.log2(Math.max(E.width,E.height))+1:Q.mipmaps!==void 0&&Q.mipmaps.length>0?Q.mipmaps.length:Q.isCompressedTexture&&Array.isArray(Q.image)?E.mipmaps.length:1}function w(Q){const E=Q.target;E.removeEventListener("dispose",w),S(E),E.isVideoTexture&&c.delete(E)}function M(Q){const E=Q.target;E.removeEventListener("dispose",M),_(E)}function S(Q){const E=A.get(Q);if(E.__webglInit===void 0)return;const G=Q.source,J=h.get(G);if(J){const Z=J[E.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&C(Q),Object.keys(J).length===0&&h.delete(G)}A.remove(Q)}function C(Q){const E=A.get(Q);r.deleteTexture(E.__webglTexture);const G=Q.source,J=h.get(G);delete J[E.__cacheKey],s.memory.textures--}function _(Q){const E=A.get(Q);if(Q.depthTexture&&(Q.depthTexture.dispose(),A.remove(Q.depthTexture)),Q.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let Z=0;Z<E.__webglFramebuffer[J].length;Z++)r.deleteFramebuffer(E.__webglFramebuffer[J][Z]);else r.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)r.deleteFramebuffer(E.__webglFramebuffer[J]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=Q.textures;for(let J=0,Z=G.length;J<Z;J++){const Y=A.get(G[J]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),s.memory.textures--),A.remove(G[J])}A.remove(Q)}let F=0;function T(){F=0}function I(){const Q=F;return Q>=i.maxTextures&&De("WebGLTextures: Trying to use "+Q+" texture units while this GPU supports only "+i.maxTextures),F+=1,Q}function L(Q){const E=[];return E.push(Q.wrapS),E.push(Q.wrapT),E.push(Q.wrapR||0),E.push(Q.magFilter),E.push(Q.minFilter),E.push(Q.anisotropy),E.push(Q.internalFormat),E.push(Q.format),E.push(Q.type),E.push(Q.generateMipmaps),E.push(Q.premultiplyAlpha),E.push(Q.flipY),E.push(Q.unpackAlignment),E.push(Q.colorSpace),E.join()}function P(Q,E){const G=A.get(Q);if(Q.isVideoTexture&&gt(Q),Q.isRenderTargetTexture===!1&&Q.isExternalTexture!==!0&&Q.version>0&&G.__version!==Q.version){const J=Q.image;if(J===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{j(G,Q,E);return}}else Q.isExternalTexture&&(G.__webglTexture=Q.sourceTexture?Q.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+E)}function R(Q,E){const G=A.get(Q);if(Q.isRenderTargetTexture===!1&&Q.version>0&&G.__version!==Q.version){j(G,Q,E);return}else Q.isExternalTexture&&(G.__webglTexture=Q.sourceTexture?Q.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+E)}function k(Q,E){const G=A.get(Q);if(Q.isRenderTargetTexture===!1&&Q.version>0&&G.__version!==Q.version){j(G,Q,E);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+E)}function z(Q,E){const G=A.get(Q);if(Q.version>0&&G.__version!==Q.version){q(G,Q,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+E)}const X={[Kn]:r.REPEAT,[Br]:r.CLAMP_TO_EDGE,[Hl]:r.MIRRORED_REPEAT},te={[rA]:r.NEAREST,[rm]:r.NEAREST_MIPMAP_NEAREST,[ds]:r.NEAREST_MIPMAP_LINEAR,[EA]:r.LINEAR,[go]:r.LINEAR_MIPMAP_NEAREST,[ai]:r.LINEAR_MIPMAP_LINEAR},ve={[am]:r.NEVER,[dm]:r.ALWAYS,[om]:r.LESS,[_p]:r.LEQUAL,[lm]:r.EQUAL,[um]:r.GEQUAL,[cm]:r.GREATER,[hm]:r.NOTEQUAL};function re(Q,E){if(E.type===wr&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===EA||E.magFilter===go||E.magFilter===ds||E.magFilter===ai||E.minFilter===EA||E.minFilter===go||E.minFilter===ds||E.minFilter===ai)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(Q,r.TEXTURE_WRAP_S,X[E.wrapS]),r.texParameteri(Q,r.TEXTURE_WRAP_T,X[E.wrapT]),(Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY)&&r.texParameteri(Q,r.TEXTURE_WRAP_R,X[E.wrapR]),r.texParameteri(Q,r.TEXTURE_MAG_FILTER,te[E.magFilter]),r.texParameteri(Q,r.TEXTURE_MIN_FILTER,te[E.minFilter]),E.compareFunction&&(r.texParameteri(Q,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(Q,r.TEXTURE_COMPARE_FUNC,ve[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===rA||E.minFilter!==ds&&E.minFilter!==ai||E.type===wr&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||A.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(Q,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),A.get(E).__currentAnisotropy=E.anisotropy}}}function Ne(Q,E){let G=!1;Q.__webglInit===void 0&&(Q.__webglInit=!0,E.addEventListener("dispose",w));const J=E.source;let Z=h.get(J);Z===void 0&&(Z={},h.set(J,Z));const Y=L(E);if(Y!==Q.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:r.createTexture(),usedTimes:0},s.memory.textures++,G=!0),Z[Y].usedTimes++;const Ue=Z[Q.__cacheKey];Ue!==void 0&&(Z[Q.__cacheKey].usedTimes--,Ue.usedTimes===0&&C(E)),Q.__cacheKey=Y,Q.__webglTexture=Z[Y].texture}return G}function je(Q,E,G){return Math.floor(Math.floor(Q/G)/E)}function Ke(Q,E,G,J){const Z=Q.updateRanges;if(Z.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,G,J,E.data);else{Z.sort((fe,ee)=>fe.start-ee.start);let Y=0;for(let fe=1;fe<Z.length;fe++){const ee=Z[Y],ne=Z[fe],ke=ee.start+ee.count,Fe=je(ne.start,E.width,4),de=je(ee.start,E.width,4);ne.start<=ke+1&&Fe===de&&je(ne.start+ne.count-1,E.width,4)===Fe?ee.count=Math.max(ee.count,ne.start+ne.count-ee.start):(++Y,Z[Y]=ne)}Z.length=Y+1;const Ue=r.getParameter(r.UNPACK_ROW_LENGTH),le=r.getParameter(r.UNPACK_SKIP_PIXELS),Ie=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let fe=0,ee=Z.length;fe<ee;fe++){const ne=Z[fe],ke=Math.floor(ne.start/4),Fe=Math.ceil(ne.count/4),de=ke%E.width,Oe=Math.floor(ke/E.width),D=Fe;r.pixelStorei(r.UNPACK_SKIP_PIXELS,de),r.pixelStorei(r.UNPACK_SKIP_ROWS,Oe),t.texSubImage2D(r.TEXTURE_2D,0,de,Oe,D,1,G,J,E.data)}Q.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ue),r.pixelStorei(r.UNPACK_SKIP_PIXELS,le),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ie)}}function j(Q,E,G){let J=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=r.TEXTURE_3D);const Z=Ne(Q,E),Y=E.source;t.bindTexture(J,Q.__webglTexture,r.TEXTURE0+G);const Ue=A.get(Y);if(Y.version!==Ue.__version||Z===!0){t.activeTexture(r.TEXTURE0+G);const le=qe.getPrimaries(qe.workingColorSpace),Ie=E.colorSpace===Dr?null:qe.getPrimaries(E.colorSpace),fe=E.colorSpace===Dr||le===Ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let ee=m(E.image,!1,i.maxTextureSize);ee=Me(E,ee);const ne=n.convert(E.format,E.colorSpace),ke=n.convert(E.type);let Fe=v(E.internalFormat,ne,ke,E.colorSpace,E.isVideoTexture);re(J,E);let de;const Oe=E.mipmaps,D=E.isVideoTexture!==!0,ce=Ue.__version===void 0||Z===!0,se=Y.dataReady,ae=x(E,ee);if(E.isDepthTexture)Fe=y(E.format===Yn,E.type),ce&&(D?t.texStorage2D(r.TEXTURE_2D,1,Fe,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,Fe,ee.width,ee.height,0,ne,ke,null));else if(E.isDataTexture)if(Oe.length>0){D&&ce&&t.texStorage2D(r.TEXTURE_2D,ae,Fe,Oe[0].width,Oe[0].height);for(let Ae=0,$=Oe.length;Ae<$;Ae++)de=Oe[Ae],D?se&&t.texSubImage2D(r.TEXTURE_2D,Ae,0,0,de.width,de.height,ne,ke,de.data):t.texImage2D(r.TEXTURE_2D,Ae,Fe,de.width,de.height,0,ne,ke,de.data);E.generateMipmaps=!1}else D?(ce&&t.texStorage2D(r.TEXTURE_2D,ae,Fe,ee.width,ee.height),se&&Ke(E,ee,ne,ke)):t.texImage2D(r.TEXTURE_2D,0,Fe,ee.width,ee.height,0,ne,ke,ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){D&&ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ae,Fe,Oe[0].width,Oe[0].height,ee.depth);for(let Ae=0,$=Oe.length;Ae<$;Ae++)if(de=Oe[Ae],E.format!==DA)if(ne!==null)if(D){if(se)if(E.layerUpdates.size>0){const _e=du(de.width,de.height,E.format,E.type);for(const Te of E.layerUpdates){const Lt=de.data.subarray(Te*_e/de.data.BYTES_PER_ELEMENT,(Te+1)*_e/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ae,0,0,Te,de.width,de.height,1,ne,Lt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ae,0,0,0,de.width,de.height,ee.depth,ne,de.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Ae,Fe,de.width,de.height,ee.depth,0,de.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?se&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Ae,0,0,0,de.width,de.height,ee.depth,ne,ke,de.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Ae,Fe,de.width,de.height,ee.depth,0,ne,ke,de.data)}else{D&&ce&&t.texStorage2D(r.TEXTURE_2D,ae,Fe,Oe[0].width,Oe[0].height);for(let Ae=0,$=Oe.length;Ae<$;Ae++)de=Oe[Ae],E.format!==DA?ne!==null?D?se&&t.compressedTexSubImage2D(r.TEXTURE_2D,Ae,0,0,de.width,de.height,ne,de.data):t.compressedTexImage2D(r.TEXTURE_2D,Ae,Fe,de.width,de.height,0,de.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?se&&t.texSubImage2D(r.TEXTURE_2D,Ae,0,0,de.width,de.height,ne,ke,de.data):t.texImage2D(r.TEXTURE_2D,Ae,Fe,de.width,de.height,0,ne,ke,de.data)}else if(E.isDataArrayTexture)if(D){if(ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ae,Fe,ee.width,ee.height,ee.depth),se)if(E.layerUpdates.size>0){const Ae=du(ee.width,ee.height,E.format,E.type);for(const $ of E.layerUpdates){const _e=ee.data.subarray($*Ae/ee.data.BYTES_PER_ELEMENT,($+1)*Ae/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,$,ee.width,ee.height,1,ne,ke,_e)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ne,ke,ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Fe,ee.width,ee.height,ee.depth,0,ne,ke,ee.data);else if(E.isData3DTexture)D?(ce&&t.texStorage3D(r.TEXTURE_3D,ae,Fe,ee.width,ee.height,ee.depth),se&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ne,ke,ee.data)):t.texImage3D(r.TEXTURE_3D,0,Fe,ee.width,ee.height,ee.depth,0,ne,ke,ee.data);else if(E.isFramebufferTexture){if(ce)if(D)t.texStorage2D(r.TEXTURE_2D,ae,Fe,ee.width,ee.height);else{let Ae=ee.width,$=ee.height;for(let _e=0;_e<ae;_e++)t.texImage2D(r.TEXTURE_2D,_e,Fe,Ae,$,0,ne,ke,null),Ae>>=1,$>>=1}}else if(Oe.length>0){if(D&&ce){const Ae=Ve(Oe[0]);t.texStorage2D(r.TEXTURE_2D,ae,Fe,Ae.width,Ae.height)}for(let Ae=0,$=Oe.length;Ae<$;Ae++)de=Oe[Ae],D?se&&t.texSubImage2D(r.TEXTURE_2D,Ae,0,0,ne,ke,de):t.texImage2D(r.TEXTURE_2D,Ae,Fe,ne,ke,de);E.generateMipmaps=!1}else if(D){if(ce){const Ae=Ve(ee);t.texStorage2D(r.TEXTURE_2D,ae,Fe,Ae.width,Ae.height)}se&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ne,ke,ee)}else t.texImage2D(r.TEXTURE_2D,0,Fe,ne,ke,ee);g(E)&&d(J),Ue.__version=Y.version,E.onUpdate&&E.onUpdate(E)}Q.__version=E.version}function q(Q,E,G){if(E.image.length!==6)return;const J=Ne(Q,E),Z=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+G);const Y=A.get(Z);if(Z.version!==Y.__version||J===!0){t.activeTexture(r.TEXTURE0+G);const Ue=qe.getPrimaries(qe.workingColorSpace),le=E.colorSpace===Dr?null:qe.getPrimaries(E.colorSpace),Ie=E.colorSpace===Dr||Ue===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const fe=E.isCompressedTexture||E.image[0].isCompressedTexture,ee=E.image[0]&&E.image[0].isDataTexture,ne=[];for(let $=0;$<6;$++)!fe&&!ee?ne[$]=m(E.image[$],!0,i.maxCubemapSize):ne[$]=ee?E.image[$].image:E.image[$],ne[$]=Me(E,ne[$]);const ke=ne[0],Fe=n.convert(E.format,E.colorSpace),de=n.convert(E.type),Oe=v(E.internalFormat,Fe,de,E.colorSpace),D=E.isVideoTexture!==!0,ce=Y.__version===void 0||J===!0,se=Z.dataReady;let ae=x(E,ke);re(r.TEXTURE_CUBE_MAP,E);let Ae;if(fe){D&&ce&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ae,Oe,ke.width,ke.height);for(let $=0;$<6;$++){Ae=ne[$].mipmaps;for(let _e=0;_e<Ae.length;_e++){const Te=Ae[_e];E.format!==DA?Fe!==null?D?se&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,0,0,Te.width,Te.height,Fe,Te.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,Oe,Te.width,Te.height,0,Te.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,0,0,Te.width,Te.height,Fe,de,Te.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,Oe,Te.width,Te.height,0,Fe,de,Te.data)}}}else{if(Ae=E.mipmaps,D&&ce){Ae.length>0&&ae++;const $=Ve(ne[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ae,Oe,$.width,$.height)}for(let $=0;$<6;$++)if(ee){D?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ne[$].width,ne[$].height,Fe,de,ne[$].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Oe,ne[$].width,ne[$].height,0,Fe,de,ne[$].data);for(let _e=0;_e<Ae.length;_e++){const Te=Ae[_e].image[$].image;D?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,0,0,Te.width,Te.height,Fe,de,Te.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,Oe,Te.width,Te.height,0,Fe,de,Te.data)}}else{D?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Fe,de,ne[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Oe,Fe,de,ne[$]);for(let _e=0;_e<Ae.length;_e++){const Te=Ae[_e];D?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,0,0,Fe,de,Te.image[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,Oe,Fe,de,Te.image[$])}}}g(E)&&d(r.TEXTURE_CUBE_MAP),Y.__version=Z.version,E.onUpdate&&E.onUpdate(E)}Q.__version=E.version}function ye(Q,E,G,J,Z,Y){const Ue=n.convert(G.format,G.colorSpace),le=n.convert(G.type),Ie=v(G.internalFormat,Ue,le,G.colorSpace),fe=A.get(E),ee=A.get(G);if(ee.__renderTarget=E,!fe.__hasExternalTextures){const ne=Math.max(1,E.width>>Y),ke=Math.max(1,E.height>>Y);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,Y,Ie,ne,ke,E.depth,0,Ue,le,null):t.texImage2D(Z,Y,Ie,ne,ke,0,Ue,le,null)}t.bindFramebuffer(r.FRAMEBUFFER,Q),xe(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,Z,ee.__webglTexture,0,lt(E)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,Z,ee.__webglTexture,Y),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ze(Q,E,G){if(r.bindRenderbuffer(r.RENDERBUFFER,Q),E.depthBuffer){const J=E.depthTexture,Z=J&&J.isDepthTexture?J.type:null,Y=y(E.stencilBuffer,Z),Ue=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=lt(E);xe(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le,Y,E.width,E.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,le,Y,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Y,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ue,r.RENDERBUFFER,Q)}else{const J=E.textures;for(let Z=0;Z<J.length;Z++){const Y=J[Z],Ue=n.convert(Y.format,Y.colorSpace),le=n.convert(Y.type),Ie=v(Y.internalFormat,Ue,le,Y.colorSpace),fe=lt(E);G&&xe(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,Ie,E.width,E.height):xe(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,fe,Ie,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ie,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function be(Q,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,Q),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=A.get(E.depthTexture);G.__renderTarget=E,(!G.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),P(E.depthTexture,0);const J=G.__webglTexture,Z=lt(E);if(E.depthTexture.format===jn)xe(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(E.depthTexture.format===Yn)xe(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Se(Q){const E=A.get(Q),G=Q.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==Q.depthTexture){const J=Q.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){const Z=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",Z)};J.addEventListener("dispose",Z),E.__depthDisposeCallback=Z}E.__boundDepthTexture=J}if(Q.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const J=Q.texture.mipmaps;J&&J.length>0?be(E.__webglFramebuffer[0],Q):be(E.__webglFramebuffer,Q)}else if(G){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=r.createRenderbuffer(),ze(E.__webglDepthbuffer[J],Q,!1);else{const Z=Q.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,Y)}}else{const J=Q.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),ze(E.__webglDepthbuffer,Q,!1);else{const Z=Q.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,Y)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ot(Q,E,G){const J=A.get(Q);E!==void 0&&ye(J.__webglFramebuffer,Q,Q.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&Se(Q)}function tt(Q){const E=Q.texture,G=A.get(Q),J=A.get(E);Q.addEventListener("dispose",M);const Z=Q.textures,Y=Q.isWebGLCubeRenderTarget===!0,Ue=Z.length>1;if(Ue||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=E.version,s.memory.textures++),Y){G.__webglFramebuffer=[];for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[le]=[];for(let Ie=0;Ie<E.mipmaps.length;Ie++)G.__webglFramebuffer[le][Ie]=r.createFramebuffer()}else G.__webglFramebuffer[le]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let le=0;le<E.mipmaps.length;le++)G.__webglFramebuffer[le]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(Ue)for(let le=0,Ie=Z.length;le<Ie;le++){const fe=A.get(Z[le]);fe.__webglTexture===void 0&&(fe.__webglTexture=r.createTexture(),s.memory.textures++)}if(Q.samples>0&&xe(Q)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let le=0;le<Z.length;le++){const Ie=Z[le];G.__webglColorRenderbuffer[le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[le]);const fe=n.convert(Ie.format,Ie.colorSpace),ee=n.convert(Ie.type),ne=v(Ie.internalFormat,fe,ee,Ie.colorSpace,Q.isXRRenderTarget===!0),ke=lt(Q);r.renderbufferStorageMultisample(r.RENDERBUFFER,ke,ne,Q.width,Q.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,G.__webglColorRenderbuffer[le])}r.bindRenderbuffer(r.RENDERBUFFER,null),Q.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),ze(G.__webglDepthRenderbuffer,Q,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),re(r.TEXTURE_CUBE_MAP,E);for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ie=0;Ie<E.mipmaps.length;Ie++)ye(G.__webglFramebuffer[le][Ie],Q,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ie);else ye(G.__webglFramebuffer[le],Q,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(E)&&d(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let le=0,Ie=Z.length;le<Ie;le++){const fe=Z[le],ee=A.get(fe);let ne=r.TEXTURE_2D;(Q.isWebGL3DRenderTarget||Q.isWebGLArrayRenderTarget)&&(ne=Q.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ne,ee.__webglTexture),re(ne,fe),ye(G.__webglFramebuffer,Q,fe,r.COLOR_ATTACHMENT0+le,ne,0),g(fe)&&d(ne)}t.unbindTexture()}else{let le=r.TEXTURE_2D;if((Q.isWebGL3DRenderTarget||Q.isWebGLArrayRenderTarget)&&(le=Q.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,J.__webglTexture),re(le,E),E.mipmaps&&E.mipmaps.length>0)for(let Ie=0;Ie<E.mipmaps.length;Ie++)ye(G.__webglFramebuffer[Ie],Q,E,r.COLOR_ATTACHMENT0,le,Ie);else ye(G.__webglFramebuffer,Q,E,r.COLOR_ATTACHMENT0,le,0);g(E)&&d(le),t.unbindTexture()}Q.depthBuffer&&Se(Q)}function Ze(Q){const E=Q.textures;for(let G=0,J=E.length;G<J;G++){const Z=E[G];if(g(Z)){const Y=B(Q),Ue=A.get(Z).__webglTexture;t.bindTexture(Y,Ue),d(Y),t.unbindTexture()}}}const H=[],Nt=[];function et(Q){if(Q.samples>0){if(xe(Q)===!1){const E=Q.textures,G=Q.width,J=Q.height;let Z=r.COLOR_BUFFER_BIT;const Y=Q.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ue=A.get(Q),le=E.length>1;if(le)for(let fe=0;fe<E.length;fe++)t.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const Ie=Q.texture.mipmaps;Ie&&Ie.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let fe=0;fe<E.length;fe++){if(Q.resolveDepthBuffer&&(Q.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),Q.stencilBuffer&&Q.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),le){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[fe]);const ee=A.get(E[fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ee,0)}r.blitFramebuffer(0,0,G,J,0,0,G,J,Z,r.NEAREST),o===!0&&(H.length=0,Nt.length=0,H.push(r.COLOR_ATTACHMENT0+fe),Q.depthBuffer&&Q.resolveDepthBuffer===!1&&(H.push(Y),Nt.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Nt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,H))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),le)for(let fe=0;fe<E.length;fe++){t.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[fe]);const ee=A.get(E[fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(Q.depthBuffer&&Q.resolveDepthBuffer===!1&&o){const E=Q.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function lt(Q){return Math.min(i.maxSamples,Q.samples)}function xe(Q){const E=A.get(Q);return Q.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function gt(Q){const E=s.render.frame;c.get(Q)!==E&&(c.set(Q,E),Q.update())}function Me(Q,E){const G=Q.colorSpace,J=Q.format,Z=Q.type;return Q.isCompressedTexture===!0||Q.isVideoTexture===!0||G!==tn&&G!==Dr&&(qe.getTransfer(G)===nt?(J!==DA||Z!==qA)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):vt("WebGLTextures: Unsupported texture color space:",G)),E}function Ve(Q){return typeof HTMLImageElement<"u"&&Q instanceof HTMLImageElement?(l.width=Q.naturalWidth||Q.width,l.height=Q.naturalHeight||Q.height):typeof VideoFrame<"u"&&Q instanceof VideoFrame?(l.width=Q.displayWidth,l.height=Q.displayHeight):(l.width=Q.width,l.height=Q.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=T,this.setTexture2D=P,this.setTexture2DArray=R,this.setTexture3D=k,this.setTextureCube=z,this.rebindTextures=ot,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=xe}function J1(r,e){function t(A,i=Dr){let n;const s=qe.getTransfer(i);if(A===qA)return r.UNSIGNED_BYTE;if(A===kc)return r.UNSIGNED_SHORT_4_4_4_4;if(A===Kc)return r.UNSIGNED_SHORT_5_5_5_1;if(A===Bp)return r.UNSIGNED_INT_5_9_9_9_REV;if(A===wp)return r.UNSIGNED_INT_10F_11F_11F_REV;if(A===gp)return r.BYTE;if(A===mp)return r.SHORT;if(A===Wn)return r.UNSIGNED_SHORT;if(A===zc)return r.INT;if(A===di)return r.UNSIGNED_INT;if(A===wr)return r.FLOAT;if(A===jA)return r.HALF_FLOAT;if(A===vp)return r.ALPHA;if(A===Wc)return r.RGB;if(A===DA)return r.RGBA;if(A===jn)return r.DEPTH_COMPONENT;if(A===Yn)return r.DEPTH_STENCIL;if(A===yp)return r.RED;if(A===Xc)return r.RED_INTEGER;if(A===jc)return r.RG;if(A===Yc)return r.RG_INTEGER;if(A===qc)return r.RGBA_INTEGER;if(A===pa||A===fa||A===ga||A===ma)if(s===nt)if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(A===pa)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(A===fa)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(A===ga)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(A===ma)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=e.get("WEBGL_compressed_texture_s3tc"),n!==null){if(A===pa)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(A===fa)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(A===ga)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(A===ma)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(A===Pl||A===Nl||A===Ol||A===Vl)if(n=e.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(A===Pl)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(A===Nl)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(A===Ol)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(A===Vl)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(A===Gl||A===zl||A===kl)if(n=e.get("WEBGL_compressed_texture_etc"),n!==null){if(A===Gl||A===zl)return s===nt?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(A===kl)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(A===Kl||A===Wl||A===Xl||A===jl||A===Yl||A===ql||A===Jl||A===Zl||A===$l||A===ec||A===tc||A===Ac||A===rc||A===ic)if(n=e.get("WEBGL_compressed_texture_astc"),n!==null){if(A===Kl)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(A===Wl)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(A===Xl)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(A===jl)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(A===Yl)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(A===ql)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(A===Jl)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(A===Zl)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(A===$l)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(A===ec)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(A===tc)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(A===Ac)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(A===rc)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(A===ic)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(A===nc||A===sc||A===ac)if(n=e.get("EXT_texture_compression_bptc"),n!==null){if(A===nc)return s===nt?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(A===sc)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(A===ac)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(A===oc||A===lc||A===cc||A===hc)if(n=e.get("EXT_texture_compression_rgtc"),n!==null){if(A===oc)return n.COMPRESSED_RED_RGTC1_EXT;if(A===lc)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(A===cc)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(A===hc)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return A===Xn?r.UNSIGNED_INT_24_8:r[A]!==void 0?r[A]:null}return{convert:t}}const Z1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ey{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const A=new Rp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=A}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,A=new AA({vertexShader:Z1,fragmentShader:$1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new iA(new ts(20,20),A)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ty extends pi{constructor(e,t){super();const A=this;let i=null,n=1,s=null,a="local-floor",o=1,l=null,c=null,u=null,h=null,p=null,f=null;const m=typeof XRWebGLBinding<"u",g=new ey,d={},B=t.getContextAttributes();let v=null,y=null;const x=[],w=[],M=new Ee;let S=null;const C=new mA;C.viewport=new yt;const _=new mA;_.viewport=new yt;const F=[C,_],T=new mB;let I=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let q=x[j];return q===void 0&&(q=new Ho,x[j]=q),q.getTargetRaySpace()},this.getControllerGrip=function(j){let q=x[j];return q===void 0&&(q=new Ho,x[j]=q),q.getGripSpace()},this.getHand=function(j){let q=x[j];return q===void 0&&(q=new Ho,x[j]=q),q.getHandSpace()};function P(j){const q=w.indexOf(j.inputSource);if(q===-1)return;const ye=x[q];ye!==void 0&&(ye.update(j.inputSource,j.frame,l||s),ye.dispatchEvent({type:j.type,data:j.inputSource}))}function R(){i.removeEventListener("select",P),i.removeEventListener("selectstart",P),i.removeEventListener("selectend",P),i.removeEventListener("squeeze",P),i.removeEventListener("squeezestart",P),i.removeEventListener("squeezeend",P),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",k);for(let j=0;j<x.length;j++){const q=w[j];q!==null&&(w[j]=null,x[j].disconnect(q))}I=null,L=null,g.reset();for(const j in d)delete d[j];e.setRenderTarget(v),p=null,h=null,u=null,i=null,y=null,Ke.stop(),A.isPresenting=!1,e.setPixelRatio(S),e.setSize(M.width,M.height,!1),A.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){n=j,A.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,A.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",P),i.addEventListener("selectstart",P),i.addEventListener("selectend",P),i.addEventListener("squeeze",P),i.addEventListener("squeezestart",P),i.addEventListener("squeezeend",P),i.addEventListener("end",R),i.addEventListener("inputsourceschange",k),B.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(M),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let q=null,ye=null,ze=null;B.depth&&(ze=B.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=B.stencil?Yn:jn,ye=B.stencil?Xn:di);const be={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:n};u=this.getBinding(),h=u.createProjectionLayer(be),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new PA(h.textureWidth,h.textureHeight,{format:DA,type:qA,depthTexture:new Lp(h.textureWidth,h.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:B.stencil,colorSpace:e.outputColorSpace,samples:B.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const q={antialias:B.antialias,alpha:!0,depth:B.depth,stencil:B.stencil,framebufferScaleFactor:n};p=new XRWebGLLayer(i,t,q),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new PA(p.framebufferWidth,p.framebufferHeight,{format:DA,type:qA,colorSpace:e.outputColorSpace,stencilBuffer:B.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await i.requestReferenceSpace(a),Ke.setContext(i),Ke.start(),A.isPresenting=!0,A.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(j){for(let q=0;q<j.removed.length;q++){const ye=j.removed[q],ze=w.indexOf(ye);ze>=0&&(w[ze]=null,x[ze].disconnect(ye))}for(let q=0;q<j.added.length;q++){const ye=j.added[q];let ze=w.indexOf(ye);if(ze===-1){for(let Se=0;Se<x.length;Se++)if(Se>=w.length){w.push(ye),ze=Se;break}else if(w[Se]===null){w[Se]=ye,ze=Se;break}if(ze===-1)break}const be=x[ze];be&&be.connect(ye)}}const z=new N,X=new N;function te(j,q,ye){z.setFromMatrixPosition(q.matrixWorld),X.setFromMatrixPosition(ye.matrixWorld);const ze=z.distanceTo(X),be=q.projectionMatrix.elements,Se=ye.projectionMatrix.elements,ot=be[14]/(be[10]-1),tt=be[14]/(be[10]+1),Ze=(be[9]+1)/be[5],H=(be[9]-1)/be[5],Nt=(be[8]-1)/be[0],et=(Se[8]+1)/Se[0],lt=ot*Nt,xe=ot*et,gt=ze/(-Nt+et),Me=gt*-Nt;if(q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Me),j.translateZ(gt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),be[10]===-1)j.projectionMatrix.copy(q.projectionMatrix),j.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const Ve=ot+gt,Q=tt+gt,E=lt-Me,G=xe+(ze-Me),J=Ze*tt/Q*Ve,Z=H*tt/Q*Ve;j.projectionMatrix.makePerspective(E,G,J,Z,Ve,Q),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ve(j,q){q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let q=j.near,ye=j.far;g.texture!==null&&(g.depthNear>0&&(q=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),T.near=_.near=C.near=q,T.far=_.far=C.far=ye,(I!==T.near||L!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),I=T.near,L=T.far),T.layers.mask=j.layers.mask|6,C.layers.mask=T.layers.mask&3,_.layers.mask=T.layers.mask&5;const ze=j.parent,be=T.cameras;ve(T,ze);for(let Se=0;Se<be.length;Se++)ve(be[Se],ze);be.length===2?te(T,C,_):T.projectionMatrix.copy(C.projectionMatrix),re(j,T,ze)};function re(j,q,ye){ye===null?j.matrix.copy(q.matrixWorld):(j.matrix.copy(ye.matrixWorld),j.matrix.invert(),j.matrix.multiply(q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(q.projectionMatrix),j.projectionMatrixInverse.copy(q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=An*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&p===null))return o},this.setFoveation=function(j){o=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(T)},this.getCameraTexture=function(j){return d[j]};let Ne=null;function je(j,q){if(c=q.getViewerPose(l||s),f=q,c!==null){const ye=c.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ze=!1;ye.length!==T.cameras.length&&(T.cameras.length=0,ze=!0);for(let Se=0;Se<ye.length;Se++){const ot=ye[Se];let tt=null;if(p!==null)tt=p.getViewport(ot);else{const H=u.getViewSubImage(h,ot);tt=H.viewport,Se===0&&(e.setRenderTargetTextures(y,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(y))}let Ze=F[Se];Ze===void 0&&(Ze=new mA,Ze.layers.enable(Se),Ze.viewport=new yt,F[Se]=Ze),Ze.matrix.fromArray(ot.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(ot.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(tt.x,tt.y,tt.width,tt.height),Se===0&&(T.matrix.copy(Ze.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ze===!0&&T.cameras.push(Ze)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&m){u=A.getBinding();const Se=u.getDepthInformation(ye[0]);Se&&Se.isValid&&Se.texture&&g.init(Se,i.renderState)}if(be&&be.includes("camera-access")&&m){e.state.unbindTexture(),u=A.getBinding();for(let Se=0;Se<ye.length;Se++){const ot=ye[Se].camera;if(ot){let tt=d[ot];tt||(tt=new Rp,d[ot]=tt);const Ze=u.getCameraImage(ot);tt.sourceTexture=Ze}}}}for(let ye=0;ye<x.length;ye++){const ze=w[ye],be=x[ye];ze!==null&&be!==void 0&&be.update(ze,q,l||s)}Ne&&Ne(j,q),q.detectedPlanes&&A.dispatchEvent({type:"planesdetected",data:q}),f=null}const Ke=new Np;Ke.setAnimationLoop(je),this.setAnimationLoop=function(j){Ne=j},this.dispose=function(){}}}const ti=new JA,Ay=new ft;function ry(r,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function A(g,d){d.color.getRGB(g.fogColor.value,Up(r)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function i(g,d,B,v,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?n(g,d):d.isMeshToonMaterial?(n(g,d),u(g,d)):d.isMeshPhongMaterial?(n(g,d),c(g,d)):d.isMeshStandardMaterial?(n(g,d),h(g,d),d.isMeshPhysicalMaterial&&p(g,d,y)):d.isMeshMatcapMaterial?(n(g,d),f(g,d)):d.isMeshDepthMaterial?n(g,d):d.isMeshDistanceMaterial?(n(g,d),m(g,d)):d.isMeshNormalMaterial?n(g,d):d.isLineBasicMaterial?(s(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?o(g,d,B,v):d.isSpriteMaterial?l(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function n(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===cA&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===cA&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const B=e.get(d),v=B.envMap,y=B.envMapRotation;v&&(g.envMap.value=v,ti.copy(y),ti.x*=-1,ti.y*=-1,ti.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),g.envMapRotation.value.setFromMatrix4(Ay.makeRotationFromEuler(ti)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function s(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function o(g,d,B,v){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*B,g.scale.value=v*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function l(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function u(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,B){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===cA&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=B.texture,g.transmissionSamplerSize.value.set(B.width,B.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function f(g,d){d.matcap&&(g.matcap.value=d.matcap)}function m(g,d){const B=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(B.matrixWorld),g.nearDistance.value=B.shadow.camera.near,g.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:A,refreshMaterialUniforms:i}}function iy(r,e,t,A){let i={},n={},s=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function o(B,v){const y=v.program;A.uniformBlockBinding(B,y)}function l(B,v){let y=i[B.id];y===void 0&&(f(B),y=c(B),i[B.id]=y,B.addEventListener("dispose",g));const x=v.program;A.updateUBOMapping(B,x);const w=e.render.frame;n[B.id]!==w&&(h(B),n[B.id]=w)}function c(B){const v=u();B.__bindingPointIndex=v;const y=r.createBuffer(),x=B.__size,w=B.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,x,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,y),y}function u(){for(let B=0;B<a;B++)if(s.indexOf(B)===-1)return s.push(B),B;return vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(B){const v=i[B.id],y=B.uniforms,x=B.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let w=0,M=y.length;w<M;w++){const S=Array.isArray(y[w])?y[w]:[y[w]];for(let C=0,_=S.length;C<_;C++){const F=S[C];if(p(F,w,C,x)===!0){const T=F.__offset,I=Array.isArray(F.value)?F.value:[F.value];let L=0;for(let P=0;P<I.length;P++){const R=I[P],k=m(R);typeof R=="number"||typeof R=="boolean"?(F.__data[0]=R,r.bufferSubData(r.UNIFORM_BUFFER,T+L,F.__data)):R.isMatrix3?(F.__data[0]=R.elements[0],F.__data[1]=R.elements[1],F.__data[2]=R.elements[2],F.__data[3]=0,F.__data[4]=R.elements[3],F.__data[5]=R.elements[4],F.__data[6]=R.elements[5],F.__data[7]=0,F.__data[8]=R.elements[6],F.__data[9]=R.elements[7],F.__data[10]=R.elements[8],F.__data[11]=0):(R.toArray(F.__data,L),L+=k.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,T,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(B,v,y,x){const w=B.value,M=v+"_"+y;if(x[M]===void 0)return typeof w=="number"||typeof w=="boolean"?x[M]=w:x[M]=w.clone(),!0;{const S=x[M];if(typeof w=="number"||typeof w=="boolean"){if(S!==w)return x[M]=w,!0}else if(S.equals(w)===!1)return S.copy(w),!0}return!1}function f(B){const v=B.uniforms;let y=0;const x=16;for(let M=0,S=v.length;M<S;M++){const C=Array.isArray(v[M])?v[M]:[v[M]];for(let _=0,F=C.length;_<F;_++){const T=C[_],I=Array.isArray(T.value)?T.value:[T.value];for(let L=0,P=I.length;L<P;L++){const R=I[L],k=m(R),z=y%x,X=z%k.boundary,te=z+X;y+=X,te!==0&&x-te<k.storage&&(y+=x-te),T.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=y,y+=k.storage}}}const w=y%x;return w>0&&(y+=x-w),B.__size=y,B.__cache={},this}function m(B){const v={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(v.boundary=4,v.storage=4):B.isVector2?(v.boundary=8,v.storage=8):B.isVector3||B.isColor?(v.boundary=16,v.storage=12):B.isVector4?(v.boundary=16,v.storage=16):B.isMatrix3?(v.boundary=48,v.storage=48):B.isMatrix4?(v.boundary=64,v.storage=64):B.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):De("WebGLRenderer: Unsupported uniform value type.",B),v}function g(B){const v=B.target;v.removeEventListener("dispose",g);const y=s.indexOf(v.__bindingPointIndex);s.splice(y,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete n[v.id]}function d(){for(const B in i)r.deleteBuffer(i[B]);s=[],i={},n={}}return{bind:o,update:l,dispose:d}}const ny=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let or=null;function sy(){return or===null&&(or=new Tp(ny,32,32,jc,jA),or.minFilter=EA,or.magFilter=EA,or.wrapS=Br,or.wrapT=Br,or.generateMipmaps=!1,or.needsUpdate=!0),or}class ay{constructor(e={}){const{canvas:t=pm(),context:A=null,depth:i=!0,stencil:n=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(A!==null){if(typeof WebGLRenderingContext<"u"&&A instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=A.getContextAttributes().alpha}else p=s;const f=new Set([qc,Yc,Xc]),m=new Set([qA,di,Wn,Xn,kc,Kc]),g=new Uint32Array(4),d=new Int32Array(4);let B=null,v=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let M=!1;this._outputColorSpace=zt;let S=0,C=0,_=null,F=-1,T=null;const I=new yt,L=new yt;let P=null;const R=new Qe(0);let k=0,z=t.width,X=t.height,te=1,ve=null,re=null;const Ne=new yt(0,0,z,X),je=new yt(0,0,z,X);let Ke=!1;const j=new Ah;let q=!1,ye=!1;const ze=new ft,be=new N,Se=new yt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function Ze(){return _===null?te:1}let H=A;function Nt(U,V){return t.getContext(U,V)}try{const U={alpha:!0,depth:i,stencil:n,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gc}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",_e,!1),H===null){const V="webgl2";if(H=Nt(V,U),H===null)throw Nt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw U("WebGLRenderer: "+U.message),U}let et,lt,xe,gt,Me,Ve,Q,E,G,J,Z,Y,Ue,le,Ie,fe,ee,ne,ke,Fe,de,Oe,D,ce;function se(){et=new fv(H),et.init(),Oe=new J1(H,et),lt=new sv(H,et,e,Oe),xe=new Y1(H,et),lt.reversedDepthBuffer&&h&&xe.buffers.depth.setReversed(!0),gt=new Bv(H),Me=new D1,Ve=new q1(H,et,xe,Me,lt,Oe,gt),Q=new ov(w),E=new pv(w),G=new _B(H),D=new iv(H,G),J=new gv(H,G,gt,D),Z=new vv(H,J,G,gt),ke=new wv(H,lt,Ve),fe=new av(Me),Y=new R1(w,Q,E,et,lt,D,fe),Ue=new ry(w,Me),le=new P1,Ie=new k1(et),ne=new rv(w,Q,E,xe,Z,p,o),ee=new X1(w,Z,lt),ce=new iy(H,gt,lt,xe),Fe=new nv(H,et,gt),de=new mv(H,et,gt),gt.programs=Y.programs,w.capabilities=lt,w.extensions=et,w.properties=Me,w.renderLists=le,w.shadowMap=ee,w.state=xe,w.info=gt}se();const ae=new ty(w,H);this.xr=ae,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const U=et.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=et.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(U){U!==void 0&&(te=U,this.setSize(z,X,!1))},this.getSize=function(U){return U.set(z,X)},this.setSize=function(U,V,K=!0){if(ae.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}z=U,X=V,t.width=Math.floor(U*te),t.height=Math.floor(V*te),K===!0&&(t.style.width=U+"px",t.style.height=V+"px"),this.setViewport(0,0,U,V)},this.getDrawingBufferSize=function(U){return U.set(z*te,X*te).floor()},this.setDrawingBufferSize=function(U,V,K){z=U,X=V,te=K,t.width=Math.floor(U*K),t.height=Math.floor(V*K),this.setViewport(0,0,U,V)},this.getCurrentViewport=function(U){return U.copy(I)},this.getViewport=function(U){return U.copy(Ne)},this.setViewport=function(U,V,K,W){U.isVector4?Ne.set(U.x,U.y,U.z,U.w):Ne.set(U,V,K,W),xe.viewport(I.copy(Ne).multiplyScalar(te).round())},this.getScissor=function(U){return U.copy(je)},this.setScissor=function(U,V,K,W){U.isVector4?je.set(U.x,U.y,U.z,U.w):je.set(U,V,K,W),xe.scissor(L.copy(je).multiplyScalar(te).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(U){xe.setScissorTest(Ke=U)},this.setOpaqueSort=function(U){ve=U},this.setTransparentSort=function(U){re=U},this.getClearColor=function(U){return U.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(U=!0,V=!0,K=!0){let W=0;if(U){let O=!1;if(_!==null){const ie=_.texture.format;O=f.has(ie)}if(O){const ie=_.texture.type,pe=m.has(ie),me=ne.getClearColor(),Be=ne.getClearAlpha(),Le=me.r,Pe=me.g,Re=me.b;pe?(g[0]=Le,g[1]=Pe,g[2]=Re,g[3]=Be,H.clearBufferuiv(H.COLOR,0,g)):(d[0]=Le,d[1]=Pe,d[2]=Re,d[3]=Be,H.clearBufferiv(H.COLOR,0,d))}else W|=H.COLOR_BUFFER_BIT}V&&(W|=H.DEPTH_BUFFER_BIT),K&&(W|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),ne.dispose(),le.dispose(),Ie.dispose(),Me.dispose(),Q.dispose(),E.dispose(),Z.dispose(),D.dispose(),ce.dispose(),Y.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",bh),ae.removeEventListener("sessionend",Mh),jr.stop()};function Ae(U){U.preventDefault(),Oh("WebGLRenderer: Context Lost."),M=!0}function $(){Oh("WebGLRenderer: Context Restored."),M=!1;const U=gt.autoReset,V=ee.enabled,K=ee.autoUpdate,W=ee.needsUpdate,O=ee.type;se(),gt.autoReset=U,ee.enabled=V,ee.autoUpdate=K,ee.needsUpdate=W,ee.type=O}function _e(U){vt("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Te(U){const V=U.target;V.removeEventListener("dispose",Te),Lt(V)}function Lt(U){it(U),Me.remove(U)}function it(U){const V=Me.get(U).programs;V!==void 0&&(V.forEach(function(K){Y.releaseProgram(K)}),U.isShaderMaterial&&Y.releaseShaderCache(U))}this.renderBufferDirect=function(U,V,K,W,O,ie){V===null&&(V=ot);const pe=O.isMesh&&O.matrixWorld.determinant()<0,me=xg(U,V,K,W,O);xe.setMaterial(W,pe);let Be=K.index,Le=1;if(W.wireframe===!0){if(Be=J.getWireframeAttribute(K),Be===void 0)return;Le=2}const Pe=K.drawRange,Re=K.attributes.position;let $e=Pe.start*Le,ct=(Pe.start+Pe.count)*Le;ie!==null&&($e=Math.max($e,ie.start*Le),ct=Math.min(ct,(ie.start+ie.count)*Le)),Be!==null?($e=Math.max($e,0),ct=Math.min(ct,Be.count)):Re!=null&&($e=Math.max($e,0),ct=Math.min(ct,Re.count));const wt=ct-$e;if(wt<0||wt===1/0)return;D.setup(O,W,me,K,Be);let mt,ht=Fe;if(Be!==null&&(mt=G.get(Be),ht=de,ht.setIndex(mt)),O.isMesh)W.wireframe===!0?(xe.setLineWidth(W.wireframeLinewidth*Ze()),ht.setMode(H.LINES)):ht.setMode(H.TRIANGLES);else if(O.isLine){let Ce=W.linewidth;Ce===void 0&&(Ce=1),xe.setLineWidth(Ce*Ze()),O.isLineSegments?ht.setMode(H.LINES):O.isLineLoop?ht.setMode(H.LINE_LOOP):ht.setMode(H.LINE_STRIP)}else O.isPoints?ht.setMode(H.POINTS):O.isSprite&&ht.setMode(H.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)qn("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))ht.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ce=O._multiDrawStarts,Ot=O._multiDrawCounts,Ar=O._multiDrawCount,SA=Be?G.get(Be).bytesPerElement:1,gi=Me.get(W).currentProgram.getUniforms();for(let dA=0;dA<Ar;dA++)gi.setValue(H,"_gl_DrawID",dA),ht.render(Ce[dA]/SA,Ot[dA])}else if(O.isInstancedMesh)ht.renderInstances($e,wt,O.count);else if(K.isInstancedBufferGeometry){const Ce=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ot=Math.min(K.instanceCount,Ce);ht.renderInstances($e,wt,Ot)}else ht.render($e,wt)};function OA(U,V,K){U.transparent===!0&&U.side===mr&&U.forceSinglePass===!1?(U.side=cA,U.needsUpdate=!0,us(U,V,K),U.side=kr,U.needsUpdate=!0,us(U,V,K),U.side=mr):us(U,V,K)}this.compile=function(U,V,K=null){K===null&&(K=U),v=Ie.get(K),v.init(V),x.push(v),K.traverseVisible(function(O){O.isLight&&O.layers.test(V.layers)&&(v.pushLight(O),O.castShadow&&v.pushShadow(O))}),U!==K&&U.traverseVisible(function(O){O.isLight&&O.layers.test(V.layers)&&(v.pushLight(O),O.castShadow&&v.pushShadow(O))}),v.setupLights();const W=new Set;return U.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ie=O.material;if(ie)if(Array.isArray(ie))for(let pe=0;pe<ie.length;pe++){const me=ie[pe];OA(me,K,O),W.add(me)}else OA(ie,K,O),W.add(ie)}),v=x.pop(),W},this.compileAsync=function(U,V,K=null){const W=this.compile(U,V,K);return new Promise(O=>{function ie(){if(W.forEach(function(pe){Me.get(pe).currentProgram.isReady()&&W.delete(pe)}),W.size===0){O(U);return}setTimeout(ie,10)}et.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let UA=null;function _g(U){UA&&UA(U)}function bh(){jr.stop()}function Mh(){jr.start()}const jr=new Np;jr.setAnimationLoop(_g),typeof self<"u"&&jr.setContext(self),this.setAnimationLoop=function(U){UA=U,ae.setAnimationLoop(U),U===null?jr.stop():jr.start()},ae.addEventListener("sessionstart",bh),ae.addEventListener("sessionend",Mh),this.render=function(U,V){if(V!==void 0&&V.isCamera!==!0){vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(V),V=ae.getCamera()),U.isScene===!0&&U.onBeforeRender(w,U,V,_),v=Ie.get(U,x.length),v.init(V),x.push(v),ze.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),j.setFromProjectionMatrix(ze,WA,V.reversedDepth),ye=this.localClippingEnabled,q=fe.init(this.clippingPlanes,ye),B=le.get(U,y.length),B.init(),y.push(B),ae.enabled===!0&&ae.isPresenting===!0){const ie=w.xr.getDepthSensingMesh();ie!==null&&po(ie,V,-1/0,w.sortObjects)}po(U,V,0,w.sortObjects),B.finish(),w.sortObjects===!0&&B.sort(ve,re),tt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,tt&&ne.addToRenderList(B,U),this.info.render.frame++,q===!0&&fe.beginShadows();const K=v.state.shadowsArray;ee.render(K,U,V),q===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=B.opaque,O=B.transmissive;if(v.setupLights(),V.isArrayCamera){const ie=V.cameras;if(O.length>0)for(let pe=0,me=ie.length;pe<me;pe++){const Be=ie[pe];Sh(W,O,U,Be)}tt&&ne.render(U);for(let pe=0,me=ie.length;pe<me;pe++){const Be=ie[pe];Uh(B,U,Be,Be.viewport)}}else O.length>0&&Sh(W,O,U,V),tt&&ne.render(U),Uh(B,U,V);_!==null&&C===0&&(Ve.updateMultisampleRenderTarget(_),Ve.updateRenderTargetMipmap(_)),U.isScene===!0&&U.onAfterRender(w,U,V),D.resetDefaultState(),F=-1,T=null,x.pop(),x.length>0?(v=x[x.length-1],q===!0&&fe.setGlobalState(w.clippingPlanes,v.state.camera)):v=null,y.pop(),y.length>0?B=y[y.length-1]:B=null};function po(U,V,K,W){if(U.visible===!1)return;if(U.layers.test(V.layers)){if(U.isGroup)K=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(V);else if(U.isLight)v.pushLight(U),U.castShadow&&v.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||j.intersectsSprite(U)){W&&Se.setFromMatrixPosition(U.matrixWorld).applyMatrix4(ze);const ie=Z.update(U),pe=U.material;pe.visible&&B.push(U,ie,pe,K,Se.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||j.intersectsObject(U))){const ie=Z.update(U),pe=U.material;if(W&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),Se.copy(U.boundingSphere.center)):(ie.boundingSphere===null&&ie.computeBoundingSphere(),Se.copy(ie.boundingSphere.center)),Se.applyMatrix4(U.matrixWorld).applyMatrix4(ze)),Array.isArray(pe)){const me=ie.groups;for(let Be=0,Le=me.length;Be<Le;Be++){const Pe=me[Be],Re=pe[Pe.materialIndex];Re&&Re.visible&&B.push(U,ie,Re,K,Se.z,Pe)}}else pe.visible&&B.push(U,ie,pe,K,Se.z,null)}}const O=U.children;for(let ie=0,pe=O.length;ie<pe;ie++)po(O[ie],V,K,W)}function Uh(U,V,K,W){const{opaque:O,transmissive:ie,transparent:pe}=U;v.setupLightsView(K),q===!0&&fe.setGlobalState(w.clippingPlanes,K),W&&xe.viewport(I.copy(W)),O.length>0&&hs(O,V,K),ie.length>0&&hs(ie,V,K),pe.length>0&&hs(pe,V,K),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Sh(U,V,K,W){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[W.id]===void 0&&(v.state.transmissionRenderTarget[W.id]=new PA(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?jA:qA,minFilter:ai,samples:4,stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const O=v.state.transmissionRenderTarget[W.id],ie=W.viewport||I;O.setSize(ie.z*w.transmissionResolutionScale,ie.w*w.transmissionResolutionScale);const pe=w.getRenderTarget(),me=w.getActiveCubeFace(),Be=w.getActiveMipmapLevel();w.setRenderTarget(O),w.getClearColor(R),k=w.getClearAlpha(),k<1&&w.setClearColor(16777215,.5),w.clear(),tt&&ne.render(K);const Le=w.toneMapping;w.toneMapping=Vr;const Pe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),v.setupLightsView(W),q===!0&&fe.setGlobalState(w.clippingPlanes,W),hs(U,K,W),Ve.updateMultisampleRenderTarget(O),Ve.updateRenderTargetMipmap(O),et.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let $e=0,ct=V.length;$e<ct;$e++){const wt=V[$e],{object:mt,geometry:ht,material:Ce,group:Ot}=wt;if(Ce.side===mr&&mt.layers.test(W.layers)){const Ar=Ce.side;Ce.side=cA,Ce.needsUpdate=!0,Fh(mt,K,W,ht,Ce,Ot),Ce.side=Ar,Ce.needsUpdate=!0,Re=!0}}Re===!0&&(Ve.updateMultisampleRenderTarget(O),Ve.updateRenderTargetMipmap(O))}w.setRenderTarget(pe,me,Be),w.setClearColor(R,k),Pe!==void 0&&(W.viewport=Pe),w.toneMapping=Le}function hs(U,V,K){const W=V.isScene===!0?V.overrideMaterial:null;for(let O=0,ie=U.length;O<ie;O++){const pe=U[O],{object:me,geometry:Be,group:Le}=pe;let Pe=pe.material;Pe.allowOverride===!0&&W!==null&&(Pe=W),me.layers.test(K.layers)&&Fh(me,V,K,Be,Pe,Le)}}function Fh(U,V,K,W,O,ie){U.onBeforeRender(w,V,K,W,O,ie),U.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),O.onBeforeRender(w,V,K,W,U,ie),O.transparent===!0&&O.side===mr&&O.forceSinglePass===!1?(O.side=cA,O.needsUpdate=!0,w.renderBufferDirect(K,V,W,O,U,ie),O.side=kr,O.needsUpdate=!0,w.renderBufferDirect(K,V,W,O,U,ie),O.side=mr):w.renderBufferDirect(K,V,W,O,U,ie),U.onAfterRender(w,V,K,W,O,ie)}function us(U,V,K){V.isScene!==!0&&(V=ot);const W=Me.get(U),O=v.state.lights,ie=v.state.shadowsArray,pe=O.state.version,me=Y.getParameters(U,O.state,ie,V,K),Be=Y.getProgramCacheKey(me);let Le=W.programs;W.environment=U.isMeshStandardMaterial?V.environment:null,W.fog=V.fog,W.envMap=(U.isMeshStandardMaterial?E:Q).get(U.envMap||W.environment),W.envMapRotation=W.environment!==null&&U.envMap===null?V.environmentRotation:U.envMapRotation,Le===void 0&&(U.addEventListener("dispose",Te),Le=new Map,W.programs=Le);let Pe=Le.get(Be);if(Pe!==void 0){if(W.currentProgram===Pe&&W.lightsStateVersion===pe)return Qh(U,me),Pe}else me.uniforms=Y.getUniforms(U),U.onBeforeCompile(me,w),Pe=Y.acquireProgram(me,Be),Le.set(Be,Pe),W.uniforms=me.uniforms;const Re=W.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Re.clippingPlanes=fe.uniform),Qh(U,me),W.needsLights=Eg(U),W.lightsStateVersion=pe,W.needsLights&&(Re.ambientLightColor.value=O.state.ambient,Re.lightProbe.value=O.state.probe,Re.directionalLights.value=O.state.directional,Re.directionalLightShadows.value=O.state.directionalShadow,Re.spotLights.value=O.state.spot,Re.spotLightShadows.value=O.state.spotShadow,Re.rectAreaLights.value=O.state.rectArea,Re.ltc_1.value=O.state.rectAreaLTC1,Re.ltc_2.value=O.state.rectAreaLTC2,Re.pointLights.value=O.state.point,Re.pointLightShadows.value=O.state.pointShadow,Re.hemisphereLights.value=O.state.hemi,Re.directionalShadowMap.value=O.state.directionalShadowMap,Re.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Re.spotShadowMap.value=O.state.spotShadowMap,Re.spotLightMatrix.value=O.state.spotLightMatrix,Re.spotLightMap.value=O.state.spotLightMap,Re.pointShadowMap.value=O.state.pointShadowMap,Re.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Pe,W.uniformsList=null,Pe}function Th(U){if(U.uniformsList===null){const V=U.currentProgram.getUniforms();U.uniformsList=Ba.seqWithValue(V.seq,U.uniforms)}return U.uniformsList}function Qh(U,V){const K=Me.get(U);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.batchingColor=V.batchingColor,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.instancingMorph=V.instancingMorph,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function xg(U,V,K,W,O){V.isScene!==!0&&(V=ot),Ve.resetTextureUnits();const ie=V.fog,pe=W.isMeshStandardMaterial?V.environment:null,me=_===null?w.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:tn,Be=(W.isMeshStandardMaterial?E:Q).get(W.envMap||pe),Le=W.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Pe=!!K.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Re=!!K.morphAttributes.position,$e=!!K.morphAttributes.normal,ct=!!K.morphAttributes.color;let wt=Vr;W.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(wt=w.toneMapping);const mt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ht=mt!==void 0?mt.length:0,Ce=Me.get(W),Ot=v.state.lights;if(q===!0&&(ye===!0||U!==T)){const Vt=U===T&&W.id===F;fe.setState(W,U,Vt)}let Ar=!1;W.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Ot.state.version||Ce.outputColorSpace!==me||O.isBatchedMesh&&Ce.batching===!1||!O.isBatchedMesh&&Ce.batching===!0||O.isBatchedMesh&&Ce.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ce.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ce.instancing===!1||!O.isInstancedMesh&&Ce.instancing===!0||O.isSkinnedMesh&&Ce.skinning===!1||!O.isSkinnedMesh&&Ce.skinning===!0||O.isInstancedMesh&&Ce.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ce.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ce.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ce.instancingMorph===!1&&O.morphTexture!==null||Ce.envMap!==Be||W.fog===!0&&Ce.fog!==ie||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==fe.numPlanes||Ce.numIntersection!==fe.numIntersection)||Ce.vertexAlphas!==Le||Ce.vertexTangents!==Pe||Ce.morphTargets!==Re||Ce.morphNormals!==$e||Ce.morphColors!==ct||Ce.toneMapping!==wt||Ce.morphTargetsCount!==ht)&&(Ar=!0):(Ar=!0,Ce.__version=W.version);let SA=Ce.currentProgram;Ar===!0&&(SA=us(W,V,O));let gi=!1,dA=!1,fn=!1;const Bt=SA.getUniforms(),sA=Ce.uniforms;if(xe.useProgram(SA.program)&&(gi=!0,dA=!0,fn=!0),W.id!==F&&(F=W.id,dA=!0),gi||T!==U){xe.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),Bt.setValue(H,"projectionMatrix",U.projectionMatrix),Bt.setValue(H,"viewMatrix",U.matrixWorldInverse);const Vt=Bt.map.cameraPosition;Vt!==void 0&&Vt.setValue(H,be.setFromMatrixPosition(U.matrixWorld)),lt.logarithmicDepthBuffer&&Bt.setValue(H,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Bt.setValue(H,"isOrthographic",U.isOrthographicCamera===!0),T!==U&&(T=U,dA=!0,fn=!0)}if(O.isSkinnedMesh){Bt.setOptional(H,O,"bindMatrix"),Bt.setOptional(H,O,"bindMatrixInverse");const Vt=O.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),Bt.setValue(H,"boneTexture",Vt.boneTexture,Ve))}O.isBatchedMesh&&(Bt.setOptional(H,O,"batchingTexture"),Bt.setValue(H,"batchingTexture",O._matricesTexture,Ve),Bt.setOptional(H,O,"batchingIdTexture"),Bt.setValue(H,"batchingIdTexture",O._indirectTexture,Ve),Bt.setOptional(H,O,"batchingColorTexture"),O._colorsTexture!==null&&Bt.setValue(H,"batchingColorTexture",O._colorsTexture,Ve));const yA=K.morphAttributes;if((yA.position!==void 0||yA.normal!==void 0||yA.color!==void 0)&&ke.update(O,K,SA),(dA||Ce.receiveShadow!==O.receiveShadow)&&(Ce.receiveShadow=O.receiveShadow,Bt.setValue(H,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(sA.envMap.value=Be,sA.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&V.environment!==null&&(sA.envMapIntensity.value=V.environmentIntensity),sA.dfgLUT!==void 0&&(sA.dfgLUT.value=sy()),dA&&(Bt.setValue(H,"toneMappingExposure",w.toneMappingExposure),Ce.needsLights&&Cg(sA,fn),ie&&W.fog===!0&&Ue.refreshFogUniforms(sA,ie),Ue.refreshMaterialUniforms(sA,W,te,X,v.state.transmissionRenderTarget[U.id]),Ba.upload(H,Th(Ce),sA,Ve)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ba.upload(H,Th(Ce),sA,Ve),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Bt.setValue(H,"center",O.center),Bt.setValue(H,"modelViewMatrix",O.modelViewMatrix),Bt.setValue(H,"normalMatrix",O.normalMatrix),Bt.setValue(H,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Vt=W.uniformsGroups;for(let FA=0,fo=Vt.length;FA<fo;FA++){const Yr=Vt[FA];ce.update(Yr,SA),ce.bind(Yr,SA)}}return SA}function Cg(U,V){U.ambientLightColor.needsUpdate=V,U.lightProbe.needsUpdate=V,U.directionalLights.needsUpdate=V,U.directionalLightShadows.needsUpdate=V,U.pointLights.needsUpdate=V,U.pointLightShadows.needsUpdate=V,U.spotLights.needsUpdate=V,U.spotLightShadows.needsUpdate=V,U.rectAreaLights.needsUpdate=V,U.hemisphereLights.needsUpdate=V}function Eg(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(U,V,K){const W=Me.get(U);W.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Me.get(U.texture).__webglTexture=V,Me.get(U.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:K,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,V){const K=Me.get(U);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0};const bg=H.createFramebuffer();this.setRenderTarget=function(U,V=0,K=0){_=U,S=V,C=K;let W=!0,O=null,ie=!1,pe=!1;if(U){const me=Me.get(U);if(me.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(H.FRAMEBUFFER,null),W=!1;else if(me.__webglFramebuffer===void 0)Ve.setupRenderTarget(U);else if(me.__hasExternalTextures)Ve.rebindTextures(U,Me.get(U.texture).__webglTexture,Me.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const Pe=U.depthTexture;if(me.__boundDepthTexture!==Pe){if(Pe!==null&&Me.has(Pe)&&(U.width!==Pe.image.width||U.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(U)}}const Be=U.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(pe=!0);const Le=Me.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Le[V])?O=Le[V][K]:O=Le[V],ie=!0):U.samples>0&&Ve.useMultisampledRTT(U)===!1?O=Me.get(U).__webglMultisampledFramebuffer:Array.isArray(Le)?O=Le[K]:O=Le,I.copy(U.viewport),L.copy(U.scissor),P=U.scissorTest}else I.copy(Ne).multiplyScalar(te).floor(),L.copy(je).multiplyScalar(te).floor(),P=Ke;if(K!==0&&(O=bg),xe.bindFramebuffer(H.FRAMEBUFFER,O)&&W&&xe.drawBuffers(U,O),xe.viewport(I),xe.scissor(L),xe.setScissorTest(P),ie){const me=Me.get(U.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+V,me.__webglTexture,K)}else if(pe){const me=V;for(let Be=0;Be<U.textures.length;Be++){const Le=Me.get(U.textures[Be]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Be,Le.__webglTexture,K,me)}}else if(U!==null&&K!==0){const me=Me.get(U.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,me.__webglTexture,K)}F=-1},this.readRenderTargetPixels=function(U,V,K,W,O,ie,pe,me=0){if(!(U&&U.isWebGLRenderTarget)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Me.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&pe!==void 0&&(Be=Be[pe]),Be){xe.bindFramebuffer(H.FRAMEBUFFER,Be);try{const Le=U.textures[me],Pe=Le.format,Re=Le.type;if(!lt.textureFormatReadable(Pe)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Re)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=U.width-W&&K>=0&&K<=U.height-O&&(U.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+me),H.readPixels(V,K,W,O,Oe.convert(Pe),Oe.convert(Re),ie))}finally{const Le=_!==null?Me.get(_).__webglFramebuffer:null;xe.bindFramebuffer(H.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(U,V,K,W,O,ie,pe,me=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Me.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&pe!==void 0&&(Be=Be[pe]),Be)if(V>=0&&V<=U.width-W&&K>=0&&K<=U.height-O){xe.bindFramebuffer(H.FRAMEBUFFER,Be);const Le=U.textures[me],Pe=Le.format,Re=Le.type;if(!lt.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,$e),H.bufferData(H.PIXEL_PACK_BUFFER,ie.byteLength,H.STREAM_READ),U.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+me),H.readPixels(V,K,W,O,Oe.convert(Pe),Oe.convert(Re),0);const ct=_!==null?Me.get(_).__webglFramebuffer:null;xe.bindFramebuffer(H.FRAMEBUFFER,ct);const wt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await fm(H,wt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,$e),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,ie),H.deleteBuffer($e),H.deleteSync(wt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,V=null,K=0){const W=Math.pow(2,-K),O=Math.floor(U.image.width*W),ie=Math.floor(U.image.height*W),pe=V!==null?V.x:0,me=V!==null?V.y:0;Ve.setTexture2D(U,0),H.copyTexSubImage2D(H.TEXTURE_2D,K,0,0,pe,me,O,ie),xe.unbindTexture()};const Mg=H.createFramebuffer(),Ug=H.createFramebuffer();this.copyTextureToTexture=function(U,V,K=null,W=null,O=0,ie=null){ie===null&&(O!==0?(qn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=O,O=0):ie=0);let pe,me,Be,Le,Pe,Re,$e,ct,wt;const mt=U.isCompressedTexture?U.mipmaps[ie]:U.image;if(K!==null)pe=K.max.x-K.min.x,me=K.max.y-K.min.y,Be=K.isBox3?K.max.z-K.min.z:1,Le=K.min.x,Pe=K.min.y,Re=K.isBox3?K.min.z:0;else{const yA=Math.pow(2,-O);pe=Math.floor(mt.width*yA),me=Math.floor(mt.height*yA),U.isDataArrayTexture?Be=mt.depth:U.isData3DTexture?Be=Math.floor(mt.depth*yA):Be=1,Le=0,Pe=0,Re=0}W!==null?($e=W.x,ct=W.y,wt=W.z):($e=0,ct=0,wt=0);const ht=Oe.convert(V.format),Ce=Oe.convert(V.type);let Ot;V.isData3DTexture?(Ve.setTexture3D(V,0),Ot=H.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Ve.setTexture2DArray(V,0),Ot=H.TEXTURE_2D_ARRAY):(Ve.setTexture2D(V,0),Ot=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,V.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,V.unpackAlignment);const Ar=H.getParameter(H.UNPACK_ROW_LENGTH),SA=H.getParameter(H.UNPACK_IMAGE_HEIGHT),gi=H.getParameter(H.UNPACK_SKIP_PIXELS),dA=H.getParameter(H.UNPACK_SKIP_ROWS),fn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,mt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,mt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Le),H.pixelStorei(H.UNPACK_SKIP_ROWS,Pe),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Re);const Bt=U.isDataArrayTexture||U.isData3DTexture,sA=V.isDataArrayTexture||V.isData3DTexture;if(U.isDepthTexture){const yA=Me.get(U),Vt=Me.get(V),FA=Me.get(yA.__renderTarget),fo=Me.get(Vt.__renderTarget);xe.bindFramebuffer(H.READ_FRAMEBUFFER,FA.__webglFramebuffer),xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,fo.__webglFramebuffer);for(let Yr=0;Yr<Be;Yr++)Bt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Me.get(U).__webglTexture,O,Re+Yr),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Me.get(V).__webglTexture,ie,wt+Yr)),H.blitFramebuffer(Le,Pe,pe,me,$e,ct,pe,me,H.DEPTH_BUFFER_BIT,H.NEAREST);xe.bindFramebuffer(H.READ_FRAMEBUFFER,null),xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(O!==0||U.isRenderTargetTexture||Me.has(U)){const yA=Me.get(U),Vt=Me.get(V);xe.bindFramebuffer(H.READ_FRAMEBUFFER,Mg),xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ug);for(let FA=0;FA<Be;FA++)Bt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,yA.__webglTexture,O,Re+FA):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,yA.__webglTexture,O),sA?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Vt.__webglTexture,ie,wt+FA):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Vt.__webglTexture,ie),O!==0?H.blitFramebuffer(Le,Pe,pe,me,$e,ct,pe,me,H.COLOR_BUFFER_BIT,H.NEAREST):sA?H.copyTexSubImage3D(Ot,ie,$e,ct,wt+FA,Le,Pe,pe,me):H.copyTexSubImage2D(Ot,ie,$e,ct,Le,Pe,pe,me);xe.bindFramebuffer(H.READ_FRAMEBUFFER,null),xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else sA?U.isDataTexture||U.isData3DTexture?H.texSubImage3D(Ot,ie,$e,ct,wt,pe,me,Be,ht,Ce,mt.data):V.isCompressedArrayTexture?H.compressedTexSubImage3D(Ot,ie,$e,ct,wt,pe,me,Be,ht,mt.data):H.texSubImage3D(Ot,ie,$e,ct,wt,pe,me,Be,ht,Ce,mt):U.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,ie,$e,ct,pe,me,ht,Ce,mt.data):U.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,ie,$e,ct,mt.width,mt.height,ht,mt.data):H.texSubImage2D(H.TEXTURE_2D,ie,$e,ct,pe,me,ht,Ce,mt);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ar),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,SA),H.pixelStorei(H.UNPACK_SKIP_PIXELS,gi),H.pixelStorei(H.UNPACK_SKIP_ROWS,dA),H.pixelStorei(H.UNPACK_SKIP_IMAGES,fn),ie===0&&V.generateMipmaps&&H.generateMipmap(Ot),xe.unbindTexture()},this.initRenderTarget=function(U){Me.get(U).__webglFramebuffer===void 0&&Ve.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?Ve.setTextureCube(U,0):U.isData3DTexture?Ve.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?Ve.setTexture2DArray(U,0):Ve.setTexture2D(U,0),xe.unbindTexture()},this.resetState=function(){S=0,C=0,_=null,xe.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return WA}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}const Hu={type:"change"},oh={type:"start"},kp={type:"end"},Ns=new Ya,Pu=new gr,oy=Math.cos(70*Je.DEG2RAD),St=new N,aA=2*Math.PI,st={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qo=1e-6;class ly extends vB{constructor(e,t=null){super(e,t),this.state=st.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xi.ROTATE,MIDDLE:Xi.DOLLY,RIGHT:Xi.PAN},this.touches={ONE:Gi.ROTATE,TWO:Gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Kr,this._lastTargetPosition=new N,this._quat=new Kr().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new uu,this._sphericalDelta=new uu,this._scale=1,this._panOffset=new N,this._rotateStart=new Ee,this._rotateEnd=new Ee,this._rotateDelta=new Ee,this._panStart=new Ee,this._panEnd=new Ee,this._panDelta=new Ee,this._dollyStart=new Ee,this._dollyEnd=new Ee,this._dollyDelta=new Ee,this._dollyDirection=new N,this._mouse=new Ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hy.bind(this),this._onPointerDown=cy.bind(this),this._onPointerUp=uy.bind(this),this._onContextMenu=wy.bind(this),this._onMouseWheel=fy.bind(this),this._onKeyDown=gy.bind(this),this._onTouchStart=my.bind(this),this._onTouchMove=By.bind(this),this._onMouseDown=dy.bind(this),this._onMouseMove=py.bind(this),this._interceptControlDown=vy.bind(this),this._interceptControlUp=yy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Hu),this.update(),this.state=st.NONE}update(e=null){const t=this.object.position;St.copy(t).sub(this.target),St.applyQuaternion(this._quat),this._spherical.setFromVector3(St),this.autoRotate&&this.state===st.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let A=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(A)&&isFinite(i)&&(A<-Math.PI?A+=aA:A>Math.PI&&(A-=aA),i<-Math.PI?i+=aA:i>Math.PI&&(i-=aA),A<=i?this._spherical.theta=Math.max(A,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(A+i)/2?Math.max(A,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let n=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),n=s!=this._spherical.radius}if(St.setFromSpherical(this._spherical),St.applyQuaternion(this._quatInverse),t.copy(this.target).add(St),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const a=St.length();s=this._clampDistance(a*this._scale);const o=a-s;this.object.position.addScaledVector(this._dollyDirection,o),this.object.updateMatrixWorld(),n=!!o}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),n=o!==this.object.zoom;const l=new N(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),s=St.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(Ns.origin.copy(this.object.position),Ns.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ns.direction))<oy?this.object.lookAt(this.target):(Pu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ns.intersectPlane(Pu,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),n=!0)}return this._scale=1,this._performCursorZoom=!1,n||this._lastPosition.distanceToSquared(this.object.position)>qo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qo||this._lastTargetPosition.distanceToSquared(this.target)>qo?(this.dispatchEvent(Hu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?aA/60*this.autoRotateSpeed*e:aA/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){St.setFromMatrixColumn(t,0),St.multiplyScalar(-e),this._panOffset.add(St)}_panUp(e,t){this.screenSpacePanning===!0?St.setFromMatrixColumn(t,1):(St.setFromMatrixColumn(t,0),St.crossVectors(this.object.up,St)),St.multiplyScalar(e),this._panOffset.add(St)}_pan(e,t){const A=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;St.copy(i).sub(this.target);let n=St.length();n*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*n/A.clientHeight,this.object.matrix),this._panUp(2*t*n/A.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/A.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/A.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const A=this.domElement.getBoundingClientRect(),i=e-A.left,n=t-A.top,s=A.width,a=A.height;this._mouse.x=i/s*2-1,this._mouse.y=-(n/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(aA*this._rotateDelta.x/t.clientHeight),this._rotateUp(aA*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(aA*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-aA*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(aA*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-aA*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),A=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(A,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),A=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(A,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),A=e.pageX-t.x,i=e.pageY-t.y,n=Math.sqrt(A*A+i*i);this._dollyStart.set(0,n)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const A=this._getSecondPointerPosition(e),i=.5*(e.pageX+A.x),n=.5*(e.pageY+A.y);this._rotateEnd.set(i,n)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(aA*this._rotateDelta.x/t.clientHeight),this._rotateUp(aA*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),A=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(A,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),A=e.pageX-t.x,i=e.pageY-t.y,n=Math.sqrt(A*A+i*i);this._dollyEnd.set(0,n),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(s,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ee,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,A={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:A.deltaY*=16;break;case 2:A.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(A.deltaY*=10),A}}function cy(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function hy(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function uy(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(kp),this.state=st.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function dy(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=st.DOLLY;break;case Xi.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=st.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=st.ROTATE}break;case Xi.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=st.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=st.PAN}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(oh)}function py(r){switch(this.state){case st.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case st.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case st.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function fy(r){this.enabled===!1||this.enableZoom===!1||this.state!==st.NONE||(r.preventDefault(),this.dispatchEvent(oh),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(kp))}function gy(r){this.enabled!==!1&&this._handleKeyDown(r)}function my(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Gi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=st.TOUCH_ROTATE;break;case Gi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=st.TOUCH_PAN;break;default:this.state=st.NONE}break;case 2:switch(this.touches.TWO){case Gi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=st.TOUCH_DOLLY_PAN;break;case Gi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=st.TOUCH_DOLLY_ROTATE;break;default:this.state=st.NONE}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(oh)}function By(r){switch(this._trackPointer(r),this.state){case st.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case st.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case st.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case st.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=st.NONE}}function wy(r){this.enabled!==!1&&r.preventDefault()}function vy(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yy(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const wa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class As{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const _y=new ah(-1,1,1,-1,0,1);class xy extends uA{constructor(){super(),this.setAttribute("position",new Pt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Pt([0,2,0,0,2,0],2))}}const Cy=new xy;class Kp{constructor(e){this._mesh=new iA(Cy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,_y)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ey extends As{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof AA?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ua.clone(e.uniforms),this.material=new AA({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Kp(this.material)}render(e,t,A){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=A.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Nu extends As{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,A){const i=e.getContext(),n=e.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0);let s,a;this.inverse?(s=0,a=1):(s=1,a=0),n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),n.buffers.stencil.setFunc(i.ALWAYS,s,4294967295),n.buffers.stencil.setClear(a),n.buffers.stencil.setLocked(!0),e.setRenderTarget(A),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.color.setMask(!0),n.buffers.depth.setMask(!0),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(i.EQUAL,1,4294967295),n.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),n.buffers.stencil.setLocked(!0)}}class by extends As{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class My{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const A=e.getSize(new Ee);this._width=A.width,this._height=A.height,t=new PA(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:jA}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ey(wa),this.copyPass.material.blending=XA,this.clock=new Pp}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let A=!1;for(let i=0,n=this.passes.length;i<n;i++){const s=this.passes[i];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,A),s.needsSwap){if(A){const a=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),o.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Nu!==void 0&&(s instanceof Nu?A=!0:s instanceof by&&(A=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const A=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(A,i),this.renderTarget2.setSize(A,i);for(let n=0;n<this.passes.length;n++)this.passes[n].setSize(A,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Uy extends As{constructor(e,t,A=null,i=null,n=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=A,this.clearColor=i,this.clearAlpha=n,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Qe}render(e,t,A){const i=e.autoClear;e.autoClear=!1;let n,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(n=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:A),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(n),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=i}}const Sy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Qe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class nn extends As{constructor(e,t=1,A,i){super(),this.strength=t,this.radius=A,this.threshold=i,this.resolution=e!==void 0?new Ee(e.x,e.y):new Ee(256,256),this.clearColor=new Qe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let n=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new PA(n,s,{type:jA}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){const u=new PA(n,s,{type:jA});u.texture.name="UnrealBloomPass.h"+c,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const h=new PA(n,s,{type:jA});h.texture.name="UnrealBloomPass.v"+c,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),n=Math.round(n/2),s=Math.round(s/2)}const a=Sy;this.highPassUniforms=Ua.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new AA({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const o=[6,10,14,18,22];n=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(o[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new Ee(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ua.clone(wa.uniforms),this.blendMaterial=new AA({uniforms:this.copyUniforms,vertexShader:wa.vertexShader,fragmentShader:wa.fragmentShader,blending:Ca,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Qe,this._oldClearAlpha=1,this._basic=new cn,this._fsQuad=new Kp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let A=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(A,i);for(let n=0;n<this.nMips;n++)this.renderTargetsHorizontal[n].setSize(A,i),this.renderTargetsVertical[n].setSize(A,i),this.separableBlurMaterials[n].uniforms.invSize.value=new Ee(1/A,1/i),A=Math.round(A/2),i=Math.round(i/2)}render(e,t,A,i,n){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),n&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=A.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=A.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let o=0;o<this.nMips;o++)this._fsQuad.material=this.separableBlurMaterials[o],this.separableBlurMaterials[o].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[o].uniforms.direction.value=nn.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[o]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[o].uniforms.colorTexture.value=this.renderTargetsHorizontal[o].texture,this.separableBlurMaterials[o].uniforms.direction.value=nn.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[o]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[o];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,n&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(A),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){const t=[],A=e/3;for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(A*A))/A);return new AA({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ee(.5,.5)},direction:{value:new Ee(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;
					}
					gl_FragColor = vec4( diffuseSum, 1.0 );
				}`})}_getCompositeMaterial(e){return new AA({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}nn.BlurDirectionX=new Ee(1,0);nn.BlurDirectionY=new Ee(0,1);class Fy{parse(e){let t="",A=0,i=0,n=0;const s=new N,a=new Qe,o=new N,l=new Ee,c=[];function u(f){let m=0,g=0,d=0;const B=f.geometry,v=new Ge,y=B.getAttribute("position"),x=B.getAttribute("normal"),w=B.getAttribute("uv"),M=B.getIndex();if(t+="o "+f.name+`
`,f.material&&f.material.name&&(t+="usemtl "+f.material.name+`
`),y!==void 0)for(let S=0,C=y.count;S<C;S++,m++)s.fromBufferAttribute(y,S),s.applyMatrix4(f.matrixWorld),t+="v "+s.x+" "+s.y+" "+s.z+`
`;if(w!==void 0)for(let S=0,C=w.count;S<C;S++,d++)l.fromBufferAttribute(w,S),t+="vt "+l.x+" "+l.y+`
`;if(x!==void 0){v.getNormalMatrix(f.matrixWorld);for(let S=0,C=x.count;S<C;S++,g++)o.fromBufferAttribute(x,S),o.applyMatrix3(v).normalize(),t+="vn "+o.x+" "+o.y+" "+o.z+`
`}if(M!==null)for(let S=0,C=M.count;S<C;S+=3){for(let _=0;_<3;_++){const F=M.getX(S+_)+1;c[_]=A+F+(x||w?"/"+(w?i+F:"")+(x?"/"+(n+F):""):"")}t+="f "+c.join(" ")+`
`}else for(let S=0,C=y.count;S<C;S+=3){for(let _=0;_<3;_++){const F=S+_+1;c[_]=A+F+(x||w?"/"+(w?i+F:"")+(x?"/"+(n+F):""):"")}t+="f "+c.join(" ")+`
`}A+=m,i+=d,n+=g}function h(f){let m=0;const g=f.geometry,d=f.type,B=g.getAttribute("position");if(t+="o "+f.name+`
`,B!==void 0)for(let v=0,y=B.count;v<y;v++,m++)s.fromBufferAttribute(B,v),s.applyMatrix4(f.matrixWorld),t+="v "+s.x+" "+s.y+" "+s.z+`
`;if(d==="Line"){t+="l ";for(let v=1,y=B.count;v<=y;v++)t+=A+v+" ";t+=`
`}if(d==="LineSegments")for(let v=1,y=v+1,x=B.count;v<x;v+=2,y=v+1)t+="l "+(A+v)+" "+(A+y)+`
`;A+=m}function p(f){let m=0;const g=f.geometry,d=g.getAttribute("position"),B=g.getAttribute("color");if(t+="o "+f.name+`
`,d!==void 0){for(let v=0,y=d.count;v<y;v++,m++)s.fromBufferAttribute(d,v),s.applyMatrix4(f.matrixWorld),t+="v "+s.x+" "+s.y+" "+s.z,B!==void 0&&(a.fromBufferAttribute(B,v),qe.workingToColorSpace(a,zt),t+=" "+a.r+" "+a.g+" "+a.b),t+=`
`;t+="p ";for(let v=1,y=d.count;v<=y;v++)t+=A+v+" ";t+=`
`}A+=m}return e.traverse(function(f){f.isMesh===!0&&u(f),f.isLine===!0&&h(f),f.isPoints===!0&&p(f)}),t}}class Ty{parse(e,t,A={}){function i(B){e.traverse(function(v){if(v.isMesh===!0||v.isPoints){const y=v,x=y.geometry;x.hasAttribute("position")===!0&&B(y,x)}})}A=Object.assign({binary:!1,excludeAttributes:[],littleEndian:!1},A);const n=A.excludeAttributes;let s=!0,a=!1,o=!1,l=!1,c=0,u=0;e.traverse(function(B){if(B.isMesh===!0){const v=B.geometry,y=v.getAttribute("position"),x=v.getAttribute("normal"),w=v.getAttribute("uv"),M=v.getAttribute("color"),S=v.getIndex();if(y===void 0)return;c+=y.count,u+=S?S.count/3:y.count/3,x!==void 0&&(a=!0),w!==void 0&&(l=!0),M!==void 0&&(o=!0)}else if(B.isPoints){const v=B.geometry,y=v.getAttribute("position"),x=v.getAttribute("normal"),w=v.getAttribute("color");c+=y.count,x!==void 0&&(a=!0),w!==void 0&&(o=!0),s=!1}});const h=new Qe;if(s=s&&n.indexOf("index")===-1,a=a&&n.indexOf("normal")===-1,o=o&&n.indexOf("color")===-1,l=l&&n.indexOf("uv")===-1,s&&u!==Math.floor(u))return console.error("PLYExporter: Failed to generate a valid PLY file with triangle indices because the number of indices is not divisible by 3."),null;const p=4;let f=`ply
format ${A.binary?A.littleEndian?"binary_little_endian":"binary_big_endian":"ascii"} 1.0
element vertex ${c}
property float x
property float y
property float z
`;a===!0&&(f+=`property float nx
property float ny
property float nz
`),l===!0&&(f+=`property float s
property float t
`),o===!0&&(f+=`property uchar red
property uchar green
property uchar blue
`),s===!0&&(f+=`element face ${u}
property list uchar int vertex_index
`),f+=`end_header
`;const m=new N,g=new Ge;let d=null;if(A.binary===!0){const B=new TextEncoder().encode(f),v=c*(12+(a?12:0)+(o?3:0)+(l?8:0)),y=s?u*(p*3+1):0,x=new DataView(new ArrayBuffer(B.length+v+y));new Uint8Array(x.buffer).set(B,0);let w=B.length,M=B.length+v,S=0;i(function(C,_){const F=_.getAttribute("position"),T=_.getAttribute("normal"),I=_.getAttribute("uv"),L=_.getAttribute("color"),P=_.getIndex();g.getNormalMatrix(C.matrixWorld);for(let R=0,k=F.count;R<k;R++)m.fromBufferAttribute(F,R),m.applyMatrix4(C.matrixWorld),x.setFloat32(w,m.x,A.littleEndian),w+=4,x.setFloat32(w,m.y,A.littleEndian),w+=4,x.setFloat32(w,m.z,A.littleEndian),w+=4,a===!0&&(T!=null?(m.fromBufferAttribute(T,R),m.applyMatrix3(g).normalize(),x.setFloat32(w,m.x,A.littleEndian),w+=4,x.setFloat32(w,m.y,A.littleEndian),w+=4,x.setFloat32(w,m.z,A.littleEndian),w+=4):(x.setFloat32(w,0,A.littleEndian),w+=4,x.setFloat32(w,0,A.littleEndian),w+=4,x.setFloat32(w,0,A.littleEndian),w+=4)),l===!0&&(I!=null?(x.setFloat32(w,I.getX(R),A.littleEndian),w+=4,x.setFloat32(w,I.getY(R),A.littleEndian),w+=4):(x.setFloat32(w,0,A.littleEndian),w+=4,x.setFloat32(w,0,A.littleEndian),w+=4)),o===!0&&(L!=null?(h.fromBufferAttribute(L,R),qe.workingToColorSpace(h,zt),x.setUint8(w,Math.floor(h.r*255)),w+=1,x.setUint8(w,Math.floor(h.g*255)),w+=1,x.setUint8(w,Math.floor(h.b*255)),w+=1):(x.setUint8(w,255),w+=1,x.setUint8(w,255),w+=1,x.setUint8(w,255),w+=1));if(s===!0)if(P!==null)for(let R=0,k=P.count;R<k;R+=3)x.setUint8(M,3),M+=1,x.setUint32(M,P.getX(R+0)+S,A.littleEndian),M+=p,x.setUint32(M,P.getX(R+1)+S,A.littleEndian),M+=p,x.setUint32(M,P.getX(R+2)+S,A.littleEndian),M+=p;else for(let R=0,k=F.count;R<k;R+=3)x.setUint8(M,3),M+=1,x.setUint32(M,S+R,A.littleEndian),M+=p,x.setUint32(M,S+R+1,A.littleEndian),M+=p,x.setUint32(M,S+R+2,A.littleEndian),M+=p;S+=F.count}),d=x.buffer}else{let B=0,v="",y="";i(function(x,w){const M=w.getAttribute("position"),S=w.getAttribute("normal"),C=w.getAttribute("uv"),_=w.getAttribute("color"),F=w.getIndex();g.getNormalMatrix(x.matrixWorld);for(let T=0,I=M.count;T<I;T++){m.fromBufferAttribute(M,T),m.applyMatrix4(x.matrixWorld);let L=m.x+" "+m.y+" "+m.z;a===!0&&(S!=null?(m.fromBufferAttribute(S,T),m.applyMatrix3(g).normalize(),L+=" "+m.x+" "+m.y+" "+m.z):L+=" 0 0 0"),l===!0&&(C!=null?L+=" "+C.getX(T)+" "+C.getY(T):L+=" 0 0"),o===!0&&(_!=null?(h.fromBufferAttribute(_,T),qe.workingToColorSpace(h,zt),L+=" "+Math.floor(h.r*255)+" "+Math.floor(h.g*255)+" "+Math.floor(h.b*255)):L+=" 255 255 255"),v+=L+`
`}if(s===!0){if(F!==null)for(let T=0,I=F.count;T<I;T+=3)y+=`3 ${F.getX(T+0)+B}`,y+=` ${F.getX(T+1)+B}`,y+=` ${F.getX(T+2)+B}
`;else for(let T=0,I=M.count;T<I;T+=3)y+=`3 ${B+T} ${B+T+1} ${B+T+2}
`;u+=F?F.count/3:M.count/3}B+=M.count}),d=`${f}${v}${s?`${y}
`:`
`}`}return typeof t=="function"&&requestAnimationFrame(()=>t(d)),d}}function Wp(r,e=!1){const t=r[0].index!==null,A=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),n={},s={},a=r[0].morphTargetsRelative,o=new uA;let l=0;for(let c=0;c<r.length;++c){const u=r[c];let h=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!A.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;n[p]===void 0&&(n[p]=[]),n[p].push(u.attributes[p]),h++}if(h!==A.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;s[p]===void 0&&(s[p]=[]),s[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;o.addGroup(l,p,c),l+=p}}if(t){let c=0;const u=[];for(let h=0;h<r.length;++h){const p=r[h].index;for(let f=0;f<p.count;++f)u.push(p.getX(f)+c);c+=r[h].attributes.position.count}o.setIndex(u)}for(const c in n){const u=Ou(n[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;o.setAttribute(c,u)}for(const c in s){const u=s[c][0].length;if(u===0)break;o.morphAttributes=o.morphAttributes||{},o.morphAttributes[c]=[];for(let h=0;h<u;++h){const p=[];for(let m=0;m<s[c].length;++m)p.push(s[c][m][h]);const f=Ou(p);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;o.morphAttributes[c].push(f)}}return o}function Ou(r){let e,t,A,i=-1,n=0;for(let l=0;l<r.length;++l){const c=r[l];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(A===void 0&&(A=c.normalized),A!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=c.gpuType),i!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;n+=c.count*t}const s=new e(n),a=new hA(s,t,A);let o=0;for(let l=0;l<r.length;++l){const c=r[l];if(c.isInterleavedBufferAttribute){const u=o/t;for(let h=0,p=c.count;h<p;h++)for(let f=0;f<t;f++){const m=c.getComponent(h,f);a.setComponent(h+u,f,m)}}else s.set(c.array,o);o+=c.count*t}return i!==void 0&&(a.gpuType=i),a}var fc=function(r,e){return fc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,A){t.__proto__=A}||function(t,A){for(var i in A)Object.prototype.hasOwnProperty.call(A,i)&&(t[i]=A[i])},fc(r,e)};function NA(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");fc(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var gc=function(){return gc=Object.assign||function(r){for(var e,t=1,A=arguments.length;t<A;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i])}return r},gc.apply(this,arguments)};function $t(r,e,t,A){function i(n){return n instanceof t?n:new t(function(s){s(n)})}return new(t||(t=Promise))(function(n,s){function a(c){try{l(A.next(c))}catch(u){s(u)}}function o(c){try{l(A.throw(c))}catch(u){s(u)}}function l(c){c.done?n(c.value):i(c.value).then(a,o)}l((A=A.apply(r,[])).next())})}function jt(r,e){var t={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},A,i,n,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(c){return o([l,c])}}function o(l){if(A)throw new TypeError("Generator is already executing.");for(;t;)try{if(A=1,i&&(n=l[0]&2?i.return:l[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,l[1])).done)return n;switch(i=0,n&&(l=[l[0]&2,n.value]),l[0]){case 0:case 1:n=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,i=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(n=t.trys,!(n=n.length>0&&n[n.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!n||l[1]>n[0]&&l[1]<n[3])){t.label=l[1];break}if(l[0]===6&&t.label<n[1]){t.label=n[1],n=l;break}if(n&&t.label<n[2]){t.label=n[2],t.ops.push(l);break}n[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(r,t)}catch(c){l=[6,c],i=0}finally{A=n=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function Os(r,e,t){if(arguments.length===2)for(var A=0,i=e.length,n;A<i;A++)(n||!(A in e))&&(n||(n=Array.prototype.slice.call(e,0,A)),n[A]=e[A]);return r.concat(n||e)}var xr=(function(){function r(e,t,A,i){this.left=e,this.top=t,this.width=A,this.height=i}return r.prototype.add=function(e,t,A,i){return new r(this.left+e,this.top+t,this.width+A,this.height+i)},r.fromClientRect=function(e,t){return new r(t.left+e.windowBounds.left,t.top+e.windowBounds.top,t.width,t.height)},r.fromDOMRectList=function(e,t){var A=Array.from(t).find(function(i){return i.width!==0});return A?new r(A.left+e.windowBounds.left,A.top+e.windowBounds.top,A.width,A.height):r.EMPTY},r.EMPTY=new r(0,0,0,0),r})(),Za=function(r,e){return xr.fromClientRect(r,e.getBoundingClientRect())},Qy=function(r){var e=r.body,t=r.documentElement;if(!e||!t)throw new Error("Unable to get document size");var A=Math.max(Math.max(e.scrollWidth,t.scrollWidth),Math.max(e.offsetWidth,t.offsetWidth),Math.max(e.clientWidth,t.clientWidth)),i=Math.max(Math.max(e.scrollHeight,t.scrollHeight),Math.max(e.offsetHeight,t.offsetHeight),Math.max(e.clientHeight,t.clientHeight));return new xr(0,0,A,i)},$a=function(r){for(var e=[],t=0,A=r.length;t<A;){var i=r.charCodeAt(t++);if(i>=55296&&i<=56319&&t<A){var n=r.charCodeAt(t++);(n&64512)===56320?e.push(((i&1023)<<10)+(n&1023)+65536):(e.push(i),t--)}else e.push(i)}return e},xt=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,r);var t=r.length;if(!t)return"";for(var A=[],i=-1,n="";++i<t;){var s=r[i];s<=65535?A.push(s):(s-=65536,A.push((s>>10)+55296,s%1024+56320)),(i+1===t||A.length>16384)&&(n+=String.fromCharCode.apply(String,A),A.length=0)}return n},Vu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Iy=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Vs=0;Vs<Vu.length;Vs++)Iy[Vu.charCodeAt(Vs)]=Vs;var Gu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Tn=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Gs=0;Gs<Gu.length;Gs++)Tn[Gu.charCodeAt(Gs)]=Gs;var Ly=function(r){var e=r.length*.75,t=r.length,A,i=0,n,s,a,o;r[r.length-1]==="="&&(e--,r[r.length-2]==="="&&e--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(e):new Array(e),c=Array.isArray(l)?l:new Uint8Array(l);for(A=0;A<t;A+=4)n=Tn[r.charCodeAt(A)],s=Tn[r.charCodeAt(A+1)],a=Tn[r.charCodeAt(A+2)],o=Tn[r.charCodeAt(A+3)],c[i++]=n<<2|s>>4,c[i++]=(s&15)<<4|a>>2,c[i++]=(a&3)<<6|o&63;return l},Ry=function(r){for(var e=r.length,t=[],A=0;A<e;A+=2)t.push(r[A+1]<<8|r[A]);return t},Dy=function(r){for(var e=r.length,t=[],A=0;A<e;A+=4)t.push(r[A+3]<<24|r[A+2]<<16|r[A+1]<<8|r[A]);return t},ci=5,lh=11,Jo=2,Hy=lh-ci,Xp=65536>>ci,Py=1<<ci,Zo=Py-1,Ny=1024>>ci,Oy=Xp+Ny,Vy=Oy,Gy=32,zy=Vy+Gy,ky=65536>>lh,Ky=1<<Hy,Wy=Ky-1,zu=function(r,e,t){return r.slice?r.slice(e,t):new Uint16Array(Array.prototype.slice.call(r,e,t))},Xy=function(r,e,t){return r.slice?r.slice(e,t):new Uint32Array(Array.prototype.slice.call(r,e,t))},jy=function(r,e){var t=Ly(r),A=Array.isArray(t)?Dy(t):new Uint32Array(t),i=Array.isArray(t)?Ry(t):new Uint16Array(t),n=24,s=zu(i,n/2,A[4]/2),a=A[5]===2?zu(i,(n+A[4])/2):Xy(A,Math.ceil((n+A[4])/4));return new Yy(A[0],A[1],A[2],A[3],s,a)},Yy=(function(){function r(e,t,A,i,n,s){this.initialValue=e,this.errorValue=t,this.highStart=A,this.highValueIndex=i,this.index=n,this.data=s}return r.prototype.get=function(e){var t;if(e>=0){if(e<55296||e>56319&&e<=65535)return t=this.index[e>>ci],t=(t<<Jo)+(e&Zo),this.data[t];if(e<=65535)return t=this.index[Xp+(e-55296>>ci)],t=(t<<Jo)+(e&Zo),this.data[t];if(e<this.highStart)return t=zy-ky+(e>>lh),t=this.index[t],t+=e>>ci&Wy,t=this.index[t],t=(t<<Jo)+(e&Zo),this.data[t];if(e<=1114111)return this.data[this.highValueIndex]}return this.errorValue},r})(),ku="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",qy=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var zs=0;zs<ku.length;zs++)qy[ku.charCodeAt(zs)]=zs;var Jy="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",Ku=50,Zy=1,jp=2,Yp=3,$y=4,e_=5,Wu=7,qp=8,Xu=9,Pr=10,mc=11,ju=12,Bc=13,t_=14,Qn=15,wc=16,ks=17,_n=18,A_=19,Yu=20,vc=21,xn=22,$o=23,Ti=24,gA=25,In=26,Ln=27,Qi=28,r_=29,ki=30,i_=31,Ks=32,Ws=33,yc=34,_c=35,xc=36,Jn=37,Cc=38,va=39,ya=40,el=41,Jp=42,n_=43,s_=[9001,65288],Zp="!",Zt="×",Xs="÷",Ec=jy(Jy),lr=[ki,xc],bc=[Zy,jp,Yp,e_],$p=[Pr,qp],qu=[Ln,In],a_=bc.concat($p),Ju=[Cc,va,ya,yc,_c],o_=[Qn,Bc],l_=function(r,e){e===void 0&&(e="strict");var t=[],A=[],i=[];return r.forEach(function(n,s){var a=Ec.get(n);if(a>Ku?(i.push(!0),a-=Ku):i.push(!1),["normal","auto","loose"].indexOf(e)!==-1&&[8208,8211,12316,12448].indexOf(n)!==-1)return A.push(s),t.push(wc);if(a===$y||a===mc){if(s===0)return A.push(s),t.push(ki);var o=t[s-1];return a_.indexOf(o)===-1?(A.push(A[s-1]),t.push(o)):(A.push(s),t.push(ki))}if(A.push(s),a===i_)return t.push(e==="strict"?vc:Jn);if(a===Jp||a===r_)return t.push(ki);if(a===n_)return n>=131072&&n<=196605||n>=196608&&n<=262141?t.push(Jn):t.push(ki);t.push(a)}),[A,t,i]},tl=function(r,e,t,A){var i=A[t];if(Array.isArray(r)?r.indexOf(i)!==-1:r===i)for(var n=t;n<=A.length;){n++;var s=A[n];if(s===e)return!0;if(s!==Pr)break}if(i===Pr)for(var n=t;n>0;){n--;var a=A[n];if(Array.isArray(r)?r.indexOf(a)!==-1:r===a)for(var o=t;o<=A.length;){o++;var s=A[o];if(s===e)return!0;if(s!==Pr)break}if(a!==Pr)break}return!1},Zu=function(r,e){for(var t=r;t>=0;){var A=e[t];if(A===Pr)t--;else return A}return 0},c_=function(r,e,t,A,i){if(t[A]===0)return Zt;var n=A-1;if(Array.isArray(i)&&i[n]===!0)return Zt;var s=n-1,a=n+1,o=e[n],l=s>=0?e[s]:0,c=e[a];if(o===jp&&c===Yp)return Zt;if(bc.indexOf(o)!==-1)return Zp;if(bc.indexOf(c)!==-1||$p.indexOf(c)!==-1)return Zt;if(Zu(n,e)===qp)return Xs;if(Ec.get(r[n])===mc||(o===Ks||o===Ws)&&Ec.get(r[a])===mc||o===Wu||c===Wu||o===Xu||[Pr,Bc,Qn].indexOf(o)===-1&&c===Xu||[ks,_n,A_,Ti,Qi].indexOf(c)!==-1||Zu(n,e)===xn||tl($o,xn,n,e)||tl([ks,_n],vc,n,e)||tl(ju,ju,n,e))return Zt;if(o===Pr)return Xs;if(o===$o||c===$o)return Zt;if(c===wc||o===wc)return Xs;if([Bc,Qn,vc].indexOf(c)!==-1||o===t_||l===xc&&o_.indexOf(o)!==-1||o===Qi&&c===xc||c===Yu||lr.indexOf(c)!==-1&&o===gA||lr.indexOf(o)!==-1&&c===gA||o===Ln&&[Jn,Ks,Ws].indexOf(c)!==-1||[Jn,Ks,Ws].indexOf(o)!==-1&&c===In||lr.indexOf(o)!==-1&&qu.indexOf(c)!==-1||qu.indexOf(o)!==-1&&lr.indexOf(c)!==-1||[Ln,In].indexOf(o)!==-1&&(c===gA||[xn,Qn].indexOf(c)!==-1&&e[a+1]===gA)||[xn,Qn].indexOf(o)!==-1&&c===gA||o===gA&&[gA,Qi,Ti].indexOf(c)!==-1)return Zt;if([gA,Qi,Ti,ks,_n].indexOf(c)!==-1)for(var u=n;u>=0;){var h=e[u];if(h===gA)return Zt;if([Qi,Ti].indexOf(h)!==-1)u--;else break}if([Ln,In].indexOf(c)!==-1)for(var u=[ks,_n].indexOf(o)!==-1?s:n;u>=0;){var h=e[u];if(h===gA)return Zt;if([Qi,Ti].indexOf(h)!==-1)u--;else break}if(Cc===o&&[Cc,va,yc,_c].indexOf(c)!==-1||[va,yc].indexOf(o)!==-1&&[va,ya].indexOf(c)!==-1||[ya,_c].indexOf(o)!==-1&&c===ya||Ju.indexOf(o)!==-1&&[Yu,In].indexOf(c)!==-1||Ju.indexOf(c)!==-1&&o===Ln||lr.indexOf(o)!==-1&&lr.indexOf(c)!==-1||o===Ti&&lr.indexOf(c)!==-1||lr.concat(gA).indexOf(o)!==-1&&c===xn&&s_.indexOf(r[a])===-1||lr.concat(gA).indexOf(c)!==-1&&o===_n)return Zt;if(o===el&&c===el){for(var p=t[n],f=1;p>0&&(p--,e[p]===el);)f++;if(f%2!==0)return Zt}return o===Ks&&c===Ws?Zt:Xs},h_=function(r,e){e||(e={lineBreak:"normal",wordBreak:"normal"});var t=l_(r,e.lineBreak),A=t[0],i=t[1],n=t[2];(e.wordBreak==="break-all"||e.wordBreak==="break-word")&&(i=i.map(function(a){return[gA,ki,Jp].indexOf(a)!==-1?Jn:a}));var s=e.wordBreak==="keep-all"?n.map(function(a,o){return a&&r[o]>=19968&&r[o]<=40959}):void 0;return[A,i,s]},u_=(function(){function r(e,t,A,i){this.codePoints=e,this.required=t===Zp,this.start=A,this.end=i}return r.prototype.slice=function(){return xt.apply(void 0,this.codePoints.slice(this.start,this.end))},r})(),d_=function(r,e){var t=$a(r),A=h_(t,e),i=A[0],n=A[1],s=A[2],a=t.length,o=0,l=0;return{next:function(){if(l>=a)return{done:!0,value:null};for(var c=Zt;l<a&&(c=c_(t,n,i,++l,s))===Zt;);if(c!==Zt||l===a){var u=new u_(t,c,o,l);return o=l,{value:u,done:!1}}return{done:!0,value:null}}}},p_=1,f_=2,rs=4,$u=8,Ta=10,ed=47,Nn=92,g_=9,m_=32,js=34,Cn=61,B_=35,w_=36,v_=37,Ys=39,qs=40,En=41,y_=95,lA=45,__=33,x_=60,C_=62,E_=64,b_=91,M_=93,U_=61,S_=123,Js=63,F_=125,td=124,T_=126,Q_=128,Ad=65533,Al=42,oi=43,I_=44,L_=58,R_=59,Zn=46,D_=0,H_=8,P_=11,N_=14,O_=31,V_=127,VA=-1,ef=48,tf=97,Af=101,G_=102,z_=117,k_=122,rf=65,nf=69,sf=70,K_=85,W_=90,eA=function(r){return r>=ef&&r<=57},X_=function(r){return r>=55296&&r<=57343},Ii=function(r){return eA(r)||r>=rf&&r<=sf||r>=tf&&r<=G_},j_=function(r){return r>=tf&&r<=k_},Y_=function(r){return r>=rf&&r<=W_},q_=function(r){return j_(r)||Y_(r)},J_=function(r){return r>=Q_},Zs=function(r){return r===Ta||r===g_||r===m_},Qa=function(r){return q_(r)||J_(r)||r===y_},rd=function(r){return Qa(r)||eA(r)||r===lA},Z_=function(r){return r>=D_&&r<=H_||r===P_||r>=N_&&r<=O_||r===V_},Rr=function(r,e){return r!==Nn?!1:e!==Ta},$s=function(r,e,t){return r===lA?Qa(e)||Rr(e,t):Qa(r)?!0:!!(r===Nn&&Rr(r,e))},rl=function(r,e,t){return r===oi||r===lA?eA(e)?!0:e===Zn&&eA(t):eA(r===Zn?e:r)},$_=function(r){var e=0,t=1;(r[e]===oi||r[e]===lA)&&(r[e]===lA&&(t=-1),e++);for(var A=[];eA(r[e]);)A.push(r[e++]);var i=A.length?parseInt(xt.apply(void 0,A),10):0;r[e]===Zn&&e++;for(var n=[];eA(r[e]);)n.push(r[e++]);var s=n.length,a=s?parseInt(xt.apply(void 0,n),10):0;(r[e]===nf||r[e]===Af)&&e++;var o=1;(r[e]===oi||r[e]===lA)&&(r[e]===lA&&(o=-1),e++);for(var l=[];eA(r[e]);)l.push(r[e++]);var c=l.length?parseInt(xt.apply(void 0,l),10):0;return t*(i+a*Math.pow(10,-s))*Math.pow(10,o*c)},ex={type:2},tx={type:3},Ax={type:4},rx={type:13},ix={type:8},nx={type:21},sx={type:9},ax={type:10},ox={type:11},lx={type:12},cx={type:14},ea={type:23},hx={type:1},ux={type:25},dx={type:24},px={type:26},fx={type:27},gx={type:28},mx={type:29},Bx={type:31},Mc={type:32},af=(function(){function r(){this._value=[]}return r.prototype.write=function(e){this._value=this._value.concat($a(e))},r.prototype.read=function(){for(var e=[],t=this.consumeToken();t!==Mc;)e.push(t),t=this.consumeToken();return e},r.prototype.consumeToken=function(){var e=this.consumeCodePoint();switch(e){case js:return this.consumeStringToken(js);case B_:var t=this.peekCodePoint(0),A=this.peekCodePoint(1),i=this.peekCodePoint(2);if(rd(t)||Rr(A,i)){var n=$s(t,A,i)?f_:p_,s=this.consumeName();return{type:5,value:s,flags:n}}break;case w_:if(this.peekCodePoint(0)===Cn)return this.consumeCodePoint(),rx;break;case Ys:return this.consumeStringToken(Ys);case qs:return ex;case En:return tx;case Al:if(this.peekCodePoint(0)===Cn)return this.consumeCodePoint(),cx;break;case oi:if(rl(e,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(e),this.consumeNumericToken();break;case I_:return Ax;case lA:var a=e,o=this.peekCodePoint(0),l=this.peekCodePoint(1);if(rl(a,o,l))return this.reconsumeCodePoint(e),this.consumeNumericToken();if($s(a,o,l))return this.reconsumeCodePoint(e),this.consumeIdentLikeToken();if(o===lA&&l===C_)return this.consumeCodePoint(),this.consumeCodePoint(),dx;break;case Zn:if(rl(e,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(e),this.consumeNumericToken();break;case ed:if(this.peekCodePoint(0)===Al)for(this.consumeCodePoint();;){var c=this.consumeCodePoint();if(c===Al&&(c=this.consumeCodePoint(),c===ed))return this.consumeToken();if(c===VA)return this.consumeToken()}break;case L_:return px;case R_:return fx;case x_:if(this.peekCodePoint(0)===__&&this.peekCodePoint(1)===lA&&this.peekCodePoint(2)===lA)return this.consumeCodePoint(),this.consumeCodePoint(),ux;break;case E_:var u=this.peekCodePoint(0),h=this.peekCodePoint(1),p=this.peekCodePoint(2);if($s(u,h,p)){var s=this.consumeName();return{type:7,value:s}}break;case b_:return gx;case Nn:if(Rr(e,this.peekCodePoint(0)))return this.reconsumeCodePoint(e),this.consumeIdentLikeToken();break;case M_:return mx;case U_:if(this.peekCodePoint(0)===Cn)return this.consumeCodePoint(),ix;break;case S_:return ox;case F_:return lx;case z_:case K_:var f=this.peekCodePoint(0),m=this.peekCodePoint(1);return f===oi&&(Ii(m)||m===Js)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(e),this.consumeIdentLikeToken();case td:if(this.peekCodePoint(0)===Cn)return this.consumeCodePoint(),sx;if(this.peekCodePoint(0)===td)return this.consumeCodePoint(),nx;break;case T_:if(this.peekCodePoint(0)===Cn)return this.consumeCodePoint(),ax;break;case VA:return Mc}return Zs(e)?(this.consumeWhiteSpace(),Bx):eA(e)?(this.reconsumeCodePoint(e),this.consumeNumericToken()):Qa(e)?(this.reconsumeCodePoint(e),this.consumeIdentLikeToken()):{type:6,value:xt(e)}},r.prototype.consumeCodePoint=function(){var e=this._value.shift();return typeof e>"u"?-1:e},r.prototype.reconsumeCodePoint=function(e){this._value.unshift(e)},r.prototype.peekCodePoint=function(e){return e>=this._value.length?-1:this._value[e]},r.prototype.consumeUnicodeRangeToken=function(){for(var e=[],t=this.consumeCodePoint();Ii(t)&&e.length<6;)e.push(t),t=this.consumeCodePoint();for(var A=!1;t===Js&&e.length<6;)e.push(t),t=this.consumeCodePoint(),A=!0;if(A){var i=parseInt(xt.apply(void 0,e.map(function(o){return o===Js?ef:o})),16),n=parseInt(xt.apply(void 0,e.map(function(o){return o===Js?sf:o})),16);return{type:30,start:i,end:n}}var s=parseInt(xt.apply(void 0,e),16);if(this.peekCodePoint(0)===lA&&Ii(this.peekCodePoint(1))){this.consumeCodePoint(),t=this.consumeCodePoint();for(var a=[];Ii(t)&&a.length<6;)a.push(t),t=this.consumeCodePoint();var n=parseInt(xt.apply(void 0,a),16);return{type:30,start:s,end:n}}else return{type:30,start:s,end:s}},r.prototype.consumeIdentLikeToken=function(){var e=this.consumeName();return e.toLowerCase()==="url"&&this.peekCodePoint(0)===qs?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===qs?(this.consumeCodePoint(),{type:19,value:e}):{type:20,value:e}},r.prototype.consumeUrlToken=function(){var e=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===VA)return{type:22,value:""};var t=this.peekCodePoint(0);if(t===Ys||t===js){var A=this.consumeStringToken(this.consumeCodePoint());return A.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===VA||this.peekCodePoint(0)===En)?(this.consumeCodePoint(),{type:22,value:A.value}):(this.consumeBadUrlRemnants(),ea)}for(;;){var i=this.consumeCodePoint();if(i===VA||i===En)return{type:22,value:xt.apply(void 0,e)};if(Zs(i))return this.consumeWhiteSpace(),this.peekCodePoint(0)===VA||this.peekCodePoint(0)===En?(this.consumeCodePoint(),{type:22,value:xt.apply(void 0,e)}):(this.consumeBadUrlRemnants(),ea);if(i===js||i===Ys||i===qs||Z_(i))return this.consumeBadUrlRemnants(),ea;if(i===Nn)if(Rr(i,this.peekCodePoint(0)))e.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),ea;else e.push(i)}},r.prototype.consumeWhiteSpace=function(){for(;Zs(this.peekCodePoint(0));)this.consumeCodePoint()},r.prototype.consumeBadUrlRemnants=function(){for(;;){var e=this.consumeCodePoint();if(e===En||e===VA)return;Rr(e,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},r.prototype.consumeStringSlice=function(e){for(var t=5e4,A="";e>0;){var i=Math.min(t,e);A+=xt.apply(void 0,this._value.splice(0,i)),e-=i}return this._value.shift(),A},r.prototype.consumeStringToken=function(e){var t="",A=0;do{var i=this._value[A];if(i===VA||i===void 0||i===e)return t+=this.consumeStringSlice(A),{type:0,value:t};if(i===Ta)return this._value.splice(0,A),hx;if(i===Nn){var n=this._value[A+1];n!==VA&&n!==void 0&&(n===Ta?(t+=this.consumeStringSlice(A),A=-1,this._value.shift()):Rr(i,n)&&(t+=this.consumeStringSlice(A),t+=xt(this.consumeEscapedCodePoint()),A=-1))}A++}while(!0)},r.prototype.consumeNumber=function(){var e=[],t=rs,A=this.peekCodePoint(0);for((A===oi||A===lA)&&e.push(this.consumeCodePoint());eA(this.peekCodePoint(0));)e.push(this.consumeCodePoint());A=this.peekCodePoint(0);var i=this.peekCodePoint(1);if(A===Zn&&eA(i))for(e.push(this.consumeCodePoint(),this.consumeCodePoint()),t=$u;eA(this.peekCodePoint(0));)e.push(this.consumeCodePoint());A=this.peekCodePoint(0),i=this.peekCodePoint(1);var n=this.peekCodePoint(2);if((A===nf||A===Af)&&((i===oi||i===lA)&&eA(n)||eA(i)))for(e.push(this.consumeCodePoint(),this.consumeCodePoint()),t=$u;eA(this.peekCodePoint(0));)e.push(this.consumeCodePoint());return[$_(e),t]},r.prototype.consumeNumericToken=function(){var e=this.consumeNumber(),t=e[0],A=e[1],i=this.peekCodePoint(0),n=this.peekCodePoint(1),s=this.peekCodePoint(2);if($s(i,n,s)){var a=this.consumeName();return{type:15,number:t,flags:A,unit:a}}return i===v_?(this.consumeCodePoint(),{type:16,number:t,flags:A}):{type:17,number:t,flags:A}},r.prototype.consumeEscapedCodePoint=function(){var e=this.consumeCodePoint();if(Ii(e)){for(var t=xt(e);Ii(this.peekCodePoint(0))&&t.length<6;)t+=xt(this.consumeCodePoint());Zs(this.peekCodePoint(0))&&this.consumeCodePoint();var A=parseInt(t,16);return A===0||X_(A)||A>1114111?Ad:A}return e===VA?Ad:e},r.prototype.consumeName=function(){for(var e="";;){var t=this.consumeCodePoint();if(rd(t))e+=xt(t);else if(Rr(t,this.peekCodePoint(0)))e+=xt(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(t),e}},r})(),of=(function(){function r(e){this._tokens=e}return r.create=function(e){var t=new af;return t.write(e),new r(t.read())},r.parseValue=function(e){return r.create(e).parseComponentValue()},r.parseValues=function(e){return r.create(e).parseComponentValues()},r.prototype.parseComponentValue=function(){for(var e=this.consumeToken();e.type===31;)e=this.consumeToken();if(e.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(e);var t=this.consumeComponentValue();do e=this.consumeToken();while(e.type===31);if(e.type===32)return t;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},r.prototype.parseComponentValues=function(){for(var e=[];;){var t=this.consumeComponentValue();if(t.type===32)return e;e.push(t),e.push()}},r.prototype.consumeComponentValue=function(){var e=this.consumeToken();switch(e.type){case 11:case 28:case 2:return this.consumeSimpleBlock(e.type);case 19:return this.consumeFunction(e)}return e},r.prototype.consumeSimpleBlock=function(e){for(var t={type:e,values:[]},A=this.consumeToken();;){if(A.type===32||vx(A,e))return t;this.reconsumeToken(A),t.values.push(this.consumeComponentValue()),A=this.consumeToken()}},r.prototype.consumeFunction=function(e){for(var t={name:e.value,values:[],type:18};;){var A=this.consumeToken();if(A.type===32||A.type===3)return t;this.reconsumeToken(A),t.values.push(this.consumeComponentValue())}},r.prototype.consumeToken=function(){var e=this._tokens.shift();return typeof e>"u"?Mc:e},r.prototype.reconsumeToken=function(e){this._tokens.unshift(e)},r})(),is=function(r){return r.type===15},dn=function(r){return r.type===17},at=function(r){return r.type===20},wx=function(r){return r.type===0},Uc=function(r,e){return at(r)&&r.value===e},lf=function(r){return r.type!==31},sn=function(r){return r.type!==31&&r.type!==4},ZA=function(r){var e=[],t=[];return r.forEach(function(A){if(A.type===4){if(t.length===0)throw new Error("Error parsing function args, zero tokens for arg");e.push(t),t=[];return}A.type!==31&&t.push(A)}),t.length&&e.push(t),e},vx=function(r,e){return e===11&&r.type===12||e===28&&r.type===29?!0:e===2&&r.type===3},Wr=function(r){return r.type===17||r.type===15},Mt=function(r){return r.type===16||Wr(r)},cf=function(r){return r.length>1?[r[0],r[1]]:[r[0]]},kt={type:17,number:0,flags:rs},ch={type:16,number:50,flags:rs},Nr={type:16,number:100,flags:rs},Rn=function(r,e,t){var A=r[0],i=r[1];return[ut(A,e),ut(typeof i<"u"?i:A,t)]},ut=function(r,e){if(r.type===16)return r.number/100*e;if(is(r))switch(r.unit){case"rem":case"em":return 16*r.number;case"px":default:return r.number}return r.number},hf="deg",uf="grad",df="rad",pf="turn",eo={name:"angle",parse:function(r,e){if(e.type===15)switch(e.unit){case hf:return Math.PI*e.number/180;case uf:return Math.PI/200*e.number;case df:return e.number;case pf:return Math.PI*2*e.number}throw new Error("Unsupported angle type")}},ff=function(r){return r.type===15&&(r.unit===hf||r.unit===uf||r.unit===df||r.unit===pf)},gf=function(r){var e=r.filter(at).map(function(t){return t.value}).join(" ");switch(e){case"to bottom right":case"to right bottom":case"left top":case"top left":return[kt,kt];case"to top":case"bottom":return bA(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[kt,Nr];case"to right":case"left":return bA(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[Nr,Nr];case"to bottom":case"top":return bA(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[Nr,kt];case"to left":case"right":return bA(270)}return 0},bA=function(r){return Math.PI*r/180},Gr={name:"color",parse:function(r,e){if(e.type===18){var t=yx[e.name];if(typeof t>"u")throw new Error('Attempting to parse an unsupported color function "'+e.name+'"');return t(r,e.values)}if(e.type===5){if(e.value.length===3){var A=e.value.substring(0,1),i=e.value.substring(1,2),n=e.value.substring(2,3);return Or(parseInt(A+A,16),parseInt(i+i,16),parseInt(n+n,16),1)}if(e.value.length===4){var A=e.value.substring(0,1),i=e.value.substring(1,2),n=e.value.substring(2,3),s=e.value.substring(3,4);return Or(parseInt(A+A,16),parseInt(i+i,16),parseInt(n+n,16),parseInt(s+s,16)/255)}if(e.value.length===6){var A=e.value.substring(0,2),i=e.value.substring(2,4),n=e.value.substring(4,6);return Or(parseInt(A,16),parseInt(i,16),parseInt(n,16),1)}if(e.value.length===8){var A=e.value.substring(0,2),i=e.value.substring(2,4),n=e.value.substring(4,6),s=e.value.substring(6,8);return Or(parseInt(A,16),parseInt(i,16),parseInt(n,16),parseInt(s,16)/255)}}if(e.type===20){var a=_r[e.value.toUpperCase()];if(typeof a<"u")return a}return _r.TRANSPARENT}},zr=function(r){return(255&r)===0},Dt=function(r){var e=255&r,t=255&r>>8,A=255&r>>16,i=255&r>>24;return e<255?"rgba("+i+","+A+","+t+","+e/255+")":"rgb("+i+","+A+","+t+")"},Or=function(r,e,t,A){return(r<<24|e<<16|t<<8|Math.round(A*255)<<0)>>>0},id=function(r,e){if(r.type===17)return r.number;if(r.type===16){var t=e===3?1:255;return e===3?r.number/100*t:Math.round(r.number/100*t)}return 0},nd=function(r,e){var t=e.filter(sn);if(t.length===3){var A=t.map(id),i=A[0],n=A[1],s=A[2];return Or(i,n,s,1)}if(t.length===4){var a=t.map(id),i=a[0],n=a[1],s=a[2],o=a[3];return Or(i,n,s,o)}return 0};function il(r,e,t){return t<0&&(t+=1),t>=1&&(t-=1),t<1/6?(e-r)*t*6+r:t<1/2?e:t<2/3?(e-r)*6*(2/3-t)+r:r}var sd=function(r,e){var t=e.filter(sn),A=t[0],i=t[1],n=t[2],s=t[3],a=(A.type===17?bA(A.number):eo.parse(r,A))/(Math.PI*2),o=Mt(i)?i.number/100:0,l=Mt(n)?n.number/100:0,c=typeof s<"u"&&Mt(s)?ut(s,1):1;if(o===0)return Or(l*255,l*255,l*255,1);var u=l<=.5?l*(o+1):l+o-l*o,h=l*2-u,p=il(h,u,a+1/3),f=il(h,u,a),m=il(h,u,a-1/3);return Or(p*255,f*255,m*255,c)},yx={hsl:sd,hsla:sd,rgb:nd,rgba:nd},On=function(r,e){return Gr.parse(r,of.create(e).parseComponentValue())},_r={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},_x={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(r,e){return e.map(function(t){if(at(t))switch(t.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},xx={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},to=function(r,e){var t=Gr.parse(r,e[0]),A=e[1];return A&&Mt(A)?{color:t,stop:A}:{color:t,stop:null}},ad=function(r,e){var t=r[0],A=r[r.length-1];t.stop===null&&(t.stop=kt),A.stop===null&&(A.stop=Nr);for(var i=[],n=0,s=0;s<r.length;s++){var a=r[s].stop;if(a!==null){var o=ut(a,e);o>n?i.push(o):i.push(n),n=o}else i.push(null)}for(var l=null,s=0;s<i.length;s++){var c=i[s];if(c===null)l===null&&(l=s);else if(l!==null){for(var u=s-l,h=i[l-1],p=(c-h)/(u+1),f=1;f<=u;f++)i[l+f-1]=p*f;l=null}}return r.map(function(m,g){var d=m.color;return{color:d,stop:Math.max(Math.min(1,i[g]/e),0)}})},Cx=function(r,e,t){var A=e/2,i=t/2,n=ut(r[0],e)-A,s=i-ut(r[1],t);return(Math.atan2(s,n)+Math.PI*2)%(Math.PI*2)},Ex=function(r,e,t){var A=typeof r=="number"?r:Cx(r,e,t),i=Math.abs(e*Math.sin(A))+Math.abs(t*Math.cos(A)),n=e/2,s=t/2,a=i/2,o=Math.sin(A-Math.PI/2)*a,l=Math.cos(A-Math.PI/2)*a;return[i,n-l,n+l,s-o,s+o]},RA=function(r,e){return Math.sqrt(r*r+e*e)},od=function(r,e,t,A,i){var n=[[0,0],[0,e],[r,0],[r,e]];return n.reduce(function(s,a){var o=a[0],l=a[1],c=RA(t-o,A-l);return(i?c<s.optimumDistance:c>s.optimumDistance)?{optimumCorner:a,optimumDistance:c}:s},{optimumDistance:i?1/0:-1/0,optimumCorner:null}).optimumCorner},bx=function(r,e,t,A,i){var n=0,s=0;switch(r.size){case 0:r.shape===0?n=s=Math.min(Math.abs(e),Math.abs(e-A),Math.abs(t),Math.abs(t-i)):r.shape===1&&(n=Math.min(Math.abs(e),Math.abs(e-A)),s=Math.min(Math.abs(t),Math.abs(t-i)));break;case 2:if(r.shape===0)n=s=Math.min(RA(e,t),RA(e,t-i),RA(e-A,t),RA(e-A,t-i));else if(r.shape===1){var a=Math.min(Math.abs(t),Math.abs(t-i))/Math.min(Math.abs(e),Math.abs(e-A)),o=od(A,i,e,t,!0),l=o[0],c=o[1];n=RA(l-e,(c-t)/a),s=a*n}break;case 1:r.shape===0?n=s=Math.max(Math.abs(e),Math.abs(e-A),Math.abs(t),Math.abs(t-i)):r.shape===1&&(n=Math.max(Math.abs(e),Math.abs(e-A)),s=Math.max(Math.abs(t),Math.abs(t-i)));break;case 3:if(r.shape===0)n=s=Math.max(RA(e,t),RA(e,t-i),RA(e-A,t),RA(e-A,t-i));else if(r.shape===1){var a=Math.max(Math.abs(t),Math.abs(t-i))/Math.max(Math.abs(e),Math.abs(e-A)),u=od(A,i,e,t,!1),l=u[0],c=u[1];n=RA(l-e,(c-t)/a),s=a*n}break}return Array.isArray(r.size)&&(n=ut(r.size[0],A),s=r.size.length===2?ut(r.size[1],i):n),[n,s]},Mx=function(r,e){var t=bA(180),A=[];return ZA(e).forEach(function(i,n){if(n===0){var s=i[0];if(s.type===20&&s.value==="to"){t=gf(i);return}else if(ff(s)){t=eo.parse(r,s);return}}var a=to(r,i);A.push(a)}),{angle:t,stops:A,type:1}},ta=function(r,e){var t=bA(180),A=[];return ZA(e).forEach(function(i,n){if(n===0){var s=i[0];if(s.type===20&&["top","left","right","bottom"].indexOf(s.value)!==-1){t=gf(i);return}else if(ff(s)){t=(eo.parse(r,s)+bA(270))%bA(360);return}}var a=to(r,i);A.push(a)}),{angle:t,stops:A,type:1}},Ux=function(r,e){var t=bA(180),A=[],i=1,n=0,s=3,a=[];return ZA(e).forEach(function(o,l){var c=o[0];if(l===0){if(at(c)&&c.value==="linear"){i=1;return}else if(at(c)&&c.value==="radial"){i=2;return}}if(c.type===18){if(c.name==="from"){var u=Gr.parse(r,c.values[0]);A.push({stop:kt,color:u})}else if(c.name==="to"){var u=Gr.parse(r,c.values[0]);A.push({stop:Nr,color:u})}else if(c.name==="color-stop"){var h=c.values.filter(sn);if(h.length===2){var u=Gr.parse(r,h[1]),p=h[0];dn(p)&&A.push({stop:{type:16,number:p.number*100,flags:p.flags},color:u})}}}}),i===1?{angle:(t+bA(180))%bA(360),stops:A,type:i}:{size:s,shape:n,stops:A,position:a,type:i}},mf="closest-side",Bf="farthest-side",wf="closest-corner",vf="farthest-corner",yf="circle",_f="ellipse",xf="cover",Cf="contain",Sx=function(r,e){var t=0,A=3,i=[],n=[];return ZA(e).forEach(function(s,a){var o=!0;if(a===0){var l=!1;o=s.reduce(function(u,h){if(l)if(at(h))switch(h.value){case"center":return n.push(ch),u;case"top":case"left":return n.push(kt),u;case"right":case"bottom":return n.push(Nr),u}else(Mt(h)||Wr(h))&&n.push(h);else if(at(h))switch(h.value){case yf:return t=0,!1;case _f:return t=1,!1;case"at":return l=!0,!1;case mf:return A=0,!1;case xf:case Bf:return A=1,!1;case Cf:case wf:return A=2,!1;case vf:return A=3,!1}else if(Wr(h)||Mt(h))return Array.isArray(A)||(A=[]),A.push(h),!1;return u},o)}if(o){var c=to(r,s);i.push(c)}}),{size:A,shape:t,stops:i,position:n,type:2}},Aa=function(r,e){var t=0,A=3,i=[],n=[];return ZA(e).forEach(function(s,a){var o=!0;if(a===0?o=s.reduce(function(c,u){if(at(u))switch(u.value){case"center":return n.push(ch),!1;case"top":case"left":return n.push(kt),!1;case"right":case"bottom":return n.push(Nr),!1}else if(Mt(u)||Wr(u))return n.push(u),!1;return c},o):a===1&&(o=s.reduce(function(c,u){if(at(u))switch(u.value){case yf:return t=0,!1;case _f:return t=1,!1;case Cf:case mf:return A=0,!1;case Bf:return A=1,!1;case wf:return A=2,!1;case xf:case vf:return A=3,!1}else if(Wr(u)||Mt(u))return Array.isArray(A)||(A=[]),A.push(u),!1;return c},o)),o){var l=to(r,s);i.push(l)}}),{size:A,shape:t,stops:i,position:n,type:2}},Fx=function(r){return r.type===1},Tx=function(r){return r.type===2},hh={name:"image",parse:function(r,e){if(e.type===22){var t={url:e.value,type:0};return r.cache.addImage(e.value),t}if(e.type===18){var A=Ef[e.name];if(typeof A>"u")throw new Error('Attempting to parse an unsupported image function "'+e.name+'"');return A(r,e.values)}throw new Error("Unsupported image type "+e.type)}};function Qx(r){return!(r.type===20&&r.value==="none")&&(r.type!==18||!!Ef[r.name])}var Ef={"linear-gradient":Mx,"-moz-linear-gradient":ta,"-ms-linear-gradient":ta,"-o-linear-gradient":ta,"-webkit-linear-gradient":ta,"radial-gradient":Sx,"-moz-radial-gradient":Aa,"-ms-radial-gradient":Aa,"-o-radial-gradient":Aa,"-webkit-radial-gradient":Aa,"-webkit-gradient":Ux},Ix={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(r,e){if(e.length===0)return[];var t=e[0];return t.type===20&&t.value==="none"?[]:e.filter(function(A){return sn(A)&&Qx(A)}).map(function(A){return hh.parse(r,A)})}},Lx={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(r,e){return e.map(function(t){if(at(t))switch(t.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},Rx={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(r,e){return ZA(e).map(function(t){return t.filter(Mt)}).map(cf)}},Dx={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(r,e){return ZA(e).map(function(t){return t.filter(at).map(function(A){return A.value}).join(" ")}).map(Hx)}},Hx=function(r){switch(r){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;case"repeat":default:return 0}},Ji;(function(r){r.AUTO="auto",r.CONTAIN="contain",r.COVER="cover"})(Ji||(Ji={}));var Px={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(r,e){return ZA(e).map(function(t){return t.filter(Nx)})}},Nx=function(r){return at(r)||Mt(r)},Ao=function(r){return{name:"border-"+r+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},Ox=Ao("top"),Vx=Ao("right"),Gx=Ao("bottom"),zx=Ao("left"),ro=function(r){return{name:"border-radius-"+r,initialValue:"0 0",prefix:!1,type:1,parse:function(e,t){return cf(t.filter(Mt))}}},kx=ro("top-left"),Kx=ro("top-right"),Wx=ro("bottom-right"),Xx=ro("bottom-left"),io=function(r){return{name:"border-"+r+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(e,t){switch(t){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},jx=io("top"),Yx=io("right"),qx=io("bottom"),Jx=io("left"),no=function(r){return{name:"border-"+r+"-width",initialValue:"0",type:0,prefix:!1,parse:function(e,t){return is(t)?t.number:0}}},Zx=no("top"),$x=no("right"),eC=no("bottom"),tC=no("left"),AC={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},rC={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(r,e){switch(e){case"rtl":return 1;case"ltr":default:return 0}}},iC={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(r,e){return e.filter(at).reduce(function(t,A){return t|nC(A.value)},0)}},nC=function(r){switch(r){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},sC={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(r,e){switch(e){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},aC={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(r,e){return e.type===20&&e.value==="normal"?0:e.type===17||e.type===15?e.number:0}},Ia;(function(r){r.NORMAL="normal",r.STRICT="strict"})(Ia||(Ia={}));var oC={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(r,e){switch(e){case"strict":return Ia.STRICT;case"normal":default:return Ia.NORMAL}}},lC={name:"line-height",initialValue:"normal",prefix:!1,type:4},ld=function(r,e){return at(r)&&r.value==="normal"?1.2*e:r.type===17?e*r.number:Mt(r)?ut(r,e):e},cC={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(r,e){return e.type===20&&e.value==="none"?null:hh.parse(r,e)}},hC={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(r,e){switch(e){case"inside":return 0;case"outside":default:return 1}}},Sc={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(r,e){switch(e){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;case"none":default:return-1}}},so=function(r){return{name:"margin-"+r,initialValue:"0",prefix:!1,type:4}},uC=so("top"),dC=so("right"),pC=so("bottom"),fC=so("left"),gC={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(r,e){return e.filter(at).map(function(t){switch(t.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;case"visible":default:return 0}})}},mC={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(r,e){switch(e){case"break-word":return"break-word";case"normal":default:return"normal"}}},ao=function(r){return{name:"padding-"+r,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},BC=ao("top"),wC=ao("right"),vC=ao("bottom"),yC=ao("left"),_C={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(r,e){switch(e){case"right":return 2;case"center":case"justify":return 1;case"left":default:return 0}}},xC={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(r,e){switch(e){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},CC={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(r,e){return e.length===1&&Uc(e[0],"none")?[]:ZA(e).map(function(t){for(var A={color:_r.TRANSPARENT,offsetX:kt,offsetY:kt,blur:kt},i=0,n=0;n<t.length;n++){var s=t[n];Wr(s)?(i===0?A.offsetX=s:i===1?A.offsetY=s:A.blur=s,i++):A.color=Gr.parse(r,s)}return A})}},EC={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(r,e){switch(e){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},bC={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(r,e){if(e.type===20&&e.value==="none")return null;if(e.type===18){var t=SC[e.name];if(typeof t>"u")throw new Error('Attempting to parse an unsupported transform function "'+e.name+'"');return t(e.values)}return null}},MC=function(r){var e=r.filter(function(t){return t.type===17}).map(function(t){return t.number});return e.length===6?e:null},UC=function(r){var e=r.filter(function(o){return o.type===17}).map(function(o){return o.number}),t=e[0],A=e[1];e[2],e[3];var i=e[4],n=e[5];e[6],e[7],e[8],e[9],e[10],e[11];var s=e[12],a=e[13];return e[14],e[15],e.length===16?[t,A,i,n,s,a]:null},SC={matrix:MC,matrix3d:UC},cd={type:16,number:50,flags:rs},FC=[cd,cd],TC={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(r,e){var t=e.filter(Mt);return t.length!==2?FC:[t[0],t[1]]}},QC={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(r,e){switch(e){case"hidden":return 1;case"collapse":return 2;case"visible":default:return 0}}},Vn;(function(r){r.NORMAL="normal",r.BREAK_ALL="break-all",r.KEEP_ALL="keep-all"})(Vn||(Vn={}));var IC={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(r,e){switch(e){case"break-all":return Vn.BREAK_ALL;case"keep-all":return Vn.KEEP_ALL;case"normal":default:return Vn.NORMAL}}},LC={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(r,e){if(e.type===20)return{auto:!0,order:0};if(dn(e))return{auto:!1,order:e.number};throw new Error("Invalid z-index number parsed")}},bf={name:"time",parse:function(r,e){if(e.type===15)switch(e.unit.toLowerCase()){case"s":return 1e3*e.number;case"ms":return e.number}throw new Error("Unsupported time type")}},RC={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(r,e){return dn(e)?e.number:1}},DC={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},HC={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(r,e){return e.filter(at).map(function(t){switch(t.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(t){return t!==0})}},PC={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(r,e){var t=[],A=[];return e.forEach(function(i){switch(i.type){case 20:case 0:t.push(i.value);break;case 17:t.push(i.number.toString());break;case 4:A.push(t.join(" ")),t.length=0;break}}),t.length&&A.push(t.join(" ")),A.map(function(i){return i.indexOf(" ")===-1?i:"'"+i+"'"})}},NC={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},OC={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(r,e){if(dn(e))return e.number;if(at(e))switch(e.value){case"bold":return 700;case"normal":default:return 400}return 400}},VC={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(r,e){return e.filter(at).map(function(t){return t.value})}},GC={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(r,e){switch(e){case"oblique":return"oblique";case"italic":return"italic";case"normal":default:return"normal"}}},Tt=function(r,e){return(r&e)!==0},zC={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(r,e){if(e.length===0)return[];var t=e[0];return t.type===20&&t.value==="none"?[]:e}},kC={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(r,e){if(e.length===0)return null;var t=e[0];if(t.type===20&&t.value==="none")return null;for(var A=[],i=e.filter(lf),n=0;n<i.length;n++){var s=i[n],a=i[n+1];if(s.type===20){var o=a&&dn(a)?a.number:1;A.push({counter:s.value,increment:o})}}return A}},KC={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(r,e){if(e.length===0)return[];for(var t=[],A=e.filter(lf),i=0;i<A.length;i++){var n=A[i],s=A[i+1];if(at(n)&&n.value!=="none"){var a=s&&dn(s)?s.number:0;t.push({counter:n.value,reset:a})}}return t}},WC={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(r,e){return e.filter(is).map(function(t){return bf.parse(r,t)})}},XC={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(r,e){if(e.length===0)return null;var t=e[0];if(t.type===20&&t.value==="none")return null;var A=[],i=e.filter(wx);if(i.length%2!==0)return null;for(var n=0;n<i.length;n+=2){var s=i[n].value,a=i[n+1].value;A.push({open:s,close:a})}return A}},hd=function(r,e,t){if(!r)return"";var A=r[Math.min(e,r.length-1)];return A?t?A.open:A.close:""},jC={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(r,e){return e.length===1&&Uc(e[0],"none")?[]:ZA(e).map(function(t){for(var A={color:255,offsetX:kt,offsetY:kt,blur:kt,spread:kt,inset:!1},i=0,n=0;n<t.length;n++){var s=t[n];Uc(s,"inset")?A.inset=!0:Wr(s)?(i===0?A.offsetX=s:i===1?A.offsetY=s:i===2?A.blur=s:A.spread=s,i++):A.color=Gr.parse(r,s)}return A})}},YC={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(r,e){var t=[0,1,2],A=[];return e.filter(at).forEach(function(i){switch(i.value){case"stroke":A.push(1);break;case"fill":A.push(0);break;case"markers":A.push(2);break}}),t.forEach(function(i){A.indexOf(i)===-1&&A.push(i)}),A}},qC={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},JC={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(r,e){return is(e)?e.number:0}},ZC=(function(){function r(e,t){var A,i;this.animationDuration=ue(e,WC,t.animationDuration),this.backgroundClip=ue(e,_x,t.backgroundClip),this.backgroundColor=ue(e,xx,t.backgroundColor),this.backgroundImage=ue(e,Ix,t.backgroundImage),this.backgroundOrigin=ue(e,Lx,t.backgroundOrigin),this.backgroundPosition=ue(e,Rx,t.backgroundPosition),this.backgroundRepeat=ue(e,Dx,t.backgroundRepeat),this.backgroundSize=ue(e,Px,t.backgroundSize),this.borderTopColor=ue(e,Ox,t.borderTopColor),this.borderRightColor=ue(e,Vx,t.borderRightColor),this.borderBottomColor=ue(e,Gx,t.borderBottomColor),this.borderLeftColor=ue(e,zx,t.borderLeftColor),this.borderTopLeftRadius=ue(e,kx,t.borderTopLeftRadius),this.borderTopRightRadius=ue(e,Kx,t.borderTopRightRadius),this.borderBottomRightRadius=ue(e,Wx,t.borderBottomRightRadius),this.borderBottomLeftRadius=ue(e,Xx,t.borderBottomLeftRadius),this.borderTopStyle=ue(e,jx,t.borderTopStyle),this.borderRightStyle=ue(e,Yx,t.borderRightStyle),this.borderBottomStyle=ue(e,qx,t.borderBottomStyle),this.borderLeftStyle=ue(e,Jx,t.borderLeftStyle),this.borderTopWidth=ue(e,Zx,t.borderTopWidth),this.borderRightWidth=ue(e,$x,t.borderRightWidth),this.borderBottomWidth=ue(e,eC,t.borderBottomWidth),this.borderLeftWidth=ue(e,tC,t.borderLeftWidth),this.boxShadow=ue(e,jC,t.boxShadow),this.color=ue(e,AC,t.color),this.direction=ue(e,rC,t.direction),this.display=ue(e,iC,t.display),this.float=ue(e,sC,t.cssFloat),this.fontFamily=ue(e,PC,t.fontFamily),this.fontSize=ue(e,NC,t.fontSize),this.fontStyle=ue(e,GC,t.fontStyle),this.fontVariant=ue(e,VC,t.fontVariant),this.fontWeight=ue(e,OC,t.fontWeight),this.letterSpacing=ue(e,aC,t.letterSpacing),this.lineBreak=ue(e,oC,t.lineBreak),this.lineHeight=ue(e,lC,t.lineHeight),this.listStyleImage=ue(e,cC,t.listStyleImage),this.listStylePosition=ue(e,hC,t.listStylePosition),this.listStyleType=ue(e,Sc,t.listStyleType),this.marginTop=ue(e,uC,t.marginTop),this.marginRight=ue(e,dC,t.marginRight),this.marginBottom=ue(e,pC,t.marginBottom),this.marginLeft=ue(e,fC,t.marginLeft),this.opacity=ue(e,RC,t.opacity);var n=ue(e,gC,t.overflow);this.overflowX=n[0],this.overflowY=n[n.length>1?1:0],this.overflowWrap=ue(e,mC,t.overflowWrap),this.paddingTop=ue(e,BC,t.paddingTop),this.paddingRight=ue(e,wC,t.paddingRight),this.paddingBottom=ue(e,vC,t.paddingBottom),this.paddingLeft=ue(e,yC,t.paddingLeft),this.paintOrder=ue(e,YC,t.paintOrder),this.position=ue(e,xC,t.position),this.textAlign=ue(e,_C,t.textAlign),this.textDecorationColor=ue(e,DC,(A=t.textDecorationColor)!==null&&A!==void 0?A:t.color),this.textDecorationLine=ue(e,HC,(i=t.textDecorationLine)!==null&&i!==void 0?i:t.textDecoration),this.textShadow=ue(e,CC,t.textShadow),this.textTransform=ue(e,EC,t.textTransform),this.transform=ue(e,bC,t.transform),this.transformOrigin=ue(e,TC,t.transformOrigin),this.visibility=ue(e,QC,t.visibility),this.webkitTextStrokeColor=ue(e,qC,t.webkitTextStrokeColor),this.webkitTextStrokeWidth=ue(e,JC,t.webkitTextStrokeWidth),this.wordBreak=ue(e,IC,t.wordBreak),this.zIndex=ue(e,LC,t.zIndex)}return r.prototype.isVisible=function(){return this.display>0&&this.opacity>0&&this.visibility===0},r.prototype.isTransparent=function(){return zr(this.backgroundColor)},r.prototype.isTransformed=function(){return this.transform!==null},r.prototype.isPositioned=function(){return this.position!==0},r.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},r.prototype.isFloating=function(){return this.float!==0},r.prototype.isInlineLevel=function(){return Tt(this.display,4)||Tt(this.display,33554432)||Tt(this.display,268435456)||Tt(this.display,536870912)||Tt(this.display,67108864)||Tt(this.display,134217728)},r})(),$C=(function(){function r(e,t){this.content=ue(e,zC,t.content),this.quotes=ue(e,XC,t.quotes)}return r})(),ud=(function(){function r(e,t){this.counterIncrement=ue(e,kC,t.counterIncrement),this.counterReset=ue(e,KC,t.counterReset)}return r})(),ue=function(r,e,t){var A=new af,i=t!==null&&typeof t<"u"?t.toString():e.initialValue;A.write(i);var n=new of(A.read());switch(e.type){case 2:var s=n.parseComponentValue();return e.parse(r,at(s)?s.value:e.initialValue);case 0:return e.parse(r,n.parseComponentValue());case 1:return e.parse(r,n.parseComponentValues());case 4:return n.parseComponentValue();case 3:switch(e.format){case"angle":return eo.parse(r,n.parseComponentValue());case"color":return Gr.parse(r,n.parseComponentValue());case"image":return hh.parse(r,n.parseComponentValue());case"length":var a=n.parseComponentValue();return Wr(a)?a:kt;case"length-percentage":var o=n.parseComponentValue();return Mt(o)?o:kt;case"time":return bf.parse(r,n.parseComponentValue())}break}},eE="data-html2canvas-debug",tE=function(r){var e=r.getAttribute(eE);switch(e){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},Fc=function(r,e){var t=tE(r);return t===1||e===t},$A=(function(){function r(e,t){if(this.context=e,this.textNodes=[],this.elements=[],this.flags=0,Fc(t,3))debugger;this.styles=new ZC(e,window.getComputedStyle(t,null)),Ic(t)&&(this.styles.animationDuration.some(function(A){return A>0})&&(t.style.animationDuration="0s"),this.styles.transform!==null&&(t.style.transform="none")),this.bounds=Za(this.context,t),Fc(t,4)&&(this.flags|=16)}return r})(),AE="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",dd="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Dn=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ra=0;ra<dd.length;ra++)Dn[dd.charCodeAt(ra)]=ra;var rE=function(r){var e=r.length*.75,t=r.length,A,i=0,n,s,a,o;r[r.length-1]==="="&&(e--,r[r.length-2]==="="&&e--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(e):new Array(e),c=Array.isArray(l)?l:new Uint8Array(l);for(A=0;A<t;A+=4)n=Dn[r.charCodeAt(A)],s=Dn[r.charCodeAt(A+1)],a=Dn[r.charCodeAt(A+2)],o=Dn[r.charCodeAt(A+3)],c[i++]=n<<2|s>>4,c[i++]=(s&15)<<4|a>>2,c[i++]=(a&3)<<6|o&63;return l},iE=function(r){for(var e=r.length,t=[],A=0;A<e;A+=2)t.push(r[A+1]<<8|r[A]);return t},nE=function(r){for(var e=r.length,t=[],A=0;A<e;A+=4)t.push(r[A+3]<<24|r[A+2]<<16|r[A+1]<<8|r[A]);return t},hi=5,uh=11,nl=2,sE=uh-hi,Mf=65536>>hi,aE=1<<hi,sl=aE-1,oE=1024>>hi,lE=Mf+oE,cE=lE,hE=32,uE=cE+hE,dE=65536>>uh,pE=1<<sE,fE=pE-1,pd=function(r,e,t){return r.slice?r.slice(e,t):new Uint16Array(Array.prototype.slice.call(r,e,t))},gE=function(r,e,t){return r.slice?r.slice(e,t):new Uint32Array(Array.prototype.slice.call(r,e,t))},mE=function(r,e){var t=rE(r),A=Array.isArray(t)?nE(t):new Uint32Array(t),i=Array.isArray(t)?iE(t):new Uint16Array(t),n=24,s=pd(i,n/2,A[4]/2),a=A[5]===2?pd(i,(n+A[4])/2):gE(A,Math.ceil((n+A[4])/4));return new BE(A[0],A[1],A[2],A[3],s,a)},BE=(function(){function r(e,t,A,i,n,s){this.initialValue=e,this.errorValue=t,this.highStart=A,this.highValueIndex=i,this.index=n,this.data=s}return r.prototype.get=function(e){var t;if(e>=0){if(e<55296||e>56319&&e<=65535)return t=this.index[e>>hi],t=(t<<nl)+(e&sl),this.data[t];if(e<=65535)return t=this.index[Mf+(e-55296>>hi)],t=(t<<nl)+(e&sl),this.data[t];if(e<this.highStart)return t=uE-dE+(e>>uh),t=this.index[t],t+=e>>hi&fE,t=this.index[t],t=(t<<nl)+(e&sl),this.data[t];if(e<=1114111)return this.data[this.highValueIndex]}return this.errorValue},r})(),fd="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",wE=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ia=0;ia<fd.length;ia++)wE[fd.charCodeAt(ia)]=ia;var vE=1,al=2,ol=3,gd=4,md=5,yE=7,Bd=8,ll=9,cl=10,wd=11,vd=12,yd=13,_d=14,hl=15,_E=function(r){for(var e=[],t=0,A=r.length;t<A;){var i=r.charCodeAt(t++);if(i>=55296&&i<=56319&&t<A){var n=r.charCodeAt(t++);(n&64512)===56320?e.push(((i&1023)<<10)+(n&1023)+65536):(e.push(i),t--)}else e.push(i)}return e},xE=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,r);var t=r.length;if(!t)return"";for(var A=[],i=-1,n="";++i<t;){var s=r[i];s<=65535?A.push(s):(s-=65536,A.push((s>>10)+55296,s%1024+56320)),(i+1===t||A.length>16384)&&(n+=String.fromCharCode.apply(String,A),A.length=0)}return n},CE=mE(AE),li="×",xd="÷",EE=function(r){return CE.get(r)},bE=function(r,e,t){var A=t-2,i=e[A],n=e[t-1],s=e[t];if(n===al&&s===ol)return li;if(n===al||n===ol||n===gd||s===al||s===ol||s===gd)return xd;if(n===Bd&&[Bd,ll,wd,vd].indexOf(s)!==-1||(n===wd||n===ll)&&(s===ll||s===cl)||(n===vd||n===cl)&&s===cl||s===yd||s===md||s===yE||n===vE)return li;if(n===yd&&s===_d){for(;i===md;)i=e[--A];if(i===_d)return li}if(n===hl&&s===hl){for(var a=0;i===hl;)a++,i=e[--A];if(a%2===0)return li}return xd},ME=function(r){var e=_E(r),t=e.length,A=0,i=0,n=e.map(EE);return{next:function(){if(A>=t)return{done:!0,value:null};for(var s=li;A<t&&(s=bE(e,n,++A))===li;);if(s!==li||A===t){var a=xE.apply(null,e.slice(i,A));return i=A,{value:a,done:!1}}return{done:!0,value:null}}}},UE=function(r){for(var e=ME(r),t=[],A;!(A=e.next()).done;)A.value&&t.push(A.value.slice());return t},SE=function(r){var e=123;if(r.createRange){var t=r.createRange();if(t.getBoundingClientRect){var A=r.createElement("boundtest");A.style.height=e+"px",A.style.display="block",r.body.appendChild(A),t.selectNode(A);var i=t.getBoundingClientRect(),n=Math.round(i.height);if(r.body.removeChild(A),n===e)return!0}}return!1},FE=function(r){var e=r.createElement("boundtest");e.style.width="50px",e.style.display="block",e.style.fontSize="12px",e.style.letterSpacing="0px",e.style.wordSpacing="0px",r.body.appendChild(e);var t=r.createRange();e.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";var A=e.firstChild,i=$a(A.data).map(function(o){return xt(o)}),n=0,s={},a=i.every(function(o,l){t.setStart(A,n),t.setEnd(A,n+o.length);var c=t.getBoundingClientRect();n+=o.length;var u=c.x>s.x||c.y>s.y;return s=c,l===0?!0:u});return r.body.removeChild(e),a},TE=function(){return typeof new Image().crossOrigin<"u"},QE=function(){return typeof new XMLHttpRequest().responseType=="string"},IE=function(r){var e=new Image,t=r.createElement("canvas"),A=t.getContext("2d");if(!A)return!1;e.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{A.drawImage(e,0,0),t.toDataURL()}catch{return!1}return!0},Cd=function(r){return r[0]===0&&r[1]===255&&r[2]===0&&r[3]===255},LE=function(r){var e=r.createElement("canvas"),t=100;e.width=t,e.height=t;var A=e.getContext("2d");if(!A)return Promise.reject(!1);A.fillStyle="rgb(0, 255, 0)",A.fillRect(0,0,t,t);var i=new Image,n=e.toDataURL();i.src=n;var s=Tc(t,t,0,0,i);return A.fillStyle="red",A.fillRect(0,0,t,t),Ed(s).then(function(a){A.drawImage(a,0,0);var o=A.getImageData(0,0,t,t).data;A.fillStyle="red",A.fillRect(0,0,t,t);var l=r.createElement("div");return l.style.backgroundImage="url("+n+")",l.style.height=t+"px",Cd(o)?Ed(Tc(t,t,0,0,l)):Promise.reject(!1)}).then(function(a){return A.drawImage(a,0,0),Cd(A.getImageData(0,0,t,t).data)}).catch(function(){return!1})},Tc=function(r,e,t,A,i){var n="http://www.w3.org/2000/svg",s=document.createElementNS(n,"svg"),a=document.createElementNS(n,"foreignObject");return s.setAttributeNS(null,"width",r.toString()),s.setAttributeNS(null,"height",e.toString()),a.setAttributeNS(null,"width","100%"),a.setAttributeNS(null,"height","100%"),a.setAttributeNS(null,"x",t.toString()),a.setAttributeNS(null,"y",A.toString()),a.setAttributeNS(null,"externalResourcesRequired","true"),s.appendChild(a),a.appendChild(i),s},Ed=function(r){return new Promise(function(e,t){var A=new Image;A.onload=function(){return e(A)},A.onerror=t,A.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(r))})},Gt={get SUPPORT_RANGE_BOUNDS(){var r=SE(document);return Object.defineProperty(Gt,"SUPPORT_RANGE_BOUNDS",{value:r}),r},get SUPPORT_WORD_BREAKING(){var r=Gt.SUPPORT_RANGE_BOUNDS&&FE(document);return Object.defineProperty(Gt,"SUPPORT_WORD_BREAKING",{value:r}),r},get SUPPORT_SVG_DRAWING(){var r=IE(document);return Object.defineProperty(Gt,"SUPPORT_SVG_DRAWING",{value:r}),r},get SUPPORT_FOREIGNOBJECT_DRAWING(){var r=typeof Array.from=="function"&&typeof window.fetch=="function"?LE(document):Promise.resolve(!1);return Object.defineProperty(Gt,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:r}),r},get SUPPORT_CORS_IMAGES(){var r=TE();return Object.defineProperty(Gt,"SUPPORT_CORS_IMAGES",{value:r}),r},get SUPPORT_RESPONSE_TYPE(){var r=QE();return Object.defineProperty(Gt,"SUPPORT_RESPONSE_TYPE",{value:r}),r},get SUPPORT_CORS_XHR(){var r="withCredentials"in new XMLHttpRequest;return Object.defineProperty(Gt,"SUPPORT_CORS_XHR",{value:r}),r},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var r=!!(typeof Intl<"u"&&Intl.Segmenter);return Object.defineProperty(Gt,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:r}),r}},Gn=(function(){function r(e,t){this.text=e,this.bounds=t}return r})(),RE=function(r,e,t,A){var i=PE(e,t),n=[],s=0;return i.forEach(function(a){if(t.textDecorationLine.length||a.trim().length>0)if(Gt.SUPPORT_RANGE_BOUNDS){var o=bd(A,s,a.length).getClientRects();if(o.length>1){var l=dh(a),c=0;l.forEach(function(h){n.push(new Gn(h,xr.fromDOMRectList(r,bd(A,c+s,h.length).getClientRects()))),c+=h.length})}else n.push(new Gn(a,xr.fromDOMRectList(r,o)))}else{var u=A.splitText(a.length);n.push(new Gn(a,DE(r,A))),A=u}else Gt.SUPPORT_RANGE_BOUNDS||(A=A.splitText(a.length));s+=a.length}),n},DE=function(r,e){var t=e.ownerDocument;if(t){var A=t.createElement("html2canvaswrapper");A.appendChild(e.cloneNode(!0));var i=e.parentNode;if(i){i.replaceChild(A,e);var n=Za(r,A);return A.firstChild&&i.replaceChild(A.firstChild,A),n}}return xr.EMPTY},bd=function(r,e,t){var A=r.ownerDocument;if(!A)throw new Error("Node has no owner document");var i=A.createRange();return i.setStart(r,e),i.setEnd(r,e+t),i},dh=function(r){if(Gt.SUPPORT_NATIVE_TEXT_SEGMENTATION){var e=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(e.segment(r)).map(function(t){return t.segment})}return UE(r)},HE=function(r,e){if(Gt.SUPPORT_NATIVE_TEXT_SEGMENTATION){var t=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(t.segment(r)).map(function(A){return A.segment})}return OE(r,e)},PE=function(r,e){return e.letterSpacing!==0?dh(r):HE(r,e)},NE=[32,160,4961,65792,65793,4153,4241],OE=function(r,e){for(var t=d_(r,{lineBreak:e.lineBreak,wordBreak:e.overflowWrap==="break-word"?"break-word":e.wordBreak}),A=[],i,n=function(){if(i.value){var s=i.value.slice(),a=$a(s),o="";a.forEach(function(l){NE.indexOf(l)===-1?o+=xt(l):(o.length&&A.push(o),A.push(xt(l)),o="")}),o.length&&A.push(o)}};!(i=t.next()).done;)n();return A},VE=(function(){function r(e,t,A){this.text=GE(t.data,A.textTransform),this.textBounds=RE(e,this.text,A,t)}return r})(),GE=function(r,e){switch(e){case 1:return r.toLowerCase();case 3:return r.replace(zE,kE);case 2:return r.toUpperCase();default:return r}},zE=/(^|\s|:|-|\(|\))([a-z])/g,kE=function(r,e,t){return r.length>0?e+t.toUpperCase():r},Uf=(function(r){NA(e,r);function e(t,A){var i=r.call(this,t,A)||this;return i.src=A.currentSrc||A.src,i.intrinsicWidth=A.naturalWidth,i.intrinsicHeight=A.naturalHeight,i.context.cache.addImage(i.src),i}return e})($A),Sf=(function(r){NA(e,r);function e(t,A){var i=r.call(this,t,A)||this;return i.canvas=A,i.intrinsicWidth=A.width,i.intrinsicHeight=A.height,i}return e})($A),Ff=(function(r){NA(e,r);function e(t,A){var i=r.call(this,t,A)||this,n=new XMLSerializer,s=Za(t,A);return A.setAttribute("width",s.width+"px"),A.setAttribute("height",s.height+"px"),i.svg="data:image/svg+xml,"+encodeURIComponent(n.serializeToString(A)),i.intrinsicWidth=A.width.baseVal.value,i.intrinsicHeight=A.height.baseVal.value,i.context.cache.addImage(i.svg),i}return e})($A),Tf=(function(r){NA(e,r);function e(t,A){var i=r.call(this,t,A)||this;return i.value=A.value,i}return e})($A),Qc=(function(r){NA(e,r);function e(t,A){var i=r.call(this,t,A)||this;return i.start=A.start,i.reversed=typeof A.reversed=="boolean"&&A.reversed===!0,i}return e})($A),KE=[{type:15,flags:0,unit:"px",number:3}],WE=[{type:16,flags:0,number:50}],XE=function(r){return r.width>r.height?new xr(r.left+(r.width-r.height)/2,r.top,r.height,r.height):r.width<r.height?new xr(r.left,r.top+(r.height-r.width)/2,r.width,r.width):r},jE=function(r){var e=r.type===YE?new Array(r.value.length+1).join("•"):r.value;return e.length===0?r.placeholder||"":e},La="checkbox",Ra="radio",YE="password",Md=707406591,ph=(function(r){NA(e,r);function e(t,A){var i=r.call(this,t,A)||this;switch(i.type=A.type.toLowerCase(),i.checked=A.checked,i.value=jE(A),(i.type===La||i.type===Ra)&&(i.styles.backgroundColor=3739148031,i.styles.borderTopColor=i.styles.borderRightColor=i.styles.borderBottomColor=i.styles.borderLeftColor=2779096575,i.styles.borderTopWidth=i.styles.borderRightWidth=i.styles.borderBottomWidth=i.styles.borderLeftWidth=1,i.styles.borderTopStyle=i.styles.borderRightStyle=i.styles.borderBottomStyle=i.styles.borderLeftStyle=1,i.styles.backgroundClip=[0],i.styles.backgroundOrigin=[0],i.bounds=XE(i.bounds)),i.type){case La:i.styles.borderTopRightRadius=i.styles.borderTopLeftRadius=i.styles.borderBottomRightRadius=i.styles.borderBottomLeftRadius=KE;break;case Ra:i.styles.borderTopRightRadius=i.styles.borderTopLeftRadius=i.styles.borderBottomRightRadius=i.styles.borderBottomLeftRadius=WE;break}return i}return e})($A),Qf=(function(r){NA(e,r);function e(t,A){var i=r.call(this,t,A)||this,n=A.options[A.selectedIndex||0];return i.value=n&&n.text||"",i}return e})($A),If=(function(r){NA(e,r);function e(t,A){var i=r.call(this,t,A)||this;return i.value=A.value,i}return e})($A),Lf=(function(r){NA(e,r);function e(t,A){var i=r.call(this,t,A)||this;i.src=A.src,i.width=parseInt(A.width,10)||0,i.height=parseInt(A.height,10)||0,i.backgroundColor=i.styles.backgroundColor;try{if(A.contentWindow&&A.contentWindow.document&&A.contentWindow.document.documentElement){i.tree=Df(t,A.contentWindow.document.documentElement);var n=A.contentWindow.document.documentElement?On(t,getComputedStyle(A.contentWindow.document.documentElement).backgroundColor):_r.TRANSPARENT,s=A.contentWindow.document.body?On(t,getComputedStyle(A.contentWindow.document.body).backgroundColor):_r.TRANSPARENT;i.backgroundColor=zr(n)?zr(s)?i.styles.backgroundColor:s:n}}catch{}return i}return e})($A),qE=["OL","UL","MENU"],_a=function(r,e,t,A){for(var i=e.firstChild,n=void 0;i;i=n)if(n=i.nextSibling,Hf(i)&&i.data.trim().length>0)t.textNodes.push(new VE(r,i,t.styles));else if(Ki(i))if(Vf(i)&&i.assignedNodes)i.assignedNodes().forEach(function(a){return _a(r,a,t,A)});else{var s=Rf(r,i);s.styles.isVisible()&&(JE(i,s,A)?s.flags|=4:ZE(s.styles)&&(s.flags|=2),qE.indexOf(i.tagName)!==-1&&(s.flags|=8),t.elements.push(s),i.slot,i.shadowRoot?_a(r,i.shadowRoot,s,A):!Da(i)&&!Pf(i)&&!Ha(i)&&_a(r,i,s,A))}},Rf=function(r,e){return Lc(e)?new Uf(r,e):Nf(e)?new Sf(r,e):Pf(e)?new Ff(r,e):$E(e)?new Tf(r,e):eb(e)?new Qc(r,e):tb(e)?new ph(r,e):Ha(e)?new Qf(r,e):Da(e)?new If(r,e):Of(e)?new Lf(r,e):new $A(r,e)},Df=function(r,e){var t=Rf(r,e);return t.flags|=4,_a(r,e,t,t),t},JE=function(r,e,t){return e.styles.isPositionedWithZIndex()||e.styles.opacity<1||e.styles.isTransformed()||fh(r)&&t.styles.isTransparent()},ZE=function(r){return r.isPositioned()||r.isFloating()},Hf=function(r){return r.nodeType===Node.TEXT_NODE},Ki=function(r){return r.nodeType===Node.ELEMENT_NODE},Ic=function(r){return Ki(r)&&typeof r.style<"u"&&!xa(r)},xa=function(r){return typeof r.className=="object"},$E=function(r){return r.tagName==="LI"},eb=function(r){return r.tagName==="OL"},tb=function(r){return r.tagName==="INPUT"},Ab=function(r){return r.tagName==="HTML"},Pf=function(r){return r.tagName==="svg"},fh=function(r){return r.tagName==="BODY"},Nf=function(r){return r.tagName==="CANVAS"},Ud=function(r){return r.tagName==="VIDEO"},Lc=function(r){return r.tagName==="IMG"},Of=function(r){return r.tagName==="IFRAME"},Sd=function(r){return r.tagName==="STYLE"},rb=function(r){return r.tagName==="SCRIPT"},Da=function(r){return r.tagName==="TEXTAREA"},Ha=function(r){return r.tagName==="SELECT"},Vf=function(r){return r.tagName==="SLOT"},Fd=function(r){return r.tagName.indexOf("-")>0},ib=(function(){function r(){this.counters={}}return r.prototype.getCounterValue=function(e){var t=this.counters[e];return t&&t.length?t[t.length-1]:1},r.prototype.getCounterValues=function(e){var t=this.counters[e];return t||[]},r.prototype.pop=function(e){var t=this;e.forEach(function(A){return t.counters[A].pop()})},r.prototype.parse=function(e){var t=this,A=e.counterIncrement,i=e.counterReset,n=!0;A!==null&&A.forEach(function(a){var o=t.counters[a.counter];o&&a.increment!==0&&(n=!1,o.length||o.push(1),o[Math.max(0,o.length-1)]+=a.increment)});var s=[];return n&&i.forEach(function(a){var o=t.counters[a.counter];s.push(a.counter),o||(o=t.counters[a.counter]=[]),o.push(a.reset)}),s},r})(),Td={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},Qd={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},nb={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},sb={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},Li=function(r,e,t,A,i,n){return r<e||r>t?$n(r,i,n.length>0):A.integers.reduce(function(s,a,o){for(;r>=a;)r-=a,s+=A.values[o];return s},"")+n},Gf=function(r,e,t,A){var i="";do t||r--,i=A(r)+i,r/=e;while(r*e>=e);return i},_t=function(r,e,t,A,i){var n=t-e+1;return(r<0?"-":"")+(Gf(Math.abs(r),n,A,function(s){return xt(Math.floor(s%n)+e)})+i)},Ai=function(r,e,t){t===void 0&&(t=". ");var A=e.length;return Gf(Math.abs(r),A,!1,function(i){return e[Math.floor(i%A)]})+t},Oi=1,Ir=2,Lr=4,Hn=8,cr=function(r,e,t,A,i,n){if(r<-9999||r>9999)return $n(r,4,i.length>0);var s=Math.abs(r),a=i;if(s===0)return e[0]+a;for(var o=0;s>0&&o<=4;o++){var l=s%10;l===0&&Tt(n,Oi)&&a!==""?a=e[l]+a:l>1||l===1&&o===0||l===1&&o===1&&Tt(n,Ir)||l===1&&o===1&&Tt(n,Lr)&&r>100||l===1&&o>1&&Tt(n,Hn)?a=e[l]+(o>0?t[o-1]:"")+a:l===1&&o>0&&(a=t[o-1]+a),s=Math.floor(s/10)}return(r<0?A:"")+a},Id="十百千萬",Ld="拾佰仟萬",Rd="マイナス",ul="마이너스",$n=function(r,e,t){var A=t?". ":"",i=t?"、":"",n=t?", ":"",s=t?" ":"";switch(e){case 0:return"•"+s;case 1:return"◦"+s;case 2:return"◾"+s;case 5:var a=_t(r,48,57,!0,A);return a.length<4?"0"+a:a;case 4:return Ai(r,"〇一二三四五六七八九",i);case 6:return Li(r,1,3999,Td,3,A).toLowerCase();case 7:return Li(r,1,3999,Td,3,A);case 8:return _t(r,945,969,!1,A);case 9:return _t(r,97,122,!1,A);case 10:return _t(r,65,90,!1,A);case 11:return _t(r,1632,1641,!0,A);case 12:case 49:return Li(r,1,9999,Qd,3,A);case 35:return Li(r,1,9999,Qd,3,A).toLowerCase();case 13:return _t(r,2534,2543,!0,A);case 14:case 30:return _t(r,6112,6121,!0,A);case 15:return Ai(r,"子丑寅卯辰巳午未申酉戌亥",i);case 16:return Ai(r,"甲乙丙丁戊己庚辛壬癸",i);case 17:case 48:return cr(r,"零一二三四五六七八九",Id,"負",i,Ir|Lr|Hn);case 47:return cr(r,"零壹貳參肆伍陸柒捌玖",Ld,"負",i,Oi|Ir|Lr|Hn);case 42:return cr(r,"零一二三四五六七八九",Id,"负",i,Ir|Lr|Hn);case 41:return cr(r,"零壹贰叁肆伍陆柒捌玖",Ld,"负",i,Oi|Ir|Lr|Hn);case 26:return cr(r,"〇一二三四五六七八九","十百千万",Rd,i,0);case 25:return cr(r,"零壱弐参四伍六七八九","拾百千万",Rd,i,Oi|Ir|Lr);case 31:return cr(r,"영일이삼사오육칠팔구","십백천만",ul,n,Oi|Ir|Lr);case 33:return cr(r,"零一二三四五六七八九","十百千萬",ul,n,0);case 32:return cr(r,"零壹貳參四五六七八九","拾百千",ul,n,Oi|Ir|Lr);case 18:return _t(r,2406,2415,!0,A);case 20:return Li(r,1,19999,sb,3,A);case 21:return _t(r,2790,2799,!0,A);case 22:return _t(r,2662,2671,!0,A);case 22:return Li(r,1,10999,nb,3,A);case 23:return Ai(r,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return Ai(r,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return _t(r,3302,3311,!0,A);case 28:return Ai(r,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",i);case 29:return Ai(r,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",i);case 34:return _t(r,3792,3801,!0,A);case 37:return _t(r,6160,6169,!0,A);case 38:return _t(r,4160,4169,!0,A);case 39:return _t(r,2918,2927,!0,A);case 40:return _t(r,1776,1785,!0,A);case 43:return _t(r,3046,3055,!0,A);case 44:return _t(r,3174,3183,!0,A);case 45:return _t(r,3664,3673,!0,A);case 46:return _t(r,3872,3881,!0,A);case 3:default:return _t(r,48,57,!0,A)}},zf="data-html2canvas-ignore",Dd=(function(){function r(e,t,A){if(this.context=e,this.options=A,this.scrolledElements=[],this.referenceElement=t,this.counters=new ib,this.quoteDepth=0,!t.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(t.ownerDocument.documentElement,!1)}return r.prototype.toIFrame=function(e,t){var A=this,i=ab(e,t);if(!i.contentWindow)return Promise.reject("Unable to find iframe window");var n=e.defaultView.pageXOffset,s=e.defaultView.pageYOffset,a=i.contentWindow,o=a.document,l=cb(i).then(function(){return $t(A,void 0,void 0,function(){var c,u;return jt(this,function(h){switch(h.label){case 0:return this.scrolledElements.forEach(pb),a&&(a.scrollTo(t.left,t.top),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(a.scrollY!==t.top||a.scrollX!==t.left)&&(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(a.scrollX-t.left,a.scrollY-t.top,0,0))),c=this.options.onclone,u=this.clonedReferenceElement,typeof u>"u"?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:o.fonts&&o.fonts.ready?[4,o.fonts.ready]:[3,2];case 1:h.sent(),h.label=2;case 2:return/(AppleWebKit)/g.test(navigator.userAgent)?[4,lb(o)]:[3,4];case 3:h.sent(),h.label=4;case 4:return typeof c=="function"?[2,Promise.resolve().then(function(){return c(o,u)}).then(function(){return i})]:[2,i]}})})});return o.open(),o.write(ub(document.doctype)+"<html></html>"),db(this.referenceElement.ownerDocument,n,s),o.replaceChild(o.adoptNode(this.documentElement),o.documentElement),o.close(),l},r.prototype.createElementClone=function(e){if(Fc(e,2))debugger;if(Nf(e))return this.createCanvasClone(e);if(Ud(e))return this.createVideoClone(e);if(Sd(e))return this.createStyleClone(e);var t=e.cloneNode(!1);return Lc(t)&&(Lc(e)&&e.currentSrc&&e.currentSrc!==e.src&&(t.src=e.currentSrc,t.srcset=""),t.loading==="lazy"&&(t.loading="eager")),Fd(t)?this.createCustomElementClone(t):t},r.prototype.createCustomElementClone=function(e){var t=document.createElement("html2canvascustomelement");return dl(e.style,t),t},r.prototype.createStyleClone=function(e){try{var t=e.sheet;if(t&&t.cssRules){var A=[].slice.call(t.cssRules,0).reduce(function(n,s){return s&&typeof s.cssText=="string"?n+s.cssText:n},""),i=e.cloneNode(!1);return i.textContent=A,i}}catch(n){if(this.context.logger.error("Unable to access cssRules property",n),n.name!=="SecurityError")throw n}return e.cloneNode(!1)},r.prototype.createCanvasClone=function(e){var t;if(this.options.inlineImages&&e.ownerDocument){var A=e.ownerDocument.createElement("img");try{return A.src=e.toDataURL(),A}catch{this.context.logger.info("Unable to inline canvas contents, canvas is tainted",e)}}var i=e.cloneNode(!1);try{i.width=e.width,i.height=e.height;var n=e.getContext("2d"),s=i.getContext("2d");if(s)if(!this.options.allowTaint&&n)s.putImageData(n.getImageData(0,0,e.width,e.height),0,0);else{var a=(t=e.getContext("webgl2"))!==null&&t!==void 0?t:e.getContext("webgl");if(a){var o=a.getContextAttributes();o?.preserveDrawingBuffer===!1&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",e)}s.drawImage(e,0,0)}return i}catch{this.context.logger.info("Unable to clone canvas as it is tainted",e)}return i},r.prototype.createVideoClone=function(e){var t=e.ownerDocument.createElement("canvas");t.width=e.offsetWidth,t.height=e.offsetHeight;var A=t.getContext("2d");try{return A&&(A.drawImage(e,0,0,t.width,t.height),this.options.allowTaint||A.getImageData(0,0,t.width,t.height)),t}catch{this.context.logger.info("Unable to clone video as it is tainted",e)}var i=e.ownerDocument.createElement("canvas");return i.width=e.offsetWidth,i.height=e.offsetHeight,i},r.prototype.appendChildNode=function(e,t,A){(!Ki(t)||!rb(t)&&!t.hasAttribute(zf)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(t)))&&(!this.options.copyStyles||!Ki(t)||!Sd(t))&&e.appendChild(this.cloneNode(t,A))},r.prototype.cloneChildNodes=function(e,t,A){for(var i=this,n=e.shadowRoot?e.shadowRoot.firstChild:e.firstChild;n;n=n.nextSibling)if(Ki(n)&&Vf(n)&&typeof n.assignedNodes=="function"){var s=n.assignedNodes();s.length&&s.forEach(function(a){return i.appendChildNode(t,a,A)})}else this.appendChildNode(t,n,A)},r.prototype.cloneNode=function(e,t){if(Hf(e))return document.createTextNode(e.data);if(!e.ownerDocument)return e.cloneNode(!1);var A=e.ownerDocument.defaultView;if(A&&Ki(e)&&(Ic(e)||xa(e))){var i=this.createElementClone(e);i.style.transitionProperty="none";var n=A.getComputedStyle(e),s=A.getComputedStyle(e,":before"),a=A.getComputedStyle(e,":after");this.referenceElement===e&&Ic(i)&&(this.clonedReferenceElement=i),fh(i)&&mb(i);var o=this.counters.parse(new ud(this.context,n)),l=this.resolvePseudoContent(e,i,s,zn.BEFORE);Fd(e)&&(t=!0),Ud(e)||this.cloneChildNodes(e,i,t),l&&i.insertBefore(l,i.firstChild);var c=this.resolvePseudoContent(e,i,a,zn.AFTER);return c&&i.appendChild(c),this.counters.pop(o),(n&&(this.options.copyStyles||xa(e))&&!Of(e)||t)&&dl(n,i),(e.scrollTop!==0||e.scrollLeft!==0)&&this.scrolledElements.push([i,e.scrollLeft,e.scrollTop]),(Da(e)||Ha(e))&&(Da(i)||Ha(i))&&(i.value=e.value),i}return e.cloneNode(!1)},r.prototype.resolvePseudoContent=function(e,t,A,i){var n=this;if(A){var s=A.content,a=t.ownerDocument;if(!(!a||!s||s==="none"||s==="-moz-alt-content"||A.display==="none")){this.counters.parse(new ud(this.context,A));var o=new $C(this.context,A),l=a.createElement("html2canvaspseudoelement");dl(A,l),o.content.forEach(function(u){if(u.type===0)l.appendChild(a.createTextNode(u.value));else if(u.type===22){var h=a.createElement("img");h.src=u.value,h.style.opacity="1",l.appendChild(h)}else if(u.type===18){if(u.name==="attr"){var p=u.values.filter(at);p.length&&l.appendChild(a.createTextNode(e.getAttribute(p[0].value)||""))}else if(u.name==="counter"){var f=u.values.filter(sn),m=f[0],g=f[1];if(m&&at(m)){var d=n.counters.getCounterValue(m.value),B=g&&at(g)?Sc.parse(n.context,g.value):3;l.appendChild(a.createTextNode($n(d,B,!1)))}}else if(u.name==="counters"){var v=u.values.filter(sn),m=v[0],y=v[1],g=v[2];if(m&&at(m)){var x=n.counters.getCounterValues(m.value),w=g&&at(g)?Sc.parse(n.context,g.value):3,M=y&&y.type===0?y.value:"",S=x.map(function(F){return $n(F,w,!1)}).join(M);l.appendChild(a.createTextNode(S))}}}else if(u.type===20)switch(u.value){case"open-quote":l.appendChild(a.createTextNode(hd(o.quotes,n.quoteDepth++,!0)));break;case"close-quote":l.appendChild(a.createTextNode(hd(o.quotes,--n.quoteDepth,!1)));break;default:l.appendChild(a.createTextNode(u.value))}}),l.className=Rc+" "+Dc;var c=i===zn.BEFORE?" "+Rc:" "+Dc;return xa(t)?t.className.baseValue+=c:t.className+=c,l}}},r.destroy=function(e){return e.parentNode?(e.parentNode.removeChild(e),!0):!1},r})(),zn;(function(r){r[r.BEFORE=0]="BEFORE",r[r.AFTER=1]="AFTER"})(zn||(zn={}));var ab=function(r,e){var t=r.createElement("iframe");return t.className="html2canvas-container",t.style.visibility="hidden",t.style.position="fixed",t.style.left="-10000px",t.style.top="0px",t.style.border="0",t.width=e.width.toString(),t.height=e.height.toString(),t.scrolling="no",t.setAttribute(zf,"true"),r.body.appendChild(t),t},ob=function(r){return new Promise(function(e){if(r.complete){e();return}if(!r.src){e();return}r.onload=e,r.onerror=e})},lb=function(r){return Promise.all([].slice.call(r.images,0).map(ob))},cb=function(r){return new Promise(function(e,t){var A=r.contentWindow;if(!A)return t("No window assigned for iframe");var i=A.document;A.onload=r.onload=function(){A.onload=r.onload=null;var n=setInterval(function(){i.body.childNodes.length>0&&i.readyState==="complete"&&(clearInterval(n),e(r))},50)}})},hb=["all","d","content"],dl=function(r,e){for(var t=r.length-1;t>=0;t--){var A=r.item(t);hb.indexOf(A)===-1&&e.style.setProperty(A,r.getPropertyValue(A))}return e},ub=function(r){var e="";return r&&(e+="<!DOCTYPE ",r.name&&(e+=r.name),r.internalSubset&&(e+=r.internalSubset),r.publicId&&(e+='"'+r.publicId+'"'),r.systemId&&(e+='"'+r.systemId+'"'),e+=">"),e},db=function(r,e,t){r&&r.defaultView&&(e!==r.defaultView.pageXOffset||t!==r.defaultView.pageYOffset)&&r.defaultView.scrollTo(e,t)},pb=function(r){var e=r[0],t=r[1],A=r[2];e.scrollLeft=t,e.scrollTop=A},fb=":before",gb=":after",Rc="___html2canvas___pseudoelement_before",Dc="___html2canvas___pseudoelement_after",Hd=`{
    content: "" !important;
    display: none !important;
}`,mb=function(r){Bb(r,"."+Rc+fb+Hd+`
         .`+Dc+gb+Hd)},Bb=function(r,e){var t=r.ownerDocument;if(t){var A=t.createElement("style");A.textContent=e,r.appendChild(A)}},kf=(function(){function r(){}return r.getOrigin=function(e){var t=r._link;return t?(t.href=e,t.href=t.href,t.protocol+t.hostname+t.port):"about:blank"},r.isSameOrigin=function(e){return r.getOrigin(e)===r._origin},r.setContext=function(e){r._link=e.document.createElement("a"),r._origin=r.getOrigin(e.location.href)},r._origin="about:blank",r})(),wb=(function(){function r(e,t){this.context=e,this._options=t,this._cache={}}return r.prototype.addImage=function(e){var t=Promise.resolve();return this.has(e)||(fl(e)||xb(e))&&(this._cache[e]=this.loadImage(e)).catch(function(){}),t},r.prototype.match=function(e){return this._cache[e]},r.prototype.loadImage=function(e){return $t(this,void 0,void 0,function(){var t,A,i,n,s=this;return jt(this,function(a){switch(a.label){case 0:return t=kf.isSameOrigin(e),A=!pl(e)&&this._options.useCORS===!0&&Gt.SUPPORT_CORS_IMAGES&&!t,i=!pl(e)&&!t&&!fl(e)&&typeof this._options.proxy=="string"&&Gt.SUPPORT_CORS_XHR&&!A,!t&&this._options.allowTaint===!1&&!pl(e)&&!fl(e)&&!i&&!A?[2]:(n=e,i?[4,this.proxy(n)]:[3,2]);case 1:n=a.sent(),a.label=2;case 2:return this.context.logger.debug("Added image "+e.substring(0,256)),[4,new Promise(function(o,l){var c=new Image;c.onload=function(){return o(c)},c.onerror=l,(Cb(n)||A)&&(c.crossOrigin="anonymous"),c.src=n,c.complete===!0&&setTimeout(function(){return o(c)},500),s._options.imageTimeout>0&&setTimeout(function(){return l("Timed out ("+s._options.imageTimeout+"ms) loading image")},s._options.imageTimeout)})];case 3:return[2,a.sent()]}})})},r.prototype.has=function(e){return typeof this._cache[e]<"u"},r.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},r.prototype.proxy=function(e){var t=this,A=this._options.proxy;if(!A)throw new Error("No proxy defined");var i=e.substring(0,256);return new Promise(function(n,s){var a=Gt.SUPPORT_RESPONSE_TYPE?"blob":"text",o=new XMLHttpRequest;o.onload=function(){if(o.status===200)if(a==="text")n(o.response);else{var u=new FileReader;u.addEventListener("load",function(){return n(u.result)},!1),u.addEventListener("error",function(h){return s(h)},!1),u.readAsDataURL(o.response)}else s("Failed to proxy resource "+i+" with status code "+o.status)},o.onerror=s;var l=A.indexOf("?")>-1?"&":"?";if(o.open("GET",""+A+l+"url="+encodeURIComponent(e)+"&responseType="+a),a!=="text"&&o instanceof XMLHttpRequest&&(o.responseType=a),t._options.imageTimeout){var c=t._options.imageTimeout;o.timeout=c,o.ontimeout=function(){return s("Timed out ("+c+"ms) proxying "+i)}}o.send()})},r})(),vb=/^data:image\/svg\+xml/i,yb=/^data:image\/.*;base64,/i,_b=/^data:image\/.*/i,xb=function(r){return Gt.SUPPORT_SVG_DRAWING||!Eb(r)},pl=function(r){return _b.test(r)},Cb=function(r){return yb.test(r)},fl=function(r){return r.substr(0,4)==="blob"},Eb=function(r){return r.substr(-3).toLowerCase()==="svg"||vb.test(r)},he=(function(){function r(e,t){this.type=0,this.x=e,this.y=t}return r.prototype.add=function(e,t){return new r(this.x+e,this.y+t)},r})(),Ri=function(r,e,t){return new he(r.x+(e.x-r.x)*t,r.y+(e.y-r.y)*t)},na=(function(){function r(e,t,A,i){this.type=1,this.start=e,this.startControl=t,this.endControl=A,this.end=i}return r.prototype.subdivide=function(e,t){var A=Ri(this.start,this.startControl,e),i=Ri(this.startControl,this.endControl,e),n=Ri(this.endControl,this.end,e),s=Ri(A,i,e),a=Ri(i,n,e),o=Ri(s,a,e);return t?new r(this.start,A,s,o):new r(o,a,n,this.end)},r.prototype.add=function(e,t){return new r(this.start.add(e,t),this.startControl.add(e,t),this.endControl.add(e,t),this.end.add(e,t))},r.prototype.reverse=function(){return new r(this.end,this.endControl,this.startControl,this.start)},r})(),xA=function(r){return r.type===1},bb=(function(){function r(e){var t=e.styles,A=e.bounds,i=Rn(t.borderTopLeftRadius,A.width,A.height),n=i[0],s=i[1],a=Rn(t.borderTopRightRadius,A.width,A.height),o=a[0],l=a[1],c=Rn(t.borderBottomRightRadius,A.width,A.height),u=c[0],h=c[1],p=Rn(t.borderBottomLeftRadius,A.width,A.height),f=p[0],m=p[1],g=[];g.push((n+o)/A.width),g.push((f+u)/A.width),g.push((s+m)/A.height),g.push((l+h)/A.height);var d=Math.max.apply(Math,g);d>1&&(n/=d,s/=d,o/=d,l/=d,u/=d,h/=d,f/=d,m/=d);var B=A.width-o,v=A.height-h,y=A.width-u,x=A.height-m,w=t.borderTopWidth,M=t.borderRightWidth,S=t.borderBottomWidth,C=t.borderLeftWidth,_=ut(t.paddingTop,e.bounds.width),F=ut(t.paddingRight,e.bounds.width),T=ut(t.paddingBottom,e.bounds.width),I=ut(t.paddingLeft,e.bounds.width);this.topLeftBorderDoubleOuterBox=n>0||s>0?pt(A.left+C/3,A.top+w/3,n-C/3,s-w/3,rt.TOP_LEFT):new he(A.left+C/3,A.top+w/3),this.topRightBorderDoubleOuterBox=n>0||s>0?pt(A.left+B,A.top+w/3,o-M/3,l-w/3,rt.TOP_RIGHT):new he(A.left+A.width-M/3,A.top+w/3),this.bottomRightBorderDoubleOuterBox=u>0||h>0?pt(A.left+y,A.top+v,u-M/3,h-S/3,rt.BOTTOM_RIGHT):new he(A.left+A.width-M/3,A.top+A.height-S/3),this.bottomLeftBorderDoubleOuterBox=f>0||m>0?pt(A.left+C/3,A.top+x,f-C/3,m-S/3,rt.BOTTOM_LEFT):new he(A.left+C/3,A.top+A.height-S/3),this.topLeftBorderDoubleInnerBox=n>0||s>0?pt(A.left+C*2/3,A.top+w*2/3,n-C*2/3,s-w*2/3,rt.TOP_LEFT):new he(A.left+C*2/3,A.top+w*2/3),this.topRightBorderDoubleInnerBox=n>0||s>0?pt(A.left+B,A.top+w*2/3,o-M*2/3,l-w*2/3,rt.TOP_RIGHT):new he(A.left+A.width-M*2/3,A.top+w*2/3),this.bottomRightBorderDoubleInnerBox=u>0||h>0?pt(A.left+y,A.top+v,u-M*2/3,h-S*2/3,rt.BOTTOM_RIGHT):new he(A.left+A.width-M*2/3,A.top+A.height-S*2/3),this.bottomLeftBorderDoubleInnerBox=f>0||m>0?pt(A.left+C*2/3,A.top+x,f-C*2/3,m-S*2/3,rt.BOTTOM_LEFT):new he(A.left+C*2/3,A.top+A.height-S*2/3),this.topLeftBorderStroke=n>0||s>0?pt(A.left+C/2,A.top+w/2,n-C/2,s-w/2,rt.TOP_LEFT):new he(A.left+C/2,A.top+w/2),this.topRightBorderStroke=n>0||s>0?pt(A.left+B,A.top+w/2,o-M/2,l-w/2,rt.TOP_RIGHT):new he(A.left+A.width-M/2,A.top+w/2),this.bottomRightBorderStroke=u>0||h>0?pt(A.left+y,A.top+v,u-M/2,h-S/2,rt.BOTTOM_RIGHT):new he(A.left+A.width-M/2,A.top+A.height-S/2),this.bottomLeftBorderStroke=f>0||m>0?pt(A.left+C/2,A.top+x,f-C/2,m-S/2,rt.BOTTOM_LEFT):new he(A.left+C/2,A.top+A.height-S/2),this.topLeftBorderBox=n>0||s>0?pt(A.left,A.top,n,s,rt.TOP_LEFT):new he(A.left,A.top),this.topRightBorderBox=o>0||l>0?pt(A.left+B,A.top,o,l,rt.TOP_RIGHT):new he(A.left+A.width,A.top),this.bottomRightBorderBox=u>0||h>0?pt(A.left+y,A.top+v,u,h,rt.BOTTOM_RIGHT):new he(A.left+A.width,A.top+A.height),this.bottomLeftBorderBox=f>0||m>0?pt(A.left,A.top+x,f,m,rt.BOTTOM_LEFT):new he(A.left,A.top+A.height),this.topLeftPaddingBox=n>0||s>0?pt(A.left+C,A.top+w,Math.max(0,n-C),Math.max(0,s-w),rt.TOP_LEFT):new he(A.left+C,A.top+w),this.topRightPaddingBox=o>0||l>0?pt(A.left+Math.min(B,A.width-M),A.top+w,B>A.width+M?0:Math.max(0,o-M),Math.max(0,l-w),rt.TOP_RIGHT):new he(A.left+A.width-M,A.top+w),this.bottomRightPaddingBox=u>0||h>0?pt(A.left+Math.min(y,A.width-C),A.top+Math.min(v,A.height-S),Math.max(0,u-M),Math.max(0,h-S),rt.BOTTOM_RIGHT):new he(A.left+A.width-M,A.top+A.height-S),this.bottomLeftPaddingBox=f>0||m>0?pt(A.left+C,A.top+Math.min(x,A.height-S),Math.max(0,f-C),Math.max(0,m-S),rt.BOTTOM_LEFT):new he(A.left+C,A.top+A.height-S),this.topLeftContentBox=n>0||s>0?pt(A.left+C+I,A.top+w+_,Math.max(0,n-(C+I)),Math.max(0,s-(w+_)),rt.TOP_LEFT):new he(A.left+C+I,A.top+w+_),this.topRightContentBox=o>0||l>0?pt(A.left+Math.min(B,A.width+C+I),A.top+w+_,B>A.width+C+I?0:o-C+I,l-(w+_),rt.TOP_RIGHT):new he(A.left+A.width-(M+F),A.top+w+_),this.bottomRightContentBox=u>0||h>0?pt(A.left+Math.min(y,A.width-(C+I)),A.top+Math.min(v,A.height+w+_),Math.max(0,u-(M+F)),h-(S+T),rt.BOTTOM_RIGHT):new he(A.left+A.width-(M+F),A.top+A.height-(S+T)),this.bottomLeftContentBox=f>0||m>0?pt(A.left+C+I,A.top+x,Math.max(0,f-(C+I)),m-(S+T),rt.BOTTOM_LEFT):new he(A.left+C+I,A.top+A.height-(S+T))}return r})(),rt;(function(r){r[r.TOP_LEFT=0]="TOP_LEFT",r[r.TOP_RIGHT=1]="TOP_RIGHT",r[r.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",r[r.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(rt||(rt={}));var pt=function(r,e,t,A,i){var n=4*((Math.sqrt(2)-1)/3),s=t*n,a=A*n,o=r+t,l=e+A;switch(i){case rt.TOP_LEFT:return new na(new he(r,l),new he(r,l-a),new he(o-s,e),new he(o,e));case rt.TOP_RIGHT:return new na(new he(r,e),new he(r+s,e),new he(o,l-a),new he(o,l));case rt.BOTTOM_RIGHT:return new na(new he(o,e),new he(o,e+a),new he(r+s,l),new he(r,l));case rt.BOTTOM_LEFT:default:return new na(new he(o,l),new he(o-s,l),new he(r,e+a),new he(r,e))}},Pa=function(r){return[r.topLeftBorderBox,r.topRightBorderBox,r.bottomRightBorderBox,r.bottomLeftBorderBox]},Mb=function(r){return[r.topLeftContentBox,r.topRightContentBox,r.bottomRightContentBox,r.bottomLeftContentBox]},Na=function(r){return[r.topLeftPaddingBox,r.topRightPaddingBox,r.bottomRightPaddingBox,r.bottomLeftPaddingBox]},Ub=(function(){function r(e,t,A){this.offsetX=e,this.offsetY=t,this.matrix=A,this.type=0,this.target=6}return r})(),sa=(function(){function r(e,t){this.path=e,this.target=t,this.type=1}return r})(),Sb=(function(){function r(e){this.opacity=e,this.type=2,this.target=6}return r})(),Fb=function(r){return r.type===0},Kf=function(r){return r.type===1},Tb=function(r){return r.type===2},Pd=function(r,e){return r.length===e.length?r.some(function(t,A){return t===e[A]}):!1},Qb=function(r,e,t,A,i){return r.map(function(n,s){switch(s){case 0:return n.add(e,t);case 1:return n.add(e+A,t);case 2:return n.add(e+A,t+i);case 3:return n.add(e,t+i)}return n})},Wf=(function(){function r(e){this.element=e,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}return r})(),Xf=(function(){function r(e,t){if(this.container=e,this.parent=t,this.effects=[],this.curves=new bb(this.container),this.container.styles.opacity<1&&this.effects.push(new Sb(this.container.styles.opacity)),this.container.styles.transform!==null){var A=this.container.bounds.left+this.container.styles.transformOrigin[0].number,i=this.container.bounds.top+this.container.styles.transformOrigin[1].number,n=this.container.styles.transform;this.effects.push(new Ub(A,i,n))}if(this.container.styles.overflowX!==0){var s=Pa(this.curves),a=Na(this.curves);Pd(s,a)?this.effects.push(new sa(s,6)):(this.effects.push(new sa(s,2)),this.effects.push(new sa(a,4)))}}return r.prototype.getEffects=function(e){for(var t=[2,3].indexOf(this.container.styles.position)===-1,A=this.parent,i=this.effects.slice(0);A;){var n=A.effects.filter(function(o){return!Kf(o)});if(t||A.container.styles.position!==0||!A.parent){if(i.unshift.apply(i,n),t=[2,3].indexOf(A.container.styles.position)===-1,A.container.styles.overflowX!==0){var s=Pa(A.curves),a=Na(A.curves);Pd(s,a)||i.unshift(new sa(a,6))}}else i.unshift.apply(i,n);A=A.parent}return i.filter(function(o){return Tt(o.target,e)})},r})(),Hc=function(r,e,t,A){r.container.elements.forEach(function(i){var n=Tt(i.flags,4),s=Tt(i.flags,2),a=new Xf(i,r);Tt(i.styles.display,2048)&&A.push(a);var o=Tt(i.flags,8)?[]:A;if(n||s){var l=n||i.styles.isPositioned()?t:e,c=new Wf(a);if(i.styles.isPositioned()||i.styles.opacity<1||i.styles.isTransformed()){var u=i.styles.zIndex.order;if(u<0){var h=0;l.negativeZIndex.some(function(f,m){return u>f.element.container.styles.zIndex.order?(h=m,!1):h>0}),l.negativeZIndex.splice(h,0,c)}else if(u>0){var p=0;l.positiveZIndex.some(function(f,m){return u>=f.element.container.styles.zIndex.order?(p=m+1,!1):p>0}),l.positiveZIndex.splice(p,0,c)}else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(c)}else i.styles.isFloating()?l.nonPositionedFloats.push(c):l.nonPositionedInlineLevel.push(c);Hc(a,c,n?c:t,o)}else i.styles.isInlineLevel()?e.inlineLevel.push(a):e.nonInlineLevel.push(a),Hc(a,e,t,o);Tt(i.flags,8)&&jf(i,o)})},jf=function(r,e){for(var t=r instanceof Qc?r.start:1,A=r instanceof Qc?r.reversed:!1,i=0;i<e.length;i++){var n=e[i];n.container instanceof Tf&&typeof n.container.value=="number"&&n.container.value!==0&&(t=n.container.value),n.listValue=$n(t,n.container.styles.listStyleType,!0),t+=A?-1:1}},Ib=function(r){var e=new Xf(r,null),t=new Wf(e),A=[];return Hc(e,t,t,A),jf(e.container,A),t},Nd=function(r,e){switch(e){case 0:return MA(r.topLeftBorderBox,r.topLeftPaddingBox,r.topRightBorderBox,r.topRightPaddingBox);case 1:return MA(r.topRightBorderBox,r.topRightPaddingBox,r.bottomRightBorderBox,r.bottomRightPaddingBox);case 2:return MA(r.bottomRightBorderBox,r.bottomRightPaddingBox,r.bottomLeftBorderBox,r.bottomLeftPaddingBox);case 3:default:return MA(r.bottomLeftBorderBox,r.bottomLeftPaddingBox,r.topLeftBorderBox,r.topLeftPaddingBox)}},Lb=function(r,e){switch(e){case 0:return MA(r.topLeftBorderBox,r.topLeftBorderDoubleOuterBox,r.topRightBorderBox,r.topRightBorderDoubleOuterBox);case 1:return MA(r.topRightBorderBox,r.topRightBorderDoubleOuterBox,r.bottomRightBorderBox,r.bottomRightBorderDoubleOuterBox);case 2:return MA(r.bottomRightBorderBox,r.bottomRightBorderDoubleOuterBox,r.bottomLeftBorderBox,r.bottomLeftBorderDoubleOuterBox);case 3:default:return MA(r.bottomLeftBorderBox,r.bottomLeftBorderDoubleOuterBox,r.topLeftBorderBox,r.topLeftBorderDoubleOuterBox)}},Rb=function(r,e){switch(e){case 0:return MA(r.topLeftBorderDoubleInnerBox,r.topLeftPaddingBox,r.topRightBorderDoubleInnerBox,r.topRightPaddingBox);case 1:return MA(r.topRightBorderDoubleInnerBox,r.topRightPaddingBox,r.bottomRightBorderDoubleInnerBox,r.bottomRightPaddingBox);case 2:return MA(r.bottomRightBorderDoubleInnerBox,r.bottomRightPaddingBox,r.bottomLeftBorderDoubleInnerBox,r.bottomLeftPaddingBox);case 3:default:return MA(r.bottomLeftBorderDoubleInnerBox,r.bottomLeftPaddingBox,r.topLeftBorderDoubleInnerBox,r.topLeftPaddingBox)}},Db=function(r,e){switch(e){case 0:return aa(r.topLeftBorderStroke,r.topRightBorderStroke);case 1:return aa(r.topRightBorderStroke,r.bottomRightBorderStroke);case 2:return aa(r.bottomRightBorderStroke,r.bottomLeftBorderStroke);case 3:default:return aa(r.bottomLeftBorderStroke,r.topLeftBorderStroke)}},aa=function(r,e){var t=[];return xA(r)?t.push(r.subdivide(.5,!1)):t.push(r),xA(e)?t.push(e.subdivide(.5,!0)):t.push(e),t},MA=function(r,e,t,A){var i=[];return xA(r)?i.push(r.subdivide(.5,!1)):i.push(r),xA(t)?i.push(t.subdivide(.5,!0)):i.push(t),xA(A)?i.push(A.subdivide(.5,!0).reverse()):i.push(A),xA(e)?i.push(e.subdivide(.5,!1).reverse()):i.push(e),i},Yf=function(r){var e=r.bounds,t=r.styles;return e.add(t.borderLeftWidth,t.borderTopWidth,-(t.borderRightWidth+t.borderLeftWidth),-(t.borderTopWidth+t.borderBottomWidth))},Oa=function(r){var e=r.styles,t=r.bounds,A=ut(e.paddingLeft,t.width),i=ut(e.paddingRight,t.width),n=ut(e.paddingTop,t.width),s=ut(e.paddingBottom,t.width);return t.add(A+e.borderLeftWidth,n+e.borderTopWidth,-(e.borderRightWidth+e.borderLeftWidth+A+i),-(e.borderTopWidth+e.borderBottomWidth+n+s))},Hb=function(r,e){return r===0?e.bounds:r===2?Oa(e):Yf(e)},Pb=function(r,e){return r===0?e.bounds:r===2?Oa(e):Yf(e)},gl=function(r,e,t){var A=Hb(Vi(r.styles.backgroundOrigin,e),r),i=Pb(Vi(r.styles.backgroundClip,e),r),n=Nb(Vi(r.styles.backgroundSize,e),t,A),s=n[0],a=n[1],o=Rn(Vi(r.styles.backgroundPosition,e),A.width-s,A.height-a),l=Ob(Vi(r.styles.backgroundRepeat,e),o,n,A,i),c=Math.round(A.left+o[0]),u=Math.round(A.top+o[1]);return[l,c,u,s,a]},Di=function(r){return at(r)&&r.value===Ji.AUTO},oa=function(r){return typeof r=="number"},Nb=function(r,e,t){var A=e[0],i=e[1],n=e[2],s=r[0],a=r[1];if(!s)return[0,0];if(Mt(s)&&a&&Mt(a))return[ut(s,t.width),ut(a,t.height)];var o=oa(n);if(at(s)&&(s.value===Ji.CONTAIN||s.value===Ji.COVER)){if(oa(n)){var l=t.width/t.height;return l<n!=(s.value===Ji.COVER)?[t.width,t.width/n]:[t.height*n,t.height]}return[t.width,t.height]}var c=oa(A),u=oa(i),h=c||u;if(Di(s)&&(!a||Di(a))){if(c&&u)return[A,i];if(!o&&!h)return[t.width,t.height];if(h&&o){var p=c?A:i*n,f=u?i:A/n;return[p,f]}var m=c?A:t.width,g=u?i:t.height;return[m,g]}if(o){var d=0,B=0;return Mt(s)?d=ut(s,t.width):Mt(a)&&(B=ut(a,t.height)),Di(s)?d=B*n:(!a||Di(a))&&(B=d/n),[d,B]}var v=null,y=null;if(Mt(s)?v=ut(s,t.width):a&&Mt(a)&&(y=ut(a,t.height)),v!==null&&(!a||Di(a))&&(y=c&&u?v/A*i:t.height),y!==null&&Di(s)&&(v=c&&u?y/i*A:t.width),v!==null&&y!==null)return[v,y];throw new Error("Unable to calculate background-size for element")},Vi=function(r,e){var t=r[e];return typeof t>"u"?r[0]:t},Ob=function(r,e,t,A,i){var n=e[0],s=e[1],a=t[0],o=t[1];switch(r){case 2:return[new he(Math.round(A.left),Math.round(A.top+s)),new he(Math.round(A.left+A.width),Math.round(A.top+s)),new he(Math.round(A.left+A.width),Math.round(o+A.top+s)),new he(Math.round(A.left),Math.round(o+A.top+s))];case 3:return[new he(Math.round(A.left+n),Math.round(A.top)),new he(Math.round(A.left+n+a),Math.round(A.top)),new he(Math.round(A.left+n+a),Math.round(A.height+A.top)),new he(Math.round(A.left+n),Math.round(A.height+A.top))];case 1:return[new he(Math.round(A.left+n),Math.round(A.top+s)),new he(Math.round(A.left+n+a),Math.round(A.top+s)),new he(Math.round(A.left+n+a),Math.round(A.top+s+o)),new he(Math.round(A.left+n),Math.round(A.top+s+o))];default:return[new he(Math.round(i.left),Math.round(i.top)),new he(Math.round(i.left+i.width),Math.round(i.top)),new he(Math.round(i.left+i.width),Math.round(i.height+i.top)),new he(Math.round(i.left),Math.round(i.height+i.top))]}},Vb="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",Od="Hidden Text",Gb=(function(){function r(e){this._data={},this._document=e}return r.prototype.parseMetrics=function(e,t){var A=this._document.createElement("div"),i=this._document.createElement("img"),n=this._document.createElement("span"),s=this._document.body;A.style.visibility="hidden",A.style.fontFamily=e,A.style.fontSize=t,A.style.margin="0",A.style.padding="0",A.style.whiteSpace="nowrap",s.appendChild(A),i.src=Vb,i.width=1,i.height=1,i.style.margin="0",i.style.padding="0",i.style.verticalAlign="baseline",n.style.fontFamily=e,n.style.fontSize=t,n.style.margin="0",n.style.padding="0",n.appendChild(this._document.createTextNode(Od)),A.appendChild(n),A.appendChild(i);var a=i.offsetTop-n.offsetTop+2;A.removeChild(n),A.appendChild(this._document.createTextNode(Od)),A.style.lineHeight="normal",i.style.verticalAlign="super";var o=i.offsetTop-A.offsetTop+2;return s.removeChild(A),{baseline:a,middle:o}},r.prototype.getMetrics=function(e,t){var A=e+" "+t;return typeof this._data[A]>"u"&&(this._data[A]=this.parseMetrics(e,t)),this._data[A]},r})(),qf=(function(){function r(e,t){this.context=e,this.options=t}return r})(),zb=1e4,kb=(function(r){NA(e,r);function e(t,A){var i=r.call(this,t,A)||this;return i._activeEffects=[],i.canvas=A.canvas?A.canvas:document.createElement("canvas"),i.ctx=i.canvas.getContext("2d"),A.canvas||(i.canvas.width=Math.floor(A.width*A.scale),i.canvas.height=Math.floor(A.height*A.scale),i.canvas.style.width=A.width+"px",i.canvas.style.height=A.height+"px"),i.fontMetrics=new Gb(document),i.ctx.scale(i.options.scale,i.options.scale),i.ctx.translate(-A.x,-A.y),i.ctx.textBaseline="bottom",i._activeEffects=[],i.context.logger.debug("Canvas renderer initialized ("+A.width+"x"+A.height+") with scale "+A.scale),i}return e.prototype.applyEffects=function(t){for(var A=this;this._activeEffects.length;)this.popEffect();t.forEach(function(i){return A.applyEffect(i)})},e.prototype.applyEffect=function(t){this.ctx.save(),Tb(t)&&(this.ctx.globalAlpha=t.opacity),Fb(t)&&(this.ctx.translate(t.offsetX,t.offsetY),this.ctx.transform(t.matrix[0],t.matrix[1],t.matrix[2],t.matrix[3],t.matrix[4],t.matrix[5]),this.ctx.translate(-t.offsetX,-t.offsetY)),Kf(t)&&(this.path(t.path),this.ctx.clip()),this._activeEffects.push(t)},e.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},e.prototype.renderStack=function(t){return $t(this,void 0,void 0,function(){var A;return jt(this,function(i){switch(i.label){case 0:return A=t.element.container.styles,A.isVisible()?[4,this.renderStackContent(t)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2]}})})},e.prototype.renderNode=function(t){return $t(this,void 0,void 0,function(){return jt(this,function(A){switch(A.label){case 0:if(Tt(t.container.flags,16))debugger;return t.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(t)]:[3,3];case 1:return A.sent(),[4,this.renderNodeContent(t)];case 2:A.sent(),A.label=3;case 3:return[2]}})})},e.prototype.renderTextWithLetterSpacing=function(t,A,i){var n=this;if(A===0)this.ctx.fillText(t.text,t.bounds.left,t.bounds.top+i);else{var s=dh(t.text);s.reduce(function(a,o){return n.ctx.fillText(o,a,t.bounds.top+i),a+n.ctx.measureText(o).width},t.bounds.left)}},e.prototype.createFontStyle=function(t){var A=t.fontVariant.filter(function(s){return s==="normal"||s==="small-caps"}).join(""),i=Yb(t.fontFamily).join(", "),n=is(t.fontSize)?""+t.fontSize.number+t.fontSize.unit:t.fontSize.number+"px";return[[t.fontStyle,A,t.fontWeight,n,i].join(" "),i,n]},e.prototype.renderTextNode=function(t,A){return $t(this,void 0,void 0,function(){var i,n,s,a,o,l,c,u,h=this;return jt(this,function(p){return i=this.createFontStyle(A),n=i[0],s=i[1],a=i[2],this.ctx.font=n,this.ctx.direction=A.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",o=this.fontMetrics.getMetrics(s,a),l=o.baseline,c=o.middle,u=A.paintOrder,t.textBounds.forEach(function(f){u.forEach(function(m){switch(m){case 0:h.ctx.fillStyle=Dt(A.color),h.renderTextWithLetterSpacing(f,A.letterSpacing,l);var g=A.textShadow;g.length&&f.text.trim().length&&(g.slice(0).reverse().forEach(function(d){h.ctx.shadowColor=Dt(d.color),h.ctx.shadowOffsetX=d.offsetX.number*h.options.scale,h.ctx.shadowOffsetY=d.offsetY.number*h.options.scale,h.ctx.shadowBlur=d.blur.number,h.renderTextWithLetterSpacing(f,A.letterSpacing,l)}),h.ctx.shadowColor="",h.ctx.shadowOffsetX=0,h.ctx.shadowOffsetY=0,h.ctx.shadowBlur=0),A.textDecorationLine.length&&(h.ctx.fillStyle=Dt(A.textDecorationColor||A.color),A.textDecorationLine.forEach(function(d){switch(d){case 1:h.ctx.fillRect(f.bounds.left,Math.round(f.bounds.top+l),f.bounds.width,1);break;case 2:h.ctx.fillRect(f.bounds.left,Math.round(f.bounds.top),f.bounds.width,1);break;case 3:h.ctx.fillRect(f.bounds.left,Math.ceil(f.bounds.top+c),f.bounds.width,1);break}}));break;case 1:A.webkitTextStrokeWidth&&f.text.trim().length&&(h.ctx.strokeStyle=Dt(A.webkitTextStrokeColor),h.ctx.lineWidth=A.webkitTextStrokeWidth,h.ctx.lineJoin=window.chrome?"miter":"round",h.ctx.strokeText(f.text,f.bounds.left,f.bounds.top+l)),h.ctx.strokeStyle="",h.ctx.lineWidth=0,h.ctx.lineJoin="miter";break}})}),[2]})})},e.prototype.renderReplacedElement=function(t,A,i){if(i&&t.intrinsicWidth>0&&t.intrinsicHeight>0){var n=Oa(t),s=Na(A);this.path(s),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(i,0,0,t.intrinsicWidth,t.intrinsicHeight,n.left,n.top,n.width,n.height),this.ctx.restore()}},e.prototype.renderNodeContent=function(t){return $t(this,void 0,void 0,function(){var A,i,n,s,a,o,B,B,l,c,u,h,y,p,f,x,m,g,d,B,v,y,x;return jt(this,function(w){switch(w.label){case 0:this.applyEffects(t.getEffects(4)),A=t.container,i=t.curves,n=A.styles,s=0,a=A.textNodes,w.label=1;case 1:return s<a.length?(o=a[s],[4,this.renderTextNode(o,n)]):[3,4];case 2:w.sent(),w.label=3;case 3:return s++,[3,1];case 4:if(!(A instanceof Uf))return[3,8];w.label=5;case 5:return w.trys.push([5,7,,8]),[4,this.context.cache.match(A.src)];case 6:return B=w.sent(),this.renderReplacedElement(A,i,B),[3,8];case 7:return w.sent(),this.context.logger.error("Error loading image "+A.src),[3,8];case 8:if(A instanceof Sf&&this.renderReplacedElement(A,i,A.canvas),!(A instanceof Ff))return[3,12];w.label=9;case 9:return w.trys.push([9,11,,12]),[4,this.context.cache.match(A.svg)];case 10:return B=w.sent(),this.renderReplacedElement(A,i,B),[3,12];case 11:return w.sent(),this.context.logger.error("Error loading svg "+A.svg.substring(0,255)),[3,12];case 12:return A instanceof Lf&&A.tree?(l=new e(this.context,{scale:this.options.scale,backgroundColor:A.backgroundColor,x:0,y:0,width:A.width,height:A.height}),[4,l.render(A.tree)]):[3,14];case 13:c=w.sent(),A.width&&A.height&&this.ctx.drawImage(c,0,0,A.width,A.height,A.bounds.left,A.bounds.top,A.bounds.width,A.bounds.height),w.label=14;case 14:if(A instanceof ph&&(u=Math.min(A.bounds.width,A.bounds.height),A.type===La?A.checked&&(this.ctx.save(),this.path([new he(A.bounds.left+u*.39363,A.bounds.top+u*.79),new he(A.bounds.left+u*.16,A.bounds.top+u*.5549),new he(A.bounds.left+u*.27347,A.bounds.top+u*.44071),new he(A.bounds.left+u*.39694,A.bounds.top+u*.5649),new he(A.bounds.left+u*.72983,A.bounds.top+u*.23),new he(A.bounds.left+u*.84,A.bounds.top+u*.34085),new he(A.bounds.left+u*.39363,A.bounds.top+u*.79)]),this.ctx.fillStyle=Dt(Md),this.ctx.fill(),this.ctx.restore()):A.type===Ra&&A.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(A.bounds.left+u/2,A.bounds.top+u/2,u/4,0,Math.PI*2,!0),this.ctx.fillStyle=Dt(Md),this.ctx.fill(),this.ctx.restore())),Kb(A)&&A.value.length){switch(h=this.createFontStyle(n),y=h[0],p=h[1],f=this.fontMetrics.getMetrics(y,p).baseline,this.ctx.font=y,this.ctx.fillStyle=Dt(n.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=Xb(A.styles.textAlign),x=Oa(A),m=0,A.styles.textAlign){case 1:m+=x.width/2;break;case 2:m+=x.width;break}g=x.add(m,0,0,-x.height/2+1),this.ctx.save(),this.path([new he(x.left,x.top),new he(x.left+x.width,x.top),new he(x.left+x.width,x.top+x.height),new he(x.left,x.top+x.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new Gn(A.value,g),n.letterSpacing,f),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!Tt(A.styles.display,2048))return[3,20];if(A.styles.listStyleImage===null)return[3,19];if(d=A.styles.listStyleImage,d.type!==0)return[3,18];B=void 0,v=d.url,w.label=15;case 15:return w.trys.push([15,17,,18]),[4,this.context.cache.match(v)];case 16:return B=w.sent(),this.ctx.drawImage(B,A.bounds.left-(B.width+10),A.bounds.top),[3,18];case 17:return w.sent(),this.context.logger.error("Error loading list-style-image "+v),[3,18];case 18:return[3,20];case 19:t.listValue&&A.styles.listStyleType!==-1&&(y=this.createFontStyle(n)[0],this.ctx.font=y,this.ctx.fillStyle=Dt(n.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",x=new xr(A.bounds.left,A.bounds.top+ut(A.styles.paddingTop,A.bounds.width),A.bounds.width,ld(n.lineHeight,n.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new Gn(t.listValue,x),n.letterSpacing,ld(n.lineHeight,n.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),w.label=20;case 20:return[2]}})})},e.prototype.renderStackContent=function(t){return $t(this,void 0,void 0,function(){var A,i,d,n,s,d,a,o,d,l,c,d,u,h,d,p,f,d,m,g,d;return jt(this,function(B){switch(B.label){case 0:if(Tt(t.element.container.flags,16))debugger;return[4,this.renderNodeBackgroundAndBorders(t.element)];case 1:B.sent(),A=0,i=t.negativeZIndex,B.label=2;case 2:return A<i.length?(d=i[A],[4,this.renderStack(d)]):[3,5];case 3:B.sent(),B.label=4;case 4:return A++,[3,2];case 5:return[4,this.renderNodeContent(t.element)];case 6:B.sent(),n=0,s=t.nonInlineLevel,B.label=7;case 7:return n<s.length?(d=s[n],[4,this.renderNode(d)]):[3,10];case 8:B.sent(),B.label=9;case 9:return n++,[3,7];case 10:a=0,o=t.nonPositionedFloats,B.label=11;case 11:return a<o.length?(d=o[a],[4,this.renderStack(d)]):[3,14];case 12:B.sent(),B.label=13;case 13:return a++,[3,11];case 14:l=0,c=t.nonPositionedInlineLevel,B.label=15;case 15:return l<c.length?(d=c[l],[4,this.renderStack(d)]):[3,18];case 16:B.sent(),B.label=17;case 17:return l++,[3,15];case 18:u=0,h=t.inlineLevel,B.label=19;case 19:return u<h.length?(d=h[u],[4,this.renderNode(d)]):[3,22];case 20:B.sent(),B.label=21;case 21:return u++,[3,19];case 22:p=0,f=t.zeroOrAutoZIndexOrTransformedOrOpacity,B.label=23;case 23:return p<f.length?(d=f[p],[4,this.renderStack(d)]):[3,26];case 24:B.sent(),B.label=25;case 25:return p++,[3,23];case 26:m=0,g=t.positiveZIndex,B.label=27;case 27:return m<g.length?(d=g[m],[4,this.renderStack(d)]):[3,30];case 28:B.sent(),B.label=29;case 29:return m++,[3,27];case 30:return[2]}})})},e.prototype.mask=function(t){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(t.slice(0).reverse()),this.ctx.closePath()},e.prototype.path=function(t){this.ctx.beginPath(),this.formatPath(t),this.ctx.closePath()},e.prototype.formatPath=function(t){var A=this;t.forEach(function(i,n){var s=xA(i)?i.start:i;n===0?A.ctx.moveTo(s.x,s.y):A.ctx.lineTo(s.x,s.y),xA(i)&&A.ctx.bezierCurveTo(i.startControl.x,i.startControl.y,i.endControl.x,i.endControl.y,i.end.x,i.end.y)})},e.prototype.renderRepeat=function(t,A,i,n){this.path(t),this.ctx.fillStyle=A,this.ctx.translate(i,n),this.ctx.fill(),this.ctx.translate(-i,-n)},e.prototype.resizeImage=function(t,A,i){var n;if(t.width===A&&t.height===i)return t;var s=(n=this.canvas.ownerDocument)!==null&&n!==void 0?n:document,a=s.createElement("canvas");a.width=Math.max(1,A),a.height=Math.max(1,i);var o=a.getContext("2d");return o.drawImage(t,0,0,t.width,t.height,0,0,A,i),a},e.prototype.renderBackgroundImage=function(t){return $t(this,void 0,void 0,function(){var A,i,n,s,a,o;return jt(this,function(l){switch(l.label){case 0:A=t.styles.backgroundImage.length-1,i=function(c){var u,h,p,_,R,k,I,L,S,f,_,R,k,I,L,m,g,d,B,v,y,x,w,M,S,C,_,F,T,I,L,P,R,k,z,X,te,ve,re,Ne,je,Ke;return jt(this,function(j){switch(j.label){case 0:if(c.type!==0)return[3,5];u=void 0,h=c.url,j.label=1;case 1:return j.trys.push([1,3,,4]),[4,n.context.cache.match(h)];case 2:return u=j.sent(),[3,4];case 3:return j.sent(),n.context.logger.error("Error loading background-image "+h),[3,4];case 4:return u&&(p=gl(t,A,[u.width,u.height,u.width/u.height]),_=p[0],R=p[1],k=p[2],I=p[3],L=p[4],S=n.ctx.createPattern(n.resizeImage(u,I,L),"repeat"),n.renderRepeat(_,S,R,k)),[3,6];case 5:Fx(c)?(f=gl(t,A,[null,null,null]),_=f[0],R=f[1],k=f[2],I=f[3],L=f[4],m=Ex(c.angle,I,L),g=m[0],d=m[1],B=m[2],v=m[3],y=m[4],x=document.createElement("canvas"),x.width=I,x.height=L,w=x.getContext("2d"),M=w.createLinearGradient(d,v,B,y),ad(c.stops,g).forEach(function(q){return M.addColorStop(q.stop,Dt(q.color))}),w.fillStyle=M,w.fillRect(0,0,I,L),I>0&&L>0&&(S=n.ctx.createPattern(x,"repeat"),n.renderRepeat(_,S,R,k))):Tx(c)&&(C=gl(t,A,[null,null,null]),_=C[0],F=C[1],T=C[2],I=C[3],L=C[4],P=c.position.length===0?[ch]:c.position,R=ut(P[0],I),k=ut(P[P.length-1],L),z=bx(c,R,k,I,L),X=z[0],te=z[1],X>0&&te>0&&(ve=n.ctx.createRadialGradient(F+R,T+k,0,F+R,T+k,X),ad(c.stops,X*2).forEach(function(q){return ve.addColorStop(q.stop,Dt(q.color))}),n.path(_),n.ctx.fillStyle=ve,X!==te?(re=t.bounds.left+.5*t.bounds.width,Ne=t.bounds.top+.5*t.bounds.height,je=te/X,Ke=1/je,n.ctx.save(),n.ctx.translate(re,Ne),n.ctx.transform(1,0,0,je,0,0),n.ctx.translate(-re,-Ne),n.ctx.fillRect(F,Ke*(T-Ne)+Ne,I,L*Ke),n.ctx.restore()):n.ctx.fill())),j.label=6;case 6:return A--,[2]}})},n=this,s=0,a=t.styles.backgroundImage.slice(0).reverse(),l.label=1;case 1:return s<a.length?(o=a[s],[5,i(o)]):[3,4];case 2:l.sent(),l.label=3;case 3:return s++,[3,1];case 4:return[2]}})})},e.prototype.renderSolidBorder=function(t,A,i){return $t(this,void 0,void 0,function(){return jt(this,function(n){return this.path(Nd(i,A)),this.ctx.fillStyle=Dt(t),this.ctx.fill(),[2]})})},e.prototype.renderDoubleBorder=function(t,A,i,n){return $t(this,void 0,void 0,function(){var s,a;return jt(this,function(o){switch(o.label){case 0:return A<3?[4,this.renderSolidBorder(t,i,n)]:[3,2];case 1:return o.sent(),[2];case 2:return s=Lb(n,i),this.path(s),this.ctx.fillStyle=Dt(t),this.ctx.fill(),a=Rb(n,i),this.path(a),this.ctx.fill(),[2]}})})},e.prototype.renderNodeBackgroundAndBorders=function(t){return $t(this,void 0,void 0,function(){var A,i,n,s,a,o,l,c,u=this;return jt(this,function(h){switch(h.label){case 0:return this.applyEffects(t.getEffects(2)),A=t.container.styles,i=!zr(A.backgroundColor)||A.backgroundImage.length,n=[{style:A.borderTopStyle,color:A.borderTopColor,width:A.borderTopWidth},{style:A.borderRightStyle,color:A.borderRightColor,width:A.borderRightWidth},{style:A.borderBottomStyle,color:A.borderBottomColor,width:A.borderBottomWidth},{style:A.borderLeftStyle,color:A.borderLeftColor,width:A.borderLeftWidth}],s=Wb(Vi(A.backgroundClip,0),t.curves),i||A.boxShadow.length?(this.ctx.save(),this.path(s),this.ctx.clip(),zr(A.backgroundColor)||(this.ctx.fillStyle=Dt(A.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(t.container)]):[3,2];case 1:h.sent(),this.ctx.restore(),A.boxShadow.slice(0).reverse().forEach(function(p){u.ctx.save();var f=Pa(t.curves),m=p.inset?0:zb,g=Qb(f,-m+(p.inset?1:-1)*p.spread.number,(p.inset?1:-1)*p.spread.number,p.spread.number*(p.inset?-2:2),p.spread.number*(p.inset?-2:2));p.inset?(u.path(f),u.ctx.clip(),u.mask(g)):(u.mask(f),u.ctx.clip(),u.path(g)),u.ctx.shadowOffsetX=p.offsetX.number+m,u.ctx.shadowOffsetY=p.offsetY.number,u.ctx.shadowColor=Dt(p.color),u.ctx.shadowBlur=p.blur.number,u.ctx.fillStyle=p.inset?Dt(p.color):"rgba(0,0,0,1)",u.ctx.fill(),u.ctx.restore()}),h.label=2;case 2:a=0,o=0,l=n,h.label=3;case 3:return o<l.length?(c=l[o],c.style!==0&&!zr(c.color)&&c.width>0?c.style!==2?[3,5]:[4,this.renderDashedDottedBorder(c.color,c.width,a,t.curves,2)]:[3,11]):[3,13];case 4:return h.sent(),[3,11];case 5:return c.style!==3?[3,7]:[4,this.renderDashedDottedBorder(c.color,c.width,a,t.curves,3)];case 6:return h.sent(),[3,11];case 7:return c.style!==4?[3,9]:[4,this.renderDoubleBorder(c.color,c.width,a,t.curves)];case 8:return h.sent(),[3,11];case 9:return[4,this.renderSolidBorder(c.color,a,t.curves)];case 10:h.sent(),h.label=11;case 11:a++,h.label=12;case 12:return o++,[3,3];case 13:return[2]}})})},e.prototype.renderDashedDottedBorder=function(t,A,i,n,s){return $t(this,void 0,void 0,function(){var a,o,l,c,u,h,p,f,m,g,d,B,v,y,x,w,x,w;return jt(this,function(M){return this.ctx.save(),a=Db(n,i),o=Nd(n,i),s===2&&(this.path(o),this.ctx.clip()),xA(o[0])?(l=o[0].start.x,c=o[0].start.y):(l=o[0].x,c=o[0].y),xA(o[1])?(u=o[1].end.x,h=o[1].end.y):(u=o[1].x,h=o[1].y),i===0||i===2?p=Math.abs(l-u):p=Math.abs(c-h),this.ctx.beginPath(),s===3?this.formatPath(a):this.formatPath(o.slice(0,2)),f=A<3?A*3:A*2,m=A<3?A*2:A,s===3&&(f=A,m=A),g=!0,p<=f*2?g=!1:p<=f*2+m?(d=p/(2*f+m),f*=d,m*=d):(B=Math.floor((p+m)/(f+m)),v=(p-B*f)/(B-1),y=(p-(B+1)*f)/B,m=y<=0||Math.abs(m-v)<Math.abs(m-y)?v:y),g&&(s===3?this.ctx.setLineDash([0,f+m]):this.ctx.setLineDash([f,m])),s===3?(this.ctx.lineCap="round",this.ctx.lineWidth=A):this.ctx.lineWidth=A*2+1.1,this.ctx.strokeStyle=Dt(t),this.ctx.stroke(),this.ctx.setLineDash([]),s===2&&(xA(o[0])&&(x=o[3],w=o[0],this.ctx.beginPath(),this.formatPath([new he(x.end.x,x.end.y),new he(w.start.x,w.start.y)]),this.ctx.stroke()),xA(o[1])&&(x=o[1],w=o[2],this.ctx.beginPath(),this.formatPath([new he(x.end.x,x.end.y),new he(w.start.x,w.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},e.prototype.render=function(t){return $t(this,void 0,void 0,function(){var A;return jt(this,function(i){switch(i.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=Dt(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),A=Ib(t),[4,this.renderStack(A)];case 1:return i.sent(),this.applyEffects([]),[2,this.canvas]}})})},e})(qf),Kb=function(r){return r instanceof If||r instanceof Qf?!0:r instanceof ph&&r.type!==Ra&&r.type!==La},Wb=function(r,e){switch(r){case 0:return Pa(e);case 2:return Mb(e);case 1:default:return Na(e)}},Xb=function(r){switch(r){case 1:return"center";case 2:return"right";case 0:default:return"left"}},jb=["-apple-system","system-ui"],Yb=function(r){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?r.filter(function(e){return jb.indexOf(e)===-1}):r},qb=(function(r){NA(e,r);function e(t,A){var i=r.call(this,t,A)||this;return i.canvas=A.canvas?A.canvas:document.createElement("canvas"),i.ctx=i.canvas.getContext("2d"),i.options=A,i.canvas.width=Math.floor(A.width*A.scale),i.canvas.height=Math.floor(A.height*A.scale),i.canvas.style.width=A.width+"px",i.canvas.style.height=A.height+"px",i.ctx.scale(i.options.scale,i.options.scale),i.ctx.translate(-A.x,-A.y),i.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+A.width+"x"+A.height+" at "+A.x+","+A.y+") with scale "+A.scale),i}return e.prototype.render=function(t){return $t(this,void 0,void 0,function(){var A,i;return jt(this,function(n){switch(n.label){case 0:return A=Tc(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,t),[4,Jb(A)];case 1:return i=n.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=Dt(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(i,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},e})(qf),Jb=function(r){return new Promise(function(e,t){var A=new Image;A.onload=function(){e(A)},A.onerror=t,A.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(r))})},Zb=(function(){function r(e){var t=e.id,A=e.enabled;this.id=t,this.enabled=A,this.start=Date.now()}return r.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.debug=="function"?console.debug.apply(console,Os([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},r.prototype.getTime=function(){return Date.now()-this.start},r.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&typeof window<"u"&&window.console&&typeof console.info=="function"&&console.info.apply(console,Os([this.id,this.getTime()+"ms"],e))},r.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.warn=="function"?console.warn.apply(console,Os([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},r.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.error=="function"?console.error.apply(console,Os([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},r.instances={},r})(),$b=(function(){function r(e,t){var A;this.windowBounds=t,this.instanceName="#"+r.instanceCount++,this.logger=new Zb({id:this.instanceName,enabled:e.logging}),this.cache=(A=e.cache)!==null&&A!==void 0?A:new wb(this,e)}return r.instanceCount=1,r})(),eM=function(r,e){return e===void 0&&(e={}),tM(r,e)};typeof window<"u"&&kf.setContext(window);var tM=function(r,e){return $t(void 0,void 0,void 0,function(){var t,A,i,n,s,a,o,l,c,u,h,p,f,m,g,d,B,v,y,x,M,w,M,S,C,_,F,T,I,L,P,R,k,z,X,te,ve,re,Ne,je;return jt(this,function(Ke){switch(Ke.label){case 0:if(!r||typeof r!="object")return[2,Promise.reject("Invalid element provided as first argument")];if(t=r.ownerDocument,!t)throw new Error("Element is not attached to a Document");if(A=t.defaultView,!A)throw new Error("Document is not attached to a Window");return i={allowTaint:(S=e.allowTaint)!==null&&S!==void 0?S:!1,imageTimeout:(C=e.imageTimeout)!==null&&C!==void 0?C:15e3,proxy:e.proxy,useCORS:(_=e.useCORS)!==null&&_!==void 0?_:!1},n=gc({logging:(F=e.logging)!==null&&F!==void 0?F:!0,cache:e.cache},i),s={windowWidth:(T=e.windowWidth)!==null&&T!==void 0?T:A.innerWidth,windowHeight:(I=e.windowHeight)!==null&&I!==void 0?I:A.innerHeight,scrollX:(L=e.scrollX)!==null&&L!==void 0?L:A.pageXOffset,scrollY:(P=e.scrollY)!==null&&P!==void 0?P:A.pageYOffset},a=new xr(s.scrollX,s.scrollY,s.windowWidth,s.windowHeight),o=new $b(n,a),l=(R=e.foreignObjectRendering)!==null&&R!==void 0?R:!1,c={allowTaint:(k=e.allowTaint)!==null&&k!==void 0?k:!1,onclone:e.onclone,ignoreElements:e.ignoreElements,inlineImages:l,copyStyles:l},o.logger.debug("Starting document clone with size "+a.width+"x"+a.height+" scrolled to "+-a.left+","+-a.top),u=new Dd(o,r,c),h=u.clonedReferenceElement,h?[4,u.toIFrame(t,a)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return p=Ke.sent(),f=fh(h)||Ab(h)?Qy(h.ownerDocument):Za(o,h),m=f.width,g=f.height,d=f.left,B=f.top,v=AM(o,h,e.backgroundColor),y={canvas:e.canvas,backgroundColor:v,scale:(X=(z=e.scale)!==null&&z!==void 0?z:A.devicePixelRatio)!==null&&X!==void 0?X:1,x:((te=e.x)!==null&&te!==void 0?te:0)+d,y:((ve=e.y)!==null&&ve!==void 0?ve:0)+B,width:(re=e.width)!==null&&re!==void 0?re:Math.ceil(m),height:(Ne=e.height)!==null&&Ne!==void 0?Ne:Math.ceil(g)},l?(o.logger.debug("Document cloned, using foreign object rendering"),M=new qb(o,y),[4,M.render(h)]):[3,3];case 2:return x=Ke.sent(),[3,5];case 3:return o.logger.debug("Document cloned, element located at "+d+","+B+" with size "+m+"x"+g+" using computed rendering"),o.logger.debug("Starting DOM parsing"),w=Df(o,h),v===w.styles.backgroundColor&&(w.styles.backgroundColor=_r.TRANSPARENT),o.logger.debug("Starting renderer for element at "+y.x+","+y.y+" with size "+y.width+"x"+y.height),M=new kb(o,y),[4,M.render(w)];case 4:x=Ke.sent(),Ke.label=5;case 5:return(!((je=e.removeContainer)!==null&&je!==void 0)||je)&&(Dd.destroy(p)||o.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),o.logger.debug("Finished rendering"),[2,x]}})})},AM=function(r,e,t){var A=e.ownerDocument,i=A.documentElement?On(r,getComputedStyle(A.documentElement).backgroundColor):_r.TRANSPARENT,n=A.body?On(r,getComputedStyle(A.body).backgroundColor):_r.TRANSPARENT,s=typeof t=="string"?On(r,t):t===null?_r.TRANSPARENT:4294967295;return e===A.documentElement?zr(i)?zr(n)?s:n:i:s};class HA{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new b);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new b);const A=this.elements,i=e.x,n=e.y,s=e.z;return t.x=A[0]*i+A[1]*n+A[2]*s,t.y=A[3]*i+A[4]*n+A[5]*s,t.z=A[6]*i+A[7]*n+A[8]*s,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new HA);const A=this.elements,i=e.elements,n=t.elements,s=A[0],a=A[1],o=A[2],l=A[3],c=A[4],u=A[5],h=A[6],p=A[7],f=A[8],m=i[0],g=i[1],d=i[2],B=i[3],v=i[4],y=i[5],x=i[6],w=i[7],M=i[8];return n[0]=s*m+a*B+o*x,n[1]=s*g+a*v+o*w,n[2]=s*d+a*y+o*M,n[3]=l*m+c*B+u*x,n[4]=l*g+c*v+u*w,n[5]=l*d+c*y+u*M,n[6]=h*m+p*B+f*x,n[7]=h*g+p*v+f*w,n[8]=h*d+p*y+f*M,t}scale(e,t){t===void 0&&(t=new HA);const A=this.elements,i=t.elements;for(let n=0;n!==3;n++)i[3*n+0]=e.x*A[3*n+0],i[3*n+1]=e.y*A[3*n+1],i[3*n+2]=e.z*A[3*n+2];return t}solve(e,t){t===void 0&&(t=new b);const A=3,i=4,n=[];let s,a;for(s=0;s<A*i;s++)n.push(0);for(s=0;s<3;s++)for(a=0;a<3;a++)n[s+i*a]=this.elements[s+3*a];n[3]=e.x,n[7]=e.y,n[11]=e.z;let o=3;const l=o;let c;const u=4;let h;do{if(s=l-o,n[s+i*s]===0){for(a=s+1;a<l;a++)if(n[s+i*a]!==0){c=u;do h=u-c,n[h+i*s]+=n[h+i*a];while(--c);break}}if(n[s+i*s]!==0)for(a=s+1;a<l;a++){const p=n[s+i*a]/n[s+i*s];c=u;do h=u-c,n[h+i*a]=h<=s?0:n[h+i*a]-n[h+i*s]*p;while(--c)}}while(--o);if(t.z=n[2*i+3]/n[2*i+2],t.y=(n[1*i+3]-n[1*i+2]*t.z)/n[1*i+1],t.x=(n[0*i+3]-n[0*i+2]*t.z-n[0*i+1]*t.y)/n[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,A){if(A===void 0)return this.elements[t+3*e];this.elements[t+3*e]=A}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";for(let t=0;t<9;t++)e+=this.elements[t]+",";return e}reverse(e){e===void 0&&(e=new HA);const t=3,A=6,i=rM;let n,s;for(n=0;n<3;n++)for(s=0;s<3;s++)i[n+A*s]=this.elements[n+3*s];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let a=3;const o=a;let l;const c=A;let u;do{if(n=o-a,i[n+A*n]===0){for(s=n+1;s<o;s++)if(i[n+A*s]!==0){l=c;do u=c-l,i[u+A*n]+=i[u+A*s];while(--l);break}}if(i[n+A*n]!==0)for(s=n+1;s<o;s++){const h=i[n+A*s]/i[n+A*n];l=c;do u=c-l,i[u+A*s]=u<=n?0:i[u+A*s]-i[u+A*n]*h;while(--l)}}while(--a);n=2;do{s=n-1;do{const h=i[n+A*s]/i[n+A*n];l=A;do u=A-l,i[u+A*s]=i[u+A*s]-i[u+A*n]*h;while(--l)}while(s--)}while(--n);n=2;do{const h=1/i[n+A*n];l=A;do u=A-l,i[u+A*n]=i[u+A*n]*h;while(--l)}while(n--);n=2;do{s=2;do{if(u=i[t+s+A*n],isNaN(u)||u===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(n,s,u)}while(s--)}while(n--);return e}setRotationFromQuaternion(e){const t=e.x,A=e.y,i=e.z,n=e.w,s=t+t,a=A+A,o=i+i,l=t*s,c=t*a,u=t*o,h=A*a,p=A*o,f=i*o,m=n*s,g=n*a,d=n*o,B=this.elements;return B[0]=1-(h+f),B[1]=c-d,B[2]=u+g,B[3]=c+d,B[4]=1-(l+f),B[5]=p-m,B[6]=u-g,B[7]=p+m,B[8]=1-(l+h),this}transpose(e){e===void 0&&(e=new HA);const t=this.elements,A=e.elements;let i;return A[0]=t[0],A[4]=t[4],A[8]=t[8],i=t[1],A[1]=t[3],A[3]=i,i=t[2],A[2]=t[6],A[6]=i,i=t[5],A[5]=t[7],A[7]=i,e}}const rM=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class b{constructor(e,t,A){e===void 0&&(e=0),t===void 0&&(t=0),A===void 0&&(A=0),this.x=e,this.y=t,this.z=A}cross(e,t){t===void 0&&(t=new b);const A=e.x,i=e.y,n=e.z,s=this.x,a=this.y,o=this.z;return t.x=a*n-o*i,t.y=o*A-s*n,t.z=s*i-a*A,t}set(e,t,A){return this.x=e,this.y=t,this.z=A,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new b(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new b(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new HA([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,A=this.z,i=Math.sqrt(e*e+t*t+A*A);if(i>0){const n=1/i;this.x*=n,this.y*=n,this.z*=n}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new b);const t=this.x,A=this.y,i=this.z;let n=Math.sqrt(t*t+A*A+i*i);return n>0?(n=1/n,e.x=t*n,e.y=A*n,e.z=i*n):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,A=this.z;return Math.sqrt(e*e+t*t+A*A)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,A=this.y,i=this.z,n=e.x,s=e.y,a=e.z;return Math.sqrt((n-t)*(n-t)+(s-A)*(s-A)+(a-i)*(a-i))}distanceSquared(e){const t=this.x,A=this.y,i=this.z,n=e.x,s=e.y,a=e.z;return(n-t)*(n-t)+(s-A)*(s-A)+(a-i)*(a-i)}scale(e,t){t===void 0&&(t=new b);const A=this.x,i=this.y,n=this.z;return t.x=e*A,t.y=e*i,t.z=e*n,t}vmul(e,t){return t===void 0&&(t=new b),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,A){return A===void 0&&(A=new b),A.x=this.x+e*t.x,A.y=this.y+e*t.y,A.z=this.z+e*t.z,A}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new b),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const A=this.length();if(A>0){const i=iM,n=1/A;i.set(this.x*n,this.y*n,this.z*n);const s=nM;Math.abs(i.x)<.9?(s.set(1,0,0),i.cross(s,e)):(s.set(0,1,0),i.cross(s,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,A){const i=this.x,n=this.y,s=this.z;A.x=i+(e.x-i)*t,A.y=n+(e.y-n)*t,A.z=s+(e.z-s)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Vd),Vd.almostEquals(e,t)}clone(){return new b(this.x,this.y,this.z)}}b.ZERO=new b(0,0,0);b.UNIT_X=new b(1,0,0);b.UNIT_Y=new b(0,1,0);b.UNIT_Z=new b(0,0,1);const iM=new b,nM=new b,Vd=new b;class wA{constructor(e){e===void 0&&(e={}),this.lowerBound=new b,this.upperBound=new b,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,A,i){const n=this.lowerBound,s=this.upperBound,a=A;n.copy(e[0]),a&&a.vmult(n,n),s.copy(n);for(let o=1;o<e.length;o++){let l=e[o];a&&(a.vmult(l,Gd),l=Gd),l.x>s.x&&(s.x=l.x),l.x<n.x&&(n.x=l.x),l.y>s.y&&(s.y=l.y),l.y<n.y&&(n.y=l.y),l.z>s.z&&(s.z=l.z),l.z<n.z&&(n.z=l.z)}return t&&(t.vadd(n,n),t.vadd(s,s)),i&&(n.x-=i,n.y-=i,n.z-=i,s.x+=i,s.y+=i,s.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new wA().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,A=this.upperBound,i=e.lowerBound,n=e.upperBound,s=i.x<=A.x&&A.x<=n.x||t.x<=n.x&&n.x<=A.x,a=i.y<=A.y&&A.y<=n.y||t.y<=n.y&&n.y<=A.y,o=i.z<=A.z&&A.z<=n.z||t.z<=n.z&&n.z<=A.z;return s&&a&&o}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,A=this.upperBound,i=e.lowerBound,n=e.upperBound;return t.x<=i.x&&A.x>=n.x&&t.y<=i.y&&A.y>=n.y&&t.z<=i.z&&A.z>=n.z}getCorners(e,t,A,i,n,s,a,o){const l=this.lowerBound,c=this.upperBound;e.copy(l),t.set(c.x,l.y,l.z),A.set(c.x,c.y,l.z),i.set(l.x,c.y,c.z),n.set(c.x,l.y,c.z),s.set(l.x,c.y,l.z),a.set(l.x,l.y,c.z),o.copy(c)}toLocalFrame(e,t){const A=zd,i=A[0],n=A[1],s=A[2],a=A[3],o=A[4],l=A[5],c=A[6],u=A[7];this.getCorners(i,n,s,a,o,l,c,u);for(let h=0;h!==8;h++){const p=A[h];e.pointToLocal(p,p)}return t.setFromPoints(A)}toWorldFrame(e,t){const A=zd,i=A[0],n=A[1],s=A[2],a=A[3],o=A[4],l=A[5],c=A[6],u=A[7];this.getCorners(i,n,s,a,o,l,c,u);for(let h=0;h!==8;h++){const p=A[h];e.pointToWorld(p,p)}return t.setFromPoints(A)}overlapsRay(e){const{direction:t,from:A}=e,i=1/t.x,n=1/t.y,s=1/t.z,a=(this.lowerBound.x-A.x)*i,o=(this.upperBound.x-A.x)*i,l=(this.lowerBound.y-A.y)*n,c=(this.upperBound.y-A.y)*n,u=(this.lowerBound.z-A.z)*s,h=(this.upperBound.z-A.z)*s,p=Math.max(Math.max(Math.min(a,o),Math.min(l,c)),Math.min(u,h)),f=Math.min(Math.min(Math.max(a,o),Math.max(l,c)),Math.max(u,h));return!(f<0||p>f)}}const Gd=new b,zd=[new b,new b,new b,new b,new b,new b,new b,new b];class kd{constructor(){this.matrix=[]}get(e,t){let{index:A}=e,{index:i}=t;if(i>A){const n=i;i=A,A=n}return this.matrix[(A*(A+1)>>1)+i-1]}set(e,t,A){let{index:i}=e,{index:n}=t;if(n>i){const s=n;n=i,i=s}this.matrix[(i*(i+1)>>1)+n-1]=A?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class Jf{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const A=this._listeners;return A[e]===void 0&&(A[e]=[]),A[e].includes(t)||A[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const A=this._listeners;return!!(A[e]!==void 0&&A[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const A=this._listeners;if(A[e]===void 0)return this;const i=A[e].indexOf(t);return i!==-1&&A[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const t=this._listeners[e.type];if(t!==void 0){e.target=this;for(let A=0,i=t.length;A<i;A++)t[A].call(this,e)}return this}}class Ct{constructor(e,t,A,i){e===void 0&&(e=0),t===void 0&&(t=0),A===void 0&&(A=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=A,this.w=i}set(e,t,A,i){return this.x=e,this.y=t,this.z=A,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const A=Math.sin(t*.5);return this.x=e.x*A,this.y=e.y*A,this.z=e.z*A,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new b),this.normalize();const t=2*Math.acos(this.w),A=Math.sqrt(1-this.w*this.w);return A<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/A,e.y=this.y/A,e.z=this.z/A),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const A=sM,i=aM;e.tangents(A,i),this.setFromAxisAngle(A,Math.PI)}else{const A=e.cross(t);this.x=A.x,this.y=A.y,this.z=A.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new Ct);const A=this.x,i=this.y,n=this.z,s=this.w,a=e.x,o=e.y,l=e.z,c=e.w;return t.x=A*c+s*a+i*l-n*o,t.y=i*c+s*o+n*a-A*l,t.z=n*c+s*l+A*o-i*a,t.w=s*c-A*a-i*o-n*l,t}inverse(e){e===void 0&&(e=new Ct);const t=this.x,A=this.y,i=this.z,n=this.w;this.conjugate(e);const s=1/(t*t+A*A+i*i+n*n);return e.x*=s,e.y*=s,e.z*=s,e.w*=s,e}conjugate(e){return e===void 0&&(e=new Ct),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new b);const A=e.x,i=e.y,n=e.z,s=this.x,a=this.y,o=this.z,l=this.w,c=l*A+a*n-o*i,u=l*i+o*A-s*n,h=l*n+s*i-a*A,p=-s*A-a*i-o*n;return t.x=c*l+p*-s+u*-o-h*-a,t.y=u*l+p*-a+h*-s-c*-o,t.z=h*l+p*-o+c*-a-u*-s,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let A,i,n;const s=this.x,a=this.y,o=this.z,l=this.w;switch(t){case"YZX":const c=s*a+o*l;if(c>.499&&(A=2*Math.atan2(s,l),i=Math.PI/2,n=0),c<-.499&&(A=-2*Math.atan2(s,l),i=-Math.PI/2,n=0),A===void 0){const u=s*s,h=a*a,p=o*o;A=Math.atan2(2*a*l-2*s*o,1-2*h-2*p),i=Math.asin(2*c),n=Math.atan2(2*s*l-2*a*o,1-2*u-2*p)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=A,e.z=i,e.x=n}setFromEuler(e,t,A,i){i===void 0&&(i="XYZ");const n=Math.cos(e/2),s=Math.cos(t/2),a=Math.cos(A/2),o=Math.sin(e/2),l=Math.sin(t/2),c=Math.sin(A/2);return i==="XYZ"?(this.x=o*s*a+n*l*c,this.y=n*l*a-o*s*c,this.z=n*s*c+o*l*a,this.w=n*s*a-o*l*c):i==="YXZ"?(this.x=o*s*a+n*l*c,this.y=n*l*a-o*s*c,this.z=n*s*c-o*l*a,this.w=n*s*a+o*l*c):i==="ZXY"?(this.x=o*s*a-n*l*c,this.y=n*l*a+o*s*c,this.z=n*s*c+o*l*a,this.w=n*s*a-o*l*c):i==="ZYX"?(this.x=o*s*a-n*l*c,this.y=n*l*a+o*s*c,this.z=n*s*c-o*l*a,this.w=n*s*a+o*l*c):i==="YZX"?(this.x=o*s*a+n*l*c,this.y=n*l*a+o*s*c,this.z=n*s*c-o*l*a,this.w=n*s*a-o*l*c):i==="XZY"&&(this.x=o*s*a-n*l*c,this.y=n*l*a-o*s*c,this.z=n*s*c+o*l*a,this.w=n*s*a+o*l*c),this}clone(){return new Ct(this.x,this.y,this.z,this.w)}slerp(e,t,A){A===void 0&&(A=new Ct);const i=this.x,n=this.y,s=this.z,a=this.w;let o=e.x,l=e.y,c=e.z,u=e.w,h,p,f,m,g;return p=i*o+n*l+s*c+a*u,p<0&&(p=-p,o=-o,l=-l,c=-c,u=-u),1-p>1e-6?(h=Math.acos(p),f=Math.sin(h),m=Math.sin((1-t)*h)/f,g=Math.sin(t*h)/f):(m=1-t,g=t),A.x=m*i+g*o,A.y=m*n+g*l,A.z=m*s+g*c,A.w=m*a+g*u,A}integrate(e,t,A,i){i===void 0&&(i=new Ct);const n=e.x*A.x,s=e.y*A.y,a=e.z*A.z,o=this.x,l=this.y,c=this.z,u=this.w,h=t*.5;return i.x+=h*(n*u+s*c-a*l),i.y+=h*(s*u+a*o-n*c),i.z+=h*(a*u+n*l-s*o),i.w+=h*(-n*o-s*l-a*c),i}}const sM=new b,aM=new b,oM={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class we{constructor(e){e===void 0&&(e={}),this.id=we.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,A,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}we.idCounter=0;we.types=oM;class At{constructor(e){e===void 0&&(e={}),this.position=new b,this.quaternion=new Ct,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return At.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return At.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new b),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,A,i){return i===void 0&&(i=new b),A.vsub(e,i),t.conjugate(Kd),Kd.vmult(i,i),i}static pointToWorldFrame(e,t,A,i){return i===void 0&&(i=new b),t.vmult(A,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,A){return A===void 0&&(A=new b),e.vmult(t,A),A}static vectorToLocalFrame(e,t,A,i){return i===void 0&&(i=new b),t.w*=-1,t.vmult(A,i),t.w*=-1,i}}const Kd=new Ct;class kn extends we{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:A=[],normals:i=[],axes:n,boundingSphereRadius:s}=e;super({type:we.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=A,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),s?this.boundingSphereRadius=s:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=n?n.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,A=this.uniqueEdges;A.length=0;const i=new b;for(let n=0;n!==e.length;n++){const s=e[n],a=s.length;for(let o=0;o!==a;o++){const l=(o+1)%a;t[s[o]].vsub(t[s[l]],i),i.normalize();let c=!1;for(let u=0;u!==A.length;u++)if(A[u].almostEquals(i)||A[u].almostEquals(i)){c=!0;break}c||A.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new b;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const A=this.vertices[this.faces[e][0]];if(t.dot(A)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const A=this.faces[e],i=this.vertices[A[0]],n=this.vertices[A[1]],s=this.vertices[A[2]];kn.computeNormal(i,n,s,t)}static computeNormal(e,t,A,i){const n=new b,s=new b;t.vsub(e,s),A.vsub(t,n),n.cross(s,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,A,i,n,s,a,o,l){const c=new b;let u=-1,h=-Number.MAX_VALUE;for(let f=0;f<A.faces.length;f++){c.copy(A.faceNormals[f]),n.vmult(c,c);const m=c.dot(s);m>h&&(h=m,u=f)}const p=[];for(let f=0;f<A.faces[u].length;f++){const m=A.vertices[A.faces[u][f]],g=new b;g.copy(m),n.vmult(g,g),i.vadd(g,g),p.push(g)}u>=0&&this.clipFaceAgainstHull(s,e,t,p,a,o,l)}findSeparatingAxis(e,t,A,i,n,s,a,o){const l=new b,c=new b,u=new b,h=new b,p=new b,f=new b;let m=Number.MAX_VALUE;const g=this;if(g.uniqueAxes)for(let d=0;d!==g.uniqueAxes.length;d++){A.vmult(g.uniqueAxes[d],l);const B=g.testSepAxis(l,e,t,A,i,n);if(B===!1)return!1;B<m&&(m=B,s.copy(l))}else{const d=a?a.length:g.faces.length;for(let B=0;B<d;B++){const v=a?a[B]:B;l.copy(g.faceNormals[v]),A.vmult(l,l);const y=g.testSepAxis(l,e,t,A,i,n);if(y===!1)return!1;y<m&&(m=y,s.copy(l))}}if(e.uniqueAxes)for(let d=0;d!==e.uniqueAxes.length;d++){n.vmult(e.uniqueAxes[d],c);const B=g.testSepAxis(c,e,t,A,i,n);if(B===!1)return!1;B<m&&(m=B,s.copy(c))}else{const d=o?o.length:e.faces.length;for(let B=0;B<d;B++){const v=o?o[B]:B;c.copy(e.faceNormals[v]),n.vmult(c,c);const y=g.testSepAxis(c,e,t,A,i,n);if(y===!1)return!1;y<m&&(m=y,s.copy(c))}}for(let d=0;d!==g.uniqueEdges.length;d++){A.vmult(g.uniqueEdges[d],h);for(let B=0;B!==e.uniqueEdges.length;B++)if(n.vmult(e.uniqueEdges[B],p),h.cross(p,f),!f.almostZero()){f.normalize();const v=g.testSepAxis(f,e,t,A,i,n);if(v===!1)return!1;v<m&&(m=v,s.copy(f))}}return i.vsub(t,u),u.dot(s)>0&&s.negate(s),!0}testSepAxis(e,t,A,i,n,s){const a=this;kn.project(a,e,A,i,ml),kn.project(t,e,n,s,Bl);const o=ml[0],l=ml[1],c=Bl[0],u=Bl[1];if(o<u||c<l)return!1;const h=o-u,p=c-l;return h<p?h:p}calculateLocalInertia(e,t){const A=new b,i=new b;this.computeLocalAABB(i,A);const n=A.x-i.x,s=A.y-i.y,a=A.z-i.z;t.x=1/12*e*(2*s*2*s+2*a*2*a),t.y=1/12*e*(2*n*2*n+2*a*2*a),t.z=1/12*e*(2*s*2*s+2*n*2*n)}getPlaneConstantOfFace(e){const t=this.faces[e],A=this.faceNormals[e],i=this.vertices[t[0]];return-A.dot(i)}clipFaceAgainstHull(e,t,A,i,n,s,a){const o=new b,l=new b,c=new b,u=new b,h=new b,p=new b,f=new b,m=new b,g=this,d=[],B=i,v=d;let y=-1,x=Number.MAX_VALUE;for(let _=0;_<g.faces.length;_++){o.copy(g.faceNormals[_]),A.vmult(o,o);const F=o.dot(e);F<x&&(x=F,y=_)}if(y<0)return;const w=g.faces[y];w.connectedFaces=[];for(let _=0;_<g.faces.length;_++)for(let F=0;F<g.faces[_].length;F++)w.indexOf(g.faces[_][F])!==-1&&_!==y&&w.connectedFaces.indexOf(_)===-1&&w.connectedFaces.push(_);const M=w.length;for(let _=0;_<M;_++){const F=g.vertices[w[_]],T=g.vertices[w[(_+1)%M]];F.vsub(T,l),c.copy(l),A.vmult(c,c),t.vadd(c,c),u.copy(this.faceNormals[y]),A.vmult(u,u),t.vadd(u,u),c.cross(u,h),h.negate(h),p.copy(F),A.vmult(p,p),t.vadd(p,p);const I=w.connectedFaces[_];f.copy(this.faceNormals[I]);const L=this.getPlaneConstantOfFace(I);m.copy(f),A.vmult(m,m);const P=L-m.dot(t);for(this.clipFaceAgainstPlane(B,v,m,P);B.length;)B.shift();for(;v.length;)B.push(v.shift())}f.copy(this.faceNormals[y]);const S=this.getPlaneConstantOfFace(y);m.copy(f),A.vmult(m,m);const C=S-m.dot(t);for(let _=0;_<B.length;_++){let F=m.dot(B[_])+C;if(F<=n&&(console.log(`clamped: depth=${F} to minDist=${n}`),F=n),F<=s){const T=B[_];if(F<=1e-6){const I={point:T,normal:m,depth:F};a.push(I)}}}}clipFaceAgainstPlane(e,t,A,i){let n,s;const a=e.length;if(a<2)return t;let o=e[e.length-1],l=e[0];n=A.dot(o)+i;for(let c=0;c<a;c++){if(l=e[c],s=A.dot(l)+i,n<0)if(s<0){const u=new b;u.copy(l),t.push(u)}else{const u=new b;o.lerp(l,n/(n-s),u),t.push(u)}else if(s<0){const u=new b;o.lerp(l,n/(n-s),u),t.push(u),t.push(l)}o=l,n=s}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new b);const A=this.vertices,i=this.worldVertices;for(let n=0;n!==this.vertices.length;n++)t.vmult(A[n],i[n]),e.vadd(i[n],i[n]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const A=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const n=A[i];n.x<e.x?e.x=n.x:n.x>t.x&&(t.x=n.x),n.y<e.y?e.y=n.y:n.y>t.y&&(t.y=n.y),n.z<e.z?e.z=n.z:n.z>t.z&&(t.z=n.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new b);const A=this.faceNormals,i=this.worldFaceNormals;for(let n=0;n!==t;n++)e.vmult(A[n],i[n]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let A=0;A!==t.length;A++){const i=t[A].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,A,i){const n=this.vertices;let s,a,o,l,c,u,h=new b;for(let p=0;p<n.length;p++){h.copy(n[p]),t.vmult(h,h),e.vadd(h,h);const f=h;(s===void 0||f.x<s)&&(s=f.x),(l===void 0||f.x>l)&&(l=f.x),(a===void 0||f.y<a)&&(a=f.y),(c===void 0||f.y>c)&&(c=f.y),(o===void 0||f.z<o)&&(o=f.z),(u===void 0||f.z>u)&&(u=f.z)}A.set(s,a,o),i.set(l,c,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new b);const t=this.vertices;for(let A=0;A<t.length;A++)e.vadd(t[A],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const A=this.vertices.length,i=this.vertices;if(t){for(let n=0;n<A;n++){const s=i[n];t.vmult(s,s)}for(let n=0;n<this.faceNormals.length;n++){const s=this.faceNormals[n];t.vmult(s,s)}}if(e)for(let n=0;n<A;n++){const s=i[n];s.vadd(e,s)}}pointIsInside(e){const t=this.vertices,A=this.faces,i=this.faceNormals,n=new b;this.getAveragePointLocal(n);for(let s=0;s<this.faces.length;s++){let a=i[s];const o=t[A[s][0]],l=new b;e.vsub(o,l);const c=a.dot(l),u=new b;n.vsub(o,u);const h=a.dot(u);if(c<0&&h>0||c>0&&h<0)return!1}return-1}static project(e,t,A,i,n){const s=e.vertices.length,a=lM;let o=0,l=0;const c=cM,u=e.vertices;c.setZero(),At.vectorToLocalFrame(A,i,t,a),At.pointToLocalFrame(A,i,c,c);const h=c.dot(a);l=o=u[0].dot(a);for(let p=1;p<s;p++){const f=u[p].dot(a);f>o&&(o=f),f<l&&(l=f)}if(l-=h,o-=h,l>o){const p=l;l=o,o=p}n[0]=o,n[1]=l}}const ml=[],Bl=[];new b;const lM=new b,cM=new b;class ns extends we{constructor(e){super({type:we.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,A=this.halfExtents.z,i=b,n=[new i(-e,-t,-A),new i(e,-t,-A),new i(e,t,-A),new i(-e,t,-A),new i(-e,-t,A),new i(e,-t,A),new i(e,t,A),new i(-e,t,A)],s=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],o=new kn({vertices:n,faces:s,axes:a});this.convexPolyhedronRepresentation=o,o.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new b),ns.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,A){const i=e;A.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),A.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),A.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const A=e,i=this.halfExtents;if(A[0].set(i.x,0,0),A[1].set(0,i.y,0),A[2].set(0,0,i.z),A[3].set(-i.x,0,0),A[4].set(0,-i.y,0),A[5].set(0,0,-i.z),t!==void 0)for(let n=0;n!==A.length;n++)t.vmult(A[n],A[n]);return A}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,A){const i=this.halfExtents,n=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let s=0;s<n.length;s++)Qr.set(n[s][0],n[s][1],n[s][2]),t.vmult(Qr,Qr),e.vadd(Qr,Qr),A(Qr.x,Qr.y,Qr.z)}calculateWorldAABB(e,t,A,i){const n=this.halfExtents;GA[0].set(n.x,n.y,n.z),GA[1].set(-n.x,n.y,n.z),GA[2].set(-n.x,-n.y,n.z),GA[3].set(-n.x,-n.y,-n.z),GA[4].set(n.x,-n.y,-n.z),GA[5].set(n.x,n.y,-n.z),GA[6].set(-n.x,n.y,-n.z),GA[7].set(n.x,-n.y,n.z);const s=GA[0];t.vmult(s,s),e.vadd(s,s),i.copy(s),A.copy(s);for(let a=1;a<8;a++){const o=GA[a];t.vmult(o,o),e.vadd(o,o);const l=o.x,c=o.y,u=o.z;l>i.x&&(i.x=l),c>i.y&&(i.y=c),u>i.z&&(i.z=u),l<A.x&&(A.x=l),c<A.y&&(A.y=c),u<A.z&&(A.z=u)}}}const Qr=new b,GA=[new b,new b,new b,new b,new b,new b,new b,new b],gh={DYNAMIC:1,STATIC:2,KINEMATIC:4},mh={AWAKE:0,SLEEPY:1,SLEEPING:2};class ge extends Jf{constructor(e){e===void 0&&(e={}),super(),this.id=ge.idCounter++,this.index=-1,this.world=null,this.vlambda=new b,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new b,this.previousPosition=new b,this.interpolatedPosition=new b,this.initPosition=new b,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new b,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new b,this.force=new b;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?ge.STATIC:ge.DYNAMIC,typeof e.type==typeof ge.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=ge.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new b,this.quaternion=new Ct,this.initQuaternion=new Ct,this.previousQuaternion=new Ct,this.interpolatedQuaternion=new Ct,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new b,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new b,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new b,this.invInertia=new b,this.invInertiaWorld=new HA,this.invMassSolve=0,this.invInertiaSolve=new b,this.invInertiaWorldSolve=new HA,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new b(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new b(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new wA,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new b,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=ge.AWAKE,this.wakeUpAfterNarrowphase=!1,e===ge.SLEEPING&&this.dispatchEvent(ge.wakeupEvent)}sleep(){this.sleepState=ge.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,A=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===ge.AWAKE&&A<i?(this.sleepState=ge.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(ge.sleepyEvent)):t===ge.SLEEPY&&A>i?this.wakeUp():t===ge.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ge.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ge.SLEEPING||this.type===ge.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new b),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new b),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new b),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new b),this.quaternion.vmult(e,t),t}addShape(e,t,A){const i=new b,n=new Ct;return t&&i.copy(t),A&&n.copy(A),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(n),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,A=e.length;let i=0;for(let n=0;n!==A;n++){const s=e[n];s.updateBoundingSphereRadius();const a=t[n].length(),o=s.boundingSphereRadius;a+o>i&&(i=a+o)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,A=this.shapeOrientations,i=e.length,n=hM,s=uM,a=this.quaternion,o=this.aabb,l=dM;for(let c=0;c!==i;c++){const u=e[c];a.vmult(t[c],n),n.vadd(this.position,n),a.mult(A[c],s),u.calculateWorldAABB(n,s,l.lowerBound,l.upperBound),c===0?o.copy(l):o.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const A=pM,i=fM;A.setRotationFromQuaternion(this.quaternion),A.transpose(i),A.scale(t,A),A.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new b),this.type!==ge.DYNAMIC)return;this.sleepState===ge.SLEEPING&&this.wakeUp();const A=gM;t.cross(e,A),this.force.vadd(e,this.force),this.torque.vadd(A,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new b),this.type!==ge.DYNAMIC)return;const A=mM,i=BM;this.vectorToWorldFrame(e,A),this.vectorToWorldFrame(t,i),this.applyForce(A,i)}applyTorque(e){this.type===ge.DYNAMIC&&(this.sleepState===ge.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new b),this.type!==ge.DYNAMIC)return;this.sleepState===ge.SLEEPING&&this.wakeUp();const A=t,i=wM;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const n=vM;A.cross(e,n),this.invInertiaWorld.vmult(n,n),this.angularVelocity.vadd(n,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new b),this.type!==ge.DYNAMIC)return;const A=yM,i=_M;this.vectorToWorldFrame(e,A),this.vectorToWorldFrame(t,i),this.applyImpulse(A,i)}updateMassProperties(){const e=xM;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,A=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),ns.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!A?1/t.x:0,t.y>0&&!A?1/t.y:0,t.z>0&&!A?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const A=new b;return e.vsub(this.position,A),this.angularVelocity.cross(A,t),this.velocity.vadd(t,t),t}integrate(e,t,A){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ge.DYNAMIC||this.type===ge.KINEMATIC)||this.sleepState===ge.SLEEPING)return;const i=this.velocity,n=this.angularVelocity,s=this.position,a=this.force,o=this.torque,l=this.quaternion,c=this.invMass,u=this.invInertiaWorld,h=this.linearFactor,p=c*e;i.x+=a.x*p*h.x,i.y+=a.y*p*h.y,i.z+=a.z*p*h.z;const f=u.elements,m=this.angularFactor,g=o.x*m.x,d=o.y*m.y,B=o.z*m.z;n.x+=e*(f[0]*g+f[1]*d+f[2]*B),n.y+=e*(f[3]*g+f[4]*d+f[5]*B),n.z+=e*(f[6]*g+f[7]*d+f[8]*B),s.x+=i.x*e,s.y+=i.y*e,s.z+=i.z*e,l.integrate(this.angularVelocity,e,this.angularFactor,l),t&&(A?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}ge.idCounter=0;ge.COLLIDE_EVENT_NAME="collide";ge.DYNAMIC=gh.DYNAMIC;ge.STATIC=gh.STATIC;ge.KINEMATIC=gh.KINEMATIC;ge.AWAKE=mh.AWAKE;ge.SLEEPY=mh.SLEEPY;ge.SLEEPING=mh.SLEEPING;ge.wakeupEvent={type:"wakeup"};ge.sleepyEvent={type:"sleepy"};ge.sleepEvent={type:"sleep"};const hM=new b,uM=new Ct,dM=new wA,pM=new HA,fM=new HA;new HA;const gM=new b,mM=new b,BM=new b,wM=new b,vM=new b,yM=new b,_M=new b,xM=new b;class CM{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,A){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!((e.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&ge.STATIC)!==0||e.sleepState===ge.SLEEPING)&&((t.type&ge.STATIC)!==0||t.sleepState===ge.SLEEPING))}intersectionTest(e,t,A,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,A,i):this.doBoundingSphereBroadphase(e,t,A,i)}doBoundingSphereBroadphase(e,t,A,i){const n=EM;t.position.vsub(e.position,n);const s=(e.boundingRadius+t.boundingRadius)**2;n.lengthSquared()<s&&(A.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,A,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(A.push(e),i.push(t))}makePairsUnique(e,t){const A=bM,i=MM,n=UM,s=e.length;for(let a=0;a!==s;a++)i[a]=e[a],n[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==s;a++){const o=i[a].id,l=n[a].id,c=o<l?`${o},${l}`:`${l},${o}`;A[c]=a,A.keys.push(c)}for(let a=0;a!==A.keys.length;a++){const o=A.keys.pop(),l=A[o];e.push(i[l]),t.push(n[l]),delete A[o]}}setWorld(e){}static boundingSphereCheck(e,t){const A=new b;e.position.vsub(t.position,A);const i=e.shapes[0],n=t.shapes[0];return Math.pow(i.boundingSphereRadius+n.boundingSphereRadius,2)>A.lengthSquared()}aabbQuery(e,t,A){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const EM=new b;new b;new Ct;new b;const bM={keys:[]},MM=[],UM=[];new b;new b;new b;class SM extends CM{constructor(){super()}collisionPairs(e,t,A){const i=e.bodies,n=i.length;let s,a;for(let o=0;o!==n;o++)for(let l=0;l!==o;l++)s=i[o],a=i[l],this.needBroadphaseCollision(s,a)&&this.intersectionTest(s,a,t,A)}aabbQuery(e,t,A){A===void 0&&(A=[]);for(let i=0;i<e.bodies.length;i++){const n=e.bodies[i];n.aabbNeedsUpdate&&n.updateAABB(),n.aabb.overlaps(t)&&A.push(n)}return A}}class Va{constructor(){this.rayFromWorld=new b,this.rayToWorld=new b,this.hitNormalWorld=new b,this.hitPointWorld=new b,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,A,i,n,s,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(A),this.hitPointWorld.copy(i),this.shape=n,this.body=s,this.distance=a}}let Zf,$f,eg,tg,Ag,rg,ig;const Bh={CLOSEST:1,ANY:2,ALL:4};Zf=we.types.SPHERE;$f=we.types.PLANE;eg=we.types.BOX;tg=we.types.CYLINDER;Ag=we.types.CONVEXPOLYHEDRON;rg=we.types.HEIGHTFIELD;ig=we.types.TRIMESH;class bt{get[Zf](){return this._intersectSphere}get[$f](){return this._intersectPlane}get[eg](){return this._intersectBox}get[tg](){return this._intersectConvex}get[Ag](){return this._intersectConvex}get[rg](){return this._intersectHeightfield}get[ig](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new b),t===void 0&&(t=new b),this.from=e.clone(),this.to=t.clone(),this.direction=new b,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=bt.ANY,this.result=new Va,this.hasHit=!1,this.callback=A=>{}}intersectWorld(e,t){return this.mode=t.mode||bt.ANY,this.result=t.result||new Va,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Wd),wl.length=0,e.broadphase.aabbQuery(e,Wd,wl),this.intersectBodies(wl),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const A=this.checkCollisionResponse;if(A&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;const i=FM,n=TM;for(let s=0,a=e.shapes.length;s<a;s++){const o=e.shapes[s];if(!(A&&!o.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[s],n),e.quaternion.vmult(e.shapeOffsets[s],i),i.vadd(e.position,i),this.intersectShape(o,n,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let A=0,i=e.length;!this.result.shouldStop&&A<i;A++)this.intersectBody(e[A])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,A,i){const n=this.from;if(KM(n,this.direction,A)>e.boundingSphereRadius)return;const s=this[e.type];s&&s.call(this,e,t,A,i,e)}_intersectBox(e,t,A,i,n){return this._intersectConvex(e.convexPolyhedronRepresentation,t,A,i,n)}_intersectPlane(e,t,A,i,n){const s=this.from,a=this.to,o=this.direction,l=new b(0,0,1);t.vmult(l,l);const c=new b;s.vsub(A,c);const u=c.dot(l);a.vsub(A,c);const h=c.dot(l);if(u*h>0||s.distanceTo(a)<u)return;const p=l.dot(o);if(Math.abs(p)<this.precision)return;const f=new b,m=new b,g=new b;s.vsub(A,f);const d=-l.dot(f)/p;o.scale(d,m),s.vadd(m,g),this.reportIntersection(l,g,n,i,-1)}getAABB(e){const{lowerBound:t,upperBound:A}=e,i=this.to,n=this.from;t.x=Math.min(i.x,n.x),t.y=Math.min(i.y,n.y),t.z=Math.min(i.z,n.z),A.x=Math.max(i.x,n.x),A.y=Math.max(i.y,n.y),A.z=Math.max(i.z,n.z)}_intersectHeightfield(e,t,A,i,n){e.data,e.elementSize;const s=QM;s.from.copy(this.from),s.to.copy(this.to),At.pointToLocalFrame(A,t,s.from,s.from),At.pointToLocalFrame(A,t,s.to,s.to),s.updateDirection();const a=IM;let o,l,c,u;o=l=0,c=u=e.data.length-1;const h=new wA;s.getAABB(h),e.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),o=Math.max(o,a[0]),l=Math.max(l,a[1]),e.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),c=Math.min(c,a[0]+1),u=Math.min(u,a[1]+1);for(let p=o;p<c;p++)for(let f=l;f<u;f++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(p,f,h),!!h.overlapsRay(s)){if(e.getConvexTrianglePillar(p,f,!1),At.pointToWorldFrame(A,t,e.pillarOffset,la),this._intersectConvex(e.pillarConvex,t,la,i,n,Xd),this.result.shouldStop)return;e.getConvexTrianglePillar(p,f,!0),At.pointToWorldFrame(A,t,e.pillarOffset,la),this._intersectConvex(e.pillarConvex,t,la,i,n,Xd)}}}_intersectSphere(e,t,A,i,n){const s=this.from,a=this.to,o=e.radius,l=(a.x-s.x)**2+(a.y-s.y)**2+(a.z-s.z)**2,c=2*((a.x-s.x)*(s.x-A.x)+(a.y-s.y)*(s.y-A.y)+(a.z-s.z)*(s.z-A.z)),u=(s.x-A.x)**2+(s.y-A.y)**2+(s.z-A.z)**2-o**2,h=c**2-4*l*u,p=LM,f=RM;if(!(h<0))if(h===0)s.lerp(a,h,p),p.vsub(A,f),f.normalize(),this.reportIntersection(f,p,n,i,-1);else{const m=(-c-Math.sqrt(h))/(2*l),g=(-c+Math.sqrt(h))/(2*l);if(m>=0&&m<=1&&(s.lerp(a,m,p),p.vsub(A,f),f.normalize(),this.reportIntersection(f,p,n,i,-1)),this.result.shouldStop)return;g>=0&&g<=1&&(s.lerp(a,g,p),p.vsub(A,f),f.normalize(),this.reportIntersection(f,p,n,i,-1))}}_intersectConvex(e,t,A,i,n,s){const a=DM,o=jd,l=s&&s.faceList||null,c=e.faces,u=e.vertices,h=e.faceNormals,p=this.direction,f=this.from,m=this.to,g=f.distanceTo(m),d=l?l.length:c.length,B=this.result;for(let v=0;!B.shouldStop&&v<d;v++){const y=l?l[v]:v,x=c[y],w=h[y],M=t,S=A;o.copy(u[x[0]]),M.vmult(o,o),o.vadd(S,o),o.vsub(f,o),M.vmult(w,a);const C=p.dot(a);if(Math.abs(C)<this.precision)continue;const _=a.dot(o)/C;if(!(_<0)){p.scale(_,oA),oA.vadd(f,oA),LA.copy(u[x[0]]),M.vmult(LA,LA),S.vadd(LA,LA);for(let F=1;!B.shouldStop&&F<x.length-1;F++){zA.copy(u[x[F]]),kA.copy(u[x[F+1]]),M.vmult(zA,zA),M.vmult(kA,kA),S.vadd(zA,zA),S.vadd(kA,kA);const T=oA.distanceTo(f);!(bt.pointInTriangle(oA,LA,zA,kA)||bt.pointInTriangle(oA,zA,LA,kA))||T>g||this.reportIntersection(a,oA,n,i,y)}}}}_intersectTrimesh(e,t,A,i,n,s){const a=HM,o=zM,l=kM,c=jd,u=PM,h=NM,p=OM,f=GM,m=VM,g=e.indices;e.vertices;const d=this.from,B=this.to,v=this.direction;l.position.copy(A),l.quaternion.copy(t),At.vectorToLocalFrame(A,t,v,u),At.pointToLocalFrame(A,t,d,h),At.pointToLocalFrame(A,t,B,p),p.x*=e.scale.x,p.y*=e.scale.y,p.z*=e.scale.z,h.x*=e.scale.x,h.y*=e.scale.y,h.z*=e.scale.z,p.vsub(h,u),u.normalize();const y=h.distanceSquared(p);e.tree.rayQuery(this,l,o);for(let x=0,w=o.length;!this.result.shouldStop&&x!==w;x++){const M=o[x];e.getNormal(M,a),e.getVertex(g[M*3],LA),LA.vsub(h,c);const S=u.dot(a),C=a.dot(c)/S;if(C<0)continue;u.scale(C,oA),oA.vadd(h,oA),e.getVertex(g[M*3+1],zA),e.getVertex(g[M*3+2],kA);const _=oA.distanceSquared(h);!(bt.pointInTriangle(oA,zA,LA,kA)||bt.pointInTriangle(oA,LA,zA,kA))||_>y||(At.vectorToWorldFrame(t,a,m),At.pointToWorldFrame(A,t,oA,f),this.reportIntersection(m,f,n,i,M))}o.length=0}reportIntersection(e,t,A,i,n){const s=this.from,a=this.to,o=s.distanceTo(t),l=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(l.hitFaceIndex=typeof n<"u"?n:-1,this.mode){case bt.ALL:this.hasHit=!0,l.set(s,a,e,t,A,i,o),l.hasHit=!0,this.callback(l);break;case bt.CLOSEST:(o<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(s,a,e,t,A,i,o));break;case bt.ANY:this.hasHit=!0,l.hasHit=!0,l.set(s,a,e,t,A,i,o),l.shouldStop=!0;break}}static pointInTriangle(e,t,A,i){i.vsub(t,si),A.vsub(t,bn),e.vsub(t,vl);const n=si.dot(si),s=si.dot(bn),a=si.dot(vl),o=bn.dot(bn),l=bn.dot(vl);let c,u;return(c=o*a-s*l)>=0&&(u=n*l-s*a)>=0&&c+u<n*o-s*s}}bt.CLOSEST=Bh.CLOSEST;bt.ANY=Bh.ANY;bt.ALL=Bh.ALL;const Wd=new wA,wl=[],bn=new b,vl=new b,FM=new b,TM=new Ct,oA=new b,LA=new b,zA=new b,kA=new b;new b;new Va;const Xd={faceList:[0]},la=new b,QM=new bt,IM=[],LM=new b,RM=new b,DM=new b;new b;new b;const jd=new b,HM=new b,PM=new b,NM=new b,OM=new b,VM=new b,GM=new b;new wA;const zM=[],kM=new At,si=new b,ca=new b;function KM(r,e,t){t.vsub(r,si);const A=si.dot(e);return e.scale(A,ca),ca.vadd(r,ca),t.distanceTo(ca)}class WM{static defaults(e,t){e===void 0&&(e={});for(let A in t)A in e||(e[A]=t[A]);return e}}class Yd{constructor(){this.spatial=new b,this.rotational=new b}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class ss{constructor(e,t,A,i){A===void 0&&(A=-1e6),i===void 0&&(i=1e6),this.id=ss.idCounter++,this.minForce=A,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Yd,this.jacobianElementB=new Yd,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,A){const i=t,n=e,s=A;this.a=4/(s*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(s*s*n*(1+4*i))}computeB(e,t,A){const i=this.computeGW(),n=this.computeGq(),s=this.computeGiMf();return-n*e-i*t-s*A}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,A=this.bi,i=this.bj,n=A.position,s=i.position;return e.spatial.dot(n)+t.spatial.dot(s)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,A=this.bi,i=this.bj,n=A.velocity,s=i.velocity,a=A.angularVelocity,o=i.angularVelocity;return e.multiplyVectors(n,a)+t.multiplyVectors(s,o)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,A=this.bi,i=this.bj,n=A.vlambda,s=i.vlambda,a=A.wlambda,o=i.wlambda;return e.multiplyVectors(n,a)+t.multiplyVectors(s,o)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,A=this.bi,i=this.bj,n=A.force,s=A.torque,a=i.force,o=i.torque,l=A.invMassSolve,c=i.invMassSolve;return n.scale(l,qd),a.scale(c,Jd),A.invInertiaWorldSolve.vmult(s,Zd),i.invInertiaWorldSolve.vmult(o,$d),e.multiplyVectors(qd,Zd)+t.multiplyVectors(Jd,$d)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,A=this.bi,i=this.bj,n=A.invMassSolve,s=i.invMassSolve,a=A.invInertiaWorldSolve,o=i.invInertiaWorldSolve;let l=n+s;return a.vmult(e.rotational,ha),l+=ha.dot(e.rotational),o.vmult(t.rotational,ha),l+=ha.dot(t.rotational),l}addToWlambda(e){const t=this.jacobianElementA,A=this.jacobianElementB,i=this.bi,n=this.bj,s=XM;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),n.vlambda.addScaledVector(n.invMassSolve*e,A.spatial,n.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,s),i.wlambda.addScaledVector(e,s,i.wlambda),n.invInertiaWorldSolve.vmult(A.rotational,s),n.wlambda.addScaledVector(e,s,n.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}ss.idCounter=0;const qd=new b,Jd=new b,Zd=new b,$d=new b,ha=new b,XM=new b;class jM extends ss{constructor(e,t,A){A===void 0&&(A=1e6),super(e,t,0,A),this.restitution=0,this.ri=new b,this.rj=new b,this.ni=new b}computeB(e){const t=this.a,A=this.b,i=this.bi,n=this.bj,s=this.ri,a=this.rj,o=YM,l=qM,c=i.velocity,u=i.angularVelocity;i.force,i.torque;const h=n.velocity,p=n.angularVelocity;n.force,n.torque;const f=JM,m=this.jacobianElementA,g=this.jacobianElementB,d=this.ni;s.cross(d,o),a.cross(d,l),d.negate(m.spatial),o.negate(m.rotational),g.spatial.copy(d),g.rotational.copy(l),f.copy(n.position),f.vadd(a,f),f.vsub(i.position,f),f.vsub(s,f);const B=d.dot(f),v=this.restitution+1,y=v*h.dot(d)-v*c.dot(d)+p.dot(l)-u.dot(o),x=this.computeGiMf();return-B*t-y*A-e*x}getImpactVelocityAlongNormal(){const e=ZM,t=$M,A=eU,i=tU,n=AU;return this.bi.position.vadd(this.ri,A),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(A,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,n),this.ni.dot(n)}}const YM=new b,qM=new b,JM=new b,ZM=new b,$M=new b,eU=new b,tU=new b,AU=new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;class ep extends ss{constructor(e,t,A){super(e,t,-A,A),this.ri=new b,this.rj=new b,this.t=new b}computeB(e){this.a;const t=this.b;this.bi,this.bj;const A=this.ri,i=this.rj,n=rU,s=iU,a=this.t;A.cross(a,n),i.cross(a,s);const o=this.jacobianElementA,l=this.jacobianElementB;a.negate(o.spatial),n.negate(o.rotational),l.spatial.copy(a),l.rotational.copy(s);const c=this.computeGW(),u=this.computeGiMf();return-c*t-e*u}}const rU=new b,iU=new b;class as{constructor(e,t,A){A=WM.defaults(A,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=as.idCounter++,this.materials=[e,t],this.friction=A.friction,this.restitution=A.restitution,this.contactEquationStiffness=A.contactEquationStiffness,this.contactEquationRelaxation=A.contactEquationRelaxation,this.frictionEquationStiffness=A.frictionEquationStiffness,this.frictionEquationRelaxation=A.frictionEquationRelaxation}}as.idCounter=0;class an{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=an.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}an.idCounter=0;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new bt;new b;new b;new b;new b(1,0,0),new b(0,1,0),new b(0,0,1);new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new wA;new b;new wA;new b;new b;new b;new b;new b;new b;new b;new wA;new b;new At;new wA;class nU{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,A=t.indexOf(e);A!==-1&&t.splice(A,1)}removeAllEquations(){this.equations.length=0}}class sU extends nU{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let A=0;const i=this.iterations,n=this.tolerance*this.tolerance,s=this.equations,a=s.length,o=t.bodies,l=o.length,c=e;let u,h,p,f,m,g;if(a!==0)for(let y=0;y!==l;y++)o[y].updateSolveMassProperties();const d=oU,B=lU,v=aU;d.length=a,B.length=a,v.length=a;for(let y=0;y!==a;y++){const x=s[y];v[y]=0,B[y]=x.computeB(c),d[y]=1/x.computeC()}if(a!==0){for(let w=0;w!==l;w++){const M=o[w],S=M.vlambda,C=M.wlambda;S.set(0,0,0),C.set(0,0,0)}for(A=0;A!==i;A++){f=0;for(let w=0;w!==a;w++){const M=s[w];u=B[w],h=d[w],g=v[w],m=M.computeGWlambda(),p=h*(u-m-M.eps*g),g+p<M.minForce?p=M.minForce-g:g+p>M.maxForce&&(p=M.maxForce-g),v[w]+=p,f+=p>0?p:-p,M.addToWlambda(p)}if(f*f<n)break}for(let w=0;w!==l;w++){const M=o[w],S=M.velocity,C=M.angularVelocity;M.vlambda.vmul(M.linearFactor,M.vlambda),S.vadd(M.vlambda,S),M.wlambda.vmul(M.angularFactor,M.wlambda),C.vadd(M.wlambda,C)}let y=s.length;const x=1/c;for(;y--;)s[y].multiplier=v[y]*x}return A}}const aU=[],oU=[],lU=[];class cU{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class hU extends cU{constructor(){super(...arguments),this.type=b}constructObject(){return new b}}const dt={sphereSphere:we.types.SPHERE,spherePlane:we.types.SPHERE|we.types.PLANE,boxBox:we.types.BOX|we.types.BOX,sphereBox:we.types.SPHERE|we.types.BOX,planeBox:we.types.PLANE|we.types.BOX,convexConvex:we.types.CONVEXPOLYHEDRON,sphereConvex:we.types.SPHERE|we.types.CONVEXPOLYHEDRON,planeConvex:we.types.PLANE|we.types.CONVEXPOLYHEDRON,boxConvex:we.types.BOX|we.types.CONVEXPOLYHEDRON,sphereHeightfield:we.types.SPHERE|we.types.HEIGHTFIELD,boxHeightfield:we.types.BOX|we.types.HEIGHTFIELD,convexHeightfield:we.types.CONVEXPOLYHEDRON|we.types.HEIGHTFIELD,sphereParticle:we.types.PARTICLE|we.types.SPHERE,planeParticle:we.types.PLANE|we.types.PARTICLE,boxParticle:we.types.BOX|we.types.PARTICLE,convexParticle:we.types.PARTICLE|we.types.CONVEXPOLYHEDRON,cylinderCylinder:we.types.CYLINDER,sphereCylinder:we.types.SPHERE|we.types.CYLINDER,planeCylinder:we.types.PLANE|we.types.CYLINDER,boxCylinder:we.types.BOX|we.types.CYLINDER,convexCylinder:we.types.CONVEXPOLYHEDRON|we.types.CYLINDER,heightfieldCylinder:we.types.HEIGHTFIELD|we.types.CYLINDER,particleCylinder:we.types.PARTICLE|we.types.CYLINDER,sphereTrimesh:we.types.SPHERE|we.types.TRIMESH,planeTrimesh:we.types.PLANE|we.types.TRIMESH};class uU{get[dt.sphereSphere](){return this.sphereSphere}get[dt.spherePlane](){return this.spherePlane}get[dt.boxBox](){return this.boxBox}get[dt.sphereBox](){return this.sphereBox}get[dt.planeBox](){return this.planeBox}get[dt.convexConvex](){return this.convexConvex}get[dt.sphereConvex](){return this.sphereConvex}get[dt.planeConvex](){return this.planeConvex}get[dt.boxConvex](){return this.boxConvex}get[dt.sphereHeightfield](){return this.sphereHeightfield}get[dt.boxHeightfield](){return this.boxHeightfield}get[dt.convexHeightfield](){return this.convexHeightfield}get[dt.sphereParticle](){return this.sphereParticle}get[dt.planeParticle](){return this.planeParticle}get[dt.boxParticle](){return this.boxParticle}get[dt.convexParticle](){return this.convexParticle}get[dt.cylinderCylinder](){return this.convexConvex}get[dt.sphereCylinder](){return this.sphereConvex}get[dt.planeCylinder](){return this.planeConvex}get[dt.boxCylinder](){return this.boxConvex}get[dt.convexCylinder](){return this.convexConvex}get[dt.heightfieldCylinder](){return this.heightfieldCylinder}get[dt.particleCylinder](){return this.particleCylinder}get[dt.sphereTrimesh](){return this.sphereTrimesh}get[dt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new hU,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,A,i,n,s){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new jM(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&A.collisionResponse&&i.collisionResponse;const o=this.currentContactMaterial;a.restitution=o.restitution,a.setSpookParams(o.contactEquationStiffness,o.contactEquationRelaxation,this.world.dt);const l=A.material||e.material,c=i.material||t.material;return l&&c&&l.restitution>=0&&c.restitution>=0&&(a.restitution=l.restitution*c.restitution),a.si=n||A,a.sj=s||i,a}createFrictionEquationsFromContact(e,t){const A=e.bi,i=e.bj,n=e.si,s=e.sj,a=this.world,o=this.currentContactMaterial;let l=o.friction;const c=n.material||A.material,u=s.material||i.material;if(c&&u&&c.friction>=0&&u.friction>=0&&(l=c.friction*u.friction),l>0){const h=l*(a.frictionGravity||a.gravity).length();let p=A.invMass+i.invMass;p>0&&(p=1/p);const f=this.frictionEquationPool,m=f.length?f.pop():new ep(A,i,h*p),g=f.length?f.pop():new ep(A,i,h*p);return m.bi=g.bi=A,m.bj=g.bj=i,m.minForce=g.minForce=-h*p,m.maxForce=g.maxForce=h*p,m.ri.copy(e.ri),m.rj.copy(e.rj),g.ri.copy(e.ri),g.rj.copy(e.rj),e.ni.tangents(m.t,g.t),m.setSpookParams(o.frictionEquationStiffness,o.frictionEquationRelaxation,a.dt),g.setSpookParams(o.frictionEquationStiffness,o.frictionEquationRelaxation,a.dt),m.enabled=g.enabled=e.enabled,t.push(m,g),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const A=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];ri.setZero(),Hi.setZero(),Pi.setZero();const n=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==n?(ri.vadd(t.ni,ri),Hi.vadd(t.ri,Hi),Pi.vadd(t.rj,Pi)):(ri.vsub(t.ni,ri),Hi.vadd(t.rj,Hi),Pi.vadd(t.ri,Pi));const s=1/e;Hi.scale(s,A.ri),Pi.scale(s,A.rj),i.ri.copy(A.ri),i.rj.copy(A.rj),ri.normalize(),ri.tangents(A.t,i.t)}getContacts(e,t,A,i,n,s,a){this.contactPointPool=n,this.frictionEquationPool=a,this.result=i,this.frictionResult=s;const o=fU,l=gU,c=dU,u=pU;for(let h=0,p=e.length;h!==p;h++){const f=e[h],m=t[h];let g=null;f.material&&m.material&&(g=A.getContactMaterial(f.material,m.material)||null);const d=f.type&ge.KINEMATIC&&m.type&ge.STATIC||f.type&ge.STATIC&&m.type&ge.KINEMATIC||f.type&ge.KINEMATIC&&m.type&ge.KINEMATIC;for(let B=0;B<f.shapes.length;B++){f.quaternion.mult(f.shapeOrientations[B],o),f.quaternion.vmult(f.shapeOffsets[B],c),c.vadd(f.position,c);const v=f.shapes[B];for(let y=0;y<m.shapes.length;y++){m.quaternion.mult(m.shapeOrientations[y],l),m.quaternion.vmult(m.shapeOffsets[y],u),u.vadd(m.position,u);const x=m.shapes[y];if(!(v.collisionFilterMask&x.collisionFilterGroup&&x.collisionFilterMask&v.collisionFilterGroup)||c.distanceTo(u)>v.boundingSphereRadius+x.boundingSphereRadius)continue;let w=null;v.material&&x.material&&(w=A.getContactMaterial(v.material,x.material)||null),this.currentContactMaterial=w||g||A.defaultContactMaterial;const M=v.type|x.type,S=this[M];if(S){let C=!1;v.type<x.type?C=S.call(this,v,x,c,u,o,l,f,m,v,x,d):C=S.call(this,x,v,u,c,l,o,m,f,v,x,d),C&&d&&(A.shapeOverlapKeeper.set(v.id,x.id),A.bodyOverlapKeeper.set(f.id,m.id))}}}}}sphereSphere(e,t,A,i,n,s,a,o,l,c,u){if(u)return A.distanceSquared(i)<(e.radius+t.radius)**2;const h=this.createContactEquation(a,o,e,t,l,c);i.vsub(A,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(e.radius,h.ri),h.rj.scale(-t.radius,h.rj),h.ri.vadd(A,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(i,h.rj),h.rj.vsub(o.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(e,t,A,i,n,s,a,o,l,c,u){const h=this.createContactEquation(a,o,e,t,l,c);if(h.ni.set(0,0,1),s.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(e.radius,h.ri),A.vsub(i,ua),h.ni.scale(h.ni.dot(ua),tp),ua.vsub(tp,h.rj),-ua.dot(h.ni)<=e.radius){if(u)return!0;const p=h.ri,f=h.rj;p.vadd(A,p),p.vsub(a.position,p),f.vadd(i,f),f.vsub(o.position,f),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(e,t,A,i,n,s,a,o,l,c,u){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,A,i,n,s,a,o,e,t,u)}sphereBox(e,t,A,i,n,s,a,o,l,c,u){const h=this.v3pool,p=GU;A.vsub(i,da),t.getSideNormals(p,s);const f=e.radius;let m=!1;const g=kU,d=KU,B=WU;let v=null,y=0,x=0,w=0,M=null;for(let R=0,k=p.length;R!==k&&m===!1;R++){const z=NU;z.copy(p[R]);const X=z.length();z.normalize();const te=da.dot(z);if(te<X+f&&te>0){const ve=OU,re=VU;ve.copy(p[(R+1)%3]),re.copy(p[(R+2)%3]);const Ne=ve.length(),je=re.length();ve.normalize(),re.normalize();const Ke=da.dot(ve),j=da.dot(re);if(Ke<Ne&&Ke>-Ne&&j<je&&j>-je){const q=Math.abs(te-X-f);if((M===null||q<M)&&(M=q,x=Ke,w=j,v=X,g.copy(z),d.copy(ve),B.copy(re),y++,u))return!0}}}if(y){m=!0;const R=this.createContactEquation(a,o,e,t,l,c);g.scale(-f,R.ri),R.ni.copy(g),R.ni.negate(R.ni),g.scale(v,g),d.scale(x,d),g.vadd(d,g),B.scale(w,B),g.vadd(B,R.rj),R.ri.vadd(A,R.ri),R.ri.vsub(a.position,R.ri),R.rj.vadd(i,R.rj),R.rj.vsub(o.position,R.rj),this.result.push(R),this.createFrictionEquationsFromContact(R,this.frictionResult)}let S=h.get();const C=zU;for(let R=0;R!==2&&!m;R++)for(let k=0;k!==2&&!m;k++)for(let z=0;z!==2&&!m;z++)if(S.set(0,0,0),R?S.vadd(p[0],S):S.vsub(p[0],S),k?S.vadd(p[1],S):S.vsub(p[1],S),z?S.vadd(p[2],S):S.vsub(p[2],S),i.vadd(S,C),C.vsub(A,C),C.lengthSquared()<f*f){if(u)return!0;m=!0;const X=this.createContactEquation(a,o,e,t,l,c);X.ri.copy(C),X.ri.normalize(),X.ni.copy(X.ri),X.ri.scale(f,X.ri),X.rj.copy(S),X.ri.vadd(A,X.ri),X.ri.vsub(a.position,X.ri),X.rj.vadd(i,X.rj),X.rj.vsub(o.position,X.rj),this.result.push(X),this.createFrictionEquationsFromContact(X,this.frictionResult)}h.release(S),S=null;const _=h.get(),F=h.get(),T=h.get(),I=h.get(),L=h.get(),P=p.length;for(let R=0;R!==P&&!m;R++)for(let k=0;k!==P&&!m;k++)if(R%3!==k%3){p[k].cross(p[R],_),_.normalize(),p[R].vadd(p[k],F),T.copy(A),T.vsub(F,T),T.vsub(i,T);const z=T.dot(_);_.scale(z,I);let X=0;for(;X===R%3||X===k%3;)X++;L.copy(A),L.vsub(I,L),L.vsub(F,L),L.vsub(i,L);const te=Math.abs(z),ve=L.length();if(te<p[X].length()&&ve<f){if(u)return!0;m=!0;const re=this.createContactEquation(a,o,e,t,l,c);F.vadd(I,re.rj),re.rj.copy(re.rj),L.negate(re.ni),re.ni.normalize(),re.ri.copy(re.rj),re.ri.vadd(i,re.ri),re.ri.vsub(A,re.ri),re.ri.normalize(),re.ri.scale(f,re.ri),re.ri.vadd(A,re.ri),re.ri.vsub(a.position,re.ri),re.rj.vadd(i,re.rj),re.rj.vsub(o.position,re.rj),this.result.push(re),this.createFrictionEquationsFromContact(re,this.frictionResult)}}h.release(_,F,T,I,L)}planeBox(e,t,A,i,n,s,a,o,l,c,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,A,i,n,s,a,o,e,t,u)}convexConvex(e,t,A,i,n,s,a,o,l,c,u,h,p){const f=aS;if(!(A.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,A,n,i,s,f,h,p)){const m=[],g=oS;e.clipAgainstHull(A,n,t,i,s,f,-100,100,m);let d=0;for(let B=0;B!==m.length;B++){if(u)return!0;const v=this.createContactEquation(a,o,e,t,l,c),y=v.ri,x=v.rj;f.negate(v.ni),m[B].normal.negate(g),g.scale(m[B].depth,g),m[B].point.vadd(g,y),x.copy(m[B].point),y.vsub(A,y),x.vsub(i,x),y.vadd(A,y),y.vsub(a.position,y),x.vadd(i,x),x.vsub(o.position,x),this.result.push(v),d++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&d&&this.createFrictionFromAverage(d)}}sphereConvex(e,t,A,i,n,s,a,o,l,c,u){const h=this.v3pool;A.vsub(i,XU);const p=t.faceNormals,f=t.faces,m=t.vertices,g=e.radius;let d=!1;for(let B=0;B!==m.length;B++){const v=m[B],y=JU;s.vmult(v,y),i.vadd(y,y);const x=qU;if(y.vsub(A,x),x.lengthSquared()<g*g){if(u)return!0;d=!0;const w=this.createContactEquation(a,o,e,t,l,c);w.ri.copy(x),w.ri.normalize(),w.ni.copy(w.ri),w.ri.scale(g,w.ri),y.vsub(i,w.rj),w.ri.vadd(A,w.ri),w.ri.vsub(a.position,w.ri),w.rj.vadd(i,w.rj),w.rj.vsub(o.position,w.rj),this.result.push(w),this.createFrictionEquationsFromContact(w,this.frictionResult);return}}for(let B=0,v=f.length;B!==v&&d===!1;B++){const y=p[B],x=f[B],w=ZU;s.vmult(y,w);const M=$U;s.vmult(m[x[0]],M),M.vadd(i,M);const S=eS;w.scale(-g,S),A.vadd(S,S);const C=tS;S.vsub(M,C);const _=C.dot(w),F=AS;if(A.vsub(M,F),_<0&&F.dot(w)>0){const T=[];for(let I=0,L=x.length;I!==L;I++){const P=h.get();s.vmult(m[x[I]],P),i.vadd(P,P),T.push(P)}if(PU(T,w,A)){if(u)return!0;d=!0;const I=this.createContactEquation(a,o,e,t,l,c);w.scale(-g,I.ri),w.negate(I.ni);const L=h.get();w.scale(-_,L);const P=h.get();w.scale(-g,P),A.vsub(i,I.rj),I.rj.vadd(P,I.rj),I.rj.vadd(L,I.rj),I.rj.vadd(i,I.rj),I.rj.vsub(o.position,I.rj),I.ri.vadd(A,I.ri),I.ri.vsub(a.position,I.ri),h.release(L),h.release(P),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult);for(let R=0,k=T.length;R!==k;R++)h.release(T[R]);return}else for(let I=0;I!==x.length;I++){const L=h.get(),P=h.get();s.vmult(m[x[(I+1)%x.length]],L),s.vmult(m[x[(I+2)%x.length]],P),i.vadd(L,L),i.vadd(P,P);const R=jU;P.vsub(L,R);const k=YU;R.unit(k);const z=h.get(),X=h.get();A.vsub(L,X);const te=X.dot(k);k.scale(te,z),z.vadd(L,z);const ve=h.get();if(z.vsub(A,ve),te>0&&te*te<R.lengthSquared()&&ve.lengthSquared()<g*g){if(u)return!0;const re=this.createContactEquation(a,o,e,t,l,c);z.vsub(i,re.rj),z.vsub(A,re.ni),re.ni.normalize(),re.ni.scale(g,re.ri),re.rj.vadd(i,re.rj),re.rj.vsub(o.position,re.rj),re.ri.vadd(A,re.ri),re.ri.vsub(a.position,re.ri),this.result.push(re),this.createFrictionEquationsFromContact(re,this.frictionResult);for(let Ne=0,je=T.length;Ne!==je;Ne++)h.release(T[Ne]);h.release(L),h.release(P),h.release(z),h.release(ve),h.release(X);return}h.release(L),h.release(P),h.release(z),h.release(ve),h.release(X)}for(let I=0,L=T.length;I!==L;I++)h.release(T[I])}}}planeConvex(e,t,A,i,n,s,a,o,l,c,u){const h=rS,p=iS;p.set(0,0,1),n.vmult(p,p);let f=0;const m=nS;for(let g=0;g!==t.vertices.length;g++)if(h.copy(t.vertices[g]),s.vmult(h,h),i.vadd(h,h),h.vsub(A,m),p.dot(m)<=0){if(u)return!0;const d=this.createContactEquation(a,o,e,t,l,c),B=sS;p.scale(p.dot(m),B),h.vsub(B,B),B.vsub(A,d.ri),d.ni.copy(p),h.vsub(i,d.rj),d.ri.vadd(A,d.ri),d.ri.vsub(a.position,d.ri),d.rj.vadd(i,d.rj),d.rj.vsub(o.position,d.rj),this.result.push(d),f++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(d,this.frictionResult)}this.enableFrictionReduction&&f&&this.createFrictionFromAverage(f)}boxConvex(e,t,A,i,n,s,a,o,l,c,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,A,i,n,s,a,o,e,t,u)}sphereHeightfield(e,t,A,i,n,s,a,o,l,c,u){const h=t.data,p=e.radius,f=t.elementSize,m=vS,g=wS;At.pointToLocalFrame(i,s,A,g);let d=Math.floor((g.x-p)/f)-1,B=Math.ceil((g.x+p)/f)+1,v=Math.floor((g.y-p)/f)-1,y=Math.ceil((g.y+p)/f)+1;if(B<0||y<0||d>h.length||v>h[0].length)return;d<0&&(d=0),B<0&&(B=0),v<0&&(v=0),y<0&&(y=0),d>=h.length&&(d=h.length-1),B>=h.length&&(B=h.length-1),y>=h[0].length&&(y=h[0].length-1),v>=h[0].length&&(v=h[0].length-1);const x=[];t.getRectMinMax(d,v,B,y,x);const w=x[0],M=x[1];if(g.z-p>M||g.z+p<w)return;const S=this.result;for(let C=d;C<B;C++)for(let _=v;_<y;_++){const F=S.length;let T=!1;if(t.getConvexTrianglePillar(C,_,!1),At.pointToWorldFrame(i,s,t.pillarOffset,m),A.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(T=this.sphereConvex(e,t.pillarConvex,A,m,n,s,a,o,e,t,u)),u&&T||(t.getConvexTrianglePillar(C,_,!0),At.pointToWorldFrame(i,s,t.pillarOffset,m),A.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(T=this.sphereConvex(e,t.pillarConvex,A,m,n,s,a,o,e,t,u)),u&&T))return!0;if(S.length-F>2)return}}boxHeightfield(e,t,A,i,n,s,a,o,l,c,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,A,i,n,s,a,o,e,t,u)}convexHeightfield(e,t,A,i,n,s,a,o,l,c,u){const h=t.data,p=t.elementSize,f=e.boundingSphereRadius,m=mS,g=BS,d=gS;At.pointToLocalFrame(i,s,A,d);let B=Math.floor((d.x-f)/p)-1,v=Math.ceil((d.x+f)/p)+1,y=Math.floor((d.y-f)/p)-1,x=Math.ceil((d.y+f)/p)+1;if(v<0||x<0||B>h.length||y>h[0].length)return;B<0&&(B=0),v<0&&(v=0),y<0&&(y=0),x<0&&(x=0),B>=h.length&&(B=h.length-1),v>=h.length&&(v=h.length-1),x>=h[0].length&&(x=h[0].length-1),y>=h[0].length&&(y=h[0].length-1);const w=[];t.getRectMinMax(B,y,v,x,w);const M=w[0],S=w[1];if(!(d.z-f>S||d.z+f<M))for(let C=B;C<v;C++)for(let _=y;_<x;_++){let F=!1;if(t.getConvexTrianglePillar(C,_,!1),At.pointToWorldFrame(i,s,t.pillarOffset,m),A.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(F=this.convexConvex(e,t.pillarConvex,A,m,n,s,a,o,null,null,u,g,null)),u&&F||(t.getConvexTrianglePillar(C,_,!0),At.pointToWorldFrame(i,s,t.pillarOffset,m),A.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(F=this.convexConvex(e,t.pillarConvex,A,m,n,s,a,o,null,null,u,g,null)),u&&F))return!0}}sphereParticle(e,t,A,i,n,s,a,o,l,c,u){const h=uS;if(h.set(0,0,1),i.vsub(A,h),h.lengthSquared()<=e.radius*e.radius){if(u)return!0;const p=this.createContactEquation(o,a,t,e,l,c);h.normalize(),p.rj.copy(h),p.rj.scale(e.radius,p.rj),p.ni.copy(h),p.ni.negate(p.ni),p.ri.set(0,0,0),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}planeParticle(e,t,A,i,n,s,a,o,l,c,u){const h=lS;h.set(0,0,1),a.quaternion.vmult(h,h);const p=cS;if(i.vsub(a.position,p),h.dot(p)<=0){if(u)return!0;const f=this.createContactEquation(o,a,t,e,l,c);f.ni.copy(h),f.ni.negate(f.ni),f.ri.set(0,0,0);const m=hS;h.scale(h.dot(i),m),i.vsub(m,m),f.rj.copy(m),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}}boxParticle(e,t,A,i,n,s,a,o,l,c,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,A,i,n,s,a,o,e,t,u)}convexParticle(e,t,A,i,n,s,a,o,l,c,u){let h=-1;const p=pS,f=fS;let m=null;const g=dS;if(g.copy(i),g.vsub(A,g),n.conjugate(Ap),Ap.vmult(g,g),e.pointIsInside(g)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(A,n),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(n);for(let d=0,B=e.faces.length;d!==B;d++){const v=[e.worldVertices[e.faces[d][0]]],y=e.worldFaceNormals[d];i.vsub(v[0],rp);const x=-y.dot(rp);if(m===null||Math.abs(x)<Math.abs(m)){if(u)return!0;m=x,h=d,p.copy(y)}}if(h!==-1){const d=this.createContactEquation(o,a,t,e,l,c);p.scale(m,f),f.vadd(i,f),f.vsub(A,f),d.rj.copy(f),p.negate(d.ni),d.ri.set(0,0,0);const B=d.ri,v=d.rj;B.vadd(i,B),B.vsub(o.position,B),v.vadd(A,v),v.vsub(a.position,v),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,A,i,n,s,a,o,l,c,u){return this.convexHeightfield(t,e,i,A,s,n,o,a,l,c,u)}particleCylinder(e,t,A,i,n,s,a,o,l,c,u){return this.convexParticle(t,e,i,A,s,n,o,a,l,c,u)}sphereTrimesh(e,t,A,i,n,s,a,o,l,c,u){const h=CU,p=EU,f=bU,m=MU,g=UU,d=SU,B=IU,v=xU,y=yU,x=LU;At.pointToLocalFrame(i,s,A,g);const w=e.radius;B.lowerBound.set(g.x-w,g.y-w,g.z-w),B.upperBound.set(g.x+w,g.y+w,g.z+w),t.getTrianglesInAABB(B,x);const M=_U,S=e.radius*e.radius;for(let I=0;I<x.length;I++)for(let L=0;L<3;L++)if(t.getVertex(t.indices[x[I]*3+L],M),M.vsub(g,y),y.lengthSquared()<=S){if(v.copy(M),At.pointToWorldFrame(i,s,v,M),M.vsub(A,y),u)return!0;let P=this.createContactEquation(a,o,e,t,l,c);P.ni.copy(y),P.ni.normalize(),P.ri.copy(P.ni),P.ri.scale(e.radius,P.ri),P.ri.vadd(A,P.ri),P.ri.vsub(a.position,P.ri),P.rj.copy(M),P.rj.vsub(o.position,P.rj),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult)}for(let I=0;I<x.length;I++)for(let L=0;L<3;L++){t.getVertex(t.indices[x[I]*3+L],h),t.getVertex(t.indices[x[I]*3+(L+1)%3],p),p.vsub(h,f),g.vsub(p,d);const P=d.dot(f);g.vsub(h,d);let R=d.dot(f);if(R>0&&P<0&&(g.vsub(h,d),m.copy(f),m.normalize(),R=d.dot(m),m.scale(R,d),d.vadd(h,d),d.distanceTo(g)<e.radius)){if(u)return!0;const k=this.createContactEquation(a,o,e,t,l,c);d.vsub(g,k.ni),k.ni.normalize(),k.ni.scale(e.radius,k.ri),k.ri.vadd(A,k.ri),k.ri.vsub(a.position,k.ri),At.pointToWorldFrame(i,s,d,d),d.vsub(o.position,k.rj),At.vectorToWorldFrame(s,k.ni,k.ni),At.vectorToWorldFrame(s,k.ri,k.ri),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}}const C=FU,_=TU,F=QU,T=vU;for(let I=0,L=x.length;I!==L;I++){t.getTriangleVertices(x[I],C,_,F),t.getNormal(x[I],T),g.vsub(C,d);let P=d.dot(T);if(T.scale(P,d),g.vsub(d,d),P=d.distanceTo(g),bt.pointInTriangle(d,C,_,F)&&P<e.radius){if(u)return!0;let R=this.createContactEquation(a,o,e,t,l,c);d.vsub(g,R.ni),R.ni.normalize(),R.ni.scale(e.radius,R.ri),R.ri.vadd(A,R.ri),R.ri.vsub(a.position,R.ri),At.pointToWorldFrame(i,s,d,d),d.vsub(o.position,R.rj),At.vectorToWorldFrame(s,R.ni,R.ni),At.vectorToWorldFrame(s,R.ri,R.ri),this.result.push(R),this.createFrictionEquationsFromContact(R,this.frictionResult)}}x.length=0}planeTrimesh(e,t,A,i,n,s,a,o,l,c,u){const h=new b,p=mU;p.set(0,0,1),n.vmult(p,p);for(let f=0;f<t.vertices.length/3;f++){t.getVertex(f,h);const m=new b;m.copy(h),At.pointToWorldFrame(i,s,m,h);const g=BU;if(h.vsub(A,g),p.dot(g)<=0){if(u)return!0;const d=this.createContactEquation(a,o,e,t,l,c);d.ni.copy(p);const B=wU;p.scale(g.dot(p),B),h.vsub(B,B),d.ri.copy(B),d.ri.vsub(a.position,d.ri),d.rj.copy(h),d.rj.vsub(o.position,d.rj),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}}}}const ri=new b,Hi=new b,Pi=new b,dU=new b,pU=new b,fU=new Ct,gU=new Ct,mU=new b,BU=new b,wU=new b,vU=new b,yU=new b;new b;const _U=new b,xU=new b,CU=new b,EU=new b,bU=new b,MU=new b,UU=new b,SU=new b,FU=new b,TU=new b,QU=new b,IU=new wA,LU=[],ua=new b,tp=new b,RU=new b,DU=new b,HU=new b;function PU(r,e,t){let A=null;const i=r.length;for(let n=0;n!==i;n++){const s=r[n],a=RU;r[(n+1)%i].vsub(s,a);const o=DU;a.cross(e,o);const l=HU;t.vsub(s,l);const c=o.dot(l);if(A===null||c>0&&A===!0||c<=0&&A===!1){A===null&&(A=c>0);continue}else return!1}return!0}const da=new b,NU=new b,OU=new b,VU=new b,GU=[new b,new b,new b,new b,new b,new b],zU=new b,kU=new b,KU=new b,WU=new b,XU=new b,jU=new b,YU=new b,qU=new b,JU=new b,ZU=new b,$U=new b,eS=new b,tS=new b,AS=new b;new b;new b;const rS=new b,iS=new b,nS=new b,sS=new b,aS=new b,oS=new b,lS=new b,cS=new b,hS=new b,uS=new b,Ap=new Ct,dS=new b;new b;const pS=new b,rp=new b,fS=new b,gS=new b,mS=new b,BS=[0],wS=new b,vS=new b;class ip{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const A=t;t=e,e=A}return e<<16|t}set(e,t){const A=this.getKey(e,t),i=this.current;let n=0;for(;A>i[n];)n++;if(A!==i[n]){for(let s=i.length-1;s>=n;s--)i[s+1]=i[s];i[n]=A}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const A=this.current,i=this.previous,n=A.length,s=i.length;let a=0;for(let o=0;o<n;o++){let l=!1;const c=A[o];for(;c>i[a];)a++;l=c===i[a],l||np(e,c)}a=0;for(let o=0;o<s;o++){let l=!1;const c=i[o];for(;c>A[a];)a++;l=A[a]===c,l||np(t,c)}}}function np(r,e){r.push((e&4294901760)>>16,e&65535)}const yl=(r,e)=>r<e?`${r}-${e}`:`${e}-${r}`;class yS{constructor(){this.data={keys:[]}}get(e,t){const A=yl(e,t);return this.data[A]}set(e,t,A){const i=yl(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=A}delete(e,t){const A=yl(e,t),i=this.data.keys.indexOf(A);i!==-1&&this.data.keys.splice(i,1),delete this.data[A]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const A=t.pop();delete e[A]}}}class _S extends Jf{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new b,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new b,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new SM,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new sU,this.constraints=[],this.narrowphase=new uU(this),this.collisionMatrix=new kd,this.collisionMatrixPrevious=new kd,this.bodyOverlapKeeper=new ip,this.shapeOverlapKeeper=new ip,this.contactmaterials=[],this.contactMaterialTable=new yS,this.defaultMaterial=new an("default"),this.defaultContactMaterial=new as(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,A){A instanceof Va?this.raycastClosest(e,t,{skipBackfaces:!0},A):this.raycastAll(e,t,{skipBackfaces:!0},A)}raycastAll(e,t,A,i){return A===void 0&&(A={}),A.mode=bt.ALL,A.from=e,A.to=t,A.callback=i,_l.intersectWorld(this,A)}raycastAny(e,t,A,i){return A===void 0&&(A={}),A.mode=bt.ANY,A.from=e,A.to=t,A.result=i,_l.intersectWorld(this,A)}raycastClosest(e,t,A,i){return A===void 0&&(A={}),A.mode=bt.CLOSEST,A.from=e,A.to=t,A.result=i,_l.intersectWorld(this,A)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof ge&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,A=this.bodies,i=A.indexOf(e);if(i!==-1){A.splice(i,1);for(let n=0;n!==A.length;n++)A[n].index=n;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let A=0;A<t.length;A++){const i=t[A].shapes;for(let n=0;n<i.length;n++){const s=i[n];if(s.id===e)return s}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const A=Ft.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=A-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=A}step(e,t,A){if(A===void 0&&(A=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=Ft.now();let n=0;for(;this.accumulator>=e&&n<A&&(this.internalStep(e),this.accumulator-=e,n++,!(Ft.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const s=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){const o=this.bodies[a];o.previousPosition.lerp(o.position,s,o.interpolatedPosition),o.previousQuaternion.slerp(o.quaternion,s,o.interpolatedQuaternion),o.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,A=MS,i=US,n=this.bodies.length,s=this.bodies,a=this.solver,o=this.gravity,l=this.doProfiling,c=this.profile,u=ge.DYNAMIC;let h=-1/0;const p=this.constraints,f=bS;o.length();const m=o.x,g=o.y,d=o.z;let B=0;for(l&&(h=Ft.now()),B=0;B!==n;B++){const T=s[B];if(T.type===u){const I=T.force,L=T.mass;I.x+=L*m,I.y+=L*g,I.z+=L*d}}for(let T=0,I=this.subsystems.length;T!==I;T++)this.subsystems[T].update();l&&(h=Ft.now()),A.length=0,i.length=0,this.broadphase.collisionPairs(this,A,i),l&&(c.broadphase=Ft.now()-h);let v=p.length;for(B=0;B!==v;B++){const T=p[B];if(!T.collideConnected)for(let I=A.length-1;I>=0;I-=1)(T.bodyA===A[I]&&T.bodyB===i[I]||T.bodyB===A[I]&&T.bodyA===i[I])&&(A.splice(I,1),i.splice(I,1))}this.collisionMatrixTick(),l&&(h=Ft.now());const y=ES,x=t.length;for(B=0;B!==x;B++)y.push(t[B]);t.length=0;const w=this.frictionEquations.length;for(B=0;B!==w;B++)f.push(this.frictionEquations[B]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(A,i,this,t,y,this.frictionEquations,f),l&&(c.narrowphase=Ft.now()-h),l&&(h=Ft.now()),B=0;B<this.frictionEquations.length;B++)a.addEquation(this.frictionEquations[B]);const M=t.length;for(let T=0;T!==M;T++){const I=t[T],L=I.bi,P=I.bj,R=I.si,k=I.sj;let z;if(L.material&&P.material?z=this.getContactMaterial(L.material,P.material)||this.defaultContactMaterial:z=this.defaultContactMaterial,z.friction,L.material&&P.material&&(L.material.friction>=0&&P.material.friction>=0&&L.material.friction*P.material.friction,L.material.restitution>=0&&P.material.restitution>=0&&(I.restitution=L.material.restitution*P.material.restitution)),a.addEquation(I),L.allowSleep&&L.type===ge.DYNAMIC&&L.sleepState===ge.SLEEPING&&P.sleepState===ge.AWAKE&&P.type!==ge.STATIC){const X=P.velocity.lengthSquared()+P.angularVelocity.lengthSquared(),te=P.sleepSpeedLimit**2;X>=te*2&&(L.wakeUpAfterNarrowphase=!0)}if(P.allowSleep&&P.type===ge.DYNAMIC&&P.sleepState===ge.SLEEPING&&L.sleepState===ge.AWAKE&&L.type!==ge.STATIC){const X=L.velocity.lengthSquared()+L.angularVelocity.lengthSquared(),te=L.sleepSpeedLimit**2;X>=te*2&&(P.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(L,P,!0),this.collisionMatrixPrevious.get(L,P)||(Mn.body=P,Mn.contact=I,L.dispatchEvent(Mn),Mn.body=L,P.dispatchEvent(Mn)),this.bodyOverlapKeeper.set(L.id,P.id),this.shapeOverlapKeeper.set(R.id,k.id)}for(this.emitContactEvents(),l&&(c.makeContactConstraints=Ft.now()-h,h=Ft.now()),B=0;B!==n;B++){const T=s[B];T.wakeUpAfterNarrowphase&&(T.wakeUp(),T.wakeUpAfterNarrowphase=!1)}for(v=p.length,B=0;B!==v;B++){const T=p[B];T.update();for(let I=0,L=T.equations.length;I!==L;I++){const P=T.equations[I];a.addEquation(P)}}a.solve(e,this),l&&(c.solve=Ft.now()-h),a.removeAllEquations();const S=Math.pow;for(B=0;B!==n;B++){const T=s[B];if(T.type&u){const I=S(1-T.linearDamping,e),L=T.velocity;L.scale(I,L);const P=T.angularVelocity;if(P){const R=S(1-T.angularDamping,e);P.scale(R,P)}}}this.dispatchEvent(CS),l&&(h=Ft.now());const C=this.stepnumber%(this.quatNormalizeSkip+1)===0,_=this.quatNormalizeFast;for(B=0;B!==n;B++)s[B].integrate(e,C,_);this.clearForces(),this.broadphase.dirty=!0,l&&(c.integrate=Ft.now()-h),this.stepnumber+=1,this.dispatchEvent(xS);let F=!0;if(this.allowSleep)for(F=!1,B=0;B!==n;B++){const T=s[B];T.sleepTick(this.time),T.sleepState!==ge.SLEEPING&&(F=!0)}this.hasActiveBodies=F}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(hr,ur),e){for(let n=0,s=hr.length;n<s;n+=2)Un.bodyA=this.getBodyById(hr[n]),Un.bodyB=this.getBodyById(hr[n+1]),this.dispatchEvent(Un);Un.bodyA=Un.bodyB=null}if(t){for(let n=0,s=ur.length;n<s;n+=2)Sn.bodyA=this.getBodyById(ur[n]),Sn.bodyB=this.getBodyById(ur[n+1]),this.dispatchEvent(Sn);Sn.bodyA=Sn.bodyB=null}hr.length=ur.length=0;const A=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((A||i)&&this.shapeOverlapKeeper.getDiff(hr,ur),A){for(let n=0,s=hr.length;n<s;n+=2){const a=this.getShapeById(hr[n]),o=this.getShapeById(hr[n+1]);dr.shapeA=a,dr.shapeB=o,a&&(dr.bodyA=a.body),o&&(dr.bodyB=o.body),this.dispatchEvent(dr)}dr.bodyA=dr.bodyB=dr.shapeA=dr.shapeB=null}if(i){for(let n=0,s=ur.length;n<s;n+=2){const a=this.getShapeById(ur[n]),o=this.getShapeById(ur[n+1]);pr.shapeA=a,pr.shapeB=o,a&&(pr.bodyA=a.body),o&&(pr.bodyB=o.body),this.dispatchEvent(pr)}pr.bodyA=pr.bodyB=pr.shapeA=pr.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let A=0;A!==t;A++){const i=e[A];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new wA;const _l=new bt,Ft=globalThis.performance||{};if(!Ft.now){let r=Date.now();Ft.timing&&Ft.timing.navigationStart&&(r=Ft.timing.navigationStart),Ft.now=()=>Date.now()-r}new b;const xS={type:"postStep"},CS={type:"preStep"},Mn={type:ge.COLLIDE_EVENT_NAME,body:null,contact:null},ES=[],bS=[],MS=[],US=[],hr=[],ur=[],Un={type:"beginContact",bodyA:null,bodyB:null},Sn={type:"endContact",bodyA:null,bodyB:null},dr={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},pr={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class YA{constructor(e,t,A,i,n="div"){this.parent=e,this.object=t,this.property=A,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(n),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),YA.nextNameID=YA.nextNameID||0,this.$name.id=`lil-gui-name-${++YA.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",s=>s.stopPropagation()),this.domElement.addEventListener("keyup",s=>s.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(A)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class SS extends YA{constructor(e,t,A){super(e,t,A,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Pc(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const FS={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:Pc,toHexString:Pc},es={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},TS={isPrimitive:!1,match:r=>Array.isArray(r)||ArrayBuffer.isView(r),fromHexString(r,e,t=1){const A=es.fromHexString(r);e[0]=(A>>16&255)/255*t,e[1]=(A>>8&255)/255*t,e[2]=(A&255)/255*t},toHexString([r,e,t],A=1){A=255/A;const i=r*A<<16^e*A<<8^t*A<<0;return es.toHexString(i)}},QS={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const A=es.fromHexString(r);e.r=(A>>16&255)/255*t,e.g=(A>>8&255)/255*t,e.b=(A&255)/255*t},toHexString({r,g:e,b:t},A=1){A=255/A;const i=r*A<<16^e*A<<8^t*A<<0;return es.toHexString(i)}},IS=[FS,es,TS,QS];function LS(r){return IS.find(e=>e.match(r))}class RS extends YA{constructor(e,t,A,i){super(e,t,A,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=LS(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const n=Pc(this.$text.value);n&&this._setValueFromHexString(n)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class xl extends YA{constructor(e,t,A){super(e,t,A,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class DS extends YA{constructor(e,t,A,i,n,s){super(e,t,A,"lil-number"),this._initInput(),this.min(i),this.max(n);const a=s!==void 0;this.step(a?s:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let d=parseFloat(this.$input.value);isNaN(d)||(this._stepExplicit&&(d=this._snap(d)),this.setValue(this._clamp(d)))},t=d=>{const B=parseFloat(this.$input.value);isNaN(B)||(this._snapClampSetValue(B+d),this.$input.value=this.getValue())},A=d=>{d.key==="Enter"&&this.$input.blur(),d.code==="ArrowUp"&&(d.preventDefault(),t(this._step*this._arrowKeyMultiplier(d))),d.code==="ArrowDown"&&(d.preventDefault(),t(this._step*this._arrowKeyMultiplier(d)*-1))},i=d=>{this._inputFocused&&(d.preventDefault(),t(this._step*this._normalizeMouseWheel(d)))};let n=!1,s,a,o,l,c;const u=5,h=d=>{s=d.clientX,a=o=d.clientY,n=!0,l=this.getValue(),c=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",f)},p=d=>{if(n){const B=d.clientX-s,v=d.clientY-a;Math.abs(v)>u?(d.preventDefault(),this.$input.blur(),n=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(B)>u&&f()}if(!n){const B=d.clientY-o;c-=B*this._step*this._arrowKeyMultiplier(d),l+c>this._max?c=this._max-l:l+c<this._min&&(c=this._min-l),this._snapClampSetValue(l+c)}o=d.clientY},f=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",f)},m=()=>{this._inputFocused=!0},g=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",A),this.$input.addEventListener("wheel",i,{passive:!1}),this.$input.addEventListener("mousedown",h),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",g)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const e=(d,B,v,y,x)=>(d-B)/(v-B)*(x-y)+y,t=d=>{const B=this.$slider.getBoundingClientRect();let v=e(d,B.left,B.right,this._min,this._max);this._snapClampSetValue(v)},A=d=>{this._setDraggingStyle(!0),t(d.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",n)},i=d=>{t(d.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",n)};let s=!1,a,o;const l=d=>{d.preventDefault(),this._setDraggingStyle(!0),t(d.touches[0].clientX),s=!1},c=d=>{d.touches.length>1||(this._hasScrollBar?(a=d.touches[0].clientX,o=d.touches[0].clientY,s=!0):l(d),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",h))},u=d=>{if(s){const B=d.touches[0].clientX-a,v=d.touches[0].clientY-o;Math.abs(B)>Math.abs(v)?l(d):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",h))}else d.preventDefault(),t(d.touches[0].clientX)},h=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",h)},p=this._callOnFinishChange.bind(this),f=400;let m;const g=d=>{if(Math.abs(d.deltaX)<Math.abs(d.deltaY)&&this._hasScrollBar)return;d.preventDefault();const B=this._normalizeMouseWheel(d)*this._step;this._snapClampSetValue(this.getValue()+B),this.$input.value=this.getValue(),clearTimeout(m),m=setTimeout(p,f)};this.$slider.addEventListener("mousedown",A),this.$slider.addEventListener("touchstart",c,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:A}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,A=-e.wheelDelta/120,A*=this._stepExplicit?1:10),t+-A}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class HS extends YA{constructor(e,t,A,i){super(e,t,A,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const A=document.createElement("option");A.textContent=t,this.$select.appendChild(A)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class PS extends YA{constructor(e,t,A){super(e,t,A,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var NS=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function OS(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let sp=!1;class wh{constructor({parent:e,autoPlace:t=e===void 0,container:A,width:i,title:n="Controls",closeFolders:s=!1,injectStyles:a=!0,touchStyles:o=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(n),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),o&&this.domElement.classList.add("lil-allow-touch-styles"),!sp&&a&&(OS(NS),sp=!0),A?A.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=s}add(e,t,A,i,n){if(Object(A)===A)return new HS(this,e,t,A);const s=e[t];switch(typeof s){case"number":return new DS(this,e,t,A,i,n);case"boolean":return new SS(this,e,t);case"string":return new PS(this,e,t);case"function":return new xl(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,s)}addColor(e,t,A=1){return new RS(this,e,t,A)}addFolder(e){const t=new wh({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(A=>{A instanceof xl||A._name in e.controllers&&A.load(e.controllers[A._name])}),t&&e.folders&&this.folders.forEach(A=>{A._title in e.folders&&A.load(e.folders[A._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(A=>{if(!(A instanceof xl)){if(A._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${A._name}"`);t.controllers[A._name]=A.save()}}),e&&this.folders.forEach(A=>{if(A._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${A._title}"`);t.folders[A._title]=A.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");const A=n=>{n.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",A))};this.$children.addEventListener("transitionend",A);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const VS=document.getElementById("app"),nA=new ay({antialias:!0,preserveDrawingBuffer:!0});nA.setPixelRatio(Math.min(window.devicePixelRatio,2));nA.setSize(window.innerWidth,window.innerHeight);nA.shadowMap.enabled=!0;nA.shadowMap.type=up;nA.toneMapping=pp;nA.toneMappingExposure=1.15;nA.physicallyCorrectLights=!0;VS.appendChild(nA.domElement);const vA=new tB;vA.background=new Qe(527121);vA.fog=new th(527121,40,140);const Cr=new mA(50,window.innerWidth/window.innerHeight,.1,200);Cr.position.set(7,5,10);vA.add(Cr);const oo=new My(nA);oo.addPass(new Uy(vA,Cr));const ui=new nn(new Ee(window.innerWidth,window.innerHeight),.35,.8,.2);oo.addPass(ui);const fi=new ly(Cr,nA.domElement);fi.enableDamping=!0;fi.maxPolarAngle=Math.PI*.48;fi.target.set(0,1.2,0);fi.update();const lo=new iA(new ts(500,500),new oB({opacity:.25}));lo.rotation.x=-Math.PI/2;lo.position.y=-.01;lo.receiveShadow=!0;vA.add(lo);const os=new wB(500,200,4868682,4868682);os.position.y=.001;os.material.opacity=.24;os.material.transparent=!0;os.material.depthWrite=!1;vA.add(os);const GS=new dB(16316145,1053466,1.35);vA.add(GS);const er=new Hp(16777215,2.4);er.position.set(14,18,12);er.castShadow=!0;er.shadow.mapSize.set(4096,4096);er.shadow.camera.near=1;er.shadow.camera.far=80;er.shadow.camera.left=-24;er.shadow.camera.right=24;er.shadow.camera.top=24;er.shadow.camera.bottom=-24;vA.add(er);const ng=new Hp(12044031,.9);ng.position.set(-8,9,-10);vA.add(ng);const co=new fB(16773592,1.1,80,Math.PI/5,.2,1);co.position.set(-6,12,6);co.castShadow=!0;vA.add(co);vA.add(co.target);const zS=YS(),kS=qS(nA.capabilities.getMaxAnisotropy?.()||8),KS=JS(),sg=new cB({color:16777215,vertexColors:!0,map:kS,bumpMap:KS,bumpScale:.35,gradientMap:zS,emissive:new Qe(9479423),emissiveIntensity:.06}),WS=new rh({color:10396853}),Ga=new zi;vA.add(Ga);let Kt=[],ag=null,og=!1;const za=new BB,ka=new Ee,lg=new gr(new N(0,1,0),0);let Ka=!1,vr=null,vh=!1,ho=!1,Cl,Nc,ap;const Oc=[],cg=new Pp,Ht=[new N(.1,0,.45),new N(.32,0,.55),new N(.64,0,.42),new N(.9,0,.58)];let op=Ht.map(r=>r.clone());const Ye={canvas:null,ctx:null,padding:16,width:260,height:260,dragging:null},hg=new lB({color:16718362,emissive:16718362,emissiveIntensity:8,roughness:.25,metalness:0});hg.toneMapped=!1;const BA=new iA(new nh(.16,32,32),hg);BA.castShadow=!0;vA.add(BA);const He={brickLength:.6,wallLength:8,wallWidth:.35,wallHeight:3,gap:0,rows:10,falloff:.15,horizontalGap:0};let yh=He.wallHeight/He.rows,Vc=He.rows;const tA={bloomStrength:.3,bloomThreshold:.08,bloomRadius:1,glowSpeed:1.25,glowIntensity:.1},ls=new wh({title:"Parametric Brick Wall"}),Er=ls.addFolder("Wall Parameters");Er.add(He,"brickLength",.2,1.2,.02).name("Brick Length").onChange(tr);Er.add(He,"wallLength",2,20,.1).name("Wall Length").onChange(tr);Er.add(He,"wallWidth",.2,.8,.01).name("Wall Width").onChange(tr);Er.add(He,"wallHeight",1,6,.1).name("Wall Height").onChange(jS);Er.add(He,"gap",0,.15,.005).name("Vertical Gap").onChange(tr);Er.add(He,"horizontalGap",0,.15,.005).name("Horizontal Gap").onChange(tr);Er.add(He,"rows",2,30,1).name("Rows").onChange(XS);Er.add(He,"falloff",0,1,.01).name("Falloff").onChange(()=>{pg(),cs()});Er.open();const _h=ls.addFolder("Catmull-Rom Curve");_h.domElement.style.marginTop="8px";uF(_h);_h.open();const pn=ls.addFolder("VFX Settings");pn.add(tA,"bloomStrength",0,.5,.01).name("Bloom Strength").onChange(()=>ui.strength=tA.bloomStrength);pn.add(tA,"bloomThreshold",0,1,.01).name("Bloom Threshold").onChange(()=>ui.threshold=tA.bloomThreshold);pn.add(tA,"bloomRadius",0,1.25,.01).name("Bloom Radius").onChange(()=>ui.radius=tA.bloomRadius);pn.add(tA,"glowSpeed",.25,10,.05).name("Glow Speed");pn.add(tA,"glowIntensity",0,.3,.01).name("Glow Intensity");pn.close();const xh=ls.addFolder("Export");xh.add({exportObj:aF},"exportObj").name("Export .obj");xh.add({snapshot:oF},"snapshot").name("Snapshot");xh.add({exportPly:lF},"exportPly").name("Export .ply");const ug=ls.addFolder("Simulation");ug.add({start:cF},"start").name("Start Collapse");ug.add({reset:hF},"reset").name("Reset Wall");function El(){Eh(),dg(),tr()}function dg(){Wi()}function pg(r=ag){if(og)return;const e=r?r.getPoint(.5):new N,t=r?r.getTangent(.5).setY(0).normalize():new N(0,0,1),A=new N().crossVectors(t,new N(0,1,0)).normalize().multiplyScalar(He.wallWidth+.8),i=e.clone().add(A);fg(i.x,i.z,He.wallHeight*.6)}function fg(r,e,t=null){const A=He.wallHeight+4,i=t!==null?t:BA.position.y||He.wallHeight*.5,n=Je.clamp(i,.12,A);BA.position.set(r,n,e)}function XS(){const r=yh||He.wallHeight/Math.max(Vc,1);He.wallHeight=r*He.rows,Vc=He.rows,tr()}function jS(){yh=He.wallHeight/Math.max(He.rows,1),tr()}function YS(){const r=new Uint8Array([255,255,255,220,224,235,186,190,200,130,134,145,90,95,110]),e=new Tp(r,5,1,Wc);return e.needsUpdate=!0,e.colorSpace=zt,e.minFilter=rA,e.magFilter=rA,e.generateMipmaps=!1,e}function qS(r=8){const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d");t.fillStyle="#c95333",t.fillRect(0,0,256,256);const A=256*60;for(let s=0;s<A;s+=1){const a=Math.random()*256,o=Math.random()*256,l=.1+Math.random()*.2;t.fillStyle=`rgba(85,40,25,${l})`,t.fillRect(a,o,1.2+Math.random()*1.5,1.2+Math.random()*1.5)}const i=t.createLinearGradient(0,0,0,256);i.addColorStop(0,"rgba(0,0,0,0.05)"),i.addColorStop(1,"rgba(255,255,255,0.05)"),t.fillStyle=i,t.fillRect(0,0,256,256);const n=new Ip(e);return n.colorSpace=zt,n.wrapS=n.wrapT=Kn,n.repeat.set(1,1),n.anisotropy=r,n.needsUpdate=!0,n}function JS(){const r=document.createElement("canvas");r.width=r.height=256;const e=r.getContext("2d");e.fillStyle="#808080",e.fillRect(0,0,256,256);const t=256*120;for(let i=0;i<t;i+=1){const n=Math.random()*256,s=Math.random()*256,a=90+Math.random()*130|0;e.fillStyle=`rgb(${a},${a},${a})`,e.fillRect(n,s,1.5+Math.random()*1.5,1.5+Math.random()*1.5)}const A=new Ip(r);return A.wrapS=A.wrapT=Kn,A.repeat.set(1,1),A.needsUpdate=!0,A}function ZS(){Eh();const r=He.wallLength*.9,e=He.wallLength*.35,t=Ht.map(a=>{const o=Je.clamp(a.x,0,1),l=Je.clamp(a.z,0,1);return new N((o-.5)*r,0,(.5-l)*e)}),A=t.reduce((a,o)=>a.add(o),new N).multiplyScalar(1/t.length),i=new uc(t,!1,"catmullrom",.5),n=Math.max(i.getLength(),1e-4),s=He.wallLength/n;return op=t.map(a=>a.clone().sub(A).multiplyScalar(s).add(A)),new uc(op,!1,"catmullrom",.5)}function $S(){[...Ga.children].forEach(r=>{Ga.remove(r),r.traverse(e=>{(e.isMesh||e.isLineSegments)&&e.geometry&&e.geometry.dispose()})}),Kt=[],Ch()}function eF(r){const e=r.attributes.position.count,t=new Qe("#f0f1f5"),A=new Qe("#d8dbe3"),i=[];for(let s=0;s<e;s+=1){const a=s%3===0?t:A;i.push(a.r,a.g,a.b)}const n=new Pt(i,3);r.setAttribute("color",n),r.userData.baseColors=Float32Array.from(n.array)}function tF(r,e,t){const A=new hn(r,e,t,1,1,1);eF(A);const i=new iA(A,sg);i.castShadow=!0,i.receiveShadow=!0;const n=new sB(A),s=new Qp(n,WS),a=new cn({color:16722474,transparent:!0,opacity:0,depthWrite:!1,blending:Ca}),o=new iA(A.clone(),a);o.visible=!1;const l=new zi;return l.add(i),l.add(s),l.add(o),l.castShadow=!0,l.receiveShadow=!0,{group:l,glow:o}}function tr(){const r=ZS();ag=r,pg(r),$S(),Wi();const e=Math.max(r.getLength(),1e-4),t=Math.max(2,Math.ceil(e/He.brickLength)),A=e/t,i=Math.max(.001,1-He.horizontalGap),n=A*1.01*i,s=He.wallHeight/He.rows,a=Math.max(.05,s-He.gap);for(let o=0;o<He.rows;o+=1){const l=o*s+a/2,c=o%2===0?A*.5:0;for(let u=c,h=0;u<=e-A*.25;u+=A,h+=1){const p=Je.clamp(u/e,0,1),f=r.getPointAt(p),m=r.getTangentAt(p).setY(0).normalize();m.lengthSq()<1e-5&&m.set(1,0,0),f.y=l;const{group:g,glow:d}=tF(n,a,He.wallWidth),B=new Kr;B.setFromUnitVectors(new N(1,0,0),m),g.position.copy(f),g.quaternion.copy(B),Ga.add(g);const v={object:g,glow:d,row:o,column:h,curveT:p,dims:{x:n,y:a,z:He.wallWidth}};Kt.push(v),ho&&vg(v)}}Bg(),cs(),yh=He.wallHeight/Math.max(He.rows,1),Vc=He.rows}function cs(){const r=Kt;if(!r.length)return;Kt.forEach(h=>{h.object.visible=!0,h.glow&&(h.glow.visible=!1,h.glow.userData.baseOpacity=0,h.glow.userData.intensity=0)});let e=1/0;r.forEach(h=>{const p=BA.position.distanceTo(h.object.position);p<e&&(e=p)});const t=Math.max(He.wallLength,He.wallHeight)*.6+He.wallWidth,A=Je.lerp(.5,2,He.falloff),i=t*A,n=Je.clamp(1-e/Math.max(i,.001),0,1),s=Je.clamp(He.falloff*n,0,1),a=[...r].sort((h,p)=>{const f=h.object.position.distanceTo(BA.position),m=p.object.position.distanceTo(BA.position);return Math.abs(f-m)>1e-4?f-m:p.row-h.row}),o=Math.floor(a.length*.75),l=Math.floor(o*s);a.forEach((h,p)=>{h.object.visible=p>=l});const c=He.falloff>0,u=Math.max(He.wallLength,He.wallHeight)*.9+He.wallWidth+1.2;Kt.forEach(h=>{if(!h.glow)return;const p=BA.position.distanceTo(h.object.position),f=Je.clamp(1-p/Math.max(u,.001),0,1),m=Math.pow(f,2.2),g=f>.85?Je.smoothstep(f,.85,1)*.7:0,d=Je.clamp(m+g,0,1.6),B=h.object.visible&&c?d:0;h.glow.userData.baseOpacity=B,h.glow.userData.intensity=d,h.glow.visible=c&&B>.01;const v=Je.clamp(f,0,1);h.colorIntensity=Math.max(v,d)}),Bg(),Kt.forEach(h=>uo(h))}function gg(r){const e=nA.domElement.getBoundingClientRect();ka.x=(r.clientX-e.left)/e.width*2-1,ka.y=-((r.clientY-e.top)/e.height)*2+1}function AF(r){if(gg(r),za.setFromCamera(ka,Cr),za.intersectObject(BA,!1).length){const e=Cr.getWorldDirection(new N);lg.setFromNormalAndCoplanarPoint(e,BA.position),Ka=!0,og=!0,fi.enabled=!1}}function rF(r){if(!Ka)return;gg(r),za.setFromCamera(ka,Cr);const e=new N;za.ray.intersectPlane(lg,e)&&(fg(e.x,e.z,e.y),cs())}function iF(){Ka&&(Ka=!1,fi.enabled=!0)}function nF(){Cr.aspect=window.innerWidth/window.innerHeight,Cr.updateProjectionMatrix(),nA.setSize(window.innerWidth,window.innerHeight),oo.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",nF);nA.domElement.addEventListener("pointerdown",AF);nA.domElement.addEventListener("pointermove",rF);window.addEventListener("pointerup",iF);dg();tr();function mg(){requestAnimationFrame(mg),fi.update(),sF(),oo.render()}mg();function sF(){const r=performance.now()*.001,e=.5+.5*Math.sin(r*tA.glowSpeed),t=tA.glowIntensity*e;sg.emissiveIntensity=.06;const A=He.falloff>0,i=8,n=A?4.5:0;if(BA.material.emissiveIntensity=i+t*n,Kt.forEach(s=>{if(s.glow&&s.glow.visible){const a=s.glow.userData.baseOpacity||0,o=s.glow.userData.intensity||0,l=Je.lerp(1.2,3.6,o);s.glow.material.opacity=a*l*(.55+1.05*t);const c=Je.lerp(.35,.05,o);s.glow.material.color.setRGB(1,c,c)}uo(s,t,A)}),ui.strength=tA.bloomStrength,ui.threshold=tA.bloomThreshold,ui.radius=tA.bloomRadius,ho&&vr){const s=cg.getDelta();vr.step(1/60,s,3),Kt.forEach(a=>{a.body&&(a.object.position.copy(a.body.position),a.object.quaternion.copy(a.body.quaternion))})}}function uo(r,e=0,t=!1){const A=r.object.children.find(p=>p.isMesh);if(!A)return;const i=A.geometry,n=i.userData.baseColors,s=i.getAttribute("color");if(!n||!s)return;const a=r.baseColorIntensity||0,o=r.colorIntensity||0,l=t?1+e*.35:1,c=Math.max(a*1.2,o*3),u=Je.clamp(c*5*l,0,1),h=new Qe(1,0,0);for(let p=0;p<s.count;p+=1){const f=p*3,m=n[f],g=n[f+1],d=n[f+2];s.array[f]=Je.lerp(m,h.r,u),s.array[f+1]=Je.lerp(g,h.g,u),s.array[f+2]=Je.lerp(d,h.b,u)}s.needsUpdate=!0}function Bg(){const r=Kt.filter(a=>a.object.visible);if(!r.length)return;let e=1/0,t=-1/0,A=1/0,i=-1/0;r.forEach(a=>{const o=a.object.children.find(c=>c.isMesh);if(!o)return;const l=new ln().setFromObject(o);e=Math.min(e,l.min.y),t=Math.max(t,l.max.y),A=Math.min(A,l.min.z),i=Math.max(i,l.max.z)});const n=Math.max(t-e,1e-4),s=Math.max(i-A,1e-4);r.forEach(a=>{const o=a.object.children.find(h=>h.isMesh);if(!o)return;const l=o.geometry.attributes.position;let c=0;for(let h=0;h<l.count;h+=1){const p=(l.getY(h)-e)/n,f=(l.getZ(h)-A)/s;c+=p*.7+f*.3}const u=c/l.count;a.baseColorIntensity=Je.clamp(u,0,1)})}function aF(){cs();const r=He.falloff>0,e=r?tA.glowIntensity:0;Kt.forEach(v=>uo(v,e,r));const t=new Fy,A=Kt.filter(v=>v.object.visible);if(!A.length){console.warn("No visible bricks to export.");return}const i=[];if(A.forEach(v=>{const y=v.object.children.find(T=>T.isMesh);if(!y||!y.geometry)return;const x=y.geometry.clone(),w=x.getAttribute("position"),M=w.count,S=new Float32Array(M*3);let C=1/0,_=-1/0;for(let T=0;T<M;T++){const I=w.getY(T);C=Math.min(C,I),_=Math.max(_,I)}const F=Math.max(_-C,1e-4);for(let T=0;T<M;T++){const I=(w.getY(T)-C)/F,L=Je.lerp(.1,0,I),P=Je.lerp(.08,0,I);S[T*3]=1,S[T*3+1]=L,S[T*3+2]=P}x.setAttribute("color",new hA(S,3)),x.applyMatrix4(y.matrixWorld),i.push(x)}),!i.length)return;const n=Wp(i,!0),s=n.getAttribute("position"),a=new Float32Array(s.count*3);let o=1/0,l=-1/0,c=1/0,u=-1/0;for(let v=0;v<s.count;v++){const y=s.getY(v),x=s.getZ(v);o=Math.min(o,y),l=Math.max(l,y),c=Math.min(c,x),u=Math.max(u,x)}const h=Math.max(l-o,1e-4),p=Math.max(u-c,1e-4);for(let v=0;v<s.count;v++){const y=s.getY(v),x=s.getZ(v),w=(y-o)/h,M=(x-c)/p,S=Je.clamp(w*.7+M*.3,0,1);a[v*3]=1,a[v*3+1]=Je.lerp(.6,0,S),a[v*3+2]=Je.lerp(.6,0,S)}n.setAttribute("color",new hA(a,3));const f=new iA(n,new cn({vertexColors:!0})),m=t.parse(f),g=new Blob([m],{type:"text/plain"}),d=URL.createObjectURL(g),B=document.createElement("a");B.href=d,B.download="brick_wall.obj",B.click(),setTimeout(()=>URL.revokeObjectURL(d),1500)}function oF(){eM(document.body,{backgroundColor:"#080b11",useCORS:!0,logging:!1}).then(r=>{const e=r.toDataURL("image/png",1),t=document.createElement("a");t.href=e,t.download="brick_wall_snapshot.png",t.click()})}function lF(){cs();const r=!0,e=Math.max(tA.glowIntensity,.2);Kt.forEach(y=>uo(y,e,r));const t=new Ty,A=Kt.filter(y=>y.object.visible);if(!A.length){console.warn("No visible bricks to export.");return}const i=[];if(A.forEach(y=>{const x=y.object.children.find(M=>M.isMesh);if(!x||!x.geometry)return;const w=x.geometry.clone();w.applyMatrix4(x.matrixWorld),i.push(w)}),!i.length)return;const n=Wp(i,!0),s=n.getAttribute("position"),a=new Float32Array(s.count*3);let o=1/0,l=-1/0,c=1/0,u=-1/0;const h=BA.position.clone();for(let y=0;y<s.count;y++){const x=s.getY(y),w=s.getX(y)-h.x,M=s.getY(y)-h.y,S=s.getZ(y)-h.z,C=Math.sqrt(w*w+M*M+S*S);o=Math.min(o,x),l=Math.max(l,x),c=Math.min(c,C),u=Math.max(u,C)}const p=Math.max(l-o,1e-4),f=Math.max(u-c,1e-4);for(let y=0;y<s.count;y++){const x=(s.getY(y)-o)/p,w=s.getX(y)-h.x,M=s.getY(y)-h.y,S=s.getZ(y)-h.z,C=Math.sqrt(w*w+M*M+S*S),_=Math.min(Math.max((C-c)/f,0),1),F=Je.clamp(.2+_*.7+x*.05,0,1),T=Je.lerp(.6,0,F),I=Je.lerp(.6,0,F);a[y*3]=1,a[y*3+1]=T,a[y*3+2]=I}n.setAttribute("color",new hA(a,3));const m=new iA(n,new cn({vertexColors:!0})),g=t.parse(m),d=new Blob([g],{type:"text/plain"}),B=URL.createObjectURL(d),v=document.createElement("a");v.href=B,v.download="brick_wall.ply",v.click(),setTimeout(()=>URL.revokeObjectURL(B),1500)}function wg(){vr=new _S,vr.gravity.set(0,-25.9,0),Cl=new an("ground"),Nc=new an("brick"),ap=new as(Cl,Nc,{friction:.5,restitution:.05}),vr.addContactMaterial(ap);const r=new ge({mass:0,shape:new ns(new b(250,.1,250)),material:Cl});r.position.set(0,-.05,0),vr.addBody(r),vh=!0}function Ch(){vr&&(Oc.forEach(r=>vr.removeBody(r)),Oc.length=0,Kt.forEach(r=>{r.body=null}))}function vg(r){vh||wg();const{x:e,y:t,z:A}=r.dims,i=new ns(new b(e/2,t/2,A/2)),n=new ge({mass:1,shape:i,position:new b(r.object.position.x,r.object.position.y,r.object.position.z),quaternion:new Ct(r.object.quaternion.x,r.object.quaternion.y,r.object.quaternion.z,r.object.quaternion.w),material:Nc,allowSleep:!1,linearDamping:.007,angularDamping:.0035});vr.addBody(n),Oc.push(n),r.body=n}function cF(){ho=!0,Ch(),vh||wg(),Kt.forEach(A=>vg(A));const r=Math.max(...Kt.map(A=>A.row)),e=BA.position.clone(),t=Math.max(He.wallLength*.35,1.5);Kt.forEach(A=>{if(!A.body)return;const i=A.object.position.distanceTo(e),n=Je.clamp(1-i/t,0,1),s=Math.pow(n,2.6),a=r>0?A.row/r:0,o=s*.95+a*.45,l=(.05+.15*s)*1.6*1.7,c=(.4+6*o)*2*1.15*2.15625*1.18965*1.071,u=new b((Math.random()-.5)*l,-c,(Math.random()-.5)*l);A.body.applyImpulse(u,A.body.position);const h=new b((Math.random()-.5)*4*1.15,(Math.random()-.5)*4*1.15,(Math.random()-.5)*4*1.15);A.body.angularVelocity=h}),cg.getElapsedTime()}function hF(){ho=!1,Ch(),tr()}function uF(r){const e=document.createElement("div");e.style.padding="8px 6px 10px";const t=document.createElement("canvas");t.width=Ye.width,t.height=Ye.height,t.style.width="100%",t.style.borderRadius="10px",t.style.background="linear-gradient(180deg, #0c111c 0%, #0a0e17 100%)",t.style.boxShadow="inset 0 0 0 1px rgba(255,255,255,0.06)",t.style.cursor="crosshair",e.appendChild(t);const A=document.createElement("div");A.style.marginTop="6px",A.style.fontSize="12px",A.style.lineHeight="1.5",A.style.color="#c7cedd",A.innerHTML="Drag points to bend the path.<br>Points are normalized (0-1) across the panel.",e.appendChild(A);const i=document.createElement("div");i.style.marginTop="4px",i.style.fontSize="12px",i.style.lineHeight="1.5",i.style.color="#c7cedd",i.textContent="Left click on the curve to add new point, and right click on the point to delete it.",e.appendChild(i),r.domElement.appendChild(e),Ye.canvas=t,Ye.ctx=t.getContext("2d"),fF(r);const n=o=>{o.preventDefault();const l=lp(o),c=yg().map(Wa).findIndex(u=>dF(u,l)<225);if(c>=0){if(o.button===2){mF(c),El(),Wi();return}Ye.dragging=c,window.addEventListener("pointermove",s),window.addEventListener("pointerup",a,{once:!0});return}if(o.button===0){const u=cp(l);gF(u),El(),Wi()}},s=o=>{if(Ye.dragging===null)return;const l=lp(o),c=cp(l);Ht[Ye.dragging].x=c.x,Ht[Ye.dragging].z=c.z,El(),Wi()},a=()=>{Ye.dragging=null,window.removeEventListener("pointermove",s)};t.addEventListener("pointerdown",n),t.addEventListener("contextmenu",o=>o.preventDefault()),Wi()}function yg(){return Ht}function lp(r){const e=Ye.canvas.getBoundingClientRect();return{x:(r.clientX-e.left)/e.width*Ye.width,y:(r.clientY-e.top)/e.height*Ye.height}}function Wa(r){const e=Ye.width-Ye.padding*2,t=Ye.height-Ye.padding*2,A=Je.clamp(r.x,0,1),i=Je.clamp(r.z,0,1);return{x:Ye.padding+A*e,y:Ye.height-(Ye.padding+i*t)}}function cp(r){const e=Ye.width-Ye.padding*2,t=Ye.height-Ye.padding*2,A=Je.clamp((r.x-Ye.padding)/e,0,1),i=Je.clamp((Ye.height-r.y-Ye.padding)/t,0,1);return{x:A,z:i}}function Wi(){if(!Ye.ctx)return;const r=Ye.ctx,e=Ye.width,t=Ye.height;r.clearRect(0,0,e,t),r.save(),r.strokeStyle="rgba(255,255,255,0.05)",r.lineWidth=1;const A=20;for(let a=Ye.padding;a<=e-Ye.padding+1;a+=A)r.beginPath(),r.moveTo(a,Ye.padding),r.lineTo(a,t-Ye.padding),r.stroke();for(let a=Ye.padding;a<=t-Ye.padding+1;a+=A)r.beginPath(),r.moveTo(Ye.padding,a),r.lineTo(e-Ye.padding,a),r.stroke();r.restore();const i=yg(),n=i.map(Wa),s=pF(i);if(r.save(),r.strokeStyle="#3ecaff",r.lineWidth=2.5,r.beginPath(),s.length>0){r.moveTo(s[0].x,s[0].y);for(let a=1;a<s.length;a++)r.lineTo(s[a].x,s[a].y)}r.stroke(),r.restore(),n.forEach((a,o)=>{r.save(),r.fillStyle=o===Ye.dragging?"#ff6b4a":"#6fb2ff",r.strokeStyle="rgba(255,255,255,0.35)",r.lineWidth=1.5,r.beginPath(),r.arc(a.x,a.y,8,0,Math.PI*2),r.fill(),r.stroke(),r.restore()})}function dF(r,e){const t=r.x-e.x,A=r.y-e.y;return t*t+A*A}function pF(r){return r.length?r.length===1?[Wa(r[0])]:new uc(r.map(e=>new N(e.x,0,e.z)),!1,"catmullrom",.5).getSpacedPoints(80).map(e=>Wa({x:e.x,z:e.z})):[]}function fF(r){const e=()=>{r.domElement.querySelectorAll(".controller.empty").forEach(t=>t.remove())};e(),requestAnimationFrame(e)}function Eh(){for(let r=0;r<Ht.length;r+=1){const e=r===0?0:Ht[r-1].x+.02,t=r===Ht.length-1?1:Ht[r+1].x-.02;Ht[r].x=Je.clamp(Ht[r].x,e,t),Ht[r].z=Je.clamp(Ht[r].z,0,1)}}function gF(r){Ht.push(new N(r.x,0,r.z)),Ht.sort((e,t)=>e.x-t.x),Eh()}function mF(r){r<=0||r>=Ht.length-1||Ht.length<=2||Ht.splice(r,1)}
