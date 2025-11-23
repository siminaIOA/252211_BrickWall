(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))A(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&A(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function A(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))t(A);new MutationObserver(A=>{for(const r of A)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function e(A){const r={};return A.integrity&&(r.integrity=A.integrity),A.referrerPolicy&&(r.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?r.credentials="include":A.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(A){if(A.ep)return;A.ep=!0;const r=e(A);fetch(A.href,r)}})();const Vc="181",Xr={ROTATE:0,DOLLY:1,PAN:2},Vr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sg=0,Lh=1,Fg=2,hp=1,up=2,fi=3,Gi=0,cA=1,mi=2,XA=0,Yr=1,Ca=2,Ih=3,Rh=4,Tg=5,rr=100,Qg=101,Lg=102,Ig=103,Rg=104,Dg=200,Pg=201,Hg=202,Ng=203,bl=204,Ml=205,Og=206,kg=207,Vg=208,zg=209,Gg=210,Kg=211,Wg=212,Xg=213,Yg=214,Ul=0,Sl=1,Fl=2,Zr=3,Tl=4,Ql=5,Ll=6,Il=7,dp=0,jg=1,qg=2,ki=0,Jg=1,Zg=2,$g=3,pp=4,em=5,tm=6,Am=7,fp=300,$r=301,es=302,Rl=303,Dl=304,Xa=306,Gs=1e3,Bi=1001,Pl=1002,iA=1003,im=1004,dn=1005,EA=1006,go=1007,ar=1008,qA=1009,gp=1010,mp=1011,Ks=1012,zc=1013,dr=1014,wi=1015,YA=1016,Gc=1017,Kc=1018,Ws=1020,Bp=35902,wp=35899,vp=1021,Wc=1022,DA=1023,Xs=1026,Ys=1027,yp=1028,Xc=1029,Yc=1030,jc=1031,qc=1033,pa=33776,fa=33777,ga=33778,ma=33779,Hl=35840,Nl=35841,Ol=35842,kl=35843,Vl=36196,zl=37492,Gl=37496,Kl=37808,Wl=37809,Xl=37810,Yl=37811,jl=37812,ql=37813,Jl=37814,Zl=37815,$l=37816,ec=37817,tc=37818,Ac=37819,ic=37820,rc=37821,sc=36492,nc=36494,ac=36495,oc=36283,lc=36284,cc=36285,hc=36286,rm=3200,sm=3201,Jc=0,nm=1,Di="",zt="srgb",ts="srgb-linear",Ea="linear",st="srgb",mr=7680,Dh=519,am=512,om=513,lm=514,_p=515,cm=516,hm=517,um=518,dm=519,Ph=35044,Hh="300 es",WA=2e3,ba=2001;function xp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ma(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pm(){const i=Ma("canvas");return i.style.display="block",i}const Nh={};function Oh(...i){const e="THREE."+i.shift();console.log(e,...i)}function De(...i){const e="THREE."+i.shift();console.warn(e,...i)}function vt(...i){const e="THREE."+i.shift();console.error(e,...i)}function js(...i){const e=i.join(" ");e in Nh||(Nh[e]=!0,De(...i))}function fm(i,e,t){return new Promise(function(A,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:A()}}setTimeout(s,t)})}class pr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const A=this._listeners;A[e]===void 0&&(A[e]=[]),A[e].indexOf(t)===-1&&A[e].push(t)}hasEventListener(e,t){const A=this._listeners;return A===void 0?!1:A[e]!==void 0&&A[e].indexOf(t)!==-1}removeEventListener(e,t){const A=this._listeners;if(A===void 0)return;const r=A[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const A=t[e.type];if(A!==void 0){e.target=this;const r=A.slice(0);for(let s=0,n=r.length;s<n;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kh=1234567;const jr=Math.PI/180,As=180/Math.PI;function as(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,A=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[A&255]+Wt[A>>8&255]+Wt[A>>16&255]+Wt[A>>24&255]).toLowerCase()}function Xe(i,e,t){return Math.max(e,Math.min(t,i))}function Zc(i,e){return(i%e+e)%e}function gm(i,e,t,A,r){return A+(i-e)*(r-A)/(t-e)}function mm(i,e,t){return i!==e?(t-i)/(e-i):0}function Ps(i,e,t){return(1-t)*i+t*e}function Bm(i,e,t,A){return Ps(i,e,1-Math.exp(-t*A))}function wm(i,e=1){return e-Math.abs(Zc(i,e*2)-e)}function vm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ym(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function _m(i,e){return i+Math.floor(Math.random()*(e-i+1))}function xm(i,e){return i+Math.random()*(e-i)}function Cm(i){return i*(.5-Math.random())}function Em(i){i!==void 0&&(kh=i);let e=kh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bm(i){return i*jr}function Mm(i){return i*As}function Um(i){return(i&i-1)===0&&i!==0}function Sm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Fm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Tm(i,e,t,A,r){const s=Math.cos,n=Math.sin,a=s(t/2),o=n(t/2),l=s((e+A)/2),c=n((e+A)/2),u=s((e-A)/2),h=n((e-A)/2),p=s((A-e)/2),f=n((A-e)/2);switch(r){case"XYX":i.set(a*c,o*u,o*h,a*l);break;case"YZY":i.set(o*h,a*c,o*u,a*l);break;case"ZXZ":i.set(o*u,o*h,a*c,a*l);break;case"XZX":i.set(a*c,o*f,o*p,a*l);break;case"YXY":i.set(o*p,a*c,o*f,a*l);break;case"ZYZ":i.set(o*f,o*p,a*c,a*l);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Nr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function qt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Je={DEG2RAD:jr,RAD2DEG:As,generateUUID:as,clamp:Xe,euclideanModulo:Zc,mapLinear:gm,inverseLerp:mm,lerp:Ps,damp:Bm,pingpong:wm,smoothstep:vm,smootherstep:ym,randInt:_m,randFloat:xm,randFloatSpread:Cm,seededRandom:Em,degToRad:bm,radToDeg:Mm,isPowerOfTwo:Um,ceilPowerOfTwo:Sm,floorPowerOfTwo:Fm,setQuaternionFromProperEuler:Tm,normalize:qt,denormalize:Nr};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,A=this.y,r=e.elements;return this.x=r[0]*t+r[3]*A+r[6],this.y=r[1]*t+r[4]*A+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const A=this.length();return this.divideScalar(A||1).multiplyScalar(Xe(A,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const A=this.dot(e)/t;return Math.acos(Xe(A,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,A=this.y-e.y;return t*t+A*A}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,A){return this.x=e.x+(t.x-e.x)*A,this.y=e.y+(t.y-e.y)*A,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const A=Math.cos(t),r=Math.sin(t),s=this.x-e.x,n=this.y-e.y;return this.x=s*A-n*r+e.x,this.y=s*r+n*A+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let Ki=class{constructor(i=0,e=0,t=0,A=1){this.isQuaternion=!0,this._x=i,this._y=e,this._z=t,this._w=A}static slerpFlat(i,e,t,A,r,s,n){let a=t[A+0],o=t[A+1],l=t[A+2],c=t[A+3],u=r[s+0],h=r[s+1],p=r[s+2],f=r[s+3];if(n<=0){i[e+0]=a,i[e+1]=o,i[e+2]=l,i[e+3]=c;return}if(n>=1){i[e+0]=u,i[e+1]=h,i[e+2]=p,i[e+3]=f;return}if(c!==f||a!==u||o!==h||l!==p){let m=a*u+o*h+l*p+c*f;m<0&&(u=-u,h=-h,p=-p,f=-f,m=-m);let g=1-n;if(m<.9995){const d=Math.acos(m),B=Math.sin(d);g=Math.sin(g*d)/B,n=Math.sin(n*d)/B,a=a*g+u*n,o=o*g+h*n,l=l*g+p*n,c=c*g+f*n}else{a=a*g+u*n,o=o*g+h*n,l=l*g+p*n,c=c*g+f*n;const d=1/Math.sqrt(a*a+o*o+l*l+c*c);a*=d,o*=d,l*=d,c*=d}}i[e]=a,i[e+1]=o,i[e+2]=l,i[e+3]=c}static multiplyQuaternionsFlat(i,e,t,A,r,s){const n=t[A],a=t[A+1],o=t[A+2],l=t[A+3],c=r[s],u=r[s+1],h=r[s+2],p=r[s+3];return i[e]=n*p+l*c+a*h-o*u,i[e+1]=a*p+l*u+o*c-n*h,i[e+2]=o*p+l*h+n*u-a*c,i[e+3]=l*p-n*c-a*u-o*h,i}get x(){return this._x}set x(i){this._x=i,this._onChangeCallback()}get y(){return this._y}set y(i){this._y=i,this._onChangeCallback()}get z(){return this._z}set z(i){this._z=i,this._onChangeCallback()}get w(){return this._w}set w(i){this._w=i,this._onChangeCallback()}set(i,e,t,A){return this._x=i,this._y=e,this._z=t,this._w=A,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(i){return this._x=i.x,this._y=i.y,this._z=i.z,this._w=i.w,this._onChangeCallback(),this}setFromEuler(i,e=!0){const t=i._x,A=i._y,r=i._z,s=i._order,n=Math.cos,a=Math.sin,o=n(t/2),l=n(A/2),c=n(r/2),u=a(t/2),h=a(A/2),p=a(r/2);switch(s){case"XYZ":this._x=u*l*c+o*h*p,this._y=o*h*c-u*l*p,this._z=o*l*p+u*h*c,this._w=o*l*c-u*h*p;break;case"YXZ":this._x=u*l*c+o*h*p,this._y=o*h*c-u*l*p,this._z=o*l*p-u*h*c,this._w=o*l*c+u*h*p;break;case"ZXY":this._x=u*l*c-o*h*p,this._y=o*h*c+u*l*p,this._z=o*l*p+u*h*c,this._w=o*l*c-u*h*p;break;case"ZYX":this._x=u*l*c-o*h*p,this._y=o*h*c+u*l*p,this._z=o*l*p-u*h*c,this._w=o*l*c+u*h*p;break;case"YZX":this._x=u*l*c+o*h*p,this._y=o*h*c+u*l*p,this._z=o*l*p-u*h*c,this._w=o*l*c-u*h*p;break;case"XZY":this._x=u*l*c-o*h*p,this._y=o*h*c-u*l*p,this._z=o*l*p+u*h*c,this._w=o*l*c+u*h*p;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(i,e){const t=e/2,A=Math.sin(t);return this._x=i.x*A,this._y=i.y*A,this._z=i.z*A,this._w=Math.cos(t),this._onChangeCallback(),this}setFromRotationMatrix(i){const e=i.elements,t=e[0],A=e[4],r=e[8],s=e[1],n=e[5],a=e[9],o=e[2],l=e[6],c=e[10],u=t+n+c;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(l-a)*h,this._y=(r-o)*h,this._z=(s-A)*h}else if(t>n&&t>c){const h=2*Math.sqrt(1+t-n-c);this._w=(l-a)/h,this._x=.25*h,this._y=(A+s)/h,this._z=(r+o)/h}else if(n>c){const h=2*Math.sqrt(1+n-t-c);this._w=(r-o)/h,this._x=(A+s)/h,this._y=.25*h,this._z=(a+l)/h}else{const h=2*Math.sqrt(1+c-t-n);this._w=(s-A)/h,this._x=(r+o)/h,this._y=(a+l)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(i,e){let t=i.dot(e)+1;return t<1e-8?(t=0,Math.abs(i.x)>Math.abs(i.z)?(this._x=-i.y,this._y=i.x,this._z=0,this._w=t):(this._x=0,this._y=-i.z,this._z=i.y,this._w=t)):(this._x=i.y*e.z-i.z*e.y,this._y=i.z*e.x-i.x*e.z,this._z=i.x*e.y-i.y*e.x,this._w=t),this.normalize()}angleTo(i){return 2*Math.acos(Math.abs(Xe(this.dot(i),-1,1)))}rotateTowards(i,e){const t=this.angleTo(i);if(t===0)return this;const A=Math.min(1,e/t);return this.slerp(i,A),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(i){return this._x*i._x+this._y*i._y+this._z*i._z+this._w*i._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let i=this.length();return i===0?(this._x=0,this._y=0,this._z=0,this._w=1):(i=1/i,this._x=this._x*i,this._y=this._y*i,this._z=this._z*i,this._w=this._w*i),this._onChangeCallback(),this}multiply(i){return this.multiplyQuaternions(this,i)}premultiply(i){return this.multiplyQuaternions(i,this)}multiplyQuaternions(i,e){const t=i._x,A=i._y,r=i._z,s=i._w,n=e._x,a=e._y,o=e._z,l=e._w;return this._x=t*l+s*n+A*o-r*a,this._y=A*l+s*a+r*n-t*o,this._z=r*l+s*o+t*a-A*n,this._w=s*l-t*n-A*a-r*o,this._onChangeCallback(),this}slerp(i,e){if(e<=0)return this;if(e>=1)return this.copy(i);let t=i._x,A=i._y,r=i._z,s=i._w,n=this.dot(i);n<0&&(t=-t,A=-A,r=-r,s=-s,n=-n);let a=1-e;if(n<.9995){const o=Math.acos(n),l=Math.sin(o);a=Math.sin(a*o)/l,e=Math.sin(e*o)/l,this._x=this._x*a+t*e,this._y=this._y*a+A*e,this._z=this._z*a+r*e,this._w=this._w*a+s*e,this._onChangeCallback()}else this._x=this._x*a+t*e,this._y=this._y*a+A*e,this._z=this._z*a+r*e,this._w=this._w*a+s*e,this.normalize();return this}slerpQuaternions(i,e,t){return this.copy(i).slerp(e,t)}random(){const i=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),t=Math.random(),A=Math.sqrt(1-t),r=Math.sqrt(t);return this.set(A*Math.sin(i),A*Math.cos(i),r*Math.sin(e),r*Math.cos(e))}equals(i){return i._x===this._x&&i._y===this._y&&i._z===this._z&&i._w===this._w}fromArray(i,e=0){return this._x=i[e],this._y=i[e+1],this._z=i[e+2],this._w=i[e+3],this._onChangeCallback(),this}toArray(i=[],e=0){return i[e]=this._x,i[e+1]=this._y,i[e+2]=this._z,i[e+3]=this._w,i}fromBufferAttribute(i,e){return this._x=i.getX(e),this._y=i.getY(e),this._z=i.getZ(e),this._w=i.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(i){return this._onChangeCallback=i,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class N{constructor(e=0,t=0,A=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=A}set(e,t,A){return A===void 0&&(A=this.z),this.x=e,this.y=t,this.z=A,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,A=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*A+s[6]*r,this.y=s[1]*t+s[4]*A+s[7]*r,this.z=s[2]*t+s[5]*A+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,A=this.y,r=this.z,s=e.elements,n=1/(s[3]*t+s[7]*A+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*A+s[8]*r+s[12])*n,this.y=(s[1]*t+s[5]*A+s[9]*r+s[13])*n,this.z=(s[2]*t+s[6]*A+s[10]*r+s[14])*n,this}applyQuaternion(e){const t=this.x,A=this.y,r=this.z,s=e.x,n=e.y,a=e.z,o=e.w,l=2*(n*r-a*A),c=2*(a*t-s*r),u=2*(s*A-n*t);return this.x=t+o*l+n*u-a*c,this.y=A+o*c+a*l-s*u,this.z=r+o*u+s*c-n*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,A=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*A+s[8]*r,this.y=s[1]*t+s[5]*A+s[9]*r,this.z=s[2]*t+s[6]*A+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const A=this.length();return this.divideScalar(A||1).multiplyScalar(Xe(A,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,A){return this.x=e.x+(t.x-e.x)*A,this.y=e.y+(t.y-e.y)*A,this.z=e.z+(t.z-e.z)*A,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const A=e.x,r=e.y,s=e.z,n=t.x,a=t.y,o=t.z;return this.x=r*o-s*a,this.y=s*n-A*o,this.z=A*a-r*n,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const A=e.dot(this)/t;return this.copy(e).multiplyScalar(A)}projectOnPlane(e){return mo.copy(this).projectOnVector(e),this.sub(mo)}reflect(e){return this.sub(mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const A=this.dot(e)/t;return Math.acos(Xe(A,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,A=this.y-e.y,r=this.z-e.z;return t*t+A*A+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,A){const r=Math.sin(t)*e;return this.x=r*Math.sin(A),this.y=Math.cos(t)*e,this.z=r*Math.cos(A),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,A){return this.x=e*Math.sin(t),this.y=A,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),A=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=A,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,A=Math.sqrt(1-t*t);return this.x=A*Math.cos(e),this.y=t,this.z=A*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mo=new N,Vh=new Ki;class Ve{constructor(e,t,A,r,s,n,a,o,l){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,A,r,s,n,a,o,l)}set(e,t,A,r,s,n,a,o,l){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=o,c[6]=A,c[7]=n,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,A=e.elements;return t[0]=A[0],t[1]=A[1],t[2]=A[2],t[3]=A[3],t[4]=A[4],t[5]=A[5],t[6]=A[6],t[7]=A[7],t[8]=A[8],this}extractBasis(e,t,A){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),A.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const A=e.elements,r=t.elements,s=this.elements,n=A[0],a=A[3],o=A[6],l=A[1],c=A[4],u=A[7],h=A[2],p=A[5],f=A[8],m=r[0],g=r[3],d=r[6],B=r[1],v=r[4],y=r[7],x=r[2],w=r[5],M=r[8];return s[0]=n*m+a*B+o*x,s[3]=n*g+a*v+o*w,s[6]=n*d+a*y+o*M,s[1]=l*m+c*B+u*x,s[4]=l*g+c*v+u*w,s[7]=l*d+c*y+u*M,s[2]=h*m+p*B+f*x,s[5]=h*g+p*v+f*w,s[8]=h*d+p*y+f*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],A=e[1],r=e[2],s=e[3],n=e[4],a=e[5],o=e[6],l=e[7],c=e[8];return t*n*c-t*a*l-A*s*c+A*a*o+r*s*l-r*n*o}invert(){const e=this.elements,t=e[0],A=e[1],r=e[2],s=e[3],n=e[4],a=e[5],o=e[6],l=e[7],c=e[8],u=c*n-a*l,h=a*o-c*s,p=l*s-n*o,f=t*u+A*h+r*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/f;return e[0]=u*m,e[1]=(r*l-c*A)*m,e[2]=(a*A-r*n)*m,e[3]=h*m,e[4]=(c*t-r*o)*m,e[5]=(r*s-a*t)*m,e[6]=p*m,e[7]=(A*o-l*t)*m,e[8]=(n*t-A*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,A,r,s,n,a){const o=Math.cos(s),l=Math.sin(s);return this.set(A*o,A*l,-A*(o*n+l*a)+n+e,-r*l,r*o,-r*(-l*n+o*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Bo.makeScale(e,t)),this}rotate(e){return this.premultiply(Bo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),A=Math.sin(e);return this.set(t,-A,0,A,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,A=e.elements;for(let r=0;r<9;r++)if(t[r]!==A[r])return!1;return!0}fromArray(e,t=0){for(let A=0;A<9;A++)this.elements[A]=e[A+t];return this}toArray(e=[],t=0){const A=this.elements;return e[t]=A[0],e[t+1]=A[1],e[t+2]=A[2],e[t+3]=A[3],e[t+4]=A[4],e[t+5]=A[5],e[t+6]=A[6],e[t+7]=A[7],e[t+8]=A[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bo=new Ve,zh=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gh=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qm(){const i={enabled:!0,workingColorSpace:ts,spaces:{},convert:function(r,s,n){return this.enabled===!1||s===n||!s||!n||(this.spaces[s].transfer===st&&(r.r=yi(r.r),r.g=yi(r.g),r.b=yi(r.b)),this.spaces[s].primaries!==this.spaces[n].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===st&&(r.r=qr(r.r),r.g=qr(r.g),r.b=qr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Di?Ea:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,n){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return js("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return js("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],A=[.3127,.329];return i.define({[ts]:{primaries:e,whitePoint:A,transfer:Ea,toXYZ:zh,fromXYZ:Gh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:A,transfer:st,toXYZ:zh,fromXYZ:Gh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),i}const qe=Qm();function yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Br;class Lm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let A;if(e instanceof HTMLCanvasElement)A=e;else{Br===void 0&&(Br=Ma("canvas")),Br.width=e.width,Br.height=e.height;const r=Br.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),A=Br}return A.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ma("canvas");t.width=e.width,t.height=e.height;const A=t.getContext("2d");A.drawImage(e,0,0,e.width,e.height);const r=A.getImageData(0,0,e.width,e.height),s=r.data;for(let n=0;n<s.length;n++)s[n]=yi(s[n]/255)*255;return A.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let A=0;A<t.length;A++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[A]=Math.floor(yi(t[A]/255)*255):t[A]=yi(t[A]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Im=0;class $c{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=as(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const A={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let n=0,a=r.length;n<a;n++)r[n].isDataTexture?s.push(wo(r[n].image)):s.push(wo(r[n]))}else s=wo(r);A.url=s}return t||(e.images[this.uuid]=A),A}}function wo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Lm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let Rm=0;const vo=new N;class jt extends pr{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,A=Bi,r=Bi,s=EA,n=ar,a=DA,o=qA,l=jt.DEFAULT_ANISOTROPY,c=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=as(),this.name="",this.source=new $c(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=A,this.wrapT=r,this.magFilter=s,this.minFilter=n,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vo).x}get height(){return this.source.getSize(vo).y}get depth(){return this.source.getSize(vo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const A=e[t];if(A===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&A&&r.isVector2&&A.isVector2||r&&A&&r.isVector3&&A.isVector3||r&&A&&r.isMatrix3&&A.isMatrix3?r.copy(A):this[t]=A}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const A={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(A.userData=this.userData),t||(e.textures[this.uuid]=A),A}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gs:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case Pl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gs:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case Pl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=fp;jt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,A=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=A,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,A,r){return this.x=e,this.y=t,this.z=A,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,A=this.y,r=this.z,s=this.w,n=e.elements;return this.x=n[0]*t+n[4]*A+n[8]*r+n[12]*s,this.y=n[1]*t+n[5]*A+n[9]*r+n[13]*s,this.z=n[2]*t+n[6]*A+n[10]*r+n[14]*s,this.w=n[3]*t+n[7]*A+n[11]*r+n[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,A,r,s;const n=e.elements,a=n[0],o=n[4],l=n[8],c=n[1],u=n[5],h=n[9],p=n[2],f=n[6],m=n[10];if(Math.abs(o-c)<.01&&Math.abs(l-p)<.01&&Math.abs(h-f)<.01){if(Math.abs(o+c)<.1&&Math.abs(l+p)<.1&&Math.abs(h+f)<.1&&Math.abs(a+u+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const d=(a+1)/2,B=(u+1)/2,v=(m+1)/2,y=(o+c)/4,x=(l+p)/4,w=(h+f)/4;return d>B&&d>v?d<.01?(A=0,r=.707106781,s=.707106781):(A=Math.sqrt(d),r=y/A,s=x/A):B>v?B<.01?(A=.707106781,r=0,s=.707106781):(r=Math.sqrt(B),A=y/r,s=w/r):v<.01?(A=.707106781,r=.707106781,s=0):(s=Math.sqrt(v),A=x/s,r=w/s),this.set(A,r,s,t),this}let g=Math.sqrt((f-h)*(f-h)+(l-p)*(l-p)+(c-o)*(c-o));return Math.abs(g)<.001&&(g=1),this.x=(f-h)/g,this.y=(l-p)/g,this.z=(c-o)/g,this.w=Math.acos((a+u+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const A=this.length();return this.divideScalar(A||1).multiplyScalar(Xe(A,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,A){return this.x=e.x+(t.x-e.x)*A,this.y=e.y+(t.y-e.y)*A,this.z=e.z+(t.z-e.z)*A,this.w=e.w+(t.w-e.w)*A,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dm extends pr{constructor(e=1,t=1,A={}){super(),A=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:EA,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},A),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=A.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const r={width:e,height:t,depth:A.depth},s=new jt(r);this.textures=[];const n=A.count;for(let a=0;a<n;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(A),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,this.resolveDepthBuffer=A.resolveDepthBuffer,this.resolveStencilBuffer=A.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=A.depthTexture,this.samples=A.samples,this.multiview=A.multiview}_setTextureOptions(e={}){const t={minFilter:EA,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let A=0;A<this.textures.length;A++)this.textures[A].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,A=1){if(this.width!==e||this.height!==t||this.depth!==A){this.width=e,this.height=t,this.depth=A;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=A,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,A=e.textures.length;t<A;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new $c(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class HA extends Dm{constructor(e=1,t=1,A={}){super(e,t,A),this.isWebGLRenderTarget=!0}}class Cp extends jt{constructor(e=null,t=1,A=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:A,depth:r},this.magFilter=iA,this.minFilter=iA,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pm extends jt{constructor(e=null,t=1,A=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:A,depth:r},this.magFilter=iA,this.minFilter=iA,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class os{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,A=e.length;t<A;t+=3)this.expandByPoint(TA.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,A=e.count;t<A;t++)this.expandByPoint(TA.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,A=e.length;t<A;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const A=TA.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(A),this.max.copy(e).add(A),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const A=e.geometry;if(A!==void 0){const s=A.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let n=0,a=s.count;n<a;n++)e.isMesh===!0?e.getVertexPosition(n,TA):TA.fromBufferAttribute(s,n),TA.applyMatrix4(e.matrixWorld),this.expandByPoint(TA);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pn.copy(e.boundingBox)):(A.boundingBox===null&&A.computeBoundingBox(),pn.copy(A.boundingBox)),pn.applyMatrix4(e.matrixWorld),this.union(pn)}const r=e.children;for(let s=0,n=r.length;s<n;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,TA),TA.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,A;return e.normal.x>0?(t=e.normal.x*this.min.x,A=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,A=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,A+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,A+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,A+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,A+=e.normal.z*this.min.z),t<=-e.constant&&A>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fs),fn.subVectors(this.max,fs),wr.subVectors(e.a,fs),vr.subVectors(e.b,fs),yr.subVectors(e.c,fs),bi.subVectors(vr,wr),Mi.subVectors(yr,vr),qi.subVectors(wr,yr);let t=[0,-bi.z,bi.y,0,-Mi.z,Mi.y,0,-qi.z,qi.y,bi.z,0,-bi.x,Mi.z,0,-Mi.x,qi.z,0,-qi.x,-bi.y,bi.x,0,-Mi.y,Mi.x,0,-qi.y,qi.x,0];return!yo(t,wr,vr,yr,fn)||(t=[1,0,0,0,1,0,0,0,1],!yo(t,wr,vr,yr,fn))?!1:(gn.crossVectors(bi,Mi),t=[gn.x,gn.y,gn.z],yo(t,wr,vr,yr,fn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,TA).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(TA).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ii=[new N,new N,new N,new N,new N,new N,new N,new N],TA=new N,pn=new os,wr=new N,vr=new N,yr=new N,bi=new N,Mi=new N,qi=new N,fs=new N,fn=new N,gn=new N,Ji=new N;function yo(i,e,t,A,r){for(let s=0,n=i.length-3;s<=n;s+=3){Ji.fromArray(i,s);const a=r.x*Math.abs(Ji.x)+r.y*Math.abs(Ji.y)+r.z*Math.abs(Ji.z),o=e.dot(Ji),l=t.dot(Ji),c=A.dot(Ji);if(Math.max(-Math.max(o,l,c),Math.min(o,l,c))>a)return!1}return!0}const Hm=new os,gs=new N,_o=new N;class Ya{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const A=this.center;t!==void 0?A.copy(t):Hm.setFromPoints(e).getCenter(A);let r=0;for(let s=0,n=e.length;s<n;s++)r=Math.max(r,A.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const A=this.center.distanceToSquared(e);return t.copy(e),A>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gs.subVectors(e,this.center);const t=gs.lengthSq();if(t>this.radius*this.radius){const A=Math.sqrt(t),r=(A-this.radius)*.5;this.center.addScaledVector(gs,r/A),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gs.copy(e.center).add(_o)),this.expandByPoint(gs.copy(e.center).sub(_o))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ri=new N,xo=new N,mn=new N,Ui=new N,Co=new N,Bn=new N,Eo=new N;let ja=class{constructor(i=new N,e=new N(0,0,-1)){this.origin=i,this.direction=e}set(i,e){return this.origin.copy(i),this.direction.copy(e),this}copy(i){return this.origin.copy(i.origin),this.direction.copy(i.direction),this}at(i,e){return e.copy(this.origin).addScaledVector(this.direction,i)}lookAt(i){return this.direction.copy(i).sub(this.origin).normalize(),this}recast(i){return this.origin.copy(this.at(i,ri)),this}closestPointToPoint(i,e){e.subVectors(i,this.origin);const t=e.dot(this.direction);return t<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,t)}distanceToPoint(i){return Math.sqrt(this.distanceSqToPoint(i))}distanceSqToPoint(i){const e=ri.subVectors(i,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(i):(ri.copy(this.origin).addScaledVector(this.direction,e),ri.distanceToSquared(i))}distanceSqToSegment(i,e,t,A){xo.copy(i).add(e).multiplyScalar(.5),mn.copy(e).sub(i).normalize(),Ui.copy(this.origin).sub(xo);const r=i.distanceTo(e)*.5,s=-this.direction.dot(mn),n=Ui.dot(this.direction),a=-Ui.dot(mn),o=Ui.lengthSq(),l=Math.abs(1-s*s);let c,u,h,p;if(l>0)if(c=s*a-n,u=s*n-a,p=r*l,c>=0)if(u>=-p)if(u<=p){const f=1/l;c*=f,u*=f,h=c*(c+s*u+2*n)+u*(s*c+u+2*a)+o}else u=r,c=Math.max(0,-(s*u+n)),h=-c*c+u*(u+2*a)+o;else u=-r,c=Math.max(0,-(s*u+n)),h=-c*c+u*(u+2*a)+o;else u<=-p?(c=Math.max(0,-(-s*r+n)),u=c>0?-r:Math.min(Math.max(-r,-a),r),h=-c*c+u*(u+2*a)+o):u<=p?(c=0,u=Math.min(Math.max(-r,-a),r),h=u*(u+2*a)+o):(c=Math.max(0,-(s*r+n)),u=c>0?r:Math.min(Math.max(-r,-a),r),h=-c*c+u*(u+2*a)+o);else u=s>0?-r:r,c=Math.max(0,-(s*u+n)),h=-c*c+u*(u+2*a)+o;return t&&t.copy(this.origin).addScaledVector(this.direction,c),A&&A.copy(xo).addScaledVector(mn,u),h}intersectSphere(i,e){ri.subVectors(i.center,this.origin);const t=ri.dot(this.direction),A=ri.dot(ri)-t*t,r=i.radius*i.radius;if(A>r)return null;const s=Math.sqrt(r-A),n=t-s,a=t+s;return a<0?null:n<0?this.at(a,e):this.at(n,e)}intersectsSphere(i){return i.radius<0?!1:this.distanceSqToPoint(i.center)<=i.radius*i.radius}distanceToPlane(i){const e=i.normal.dot(this.direction);if(e===0)return i.distanceToPoint(this.origin)===0?0:null;const t=-(this.origin.dot(i.normal)+i.constant)/e;return t>=0?t:null}intersectPlane(i,e){const t=this.distanceToPlane(i);return t===null?null:this.at(t,e)}intersectsPlane(i){const e=i.distanceToPoint(this.origin);return e===0||i.normal.dot(this.direction)*e<0}intersectBox(i,e){let t,A,r,s,n,a;const o=1/this.direction.x,l=1/this.direction.y,c=1/this.direction.z,u=this.origin;return o>=0?(t=(i.min.x-u.x)*o,A=(i.max.x-u.x)*o):(t=(i.max.x-u.x)*o,A=(i.min.x-u.x)*o),l>=0?(r=(i.min.y-u.y)*l,s=(i.max.y-u.y)*l):(r=(i.max.y-u.y)*l,s=(i.min.y-u.y)*l),t>s||r>A||((r>t||isNaN(t))&&(t=r),(s<A||isNaN(A))&&(A=s),c>=0?(n=(i.min.z-u.z)*c,a=(i.max.z-u.z)*c):(n=(i.max.z-u.z)*c,a=(i.min.z-u.z)*c),t>a||n>A)||((n>t||t!==t)&&(t=n),(a<A||A!==A)&&(A=a),A<0)?null:this.at(t>=0?t:A,e)}intersectsBox(i){return this.intersectBox(i,ri)!==null}intersectTriangle(i,e,t,A,r){Co.subVectors(e,i),Bn.subVectors(t,i),Eo.crossVectors(Co,Bn);let s=this.direction.dot(Eo),n;if(s>0){if(A)return null;n=1}else if(s<0)n=-1,s=-s;else return null;Ui.subVectors(this.origin,i);const a=n*this.direction.dot(Bn.crossVectors(Ui,Bn));if(a<0)return null;const o=n*this.direction.dot(Co.cross(Ui));if(o<0||a+o>s)return null;const l=-n*Ui.dot(Eo);return l<0?null:this.at(l/s,r)}applyMatrix4(i){return this.origin.applyMatrix4(i),this.direction.transformDirection(i),this}equals(i){return i.origin.equals(this.origin)&&i.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ft{constructor(e,t,A,r,s,n,a,o,l,c,u,h,p,f,m,g){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,A,r,s,n,a,o,l,c,u,h,p,f,m,g)}set(e,t,A,r,s,n,a,o,l,c,u,h,p,f,m,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=A,d[12]=r,d[1]=s,d[5]=n,d[9]=a,d[13]=o,d[2]=l,d[6]=c,d[10]=u,d[14]=h,d[3]=p,d[7]=f,d[11]=m,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,A=e.elements;return t[0]=A[0],t[1]=A[1],t[2]=A[2],t[3]=A[3],t[4]=A[4],t[5]=A[5],t[6]=A[6],t[7]=A[7],t[8]=A[8],t[9]=A[9],t[10]=A[10],t[11]=A[11],t[12]=A[12],t[13]=A[13],t[14]=A[14],t[15]=A[15],this}copyPosition(e){const t=this.elements,A=e.elements;return t[12]=A[12],t[13]=A[13],t[14]=A[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,A){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),A.setFromMatrixColumn(this,2),this}makeBasis(e,t,A){return this.set(e.x,t.x,A.x,0,e.y,t.y,A.y,0,e.z,t.z,A.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,A=e.elements,r=1/_r.setFromMatrixColumn(e,0).length(),s=1/_r.setFromMatrixColumn(e,1).length(),n=1/_r.setFromMatrixColumn(e,2).length();return t[0]=A[0]*r,t[1]=A[1]*r,t[2]=A[2]*r,t[3]=0,t[4]=A[4]*s,t[5]=A[5]*s,t[6]=A[6]*s,t[7]=0,t[8]=A[8]*n,t[9]=A[9]*n,t[10]=A[10]*n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,A=e.x,r=e.y,s=e.z,n=Math.cos(A),a=Math.sin(A),o=Math.cos(r),l=Math.sin(r),c=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=n*c,p=n*u,f=a*c,m=a*u;t[0]=o*c,t[4]=-o*u,t[8]=l,t[1]=p+f*l,t[5]=h-m*l,t[9]=-a*o,t[2]=m-h*l,t[6]=f+p*l,t[10]=n*o}else if(e.order==="YXZ"){const h=o*c,p=o*u,f=l*c,m=l*u;t[0]=h+m*a,t[4]=f*a-p,t[8]=n*l,t[1]=n*u,t[5]=n*c,t[9]=-a,t[2]=p*a-f,t[6]=m+h*a,t[10]=n*o}else if(e.order==="ZXY"){const h=o*c,p=o*u,f=l*c,m=l*u;t[0]=h-m*a,t[4]=-n*u,t[8]=f+p*a,t[1]=p+f*a,t[5]=n*c,t[9]=m-h*a,t[2]=-n*l,t[6]=a,t[10]=n*o}else if(e.order==="ZYX"){const h=n*c,p=n*u,f=a*c,m=a*u;t[0]=o*c,t[4]=f*l-p,t[8]=h*l+m,t[1]=o*u,t[5]=m*l+h,t[9]=p*l-f,t[2]=-l,t[6]=a*o,t[10]=n*o}else if(e.order==="YZX"){const h=n*o,p=n*l,f=a*o,m=a*l;t[0]=o*c,t[4]=m-h*u,t[8]=f*u+p,t[1]=u,t[5]=n*c,t[9]=-a*c,t[2]=-l*c,t[6]=p*u+f,t[10]=h-m*u}else if(e.order==="XZY"){const h=n*o,p=n*l,f=a*o,m=a*l;t[0]=o*c,t[4]=-u,t[8]=l*c,t[1]=h*u+m,t[5]=n*c,t[9]=p*u-f,t[2]=f*u-p,t[6]=a*c,t[10]=m*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nm,e,Om)}lookAt(e,t,A){const r=this.elements;return pA.subVectors(e,t),pA.lengthSq()===0&&(pA.z=1),pA.normalize(),Si.crossVectors(A,pA),Si.lengthSq()===0&&(Math.abs(A.z)===1?pA.x+=1e-4:pA.z+=1e-4,pA.normalize(),Si.crossVectors(A,pA)),Si.normalize(),wn.crossVectors(pA,Si),r[0]=Si.x,r[4]=wn.x,r[8]=pA.x,r[1]=Si.y,r[5]=wn.y,r[9]=pA.y,r[2]=Si.z,r[6]=wn.z,r[10]=pA.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const A=e.elements,r=t.elements,s=this.elements,n=A[0],a=A[4],o=A[8],l=A[12],c=A[1],u=A[5],h=A[9],p=A[13],f=A[2],m=A[6],g=A[10],d=A[14],B=A[3],v=A[7],y=A[11],x=A[15],w=r[0],M=r[4],S=r[8],C=r[12],_=r[1],F=r[5],T=r[9],L=r[13],I=r[2],H=r[6],R=r[10],G=r[14],z=r[3],X=r[7],te=r[11],ve=r[15];return s[0]=n*w+a*_+o*I+l*z,s[4]=n*M+a*F+o*H+l*X,s[8]=n*S+a*T+o*R+l*te,s[12]=n*C+a*L+o*G+l*ve,s[1]=c*w+u*_+h*I+p*z,s[5]=c*M+u*F+h*H+p*X,s[9]=c*S+u*T+h*R+p*te,s[13]=c*C+u*L+h*G+p*ve,s[2]=f*w+m*_+g*I+d*z,s[6]=f*M+m*F+g*H+d*X,s[10]=f*S+m*T+g*R+d*te,s[14]=f*C+m*L+g*G+d*ve,s[3]=B*w+v*_+y*I+x*z,s[7]=B*M+v*F+y*H+x*X,s[11]=B*S+v*T+y*R+x*te,s[15]=B*C+v*L+y*G+x*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],A=e[4],r=e[8],s=e[12],n=e[1],a=e[5],o=e[9],l=e[13],c=e[2],u=e[6],h=e[10],p=e[14],f=e[3],m=e[7],g=e[11],d=e[15];return f*(+s*o*u-r*l*u-s*a*h+A*l*h+r*a*p-A*o*p)+m*(+t*o*p-t*l*h+s*n*h-r*n*p+r*l*c-s*o*c)+g*(+t*l*u-t*a*p-s*n*u+A*n*p+s*a*c-A*l*c)+d*(-r*a*c-t*o*u+t*a*h+r*n*u-A*n*h+A*o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,A){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=A),this}invert(){const e=this.elements,t=e[0],A=e[1],r=e[2],s=e[3],n=e[4],a=e[5],o=e[6],l=e[7],c=e[8],u=e[9],h=e[10],p=e[11],f=e[12],m=e[13],g=e[14],d=e[15],B=u*g*l-m*h*l+m*o*p-a*g*p-u*o*d+a*h*d,v=f*h*l-c*g*l-f*o*p+n*g*p+c*o*d-n*h*d,y=c*m*l-f*u*l+f*a*p-n*m*p-c*a*d+n*u*d,x=f*u*o-c*m*o-f*a*h+n*m*h+c*a*g-n*u*g,w=t*B+A*v+r*y+s*x;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=B*M,e[1]=(m*h*s-u*g*s-m*r*p+A*g*p+u*r*d-A*h*d)*M,e[2]=(a*g*s-m*o*s+m*r*l-A*g*l-a*r*d+A*o*d)*M,e[3]=(u*o*s-a*h*s-u*r*l+A*h*l+a*r*p-A*o*p)*M,e[4]=v*M,e[5]=(c*g*s-f*h*s+f*r*p-t*g*p-c*r*d+t*h*d)*M,e[6]=(f*o*s-n*g*s-f*r*l+t*g*l+n*r*d-t*o*d)*M,e[7]=(n*h*s-c*o*s+c*r*l-t*h*l-n*r*p+t*o*p)*M,e[8]=y*M,e[9]=(f*u*s-c*m*s-f*A*p+t*m*p+c*A*d-t*u*d)*M,e[10]=(n*m*s-f*a*s+f*A*l-t*m*l-n*A*d+t*a*d)*M,e[11]=(c*a*s-n*u*s-c*A*l+t*u*l+n*A*p-t*a*p)*M,e[12]=x*M,e[13]=(c*m*r-f*u*r+f*A*h-t*m*h-c*A*g+t*u*g)*M,e[14]=(f*a*r-n*m*r-f*A*o+t*m*o+n*A*g-t*a*g)*M,e[15]=(n*u*r-c*a*r+c*A*o-t*u*o-n*A*h+t*a*h)*M,this}scale(e){const t=this.elements,A=e.x,r=e.y,s=e.z;return t[0]*=A,t[4]*=r,t[8]*=s,t[1]*=A,t[5]*=r,t[9]*=s,t[2]*=A,t[6]*=r,t[10]*=s,t[3]*=A,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],A=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,A,r))}makeTranslation(e,t,A){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,A,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),A=Math.sin(e);return this.set(1,0,0,0,0,t,-A,0,0,A,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),A=Math.sin(e);return this.set(t,0,A,0,0,1,0,0,-A,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),A=Math.sin(e);return this.set(t,-A,0,0,A,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const A=Math.cos(t),r=Math.sin(t),s=1-A,n=e.x,a=e.y,o=e.z,l=s*n,c=s*a;return this.set(l*n+A,l*a-r*o,l*o+r*a,0,l*a+r*o,c*a+A,c*o-r*n,0,l*o-r*a,c*o+r*n,s*o*o+A,0,0,0,0,1),this}makeScale(e,t,A){return this.set(e,0,0,0,0,t,0,0,0,0,A,0,0,0,0,1),this}makeShear(e,t,A,r,s,n){return this.set(1,A,s,0,e,1,n,0,t,r,1,0,0,0,0,1),this}compose(e,t,A){const r=this.elements,s=t._x,n=t._y,a=t._z,o=t._w,l=s+s,c=n+n,u=a+a,h=s*l,p=s*c,f=s*u,m=n*c,g=n*u,d=a*u,B=o*l,v=o*c,y=o*u,x=A.x,w=A.y,M=A.z;return r[0]=(1-(m+d))*x,r[1]=(p+y)*x,r[2]=(f-v)*x,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(h+d))*w,r[6]=(g+B)*w,r[7]=0,r[8]=(f+v)*M,r[9]=(g-B)*M,r[10]=(1-(h+m))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,A){const r=this.elements;let s=_r.set(r[0],r[1],r[2]).length();const n=_r.set(r[4],r[5],r[6]).length(),a=_r.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],QA.copy(this);const o=1/s,l=1/n,c=1/a;return QA.elements[0]*=o,QA.elements[1]*=o,QA.elements[2]*=o,QA.elements[4]*=l,QA.elements[5]*=l,QA.elements[6]*=l,QA.elements[8]*=c,QA.elements[9]*=c,QA.elements[10]*=c,t.setFromRotationMatrix(QA),A.x=s,A.y=n,A.z=a,this}makePerspective(e,t,A,r,s,n,a=WA,o=!1){const l=this.elements,c=2*s/(t-e),u=2*s/(A-r),h=(t+e)/(t-e),p=(A+r)/(A-r);let f,m;if(o)f=s/(n-s),m=n*s/(n-s);else if(a===WA)f=-(n+s)/(n-s),m=-2*n*s/(n-s);else if(a===ba)f=-n/(n-s),m=-n*s/(n-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,A,r,s,n,a=WA,o=!1){const l=this.elements,c=2/(t-e),u=2/(A-r),h=-(t+e)/(t-e),p=-(A+r)/(A-r);let f,m;if(o)f=1/(n-s),m=n/(n-s);else if(a===WA)f=-2/(n-s),m=-(n+s)/(n-s);else if(a===ba)f=-1/(n-s),m=-s/(n-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,A=e.elements;for(let r=0;r<16;r++)if(t[r]!==A[r])return!1;return!0}fromArray(e,t=0){for(let A=0;A<16;A++)this.elements[A]=e[A+t];return this}toArray(e=[],t=0){const A=this.elements;return e[t]=A[0],e[t+1]=A[1],e[t+2]=A[2],e[t+3]=A[3],e[t+4]=A[4],e[t+5]=A[5],e[t+6]=A[6],e[t+7]=A[7],e[t+8]=A[8],e[t+9]=A[9],e[t+10]=A[10],e[t+11]=A[11],e[t+12]=A[12],e[t+13]=A[13],e[t+14]=A[14],e[t+15]=A[15],e}}const _r=new N,QA=new ft,Nm=new N(0,0,0),Om=new N(1,1,1),Si=new N,wn=new N,pA=new N,Kh=new ft,Wh=new Ki;class JA{constructor(e=0,t=0,A=0,r=JA.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=A,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,A,r=this._order){return this._x=e,this._y=t,this._z=A,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,A=!0){const r=e.elements,s=r[0],n=r[4],a=r[8],o=r[1],l=r[5],c=r[9],u=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-n,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-n,l)):(this._y=0,this._z=Math.atan2(o,s));break;case"ZYX":this._y=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(o,s)):(this._x=0,this._z=Math.atan2(-n,l));break;case"YZX":this._z=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Xe(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,A===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,A){return Kh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kh,t,A)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wh.setFromEuler(this),this.setFromQuaternion(Wh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}JA.DEFAULT_ORDER="XYZ";class eh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let km=0;const Xh=new N,xr=new Ki,si=new ft,vn=new N,ms=new N,Vm=new N,zm=new Ki,Yh=new N(1,0,0),jh=new N(0,1,0),qh=new N(0,0,1),Jh={type:"added"},Gm={type:"removed"},Cr={type:"childadded",child:null},bo={type:"childremoved",child:null};class Ut extends pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new N,t=new JA,A=new Ki,r=new N(1,1,1);function s(){A.setFromEuler(t,!1)}function n(){t.setFromQuaternion(A,void 0,!1)}t._onChange(s),A._onChange(n),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:A},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new Ve}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.multiply(xr),this}rotateOnWorldAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.premultiply(xr),this}rotateX(e){return this.rotateOnAxis(Yh,e)}rotateY(e){return this.rotateOnAxis(jh,e)}rotateZ(e){return this.rotateOnAxis(qh,e)}translateOnAxis(e,t){return Xh.copy(e).applyQuaternion(this.quaternion),this.position.add(Xh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yh,e)}translateY(e){return this.translateOnAxis(jh,e)}translateZ(e){return this.translateOnAxis(qh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,A){e.isVector3?vn.copy(e):vn.set(e,t,A);const r=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(ms,vn,this.up):si.lookAt(vn,ms,this.up),this.quaternion.setFromRotationMatrix(si),r&&(si.extractRotation(r.matrixWorld),xr.setFromRotationMatrix(si),this.quaternion.premultiply(xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(vt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jh),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null):vt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let A=0;A<arguments.length;A++)this.remove(arguments[A]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gm),bo.child=e,this.dispatchEvent(bo),bo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jh),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let A=0,r=this.children.length;A<r;A++){const s=this.children[A].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,A=[]){this[e]===t&&A.push(this);const r=this.children;for(let s=0,n=r.length;s<n;s++)r[s].getObjectsByProperty(e,t,A);return A}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,Vm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,zm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let A=0,r=t.length;A<r;A++)t[A].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let A=0,r=t.length;A<r;A++)t[A].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let A=0,r=t.length;A<r;A++)t[A].updateMatrixWorld(e)}updateWorldMatrix(e,t){const A=this.parent;if(e===!0&&A!==null&&A.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,n=r.length;s<n;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",A={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},A.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,o){return a[o.uuid]===void 0&&(a[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){const u=o[l];s(e.shapes,u)}else s(e.shapes,o)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(e.materials,this.material[o]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const o=this.animations[a];r.animations.push(s(e.animations,o))}}if(t){const a=n(e.geometries),o=n(e.materials),l=n(e.textures),c=n(e.images),u=n(e.shapes),h=n(e.skeletons),p=n(e.animations),f=n(e.nodes);a.length>0&&(A.geometries=a),o.length>0&&(A.materials=o),l.length>0&&(A.textures=l),c.length>0&&(A.images=c),u.length>0&&(A.shapes=u),h.length>0&&(A.skeletons=h),p.length>0&&(A.animations=p),f.length>0&&(A.nodes=f)}return A.object=r,A;function n(a){const o=[];for(const l in a){const c=a[l];delete c.metadata,o.push(c)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let A=0;A<e.children.length;A++){const r=e.children[A];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new N(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const LA=new N,ni=new N,Mo=new N,ai=new N,Er=new N,br=new N,Zh=new N,Uo=new N,So=new N,Fo=new N,To=new yt,Qo=new yt,Lo=new yt;class CA{constructor(e=new N,t=new N,A=new N){this.a=e,this.b=t,this.c=A}static getNormal(e,t,A,r){r.subVectors(A,t),LA.subVectors(e,t),r.cross(LA);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,A,r,s){LA.subVectors(r,t),ni.subVectors(A,t),Mo.subVectors(e,t);const n=LA.dot(LA),a=LA.dot(ni),o=LA.dot(Mo),l=ni.dot(ni),c=ni.dot(Mo),u=n*l-a*a;if(u===0)return s.set(0,0,0),null;const h=1/u,p=(l*o-a*c)*h,f=(n*c-a*o)*h;return s.set(1-p-f,f,p)}static containsPoint(e,t,A,r){return this.getBarycoord(e,t,A,r,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,A,r,s,n,a,o){return this.getBarycoord(e,t,A,r,ai)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(s,ai.x),o.addScaledVector(n,ai.y),o.addScaledVector(a,ai.z),o)}static getInterpolatedAttribute(e,t,A,r,s,n){return To.setScalar(0),Qo.setScalar(0),Lo.setScalar(0),To.fromBufferAttribute(e,t),Qo.fromBufferAttribute(e,A),Lo.fromBufferAttribute(e,r),n.setScalar(0),n.addScaledVector(To,s.x),n.addScaledVector(Qo,s.y),n.addScaledVector(Lo,s.z),n}static isFrontFacing(e,t,A,r){return LA.subVectors(A,t),ni.subVectors(e,t),LA.cross(ni).dot(r)<0}set(e,t,A){return this.a.copy(e),this.b.copy(t),this.c.copy(A),this}setFromPointsAndIndices(e,t,A,r){return this.a.copy(e[t]),this.b.copy(e[A]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,A,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,A),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return LA.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),LA.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return CA.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return CA.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,A,r,s){return CA.getInterpolation(e,this.a,this.b,this.c,t,A,r,s)}containsPoint(e){return CA.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return CA.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const A=this.a,r=this.b,s=this.c;let n,a;Er.subVectors(r,A),br.subVectors(s,A),Uo.subVectors(e,A);const o=Er.dot(Uo),l=br.dot(Uo);if(o<=0&&l<=0)return t.copy(A);So.subVectors(e,r);const c=Er.dot(So),u=br.dot(So);if(c>=0&&u<=c)return t.copy(r);const h=o*u-c*l;if(h<=0&&o>=0&&c<=0)return n=o/(o-c),t.copy(A).addScaledVector(Er,n);Fo.subVectors(e,s);const p=Er.dot(Fo),f=br.dot(Fo);if(f>=0&&p<=f)return t.copy(s);const m=p*l-o*f;if(m<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(A).addScaledVector(br,a);const g=c*f-p*u;if(g<=0&&u-c>=0&&p-f>=0)return Zh.subVectors(s,r),a=(u-c)/(u-c+(p-f)),t.copy(r).addScaledVector(Zh,a);const d=1/(g+m+h);return n=m*d,a=h*d,t.copy(A).addScaledVector(Er,n).addScaledVector(br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ep={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},yn={h:0,s:0,l:0};function Io(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Qe{constructor(e,t,A){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,A)}set(e,t,A){if(t===void 0&&A===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,A);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,A,r=qe.workingColorSpace){return this.r=e,this.g=t,this.b=A,qe.colorSpaceToWorking(this,r),this}setHSL(e,t,A,r=qe.workingColorSpace){if(e=Zc(e,1),t=Xe(t,0,1),A=Xe(A,0,1),t===0)this.r=this.g=this.b=A;else{const s=A<=.5?A*(1+t):A+t-A*t,n=2*A-s;this.r=Io(n,s,e+1/3),this.g=Io(n,s,e),this.b=Io(n,s,e-1/3)}return qe.colorSpaceToWorking(this,r),this}setStyle(e,t=zt){function A(s){s!==void 0&&parseFloat(s)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const n=r[1],a=r[2];switch(n){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return A(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return A(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return A(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],n=s.length;if(n===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(s,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const A=Ep[e.toLowerCase()];return A!==void 0?this.setHex(A,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return qe.workingToColorSpace(Xt.copy(this),e),Math.round(Xe(Xt.r*255,0,255))*65536+Math.round(Xe(Xt.g*255,0,255))*256+Math.round(Xe(Xt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(Xt.copy(this),t);const A=Xt.r,r=Xt.g,s=Xt.b,n=Math.max(A,r,s),a=Math.min(A,r,s);let o,l;const c=(a+n)/2;if(a===n)o=0,l=0;else{const u=n-a;switch(l=c<=.5?u/(n+a):u/(2-n-a),n){case A:o=(r-s)/u+(r<s?6:0);break;case r:o=(s-A)/u+2;break;case s:o=(A-r)/u+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=zt){qe.workingToColorSpace(Xt.copy(this),e);const t=Xt.r,A=Xt.g,r=Xt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${A.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(A*255)},${Math.round(r*255)})`}offsetHSL(e,t,A){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+A)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,A){return this.r=e.r+(t.r-e.r)*A,this.g=e.g+(t.g-e.g)*A,this.b=e.b+(t.b-e.b)*A,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(yn);const A=Ps(Fi.h,yn.h,t),r=Ps(Fi.s,yn.s,t),s=Ps(Fi.l,yn.l,t);return this.setHSL(A,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,A=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*A+s[6]*r,this.g=s[1]*t+s[4]*A+s[7]*r,this.b=s[2]*t+s[5]*A+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Qe;Qe.NAMES=Ep;let Km=0,Xi=class extends pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=as(),this.name="",this.type="Material",this.blending=Yr,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bl,this.blendDst=Ml,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(i){this._alphaTest>0!=i>0&&this.version++,this._alphaTest=i}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(i){if(i!==void 0)for(const e in i){const t=i[e];if(t===void 0){De(`Material: parameter '${e}' has value of undefined.`);continue}const A=this[e];if(A===void 0){De(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}A&&A.isColor?A.set(t):A&&A.isVector3&&t&&t.isVector3?A.copy(t):this[e]=t}}toJSON(i){const e=i===void 0||typeof i=="string";e&&(i={textures:{},images:{}});const t={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen!==void 0&&(t.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(t.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(t.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(t.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(t.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(i).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(i).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(i).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(t.sheenColorMap=this.sheenColorMap.toJSON(i).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(t.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(i).uuid),this.dispersion!==void 0&&(t.dispersion=this.dispersion),this.iridescence!==void 0&&(t.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(t.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(t.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(t.iridescenceMap=this.iridescenceMap.toJSON(i).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(t.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(i).uuid),this.anisotropy!==void 0&&(t.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(t.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(t.anisotropyMap=this.anisotropyMap.toJSON(i).uuid),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(i).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(i).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(i).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(i).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(i).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(i).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(i).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(i).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(i).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(i).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(i).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(i).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(t.specularIntensityMap=this.specularIntensityMap.toJSON(i).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(t.specularColorMap=this.specularColorMap.toJSON(i).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(i).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapRotation!==void 0&&(t.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(i).uuid),this.transmission!==void 0&&(t.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(t.transmissionMap=this.transmissionMap.toJSON(i).uuid),this.thickness!==void 0&&(t.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(t.thicknessMap=this.thicknessMap.toJSON(i).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(t.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(t.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==Yr&&(t.blending=this.blending),this.side!==Gi&&(t.side=this.side),this.vertexColors===!0&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=!0),this.blendSrc!==bl&&(t.blendSrc=this.blendSrc),this.blendDst!==Ml&&(t.blendDst=this.blendDst),this.blendEquation!==rr&&(t.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(t.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(t.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(t.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(t.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(t.blendAlpha=this.blendAlpha),this.depthFunc!==Zr&&(t.depthFunc=this.depthFunc),this.depthTest===!1&&(t.depthTest=this.depthTest),this.depthWrite===!1&&(t.depthWrite=this.depthWrite),this.colorWrite===!1&&(t.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(t.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dh&&(t.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(t.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(t.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mr&&(t.stencilFail=this.stencilFail),this.stencilZFail!==mr&&(t.stencilZFail=this.stencilZFail),this.stencilZPass!==mr&&(t.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(t.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaHash===!0&&(t.alphaHash=!0),this.alphaToCoverage===!0&&(t.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=!0),this.forceSinglePass===!0&&(t.forceSinglePass=!0),this.wireframe===!0&&(t.wireframe=!0),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(t.flatShading=!0),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),this.fog===!1&&(t.fog=!1),Object.keys(this.userData).length>0&&(t.userData=this.userData);function A(r){const s=[];for(const n in r){const a=r[n];delete a.metadata,s.push(a)}return s}if(e){const r=A(i.textures),s=A(i.images);r.length>0&&(t.textures=r),s.length>0&&(t.images=s)}return t}clone(){return new this.constructor().copy(this)}copy(i){this.name=i.name,this.blending=i.blending,this.side=i.side,this.vertexColors=i.vertexColors,this.opacity=i.opacity,this.transparent=i.transparent,this.blendSrc=i.blendSrc,this.blendDst=i.blendDst,this.blendEquation=i.blendEquation,this.blendSrcAlpha=i.blendSrcAlpha,this.blendDstAlpha=i.blendDstAlpha,this.blendEquationAlpha=i.blendEquationAlpha,this.blendColor.copy(i.blendColor),this.blendAlpha=i.blendAlpha,this.depthFunc=i.depthFunc,this.depthTest=i.depthTest,this.depthWrite=i.depthWrite,this.stencilWriteMask=i.stencilWriteMask,this.stencilFunc=i.stencilFunc,this.stencilRef=i.stencilRef,this.stencilFuncMask=i.stencilFuncMask,this.stencilFail=i.stencilFail,this.stencilZFail=i.stencilZFail,this.stencilZPass=i.stencilZPass,this.stencilWrite=i.stencilWrite;const e=i.clippingPlanes;let t=null;if(e!==null){const A=e.length;t=new Array(A);for(let r=0;r!==A;++r)t[r]=e[r].clone()}return this.clippingPlanes=t,this.clipIntersection=i.clipIntersection,this.clipShadows=i.clipShadows,this.shadowSide=i.shadowSide,this.colorWrite=i.colorWrite,this.precision=i.precision,this.polygonOffset=i.polygonOffset,this.polygonOffsetFactor=i.polygonOffsetFactor,this.polygonOffsetUnits=i.polygonOffsetUnits,this.dithering=i.dithering,this.alphaTest=i.alphaTest,this.alphaHash=i.alphaHash,this.alphaToCoverage=i.alphaToCoverage,this.premultipliedAlpha=i.premultipliedAlpha,this.forceSinglePass=i.forceSinglePass,this.visible=i.visible,this.toneMapped=i.toneMapped,this.userData=JSON.parse(JSON.stringify(i.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(i){i===!0&&this.version++}};class ls extends Xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new JA,this.combine=dp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new N,_n=new Ee;let Wm=0;class hA{constructor(e,t,A=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=A,this.usage=Ph,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,A){e*=this.itemSize,A*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[A+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,A=this.count;t<A;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix3(e),this.setXY(t,_n.x,_n.y);else if(this.itemSize===3)for(let t=0,A=this.count;t<A;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,A=this.count;t<A;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,A=this.count;t<A;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,A=this.count;t<A;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let A=this.array[e*this.itemSize+t];return this.normalized&&(A=Nr(A,this.array)),A}setComponent(e,t,A){return this.normalized&&(A=qt(A,this.array)),this.array[e*this.itemSize+t]=A,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nr(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nr(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nr(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,A){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),A=qt(A,this.array)),this.array[e+0]=t,this.array[e+1]=A,this}setXYZ(e,t,A,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),A=qt(A,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=A,this.array[e+2]=r,this}setXYZW(e,t,A,r,s){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),A=qt(A,this.array),r=qt(r,this.array),s=qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=A,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ph&&(e.usage=this.usage),e}}class bp extends hA{constructor(e,t,A){super(new Uint16Array(e),t,A)}}class Mp extends hA{constructor(e,t,A){super(new Uint32Array(e),t,A)}}class Ht extends hA{constructor(e,t,A){super(new Float32Array(e),t,A)}}let Xm=0;const _A=new ft,Ro=new Ut,Mr=new N,fA=new os,Bs=new os,Rt=new N;class uA extends pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xp(e)?Mp:bp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,A=0){this.groups.push({start:e,count:t,materialIndex:A})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const A=this.attributes.normal;if(A!==void 0){const s=new Ve().getNormalMatrix(e);A.applyNormalMatrix(s),A.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _A.makeRotationFromQuaternion(e),this.applyMatrix4(_A),this}rotateX(e){return _A.makeRotationX(e),this.applyMatrix4(_A),this}rotateY(e){return _A.makeRotationY(e),this.applyMatrix4(_A),this}rotateZ(e){return _A.makeRotationZ(e),this.applyMatrix4(_A),this}translate(e,t,A){return _A.makeTranslation(e,t,A),this.applyMatrix4(_A),this}scale(e,t,A){return _A.makeScale(e,t,A),this.applyMatrix4(_A),this}lookAt(e){return Ro.lookAt(e),Ro.updateMatrix(),this.applyMatrix4(Ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const A=[];for(let r=0,s=e.length;r<s;r++){const n=e[r];A.push(n.x,n.y,n.z||0)}this.setAttribute("position",new Ht(A,3))}else{const A=Math.min(e.length,t.count);for(let r=0;r<A;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let A=0,r=t.length;A<r;A++){const s=t[A];fA.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,fA.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,fA.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(fA.min),this.boundingBox.expandByPoint(fA.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const A=this.boundingSphere.center;if(fA.setFromBufferAttribute(e),t)for(let s=0,n=t.length;s<n;s++){const a=t[s];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(fA.min,Bs.min),fA.expandByPoint(Rt),Rt.addVectors(fA.max,Bs.max),fA.expandByPoint(Rt)):(fA.expandByPoint(Bs.min),fA.expandByPoint(Bs.max))}fA.getCenter(A);let r=0;for(let s=0,n=e.count;s<n;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,A.distanceToSquared(Rt));if(t)for(let s=0,n=t.length;s<n;s++){const a=t[s],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++)Rt.fromBufferAttribute(a,l),o&&(Mr.fromBufferAttribute(e,l),Rt.add(Mr)),r=Math.max(r,A.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const A=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hA(new Float32Array(4*A.count),4));const n=this.getAttribute("tangent"),a=[],o=[];for(let S=0;S<A.count;S++)a[S]=new N,o[S]=new N;const l=new N,c=new N,u=new N,h=new Ee,p=new Ee,f=new Ee,m=new N,g=new N;function d(S,C,_){l.fromBufferAttribute(A,S),c.fromBufferAttribute(A,C),u.fromBufferAttribute(A,_),h.fromBufferAttribute(s,S),p.fromBufferAttribute(s,C),f.fromBufferAttribute(s,_),c.sub(l),u.sub(l),p.sub(h),f.sub(h);const F=1/(p.x*f.y-f.x*p.y);isFinite(F)&&(m.copy(c).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(F),g.copy(u).multiplyScalar(p.x).addScaledVector(c,-f.x).multiplyScalar(F),a[S].add(m),a[C].add(m),a[_].add(m),o[S].add(g),o[C].add(g),o[_].add(g))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let S=0,C=B.length;S<C;++S){const _=B[S],F=_.start,T=_.count;for(let L=F,I=F+T;L<I;L+=3)d(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const v=new N,y=new N,x=new N,w=new N;function M(S){x.fromBufferAttribute(r,S),w.copy(x);const C=a[S];v.copy(C),v.sub(x.multiplyScalar(x.dot(C))).normalize(),y.crossVectors(w,C);const _=y.dot(o[S])<0?-1:1;n.setXYZW(S,v.x,v.y,v.z,_)}for(let S=0,C=B.length;S<C;++S){const _=B[S],F=_.start,T=_.count;for(let L=F,I=F+T;L<I;L+=3)M(e.getX(L+0)),M(e.getX(L+1)),M(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let A=this.getAttribute("normal");if(A===void 0)A=new hA(new Float32Array(t.count*3),3),this.setAttribute("normal",A);else for(let h=0,p=A.count;h<p;h++)A.setXYZ(h,0,0,0);const r=new N,s=new N,n=new N,a=new N,o=new N,l=new N,c=new N,u=new N;if(e)for(let h=0,p=e.count;h<p;h+=3){const f=e.getX(h+0),m=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,f),s.fromBufferAttribute(t,m),n.fromBufferAttribute(t,g),c.subVectors(n,s),u.subVectors(r,s),c.cross(u),a.fromBufferAttribute(A,f),o.fromBufferAttribute(A,m),l.fromBufferAttribute(A,g),a.add(c),o.add(c),l.add(c),A.setXYZ(f,a.x,a.y,a.z),A.setXYZ(m,o.x,o.y,o.z),A.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),n.fromBufferAttribute(t,h+2),c.subVectors(n,s),u.subVectors(r,s),c.cross(u),A.setXYZ(h+0,c.x,c.y,c.z),A.setXYZ(h+1,c.x,c.y,c.z),A.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),A.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,A=e.count;t<A;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,o){const l=a.array,c=a.itemSize,u=a.normalized,h=new l.constructor(o.length*c);let p=0,f=0;for(let m=0,g=o.length;m<g;m++){a.isInterleavedBufferAttribute?p=o[m]*a.data.stride+a.offset:p=o[m]*c;for(let d=0;d<c;d++)h[f++]=l[p++]}return new hA(h,c,u)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new uA,A=this.index.array,r=this.attributes;for(const a in r){const o=r[a],l=e(o,A);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const o=[],l=s[a];for(let c=0,u=l.length;c<u;c++){const h=l[c],p=e(h,A);o.push(p)}t.morphAttributes[a]=o}t.morphTargetsRelative=this.morphTargetsRelative;const n=this.groups;for(let a=0,o=n.length;a<o;a++){const l=n[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const l in o)o[l]!==void 0&&(e[l]=o[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const A=this.attributes;for(const o in A){const l=A[o];e.data.attributes[o]=l.toJSON(e.data)}const r={};let s=!1;for(const o in this.morphAttributes){const l=this.morphAttributes[o],c=[];for(let u=0,h=l.length;u<h;u++){const p=l[u];c.push(p.toJSON(e.data))}c.length>0&&(r[o]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const n=this.groups;n.length>0&&(e.data.groups=JSON.parse(JSON.stringify(n)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const A=e.index;A!==null&&this.setIndex(A.clone());const r=e.attributes;for(const l in r){const c=r[l];this.setAttribute(l,c.clone(t))}const s=e.morphAttributes;for(const l in s){const c=[],u=s[l];for(let h=0,p=u.length;h<p;h++)c.push(u[h].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;const n=e.groups;for(let l=0,c=n.length;l<c;l++){const u=n[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $h=new ft,Zi=new ja,xn=new Ya,eu=new N,Cn=new N,En=new N,bn=new N,Do=new N,Mn=new N,tu=new N,Un=new N;class rA extends Ut{constructor(e=new uA,t=new ls){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const A=e[t[0]];if(A!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=A.length;r<s;r++){const n=A[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){const A=this.geometry,r=A.attributes.position,s=A.morphAttributes.position,n=A.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Mn.set(0,0,0);for(let o=0,l=s.length;o<l;o++){const c=a[o],u=s[o];c!==0&&(Do.fromBufferAttribute(u,e),n?Mn.addScaledVector(Do,c):Mn.addScaledVector(Do.sub(t),c))}t.add(Mn)}return t}raycast(e,t){const A=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(A.boundingSphere===null&&A.computeBoundingSphere(),xn.copy(A.boundingSphere),xn.applyMatrix4(s),Zi.copy(e.ray).recast(e.near),!(xn.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(xn,eu)===null||Zi.origin.distanceToSquared(eu)>(e.far-e.near)**2))&&($h.copy(s).invert(),Zi.copy(e.ray).applyMatrix4($h),!(A.boundingBox!==null&&Zi.intersectsBox(A.boundingBox)===!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,A){let r;const s=this.geometry,n=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,u=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(n))for(let f=0,m=h.length;f<m;f++){const g=h[f],d=n[g.materialIndex],B=Math.max(g.start,p.start),v=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=B,x=v;y<x;y+=3){const w=a.getX(y),M=a.getX(y+1),S=a.getX(y+2);r=Sn(this,d,e,A,l,c,u,w,M,S),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const f=Math.max(0,p.start),m=Math.min(a.count,p.start+p.count);for(let g=f,d=m;g<d;g+=3){const B=a.getX(g),v=a.getX(g+1),y=a.getX(g+2);r=Sn(this,n,e,A,l,c,u,B,v,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let f=0,m=h.length;f<m;f++){const g=h[f],d=n[g.materialIndex],B=Math.max(g.start,p.start),v=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let y=B,x=v;y<x;y+=3){const w=y,M=y+1,S=y+2;r=Sn(this,d,e,A,l,c,u,w,M,S),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const f=Math.max(0,p.start),m=Math.min(o.count,p.start+p.count);for(let g=f,d=m;g<d;g+=3){const B=g,v=g+1,y=g+2;r=Sn(this,n,e,A,l,c,u,B,v,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Ym(i,e,t,A,r,s,n,a){let o;if(e.side===cA?o=A.intersectTriangle(n,s,r,!0,a):o=A.intersectTriangle(r,s,n,e.side===Gi,a),o===null)return null;Un.copy(a),Un.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Un);return l<t.near||l>t.far?null:{distance:l,point:Un.clone(),object:i}}function Sn(i,e,t,A,r,s,n,a,o,l){i.getVertexPosition(a,Cn),i.getVertexPosition(o,En),i.getVertexPosition(l,bn);const c=Ym(i,e,t,A,Cn,En,bn,tu);if(c){const u=new N;CA.getBarycoord(tu,Cn,En,bn,u),r&&(c.uv=CA.getInterpolatedAttribute(r,a,o,l,u,new Ee)),s&&(c.uv1=CA.getInterpolatedAttribute(s,a,o,l,u,new Ee)),n&&(c.normal=CA.getInterpolatedAttribute(n,a,o,l,u,new N),c.normal.dot(A.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:o,c:l,normal:new N,materialIndex:0};CA.getNormal(Cn,En,bn,h.normal),c.face=h,c.barycoord=u}return c}class cs extends uA{constructor(e=1,t=1,A=1,r=1,s=1,n=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:A,widthSegments:r,heightSegments:s,depthSegments:n};const a=this;r=Math.floor(r),s=Math.floor(s),n=Math.floor(n);const o=[],l=[],c=[],u=[];let h=0,p=0;f("z","y","x",-1,-1,A,t,e,n,s,0),f("z","y","x",1,-1,A,t,-e,n,s,1),f("x","z","y",1,1,e,A,t,r,n,2),f("x","z","y",1,-1,e,A,-t,r,n,3),f("x","y","z",1,-1,e,t,A,r,s,4),f("x","y","z",-1,-1,e,t,-A,r,s,5),this.setIndex(o),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(c,3)),this.setAttribute("uv",new Ht(u,2));function f(m,g,d,B,v,y,x,w,M,S,C){const _=y/M,F=x/S,T=y/2,L=x/2,I=w/2,H=M+1,R=S+1;let G=0,z=0;const X=new N;for(let te=0;te<R;te++){const ve=te*F-L;for(let ie=0;ie<H;ie++){const Ne=ie*_-T;X[m]=Ne*B,X[g]=ve*v,X[d]=I,l.push(X.x,X.y,X.z),X[m]=0,X[g]=0,X[d]=w>0?1:-1,c.push(X.x,X.y,X.z),u.push(ie/M),u.push(1-te/S),G+=1}}for(let te=0;te<S;te++)for(let ve=0;ve<M;ve++){const ie=h+ve+H*te,Ne=h+ve+H*(te+1),Ye=h+(ve+1)+H*(te+1),Ke=h+(ve+1)+H*te;o.push(ie,Ne,Ke),o.push(Ne,Ye,Ke),z+=6}a.addGroup(p,z,C),p+=z,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function is(i){const e={};for(const t in i){e[t]={};for(const A in i[t]){const r=i[t][A];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][A]=null):e[t][A]=r.clone():Array.isArray(r)?e[t][A]=r.slice():e[t][A]=r}}return e}function Jt(i){const e={};for(let t=0;t<i.length;t++){const A=is(i[t]);for(const r in A)e[r]=A[r]}return e}function jm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Up(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Ua={clone:is,merge:Jt};var qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class AA extends Xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qm,this.fragmentShader=Jm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=jm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const A={};for(const r in this.extensions)this.extensions[r]===!0&&(A[r]=!0);return Object.keys(A).length>0&&(t.extensions=A),t}}class Sp extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=WA,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new N,Au=new Ee,iu=new Ee;class mA extends Sp{constructor(e=50,t=1,A=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=A,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=As*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return As*2*Math.atan(Math.tan(jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,A){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),A.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,Au,iu),t.subVectors(iu,Au)}setViewOffset(e,t,A,r,s,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=A,this.view.offsetY=r,this.view.width=s,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jr*.5*this.fov)/this.zoom,A=2*t,r=this.aspect*A,s=-.5*r;const n=this.view;if(this.view!==null&&this.view.enabled){const o=n.fullWidth,l=n.fullHeight;s+=n.offsetX*r/o,t-=n.offsetY*A/l,r*=n.width/o,A*=n.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-A,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ur=-90,Sr=1;class Zm extends Ut{constructor(e,t,A){super(),this.type="CubeCamera",this.renderTarget=A,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mA(Ur,Sr,e,t);r.layers=this.layers,this.add(r);const s=new mA(Ur,Sr,e,t);s.layers=this.layers,this.add(s);const n=new mA(Ur,Sr,e,t);n.layers=this.layers,this.add(n);const a=new mA(Ur,Sr,e,t);a.layers=this.layers,this.add(a);const o=new mA(Ur,Sr,e,t);o.layers=this.layers,this.add(o);const l=new mA(Ur,Sr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[A,r,s,n,a,o]=t;for(const l of t)this.remove(l);if(e===WA)A.up.set(0,1,0),A.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===ba)A.up.set(0,-1,0),A.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:A,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,n,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;const m=A.texture.generateMipmaps;A.texture.generateMipmaps=!1,e.setRenderTarget(A,0,r),e.render(t,s),e.setRenderTarget(A,1,r),e.render(t,n),e.setRenderTarget(A,2,r),e.render(t,a),e.setRenderTarget(A,3,r),e.render(t,o),e.setRenderTarget(A,4,r),e.render(t,l),A.texture.generateMipmaps=m,e.setRenderTarget(A,5,r),e.render(t,c),e.setRenderTarget(u,h,p),e.xr.enabled=f,A.texture.needsPMREMUpdate=!0}}class Fp extends jt{constructor(e=[],t=$r,A,r,s,n,a,o,l,c){super(e,t,A,r,s,n,a,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $m extends HA{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const A={width:e,height:e,depth:1},r=[A,A,A,A,A,A];this.texture=new Fp(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const A={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new cs(5,5,5),s=new AA({name:"CubemapFromEquirect",uniforms:is(A.uniforms),vertexShader:A.vertexShader,fragmentShader:A.fragmentShader,side:cA,blending:XA});s.uniforms.tEquirect.value=t;const n=new rA(r,s),a=t.minFilter;return t.minFilter===ar&&(t.minFilter=EA),new Zm(1,10,this).update(e,n),t.minFilter=a,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,A=!0,r=!0){const s=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,A,r);e.setRenderTarget(s)}}class zr extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eB={type:"move"};class Po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const A of e.hand.values())this._getHandJoint(t,A)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,A){let r=null,s=null,n=null;const a=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(const m of e.hand.values()){const g=t.getJointPose(m,A),d=this._getHandJoint(l,m);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=c.position.distanceTo(u.position),p=.02,f=.005;l.inputState.pinching&&h>p+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,A),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,A),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eB)))}return a!==null&&(a.visible=r!==null),o!==null&&(o.visible=s!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const A=new zr;A.matrixAutoUpdate=!1,A.visible=!1,e.joints[t.jointName]=A,e.add(A)}return e.joints[t.jointName]}}class th{constructor(e,t=1,A=1e3){this.isFog=!0,this.name="",this.color=new Qe(e),this.near=t,this.far=A}clone(){return new th(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class tB extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new JA,this.environmentIntensity=1,this.environmentRotation=new JA,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Tp extends jt{constructor(e=null,t=1,A=1,r,s,n,a,o,l=iA,c=iA,u,h){super(null,n,a,o,l,c,r,s,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:A},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ho=new N,AB=new N,iB=new Ve;class gi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,A,r){return this.normal.set(e,t,A),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,A){const r=Ho.subVectors(A,t).cross(AB.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const A=e.delta(Ho),r=this.normal.dot(A);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(A,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),A=this.distanceToPoint(e.end);return t<0&&A>0||A<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const A=t||iB.getNormalMatrix(e),r=this.coplanarPoint(Ho).applyMatrix4(e),s=this.normal.applyMatrix3(A).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new Ya,rB=new Ee(.5,.5),Fn=new N;class Ah{constructor(e=new gi,t=new gi,A=new gi,r=new gi,s=new gi,n=new gi){this.planes=[e,t,A,r,s,n]}set(e,t,A,r,s,n){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(A),a[3].copy(r),a[4].copy(s),a[5].copy(n),this}copy(e){const t=this.planes;for(let A=0;A<6;A++)t[A].copy(e.planes[A]);return this}setFromProjectionMatrix(e,t=WA,A=!1){const r=this.planes,s=e.elements,n=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],p=s[7],f=s[8],m=s[9],g=s[10],d=s[11],B=s[12],v=s[13],y=s[14],x=s[15];if(r[0].setComponents(l-n,p-c,d-f,x-B).normalize(),r[1].setComponents(l+n,p+c,d+f,x+B).normalize(),r[2].setComponents(l+a,p+u,d+m,x+v).normalize(),r[3].setComponents(l-a,p-u,d-m,x-v).normalize(),A)r[4].setComponents(o,h,g,y).normalize(),r[5].setComponents(l-o,p-h,d-g,x-y).normalize();else if(r[4].setComponents(l-o,p-h,d-g,x-y).normalize(),t===WA)r[5].setComponents(l+o,p+h,d+g,x+y).normalize();else if(t===ba)r[5].setComponents(o,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(e){$i.center.set(0,0,0);const t=rB.distanceTo(e.center);return $i.radius=.7071067811865476+t,$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){const t=this.planes,A=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(A)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let A=0;A<6;A++){const r=t[A];if(Fn.x=r.normal.x>0?e.max.x:e.min.x,Fn.y=r.normal.y>0?e.max.y:e.min.y,Fn.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fn)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let A=0;A<6;A++)if(t[A].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ih extends Xi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sa=new N,Fa=new N,ru=new ft,ws=new ja,Tn=new Ya,No=new N,su=new N;class sB extends Ut{constructor(e=new uA,t=new ih){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,A=[0];for(let r=1,s=t.count;r<s;r++)Sa.fromBufferAttribute(t,r-1),Fa.fromBufferAttribute(t,r),A[r]=A[r-1],A[r]+=Sa.distanceTo(Fa);e.setAttribute("lineDistance",new Ht(A,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const A=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,n=A.drawRange;if(A.boundingSphere===null&&A.computeBoundingSphere(),Tn.copy(A.boundingSphere),Tn.applyMatrix4(r),Tn.radius+=s,e.ray.intersectsSphere(Tn)===!1)return;ru.copy(r).invert(),ws.copy(e.ray).applyMatrix4(ru);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=this.isLineSegments?2:1,c=A.index,u=A.attributes.position;if(c!==null){const h=Math.max(0,n.start),p=Math.min(c.count,n.start+n.count);for(let f=h,m=p-1;f<m;f+=l){const g=c.getX(f),d=c.getX(f+1),B=Qn(this,e,ws,o,g,d,f);B&&t.push(B)}if(this.isLineLoop){const f=c.getX(p-1),m=c.getX(h),g=Qn(this,e,ws,o,f,m,p-1);g&&t.push(g)}}else{const h=Math.max(0,n.start),p=Math.min(u.count,n.start+n.count);for(let f=h,m=p-1;f<m;f+=l){const g=Qn(this,e,ws,o,f,f+1,f);g&&t.push(g)}if(this.isLineLoop){const f=Qn(this,e,ws,o,p-1,h,p-1);f&&t.push(f)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const A=e[t[0]];if(A!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=A.length;r<s;r++){const n=A[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}}function Qn(i,e,t,A,r,s,n){const a=i.geometry.attributes.position;if(Sa.fromBufferAttribute(a,r),Fa.fromBufferAttribute(a,s),t.distanceSqToSegment(Sa,Fa,No,su)>A)return;No.applyMatrix4(i.matrixWorld);const o=e.ray.origin.distanceTo(No);if(!(o<e.near||o>e.far))return{distance:o,point:su.clone().applyMatrix4(i.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:i}}const nu=new N,au=new N;class Qp extends sB{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,A=[];for(let r=0,s=t.count;r<s;r+=2)nu.fromBufferAttribute(t,r),au.fromBufferAttribute(t,r+1),A[r]=r===0?0:A[r-1],A[r+1]=A[r]+nu.distanceTo(au);e.setAttribute("lineDistance",new Ht(A,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Lp extends jt{constructor(e,t,A,r,s,n,a,o,l){super(e,t,A,r,s,n,a,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ip extends jt{constructor(e,t,A=dr,r,s,n,a=iA,o=iA,l,c=Xs,u=1){if(c!==Xs&&c!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,r,s,n,a,o,c,A,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $c(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Rp extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}const Ln=new N,In=new N,Oo=new N,Rn=new CA;class nB extends uA{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const A=Math.pow(10,4),r=Math.cos(jr*t),s=e.getIndex(),n=e.getAttribute("position"),a=s?s.count:n.count,o=[0,0,0],l=["a","b","c"],c=new Array(3),u={},h=[];for(let p=0;p<a;p+=3){s?(o[0]=s.getX(p),o[1]=s.getX(p+1),o[2]=s.getX(p+2)):(o[0]=p,o[1]=p+1,o[2]=p+2);const{a:f,b:m,c:g}=Rn;if(f.fromBufferAttribute(n,o[0]),m.fromBufferAttribute(n,o[1]),g.fromBufferAttribute(n,o[2]),Rn.getNormal(Oo),c[0]=`${Math.round(f.x*A)},${Math.round(f.y*A)},${Math.round(f.z*A)}`,c[1]=`${Math.round(m.x*A)},${Math.round(m.y*A)},${Math.round(m.z*A)}`,c[2]=`${Math.round(g.x*A)},${Math.round(g.y*A)},${Math.round(g.z*A)}`,!(c[0]===c[1]||c[1]===c[2]||c[2]===c[0]))for(let d=0;d<3;d++){const B=(d+1)%3,v=c[d],y=c[B],x=Rn[l[d]],w=Rn[l[B]],M=`${v}_${y}`,S=`${y}_${v}`;S in u&&u[S]?(Oo.dot(u[S].normal)<=r&&(h.push(x.x,x.y,x.z),h.push(w.x,w.y,w.z)),u[S]=null):M in u||(u[M]={index0:o[d],index1:o[B],normal:Oo.clone()})}}for(const p in u)if(u[p]){const{index0:f,index1:m}=u[p];Ln.fromBufferAttribute(n,f),In.fromBufferAttribute(n,m),h.push(Ln.x,Ln.y,Ln.z),h.push(In.x,In.y,In.z)}this.setAttribute("position",new Ht(h,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class aB{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){De("Curve: .getPoint() not implemented.")}getPointAt(e,t){const A=this.getUtoTmapping(e);return this.getPoint(A,t)}getPoints(e=5){const t=[];for(let A=0;A<=e;A++)t.push(this.getPoint(A/e));return t}getSpacedPoints(e=5){const t=[];for(let A=0;A<=e;A++)t.push(this.getPointAt(A/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let A,r=this.getPoint(0),s=0;t.push(0);for(let n=1;n<=e;n++)A=this.getPoint(n/e),s+=A.distanceTo(r),t.push(s),r=A;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const A=this.getLengths();let r=0;const s=A.length;let n;t?n=t:n=e*A[s-1];let a=0,o=s-1,l;for(;a<=o;)if(r=Math.floor(a+(o-a)/2),l=A[r]-n,l<0)a=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,A[r]===n)return r/(s-1);const c=A[r],u=A[r+1]-c,h=(n-c)/u;return(r+h)/(s-1)}getTangent(e,t){let A=e-1e-4,r=e+1e-4;A<0&&(A=0),r>1&&(r=1);const s=this.getPoint(A),n=this.getPoint(r),a=t||(s.isVector2?new Ee:new N);return a.copy(n).sub(s).normalize(),a}getTangentAt(e,t){const A=this.getUtoTmapping(e);return this.getTangent(A,t)}computeFrenetFrames(e,t=!1){const A=new N,r=[],s=[],n=[],a=new N,o=new ft;for(let p=0;p<=e;p++){const f=p/e;r[p]=this.getTangentAt(f,new N)}s[0]=new N,n[0]=new N;let l=Number.MAX_VALUE;const c=Math.abs(r[0].x),u=Math.abs(r[0].y),h=Math.abs(r[0].z);c<=l&&(l=c,A.set(1,0,0)),u<=l&&(l=u,A.set(0,1,0)),h<=l&&A.set(0,0,1),a.crossVectors(r[0],A).normalize(),s[0].crossVectors(r[0],a),n[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),n[p]=n[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const f=Math.acos(Xe(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(o.makeRotationAxis(a,f))}n[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Xe(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(o.makeRotationAxis(r[f],p*f)),n[f].crossVectors(r[f],s[f])}return{tangents:r,normals:s,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function rh(){let i=0,e=0,t=0,A=0;function r(s,n,a,o){i=s,e=a,t=-3*s+3*n-2*a-o,A=2*s-2*n+a+o}return{initCatmullRom:function(s,n,a,o,l){r(n,a,l*(a-s),l*(o-n))},initNonuniformCatmullRom:function(s,n,a,o,l,c,u){let h=(n-s)/l-(a-s)/(l+c)+(a-n)/c,p=(a-n)/c-(o-n)/(c+u)+(o-a)/u;h*=c,p*=c,r(n,a,h,p)},calc:function(s){const n=s*s,a=n*s;return i+e*s+t*n+A*a}}}const Dn=new N,ko=new rh,Vo=new rh,zo=new rh;class uc extends aB{constructor(e=[],t=!1,A="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=A,this.tension=r}getPoint(e,t=new N){const A=t,r=this.points,s=r.length,n=(s-(this.closed?0:1))*e;let a=Math.floor(n),o=n-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:o===0&&a===s-1&&(a=s-2,o=1);let l,c;this.closed||a>0?l=r[(a-1)%s]:(Dn.subVectors(r[0],r[1]).add(r[0]),l=Dn);const u=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(Dn.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=Dn),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let f=Math.pow(l.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(c),p);m<1e-4&&(m=1),f<1e-4&&(f=m),g<1e-4&&(g=m),ko.initNonuniformCatmullRom(l.x,u.x,h.x,c.x,f,m,g),Vo.initNonuniformCatmullRom(l.y,u.y,h.y,c.y,f,m,g),zo.initNonuniformCatmullRom(l.z,u.z,h.z,c.z,f,m,g)}else this.curveType==="catmullrom"&&(ko.initCatmullRom(l.x,u.x,h.x,c.x,this.tension),Vo.initCatmullRom(l.y,u.y,h.y,c.y,this.tension),zo.initCatmullRom(l.z,u.z,h.z,c.z,this.tension));return A.set(ko.calc(o),Vo.calc(o),zo.calc(o)),A}copy(e){super.copy(e),this.points=[];for(let t=0,A=e.points.length;t<A;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,A=this.points.length;t<A;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,A=e.points.length;t<A;t++){const r=e.points[t];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class en extends uA{constructor(e=1,t=1,A=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:A,heightSegments:r};const s=e/2,n=t/2,a=Math.floor(A),o=Math.floor(r),l=a+1,c=o+1,u=e/a,h=t/o,p=[],f=[],m=[],g=[];for(let d=0;d<c;d++){const B=d*h-n;for(let v=0;v<l;v++){const y=v*u-s;f.push(y,-B,0),m.push(0,0,1),g.push(v/a),g.push(1-d/o)}}for(let d=0;d<o;d++)for(let B=0;B<a;B++){const v=B+l*d,y=B+l*(d+1),x=B+1+l*(d+1),w=B+1+l*d;p.push(v,y,w),p.push(y,x,w)}this.setIndex(p),this.setAttribute("position",new Ht(f,3)),this.setAttribute("normal",new Ht(m,3)),this.setAttribute("uv",new Ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.width,e.height,e.widthSegments,e.heightSegments)}}class sh extends uA{constructor(e=1,t=32,A=16,r=0,s=Math.PI*2,n=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:A,phiStart:r,phiLength:s,thetaStart:n,thetaLength:a},t=Math.max(3,Math.floor(t)),A=Math.max(2,Math.floor(A));const o=Math.min(n+a,Math.PI);let l=0;const c=[],u=new N,h=new N,p=[],f=[],m=[],g=[];for(let d=0;d<=A;d++){const B=[],v=d/A;let y=0;d===0&&n===0?y=.5/t:d===A&&o===Math.PI&&(y=-.5/t);for(let x=0;x<=t;x++){const w=x/t;u.x=-e*Math.cos(r+w*s)*Math.sin(n+v*a),u.y=e*Math.cos(n+v*a),u.z=e*Math.sin(r+w*s)*Math.sin(n+v*a),f.push(u.x,u.y,u.z),h.copy(u).normalize(),m.push(h.x,h.y,h.z),g.push(w+y,1-v),B.push(l++)}c.push(B)}for(let d=0;d<A;d++)for(let B=0;B<t;B++){const v=c[d][B+1],y=c[d][B],x=c[d+1][B],w=c[d+1][B+1];(d!==0||n>0)&&p.push(v,y,w),(d!==A-1||o<Math.PI)&&p.push(y,x,w)}this.setIndex(p),this.setAttribute("position",new Ht(f,3)),this.setAttribute("normal",new Ht(m,3)),this.setAttribute("uv",new Ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class oB extends Xi{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Qe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class lB extends Xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jc,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new JA,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cB extends Xi{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Qe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jc,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class hB extends Xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uB extends Xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class nh extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class dB extends nh{constructor(e,t,A){super(e,A),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Go=new ft,ou=new N,lu=new N;class Dp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=qA,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ah,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,A=this.matrix;ou.setFromMatrixPosition(e.matrixWorld),t.position.copy(ou),lu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lu),t.updateMatrixWorld(),Go.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Go,t.coordinateSystem,t.reversedDepth),t.reversedDepth?A.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):A.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),A.multiply(Go)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class pB extends Dp{constructor(){super(new mA(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,A=As*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(A!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=A,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class fB extends nh{constructor(e,t,A=0,r=Math.PI/3,s=0,n=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=A,this.angle=r,this.penumbra=s,this.decay=n,this.map=null,this.shadow=new pB}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ah extends Sp{constructor(e=-1,t=1,A=1,r=-1,s=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=A,this.bottom=r,this.near=s,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,A,r,s,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=A,this.view.offsetY=r,this.view.width=s,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),A=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=A-e,n=A+e,a=r+t,o=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,n=s+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,n,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class gB extends Dp{constructor(){super(new ah(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pp extends nh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new gB}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class mB extends mA{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Hp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const cu=new ft;class BB{constructor(e,t,A=0,r=1/0){this.ray=new ja(e,t),this.near=A,this.far=r,this.camera=null,this.layers=new eh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):vt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return cu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cu),this}intersectObject(e,t=!0,A=[]){return dc(e,this,A,t),A.sort(hu),A}intersectObjects(e,t=!0,A=[]){for(let r=0,s=e.length;r<s;r++)dc(e[r],this,A,t);return A.sort(hu),A}}function hu(i,e){return i.distance-e.distance}function dc(i,e,t,A){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&A===!0){const s=i.children;for(let n=0,a=s.length;n<a;n++)dc(s[n],e,t,!0)}}class uu{constructor(e=1,t=0,A=0){this.radius=e,this.phi=t,this.theta=A}set(e,t,A){return this.radius=e,this.phi=t,this.theta=A,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,A){return this.radius=Math.sqrt(e*e+t*t+A*A),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,A),this.phi=Math.acos(Xe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class wB extends Qp{constructor(e=10,t=10,A=4473924,r=8947848){A=new Qe(A),r=new Qe(r);const s=t/2,n=e/t,a=e/2,o=[],l=[];for(let h=0,p=0,f=-a;h<=t;h++,f+=n){o.push(-a,0,f,a,0,f),o.push(f,0,-a,f,0,a);const m=h===s?A:r;m.toArray(l,p),p+=3,m.toArray(l,p),p+=3,m.toArray(l,p),p+=3,m.toArray(l,p),p+=3}const c=new uA;c.setAttribute("position",new Ht(o,3)),c.setAttribute("color",new Ht(l,3));const u=new ih({vertexColors:!0,toneMapped:!1});super(c,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class vB extends pr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){De("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function du(i,e,t,A){const r=yB(A);switch(t){case vp:return i*e;case yp:return i*e/r.components*r.byteLength;case Xc:return i*e/r.components*r.byteLength;case Yc:return i*e*2/r.components*r.byteLength;case jc:return i*e*2/r.components*r.byteLength;case Wc:return i*e*3/r.components*r.byteLength;case DA:return i*e*4/r.components*r.byteLength;case qc:return i*e*4/r.components*r.byteLength;case pa:case fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ga:case ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nl:case kl:return Math.max(i,16)*Math.max(e,8)/4;case Hl:case Ol:return Math.max(i,8)*Math.max(e,8)/2;case Vl:case zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case jl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ql:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case $l:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ec:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case tc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ic:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case sc:case nc:case ac:return Math.ceil(i/4)*Math.ceil(e/4)*16;case oc:case lc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case cc:case hc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yB(i){switch(i){case qA:case gp:return{byteLength:1,components:1};case Ks:case mp:case YA:return{byteLength:2,components:1};case Gc:case Kc:return{byteLength:2,components:4};case dr:case zc:case wi:return{byteLength:4,components:1};case Bp:case wp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vc}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vc);function Np(){let i=null,e=!1,t=null,A=null;function r(s,n){t(s,n),A=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(A=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(A),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function _B(i){const e=new WeakMap;function t(a,o){const l=a.array,c=a.usage,u=l.byteLength,h=i.createBuffer();i.bindBuffer(o,h),i.bufferData(o,l,c),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function A(a,o,l){const c=o.array,u=o.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,c);else{u.sort((p,f)=>p.start-f.start);let h=0;for(let p=1;p<u.length;p++){const f=u[h],m=u[p];m.start<=f.start+f.count+1?f.count=Math.max(f.count,m.start+m.count-f.start):(++h,u[h]=m)}u.length=h+1;for(let p=0,f=u.length;p<f;p++){const m=u[p];i.bufferSubData(l,m.start*c.BYTES_PER_ELEMENT,c,m.start,m.count)}o.clearUpdateRanges()}o.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const o=e.get(a);o&&(i.deleteBuffer(o.buffer),e.delete(a))}function n(a,o){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,o));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");A(l.buffer,a,o),l.version=a.version}}return{get:r,remove:s,update:n}}var xB=`#ifdef USE_ALPHAHASH
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
#endif`,LB=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IB=`vec3 objectNormal = vec3( normal );
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
#endif`,PB=`#ifdef USE_BUMPMAP
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
#endif`,HB=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kB=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VB=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zB=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,GB=`#if defined( USE_COLOR_ALPHA )
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
#endif`,YB=`vec3 transformedNormal = objectNormal;
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
#endif`,jB=`#ifdef USE_DISPLACEMENTMAP
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
#endif`,$B="gl_FragColor = linearToOutputTexel( gl_FragColor );",ew=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tw=`#ifdef USE_ENVMAP
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
#endif`,Aw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,iw=`#ifdef USE_ENVMAP
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
#endif`,rw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sw=`#ifdef USE_ENVMAP
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
#endif`,nw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ow=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cw=`#ifdef USE_GRADIENTMAP
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
}`,hw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pw=`uniform bool receiveShadow;
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
#endif`,fw=`#ifdef USE_ENVMAP
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
#endif`,gw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ww=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vw=`PhysicalMaterial material;
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
#endif`,yw=`uniform sampler2D dfgLUT;
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
}`,_w=`
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
#endif`,xw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ew=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qw=`#if defined( USE_POINTS_UV )
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
#endif`,Lw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Iw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hw=`#ifdef USE_MORPHTARGETS
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
#endif`,Nw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ow=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kw=`#ifdef USE_NORMALMAP
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
#endif`,Ww=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$w=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,i0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,a0=`float getShadowMask() {
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
}`,o0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l0=`#ifdef USE_SKINNING
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
#endif`,c0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h0=`#ifdef USE_SKINNING
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
#endif`,u0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,p0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,f0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,g0=`#ifdef USE_TRANSMISSION
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
#endif`,m0=`#ifdef USE_TRANSMISSION
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
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x0=`uniform sampler2D t2D;
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
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`#include <common>
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
}`,S0=`#if DEPTH_PACKING == 3200
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
}`,F0=`#define DISTANCE
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
}`,T0=`#define DISTANCE
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
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`uniform float scale;
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
}`,R0=`uniform vec3 diffuse;
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
}`,D0=`#include <common>
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
}`,P0=`uniform vec3 diffuse;
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
}`,H0=`#define LAMBERT
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
}`,N0=`#define LAMBERT
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
}`,O0=`#define MATCAP
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
}`,k0=`#define MATCAP
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
}`,V0=`#define NORMAL
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
}`,z0=`#define NORMAL
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
}`,G0=`#define PHONG
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
}`,K0=`#define PHONG
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
}`,W0=`#define STANDARD
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
}`,X0=`#define STANDARD
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
}`,Y0=`#define TOON
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
}`,j0=`#define TOON
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
}`,q0=`uniform float size;
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
}`,J0=`uniform vec3 diffuse;
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
}`,Z0=`#include <common>
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
}`,$0=`uniform vec3 color;
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
}`,We={alphahash_fragment:xB,alphahash_pars_fragment:CB,alphamap_fragment:EB,alphamap_pars_fragment:bB,alphatest_fragment:MB,alphatest_pars_fragment:UB,aomap_fragment:SB,aomap_pars_fragment:FB,batching_pars_vertex:TB,batching_vertex:QB,begin_vertex:LB,beginnormal_vertex:IB,bsdfs:RB,iridescence_fragment:DB,bumpmap_pars_fragment:PB,clipping_planes_fragment:HB,clipping_planes_pars_fragment:NB,clipping_planes_pars_vertex:OB,clipping_planes_vertex:kB,color_fragment:VB,color_pars_fragment:zB,color_pars_vertex:GB,color_vertex:KB,common:WB,cube_uv_reflection_fragment:XB,defaultnormal_vertex:YB,displacementmap_pars_vertex:jB,displacementmap_vertex:qB,emissivemap_fragment:JB,emissivemap_pars_fragment:ZB,colorspace_fragment:$B,colorspace_pars_fragment:ew,envmap_fragment:tw,envmap_common_pars_fragment:Aw,envmap_pars_fragment:iw,envmap_pars_vertex:rw,envmap_physical_pars_fragment:fw,envmap_vertex:sw,fog_vertex:nw,fog_pars_vertex:aw,fog_fragment:ow,fog_pars_fragment:lw,gradientmap_pars_fragment:cw,lightmap_pars_fragment:hw,lights_lambert_fragment:uw,lights_lambert_pars_fragment:dw,lights_pars_begin:pw,lights_toon_fragment:gw,lights_toon_pars_fragment:mw,lights_phong_fragment:Bw,lights_phong_pars_fragment:ww,lights_physical_fragment:vw,lights_physical_pars_fragment:yw,lights_fragment_begin:_w,lights_fragment_maps:xw,lights_fragment_end:Cw,logdepthbuf_fragment:Ew,logdepthbuf_pars_fragment:bw,logdepthbuf_pars_vertex:Mw,logdepthbuf_vertex:Uw,map_fragment:Sw,map_pars_fragment:Fw,map_particle_fragment:Tw,map_particle_pars_fragment:Qw,metalnessmap_fragment:Lw,metalnessmap_pars_fragment:Iw,morphinstance_vertex:Rw,morphcolor_vertex:Dw,morphnormal_vertex:Pw,morphtarget_pars_vertex:Hw,morphtarget_vertex:Nw,normal_fragment_begin:Ow,normal_fragment_maps:kw,normal_pars_fragment:Vw,normal_pars_vertex:zw,normal_vertex:Gw,normalmap_pars_fragment:Kw,clearcoat_normal_fragment_begin:Ww,clearcoat_normal_fragment_maps:Xw,clearcoat_pars_fragment:Yw,iridescence_pars_fragment:jw,opaque_fragment:qw,packing:Jw,premultiplied_alpha_fragment:Zw,project_vertex:$w,dithering_fragment:e0,dithering_pars_fragment:t0,roughnessmap_fragment:A0,roughnessmap_pars_fragment:i0,shadowmap_pars_fragment:r0,shadowmap_pars_vertex:s0,shadowmap_vertex:n0,shadowmask_pars_fragment:a0,skinbase_vertex:o0,skinning_pars_vertex:l0,skinning_vertex:c0,skinnormal_vertex:h0,specularmap_fragment:u0,specularmap_pars_fragment:d0,tonemapping_fragment:p0,tonemapping_pars_fragment:f0,transmission_fragment:g0,transmission_pars_fragment:m0,uv_pars_fragment:B0,uv_pars_vertex:w0,uv_vertex:v0,worldpos_vertex:y0,background_vert:_0,background_frag:x0,backgroundCube_vert:C0,backgroundCube_frag:E0,cube_vert:b0,cube_frag:M0,depth_vert:U0,depth_frag:S0,distanceRGBA_vert:F0,distanceRGBA_frag:T0,equirect_vert:Q0,equirect_frag:L0,linedashed_vert:I0,linedashed_frag:R0,meshbasic_vert:D0,meshbasic_frag:P0,meshlambert_vert:H0,meshlambert_frag:N0,meshmatcap_vert:O0,meshmatcap_frag:k0,meshnormal_vert:V0,meshnormal_frag:z0,meshphong_vert:G0,meshphong_frag:K0,meshphysical_vert:W0,meshphysical_frag:X0,meshtoon_vert:Y0,meshtoon_frag:j0,points_vert:q0,points_frag:J0,shadow_vert:Z0,shadow_frag:$0,sprite_vert:ev,sprite_frag:tv},oe={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},KA={basic:{uniforms:Jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Jt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Jt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Jt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Jt([oe.points,oe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Jt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Jt([oe.common,oe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Jt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Jt([oe.sprite,oe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Jt([oe.common,oe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Jt([oe.lights,oe.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};KA.physical={uniforms:Jt([KA.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Pn={r:0,b:0,g:0},er=new JA,Av=new ft;function iv(i,e,t,A,r,s,n){const a=new Qe(0);let o=s===!0?0:1,l,c,u=null,h=0,p=null;function f(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function m(v){let y=!1;const x=f(v);x===null?d(a,o):x&&x.isColor&&(d(x,1),y=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?A.buffers.color.setClear(0,0,0,1,n):w==="alpha-blend"&&A.buffers.color.setClear(0,0,0,0,n),(i.autoClear||y)&&(A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(v,y){const x=f(y);x&&(x.isCubeTexture||x.mapping===Xa)?(c===void 0&&(c=new rA(new cs(1,1,1),new AA({name:"BackgroundCubeMaterial",uniforms:is(KA.backgroundCube.uniforms),vertexShader:KA.backgroundCube.vertexShader,fragmentShader:KA.backgroundCube.fragmentShader,side:cA,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,M,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),er.copy(y.backgroundRotation),er.x*=-1,er.y*=-1,er.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Av.makeRotationFromEuler(er)),c.material.toneMapped=qe.getTransfer(x.colorSpace)!==st,(u!==x||h!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,h=x.version,p=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new rA(new en(2,2),new AA({name:"BackgroundMaterial",uniforms:is(KA.background.uniforms),vertexShader:KA.background.vertexShader,fragmentShader:KA.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=qe.getTransfer(x.colorSpace)!==st,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||h!==x.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,h=x.version,p=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function d(v,y){v.getRGB(Pn,Up(i)),A.buffers.color.setClear(Pn.r,Pn.g,Pn.b,y,n)}function B(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),o=y,d(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,d(a,o)},render:m,addToRenderList:g,dispose:B}}function rv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),A={},r=h(null);let s=r,n=!1;function a(_,F,T,L,I){let H=!1;const R=u(L,T,F);s!==R&&(s=R,l(s.object)),H=p(_,L,T,I),H&&f(_,L,T,I),I!==null&&e.update(I,i.ELEMENT_ARRAY_BUFFER),(H||n)&&(n=!1,y(_,F,T,L),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function o(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function c(_){return i.deleteVertexArray(_)}function u(_,F,T){const L=T.wireframe===!0;let I=A[_.id];I===void 0&&(I={},A[_.id]=I);let H=I[F.id];H===void 0&&(H={},I[F.id]=H);let R=H[L];return R===void 0&&(R=h(o()),H[L]=R),R}function h(_){const F=[],T=[],L=[];for(let I=0;I<t;I++)F[I]=0,T[I]=0,L[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:T,attributeDivisors:L,object:_,attributes:{},index:null}}function p(_,F,T,L){const I=s.attributes,H=F.attributes;let R=0;const G=T.getAttributes();for(const z in G)if(G[z].location>=0){const X=I[z];let te=H[z];if(te===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(te=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(te=_.instanceColor)),X===void 0||X.attribute!==te||te&&X.data!==te.data)return!0;R++}return s.attributesNum!==R||s.index!==L}function f(_,F,T,L){const I={},H=F.attributes;let R=0;const G=T.getAttributes();for(const z in G)if(G[z].location>=0){let X=H[z];X===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(X=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(X=_.instanceColor));const te={};te.attribute=X,X&&X.data&&(te.data=X.data),I[z]=te,R++}s.attributes=I,s.attributesNum=R,s.index=L}function m(){const _=s.newAttributes;for(let F=0,T=_.length;F<T;F++)_[F]=0}function g(_){d(_,0)}function d(_,F){const T=s.newAttributes,L=s.enabledAttributes,I=s.attributeDivisors;T[_]=1,L[_]===0&&(i.enableVertexAttribArray(_),L[_]=1),I[_]!==F&&(i.vertexAttribDivisor(_,F),I[_]=F)}function B(){const _=s.newAttributes,F=s.enabledAttributes;for(let T=0,L=F.length;T<L;T++)F[T]!==_[T]&&(i.disableVertexAttribArray(T),F[T]=0)}function v(_,F,T,L,I,H,R){R===!0?i.vertexAttribIPointer(_,F,T,I,H):i.vertexAttribPointer(_,F,T,L,I,H)}function y(_,F,T,L){m();const I=L.attributes,H=T.getAttributes(),R=F.defaultAttributeValues;for(const G in H){const z=H[G];if(z.location>=0){let X=I[G];if(X===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(X=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(X=_.instanceColor)),X!==void 0){const te=X.normalized,ve=X.itemSize,ie=e.get(X);if(ie===void 0)continue;const Ne=ie.buffer,Ye=ie.type,Ke=ie.bytesPerElement,Y=Ye===i.INT||Ye===i.UNSIGNED_INT||X.gpuType===zc;if(X.isInterleavedBufferAttribute){const q=X.data,ye=q.stride,ze=X.offset;if(q.isInstancedInterleavedBuffer){for(let be=0;be<z.locationSize;be++)d(z.location+be,q.meshPerAttribute);_.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let be=0;be<z.locationSize;be++)g(z.location+be);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let be=0;be<z.locationSize;be++)v(z.location+be,ve/z.locationSize,Ye,te,ye*Ke,(ze+ve/z.locationSize*be)*Ke,Y)}else{if(X.isInstancedBufferAttribute){for(let q=0;q<z.locationSize;q++)d(z.location+q,X.meshPerAttribute);_.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let q=0;q<z.locationSize;q++)g(z.location+q);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let q=0;q<z.locationSize;q++)v(z.location+q,ve/z.locationSize,Ye,te,ve*Ke,ve/z.locationSize*q*Ke,Y)}}else if(R!==void 0){const te=R[G];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(z.location,te);break;case 3:i.vertexAttrib3fv(z.location,te);break;case 4:i.vertexAttrib4fv(z.location,te);break;default:i.vertexAttrib1fv(z.location,te)}}}}B()}function x(){S();for(const _ in A){const F=A[_];for(const T in F){const L=F[T];for(const I in L)c(L[I].object),delete L[I];delete F[T]}delete A[_]}}function w(_){if(A[_.id]===void 0)return;const F=A[_.id];for(const T in F){const L=F[T];for(const I in L)c(L[I].object),delete L[I];delete F[T]}delete A[_.id]}function M(_){for(const F in A){const T=A[F];if(T[_.id]===void 0)continue;const L=T[_.id];for(const I in L)c(L[I].object),delete L[I];delete T[_.id]}}function S(){C(),n=!0,s!==r&&(s=r,l(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:S,resetDefaultState:C,dispose:x,releaseStatesOfGeometry:w,releaseStatesOfProgram:M,initAttributes:m,enableAttribute:g,disableUnusedAttributes:B}}function sv(i,e,t){let A;function r(l){A=l}function s(l,c){i.drawArrays(A,l,c),t.update(c,A,1)}function n(l,c,u){u!==0&&(i.drawArraysInstanced(A,l,c,u),t.update(c,A,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(A,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,A,1)}function o(l,c,u,h){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<l.length;f++)n(l[f],c[f],h[f]);else{p.multiDrawArraysInstancedWEBGL(A,l,0,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=c[m]*h[m];t.update(f,A,1)}}this.setMode=r,this.render=s,this.renderInstances=n,this.renderMultiDraw=a,this.renderMultiDrawInstances=o}function nv(i,e,t,A){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function n(M){return!(M!==DA&&A.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const S=M===YA&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==qA&&A.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==wi&&!S)}function o(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const c=o(l);c!==l&&(De("WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),B=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:o,textureFormatReadable:n,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:B,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:x,maxSamples:w}}function av(i){const e=this;let t=null,A=0,r=!1,s=!1;const n=new gi,a=new Ve,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const p=u.length!==0||h||A!==0||r;return r=h,A=u.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=c(u,h,0)},this.setState=function(u,h,p){const f=u.clippingPlanes,m=u.clipIntersection,g=u.clipShadows,d=i.get(u);if(!r||f===null||f.length===0||s&&!g)s?c(null):l();else{const B=s?0:A,v=B*4;let y=d.clippingState||null;o.value=y,y=c(f,h,v,p);for(let x=0;x!==v;++x)y[x]=t[x];d.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=B}};function l(){o.value!==t&&(o.value=t,o.needsUpdate=A>0),e.numPlanes=A,e.numIntersection=0}function c(u,h,p,f){const m=u!==null?u.length:0;let g=null;if(m!==0){if(g=o.value,f!==!0||g===null){const d=p+m*4,B=h.matrixWorldInverse;a.getNormalMatrix(B),(g===null||g.length<d)&&(g=new Float32Array(d));for(let v=0,y=p;v!==m;++v,y+=4)n.copy(u[v]).applyMatrix4(B,a),n.normal.toArray(g,y),g[y+3]=n.constant}o.value=g,o.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function ov(i){let e=new WeakMap;function t(n,a){return a===Rl?n.mapping=$r:a===Dl&&(n.mapping=es),n}function A(n){if(n&&n.isTexture){const a=n.mapping;if(a===Rl||a===Dl)if(e.has(n)){const o=e.get(n).texture;return t(o,n.mapping)}else{const o=n.image;if(o&&o.height>0){const l=new $m(o.height);return l.fromEquirectangularTexture(i,n),e.set(n,l),n.addEventListener("dispose",r),t(l.texture,n.mapping)}else return null}}return n}function r(n){const a=n.target;a.removeEventListener("dispose",r);const o=e.get(a);o!==void 0&&(e.delete(a),o.dispose())}function s(){e=new WeakMap}return{get:A,dispose:s}}const Pi=4,pu=[.125,.215,.35,.446,.526,.582],sr=20,lv=256,vs=new ah,fu=new Qe;let Ko=null,Wo=0,Xo=0,Yo=!1;const cv=new N;class gu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,A=.1,r=100,s={}){const{size:n=256,position:a=cv}=s;Ko=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,A,r,o,a),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ko,Wo,Xo),this._renderer.xr.enabled=Yo,e.scissorTest=!1,Fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$r||e.mapping===es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ko=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const A=t||this._allocateTargets();return this._textureToCubeUV(e,A),this._applyPMREM(A),this._cleanup(A),A}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,A={magFilter:EA,minFilter:EA,generateMipmaps:!1,type:YA,format:DA,colorSpace:ts,depthBuffer:!1},r=mu(e,t,A);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mu(e,t,A);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=hv(s)),this._blurMaterial=dv(s,e,t),this._ggxMaterial=uv(s,e,t)}return r}_compileMaterial(e){const t=new rA(new uA,e);this._renderer.compile(t,vs)}_sceneToCubeUV(e,t,A,r,s){const n=new mA(90,1,t,A),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,u=l.toneMapping;l.getClearColor(fu),l.toneMapping=ki,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new rA(new cs,new ls({name:"PMREM.Background",side:cA,depthWrite:!1,depthTest:!1})));const h=this._backgroundBox,p=h.material;let f=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,f=!0):(p.color.copy(fu),f=!0);for(let g=0;g<6;g++){const d=g%3;d===0?(n.up.set(0,a[g],0),n.position.set(s.x,s.y,s.z),n.lookAt(s.x+o[g],s.y,s.z)):d===1?(n.up.set(0,0,a[g]),n.position.set(s.x,s.y,s.z),n.lookAt(s.x,s.y+o[g],s.z)):(n.up.set(0,a[g],0),n.position.set(s.x,s.y,s.z),n.lookAt(s.x,s.y,s.z+o[g]));const B=this._cubeSize;Fr(r,d*B,g>2?B:0,B,B),l.setRenderTarget(r),f&&l.render(h,n),l.render(e,n)}l.toneMapping=u,l.autoClear=c,e.background=m}_textureToCubeUV(e,t){const A=this._renderer,r=e.mapping===$r||e.mapping===es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bu());const s=r?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=s;const a=s.uniforms;a.envMap.value=e;const o=this._cubeSize;Fr(t,0,0,3*o,2*o),A.setRenderTarget(t),A.render(n,vs)}_applyPMREM(e){const t=this._renderer,A=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=A}_applyGGXFilter(e,t,A){const r=this._renderer,s=this._pingPongRenderTarget,n=this._ggxMaterial,a=this._lodMeshes[A];a.material=n;const o=n.uniforms,l=A/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-c*c),h=.05+l*.95,p=u*h,{_lodMax:f}=this,m=this._sizeLods[A],g=3*m*(A>f-Pi?A-f+Pi:0),d=4*(this._cubeSize-m);o.envMap.value=e.texture,o.roughness.value=p,o.mipInt.value=f-t,Fr(s,g,d,3*m,2*m),r.setRenderTarget(s),r.render(a,vs),o.envMap.value=s.texture,o.roughness.value=0,o.mipInt.value=f-A,Fr(e,g,d,3*m,2*m),r.setRenderTarget(e),r.render(a,vs)}_blur(e,t,A,r,s){const n=this._pingPongRenderTarget;this._halfBlur(e,n,t,A,r,"latitudinal",s),this._halfBlur(n,e,A,A,r,"longitudinal",s)}_halfBlur(e,t,A,r,s,n,a){const o=this._renderer,l=this._blurMaterial;n!=="latitudinal"&&n!=="longitudinal"&&vt("blur direction must be either latitudinal or longitudinal!");const c=3,u=this._lodMeshes[r];u.material=l;const h=l.uniforms,p=this._sizeLods[A]-1,f=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*sr-1),m=s/f,g=isFinite(s)?1+Math.floor(c*m):sr;g>sr&&De(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${sr}`);const d=[];let B=0;for(let M=0;M<sr;++M){const S=M/m,C=Math.exp(-S*S/2);d.push(C),M===0?B+=C:M<g&&(B+=2*C)}for(let M=0;M<d.length;M++)d[M]=d[M]/B;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=n==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=f,h.mipInt.value=v-A;const y=this._sizeLods[r],x=3*y*(r>v-Pi?r-v+Pi:0),w=4*(this._cubeSize-y);Fr(t,x,w,3*y,2*y),o.setRenderTarget(t),o.render(u,vs)}}function hv(i){const e=[],t=[],A=[];let r=i;const s=i-Pi+1+pu.length;for(let n=0;n<s;n++){const a=Math.pow(2,r);e.push(a);let o=1/a;n>i-Pi?o=pu[n-i+Pi-1]:n===0&&(o=0),t.push(o);const l=1/(a-2),c=-l,u=1+l,h=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,f=6,m=3,g=2,d=1,B=new Float32Array(m*f*p),v=new Float32Array(g*f*p),y=new Float32Array(d*f*p);for(let w=0;w<p;w++){const M=w%3*2/3-1,S=w>2?0:-1,C=[M,S,0,M+2/3,S,0,M+2/3,S+1,0,M,S,0,M+2/3,S+1,0,M,S+1,0];B.set(C,m*f*w),v.set(h,g*f*w);const _=[w,w,w,w,w,w];y.set(_,d*f*w)}const x=new uA;x.setAttribute("position",new hA(B,m)),x.setAttribute("uv",new hA(v,g)),x.setAttribute("faceIndex",new hA(y,d)),A.push(new rA(x,null)),r>Pi&&r--}return{lodMeshes:A,sizeLods:e,sigmas:t}}function mu(i,e,t){const A=new HA(i,e,t);return A.texture.mapping=Xa,A.texture.name="PMREM.cubeUv",A.scissorTest=!0,A}function Fr(i,e,t,A,r){i.viewport.set(e,t,A,r),i.scissor.set(e,t,A,r)}function uv(i,e,t){return new AA({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qa(),fragmentShader:`

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
		`,blending:XA,depthTest:!1,depthWrite:!1})}function dv(i,e,t){const A=new Float32Array(sr),r=new N(0,1,0);return new AA({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:A},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qa(),fragmentShader:`

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
	`}function pv(i){let e=new WeakMap,t=null;function A(a){if(a&&a.isTexture){const o=a.mapping,l=o===Rl||o===Dl,c=o===$r||o===es;if(l||c){let u=e.get(a);const h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new gu(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new gu(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let o=0;const l=6;for(let c=0;c<l;c++)a[c]!==void 0&&o++;return o===l}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function n(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:A,dispose:n}}function fv(i){const e={};function t(A){if(e[A]!==void 0)return e[A];const r=i.getExtension(A);return e[A]=r,r}return{has:function(A){return t(A)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(A){const r=t(A);return r===null&&js("WebGLRenderer: "+A+" extension not supported."),r}}}function gv(i,e,t,A){const r={},s=new WeakMap;function n(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const f in h.attributes)e.remove(h.attributes[f]);h.removeEventListener("dispose",n),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),A.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return r[h.id]===!0||(h.addEventListener("dispose",n),r[h.id]=!0,t.memory.geometries++),h}function o(u){const h=u.attributes;for(const p in h)e.update(h[p],i.ARRAY_BUFFER)}function l(u){const h=[],p=u.index,f=u.attributes.position;let m=0;if(p!==null){const B=p.array;m=p.version;for(let v=0,y=B.length;v<y;v+=3){const x=B[v+0],w=B[v+1],M=B[v+2];h.push(x,w,w,M,M,x)}}else if(f!==void 0){const B=f.array;m=f.version;for(let v=0,y=B.length/3-1;v<y;v+=3){const x=v+0,w=v+1,M=v+2;h.push(x,w,w,M,M,x)}}else return;const g=new(xp(h)?Mp:bp)(h,1);g.version=m;const d=s.get(u);d&&e.remove(d),s.set(u,g)}function c(u){const h=s.get(u);if(h){const p=u.index;p!==null&&h.version<p.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:o,getWireframeAttribute:c}}function mv(i,e,t){let A;function r(h){A=h}let s,n;function a(h){s=h.type,n=h.bytesPerElement}function o(h,p){i.drawElements(A,p,s,h*n),t.update(p,A,1)}function l(h,p,f){f!==0&&(i.drawElementsInstanced(A,p,s,h*n,f),t.update(p,A,f))}function c(h,p,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(A,p,0,s,h,0,f);let m=0;for(let g=0;g<f;g++)m+=p[g];t.update(m,A,1)}function u(h,p,f,m){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<h.length;d++)l(h[d]/n,p[d],m[d]);else{g.multiDrawElementsInstancedWEBGL(A,p,0,s,h,0,m,0,f);let d=0;for(let B=0;B<f;B++)d+=p[B]*m[B];t.update(d,A,1)}}this.setMode=r,this.setIndex=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function Bv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function A(s,n,a){switch(t.calls++,n){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:vt("WebGLInfo: Unknown draw mode:",n);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:A}}function wv(i,e,t){const A=new WeakMap,r=new yt;function s(n,a,o){const l=n.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=c!==void 0?c.length:0;let h=A.get(a);if(h===void 0||h.count!==u){let p=function(){S.dispose(),A.delete(a),a.removeEventListener("dispose",p)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],B=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),m===!0&&(y=2),g===!0&&(y=3);let x=a.attributes.position.count*y,w=1;x>e.maxTextureSize&&(w=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const M=new Float32Array(x*w*4*u),S=new Cp(M,x,w,u);S.type=wi,S.needsUpdate=!0;const C=y*4;for(let _=0;_<u;_++){const F=d[_],T=B[_],L=v[_],I=x*w*4*_;for(let H=0;H<F.count;H++){const R=H*C;f===!0&&(r.fromBufferAttribute(F,H),M[I+R+0]=r.x,M[I+R+1]=r.y,M[I+R+2]=r.z,M[I+R+3]=0),m===!0&&(r.fromBufferAttribute(T,H),M[I+R+4]=r.x,M[I+R+5]=r.y,M[I+R+6]=r.z,M[I+R+7]=0),g===!0&&(r.fromBufferAttribute(L,H),M[I+R+8]=r.x,M[I+R+9]=r.y,M[I+R+10]=r.z,M[I+R+11]=L.itemSize===4?r.w:1)}}h={count:u,texture:S,size:new Ee(x,w)},A.set(a,h),a.addEventListener("dispose",p)}if(n.isInstancedMesh===!0&&n.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",n.morphTexture,t);else{let p=0;for(let m=0;m<l.length;m++)p+=l[m];const f=a.morphTargetsRelative?1:1-p;o.getUniforms().setValue(i,"morphTargetBaseInfluence",f),o.getUniforms().setValue(i,"morphTargetInfluences",l)}o.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),o.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function vv(i,e,t,A){let r=new WeakMap;function s(o){const l=A.render.frame,c=o.geometry,u=e.get(o,c);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),r.get(o)!==l&&(t.update(o.instanceMatrix,i.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,i.ARRAY_BUFFER),r.set(o,l))),o.isSkinnedMesh){const h=o.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return u}function n(){r=new WeakMap}function a(o){const l=o.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:n}}const Op=new jt,vu=new Ip(1,1),kp=new Cp,Vp=new Pm,zp=new Fp,yu=[],_u=[],xu=new Float32Array(16),Cu=new Float32Array(9),Eu=new Float32Array(4);function hs(i,e,t){const A=i[0];if(A<=0||A>0)return i;const r=e*t;let s=yu[r];if(s===void 0&&(s=new Float32Array(r),yu[r]=s),e!==0){A.toArray(s,0);for(let n=1,a=0;n!==e;++n)a+=t,i[n].toArray(s,a)}return s}function Qt(i,e){if(i.length!==e.length)return!1;for(let t=0,A=i.length;t<A;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,A=e.length;t<A;t++)i[t]=e[t]}function Ja(i,e){let t=_u[e];t===void 0&&(t=new Int32Array(e),_u[e]=t);for(let A=0;A!==e;++A)t[A]=i.allocateTextureUnit();return t}function yv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function _v(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function xv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function Cv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function Ev(i,e){const t=this.cache,A=e.elements;if(A===void 0){if(Qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Qt(t,A))return;Eu.set(A),i.uniformMatrix2fv(this.addr,!1,Eu),Lt(t,A)}}function bv(i,e){const t=this.cache,A=e.elements;if(A===void 0){if(Qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Qt(t,A))return;Cu.set(A),i.uniformMatrix3fv(this.addr,!1,Cu),Lt(t,A)}}function Mv(i,e){const t=this.cache,A=e.elements;if(A===void 0){if(Qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Qt(t,A))return;xu.set(A),i.uniformMatrix4fv(this.addr,!1,xu),Lt(t,A)}}function Uv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Sv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function Fv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function Tv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function Qv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Lv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function Iv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function Rv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function Dv(i,e,t){const A=this.cache,r=t.allocateTextureUnit();A[0]!==r&&(i.uniform1i(this.addr,r),A[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(vu.compareFunction=_p,s=vu):s=Op,t.setTexture2D(e||s,r)}function Pv(i,e,t){const A=this.cache,r=t.allocateTextureUnit();A[0]!==r&&(i.uniform1i(this.addr,r),A[0]=r),t.setTexture3D(e||Vp,r)}function Hv(i,e,t){const A=this.cache,r=t.allocateTextureUnit();A[0]!==r&&(i.uniform1i(this.addr,r),A[0]=r),t.setTextureCube(e||zp,r)}function Nv(i,e,t){const A=this.cache,r=t.allocateTextureUnit();A[0]!==r&&(i.uniform1i(this.addr,r),A[0]=r),t.setTexture2DArray(e||kp,r)}function Ov(i){switch(i){case 5126:return yv;case 35664:return _v;case 35665:return xv;case 35666:return Cv;case 35674:return Ev;case 35675:return bv;case 35676:return Mv;case 5124:case 35670:return Uv;case 35667:case 35671:return Sv;case 35668:case 35672:return Fv;case 35669:case 35673:return Tv;case 5125:return Qv;case 36294:return Lv;case 36295:return Iv;case 36296:return Rv;case 35678:case 36198:case 36298:case 36306:case 35682:return Dv;case 35679:case 36299:case 36307:return Pv;case 35680:case 36300:case 36308:case 36293:return Hv;case 36289:case 36303:case 36311:case 36292:return Nv}}function kv(i,e){i.uniform1fv(this.addr,e)}function Vv(i,e){const t=hs(e,this.size,2);i.uniform2fv(this.addr,t)}function zv(i,e){const t=hs(e,this.size,3);i.uniform3fv(this.addr,t)}function Gv(i,e){const t=hs(e,this.size,4);i.uniform4fv(this.addr,t)}function Kv(i,e){const t=hs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Wv(i,e){const t=hs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Xv(i,e){const t=hs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Yv(i,e){i.uniform1iv(this.addr,e)}function jv(i,e){i.uniform2iv(this.addr,e)}function qv(i,e){i.uniform3iv(this.addr,e)}function Jv(i,e){i.uniform4iv(this.addr,e)}function Zv(i,e){i.uniform1uiv(this.addr,e)}function $v(i,e){i.uniform2uiv(this.addr,e)}function e1(i,e){i.uniform3uiv(this.addr,e)}function t1(i,e){i.uniform4uiv(this.addr,e)}function A1(i,e,t){const A=this.cache,r=e.length,s=Ja(t,r);Qt(A,s)||(i.uniform1iv(this.addr,s),Lt(A,s));for(let n=0;n!==r;++n)t.setTexture2D(e[n]||Op,s[n])}function i1(i,e,t){const A=this.cache,r=e.length,s=Ja(t,r);Qt(A,s)||(i.uniform1iv(this.addr,s),Lt(A,s));for(let n=0;n!==r;++n)t.setTexture3D(e[n]||Vp,s[n])}function r1(i,e,t){const A=this.cache,r=e.length,s=Ja(t,r);Qt(A,s)||(i.uniform1iv(this.addr,s),Lt(A,s));for(let n=0;n!==r;++n)t.setTextureCube(e[n]||zp,s[n])}function s1(i,e,t){const A=this.cache,r=e.length,s=Ja(t,r);Qt(A,s)||(i.uniform1iv(this.addr,s),Lt(A,s));for(let n=0;n!==r;++n)t.setTexture2DArray(e[n]||kp,s[n])}function n1(i){switch(i){case 5126:return kv;case 35664:return Vv;case 35665:return zv;case 35666:return Gv;case 35674:return Kv;case 35675:return Wv;case 35676:return Xv;case 5124:case 35670:return Yv;case 35667:case 35671:return jv;case 35668:case 35672:return qv;case 35669:case 35673:return Jv;case 5125:return Zv;case 36294:return $v;case 36295:return e1;case 36296:return t1;case 35678:case 36198:case 36298:case 36306:case 35682:return A1;case 35679:case 36299:case 36307:return i1;case 35680:case 36300:case 36308:case 36293:return r1;case 36289:case 36303:case 36311:case 36292:return s1}}class a1{constructor(e,t,A){this.id=e,this.addr=A,this.cache=[],this.type=t.type,this.setValue=Ov(t.type)}}class o1{constructor(e,t,A){this.id=e,this.addr=A,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=n1(t.type)}}class l1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,A){const r=this.seq;for(let s=0,n=r.length;s!==n;++s){const a=r[s];a.setValue(e,t[a.id],A)}}}const jo=/(\w+)(\])?(\[|\.)?/g;function bu(i,e){i.seq.push(e),i.map[e.id]=e}function c1(i,e,t){const A=i.name,r=A.length;for(jo.lastIndex=0;;){const s=jo.exec(A),n=jo.lastIndex;let a=s[1];const o=s[2]==="]",l=s[3];if(o&&(a=a|0),l===void 0||l==="["&&n+2===r){bu(t,l===void 0?new a1(a,i,e):new o1(a,i,e));break}else{let c=t.map[a];c===void 0&&(c=new l1(a),bu(t,c)),t=c}}}class Ba{constructor(e,t){this.seq=[],this.map={};const A=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<A;++r){const s=e.getActiveUniform(t,r),n=e.getUniformLocation(t,s.name);c1(s,n,this)}}setValue(e,t,A,r){const s=this.map[t];s!==void 0&&s.setValue(e,A,r)}setOptional(e,t,A){const r=t[A];r!==void 0&&this.setValue(e,A,r)}static upload(e,t,A,r){for(let s=0,n=t.length;s!==n;++s){const a=t[s],o=A[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){const A=[];for(let r=0,s=e.length;r!==s;++r){const n=e[r];n.id in t&&A.push(n)}return A}}function Mu(i,e,t){const A=i.createShader(e);return i.shaderSource(A,t),i.compileShader(A),A}const h1=37297;let u1=0;function d1(i,e){const t=i.split(`
`),A=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let n=r;n<s;n++){const a=n+1;A.push(`${a===e?">":" "} ${a}: ${t[n]}`)}return A.join(`
`)}const Uu=new Ve;function p1(i){qe._getMatrix(Uu,qe.workingColorSpace,i);const e=`mat3( ${Uu.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(i)){case Ea:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Su(i,e,t){const A=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(A&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const n=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+d1(i.getShaderSource(e),n)}else return r}function f1(i,e){const t=p1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function g1(i,e){let t;switch(e){case Jg:t="Linear";break;case Zg:t="Reinhard";break;case $g:t="Cineon";break;case pp:t="ACESFilmic";break;case tm:t="AgX";break;case Am:t="Neutral";break;case em:t="Custom";break;default:De("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hn=new N;function m1(){qe.getLuminanceCoefficients(Hn);const i=Hn.x.toFixed(4),e=Hn.y.toFixed(4),t=Hn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function w1(i){const e=[];for(const t in i){const A=i[t];A!==!1&&e.push("#define "+t+" "+A)}return e.join(`
`)}function v1(i,e){const t={},A=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<A;r++){const s=i.getActiveAttrib(e,r),n=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[n]={type:s.type,location:i.getAttribLocation(e,n),locationSize:a}}return t}function Ss(i){return i!==""}function Fu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const y1=/^[ \t]*#include +<([\w\d./]+)>/gm;function pc(i){return i.replace(y1,x1)}const _1=new Map;function x1(i,e){let t=We[e];if(t===void 0){const A=_1.get(e);if(A!==void 0)t=We[A],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,A);else throw new Error("Can not resolve #include <"+e+">")}return pc(t)}const C1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qu(i){return i.replace(C1,E1)}function E1(i,e,t,A){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=A.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Lu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function b1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===up?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function M1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case $r:case es:e="ENVMAP_TYPE_CUBE";break;case Xa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function U1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case es:e="ENVMAP_MODE_REFRACTION";break}return e}function S1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case dp:e="ENVMAP_BLENDING_MULTIPLY";break;case jg:e="ENVMAP_BLENDING_MIX";break;case qg:e="ENVMAP_BLENDING_ADD";break}return e}function F1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,A=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:A,maxMip:t}}function T1(i,e,t,A){const r=i.getContext(),s=t.defines;let n=t.vertexShader,a=t.fragmentShader;const o=b1(t),l=M1(t),c=U1(t),u=S1(t),h=F1(t),p=B1(t),f=w1(s),m=r.createProgram();let g,d,B=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ss).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ss).join(`
`),d.length>0&&(d+=`
`)):(g=[Lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),d=[Lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ki?"#define TONE_MAPPING":"",t.toneMapping!==ki?We.tonemapping_pars_fragment:"",t.toneMapping!==ki?g1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,f1("linearToOutputTexel",t.outputColorSpace),m1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ss).join(`
`)),n=pc(n),n=Fu(n,t),n=Tu(n,t),a=pc(a),a=Fu(a,t),a=Tu(a,t),n=Qu(n),a=Qu(a),t.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===Hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=B+g+n,y=B+d+a,x=Mu(r,r.VERTEX_SHADER,v),w=Mu(r,r.FRAGMENT_SHADER,y);r.attachShader(m,x),r.attachShader(m,w),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function M(F){if(i.debug.checkShaderErrors){const T=r.getProgramInfoLog(m)||"",L=r.getShaderInfoLog(x)||"",I=r.getShaderInfoLog(w)||"",H=T.trim(),R=L.trim(),G=I.trim();let z=!0,X=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,m,x,w);else{const te=Su(r,x,"vertex"),ve=Su(r,w,"fragment");vt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+H+`
`+te+`
`+ve)}else H!==""?De("WebGLProgram: Program Info Log:",H):(R===""||G==="")&&(X=!1);X&&(F.diagnostics={runnable:z,programLog:H,vertexShader:{log:R,prefix:g},fragmentShader:{log:G,prefix:d}})}r.deleteShader(x),r.deleteShader(w),S=new Ba(r,m),C=v1(r,m)}let S;this.getUniforms=function(){return S===void 0&&M(this),S};let C;this.getAttributes=function(){return C===void 0&&M(this),C};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(m,h1)),_},this.destroy=function(){A.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=u1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=x,this.fragmentShader=w,this}let Q1=0;class L1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,A=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(A),n=this._getShaderCacheForMaterial(e);return n.has(r)===!1&&(n.add(r),r.usedTimes++),n.has(s)===!1&&(n.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const A of t)A.usedTimes--,A.usedTimes===0&&this.shaderCache.delete(A.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let A=t.get(e);return A===void 0&&(A=new Set,t.set(e,A)),A}_getShaderStage(e){const t=this.shaderCache;let A=t.get(e);return A===void 0&&(A=new I1(e),t.set(e,A)),A}}class I1{constructor(e){this.id=Q1++,this.code=e,this.usedTimes=0}}function R1(i,e,t,A,r,s,n){const a=new eh,o=new L1,l=new Set,c=[],u=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(C){return l.add(C),C===0?"uv":`uv${C}`}function g(C,_,F,T,L){const I=T.fog,H=L.geometry,R=C.isMeshStandardMaterial?T.environment:null,G=(C.isMeshStandardMaterial?t:e).get(C.envMap||R),z=G&&G.mapping===Xa?G.image.height:null,X=f[C.type];C.precision!==null&&(p=r.getMaxPrecision(C.precision),p!==C.precision&&De("WebGLProgram.getParameters:",C.precision,"not supported, using",p,"instead."));const te=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ve=te!==void 0?te.length:0;let ie=0;H.morphAttributes.position!==void 0&&(ie=1),H.morphAttributes.normal!==void 0&&(ie=2),H.morphAttributes.color!==void 0&&(ie=3);let Ne,Ye,Ke,Y;if(X){const rt=KA[X];Ne=rt.vertexShader,Ye=rt.fragmentShader}else Ne=C.vertexShader,Ye=C.fragmentShader,o.update(C),Ke=o.getVertexShaderID(C),Y=o.getFragmentShaderID(C);const q=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),ze=L.isInstancedMesh===!0,be=L.isBatchedMesh===!0,Se=!!C.map,ot=!!C.matcap,tt=!!G,Ze=!!C.aoMap,P=!!C.lightMap,Nt=!!C.bumpMap,et=!!C.normalMap,lt=!!C.displacementMap,xe=!!C.emissiveMap,gt=!!C.metalnessMap,Me=!!C.roughnessMap,ke=C.anisotropy>0,Q=C.clearcoat>0,E=C.dispersion>0,V=C.iridescence>0,J=C.sheen>0,Z=C.transmission>0,j=ke&&!!C.anisotropyMap,Ue=Q&&!!C.clearcoatMap,le=Q&&!!C.clearcoatNormalMap,Le=Q&&!!C.clearcoatRoughnessMap,fe=V&&!!C.iridescenceMap,ee=V&&!!C.iridescenceThicknessMap,se=J&&!!C.sheenColorMap,Ge=J&&!!C.sheenRoughnessMap,Fe=!!C.specularMap,de=!!C.specularColorMap,Oe=!!C.specularIntensityMap,D=Z&&!!C.transmissionMap,ce=Z&&!!C.thicknessMap,ne=!!C.gradientMap,ae=!!C.alphaMap,Ae=C.alphaTest>0,$=!!C.alphaHash,_e=!!C.extensions;let Te=ki;C.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Te=i.toneMapping);const It={shaderID:X,shaderType:C.type,shaderName:C.name,vertexShader:Ne,fragmentShader:Ye,defines:C.defines,customVertexShaderID:Ke,customFragmentShaderID:Y,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:p,batching:be,batchingColor:be&&L._colorsTexture!==null,instancing:ze,instancingColor:ze&&L.instanceColor!==null,instancingMorph:ze&&L.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ts,alphaToCoverage:!!C.alphaToCoverage,map:Se,matcap:ot,envMap:tt,envMapMode:tt&&G.mapping,envMapCubeUVHeight:z,aoMap:Ze,lightMap:P,bumpMap:Nt,normalMap:et,displacementMap:h&&lt,emissiveMap:xe,normalMapObjectSpace:et&&C.normalMapType===nm,normalMapTangentSpace:et&&C.normalMapType===Jc,metalnessMap:gt,roughnessMap:Me,anisotropy:ke,anisotropyMap:j,clearcoat:Q,clearcoatMap:Ue,clearcoatNormalMap:le,clearcoatRoughnessMap:Le,dispersion:E,iridescence:V,iridescenceMap:fe,iridescenceThicknessMap:ee,sheen:J,sheenColorMap:se,sheenRoughnessMap:Ge,specularMap:Fe,specularColorMap:de,specularIntensityMap:Oe,transmission:Z,transmissionMap:D,thicknessMap:ce,gradientMap:ne,opaque:C.transparent===!1&&C.blending===Yr&&C.alphaToCoverage===!1,alphaMap:ae,alphaTest:Ae,alphaHash:$,combine:C.combine,mapUv:Se&&m(C.map.channel),aoMapUv:Ze&&m(C.aoMap.channel),lightMapUv:P&&m(C.lightMap.channel),bumpMapUv:Nt&&m(C.bumpMap.channel),normalMapUv:et&&m(C.normalMap.channel),displacementMapUv:lt&&m(C.displacementMap.channel),emissiveMapUv:xe&&m(C.emissiveMap.channel),metalnessMapUv:gt&&m(C.metalnessMap.channel),roughnessMapUv:Me&&m(C.roughnessMap.channel),anisotropyMapUv:j&&m(C.anisotropyMap.channel),clearcoatMapUv:Ue&&m(C.clearcoatMap.channel),clearcoatNormalMapUv:le&&m(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&m(C.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&m(C.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&m(C.iridescenceThicknessMap.channel),sheenColorMapUv:se&&m(C.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&m(C.sheenRoughnessMap.channel),specularMapUv:Fe&&m(C.specularMap.channel),specularColorMapUv:de&&m(C.specularColorMap.channel),specularIntensityMapUv:Oe&&m(C.specularIntensityMap.channel),transmissionMapUv:D&&m(C.transmissionMap.channel),thicknessMapUv:ce&&m(C.thicknessMap.channel),alphaMapUv:ae&&m(C.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(et||ke),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!H.attributes.uv&&(Se||ae),fog:!!I,useFog:C.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:L.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:ie,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:C.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Te,decodeVideoTexture:Se&&C.map.isVideoTexture===!0&&qe.getTransfer(C.map.colorSpace)===st,decodeVideoTextureEmissive:xe&&C.emissiveMap.isVideoTexture===!0&&qe.getTransfer(C.emissiveMap.colorSpace)===st,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===mi,flipSided:C.side===cA,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:_e&&C.extensions.clipCullDistance===!0&&A.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&C.extensions.multiDraw===!0||be)&&A.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:A.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return It.vertexUv1s=l.has(1),It.vertexUv2s=l.has(2),It.vertexUv3s=l.has(3),l.clear(),It}function d(C){const _=[];if(C.shaderID?_.push(C.shaderID):(_.push(C.customVertexShaderID),_.push(C.customFragmentShaderID)),C.defines!==void 0)for(const F in C.defines)_.push(F),_.push(C.defines[F]);return C.isRawShaderMaterial===!1&&(B(_,C),v(_,C),_.push(i.outputColorSpace)),_.push(C.customProgramCacheKey),_.join()}function B(C,_){C.push(_.precision),C.push(_.outputColorSpace),C.push(_.envMapMode),C.push(_.envMapCubeUVHeight),C.push(_.mapUv),C.push(_.alphaMapUv),C.push(_.lightMapUv),C.push(_.aoMapUv),C.push(_.bumpMapUv),C.push(_.normalMapUv),C.push(_.displacementMapUv),C.push(_.emissiveMapUv),C.push(_.metalnessMapUv),C.push(_.roughnessMapUv),C.push(_.anisotropyMapUv),C.push(_.clearcoatMapUv),C.push(_.clearcoatNormalMapUv),C.push(_.clearcoatRoughnessMapUv),C.push(_.iridescenceMapUv),C.push(_.iridescenceThicknessMapUv),C.push(_.sheenColorMapUv),C.push(_.sheenRoughnessMapUv),C.push(_.specularMapUv),C.push(_.specularColorMapUv),C.push(_.specularIntensityMapUv),C.push(_.transmissionMapUv),C.push(_.thicknessMapUv),C.push(_.combine),C.push(_.fogExp2),C.push(_.sizeAttenuation),C.push(_.morphTargetsCount),C.push(_.morphAttributeCount),C.push(_.numDirLights),C.push(_.numPointLights),C.push(_.numSpotLights),C.push(_.numSpotLightMaps),C.push(_.numHemiLights),C.push(_.numRectAreaLights),C.push(_.numDirLightShadows),C.push(_.numPointLightShadows),C.push(_.numSpotLightShadows),C.push(_.numSpotLightShadowsWithMaps),C.push(_.numLightProbes),C.push(_.shadowMapType),C.push(_.toneMapping),C.push(_.numClippingPlanes),C.push(_.numClipIntersection),C.push(_.depthPacking)}function v(C,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),_.gradientMap&&a.enable(22),C.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),C.push(a.mask)}function y(C){const _=f[C.type];let F;if(_){const T=KA[_];F=Ua.clone(T.uniforms)}else F=C.uniforms;return F}function x(C,_){let F;for(let T=0,L=c.length;T<L;T++){const I=c[T];if(I.cacheKey===_){F=I,++F.usedTimes;break}}return F===void 0&&(F=new T1(i,_,C,s),c.push(F)),F}function w(C){if(--C.usedTimes===0){const _=c.indexOf(C);c[_]=c[c.length-1],c.pop(),C.destroy()}}function M(C){o.remove(C)}function S(){o.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:y,acquireProgram:x,releaseProgram:w,releaseShaderCache:M,programs:c,dispose:S}}function D1(){let i=new WeakMap;function e(n){return i.has(n)}function t(n){let a=i.get(n);return a===void 0&&(a={},i.set(n,a)),a}function A(n){i.delete(n)}function r(n,a,o){i.get(n)[a]=o}function s(){i=new WeakMap}return{has:e,get:t,remove:A,update:r,dispose:s}}function P1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Iu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ru(){const i=[];let e=0;const t=[],A=[],r=[];function s(){e=0,t.length=0,A.length=0,r.length=0}function n(u,h,p,f,m,g){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:h,material:p,groupOrder:f,renderOrder:u.renderOrder,z:m,group:g},i[e]=d):(d.id=u.id,d.object=u,d.geometry=h,d.material=p,d.groupOrder=f,d.renderOrder=u.renderOrder,d.z=m,d.group=g),e++,d}function a(u,h,p,f,m,g){const d=n(u,h,p,f,m,g);p.transmission>0?A.push(d):p.transparent===!0?r.push(d):t.push(d)}function o(u,h,p,f,m,g){const d=n(u,h,p,f,m,g);p.transmission>0?A.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function l(u,h){t.length>1&&t.sort(u||P1),A.length>1&&A.sort(h||Iu),r.length>1&&r.sort(h||Iu)}function c(){for(let u=e,h=i.length;u<h;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:A,transparent:r,init:s,push:a,unshift:o,finish:c,sort:l}}function H1(){let i=new WeakMap;function e(A,r){const s=i.get(A);let n;return s===void 0?(n=new Ru,i.set(A,[n])):r>=s.length?(n=new Ru,s.push(n)):n=s[r],n}function t(){i=new WeakMap}return{get:e,dispose:t}}function N1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Qe};break;case"SpotLight":t={position:new N,direction:new N,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function O1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let k1=0;function V1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function z1(i){const e=new N1,t=O1(),A={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)A.probe.push(new N);const r=new N,s=new ft,n=new ft;function a(l){let c=0,u=0,h=0;for(let C=0;C<9;C++)A.probe[C].set(0,0,0);let p=0,f=0,m=0,g=0,d=0,B=0,v=0,y=0,x=0,w=0,M=0;l.sort(V1);for(let C=0,_=l.length;C<_;C++){const F=l[C],T=F.color,L=F.intensity,I=F.distance,H=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)c+=T.r*L,u+=T.g*L,h+=T.b*L;else if(F.isLightProbe){for(let R=0;R<9;R++)A.probe[R].addScaledVector(F.sh.coefficients[R],L);M++}else if(F.isDirectionalLight){const R=e.get(F);if(R.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const G=F.shadow,z=t.get(F);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,A.directionalShadow[p]=z,A.directionalShadowMap[p]=H,A.directionalShadowMatrix[p]=F.shadow.matrix,B++}A.directional[p]=R,p++}else if(F.isSpotLight){const R=e.get(F);R.position.setFromMatrixPosition(F.matrixWorld),R.color.copy(T).multiplyScalar(L),R.distance=I,R.coneCos=Math.cos(F.angle),R.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),R.decay=F.decay,A.spot[m]=R;const G=F.shadow;if(F.map&&(A.spotLightMap[x]=F.map,x++,G.updateMatrices(F),F.castShadow&&w++),A.spotLightMatrix[m]=G.matrix,F.castShadow){const z=t.get(F);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,A.spotShadow[m]=z,A.spotShadowMap[m]=H,y++}m++}else if(F.isRectAreaLight){const R=e.get(F);R.color.copy(T).multiplyScalar(L),R.halfWidth.set(F.width*.5,0,0),R.halfHeight.set(0,F.height*.5,0),A.rectArea[g]=R,g++}else if(F.isPointLight){const R=e.get(F);if(R.color.copy(F.color).multiplyScalar(F.intensity),R.distance=F.distance,R.decay=F.decay,F.castShadow){const G=F.shadow,z=t.get(F);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,z.shadowCameraNear=G.camera.near,z.shadowCameraFar=G.camera.far,A.pointShadow[f]=z,A.pointShadowMap[f]=H,A.pointShadowMatrix[f]=F.shadow.matrix,v++}A.point[f]=R,f++}else if(F.isHemisphereLight){const R=e.get(F);R.skyColor.copy(F.color).multiplyScalar(L),R.groundColor.copy(F.groundColor).multiplyScalar(L),A.hemi[d]=R,d++}}g>0&&(i.has("OES_texture_float_linear")===!0?(A.rectAreaLTC1=oe.LTC_FLOAT_1,A.rectAreaLTC2=oe.LTC_FLOAT_2):(A.rectAreaLTC1=oe.LTC_HALF_1,A.rectAreaLTC2=oe.LTC_HALF_2)),A.ambient[0]=c,A.ambient[1]=u,A.ambient[2]=h;const S=A.hash;(S.directionalLength!==p||S.pointLength!==f||S.spotLength!==m||S.rectAreaLength!==g||S.hemiLength!==d||S.numDirectionalShadows!==B||S.numPointShadows!==v||S.numSpotShadows!==y||S.numSpotMaps!==x||S.numLightProbes!==M)&&(A.directional.length=p,A.spot.length=m,A.rectArea.length=g,A.point.length=f,A.hemi.length=d,A.directionalShadow.length=B,A.directionalShadowMap.length=B,A.pointShadow.length=v,A.pointShadowMap.length=v,A.spotShadow.length=y,A.spotShadowMap.length=y,A.directionalShadowMatrix.length=B,A.pointShadowMatrix.length=v,A.spotLightMatrix.length=y+x-w,A.spotLightMap.length=x,A.numSpotLightShadowsWithMaps=w,A.numLightProbes=M,S.directionalLength=p,S.pointLength=f,S.spotLength=m,S.rectAreaLength=g,S.hemiLength=d,S.numDirectionalShadows=B,S.numPointShadows=v,S.numSpotShadows=y,S.numSpotMaps=x,S.numLightProbes=M,A.version=k1++)}function o(l,c){let u=0,h=0,p=0,f=0,m=0;const g=c.matrixWorldInverse;for(let d=0,B=l.length;d<B;d++){const v=l[d];if(v.isDirectionalLight){const y=A.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),u++}else if(v.isSpotLight){const y=A.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const y=A.rectArea[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),n.identity(),s.copy(v.matrixWorld),s.premultiply(g),n.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(n),y.halfHeight.applyMatrix4(n),f++}else if(v.isPointLight){const y=A.point[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),h++}else if(v.isHemisphereLight){const y=A.hemi[m];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),m++}}}return{setup:a,setupView:o,state:A}}function Du(i){const e=new z1(i),t=[],A=[];function r(c){l.camera=c,t.length=0,A.length=0}function s(c){t.push(c)}function n(c){A.push(c)}function a(){e.setup(t)}function o(c){e.setupView(t,c)}const l={lightsArray:t,shadowsArray:A,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:o,pushLight:s,pushShadow:n}}function G1(i){let e=new WeakMap;function t(r,s=0){const n=e.get(r);let a;return n===void 0?(a=new Du(i),e.set(r,[a])):s>=n.length?(a=new Du(i),n.push(a)):a=n[s],a}function A(){e=new WeakMap}return{get:t,dispose:A}}const K1=`void main() {
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
}`;function X1(i,e,t){let A=new Ah;const r=new Ee,s=new Ee,n=new yt,a=new hB({depthPacking:sm}),o=new uB,l={},c=t.maxTextureSize,u={[Gi]:cA,[cA]:Gi,[mi]:mi},h=new AA({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:K1,fragmentShader:W1}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const f=new uA;f.setAttribute("position",new hA(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new rA(f,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hp;let d=this.type;this.render=function(w,M,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const C=i.getRenderTarget(),_=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),T=i.state;T.setBlending(XA),T.buffers.depth.getReversed()===!0?T.buffers.color.setClear(0,0,0,0):T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);const L=d!==fi&&this.type===fi,I=d===fi&&this.type!==fi;for(let H=0,R=w.length;H<R;H++){const G=w[H],z=G.shadow;if(z===void 0){De("WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const X=z.getFrameExtents();if(r.multiply(X),s.copy(z.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/X.x),r.x=s.x*X.x,z.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/X.y),r.y=s.y*X.y,z.mapSize.y=s.y)),z.map===null||L===!0||I===!0){const ve=this.type!==fi?{minFilter:iA,magFilter:iA}:{};z.map!==null&&z.map.dispose(),z.map=new HA(r.x,r.y,ve),z.map.texture.name=G.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const te=z.getViewportCount();for(let ve=0;ve<te;ve++){const ie=z.getViewport(ve);n.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),T.viewport(n),z.updateMatrices(G,ve),A=z.getFrustum(),y(M,S,z.camera,G,this.type)}z.isPointLightShadow!==!0&&this.type===fi&&B(z,S),z.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(C,_,F)};function B(w,M){const S=e.update(m);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new HA(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(M,null,S,h,m,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(M,null,S,p,m,null)}function v(w,M,S,C){let _=null;const F=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)_=F;else if(_=S.isPointLight===!0?o:a,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const T=_.uuid,L=M.uuid;let I=l[T];I===void 0&&(I={},l[T]=I);let H=I[L];H===void 0&&(H=_.clone(),I[L]=H,M.addEventListener("dispose",x)),_=H}if(_.visible=M.visible,_.wireframe=M.wireframe,C===fi?_.side=M.shadowSide!==null?M.shadowSide:M.side:_.side=M.shadowSide!==null?M.shadowSide:u[M.side],_.alphaMap=M.alphaMap,_.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,_.map=M.map,_.clipShadows=M.clipShadows,_.clippingPlanes=M.clippingPlanes,_.clipIntersection=M.clipIntersection,_.displacementMap=M.displacementMap,_.displacementScale=M.displacementScale,_.displacementBias=M.displacementBias,_.wireframeLinewidth=M.wireframeLinewidth,_.linewidth=M.linewidth,S.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const T=i.properties.get(_);T.light=S}return _}function y(w,M,S,C,_){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===fi)&&(!w.frustumCulled||A.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);const T=e.update(w),L=w.material;if(Array.isArray(L)){const I=T.groups;for(let H=0,R=I.length;H<R;H++){const G=I[H],z=L[G.materialIndex];if(z&&z.visible){const X=v(w,z,C,_);w.onBeforeShadow(i,w,M,S,T,X,G),i.renderBufferDirect(S,null,T,X,w,G),w.onAfterShadow(i,w,M,S,T,X,G)}}}else if(L.visible){const I=v(w,L,C,_);w.onBeforeShadow(i,w,M,S,T,I,null),i.renderBufferDirect(S,null,T,I,w,null),w.onAfterShadow(i,w,M,S,T,I,null)}}const F=w.children;for(let T=0,L=F.length;T<L;T++)y(F[T],M,S,C,_)}function x(w){w.target.removeEventListener("dispose",x);for(const M in l){const S=l[M],C=w.target.uuid;C in S&&(S[C].dispose(),delete S[C])}}}const Y1={[Ul]:Sl,[Fl]:Ll,[Tl]:Il,[Zr]:Ql,[Sl]:Ul,[Ll]:Fl,[Il]:Tl,[Ql]:Zr};function j1(i,e){function t(){let D=!1;const ce=new yt;let ne=null;const ae=new yt(0,0,0,0);return{setMask:function(Ae){ne!==Ae&&!D&&(i.colorMask(Ae,Ae,Ae,Ae),ne=Ae)},setLocked:function(Ae){D=Ae},setClear:function(Ae,$,_e,Te,It){It===!0&&(Ae*=Te,$*=Te,_e*=Te),ce.set(Ae,$,_e,Te),ae.equals(ce)===!1&&(i.clearColor(Ae,$,_e,Te),ae.copy(ce))},reset:function(){D=!1,ne=null,ae.set(-1,0,0,0)}}}function A(){let D=!1,ce=!1,ne=null,ae=null,Ae=null;return{setReversed:function($){if(ce!==$){const _e=e.get("EXT_clip_control");$?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),ce=$;const Te=Ae;Ae=null,this.setClear(Te)}},getReversed:function(){return ce},setTest:function($){$?q(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function($){ne!==$&&!D&&(i.depthMask($),ne=$)},setFunc:function($){if(ce&&($=Y1[$]),ae!==$){switch($){case Ul:i.depthFunc(i.NEVER);break;case Sl:i.depthFunc(i.ALWAYS);break;case Fl:i.depthFunc(i.LESS);break;case Zr:i.depthFunc(i.LEQUAL);break;case Tl:i.depthFunc(i.EQUAL);break;case Ql:i.depthFunc(i.GEQUAL);break;case Ll:i.depthFunc(i.GREATER);break;case Il:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=$}},setLocked:function($){D=$},setClear:function($){Ae!==$&&(ce&&($=1-$),i.clearDepth($),Ae=$)},reset:function(){D=!1,ne=null,ae=null,Ae=null,ce=!1}}}function r(){let D=!1,ce=null,ne=null,ae=null,Ae=null,$=null,_e=null,Te=null,It=null;return{setTest:function(rt){D||(rt?q(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(rt){ce!==rt&&!D&&(i.stencilMask(rt),ce=rt)},setFunc:function(rt,OA,UA){(ne!==rt||ae!==OA||Ae!==UA)&&(i.stencilFunc(rt,OA,UA),ne=rt,ae=OA,Ae=UA)},setOp:function(rt,OA,UA){($!==rt||_e!==OA||Te!==UA)&&(i.stencilOp(rt,OA,UA),$=rt,_e=OA,Te=UA)},setLocked:function(rt){D=rt},setClear:function(rt){It!==rt&&(i.clearStencil(rt),It=rt)},reset:function(){D=!1,ce=null,ne=null,ae=null,Ae=null,$=null,_e=null,Te=null,It=null}}}const s=new t,n=new A,a=new r,o=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,p=[],f=null,m=!1,g=null,d=null,B=null,v=null,y=null,x=null,w=null,M=new Qe(0,0,0),S=0,C=!1,_=null,F=null,T=null,L=null,I=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let R=!1,G=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(z)[1]),R=G>=1):z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),R=G>=2);let X=null,te={};const ve=i.getParameter(i.SCISSOR_BOX),ie=i.getParameter(i.VIEWPORT),Ne=new yt().fromArray(ve),Ye=new yt().fromArray(ie);function Ke(D,ce,ne,ae){const Ae=new Uint8Array(4),$=i.createTexture();i.bindTexture(D,$),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _e=0;_e<ne;_e++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(ce+_e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return $}const Y={};Y[i.TEXTURE_2D]=Ke(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),n.setClear(1),a.setClear(0),q(i.DEPTH_TEST),n.setFunc(Zr),Nt(!1),et(Lh),q(i.CULL_FACE),Ze(XA);function q(D){c[D]!==!0&&(i.enable(D),c[D]=!0)}function ye(D){c[D]!==!1&&(i.disable(D),c[D]=!1)}function ze(D,ce){return u[D]!==ce?(i.bindFramebuffer(D,ce),u[D]=ce,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ce),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function be(D,ce){let ne=p,ae=!1;if(D){ne=h.get(ce),ne===void 0&&(ne=[],h.set(ce,ne));const Ae=D.textures;if(ne.length!==Ae.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let $=0,_e=Ae.length;$<_e;$++)ne[$]=i.COLOR_ATTACHMENT0+$;ne.length=Ae.length,ae=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,ae=!0);ae&&i.drawBuffers(ne)}function Se(D){return f!==D?(i.useProgram(D),f=D,!0):!1}const ot={[rr]:i.FUNC_ADD,[Qg]:i.FUNC_SUBTRACT,[Lg]:i.FUNC_REVERSE_SUBTRACT};ot[Ig]=i.MIN,ot[Rg]=i.MAX;const tt={[Dg]:i.ZERO,[Pg]:i.ONE,[Hg]:i.SRC_COLOR,[bl]:i.SRC_ALPHA,[Gg]:i.SRC_ALPHA_SATURATE,[Vg]:i.DST_COLOR,[Og]:i.DST_ALPHA,[Ng]:i.ONE_MINUS_SRC_COLOR,[Ml]:i.ONE_MINUS_SRC_ALPHA,[zg]:i.ONE_MINUS_DST_COLOR,[kg]:i.ONE_MINUS_DST_ALPHA,[Kg]:i.CONSTANT_COLOR,[Wg]:i.ONE_MINUS_CONSTANT_COLOR,[Xg]:i.CONSTANT_ALPHA,[Yg]:i.ONE_MINUS_CONSTANT_ALPHA};function Ze(D,ce,ne,ae,Ae,$,_e,Te,It,rt){if(D===XA){m===!0&&(ye(i.BLEND),m=!1);return}if(m===!1&&(q(i.BLEND),m=!0),D!==Tg){if(D!==g||rt!==C){if((d!==rr||y!==rr)&&(i.blendEquation(i.FUNC_ADD),d=rr,y=rr),rt)switch(D){case Yr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ca:i.blendFunc(i.ONE,i.ONE);break;case Ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:vt("WebGLState: Invalid blending: ",D);break}else switch(D){case Yr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ca:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ih:vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rh:vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:vt("WebGLState: Invalid blending: ",D);break}B=null,v=null,x=null,w=null,M.set(0,0,0),S=0,g=D,C=rt}return}Ae=Ae||ce,$=$||ne,_e=_e||ae,(ce!==d||Ae!==y)&&(i.blendEquationSeparate(ot[ce],ot[Ae]),d=ce,y=Ae),(ne!==B||ae!==v||$!==x||_e!==w)&&(i.blendFuncSeparate(tt[ne],tt[ae],tt[$],tt[_e]),B=ne,v=ae,x=$,w=_e),(Te.equals(M)===!1||It!==S)&&(i.blendColor(Te.r,Te.g,Te.b,It),M.copy(Te),S=It),g=D,C=!1}function P(D,ce){D.side===mi?ye(i.CULL_FACE):q(i.CULL_FACE);let ne=D.side===cA;ce&&(ne=!ne),Nt(ne),D.blending===Yr&&D.transparent===!1?Ze(XA):Ze(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),n.setFunc(D.depthFunc),n.setTest(D.depthTest),n.setMask(D.depthWrite),s.setMask(D.colorWrite);const ae=D.stencilWrite;a.setTest(ae),ae&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),xe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(D){_!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),_=D)}function et(D){D!==Sg?(q(i.CULL_FACE),D!==F&&(D===Lh?i.cullFace(i.BACK):D===Fg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),F=D}function lt(D){D!==T&&(R&&i.lineWidth(D),T=D)}function xe(D,ce,ne){D?(q(i.POLYGON_OFFSET_FILL),(L!==ce||I!==ne)&&(i.polygonOffset(ce,ne),L=ce,I=ne)):ye(i.POLYGON_OFFSET_FILL)}function gt(D){D?q(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function Me(D){D===void 0&&(D=i.TEXTURE0+H-1),X!==D&&(i.activeTexture(D),X=D)}function ke(D,ce,ne){ne===void 0&&(X===null?ne=i.TEXTURE0+H-1:ne=X);let ae=te[ne];ae===void 0&&(ae={type:void 0,texture:void 0},te[ne]=ae),(ae.type!==D||ae.texture!==ce)&&(X!==ne&&(i.activeTexture(ne),X=ne),i.bindTexture(D,ce||Y[D]),ae.type=D,ae.texture=ce)}function Q(){const D=te[X];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function E(){try{i.compressedTexImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function J(){try{i.texSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Z(){try{i.texSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Ue(){try{i.compressedTexSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function le(){try{i.texStorage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Le(){try{i.texStorage3D(...arguments)}catch(D){D("WebGLState:",D)}}function fe(){try{i.texImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function ee(){try{i.texImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function se(D){Ne.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ne.copy(D))}function Ge(D){Ye.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Ye.copy(D))}function Fe(D,ce){let ne=l.get(ce);ne===void 0&&(ne=new WeakMap,l.set(ce,ne));let ae=ne.get(D);ae===void 0&&(ae=i.getUniformBlockIndex(ce,D.name),ne.set(D,ae))}function de(D,ce){const ne=l.get(ce).get(D);o.get(ce)!==ne&&(i.uniformBlockBinding(ce,ne,D.__bindingPointIndex),o.set(ce,ne))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),n.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},X=null,te={},u={},h=new WeakMap,p=[],f=null,m=!1,g=null,d=null,B=null,v=null,y=null,x=null,w=null,M=new Qe(0,0,0),S=0,C=!1,_=null,F=null,T=null,L=null,I=null,Ne.set(0,0,i.canvas.width,i.canvas.height),Ye.set(0,0,i.canvas.width,i.canvas.height),s.reset(),n.reset(),a.reset()}return{buffers:{color:s,depth:n,stencil:a},enable:q,disable:ye,bindFramebuffer:ze,drawBuffers:be,useProgram:Se,setBlending:Ze,setMaterial:P,setFlipSided:Nt,setCullFace:et,setLineWidth:lt,setPolygonOffset:xe,setScissorTest:gt,activeTexture:Me,bindTexture:ke,unbindTexture:Q,compressedTexImage2D:E,compressedTexImage3D:V,texImage2D:fe,texImage3D:ee,updateUBOMapping:Fe,uniformBlockBinding:de,texStorage2D:le,texStorage3D:Le,texSubImage2D:J,texSubImage3D:Z,compressedTexSubImage2D:j,compressedTexSubImage3D:Ue,scissor:se,viewport:Ge,reset:Oe}}function q1(i,e,t,A,r,s,n){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ee,c=new WeakMap;let u;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(Q,E){return p?new OffscreenCanvas(Q,E):Ma("canvas")}function m(Q,E,V){let J=1;const Z=ke(Q);if((Z.width>V||Z.height>V)&&(J=V/Math.max(Z.width,Z.height)),J<1)if(typeof HTMLImageElement<"u"&&Q instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Q instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Q instanceof ImageBitmap||typeof VideoFrame<"u"&&Q instanceof VideoFrame){const j=Math.floor(J*Z.width),Ue=Math.floor(J*Z.height);u===void 0&&(u=f(j,Ue));const le=E?f(j,Ue):u;return le.width=j,le.height=Ue,le.getContext("2d").drawImage(Q,0,0,j,Ue),De("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+j+"x"+Ue+")."),le}else return"data"in Q&&De("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),Q;return Q}function g(Q){return Q.generateMipmaps}function d(Q){i.generateMipmap(Q)}function B(Q){return Q.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:Q.isWebGL3DRenderTarget?i.TEXTURE_3D:Q.isWebGLArrayRenderTarget||Q.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(Q,E,V,J,Z=!1){if(Q!==null){if(i[Q]!==void 0)return i[Q];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+Q+"'")}let j=E;if(E===i.RED&&(V===i.FLOAT&&(j=i.R32F),V===i.HALF_FLOAT&&(j=i.R16F),V===i.UNSIGNED_BYTE&&(j=i.R8)),E===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.R8UI),V===i.UNSIGNED_SHORT&&(j=i.R16UI),V===i.UNSIGNED_INT&&(j=i.R32UI),V===i.BYTE&&(j=i.R8I),V===i.SHORT&&(j=i.R16I),V===i.INT&&(j=i.R32I)),E===i.RG&&(V===i.FLOAT&&(j=i.RG32F),V===i.HALF_FLOAT&&(j=i.RG16F),V===i.UNSIGNED_BYTE&&(j=i.RG8)),E===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RG8UI),V===i.UNSIGNED_SHORT&&(j=i.RG16UI),V===i.UNSIGNED_INT&&(j=i.RG32UI),V===i.BYTE&&(j=i.RG8I),V===i.SHORT&&(j=i.RG16I),V===i.INT&&(j=i.RG32I)),E===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RGB8UI),V===i.UNSIGNED_SHORT&&(j=i.RGB16UI),V===i.UNSIGNED_INT&&(j=i.RGB32UI),V===i.BYTE&&(j=i.RGB8I),V===i.SHORT&&(j=i.RGB16I),V===i.INT&&(j=i.RGB32I)),E===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),V===i.UNSIGNED_INT&&(j=i.RGBA32UI),V===i.BYTE&&(j=i.RGBA8I),V===i.SHORT&&(j=i.RGBA16I),V===i.INT&&(j=i.RGBA32I)),E===i.RGB&&(V===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),E===i.RGBA){const Ue=Z?Ea:qe.getTransfer(J);V===i.FLOAT&&(j=i.RGBA32F),V===i.HALF_FLOAT&&(j=i.RGBA16F),V===i.UNSIGNED_BYTE&&(j=Ue===st?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function y(Q,E){let V;return Q?E===null||E===dr||E===Ws?V=i.DEPTH24_STENCIL8:E===wi?V=i.DEPTH32F_STENCIL8:E===Ks&&(V=i.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===dr||E===Ws?V=i.DEPTH_COMPONENT24:E===wi?V=i.DEPTH_COMPONENT32F:E===Ks&&(V=i.DEPTH_COMPONENT16),V}function x(Q,E){return g(Q)===!0||Q.isFramebufferTexture&&Q.minFilter!==iA&&Q.minFilter!==EA?Math.log2(Math.max(E.width,E.height))+1:Q.mipmaps!==void 0&&Q.mipmaps.length>0?Q.mipmaps.length:Q.isCompressedTexture&&Array.isArray(Q.image)?E.mipmaps.length:1}function w(Q){const E=Q.target;E.removeEventListener("dispose",w),S(E),E.isVideoTexture&&c.delete(E)}function M(Q){const E=Q.target;E.removeEventListener("dispose",M),_(E)}function S(Q){const E=A.get(Q);if(E.__webglInit===void 0)return;const V=Q.source,J=h.get(V);if(J){const Z=J[E.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&C(Q),Object.keys(J).length===0&&h.delete(V)}A.remove(Q)}function C(Q){const E=A.get(Q);i.deleteTexture(E.__webglTexture);const V=Q.source,J=h.get(V);delete J[E.__cacheKey],n.memory.textures--}function _(Q){const E=A.get(Q);if(Q.depthTexture&&(Q.depthTexture.dispose(),A.remove(Q.depthTexture)),Q.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let Z=0;Z<E.__webglFramebuffer[J].length;Z++)i.deleteFramebuffer(E.__webglFramebuffer[J][Z]);else i.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)i.deleteFramebuffer(E.__webglFramebuffer[J]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const V=Q.textures;for(let J=0,Z=V.length;J<Z;J++){const j=A.get(V[J]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),n.memory.textures--),A.remove(V[J])}A.remove(Q)}let F=0;function T(){F=0}function L(){const Q=F;return Q>=r.maxTextures&&De("WebGLTextures: Trying to use "+Q+" texture units while this GPU supports only "+r.maxTextures),F+=1,Q}function I(Q){const E=[];return E.push(Q.wrapS),E.push(Q.wrapT),E.push(Q.wrapR||0),E.push(Q.magFilter),E.push(Q.minFilter),E.push(Q.anisotropy),E.push(Q.internalFormat),E.push(Q.format),E.push(Q.type),E.push(Q.generateMipmaps),E.push(Q.premultiplyAlpha),E.push(Q.flipY),E.push(Q.unpackAlignment),E.push(Q.colorSpace),E.join()}function H(Q,E){const V=A.get(Q);if(Q.isVideoTexture&&gt(Q),Q.isRenderTargetTexture===!1&&Q.isExternalTexture!==!0&&Q.version>0&&V.__version!==Q.version){const J=Q.image;if(J===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(V,Q,E);return}}else Q.isExternalTexture&&(V.__webglTexture=Q.sourceTexture?Q.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+E)}function R(Q,E){const V=A.get(Q);if(Q.isRenderTargetTexture===!1&&Q.version>0&&V.__version!==Q.version){Y(V,Q,E);return}else Q.isExternalTexture&&(V.__webglTexture=Q.sourceTexture?Q.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+E)}function G(Q,E){const V=A.get(Q);if(Q.isRenderTargetTexture===!1&&Q.version>0&&V.__version!==Q.version){Y(V,Q,E);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+E)}function z(Q,E){const V=A.get(Q);if(Q.version>0&&V.__version!==Q.version){q(V,Q,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+E)}const X={[Gs]:i.REPEAT,[Bi]:i.CLAMP_TO_EDGE,[Pl]:i.MIRRORED_REPEAT},te={[iA]:i.NEAREST,[im]:i.NEAREST_MIPMAP_NEAREST,[dn]:i.NEAREST_MIPMAP_LINEAR,[EA]:i.LINEAR,[go]:i.LINEAR_MIPMAP_NEAREST,[ar]:i.LINEAR_MIPMAP_LINEAR},ve={[am]:i.NEVER,[dm]:i.ALWAYS,[om]:i.LESS,[_p]:i.LEQUAL,[lm]:i.EQUAL,[um]:i.GEQUAL,[cm]:i.GREATER,[hm]:i.NOTEQUAL};function ie(Q,E){if(E.type===wi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===EA||E.magFilter===go||E.magFilter===dn||E.magFilter===ar||E.minFilter===EA||E.minFilter===go||E.minFilter===dn||E.minFilter===ar)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(Q,i.TEXTURE_WRAP_S,X[E.wrapS]),i.texParameteri(Q,i.TEXTURE_WRAP_T,X[E.wrapT]),(Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY)&&i.texParameteri(Q,i.TEXTURE_WRAP_R,X[E.wrapR]),i.texParameteri(Q,i.TEXTURE_MAG_FILTER,te[E.magFilter]),i.texParameteri(Q,i.TEXTURE_MIN_FILTER,te[E.minFilter]),E.compareFunction&&(i.texParameteri(Q,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(Q,i.TEXTURE_COMPARE_FUNC,ve[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===iA||E.minFilter!==dn&&E.minFilter!==ar||E.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||A.get(E).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(Q,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),A.get(E).__currentAnisotropy=E.anisotropy}}}function Ne(Q,E){let V=!1;Q.__webglInit===void 0&&(Q.__webglInit=!0,E.addEventListener("dispose",w));const J=E.source;let Z=h.get(J);Z===void 0&&(Z={},h.set(J,Z));const j=I(E);if(j!==Q.__cacheKey){Z[j]===void 0&&(Z[j]={texture:i.createTexture(),usedTimes:0},n.memory.textures++,V=!0),Z[j].usedTimes++;const Ue=Z[Q.__cacheKey];Ue!==void 0&&(Z[Q.__cacheKey].usedTimes--,Ue.usedTimes===0&&C(E)),Q.__cacheKey=j,Q.__webglTexture=Z[j].texture}return V}function Ye(Q,E,V){return Math.floor(Math.floor(Q/V)/E)}function Ke(Q,E,V,J){const Z=Q.updateRanges;if(Z.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,V,J,E.data);else{Z.sort((fe,ee)=>fe.start-ee.start);let j=0;for(let fe=1;fe<Z.length;fe++){const ee=Z[j],se=Z[fe],Ge=ee.start+ee.count,Fe=Ye(se.start,E.width,4),de=Ye(ee.start,E.width,4);se.start<=Ge+1&&Fe===de&&Ye(se.start+se.count-1,E.width,4)===Fe?ee.count=Math.max(ee.count,se.start+se.count-ee.start):(++j,Z[j]=se)}Z.length=j+1;const Ue=i.getParameter(i.UNPACK_ROW_LENGTH),le=i.getParameter(i.UNPACK_SKIP_PIXELS),Le=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let fe=0,ee=Z.length;fe<ee;fe++){const se=Z[fe],Ge=Math.floor(se.start/4),Fe=Math.ceil(se.count/4),de=Ge%E.width,Oe=Math.floor(Ge/E.width),D=Fe;i.pixelStorei(i.UNPACK_SKIP_PIXELS,de),i.pixelStorei(i.UNPACK_SKIP_ROWS,Oe),t.texSubImage2D(i.TEXTURE_2D,0,de,Oe,D,1,V,J,E.data)}Q.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Ue),i.pixelStorei(i.UNPACK_SKIP_PIXELS,le),i.pixelStorei(i.UNPACK_SKIP_ROWS,Le)}}function Y(Q,E,V){let J=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=i.TEXTURE_3D);const Z=Ne(Q,E),j=E.source;t.bindTexture(J,Q.__webglTexture,i.TEXTURE0+V);const Ue=A.get(j);if(j.version!==Ue.__version||Z===!0){t.activeTexture(i.TEXTURE0+V);const le=qe.getPrimaries(qe.workingColorSpace),Le=E.colorSpace===Di?null:qe.getPrimaries(E.colorSpace),fe=E.colorSpace===Di||le===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let ee=m(E.image,!1,r.maxTextureSize);ee=Me(E,ee);const se=s.convert(E.format,E.colorSpace),Ge=s.convert(E.type);let Fe=v(E.internalFormat,se,Ge,E.colorSpace,E.isVideoTexture);ie(J,E);let de;const Oe=E.mipmaps,D=E.isVideoTexture!==!0,ce=Ue.__version===void 0||Z===!0,ne=j.dataReady,ae=x(E,ee);if(E.isDepthTexture)Fe=y(E.format===Ys,E.type),ce&&(D?t.texStorage2D(i.TEXTURE_2D,1,Fe,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Fe,ee.width,ee.height,0,se,Ge,null));else if(E.isDataTexture)if(Oe.length>0){D&&ce&&t.texStorage2D(i.TEXTURE_2D,ae,Fe,Oe[0].width,Oe[0].height);for(let Ae=0,$=Oe.length;Ae<$;Ae++)de=Oe[Ae],D?ne&&t.texSubImage2D(i.TEXTURE_2D,Ae,0,0,de.width,de.height,se,Ge,de.data):t.texImage2D(i.TEXTURE_2D,Ae,Fe,de.width,de.height,0,se,Ge,de.data);E.generateMipmaps=!1}else D?(ce&&t.texStorage2D(i.TEXTURE_2D,ae,Fe,ee.width,ee.height),ne&&Ke(E,ee,se,Ge)):t.texImage2D(i.TEXTURE_2D,0,Fe,ee.width,ee.height,0,se,Ge,ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){D&&ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,Fe,Oe[0].width,Oe[0].height,ee.depth);for(let Ae=0,$=Oe.length;Ae<$;Ae++)if(de=Oe[Ae],E.format!==DA)if(se!==null)if(D){if(ne)if(E.layerUpdates.size>0){const _e=du(de.width,de.height,E.format,E.type);for(const Te of E.layerUpdates){const It=de.data.subarray(Te*_e/de.data.BYTES_PER_ELEMENT,(Te+1)*_e/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ae,0,0,Te,de.width,de.height,1,se,It)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ae,0,0,0,de.width,de.height,ee.depth,se,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ae,Fe,de.width,de.height,ee.depth,0,de.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ne&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ae,0,0,0,de.width,de.height,ee.depth,se,Ge,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ae,Fe,de.width,de.height,ee.depth,0,se,Ge,de.data)}else{D&&ce&&t.texStorage2D(i.TEXTURE_2D,ae,Fe,Oe[0].width,Oe[0].height);for(let Ae=0,$=Oe.length;Ae<$;Ae++)de=Oe[Ae],E.format!==DA?se!==null?D?ne&&t.compressedTexSubImage2D(i.TEXTURE_2D,Ae,0,0,de.width,de.height,se,de.data):t.compressedTexImage2D(i.TEXTURE_2D,Ae,Fe,de.width,de.height,0,de.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ne&&t.texSubImage2D(i.TEXTURE_2D,Ae,0,0,de.width,de.height,se,Ge,de.data):t.texImage2D(i.TEXTURE_2D,Ae,Fe,de.width,de.height,0,se,Ge,de.data)}else if(E.isDataArrayTexture)if(D){if(ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,Fe,ee.width,ee.height,ee.depth),ne)if(E.layerUpdates.size>0){const Ae=du(ee.width,ee.height,E.format,E.type);for(const $ of E.layerUpdates){const _e=ee.data.subarray($*Ae/ee.data.BYTES_PER_ELEMENT,($+1)*Ae/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,ee.width,ee.height,1,se,Ge,_e)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,se,Ge,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,ee.width,ee.height,ee.depth,0,se,Ge,ee.data);else if(E.isData3DTexture)D?(ce&&t.texStorage3D(i.TEXTURE_3D,ae,Fe,ee.width,ee.height,ee.depth),ne&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,se,Ge,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,ee.width,ee.height,ee.depth,0,se,Ge,ee.data);else if(E.isFramebufferTexture){if(ce)if(D)t.texStorage2D(i.TEXTURE_2D,ae,Fe,ee.width,ee.height);else{let Ae=ee.width,$=ee.height;for(let _e=0;_e<ae;_e++)t.texImage2D(i.TEXTURE_2D,_e,Fe,Ae,$,0,se,Ge,null),Ae>>=1,$>>=1}}else if(Oe.length>0){if(D&&ce){const Ae=ke(Oe[0]);t.texStorage2D(i.TEXTURE_2D,ae,Fe,Ae.width,Ae.height)}for(let Ae=0,$=Oe.length;Ae<$;Ae++)de=Oe[Ae],D?ne&&t.texSubImage2D(i.TEXTURE_2D,Ae,0,0,se,Ge,de):t.texImage2D(i.TEXTURE_2D,Ae,Fe,se,Ge,de);E.generateMipmaps=!1}else if(D){if(ce){const Ae=ke(ee);t.texStorage2D(i.TEXTURE_2D,ae,Fe,Ae.width,Ae.height)}ne&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se,Ge,ee)}else t.texImage2D(i.TEXTURE_2D,0,Fe,se,Ge,ee);g(E)&&d(J),Ue.__version=j.version,E.onUpdate&&E.onUpdate(E)}Q.__version=E.version}function q(Q,E,V){if(E.image.length!==6)return;const J=Ne(Q,E),Z=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+V);const j=A.get(Z);if(Z.version!==j.__version||J===!0){t.activeTexture(i.TEXTURE0+V);const Ue=qe.getPrimaries(qe.workingColorSpace),le=E.colorSpace===Di?null:qe.getPrimaries(E.colorSpace),Le=E.colorSpace===Di||Ue===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const fe=E.isCompressedTexture||E.image[0].isCompressedTexture,ee=E.image[0]&&E.image[0].isDataTexture,se=[];for(let $=0;$<6;$++)!fe&&!ee?se[$]=m(E.image[$],!0,r.maxCubemapSize):se[$]=ee?E.image[$].image:E.image[$],se[$]=Me(E,se[$]);const Ge=se[0],Fe=s.convert(E.format,E.colorSpace),de=s.convert(E.type),Oe=v(E.internalFormat,Fe,de,E.colorSpace),D=E.isVideoTexture!==!0,ce=j.__version===void 0||J===!0,ne=Z.dataReady;let ae=x(E,Ge);ie(i.TEXTURE_CUBE_MAP,E);let Ae;if(fe){D&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ae,Oe,Ge.width,Ge.height);for(let $=0;$<6;$++){Ae=se[$].mipmaps;for(let _e=0;_e<Ae.length;_e++){const Te=Ae[_e];E.format!==DA?Fe!==null?D?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,0,0,Te.width,Te.height,Fe,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,Oe,Te.width,Te.height,0,Te.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,0,0,Te.width,Te.height,Fe,de,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,Oe,Te.width,Te.height,0,Fe,de,Te.data)}}}else{if(Ae=E.mipmaps,D&&ce){Ae.length>0&&ae++;const $=ke(se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ae,Oe,$.width,$.height)}for(let $=0;$<6;$++)if(ee){D?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,se[$].width,se[$].height,Fe,de,se[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Oe,se[$].width,se[$].height,0,Fe,de,se[$].data);for(let _e=0;_e<Ae.length;_e++){const Te=Ae[_e].image[$].image;D?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,0,0,Te.width,Te.height,Fe,de,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,Oe,Te.width,Te.height,0,Fe,de,Te.data)}}else{D?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Fe,de,se[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Oe,Fe,de,se[$]);for(let _e=0;_e<Ae.length;_e++){const Te=Ae[_e];D?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,0,0,Fe,de,Te.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,Oe,Fe,de,Te.image[$])}}}g(E)&&d(i.TEXTURE_CUBE_MAP),j.__version=Z.version,E.onUpdate&&E.onUpdate(E)}Q.__version=E.version}function ye(Q,E,V,J,Z,j){const Ue=s.convert(V.format,V.colorSpace),le=s.convert(V.type),Le=v(V.internalFormat,Ue,le,V.colorSpace),fe=A.get(E),ee=A.get(V);if(ee.__renderTarget=E,!fe.__hasExternalTextures){const se=Math.max(1,E.width>>j),Ge=Math.max(1,E.height>>j);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,j,Le,se,Ge,E.depth,0,Ue,le,null):t.texImage2D(Z,j,Le,se,Ge,0,Ue,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,Q),xe(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Z,ee.__webglTexture,0,lt(E)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,Z,ee.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(Q,E,V){if(i.bindRenderbuffer(i.RENDERBUFFER,Q),E.depthBuffer){const J=E.depthTexture,Z=J&&J.isDepthTexture?J.type:null,j=y(E.stencilBuffer,Z),Ue=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=lt(E);xe(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,j,E.width,E.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,j,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,j,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ue,i.RENDERBUFFER,Q)}else{const J=E.textures;for(let Z=0;Z<J.length;Z++){const j=J[Z],Ue=s.convert(j.format,j.colorSpace),le=s.convert(j.type),Le=v(j.internalFormat,Ue,le,j.colorSpace),fe=lt(E);V&&xe(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,Le,E.width,E.height):xe(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,Le,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Le,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(Q,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,Q),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=A.get(E.depthTexture);V.__renderTarget=E,(!V.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H(E.depthTexture,0);const J=V.__webglTexture,Z=lt(E);if(E.depthTexture.format===Xs)xe(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(E.depthTexture.format===Ys)xe(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Se(Q){const E=A.get(Q),V=Q.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==Q.depthTexture){const J=Q.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){const Z=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",Z)};J.addEventListener("dispose",Z),E.__depthDisposeCallback=Z}E.__boundDepthTexture=J}if(Q.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const J=Q.texture.mipmaps;J&&J.length>0?be(E.__webglFramebuffer[0],Q):be(E.__webglFramebuffer,Q)}else if(V){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=i.createRenderbuffer(),ze(E.__webglDepthbuffer[J],Q,!1);else{const Z=Q.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,j)}}else{const J=Q.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ze(E.__webglDepthbuffer,Q,!1);else{const Z=Q.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,j)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(Q,E,V){const J=A.get(Q);E!==void 0&&ye(J.__webglFramebuffer,Q,Q.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Se(Q)}function tt(Q){const E=Q.texture,V=A.get(Q),J=A.get(E);Q.addEventListener("dispose",M);const Z=Q.textures,j=Q.isWebGLCubeRenderTarget===!0,Ue=Z.length>1;if(Ue||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=E.version,n.memory.textures++),j){V.__webglFramebuffer=[];for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[le]=[];for(let Le=0;Le<E.mipmaps.length;Le++)V.__webglFramebuffer[le][Le]=i.createFramebuffer()}else V.__webglFramebuffer[le]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let le=0;le<E.mipmaps.length;le++)V.__webglFramebuffer[le]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Ue)for(let le=0,Le=Z.length;le<Le;le++){const fe=A.get(Z[le]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),n.memory.textures++)}if(Q.samples>0&&xe(Q)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let le=0;le<Z.length;le++){const Le=Z[le];V.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[le]);const fe=s.convert(Le.format,Le.colorSpace),ee=s.convert(Le.type),se=v(Le.internalFormat,fe,ee,Le.colorSpace,Q.isXRRenderTarget===!0),Ge=lt(Q);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,se,Q.width,Q.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,V.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),Q.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(V.__webglDepthRenderbuffer,Q,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),ie(i.TEXTURE_CUBE_MAP,E);for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0)for(let Le=0;Le<E.mipmaps.length;Le++)ye(V.__webglFramebuffer[le][Le],Q,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Le);else ye(V.__webglFramebuffer[le],Q,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(E)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let le=0,Le=Z.length;le<Le;le++){const fe=Z[le],ee=A.get(fe);let se=i.TEXTURE_2D;(Q.isWebGL3DRenderTarget||Q.isWebGLArrayRenderTarget)&&(se=Q.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,ee.__webglTexture),ie(se,fe),ye(V.__webglFramebuffer,Q,fe,i.COLOR_ATTACHMENT0+le,se,0),g(fe)&&d(se)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((Q.isWebGL3DRenderTarget||Q.isWebGLArrayRenderTarget)&&(le=Q.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,J.__webglTexture),ie(le,E),E.mipmaps&&E.mipmaps.length>0)for(let Le=0;Le<E.mipmaps.length;Le++)ye(V.__webglFramebuffer[Le],Q,E,i.COLOR_ATTACHMENT0,le,Le);else ye(V.__webglFramebuffer,Q,E,i.COLOR_ATTACHMENT0,le,0);g(E)&&d(le),t.unbindTexture()}Q.depthBuffer&&Se(Q)}function Ze(Q){const E=Q.textures;for(let V=0,J=E.length;V<J;V++){const Z=E[V];if(g(Z)){const j=B(Q),Ue=A.get(Z).__webglTexture;t.bindTexture(j,Ue),d(j),t.unbindTexture()}}}const P=[],Nt=[];function et(Q){if(Q.samples>0){if(xe(Q)===!1){const E=Q.textures,V=Q.width,J=Q.height;let Z=i.COLOR_BUFFER_BIT;const j=Q.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=A.get(Q),le=E.length>1;if(le)for(let fe=0;fe<E.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const Le=Q.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let fe=0;fe<E.length;fe++){if(Q.resolveDepthBuffer&&(Q.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),Q.stencilBuffer&&Q.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[fe]);const ee=A.get(E[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,V,J,0,0,V,J,Z,i.NEAREST),o===!0&&(P.length=0,Nt.length=0,P.push(i.COLOR_ATTACHMENT0+fe),Q.depthBuffer&&Q.resolveDepthBuffer===!1&&(P.push(j),Nt.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Nt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,P))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let fe=0;fe<E.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[fe]);const ee=A.get(E[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(Q.depthBuffer&&Q.resolveDepthBuffer===!1&&o){const E=Q.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function lt(Q){return Math.min(r.maxSamples,Q.samples)}function xe(Q){const E=A.get(Q);return Q.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function gt(Q){const E=n.render.frame;c.get(Q)!==E&&(c.set(Q,E),Q.update())}function Me(Q,E){const V=Q.colorSpace,J=Q.format,Z=Q.type;return Q.isCompressedTexture===!0||Q.isVideoTexture===!0||V!==ts&&V!==Di&&(qe.getTransfer(V)===st?(J!==DA||Z!==qA)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):vt("WebGLTextures: Unsupported texture color space:",V)),E}function ke(Q){return typeof HTMLImageElement<"u"&&Q instanceof HTMLImageElement?(l.width=Q.naturalWidth||Q.width,l.height=Q.naturalHeight||Q.height):typeof VideoFrame<"u"&&Q instanceof VideoFrame?(l.width=Q.displayWidth,l.height=Q.displayHeight):(l.width=Q.width,l.height=Q.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=T,this.setTexture2D=H,this.setTexture2DArray=R,this.setTexture3D=G,this.setTextureCube=z,this.rebindTextures=ot,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=xe}function J1(i,e){function t(A,r=Di){let s;const n=qe.getTransfer(r);if(A===qA)return i.UNSIGNED_BYTE;if(A===Gc)return i.UNSIGNED_SHORT_4_4_4_4;if(A===Kc)return i.UNSIGNED_SHORT_5_5_5_1;if(A===Bp)return i.UNSIGNED_INT_5_9_9_9_REV;if(A===wp)return i.UNSIGNED_INT_10F_11F_11F_REV;if(A===gp)return i.BYTE;if(A===mp)return i.SHORT;if(A===Ks)return i.UNSIGNED_SHORT;if(A===zc)return i.INT;if(A===dr)return i.UNSIGNED_INT;if(A===wi)return i.FLOAT;if(A===YA)return i.HALF_FLOAT;if(A===vp)return i.ALPHA;if(A===Wc)return i.RGB;if(A===DA)return i.RGBA;if(A===Xs)return i.DEPTH_COMPONENT;if(A===Ys)return i.DEPTH_STENCIL;if(A===yp)return i.RED;if(A===Xc)return i.RED_INTEGER;if(A===Yc)return i.RG;if(A===jc)return i.RG_INTEGER;if(A===qc)return i.RGBA_INTEGER;if(A===pa||A===fa||A===ga||A===ma)if(n===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(A===pa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(A===fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(A===ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(A===ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(A===pa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(A===fa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(A===ga)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(A===ma)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(A===Hl||A===Nl||A===Ol||A===kl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(A===Hl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(A===Nl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(A===Ol)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(A===kl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(A===Vl||A===zl||A===Gl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(A===Vl||A===zl)return n===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(A===Gl)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(A===Kl||A===Wl||A===Xl||A===Yl||A===jl||A===ql||A===Jl||A===Zl||A===$l||A===ec||A===tc||A===Ac||A===ic||A===rc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(A===Kl)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(A===Wl)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(A===Xl)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(A===Yl)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(A===jl)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(A===ql)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(A===Jl)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(A===Zl)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(A===$l)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(A===ec)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(A===tc)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(A===Ac)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(A===ic)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(A===rc)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(A===sc||A===nc||A===ac)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(A===sc)return n===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(A===nc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(A===ac)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(A===oc||A===lc||A===cc||A===hc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(A===oc)return s.COMPRESSED_RED_RGTC1_EXT;if(A===lc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(A===cc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(A===hc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return A===Ws?i.UNSIGNED_INT_24_8:i[A]!==void 0?i[A]:null}return{convert:t}}const Z1=`
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

}`;class ey{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const A=new Rp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=A}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,A=new AA({vertexShader:Z1,fragmentShader:$1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rA(new en(20,20),A)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ty extends pr{constructor(e,t){super();const A=this;let r=null,s=1,n=null,a="local-floor",o=1,l=null,c=null,u=null,h=null,p=null,f=null;const m=typeof XRWebGLBinding<"u",g=new ey,d={},B=t.getContextAttributes();let v=null,y=null;const x=[],w=[],M=new Ee;let S=null;const C=new mA;C.viewport=new yt;const _=new mA;_.viewport=new yt;const F=[C,_],T=new mB;let L=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let q=x[Y];return q===void 0&&(q=new Po,x[Y]=q),q.getTargetRaySpace()},this.getControllerGrip=function(Y){let q=x[Y];return q===void 0&&(q=new Po,x[Y]=q),q.getGripSpace()},this.getHand=function(Y){let q=x[Y];return q===void 0&&(q=new Po,x[Y]=q),q.getHandSpace()};function H(Y){const q=w.indexOf(Y.inputSource);if(q===-1)return;const ye=x[q];ye!==void 0&&(ye.update(Y.inputSource,Y.frame,l||n),ye.dispatchEvent({type:Y.type,data:Y.inputSource}))}function R(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",R),r.removeEventListener("inputsourceschange",G);for(let Y=0;Y<x.length;Y++){const q=w[Y];q!==null&&(w[Y]=null,x[Y].disconnect(q))}L=null,I=null,g.reset();for(const Y in d)delete d[Y];e.setRenderTarget(v),p=null,h=null,u=null,r=null,y=null,Ke.stop(),A.isPresenting=!1,e.setPixelRatio(S),e.setSize(M.width,M.height,!1),A.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,A.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,A.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",R),r.addEventListener("inputsourceschange",G),B.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(M),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let q=null,ye=null,ze=null;B.depth&&(ze=B.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=B.stencil?Ys:Xs,ye=B.stencil?Ws:dr);const be={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:s};u=this.getBinding(),h=u.createProjectionLayer(be),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new HA(h.textureWidth,h.textureHeight,{format:DA,type:qA,depthTexture:new Ip(h.textureWidth,h.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:B.stencil,colorSpace:e.outputColorSpace,samples:B.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const q={antialias:B.antialias,alpha:!0,depth:B.depth,stencil:B.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new HA(p.framebufferWidth,p.framebufferHeight,{format:DA,type:qA,colorSpace:e.outputColorSpace,stencilBuffer:B.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(a),Ke.setContext(r),Ke.start(),A.isPresenting=!0,A.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(Y){for(let q=0;q<Y.removed.length;q++){const ye=Y.removed[q],ze=w.indexOf(ye);ze>=0&&(w[ze]=null,x[ze].disconnect(ye))}for(let q=0;q<Y.added.length;q++){const ye=Y.added[q];let ze=w.indexOf(ye);if(ze===-1){for(let Se=0;Se<x.length;Se++)if(Se>=w.length){w.push(ye),ze=Se;break}else if(w[Se]===null){w[Se]=ye,ze=Se;break}if(ze===-1)break}const be=x[ze];be&&be.connect(ye)}}const z=new N,X=new N;function te(Y,q,ye){z.setFromMatrixPosition(q.matrixWorld),X.setFromMatrixPosition(ye.matrixWorld);const ze=z.distanceTo(X),be=q.projectionMatrix.elements,Se=ye.projectionMatrix.elements,ot=be[14]/(be[10]-1),tt=be[14]/(be[10]+1),Ze=(be[9]+1)/be[5],P=(be[9]-1)/be[5],Nt=(be[8]-1)/be[0],et=(Se[8]+1)/Se[0],lt=ot*Nt,xe=ot*et,gt=ze/(-Nt+et),Me=gt*-Nt;if(q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Me),Y.translateZ(gt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),be[10]===-1)Y.projectionMatrix.copy(q.projectionMatrix),Y.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const ke=ot+gt,Q=tt+gt,E=lt-Me,V=xe+(ze-Me),J=Ze*tt/Q*ke,Z=P*tt/Q*ke;Y.projectionMatrix.makePerspective(E,V,J,Z,ke,Q),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ve(Y,q){q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let q=Y.near,ye=Y.far;g.texture!==null&&(g.depthNear>0&&(q=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),T.near=_.near=C.near=q,T.far=_.far=C.far=ye,(L!==T.near||I!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),L=T.near,I=T.far),T.layers.mask=Y.layers.mask|6,C.layers.mask=T.layers.mask&3,_.layers.mask=T.layers.mask&5;const ze=Y.parent,be=T.cameras;ve(T,ze);for(let Se=0;Se<be.length;Se++)ve(be[Se],ze);be.length===2?te(T,C,_):T.projectionMatrix.copy(C.projectionMatrix),ie(Y,T,ze)};function ie(Y,q,ye){ye===null?Y.matrix.copy(q.matrixWorld):(Y.matrix.copy(ye.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(q.projectionMatrix),Y.projectionMatrixInverse.copy(q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=As*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&p===null))return o},this.setFoveation=function(Y){o=Y,h!==null&&(h.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(T)},this.getCameraTexture=function(Y){return d[Y]};let Ne=null;function Ye(Y,q){if(c=q.getViewerPose(l||n),f=q,c!==null){const ye=c.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ze=!1;ye.length!==T.cameras.length&&(T.cameras.length=0,ze=!0);for(let Se=0;Se<ye.length;Se++){const ot=ye[Se];let tt=null;if(p!==null)tt=p.getViewport(ot);else{const P=u.getViewSubImage(h,ot);tt=P.viewport,Se===0&&(e.setRenderTargetTextures(y,P.colorTexture,P.depthStencilTexture),e.setRenderTarget(y))}let Ze=F[Se];Ze===void 0&&(Ze=new mA,Ze.layers.enable(Se),Ze.viewport=new yt,F[Se]=Ze),Ze.matrix.fromArray(ot.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(ot.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(tt.x,tt.y,tt.width,tt.height),Se===0&&(T.matrix.copy(Ze.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ze===!0&&T.cameras.push(Ze)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&m){u=A.getBinding();const Se=u.getDepthInformation(ye[0]);Se&&Se.isValid&&Se.texture&&g.init(Se,r.renderState)}if(be&&be.includes("camera-access")&&m){e.state.unbindTexture(),u=A.getBinding();for(let Se=0;Se<ye.length;Se++){const ot=ye[Se].camera;if(ot){let tt=d[ot];tt||(tt=new Rp,d[ot]=tt);const Ze=u.getCameraImage(ot);tt.sourceTexture=Ze}}}}for(let ye=0;ye<x.length;ye++){const ze=w[ye],be=x[ye];ze!==null&&be!==void 0&&be.update(ze,q,l||n)}Ne&&Ne(Y,q),q.detectedPlanes&&A.dispatchEvent({type:"planesdetected",data:q}),f=null}const Ke=new Np;Ke.setAnimationLoop(Ye),this.setAnimationLoop=function(Y){Ne=Y},this.dispose=function(){}}}const tr=new JA,Ay=new ft;function iy(i,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function A(g,d){d.color.getRGB(g.fogColor.value,Up(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,B,v,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),u(g,d)):d.isMeshPhongMaterial?(s(g,d),c(g,d)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&p(g,d,y)):d.isMeshMatcapMaterial?(s(g,d),f(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),m(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(n(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?o(g,d,B,v):d.isSpriteMaterial?l(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===cA&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===cA&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const B=e.get(d),v=B.envMap,y=B.envMapRotation;v&&(g.envMap.value=v,tr.copy(y),tr.x*=-1,tr.y*=-1,tr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),g.envMapRotation.value.setFromMatrix4(Ay.makeRotationFromEuler(tr)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function n(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function o(g,d,B,v){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*B,g.scale.value=v*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function l(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function u(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,B){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===cA&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=B.texture,g.transmissionSamplerSize.value.set(B.width,B.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function f(g,d){d.matcap&&(g.matcap.value=d.matcap)}function m(g,d){const B=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(B.matrixWorld),g.nearDistance.value=B.shadow.camera.near,g.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:A,refreshMaterialUniforms:r}}function ry(i,e,t,A){let r={},s={},n=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function o(B,v){const y=v.program;A.uniformBlockBinding(B,y)}function l(B,v){let y=r[B.id];y===void 0&&(f(B),y=c(B),r[B.id]=y,B.addEventListener("dispose",g));const x=v.program;A.updateUBOMapping(B,x);const w=e.render.frame;s[B.id]!==w&&(h(B),s[B.id]=w)}function c(B){const v=u();B.__bindingPointIndex=v;const y=i.createBuffer(),x=B.__size,w=B.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,x,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function u(){for(let B=0;B<a;B++)if(n.indexOf(B)===-1)return n.push(B),B;return vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(B){const v=r[B.id],y=B.uniforms,x=B.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,M=y.length;w<M;w++){const S=Array.isArray(y[w])?y[w]:[y[w]];for(let C=0,_=S.length;C<_;C++){const F=S[C];if(p(F,w,C,x)===!0){const T=F.__offset,L=Array.isArray(F.value)?F.value:[F.value];let I=0;for(let H=0;H<L.length;H++){const R=L[H],G=m(R);typeof R=="number"||typeof R=="boolean"?(F.__data[0]=R,i.bufferSubData(i.UNIFORM_BUFFER,T+I,F.__data)):R.isMatrix3?(F.__data[0]=R.elements[0],F.__data[1]=R.elements[1],F.__data[2]=R.elements[2],F.__data[3]=0,F.__data[4]=R.elements[3],F.__data[5]=R.elements[4],F.__data[6]=R.elements[5],F.__data[7]=0,F.__data[8]=R.elements[6],F.__data[9]=R.elements[7],F.__data[10]=R.elements[8],F.__data[11]=0):(R.toArray(F.__data,I),I+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,T,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(B,v,y,x){const w=B.value,M=v+"_"+y;if(x[M]===void 0)return typeof w=="number"||typeof w=="boolean"?x[M]=w:x[M]=w.clone(),!0;{const S=x[M];if(typeof w=="number"||typeof w=="boolean"){if(S!==w)return x[M]=w,!0}else if(S.equals(w)===!1)return S.copy(w),!0}return!1}function f(B){const v=B.uniforms;let y=0;const x=16;for(let M=0,S=v.length;M<S;M++){const C=Array.isArray(v[M])?v[M]:[v[M]];for(let _=0,F=C.length;_<F;_++){const T=C[_],L=Array.isArray(T.value)?T.value:[T.value];for(let I=0,H=L.length;I<H;I++){const R=L[I],G=m(R),z=y%x,X=z%G.boundary,te=z+X;y+=X,te!==0&&x-te<G.storage&&(y+=x-te),T.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=y,y+=G.storage}}}const w=y%x;return w>0&&(y+=x-w),B.__size=y,B.__cache={},this}function m(B){const v={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(v.boundary=4,v.storage=4):B.isVector2?(v.boundary=8,v.storage=8):B.isVector3||B.isColor?(v.boundary=16,v.storage=12):B.isVector4?(v.boundary=16,v.storage=16):B.isMatrix3?(v.boundary=48,v.storage=48):B.isMatrix4?(v.boundary=64,v.storage=64):B.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):De("WebGLRenderer: Unsupported uniform value type.",B),v}function g(B){const v=B.target;v.removeEventListener("dispose",g);const y=n.indexOf(v.__bindingPointIndex);n.splice(y,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const B in r)i.deleteBuffer(r[B]);n=[],r={},s={}}return{bind:o,update:l,dispose:d}}const sy=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let oi=null;function ny(){return oi===null&&(oi=new Tp(sy,32,32,Yc,YA),oi.minFilter=EA,oi.magFilter=EA,oi.wrapS=Bi,oi.wrapT=Bi,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}class ay{constructor(e={}){const{canvas:t=pm(),context:A=null,depth:r=!0,stencil:s=!1,alpha:n=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(A!==null){if(typeof WebGLRenderingContext<"u"&&A instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=A.getContextAttributes().alpha}else p=n;const f=new Set([qc,jc,Xc]),m=new Set([qA,dr,Ks,Ws,Gc,Kc]),g=new Uint32Array(4),d=new Int32Array(4);let B=null,v=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let M=!1;this._outputColorSpace=zt;let S=0,C=0,_=null,F=-1,T=null;const L=new yt,I=new yt;let H=null;const R=new Qe(0);let G=0,z=t.width,X=t.height,te=1,ve=null,ie=null;const Ne=new yt(0,0,z,X),Ye=new yt(0,0,z,X);let Ke=!1;const Y=new Ah;let q=!1,ye=!1;const ze=new ft,be=new N,Se=new yt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function Ze(){return _===null?te:1}let P=A;function Nt(U,k){return t.getContext(U,k)}try{const U={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vc}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",_e,!1),P===null){const k="webgl2";if(P=Nt(k,U),P===null)throw Nt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw U("WebGLRenderer: "+U.message),U}let et,lt,xe,gt,Me,ke,Q,E,V,J,Z,j,Ue,le,Le,fe,ee,se,Ge,Fe,de,Oe,D,ce;function ne(){et=new fv(P),et.init(),Oe=new J1(P,et),lt=new nv(P,et,e,Oe),xe=new j1(P,et),lt.reversedDepthBuffer&&h&&xe.buffers.depth.setReversed(!0),gt=new Bv(P),Me=new D1,ke=new q1(P,et,xe,Me,lt,Oe,gt),Q=new ov(w),E=new pv(w),V=new _B(P),D=new rv(P,V),J=new gv(P,V,gt,D),Z=new vv(P,J,V,gt),Ge=new wv(P,lt,ke),fe=new av(Me),j=new R1(w,Q,E,et,lt,D,fe),Ue=new iy(w,Me),le=new H1,Le=new G1(et),se=new iv(w,Q,E,xe,Z,p,o),ee=new X1(w,Z,lt),ce=new ry(P,gt,lt,xe),Fe=new sv(P,et,gt),de=new mv(P,et,gt),gt.programs=j.programs,w.capabilities=lt,w.extensions=et,w.properties=Me,w.renderLists=le,w.shadowMap=ee,w.state=xe,w.info=gt}ne();const ae=new ty(w,P);this.xr=ae,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const U=et.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=et.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(U){U!==void 0&&(te=U,this.setSize(z,X,!1))},this.getSize=function(U){return U.set(z,X)},this.setSize=function(U,k,K=!0){if(ae.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}z=U,X=k,t.width=Math.floor(U*te),t.height=Math.floor(k*te),K===!0&&(t.style.width=U+"px",t.style.height=k+"px"),this.setViewport(0,0,U,k)},this.getDrawingBufferSize=function(U){return U.set(z*te,X*te).floor()},this.setDrawingBufferSize=function(U,k,K){z=U,X=k,te=K,t.width=Math.floor(U*K),t.height=Math.floor(k*K),this.setViewport(0,0,U,k)},this.getCurrentViewport=function(U){return U.copy(L)},this.getViewport=function(U){return U.copy(Ne)},this.setViewport=function(U,k,K,W){U.isVector4?Ne.set(U.x,U.y,U.z,U.w):Ne.set(U,k,K,W),xe.viewport(L.copy(Ne).multiplyScalar(te).round())},this.getScissor=function(U){return U.copy(Ye)},this.setScissor=function(U,k,K,W){U.isVector4?Ye.set(U.x,U.y,U.z,U.w):Ye.set(U,k,K,W),xe.scissor(I.copy(Ye).multiplyScalar(te).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(U){xe.setScissorTest(Ke=U)},this.setOpaqueSort=function(U){ve=U},this.setTransparentSort=function(U){ie=U},this.getClearColor=function(U){return U.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(U=!0,k=!0,K=!0){let W=0;if(U){let O=!1;if(_!==null){const re=_.texture.format;O=f.has(re)}if(O){const re=_.texture.type,pe=m.has(re),me=se.getClearColor(),Be=se.getClearAlpha(),Ie=me.r,He=me.g,Re=me.b;pe?(g[0]=Ie,g[1]=He,g[2]=Re,g[3]=Be,P.clearBufferuiv(P.COLOR,0,g)):(d[0]=Ie,d[1]=He,d[2]=Re,d[3]=Be,P.clearBufferiv(P.COLOR,0,d))}else W|=P.COLOR_BUFFER_BIT}k&&(W|=P.DEPTH_BUFFER_BIT),K&&(W|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),se.dispose(),le.dispose(),Le.dispose(),Me.dispose(),Q.dispose(),E.dispose(),Z.dispose(),D.dispose(),ce.dispose(),j.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",bh),ae.removeEventListener("sessionend",Mh),Yi.stop()};function Ae(U){U.preventDefault(),Oh("WebGLRenderer: Context Lost."),M=!0}function $(){Oh("WebGLRenderer: Context Restored."),M=!1;const U=gt.autoReset,k=ee.enabled,K=ee.autoUpdate,W=ee.needsUpdate,O=ee.type;ne(),gt.autoReset=U,ee.enabled=k,ee.autoUpdate=K,ee.needsUpdate=W,ee.type=O}function _e(U){vt("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Te(U){const k=U.target;k.removeEventListener("dispose",Te),It(k)}function It(U){rt(U),Me.remove(U)}function rt(U){const k=Me.get(U).programs;k!==void 0&&(k.forEach(function(K){j.releaseProgram(K)}),U.isShaderMaterial&&j.releaseShaderCache(U))}this.renderBufferDirect=function(U,k,K,W,O,re){k===null&&(k=ot);const pe=O.isMesh&&O.matrixWorld.determinant()<0,me=xg(U,k,K,W,O);xe.setMaterial(W,pe);let Be=K.index,Ie=1;if(W.wireframe===!0){if(Be=J.getWireframeAttribute(K),Be===void 0)return;Ie=2}const He=K.drawRange,Re=K.attributes.position;let $e=He.start*Ie,ct=(He.start+He.count)*Ie;re!==null&&($e=Math.max($e,re.start*Ie),ct=Math.min(ct,(re.start+re.count)*Ie)),Be!==null?($e=Math.max($e,0),ct=Math.min(ct,Be.count)):Re!=null&&($e=Math.max($e,0),ct=Math.min(ct,Re.count));const wt=ct-$e;if(wt<0||wt===1/0)return;D.setup(O,W,me,K,Be);let mt,ht=Fe;if(Be!==null&&(mt=V.get(Be),ht=de,ht.setIndex(mt)),O.isMesh)W.wireframe===!0?(xe.setLineWidth(W.wireframeLinewidth*Ze()),ht.setMode(P.LINES)):ht.setMode(P.TRIANGLES);else if(O.isLine){let Ce=W.linewidth;Ce===void 0&&(Ce=1),xe.setLineWidth(Ce*Ze()),O.isLineSegments?ht.setMode(P.LINES):O.isLineLoop?ht.setMode(P.LINE_LOOP):ht.setMode(P.LINE_STRIP)}else O.isPoints?ht.setMode(P.POINTS):O.isSprite&&ht.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)js("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))ht.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ce=O._multiDrawStarts,Ot=O._multiDrawCounts,Ai=O._multiDrawCount,SA=Be?V.get(Be).bytesPerElement:1,gr=Me.get(W).currentProgram.getUniforms();for(let dA=0;dA<Ai;dA++)gr.setValue(P,"_gl_DrawID",dA),ht.render(Ce[dA]/SA,Ot[dA])}else if(O.isInstancedMesh)ht.renderInstances($e,wt,O.count);else if(K.isInstancedBufferGeometry){const Ce=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ot=Math.min(K.instanceCount,Ce);ht.renderInstances($e,wt,Ot)}else ht.render($e,wt)};function OA(U,k,K){U.transparent===!0&&U.side===mi&&U.forceSinglePass===!1?(U.side=cA,U.needsUpdate=!0,un(U,k,K),U.side=Gi,U.needsUpdate=!0,un(U,k,K),U.side=mi):un(U,k,K)}this.compile=function(U,k,K=null){K===null&&(K=U),v=Le.get(K),v.init(k),x.push(v),K.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(v.pushLight(O),O.castShadow&&v.pushShadow(O))}),U!==K&&U.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(v.pushLight(O),O.castShadow&&v.pushShadow(O))}),v.setupLights();const W=new Set;return U.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const re=O.material;if(re)if(Array.isArray(re))for(let pe=0;pe<re.length;pe++){const me=re[pe];OA(me,K,O),W.add(me)}else OA(re,K,O),W.add(re)}),v=x.pop(),W},this.compileAsync=function(U,k,K=null){const W=this.compile(U,k,K);return new Promise(O=>{function re(){if(W.forEach(function(pe){Me.get(pe).currentProgram.isReady()&&W.delete(pe)}),W.size===0){O(U);return}setTimeout(re,10)}et.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let UA=null;function _g(U){UA&&UA(U)}function bh(){Yi.stop()}function Mh(){Yi.start()}const Yi=new Np;Yi.setAnimationLoop(_g),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(U){UA=U,ae.setAnimationLoop(U),U===null?Yi.stop():Yi.start()},ae.addEventListener("sessionstart",bh),ae.addEventListener("sessionend",Mh),this.render=function(U,k){if(k!==void 0&&k.isCamera!==!0){vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(k),k=ae.getCamera()),U.isScene===!0&&U.onBeforeRender(w,U,k,_),v=Le.get(U,x.length),v.init(k),x.push(v),ze.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Y.setFromProjectionMatrix(ze,WA,k.reversedDepth),ye=this.localClippingEnabled,q=fe.init(this.clippingPlanes,ye),B=le.get(U,y.length),B.init(),y.push(B),ae.enabled===!0&&ae.isPresenting===!0){const re=w.xr.getDepthSensingMesh();re!==null&&po(re,k,-1/0,w.sortObjects)}po(U,k,0,w.sortObjects),B.finish(),w.sortObjects===!0&&B.sort(ve,ie),tt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,tt&&se.addToRenderList(B,U),this.info.render.frame++,q===!0&&fe.beginShadows();const K=v.state.shadowsArray;ee.render(K,U,k),q===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=B.opaque,O=B.transmissive;if(v.setupLights(),k.isArrayCamera){const re=k.cameras;if(O.length>0)for(let pe=0,me=re.length;pe<me;pe++){const Be=re[pe];Sh(W,O,U,Be)}tt&&se.render(U);for(let pe=0,me=re.length;pe<me;pe++){const Be=re[pe];Uh(B,U,Be,Be.viewport)}}else O.length>0&&Sh(W,O,U,k),tt&&se.render(U),Uh(B,U,k);_!==null&&C===0&&(ke.updateMultisampleRenderTarget(_),ke.updateRenderTargetMipmap(_)),U.isScene===!0&&U.onAfterRender(w,U,k),D.resetDefaultState(),F=-1,T=null,x.pop(),x.length>0?(v=x[x.length-1],q===!0&&fe.setGlobalState(w.clippingPlanes,v.state.camera)):v=null,y.pop(),y.length>0?B=y[y.length-1]:B=null};function po(U,k,K,W){if(U.visible===!1)return;if(U.layers.test(k.layers)){if(U.isGroup)K=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(k);else if(U.isLight)v.pushLight(U),U.castShadow&&v.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||Y.intersectsSprite(U)){W&&Se.setFromMatrixPosition(U.matrixWorld).applyMatrix4(ze);const re=Z.update(U),pe=U.material;pe.visible&&B.push(U,re,pe,K,Se.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||Y.intersectsObject(U))){const re=Z.update(U),pe=U.material;if(W&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),Se.copy(U.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),Se.copy(re.boundingSphere.center)),Se.applyMatrix4(U.matrixWorld).applyMatrix4(ze)),Array.isArray(pe)){const me=re.groups;for(let Be=0,Ie=me.length;Be<Ie;Be++){const He=me[Be],Re=pe[He.materialIndex];Re&&Re.visible&&B.push(U,re,Re,K,Se.z,He)}}else pe.visible&&B.push(U,re,pe,K,Se.z,null)}}const O=U.children;for(let re=0,pe=O.length;re<pe;re++)po(O[re],k,K,W)}function Uh(U,k,K,W){const{opaque:O,transmissive:re,transparent:pe}=U;v.setupLightsView(K),q===!0&&fe.setGlobalState(w.clippingPlanes,K),W&&xe.viewport(L.copy(W)),O.length>0&&hn(O,k,K),re.length>0&&hn(re,k,K),pe.length>0&&hn(pe,k,K),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Sh(U,k,K,W){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[W.id]===void 0&&(v.state.transmissionRenderTarget[W.id]=new HA(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?YA:qA,minFilter:ar,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const O=v.state.transmissionRenderTarget[W.id],re=W.viewport||L;O.setSize(re.z*w.transmissionResolutionScale,re.w*w.transmissionResolutionScale);const pe=w.getRenderTarget(),me=w.getActiveCubeFace(),Be=w.getActiveMipmapLevel();w.setRenderTarget(O),w.getClearColor(R),G=w.getClearAlpha(),G<1&&w.setClearColor(16777215,.5),w.clear(),tt&&se.render(K);const Ie=w.toneMapping;w.toneMapping=ki;const He=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),v.setupLightsView(W),q===!0&&fe.setGlobalState(w.clippingPlanes,W),hn(U,K,W),ke.updateMultisampleRenderTarget(O),ke.updateRenderTargetMipmap(O),et.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let $e=0,ct=k.length;$e<ct;$e++){const wt=k[$e],{object:mt,geometry:ht,material:Ce,group:Ot}=wt;if(Ce.side===mi&&mt.layers.test(W.layers)){const Ai=Ce.side;Ce.side=cA,Ce.needsUpdate=!0,Fh(mt,K,W,ht,Ce,Ot),Ce.side=Ai,Ce.needsUpdate=!0,Re=!0}}Re===!0&&(ke.updateMultisampleRenderTarget(O),ke.updateRenderTargetMipmap(O))}w.setRenderTarget(pe,me,Be),w.setClearColor(R,G),He!==void 0&&(W.viewport=He),w.toneMapping=Ie}function hn(U,k,K){const W=k.isScene===!0?k.overrideMaterial:null;for(let O=0,re=U.length;O<re;O++){const pe=U[O],{object:me,geometry:Be,group:Ie}=pe;let He=pe.material;He.allowOverride===!0&&W!==null&&(He=W),me.layers.test(K.layers)&&Fh(me,k,K,Be,He,Ie)}}function Fh(U,k,K,W,O,re){U.onBeforeRender(w,k,K,W,O,re),U.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),O.onBeforeRender(w,k,K,W,U,re),O.transparent===!0&&O.side===mi&&O.forceSinglePass===!1?(O.side=cA,O.needsUpdate=!0,w.renderBufferDirect(K,k,W,O,U,re),O.side=Gi,O.needsUpdate=!0,w.renderBufferDirect(K,k,W,O,U,re),O.side=mi):w.renderBufferDirect(K,k,W,O,U,re),U.onAfterRender(w,k,K,W,O,re)}function un(U,k,K){k.isScene!==!0&&(k=ot);const W=Me.get(U),O=v.state.lights,re=v.state.shadowsArray,pe=O.state.version,me=j.getParameters(U,O.state,re,k,K),Be=j.getProgramCacheKey(me);let Ie=W.programs;W.environment=U.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(U.isMeshStandardMaterial?E:Q).get(U.envMap||W.environment),W.envMapRotation=W.environment!==null&&U.envMap===null?k.environmentRotation:U.envMapRotation,Ie===void 0&&(U.addEventListener("dispose",Te),Ie=new Map,W.programs=Ie);let He=Ie.get(Be);if(He!==void 0){if(W.currentProgram===He&&W.lightsStateVersion===pe)return Qh(U,me),He}else me.uniforms=j.getUniforms(U),U.onBeforeCompile(me,w),He=j.acquireProgram(me,Be),Ie.set(Be,He),W.uniforms=me.uniforms;const Re=W.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Re.clippingPlanes=fe.uniform),Qh(U,me),W.needsLights=Eg(U),W.lightsStateVersion=pe,W.needsLights&&(Re.ambientLightColor.value=O.state.ambient,Re.lightProbe.value=O.state.probe,Re.directionalLights.value=O.state.directional,Re.directionalLightShadows.value=O.state.directionalShadow,Re.spotLights.value=O.state.spot,Re.spotLightShadows.value=O.state.spotShadow,Re.rectAreaLights.value=O.state.rectArea,Re.ltc_1.value=O.state.rectAreaLTC1,Re.ltc_2.value=O.state.rectAreaLTC2,Re.pointLights.value=O.state.point,Re.pointLightShadows.value=O.state.pointShadow,Re.hemisphereLights.value=O.state.hemi,Re.directionalShadowMap.value=O.state.directionalShadowMap,Re.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Re.spotShadowMap.value=O.state.spotShadowMap,Re.spotLightMatrix.value=O.state.spotLightMatrix,Re.spotLightMap.value=O.state.spotLightMap,Re.pointShadowMap.value=O.state.pointShadowMap,Re.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=He,W.uniformsList=null,He}function Th(U){if(U.uniformsList===null){const k=U.currentProgram.getUniforms();U.uniformsList=Ba.seqWithValue(k.seq,U.uniforms)}return U.uniformsList}function Qh(U,k){const K=Me.get(U);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.batchingColor=k.batchingColor,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function xg(U,k,K,W,O){k.isScene!==!0&&(k=ot),ke.resetTextureUnits();const re=k.fog,pe=W.isMeshStandardMaterial?k.environment:null,me=_===null?w.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:ts,Be=(W.isMeshStandardMaterial?E:Q).get(W.envMap||pe),Ie=W.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,He=!!K.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Re=!!K.morphAttributes.position,$e=!!K.morphAttributes.normal,ct=!!K.morphAttributes.color;let wt=ki;W.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(wt=w.toneMapping);const mt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ht=mt!==void 0?mt.length:0,Ce=Me.get(W),Ot=v.state.lights;if(q===!0&&(ye===!0||U!==T)){const kt=U===T&&W.id===F;fe.setState(W,U,kt)}let Ai=!1;W.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Ot.state.version||Ce.outputColorSpace!==me||O.isBatchedMesh&&Ce.batching===!1||!O.isBatchedMesh&&Ce.batching===!0||O.isBatchedMesh&&Ce.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ce.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ce.instancing===!1||!O.isInstancedMesh&&Ce.instancing===!0||O.isSkinnedMesh&&Ce.skinning===!1||!O.isSkinnedMesh&&Ce.skinning===!0||O.isInstancedMesh&&Ce.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ce.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ce.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ce.instancingMorph===!1&&O.morphTexture!==null||Ce.envMap!==Be||W.fog===!0&&Ce.fog!==re||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==fe.numPlanes||Ce.numIntersection!==fe.numIntersection)||Ce.vertexAlphas!==Ie||Ce.vertexTangents!==He||Ce.morphTargets!==Re||Ce.morphNormals!==$e||Ce.morphColors!==ct||Ce.toneMapping!==wt||Ce.morphTargetsCount!==ht)&&(Ai=!0):(Ai=!0,Ce.__version=W.version);let SA=Ce.currentProgram;Ai===!0&&(SA=un(W,k,O));let gr=!1,dA=!1,ps=!1;const Bt=SA.getUniforms(),nA=Ce.uniforms;if(xe.useProgram(SA.program)&&(gr=!0,dA=!0,ps=!0),W.id!==F&&(F=W.id,dA=!0),gr||T!==U){xe.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),Bt.setValue(P,"projectionMatrix",U.projectionMatrix),Bt.setValue(P,"viewMatrix",U.matrixWorldInverse);const kt=Bt.map.cameraPosition;kt!==void 0&&kt.setValue(P,be.setFromMatrixPosition(U.matrixWorld)),lt.logarithmicDepthBuffer&&Bt.setValue(P,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Bt.setValue(P,"isOrthographic",U.isOrthographicCamera===!0),T!==U&&(T=U,dA=!0,ps=!0)}if(O.isSkinnedMesh){Bt.setOptional(P,O,"bindMatrix"),Bt.setOptional(P,O,"bindMatrixInverse");const kt=O.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),Bt.setValue(P,"boneTexture",kt.boneTexture,ke))}O.isBatchedMesh&&(Bt.setOptional(P,O,"batchingTexture"),Bt.setValue(P,"batchingTexture",O._matricesTexture,ke),Bt.setOptional(P,O,"batchingIdTexture"),Bt.setValue(P,"batchingIdTexture",O._indirectTexture,ke),Bt.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&Bt.setValue(P,"batchingColorTexture",O._colorsTexture,ke));const yA=K.morphAttributes;if((yA.position!==void 0||yA.normal!==void 0||yA.color!==void 0)&&Ge.update(O,K,SA),(dA||Ce.receiveShadow!==O.receiveShadow)&&(Ce.receiveShadow=O.receiveShadow,Bt.setValue(P,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(nA.envMap.value=Be,nA.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&k.environment!==null&&(nA.envMapIntensity.value=k.environmentIntensity),nA.dfgLUT!==void 0&&(nA.dfgLUT.value=ny()),dA&&(Bt.setValue(P,"toneMappingExposure",w.toneMappingExposure),Ce.needsLights&&Cg(nA,ps),re&&W.fog===!0&&Ue.refreshFogUniforms(nA,re),Ue.refreshMaterialUniforms(nA,W,te,X,v.state.transmissionRenderTarget[U.id]),Ba.upload(P,Th(Ce),nA,ke)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ba.upload(P,Th(Ce),nA,ke),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Bt.setValue(P,"center",O.center),Bt.setValue(P,"modelViewMatrix",O.modelViewMatrix),Bt.setValue(P,"normalMatrix",O.normalMatrix),Bt.setValue(P,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const kt=W.uniformsGroups;for(let FA=0,fo=kt.length;FA<fo;FA++){const ji=kt[FA];ce.update(ji,SA),ce.bind(ji,SA)}}return SA}function Cg(U,k){U.ambientLightColor.needsUpdate=k,U.lightProbe.needsUpdate=k,U.directionalLights.needsUpdate=k,U.directionalLightShadows.needsUpdate=k,U.pointLights.needsUpdate=k,U.pointLightShadows.needsUpdate=k,U.spotLights.needsUpdate=k,U.spotLightShadows.needsUpdate=k,U.rectAreaLights.needsUpdate=k,U.hemisphereLights.needsUpdate=k}function Eg(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(U,k,K){const W=Me.get(U);W.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Me.get(U.texture).__webglTexture=k,Me.get(U.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:K,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,k){const K=Me.get(U);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0};const bg=P.createFramebuffer();this.setRenderTarget=function(U,k=0,K=0){_=U,S=k,C=K;let W=!0,O=null,re=!1,pe=!1;if(U){const me=Me.get(U);if(me.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(P.FRAMEBUFFER,null),W=!1;else if(me.__webglFramebuffer===void 0)ke.setupRenderTarget(U);else if(me.__hasExternalTextures)ke.rebindTextures(U,Me.get(U.texture).__webglTexture,Me.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const He=U.depthTexture;if(me.__boundDepthTexture!==He){if(He!==null&&Me.has(He)&&(U.width!==He.image.width||U.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(U)}}const Be=U.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(pe=!0);const Ie=Me.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Ie[k])?O=Ie[k][K]:O=Ie[k],re=!0):U.samples>0&&ke.useMultisampledRTT(U)===!1?O=Me.get(U).__webglMultisampledFramebuffer:Array.isArray(Ie)?O=Ie[K]:O=Ie,L.copy(U.viewport),I.copy(U.scissor),H=U.scissorTest}else L.copy(Ne).multiplyScalar(te).floor(),I.copy(Ye).multiplyScalar(te).floor(),H=Ke;if(K!==0&&(O=bg),xe.bindFramebuffer(P.FRAMEBUFFER,O)&&W&&xe.drawBuffers(U,O),xe.viewport(L),xe.scissor(I),xe.setScissorTest(H),re){const me=Me.get(U.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+k,me.__webglTexture,K)}else if(pe){const me=k;for(let Be=0;Be<U.textures.length;Be++){const Ie=Me.get(U.textures[Be]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Be,Ie.__webglTexture,K,me)}}else if(U!==null&&K!==0){const me=Me.get(U.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,me.__webglTexture,K)}F=-1},this.readRenderTargetPixels=function(U,k,K,W,O,re,pe,me=0){if(!(U&&U.isWebGLRenderTarget)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Me.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&pe!==void 0&&(Be=Be[pe]),Be){xe.bindFramebuffer(P.FRAMEBUFFER,Be);try{const Ie=U.textures[me],He=Ie.format,Re=Ie.type;if(!lt.textureFormatReadable(He)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Re)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=U.width-W&&K>=0&&K<=U.height-O&&(U.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+me),P.readPixels(k,K,W,O,Oe.convert(He),Oe.convert(Re),re))}finally{const Ie=_!==null?Me.get(_).__webglFramebuffer:null;xe.bindFramebuffer(P.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(U,k,K,W,O,re,pe,me=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Me.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&pe!==void 0&&(Be=Be[pe]),Be)if(k>=0&&k<=U.width-W&&K>=0&&K<=U.height-O){xe.bindFramebuffer(P.FRAMEBUFFER,Be);const Ie=U.textures[me],He=Ie.format,Re=Ie.type;if(!lt.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,$e),P.bufferData(P.PIXEL_PACK_BUFFER,re.byteLength,P.STREAM_READ),U.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+me),P.readPixels(k,K,W,O,Oe.convert(He),Oe.convert(Re),0);const ct=_!==null?Me.get(_).__webglFramebuffer:null;xe.bindFramebuffer(P.FRAMEBUFFER,ct);const wt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await fm(P,wt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,$e),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,re),P.deleteBuffer($e),P.deleteSync(wt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,k=null,K=0){const W=Math.pow(2,-K),O=Math.floor(U.image.width*W),re=Math.floor(U.image.height*W),pe=k!==null?k.x:0,me=k!==null?k.y:0;ke.setTexture2D(U,0),P.copyTexSubImage2D(P.TEXTURE_2D,K,0,0,pe,me,O,re),xe.unbindTexture()};const Mg=P.createFramebuffer(),Ug=P.createFramebuffer();this.copyTextureToTexture=function(U,k,K=null,W=null,O=0,re=null){re===null&&(O!==0?(js("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=O,O=0):re=0);let pe,me,Be,Ie,He,Re,$e,ct,wt;const mt=U.isCompressedTexture?U.mipmaps[re]:U.image;if(K!==null)pe=K.max.x-K.min.x,me=K.max.y-K.min.y,Be=K.isBox3?K.max.z-K.min.z:1,Ie=K.min.x,He=K.min.y,Re=K.isBox3?K.min.z:0;else{const yA=Math.pow(2,-O);pe=Math.floor(mt.width*yA),me=Math.floor(mt.height*yA),U.isDataArrayTexture?Be=mt.depth:U.isData3DTexture?Be=Math.floor(mt.depth*yA):Be=1,Ie=0,He=0,Re=0}W!==null?($e=W.x,ct=W.y,wt=W.z):($e=0,ct=0,wt=0);const ht=Oe.convert(k.format),Ce=Oe.convert(k.type);let Ot;k.isData3DTexture?(ke.setTexture3D(k,0),Ot=P.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ke.setTexture2DArray(k,0),Ot=P.TEXTURE_2D_ARRAY):(ke.setTexture2D(k,0),Ot=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,k.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,k.unpackAlignment);const Ai=P.getParameter(P.UNPACK_ROW_LENGTH),SA=P.getParameter(P.UNPACK_IMAGE_HEIGHT),gr=P.getParameter(P.UNPACK_SKIP_PIXELS),dA=P.getParameter(P.UNPACK_SKIP_ROWS),ps=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,mt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,mt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ie),P.pixelStorei(P.UNPACK_SKIP_ROWS,He),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Re);const Bt=U.isDataArrayTexture||U.isData3DTexture,nA=k.isDataArrayTexture||k.isData3DTexture;if(U.isDepthTexture){const yA=Me.get(U),kt=Me.get(k),FA=Me.get(yA.__renderTarget),fo=Me.get(kt.__renderTarget);xe.bindFramebuffer(P.READ_FRAMEBUFFER,FA.__webglFramebuffer),xe.bindFramebuffer(P.DRAW_FRAMEBUFFER,fo.__webglFramebuffer);for(let ji=0;ji<Be;ji++)Bt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Me.get(U).__webglTexture,O,Re+ji),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Me.get(k).__webglTexture,re,wt+ji)),P.blitFramebuffer(Ie,He,pe,me,$e,ct,pe,me,P.DEPTH_BUFFER_BIT,P.NEAREST);xe.bindFramebuffer(P.READ_FRAMEBUFFER,null),xe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||U.isRenderTargetTexture||Me.has(U)){const yA=Me.get(U),kt=Me.get(k);xe.bindFramebuffer(P.READ_FRAMEBUFFER,Mg),xe.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ug);for(let FA=0;FA<Be;FA++)Bt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,yA.__webglTexture,O,Re+FA):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,yA.__webglTexture,O),nA?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,kt.__webglTexture,re,wt+FA):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,kt.__webglTexture,re),O!==0?P.blitFramebuffer(Ie,He,pe,me,$e,ct,pe,me,P.COLOR_BUFFER_BIT,P.NEAREST):nA?P.copyTexSubImage3D(Ot,re,$e,ct,wt+FA,Ie,He,pe,me):P.copyTexSubImage2D(Ot,re,$e,ct,Ie,He,pe,me);xe.bindFramebuffer(P.READ_FRAMEBUFFER,null),xe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else nA?U.isDataTexture||U.isData3DTexture?P.texSubImage3D(Ot,re,$e,ct,wt,pe,me,Be,ht,Ce,mt.data):k.isCompressedArrayTexture?P.compressedTexSubImage3D(Ot,re,$e,ct,wt,pe,me,Be,ht,mt.data):P.texSubImage3D(Ot,re,$e,ct,wt,pe,me,Be,ht,Ce,mt):U.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,re,$e,ct,pe,me,ht,Ce,mt.data):U.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,re,$e,ct,mt.width,mt.height,ht,mt.data):P.texSubImage2D(P.TEXTURE_2D,re,$e,ct,pe,me,ht,Ce,mt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ai),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,SA),P.pixelStorei(P.UNPACK_SKIP_PIXELS,gr),P.pixelStorei(P.UNPACK_SKIP_ROWS,dA),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ps),re===0&&k.generateMipmaps&&P.generateMipmap(Ot),xe.unbindTexture()},this.initRenderTarget=function(U){Me.get(U).__webglFramebuffer===void 0&&ke.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?ke.setTextureCube(U,0):U.isData3DTexture?ke.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?ke.setTexture2DArray(U,0):ke.setTexture2D(U,0),xe.unbindTexture()},this.resetState=function(){S=0,C=0,_=null,xe.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return WA}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}const Pu={type:"change"},oh={type:"start"},Gp={type:"end"},Nn=new ja,Hu=new gi,oy=Math.cos(70*Je.DEG2RAD),St=new N,aA=2*Math.PI,nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qo=1e-6;class ly extends vB{constructor(e,t=null){super(e,t),this.state=nt.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xr.ROTATE,MIDDLE:Xr.DOLLY,RIGHT:Xr.PAN},this.touches={ONE:Vr.ROTATE,TWO:Vr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Ki,this._lastTargetPosition=new N,this._quat=new Ki().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new uu,this._sphericalDelta=new uu,this._scale=1,this._panOffset=new N,this._rotateStart=new Ee,this._rotateEnd=new Ee,this._rotateDelta=new Ee,this._panStart=new Ee,this._panEnd=new Ee,this._panDelta=new Ee,this._dollyStart=new Ee,this._dollyEnd=new Ee,this._dollyDelta=new Ee,this._dollyDirection=new N,this._mouse=new Ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hy.bind(this),this._onPointerDown=cy.bind(this),this._onPointerUp=uy.bind(this),this._onContextMenu=wy.bind(this),this._onMouseWheel=fy.bind(this),this._onKeyDown=gy.bind(this),this._onTouchStart=my.bind(this),this._onTouchMove=By.bind(this),this._onMouseDown=dy.bind(this),this._onMouseMove=py.bind(this),this._interceptControlDown=vy.bind(this),this._interceptControlUp=yy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Pu),this.update(),this.state=nt.NONE}update(e=null){const t=this.object.position;St.copy(t).sub(this.target),St.applyQuaternion(this._quat),this._spherical.setFromVector3(St),this.autoRotate&&this.state===nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let A=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(A)&&isFinite(r)&&(A<-Math.PI?A+=aA:A>Math.PI&&(A-=aA),r<-Math.PI?r+=aA:r>Math.PI&&(r-=aA),A<=r?this._spherical.theta=Math.max(A,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(A+r)/2?Math.max(A,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const n=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=n!=this._spherical.radius}if(St.setFromSpherical(this._spherical),St.applyQuaternion(this._quatInverse),t.copy(this.target).add(St),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let n=null;if(this.object.isPerspectiveCamera){const a=St.length();n=this._clampDistance(a*this._scale);const o=a-n;this.object.position.addScaledVector(this._dollyDirection,o),this.object.updateMatrixWorld(),s=!!o}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=o!==this.object.zoom;const l=new N(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),n=St.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;n!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(n).add(this.object.position):(Nn.origin.copy(this.object.position),Nn.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Nn.direction))<oy?this.object.lookAt(this.target):(Hu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Nn.intersectPlane(Hu,this.target))))}else if(this.object.isOrthographicCamera){const n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),n!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>qo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qo||this._lastTargetPosition.distanceToSquared(this.target)>qo?(this.dispatchEvent(Pu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?aA/60*this.autoRotateSpeed*e:aA/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){St.setFromMatrixColumn(t,0),St.multiplyScalar(-e),this._panOffset.add(St)}_panUp(e,t){this.screenSpacePanning===!0?St.setFromMatrixColumn(t,1):(St.setFromMatrixColumn(t,0),St.crossVectors(this.object.up,St)),St.multiplyScalar(e),this._panOffset.add(St)}_pan(e,t){const A=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;St.copy(r).sub(this.target);let s=St.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/A.clientHeight,this.object.matrix),this._panUp(2*t*s/A.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/A.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/A.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const A=this.domElement.getBoundingClientRect(),r=e-A.left,s=t-A.top,n=A.width,a=A.height;this._mouse.x=r/n*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(aA*this._rotateDelta.x/t.clientHeight),this._rotateUp(aA*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(aA*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-aA*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(aA*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-aA*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),A=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(A,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),A=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(A,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),A=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(A*A+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const A=this._getSecondPointerPosition(e),r=.5*(e.pageX+A.x),s=.5*(e.pageY+A.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(aA*this._rotateDelta.x/t.clientHeight),this._rotateUp(aA*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),A=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(A,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),A=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(A*A+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const n=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(n,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ee,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,A={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:A.deltaY*=16;break;case 2:A.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(A.deltaY*=10),A}}function cy(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function hy(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function uy(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Gp),this.state=nt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function dy(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=nt.DOLLY;break;case Xr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=nt.ROTATE}break;case Xr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=nt.PAN}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(oh)}function py(i){switch(this.state){case nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function fy(i){this.enabled===!1||this.enableZoom===!1||this.state!==nt.NONE||(i.preventDefault(),this.dispatchEvent(oh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Gp))}function gy(i){this.enabled!==!1&&this._handleKeyDown(i)}function my(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Vr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=nt.TOUCH_ROTATE;break;case Vr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=nt.TOUCH_PAN;break;default:this.state=nt.NONE}break;case 2:switch(this.touches.TWO){case Vr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=nt.TOUCH_DOLLY_PAN;break;case Vr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=nt.TOUCH_DOLLY_ROTATE;break;default:this.state=nt.NONE}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(oh)}function By(i){switch(this._trackPointer(i),this.state){case nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=nt.NONE}}function wy(i){this.enabled!==!1&&i.preventDefault()}function vy(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yy(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const wa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class tn{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const _y=new ah(-1,1,1,-1,0,1);class xy extends uA{constructor(){super(),this.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ht([0,2,0,0,2,0],2))}}const Cy=new xy;class Kp{constructor(e){this._mesh=new rA(Cy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,_y)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ey extends tn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof AA?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ua.clone(e.uniforms),this.material=new AA({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Kp(this.material)}render(e,t,A){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=A.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Nu extends tn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,A){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let n,a;this.inverse?(n=0,a=1):(n=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,n,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(A),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class by extends tn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class My{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const A=e.getSize(new Ee);this._width=A.width,this._height=A.height,t=new HA(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:YA}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ey(wa),this.copyPass.material.blending=XA,this.clock=new Hp}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let A=!1;for(let r=0,s=this.passes.length;r<s;r++){const n=this.passes[r];if(n.enabled!==!1){if(n.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),n.render(this.renderer,this.writeBuffer,this.readBuffer,e,A),n.needsSwap){if(A){const a=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),o.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Nu!==void 0&&(n instanceof Nu?A=!0:n instanceof by&&(A=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const A=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(A,r),this.renderTarget2.setSize(A,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(A,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Uy extends tn{constructor(e,t,A=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=A,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Qe}render(e,t,A){const r=e.autoClear;e.autoClear=!1;let s,n;this.overrideMaterial!==null&&(n=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:A),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=n),e.autoClear=r}}const Sy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Qe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class rs extends tn{constructor(e,t=1,A,r){super(),this.strength=t,this.radius=A,this.threshold=r,this.resolution=e!==void 0?new Ee(e.x,e.y):new Ee(256,256),this.clearColor=new Qe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),n=Math.round(this.resolution.y/2);this.renderTargetBright=new HA(s,n,{type:YA}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){const u=new HA(s,n,{type:YA});u.texture.name="UnrealBloomPass.h"+c,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const h=new HA(s,n,{type:YA});h.texture.name="UnrealBloomPass.v"+c,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),s=Math.round(s/2),n=Math.round(n/2)}const a=Sy;this.highPassUniforms=Ua.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new AA({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const o=[6,10,14,18,22];s=Math.round(this.resolution.x/2),n=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(o[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new Ee(1/s,1/n),s=Math.round(s/2),n=Math.round(n/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ua.clone(wa.uniforms),this.blendMaterial=new AA({uniforms:this.copyUniforms,vertexShader:wa.vertexShader,fragmentShader:wa.fragmentShader,blending:Ca,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Qe,this._oldClearAlpha=1,this._basic=new ls,this._fsQuad=new Kp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let A=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(A,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(A,r),this.renderTargetsVertical[s].setSize(A,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Ee(1/A,1/r),A=Math.round(A/2),r=Math.round(r/2)}render(e,t,A,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const n=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=A.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=A.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let o=0;o<this.nMips;o++)this._fsQuad.material=this.separableBlurMaterials[o],this.separableBlurMaterials[o].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[o].uniforms.direction.value=rs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[o]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[o].uniforms.colorTexture.value=this.renderTargetsHorizontal[o].texture,this.separableBlurMaterials[o].uniforms.direction.value=rs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[o]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[o];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(A),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=n}_getSeparableBlurMaterial(e){const t=[],A=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(A*A))/A);return new AA({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ee(.5,.5)},direction:{value:new Ee(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}}rs.BlurDirectionX=new Ee(1,0);rs.BlurDirectionY=new Ee(0,1);class Fy{parse(e){let t="",A=0,r=0,s=0;const n=new N,a=new Qe,o=new N,l=new Ee,c=[];function u(f){let m=0,g=0,d=0;const B=f.geometry,v=new Ve,y=B.getAttribute("position"),x=B.getAttribute("normal"),w=B.getAttribute("uv"),M=B.getIndex();if(t+="o "+f.name+`
`,f.material&&f.material.name&&(t+="usemtl "+f.material.name+`
`),y!==void 0)for(let S=0,C=y.count;S<C;S++,m++)n.fromBufferAttribute(y,S),n.applyMatrix4(f.matrixWorld),t+="v "+n.x+" "+n.y+" "+n.z+`
`;if(w!==void 0)for(let S=0,C=w.count;S<C;S++,d++)l.fromBufferAttribute(w,S),t+="vt "+l.x+" "+l.y+`
`;if(x!==void 0){v.getNormalMatrix(f.matrixWorld);for(let S=0,C=x.count;S<C;S++,g++)o.fromBufferAttribute(x,S),o.applyMatrix3(v).normalize(),t+="vn "+o.x+" "+o.y+" "+o.z+`
`}if(M!==null)for(let S=0,C=M.count;S<C;S+=3){for(let _=0;_<3;_++){const F=M.getX(S+_)+1;c[_]=A+F+(x||w?"/"+(w?r+F:"")+(x?"/"+(s+F):""):"")}t+="f "+c.join(" ")+`
`}else for(let S=0,C=y.count;S<C;S+=3){for(let _=0;_<3;_++){const F=S+_+1;c[_]=A+F+(x||w?"/"+(w?r+F:"")+(x?"/"+(s+F):""):"")}t+="f "+c.join(" ")+`
`}A+=m,r+=d,s+=g}function h(f){let m=0;const g=f.geometry,d=f.type,B=g.getAttribute("position");if(t+="o "+f.name+`
`,B!==void 0)for(let v=0,y=B.count;v<y;v++,m++)n.fromBufferAttribute(B,v),n.applyMatrix4(f.matrixWorld),t+="v "+n.x+" "+n.y+" "+n.z+`
`;if(d==="Line"){t+="l ";for(let v=1,y=B.count;v<=y;v++)t+=A+v+" ";t+=`
`}if(d==="LineSegments")for(let v=1,y=v+1,x=B.count;v<x;v+=2,y=v+1)t+="l "+(A+v)+" "+(A+y)+`
`;A+=m}function p(f){let m=0;const g=f.geometry,d=g.getAttribute("position"),B=g.getAttribute("color");if(t+="o "+f.name+`
`,d!==void 0){for(let v=0,y=d.count;v<y;v++,m++)n.fromBufferAttribute(d,v),n.applyMatrix4(f.matrixWorld),t+="v "+n.x+" "+n.y+" "+n.z,B!==void 0&&(a.fromBufferAttribute(B,v),qe.workingToColorSpace(a,zt),t+=" "+a.r+" "+a.g+" "+a.b),t+=`
`;t+="p ";for(let v=1,y=d.count;v<=y;v++)t+=A+v+" ";t+=`
`}A+=m}return e.traverse(function(f){f.isMesh===!0&&u(f),f.isLine===!0&&h(f),f.isPoints===!0&&p(f)}),t}}class Ty{parse(e,t,A={}){function r(B){e.traverse(function(v){if(v.isMesh===!0||v.isPoints){const y=v,x=y.geometry;x.hasAttribute("position")===!0&&B(y,x)}})}A=Object.assign({binary:!1,excludeAttributes:[],littleEndian:!1},A);const s=A.excludeAttributes;let n=!0,a=!1,o=!1,l=!1,c=0,u=0;e.traverse(function(B){if(B.isMesh===!0){const v=B.geometry,y=v.getAttribute("position"),x=v.getAttribute("normal"),w=v.getAttribute("uv"),M=v.getAttribute("color"),S=v.getIndex();if(y===void 0)return;c+=y.count,u+=S?S.count/3:y.count/3,x!==void 0&&(a=!0),w!==void 0&&(l=!0),M!==void 0&&(o=!0)}else if(B.isPoints){const v=B.geometry,y=v.getAttribute("position"),x=v.getAttribute("normal"),w=v.getAttribute("color");c+=y.count,x!==void 0&&(a=!0),w!==void 0&&(o=!0),n=!1}});const h=new Qe;if(n=n&&s.indexOf("index")===-1,a=a&&s.indexOf("normal")===-1,o=o&&s.indexOf("color")===-1,l=l&&s.indexOf("uv")===-1,n&&u!==Math.floor(u))return console.error("PLYExporter: Failed to generate a valid PLY file with triangle indices because the number of indices is not divisible by 3."),null;const p=4;let f=`ply
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
`),n===!0&&(f+=`element face ${u}
property list uchar int vertex_index
`),f+=`end_header
`;const m=new N,g=new Ve;let d=null;if(A.binary===!0){const B=new TextEncoder().encode(f),v=c*(12+(a?12:0)+(o?3:0)+(l?8:0)),y=n?u*(p*3+1):0,x=new DataView(new ArrayBuffer(B.length+v+y));new Uint8Array(x.buffer).set(B,0);let w=B.length,M=B.length+v,S=0;r(function(C,_){const F=_.getAttribute("position"),T=_.getAttribute("normal"),L=_.getAttribute("uv"),I=_.getAttribute("color"),H=_.getIndex();g.getNormalMatrix(C.matrixWorld);for(let R=0,G=F.count;R<G;R++)m.fromBufferAttribute(F,R),m.applyMatrix4(C.matrixWorld),x.setFloat32(w,m.x,A.littleEndian),w+=4,x.setFloat32(w,m.y,A.littleEndian),w+=4,x.setFloat32(w,m.z,A.littleEndian),w+=4,a===!0&&(T!=null?(m.fromBufferAttribute(T,R),m.applyMatrix3(g).normalize(),x.setFloat32(w,m.x,A.littleEndian),w+=4,x.setFloat32(w,m.y,A.littleEndian),w+=4,x.setFloat32(w,m.z,A.littleEndian),w+=4):(x.setFloat32(w,0,A.littleEndian),w+=4,x.setFloat32(w,0,A.littleEndian),w+=4,x.setFloat32(w,0,A.littleEndian),w+=4)),l===!0&&(L!=null?(x.setFloat32(w,L.getX(R),A.littleEndian),w+=4,x.setFloat32(w,L.getY(R),A.littleEndian),w+=4):(x.setFloat32(w,0,A.littleEndian),w+=4,x.setFloat32(w,0,A.littleEndian),w+=4)),o===!0&&(I!=null?(h.fromBufferAttribute(I,R),qe.workingToColorSpace(h,zt),x.setUint8(w,Math.floor(h.r*255)),w+=1,x.setUint8(w,Math.floor(h.g*255)),w+=1,x.setUint8(w,Math.floor(h.b*255)),w+=1):(x.setUint8(w,255),w+=1,x.setUint8(w,255),w+=1,x.setUint8(w,255),w+=1));if(n===!0)if(H!==null)for(let R=0,G=H.count;R<G;R+=3)x.setUint8(M,3),M+=1,x.setUint32(M,H.getX(R+0)+S,A.littleEndian),M+=p,x.setUint32(M,H.getX(R+1)+S,A.littleEndian),M+=p,x.setUint32(M,H.getX(R+2)+S,A.littleEndian),M+=p;else for(let R=0,G=F.count;R<G;R+=3)x.setUint8(M,3),M+=1,x.setUint32(M,S+R,A.littleEndian),M+=p,x.setUint32(M,S+R+1,A.littleEndian),M+=p,x.setUint32(M,S+R+2,A.littleEndian),M+=p;S+=F.count}),d=x.buffer}else{let B=0,v="",y="";r(function(x,w){const M=w.getAttribute("position"),S=w.getAttribute("normal"),C=w.getAttribute("uv"),_=w.getAttribute("color"),F=w.getIndex();g.getNormalMatrix(x.matrixWorld);for(let T=0,L=M.count;T<L;T++){m.fromBufferAttribute(M,T),m.applyMatrix4(x.matrixWorld);let I=m.x+" "+m.y+" "+m.z;a===!0&&(S!=null?(m.fromBufferAttribute(S,T),m.applyMatrix3(g).normalize(),I+=" "+m.x+" "+m.y+" "+m.z):I+=" 0 0 0"),l===!0&&(C!=null?I+=" "+C.getX(T)+" "+C.getY(T):I+=" 0 0"),o===!0&&(_!=null?(h.fromBufferAttribute(_,T),qe.workingToColorSpace(h,zt),I+=" "+Math.floor(h.r*255)+" "+Math.floor(h.g*255)+" "+Math.floor(h.b*255)):I+=" 255 255 255"),v+=I+`
`}if(n===!0){if(F!==null)for(let T=0,L=F.count;T<L;T+=3)y+=`3 ${F.getX(T+0)+B}`,y+=` ${F.getX(T+1)+B}`,y+=` ${F.getX(T+2)+B}
`;else for(let T=0,L=M.count;T<L;T+=3)y+=`3 ${B+T} ${B+T+1} ${B+T+2}
`;u+=F?F.count/3:M.count/3}B+=M.count}),d=`${f}${v}${n?`${y}
`:`
`}`}return typeof t=="function"&&requestAnimationFrame(()=>t(d)),d}}function Wp(i,e=!1){const t=i[0].index!==null,A=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},n={},a=i[0].morphTargetsRelative,o=new uA;let l=0;for(let c=0;c<i.length;++c){const u=i[c];let h=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!A.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(u.attributes[p]),h++}if(h!==A.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;n[p]===void 0&&(n[p]=[]),n[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;o.addGroup(l,p,c),l+=p}}if(t){let c=0;const u=[];for(let h=0;h<i.length;++h){const p=i[h].index;for(let f=0;f<p.count;++f)u.push(p.getX(f)+c);c+=i[h].attributes.position.count}o.setIndex(u)}for(const c in s){const u=Ou(s[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;o.setAttribute(c,u)}for(const c in n){const u=n[c][0].length;if(u===0)break;o.morphAttributes=o.morphAttributes||{},o.morphAttributes[c]=[];for(let h=0;h<u;++h){const p=[];for(let m=0;m<n[c].length;++m)p.push(n[c][m][h]);const f=Ou(p);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;o.morphAttributes[c].push(f)}}return o}function Ou(i){let e,t,A,r=-1,s=0;for(let l=0;l<i.length;++l){const c=i[l];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(A===void 0&&(A=c.normalized),A!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=c.gpuType),r!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.count*t}const n=new e(s),a=new hA(n,t,A);let o=0;for(let l=0;l<i.length;++l){const c=i[l];if(c.isInterleavedBufferAttribute){const u=o/t;for(let h=0,p=c.count;h<p;h++)for(let f=0;f<t;f++){const m=c.getComponent(h,f);a.setComponent(h+u,f,m)}}else n.set(c.array,o);o+=c.count*t}return r!==void 0&&(a.gpuType=r),a}var fc=function(i,e){return fc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,A){t.__proto__=A}||function(t,A){for(var r in A)Object.prototype.hasOwnProperty.call(A,r)&&(t[r]=A[r])},fc(i,e)};function NA(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");fc(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var gc=function(){return gc=Object.assign||function(i){for(var e,t=1,A=arguments.length;t<A;t++){e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=e[r])}return i},gc.apply(this,arguments)};function $t(i,e,t,A){function r(s){return s instanceof t?s:new t(function(n){n(s)})}return new(t||(t=Promise))(function(s,n){function a(c){try{l(A.next(c))}catch(u){n(u)}}function o(c){try{l(A.throw(c))}catch(u){n(u)}}function l(c){c.done?s(c.value):r(c.value).then(a,o)}l((A=A.apply(i,[])).next())})}function Yt(i,e){var t={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},A,r,s,n;return n={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(n[Symbol.iterator]=function(){return this}),n;function a(l){return function(c){return o([l,c])}}function o(l){if(A)throw new TypeError("Generator is already executing.");for(;t;)try{if(A=1,r&&(s=l[0]&2?r.return:l[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,l[1])).done)return s;switch(r=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,r=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(s=t.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){t.label=l[1];break}if(l[0]===6&&t.label<s[1]){t.label=s[1],s=l;break}if(s&&t.label<s[2]){t.label=s[2],t.ops.push(l);break}s[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(i,t)}catch(c){l=[6,c],r=0}finally{A=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function On(i,e,t){if(arguments.length===2)for(var A=0,r=e.length,s;A<r;A++)(s||!(A in e))&&(s||(s=Array.prototype.slice.call(e,0,A)),s[A]=e[A]);return i.concat(s||e)}var xi=(function(){function i(e,t,A,r){this.left=e,this.top=t,this.width=A,this.height=r}return i.prototype.add=function(e,t,A,r){return new i(this.left+e,this.top+t,this.width+A,this.height+r)},i.fromClientRect=function(e,t){return new i(t.left+e.windowBounds.left,t.top+e.windowBounds.top,t.width,t.height)},i.fromDOMRectList=function(e,t){var A=Array.from(t).find(function(r){return r.width!==0});return A?new i(A.left+e.windowBounds.left,A.top+e.windowBounds.top,A.width,A.height):i.EMPTY},i.EMPTY=new i(0,0,0,0),i})(),Za=function(i,e){return xi.fromClientRect(i,e.getBoundingClientRect())},Qy=function(i){var e=i.body,t=i.documentElement;if(!e||!t)throw new Error("Unable to get document size");var A=Math.max(Math.max(e.scrollWidth,t.scrollWidth),Math.max(e.offsetWidth,t.offsetWidth),Math.max(e.clientWidth,t.clientWidth)),r=Math.max(Math.max(e.scrollHeight,t.scrollHeight),Math.max(e.offsetHeight,t.offsetHeight),Math.max(e.clientHeight,t.clientHeight));return new xi(0,0,A,r)},$a=function(i){for(var e=[],t=0,A=i.length;t<A;){var r=i.charCodeAt(t++);if(r>=55296&&r<=56319&&t<A){var s=i.charCodeAt(t++);(s&64512)===56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),t--)}else e.push(r)}return e},xt=function(){for(var i=[],e=0;e<arguments.length;e++)i[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,i);var t=i.length;if(!t)return"";for(var A=[],r=-1,s="";++r<t;){var n=i[r];n<=65535?A.push(n):(n-=65536,A.push((n>>10)+55296,n%1024+56320)),(r+1===t||A.length>16384)&&(s+=String.fromCharCode.apply(String,A),A.length=0)}return s},ku="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ly=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var kn=0;kn<ku.length;kn++)Ly[ku.charCodeAt(kn)]=kn;var Vu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Fs=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Vn=0;Vn<Vu.length;Vn++)Fs[Vu.charCodeAt(Vn)]=Vn;var Iy=function(i){var e=i.length*.75,t=i.length,A,r=0,s,n,a,o;i[i.length-1]==="="&&(e--,i[i.length-2]==="="&&e--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(e):new Array(e),c=Array.isArray(l)?l:new Uint8Array(l);for(A=0;A<t;A+=4)s=Fs[i.charCodeAt(A)],n=Fs[i.charCodeAt(A+1)],a=Fs[i.charCodeAt(A+2)],o=Fs[i.charCodeAt(A+3)],c[r++]=s<<2|n>>4,c[r++]=(n&15)<<4|a>>2,c[r++]=(a&3)<<6|o&63;return l},Ry=function(i){for(var e=i.length,t=[],A=0;A<e;A+=2)t.push(i[A+1]<<8|i[A]);return t},Dy=function(i){for(var e=i.length,t=[],A=0;A<e;A+=4)t.push(i[A+3]<<24|i[A+2]<<16|i[A+1]<<8|i[A]);return t},cr=5,lh=11,Jo=2,Py=lh-cr,Xp=65536>>cr,Hy=1<<cr,Zo=Hy-1,Ny=1024>>cr,Oy=Xp+Ny,ky=Oy,Vy=32,zy=ky+Vy,Gy=65536>>lh,Ky=1<<Py,Wy=Ky-1,zu=function(i,e,t){return i.slice?i.slice(e,t):new Uint16Array(Array.prototype.slice.call(i,e,t))},Xy=function(i,e,t){return i.slice?i.slice(e,t):new Uint32Array(Array.prototype.slice.call(i,e,t))},Yy=function(i,e){var t=Iy(i),A=Array.isArray(t)?Dy(t):new Uint32Array(t),r=Array.isArray(t)?Ry(t):new Uint16Array(t),s=24,n=zu(r,s/2,A[4]/2),a=A[5]===2?zu(r,(s+A[4])/2):Xy(A,Math.ceil((s+A[4])/4));return new jy(A[0],A[1],A[2],A[3],n,a)},jy=(function(){function i(e,t,A,r,s,n){this.initialValue=e,this.errorValue=t,this.highStart=A,this.highValueIndex=r,this.index=s,this.data=n}return i.prototype.get=function(e){var t;if(e>=0){if(e<55296||e>56319&&e<=65535)return t=this.index[e>>cr],t=(t<<Jo)+(e&Zo),this.data[t];if(e<=65535)return t=this.index[Xp+(e-55296>>cr)],t=(t<<Jo)+(e&Zo),this.data[t];if(e<this.highStart)return t=zy-Gy+(e>>lh),t=this.index[t],t+=e>>cr&Wy,t=this.index[t],t=(t<<Jo)+(e&Zo),this.data[t];if(e<=1114111)return this.data[this.highValueIndex]}return this.errorValue},i})(),Gu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",qy=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var zn=0;zn<Gu.length;zn++)qy[Gu.charCodeAt(zn)]=zn;var Jy="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",Ku=50,Zy=1,Yp=2,jp=3,$y=4,e_=5,Wu=7,qp=8,Xu=9,Hi=10,mc=11,Yu=12,Bc=13,t_=14,Ts=15,wc=16,Gn=17,ys=18,A_=19,ju=20,vc=21,_s=22,$o=23,Tr=24,gA=25,Qs=26,Ls=27,Qr=28,i_=29,Gr=30,r_=31,Kn=32,Wn=33,yc=34,_c=35,xc=36,qs=37,Cc=38,va=39,ya=40,el=41,Jp=42,s_=43,n_=[9001,65288],Zp="!",Zt="×",Xn="÷",Ec=Yy(Jy),li=[Gr,xc],bc=[Zy,Yp,jp,e_],$p=[Hi,qp],qu=[Ls,Qs],a_=bc.concat($p),Ju=[Cc,va,ya,yc,_c],o_=[Ts,Bc],l_=function(i,e){e===void 0&&(e="strict");var t=[],A=[],r=[];return i.forEach(function(s,n){var a=Ec.get(s);if(a>Ku?(r.push(!0),a-=Ku):r.push(!1),["normal","auto","loose"].indexOf(e)!==-1&&[8208,8211,12316,12448].indexOf(s)!==-1)return A.push(n),t.push(wc);if(a===$y||a===mc){if(n===0)return A.push(n),t.push(Gr);var o=t[n-1];return a_.indexOf(o)===-1?(A.push(A[n-1]),t.push(o)):(A.push(n),t.push(Gr))}if(A.push(n),a===r_)return t.push(e==="strict"?vc:qs);if(a===Jp||a===i_)return t.push(Gr);if(a===s_)return s>=131072&&s<=196605||s>=196608&&s<=262141?t.push(qs):t.push(Gr);t.push(a)}),[A,t,r]},tl=function(i,e,t,A){var r=A[t];if(Array.isArray(i)?i.indexOf(r)!==-1:i===r)for(var s=t;s<=A.length;){s++;var n=A[s];if(n===e)return!0;if(n!==Hi)break}if(r===Hi)for(var s=t;s>0;){s--;var a=A[s];if(Array.isArray(i)?i.indexOf(a)!==-1:i===a)for(var o=t;o<=A.length;){o++;var n=A[o];if(n===e)return!0;if(n!==Hi)break}if(a!==Hi)break}return!1},Zu=function(i,e){for(var t=i;t>=0;){var A=e[t];if(A===Hi)t--;else return A}return 0},c_=function(i,e,t,A,r){if(t[A]===0)return Zt;var s=A-1;if(Array.isArray(r)&&r[s]===!0)return Zt;var n=s-1,a=s+1,o=e[s],l=n>=0?e[n]:0,c=e[a];if(o===Yp&&c===jp)return Zt;if(bc.indexOf(o)!==-1)return Zp;if(bc.indexOf(c)!==-1||$p.indexOf(c)!==-1)return Zt;if(Zu(s,e)===qp)return Xn;if(Ec.get(i[s])===mc||(o===Kn||o===Wn)&&Ec.get(i[a])===mc||o===Wu||c===Wu||o===Xu||[Hi,Bc,Ts].indexOf(o)===-1&&c===Xu||[Gn,ys,A_,Tr,Qr].indexOf(c)!==-1||Zu(s,e)===_s||tl($o,_s,s,e)||tl([Gn,ys],vc,s,e)||tl(Yu,Yu,s,e))return Zt;if(o===Hi)return Xn;if(o===$o||c===$o)return Zt;if(c===wc||o===wc)return Xn;if([Bc,Ts,vc].indexOf(c)!==-1||o===t_||l===xc&&o_.indexOf(o)!==-1||o===Qr&&c===xc||c===ju||li.indexOf(c)!==-1&&o===gA||li.indexOf(o)!==-1&&c===gA||o===Ls&&[qs,Kn,Wn].indexOf(c)!==-1||[qs,Kn,Wn].indexOf(o)!==-1&&c===Qs||li.indexOf(o)!==-1&&qu.indexOf(c)!==-1||qu.indexOf(o)!==-1&&li.indexOf(c)!==-1||[Ls,Qs].indexOf(o)!==-1&&(c===gA||[_s,Ts].indexOf(c)!==-1&&e[a+1]===gA)||[_s,Ts].indexOf(o)!==-1&&c===gA||o===gA&&[gA,Qr,Tr].indexOf(c)!==-1)return Zt;if([gA,Qr,Tr,Gn,ys].indexOf(c)!==-1)for(var u=s;u>=0;){var h=e[u];if(h===gA)return Zt;if([Qr,Tr].indexOf(h)!==-1)u--;else break}if([Ls,Qs].indexOf(c)!==-1)for(var u=[Gn,ys].indexOf(o)!==-1?n:s;u>=0;){var h=e[u];if(h===gA)return Zt;if([Qr,Tr].indexOf(h)!==-1)u--;else break}if(Cc===o&&[Cc,va,yc,_c].indexOf(c)!==-1||[va,yc].indexOf(o)!==-1&&[va,ya].indexOf(c)!==-1||[ya,_c].indexOf(o)!==-1&&c===ya||Ju.indexOf(o)!==-1&&[ju,Qs].indexOf(c)!==-1||Ju.indexOf(c)!==-1&&o===Ls||li.indexOf(o)!==-1&&li.indexOf(c)!==-1||o===Tr&&li.indexOf(c)!==-1||li.concat(gA).indexOf(o)!==-1&&c===_s&&n_.indexOf(i[a])===-1||li.concat(gA).indexOf(c)!==-1&&o===ys)return Zt;if(o===el&&c===el){for(var p=t[s],f=1;p>0&&(p--,e[p]===el);)f++;if(f%2!==0)return Zt}return o===Kn&&c===Wn?Zt:Xn},h_=function(i,e){e||(e={lineBreak:"normal",wordBreak:"normal"});var t=l_(i,e.lineBreak),A=t[0],r=t[1],s=t[2];(e.wordBreak==="break-all"||e.wordBreak==="break-word")&&(r=r.map(function(a){return[gA,Gr,Jp].indexOf(a)!==-1?qs:a}));var n=e.wordBreak==="keep-all"?s.map(function(a,o){return a&&i[o]>=19968&&i[o]<=40959}):void 0;return[A,r,n]},u_=(function(){function i(e,t,A,r){this.codePoints=e,this.required=t===Zp,this.start=A,this.end=r}return i.prototype.slice=function(){return xt.apply(void 0,this.codePoints.slice(this.start,this.end))},i})(),d_=function(i,e){var t=$a(i),A=h_(t,e),r=A[0],s=A[1],n=A[2],a=t.length,o=0,l=0;return{next:function(){if(l>=a)return{done:!0,value:null};for(var c=Zt;l<a&&(c=c_(t,s,r,++l,n))===Zt;);if(c!==Zt||l===a){var u=new u_(t,c,o,l);return o=l,{value:u,done:!1}}return{done:!0,value:null}}}},p_=1,f_=2,An=4,$u=8,Ta=10,ed=47,Hs=92,g_=9,m_=32,Yn=34,xs=61,B_=35,w_=36,v_=37,jn=39,qn=40,Cs=41,y_=95,lA=45,__=33,x_=60,C_=62,E_=64,b_=91,M_=93,U_=61,S_=123,Jn=63,F_=125,td=124,T_=126,Q_=128,Ad=65533,Al=42,or=43,L_=44,I_=58,R_=59,Js=46,D_=0,P_=8,H_=11,N_=14,O_=31,k_=127,kA=-1,ef=48,tf=97,Af=101,V_=102,z_=117,G_=122,rf=65,sf=69,nf=70,K_=85,W_=90,eA=function(i){return i>=ef&&i<=57},X_=function(i){return i>=55296&&i<=57343},Lr=function(i){return eA(i)||i>=rf&&i<=nf||i>=tf&&i<=V_},Y_=function(i){return i>=tf&&i<=G_},j_=function(i){return i>=rf&&i<=W_},q_=function(i){return Y_(i)||j_(i)},J_=function(i){return i>=Q_},Zn=function(i){return i===Ta||i===g_||i===m_},Qa=function(i){return q_(i)||J_(i)||i===y_},id=function(i){return Qa(i)||eA(i)||i===lA},Z_=function(i){return i>=D_&&i<=P_||i===H_||i>=N_&&i<=O_||i===k_},Ri=function(i,e){return i!==Hs?!1:e!==Ta},$n=function(i,e,t){return i===lA?Qa(e)||Ri(e,t):Qa(i)?!0:!!(i===Hs&&Ri(i,e))},il=function(i,e,t){return i===or||i===lA?eA(e)?!0:e===Js&&eA(t):eA(i===Js?e:i)},$_=function(i){var e=0,t=1;(i[e]===or||i[e]===lA)&&(i[e]===lA&&(t=-1),e++);for(var A=[];eA(i[e]);)A.push(i[e++]);var r=A.length?parseInt(xt.apply(void 0,A),10):0;i[e]===Js&&e++;for(var s=[];eA(i[e]);)s.push(i[e++]);var n=s.length,a=n?parseInt(xt.apply(void 0,s),10):0;(i[e]===sf||i[e]===Af)&&e++;var o=1;(i[e]===or||i[e]===lA)&&(i[e]===lA&&(o=-1),e++);for(var l=[];eA(i[e]);)l.push(i[e++]);var c=l.length?parseInt(xt.apply(void 0,l),10):0;return t*(r+a*Math.pow(10,-n))*Math.pow(10,o*c)},ex={type:2},tx={type:3},Ax={type:4},ix={type:13},rx={type:8},sx={type:21},nx={type:9},ax={type:10},ox={type:11},lx={type:12},cx={type:14},ea={type:23},hx={type:1},ux={type:25},dx={type:24},px={type:26},fx={type:27},gx={type:28},mx={type:29},Bx={type:31},Mc={type:32},af=(function(){function i(){this._value=[]}return i.prototype.write=function(e){this._value=this._value.concat($a(e))},i.prototype.read=function(){for(var e=[],t=this.consumeToken();t!==Mc;)e.push(t),t=this.consumeToken();return e},i.prototype.consumeToken=function(){var e=this.consumeCodePoint();switch(e){case Yn:return this.consumeStringToken(Yn);case B_:var t=this.peekCodePoint(0),A=this.peekCodePoint(1),r=this.peekCodePoint(2);if(id(t)||Ri(A,r)){var s=$n(t,A,r)?f_:p_,n=this.consumeName();return{type:5,value:n,flags:s}}break;case w_:if(this.peekCodePoint(0)===xs)return this.consumeCodePoint(),ix;break;case jn:return this.consumeStringToken(jn);case qn:return ex;case Cs:return tx;case Al:if(this.peekCodePoint(0)===xs)return this.consumeCodePoint(),cx;break;case or:if(il(e,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(e),this.consumeNumericToken();break;case L_:return Ax;case lA:var a=e,o=this.peekCodePoint(0),l=this.peekCodePoint(1);if(il(a,o,l))return this.reconsumeCodePoint(e),this.consumeNumericToken();if($n(a,o,l))return this.reconsumeCodePoint(e),this.consumeIdentLikeToken();if(o===lA&&l===C_)return this.consumeCodePoint(),this.consumeCodePoint(),dx;break;case Js:if(il(e,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(e),this.consumeNumericToken();break;case ed:if(this.peekCodePoint(0)===Al)for(this.consumeCodePoint();;){var c=this.consumeCodePoint();if(c===Al&&(c=this.consumeCodePoint(),c===ed))return this.consumeToken();if(c===kA)return this.consumeToken()}break;case I_:return px;case R_:return fx;case x_:if(this.peekCodePoint(0)===__&&this.peekCodePoint(1)===lA&&this.peekCodePoint(2)===lA)return this.consumeCodePoint(),this.consumeCodePoint(),ux;break;case E_:var u=this.peekCodePoint(0),h=this.peekCodePoint(1),p=this.peekCodePoint(2);if($n(u,h,p)){var n=this.consumeName();return{type:7,value:n}}break;case b_:return gx;case Hs:if(Ri(e,this.peekCodePoint(0)))return this.reconsumeCodePoint(e),this.consumeIdentLikeToken();break;case M_:return mx;case U_:if(this.peekCodePoint(0)===xs)return this.consumeCodePoint(),rx;break;case S_:return ox;case F_:return lx;case z_:case K_:var f=this.peekCodePoint(0),m=this.peekCodePoint(1);return f===or&&(Lr(m)||m===Jn)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(e),this.consumeIdentLikeToken();case td:if(this.peekCodePoint(0)===xs)return this.consumeCodePoint(),nx;if(this.peekCodePoint(0)===td)return this.consumeCodePoint(),sx;break;case T_:if(this.peekCodePoint(0)===xs)return this.consumeCodePoint(),ax;break;case kA:return Mc}return Zn(e)?(this.consumeWhiteSpace(),Bx):eA(e)?(this.reconsumeCodePoint(e),this.consumeNumericToken()):Qa(e)?(this.reconsumeCodePoint(e),this.consumeIdentLikeToken()):{type:6,value:xt(e)}},i.prototype.consumeCodePoint=function(){var e=this._value.shift();return typeof e>"u"?-1:e},i.prototype.reconsumeCodePoint=function(e){this._value.unshift(e)},i.prototype.peekCodePoint=function(e){return e>=this._value.length?-1:this._value[e]},i.prototype.consumeUnicodeRangeToken=function(){for(var e=[],t=this.consumeCodePoint();Lr(t)&&e.length<6;)e.push(t),t=this.consumeCodePoint();for(var A=!1;t===Jn&&e.length<6;)e.push(t),t=this.consumeCodePoint(),A=!0;if(A){var r=parseInt(xt.apply(void 0,e.map(function(o){return o===Jn?ef:o})),16),s=parseInt(xt.apply(void 0,e.map(function(o){return o===Jn?nf:o})),16);return{type:30,start:r,end:s}}var n=parseInt(xt.apply(void 0,e),16);if(this.peekCodePoint(0)===lA&&Lr(this.peekCodePoint(1))){this.consumeCodePoint(),t=this.consumeCodePoint();for(var a=[];Lr(t)&&a.length<6;)a.push(t),t=this.consumeCodePoint();var s=parseInt(xt.apply(void 0,a),16);return{type:30,start:n,end:s}}else return{type:30,start:n,end:n}},i.prototype.consumeIdentLikeToken=function(){var e=this.consumeName();return e.toLowerCase()==="url"&&this.peekCodePoint(0)===qn?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===qn?(this.consumeCodePoint(),{type:19,value:e}):{type:20,value:e}},i.prototype.consumeUrlToken=function(){var e=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===kA)return{type:22,value:""};var t=this.peekCodePoint(0);if(t===jn||t===Yn){var A=this.consumeStringToken(this.consumeCodePoint());return A.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===kA||this.peekCodePoint(0)===Cs)?(this.consumeCodePoint(),{type:22,value:A.value}):(this.consumeBadUrlRemnants(),ea)}for(;;){var r=this.consumeCodePoint();if(r===kA||r===Cs)return{type:22,value:xt.apply(void 0,e)};if(Zn(r))return this.consumeWhiteSpace(),this.peekCodePoint(0)===kA||this.peekCodePoint(0)===Cs?(this.consumeCodePoint(),{type:22,value:xt.apply(void 0,e)}):(this.consumeBadUrlRemnants(),ea);if(r===Yn||r===jn||r===qn||Z_(r))return this.consumeBadUrlRemnants(),ea;if(r===Hs)if(Ri(r,this.peekCodePoint(0)))e.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),ea;else e.push(r)}},i.prototype.consumeWhiteSpace=function(){for(;Zn(this.peekCodePoint(0));)this.consumeCodePoint()},i.prototype.consumeBadUrlRemnants=function(){for(;;){var e=this.consumeCodePoint();if(e===Cs||e===kA)return;Ri(e,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},i.prototype.consumeStringSlice=function(e){for(var t=5e4,A="";e>0;){var r=Math.min(t,e);A+=xt.apply(void 0,this._value.splice(0,r)),e-=r}return this._value.shift(),A},i.prototype.consumeStringToken=function(e){var t="",A=0;do{var r=this._value[A];if(r===kA||r===void 0||r===e)return t+=this.consumeStringSlice(A),{type:0,value:t};if(r===Ta)return this._value.splice(0,A),hx;if(r===Hs){var s=this._value[A+1];s!==kA&&s!==void 0&&(s===Ta?(t+=this.consumeStringSlice(A),A=-1,this._value.shift()):Ri(r,s)&&(t+=this.consumeStringSlice(A),t+=xt(this.consumeEscapedCodePoint()),A=-1))}A++}while(!0)},i.prototype.consumeNumber=function(){var e=[],t=An,A=this.peekCodePoint(0);for((A===or||A===lA)&&e.push(this.consumeCodePoint());eA(this.peekCodePoint(0));)e.push(this.consumeCodePoint());A=this.peekCodePoint(0);var r=this.peekCodePoint(1);if(A===Js&&eA(r))for(e.push(this.consumeCodePoint(),this.consumeCodePoint()),t=$u;eA(this.peekCodePoint(0));)e.push(this.consumeCodePoint());A=this.peekCodePoint(0),r=this.peekCodePoint(1);var s=this.peekCodePoint(2);if((A===sf||A===Af)&&((r===or||r===lA)&&eA(s)||eA(r)))for(e.push(this.consumeCodePoint(),this.consumeCodePoint()),t=$u;eA(this.peekCodePoint(0));)e.push(this.consumeCodePoint());return[$_(e),t]},i.prototype.consumeNumericToken=function(){var e=this.consumeNumber(),t=e[0],A=e[1],r=this.peekCodePoint(0),s=this.peekCodePoint(1),n=this.peekCodePoint(2);if($n(r,s,n)){var a=this.consumeName();return{type:15,number:t,flags:A,unit:a}}return r===v_?(this.consumeCodePoint(),{type:16,number:t,flags:A}):{type:17,number:t,flags:A}},i.prototype.consumeEscapedCodePoint=function(){var e=this.consumeCodePoint();if(Lr(e)){for(var t=xt(e);Lr(this.peekCodePoint(0))&&t.length<6;)t+=xt(this.consumeCodePoint());Zn(this.peekCodePoint(0))&&this.consumeCodePoint();var A=parseInt(t,16);return A===0||X_(A)||A>1114111?Ad:A}return e===kA?Ad:e},i.prototype.consumeName=function(){for(var e="";;){var t=this.consumeCodePoint();if(id(t))e+=xt(t);else if(Ri(t,this.peekCodePoint(0)))e+=xt(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(t),e}},i})(),of=(function(){function i(e){this._tokens=e}return i.create=function(e){var t=new af;return t.write(e),new i(t.read())},i.parseValue=function(e){return i.create(e).parseComponentValue()},i.parseValues=function(e){return i.create(e).parseComponentValues()},i.prototype.parseComponentValue=function(){for(var e=this.consumeToken();e.type===31;)e=this.consumeToken();if(e.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(e);var t=this.consumeComponentValue();do e=this.consumeToken();while(e.type===31);if(e.type===32)return t;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},i.prototype.parseComponentValues=function(){for(var e=[];;){var t=this.consumeComponentValue();if(t.type===32)return e;e.push(t),e.push()}},i.prototype.consumeComponentValue=function(){var e=this.consumeToken();switch(e.type){case 11:case 28:case 2:return this.consumeSimpleBlock(e.type);case 19:return this.consumeFunction(e)}return e},i.prototype.consumeSimpleBlock=function(e){for(var t={type:e,values:[]},A=this.consumeToken();;){if(A.type===32||vx(A,e))return t;this.reconsumeToken(A),t.values.push(this.consumeComponentValue()),A=this.consumeToken()}},i.prototype.consumeFunction=function(e){for(var t={name:e.value,values:[],type:18};;){var A=this.consumeToken();if(A.type===32||A.type===3)return t;this.reconsumeToken(A),t.values.push(this.consumeComponentValue())}},i.prototype.consumeToken=function(){var e=this._tokens.shift();return typeof e>"u"?Mc:e},i.prototype.reconsumeToken=function(e){this._tokens.unshift(e)},i})(),rn=function(i){return i.type===15},us=function(i){return i.type===17},at=function(i){return i.type===20},wx=function(i){return i.type===0},Uc=function(i,e){return at(i)&&i.value===e},lf=function(i){return i.type!==31},ss=function(i){return i.type!==31&&i.type!==4},ZA=function(i){var e=[],t=[];return i.forEach(function(A){if(A.type===4){if(t.length===0)throw new Error("Error parsing function args, zero tokens for arg");e.push(t),t=[];return}A.type!==31&&t.push(A)}),t.length&&e.push(t),e},vx=function(i,e){return e===11&&i.type===12||e===28&&i.type===29?!0:e===2&&i.type===3},Wi=function(i){return i.type===17||i.type===15},Mt=function(i){return i.type===16||Wi(i)},cf=function(i){return i.length>1?[i[0],i[1]]:[i[0]]},Gt={type:17,number:0,flags:An},ch={type:16,number:50,flags:An},Ni={type:16,number:100,flags:An},Is=function(i,e,t){var A=i[0],r=i[1];return[ut(A,e),ut(typeof r<"u"?r:A,t)]},ut=function(i,e){if(i.type===16)return i.number/100*e;if(rn(i))switch(i.unit){case"rem":case"em":return 16*i.number;case"px":default:return i.number}return i.number},hf="deg",uf="grad",df="rad",pf="turn",eo={name:"angle",parse:function(i,e){if(e.type===15)switch(e.unit){case hf:return Math.PI*e.number/180;case uf:return Math.PI/200*e.number;case df:return e.number;case pf:return Math.PI*2*e.number}throw new Error("Unsupported angle type")}},ff=function(i){return i.type===15&&(i.unit===hf||i.unit===uf||i.unit===df||i.unit===pf)},gf=function(i){var e=i.filter(at).map(function(t){return t.value}).join(" ");switch(e){case"to bottom right":case"to right bottom":case"left top":case"top left":return[Gt,Gt];case"to top":case"bottom":return bA(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[Gt,Ni];case"to right":case"left":return bA(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[Ni,Ni];case"to bottom":case"top":return bA(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[Ni,Gt];case"to left":case"right":return bA(270)}return 0},bA=function(i){return Math.PI*i/180},Vi={name:"color",parse:function(i,e){if(e.type===18){var t=yx[e.name];if(typeof t>"u")throw new Error('Attempting to parse an unsupported color function "'+e.name+'"');return t(i,e.values)}if(e.type===5){if(e.value.length===3){var A=e.value.substring(0,1),r=e.value.substring(1,2),s=e.value.substring(2,3);return Oi(parseInt(A+A,16),parseInt(r+r,16),parseInt(s+s,16),1)}if(e.value.length===4){var A=e.value.substring(0,1),r=e.value.substring(1,2),s=e.value.substring(2,3),n=e.value.substring(3,4);return Oi(parseInt(A+A,16),parseInt(r+r,16),parseInt(s+s,16),parseInt(n+n,16)/255)}if(e.value.length===6){var A=e.value.substring(0,2),r=e.value.substring(2,4),s=e.value.substring(4,6);return Oi(parseInt(A,16),parseInt(r,16),parseInt(s,16),1)}if(e.value.length===8){var A=e.value.substring(0,2),r=e.value.substring(2,4),s=e.value.substring(4,6),n=e.value.substring(6,8);return Oi(parseInt(A,16),parseInt(r,16),parseInt(s,16),parseInt(n,16)/255)}}if(e.type===20){var a=_i[e.value.toUpperCase()];if(typeof a<"u")return a}return _i.TRANSPARENT}},zi=function(i){return(255&i)===0},Dt=function(i){var e=255&i,t=255&i>>8,A=255&i>>16,r=255&i>>24;return e<255?"rgba("+r+","+A+","+t+","+e/255+")":"rgb("+r+","+A+","+t+")"},Oi=function(i,e,t,A){return(i<<24|e<<16|t<<8|Math.round(A*255)<<0)>>>0},rd=function(i,e){if(i.type===17)return i.number;if(i.type===16){var t=e===3?1:255;return e===3?i.number/100*t:Math.round(i.number/100*t)}return 0},sd=function(i,e){var t=e.filter(ss);if(t.length===3){var A=t.map(rd),r=A[0],s=A[1],n=A[2];return Oi(r,s,n,1)}if(t.length===4){var a=t.map(rd),r=a[0],s=a[1],n=a[2],o=a[3];return Oi(r,s,n,o)}return 0};function rl(i,e,t){return t<0&&(t+=1),t>=1&&(t-=1),t<1/6?(e-i)*t*6+i:t<1/2?e:t<2/3?(e-i)*6*(2/3-t)+i:i}var nd=function(i,e){var t=e.filter(ss),A=t[0],r=t[1],s=t[2],n=t[3],a=(A.type===17?bA(A.number):eo.parse(i,A))/(Math.PI*2),o=Mt(r)?r.number/100:0,l=Mt(s)?s.number/100:0,c=typeof n<"u"&&Mt(n)?ut(n,1):1;if(o===0)return Oi(l*255,l*255,l*255,1);var u=l<=.5?l*(o+1):l+o-l*o,h=l*2-u,p=rl(h,u,a+1/3),f=rl(h,u,a),m=rl(h,u,a-1/3);return Oi(p*255,f*255,m*255,c)},yx={hsl:nd,hsla:nd,rgb:sd,rgba:sd},Ns=function(i,e){return Vi.parse(i,of.create(e).parseComponentValue())},_i={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},_x={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(i,e){return e.map(function(t){if(at(t))switch(t.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},xx={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},to=function(i,e){var t=Vi.parse(i,e[0]),A=e[1];return A&&Mt(A)?{color:t,stop:A}:{color:t,stop:null}},ad=function(i,e){var t=i[0],A=i[i.length-1];t.stop===null&&(t.stop=Gt),A.stop===null&&(A.stop=Ni);for(var r=[],s=0,n=0;n<i.length;n++){var a=i[n].stop;if(a!==null){var o=ut(a,e);o>s?r.push(o):r.push(s),s=o}else r.push(null)}for(var l=null,n=0;n<r.length;n++){var c=r[n];if(c===null)l===null&&(l=n);else if(l!==null){for(var u=n-l,h=r[l-1],p=(c-h)/(u+1),f=1;f<=u;f++)r[l+f-1]=p*f;l=null}}return i.map(function(m,g){var d=m.color;return{color:d,stop:Math.max(Math.min(1,r[g]/e),0)}})},Cx=function(i,e,t){var A=e/2,r=t/2,s=ut(i[0],e)-A,n=r-ut(i[1],t);return(Math.atan2(n,s)+Math.PI*2)%(Math.PI*2)},Ex=function(i,e,t){var A=typeof i=="number"?i:Cx(i,e,t),r=Math.abs(e*Math.sin(A))+Math.abs(t*Math.cos(A)),s=e/2,n=t/2,a=r/2,o=Math.sin(A-Math.PI/2)*a,l=Math.cos(A-Math.PI/2)*a;return[r,s-l,s+l,n-o,n+o]},RA=function(i,e){return Math.sqrt(i*i+e*e)},od=function(i,e,t,A,r){var s=[[0,0],[0,e],[i,0],[i,e]];return s.reduce(function(n,a){var o=a[0],l=a[1],c=RA(t-o,A-l);return(r?c<n.optimumDistance:c>n.optimumDistance)?{optimumCorner:a,optimumDistance:c}:n},{optimumDistance:r?1/0:-1/0,optimumCorner:null}).optimumCorner},bx=function(i,e,t,A,r){var s=0,n=0;switch(i.size){case 0:i.shape===0?s=n=Math.min(Math.abs(e),Math.abs(e-A),Math.abs(t),Math.abs(t-r)):i.shape===1&&(s=Math.min(Math.abs(e),Math.abs(e-A)),n=Math.min(Math.abs(t),Math.abs(t-r)));break;case 2:if(i.shape===0)s=n=Math.min(RA(e,t),RA(e,t-r),RA(e-A,t),RA(e-A,t-r));else if(i.shape===1){var a=Math.min(Math.abs(t),Math.abs(t-r))/Math.min(Math.abs(e),Math.abs(e-A)),o=od(A,r,e,t,!0),l=o[0],c=o[1];s=RA(l-e,(c-t)/a),n=a*s}break;case 1:i.shape===0?s=n=Math.max(Math.abs(e),Math.abs(e-A),Math.abs(t),Math.abs(t-r)):i.shape===1&&(s=Math.max(Math.abs(e),Math.abs(e-A)),n=Math.max(Math.abs(t),Math.abs(t-r)));break;case 3:if(i.shape===0)s=n=Math.max(RA(e,t),RA(e,t-r),RA(e-A,t),RA(e-A,t-r));else if(i.shape===1){var a=Math.max(Math.abs(t),Math.abs(t-r))/Math.max(Math.abs(e),Math.abs(e-A)),u=od(A,r,e,t,!1),l=u[0],c=u[1];s=RA(l-e,(c-t)/a),n=a*s}break}return Array.isArray(i.size)&&(s=ut(i.size[0],A),n=i.size.length===2?ut(i.size[1],r):s),[s,n]},Mx=function(i,e){var t=bA(180),A=[];return ZA(e).forEach(function(r,s){if(s===0){var n=r[0];if(n.type===20&&n.value==="to"){t=gf(r);return}else if(ff(n)){t=eo.parse(i,n);return}}var a=to(i,r);A.push(a)}),{angle:t,stops:A,type:1}},ta=function(i,e){var t=bA(180),A=[];return ZA(e).forEach(function(r,s){if(s===0){var n=r[0];if(n.type===20&&["top","left","right","bottom"].indexOf(n.value)!==-1){t=gf(r);return}else if(ff(n)){t=(eo.parse(i,n)+bA(270))%bA(360);return}}var a=to(i,r);A.push(a)}),{angle:t,stops:A,type:1}},Ux=function(i,e){var t=bA(180),A=[],r=1,s=0,n=3,a=[];return ZA(e).forEach(function(o,l){var c=o[0];if(l===0){if(at(c)&&c.value==="linear"){r=1;return}else if(at(c)&&c.value==="radial"){r=2;return}}if(c.type===18){if(c.name==="from"){var u=Vi.parse(i,c.values[0]);A.push({stop:Gt,color:u})}else if(c.name==="to"){var u=Vi.parse(i,c.values[0]);A.push({stop:Ni,color:u})}else if(c.name==="color-stop"){var h=c.values.filter(ss);if(h.length===2){var u=Vi.parse(i,h[1]),p=h[0];us(p)&&A.push({stop:{type:16,number:p.number*100,flags:p.flags},color:u})}}}}),r===1?{angle:(t+bA(180))%bA(360),stops:A,type:r}:{size:n,shape:s,stops:A,position:a,type:r}},mf="closest-side",Bf="farthest-side",wf="closest-corner",vf="farthest-corner",yf="circle",_f="ellipse",xf="cover",Cf="contain",Sx=function(i,e){var t=0,A=3,r=[],s=[];return ZA(e).forEach(function(n,a){var o=!0;if(a===0){var l=!1;o=n.reduce(function(u,h){if(l)if(at(h))switch(h.value){case"center":return s.push(ch),u;case"top":case"left":return s.push(Gt),u;case"right":case"bottom":return s.push(Ni),u}else(Mt(h)||Wi(h))&&s.push(h);else if(at(h))switch(h.value){case yf:return t=0,!1;case _f:return t=1,!1;case"at":return l=!0,!1;case mf:return A=0,!1;case xf:case Bf:return A=1,!1;case Cf:case wf:return A=2,!1;case vf:return A=3,!1}else if(Wi(h)||Mt(h))return Array.isArray(A)||(A=[]),A.push(h),!1;return u},o)}if(o){var c=to(i,n);r.push(c)}}),{size:A,shape:t,stops:r,position:s,type:2}},Aa=function(i,e){var t=0,A=3,r=[],s=[];return ZA(e).forEach(function(n,a){var o=!0;if(a===0?o=n.reduce(function(c,u){if(at(u))switch(u.value){case"center":return s.push(ch),!1;case"top":case"left":return s.push(Gt),!1;case"right":case"bottom":return s.push(Ni),!1}else if(Mt(u)||Wi(u))return s.push(u),!1;return c},o):a===1&&(o=n.reduce(function(c,u){if(at(u))switch(u.value){case yf:return t=0,!1;case _f:return t=1,!1;case Cf:case mf:return A=0,!1;case Bf:return A=1,!1;case wf:return A=2,!1;case xf:case vf:return A=3,!1}else if(Wi(u)||Mt(u))return Array.isArray(A)||(A=[]),A.push(u),!1;return c},o)),o){var l=to(i,n);r.push(l)}}),{size:A,shape:t,stops:r,position:s,type:2}},Fx=function(i){return i.type===1},Tx=function(i){return i.type===2},hh={name:"image",parse:function(i,e){if(e.type===22){var t={url:e.value,type:0};return i.cache.addImage(e.value),t}if(e.type===18){var A=Ef[e.name];if(typeof A>"u")throw new Error('Attempting to parse an unsupported image function "'+e.name+'"');return A(i,e.values)}throw new Error("Unsupported image type "+e.type)}};function Qx(i){return!(i.type===20&&i.value==="none")&&(i.type!==18||!!Ef[i.name])}var Ef={"linear-gradient":Mx,"-moz-linear-gradient":ta,"-ms-linear-gradient":ta,"-o-linear-gradient":ta,"-webkit-linear-gradient":ta,"radial-gradient":Sx,"-moz-radial-gradient":Aa,"-ms-radial-gradient":Aa,"-o-radial-gradient":Aa,"-webkit-radial-gradient":Aa,"-webkit-gradient":Ux},Lx={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(i,e){if(e.length===0)return[];var t=e[0];return t.type===20&&t.value==="none"?[]:e.filter(function(A){return ss(A)&&Qx(A)}).map(function(A){return hh.parse(i,A)})}},Ix={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(i,e){return e.map(function(t){if(at(t))switch(t.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},Rx={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(i,e){return ZA(e).map(function(t){return t.filter(Mt)}).map(cf)}},Dx={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(i,e){return ZA(e).map(function(t){return t.filter(at).map(function(A){return A.value}).join(" ")}).map(Px)}},Px=function(i){switch(i){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;case"repeat":default:return 0}},Jr;(function(i){i.AUTO="auto",i.CONTAIN="contain",i.COVER="cover"})(Jr||(Jr={}));var Hx={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(i,e){return ZA(e).map(function(t){return t.filter(Nx)})}},Nx=function(i){return at(i)||Mt(i)},Ao=function(i){return{name:"border-"+i+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},Ox=Ao("top"),kx=Ao("right"),Vx=Ao("bottom"),zx=Ao("left"),io=function(i){return{name:"border-radius-"+i,initialValue:"0 0",prefix:!1,type:1,parse:function(e,t){return cf(t.filter(Mt))}}},Gx=io("top-left"),Kx=io("top-right"),Wx=io("bottom-right"),Xx=io("bottom-left"),ro=function(i){return{name:"border-"+i+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(e,t){switch(t){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},Yx=ro("top"),jx=ro("right"),qx=ro("bottom"),Jx=ro("left"),so=function(i){return{name:"border-"+i+"-width",initialValue:"0",type:0,prefix:!1,parse:function(e,t){return rn(t)?t.number:0}}},Zx=so("top"),$x=so("right"),eC=so("bottom"),tC=so("left"),AC={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},iC={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(i,e){switch(e){case"rtl":return 1;case"ltr":default:return 0}}},rC={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(i,e){return e.filter(at).reduce(function(t,A){return t|sC(A.value)},0)}},sC=function(i){switch(i){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},nC={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(i,e){switch(e){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},aC={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(i,e){return e.type===20&&e.value==="normal"?0:e.type===17||e.type===15?e.number:0}},La;(function(i){i.NORMAL="normal",i.STRICT="strict"})(La||(La={}));var oC={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(i,e){switch(e){case"strict":return La.STRICT;case"normal":default:return La.NORMAL}}},lC={name:"line-height",initialValue:"normal",prefix:!1,type:4},ld=function(i,e){return at(i)&&i.value==="normal"?1.2*e:i.type===17?e*i.number:Mt(i)?ut(i,e):e},cC={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(i,e){return e.type===20&&e.value==="none"?null:hh.parse(i,e)}},hC={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(i,e){switch(e){case"inside":return 0;case"outside":default:return 1}}},Sc={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(i,e){switch(e){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;case"none":default:return-1}}},no=function(i){return{name:"margin-"+i,initialValue:"0",prefix:!1,type:4}},uC=no("top"),dC=no("right"),pC=no("bottom"),fC=no("left"),gC={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(i,e){return e.filter(at).map(function(t){switch(t.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;case"visible":default:return 0}})}},mC={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(i,e){switch(e){case"break-word":return"break-word";case"normal":default:return"normal"}}},ao=function(i){return{name:"padding-"+i,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},BC=ao("top"),wC=ao("right"),vC=ao("bottom"),yC=ao("left"),_C={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(i,e){switch(e){case"right":return 2;case"center":case"justify":return 1;case"left":default:return 0}}},xC={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(i,e){switch(e){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},CC={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(i,e){return e.length===1&&Uc(e[0],"none")?[]:ZA(e).map(function(t){for(var A={color:_i.TRANSPARENT,offsetX:Gt,offsetY:Gt,blur:Gt},r=0,s=0;s<t.length;s++){var n=t[s];Wi(n)?(r===0?A.offsetX=n:r===1?A.offsetY=n:A.blur=n,r++):A.color=Vi.parse(i,n)}return A})}},EC={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(i,e){switch(e){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},bC={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(i,e){if(e.type===20&&e.value==="none")return null;if(e.type===18){var t=SC[e.name];if(typeof t>"u")throw new Error('Attempting to parse an unsupported transform function "'+e.name+'"');return t(e.values)}return null}},MC=function(i){var e=i.filter(function(t){return t.type===17}).map(function(t){return t.number});return e.length===6?e:null},UC=function(i){var e=i.filter(function(o){return o.type===17}).map(function(o){return o.number}),t=e[0],A=e[1];e[2],e[3];var r=e[4],s=e[5];e[6],e[7],e[8],e[9],e[10],e[11];var n=e[12],a=e[13];return e[14],e[15],e.length===16?[t,A,r,s,n,a]:null},SC={matrix:MC,matrix3d:UC},cd={type:16,number:50,flags:An},FC=[cd,cd],TC={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(i,e){var t=e.filter(Mt);return t.length!==2?FC:[t[0],t[1]]}},QC={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(i,e){switch(e){case"hidden":return 1;case"collapse":return 2;case"visible":default:return 0}}},Os;(function(i){i.NORMAL="normal",i.BREAK_ALL="break-all",i.KEEP_ALL="keep-all"})(Os||(Os={}));var LC={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(i,e){switch(e){case"break-all":return Os.BREAK_ALL;case"keep-all":return Os.KEEP_ALL;case"normal":default:return Os.NORMAL}}},IC={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(i,e){if(e.type===20)return{auto:!0,order:0};if(us(e))return{auto:!1,order:e.number};throw new Error("Invalid z-index number parsed")}},bf={name:"time",parse:function(i,e){if(e.type===15)switch(e.unit.toLowerCase()){case"s":return 1e3*e.number;case"ms":return e.number}throw new Error("Unsupported time type")}},RC={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(i,e){return us(e)?e.number:1}},DC={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},PC={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(i,e){return e.filter(at).map(function(t){switch(t.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(t){return t!==0})}},HC={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(i,e){var t=[],A=[];return e.forEach(function(r){switch(r.type){case 20:case 0:t.push(r.value);break;case 17:t.push(r.number.toString());break;case 4:A.push(t.join(" ")),t.length=0;break}}),t.length&&A.push(t.join(" ")),A.map(function(r){return r.indexOf(" ")===-1?r:"'"+r+"'"})}},NC={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},OC={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(i,e){if(us(e))return e.number;if(at(e))switch(e.value){case"bold":return 700;case"normal":default:return 400}return 400}},kC={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(i,e){return e.filter(at).map(function(t){return t.value})}},VC={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(i,e){switch(e){case"oblique":return"oblique";case"italic":return"italic";case"normal":default:return"normal"}}},Tt=function(i,e){return(i&e)!==0},zC={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(i,e){if(e.length===0)return[];var t=e[0];return t.type===20&&t.value==="none"?[]:e}},GC={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(i,e){if(e.length===0)return null;var t=e[0];if(t.type===20&&t.value==="none")return null;for(var A=[],r=e.filter(lf),s=0;s<r.length;s++){var n=r[s],a=r[s+1];if(n.type===20){var o=a&&us(a)?a.number:1;A.push({counter:n.value,increment:o})}}return A}},KC={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(i,e){if(e.length===0)return[];for(var t=[],A=e.filter(lf),r=0;r<A.length;r++){var s=A[r],n=A[r+1];if(at(s)&&s.value!=="none"){var a=n&&us(n)?n.number:0;t.push({counter:s.value,reset:a})}}return t}},WC={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(i,e){return e.filter(rn).map(function(t){return bf.parse(i,t)})}},XC={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(i,e){if(e.length===0)return null;var t=e[0];if(t.type===20&&t.value==="none")return null;var A=[],r=e.filter(wx);if(r.length%2!==0)return null;for(var s=0;s<r.length;s+=2){var n=r[s].value,a=r[s+1].value;A.push({open:n,close:a})}return A}},hd=function(i,e,t){if(!i)return"";var A=i[Math.min(e,i.length-1)];return A?t?A.open:A.close:""},YC={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(i,e){return e.length===1&&Uc(e[0],"none")?[]:ZA(e).map(function(t){for(var A={color:255,offsetX:Gt,offsetY:Gt,blur:Gt,spread:Gt,inset:!1},r=0,s=0;s<t.length;s++){var n=t[s];Uc(n,"inset")?A.inset=!0:Wi(n)?(r===0?A.offsetX=n:r===1?A.offsetY=n:r===2?A.blur=n:A.spread=n,r++):A.color=Vi.parse(i,n)}return A})}},jC={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(i,e){var t=[0,1,2],A=[];return e.filter(at).forEach(function(r){switch(r.value){case"stroke":A.push(1);break;case"fill":A.push(0);break;case"markers":A.push(2);break}}),t.forEach(function(r){A.indexOf(r)===-1&&A.push(r)}),A}},qC={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},JC={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(i,e){return rn(e)?e.number:0}},ZC=(function(){function i(e,t){var A,r;this.animationDuration=ue(e,WC,t.animationDuration),this.backgroundClip=ue(e,_x,t.backgroundClip),this.backgroundColor=ue(e,xx,t.backgroundColor),this.backgroundImage=ue(e,Lx,t.backgroundImage),this.backgroundOrigin=ue(e,Ix,t.backgroundOrigin),this.backgroundPosition=ue(e,Rx,t.backgroundPosition),this.backgroundRepeat=ue(e,Dx,t.backgroundRepeat),this.backgroundSize=ue(e,Hx,t.backgroundSize),this.borderTopColor=ue(e,Ox,t.borderTopColor),this.borderRightColor=ue(e,kx,t.borderRightColor),this.borderBottomColor=ue(e,Vx,t.borderBottomColor),this.borderLeftColor=ue(e,zx,t.borderLeftColor),this.borderTopLeftRadius=ue(e,Gx,t.borderTopLeftRadius),this.borderTopRightRadius=ue(e,Kx,t.borderTopRightRadius),this.borderBottomRightRadius=ue(e,Wx,t.borderBottomRightRadius),this.borderBottomLeftRadius=ue(e,Xx,t.borderBottomLeftRadius),this.borderTopStyle=ue(e,Yx,t.borderTopStyle),this.borderRightStyle=ue(e,jx,t.borderRightStyle),this.borderBottomStyle=ue(e,qx,t.borderBottomStyle),this.borderLeftStyle=ue(e,Jx,t.borderLeftStyle),this.borderTopWidth=ue(e,Zx,t.borderTopWidth),this.borderRightWidth=ue(e,$x,t.borderRightWidth),this.borderBottomWidth=ue(e,eC,t.borderBottomWidth),this.borderLeftWidth=ue(e,tC,t.borderLeftWidth),this.boxShadow=ue(e,YC,t.boxShadow),this.color=ue(e,AC,t.color),this.direction=ue(e,iC,t.direction),this.display=ue(e,rC,t.display),this.float=ue(e,nC,t.cssFloat),this.fontFamily=ue(e,HC,t.fontFamily),this.fontSize=ue(e,NC,t.fontSize),this.fontStyle=ue(e,VC,t.fontStyle),this.fontVariant=ue(e,kC,t.fontVariant),this.fontWeight=ue(e,OC,t.fontWeight),this.letterSpacing=ue(e,aC,t.letterSpacing),this.lineBreak=ue(e,oC,t.lineBreak),this.lineHeight=ue(e,lC,t.lineHeight),this.listStyleImage=ue(e,cC,t.listStyleImage),this.listStylePosition=ue(e,hC,t.listStylePosition),this.listStyleType=ue(e,Sc,t.listStyleType),this.marginTop=ue(e,uC,t.marginTop),this.marginRight=ue(e,dC,t.marginRight),this.marginBottom=ue(e,pC,t.marginBottom),this.marginLeft=ue(e,fC,t.marginLeft),this.opacity=ue(e,RC,t.opacity);var s=ue(e,gC,t.overflow);this.overflowX=s[0],this.overflowY=s[s.length>1?1:0],this.overflowWrap=ue(e,mC,t.overflowWrap),this.paddingTop=ue(e,BC,t.paddingTop),this.paddingRight=ue(e,wC,t.paddingRight),this.paddingBottom=ue(e,vC,t.paddingBottom),this.paddingLeft=ue(e,yC,t.paddingLeft),this.paintOrder=ue(e,jC,t.paintOrder),this.position=ue(e,xC,t.position),this.textAlign=ue(e,_C,t.textAlign),this.textDecorationColor=ue(e,DC,(A=t.textDecorationColor)!==null&&A!==void 0?A:t.color),this.textDecorationLine=ue(e,PC,(r=t.textDecorationLine)!==null&&r!==void 0?r:t.textDecoration),this.textShadow=ue(e,CC,t.textShadow),this.textTransform=ue(e,EC,t.textTransform),this.transform=ue(e,bC,t.transform),this.transformOrigin=ue(e,TC,t.transformOrigin),this.visibility=ue(e,QC,t.visibility),this.webkitTextStrokeColor=ue(e,qC,t.webkitTextStrokeColor),this.webkitTextStrokeWidth=ue(e,JC,t.webkitTextStrokeWidth),this.wordBreak=ue(e,LC,t.wordBreak),this.zIndex=ue(e,IC,t.zIndex)}return i.prototype.isVisible=function(){return this.display>0&&this.opacity>0&&this.visibility===0},i.prototype.isTransparent=function(){return zi(this.backgroundColor)},i.prototype.isTransformed=function(){return this.transform!==null},i.prototype.isPositioned=function(){return this.position!==0},i.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},i.prototype.isFloating=function(){return this.float!==0},i.prototype.isInlineLevel=function(){return Tt(this.display,4)||Tt(this.display,33554432)||Tt(this.display,268435456)||Tt(this.display,536870912)||Tt(this.display,67108864)||Tt(this.display,134217728)},i})(),$C=(function(){function i(e,t){this.content=ue(e,zC,t.content),this.quotes=ue(e,XC,t.quotes)}return i})(),ud=(function(){function i(e,t){this.counterIncrement=ue(e,GC,t.counterIncrement),this.counterReset=ue(e,KC,t.counterReset)}return i})(),ue=function(i,e,t){var A=new af,r=t!==null&&typeof t<"u"?t.toString():e.initialValue;A.write(r);var s=new of(A.read());switch(e.type){case 2:var n=s.parseComponentValue();return e.parse(i,at(n)?n.value:e.initialValue);case 0:return e.parse(i,s.parseComponentValue());case 1:return e.parse(i,s.parseComponentValues());case 4:return s.parseComponentValue();case 3:switch(e.format){case"angle":return eo.parse(i,s.parseComponentValue());case"color":return Vi.parse(i,s.parseComponentValue());case"image":return hh.parse(i,s.parseComponentValue());case"length":var a=s.parseComponentValue();return Wi(a)?a:Gt;case"length-percentage":var o=s.parseComponentValue();return Mt(o)?o:Gt;case"time":return bf.parse(i,s.parseComponentValue())}break}},eE="data-html2canvas-debug",tE=function(i){var e=i.getAttribute(eE);switch(e){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},Fc=function(i,e){var t=tE(i);return t===1||e===t},$A=(function(){function i(e,t){if(this.context=e,this.textNodes=[],this.elements=[],this.flags=0,Fc(t,3))debugger;this.styles=new ZC(e,window.getComputedStyle(t,null)),Lc(t)&&(this.styles.animationDuration.some(function(A){return A>0})&&(t.style.animationDuration="0s"),this.styles.transform!==null&&(t.style.transform="none")),this.bounds=Za(this.context,t),Fc(t,4)&&(this.flags|=16)}return i})(),AE="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",dd="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Rs=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ia=0;ia<dd.length;ia++)Rs[dd.charCodeAt(ia)]=ia;var iE=function(i){var e=i.length*.75,t=i.length,A,r=0,s,n,a,o;i[i.length-1]==="="&&(e--,i[i.length-2]==="="&&e--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(e):new Array(e),c=Array.isArray(l)?l:new Uint8Array(l);for(A=0;A<t;A+=4)s=Rs[i.charCodeAt(A)],n=Rs[i.charCodeAt(A+1)],a=Rs[i.charCodeAt(A+2)],o=Rs[i.charCodeAt(A+3)],c[r++]=s<<2|n>>4,c[r++]=(n&15)<<4|a>>2,c[r++]=(a&3)<<6|o&63;return l},rE=function(i){for(var e=i.length,t=[],A=0;A<e;A+=2)t.push(i[A+1]<<8|i[A]);return t},sE=function(i){for(var e=i.length,t=[],A=0;A<e;A+=4)t.push(i[A+3]<<24|i[A+2]<<16|i[A+1]<<8|i[A]);return t},hr=5,uh=11,sl=2,nE=uh-hr,Mf=65536>>hr,aE=1<<hr,nl=aE-1,oE=1024>>hr,lE=Mf+oE,cE=lE,hE=32,uE=cE+hE,dE=65536>>uh,pE=1<<nE,fE=pE-1,pd=function(i,e,t){return i.slice?i.slice(e,t):new Uint16Array(Array.prototype.slice.call(i,e,t))},gE=function(i,e,t){return i.slice?i.slice(e,t):new Uint32Array(Array.prototype.slice.call(i,e,t))},mE=function(i,e){var t=iE(i),A=Array.isArray(t)?sE(t):new Uint32Array(t),r=Array.isArray(t)?rE(t):new Uint16Array(t),s=24,n=pd(r,s/2,A[4]/2),a=A[5]===2?pd(r,(s+A[4])/2):gE(A,Math.ceil((s+A[4])/4));return new BE(A[0],A[1],A[2],A[3],n,a)},BE=(function(){function i(e,t,A,r,s,n){this.initialValue=e,this.errorValue=t,this.highStart=A,this.highValueIndex=r,this.index=s,this.data=n}return i.prototype.get=function(e){var t;if(e>=0){if(e<55296||e>56319&&e<=65535)return t=this.index[e>>hr],t=(t<<sl)+(e&nl),this.data[t];if(e<=65535)return t=this.index[Mf+(e-55296>>hr)],t=(t<<sl)+(e&nl),this.data[t];if(e<this.highStart)return t=uE-dE+(e>>uh),t=this.index[t],t+=e>>hr&fE,t=this.index[t],t=(t<<sl)+(e&nl),this.data[t];if(e<=1114111)return this.data[this.highValueIndex]}return this.errorValue},i})(),fd="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",wE=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ra=0;ra<fd.length;ra++)wE[fd.charCodeAt(ra)]=ra;var vE=1,al=2,ol=3,gd=4,md=5,yE=7,Bd=8,ll=9,cl=10,wd=11,vd=12,yd=13,_d=14,hl=15,_E=function(i){for(var e=[],t=0,A=i.length;t<A;){var r=i.charCodeAt(t++);if(r>=55296&&r<=56319&&t<A){var s=i.charCodeAt(t++);(s&64512)===56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),t--)}else e.push(r)}return e},xE=function(){for(var i=[],e=0;e<arguments.length;e++)i[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,i);var t=i.length;if(!t)return"";for(var A=[],r=-1,s="";++r<t;){var n=i[r];n<=65535?A.push(n):(n-=65536,A.push((n>>10)+55296,n%1024+56320)),(r+1===t||A.length>16384)&&(s+=String.fromCharCode.apply(String,A),A.length=0)}return s},CE=mE(AE),lr="×",xd="÷",EE=function(i){return CE.get(i)},bE=function(i,e,t){var A=t-2,r=e[A],s=e[t-1],n=e[t];if(s===al&&n===ol)return lr;if(s===al||s===ol||s===gd||n===al||n===ol||n===gd)return xd;if(s===Bd&&[Bd,ll,wd,vd].indexOf(n)!==-1||(s===wd||s===ll)&&(n===ll||n===cl)||(s===vd||s===cl)&&n===cl||n===yd||n===md||n===yE||s===vE)return lr;if(s===yd&&n===_d){for(;r===md;)r=e[--A];if(r===_d)return lr}if(s===hl&&n===hl){for(var a=0;r===hl;)a++,r=e[--A];if(a%2===0)return lr}return xd},ME=function(i){var e=_E(i),t=e.length,A=0,r=0,s=e.map(EE);return{next:function(){if(A>=t)return{done:!0,value:null};for(var n=lr;A<t&&(n=bE(e,s,++A))===lr;);if(n!==lr||A===t){var a=xE.apply(null,e.slice(r,A));return r=A,{value:a,done:!1}}return{done:!0,value:null}}}},UE=function(i){for(var e=ME(i),t=[],A;!(A=e.next()).done;)A.value&&t.push(A.value.slice());return t},SE=function(i){var e=123;if(i.createRange){var t=i.createRange();if(t.getBoundingClientRect){var A=i.createElement("boundtest");A.style.height=e+"px",A.style.display="block",i.body.appendChild(A),t.selectNode(A);var r=t.getBoundingClientRect(),s=Math.round(r.height);if(i.body.removeChild(A),s===e)return!0}}return!1},FE=function(i){var e=i.createElement("boundtest");e.style.width="50px",e.style.display="block",e.style.fontSize="12px",e.style.letterSpacing="0px",e.style.wordSpacing="0px",i.body.appendChild(e);var t=i.createRange();e.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";var A=e.firstChild,r=$a(A.data).map(function(o){return xt(o)}),s=0,n={},a=r.every(function(o,l){t.setStart(A,s),t.setEnd(A,s+o.length);var c=t.getBoundingClientRect();s+=o.length;var u=c.x>n.x||c.y>n.y;return n=c,l===0?!0:u});return i.body.removeChild(e),a},TE=function(){return typeof new Image().crossOrigin<"u"},QE=function(){return typeof new XMLHttpRequest().responseType=="string"},LE=function(i){var e=new Image,t=i.createElement("canvas"),A=t.getContext("2d");if(!A)return!1;e.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{A.drawImage(e,0,0),t.toDataURL()}catch{return!1}return!0},Cd=function(i){return i[0]===0&&i[1]===255&&i[2]===0&&i[3]===255},IE=function(i){var e=i.createElement("canvas"),t=100;e.width=t,e.height=t;var A=e.getContext("2d");if(!A)return Promise.reject(!1);A.fillStyle="rgb(0, 255, 0)",A.fillRect(0,0,t,t);var r=new Image,s=e.toDataURL();r.src=s;var n=Tc(t,t,0,0,r);return A.fillStyle="red",A.fillRect(0,0,t,t),Ed(n).then(function(a){A.drawImage(a,0,0);var o=A.getImageData(0,0,t,t).data;A.fillStyle="red",A.fillRect(0,0,t,t);var l=i.createElement("div");return l.style.backgroundImage="url("+s+")",l.style.height=t+"px",Cd(o)?Ed(Tc(t,t,0,0,l)):Promise.reject(!1)}).then(function(a){return A.drawImage(a,0,0),Cd(A.getImageData(0,0,t,t).data)}).catch(function(){return!1})},Tc=function(i,e,t,A,r){var s="http://www.w3.org/2000/svg",n=document.createElementNS(s,"svg"),a=document.createElementNS(s,"foreignObject");return n.setAttributeNS(null,"width",i.toString()),n.setAttributeNS(null,"height",e.toString()),a.setAttributeNS(null,"width","100%"),a.setAttributeNS(null,"height","100%"),a.setAttributeNS(null,"x",t.toString()),a.setAttributeNS(null,"y",A.toString()),a.setAttributeNS(null,"externalResourcesRequired","true"),n.appendChild(a),a.appendChild(r),n},Ed=function(i){return new Promise(function(e,t){var A=new Image;A.onload=function(){return e(A)},A.onerror=t,A.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(i))})},Vt={get SUPPORT_RANGE_BOUNDS(){var i=SE(document);return Object.defineProperty(Vt,"SUPPORT_RANGE_BOUNDS",{value:i}),i},get SUPPORT_WORD_BREAKING(){var i=Vt.SUPPORT_RANGE_BOUNDS&&FE(document);return Object.defineProperty(Vt,"SUPPORT_WORD_BREAKING",{value:i}),i},get SUPPORT_SVG_DRAWING(){var i=LE(document);return Object.defineProperty(Vt,"SUPPORT_SVG_DRAWING",{value:i}),i},get SUPPORT_FOREIGNOBJECT_DRAWING(){var i=typeof Array.from=="function"&&typeof window.fetch=="function"?IE(document):Promise.resolve(!1);return Object.defineProperty(Vt,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:i}),i},get SUPPORT_CORS_IMAGES(){var i=TE();return Object.defineProperty(Vt,"SUPPORT_CORS_IMAGES",{value:i}),i},get SUPPORT_RESPONSE_TYPE(){var i=QE();return Object.defineProperty(Vt,"SUPPORT_RESPONSE_TYPE",{value:i}),i},get SUPPORT_CORS_XHR(){var i="withCredentials"in new XMLHttpRequest;return Object.defineProperty(Vt,"SUPPORT_CORS_XHR",{value:i}),i},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var i=!!(typeof Intl<"u"&&Intl.Segmenter);return Object.defineProperty(Vt,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:i}),i}},ks=(function(){function i(e,t){this.text=e,this.bounds=t}return i})(),RE=function(i,e,t,A){var r=HE(e,t),s=[],n=0;return r.forEach(function(a){if(t.textDecorationLine.length||a.trim().length>0)if(Vt.SUPPORT_RANGE_BOUNDS){var o=bd(A,n,a.length).getClientRects();if(o.length>1){var l=dh(a),c=0;l.forEach(function(h){s.push(new ks(h,xi.fromDOMRectList(i,bd(A,c+n,h.length).getClientRects()))),c+=h.length})}else s.push(new ks(a,xi.fromDOMRectList(i,o)))}else{var u=A.splitText(a.length);s.push(new ks(a,DE(i,A))),A=u}else Vt.SUPPORT_RANGE_BOUNDS||(A=A.splitText(a.length));n+=a.length}),s},DE=function(i,e){var t=e.ownerDocument;if(t){var A=t.createElement("html2canvaswrapper");A.appendChild(e.cloneNode(!0));var r=e.parentNode;if(r){r.replaceChild(A,e);var s=Za(i,A);return A.firstChild&&r.replaceChild(A.firstChild,A),s}}return xi.EMPTY},bd=function(i,e,t){var A=i.ownerDocument;if(!A)throw new Error("Node has no owner document");var r=A.createRange();return r.setStart(i,e),r.setEnd(i,e+t),r},dh=function(i){if(Vt.SUPPORT_NATIVE_TEXT_SEGMENTATION){var e=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(e.segment(i)).map(function(t){return t.segment})}return UE(i)},PE=function(i,e){if(Vt.SUPPORT_NATIVE_TEXT_SEGMENTATION){var t=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(t.segment(i)).map(function(A){return A.segment})}return OE(i,e)},HE=function(i,e){return e.letterSpacing!==0?dh(i):PE(i,e)},NE=[32,160,4961,65792,65793,4153,4241],OE=function(i,e){for(var t=d_(i,{lineBreak:e.lineBreak,wordBreak:e.overflowWrap==="break-word"?"break-word":e.wordBreak}),A=[],r,s=function(){if(r.value){var n=r.value.slice(),a=$a(n),o="";a.forEach(function(l){NE.indexOf(l)===-1?o+=xt(l):(o.length&&A.push(o),A.push(xt(l)),o="")}),o.length&&A.push(o)}};!(r=t.next()).done;)s();return A},kE=(function(){function i(e,t,A){this.text=VE(t.data,A.textTransform),this.textBounds=RE(e,this.text,A,t)}return i})(),VE=function(i,e){switch(e){case 1:return i.toLowerCase();case 3:return i.replace(zE,GE);case 2:return i.toUpperCase();default:return i}},zE=/(^|\s|:|-|\(|\))([a-z])/g,GE=function(i,e,t){return i.length>0?e+t.toUpperCase():i},Uf=(function(i){NA(e,i);function e(t,A){var r=i.call(this,t,A)||this;return r.src=A.currentSrc||A.src,r.intrinsicWidth=A.naturalWidth,r.intrinsicHeight=A.naturalHeight,r.context.cache.addImage(r.src),r}return e})($A),Sf=(function(i){NA(e,i);function e(t,A){var r=i.call(this,t,A)||this;return r.canvas=A,r.intrinsicWidth=A.width,r.intrinsicHeight=A.height,r}return e})($A),Ff=(function(i){NA(e,i);function e(t,A){var r=i.call(this,t,A)||this,s=new XMLSerializer,n=Za(t,A);return A.setAttribute("width",n.width+"px"),A.setAttribute("height",n.height+"px"),r.svg="data:image/svg+xml,"+encodeURIComponent(s.serializeToString(A)),r.intrinsicWidth=A.width.baseVal.value,r.intrinsicHeight=A.height.baseVal.value,r.context.cache.addImage(r.svg),r}return e})($A),Tf=(function(i){NA(e,i);function e(t,A){var r=i.call(this,t,A)||this;return r.value=A.value,r}return e})($A),Qc=(function(i){NA(e,i);function e(t,A){var r=i.call(this,t,A)||this;return r.start=A.start,r.reversed=typeof A.reversed=="boolean"&&A.reversed===!0,r}return e})($A),KE=[{type:15,flags:0,unit:"px",number:3}],WE=[{type:16,flags:0,number:50}],XE=function(i){return i.width>i.height?new xi(i.left+(i.width-i.height)/2,i.top,i.height,i.height):i.width<i.height?new xi(i.left,i.top+(i.height-i.width)/2,i.width,i.width):i},YE=function(i){var e=i.type===jE?new Array(i.value.length+1).join("•"):i.value;return e.length===0?i.placeholder||"":e},Ia="checkbox",Ra="radio",jE="password",Md=707406591,ph=(function(i){NA(e,i);function e(t,A){var r=i.call(this,t,A)||this;switch(r.type=A.type.toLowerCase(),r.checked=A.checked,r.value=YE(A),(r.type===Ia||r.type===Ra)&&(r.styles.backgroundColor=3739148031,r.styles.borderTopColor=r.styles.borderRightColor=r.styles.borderBottomColor=r.styles.borderLeftColor=2779096575,r.styles.borderTopWidth=r.styles.borderRightWidth=r.styles.borderBottomWidth=r.styles.borderLeftWidth=1,r.styles.borderTopStyle=r.styles.borderRightStyle=r.styles.borderBottomStyle=r.styles.borderLeftStyle=1,r.styles.backgroundClip=[0],r.styles.backgroundOrigin=[0],r.bounds=XE(r.bounds)),r.type){case Ia:r.styles.borderTopRightRadius=r.styles.borderTopLeftRadius=r.styles.borderBottomRightRadius=r.styles.borderBottomLeftRadius=KE;break;case Ra:r.styles.borderTopRightRadius=r.styles.borderTopLeftRadius=r.styles.borderBottomRightRadius=r.styles.borderBottomLeftRadius=WE;break}return r}return e})($A),Qf=(function(i){NA(e,i);function e(t,A){var r=i.call(this,t,A)||this,s=A.options[A.selectedIndex||0];return r.value=s&&s.text||"",r}return e})($A),Lf=(function(i){NA(e,i);function e(t,A){var r=i.call(this,t,A)||this;return r.value=A.value,r}return e})($A),If=(function(i){NA(e,i);function e(t,A){var r=i.call(this,t,A)||this;r.src=A.src,r.width=parseInt(A.width,10)||0,r.height=parseInt(A.height,10)||0,r.backgroundColor=r.styles.backgroundColor;try{if(A.contentWindow&&A.contentWindow.document&&A.contentWindow.document.documentElement){r.tree=Df(t,A.contentWindow.document.documentElement);var s=A.contentWindow.document.documentElement?Ns(t,getComputedStyle(A.contentWindow.document.documentElement).backgroundColor):_i.TRANSPARENT,n=A.contentWindow.document.body?Ns(t,getComputedStyle(A.contentWindow.document.body).backgroundColor):_i.TRANSPARENT;r.backgroundColor=zi(s)?zi(n)?r.styles.backgroundColor:n:s}}catch{}return r}return e})($A),qE=["OL","UL","MENU"],_a=function(i,e,t,A){for(var r=e.firstChild,s=void 0;r;r=s)if(s=r.nextSibling,Pf(r)&&r.data.trim().length>0)t.textNodes.push(new kE(i,r,t.styles));else if(Kr(r))if(kf(r)&&r.assignedNodes)r.assignedNodes().forEach(function(a){return _a(i,a,t,A)});else{var n=Rf(i,r);n.styles.isVisible()&&(JE(r,n,A)?n.flags|=4:ZE(n.styles)&&(n.flags|=2),qE.indexOf(r.tagName)!==-1&&(n.flags|=8),t.elements.push(n),r.slot,r.shadowRoot?_a(i,r.shadowRoot,n,A):!Da(r)&&!Hf(r)&&!Pa(r)&&_a(i,r,n,A))}},Rf=function(i,e){return Ic(e)?new Uf(i,e):Nf(e)?new Sf(i,e):Hf(e)?new Ff(i,e):$E(e)?new Tf(i,e):eb(e)?new Qc(i,e):tb(e)?new ph(i,e):Pa(e)?new Qf(i,e):Da(e)?new Lf(i,e):Of(e)?new If(i,e):new $A(i,e)},Df=function(i,e){var t=Rf(i,e);return t.flags|=4,_a(i,e,t,t),t},JE=function(i,e,t){return e.styles.isPositionedWithZIndex()||e.styles.opacity<1||e.styles.isTransformed()||fh(i)&&t.styles.isTransparent()},ZE=function(i){return i.isPositioned()||i.isFloating()},Pf=function(i){return i.nodeType===Node.TEXT_NODE},Kr=function(i){return i.nodeType===Node.ELEMENT_NODE},Lc=function(i){return Kr(i)&&typeof i.style<"u"&&!xa(i)},xa=function(i){return typeof i.className=="object"},$E=function(i){return i.tagName==="LI"},eb=function(i){return i.tagName==="OL"},tb=function(i){return i.tagName==="INPUT"},Ab=function(i){return i.tagName==="HTML"},Hf=function(i){return i.tagName==="svg"},fh=function(i){return i.tagName==="BODY"},Nf=function(i){return i.tagName==="CANVAS"},Ud=function(i){return i.tagName==="VIDEO"},Ic=function(i){return i.tagName==="IMG"},Of=function(i){return i.tagName==="IFRAME"},Sd=function(i){return i.tagName==="STYLE"},ib=function(i){return i.tagName==="SCRIPT"},Da=function(i){return i.tagName==="TEXTAREA"},Pa=function(i){return i.tagName==="SELECT"},kf=function(i){return i.tagName==="SLOT"},Fd=function(i){return i.tagName.indexOf("-")>0},rb=(function(){function i(){this.counters={}}return i.prototype.getCounterValue=function(e){var t=this.counters[e];return t&&t.length?t[t.length-1]:1},i.prototype.getCounterValues=function(e){var t=this.counters[e];return t||[]},i.prototype.pop=function(e){var t=this;e.forEach(function(A){return t.counters[A].pop()})},i.prototype.parse=function(e){var t=this,A=e.counterIncrement,r=e.counterReset,s=!0;A!==null&&A.forEach(function(a){var o=t.counters[a.counter];o&&a.increment!==0&&(s=!1,o.length||o.push(1),o[Math.max(0,o.length-1)]+=a.increment)});var n=[];return s&&r.forEach(function(a){var o=t.counters[a.counter];n.push(a.counter),o||(o=t.counters[a.counter]=[]),o.push(a.reset)}),n},i})(),Td={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},Qd={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},sb={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},nb={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},Ir=function(i,e,t,A,r,s){return i<e||i>t?Zs(i,r,s.length>0):A.integers.reduce(function(n,a,o){for(;i>=a;)i-=a,n+=A.values[o];return n},"")+s},Vf=function(i,e,t,A){var r="";do t||i--,r=A(i)+r,i/=e;while(i*e>=e);return r},_t=function(i,e,t,A,r){var s=t-e+1;return(i<0?"-":"")+(Vf(Math.abs(i),s,A,function(n){return xt(Math.floor(n%s)+e)})+r)},Ar=function(i,e,t){t===void 0&&(t=". ");var A=e.length;return Vf(Math.abs(i),A,!1,function(r){return e[Math.floor(r%A)]})+t},Or=1,Li=2,Ii=4,Ds=8,ci=function(i,e,t,A,r,s){if(i<-9999||i>9999)return Zs(i,4,r.length>0);var n=Math.abs(i),a=r;if(n===0)return e[0]+a;for(var o=0;n>0&&o<=4;o++){var l=n%10;l===0&&Tt(s,Or)&&a!==""?a=e[l]+a:l>1||l===1&&o===0||l===1&&o===1&&Tt(s,Li)||l===1&&o===1&&Tt(s,Ii)&&i>100||l===1&&o>1&&Tt(s,Ds)?a=e[l]+(o>0?t[o-1]:"")+a:l===1&&o>0&&(a=t[o-1]+a),n=Math.floor(n/10)}return(i<0?A:"")+a},Ld="十百千萬",Id="拾佰仟萬",Rd="マイナス",ul="마이너스",Zs=function(i,e,t){var A=t?". ":"",r=t?"、":"",s=t?", ":"",n=t?" ":"";switch(e){case 0:return"•"+n;case 1:return"◦"+n;case 2:return"◾"+n;case 5:var a=_t(i,48,57,!0,A);return a.length<4?"0"+a:a;case 4:return Ar(i,"〇一二三四五六七八九",r);case 6:return Ir(i,1,3999,Td,3,A).toLowerCase();case 7:return Ir(i,1,3999,Td,3,A);case 8:return _t(i,945,969,!1,A);case 9:return _t(i,97,122,!1,A);case 10:return _t(i,65,90,!1,A);case 11:return _t(i,1632,1641,!0,A);case 12:case 49:return Ir(i,1,9999,Qd,3,A);case 35:return Ir(i,1,9999,Qd,3,A).toLowerCase();case 13:return _t(i,2534,2543,!0,A);case 14:case 30:return _t(i,6112,6121,!0,A);case 15:return Ar(i,"子丑寅卯辰巳午未申酉戌亥",r);case 16:return Ar(i,"甲乙丙丁戊己庚辛壬癸",r);case 17:case 48:return ci(i,"零一二三四五六七八九",Ld,"負",r,Li|Ii|Ds);case 47:return ci(i,"零壹貳參肆伍陸柒捌玖",Id,"負",r,Or|Li|Ii|Ds);case 42:return ci(i,"零一二三四五六七八九",Ld,"负",r,Li|Ii|Ds);case 41:return ci(i,"零壹贰叁肆伍陆柒捌玖",Id,"负",r,Or|Li|Ii|Ds);case 26:return ci(i,"〇一二三四五六七八九","十百千万",Rd,r,0);case 25:return ci(i,"零壱弐参四伍六七八九","拾百千万",Rd,r,Or|Li|Ii);case 31:return ci(i,"영일이삼사오육칠팔구","십백천만",ul,s,Or|Li|Ii);case 33:return ci(i,"零一二三四五六七八九","十百千萬",ul,s,0);case 32:return ci(i,"零壹貳參四五六七八九","拾百千",ul,s,Or|Li|Ii);case 18:return _t(i,2406,2415,!0,A);case 20:return Ir(i,1,19999,nb,3,A);case 21:return _t(i,2790,2799,!0,A);case 22:return _t(i,2662,2671,!0,A);case 22:return Ir(i,1,10999,sb,3,A);case 23:return Ar(i,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return Ar(i,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return _t(i,3302,3311,!0,A);case 28:return Ar(i,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",r);case 29:return Ar(i,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",r);case 34:return _t(i,3792,3801,!0,A);case 37:return _t(i,6160,6169,!0,A);case 38:return _t(i,4160,4169,!0,A);case 39:return _t(i,2918,2927,!0,A);case 40:return _t(i,1776,1785,!0,A);case 43:return _t(i,3046,3055,!0,A);case 44:return _t(i,3174,3183,!0,A);case 45:return _t(i,3664,3673,!0,A);case 46:return _t(i,3872,3881,!0,A);case 3:default:return _t(i,48,57,!0,A)}},zf="data-html2canvas-ignore",Dd=(function(){function i(e,t,A){if(this.context=e,this.options=A,this.scrolledElements=[],this.referenceElement=t,this.counters=new rb,this.quoteDepth=0,!t.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(t.ownerDocument.documentElement,!1)}return i.prototype.toIFrame=function(e,t){var A=this,r=ab(e,t);if(!r.contentWindow)return Promise.reject("Unable to find iframe window");var s=e.defaultView.pageXOffset,n=e.defaultView.pageYOffset,a=r.contentWindow,o=a.document,l=cb(r).then(function(){return $t(A,void 0,void 0,function(){var c,u;return Yt(this,function(h){switch(h.label){case 0:return this.scrolledElements.forEach(pb),a&&(a.scrollTo(t.left,t.top),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(a.scrollY!==t.top||a.scrollX!==t.left)&&(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(a.scrollX-t.left,a.scrollY-t.top,0,0))),c=this.options.onclone,u=this.clonedReferenceElement,typeof u>"u"?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:o.fonts&&o.fonts.ready?[4,o.fonts.ready]:[3,2];case 1:h.sent(),h.label=2;case 2:return/(AppleWebKit)/g.test(navigator.userAgent)?[4,lb(o)]:[3,4];case 3:h.sent(),h.label=4;case 4:return typeof c=="function"?[2,Promise.resolve().then(function(){return c(o,u)}).then(function(){return r})]:[2,r]}})})});return o.open(),o.write(ub(document.doctype)+"<html></html>"),db(this.referenceElement.ownerDocument,s,n),o.replaceChild(o.adoptNode(this.documentElement),o.documentElement),o.close(),l},i.prototype.createElementClone=function(e){if(Fc(e,2))debugger;if(Nf(e))return this.createCanvasClone(e);if(Ud(e))return this.createVideoClone(e);if(Sd(e))return this.createStyleClone(e);var t=e.cloneNode(!1);return Ic(t)&&(Ic(e)&&e.currentSrc&&e.currentSrc!==e.src&&(t.src=e.currentSrc,t.srcset=""),t.loading==="lazy"&&(t.loading="eager")),Fd(t)?this.createCustomElementClone(t):t},i.prototype.createCustomElementClone=function(e){var t=document.createElement("html2canvascustomelement");return dl(e.style,t),t},i.prototype.createStyleClone=function(e){try{var t=e.sheet;if(t&&t.cssRules){var A=[].slice.call(t.cssRules,0).reduce(function(s,n){return n&&typeof n.cssText=="string"?s+n.cssText:s},""),r=e.cloneNode(!1);return r.textContent=A,r}}catch(s){if(this.context.logger.error("Unable to access cssRules property",s),s.name!=="SecurityError")throw s}return e.cloneNode(!1)},i.prototype.createCanvasClone=function(e){var t;if(this.options.inlineImages&&e.ownerDocument){var A=e.ownerDocument.createElement("img");try{return A.src=e.toDataURL(),A}catch{this.context.logger.info("Unable to inline canvas contents, canvas is tainted",e)}}var r=e.cloneNode(!1);try{r.width=e.width,r.height=e.height;var s=e.getContext("2d"),n=r.getContext("2d");if(n)if(!this.options.allowTaint&&s)n.putImageData(s.getImageData(0,0,e.width,e.height),0,0);else{var a=(t=e.getContext("webgl2"))!==null&&t!==void 0?t:e.getContext("webgl");if(a){var o=a.getContextAttributes();o?.preserveDrawingBuffer===!1&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",e)}n.drawImage(e,0,0)}return r}catch{this.context.logger.info("Unable to clone canvas as it is tainted",e)}return r},i.prototype.createVideoClone=function(e){var t=e.ownerDocument.createElement("canvas");t.width=e.offsetWidth,t.height=e.offsetHeight;var A=t.getContext("2d");try{return A&&(A.drawImage(e,0,0,t.width,t.height),this.options.allowTaint||A.getImageData(0,0,t.width,t.height)),t}catch{this.context.logger.info("Unable to clone video as it is tainted",e)}var r=e.ownerDocument.createElement("canvas");return r.width=e.offsetWidth,r.height=e.offsetHeight,r},i.prototype.appendChildNode=function(e,t,A){(!Kr(t)||!ib(t)&&!t.hasAttribute(zf)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(t)))&&(!this.options.copyStyles||!Kr(t)||!Sd(t))&&e.appendChild(this.cloneNode(t,A))},i.prototype.cloneChildNodes=function(e,t,A){for(var r=this,s=e.shadowRoot?e.shadowRoot.firstChild:e.firstChild;s;s=s.nextSibling)if(Kr(s)&&kf(s)&&typeof s.assignedNodes=="function"){var n=s.assignedNodes();n.length&&n.forEach(function(a){return r.appendChildNode(t,a,A)})}else this.appendChildNode(t,s,A)},i.prototype.cloneNode=function(e,t){if(Pf(e))return document.createTextNode(e.data);if(!e.ownerDocument)return e.cloneNode(!1);var A=e.ownerDocument.defaultView;if(A&&Kr(e)&&(Lc(e)||xa(e))){var r=this.createElementClone(e);r.style.transitionProperty="none";var s=A.getComputedStyle(e),n=A.getComputedStyle(e,":before"),a=A.getComputedStyle(e,":after");this.referenceElement===e&&Lc(r)&&(this.clonedReferenceElement=r),fh(r)&&mb(r);var o=this.counters.parse(new ud(this.context,s)),l=this.resolvePseudoContent(e,r,n,Vs.BEFORE);Fd(e)&&(t=!0),Ud(e)||this.cloneChildNodes(e,r,t),l&&r.insertBefore(l,r.firstChild);var c=this.resolvePseudoContent(e,r,a,Vs.AFTER);return c&&r.appendChild(c),this.counters.pop(o),(s&&(this.options.copyStyles||xa(e))&&!Of(e)||t)&&dl(s,r),(e.scrollTop!==0||e.scrollLeft!==0)&&this.scrolledElements.push([r,e.scrollLeft,e.scrollTop]),(Da(e)||Pa(e))&&(Da(r)||Pa(r))&&(r.value=e.value),r}return e.cloneNode(!1)},i.prototype.resolvePseudoContent=function(e,t,A,r){var s=this;if(A){var n=A.content,a=t.ownerDocument;if(!(!a||!n||n==="none"||n==="-moz-alt-content"||A.display==="none")){this.counters.parse(new ud(this.context,A));var o=new $C(this.context,A),l=a.createElement("html2canvaspseudoelement");dl(A,l),o.content.forEach(function(u){if(u.type===0)l.appendChild(a.createTextNode(u.value));else if(u.type===22){var h=a.createElement("img");h.src=u.value,h.style.opacity="1",l.appendChild(h)}else if(u.type===18){if(u.name==="attr"){var p=u.values.filter(at);p.length&&l.appendChild(a.createTextNode(e.getAttribute(p[0].value)||""))}else if(u.name==="counter"){var f=u.values.filter(ss),m=f[0],g=f[1];if(m&&at(m)){var d=s.counters.getCounterValue(m.value),B=g&&at(g)?Sc.parse(s.context,g.value):3;l.appendChild(a.createTextNode(Zs(d,B,!1)))}}else if(u.name==="counters"){var v=u.values.filter(ss),m=v[0],y=v[1],g=v[2];if(m&&at(m)){var x=s.counters.getCounterValues(m.value),w=g&&at(g)?Sc.parse(s.context,g.value):3,M=y&&y.type===0?y.value:"",S=x.map(function(F){return Zs(F,w,!1)}).join(M);l.appendChild(a.createTextNode(S))}}}else if(u.type===20)switch(u.value){case"open-quote":l.appendChild(a.createTextNode(hd(o.quotes,s.quoteDepth++,!0)));break;case"close-quote":l.appendChild(a.createTextNode(hd(o.quotes,--s.quoteDepth,!1)));break;default:l.appendChild(a.createTextNode(u.value))}}),l.className=Rc+" "+Dc;var c=r===Vs.BEFORE?" "+Rc:" "+Dc;return xa(t)?t.className.baseValue+=c:t.className+=c,l}}},i.destroy=function(e){return e.parentNode?(e.parentNode.removeChild(e),!0):!1},i})(),Vs;(function(i){i[i.BEFORE=0]="BEFORE",i[i.AFTER=1]="AFTER"})(Vs||(Vs={}));var ab=function(i,e){var t=i.createElement("iframe");return t.className="html2canvas-container",t.style.visibility="hidden",t.style.position="fixed",t.style.left="-10000px",t.style.top="0px",t.style.border="0",t.width=e.width.toString(),t.height=e.height.toString(),t.scrolling="no",t.setAttribute(zf,"true"),i.body.appendChild(t),t},ob=function(i){return new Promise(function(e){if(i.complete){e();return}if(!i.src){e();return}i.onload=e,i.onerror=e})},lb=function(i){return Promise.all([].slice.call(i.images,0).map(ob))},cb=function(i){return new Promise(function(e,t){var A=i.contentWindow;if(!A)return t("No window assigned for iframe");var r=A.document;A.onload=i.onload=function(){A.onload=i.onload=null;var s=setInterval(function(){r.body.childNodes.length>0&&r.readyState==="complete"&&(clearInterval(s),e(i))},50)}})},hb=["all","d","content"],dl=function(i,e){for(var t=i.length-1;t>=0;t--){var A=i.item(t);hb.indexOf(A)===-1&&e.style.setProperty(A,i.getPropertyValue(A))}return e},ub=function(i){var e="";return i&&(e+="<!DOCTYPE ",i.name&&(e+=i.name),i.internalSubset&&(e+=i.internalSubset),i.publicId&&(e+='"'+i.publicId+'"'),i.systemId&&(e+='"'+i.systemId+'"'),e+=">"),e},db=function(i,e,t){i&&i.defaultView&&(e!==i.defaultView.pageXOffset||t!==i.defaultView.pageYOffset)&&i.defaultView.scrollTo(e,t)},pb=function(i){var e=i[0],t=i[1],A=i[2];e.scrollLeft=t,e.scrollTop=A},fb=":before",gb=":after",Rc="___html2canvas___pseudoelement_before",Dc="___html2canvas___pseudoelement_after",Pd=`{
    content: "" !important;
    display: none !important;
}`,mb=function(i){Bb(i,"."+Rc+fb+Pd+`
         .`+Dc+gb+Pd)},Bb=function(i,e){var t=i.ownerDocument;if(t){var A=t.createElement("style");A.textContent=e,i.appendChild(A)}},Gf=(function(){function i(){}return i.getOrigin=function(e){var t=i._link;return t?(t.href=e,t.href=t.href,t.protocol+t.hostname+t.port):"about:blank"},i.isSameOrigin=function(e){return i.getOrigin(e)===i._origin},i.setContext=function(e){i._link=e.document.createElement("a"),i._origin=i.getOrigin(e.location.href)},i._origin="about:blank",i})(),wb=(function(){function i(e,t){this.context=e,this._options=t,this._cache={}}return i.prototype.addImage=function(e){var t=Promise.resolve();return this.has(e)||(fl(e)||xb(e))&&(this._cache[e]=this.loadImage(e)).catch(function(){}),t},i.prototype.match=function(e){return this._cache[e]},i.prototype.loadImage=function(e){return $t(this,void 0,void 0,function(){var t,A,r,s,n=this;return Yt(this,function(a){switch(a.label){case 0:return t=Gf.isSameOrigin(e),A=!pl(e)&&this._options.useCORS===!0&&Vt.SUPPORT_CORS_IMAGES&&!t,r=!pl(e)&&!t&&!fl(e)&&typeof this._options.proxy=="string"&&Vt.SUPPORT_CORS_XHR&&!A,!t&&this._options.allowTaint===!1&&!pl(e)&&!fl(e)&&!r&&!A?[2]:(s=e,r?[4,this.proxy(s)]:[3,2]);case 1:s=a.sent(),a.label=2;case 2:return this.context.logger.debug("Added image "+e.substring(0,256)),[4,new Promise(function(o,l){var c=new Image;c.onload=function(){return o(c)},c.onerror=l,(Cb(s)||A)&&(c.crossOrigin="anonymous"),c.src=s,c.complete===!0&&setTimeout(function(){return o(c)},500),n._options.imageTimeout>0&&setTimeout(function(){return l("Timed out ("+n._options.imageTimeout+"ms) loading image")},n._options.imageTimeout)})];case 3:return[2,a.sent()]}})})},i.prototype.has=function(e){return typeof this._cache[e]<"u"},i.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},i.prototype.proxy=function(e){var t=this,A=this._options.proxy;if(!A)throw new Error("No proxy defined");var r=e.substring(0,256);return new Promise(function(s,n){var a=Vt.SUPPORT_RESPONSE_TYPE?"blob":"text",o=new XMLHttpRequest;o.onload=function(){if(o.status===200)if(a==="text")s(o.response);else{var u=new FileReader;u.addEventListener("load",function(){return s(u.result)},!1),u.addEventListener("error",function(h){return n(h)},!1),u.readAsDataURL(o.response)}else n("Failed to proxy resource "+r+" with status code "+o.status)},o.onerror=n;var l=A.indexOf("?")>-1?"&":"?";if(o.open("GET",""+A+l+"url="+encodeURIComponent(e)+"&responseType="+a),a!=="text"&&o instanceof XMLHttpRequest&&(o.responseType=a),t._options.imageTimeout){var c=t._options.imageTimeout;o.timeout=c,o.ontimeout=function(){return n("Timed out ("+c+"ms) proxying "+r)}}o.send()})},i})(),vb=/^data:image\/svg\+xml/i,yb=/^data:image\/.*;base64,/i,_b=/^data:image\/.*/i,xb=function(i){return Vt.SUPPORT_SVG_DRAWING||!Eb(i)},pl=function(i){return _b.test(i)},Cb=function(i){return yb.test(i)},fl=function(i){return i.substr(0,4)==="blob"},Eb=function(i){return i.substr(-3).toLowerCase()==="svg"||vb.test(i)},he=(function(){function i(e,t){this.type=0,this.x=e,this.y=t}return i.prototype.add=function(e,t){return new i(this.x+e,this.y+t)},i})(),Rr=function(i,e,t){return new he(i.x+(e.x-i.x)*t,i.y+(e.y-i.y)*t)},sa=(function(){function i(e,t,A,r){this.type=1,this.start=e,this.startControl=t,this.endControl=A,this.end=r}return i.prototype.subdivide=function(e,t){var A=Rr(this.start,this.startControl,e),r=Rr(this.startControl,this.endControl,e),s=Rr(this.endControl,this.end,e),n=Rr(A,r,e),a=Rr(r,s,e),o=Rr(n,a,e);return t?new i(this.start,A,n,o):new i(o,a,s,this.end)},i.prototype.add=function(e,t){return new i(this.start.add(e,t),this.startControl.add(e,t),this.endControl.add(e,t),this.end.add(e,t))},i.prototype.reverse=function(){return new i(this.end,this.endControl,this.startControl,this.start)},i})(),xA=function(i){return i.type===1},bb=(function(){function i(e){var t=e.styles,A=e.bounds,r=Is(t.borderTopLeftRadius,A.width,A.height),s=r[0],n=r[1],a=Is(t.borderTopRightRadius,A.width,A.height),o=a[0],l=a[1],c=Is(t.borderBottomRightRadius,A.width,A.height),u=c[0],h=c[1],p=Is(t.borderBottomLeftRadius,A.width,A.height),f=p[0],m=p[1],g=[];g.push((s+o)/A.width),g.push((f+u)/A.width),g.push((n+m)/A.height),g.push((l+h)/A.height);var d=Math.max.apply(Math,g);d>1&&(s/=d,n/=d,o/=d,l/=d,u/=d,h/=d,f/=d,m/=d);var B=A.width-o,v=A.height-h,y=A.width-u,x=A.height-m,w=t.borderTopWidth,M=t.borderRightWidth,S=t.borderBottomWidth,C=t.borderLeftWidth,_=ut(t.paddingTop,e.bounds.width),F=ut(t.paddingRight,e.bounds.width),T=ut(t.paddingBottom,e.bounds.width),L=ut(t.paddingLeft,e.bounds.width);this.topLeftBorderDoubleOuterBox=s>0||n>0?pt(A.left+C/3,A.top+w/3,s-C/3,n-w/3,it.TOP_LEFT):new he(A.left+C/3,A.top+w/3),this.topRightBorderDoubleOuterBox=s>0||n>0?pt(A.left+B,A.top+w/3,o-M/3,l-w/3,it.TOP_RIGHT):new he(A.left+A.width-M/3,A.top+w/3),this.bottomRightBorderDoubleOuterBox=u>0||h>0?pt(A.left+y,A.top+v,u-M/3,h-S/3,it.BOTTOM_RIGHT):new he(A.left+A.width-M/3,A.top+A.height-S/3),this.bottomLeftBorderDoubleOuterBox=f>0||m>0?pt(A.left+C/3,A.top+x,f-C/3,m-S/3,it.BOTTOM_LEFT):new he(A.left+C/3,A.top+A.height-S/3),this.topLeftBorderDoubleInnerBox=s>0||n>0?pt(A.left+C*2/3,A.top+w*2/3,s-C*2/3,n-w*2/3,it.TOP_LEFT):new he(A.left+C*2/3,A.top+w*2/3),this.topRightBorderDoubleInnerBox=s>0||n>0?pt(A.left+B,A.top+w*2/3,o-M*2/3,l-w*2/3,it.TOP_RIGHT):new he(A.left+A.width-M*2/3,A.top+w*2/3),this.bottomRightBorderDoubleInnerBox=u>0||h>0?pt(A.left+y,A.top+v,u-M*2/3,h-S*2/3,it.BOTTOM_RIGHT):new he(A.left+A.width-M*2/3,A.top+A.height-S*2/3),this.bottomLeftBorderDoubleInnerBox=f>0||m>0?pt(A.left+C*2/3,A.top+x,f-C*2/3,m-S*2/3,it.BOTTOM_LEFT):new he(A.left+C*2/3,A.top+A.height-S*2/3),this.topLeftBorderStroke=s>0||n>0?pt(A.left+C/2,A.top+w/2,s-C/2,n-w/2,it.TOP_LEFT):new he(A.left+C/2,A.top+w/2),this.topRightBorderStroke=s>0||n>0?pt(A.left+B,A.top+w/2,o-M/2,l-w/2,it.TOP_RIGHT):new he(A.left+A.width-M/2,A.top+w/2),this.bottomRightBorderStroke=u>0||h>0?pt(A.left+y,A.top+v,u-M/2,h-S/2,it.BOTTOM_RIGHT):new he(A.left+A.width-M/2,A.top+A.height-S/2),this.bottomLeftBorderStroke=f>0||m>0?pt(A.left+C/2,A.top+x,f-C/2,m-S/2,it.BOTTOM_LEFT):new he(A.left+C/2,A.top+A.height-S/2),this.topLeftBorderBox=s>0||n>0?pt(A.left,A.top,s,n,it.TOP_LEFT):new he(A.left,A.top),this.topRightBorderBox=o>0||l>0?pt(A.left+B,A.top,o,l,it.TOP_RIGHT):new he(A.left+A.width,A.top),this.bottomRightBorderBox=u>0||h>0?pt(A.left+y,A.top+v,u,h,it.BOTTOM_RIGHT):new he(A.left+A.width,A.top+A.height),this.bottomLeftBorderBox=f>0||m>0?pt(A.left,A.top+x,f,m,it.BOTTOM_LEFT):new he(A.left,A.top+A.height),this.topLeftPaddingBox=s>0||n>0?pt(A.left+C,A.top+w,Math.max(0,s-C),Math.max(0,n-w),it.TOP_LEFT):new he(A.left+C,A.top+w),this.topRightPaddingBox=o>0||l>0?pt(A.left+Math.min(B,A.width-M),A.top+w,B>A.width+M?0:Math.max(0,o-M),Math.max(0,l-w),it.TOP_RIGHT):new he(A.left+A.width-M,A.top+w),this.bottomRightPaddingBox=u>0||h>0?pt(A.left+Math.min(y,A.width-C),A.top+Math.min(v,A.height-S),Math.max(0,u-M),Math.max(0,h-S),it.BOTTOM_RIGHT):new he(A.left+A.width-M,A.top+A.height-S),this.bottomLeftPaddingBox=f>0||m>0?pt(A.left+C,A.top+Math.min(x,A.height-S),Math.max(0,f-C),Math.max(0,m-S),it.BOTTOM_LEFT):new he(A.left+C,A.top+A.height-S),this.topLeftContentBox=s>0||n>0?pt(A.left+C+L,A.top+w+_,Math.max(0,s-(C+L)),Math.max(0,n-(w+_)),it.TOP_LEFT):new he(A.left+C+L,A.top+w+_),this.topRightContentBox=o>0||l>0?pt(A.left+Math.min(B,A.width+C+L),A.top+w+_,B>A.width+C+L?0:o-C+L,l-(w+_),it.TOP_RIGHT):new he(A.left+A.width-(M+F),A.top+w+_),this.bottomRightContentBox=u>0||h>0?pt(A.left+Math.min(y,A.width-(C+L)),A.top+Math.min(v,A.height+w+_),Math.max(0,u-(M+F)),h-(S+T),it.BOTTOM_RIGHT):new he(A.left+A.width-(M+F),A.top+A.height-(S+T)),this.bottomLeftContentBox=f>0||m>0?pt(A.left+C+L,A.top+x,Math.max(0,f-(C+L)),m-(S+T),it.BOTTOM_LEFT):new he(A.left+C+L,A.top+A.height-(S+T))}return i})(),it;(function(i){i[i.TOP_LEFT=0]="TOP_LEFT",i[i.TOP_RIGHT=1]="TOP_RIGHT",i[i.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",i[i.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(it||(it={}));var pt=function(i,e,t,A,r){var s=4*((Math.sqrt(2)-1)/3),n=t*s,a=A*s,o=i+t,l=e+A;switch(r){case it.TOP_LEFT:return new sa(new he(i,l),new he(i,l-a),new he(o-n,e),new he(o,e));case it.TOP_RIGHT:return new sa(new he(i,e),new he(i+n,e),new he(o,l-a),new he(o,l));case it.BOTTOM_RIGHT:return new sa(new he(o,e),new he(o,e+a),new he(i+n,l),new he(i,l));case it.BOTTOM_LEFT:default:return new sa(new he(o,l),new he(o-n,l),new he(i,e+a),new he(i,e))}},Ha=function(i){return[i.topLeftBorderBox,i.topRightBorderBox,i.bottomRightBorderBox,i.bottomLeftBorderBox]},Mb=function(i){return[i.topLeftContentBox,i.topRightContentBox,i.bottomRightContentBox,i.bottomLeftContentBox]},Na=function(i){return[i.topLeftPaddingBox,i.topRightPaddingBox,i.bottomRightPaddingBox,i.bottomLeftPaddingBox]},Ub=(function(){function i(e,t,A){this.offsetX=e,this.offsetY=t,this.matrix=A,this.type=0,this.target=6}return i})(),na=(function(){function i(e,t){this.path=e,this.target=t,this.type=1}return i})(),Sb=(function(){function i(e){this.opacity=e,this.type=2,this.target=6}return i})(),Fb=function(i){return i.type===0},Kf=function(i){return i.type===1},Tb=function(i){return i.type===2},Hd=function(i,e){return i.length===e.length?i.some(function(t,A){return t===e[A]}):!1},Qb=function(i,e,t,A,r){return i.map(function(s,n){switch(n){case 0:return s.add(e,t);case 1:return s.add(e+A,t);case 2:return s.add(e+A,t+r);case 3:return s.add(e,t+r)}return s})},Wf=(function(){function i(e){this.element=e,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}return i})(),Xf=(function(){function i(e,t){if(this.container=e,this.parent=t,this.effects=[],this.curves=new bb(this.container),this.container.styles.opacity<1&&this.effects.push(new Sb(this.container.styles.opacity)),this.container.styles.transform!==null){var A=this.container.bounds.left+this.container.styles.transformOrigin[0].number,r=this.container.bounds.top+this.container.styles.transformOrigin[1].number,s=this.container.styles.transform;this.effects.push(new Ub(A,r,s))}if(this.container.styles.overflowX!==0){var n=Ha(this.curves),a=Na(this.curves);Hd(n,a)?this.effects.push(new na(n,6)):(this.effects.push(new na(n,2)),this.effects.push(new na(a,4)))}}return i.prototype.getEffects=function(e){for(var t=[2,3].indexOf(this.container.styles.position)===-1,A=this.parent,r=this.effects.slice(0);A;){var s=A.effects.filter(function(o){return!Kf(o)});if(t||A.container.styles.position!==0||!A.parent){if(r.unshift.apply(r,s),t=[2,3].indexOf(A.container.styles.position)===-1,A.container.styles.overflowX!==0){var n=Ha(A.curves),a=Na(A.curves);Hd(n,a)||r.unshift(new na(a,6))}}else r.unshift.apply(r,s);A=A.parent}return r.filter(function(o){return Tt(o.target,e)})},i})(),Pc=function(i,e,t,A){i.container.elements.forEach(function(r){var s=Tt(r.flags,4),n=Tt(r.flags,2),a=new Xf(r,i);Tt(r.styles.display,2048)&&A.push(a);var o=Tt(r.flags,8)?[]:A;if(s||n){var l=s||r.styles.isPositioned()?t:e,c=new Wf(a);if(r.styles.isPositioned()||r.styles.opacity<1||r.styles.isTransformed()){var u=r.styles.zIndex.order;if(u<0){var h=0;l.negativeZIndex.some(function(f,m){return u>f.element.container.styles.zIndex.order?(h=m,!1):h>0}),l.negativeZIndex.splice(h,0,c)}else if(u>0){var p=0;l.positiveZIndex.some(function(f,m){return u>=f.element.container.styles.zIndex.order?(p=m+1,!1):p>0}),l.positiveZIndex.splice(p,0,c)}else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(c)}else r.styles.isFloating()?l.nonPositionedFloats.push(c):l.nonPositionedInlineLevel.push(c);Pc(a,c,s?c:t,o)}else r.styles.isInlineLevel()?e.inlineLevel.push(a):e.nonInlineLevel.push(a),Pc(a,e,t,o);Tt(r.flags,8)&&Yf(r,o)})},Yf=function(i,e){for(var t=i instanceof Qc?i.start:1,A=i instanceof Qc?i.reversed:!1,r=0;r<e.length;r++){var s=e[r];s.container instanceof Tf&&typeof s.container.value=="number"&&s.container.value!==0&&(t=s.container.value),s.listValue=Zs(t,s.container.styles.listStyleType,!0),t+=A?-1:1}},Lb=function(i){var e=new Xf(i,null),t=new Wf(e),A=[];return Pc(e,t,t,A),Yf(e.container,A),t},Nd=function(i,e){switch(e){case 0:return MA(i.topLeftBorderBox,i.topLeftPaddingBox,i.topRightBorderBox,i.topRightPaddingBox);case 1:return MA(i.topRightBorderBox,i.topRightPaddingBox,i.bottomRightBorderBox,i.bottomRightPaddingBox);case 2:return MA(i.bottomRightBorderBox,i.bottomRightPaddingBox,i.bottomLeftBorderBox,i.bottomLeftPaddingBox);case 3:default:return MA(i.bottomLeftBorderBox,i.bottomLeftPaddingBox,i.topLeftBorderBox,i.topLeftPaddingBox)}},Ib=function(i,e){switch(e){case 0:return MA(i.topLeftBorderBox,i.topLeftBorderDoubleOuterBox,i.topRightBorderBox,i.topRightBorderDoubleOuterBox);case 1:return MA(i.topRightBorderBox,i.topRightBorderDoubleOuterBox,i.bottomRightBorderBox,i.bottomRightBorderDoubleOuterBox);case 2:return MA(i.bottomRightBorderBox,i.bottomRightBorderDoubleOuterBox,i.bottomLeftBorderBox,i.bottomLeftBorderDoubleOuterBox);case 3:default:return MA(i.bottomLeftBorderBox,i.bottomLeftBorderDoubleOuterBox,i.topLeftBorderBox,i.topLeftBorderDoubleOuterBox)}},Rb=function(i,e){switch(e){case 0:return MA(i.topLeftBorderDoubleInnerBox,i.topLeftPaddingBox,i.topRightBorderDoubleInnerBox,i.topRightPaddingBox);case 1:return MA(i.topRightBorderDoubleInnerBox,i.topRightPaddingBox,i.bottomRightBorderDoubleInnerBox,i.bottomRightPaddingBox);case 2:return MA(i.bottomRightBorderDoubleInnerBox,i.bottomRightPaddingBox,i.bottomLeftBorderDoubleInnerBox,i.bottomLeftPaddingBox);case 3:default:return MA(i.bottomLeftBorderDoubleInnerBox,i.bottomLeftPaddingBox,i.topLeftBorderDoubleInnerBox,i.topLeftPaddingBox)}},Db=function(i,e){switch(e){case 0:return aa(i.topLeftBorderStroke,i.topRightBorderStroke);case 1:return aa(i.topRightBorderStroke,i.bottomRightBorderStroke);case 2:return aa(i.bottomRightBorderStroke,i.bottomLeftBorderStroke);case 3:default:return aa(i.bottomLeftBorderStroke,i.topLeftBorderStroke)}},aa=function(i,e){var t=[];return xA(i)?t.push(i.subdivide(.5,!1)):t.push(i),xA(e)?t.push(e.subdivide(.5,!0)):t.push(e),t},MA=function(i,e,t,A){var r=[];return xA(i)?r.push(i.subdivide(.5,!1)):r.push(i),xA(t)?r.push(t.subdivide(.5,!0)):r.push(t),xA(A)?r.push(A.subdivide(.5,!0).reverse()):r.push(A),xA(e)?r.push(e.subdivide(.5,!1).reverse()):r.push(e),r},jf=function(i){var e=i.bounds,t=i.styles;return e.add(t.borderLeftWidth,t.borderTopWidth,-(t.borderRightWidth+t.borderLeftWidth),-(t.borderTopWidth+t.borderBottomWidth))},Oa=function(i){var e=i.styles,t=i.bounds,A=ut(e.paddingLeft,t.width),r=ut(e.paddingRight,t.width),s=ut(e.paddingTop,t.width),n=ut(e.paddingBottom,t.width);return t.add(A+e.borderLeftWidth,s+e.borderTopWidth,-(e.borderRightWidth+e.borderLeftWidth+A+r),-(e.borderTopWidth+e.borderBottomWidth+s+n))},Pb=function(i,e){return i===0?e.bounds:i===2?Oa(e):jf(e)},Hb=function(i,e){return i===0?e.bounds:i===2?Oa(e):jf(e)},gl=function(i,e,t){var A=Pb(kr(i.styles.backgroundOrigin,e),i),r=Hb(kr(i.styles.backgroundClip,e),i),s=Nb(kr(i.styles.backgroundSize,e),t,A),n=s[0],a=s[1],o=Is(kr(i.styles.backgroundPosition,e),A.width-n,A.height-a),l=Ob(kr(i.styles.backgroundRepeat,e),o,s,A,r),c=Math.round(A.left+o[0]),u=Math.round(A.top+o[1]);return[l,c,u,n,a]},Dr=function(i){return at(i)&&i.value===Jr.AUTO},oa=function(i){return typeof i=="number"},Nb=function(i,e,t){var A=e[0],r=e[1],s=e[2],n=i[0],a=i[1];if(!n)return[0,0];if(Mt(n)&&a&&Mt(a))return[ut(n,t.width),ut(a,t.height)];var o=oa(s);if(at(n)&&(n.value===Jr.CONTAIN||n.value===Jr.COVER)){if(oa(s)){var l=t.width/t.height;return l<s!=(n.value===Jr.COVER)?[t.width,t.width/s]:[t.height*s,t.height]}return[t.width,t.height]}var c=oa(A),u=oa(r),h=c||u;if(Dr(n)&&(!a||Dr(a))){if(c&&u)return[A,r];if(!o&&!h)return[t.width,t.height];if(h&&o){var p=c?A:r*s,f=u?r:A/s;return[p,f]}var m=c?A:t.width,g=u?r:t.height;return[m,g]}if(o){var d=0,B=0;return Mt(n)?d=ut(n,t.width):Mt(a)&&(B=ut(a,t.height)),Dr(n)?d=B*s:(!a||Dr(a))&&(B=d/s),[d,B]}var v=null,y=null;if(Mt(n)?v=ut(n,t.width):a&&Mt(a)&&(y=ut(a,t.height)),v!==null&&(!a||Dr(a))&&(y=c&&u?v/A*r:t.height),y!==null&&Dr(n)&&(v=c&&u?y/r*A:t.width),v!==null&&y!==null)return[v,y];throw new Error("Unable to calculate background-size for element")},kr=function(i,e){var t=i[e];return typeof t>"u"?i[0]:t},Ob=function(i,e,t,A,r){var s=e[0],n=e[1],a=t[0],o=t[1];switch(i){case 2:return[new he(Math.round(A.left),Math.round(A.top+n)),new he(Math.round(A.left+A.width),Math.round(A.top+n)),new he(Math.round(A.left+A.width),Math.round(o+A.top+n)),new he(Math.round(A.left),Math.round(o+A.top+n))];case 3:return[new he(Math.round(A.left+s),Math.round(A.top)),new he(Math.round(A.left+s+a),Math.round(A.top)),new he(Math.round(A.left+s+a),Math.round(A.height+A.top)),new he(Math.round(A.left+s),Math.round(A.height+A.top))];case 1:return[new he(Math.round(A.left+s),Math.round(A.top+n)),new he(Math.round(A.left+s+a),Math.round(A.top+n)),new he(Math.round(A.left+s+a),Math.round(A.top+n+o)),new he(Math.round(A.left+s),Math.round(A.top+n+o))];default:return[new he(Math.round(r.left),Math.round(r.top)),new he(Math.round(r.left+r.width),Math.round(r.top)),new he(Math.round(r.left+r.width),Math.round(r.height+r.top)),new he(Math.round(r.left),Math.round(r.height+r.top))]}},kb="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",Od="Hidden Text",Vb=(function(){function i(e){this._data={},this._document=e}return i.prototype.parseMetrics=function(e,t){var A=this._document.createElement("div"),r=this._document.createElement("img"),s=this._document.createElement("span"),n=this._document.body;A.style.visibility="hidden",A.style.fontFamily=e,A.style.fontSize=t,A.style.margin="0",A.style.padding="0",A.style.whiteSpace="nowrap",n.appendChild(A),r.src=kb,r.width=1,r.height=1,r.style.margin="0",r.style.padding="0",r.style.verticalAlign="baseline",s.style.fontFamily=e,s.style.fontSize=t,s.style.margin="0",s.style.padding="0",s.appendChild(this._document.createTextNode(Od)),A.appendChild(s),A.appendChild(r);var a=r.offsetTop-s.offsetTop+2;A.removeChild(s),A.appendChild(this._document.createTextNode(Od)),A.style.lineHeight="normal",r.style.verticalAlign="super";var o=r.offsetTop-A.offsetTop+2;return n.removeChild(A),{baseline:a,middle:o}},i.prototype.getMetrics=function(e,t){var A=e+" "+t;return typeof this._data[A]>"u"&&(this._data[A]=this.parseMetrics(e,t)),this._data[A]},i})(),qf=(function(){function i(e,t){this.context=e,this.options=t}return i})(),zb=1e4,Gb=(function(i){NA(e,i);function e(t,A){var r=i.call(this,t,A)||this;return r._activeEffects=[],r.canvas=A.canvas?A.canvas:document.createElement("canvas"),r.ctx=r.canvas.getContext("2d"),A.canvas||(r.canvas.width=Math.floor(A.width*A.scale),r.canvas.height=Math.floor(A.height*A.scale),r.canvas.style.width=A.width+"px",r.canvas.style.height=A.height+"px"),r.fontMetrics=new Vb(document),r.ctx.scale(r.options.scale,r.options.scale),r.ctx.translate(-A.x,-A.y),r.ctx.textBaseline="bottom",r._activeEffects=[],r.context.logger.debug("Canvas renderer initialized ("+A.width+"x"+A.height+") with scale "+A.scale),r}return e.prototype.applyEffects=function(t){for(var A=this;this._activeEffects.length;)this.popEffect();t.forEach(function(r){return A.applyEffect(r)})},e.prototype.applyEffect=function(t){this.ctx.save(),Tb(t)&&(this.ctx.globalAlpha=t.opacity),Fb(t)&&(this.ctx.translate(t.offsetX,t.offsetY),this.ctx.transform(t.matrix[0],t.matrix[1],t.matrix[2],t.matrix[3],t.matrix[4],t.matrix[5]),this.ctx.translate(-t.offsetX,-t.offsetY)),Kf(t)&&(this.path(t.path),this.ctx.clip()),this._activeEffects.push(t)},e.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},e.prototype.renderStack=function(t){return $t(this,void 0,void 0,function(){var A;return Yt(this,function(r){switch(r.label){case 0:return A=t.element.container.styles,A.isVisible()?[4,this.renderStackContent(t)]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2]}})})},e.prototype.renderNode=function(t){return $t(this,void 0,void 0,function(){return Yt(this,function(A){switch(A.label){case 0:if(Tt(t.container.flags,16))debugger;return t.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(t)]:[3,3];case 1:return A.sent(),[4,this.renderNodeContent(t)];case 2:A.sent(),A.label=3;case 3:return[2]}})})},e.prototype.renderTextWithLetterSpacing=function(t,A,r){var s=this;if(A===0)this.ctx.fillText(t.text,t.bounds.left,t.bounds.top+r);else{var n=dh(t.text);n.reduce(function(a,o){return s.ctx.fillText(o,a,t.bounds.top+r),a+s.ctx.measureText(o).width},t.bounds.left)}},e.prototype.createFontStyle=function(t){var A=t.fontVariant.filter(function(n){return n==="normal"||n==="small-caps"}).join(""),r=jb(t.fontFamily).join(", "),s=rn(t.fontSize)?""+t.fontSize.number+t.fontSize.unit:t.fontSize.number+"px";return[[t.fontStyle,A,t.fontWeight,s,r].join(" "),r,s]},e.prototype.renderTextNode=function(t,A){return $t(this,void 0,void 0,function(){var r,s,n,a,o,l,c,u,h=this;return Yt(this,function(p){return r=this.createFontStyle(A),s=r[0],n=r[1],a=r[2],this.ctx.font=s,this.ctx.direction=A.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",o=this.fontMetrics.getMetrics(n,a),l=o.baseline,c=o.middle,u=A.paintOrder,t.textBounds.forEach(function(f){u.forEach(function(m){switch(m){case 0:h.ctx.fillStyle=Dt(A.color),h.renderTextWithLetterSpacing(f,A.letterSpacing,l);var g=A.textShadow;g.length&&f.text.trim().length&&(g.slice(0).reverse().forEach(function(d){h.ctx.shadowColor=Dt(d.color),h.ctx.shadowOffsetX=d.offsetX.number*h.options.scale,h.ctx.shadowOffsetY=d.offsetY.number*h.options.scale,h.ctx.shadowBlur=d.blur.number,h.renderTextWithLetterSpacing(f,A.letterSpacing,l)}),h.ctx.shadowColor="",h.ctx.shadowOffsetX=0,h.ctx.shadowOffsetY=0,h.ctx.shadowBlur=0),A.textDecorationLine.length&&(h.ctx.fillStyle=Dt(A.textDecorationColor||A.color),A.textDecorationLine.forEach(function(d){switch(d){case 1:h.ctx.fillRect(f.bounds.left,Math.round(f.bounds.top+l),f.bounds.width,1);break;case 2:h.ctx.fillRect(f.bounds.left,Math.round(f.bounds.top),f.bounds.width,1);break;case 3:h.ctx.fillRect(f.bounds.left,Math.ceil(f.bounds.top+c),f.bounds.width,1);break}}));break;case 1:A.webkitTextStrokeWidth&&f.text.trim().length&&(h.ctx.strokeStyle=Dt(A.webkitTextStrokeColor),h.ctx.lineWidth=A.webkitTextStrokeWidth,h.ctx.lineJoin=window.chrome?"miter":"round",h.ctx.strokeText(f.text,f.bounds.left,f.bounds.top+l)),h.ctx.strokeStyle="",h.ctx.lineWidth=0,h.ctx.lineJoin="miter";break}})}),[2]})})},e.prototype.renderReplacedElement=function(t,A,r){if(r&&t.intrinsicWidth>0&&t.intrinsicHeight>0){var s=Oa(t),n=Na(A);this.path(n),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(r,0,0,t.intrinsicWidth,t.intrinsicHeight,s.left,s.top,s.width,s.height),this.ctx.restore()}},e.prototype.renderNodeContent=function(t){return $t(this,void 0,void 0,function(){var A,r,s,n,a,o,B,B,l,c,u,h,y,p,f,x,m,g,d,B,v,y,x;return Yt(this,function(w){switch(w.label){case 0:this.applyEffects(t.getEffects(4)),A=t.container,r=t.curves,s=A.styles,n=0,a=A.textNodes,w.label=1;case 1:return n<a.length?(o=a[n],[4,this.renderTextNode(o,s)]):[3,4];case 2:w.sent(),w.label=3;case 3:return n++,[3,1];case 4:if(!(A instanceof Uf))return[3,8];w.label=5;case 5:return w.trys.push([5,7,,8]),[4,this.context.cache.match(A.src)];case 6:return B=w.sent(),this.renderReplacedElement(A,r,B),[3,8];case 7:return w.sent(),this.context.logger.error("Error loading image "+A.src),[3,8];case 8:if(A instanceof Sf&&this.renderReplacedElement(A,r,A.canvas),!(A instanceof Ff))return[3,12];w.label=9;case 9:return w.trys.push([9,11,,12]),[4,this.context.cache.match(A.svg)];case 10:return B=w.sent(),this.renderReplacedElement(A,r,B),[3,12];case 11:return w.sent(),this.context.logger.error("Error loading svg "+A.svg.substring(0,255)),[3,12];case 12:return A instanceof If&&A.tree?(l=new e(this.context,{scale:this.options.scale,backgroundColor:A.backgroundColor,x:0,y:0,width:A.width,height:A.height}),[4,l.render(A.tree)]):[3,14];case 13:c=w.sent(),A.width&&A.height&&this.ctx.drawImage(c,0,0,A.width,A.height,A.bounds.left,A.bounds.top,A.bounds.width,A.bounds.height),w.label=14;case 14:if(A instanceof ph&&(u=Math.min(A.bounds.width,A.bounds.height),A.type===Ia?A.checked&&(this.ctx.save(),this.path([new he(A.bounds.left+u*.39363,A.bounds.top+u*.79),new he(A.bounds.left+u*.16,A.bounds.top+u*.5549),new he(A.bounds.left+u*.27347,A.bounds.top+u*.44071),new he(A.bounds.left+u*.39694,A.bounds.top+u*.5649),new he(A.bounds.left+u*.72983,A.bounds.top+u*.23),new he(A.bounds.left+u*.84,A.bounds.top+u*.34085),new he(A.bounds.left+u*.39363,A.bounds.top+u*.79)]),this.ctx.fillStyle=Dt(Md),this.ctx.fill(),this.ctx.restore()):A.type===Ra&&A.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(A.bounds.left+u/2,A.bounds.top+u/2,u/4,0,Math.PI*2,!0),this.ctx.fillStyle=Dt(Md),this.ctx.fill(),this.ctx.restore())),Kb(A)&&A.value.length){switch(h=this.createFontStyle(s),y=h[0],p=h[1],f=this.fontMetrics.getMetrics(y,p).baseline,this.ctx.font=y,this.ctx.fillStyle=Dt(s.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=Xb(A.styles.textAlign),x=Oa(A),m=0,A.styles.textAlign){case 1:m+=x.width/2;break;case 2:m+=x.width;break}g=x.add(m,0,0,-x.height/2+1),this.ctx.save(),this.path([new he(x.left,x.top),new he(x.left+x.width,x.top),new he(x.left+x.width,x.top+x.height),new he(x.left,x.top+x.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new ks(A.value,g),s.letterSpacing,f),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!Tt(A.styles.display,2048))return[3,20];if(A.styles.listStyleImage===null)return[3,19];if(d=A.styles.listStyleImage,d.type!==0)return[3,18];B=void 0,v=d.url,w.label=15;case 15:return w.trys.push([15,17,,18]),[4,this.context.cache.match(v)];case 16:return B=w.sent(),this.ctx.drawImage(B,A.bounds.left-(B.width+10),A.bounds.top),[3,18];case 17:return w.sent(),this.context.logger.error("Error loading list-style-image "+v),[3,18];case 18:return[3,20];case 19:t.listValue&&A.styles.listStyleType!==-1&&(y=this.createFontStyle(s)[0],this.ctx.font=y,this.ctx.fillStyle=Dt(s.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",x=new xi(A.bounds.left,A.bounds.top+ut(A.styles.paddingTop,A.bounds.width),A.bounds.width,ld(s.lineHeight,s.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new ks(t.listValue,x),s.letterSpacing,ld(s.lineHeight,s.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),w.label=20;case 20:return[2]}})})},e.prototype.renderStackContent=function(t){return $t(this,void 0,void 0,function(){var A,r,d,s,n,d,a,o,d,l,c,d,u,h,d,p,f,d,m,g,d;return Yt(this,function(B){switch(B.label){case 0:if(Tt(t.element.container.flags,16))debugger;return[4,this.renderNodeBackgroundAndBorders(t.element)];case 1:B.sent(),A=0,r=t.negativeZIndex,B.label=2;case 2:return A<r.length?(d=r[A],[4,this.renderStack(d)]):[3,5];case 3:B.sent(),B.label=4;case 4:return A++,[3,2];case 5:return[4,this.renderNodeContent(t.element)];case 6:B.sent(),s=0,n=t.nonInlineLevel,B.label=7;case 7:return s<n.length?(d=n[s],[4,this.renderNode(d)]):[3,10];case 8:B.sent(),B.label=9;case 9:return s++,[3,7];case 10:a=0,o=t.nonPositionedFloats,B.label=11;case 11:return a<o.length?(d=o[a],[4,this.renderStack(d)]):[3,14];case 12:B.sent(),B.label=13;case 13:return a++,[3,11];case 14:l=0,c=t.nonPositionedInlineLevel,B.label=15;case 15:return l<c.length?(d=c[l],[4,this.renderStack(d)]):[3,18];case 16:B.sent(),B.label=17;case 17:return l++,[3,15];case 18:u=0,h=t.inlineLevel,B.label=19;case 19:return u<h.length?(d=h[u],[4,this.renderNode(d)]):[3,22];case 20:B.sent(),B.label=21;case 21:return u++,[3,19];case 22:p=0,f=t.zeroOrAutoZIndexOrTransformedOrOpacity,B.label=23;case 23:return p<f.length?(d=f[p],[4,this.renderStack(d)]):[3,26];case 24:B.sent(),B.label=25;case 25:return p++,[3,23];case 26:m=0,g=t.positiveZIndex,B.label=27;case 27:return m<g.length?(d=g[m],[4,this.renderStack(d)]):[3,30];case 28:B.sent(),B.label=29;case 29:return m++,[3,27];case 30:return[2]}})})},e.prototype.mask=function(t){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(t.slice(0).reverse()),this.ctx.closePath()},e.prototype.path=function(t){this.ctx.beginPath(),this.formatPath(t),this.ctx.closePath()},e.prototype.formatPath=function(t){var A=this;t.forEach(function(r,s){var n=xA(r)?r.start:r;s===0?A.ctx.moveTo(n.x,n.y):A.ctx.lineTo(n.x,n.y),xA(r)&&A.ctx.bezierCurveTo(r.startControl.x,r.startControl.y,r.endControl.x,r.endControl.y,r.end.x,r.end.y)})},e.prototype.renderRepeat=function(t,A,r,s){this.path(t),this.ctx.fillStyle=A,this.ctx.translate(r,s),this.ctx.fill(),this.ctx.translate(-r,-s)},e.prototype.resizeImage=function(t,A,r){var s;if(t.width===A&&t.height===r)return t;var n=(s=this.canvas.ownerDocument)!==null&&s!==void 0?s:document,a=n.createElement("canvas");a.width=Math.max(1,A),a.height=Math.max(1,r);var o=a.getContext("2d");return o.drawImage(t,0,0,t.width,t.height,0,0,A,r),a},e.prototype.renderBackgroundImage=function(t){return $t(this,void 0,void 0,function(){var A,r,s,n,a,o;return Yt(this,function(l){switch(l.label){case 0:A=t.styles.backgroundImage.length-1,r=function(c){var u,h,p,_,R,G,L,I,S,f,_,R,G,L,I,m,g,d,B,v,y,x,w,M,S,C,_,F,T,L,I,H,R,G,z,X,te,ve,ie,Ne,Ye,Ke;return Yt(this,function(Y){switch(Y.label){case 0:if(c.type!==0)return[3,5];u=void 0,h=c.url,Y.label=1;case 1:return Y.trys.push([1,3,,4]),[4,s.context.cache.match(h)];case 2:return u=Y.sent(),[3,4];case 3:return Y.sent(),s.context.logger.error("Error loading background-image "+h),[3,4];case 4:return u&&(p=gl(t,A,[u.width,u.height,u.width/u.height]),_=p[0],R=p[1],G=p[2],L=p[3],I=p[4],S=s.ctx.createPattern(s.resizeImage(u,L,I),"repeat"),s.renderRepeat(_,S,R,G)),[3,6];case 5:Fx(c)?(f=gl(t,A,[null,null,null]),_=f[0],R=f[1],G=f[2],L=f[3],I=f[4],m=Ex(c.angle,L,I),g=m[0],d=m[1],B=m[2],v=m[3],y=m[4],x=document.createElement("canvas"),x.width=L,x.height=I,w=x.getContext("2d"),M=w.createLinearGradient(d,v,B,y),ad(c.stops,g).forEach(function(q){return M.addColorStop(q.stop,Dt(q.color))}),w.fillStyle=M,w.fillRect(0,0,L,I),L>0&&I>0&&(S=s.ctx.createPattern(x,"repeat"),s.renderRepeat(_,S,R,G))):Tx(c)&&(C=gl(t,A,[null,null,null]),_=C[0],F=C[1],T=C[2],L=C[3],I=C[4],H=c.position.length===0?[ch]:c.position,R=ut(H[0],L),G=ut(H[H.length-1],I),z=bx(c,R,G,L,I),X=z[0],te=z[1],X>0&&te>0&&(ve=s.ctx.createRadialGradient(F+R,T+G,0,F+R,T+G,X),ad(c.stops,X*2).forEach(function(q){return ve.addColorStop(q.stop,Dt(q.color))}),s.path(_),s.ctx.fillStyle=ve,X!==te?(ie=t.bounds.left+.5*t.bounds.width,Ne=t.bounds.top+.5*t.bounds.height,Ye=te/X,Ke=1/Ye,s.ctx.save(),s.ctx.translate(ie,Ne),s.ctx.transform(1,0,0,Ye,0,0),s.ctx.translate(-ie,-Ne),s.ctx.fillRect(F,Ke*(T-Ne)+Ne,L,I*Ke),s.ctx.restore()):s.ctx.fill())),Y.label=6;case 6:return A--,[2]}})},s=this,n=0,a=t.styles.backgroundImage.slice(0).reverse(),l.label=1;case 1:return n<a.length?(o=a[n],[5,r(o)]):[3,4];case 2:l.sent(),l.label=3;case 3:return n++,[3,1];case 4:return[2]}})})},e.prototype.renderSolidBorder=function(t,A,r){return $t(this,void 0,void 0,function(){return Yt(this,function(s){return this.path(Nd(r,A)),this.ctx.fillStyle=Dt(t),this.ctx.fill(),[2]})})},e.prototype.renderDoubleBorder=function(t,A,r,s){return $t(this,void 0,void 0,function(){var n,a;return Yt(this,function(o){switch(o.label){case 0:return A<3?[4,this.renderSolidBorder(t,r,s)]:[3,2];case 1:return o.sent(),[2];case 2:return n=Ib(s,r),this.path(n),this.ctx.fillStyle=Dt(t),this.ctx.fill(),a=Rb(s,r),this.path(a),this.ctx.fill(),[2]}})})},e.prototype.renderNodeBackgroundAndBorders=function(t){return $t(this,void 0,void 0,function(){var A,r,s,n,a,o,l,c,u=this;return Yt(this,function(h){switch(h.label){case 0:return this.applyEffects(t.getEffects(2)),A=t.container.styles,r=!zi(A.backgroundColor)||A.backgroundImage.length,s=[{style:A.borderTopStyle,color:A.borderTopColor,width:A.borderTopWidth},{style:A.borderRightStyle,color:A.borderRightColor,width:A.borderRightWidth},{style:A.borderBottomStyle,color:A.borderBottomColor,width:A.borderBottomWidth},{style:A.borderLeftStyle,color:A.borderLeftColor,width:A.borderLeftWidth}],n=Wb(kr(A.backgroundClip,0),t.curves),r||A.boxShadow.length?(this.ctx.save(),this.path(n),this.ctx.clip(),zi(A.backgroundColor)||(this.ctx.fillStyle=Dt(A.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(t.container)]):[3,2];case 1:h.sent(),this.ctx.restore(),A.boxShadow.slice(0).reverse().forEach(function(p){u.ctx.save();var f=Ha(t.curves),m=p.inset?0:zb,g=Qb(f,-m+(p.inset?1:-1)*p.spread.number,(p.inset?1:-1)*p.spread.number,p.spread.number*(p.inset?-2:2),p.spread.number*(p.inset?-2:2));p.inset?(u.path(f),u.ctx.clip(),u.mask(g)):(u.mask(f),u.ctx.clip(),u.path(g)),u.ctx.shadowOffsetX=p.offsetX.number+m,u.ctx.shadowOffsetY=p.offsetY.number,u.ctx.shadowColor=Dt(p.color),u.ctx.shadowBlur=p.blur.number,u.ctx.fillStyle=p.inset?Dt(p.color):"rgba(0,0,0,1)",u.ctx.fill(),u.ctx.restore()}),h.label=2;case 2:a=0,o=0,l=s,h.label=3;case 3:return o<l.length?(c=l[o],c.style!==0&&!zi(c.color)&&c.width>0?c.style!==2?[3,5]:[4,this.renderDashedDottedBorder(c.color,c.width,a,t.curves,2)]:[3,11]):[3,13];case 4:return h.sent(),[3,11];case 5:return c.style!==3?[3,7]:[4,this.renderDashedDottedBorder(c.color,c.width,a,t.curves,3)];case 6:return h.sent(),[3,11];case 7:return c.style!==4?[3,9]:[4,this.renderDoubleBorder(c.color,c.width,a,t.curves)];case 8:return h.sent(),[3,11];case 9:return[4,this.renderSolidBorder(c.color,a,t.curves)];case 10:h.sent(),h.label=11;case 11:a++,h.label=12;case 12:return o++,[3,3];case 13:return[2]}})})},e.prototype.renderDashedDottedBorder=function(t,A,r,s,n){return $t(this,void 0,void 0,function(){var a,o,l,c,u,h,p,f,m,g,d,B,v,y,x,w,x,w;return Yt(this,function(M){return this.ctx.save(),a=Db(s,r),o=Nd(s,r),n===2&&(this.path(o),this.ctx.clip()),xA(o[0])?(l=o[0].start.x,c=o[0].start.y):(l=o[0].x,c=o[0].y),xA(o[1])?(u=o[1].end.x,h=o[1].end.y):(u=o[1].x,h=o[1].y),r===0||r===2?p=Math.abs(l-u):p=Math.abs(c-h),this.ctx.beginPath(),n===3?this.formatPath(a):this.formatPath(o.slice(0,2)),f=A<3?A*3:A*2,m=A<3?A*2:A,n===3&&(f=A,m=A),g=!0,p<=f*2?g=!1:p<=f*2+m?(d=p/(2*f+m),f*=d,m*=d):(B=Math.floor((p+m)/(f+m)),v=(p-B*f)/(B-1),y=(p-(B+1)*f)/B,m=y<=0||Math.abs(m-v)<Math.abs(m-y)?v:y),g&&(n===3?this.ctx.setLineDash([0,f+m]):this.ctx.setLineDash([f,m])),n===3?(this.ctx.lineCap="round",this.ctx.lineWidth=A):this.ctx.lineWidth=A*2+1.1,this.ctx.strokeStyle=Dt(t),this.ctx.stroke(),this.ctx.setLineDash([]),n===2&&(xA(o[0])&&(x=o[3],w=o[0],this.ctx.beginPath(),this.formatPath([new he(x.end.x,x.end.y),new he(w.start.x,w.start.y)]),this.ctx.stroke()),xA(o[1])&&(x=o[1],w=o[2],this.ctx.beginPath(),this.formatPath([new he(x.end.x,x.end.y),new he(w.start.x,w.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},e.prototype.render=function(t){return $t(this,void 0,void 0,function(){var A;return Yt(this,function(r){switch(r.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=Dt(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),A=Lb(t),[4,this.renderStack(A)];case 1:return r.sent(),this.applyEffects([]),[2,this.canvas]}})})},e})(qf),Kb=function(i){return i instanceof Lf||i instanceof Qf?!0:i instanceof ph&&i.type!==Ra&&i.type!==Ia},Wb=function(i,e){switch(i){case 0:return Ha(e);case 2:return Mb(e);case 1:default:return Na(e)}},Xb=function(i){switch(i){case 1:return"center";case 2:return"right";case 0:default:return"left"}},Yb=["-apple-system","system-ui"],jb=function(i){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?i.filter(function(e){return Yb.indexOf(e)===-1}):i},qb=(function(i){NA(e,i);function e(t,A){var r=i.call(this,t,A)||this;return r.canvas=A.canvas?A.canvas:document.createElement("canvas"),r.ctx=r.canvas.getContext("2d"),r.options=A,r.canvas.width=Math.floor(A.width*A.scale),r.canvas.height=Math.floor(A.height*A.scale),r.canvas.style.width=A.width+"px",r.canvas.style.height=A.height+"px",r.ctx.scale(r.options.scale,r.options.scale),r.ctx.translate(-A.x,-A.y),r.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+A.width+"x"+A.height+" at "+A.x+","+A.y+") with scale "+A.scale),r}return e.prototype.render=function(t){return $t(this,void 0,void 0,function(){var A,r;return Yt(this,function(s){switch(s.label){case 0:return A=Tc(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,t),[4,Jb(A)];case 1:return r=s.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=Dt(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(r,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},e})(qf),Jb=function(i){return new Promise(function(e,t){var A=new Image;A.onload=function(){e(A)},A.onerror=t,A.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(i))})},Zb=(function(){function i(e){var t=e.id,A=e.enabled;this.id=t,this.enabled=A,this.start=Date.now()}return i.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.debug=="function"?console.debug.apply(console,On([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},i.prototype.getTime=function(){return Date.now()-this.start},i.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&typeof window<"u"&&window.console&&typeof console.info=="function"&&console.info.apply(console,On([this.id,this.getTime()+"ms"],e))},i.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.warn=="function"?console.warn.apply(console,On([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},i.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.error=="function"?console.error.apply(console,On([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},i.instances={},i})(),$b=(function(){function i(e,t){var A;this.windowBounds=t,this.instanceName="#"+i.instanceCount++,this.logger=new Zb({id:this.instanceName,enabled:e.logging}),this.cache=(A=e.cache)!==null&&A!==void 0?A:new wb(this,e)}return i.instanceCount=1,i})(),eM=function(i,e){return e===void 0&&(e={}),tM(i,e)};typeof window<"u"&&Gf.setContext(window);var tM=function(i,e){return $t(void 0,void 0,void 0,function(){var t,A,r,s,n,a,o,l,c,u,h,p,f,m,g,d,B,v,y,x,M,w,M,S,C,_,F,T,L,I,H,R,G,z,X,te,ve,ie,Ne,Ye;return Yt(this,function(Ke){switch(Ke.label){case 0:if(!i||typeof i!="object")return[2,Promise.reject("Invalid element provided as first argument")];if(t=i.ownerDocument,!t)throw new Error("Element is not attached to a Document");if(A=t.defaultView,!A)throw new Error("Document is not attached to a Window");return r={allowTaint:(S=e.allowTaint)!==null&&S!==void 0?S:!1,imageTimeout:(C=e.imageTimeout)!==null&&C!==void 0?C:15e3,proxy:e.proxy,useCORS:(_=e.useCORS)!==null&&_!==void 0?_:!1},s=gc({logging:(F=e.logging)!==null&&F!==void 0?F:!0,cache:e.cache},r),n={windowWidth:(T=e.windowWidth)!==null&&T!==void 0?T:A.innerWidth,windowHeight:(L=e.windowHeight)!==null&&L!==void 0?L:A.innerHeight,scrollX:(I=e.scrollX)!==null&&I!==void 0?I:A.pageXOffset,scrollY:(H=e.scrollY)!==null&&H!==void 0?H:A.pageYOffset},a=new xi(n.scrollX,n.scrollY,n.windowWidth,n.windowHeight),o=new $b(s,a),l=(R=e.foreignObjectRendering)!==null&&R!==void 0?R:!1,c={allowTaint:(G=e.allowTaint)!==null&&G!==void 0?G:!1,onclone:e.onclone,ignoreElements:e.ignoreElements,inlineImages:l,copyStyles:l},o.logger.debug("Starting document clone with size "+a.width+"x"+a.height+" scrolled to "+-a.left+","+-a.top),u=new Dd(o,i,c),h=u.clonedReferenceElement,h?[4,u.toIFrame(t,a)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return p=Ke.sent(),f=fh(h)||Ab(h)?Qy(h.ownerDocument):Za(o,h),m=f.width,g=f.height,d=f.left,B=f.top,v=AM(o,h,e.backgroundColor),y={canvas:e.canvas,backgroundColor:v,scale:(X=(z=e.scale)!==null&&z!==void 0?z:A.devicePixelRatio)!==null&&X!==void 0?X:1,x:((te=e.x)!==null&&te!==void 0?te:0)+d,y:((ve=e.y)!==null&&ve!==void 0?ve:0)+B,width:(ie=e.width)!==null&&ie!==void 0?ie:Math.ceil(m),height:(Ne=e.height)!==null&&Ne!==void 0?Ne:Math.ceil(g)},l?(o.logger.debug("Document cloned, using foreign object rendering"),M=new qb(o,y),[4,M.render(h)]):[3,3];case 2:return x=Ke.sent(),[3,5];case 3:return o.logger.debug("Document cloned, element located at "+d+","+B+" with size "+m+"x"+g+" using computed rendering"),o.logger.debug("Starting DOM parsing"),w=Df(o,h),v===w.styles.backgroundColor&&(w.styles.backgroundColor=_i.TRANSPARENT),o.logger.debug("Starting renderer for element at "+y.x+","+y.y+" with size "+y.width+"x"+y.height),M=new Gb(o,y),[4,M.render(w)];case 4:x=Ke.sent(),Ke.label=5;case 5:return(!((Ye=e.removeContainer)!==null&&Ye!==void 0)||Ye)&&(Dd.destroy(p)||o.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),o.logger.debug("Finished rendering"),[2,x]}})})},AM=function(i,e,t){var A=e.ownerDocument,r=A.documentElement?Ns(i,getComputedStyle(A.documentElement).backgroundColor):_i.TRANSPARENT,s=A.body?Ns(i,getComputedStyle(A.body).backgroundColor):_i.TRANSPARENT,n=typeof t=="string"?Ns(i,t):t===null?_i.TRANSPARENT:4294967295;return e===A.documentElement?zi(r)?zi(s)?n:s:r:n};class PA{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new b);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new b);const A=this.elements,r=e.x,s=e.y,n=e.z;return t.x=A[0]*r+A[1]*s+A[2]*n,t.y=A[3]*r+A[4]*s+A[5]*n,t.z=A[6]*r+A[7]*s+A[8]*n,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new PA);const A=this.elements,r=e.elements,s=t.elements,n=A[0],a=A[1],o=A[2],l=A[3],c=A[4],u=A[5],h=A[6],p=A[7],f=A[8],m=r[0],g=r[1],d=r[2],B=r[3],v=r[4],y=r[5],x=r[6],w=r[7],M=r[8];return s[0]=n*m+a*B+o*x,s[1]=n*g+a*v+o*w,s[2]=n*d+a*y+o*M,s[3]=l*m+c*B+u*x,s[4]=l*g+c*v+u*w,s[5]=l*d+c*y+u*M,s[6]=h*m+p*B+f*x,s[7]=h*g+p*v+f*w,s[8]=h*d+p*y+f*M,t}scale(e,t){t===void 0&&(t=new PA);const A=this.elements,r=t.elements;for(let s=0;s!==3;s++)r[3*s+0]=e.x*A[3*s+0],r[3*s+1]=e.y*A[3*s+1],r[3*s+2]=e.z*A[3*s+2];return t}solve(e,t){t===void 0&&(t=new b);const A=3,r=4,s=[];let n,a;for(n=0;n<A*r;n++)s.push(0);for(n=0;n<3;n++)for(a=0;a<3;a++)s[n+r*a]=this.elements[n+3*a];s[3]=e.x,s[7]=e.y,s[11]=e.z;let o=3;const l=o;let c;const u=4;let h;do{if(n=l-o,s[n+r*n]===0){for(a=n+1;a<l;a++)if(s[n+r*a]!==0){c=u;do h=u-c,s[h+r*n]+=s[h+r*a];while(--c);break}}if(s[n+r*n]!==0)for(a=n+1;a<l;a++){const p=s[n+r*a]/s[n+r*n];c=u;do h=u-c,s[h+r*a]=h<=n?0:s[h+r*a]-s[h+r*n]*p;while(--c)}}while(--o);if(t.z=s[2*r+3]/s[2*r+2],t.y=(s[1*r+3]-s[1*r+2]*t.z)/s[1*r+1],t.x=(s[0*r+3]-s[0*r+2]*t.z-s[0*r+1]*t.y)/s[0*r+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,A){if(A===void 0)return this.elements[t+3*e];this.elements[t+3*e]=A}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";for(let t=0;t<9;t++)e+=this.elements[t]+",";return e}reverse(e){e===void 0&&(e=new PA);const t=3,A=6,r=iM;let s,n;for(s=0;s<3;s++)for(n=0;n<3;n++)r[s+A*n]=this.elements[s+3*n];r[3]=1,r[9]=0,r[15]=0,r[4]=0,r[10]=1,r[16]=0,r[5]=0,r[11]=0,r[17]=1;let a=3;const o=a;let l;const c=A;let u;do{if(s=o-a,r[s+A*s]===0){for(n=s+1;n<o;n++)if(r[s+A*n]!==0){l=c;do u=c-l,r[u+A*s]+=r[u+A*n];while(--l);break}}if(r[s+A*s]!==0)for(n=s+1;n<o;n++){const h=r[s+A*n]/r[s+A*s];l=c;do u=c-l,r[u+A*n]=u<=s?0:r[u+A*n]-r[u+A*s]*h;while(--l)}}while(--a);s=2;do{n=s-1;do{const h=r[s+A*n]/r[s+A*s];l=A;do u=A-l,r[u+A*n]=r[u+A*n]-r[u+A*s]*h;while(--l)}while(n--)}while(--s);s=2;do{const h=1/r[s+A*s];l=A;do u=A-l,r[u+A*s]=r[u+A*s]*h;while(--l)}while(s--);s=2;do{n=2;do{if(u=r[t+n+A*s],isNaN(u)||u===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,n,u)}while(n--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,A=e.y,r=e.z,s=e.w,n=t+t,a=A+A,o=r+r,l=t*n,c=t*a,u=t*o,h=A*a,p=A*o,f=r*o,m=s*n,g=s*a,d=s*o,B=this.elements;return B[0]=1-(h+f),B[1]=c-d,B[2]=u+g,B[3]=c+d,B[4]=1-(l+f),B[5]=p-m,B[6]=u-g,B[7]=p+m,B[8]=1-(l+h),this}transpose(e){e===void 0&&(e=new PA);const t=this.elements,A=e.elements;let r;return A[0]=t[0],A[4]=t[4],A[8]=t[8],r=t[1],A[1]=t[3],A[3]=r,r=t[2],A[2]=t[6],A[6]=r,r=t[5],A[5]=t[7],A[7]=r,e}}const iM=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class b{constructor(e,t,A){e===void 0&&(e=0),t===void 0&&(t=0),A===void 0&&(A=0),this.x=e,this.y=t,this.z=A}cross(e,t){t===void 0&&(t=new b);const A=e.x,r=e.y,s=e.z,n=this.x,a=this.y,o=this.z;return t.x=a*s-o*r,t.y=o*A-n*s,t.z=n*r-a*A,t}set(e,t,A){return this.x=e,this.y=t,this.z=A,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new b(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new b(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new PA([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,A=this.z,r=Math.sqrt(e*e+t*t+A*A);if(r>0){const s=1/r;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return r}unit(e){e===void 0&&(e=new b);const t=this.x,A=this.y,r=this.z;let s=Math.sqrt(t*t+A*A+r*r);return s>0?(s=1/s,e.x=t*s,e.y=A*s,e.z=r*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,A=this.z;return Math.sqrt(e*e+t*t+A*A)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,A=this.y,r=this.z,s=e.x,n=e.y,a=e.z;return Math.sqrt((s-t)*(s-t)+(n-A)*(n-A)+(a-r)*(a-r))}distanceSquared(e){const t=this.x,A=this.y,r=this.z,s=e.x,n=e.y,a=e.z;return(s-t)*(s-t)+(n-A)*(n-A)+(a-r)*(a-r)}scale(e,t){t===void 0&&(t=new b);const A=this.x,r=this.y,s=this.z;return t.x=e*A,t.y=e*r,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new b),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,A){return A===void 0&&(A=new b),A.x=this.x+e*t.x,A.y=this.y+e*t.y,A.z=this.z+e*t.z,A}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new b),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const A=this.length();if(A>0){const r=rM,s=1/A;r.set(this.x*s,this.y*s,this.z*s);const n=sM;Math.abs(r.x)<.9?(n.set(1,0,0),r.cross(n,e)):(n.set(0,1,0),r.cross(n,e)),r.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,A){const r=this.x,s=this.y,n=this.z;A.x=r+(e.x-r)*t,A.y=s+(e.y-s)*t,A.z=n+(e.z-n)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(kd),kd.almostEquals(e,t)}clone(){return new b(this.x,this.y,this.z)}}b.ZERO=new b(0,0,0);b.UNIT_X=new b(1,0,0);b.UNIT_Y=new b(0,1,0);b.UNIT_Z=new b(0,0,1);const rM=new b,sM=new b,kd=new b;class wA{constructor(e){e===void 0&&(e={}),this.lowerBound=new b,this.upperBound=new b,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,A,r){const s=this.lowerBound,n=this.upperBound,a=A;s.copy(e[0]),a&&a.vmult(s,s),n.copy(s);for(let o=1;o<e.length;o++){let l=e[o];a&&(a.vmult(l,Vd),l=Vd),l.x>n.x&&(n.x=l.x),l.x<s.x&&(s.x=l.x),l.y>n.y&&(n.y=l.y),l.y<s.y&&(s.y=l.y),l.z>n.z&&(n.z=l.z),l.z<s.z&&(s.z=l.z)}return t&&(t.vadd(s,s),t.vadd(n,n)),r&&(s.x-=r,s.y-=r,s.z-=r,n.x+=r,n.y+=r,n.z+=r),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new wA().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,A=this.upperBound,r=e.lowerBound,s=e.upperBound,n=r.x<=A.x&&A.x<=s.x||t.x<=s.x&&s.x<=A.x,a=r.y<=A.y&&A.y<=s.y||t.y<=s.y&&s.y<=A.y,o=r.z<=A.z&&A.z<=s.z||t.z<=s.z&&s.z<=A.z;return n&&a&&o}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,A=this.upperBound,r=e.lowerBound,s=e.upperBound;return t.x<=r.x&&A.x>=s.x&&t.y<=r.y&&A.y>=s.y&&t.z<=r.z&&A.z>=s.z}getCorners(e,t,A,r,s,n,a,o){const l=this.lowerBound,c=this.upperBound;e.copy(l),t.set(c.x,l.y,l.z),A.set(c.x,c.y,l.z),r.set(l.x,c.y,c.z),s.set(c.x,l.y,c.z),n.set(l.x,c.y,l.z),a.set(l.x,l.y,c.z),o.copy(c)}toLocalFrame(e,t){const A=zd,r=A[0],s=A[1],n=A[2],a=A[3],o=A[4],l=A[5],c=A[6],u=A[7];this.getCorners(r,s,n,a,o,l,c,u);for(let h=0;h!==8;h++){const p=A[h];e.pointToLocal(p,p)}return t.setFromPoints(A)}toWorldFrame(e,t){const A=zd,r=A[0],s=A[1],n=A[2],a=A[3],o=A[4],l=A[5],c=A[6],u=A[7];this.getCorners(r,s,n,a,o,l,c,u);for(let h=0;h!==8;h++){const p=A[h];e.pointToWorld(p,p)}return t.setFromPoints(A)}overlapsRay(e){const{direction:t,from:A}=e,r=1/t.x,s=1/t.y,n=1/t.z,a=(this.lowerBound.x-A.x)*r,o=(this.upperBound.x-A.x)*r,l=(this.lowerBound.y-A.y)*s,c=(this.upperBound.y-A.y)*s,u=(this.lowerBound.z-A.z)*n,h=(this.upperBound.z-A.z)*n,p=Math.max(Math.max(Math.min(a,o),Math.min(l,c)),Math.min(u,h)),f=Math.min(Math.min(Math.max(a,o),Math.max(l,c)),Math.max(u,h));return!(f<0||p>f)}}const Vd=new b,zd=[new b,new b,new b,new b,new b,new b,new b,new b];class Gd{constructor(){this.matrix=[]}get(e,t){let{index:A}=e,{index:r}=t;if(r>A){const s=r;r=A,A=s}return this.matrix[(A*(A+1)>>1)+r-1]}set(e,t,A){let{index:r}=e,{index:s}=t;if(s>r){const n=s;s=r,r=n}this.matrix[(r*(r+1)>>1)+s-1]=A?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class Jf{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const A=this._listeners;return A[e]===void 0&&(A[e]=[]),A[e].includes(t)||A[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const A=this._listeners;return!!(A[e]!==void 0&&A[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const A=this._listeners;if(A[e]===void 0)return this;const r=A[e].indexOf(t);return r!==-1&&A[e].splice(r,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const t=this._listeners[e.type];if(t!==void 0){e.target=this;for(let A=0,r=t.length;A<r;A++)t[A].call(this,e)}return this}}class Ct{constructor(e,t,A,r){e===void 0&&(e=0),t===void 0&&(t=0),A===void 0&&(A=0),r===void 0&&(r=1),this.x=e,this.y=t,this.z=A,this.w=r}set(e,t,A,r){return this.x=e,this.y=t,this.z=A,this.w=r,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const A=Math.sin(t*.5);return this.x=e.x*A,this.y=e.y*A,this.z=e.z*A,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new b),this.normalize();const t=2*Math.acos(this.w),A=Math.sqrt(1-this.w*this.w);return A<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/A,e.y=this.y/A,e.z=this.z/A),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const A=nM,r=aM;e.tangents(A,r),this.setFromAxisAngle(A,Math.PI)}else{const A=e.cross(t);this.x=A.x,this.y=A.y,this.z=A.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new Ct);const A=this.x,r=this.y,s=this.z,n=this.w,a=e.x,o=e.y,l=e.z,c=e.w;return t.x=A*c+n*a+r*l-s*o,t.y=r*c+n*o+s*a-A*l,t.z=s*c+n*l+A*o-r*a,t.w=n*c-A*a-r*o-s*l,t}inverse(e){e===void 0&&(e=new Ct);const t=this.x,A=this.y,r=this.z,s=this.w;this.conjugate(e);const n=1/(t*t+A*A+r*r+s*s);return e.x*=n,e.y*=n,e.z*=n,e.w*=n,e}conjugate(e){return e===void 0&&(e=new Ct),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new b);const A=e.x,r=e.y,s=e.z,n=this.x,a=this.y,o=this.z,l=this.w,c=l*A+a*s-o*r,u=l*r+o*A-n*s,h=l*s+n*r-a*A,p=-n*A-a*r-o*s;return t.x=c*l+p*-n+u*-o-h*-a,t.y=u*l+p*-a+h*-n-c*-o,t.z=h*l+p*-o+c*-a-u*-n,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let A,r,s;const n=this.x,a=this.y,o=this.z,l=this.w;switch(t){case"YZX":const c=n*a+o*l;if(c>.499&&(A=2*Math.atan2(n,l),r=Math.PI/2,s=0),c<-.499&&(A=-2*Math.atan2(n,l),r=-Math.PI/2,s=0),A===void 0){const u=n*n,h=a*a,p=o*o;A=Math.atan2(2*a*l-2*n*o,1-2*h-2*p),r=Math.asin(2*c),s=Math.atan2(2*n*l-2*a*o,1-2*u-2*p)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=A,e.z=r,e.x=s}setFromEuler(e,t,A,r){r===void 0&&(r="XYZ");const s=Math.cos(e/2),n=Math.cos(t/2),a=Math.cos(A/2),o=Math.sin(e/2),l=Math.sin(t/2),c=Math.sin(A/2);return r==="XYZ"?(this.x=o*n*a+s*l*c,this.y=s*l*a-o*n*c,this.z=s*n*c+o*l*a,this.w=s*n*a-o*l*c):r==="YXZ"?(this.x=o*n*a+s*l*c,this.y=s*l*a-o*n*c,this.z=s*n*c-o*l*a,this.w=s*n*a+o*l*c):r==="ZXY"?(this.x=o*n*a-s*l*c,this.y=s*l*a+o*n*c,this.z=s*n*c+o*l*a,this.w=s*n*a-o*l*c):r==="ZYX"?(this.x=o*n*a-s*l*c,this.y=s*l*a+o*n*c,this.z=s*n*c-o*l*a,this.w=s*n*a+o*l*c):r==="YZX"?(this.x=o*n*a+s*l*c,this.y=s*l*a+o*n*c,this.z=s*n*c-o*l*a,this.w=s*n*a-o*l*c):r==="XZY"&&(this.x=o*n*a-s*l*c,this.y=s*l*a-o*n*c,this.z=s*n*c+o*l*a,this.w=s*n*a+o*l*c),this}clone(){return new Ct(this.x,this.y,this.z,this.w)}slerp(e,t,A){A===void 0&&(A=new Ct);const r=this.x,s=this.y,n=this.z,a=this.w;let o=e.x,l=e.y,c=e.z,u=e.w,h,p,f,m,g;return p=r*o+s*l+n*c+a*u,p<0&&(p=-p,o=-o,l=-l,c=-c,u=-u),1-p>1e-6?(h=Math.acos(p),f=Math.sin(h),m=Math.sin((1-t)*h)/f,g=Math.sin(t*h)/f):(m=1-t,g=t),A.x=m*r+g*o,A.y=m*s+g*l,A.z=m*n+g*c,A.w=m*a+g*u,A}integrate(e,t,A,r){r===void 0&&(r=new Ct);const s=e.x*A.x,n=e.y*A.y,a=e.z*A.z,o=this.x,l=this.y,c=this.z,u=this.w,h=t*.5;return r.x+=h*(s*u+n*c-a*l),r.y+=h*(n*u+a*o-s*c),r.z+=h*(a*u+s*l-n*o),r.w+=h*(-s*o-n*l-a*c),r}}const nM=new b,aM=new b,oM={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class we{constructor(e){e===void 0&&(e={}),this.id=we.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,A,r){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}we.idCounter=0;we.types=oM;class At{constructor(e){e===void 0&&(e={}),this.position=new b,this.quaternion=new Ct,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return At.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return At.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new b),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,A,r){return r===void 0&&(r=new b),A.vsub(e,r),t.conjugate(Kd),Kd.vmult(r,r),r}static pointToWorldFrame(e,t,A,r){return r===void 0&&(r=new b),t.vmult(A,r),r.vadd(e,r),r}static vectorToWorldFrame(e,t,A){return A===void 0&&(A=new b),e.vmult(t,A),A}static vectorToLocalFrame(e,t,A,r){return r===void 0&&(r=new b),t.w*=-1,t.vmult(A,r),t.w*=-1,r}}const Kd=new Ct;class zs extends we{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:A=[],normals:r=[],axes:s,boundingSphereRadius:n}=e;super({type:we.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=A,this.faceNormals=r,this.faceNormals.length===0&&this.computeNormals(),n?this.boundingSphereRadius=n:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,A=this.uniqueEdges;A.length=0;const r=new b;for(let s=0;s!==e.length;s++){const n=e[s],a=n.length;for(let o=0;o!==a;o++){const l=(o+1)%a;t[n[o]].vsub(t[n[l]],r),r.normalize();let c=!1;for(let u=0;u!==A.length;u++)if(A[u].almostEquals(r)||A[u].almostEquals(r)){c=!0;break}c||A.push(r.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let r=0;r<this.faces[e].length;r++)if(!this.vertices[this.faces[e][r]])throw new Error(`Vertex ${this.faces[e][r]} not found!`);const t=this.faceNormals[e]||new b;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const A=this.vertices[this.faces[e][0]];if(t.dot(A)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let r=0;r<this.faces[e].length;r++)console.warn(`.vertices[${this.faces[e][r]}] = Vec3(${this.vertices[this.faces[e][r]].toString()})`)}}}getFaceNormal(e,t){const A=this.faces[e],r=this.vertices[A[0]],s=this.vertices[A[1]],n=this.vertices[A[2]];zs.computeNormal(r,s,n,t)}static computeNormal(e,t,A,r){const s=new b,n=new b;t.vsub(e,n),A.vsub(t,s),s.cross(n,r),r.isZero()||r.normalize()}clipAgainstHull(e,t,A,r,s,n,a,o,l){const c=new b;let u=-1,h=-Number.MAX_VALUE;for(let f=0;f<A.faces.length;f++){c.copy(A.faceNormals[f]),s.vmult(c,c);const m=c.dot(n);m>h&&(h=m,u=f)}const p=[];for(let f=0;f<A.faces[u].length;f++){const m=A.vertices[A.faces[u][f]],g=new b;g.copy(m),s.vmult(g,g),r.vadd(g,g),p.push(g)}u>=0&&this.clipFaceAgainstHull(n,e,t,p,a,o,l)}findSeparatingAxis(e,t,A,r,s,n,a,o){const l=new b,c=new b,u=new b,h=new b,p=new b,f=new b;let m=Number.MAX_VALUE;const g=this;if(g.uniqueAxes)for(let d=0;d!==g.uniqueAxes.length;d++){A.vmult(g.uniqueAxes[d],l);const B=g.testSepAxis(l,e,t,A,r,s);if(B===!1)return!1;B<m&&(m=B,n.copy(l))}else{const d=a?a.length:g.faces.length;for(let B=0;B<d;B++){const v=a?a[B]:B;l.copy(g.faceNormals[v]),A.vmult(l,l);const y=g.testSepAxis(l,e,t,A,r,s);if(y===!1)return!1;y<m&&(m=y,n.copy(l))}}if(e.uniqueAxes)for(let d=0;d!==e.uniqueAxes.length;d++){s.vmult(e.uniqueAxes[d],c);const B=g.testSepAxis(c,e,t,A,r,s);if(B===!1)return!1;B<m&&(m=B,n.copy(c))}else{const d=o?o.length:e.faces.length;for(let B=0;B<d;B++){const v=o?o[B]:B;c.copy(e.faceNormals[v]),s.vmult(c,c);const y=g.testSepAxis(c,e,t,A,r,s);if(y===!1)return!1;y<m&&(m=y,n.copy(c))}}for(let d=0;d!==g.uniqueEdges.length;d++){A.vmult(g.uniqueEdges[d],h);for(let B=0;B!==e.uniqueEdges.length;B++)if(s.vmult(e.uniqueEdges[B],p),h.cross(p,f),!f.almostZero()){f.normalize();const v=g.testSepAxis(f,e,t,A,r,s);if(v===!1)return!1;v<m&&(m=v,n.copy(f))}}return r.vsub(t,u),u.dot(n)>0&&n.negate(n),!0}testSepAxis(e,t,A,r,s,n){const a=this;zs.project(a,e,A,r,ml),zs.project(t,e,s,n,Bl);const o=ml[0],l=ml[1],c=Bl[0],u=Bl[1];if(o<u||c<l)return!1;const h=o-u,p=c-l;return h<p?h:p}calculateLocalInertia(e,t){const A=new b,r=new b;this.computeLocalAABB(r,A);const s=A.x-r.x,n=A.y-r.y,a=A.z-r.z;t.x=1/12*e*(2*n*2*n+2*a*2*a),t.y=1/12*e*(2*s*2*s+2*a*2*a),t.z=1/12*e*(2*n*2*n+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],A=this.faceNormals[e],r=this.vertices[t[0]];return-A.dot(r)}clipFaceAgainstHull(e,t,A,r,s,n,a){const o=new b,l=new b,c=new b,u=new b,h=new b,p=new b,f=new b,m=new b,g=this,d=[],B=r,v=d;let y=-1,x=Number.MAX_VALUE;for(let _=0;_<g.faces.length;_++){o.copy(g.faceNormals[_]),A.vmult(o,o);const F=o.dot(e);F<x&&(x=F,y=_)}if(y<0)return;const w=g.faces[y];w.connectedFaces=[];for(let _=0;_<g.faces.length;_++)for(let F=0;F<g.faces[_].length;F++)w.indexOf(g.faces[_][F])!==-1&&_!==y&&w.connectedFaces.indexOf(_)===-1&&w.connectedFaces.push(_);const M=w.length;for(let _=0;_<M;_++){const F=g.vertices[w[_]],T=g.vertices[w[(_+1)%M]];F.vsub(T,l),c.copy(l),A.vmult(c,c),t.vadd(c,c),u.copy(this.faceNormals[y]),A.vmult(u,u),t.vadd(u,u),c.cross(u,h),h.negate(h),p.copy(F),A.vmult(p,p),t.vadd(p,p);const L=w.connectedFaces[_];f.copy(this.faceNormals[L]);const I=this.getPlaneConstantOfFace(L);m.copy(f),A.vmult(m,m);const H=I-m.dot(t);for(this.clipFaceAgainstPlane(B,v,m,H);B.length;)B.shift();for(;v.length;)B.push(v.shift())}f.copy(this.faceNormals[y]);const S=this.getPlaneConstantOfFace(y);m.copy(f),A.vmult(m,m);const C=S-m.dot(t);for(let _=0;_<B.length;_++){let F=m.dot(B[_])+C;if(F<=s&&(console.log(`clamped: depth=${F} to minDist=${s}`),F=s),F<=n){const T=B[_];if(F<=1e-6){const L={point:T,normal:m,depth:F};a.push(L)}}}}clipFaceAgainstPlane(e,t,A,r){let s,n;const a=e.length;if(a<2)return t;let o=e[e.length-1],l=e[0];s=A.dot(o)+r;for(let c=0;c<a;c++){if(l=e[c],n=A.dot(l)+r,s<0)if(n<0){const u=new b;u.copy(l),t.push(u)}else{const u=new b;o.lerp(l,s/(s-n),u),t.push(u)}else if(n<0){const u=new b;o.lerp(l,s/(s-n),u),t.push(u),t.push(l)}o=l,s=n}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new b);const A=this.vertices,r=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(A[s],r[s]),e.vadd(r[s],r[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const A=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let r=0;r<this.vertices.length;r++){const s=A[r];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new b);const A=this.faceNormals,r=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(A[s],r[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let A=0;A!==t.length;A++){const r=t[A].lengthSquared();r>e&&(e=r)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,A,r){const s=this.vertices;let n,a,o,l,c,u,h=new b;for(let p=0;p<s.length;p++){h.copy(s[p]),t.vmult(h,h),e.vadd(h,h);const f=h;(n===void 0||f.x<n)&&(n=f.x),(l===void 0||f.x>l)&&(l=f.x),(a===void 0||f.y<a)&&(a=f.y),(c===void 0||f.y>c)&&(c=f.y),(o===void 0||f.z<o)&&(o=f.z),(u===void 0||f.z>u)&&(u=f.z)}A.set(n,a,o),r.set(l,c,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new b);const t=this.vertices;for(let A=0;A<t.length;A++)e.vadd(t[A],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const A=this.vertices.length,r=this.vertices;if(t){for(let s=0;s<A;s++){const n=r[s];t.vmult(n,n)}for(let s=0;s<this.faceNormals.length;s++){const n=this.faceNormals[s];t.vmult(n,n)}}if(e)for(let s=0;s<A;s++){const n=r[s];n.vadd(e,n)}}pointIsInside(e){const t=this.vertices,A=this.faces,r=this.faceNormals,s=new b;this.getAveragePointLocal(s);for(let n=0;n<this.faces.length;n++){let a=r[n];const o=t[A[n][0]],l=new b;e.vsub(o,l);const c=a.dot(l),u=new b;s.vsub(o,u);const h=a.dot(u);if(c<0&&h>0||c>0&&h<0)return!1}return-1}static project(e,t,A,r,s){const n=e.vertices.length,a=lM;let o=0,l=0;const c=cM,u=e.vertices;c.setZero(),At.vectorToLocalFrame(A,r,t,a),At.pointToLocalFrame(A,r,c,c);const h=c.dot(a);l=o=u[0].dot(a);for(let p=1;p<n;p++){const f=u[p].dot(a);f>o&&(o=f),f<l&&(l=f)}if(l-=h,o-=h,l>o){const p=l;l=o,o=p}s[0]=o,s[1]=l}}const ml=[],Bl=[];new b;const lM=new b,cM=new b;class sn extends we{constructor(e){super({type:we.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,A=this.halfExtents.z,r=b,s=[new r(-e,-t,-A),new r(e,-t,-A),new r(e,t,-A),new r(-e,t,-A),new r(-e,-t,A),new r(e,-t,A),new r(e,t,A),new r(-e,t,A)],n=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new r(0,0,1),new r(0,1,0),new r(1,0,0)],o=new zs({vertices:s,faces:n,axes:a});this.convexPolyhedronRepresentation=o,o.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new b),sn.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,A){const r=e;A.x=1/12*t*(2*r.y*2*r.y+2*r.z*2*r.z),A.y=1/12*t*(2*r.x*2*r.x+2*r.z*2*r.z),A.z=1/12*t*(2*r.y*2*r.y+2*r.x*2*r.x)}getSideNormals(e,t){const A=e,r=this.halfExtents;if(A[0].set(r.x,0,0),A[1].set(0,r.y,0),A[2].set(0,0,r.z),A[3].set(-r.x,0,0),A[4].set(0,-r.y,0),A[5].set(0,0,-r.z),t!==void 0)for(let s=0;s!==A.length;s++)t.vmult(A[s],A[s]);return A}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,A){const r=this.halfExtents,s=[[r.x,r.y,r.z],[-r.x,r.y,r.z],[-r.x,-r.y,r.z],[-r.x,-r.y,-r.z],[r.x,-r.y,-r.z],[r.x,r.y,-r.z],[-r.x,r.y,-r.z],[r.x,-r.y,r.z]];for(let n=0;n<s.length;n++)Qi.set(s[n][0],s[n][1],s[n][2]),t.vmult(Qi,Qi),e.vadd(Qi,Qi),A(Qi.x,Qi.y,Qi.z)}calculateWorldAABB(e,t,A,r){const s=this.halfExtents;VA[0].set(s.x,s.y,s.z),VA[1].set(-s.x,s.y,s.z),VA[2].set(-s.x,-s.y,s.z),VA[3].set(-s.x,-s.y,-s.z),VA[4].set(s.x,-s.y,-s.z),VA[5].set(s.x,s.y,-s.z),VA[6].set(-s.x,s.y,-s.z),VA[7].set(s.x,-s.y,s.z);const n=VA[0];t.vmult(n,n),e.vadd(n,n),r.copy(n),A.copy(n);for(let a=1;a<8;a++){const o=VA[a];t.vmult(o,o),e.vadd(o,o);const l=o.x,c=o.y,u=o.z;l>r.x&&(r.x=l),c>r.y&&(r.y=c),u>r.z&&(r.z=u),l<A.x&&(A.x=l),c<A.y&&(A.y=c),u<A.z&&(A.z=u)}}}const Qi=new b,VA=[new b,new b,new b,new b,new b,new b,new b,new b],gh={DYNAMIC:1,STATIC:2,KINEMATIC:4},mh={AWAKE:0,SLEEPY:1,SLEEPING:2};class ge extends Jf{constructor(e){e===void 0&&(e={}),super(),this.id=ge.idCounter++,this.index=-1,this.world=null,this.vlambda=new b,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new b,this.previousPosition=new b,this.interpolatedPosition=new b,this.initPosition=new b,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new b,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new b,this.force=new b;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?ge.STATIC:ge.DYNAMIC,typeof e.type==typeof ge.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=ge.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new b,this.quaternion=new Ct,this.initQuaternion=new Ct,this.previousQuaternion=new Ct,this.interpolatedQuaternion=new Ct,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new b,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new b,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new b,this.invInertia=new b,this.invInertiaWorld=new PA,this.invMassSolve=0,this.invInertiaSolve=new b,this.invInertiaWorldSolve=new PA,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new b(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new b(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new wA,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new b,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=ge.AWAKE,this.wakeUpAfterNarrowphase=!1,e===ge.SLEEPING&&this.dispatchEvent(ge.wakeupEvent)}sleep(){this.sleepState=ge.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,A=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),r=this.sleepSpeedLimit**2;t===ge.AWAKE&&A<r?(this.sleepState=ge.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(ge.sleepyEvent)):t===ge.SLEEPY&&A>r?this.wakeUp():t===ge.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ge.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ge.SLEEPING||this.type===ge.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new b),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new b),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new b),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new b),this.quaternion.vmult(e,t),t}addShape(e,t,A){const r=new b,s=new Ct;return t&&r.copy(t),A&&s.copy(A),this.shapes.push(e),this.shapeOffsets.push(r),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,A=e.length;let r=0;for(let s=0;s!==A;s++){const n=e[s];n.updateBoundingSphereRadius();const a=t[s].length(),o=n.boundingSphereRadius;a+o>r&&(r=a+o)}this.boundingRadius=r}updateAABB(){const e=this.shapes,t=this.shapeOffsets,A=this.shapeOrientations,r=e.length,s=hM,n=uM,a=this.quaternion,o=this.aabb,l=dM;for(let c=0;c!==r;c++){const u=e[c];a.vmult(t[c],s),s.vadd(this.position,s),a.mult(A[c],n),u.calculateWorldAABB(s,n,l.lowerBound,l.upperBound),c===0?o.copy(l):o.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const A=pM,r=fM;A.setRotationFromQuaternion(this.quaternion),A.transpose(r),A.scale(t,A),A.mmult(r,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new b),this.type!==ge.DYNAMIC)return;this.sleepState===ge.SLEEPING&&this.wakeUp();const A=gM;t.cross(e,A),this.force.vadd(e,this.force),this.torque.vadd(A,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new b),this.type!==ge.DYNAMIC)return;const A=mM,r=BM;this.vectorToWorldFrame(e,A),this.vectorToWorldFrame(t,r),this.applyForce(A,r)}applyTorque(e){this.type===ge.DYNAMIC&&(this.sleepState===ge.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new b),this.type!==ge.DYNAMIC)return;this.sleepState===ge.SLEEPING&&this.wakeUp();const A=t,r=wM;r.copy(e),r.scale(this.invMass,r),this.velocity.vadd(r,this.velocity);const s=vM;A.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new b),this.type!==ge.DYNAMIC)return;const A=yM,r=_M;this.vectorToWorldFrame(e,A),this.vectorToWorldFrame(t,r),this.applyImpulse(A,r)}updateMassProperties(){const e=xM;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,A=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),sn.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!A?1/t.x:0,t.y>0&&!A?1/t.y:0,t.z>0&&!A?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const A=new b;return e.vsub(this.position,A),this.angularVelocity.cross(A,t),this.velocity.vadd(t,t),t}integrate(e,t,A){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ge.DYNAMIC||this.type===ge.KINEMATIC)||this.sleepState===ge.SLEEPING)return;const r=this.velocity,s=this.angularVelocity,n=this.position,a=this.force,o=this.torque,l=this.quaternion,c=this.invMass,u=this.invInertiaWorld,h=this.linearFactor,p=c*e;r.x+=a.x*p*h.x,r.y+=a.y*p*h.y,r.z+=a.z*p*h.z;const f=u.elements,m=this.angularFactor,g=o.x*m.x,d=o.y*m.y,B=o.z*m.z;s.x+=e*(f[0]*g+f[1]*d+f[2]*B),s.y+=e*(f[3]*g+f[4]*d+f[5]*B),s.z+=e*(f[6]*g+f[7]*d+f[8]*B),n.x+=r.x*e,n.y+=r.y*e,n.z+=r.z*e,l.integrate(this.angularVelocity,e,this.angularFactor,l),t&&(A?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}ge.idCounter=0;ge.COLLIDE_EVENT_NAME="collide";ge.DYNAMIC=gh.DYNAMIC;ge.STATIC=gh.STATIC;ge.KINEMATIC=gh.KINEMATIC;ge.AWAKE=mh.AWAKE;ge.SLEEPY=mh.SLEEPY;ge.SLEEPING=mh.SLEEPING;ge.wakeupEvent={type:"wakeup"};ge.sleepyEvent={type:"sleepy"};ge.sleepEvent={type:"sleep"};const hM=new b,uM=new Ct,dM=new wA,pM=new PA,fM=new PA;new PA;const gM=new b,mM=new b,BM=new b,wM=new b,vM=new b,yM=new b,_M=new b,xM=new b;class CM{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,A){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!((e.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&ge.STATIC)!==0||e.sleepState===ge.SLEEPING)&&((t.type&ge.STATIC)!==0||t.sleepState===ge.SLEEPING))}intersectionTest(e,t,A,r){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,A,r):this.doBoundingSphereBroadphase(e,t,A,r)}doBoundingSphereBroadphase(e,t,A,r){const s=EM;t.position.vsub(e.position,s);const n=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<n&&(A.push(e),r.push(t))}doBoundingBoxBroadphase(e,t,A,r){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(A.push(e),r.push(t))}makePairsUnique(e,t){const A=bM,r=MM,s=UM,n=e.length;for(let a=0;a!==n;a++)r[a]=e[a],s[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==n;a++){const o=r[a].id,l=s[a].id,c=o<l?`${o},${l}`:`${l},${o}`;A[c]=a,A.keys.push(c)}for(let a=0;a!==A.keys.length;a++){const o=A.keys.pop(),l=A[o];e.push(r[l]),t.push(s[l]),delete A[o]}}setWorld(e){}static boundingSphereCheck(e,t){const A=new b;e.position.vsub(t.position,A);const r=e.shapes[0],s=t.shapes[0];return Math.pow(r.boundingSphereRadius+s.boundingSphereRadius,2)>A.lengthSquared()}aabbQuery(e,t,A){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const EM=new b;new b;new Ct;new b;const bM={keys:[]},MM=[],UM=[];new b;new b;new b;class SM extends CM{constructor(){super()}collisionPairs(e,t,A){const r=e.bodies,s=r.length;let n,a;for(let o=0;o!==s;o++)for(let l=0;l!==o;l++)n=r[o],a=r[l],this.needBroadphaseCollision(n,a)&&this.intersectionTest(n,a,t,A)}aabbQuery(e,t,A){A===void 0&&(A=[]);for(let r=0;r<e.bodies.length;r++){const s=e.bodies[r];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&A.push(s)}return A}}class ka{constructor(){this.rayFromWorld=new b,this.rayToWorld=new b,this.hitNormalWorld=new b,this.hitPointWorld=new b,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,A,r,s,n,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(A),this.hitPointWorld.copy(r),this.shape=s,this.body=n,this.distance=a}}let Zf,$f,eg,tg,Ag,ig,rg;const Bh={CLOSEST:1,ANY:2,ALL:4};Zf=we.types.SPHERE;$f=we.types.PLANE;eg=we.types.BOX;tg=we.types.CYLINDER;Ag=we.types.CONVEXPOLYHEDRON;ig=we.types.HEIGHTFIELD;rg=we.types.TRIMESH;class bt{get[Zf](){return this._intersectSphere}get[$f](){return this._intersectPlane}get[eg](){return this._intersectBox}get[tg](){return this._intersectConvex}get[Ag](){return this._intersectConvex}get[ig](){return this._intersectHeightfield}get[rg](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new b),t===void 0&&(t=new b),this.from=e.clone(),this.to=t.clone(),this.direction=new b,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=bt.ANY,this.result=new ka,this.hasHit=!1,this.callback=A=>{}}intersectWorld(e,t){return this.mode=t.mode||bt.ANY,this.result=t.result||new ka,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Wd),wl.length=0,e.broadphase.aabbQuery(e,Wd,wl),this.intersectBodies(wl),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const A=this.checkCollisionResponse;if(A&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;const r=FM,s=TM;for(let n=0,a=e.shapes.length;n<a;n++){const o=e.shapes[n];if(!(A&&!o.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[n],s),e.quaternion.vmult(e.shapeOffsets[n],r),r.vadd(e.position,r),this.intersectShape(o,s,r,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let A=0,r=e.length;!this.result.shouldStop&&A<r;A++)this.intersectBody(e[A])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,A,r){const s=this.from;if(KM(s,this.direction,A)>e.boundingSphereRadius)return;const n=this[e.type];n&&n.call(this,e,t,A,r,e)}_intersectBox(e,t,A,r,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,A,r,s)}_intersectPlane(e,t,A,r,s){const n=this.from,a=this.to,o=this.direction,l=new b(0,0,1);t.vmult(l,l);const c=new b;n.vsub(A,c);const u=c.dot(l);a.vsub(A,c);const h=c.dot(l);if(u*h>0||n.distanceTo(a)<u)return;const p=l.dot(o);if(Math.abs(p)<this.precision)return;const f=new b,m=new b,g=new b;n.vsub(A,f);const d=-l.dot(f)/p;o.scale(d,m),n.vadd(m,g),this.reportIntersection(l,g,s,r,-1)}getAABB(e){const{lowerBound:t,upperBound:A}=e,r=this.to,s=this.from;t.x=Math.min(r.x,s.x),t.y=Math.min(r.y,s.y),t.z=Math.min(r.z,s.z),A.x=Math.max(r.x,s.x),A.y=Math.max(r.y,s.y),A.z=Math.max(r.z,s.z)}_intersectHeightfield(e,t,A,r,s){e.data,e.elementSize;const n=QM;n.from.copy(this.from),n.to.copy(this.to),At.pointToLocalFrame(A,t,n.from,n.from),At.pointToLocalFrame(A,t,n.to,n.to),n.updateDirection();const a=LM;let o,l,c,u;o=l=0,c=u=e.data.length-1;const h=new wA;n.getAABB(h),e.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),o=Math.max(o,a[0]),l=Math.max(l,a[1]),e.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),c=Math.min(c,a[0]+1),u=Math.min(u,a[1]+1);for(let p=o;p<c;p++)for(let f=l;f<u;f++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(p,f,h),!!h.overlapsRay(n)){if(e.getConvexTrianglePillar(p,f,!1),At.pointToWorldFrame(A,t,e.pillarOffset,la),this._intersectConvex(e.pillarConvex,t,la,r,s,Xd),this.result.shouldStop)return;e.getConvexTrianglePillar(p,f,!0),At.pointToWorldFrame(A,t,e.pillarOffset,la),this._intersectConvex(e.pillarConvex,t,la,r,s,Xd)}}}_intersectSphere(e,t,A,r,s){const n=this.from,a=this.to,o=e.radius,l=(a.x-n.x)**2+(a.y-n.y)**2+(a.z-n.z)**2,c=2*((a.x-n.x)*(n.x-A.x)+(a.y-n.y)*(n.y-A.y)+(a.z-n.z)*(n.z-A.z)),u=(n.x-A.x)**2+(n.y-A.y)**2+(n.z-A.z)**2-o**2,h=c**2-4*l*u,p=IM,f=RM;if(!(h<0))if(h===0)n.lerp(a,h,p),p.vsub(A,f),f.normalize(),this.reportIntersection(f,p,s,r,-1);else{const m=(-c-Math.sqrt(h))/(2*l),g=(-c+Math.sqrt(h))/(2*l);if(m>=0&&m<=1&&(n.lerp(a,m,p),p.vsub(A,f),f.normalize(),this.reportIntersection(f,p,s,r,-1)),this.result.shouldStop)return;g>=0&&g<=1&&(n.lerp(a,g,p),p.vsub(A,f),f.normalize(),this.reportIntersection(f,p,s,r,-1))}}_intersectConvex(e,t,A,r,s,n){const a=DM,o=Yd,l=n&&n.faceList||null,c=e.faces,u=e.vertices,h=e.faceNormals,p=this.direction,f=this.from,m=this.to,g=f.distanceTo(m),d=l?l.length:c.length,B=this.result;for(let v=0;!B.shouldStop&&v<d;v++){const y=l?l[v]:v,x=c[y],w=h[y],M=t,S=A;o.copy(u[x[0]]),M.vmult(o,o),o.vadd(S,o),o.vsub(f,o),M.vmult(w,a);const C=p.dot(a);if(Math.abs(C)<this.precision)continue;const _=a.dot(o)/C;if(!(_<0)){p.scale(_,oA),oA.vadd(f,oA),IA.copy(u[x[0]]),M.vmult(IA,IA),S.vadd(IA,IA);for(let F=1;!B.shouldStop&&F<x.length-1;F++){zA.copy(u[x[F]]),GA.copy(u[x[F+1]]),M.vmult(zA,zA),M.vmult(GA,GA),S.vadd(zA,zA),S.vadd(GA,GA);const T=oA.distanceTo(f);!(bt.pointInTriangle(oA,IA,zA,GA)||bt.pointInTriangle(oA,zA,IA,GA))||T>g||this.reportIntersection(a,oA,s,r,y)}}}}_intersectTrimesh(e,t,A,r,s,n){const a=PM,o=zM,l=GM,c=Yd,u=HM,h=NM,p=OM,f=VM,m=kM,g=e.indices;e.vertices;const d=this.from,B=this.to,v=this.direction;l.position.copy(A),l.quaternion.copy(t),At.vectorToLocalFrame(A,t,v,u),At.pointToLocalFrame(A,t,d,h),At.pointToLocalFrame(A,t,B,p),p.x*=e.scale.x,p.y*=e.scale.y,p.z*=e.scale.z,h.x*=e.scale.x,h.y*=e.scale.y,h.z*=e.scale.z,p.vsub(h,u),u.normalize();const y=h.distanceSquared(p);e.tree.rayQuery(this,l,o);for(let x=0,w=o.length;!this.result.shouldStop&&x!==w;x++){const M=o[x];e.getNormal(M,a),e.getVertex(g[M*3],IA),IA.vsub(h,c);const S=u.dot(a),C=a.dot(c)/S;if(C<0)continue;u.scale(C,oA),oA.vadd(h,oA),e.getVertex(g[M*3+1],zA),e.getVertex(g[M*3+2],GA);const _=oA.distanceSquared(h);!(bt.pointInTriangle(oA,zA,IA,GA)||bt.pointInTriangle(oA,IA,zA,GA))||_>y||(At.vectorToWorldFrame(t,a,m),At.pointToWorldFrame(A,t,oA,f),this.reportIntersection(m,f,s,r,M))}o.length=0}reportIntersection(e,t,A,r,s){const n=this.from,a=this.to,o=n.distanceTo(t),l=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case bt.ALL:this.hasHit=!0,l.set(n,a,e,t,A,r,o),l.hasHit=!0,this.callback(l);break;case bt.CLOSEST:(o<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(n,a,e,t,A,r,o));break;case bt.ANY:this.hasHit=!0,l.hasHit=!0,l.set(n,a,e,t,A,r,o),l.shouldStop=!0;break}}static pointInTriangle(e,t,A,r){r.vsub(t,nr),A.vsub(t,Es),e.vsub(t,vl);const s=nr.dot(nr),n=nr.dot(Es),a=nr.dot(vl),o=Es.dot(Es),l=Es.dot(vl);let c,u;return(c=o*a-n*l)>=0&&(u=s*l-n*a)>=0&&c+u<s*o-n*n}}bt.CLOSEST=Bh.CLOSEST;bt.ANY=Bh.ANY;bt.ALL=Bh.ALL;const Wd=new wA,wl=[],Es=new b,vl=new b,FM=new b,TM=new Ct,oA=new b,IA=new b,zA=new b,GA=new b;new b;new ka;const Xd={faceList:[0]},la=new b,QM=new bt,LM=[],IM=new b,RM=new b,DM=new b;new b;new b;const Yd=new b,PM=new b,HM=new b,NM=new b,OM=new b,kM=new b,VM=new b;new wA;const zM=[],GM=new At,nr=new b,ca=new b;function KM(i,e,t){t.vsub(i,nr);const A=nr.dot(e);return e.scale(A,ca),ca.vadd(i,ca),t.distanceTo(ca)}class WM{static defaults(e,t){e===void 0&&(e={});for(let A in t)A in e||(e[A]=t[A]);return e}}class jd{constructor(){this.spatial=new b,this.rotational=new b}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class nn{constructor(e,t,A,r){A===void 0&&(A=-1e6),r===void 0&&(r=1e6),this.id=nn.idCounter++,this.minForce=A,this.maxForce=r,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new jd,this.jacobianElementB=new jd,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,A){const r=t,s=e,n=A;this.a=4/(n*(1+4*r)),this.b=4*r/(1+4*r),this.eps=4/(n*n*s*(1+4*r))}computeB(e,t,A){const r=this.computeGW(),s=this.computeGq(),n=this.computeGiMf();return-s*e-r*t-n*A}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,A=this.bi,r=this.bj,s=A.position,n=r.position;return e.spatial.dot(s)+t.spatial.dot(n)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,A=this.bi,r=this.bj,s=A.velocity,n=r.velocity,a=A.angularVelocity,o=r.angularVelocity;return e.multiplyVectors(s,a)+t.multiplyVectors(n,o)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,A=this.bi,r=this.bj,s=A.vlambda,n=r.vlambda,a=A.wlambda,o=r.wlambda;return e.multiplyVectors(s,a)+t.multiplyVectors(n,o)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,A=this.bi,r=this.bj,s=A.force,n=A.torque,a=r.force,o=r.torque,l=A.invMassSolve,c=r.invMassSolve;return s.scale(l,qd),a.scale(c,Jd),A.invInertiaWorldSolve.vmult(n,Zd),r.invInertiaWorldSolve.vmult(o,$d),e.multiplyVectors(qd,Zd)+t.multiplyVectors(Jd,$d)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,A=this.bi,r=this.bj,s=A.invMassSolve,n=r.invMassSolve,a=A.invInertiaWorldSolve,o=r.invInertiaWorldSolve;let l=s+n;return a.vmult(e.rotational,ha),l+=ha.dot(e.rotational),o.vmult(t.rotational,ha),l+=ha.dot(t.rotational),l}addToWlambda(e){const t=this.jacobianElementA,A=this.jacobianElementB,r=this.bi,s=this.bj,n=XM;r.vlambda.addScaledVector(r.invMassSolve*e,t.spatial,r.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,A.spatial,s.vlambda),r.invInertiaWorldSolve.vmult(t.rotational,n),r.wlambda.addScaledVector(e,n,r.wlambda),s.invInertiaWorldSolve.vmult(A.rotational,n),s.wlambda.addScaledVector(e,n,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}nn.idCounter=0;const qd=new b,Jd=new b,Zd=new b,$d=new b,ha=new b,XM=new b;class YM extends nn{constructor(e,t,A){A===void 0&&(A=1e6),super(e,t,0,A),this.restitution=0,this.ri=new b,this.rj=new b,this.ni=new b}computeB(e){const t=this.a,A=this.b,r=this.bi,s=this.bj,n=this.ri,a=this.rj,o=jM,l=qM,c=r.velocity,u=r.angularVelocity;r.force,r.torque;const h=s.velocity,p=s.angularVelocity;s.force,s.torque;const f=JM,m=this.jacobianElementA,g=this.jacobianElementB,d=this.ni;n.cross(d,o),a.cross(d,l),d.negate(m.spatial),o.negate(m.rotational),g.spatial.copy(d),g.rotational.copy(l),f.copy(s.position),f.vadd(a,f),f.vsub(r.position,f),f.vsub(n,f);const B=d.dot(f),v=this.restitution+1,y=v*h.dot(d)-v*c.dot(d)+p.dot(l)-u.dot(o),x=this.computeGiMf();return-B*t-y*A-e*x}getImpactVelocityAlongNormal(){const e=ZM,t=$M,A=eU,r=tU,s=AU;return this.bi.position.vadd(this.ri,A),this.bj.position.vadd(this.rj,r),this.bi.getVelocityAtWorldPoint(A,e),this.bj.getVelocityAtWorldPoint(r,t),e.vsub(t,s),this.ni.dot(s)}}const jM=new b,qM=new b,JM=new b,ZM=new b,$M=new b,eU=new b,tU=new b,AU=new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;class ep extends nn{constructor(e,t,A){super(e,t,-A,A),this.ri=new b,this.rj=new b,this.t=new b}computeB(e){this.a;const t=this.b;this.bi,this.bj;const A=this.ri,r=this.rj,s=iU,n=rU,a=this.t;A.cross(a,s),r.cross(a,n);const o=this.jacobianElementA,l=this.jacobianElementB;a.negate(o.spatial),s.negate(o.rotational),l.spatial.copy(a),l.rotational.copy(n);const c=this.computeGW(),u=this.computeGiMf();return-c*t-e*u}}const iU=new b,rU=new b;class an{constructor(e,t,A){A=WM.defaults(A,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=an.idCounter++,this.materials=[e,t],this.friction=A.friction,this.restitution=A.restitution,this.contactEquationStiffness=A.contactEquationStiffness,this.contactEquationRelaxation=A.contactEquationRelaxation,this.frictionEquationStiffness=A.frictionEquationStiffness,this.frictionEquationRelaxation=A.frictionEquationRelaxation}}an.idCounter=0;class ns{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=ns.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}ns.idCounter=0;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new bt;new b;new b;new b;new b(1,0,0),new b(0,1,0),new b(0,0,1);new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new wA;new b;new wA;new b;new b;new b;new b;new b;new b;new b;new wA;new b;new At;new wA;class sU{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,A=t.indexOf(e);A!==-1&&t.splice(A,1)}removeAllEquations(){this.equations.length=0}}class nU extends sU{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let A=0;const r=this.iterations,s=this.tolerance*this.tolerance,n=this.equations,a=n.length,o=t.bodies,l=o.length,c=e;let u,h,p,f,m,g;if(a!==0)for(let y=0;y!==l;y++)o[y].updateSolveMassProperties();const d=oU,B=lU,v=aU;d.length=a,B.length=a,v.length=a;for(let y=0;y!==a;y++){const x=n[y];v[y]=0,B[y]=x.computeB(c),d[y]=1/x.computeC()}if(a!==0){for(let w=0;w!==l;w++){const M=o[w],S=M.vlambda,C=M.wlambda;S.set(0,0,0),C.set(0,0,0)}for(A=0;A!==r;A++){f=0;for(let w=0;w!==a;w++){const M=n[w];u=B[w],h=d[w],g=v[w],m=M.computeGWlambda(),p=h*(u-m-M.eps*g),g+p<M.minForce?p=M.minForce-g:g+p>M.maxForce&&(p=M.maxForce-g),v[w]+=p,f+=p>0?p:-p,M.addToWlambda(p)}if(f*f<s)break}for(let w=0;w!==l;w++){const M=o[w],S=M.velocity,C=M.angularVelocity;M.vlambda.vmul(M.linearFactor,M.vlambda),S.vadd(M.vlambda,S),M.wlambda.vmul(M.angularFactor,M.wlambda),C.vadd(M.wlambda,C)}let y=n.length;const x=1/c;for(;y--;)n[y].multiplier=v[y]*x}return A}}const aU=[],oU=[],lU=[];class cU{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class hU extends cU{constructor(){super(...arguments),this.type=b}constructObject(){return new b}}const dt={sphereSphere:we.types.SPHERE,spherePlane:we.types.SPHERE|we.types.PLANE,boxBox:we.types.BOX|we.types.BOX,sphereBox:we.types.SPHERE|we.types.BOX,planeBox:we.types.PLANE|we.types.BOX,convexConvex:we.types.CONVEXPOLYHEDRON,sphereConvex:we.types.SPHERE|we.types.CONVEXPOLYHEDRON,planeConvex:we.types.PLANE|we.types.CONVEXPOLYHEDRON,boxConvex:we.types.BOX|we.types.CONVEXPOLYHEDRON,sphereHeightfield:we.types.SPHERE|we.types.HEIGHTFIELD,boxHeightfield:we.types.BOX|we.types.HEIGHTFIELD,convexHeightfield:we.types.CONVEXPOLYHEDRON|we.types.HEIGHTFIELD,sphereParticle:we.types.PARTICLE|we.types.SPHERE,planeParticle:we.types.PLANE|we.types.PARTICLE,boxParticle:we.types.BOX|we.types.PARTICLE,convexParticle:we.types.PARTICLE|we.types.CONVEXPOLYHEDRON,cylinderCylinder:we.types.CYLINDER,sphereCylinder:we.types.SPHERE|we.types.CYLINDER,planeCylinder:we.types.PLANE|we.types.CYLINDER,boxCylinder:we.types.BOX|we.types.CYLINDER,convexCylinder:we.types.CONVEXPOLYHEDRON|we.types.CYLINDER,heightfieldCylinder:we.types.HEIGHTFIELD|we.types.CYLINDER,particleCylinder:we.types.PARTICLE|we.types.CYLINDER,sphereTrimesh:we.types.SPHERE|we.types.TRIMESH,planeTrimesh:we.types.PLANE|we.types.TRIMESH};class uU{get[dt.sphereSphere](){return this.sphereSphere}get[dt.spherePlane](){return this.spherePlane}get[dt.boxBox](){return this.boxBox}get[dt.sphereBox](){return this.sphereBox}get[dt.planeBox](){return this.planeBox}get[dt.convexConvex](){return this.convexConvex}get[dt.sphereConvex](){return this.sphereConvex}get[dt.planeConvex](){return this.planeConvex}get[dt.boxConvex](){return this.boxConvex}get[dt.sphereHeightfield](){return this.sphereHeightfield}get[dt.boxHeightfield](){return this.boxHeightfield}get[dt.convexHeightfield](){return this.convexHeightfield}get[dt.sphereParticle](){return this.sphereParticle}get[dt.planeParticle](){return this.planeParticle}get[dt.boxParticle](){return this.boxParticle}get[dt.convexParticle](){return this.convexParticle}get[dt.cylinderCylinder](){return this.convexConvex}get[dt.sphereCylinder](){return this.sphereConvex}get[dt.planeCylinder](){return this.planeConvex}get[dt.boxCylinder](){return this.boxConvex}get[dt.convexCylinder](){return this.convexConvex}get[dt.heightfieldCylinder](){return this.heightfieldCylinder}get[dt.particleCylinder](){return this.particleCylinder}get[dt.sphereTrimesh](){return this.sphereTrimesh}get[dt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new hU,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,A,r,s,n){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new YM(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&A.collisionResponse&&r.collisionResponse;const o=this.currentContactMaterial;a.restitution=o.restitution,a.setSpookParams(o.contactEquationStiffness,o.contactEquationRelaxation,this.world.dt);const l=A.material||e.material,c=r.material||t.material;return l&&c&&l.restitution>=0&&c.restitution>=0&&(a.restitution=l.restitution*c.restitution),a.si=s||A,a.sj=n||r,a}createFrictionEquationsFromContact(e,t){const A=e.bi,r=e.bj,s=e.si,n=e.sj,a=this.world,o=this.currentContactMaterial;let l=o.friction;const c=s.material||A.material,u=n.material||r.material;if(c&&u&&c.friction>=0&&u.friction>=0&&(l=c.friction*u.friction),l>0){const h=l*(a.frictionGravity||a.gravity).length();let p=A.invMass+r.invMass;p>0&&(p=1/p);const f=this.frictionEquationPool,m=f.length?f.pop():new ep(A,r,h*p),g=f.length?f.pop():new ep(A,r,h*p);return m.bi=g.bi=A,m.bj=g.bj=r,m.minForce=g.minForce=-h*p,m.maxForce=g.maxForce=h*p,m.ri.copy(e.ri),m.rj.copy(e.rj),g.ri.copy(e.ri),g.rj.copy(e.rj),e.ni.tangents(m.t,g.t),m.setSpookParams(o.frictionEquationStiffness,o.frictionEquationRelaxation,a.dt),g.setSpookParams(o.frictionEquationStiffness,o.frictionEquationRelaxation,a.dt),m.enabled=g.enabled=e.enabled,t.push(m,g),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const A=this.frictionResult[this.frictionResult.length-2],r=this.frictionResult[this.frictionResult.length-1];ir.setZero(),Pr.setZero(),Hr.setZero();const s=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==s?(ir.vadd(t.ni,ir),Pr.vadd(t.ri,Pr),Hr.vadd(t.rj,Hr)):(ir.vsub(t.ni,ir),Pr.vadd(t.rj,Pr),Hr.vadd(t.ri,Hr));const n=1/e;Pr.scale(n,A.ri),Hr.scale(n,A.rj),r.ri.copy(A.ri),r.rj.copy(A.rj),ir.normalize(),ir.tangents(A.t,r.t)}getContacts(e,t,A,r,s,n,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=r,this.frictionResult=n;const o=fU,l=gU,c=dU,u=pU;for(let h=0,p=e.length;h!==p;h++){const f=e[h],m=t[h];let g=null;f.material&&m.material&&(g=A.getContactMaterial(f.material,m.material)||null);const d=f.type&ge.KINEMATIC&&m.type&ge.STATIC||f.type&ge.STATIC&&m.type&ge.KINEMATIC||f.type&ge.KINEMATIC&&m.type&ge.KINEMATIC;for(let B=0;B<f.shapes.length;B++){f.quaternion.mult(f.shapeOrientations[B],o),f.quaternion.vmult(f.shapeOffsets[B],c),c.vadd(f.position,c);const v=f.shapes[B];for(let y=0;y<m.shapes.length;y++){m.quaternion.mult(m.shapeOrientations[y],l),m.quaternion.vmult(m.shapeOffsets[y],u),u.vadd(m.position,u);const x=m.shapes[y];if(!(v.collisionFilterMask&x.collisionFilterGroup&&x.collisionFilterMask&v.collisionFilterGroup)||c.distanceTo(u)>v.boundingSphereRadius+x.boundingSphereRadius)continue;let w=null;v.material&&x.material&&(w=A.getContactMaterial(v.material,x.material)||null),this.currentContactMaterial=w||g||A.defaultContactMaterial;const M=v.type|x.type,S=this[M];if(S){let C=!1;v.type<x.type?C=S.call(this,v,x,c,u,o,l,f,m,v,x,d):C=S.call(this,x,v,u,c,l,o,m,f,v,x,d),C&&d&&(A.shapeOverlapKeeper.set(v.id,x.id),A.bodyOverlapKeeper.set(f.id,m.id))}}}}}sphereSphere(e,t,A,r,s,n,a,o,l,c,u){if(u)return A.distanceSquared(r)<(e.radius+t.radius)**2;const h=this.createContactEquation(a,o,e,t,l,c);r.vsub(A,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(e.radius,h.ri),h.rj.scale(-t.radius,h.rj),h.ri.vadd(A,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(r,h.rj),h.rj.vsub(o.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(e,t,A,r,s,n,a,o,l,c,u){const h=this.createContactEquation(a,o,e,t,l,c);if(h.ni.set(0,0,1),n.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(e.radius,h.ri),A.vsub(r,ua),h.ni.scale(h.ni.dot(ua),tp),ua.vsub(tp,h.rj),-ua.dot(h.ni)<=e.radius){if(u)return!0;const p=h.ri,f=h.rj;p.vadd(A,p),p.vsub(a.position,p),f.vadd(r,f),f.vsub(o.position,f),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(e,t,A,r,s,n,a,o,l,c,u){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,A,r,s,n,a,o,e,t,u)}sphereBox(e,t,A,r,s,n,a,o,l,c,u){const h=this.v3pool,p=VU;A.vsub(r,da),t.getSideNormals(p,n);const f=e.radius;let m=!1;const g=GU,d=KU,B=WU;let v=null,y=0,x=0,w=0,M=null;for(let R=0,G=p.length;R!==G&&m===!1;R++){const z=NU;z.copy(p[R]);const X=z.length();z.normalize();const te=da.dot(z);if(te<X+f&&te>0){const ve=OU,ie=kU;ve.copy(p[(R+1)%3]),ie.copy(p[(R+2)%3]);const Ne=ve.length(),Ye=ie.length();ve.normalize(),ie.normalize();const Ke=da.dot(ve),Y=da.dot(ie);if(Ke<Ne&&Ke>-Ne&&Y<Ye&&Y>-Ye){const q=Math.abs(te-X-f);if((M===null||q<M)&&(M=q,x=Ke,w=Y,v=X,g.copy(z),d.copy(ve),B.copy(ie),y++,u))return!0}}}if(y){m=!0;const R=this.createContactEquation(a,o,e,t,l,c);g.scale(-f,R.ri),R.ni.copy(g),R.ni.negate(R.ni),g.scale(v,g),d.scale(x,d),g.vadd(d,g),B.scale(w,B),g.vadd(B,R.rj),R.ri.vadd(A,R.ri),R.ri.vsub(a.position,R.ri),R.rj.vadd(r,R.rj),R.rj.vsub(o.position,R.rj),this.result.push(R),this.createFrictionEquationsFromContact(R,this.frictionResult)}let S=h.get();const C=zU;for(let R=0;R!==2&&!m;R++)for(let G=0;G!==2&&!m;G++)for(let z=0;z!==2&&!m;z++)if(S.set(0,0,0),R?S.vadd(p[0],S):S.vsub(p[0],S),G?S.vadd(p[1],S):S.vsub(p[1],S),z?S.vadd(p[2],S):S.vsub(p[2],S),r.vadd(S,C),C.vsub(A,C),C.lengthSquared()<f*f){if(u)return!0;m=!0;const X=this.createContactEquation(a,o,e,t,l,c);X.ri.copy(C),X.ri.normalize(),X.ni.copy(X.ri),X.ri.scale(f,X.ri),X.rj.copy(S),X.ri.vadd(A,X.ri),X.ri.vsub(a.position,X.ri),X.rj.vadd(r,X.rj),X.rj.vsub(o.position,X.rj),this.result.push(X),this.createFrictionEquationsFromContact(X,this.frictionResult)}h.release(S),S=null;const _=h.get(),F=h.get(),T=h.get(),L=h.get(),I=h.get(),H=p.length;for(let R=0;R!==H&&!m;R++)for(let G=0;G!==H&&!m;G++)if(R%3!==G%3){p[G].cross(p[R],_),_.normalize(),p[R].vadd(p[G],F),T.copy(A),T.vsub(F,T),T.vsub(r,T);const z=T.dot(_);_.scale(z,L);let X=0;for(;X===R%3||X===G%3;)X++;I.copy(A),I.vsub(L,I),I.vsub(F,I),I.vsub(r,I);const te=Math.abs(z),ve=I.length();if(te<p[X].length()&&ve<f){if(u)return!0;m=!0;const ie=this.createContactEquation(a,o,e,t,l,c);F.vadd(L,ie.rj),ie.rj.copy(ie.rj),I.negate(ie.ni),ie.ni.normalize(),ie.ri.copy(ie.rj),ie.ri.vadd(r,ie.ri),ie.ri.vsub(A,ie.ri),ie.ri.normalize(),ie.ri.scale(f,ie.ri),ie.ri.vadd(A,ie.ri),ie.ri.vsub(a.position,ie.ri),ie.rj.vadd(r,ie.rj),ie.rj.vsub(o.position,ie.rj),this.result.push(ie),this.createFrictionEquationsFromContact(ie,this.frictionResult)}}h.release(_,F,T,L,I)}planeBox(e,t,A,r,s,n,a,o,l,c,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,A,r,s,n,a,o,e,t,u)}convexConvex(e,t,A,r,s,n,a,o,l,c,u,h,p){const f=aS;if(!(A.distanceTo(r)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,A,s,r,n,f,h,p)){const m=[],g=oS;e.clipAgainstHull(A,s,t,r,n,f,-100,100,m);let d=0;for(let B=0;B!==m.length;B++){if(u)return!0;const v=this.createContactEquation(a,o,e,t,l,c),y=v.ri,x=v.rj;f.negate(v.ni),m[B].normal.negate(g),g.scale(m[B].depth,g),m[B].point.vadd(g,y),x.copy(m[B].point),y.vsub(A,y),x.vsub(r,x),y.vadd(A,y),y.vsub(a.position,y),x.vadd(r,x),x.vsub(o.position,x),this.result.push(v),d++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&d&&this.createFrictionFromAverage(d)}}sphereConvex(e,t,A,r,s,n,a,o,l,c,u){const h=this.v3pool;A.vsub(r,XU);const p=t.faceNormals,f=t.faces,m=t.vertices,g=e.radius;let d=!1;for(let B=0;B!==m.length;B++){const v=m[B],y=JU;n.vmult(v,y),r.vadd(y,y);const x=qU;if(y.vsub(A,x),x.lengthSquared()<g*g){if(u)return!0;d=!0;const w=this.createContactEquation(a,o,e,t,l,c);w.ri.copy(x),w.ri.normalize(),w.ni.copy(w.ri),w.ri.scale(g,w.ri),y.vsub(r,w.rj),w.ri.vadd(A,w.ri),w.ri.vsub(a.position,w.ri),w.rj.vadd(r,w.rj),w.rj.vsub(o.position,w.rj),this.result.push(w),this.createFrictionEquationsFromContact(w,this.frictionResult);return}}for(let B=0,v=f.length;B!==v&&d===!1;B++){const y=p[B],x=f[B],w=ZU;n.vmult(y,w);const M=$U;n.vmult(m[x[0]],M),M.vadd(r,M);const S=eS;w.scale(-g,S),A.vadd(S,S);const C=tS;S.vsub(M,C);const _=C.dot(w),F=AS;if(A.vsub(M,F),_<0&&F.dot(w)>0){const T=[];for(let L=0,I=x.length;L!==I;L++){const H=h.get();n.vmult(m[x[L]],H),r.vadd(H,H),T.push(H)}if(HU(T,w,A)){if(u)return!0;d=!0;const L=this.createContactEquation(a,o,e,t,l,c);w.scale(-g,L.ri),w.negate(L.ni);const I=h.get();w.scale(-_,I);const H=h.get();w.scale(-g,H),A.vsub(r,L.rj),L.rj.vadd(H,L.rj),L.rj.vadd(I,L.rj),L.rj.vadd(r,L.rj),L.rj.vsub(o.position,L.rj),L.ri.vadd(A,L.ri),L.ri.vsub(a.position,L.ri),h.release(I),h.release(H),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult);for(let R=0,G=T.length;R!==G;R++)h.release(T[R]);return}else for(let L=0;L!==x.length;L++){const I=h.get(),H=h.get();n.vmult(m[x[(L+1)%x.length]],I),n.vmult(m[x[(L+2)%x.length]],H),r.vadd(I,I),r.vadd(H,H);const R=YU;H.vsub(I,R);const G=jU;R.unit(G);const z=h.get(),X=h.get();A.vsub(I,X);const te=X.dot(G);G.scale(te,z),z.vadd(I,z);const ve=h.get();if(z.vsub(A,ve),te>0&&te*te<R.lengthSquared()&&ve.lengthSquared()<g*g){if(u)return!0;const ie=this.createContactEquation(a,o,e,t,l,c);z.vsub(r,ie.rj),z.vsub(A,ie.ni),ie.ni.normalize(),ie.ni.scale(g,ie.ri),ie.rj.vadd(r,ie.rj),ie.rj.vsub(o.position,ie.rj),ie.ri.vadd(A,ie.ri),ie.ri.vsub(a.position,ie.ri),this.result.push(ie),this.createFrictionEquationsFromContact(ie,this.frictionResult);for(let Ne=0,Ye=T.length;Ne!==Ye;Ne++)h.release(T[Ne]);h.release(I),h.release(H),h.release(z),h.release(ve),h.release(X);return}h.release(I),h.release(H),h.release(z),h.release(ve),h.release(X)}for(let L=0,I=T.length;L!==I;L++)h.release(T[L])}}}planeConvex(e,t,A,r,s,n,a,o,l,c,u){const h=iS,p=rS;p.set(0,0,1),s.vmult(p,p);let f=0;const m=sS;for(let g=0;g!==t.vertices.length;g++)if(h.copy(t.vertices[g]),n.vmult(h,h),r.vadd(h,h),h.vsub(A,m),p.dot(m)<=0){if(u)return!0;const d=this.createContactEquation(a,o,e,t,l,c),B=nS;p.scale(p.dot(m),B),h.vsub(B,B),B.vsub(A,d.ri),d.ni.copy(p),h.vsub(r,d.rj),d.ri.vadd(A,d.ri),d.ri.vsub(a.position,d.ri),d.rj.vadd(r,d.rj),d.rj.vsub(o.position,d.rj),this.result.push(d),f++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(d,this.frictionResult)}this.enableFrictionReduction&&f&&this.createFrictionFromAverage(f)}boxConvex(e,t,A,r,s,n,a,o,l,c,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,A,r,s,n,a,o,e,t,u)}sphereHeightfield(e,t,A,r,s,n,a,o,l,c,u){const h=t.data,p=e.radius,f=t.elementSize,m=vS,g=wS;At.pointToLocalFrame(r,n,A,g);let d=Math.floor((g.x-p)/f)-1,B=Math.ceil((g.x+p)/f)+1,v=Math.floor((g.y-p)/f)-1,y=Math.ceil((g.y+p)/f)+1;if(B<0||y<0||d>h.length||v>h[0].length)return;d<0&&(d=0),B<0&&(B=0),v<0&&(v=0),y<0&&(y=0),d>=h.length&&(d=h.length-1),B>=h.length&&(B=h.length-1),y>=h[0].length&&(y=h[0].length-1),v>=h[0].length&&(v=h[0].length-1);const x=[];t.getRectMinMax(d,v,B,y,x);const w=x[0],M=x[1];if(g.z-p>M||g.z+p<w)return;const S=this.result;for(let C=d;C<B;C++)for(let _=v;_<y;_++){const F=S.length;let T=!1;if(t.getConvexTrianglePillar(C,_,!1),At.pointToWorldFrame(r,n,t.pillarOffset,m),A.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(T=this.sphereConvex(e,t.pillarConvex,A,m,s,n,a,o,e,t,u)),u&&T||(t.getConvexTrianglePillar(C,_,!0),At.pointToWorldFrame(r,n,t.pillarOffset,m),A.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(T=this.sphereConvex(e,t.pillarConvex,A,m,s,n,a,o,e,t,u)),u&&T))return!0;if(S.length-F>2)return}}boxHeightfield(e,t,A,r,s,n,a,o,l,c,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,A,r,s,n,a,o,e,t,u)}convexHeightfield(e,t,A,r,s,n,a,o,l,c,u){const h=t.data,p=t.elementSize,f=e.boundingSphereRadius,m=mS,g=BS,d=gS;At.pointToLocalFrame(r,n,A,d);let B=Math.floor((d.x-f)/p)-1,v=Math.ceil((d.x+f)/p)+1,y=Math.floor((d.y-f)/p)-1,x=Math.ceil((d.y+f)/p)+1;if(v<0||x<0||B>h.length||y>h[0].length)return;B<0&&(B=0),v<0&&(v=0),y<0&&(y=0),x<0&&(x=0),B>=h.length&&(B=h.length-1),v>=h.length&&(v=h.length-1),x>=h[0].length&&(x=h[0].length-1),y>=h[0].length&&(y=h[0].length-1);const w=[];t.getRectMinMax(B,y,v,x,w);const M=w[0],S=w[1];if(!(d.z-f>S||d.z+f<M))for(let C=B;C<v;C++)for(let _=y;_<x;_++){let F=!1;if(t.getConvexTrianglePillar(C,_,!1),At.pointToWorldFrame(r,n,t.pillarOffset,m),A.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(F=this.convexConvex(e,t.pillarConvex,A,m,s,n,a,o,null,null,u,g,null)),u&&F||(t.getConvexTrianglePillar(C,_,!0),At.pointToWorldFrame(r,n,t.pillarOffset,m),A.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(F=this.convexConvex(e,t.pillarConvex,A,m,s,n,a,o,null,null,u,g,null)),u&&F))return!0}}sphereParticle(e,t,A,r,s,n,a,o,l,c,u){const h=uS;if(h.set(0,0,1),r.vsub(A,h),h.lengthSquared()<=e.radius*e.radius){if(u)return!0;const p=this.createContactEquation(o,a,t,e,l,c);h.normalize(),p.rj.copy(h),p.rj.scale(e.radius,p.rj),p.ni.copy(h),p.ni.negate(p.ni),p.ri.set(0,0,0),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}planeParticle(e,t,A,r,s,n,a,o,l,c,u){const h=lS;h.set(0,0,1),a.quaternion.vmult(h,h);const p=cS;if(r.vsub(a.position,p),h.dot(p)<=0){if(u)return!0;const f=this.createContactEquation(o,a,t,e,l,c);f.ni.copy(h),f.ni.negate(f.ni),f.ri.set(0,0,0);const m=hS;h.scale(h.dot(r),m),r.vsub(m,m),f.rj.copy(m),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}}boxParticle(e,t,A,r,s,n,a,o,l,c,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,A,r,s,n,a,o,e,t,u)}convexParticle(e,t,A,r,s,n,a,o,l,c,u){let h=-1;const p=pS,f=fS;let m=null;const g=dS;if(g.copy(r),g.vsub(A,g),s.conjugate(Ap),Ap.vmult(g,g),e.pointIsInside(g)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(A,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let d=0,B=e.faces.length;d!==B;d++){const v=[e.worldVertices[e.faces[d][0]]],y=e.worldFaceNormals[d];r.vsub(v[0],ip);const x=-y.dot(ip);if(m===null||Math.abs(x)<Math.abs(m)){if(u)return!0;m=x,h=d,p.copy(y)}}if(h!==-1){const d=this.createContactEquation(o,a,t,e,l,c);p.scale(m,f),f.vadd(r,f),f.vsub(A,f),d.rj.copy(f),p.negate(d.ni),d.ri.set(0,0,0);const B=d.ri,v=d.rj;B.vadd(r,B),B.vsub(o.position,B),v.vadd(A,v),v.vsub(a.position,v),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,A,r,s,n,a,o,l,c,u){return this.convexHeightfield(t,e,r,A,n,s,o,a,l,c,u)}particleCylinder(e,t,A,r,s,n,a,o,l,c,u){return this.convexParticle(t,e,r,A,n,s,o,a,l,c,u)}sphereTrimesh(e,t,A,r,s,n,a,o,l,c,u){const h=CU,p=EU,f=bU,m=MU,g=UU,d=SU,B=LU,v=xU,y=yU,x=IU;At.pointToLocalFrame(r,n,A,g);const w=e.radius;B.lowerBound.set(g.x-w,g.y-w,g.z-w),B.upperBound.set(g.x+w,g.y+w,g.z+w),t.getTrianglesInAABB(B,x);const M=_U,S=e.radius*e.radius;for(let L=0;L<x.length;L++)for(let I=0;I<3;I++)if(t.getVertex(t.indices[x[L]*3+I],M),M.vsub(g,y),y.lengthSquared()<=S){if(v.copy(M),At.pointToWorldFrame(r,n,v,M),M.vsub(A,y),u)return!0;let H=this.createContactEquation(a,o,e,t,l,c);H.ni.copy(y),H.ni.normalize(),H.ri.copy(H.ni),H.ri.scale(e.radius,H.ri),H.ri.vadd(A,H.ri),H.ri.vsub(a.position,H.ri),H.rj.copy(M),H.rj.vsub(o.position,H.rj),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}for(let L=0;L<x.length;L++)for(let I=0;I<3;I++){t.getVertex(t.indices[x[L]*3+I],h),t.getVertex(t.indices[x[L]*3+(I+1)%3],p),p.vsub(h,f),g.vsub(p,d);const H=d.dot(f);g.vsub(h,d);let R=d.dot(f);if(R>0&&H<0&&(g.vsub(h,d),m.copy(f),m.normalize(),R=d.dot(m),m.scale(R,d),d.vadd(h,d),d.distanceTo(g)<e.radius)){if(u)return!0;const G=this.createContactEquation(a,o,e,t,l,c);d.vsub(g,G.ni),G.ni.normalize(),G.ni.scale(e.radius,G.ri),G.ri.vadd(A,G.ri),G.ri.vsub(a.position,G.ri),At.pointToWorldFrame(r,n,d,d),d.vsub(o.position,G.rj),At.vectorToWorldFrame(n,G.ni,G.ni),At.vectorToWorldFrame(n,G.ri,G.ri),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}}const C=FU,_=TU,F=QU,T=vU;for(let L=0,I=x.length;L!==I;L++){t.getTriangleVertices(x[L],C,_,F),t.getNormal(x[L],T),g.vsub(C,d);let H=d.dot(T);if(T.scale(H,d),g.vsub(d,d),H=d.distanceTo(g),bt.pointInTriangle(d,C,_,F)&&H<e.radius){if(u)return!0;let R=this.createContactEquation(a,o,e,t,l,c);d.vsub(g,R.ni),R.ni.normalize(),R.ni.scale(e.radius,R.ri),R.ri.vadd(A,R.ri),R.ri.vsub(a.position,R.ri),At.pointToWorldFrame(r,n,d,d),d.vsub(o.position,R.rj),At.vectorToWorldFrame(n,R.ni,R.ni),At.vectorToWorldFrame(n,R.ri,R.ri),this.result.push(R),this.createFrictionEquationsFromContact(R,this.frictionResult)}}x.length=0}planeTrimesh(e,t,A,r,s,n,a,o,l,c,u){const h=new b,p=mU;p.set(0,0,1),s.vmult(p,p);for(let f=0;f<t.vertices.length/3;f++){t.getVertex(f,h);const m=new b;m.copy(h),At.pointToWorldFrame(r,n,m,h);const g=BU;if(h.vsub(A,g),p.dot(g)<=0){if(u)return!0;const d=this.createContactEquation(a,o,e,t,l,c);d.ni.copy(p);const B=wU;p.scale(g.dot(p),B),h.vsub(B,B),d.ri.copy(B),d.ri.vsub(a.position,d.ri),d.rj.copy(h),d.rj.vsub(o.position,d.rj),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}}}}const ir=new b,Pr=new b,Hr=new b,dU=new b,pU=new b,fU=new Ct,gU=new Ct,mU=new b,BU=new b,wU=new b,vU=new b,yU=new b;new b;const _U=new b,xU=new b,CU=new b,EU=new b,bU=new b,MU=new b,UU=new b,SU=new b,FU=new b,TU=new b,QU=new b,LU=new wA,IU=[],ua=new b,tp=new b,RU=new b,DU=new b,PU=new b;function HU(i,e,t){let A=null;const r=i.length;for(let s=0;s!==r;s++){const n=i[s],a=RU;i[(s+1)%r].vsub(n,a);const o=DU;a.cross(e,o);const l=PU;t.vsub(n,l);const c=o.dot(l);if(A===null||c>0&&A===!0||c<=0&&A===!1){A===null&&(A=c>0);continue}else return!1}return!0}const da=new b,NU=new b,OU=new b,kU=new b,VU=[new b,new b,new b,new b,new b,new b],zU=new b,GU=new b,KU=new b,WU=new b,XU=new b,YU=new b,jU=new b,qU=new b,JU=new b,ZU=new b,$U=new b,eS=new b,tS=new b,AS=new b;new b;new b;const iS=new b,rS=new b,sS=new b,nS=new b,aS=new b,oS=new b,lS=new b,cS=new b,hS=new b,uS=new b,Ap=new Ct,dS=new b;new b;const pS=new b,ip=new b,fS=new b,gS=new b,mS=new b,BS=[0],wS=new b,vS=new b;class rp{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const A=t;t=e,e=A}return e<<16|t}set(e,t){const A=this.getKey(e,t),r=this.current;let s=0;for(;A>r[s];)s++;if(A!==r[s]){for(let n=r.length-1;n>=s;n--)r[n+1]=r[n];r[s]=A}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const A=this.current,r=this.previous,s=A.length,n=r.length;let a=0;for(let o=0;o<s;o++){let l=!1;const c=A[o];for(;c>r[a];)a++;l=c===r[a],l||sp(e,c)}a=0;for(let o=0;o<n;o++){let l=!1;const c=r[o];for(;c>A[a];)a++;l=A[a]===c,l||sp(t,c)}}}function sp(i,e){i.push((e&4294901760)>>16,e&65535)}const yl=(i,e)=>i<e?`${i}-${e}`:`${e}-${i}`;class yS{constructor(){this.data={keys:[]}}get(e,t){const A=yl(e,t);return this.data[A]}set(e,t,A){const r=yl(e,t);this.get(e,t)||this.data.keys.push(r),this.data[r]=A}delete(e,t){const A=yl(e,t),r=this.data.keys.indexOf(A);r!==-1&&this.data.keys.splice(r,1),delete this.data[A]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const A=t.pop();delete e[A]}}}class _S extends Jf{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new b,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new b,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new SM,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new nU,this.constraints=[],this.narrowphase=new uU(this),this.collisionMatrix=new Gd,this.collisionMatrixPrevious=new Gd,this.bodyOverlapKeeper=new rp,this.shapeOverlapKeeper=new rp,this.contactmaterials=[],this.contactMaterialTable=new yS,this.defaultMaterial=new ns("default"),this.defaultContactMaterial=new an(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,A){A instanceof ka?this.raycastClosest(e,t,{skipBackfaces:!0},A):this.raycastAll(e,t,{skipBackfaces:!0},A)}raycastAll(e,t,A,r){return A===void 0&&(A={}),A.mode=bt.ALL,A.from=e,A.to=t,A.callback=r,_l.intersectWorld(this,A)}raycastAny(e,t,A,r){return A===void 0&&(A={}),A.mode=bt.ANY,A.from=e,A.to=t,A.result=r,_l.intersectWorld(this,A)}raycastClosest(e,t,A,r){return A===void 0&&(A={}),A.mode=bt.CLOSEST,A.from=e,A.to=t,A.result=r,_l.intersectWorld(this,A)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof ge&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,A=this.bodies,r=A.indexOf(e);if(r!==-1){A.splice(r,1);for(let s=0;s!==A.length;s++)A[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let A=0;A<t.length;A++){const r=t[A].shapes;for(let s=0;s<r.length;s++){const n=r[s];if(n.id===e)return n}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const A=Ft.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const r=A-this.lastCallTime;this.step(e,r,t)}this.lastCallTime=A}step(e,t,A){if(A===void 0&&(A=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const r=Ft.now();let s=0;for(;this.accumulator>=e&&s<A&&(this.internalStep(e),this.accumulator-=e,s++,!(Ft.now()-r>e*1e3)););this.accumulator=this.accumulator%e;const n=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){const o=this.bodies[a];o.previousPosition.lerp(o.position,n,o.interpolatedPosition),o.previousQuaternion.slerp(o.quaternion,n,o.interpolatedQuaternion),o.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,A=MS,r=US,s=this.bodies.length,n=this.bodies,a=this.solver,o=this.gravity,l=this.doProfiling,c=this.profile,u=ge.DYNAMIC;let h=-1/0;const p=this.constraints,f=bS;o.length();const m=o.x,g=o.y,d=o.z;let B=0;for(l&&(h=Ft.now()),B=0;B!==s;B++){const T=n[B];if(T.type===u){const L=T.force,I=T.mass;L.x+=I*m,L.y+=I*g,L.z+=I*d}}for(let T=0,L=this.subsystems.length;T!==L;T++)this.subsystems[T].update();l&&(h=Ft.now()),A.length=0,r.length=0,this.broadphase.collisionPairs(this,A,r),l&&(c.broadphase=Ft.now()-h);let v=p.length;for(B=0;B!==v;B++){const T=p[B];if(!T.collideConnected)for(let L=A.length-1;L>=0;L-=1)(T.bodyA===A[L]&&T.bodyB===r[L]||T.bodyB===A[L]&&T.bodyA===r[L])&&(A.splice(L,1),r.splice(L,1))}this.collisionMatrixTick(),l&&(h=Ft.now());const y=ES,x=t.length;for(B=0;B!==x;B++)y.push(t[B]);t.length=0;const w=this.frictionEquations.length;for(B=0;B!==w;B++)f.push(this.frictionEquations[B]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(A,r,this,t,y,this.frictionEquations,f),l&&(c.narrowphase=Ft.now()-h),l&&(h=Ft.now()),B=0;B<this.frictionEquations.length;B++)a.addEquation(this.frictionEquations[B]);const M=t.length;for(let T=0;T!==M;T++){const L=t[T],I=L.bi,H=L.bj,R=L.si,G=L.sj;let z;if(I.material&&H.material?z=this.getContactMaterial(I.material,H.material)||this.defaultContactMaterial:z=this.defaultContactMaterial,z.friction,I.material&&H.material&&(I.material.friction>=0&&H.material.friction>=0&&I.material.friction*H.material.friction,I.material.restitution>=0&&H.material.restitution>=0&&(L.restitution=I.material.restitution*H.material.restitution)),a.addEquation(L),I.allowSleep&&I.type===ge.DYNAMIC&&I.sleepState===ge.SLEEPING&&H.sleepState===ge.AWAKE&&H.type!==ge.STATIC){const X=H.velocity.lengthSquared()+H.angularVelocity.lengthSquared(),te=H.sleepSpeedLimit**2;X>=te*2&&(I.wakeUpAfterNarrowphase=!0)}if(H.allowSleep&&H.type===ge.DYNAMIC&&H.sleepState===ge.SLEEPING&&I.sleepState===ge.AWAKE&&I.type!==ge.STATIC){const X=I.velocity.lengthSquared()+I.angularVelocity.lengthSquared(),te=I.sleepSpeedLimit**2;X>=te*2&&(H.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(I,H,!0),this.collisionMatrixPrevious.get(I,H)||(bs.body=H,bs.contact=L,I.dispatchEvent(bs),bs.body=I,H.dispatchEvent(bs)),this.bodyOverlapKeeper.set(I.id,H.id),this.shapeOverlapKeeper.set(R.id,G.id)}for(this.emitContactEvents(),l&&(c.makeContactConstraints=Ft.now()-h,h=Ft.now()),B=0;B!==s;B++){const T=n[B];T.wakeUpAfterNarrowphase&&(T.wakeUp(),T.wakeUpAfterNarrowphase=!1)}for(v=p.length,B=0;B!==v;B++){const T=p[B];T.update();for(let L=0,I=T.equations.length;L!==I;L++){const H=T.equations[L];a.addEquation(H)}}a.solve(e,this),l&&(c.solve=Ft.now()-h),a.removeAllEquations();const S=Math.pow;for(B=0;B!==s;B++){const T=n[B];if(T.type&u){const L=S(1-T.linearDamping,e),I=T.velocity;I.scale(L,I);const H=T.angularVelocity;if(H){const R=S(1-T.angularDamping,e);H.scale(R,H)}}}this.dispatchEvent(CS),l&&(h=Ft.now());const C=this.stepnumber%(this.quatNormalizeSkip+1)===0,_=this.quatNormalizeFast;for(B=0;B!==s;B++)n[B].integrate(e,C,_);this.clearForces(),this.broadphase.dirty=!0,l&&(c.integrate=Ft.now()-h),this.stepnumber+=1,this.dispatchEvent(xS);let F=!0;if(this.allowSleep)for(F=!1,B=0;B!==s;B++){const T=n[B];T.sleepTick(this.time),T.sleepState!==ge.SLEEPING&&(F=!0)}this.hasActiveBodies=F}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(hi,ui),e){for(let s=0,n=hi.length;s<n;s+=2)Ms.bodyA=this.getBodyById(hi[s]),Ms.bodyB=this.getBodyById(hi[s+1]),this.dispatchEvent(Ms);Ms.bodyA=Ms.bodyB=null}if(t){for(let s=0,n=ui.length;s<n;s+=2)Us.bodyA=this.getBodyById(ui[s]),Us.bodyB=this.getBodyById(ui[s+1]),this.dispatchEvent(Us);Us.bodyA=Us.bodyB=null}hi.length=ui.length=0;const A=this.hasAnyEventListener("beginShapeContact"),r=this.hasAnyEventListener("endShapeContact");if((A||r)&&this.shapeOverlapKeeper.getDiff(hi,ui),A){for(let s=0,n=hi.length;s<n;s+=2){const a=this.getShapeById(hi[s]),o=this.getShapeById(hi[s+1]);di.shapeA=a,di.shapeB=o,a&&(di.bodyA=a.body),o&&(di.bodyB=o.body),this.dispatchEvent(di)}di.bodyA=di.bodyB=di.shapeA=di.shapeB=null}if(r){for(let s=0,n=ui.length;s<n;s+=2){const a=this.getShapeById(ui[s]),o=this.getShapeById(ui[s+1]);pi.shapeA=a,pi.shapeB=o,a&&(pi.bodyA=a.body),o&&(pi.bodyB=o.body),this.dispatchEvent(pi)}pi.bodyA=pi.bodyB=pi.shapeA=pi.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let A=0;A!==t;A++){const r=e[A];r.force,r.torque,r.force.set(0,0,0),r.torque.set(0,0,0)}}}new wA;const _l=new bt,Ft=globalThis.performance||{};if(!Ft.now){let i=Date.now();Ft.timing&&Ft.timing.navigationStart&&(i=Ft.timing.navigationStart),Ft.now=()=>Date.now()-i}new b;const xS={type:"postStep"},CS={type:"preStep"},bs={type:ge.COLLIDE_EVENT_NAME,body:null,contact:null},ES=[],bS=[],MS=[],US=[],hi=[],ui=[],Ms={type:"beginContact",bodyA:null,bodyB:null},Us={type:"endContact",bodyA:null,bodyB:null},di={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},pi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class jA{constructor(e,t,A,r,s="div"){this.parent=e,this.object=t,this.property=A,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),jA.nextNameID=jA.nextNameID||0,this.$name.id=`lil-gui-name-${++jA.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",n=>n.stopPropagation()),this.domElement.addEventListener("keyup",n=>n.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(A)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class SS extends jA{constructor(e,t,A){super(e,t,A,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Hc(i){let e,t;return(e=i.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const FS={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:Hc,toHexString:Hc},$s={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},TS={isPrimitive:!1,match:i=>Array.isArray(i)||ArrayBuffer.isView(i),fromHexString(i,e,t=1){const A=$s.fromHexString(i);e[0]=(A>>16&255)/255*t,e[1]=(A>>8&255)/255*t,e[2]=(A&255)/255*t},toHexString([i,e,t],A=1){A=255/A;const r=i*A<<16^e*A<<8^t*A<<0;return $s.toHexString(r)}},QS={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,e,t=1){const A=$s.fromHexString(i);e.r=(A>>16&255)/255*t,e.g=(A>>8&255)/255*t,e.b=(A&255)/255*t},toHexString({r:i,g:e,b:t},A=1){A=255/A;const r=i*A<<16^e*A<<8^t*A<<0;return $s.toHexString(r)}},LS=[FS,$s,TS,QS];function IS(i){return LS.find(e=>e.match(i))}class RS extends jA{constructor(e,t,A,r){super(e,t,A,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=IS(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Hc(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class xl extends jA{constructor(e,t,A){super(e,t,A,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class DS extends jA{constructor(e,t,A,r,s,n){super(e,t,A,"lil-number"),this._initInput(),this.min(r),this.max(s);const a=n!==void 0;this.step(a?n:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let d=parseFloat(this.$input.value);isNaN(d)||(this._stepExplicit&&(d=this._snap(d)),this.setValue(this._clamp(d)))},t=d=>{const B=parseFloat(this.$input.value);isNaN(B)||(this._snapClampSetValue(B+d),this.$input.value=this.getValue())},A=d=>{d.key==="Enter"&&this.$input.blur(),d.code==="ArrowUp"&&(d.preventDefault(),t(this._step*this._arrowKeyMultiplier(d))),d.code==="ArrowDown"&&(d.preventDefault(),t(this._step*this._arrowKeyMultiplier(d)*-1))},r=d=>{this._inputFocused&&(d.preventDefault(),t(this._step*this._normalizeMouseWheel(d)))};let s=!1,n,a,o,l,c;const u=5,h=d=>{n=d.clientX,a=o=d.clientY,s=!0,l=this.getValue(),c=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",f)},p=d=>{if(s){const B=d.clientX-n,v=d.clientY-a;Math.abs(v)>u?(d.preventDefault(),this.$input.blur(),s=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(B)>u&&f()}if(!s){const B=d.clientY-o;c-=B*this._step*this._arrowKeyMultiplier(d),l+c>this._max?c=this._max-l:l+c<this._min&&(c=this._min-l),this._snapClampSetValue(l+c)}o=d.clientY},f=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",f)},m=()=>{this._inputFocused=!0},g=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",A),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",h),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",g)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const e=(d,B,v,y,x)=>(d-B)/(v-B)*(x-y)+y,t=d=>{const B=this.$slider.getBoundingClientRect();let v=e(d,B.left,B.right,this._min,this._max);this._snapClampSetValue(v)},A=d=>{this._setDraggingStyle(!0),t(d.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},r=d=>{t(d.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};let n=!1,a,o;const l=d=>{d.preventDefault(),this._setDraggingStyle(!0),t(d.touches[0].clientX),n=!1},c=d=>{d.touches.length>1||(this._hasScrollBar?(a=d.touches[0].clientX,o=d.touches[0].clientY,n=!0):l(d),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",h))},u=d=>{if(n){const B=d.touches[0].clientX-a,v=d.touches[0].clientY-o;Math.abs(B)>Math.abs(v)?l(d):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",h))}else d.preventDefault(),t(d.touches[0].clientX)},h=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",h)},p=this._callOnFinishChange.bind(this),f=400;let m;const g=d=>{if(Math.abs(d.deltaX)<Math.abs(d.deltaY)&&this._hasScrollBar)return;d.preventDefault();const B=this._normalizeMouseWheel(d)*this._step;this._snapClampSetValue(this.getValue()+B),this.$input.value=this.getValue(),clearTimeout(m),m=setTimeout(p,f)};this.$slider.addEventListener("mousedown",A),this.$slider.addEventListener("touchstart",c,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:A}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,A=-e.wheelDelta/120,A*=this._stepExplicit?1:10),t+-A}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class PS extends jA{constructor(e,t,A,r){super(e,t,A,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const A=document.createElement("option");A.textContent=t,this.$select.appendChild(A)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class HS extends jA{constructor(e,t,A){super(e,t,A,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var NS=`.lil-gui {
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
}`;function OS(i){const e=document.createElement("style");e.innerHTML=i;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let np=!1;class wh{constructor({parent:e,autoPlace:t=e===void 0,container:A,width:r,title:s="Controls",closeFolders:n=!1,injectStyles:a=!0,touchStyles:o=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),o&&this.domElement.classList.add("lil-allow-touch-styles"),!np&&a&&(OS(NS),np=!0),A?A.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=n}add(e,t,A,r,s){if(Object(A)===A)return new PS(this,e,t,A);const n=e[t];switch(typeof n){case"number":return new DS(this,e,t,A,r,s);case"boolean":return new SS(this,e,t);case"string":return new HS(this,e,t);case"function":return new xl(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,n)}addColor(e,t,A=1){return new RS(this,e,t,A)}addFolder(e){const t=new wh({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(A=>{A instanceof xl||A._name in e.controllers&&A.load(e.controllers[A._name])}),t&&e.folders&&this.folders.forEach(A=>{A._title in e.folders&&A.load(e.folders[A._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(A=>{if(!(A instanceof xl)){if(A._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${A._name}"`);t.controllers[A._name]=A.save()}}),e&&this.folders.forEach(A=>{if(A._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${A._title}"`);t.folders[A._title]=A.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");const A=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",A))};this.$children.addEventListener("transitionend",A);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const kS=document.getElementById("app"),sA=new ay({antialias:!0,preserveDrawingBuffer:!0});sA.setPixelRatio(Math.min(window.devicePixelRatio,2));sA.setSize(window.innerWidth,window.innerHeight);sA.shadowMap.enabled=!0;sA.shadowMap.type=up;sA.toneMapping=pp;sA.toneMappingExposure=1.15;sA.physicallyCorrectLights=!0;kS.appendChild(sA.domElement);const vA=new tB;vA.background=new Qe(527121);vA.fog=new th(527121,40,140);const Ci=new mA(50,window.innerWidth/window.innerHeight,.1,200);Ci.position.set(7,5,10);vA.add(Ci);const oo=new My(sA);oo.addPass(new Uy(vA,Ci));const ur=new rs(new Ee(window.innerWidth,window.innerHeight),.35,.8,.2);oo.addPass(ur);const fr=new ly(Ci,sA.domElement);fr.enableDamping=!0;fr.maxPolarAngle=Math.PI*.48;fr.target.set(0,1.2,0);fr.update();const lo=new rA(new en(500,500),new oB({opacity:.25}));lo.rotation.x=-Math.PI/2;lo.position.y=-.01;lo.receiveShadow=!0;vA.add(lo);const on=new wB(500,200,4868682,4868682);on.position.y=.001;on.material.opacity=.24;on.material.transparent=!0;on.material.depthWrite=!1;vA.add(on);const VS=new dB(16316145,1053466,1.35);vA.add(VS);const ei=new Pp(16777215,2.4);ei.position.set(14,18,12);ei.castShadow=!0;ei.shadow.mapSize.set(4096,4096);ei.shadow.camera.near=1;ei.shadow.camera.far=80;ei.shadow.camera.left=-24;ei.shadow.camera.right=24;ei.shadow.camera.top=24;ei.shadow.camera.bottom=-24;vA.add(ei);const sg=new Pp(12044031,.9);sg.position.set(-8,9,-10);vA.add(sg);const co=new fB(16773592,1.1,80,Math.PI/5,.2,1);co.position.set(-6,12,6);co.castShadow=!0;vA.add(co);vA.add(co.target);const zS=jS(),GS=qS(sA.capabilities.getMaxAnisotropy?.()||8),KS=JS(),ng=new cB({color:16777215,vertexColors:!0,map:GS,bumpMap:KS,bumpScale:.35,gradientMap:zS,emissive:new Qe(9479423),emissiveIntensity:.06}),WS=new ih({color:10396853}),Va=new zr;vA.add(Va);let Kt=[],ag=null,og=!1;const za=new BB,Ga=new Ee,lg=new gi(new N(0,1,0),0);let Ka=!1,vi=null,vh=!1,ho=!1,Cl,Nc,ap;const Oc=[],cg=new Hp,Pt=[new N(.1,0,.45),new N(.32,0,.55),new N(.64,0,.42),new N(.9,0,.58)];let op=Pt.map(i=>i.clone());const je={canvas:null,ctx:null,padding:16,width:260,height:260,dragging:null},hg=new lB({color:16718362,emissive:16718362,emissiveIntensity:8,roughness:.25,metalness:0});hg.toneMapped=!1;const BA=new rA(new sh(.16,32,32),hg);BA.castShadow=!0;vA.add(BA);const Pe={brickLength:.6,wallLength:8,wallWidth:.35,wallHeight:3,gap:0,rows:10,falloff:.15,horizontalGap:0};let yh=Pe.wallHeight/Pe.rows,kc=Pe.rows;const tA={bloomStrength:.3,bloomThreshold:.08,bloomRadius:1,glowSpeed:1.25,glowIntensity:.1},ln=new wh({title:"Parametric Brick Wall"}),Ei=ln.addFolder("Wall Parameters");Ei.add(Pe,"brickLength",.2,1.2,.02).name("Brick Length").onChange(ti);Ei.add(Pe,"wallLength",2,20,.1).name("Wall Length").onChange(ti);Ei.add(Pe,"wallWidth",.2,.8,.01).name("Wall Width").onChange(ti);Ei.add(Pe,"wallHeight",1,6,.1).name("Wall Height").onChange(YS);Ei.add(Pe,"gap",0,.15,.005).name("Vertical Gap").onChange(ti);Ei.add(Pe,"horizontalGap",0,.15,.005).name("Horizontal Gap").onChange(ti);Ei.add(Pe,"rows",2,30,1).name("Rows").onChange(XS);Ei.add(Pe,"falloff",0,1,.01).name("Falloff").onChange(()=>{pg(),cn()});Ei.open();const _h=ln.addFolder("Catmull-Rom Curve");_h.domElement.style.marginTop="8px";uF(_h);_h.open();const ds=ln.addFolder("VFX Settings");ds.add(tA,"bloomStrength",0,.5,.01).name("Bloom Strength").onChange(()=>ur.strength=tA.bloomStrength);ds.add(tA,"bloomThreshold",0,1,.01).name("Bloom Threshold").onChange(()=>ur.threshold=tA.bloomThreshold);ds.add(tA,"bloomRadius",0,1.25,.01).name("Bloom Radius").onChange(()=>ur.radius=tA.bloomRadius);ds.add(tA,"glowSpeed",.25,10,.05).name("Glow Speed");ds.add(tA,"glowIntensity",0,.3,.01).name("Glow Intensity");ds.close();const xh=ln.addFolder("Export");xh.add({exportObj:aF},"exportObj").name("Export .obj");xh.add({snapshot:oF},"snapshot").name("Snapshot");xh.add({exportPly:lF},"exportPly").name("Export .ply");const ug=ln.addFolder("Simulation");ug.add({start:cF},"start").name("Start Collapse");ug.add({reset:hF},"reset").name("Reset Wall");function El(){Eh(),dg(),ti()}function dg(){Wr()}function pg(i=ag){if(og)return;const e=i?i.getPoint(.5):new N,t=i?i.getTangent(.5).setY(0).normalize():new N(0,0,1),A=new N().crossVectors(t,new N(0,1,0)).normalize().multiplyScalar(Pe.wallWidth+.8),r=e.clone().add(A);fg(r.x,r.z,Pe.wallHeight*.6)}function fg(i,e,t=null){const A=Pe.wallHeight+4,r=t!==null?t:BA.position.y||Pe.wallHeight*.5,s=Je.clamp(r,.12,A);BA.position.set(i,s,e)}function XS(){const i=yh||Pe.wallHeight/Math.max(kc,1);Pe.wallHeight=i*Pe.rows,kc=Pe.rows,ti()}function YS(){yh=Pe.wallHeight/Math.max(Pe.rows,1),ti()}function jS(){const i=new Uint8Array([255,255,255,220,224,235,186,190,200,130,134,145,90,95,110]),e=new Tp(i,5,1,Wc);return e.needsUpdate=!0,e.colorSpace=zt,e.minFilter=iA,e.magFilter=iA,e.generateMipmaps=!1,e}function qS(i=8){const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d");t.fillStyle="#c95333",t.fillRect(0,0,256,256);const A=256*60;for(let n=0;n<A;n+=1){const a=Math.random()*256,o=Math.random()*256,l=.1+Math.random()*.2;t.fillStyle=`rgba(85,40,25,${l})`,t.fillRect(a,o,1.2+Math.random()*1.5,1.2+Math.random()*1.5)}const r=t.createLinearGradient(0,0,0,256);r.addColorStop(0,"rgba(0,0,0,0.05)"),r.addColorStop(1,"rgba(255,255,255,0.05)"),t.fillStyle=r,t.fillRect(0,0,256,256);const s=new Lp(e);return s.colorSpace=zt,s.wrapS=s.wrapT=Gs,s.repeat.set(1,1),s.anisotropy=i,s.needsUpdate=!0,s}function JS(){const i=document.createElement("canvas");i.width=i.height=256;const e=i.getContext("2d");e.fillStyle="#808080",e.fillRect(0,0,256,256);const t=256*120;for(let r=0;r<t;r+=1){const s=Math.random()*256,n=Math.random()*256,a=90+Math.random()*130|0;e.fillStyle=`rgb(${a},${a},${a})`,e.fillRect(s,n,1.5+Math.random()*1.5,1.5+Math.random()*1.5)}const A=new Lp(i);return A.wrapS=A.wrapT=Gs,A.repeat.set(1,1),A.needsUpdate=!0,A}function ZS(){Eh();const i=Pe.wallLength*.9,e=Pe.wallLength*.35,t=Pt.map(a=>{const o=Je.clamp(a.x,0,1),l=Je.clamp(a.z,0,1);return new N((o-.5)*i,0,(.5-l)*e)}),A=t.reduce((a,o)=>a.add(o),new N).multiplyScalar(1/t.length),r=new uc(t,!1,"catmullrom",.5),s=Math.max(r.getLength(),1e-4),n=Pe.wallLength/s;return op=t.map(a=>a.clone().sub(A).multiplyScalar(n).add(A)),new uc(op,!1,"catmullrom",.5)}function $S(){[...Va.children].forEach(i=>{Va.remove(i),i.traverse(e=>{(e.isMesh||e.isLineSegments)&&e.geometry&&e.geometry.dispose()})}),Kt=[],Ch()}function eF(i){const e=i.attributes.position.count,t=new Qe("#f0f1f5"),A=new Qe("#d8dbe3"),r=[];for(let n=0;n<e;n+=1){const a=n%3===0?t:A;r.push(a.r,a.g,a.b)}const s=new Ht(r,3);i.setAttribute("color",s),i.userData.baseColors=Float32Array.from(s.array)}function tF(i,e,t){const A=new cs(i,e,t,1,1,1);eF(A);const r=new rA(A,ng);r.castShadow=!0,r.receiveShadow=!0;const s=new nB(A),n=new Qp(s,WS),a=new ls({color:16722474,transparent:!0,opacity:0,depthWrite:!1,blending:Ca}),o=new rA(A.clone(),a);o.visible=!1;const l=new zr;return l.add(r),l.add(n),l.add(o),l.castShadow=!0,l.receiveShadow=!0,{group:l,glow:o}}function ti(){const i=ZS();ag=i,pg(i),$S(),Wr();const e=Math.max(i.getLength(),1e-4),t=Math.max(2,Math.ceil(e/Pe.brickLength)),A=e/t,r=Math.max(.001,1-Pe.horizontalGap),s=A*1.01*r,n=Pe.wallHeight/Pe.rows,a=Math.max(.05,n-Pe.gap);for(let o=0;o<Pe.rows;o+=1){const l=o*n+a/2,c=o%2===0?A*.5:0;for(let u=c,h=0;u<=e-A*.25;u+=A,h+=1){const p=Je.clamp(u/e,0,1),f=i.getPointAt(p),m=i.getTangentAt(p).setY(0).normalize();m.lengthSq()<1e-5&&m.set(1,0,0),f.y=l;const{group:g,glow:d}=tF(s,a,Pe.wallWidth),B=new Ki;B.setFromUnitVectors(new N(1,0,0),m),g.position.copy(f),g.quaternion.copy(B),Va.add(g);const v={object:g,glow:d,row:o,column:h,curveT:p,dims:{x:s,y:a,z:Pe.wallWidth}};Kt.push(v),ho&&vg(v)}}Bg(),cn(),yh=Pe.wallHeight/Math.max(Pe.rows,1),kc=Pe.rows}function cn(){const i=Kt;if(!i.length)return;Kt.forEach(h=>{h.object.visible=!0,h.glow&&(h.glow.visible=!1,h.glow.userData.baseOpacity=0,h.glow.userData.intensity=0)});let e=1/0;i.forEach(h=>{const p=BA.position.distanceTo(h.object.position);p<e&&(e=p)});const t=Math.max(Pe.wallLength,Pe.wallHeight)*.6+Pe.wallWidth,A=Je.lerp(.5,2,Pe.falloff),r=t*A,s=Je.clamp(1-e/Math.max(r,.001),0,1),n=Je.clamp(Pe.falloff*s,0,1),a=[...i].sort((h,p)=>{const f=h.object.position.distanceTo(BA.position),m=p.object.position.distanceTo(BA.position);return Math.abs(f-m)>1e-4?f-m:p.row-h.row}),o=Math.floor(a.length*.75),l=Math.floor(o*n);a.forEach((h,p)=>{h.object.visible=p>=l});const c=Pe.falloff>0,u=Math.max(Pe.wallLength,Pe.wallHeight)*.9+Pe.wallWidth+1.2;Kt.forEach(h=>{if(!h.glow)return;const p=BA.position.distanceTo(h.object.position),f=Je.clamp(1-p/Math.max(u,.001),0,1),m=Math.pow(f,2.2),g=f>.85?Je.smoothstep(f,.85,1)*.7:0,d=Je.clamp(m+g,0,1.6),B=h.object.visible&&c?d:0;h.glow.userData.baseOpacity=B,h.glow.userData.intensity=d,h.glow.visible=c&&B>.01;const v=Je.clamp(f,0,1);h.colorIntensity=Math.max(v,d)}),Bg(),Kt.forEach(h=>uo(h))}function gg(i){const e=sA.domElement.getBoundingClientRect();Ga.x=(i.clientX-e.left)/e.width*2-1,Ga.y=-((i.clientY-e.top)/e.height)*2+1}function AF(i){if(gg(i),za.setFromCamera(Ga,Ci),za.intersectObject(BA,!1).length){const e=Ci.getWorldDirection(new N);lg.setFromNormalAndCoplanarPoint(e,BA.position),Ka=!0,og=!0,fr.enabled=!1}}function iF(i){if(!Ka)return;gg(i),za.setFromCamera(Ga,Ci);const e=new N;za.ray.intersectPlane(lg,e)&&(fg(e.x,e.z,e.y),cn())}function rF(){Ka&&(Ka=!1,fr.enabled=!0)}function sF(){Ci.aspect=window.innerWidth/window.innerHeight,Ci.updateProjectionMatrix(),sA.setSize(window.innerWidth,window.innerHeight),oo.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",sF);sA.domElement.addEventListener("pointerdown",AF);sA.domElement.addEventListener("pointermove",iF);window.addEventListener("pointerup",rF);dg();ti();function mg(){requestAnimationFrame(mg),fr.update(),nF(),oo.render()}mg();function nF(){const i=performance.now()*.001,e=.5+.5*Math.sin(i*tA.glowSpeed),t=tA.glowIntensity*e;ng.emissiveIntensity=.06;const A=Pe.falloff>0,r=8,s=A?4.5:0;if(BA.material.emissiveIntensity=r+t*s,Kt.forEach(n=>{if(n.glow&&n.glow.visible){const a=n.glow.userData.baseOpacity||0,o=n.glow.userData.intensity||0,l=Je.lerp(1.2,3.6,o);n.glow.material.opacity=a*l*(.55+1.05*t);const c=Je.lerp(.35,.05,o);n.glow.material.color.setRGB(1,c,c)}uo(n,t,A)}),ur.strength=tA.bloomStrength,ur.threshold=tA.bloomThreshold,ur.radius=tA.bloomRadius,ho&&vi){const n=cg.getDelta();vi.step(1/60,n,3),Kt.forEach(a=>{a.body&&(a.object.position.copy(a.body.position),a.object.quaternion.copy(a.body.quaternion))})}}function uo(i,e=0,t=!1){const A=i.object.children.find(p=>p.isMesh);if(!A)return;const r=A.geometry,s=r.userData.baseColors,n=r.getAttribute("color");if(!s||!n)return;const a=i.baseColorIntensity||0,o=i.colorIntensity||0,l=t?1+e*.35:1,c=Math.max(a*1.2,o*3),u=Je.clamp(c*5*l,0,1),h=new Qe(1,0,0);for(let p=0;p<n.count;p+=1){const f=p*3,m=s[f],g=s[f+1],d=s[f+2];n.array[f]=Je.lerp(m,h.r,u),n.array[f+1]=Je.lerp(g,h.g,u),n.array[f+2]=Je.lerp(d,h.b,u)}n.needsUpdate=!0}function Bg(){const i=Kt.filter(a=>a.object.visible);if(!i.length)return;let e=1/0,t=-1/0,A=1/0,r=-1/0;i.forEach(a=>{const o=a.object.children.find(c=>c.isMesh);if(!o)return;const l=new os().setFromObject(o);e=Math.min(e,l.min.y),t=Math.max(t,l.max.y),A=Math.min(A,l.min.z),r=Math.max(r,l.max.z)});const s=Math.max(t-e,1e-4),n=Math.max(r-A,1e-4);i.forEach(a=>{const o=a.object.children.find(h=>h.isMesh);if(!o)return;const l=o.geometry.attributes.position;let c=0;for(let h=0;h<l.count;h+=1){const p=(l.getY(h)-e)/s,f=(l.getZ(h)-A)/n;c+=p*.7+f*.3}const u=c/l.count;a.baseColorIntensity=Je.clamp(u,0,1)})}function aF(){cn();const i=Pe.falloff>0,e=i?tA.glowIntensity:0;Kt.forEach(v=>uo(v,e,i));const t=new Fy,A=Kt.filter(v=>v.object.visible);if(!A.length){console.warn("No visible bricks to export.");return}const r=[];if(A.forEach(v=>{const y=v.object.children.find(T=>T.isMesh);if(!y||!y.geometry)return;const x=y.geometry.clone(),w=x.getAttribute("position"),M=w.count,S=new Float32Array(M*3);let C=1/0,_=-1/0;for(let T=0;T<M;T++){const L=w.getY(T);C=Math.min(C,L),_=Math.max(_,L)}const F=Math.max(_-C,1e-4);for(let T=0;T<M;T++){const L=(w.getY(T)-C)/F,I=Je.lerp(.1,0,L),H=Je.lerp(.08,0,L);S[T*3]=1,S[T*3+1]=I,S[T*3+2]=H}x.setAttribute("color",new hA(S,3)),x.applyMatrix4(y.matrixWorld),r.push(x)}),!r.length)return;const s=Wp(r,!0),n=s.getAttribute("position"),a=new Float32Array(n.count*3);let o=1/0,l=-1/0,c=1/0,u=-1/0;for(let v=0;v<n.count;v++){const y=n.getY(v),x=n.getZ(v);o=Math.min(o,y),l=Math.max(l,y),c=Math.min(c,x),u=Math.max(u,x)}const h=Math.max(l-o,1e-4),p=Math.max(u-c,1e-4);for(let v=0;v<n.count;v++){const y=n.getY(v),x=n.getZ(v),w=(y-o)/h,M=(x-c)/p,S=Je.clamp(w*.7+M*.3,0,1);a[v*3]=1,a[v*3+1]=Je.lerp(.6,0,S),a[v*3+2]=Je.lerp(.6,0,S)}s.setAttribute("color",new hA(a,3));const f=new rA(s,new ls({vertexColors:!0})),m=t.parse(f),g=new Blob([m],{type:"text/plain"}),d=URL.createObjectURL(g),B=document.createElement("a");B.href=d,B.download="brick_wall.obj",B.click(),setTimeout(()=>URL.revokeObjectURL(d),1500)}function oF(){eM(document.body,{backgroundColor:"#080b11",useCORS:!0,logging:!1}).then(i=>{const e=i.toDataURL("image/png",1),t=document.createElement("a");t.href=e,t.download="brick_wall_snapshot.png",t.click()})}function lF(){cn();const i=!0,e=Math.max(tA.glowIntensity,.2);Kt.forEach(y=>uo(y,e,i));const t=new Ty,A=Kt.filter(y=>y.object.visible);if(!A.length){console.warn("No visible bricks to export.");return}const r=[];if(A.forEach(y=>{const x=y.object.children.find(M=>M.isMesh);if(!x||!x.geometry)return;const w=x.geometry.clone();w.applyMatrix4(x.matrixWorld),r.push(w)}),!r.length)return;const s=Wp(r,!0),n=s.getAttribute("position"),a=new Float32Array(n.count*3);let o=1/0,l=-1/0,c=1/0,u=-1/0;const h=BA.position.clone();for(let y=0;y<n.count;y++){const x=n.getY(y),w=n.getX(y)-h.x,M=n.getY(y)-h.y,S=n.getZ(y)-h.z,C=Math.sqrt(w*w+M*M+S*S);o=Math.min(o,x),l=Math.max(l,x),c=Math.min(c,C),u=Math.max(u,C)}const p=Math.max(l-o,1e-4),f=Math.max(u-c,1e-4);for(let y=0;y<n.count;y++){const x=(n.getY(y)-o)/p,w=n.getX(y)-h.x,M=n.getY(y)-h.y,S=n.getZ(y)-h.z,C=Math.sqrt(w*w+M*M+S*S),_=Math.min(Math.max((C-c)/f,0),1),F=Je.clamp(.2+_*.7+x*.05,0,1),T=Je.lerp(.6,0,F),L=Je.lerp(.6,0,F);a[y*3]=1,a[y*3+1]=T,a[y*3+2]=L}s.setAttribute("color",new hA(a,3));const m=new rA(s,new ls({vertexColors:!0})),g=t.parse(m),d=new Blob([g],{type:"text/plain"}),B=URL.createObjectURL(d),v=document.createElement("a");v.href=B,v.download="brick_wall.ply",v.click(),setTimeout(()=>URL.revokeObjectURL(B),1500)}function wg(){vi=new _S,vi.gravity.set(0,-25.9,0),Cl=new ns("ground"),Nc=new ns("brick"),ap=new an(Cl,Nc,{friction:.5,restitution:.05}),vi.addContactMaterial(ap);const i=new ge({mass:0,shape:new sn(new b(250,.1,250)),material:Cl});i.position.set(0,-.05,0),vi.addBody(i),vh=!0}function Ch(){vi&&(Oc.forEach(i=>vi.removeBody(i)),Oc.length=0,Kt.forEach(i=>{i.body=null}))}function vg(i){vh||wg();const{x:e,y:t,z:A}=i.dims,r=new sn(new b(e/2,t/2,A/2)),s=new ge({mass:1,shape:r,position:new b(i.object.position.x,i.object.position.y,i.object.position.z),quaternion:new Ct(i.object.quaternion.x,i.object.quaternion.y,i.object.quaternion.z,i.object.quaternion.w),material:Nc,allowSleep:!1,linearDamping:.007,angularDamping:.0035});vi.addBody(s),Oc.push(s),i.body=s}function cF(){ho=!0,Ch(),vh||wg(),Kt.forEach(A=>vg(A));const i=Math.max(...Kt.map(A=>A.row)),e=BA.position.clone(),t=Math.max(Pe.wallLength*.35,1.5);Kt.forEach(A=>{if(!A.body)return;const r=A.object.position.distanceTo(e),s=Je.clamp(1-r/t,0,1),n=Math.pow(s,2.6),a=i>0?A.row/i:0,o=n*.95+a*.45,l=(.05+.15*n)*1.6*1.7,c=(.4+6*o)*2*1.15*2.15625*1.18965*1.071,u=new b((Math.random()-.5)*l,-c,(Math.random()-.5)*l);A.body.applyImpulse(u,A.body.position);const h=new b((Math.random()-.5)*4*1.15,(Math.random()-.5)*4*1.15,(Math.random()-.5)*4*1.15);A.body.angularVelocity=h}),cg.getElapsedTime()}function hF(){ho=!1,Ch(),ti()}function uF(i){const e=document.createElement("div");e.style.padding="8px 6px 10px";const t=document.createElement("canvas");t.width=je.width,t.height=je.height,t.style.width="100%",t.style.borderRadius="10px",t.style.background="linear-gradient(180deg, #0c111c 0%, #0a0e17 100%)",t.style.boxShadow="inset 0 0 0 1px rgba(255,255,255,0.06)",t.style.cursor="crosshair",e.appendChild(t);const A=document.createElement("div");A.style.marginTop="6px",A.style.fontSize="12px",A.style.lineHeight="1.5",A.style.color="#c7cedd",A.innerHTML="Drag points to bend the path.<br>Points are normalized (0-1) across the panel.",e.appendChild(A);const r=document.createElement("div");r.style.marginTop="4px",r.style.fontSize="12px",r.style.lineHeight="1.5",r.style.color="#c7cedd",r.textContent="Left click on the curve to add new point, and right click on the point to delete it.",e.appendChild(r),i.domElement.appendChild(e),je.canvas=t,je.ctx=t.getContext("2d"),fF(i);const s=o=>{o.preventDefault();const l=lp(o),c=yg().map(Wa).findIndex(u=>dF(u,l)<225);if(c>=0){if(o.button===2){mF(c),El(),Wr();return}je.dragging=c,window.addEventListener("pointermove",n),window.addEventListener("pointerup",a,{once:!0});return}if(o.button===0){const u=cp(l);gF(u),El(),Wr()}},n=o=>{if(je.dragging===null)return;const l=lp(o),c=cp(l);Pt[je.dragging].x=c.x,Pt[je.dragging].z=c.z,El(),Wr()},a=()=>{je.dragging=null,window.removeEventListener("pointermove",n)};t.addEventListener("pointerdown",s),t.addEventListener("contextmenu",o=>o.preventDefault()),Wr()}function yg(){return Pt}function lp(i){const e=je.canvas.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*je.width,y:(i.clientY-e.top)/e.height*je.height}}function Wa(i){const e=je.width-je.padding*2,t=je.height-je.padding*2,A=Je.clamp(i.x,0,1),r=Je.clamp(i.z,0,1);return{x:je.padding+A*e,y:je.height-(je.padding+r*t)}}function cp(i){const e=je.width-je.padding*2,t=je.height-je.padding*2,A=Je.clamp((i.x-je.padding)/e,0,1),r=Je.clamp((je.height-i.y-je.padding)/t,0,1);return{x:A,z:r}}function Wr(){if(!je.ctx)return;const i=je.ctx,e=je.width,t=je.height;i.clearRect(0,0,e,t),i.save(),i.strokeStyle="rgba(255,255,255,0.05)",i.lineWidth=1;const A=20;for(let a=je.padding;a<=e-je.padding+1;a+=A)i.beginPath(),i.moveTo(a,je.padding),i.lineTo(a,t-je.padding),i.stroke();for(let a=je.padding;a<=t-je.padding+1;a+=A)i.beginPath(),i.moveTo(je.padding,a),i.lineTo(e-je.padding,a),i.stroke();i.restore();const r=yg(),s=r.map(Wa),n=pF(r);if(i.save(),i.strokeStyle="#3ecaff",i.lineWidth=2.5,i.beginPath(),n.length>0){i.moveTo(n[0].x,n[0].y);for(let a=1;a<n.length;a++)i.lineTo(n[a].x,n[a].y)}i.stroke(),i.restore(),s.forEach((a,o)=>{i.save(),i.fillStyle=o===je.dragging?"#ff6b4a":"#6fb2ff",i.strokeStyle="rgba(255,255,255,0.35)",i.lineWidth=1.5,i.beginPath(),i.arc(a.x,a.y,8,0,Math.PI*2),i.fill(),i.stroke(),i.restore()})}function dF(i,e){const t=i.x-e.x,A=i.y-e.y;return t*t+A*A}function pF(i){return i.length?i.length===1?[Wa(i[0])]:new uc(i.map(e=>new N(e.x,0,e.z)),!1,"catmullrom",.5).getSpacedPoints(80).map(e=>Wa({x:e.x,z:e.z})):[]}function fF(i){const e=()=>{i.domElement.querySelectorAll(".controller.empty").forEach(t=>t.remove())};e(),requestAnimationFrame(e)}function Eh(){for(let i=0;i<Pt.length;i+=1){const e=i===0?0:Pt[i-1].x+.02,t=i===Pt.length-1?1:Pt[i+1].x-.02;Pt[i].x=Je.clamp(Pt[i].x,e,t),Pt[i].z=Je.clamp(Pt[i].z,0,1)}}function gF(i){Pt.push(new N(i.x,0,i.z)),Pt.sort((e,t)=>e.x-t.x),Eh()}function mF(i){i<=0||i>=Pt.length-1||Pt.length<=2||Pt.splice(i,1)}
