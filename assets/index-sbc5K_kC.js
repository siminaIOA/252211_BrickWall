(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))A(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&A(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function A(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Yc="181",Ji={ROTATE:0,DOLLY:1,PAN:2},Wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},H0=0,Hh=1,N0=2,xd=1,Bd=2,xn=3,Xn=0,hA=1,vn=2,qA=0,Zi=1,To=2,Nh=3,Oh=4,O0=5,ai=100,V0=101,G0=102,z0=103,k0=104,K0=200,W0=201,X0=202,Y0=203,Ql=204,Rl=205,q0=206,J0=207,Z0=208,j0=209,$0=210,eg=211,tg=212,Ag=213,ng=214,Ll=0,Dl=1,Pl=2,tr=3,Hl=4,Nl=5,Ol=6,Vl=7,vd=0,ig=1,rg=2,kn=0,sg=1,og=2,ag=3,wd=4,lg=5,cg=6,hg=7,_d=300,Ar=301,nr=302,Gl=303,zl=304,$o=306,Zr=1e3,wn=1001,kl=1002,nA=1003,ug=1004,Bs=1005,SA=1006,Ca=1007,ui=1008,jA=1009,Cd=1010,yd=1011,jr=1012,qc=1013,mi=1014,_n=1015,JA=1016,Jc=1017,Zc=1018,$r=1020,Ed=35902,bd=35899,Md=1021,jc=1022,HA=1023,es=1026,ts=1027,Sd=1028,$c=1029,eh=1030,th=1031,Ah=1033,wo=33776,_o=33777,Co=33778,yo=33779,Kl=35840,Wl=35841,Xl=35842,Yl=35843,ql=36196,Jl=37492,Zl=37496,jl=37808,$l=37809,ec=37810,tc=37811,Ac=37812,nc=37813,ic=37814,rc=37815,sc=37816,oc=37817,ac=37818,lc=37819,cc=37820,hc=37821,uc=36492,fc=36494,dc=36495,pc=36283,gc=36284,mc=36285,xc=36286,fg=3200,dg=3201,nh=0,pg=1,Nn="",zt="srgb",ir="srgb-linear",Io="linear",at="srgb",wi=7680,Vh=519,gg=512,mg=513,xg=514,Ud=515,Bg=516,vg=517,wg=518,_g=519,Gh=35044,zh="300 es",YA=2e3,Qo=2001;function Fd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ro(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Cg(){const n=Ro("canvas");return n.style.display="block",n}const kh={};function Kh(...n){const e="THREE."+n.shift();console.log(e,...n)}function De(...n){const e="THREE."+n.shift();console.warn(e,...n)}function yt(...n){const e="THREE."+n.shift();console.error(e,...n)}function As(...n){const e=n.join(" ");e in kh||(kh[e]=!0,De(...n))}function yg(n,e,t){return new Promise(function(A,i){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:i();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:A()}}setTimeout(r,t)})}class xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const A=this._listeners;A[e]===void 0&&(A[e]=[]),A[e].indexOf(t)===-1&&A[e].push(t)}hasEventListener(e,t){const A=this._listeners;return A===void 0?!1:A[e]!==void 0&&A[e].indexOf(t)!==-1}removeEventListener(e,t){const A=this._listeners;if(A===void 0)return;const i=A[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const A=t[e.type];if(A!==void 0){e.target=this;const i=A.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wh=1234567;const ji=Math.PI/180,rr=180/Math.PI;function cr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,A=Math.random()*4294967295|0;return(Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[A&255]+Wt[A>>8&255]+Wt[A>>16&255]+Wt[A>>24&255]).toLowerCase()}function Xe(n,e,t){return Math.max(e,Math.min(t,n))}function ih(n,e){return(n%e+e)%e}function Eg(n,e,t,A,i){return A+(n-e)*(i-A)/(t-e)}function bg(n,e,t){return n!==e?(t-n)/(e-n):0}function Vr(n,e,t){return(1-t)*n+t*e}function Mg(n,e,t,A){return Vr(n,e,1-Math.exp(-t*A))}function Sg(n,e=1){return e-Math.abs(ih(n,e*2)-e)}function Ug(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Fg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Tg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Ig(n,e){return n+Math.random()*(e-n)}function Qg(n){return n*(.5-Math.random())}function Rg(n){n!==void 0&&(Wh=n);let e=Wh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lg(n){return n*ji}function Dg(n){return n*rr}function Pg(n){return(n&n-1)===0&&n!==0}function Hg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ng(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Og(n,e,t,A,i){const r=Math.cos,s=Math.sin,o=r(t/2),a=s(t/2),l=r((e+A)/2),c=s((e+A)/2),u=r((e-A)/2),h=s((e-A)/2),f=r((A-e)/2),p=s((A-e)/2);switch(i){case"XYX":n.set(o*c,a*u,a*h,o*l);break;case"YZY":n.set(a*h,o*c,a*u,o*l);break;case"ZXZ":n.set(a*u,a*h,o*c,o*l);break;case"XZX":n.set(o*c,a*p,a*f,o*l);break;case"YXY":n.set(a*f,o*c,a*p,o*l);break;case"ZYZ":n.set(a*p,a*f,o*c,o*l);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function zi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const tt={DEG2RAD:ji,RAD2DEG:rr,generateUUID:cr,clamp:Xe,euclideanModulo:ih,mapLinear:Eg,inverseLerp:bg,lerp:Vr,damp:Mg,pingpong:Sg,smoothstep:Ug,smootherstep:Fg,randInt:Tg,randFloat:Ig,randFloatSpread:Qg,seededRandom:Rg,degToRad:Lg,radToDeg:Dg,isPowerOfTwo:Pg,ceilPowerOfTwo:Hg,floorPowerOfTwo:Ng,setQuaternionFromProperEuler:Og,normalize:jt,denormalize:zi};class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,A=this.y,i=e.elements;return this.x=i[0]*t+i[3]*A+i[6],this.y=i[1]*t+i[4]*A+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const A=this.length();return this.divideScalar(A||1).multiplyScalar(Xe(A,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const A=this.dot(e)/t;return Math.acos(Xe(A,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,A=this.y-e.y;return t*t+A*A}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,A){return this.x=e.x+(t.x-e.x)*A,this.y=e.y+(t.y-e.y)*A,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const A=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*A-s*i+e.x,this.y=r*i+s*A+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let Yn=class{constructor(e=0,t=0,A=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=A,this._w=i}static slerpFlat(e,t,A,i,r,s,o){let a=A[i+0],l=A[i+1],c=A[i+2],u=A[i+3],h=r[s+0],f=r[s+1],p=r[s+2],m=r[s+3];if(o<=0){e[t+0]=a,e[t+1]=l,e[t+2]=c,e[t+3]=u;return}if(o>=1){e[t+0]=h,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(u!==m||a!==h||l!==f||c!==p){let g=a*h+l*f+c*p+u*m;g<0&&(h=-h,f=-f,p=-p,m=-m,g=-g);let d=1-o;if(g<.9995){const x=Math.acos(g),B=Math.sin(x);d=Math.sin(d*x)/B,o=Math.sin(o*x)/B,a=a*d+h*o,l=l*d+f*o,c=c*d+p*o,u=u*d+m*o}else{a=a*d+h*o,l=l*d+f*o,c=c*d+p*o,u=u*d+m*o;const x=1/Math.sqrt(a*a+l*l+c*c+u*u);a*=x,l*=x,c*=x,u*=x}}e[t]=a,e[t+1]=l,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,A,i,r,s){const o=A[i],a=A[i+1],l=A[i+2],c=A[i+3],u=r[s],h=r[s+1],f=r[s+2],p=r[s+3];return e[t]=o*p+c*u+a*f-l*h,e[t+1]=a*p+c*h+l*u-o*f,e[t+2]=l*p+c*f+o*h-a*u,e[t+3]=c*p-o*u-a*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,A,i){return this._x=e,this._y=t,this._z=A,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const A=e._x,i=e._y,r=e._z,s=e._order,o=Math.cos,a=Math.sin,l=o(A/2),c=o(i/2),u=o(r/2),h=a(A/2),f=a(i/2),p=a(r/2);switch(s){case"XYZ":this._x=h*c*u+l*f*p,this._y=l*f*u-h*c*p,this._z=l*c*p+h*f*u,this._w=l*c*u-h*f*p;break;case"YXZ":this._x=h*c*u+l*f*p,this._y=l*f*u-h*c*p,this._z=l*c*p-h*f*u,this._w=l*c*u+h*f*p;break;case"ZXY":this._x=h*c*u-l*f*p,this._y=l*f*u+h*c*p,this._z=l*c*p+h*f*u,this._w=l*c*u-h*f*p;break;case"ZYX":this._x=h*c*u-l*f*p,this._y=l*f*u+h*c*p,this._z=l*c*p-h*f*u,this._w=l*c*u+h*f*p;break;case"YZX":this._x=h*c*u+l*f*p,this._y=l*f*u+h*c*p,this._z=l*c*p-h*f*u,this._w=l*c*u-h*f*p;break;case"XZY":this._x=h*c*u-l*f*p,this._y=l*f*u-h*c*p,this._z=l*c*p+h*f*u,this._w=l*c*u+h*f*p;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const A=t/2,i=Math.sin(A);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(A),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,A=t[0],i=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10],h=A+o+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(c-a)*f,this._y=(r-l)*f,this._z=(s-i)*f}else if(A>o&&A>u){const f=2*Math.sqrt(1+A-o-u);this._w=(c-a)/f,this._x=.25*f,this._y=(i+s)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-A-u);this._w=(r-l)/f,this._x=(i+s)/f,this._y=.25*f,this._z=(a+c)/f}else{const f=2*Math.sqrt(1+u-A-o);this._w=(s-i)/f,this._x=(r+l)/f,this._y=(a+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let A=e.dot(t)+1;return A<1e-8?(A=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=A):(this._x=0,this._y=-e.z,this._z=e.y,this._w=A)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=A),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const A=this.angleTo(e);if(A===0)return this;const i=Math.min(1,t/A);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const A=e._x,i=e._y,r=e._z,s=e._w,o=t._x,a=t._y,l=t._z,c=t._w;return this._x=A*c+s*o+i*l-r*a,this._y=i*c+s*a+r*o-A*l,this._z=r*c+s*l+A*a-i*o,this._w=s*c-A*o-i*a-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let A=e._x,i=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(A=-A,i=-i,r=-r,s=-s,o=-o);let a=1-t;if(o<.9995){const l=Math.acos(o),c=Math.sin(l);a=Math.sin(a*l)/c,t=Math.sin(t*l)/c,this._x=this._x*a+A*t,this._y=this._y*a+i*t,this._z=this._z*a+r*t,this._w=this._w*a+s*t,this._onChangeCallback()}else this._x=this._x*a+A*t,this._y=this._y*a+i*t,this._z=this._z*a+r*t,this._w=this._w*a+s*t,this.normalize();return this}slerpQuaternions(e,t,A){return this.copy(e).slerp(t,A)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),A=Math.random(),i=Math.sqrt(1-A),r=Math.sqrt(A);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class N{constructor(e=0,t=0,A=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=A}set(e,t,A){return A===void 0&&(A=this.z),this.x=e,this.y=t,this.z=A,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,A=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*A+r[6]*i,this.y=r[1]*t+r[4]*A+r[7]*i,this.z=r[2]*t+r[5]*A+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,A=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*A+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*A+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*A+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*A+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,A=this.y,i=this.z,r=e.x,s=e.y,o=e.z,a=e.w,l=2*(s*i-o*A),c=2*(o*t-r*i),u=2*(r*A-s*t);return this.x=t+a*l+s*u-o*c,this.y=A+a*c+o*l-r*u,this.z=i+a*u+r*c-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,A=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*A+r[8]*i,this.y=r[1]*t+r[5]*A+r[9]*i,this.z=r[2]*t+r[6]*A+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const A=this.length();return this.divideScalar(A||1).multiplyScalar(Xe(A,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,A){return this.x=e.x+(t.x-e.x)*A,this.y=e.y+(t.y-e.y)*A,this.z=e.z+(t.z-e.z)*A,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const A=e.x,i=e.y,r=e.z,s=t.x,o=t.y,a=t.z;return this.x=i*a-r*o,this.y=r*s-A*a,this.z=A*o-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const A=e.dot(this)/t;return this.copy(e).multiplyScalar(A)}projectOnPlane(e){return ya.copy(this).projectOnVector(e),this.sub(ya)}reflect(e){return this.sub(ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const A=this.dot(e)/t;return Math.acos(Xe(A,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,A=this.y-e.y,i=this.z-e.z;return t*t+A*A+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,A){const i=Math.sin(t)*e;return this.x=i*Math.sin(A),this.y=Math.cos(t)*e,this.z=i*Math.cos(A),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,A){return this.x=e*Math.sin(t),this.y=A,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),A=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=A,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,A=Math.sqrt(1-t*t);return this.x=A*Math.cos(e),this.y=t,this.z=A*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ya=new N,Xh=new Yn;class ze{constructor(e,t,A,i,r,s,o,a,l){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,A,i,r,s,o,a,l)}set(e,t,A,i,r,s,o,a,l){const c=this.elements;return c[0]=e,c[1]=i,c[2]=o,c[3]=t,c[4]=r,c[5]=a,c[6]=A,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,A=e.elements;return t[0]=A[0],t[1]=A[1],t[2]=A[2],t[3]=A[3],t[4]=A[4],t[5]=A[5],t[6]=A[6],t[7]=A[7],t[8]=A[8],this}extractBasis(e,t,A){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),A.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const A=e.elements,i=t.elements,r=this.elements,s=A[0],o=A[3],a=A[6],l=A[1],c=A[4],u=A[7],h=A[2],f=A[5],p=A[8],m=i[0],g=i[3],d=i[6],x=i[1],B=i[4],w=i[7],y=i[2],v=i[5],E=i[8];return r[0]=s*m+o*x+a*y,r[3]=s*g+o*B+a*v,r[6]=s*d+o*w+a*E,r[1]=l*m+c*x+u*y,r[4]=l*g+c*B+u*v,r[7]=l*d+c*w+u*E,r[2]=h*m+f*x+p*y,r[5]=h*g+f*B+p*v,r[8]=h*d+f*w+p*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],A=e[1],i=e[2],r=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8];return t*s*c-t*o*l-A*r*c+A*o*a+i*r*l-i*s*a}invert(){const e=this.elements,t=e[0],A=e[1],i=e[2],r=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],u=c*s-o*l,h=o*a-c*r,f=l*r-s*a,p=t*u+A*h+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/p;return e[0]=u*m,e[1]=(i*l-c*A)*m,e[2]=(o*A-i*s)*m,e[3]=h*m,e[4]=(c*t-i*a)*m,e[5]=(i*r-o*t)*m,e[6]=f*m,e[7]=(A*a-l*t)*m,e[8]=(s*t-A*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,A,i,r,s,o){const a=Math.cos(r),l=Math.sin(r);return this.set(A*a,A*l,-A*(a*s+l*o)+s+e,-i*l,i*a,-i*(-l*s+a*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ea.makeScale(e,t)),this}rotate(e){return this.premultiply(Ea.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ea.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),A=Math.sin(e);return this.set(t,-A,0,A,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,A=e.elements;for(let i=0;i<9;i++)if(t[i]!==A[i])return!1;return!0}fromArray(e,t=0){for(let A=0;A<9;A++)this.elements[A]=e[A+t];return this}toArray(e=[],t=0){const A=this.elements;return e[t]=A[0],e[t+1]=A[1],e[t+2]=A[2],e[t+3]=A[3],e[t+4]=A[4],e[t+5]=A[5],e[t+6]=A[6],e[t+7]=A[7],e[t+8]=A[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ea=new ze,Yh=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qh=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vg(){const n={enabled:!0,workingColorSpace:ir,spaces:{},convert:function(i,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===at&&(i.r=yn(i.r),i.g=yn(i.g),i.b=yn(i.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===at&&(i.r=$i(i.r),i.g=$i(i.g),i.b=$i(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Nn?Io:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,s){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return As("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return As("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],A=[.3127,.329];return n.define({[ir]:{primaries:e,whitePoint:A,transfer:Io,toXYZ:Yh,fromXYZ:qh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:A,transfer:at,toXYZ:Yh,fromXYZ:qh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),n}const At=Vg();function yn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $i(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let _i;class Gg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let A;if(e instanceof HTMLCanvasElement)A=e;else{_i===void 0&&(_i=Ro("canvas")),_i.width=e.width,_i.height=e.height;const i=_i.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),A=_i}return A.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ro("canvas");t.width=e.width,t.height=e.height;const A=t.getContext("2d");A.drawImage(e,0,0,e.width,e.height);const i=A.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=yn(r[s]/255)*255;return A.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let A=0;A<t.length;A++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[A]=Math.floor(yn(t[A]/255)*255):t[A]=yn(t[A]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zg=0;class rh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=cr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const A={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(ba(i[s].image)):r.push(ba(i[s]))}else r=ba(i);A.url=r}return t||(e.images[this.uuid]=A),A}}function ba(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Gg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let kg=0;const Ma=new N;class Jt extends xi{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,A=wn,i=wn,r=SA,s=ui,o=HA,a=jA,l=Jt.DEFAULT_ANISOTROPY,c=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=cr(),this.name="",this.source=new rh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=A,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=a,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ma).x}get height(){return this.source.getSize(Ma).y}get depth(){return this.source.getSize(Ma).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const A=e[t];if(A===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&A&&i.isVector2&&A.isVector2||i&&A&&i.isVector3&&A.isVector3||i&&A&&i.isMatrix3&&A.isMatrix3?i.copy(A):this[t]=A}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const A={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(A.userData=this.userData),t||(e.textures[this.uuid]=A),A}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_d)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zr:e.x=e.x-Math.floor(e.x);break;case wn:e.x=e.x<0?0:1;break;case kl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zr:e.y=e.y-Math.floor(e.y);break;case wn:e.y=e.y<0?0:1;break;case kl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=_d;Jt.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,A=0,i=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=A,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,A,i){return this.x=e,this.y=t,this.z=A,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,A=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*A+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*A+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*A+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*A+s[11]*i+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,A,i,r;const a=e.elements,l=a[0],c=a[4],u=a[8],h=a[1],f=a[5],p=a[9],m=a[2],g=a[6],d=a[10];if(Math.abs(c-h)<.01&&Math.abs(u-m)<.01&&Math.abs(p-g)<.01){if(Math.abs(c+h)<.1&&Math.abs(u+m)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const B=(l+1)/2,w=(f+1)/2,y=(d+1)/2,v=(c+h)/4,E=(u+m)/4,U=(p+g)/4;return B>w&&B>y?B<.01?(A=0,i=.707106781,r=.707106781):(A=Math.sqrt(B),i=v/A,r=E/A):w>y?w<.01?(A=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),A=v/i,r=U/i):y<.01?(A=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),A=E/r,i=U/r),this.set(A,i,r,t),this}let x=Math.sqrt((g-p)*(g-p)+(u-m)*(u-m)+(h-c)*(h-c));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(u-m)/x,this.z=(h-c)/x,this.w=Math.acos((l+f+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const A=this.length();return this.divideScalar(A||1).multiplyScalar(Xe(A,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,A){return this.x=e.x+(t.x-e.x)*A,this.y=e.y+(t.y-e.y)*A,this.z=e.z+(t.z-e.z)*A,this.w=e.w+(t.w-e.w)*A,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kg extends xi{constructor(e=1,t=1,A={}){super(),A=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:SA,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},A),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=A.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const i={width:e,height:t,depth:A.depth},r=new Jt(i);this.textures=[];const s=A.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(A),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,this.resolveDepthBuffer=A.resolveDepthBuffer,this.resolveStencilBuffer=A.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=A.depthTexture,this.samples=A.samples,this.multiview=A.multiview}_setTextureOptions(e={}){const t={minFilter:SA,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let A=0;A<this.textures.length;A++)this.textures[A].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,A=1){if(this.width!==e||this.height!==t||this.depth!==A){this.width=e,this.height=t,this.depth=A;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=A,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,A=e.textures.length;t<A;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new rh(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class OA extends Kg{constructor(e=1,t=1,A={}){super(e,t,A),this.isWebGLRenderTarget=!0}}class Td extends Jt{constructor(e=null,t=1,A=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:A,depth:i},this.magFilter=nA,this.minFilter=nA,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wg extends Jt{constructor(e=null,t=1,A=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:A,depth:i},this.magFilter=nA,this.minFilter=nA,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hr{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,A=e.length;t<A;t+=3)this.expandByPoint(QA.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,A=e.count;t<A;t++)this.expandByPoint(QA.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,A=e.length;t<A;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const A=QA.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(A),this.max.copy(e).add(A),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const A=e.geometry;if(A!==void 0){const r=A.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,QA):QA.fromBufferAttribute(r,s),QA.applyMatrix4(e.matrixWorld),this.expandByPoint(QA);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vs.copy(e.boundingBox)):(A.boundingBox===null&&A.computeBoundingBox(),vs.copy(A.boundingBox)),vs.applyMatrix4(e.matrixWorld),this.union(vs)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,QA),QA.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,A;return e.normal.x>0?(t=e.normal.x*this.min.x,A=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,A=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,A+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,A+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,A+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,A+=e.normal.z*this.min.z),t<=-e.constant&&A>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),ws.subVectors(this.max,xr),Ci.subVectors(e.a,xr),yi.subVectors(e.b,xr),Ei.subVectors(e.c,xr),Un.subVectors(yi,Ci),Fn.subVectors(Ei,yi),ei.subVectors(Ci,Ei);let t=[0,-Un.z,Un.y,0,-Fn.z,Fn.y,0,-ei.z,ei.y,Un.z,0,-Un.x,Fn.z,0,-Fn.x,ei.z,0,-ei.x,-Un.y,Un.x,0,-Fn.y,Fn.x,0,-ei.y,ei.x,0];return!Sa(t,Ci,yi,Ei,ws)||(t=[1,0,0,0,1,0,0,0,1],!Sa(t,Ci,yi,Ei,ws))?!1:(_s.crossVectors(Un,Fn),t=[_s.x,_s.y,_s.z],Sa(t,Ci,yi,Ei,ws))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,QA).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(QA).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const sn=[new N,new N,new N,new N,new N,new N,new N,new N],QA=new N,vs=new hr,Ci=new N,yi=new N,Ei=new N,Un=new N,Fn=new N,ei=new N,xr=new N,ws=new N,_s=new N,ti=new N;function Sa(n,e,t,A,i){for(let r=0,s=n.length-3;r<=s;r+=3){ti.fromArray(n,r);const o=i.x*Math.abs(ti.x)+i.y*Math.abs(ti.y)+i.z*Math.abs(ti.z),a=e.dot(ti),l=t.dot(ti),c=A.dot(ti);if(Math.max(-Math.max(a,l,c),Math.min(a,l,c))>o)return!1}return!0}const Xg=new hr,Br=new N,Ua=new N;class ea{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const A=this.center;t!==void 0?A.copy(t):Xg.setFromPoints(e).getCenter(A);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,A.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const A=this.center.distanceToSquared(e);return t.copy(e),A>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);const t=Br.lengthSq();if(t>this.radius*this.radius){const A=Math.sqrt(t),i=(A-this.radius)*.5;this.center.addScaledVector(Br,i/A),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add(Ua)),this.expandByPoint(Br.copy(e.center).sub(Ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const on=new N,Fa=new N,Cs=new N,Tn=new N,Ta=new N,ys=new N,Ia=new N;let ta=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const A=t.dot(this.direction);return A<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,A)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.origin).addScaledVector(this.direction,t),on.distanceToSquared(e))}distanceSqToSegment(e,t,A,i){Fa.copy(e).add(t).multiplyScalar(.5),Cs.copy(t).sub(e).normalize(),Tn.copy(this.origin).sub(Fa);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Cs),o=Tn.dot(this.direction),a=-Tn.dot(Cs),l=Tn.lengthSq(),c=Math.abs(1-s*s);let u,h,f,p;if(c>0)if(u=s*a-o,h=s*o-a,p=r*c,u>=0)if(h>=-p)if(h<=p){const m=1/c;u*=m,h*=m,f=u*(u+s*h+2*o)+h*(s*u+h+2*a)+l}else h=r,u=Math.max(0,-(s*h+o)),f=-u*u+h*(h+2*a)+l;else h=-r,u=Math.max(0,-(s*h+o)),f=-u*u+h*(h+2*a)+l;else h<=-p?(u=Math.max(0,-(-s*r+o)),h=u>0?-r:Math.min(Math.max(-r,-a),r),f=-u*u+h*(h+2*a)+l):h<=p?(u=0,h=Math.min(Math.max(-r,-a),r),f=h*(h+2*a)+l):(u=Math.max(0,-(s*r+o)),h=u>0?r:Math.min(Math.max(-r,-a),r),f=-u*u+h*(h+2*a)+l);else h=s>0?-r:r,u=Math.max(0,-(s*h+o)),f=-u*u+h*(h+2*a)+l;return A&&A.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Fa).addScaledVector(Cs,h),f}intersectSphere(e,t){on.subVectors(e.center,this.origin);const A=on.dot(this.direction),i=on.dot(on)-A*A,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),o=A-s,a=A+s;return a<0?null:o<0?this.at(a,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const A=-(this.origin.dot(e.normal)+e.constant)/t;return A>=0?A:null}intersectPlane(e,t){const A=this.distanceToPlane(e);return A===null?null:this.at(A,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let A,i,r,s,o,a;const l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(A=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(A=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),c>=0?(r=(e.min.y-h.y)*c,s=(e.max.y-h.y)*c):(r=(e.max.y-h.y)*c,s=(e.min.y-h.y)*c),A>s||r>i||((r>A||isNaN(A))&&(A=r),(s<i||isNaN(i))&&(i=s),u>=0?(o=(e.min.z-h.z)*u,a=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,a=(e.min.z-h.z)*u),A>a||o>i)||((o>A||A!==A)&&(A=o),(a<i||i!==i)&&(i=a),i<0)?null:this.at(A>=0?A:i,t)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,A,i,r){Ta.subVectors(t,e),ys.subVectors(A,e),Ia.crossVectors(Ta,ys);let s=this.direction.dot(Ia),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Tn.subVectors(this.origin,e);const a=o*this.direction.dot(ys.crossVectors(Tn,ys));if(a<0)return null;const l=o*this.direction.dot(Ta.cross(Tn));if(l<0||a+l>s)return null;const c=-o*Tn.dot(Ia);return c<0?null:this.at(c/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class xt{constructor(e,t,A,i,r,s,o,a,l,c,u,h,f,p,m,g){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,A,i,r,s,o,a,l,c,u,h,f,p,m,g)}set(e,t,A,i,r,s,o,a,l,c,u,h,f,p,m,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=A,d[12]=i,d[1]=r,d[5]=s,d[9]=o,d[13]=a,d[2]=l,d[6]=c,d[10]=u,d[14]=h,d[3]=f,d[7]=p,d[11]=m,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,A=e.elements;return t[0]=A[0],t[1]=A[1],t[2]=A[2],t[3]=A[3],t[4]=A[4],t[5]=A[5],t[6]=A[6],t[7]=A[7],t[8]=A[8],t[9]=A[9],t[10]=A[10],t[11]=A[11],t[12]=A[12],t[13]=A[13],t[14]=A[14],t[15]=A[15],this}copyPosition(e){const t=this.elements,A=e.elements;return t[12]=A[12],t[13]=A[13],t[14]=A[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,A){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),A.setFromMatrixColumn(this,2),this}makeBasis(e,t,A){return this.set(e.x,t.x,A.x,0,e.y,t.y,A.y,0,e.z,t.z,A.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,A=e.elements,i=1/bi.setFromMatrixColumn(e,0).length(),r=1/bi.setFromMatrixColumn(e,1).length(),s=1/bi.setFromMatrixColumn(e,2).length();return t[0]=A[0]*i,t[1]=A[1]*i,t[2]=A[2]*i,t[3]=0,t[4]=A[4]*r,t[5]=A[5]*r,t[6]=A[6]*r,t[7]=0,t[8]=A[8]*s,t[9]=A[9]*s,t[10]=A[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,A=e.x,i=e.y,r=e.z,s=Math.cos(A),o=Math.sin(A),a=Math.cos(i),l=Math.sin(i),c=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const h=s*c,f=s*u,p=o*c,m=o*u;t[0]=a*c,t[4]=-a*u,t[8]=l,t[1]=f+p*l,t[5]=h-m*l,t[9]=-o*a,t[2]=m-h*l,t[6]=p+f*l,t[10]=s*a}else if(e.order==="YXZ"){const h=a*c,f=a*u,p=l*c,m=l*u;t[0]=h+m*o,t[4]=p*o-f,t[8]=s*l,t[1]=s*u,t[5]=s*c,t[9]=-o,t[2]=f*o-p,t[6]=m+h*o,t[10]=s*a}else if(e.order==="ZXY"){const h=a*c,f=a*u,p=l*c,m=l*u;t[0]=h-m*o,t[4]=-s*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=s*c,t[9]=m-h*o,t[2]=-s*l,t[6]=o,t[10]=s*a}else if(e.order==="ZYX"){const h=s*c,f=s*u,p=o*c,m=o*u;t[0]=a*c,t[4]=p*l-f,t[8]=h*l+m,t[1]=a*u,t[5]=m*l+h,t[9]=f*l-p,t[2]=-l,t[6]=o*a,t[10]=s*a}else if(e.order==="YZX"){const h=s*a,f=s*l,p=o*a,m=o*l;t[0]=a*c,t[4]=m-h*u,t[8]=p*u+f,t[1]=u,t[5]=s*c,t[9]=-o*c,t[2]=-l*c,t[6]=f*u+p,t[10]=h-m*u}else if(e.order==="XZY"){const h=s*a,f=s*l,p=o*a,m=o*l;t[0]=a*c,t[4]=-u,t[8]=l*c,t[1]=h*u+m,t[5]=s*c,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*c,t[10]=m*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yg,e,qg)}lookAt(e,t,A){const i=this.elements;return gA.subVectors(e,t),gA.lengthSq()===0&&(gA.z=1),gA.normalize(),In.crossVectors(A,gA),In.lengthSq()===0&&(Math.abs(A.z)===1?gA.x+=1e-4:gA.z+=1e-4,gA.normalize(),In.crossVectors(A,gA)),In.normalize(),Es.crossVectors(gA,In),i[0]=In.x,i[4]=Es.x,i[8]=gA.x,i[1]=In.y,i[5]=Es.y,i[9]=gA.y,i[2]=In.z,i[6]=Es.z,i[10]=gA.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const A=e.elements,i=t.elements,r=this.elements,s=A[0],o=A[4],a=A[8],l=A[12],c=A[1],u=A[5],h=A[9],f=A[13],p=A[2],m=A[6],g=A[10],d=A[14],x=A[3],B=A[7],w=A[11],y=A[15],v=i[0],E=i[4],U=i[8],_=i[12],C=i[1],T=i[5],R=i[9],F=i[13],P=i[2],D=i[6],Q=i[10],k=i[14],O=i[3],Y=i[7],$=i[11],ae=i[15];return r[0]=s*v+o*C+a*P+l*O,r[4]=s*E+o*T+a*D+l*Y,r[8]=s*U+o*R+a*Q+l*$,r[12]=s*_+o*F+a*k+l*ae,r[1]=c*v+u*C+h*P+f*O,r[5]=c*E+u*T+h*D+f*Y,r[9]=c*U+u*R+h*Q+f*$,r[13]=c*_+u*F+h*k+f*ae,r[2]=p*v+m*C+g*P+d*O,r[6]=p*E+m*T+g*D+d*Y,r[10]=p*U+m*R+g*Q+d*$,r[14]=p*_+m*F+g*k+d*ae,r[3]=x*v+B*C+w*P+y*O,r[7]=x*E+B*T+w*D+y*Y,r[11]=x*U+B*R+w*Q+y*$,r[15]=x*_+B*F+w*k+y*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],A=e[4],i=e[8],r=e[12],s=e[1],o=e[5],a=e[9],l=e[13],c=e[2],u=e[6],h=e[10],f=e[14],p=e[3],m=e[7],g=e[11],d=e[15];return p*(+r*a*u-i*l*u-r*o*h+A*l*h+i*o*f-A*a*f)+m*(+t*a*f-t*l*h+r*s*h-i*s*f+i*l*c-r*a*c)+g*(+t*l*u-t*o*f-r*s*u+A*s*f+r*o*c-A*l*c)+d*(-i*o*c-t*a*u+t*o*h+i*s*u-A*s*h+A*a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,A){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=A),this}invert(){const e=this.elements,t=e[0],A=e[1],i=e[2],r=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],u=e[9],h=e[10],f=e[11],p=e[12],m=e[13],g=e[14],d=e[15],x=u*g*l-m*h*l+m*a*f-o*g*f-u*a*d+o*h*d,B=p*h*l-c*g*l-p*a*f+s*g*f+c*a*d-s*h*d,w=c*m*l-p*u*l+p*o*f-s*m*f-c*o*d+s*u*d,y=p*u*a-c*m*a-p*o*h+s*m*h+c*o*g-s*u*g,v=t*x+A*B+i*w+r*y;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/v;return e[0]=x*E,e[1]=(m*h*r-u*g*r-m*i*f+A*g*f+u*i*d-A*h*d)*E,e[2]=(o*g*r-m*a*r+m*i*l-A*g*l-o*i*d+A*a*d)*E,e[3]=(u*a*r-o*h*r-u*i*l+A*h*l+o*i*f-A*a*f)*E,e[4]=B*E,e[5]=(c*g*r-p*h*r+p*i*f-t*g*f-c*i*d+t*h*d)*E,e[6]=(p*a*r-s*g*r-p*i*l+t*g*l+s*i*d-t*a*d)*E,e[7]=(s*h*r-c*a*r+c*i*l-t*h*l-s*i*f+t*a*f)*E,e[8]=w*E,e[9]=(p*u*r-c*m*r-p*A*f+t*m*f+c*A*d-t*u*d)*E,e[10]=(s*m*r-p*o*r+p*A*l-t*m*l-s*A*d+t*o*d)*E,e[11]=(c*o*r-s*u*r-c*A*l+t*u*l+s*A*f-t*o*f)*E,e[12]=y*E,e[13]=(c*m*i-p*u*i+p*A*h-t*m*h-c*A*g+t*u*g)*E,e[14]=(p*o*i-s*m*i-p*A*a+t*m*a+s*A*g-t*o*g)*E,e[15]=(s*u*i-c*o*i+c*A*a-t*u*a-s*A*h+t*o*h)*E,this}scale(e){const t=this.elements,A=e.x,i=e.y,r=e.z;return t[0]*=A,t[4]*=i,t[8]*=r,t[1]*=A,t[5]*=i,t[9]*=r,t[2]*=A,t[6]*=i,t[10]*=r,t[3]*=A,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],A=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,A,i))}makeTranslation(e,t,A){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,A,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),A=Math.sin(e);return this.set(1,0,0,0,0,t,-A,0,0,A,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),A=Math.sin(e);return this.set(t,0,A,0,0,1,0,0,-A,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),A=Math.sin(e);return this.set(t,-A,0,0,A,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const A=Math.cos(t),i=Math.sin(t),r=1-A,s=e.x,o=e.y,a=e.z,l=r*s,c=r*o;return this.set(l*s+A,l*o-i*a,l*a+i*o,0,l*o+i*a,c*o+A,c*a-i*s,0,l*a-i*o,c*a+i*s,r*a*a+A,0,0,0,0,1),this}makeScale(e,t,A){return this.set(e,0,0,0,0,t,0,0,0,0,A,0,0,0,0,1),this}makeShear(e,t,A,i,r,s){return this.set(1,A,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,A){const i=this.elements,r=t._x,s=t._y,o=t._z,a=t._w,l=r+r,c=s+s,u=o+o,h=r*l,f=r*c,p=r*u,m=s*c,g=s*u,d=o*u,x=a*l,B=a*c,w=a*u,y=A.x,v=A.y,E=A.z;return i[0]=(1-(m+d))*y,i[1]=(f+w)*y,i[2]=(p-B)*y,i[3]=0,i[4]=(f-w)*v,i[5]=(1-(h+d))*v,i[6]=(g+x)*v,i[7]=0,i[8]=(p+B)*E,i[9]=(g-x)*E,i[10]=(1-(h+m))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,A){const i=this.elements;let r=bi.set(i[0],i[1],i[2]).length();const s=bi.set(i[4],i[5],i[6]).length(),o=bi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],RA.copy(this);const l=1/r,c=1/s,u=1/o;return RA.elements[0]*=l,RA.elements[1]*=l,RA.elements[2]*=l,RA.elements[4]*=c,RA.elements[5]*=c,RA.elements[6]*=c,RA.elements[8]*=u,RA.elements[9]*=u,RA.elements[10]*=u,t.setFromRotationMatrix(RA),A.x=r,A.y=s,A.z=o,this}makePerspective(e,t,A,i,r,s,o=YA,a=!1){const l=this.elements,c=2*r/(t-e),u=2*r/(A-i),h=(t+e)/(t-e),f=(A+i)/(A-i);let p,m;if(a)p=r/(s-r),m=s*r/(s-r);else if(o===YA)p=-(s+r)/(s-r),m=-2*s*r/(s-r);else if(o===Qo)p=-s/(s-r),m=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,A,i,r,s,o=YA,a=!1){const l=this.elements,c=2/(t-e),u=2/(A-i),h=-(t+e)/(t-e),f=-(A+i)/(A-i);let p,m;if(a)p=1/(s-r),m=s/(s-r);else if(o===YA)p=-2/(s-r),m=-(s+r)/(s-r);else if(o===Qo)p=-1/(s-r),m=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,A=e.elements;for(let i=0;i<16;i++)if(t[i]!==A[i])return!1;return!0}fromArray(e,t=0){for(let A=0;A<16;A++)this.elements[A]=e[A+t];return this}toArray(e=[],t=0){const A=this.elements;return e[t]=A[0],e[t+1]=A[1],e[t+2]=A[2],e[t+3]=A[3],e[t+4]=A[4],e[t+5]=A[5],e[t+6]=A[6],e[t+7]=A[7],e[t+8]=A[8],e[t+9]=A[9],e[t+10]=A[10],e[t+11]=A[11],e[t+12]=A[12],e[t+13]=A[13],e[t+14]=A[14],e[t+15]=A[15],e}}const bi=new N,RA=new xt,Yg=new N(0,0,0),qg=new N(1,1,1),In=new N,Es=new N,gA=new N,Jh=new xt,Zh=new Yn;class $A{constructor(e=0,t=0,A=0,i=$A.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=A,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,A,i=this._order){return this._x=e,this._y=t,this._z=A,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,A=!0){const i=e.elements,r=i[0],s=i[4],o=i[8],a=i[1],l=i[5],c=i[9],u=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(a,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(a,r));break;case"ZYX":this._y=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(a,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Xe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,A===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,A){return Jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jh,t,A)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zh.setFromEuler(this),this.setFromQuaternion(Zh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$A.DEFAULT_ORDER="XYZ";class sh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jg=0;const jh=new N,Mi=new Yn,an=new xt,bs=new N,vr=new N,Zg=new N,jg=new Yn,$h=new N(1,0,0),eu=new N(0,1,0),tu=new N(0,0,1),Au={type:"added"},$g={type:"removed"},Si={type:"childadded",child:null},Qa={type:"childremoved",child:null};class It extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new N,t=new $A,A=new Yn,i=new N(1,1,1);function r(){A.setFromEuler(t,!1)}function s(){t.setFromQuaternion(A,void 0,!1)}t._onChange(r),A._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:A},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new xt},normalMatrix:{value:new ze}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.premultiply(Mi),this}rotateX(e){return this.rotateOnAxis($h,e)}rotateY(e){return this.rotateOnAxis(eu,e)}rotateZ(e){return this.rotateOnAxis(tu,e)}translateOnAxis(e,t){return jh.copy(e).applyQuaternion(this.quaternion),this.position.add(jh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($h,e)}translateY(e){return this.translateOnAxis(eu,e)}translateZ(e){return this.translateOnAxis(tu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(e,t,A){e.isVector3?bs.copy(e):bs.set(e,t,A);const i=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(vr,bs,this.up):an.lookAt(bs,vr,this.up),this.quaternion.setFromRotationMatrix(an),i&&(an.extractRotation(i.matrixWorld),Mi.setFromRotationMatrix(an),this.quaternion.premultiply(Mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(yt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Au),Si.child=e,this.dispatchEvent(Si),Si.child=null):yt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let A=0;A<arguments.length;A++)this.remove(arguments[A]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($g),Qa.child=e,this.dispatchEvent(Qa),Qa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),an.multiply(e.parent.matrixWorld)),e.applyMatrix4(an),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Au),Si.child=e,this.dispatchEvent(Si),Si.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let A=0,i=this.children.length;A<i;A++){const s=this.children[A].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,A=[]){this[e]===t&&A.push(this);const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(e,t,A);return A}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,Zg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,jg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let A=0,i=t.length;A<i;A++)t[A].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let A=0,i=t.length;A<i;A++)t[A].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let A=0,i=t.length;A<i;A++)t[A].updateMatrixWorld(e)}updateWorldMatrix(e,t){const A=this.parent;if(e===!0&&A!==null&&A.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",A={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},A.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let l=0,c=a.length;l<c;l++){const u=a[l];r(e.shapes,u)}else r(e.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,l=this.material.length;a<l;a++)o.push(r(e.materials,this.material[a]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const a=this.animations[o];i.animations.push(r(e.animations,a))}}if(t){const o=s(e.geometries),a=s(e.materials),l=s(e.textures),c=s(e.images),u=s(e.shapes),h=s(e.skeletons),f=s(e.animations),p=s(e.nodes);o.length>0&&(A.geometries=o),a.length>0&&(A.materials=a),l.length>0&&(A.textures=l),c.length>0&&(A.images=c),u.length>0&&(A.shapes=u),h.length>0&&(A.skeletons=h),f.length>0&&(A.animations=f),p.length>0&&(A.nodes=p)}return A.object=i,A;function s(o){const a=[];for(const l in o){const c=o[l];delete c.metadata,a.push(c)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let A=0;A<e.children.length;A++){const i=e.children[A];this.add(i.clone())}return this}}It.DEFAULT_UP=new N(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const LA=new N,ln=new N,Ra=new N,cn=new N,Ui=new N,Fi=new N,nu=new N,La=new N,Da=new N,Pa=new N,Ha=new Et,Na=new Et,Oa=new Et;class MA{constructor(e=new N,t=new N,A=new N){this.a=e,this.b=t,this.c=A}static getNormal(e,t,A,i){i.subVectors(A,t),LA.subVectors(e,t),i.cross(LA);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,A,i,r){LA.subVectors(i,t),ln.subVectors(A,t),Ra.subVectors(e,t);const s=LA.dot(LA),o=LA.dot(ln),a=LA.dot(Ra),l=ln.dot(ln),c=ln.dot(Ra),u=s*l-o*o;if(u===0)return r.set(0,0,0),null;const h=1/u,f=(l*a-o*c)*h,p=(s*c-o*a)*h;return r.set(1-f-p,p,f)}static containsPoint(e,t,A,i){return this.getBarycoord(e,t,A,i,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(e,t,A,i,r,s,o,a){return this.getBarycoord(e,t,A,i,cn)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(r,cn.x),a.addScaledVector(s,cn.y),a.addScaledVector(o,cn.z),a)}static getInterpolatedAttribute(e,t,A,i,r,s){return Ha.setScalar(0),Na.setScalar(0),Oa.setScalar(0),Ha.fromBufferAttribute(e,t),Na.fromBufferAttribute(e,A),Oa.fromBufferAttribute(e,i),s.setScalar(0),s.addScaledVector(Ha,r.x),s.addScaledVector(Na,r.y),s.addScaledVector(Oa,r.z),s}static isFrontFacing(e,t,A,i){return LA.subVectors(A,t),ln.subVectors(e,t),LA.cross(ln).dot(i)<0}set(e,t,A){return this.a.copy(e),this.b.copy(t),this.c.copy(A),this}setFromPointsAndIndices(e,t,A,i){return this.a.copy(e[t]),this.b.copy(e[A]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,A,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,A),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return LA.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),LA.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return MA.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return MA.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,A,i,r){return MA.getInterpolation(e,this.a,this.b,this.c,t,A,i,r)}containsPoint(e){return MA.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return MA.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const A=this.a,i=this.b,r=this.c;let s,o;Ui.subVectors(i,A),Fi.subVectors(r,A),La.subVectors(e,A);const a=Ui.dot(La),l=Fi.dot(La);if(a<=0&&l<=0)return t.copy(A);Da.subVectors(e,i);const c=Ui.dot(Da),u=Fi.dot(Da);if(c>=0&&u<=c)return t.copy(i);const h=a*u-c*l;if(h<=0&&a>=0&&c<=0)return s=a/(a-c),t.copy(A).addScaledVector(Ui,s);Pa.subVectors(e,r);const f=Ui.dot(Pa),p=Fi.dot(Pa);if(p>=0&&f<=p)return t.copy(r);const m=f*l-a*p;if(m<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(A).addScaledVector(Fi,o);const g=c*p-f*u;if(g<=0&&u-c>=0&&f-p>=0)return nu.subVectors(r,i),o=(u-c)/(u-c+(f-p)),t.copy(i).addScaledVector(nu,o);const d=1/(g+m+h);return s=m*d,o=h*d,t.copy(A).addScaledVector(Ui,s).addScaledVector(Fi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function Va(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ie{constructor(e,t,A){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,A)}set(e,t,A){if(t===void 0&&A===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,A);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,A,i=At.workingColorSpace){return this.r=e,this.g=t,this.b=A,At.colorSpaceToWorking(this,i),this}setHSL(e,t,A,i=At.workingColorSpace){if(e=ih(e,1),t=Xe(t,0,1),A=Xe(A,0,1),t===0)this.r=this.g=this.b=A;else{const r=A<=.5?A*(1+t):A+t-A*t,s=2*A-r;this.r=Va(s,r,e+1/3),this.g=Va(s,r,e),this.b=Va(s,r,e-1/3)}return At.colorSpaceToWorking(this,i),this}setStyle(e,t=zt){function A(r){r!==void 0&&parseFloat(r)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return A(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return A(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return A(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const A=Id[e.toLowerCase()];return A!==void 0?this.setHex(A,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yn(e.r),this.g=yn(e.g),this.b=yn(e.b),this}copyLinearToSRGB(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return At.workingToColorSpace(Xt.copy(this),e),Math.round(Xe(Xt.r*255,0,255))*65536+Math.round(Xe(Xt.g*255,0,255))*256+Math.round(Xe(Xt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(Xt.copy(this),t);const A=Xt.r,i=Xt.g,r=Xt.b,s=Math.max(A,i,r),o=Math.min(A,i,r);let a,l;const c=(o+s)/2;if(o===s)a=0,l=0;else{const u=s-o;switch(l=c<=.5?u/(s+o):u/(2-s-o),s){case A:a=(i-r)/u+(i<r?6:0);break;case i:a=(r-A)/u+2;break;case r:a=(A-i)/u+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=zt){At.workingToColorSpace(Xt.copy(this),e);const t=Xt.r,A=Xt.g,i=Xt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${A.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(A*255)},${Math.round(i*255)})`}offsetHSL(e,t,A){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+A)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,A){return this.r=e.r+(t.r-e.r)*A,this.g=e.g+(t.g-e.g)*A,this.b=e.b+(t.b-e.b)*A,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(Ms);const A=Vr(Qn.h,Ms.h,t),i=Vr(Qn.s,Ms.s,t),r=Vr(Qn.l,Ms.l,t);return this.setHSL(A,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,A=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*A+r[6]*i,this.g=r[1]*t+r[4]*A+r[7]*i,this.b=r[2]*t+r[5]*A+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Ie;Ie.NAMES=Id;let em=0,Jn=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=cr(),this.name="",this.type="Material",this.blending=Zi,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ql,this.blendDst=Rl,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const A=e[t];if(A===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(A):i&&i.isVector3&&A&&A.isVector3?i.copy(A):this[t]=A}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const A={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),this.color&&this.color.isColor&&(A.color=this.color.getHex()),this.roughness!==void 0&&(A.roughness=this.roughness),this.metalness!==void 0&&(A.metalness=this.metalness),this.sheen!==void 0&&(A.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(A.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(A.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(A.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(A.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(A.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(A.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(A.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(A.shininess=this.shininess),this.clearcoat!==void 0&&(A.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(A.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(A.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(A.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(A.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,A.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(A.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(A.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(A.dispersion=this.dispersion),this.iridescence!==void 0&&(A.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(A.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(A.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(A.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(A.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(A.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(A.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(A.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(A.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(A.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(A.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(A.lightMap=this.lightMap.toJSON(e).uuid,A.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(A.aoMap=this.aoMap.toJSON(e).uuid,A.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(A.bumpMap=this.bumpMap.toJSON(e).uuid,A.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(A.normalMap=this.normalMap.toJSON(e).uuid,A.normalMapType=this.normalMapType,A.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(A.displacementMap=this.displacementMap.toJSON(e).uuid,A.displacementScale=this.displacementScale,A.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(A.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(A.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(A.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(A.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(A.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(A.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(A.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(A.combine=this.combine)),this.envMapRotation!==void 0&&(A.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(A.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(A.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(A.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(A.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(A.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(A.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(A.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(A.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(A.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(A.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(A.size=this.size),this.shadowSide!==null&&(A.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(A.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(A.blending=this.blending),this.side!==Xn&&(A.side=this.side),this.vertexColors===!0&&(A.vertexColors=!0),this.opacity<1&&(A.opacity=this.opacity),this.transparent===!0&&(A.transparent=!0),this.blendSrc!==Ql&&(A.blendSrc=this.blendSrc),this.blendDst!==Rl&&(A.blendDst=this.blendDst),this.blendEquation!==ai&&(A.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(A.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(A.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(A.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(A.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(A.blendAlpha=this.blendAlpha),this.depthFunc!==tr&&(A.depthFunc=this.depthFunc),this.depthTest===!1&&(A.depthTest=this.depthTest),this.depthWrite===!1&&(A.depthWrite=this.depthWrite),this.colorWrite===!1&&(A.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(A.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vh&&(A.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(A.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(A.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(A.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(A.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(A.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(A.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(A.rotation=this.rotation),this.polygonOffset===!0&&(A.polygonOffset=!0),this.polygonOffsetFactor!==0&&(A.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(A.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(A.linewidth=this.linewidth),this.dashSize!==void 0&&(A.dashSize=this.dashSize),this.gapSize!==void 0&&(A.gapSize=this.gapSize),this.scale!==void 0&&(A.scale=this.scale),this.dithering===!0&&(A.dithering=!0),this.alphaTest>0&&(A.alphaTest=this.alphaTest),this.alphaHash===!0&&(A.alphaHash=!0),this.alphaToCoverage===!0&&(A.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(A.premultipliedAlpha=!0),this.forceSinglePass===!0&&(A.forceSinglePass=!0),this.wireframe===!0&&(A.wireframe=!0),this.wireframeLinewidth>1&&(A.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(A.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(A.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(A.flatShading=!0),this.visible===!1&&(A.visible=!1),this.toneMapped===!1&&(A.toneMapped=!1),this.fog===!1&&(A.fog=!1),Object.keys(this.userData).length>0&&(A.userData=this.userData);function i(r){const s=[];for(const o in r){const a=r[o];delete a.metadata,s.push(a)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(A.textures=r),s.length>0&&(A.images=s)}return A}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let A=null;if(t!==null){const i=t.length;A=new Array(i);for(let r=0;r!==i;++r)A[r]=t[r].clone()}return this.clippingPlanes=A,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class ur extends Jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $A,this.combine=vd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new N,Ss=new ue;let tm=0;class uA{constructor(e,t,A=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=A,this.usage=Gh,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,A){e*=this.itemSize,A*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[A+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,A=this.count;t<A;t++)Ss.fromBufferAttribute(this,t),Ss.applyMatrix3(e),this.setXY(t,Ss.x,Ss.y);else if(this.itemSize===3)for(let t=0,A=this.count;t<A;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,A=this.count;t<A;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,A=this.count;t<A;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,A=this.count;t<A;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let A=this.array[e*this.itemSize+t];return this.normalized&&(A=zi(A,this.array)),A}setComponent(e,t,A){return this.normalized&&(A=jt(A,this.array)),this.array[e*this.itemSize+t]=A,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,A){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),A=jt(A,this.array)),this.array[e+0]=t,this.array[e+1]=A,this}setXYZ(e,t,A,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),A=jt(A,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=A,this.array[e+2]=i,this}setXYZW(e,t,A,i,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),A=jt(A,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=A,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gh&&(e.usage=this.usage),e}}class Qd extends uA{constructor(e,t,A){super(new Uint16Array(e),t,A)}}class Rd extends uA{constructor(e,t,A){super(new Uint32Array(e),t,A)}}class Ot extends uA{constructor(e,t,A){super(new Float32Array(e),t,A)}}let Am=0;const yA=new xt,Ga=new It,Ti=new N,mA=new hr,wr=new hr,Ht=new N;class fA extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fd(e)?Rd:Qd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,A=0){this.groups.push({start:e,count:t,materialIndex:A})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const A=this.attributes.normal;if(A!==void 0){const r=new ze().getNormalMatrix(e);A.applyNormalMatrix(r),A.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yA.makeRotationFromQuaternion(e),this.applyMatrix4(yA),this}rotateX(e){return yA.makeRotationX(e),this.applyMatrix4(yA),this}rotateY(e){return yA.makeRotationY(e),this.applyMatrix4(yA),this}rotateZ(e){return yA.makeRotationZ(e),this.applyMatrix4(yA),this}translate(e,t,A){return yA.makeTranslation(e,t,A),this.applyMatrix4(yA),this}scale(e,t,A){return yA.makeScale(e,t,A),this.applyMatrix4(yA),this}lookAt(e){return Ga.lookAt(e),Ga.updateMatrix(),this.applyMatrix4(Ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const A=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];A.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ot(A,3))}else{const A=Math.min(e.length,t.count);for(let i=0;i<A;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let A=0,i=t.length;A<i;A++){const r=t[A];mA.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,mA.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,mA.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(mA.min),this.boundingBox.expandByPoint(mA.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const A=this.boundingSphere.center;if(mA.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];wr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(mA.min,wr.min),mA.expandByPoint(Ht),Ht.addVectors(mA.max,wr.max),mA.expandByPoint(Ht)):(mA.expandByPoint(wr.min),mA.expandByPoint(wr.max))}mA.getCenter(A);let i=0;for(let r=0,s=e.count;r<s;r++)Ht.fromBufferAttribute(e,r),i=Math.max(i,A.distanceToSquared(Ht));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],a=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++)Ht.fromBufferAttribute(o,l),a&&(Ti.fromBufferAttribute(e,l),Ht.add(Ti)),i=Math.max(i,A.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const A=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new uA(new Float32Array(4*A.count),4));const s=this.getAttribute("tangent"),o=[],a=[];for(let U=0;U<A.count;U++)o[U]=new N,a[U]=new N;const l=new N,c=new N,u=new N,h=new ue,f=new ue,p=new ue,m=new N,g=new N;function d(U,_,C){l.fromBufferAttribute(A,U),c.fromBufferAttribute(A,_),u.fromBufferAttribute(A,C),h.fromBufferAttribute(r,U),f.fromBufferAttribute(r,_),p.fromBufferAttribute(r,C),c.sub(l),u.sub(l),f.sub(h),p.sub(h);const T=1/(f.x*p.y-p.x*f.y);isFinite(T)&&(m.copy(c).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(T),g.copy(u).multiplyScalar(f.x).addScaledVector(c,-p.x).multiplyScalar(T),o[U].add(m),o[_].add(m),o[C].add(m),a[U].add(g),a[_].add(g),a[C].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let U=0,_=x.length;U<_;++U){const C=x[U],T=C.start,R=C.count;for(let F=T,P=T+R;F<P;F+=3)d(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const B=new N,w=new N,y=new N,v=new N;function E(U){y.fromBufferAttribute(i,U),v.copy(y);const _=o[U];B.copy(_),B.sub(y.multiplyScalar(y.dot(_))).normalize(),w.crossVectors(v,_);const T=w.dot(a[U])<0?-1:1;s.setXYZW(U,B.x,B.y,B.z,T)}for(let U=0,_=x.length;U<_;++U){const C=x[U],T=C.start,R=C.count;for(let F=T,P=T+R;F<P;F+=3)E(e.getX(F+0)),E(e.getX(F+1)),E(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let A=this.getAttribute("normal");if(A===void 0)A=new uA(new Float32Array(t.count*3),3),this.setAttribute("normal",A);else for(let h=0,f=A.count;h<f;h++)A.setXYZ(h,0,0,0);const i=new N,r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,u=new N;if(e)for(let h=0,f=e.count;h<f;h+=3){const p=e.getX(h+0),m=e.getX(h+1),g=e.getX(h+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),c.subVectors(s,r),u.subVectors(i,r),c.cross(u),o.fromBufferAttribute(A,p),a.fromBufferAttribute(A,m),l.fromBufferAttribute(A,g),o.add(c),a.add(c),l.add(c),A.setXYZ(p,o.x,o.y,o.z),A.setXYZ(m,a.x,a.y,a.z),A.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),c.subVectors(s,r),u.subVectors(i,r),c.cross(u),A.setXYZ(h+0,c.x,c.y,c.z),A.setXYZ(h+1,c.x,c.y,c.z),A.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),A.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,A=e.count;t<A;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,a){const l=o.array,c=o.itemSize,u=o.normalized,h=new l.constructor(a.length*c);let f=0,p=0;for(let m=0,g=a.length;m<g;m++){o.isInterleavedBufferAttribute?f=a[m]*o.data.stride+o.offset:f=a[m]*c;for(let d=0;d<c;d++)h[p++]=l[f++]}return new uA(h,c,u)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fA,A=this.index.array,i=this.attributes;for(const o in i){const a=i[o],l=e(a,A);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const a=[],l=r[o];for(let c=0,u=l.length;c<u;c++){const h=l[c],f=e(h,A);a.push(f)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,a=s.length;o<a;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const l in a)a[l]!==void 0&&(e[l]=a[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const A=this.attributes;for(const a in A){const l=A[a];e.data.attributes[a]=l.toJSON(e.data)}const i={};let r=!1;for(const a in this.morphAttributes){const l=this.morphAttributes[a],c=[];for(let u=0,h=l.length;u<h;u++){const f=l[u];c.push(f.toJSON(e.data))}c.length>0&&(i[a]=c,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const A=e.index;A!==null&&this.setIndex(A.clone());const i=e.attributes;for(const l in i){const c=i[l];this.setAttribute(l,c.clone(t))}const r=e.morphAttributes;for(const l in r){const c=[],u=r[l];for(let h=0,f=u.length;h<f;h++)c.push(u[h].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,c=s.length;l<c;l++){const u=s[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const iu=new xt,Ai=new ta,Us=new ea,ru=new N,Fs=new N,Ts=new N,Is=new N,za=new N,Qs=new N,su=new N,Rs=new N;class iA extends It{constructor(e=new fA,t=new ur){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,A=Object.keys(t);if(A.length>0){const i=t[A[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const A=this.geometry,i=A.attributes.position,r=A.morphAttributes.position,s=A.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Qs.set(0,0,0);for(let a=0,l=r.length;a<l;a++){const c=o[a],u=r[a];c!==0&&(za.fromBufferAttribute(u,e),s?Qs.addScaledVector(za,c):Qs.addScaledVector(za.sub(t),c))}t.add(Qs)}return t}raycast(e,t){const A=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(A.boundingSphere===null&&A.computeBoundingSphere(),Us.copy(A.boundingSphere),Us.applyMatrix4(r),Ai.copy(e.ray).recast(e.near),!(Us.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Us,ru)===null||Ai.origin.distanceToSquared(ru)>(e.far-e.near)**2))&&(iu.copy(r).invert(),Ai.copy(e.ray).applyMatrix4(iu),!(A.boundingBox!==null&&Ai.intersectsBox(A.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,A){let i;const r=this.geometry,s=this.material,o=r.index,a=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(s))for(let p=0,m=h.length;p<m;p++){const g=h[p],d=s[g.materialIndex],x=Math.max(g.start,f.start),B=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let w=x,y=B;w<y;w+=3){const v=o.getX(w),E=o.getX(w+1),U=o.getX(w+2);i=Ls(this,d,e,A,l,c,u,v,E,U),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),m=Math.min(o.count,f.start+f.count);for(let g=p,d=m;g<d;g+=3){const x=o.getX(g),B=o.getX(g+1),w=o.getX(g+2);i=Ls(this,s,e,A,l,c,u,x,B,w),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(a!==void 0)if(Array.isArray(s))for(let p=0,m=h.length;p<m;p++){const g=h[p],d=s[g.materialIndex],x=Math.max(g.start,f.start),B=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let w=x,y=B;w<y;w+=3){const v=w,E=w+1,U=w+2;i=Ls(this,d,e,A,l,c,u,v,E,U),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),m=Math.min(a.count,f.start+f.count);for(let g=p,d=m;g<d;g+=3){const x=g,B=g+1,w=g+2;i=Ls(this,s,e,A,l,c,u,x,B,w),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function nm(n,e,t,A,i,r,s,o){let a;if(e.side===hA?a=A.intersectTriangle(s,r,i,!0,o):a=A.intersectTriangle(i,r,s,e.side===Xn,o),a===null)return null;Rs.copy(o),Rs.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Rs);return l<t.near||l>t.far?null:{distance:l,point:Rs.clone(),object:n}}function Ls(n,e,t,A,i,r,s,o,a,l){n.getVertexPosition(o,Fs),n.getVertexPosition(a,Ts),n.getVertexPosition(l,Is);const c=nm(n,e,t,A,Fs,Ts,Is,su);if(c){const u=new N;MA.getBarycoord(su,Fs,Ts,Is,u),i&&(c.uv=MA.getInterpolatedAttribute(i,o,a,l,u,new ue)),r&&(c.uv1=MA.getInterpolatedAttribute(r,o,a,l,u,new ue)),s&&(c.normal=MA.getInterpolatedAttribute(s,o,a,l,u,new N),c.normal.dot(A.direction)>0&&c.normal.multiplyScalar(-1));const h={a:o,b:a,c:l,normal:new N,materialIndex:0};MA.getNormal(Fs,Ts,Is,h.normal),c.face=h,c.barycoord=u}return c}class fr extends fA{constructor(e=1,t=1,A=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:A,widthSegments:i,heightSegments:r,depthSegments:s};const o=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const a=[],l=[],c=[],u=[];let h=0,f=0;p("z","y","x",-1,-1,A,t,e,s,r,0),p("z","y","x",1,-1,A,t,-e,s,r,1),p("x","z","y",1,1,e,A,t,i,s,2),p("x","z","y",1,-1,e,A,-t,i,s,3),p("x","y","z",1,-1,e,t,A,i,r,4),p("x","y","z",-1,-1,e,t,-A,i,r,5),this.setIndex(a),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(c,3)),this.setAttribute("uv",new Ot(u,2));function p(m,g,d,x,B,w,y,v,E,U,_){const C=w/E,T=y/U,R=w/2,F=y/2,P=v/2,D=E+1,Q=U+1;let k=0,O=0;const Y=new N;for(let $=0;$<Q;$++){const ae=$*T-F;for(let ne=0;ne<D;ne++){const Oe=ne*C-R;Y[m]=Oe*x,Y[g]=ae*B,Y[d]=P,l.push(Y.x,Y.y,Y.z),Y[m]=0,Y[g]=0,Y[d]=v>0?1:-1,c.push(Y.x,Y.y,Y.z),u.push(ne/E),u.push(1-$/U),k+=1}}for(let $=0;$<U;$++)for(let ae=0;ae<E;ae++){const ne=h+ae+D*$,Oe=h+ae+D*($+1),Ye=h+(ae+1)+D*($+1),Ke=h+(ae+1)+D*$;a.push(ne,Oe,Ke),a.push(Oe,Ye,Ke),O+=6}o.addGroup(f,O,_),f+=O,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function sr(n){const e={};for(const t in n){e[t]={};for(const A in n[t]){const i=n[t][A];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][A]=null):e[t][A]=i.clone():Array.isArray(i)?e[t][A]=i.slice():e[t][A]=i}}return e}function $t(n){const e={};for(let t=0;t<n.length;t++){const A=sr(n[t]);for(const i in A)e[i]=A[i]}return e}function im(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ld(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const Lo={clone:sr,merge:$t};var rm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class AA extends Jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rm,this.fragmentShader=sm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sr(e.uniforms),this.uniformsGroups=im(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const A={};for(const i in this.extensions)this.extensions[i]===!0&&(A[i]=!0);return Object.keys(A).length>0&&(t.extensions=A),t}}class Dd extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=YA,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new N,ou=new ue,au=new ue;class BA extends Dd{constructor(e=50,t=1,A=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=A,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ji*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rr*2*Math.atan(Math.tan(ji*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,A){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),A.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z)}getViewSize(e,t){return this.getViewBounds(e,ou,au),t.subVectors(au,ou)}setViewOffset(e,t,A,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=A,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ji*.5*this.fov)/this.zoom,A=2*t,i=this.aspect*A,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const a=s.fullWidth,l=s.fullHeight;r+=s.offsetX*i/a,t-=s.offsetY*A/l,i*=s.width/a,A*=s.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-A,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ii=-90,Qi=1;class om extends It{constructor(e,t,A){super(),this.type="CubeCamera",this.renderTarget=A,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new BA(Ii,Qi,e,t);i.layers=this.layers,this.add(i);const r=new BA(Ii,Qi,e,t);r.layers=this.layers,this.add(r);const s=new BA(Ii,Qi,e,t);s.layers=this.layers,this.add(s);const o=new BA(Ii,Qi,e,t);o.layers=this.layers,this.add(o);const a=new BA(Ii,Qi,e,t);a.layers=this.layers,this.add(a);const l=new BA(Ii,Qi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[A,i,r,s,o,a]=t;for(const l of t)this.remove(l);if(e===YA)A.up.set(0,1,0),A.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===Qo)A.up.set(0,-1,0),A.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:A,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const m=A.texture.generateMipmaps;A.texture.generateMipmaps=!1,e.setRenderTarget(A,0,i),e.render(t,r),e.setRenderTarget(A,1,i),e.render(t,s),e.setRenderTarget(A,2,i),e.render(t,o),e.setRenderTarget(A,3,i),e.render(t,a),e.setRenderTarget(A,4,i),e.render(t,l),A.texture.generateMipmaps=m,e.setRenderTarget(A,5,i),e.render(t,c),e.setRenderTarget(u,h,f),e.xr.enabled=p,A.texture.needsPMREMUpdate=!0}}class Pd extends Jt{constructor(e=[],t=Ar,A,i,r,s,o,a,l,c){super(e,t,A,i,r,s,o,a,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class am extends OA{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const A={width:e,height:e,depth:1},i=[A,A,A,A,A,A];this.texture=new Pd(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const A={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new fr(5,5,5),r=new AA({name:"CubemapFromEquirect",uniforms:sr(A.uniforms),vertexShader:A.vertexShader,fragmentShader:A.fragmentShader,side:hA,blending:qA});r.uniforms.tEquirect.value=t;const s=new iA(i,r),o=t.minFilter;return t.minFilter===ui&&(t.minFilter=SA),new om(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,A=!0,i=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,A,i);e.setRenderTarget(r)}}class Xi extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lm={type:"move"};class ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const A of e.hand.values())this._getHandJoint(t,A)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,A){let i=null,r=null,s=null;const o=this._targetRay,a=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const m of e.hand.values()){const g=t.getJointPose(m,A),d=this._getHandJoint(l,m);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=c.position.distanceTo(u.position),f=.02,p=.005;l.inputState.pinching&&h>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,A),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,A),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lm)))}return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const A=new Xi;A.matrixAutoUpdate=!1,A.visible=!1,e.joints[t.jointName]=A,e.add(A)}return e.joints[t.jointName]}}class oh{constructor(e,t=1,A=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=A}clone(){return new oh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class cm extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $A,this.environmentIntensity=1,this.environmentRotation=new $A,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Hd extends Jt{constructor(e=null,t=1,A=1,i,r,s,o,a,l=nA,c=nA,u,h){super(null,s,o,a,l,c,i,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:A},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ka=new N,hm=new N,um=new ze;class Bn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,A,i){return this.normal.set(e,t,A),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,A){const i=Ka.subVectors(A,t).cross(hm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const A=e.delta(Ka),i=this.normal.dot(A);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(A,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),A=this.distanceToPoint(e.end);return t<0&&A>0||A<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const A=t||um.getNormalMatrix(e),i=this.coplanarPoint(Ka).applyMatrix4(e),r=this.normal.applyMatrix3(A).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new ea,fm=new ue(.5,.5),Ds=new N;class ah{constructor(e=new Bn,t=new Bn,A=new Bn,i=new Bn,r=new Bn,s=new Bn){this.planes=[e,t,A,i,r,s]}set(e,t,A,i,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(A),o[3].copy(i),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let A=0;A<6;A++)t[A].copy(e.planes[A]);return this}setFromProjectionMatrix(e,t=YA,A=!1){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],p=r[8],m=r[9],g=r[10],d=r[11],x=r[12],B=r[13],w=r[14],y=r[15];if(i[0].setComponents(l-s,f-c,d-p,y-x).normalize(),i[1].setComponents(l+s,f+c,d+p,y+x).normalize(),i[2].setComponents(l+o,f+u,d+m,y+B).normalize(),i[3].setComponents(l-o,f-u,d-m,y-B).normalize(),A)i[4].setComponents(a,h,g,w).normalize(),i[5].setComponents(l-a,f-h,d-g,y-w).normalize();else if(i[4].setComponents(l-a,f-h,d-g,y-w).normalize(),t===YA)i[5].setComponents(l+a,f+h,d+g,y+w).normalize();else if(t===Qo)i[5].setComponents(a,h,g,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){ni.center.set(0,0,0);const t=fm.distanceTo(e.center);return ni.radius=.7071067811865476+t,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){const t=this.planes,A=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(A)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let A=0;A<6;A++){const i=t[A];if(Ds.x=i.normal.x>0?e.max.x:e.min.x,Ds.y=i.normal.y>0?e.max.y:e.min.y,Ds.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let A=0;A<6;A++)if(t[A].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lh extends Jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Do=new N,Po=new N,lu=new xt,_r=new ta,Ps=new ea,Wa=new N,cu=new N;class dm extends It{constructor(e=new fA,t=new lh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,A=[0];for(let i=1,r=t.count;i<r;i++)Do.fromBufferAttribute(t,i-1),Po.fromBufferAttribute(t,i),A[i]=A[i-1],A[i]+=Do.distanceTo(Po);e.setAttribute("lineDistance",new Ot(A,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const A=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=A.drawRange;if(A.boundingSphere===null&&A.computeBoundingSphere(),Ps.copy(A.boundingSphere),Ps.applyMatrix4(i),Ps.radius+=r,e.ray.intersectsSphere(Ps)===!1)return;lu.copy(i).invert(),_r.copy(e.ray).applyMatrix4(lu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=this.isLineSegments?2:1,c=A.index,h=A.attributes.position;if(c!==null){const f=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let m=f,g=p-1;m<g;m+=l){const d=c.getX(m),x=c.getX(m+1),B=Hs(this,e,_r,a,d,x,m);B&&t.push(B)}if(this.isLineLoop){const m=c.getX(p-1),g=c.getX(f),d=Hs(this,e,_r,a,m,g,p-1);d&&t.push(d)}}else{const f=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let m=f,g=p-1;m<g;m+=l){const d=Hs(this,e,_r,a,m,m+1,m);d&&t.push(d)}if(this.isLineLoop){const m=Hs(this,e,_r,a,p-1,f,p-1);m&&t.push(m)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,A=Object.keys(t);if(A.length>0){const i=t[A[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Hs(n,e,t,A,i,r,s){const o=n.geometry.attributes.position;if(Do.fromBufferAttribute(o,i),Po.fromBufferAttribute(o,r),t.distanceSqToSegment(Do,Po,Wa,cu)>A)return;Wa.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Wa);if(!(l<e.near||l>e.far))return{distance:l,point:cu.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const hu=new N,uu=new N;class Nd extends dm{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,A=[];for(let i=0,r=t.count;i<r;i+=2)hu.fromBufferAttribute(t,i),uu.fromBufferAttribute(t,i+1),A[i]=i===0?0:A[i-1],A[i+1]=A[i]+hu.distanceTo(uu);e.setAttribute("lineDistance",new Ot(A,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Od extends Jt{constructor(e,t,A,i,r,s,o,a,l){super(e,t,A,i,r,s,o,a,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vd extends Jt{constructor(e,t,A=mi,i,r,s,o=nA,a=nA,l,c=es,u=1){if(c!==es&&c!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,i,r,s,o,a,c,A,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Gd extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}const Ns=new N,Os=new N,Xa=new N,Vs=new MA;class pm extends fA{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(ji*t),s=e.getIndex(),o=e.getAttribute("position"),a=s?s.count:o.count,l=[0,0,0],c=["a","b","c"],u=new Array(3),h={},f=[];for(let p=0;p<a;p+=3){s?(l[0]=s.getX(p),l[1]=s.getX(p+1),l[2]=s.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);const{a:m,b:g,c:d}=Vs;if(m.fromBufferAttribute(o,l[0]),g.fromBufferAttribute(o,l[1]),d.fromBufferAttribute(o,l[2]),Vs.getNormal(Xa),u[0]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[2]=`${Math.round(d.x*i)},${Math.round(d.y*i)},${Math.round(d.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){const B=(x+1)%3,w=u[x],y=u[B],v=Vs[c[x]],E=Vs[c[B]],U=`${w}_${y}`,_=`${y}_${w}`;_ in h&&h[_]?(Xa.dot(h[_].normal)<=r&&(f.push(v.x,v.y,v.z),f.push(E.x,E.y,E.z)),h[_]=null):U in h||(h[U]={index0:l[x],index1:l[B],normal:Xa.clone()})}}for(const p in h)if(h[p]){const{index0:m,index1:g}=h[p];Ns.fromBufferAttribute(o,m),Os.fromBufferAttribute(o,g),f.push(Ns.x,Ns.y,Ns.z),f.push(Os.x,Os.y,Os.z)}this.setAttribute("position",new Ot(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class en{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){De("Curve: .getPoint() not implemented.")}getPointAt(e,t){const A=this.getUtoTmapping(e);return this.getPoint(A,t)}getPoints(e=5){const t=[];for(let A=0;A<=e;A++)t.push(this.getPoint(A/e));return t}getSpacedPoints(e=5){const t=[];for(let A=0;A<=e;A++)t.push(this.getPointAt(A/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let A,i=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)A=this.getPoint(s/e),r+=A.distanceTo(i),t.push(r),i=A;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const A=this.getLengths();let i=0;const r=A.length;let s;t?s=t:s=e*A[r-1];let o=0,a=r-1,l;for(;o<=a;)if(i=Math.floor(o+(a-o)/2),l=A[i]-s,l<0)o=i+1;else if(l>0)a=i-1;else{a=i;break}if(i=a,A[i]===s)return i/(r-1);const c=A[i],h=A[i+1]-c,f=(s-c)/h;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),o=this.getPoint(r),a=t||(s.isVector2?new ue:new N);return a.copy(o).sub(s).normalize(),a}getTangentAt(e,t){const A=this.getUtoTmapping(e);return this.getTangent(A,t)}computeFrenetFrames(e,t=!1){const A=new N,i=[],r=[],s=[],o=new N,a=new xt;for(let f=0;f<=e;f++){const p=f/e;i[f]=this.getTangentAt(p,new N)}r[0]=new N,s[0]=new N;let l=Number.MAX_VALUE;const c=Math.abs(i[0].x),u=Math.abs(i[0].y),h=Math.abs(i[0].z);c<=l&&(l=c,A.set(1,0,0)),u<=l&&(l=u,A.set(0,1,0)),h<=l&&A.set(0,0,1),o.crossVectors(i[0],A).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),s[f]=s[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(Xe(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(a.makeRotationAxis(o,p))}s[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Xe(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(a.makeRotationAxis(i[p],f*p)),s[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class zd extends en{constructor(e=0,t=0,A=1,i=1,r=0,s=Math.PI*2,o=!1,a=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=A,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=o,this.aRotation=a}getPoint(e,t=new ue){const A=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let a=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=a-this.aX,f=l-this.aY;a=h*c-f*u+this.aX,l=h*u+f*c+this.aY}return A.set(a,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class gm extends zd{constructor(e,t,A,i,r,s){super(e,t,A,A,i,r,s),this.isArcCurve=!0,this.type="ArcCurve"}}function ch(){let n=0,e=0,t=0,A=0;function i(r,s,o,a){n=r,e=o,t=-3*r+3*s-2*o-a,A=2*r-2*s+o+a}return{initCatmullRom:function(r,s,o,a,l){i(s,o,l*(o-r),l*(a-s))},initNonuniformCatmullRom:function(r,s,o,a,l,c,u){let h=(s-r)/l-(o-r)/(l+c)+(o-s)/c,f=(o-s)/c-(a-s)/(c+u)+(a-o)/u;h*=c,f*=c,i(s,o,h,f)},calc:function(r){const s=r*r,o=s*r;return n+e*r+t*s+A*o}}}const Gs=new N,Ya=new ch,qa=new ch,Ja=new ch;class hh extends en{constructor(e=[],t=!1,A="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=A,this.tension=i}getPoint(e,t=new N){const A=t,i=this.points,r=i.length,s=(r-(this.closed?0:1))*e;let o=Math.floor(s),a=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:a===0&&o===r-1&&(o=r-2,a=1);let l,c;this.closed||o>0?l=i[(o-1)%r]:(Gs.subVectors(i[0],i[1]).add(i[0]),l=Gs);const u=i[o%r],h=i[(o+1)%r];if(this.closed||o+2<r?c=i[(o+2)%r]:(Gs.subVectors(i[r-1],i[r-2]).add(i[r-1]),c=Gs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(c),f);m<1e-4&&(m=1),p<1e-4&&(p=m),g<1e-4&&(g=m),Ya.initNonuniformCatmullRom(l.x,u.x,h.x,c.x,p,m,g),qa.initNonuniformCatmullRom(l.y,u.y,h.y,c.y,p,m,g),Ja.initNonuniformCatmullRom(l.z,u.z,h.z,c.z,p,m,g)}else this.curveType==="catmullrom"&&(Ya.initCatmullRom(l.x,u.x,h.x,c.x,this.tension),qa.initCatmullRom(l.y,u.y,h.y,c.y,this.tension),Ja.initCatmullRom(l.z,u.z,h.z,c.z,this.tension));return A.set(Ya.calc(a),qa.calc(a),Ja.calc(a)),A}copy(e){super.copy(e),this.points=[];for(let t=0,A=e.points.length;t<A;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,A=this.points.length;t<A;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,A=e.points.length;t<A;t++){const i=e.points[t];this.points.push(new N().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function fu(n,e,t,A,i){const r=(A-e)*.5,s=(i-t)*.5,o=n*n,a=n*o;return(2*t-2*A+r+s)*a+(-3*t+3*A-2*r-s)*o+r*n+t}function mm(n,e){const t=1-n;return t*t*e}function xm(n,e){return 2*(1-n)*n*e}function Bm(n,e){return n*n*e}function Gr(n,e,t,A){return mm(n,e)+xm(n,t)+Bm(n,A)}function vm(n,e){const t=1-n;return t*t*t*e}function wm(n,e){const t=1-n;return 3*t*t*n*e}function _m(n,e){return 3*(1-n)*n*n*e}function Cm(n,e){return n*n*n*e}function zr(n,e,t,A,i){return vm(n,e)+wm(n,t)+_m(n,A)+Cm(n,i)}class ym extends en{constructor(e=new ue,t=new ue,A=new ue,i=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=A,this.v3=i}getPoint(e,t=new ue){const A=t,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return A.set(zr(e,i.x,r.x,s.x,o.x),zr(e,i.y,r.y,s.y,o.y)),A}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Em extends en{constructor(e=new N,t=new N,A=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=A,this.v3=i}getPoint(e,t=new N){const A=t,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return A.set(zr(e,i.x,r.x,s.x,o.x),zr(e,i.y,r.y,s.y,o.y),zr(e,i.z,r.z,s.z,o.z)),A}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class bm extends en{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const A=t;return e===1?A.copy(this.v2):(A.copy(this.v2).sub(this.v1),A.multiplyScalar(e).add(this.v1)),A}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kd extends en{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const A=t;return e===1?A.copy(this.v2):(A.copy(this.v2).sub(this.v1),A.multiplyScalar(e).add(this.v1)),A}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mm extends en{constructor(e=new ue,t=new ue,A=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=A}getPoint(e,t=new ue){const A=t,i=this.v0,r=this.v1,s=this.v2;return A.set(Gr(e,i.x,r.x,s.x),Gr(e,i.y,r.y,s.y)),A}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sm extends en{constructor(e=new N,t=new N,A=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=A}getPoint(e,t=new N){const A=t,i=this.v0,r=this.v1,s=this.v2;return A.set(Gr(e,i.x,r.x,s.x),Gr(e,i.y,r.y,s.y),Gr(e,i.z,r.z,s.z)),A}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Um extends en{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const A=t,i=this.points,r=(i.length-1)*e,s=Math.floor(r),o=r-s,a=i[s===0?s:s-1],l=i[s],c=i[s>i.length-2?i.length-1:s+1],u=i[s>i.length-3?i.length-1:s+2];return A.set(fu(o,a.x,l.x,c.x,u.x),fu(o,a.y,l.y,c.y,u.y)),A}copy(e){super.copy(e),this.points=[];for(let t=0,A=e.points.length;t<A;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,A=this.points.length;t<A;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,A=e.points.length;t<A;t++){const i=e.points[t];this.points.push(new ue().fromArray(i))}return this}}var du=Object.freeze({__proto__:null,ArcCurve:gm,CatmullRomCurve3:hh,CubicBezierCurve:ym,CubicBezierCurve3:Em,EllipseCurve:zd,LineCurve:bm,LineCurve3:kd,QuadraticBezierCurve:Mm,QuadraticBezierCurve3:Sm,SplineCurve:Um});class Fm extends en{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const A=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new du[A](t,e))}return this}getPoint(e,t){const A=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=A){const s=i[r]-A,o=this.curves[r],a=o.getLength(),l=a===0?0:1-s/a;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let A=0,i=this.curves.length;A<i;A++)t+=this.curves[A].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let A=0;A<=e;A++)t.push(this.getPoint(A/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let A;for(let i=0,r=this.curves;i<r.length;i++){const s=r[i],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,a=s.getPoints(o);for(let l=0;l<a.length;l++){const c=a[l];A&&A.equals(c)||(t.push(c),A=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,A=e.curves.length;t<A;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,A=this.curves.length;t<A;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,A=e.curves.length;t<A;t++){const i=e.curves[t];this.curves.push(new du[i.type]().fromJSON(i))}return this}}class os extends fA{constructor(e=1,t=1,A=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:A,heightSegments:i};const r=e/2,s=t/2,o=Math.floor(A),a=Math.floor(i),l=o+1,c=a+1,u=e/o,h=t/a,f=[],p=[],m=[],g=[];for(let d=0;d<c;d++){const x=d*h-s;for(let B=0;B<l;B++){const w=B*u-r;p.push(w,-x,0),m.push(0,0,1),g.push(B/o),g.push(1-d/a)}}for(let d=0;d<a;d++)for(let x=0;x<o;x++){const B=x+l*d,w=x+l*(d+1),y=x+1+l*(d+1),v=x+1+l*d;f.push(B,w,v),f.push(w,y,v)}this.setIndex(f),this.setAttribute("position",new Ot(p,3)),this.setAttribute("normal",new Ot(m,3)),this.setAttribute("uv",new Ot(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.width,e.height,e.widthSegments,e.heightSegments)}}class uh extends fA{constructor(e=1,t=32,A=16,i=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:A,phiStart:i,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),A=Math.max(2,Math.floor(A));const a=Math.min(s+o,Math.PI);let l=0;const c=[],u=new N,h=new N,f=[],p=[],m=[],g=[];for(let d=0;d<=A;d++){const x=[],B=d/A;let w=0;d===0&&s===0?w=.5/t:d===A&&a===Math.PI&&(w=-.5/t);for(let y=0;y<=t;y++){const v=y/t;u.x=-e*Math.cos(i+v*r)*Math.sin(s+B*o),u.y=e*Math.cos(s+B*o),u.z=e*Math.sin(i+v*r)*Math.sin(s+B*o),p.push(u.x,u.y,u.z),h.copy(u).normalize(),m.push(h.x,h.y,h.z),g.push(v+w,1-B),x.push(l++)}c.push(x)}for(let d=0;d<A;d++)for(let x=0;x<t;x++){const B=c[d][x+1],w=c[d][x],y=c[d+1][x],v=c[d+1][x+1];(d!==0||s>0)&&f.push(B,w,v),(d!==A-1||a<Math.PI)&&f.push(w,y,v)}this.setIndex(f),this.setAttribute("position",new Ot(p,3)),this.setAttribute("normal",new Ot(m,3)),this.setAttribute("uv",new Ot(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Tm extends Jn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ie(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Im extends Jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nh,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $A,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qm extends Jn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ie(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nh,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Rm extends Jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lm extends Jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class fh extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Dm extends fh{constructor(e,t,A){super(e,A),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Za=new xt,pu=new N,gu=new N;class Kd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=jA,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ah,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,A=this.matrix;pu.setFromMatrixPosition(e.matrixWorld),t.position.copy(pu),gu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gu),t.updateMatrixWorld(),Za.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Za,t.coordinateSystem,t.reversedDepth),t.reversedDepth?A.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):A.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),A.multiply(Za)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Pm extends Kd{constructor(){super(new BA(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,A=rr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(A!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=A,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Hm extends fh{constructor(e,t,A=0,i=Math.PI/3,r=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=A,this.angle=i,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new Pm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dh extends Dd{constructor(e=-1,t=1,A=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=A,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,A,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=A,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),A=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=A-e,s=A+e,o=i+t,a=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,o-=c*this.view.offsetY,a=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Nm extends Kd{constructor(){super(new dh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wd extends fh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new Nm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Om extends BA{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Xd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const mu=new xt;class Vm{constructor(e,t,A=0,i=1/0){this.ray=new ta(e,t),this.near=A,this.far=i,this.camera=null,this.layers=new sh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):yt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mu),this}intersectObject(e,t=!0,A=[]){return Bc(e,this,A,t),A.sort(xu),A}intersectObjects(e,t=!0,A=[]){for(let i=0,r=e.length;i<r;i++)Bc(e[i],this,A,t);return A.sort(xu),A}}function xu(n,e){return n.distance-e.distance}function Bc(n,e,t,A){let i=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(i=!1),i===!0&&A===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)Bc(r[s],e,t,!0)}}class Bu{constructor(e=1,t=0,A=0){this.radius=e,this.phi=t,this.theta=A}set(e,t,A){return this.radius=e,this.phi=t,this.theta=A,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,A){return this.radius=Math.sqrt(e*e+t*t+A*A),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,A),this.phi=Math.acos(Xe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Gm extends Nd{constructor(e=10,t=10,A=4473924,i=8947848){A=new Ie(A),i=new Ie(i);const r=t/2,s=e/t,o=e/2,a=[],l=[];for(let h=0,f=0,p=-o;h<=t;h++,p+=s){a.push(-o,0,p,o,0,p),a.push(p,0,-o,p,0,o);const m=h===r?A:i;m.toArray(l,f),f+=3,m.toArray(l,f),f+=3,m.toArray(l,f),f+=3,m.toArray(l,f),f+=3}const c=new fA;c.setAttribute("position",new Ot(a,3)),c.setAttribute("color",new Ot(l,3));const u=new lh({vertexColors:!0,toneMapped:!1});super(c,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class zm extends xi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){De("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function vu(n,e,t,A){const i=km(A);switch(t){case Md:return n*e;case Sd:return n*e/i.components*i.byteLength;case $c:return n*e/i.components*i.byteLength;case eh:return n*e*2/i.components*i.byteLength;case th:return n*e*2/i.components*i.byteLength;case jc:return n*e*3/i.components*i.byteLength;case HA:return n*e*4/i.components*i.byteLength;case Ah:return n*e*4/i.components*i.byteLength;case wo:case _o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Co:case yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wl:case Yl:return Math.max(n,16)*Math.max(e,8)/4;case Kl:case Xl:return Math.max(n,8)*Math.max(e,8)/2;case ql:case Jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $l:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ec:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case tc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case nc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ic:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case rc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case sc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case oc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ac:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case lc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case cc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case hc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case uc:case fc:case dc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case pc:case gc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case mc:case xc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function km(n){switch(n){case jA:case Cd:return{byteLength:1,components:1};case jr:case yd:case JA:return{byteLength:2,components:1};case Jc:case Zc:return{byteLength:2,components:4};case mi:case qc:case _n:return{byteLength:4,components:1};case Ed:case bd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yc}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yc);function Yd(){let n=null,e=!1,t=null,A=null;function i(r,s){t(r,s),A=n.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(A=n.requestAnimationFrame(i),e=!0)},stop:function(){n.cancelAnimationFrame(A),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Km(n){const e=new WeakMap;function t(o,a){const l=o.array,c=o.usage,u=l.byteLength,h=n.createBuffer();n.bindBuffer(a,h),n.bufferData(a,l,c),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function A(o,a,l){const c=a.array,u=a.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,c);else{u.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<u.length;f++){const p=u[h],m=u[f];m.start<=p.start+p.count+1?p.count=Math.max(p.count,m.start+m.count-p.start):(++h,u[h]=m)}u.length=h+1;for(let f=0,p=u.length;f<p;f++){const m=u[f];n.bufferSubData(l,m.start*c.BYTES_PER_ELEMENT,c,m.start,m.count)}a.clearUpdateRanges()}a.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const a=e.get(o);a&&(n.deleteBuffer(a.buffer),e.delete(o))}function s(o,a){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,a));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");A(l.buffer,o,a),l.version=o.version}}return{get:i,remove:r,update:s}}var Wm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xm=`#ifdef USE_ALPHAHASH
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
#endif`,Ym=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jm=`#ifdef USE_AOMAP
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
#endif`,$m=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ex=`#ifdef USE_BATCHING
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
#endif`,tx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ax=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ix=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rx=`#ifdef USE_IRIDESCENCE
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
#endif`,sx=`#ifdef USE_BUMPMAP
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
#endif`,ox=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ux=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,px=`#define PI 3.141592653589793
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
} // validated`,gx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mx=`vec3 transformedNormal = objectNormal;
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
#endif`,xx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_x="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yx=`#ifdef USE_ENVMAP
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
#endif`,Ex=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bx=`#ifdef USE_ENVMAP
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
#endif`,Mx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sx=`#ifdef USE_ENVMAP
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
#endif`,Ux=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ix=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qx=`#ifdef USE_GRADIENTMAP
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
}`,Rx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Px=`uniform bool receiveShadow;
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
#endif`,Hx=`#ifdef USE_ENVMAP
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
#endif`,Nx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zx=`PhysicalMaterial material;
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
#endif`,kx=`uniform sampler2D dfgLUT;
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
}`,Kx=`
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
#endif`,Wx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$x=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eB=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tB=`#if defined( USE_POINTS_UV )
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
#endif`,AB=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nB=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iB=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rB=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sB=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oB=`#ifdef USE_MORPHTARGETS
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
#endif`,aB=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lB=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cB=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hB=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uB=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fB=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dB=`#ifdef USE_NORMALMAP
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
#endif`,pB=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gB=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mB=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xB=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BB=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vB=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wB=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_B=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CB=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yB=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,EB=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bB=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MB=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SB=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UB=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,FB=`float getShadowMask() {
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
}`,TB=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IB=`#ifdef USE_SKINNING
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
#endif`,QB=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RB=`#ifdef USE_SKINNING
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
#endif`,LB=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DB=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PB=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HB=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,NB=`#ifdef USE_TRANSMISSION
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
#endif`,OB=`#ifdef USE_TRANSMISSION
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
#endif`,VB=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GB=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zB=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kB=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KB=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WB=`uniform sampler2D t2D;
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
}`,XB=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YB=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qB=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JB=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZB=`#include <common>
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
}`,jB=`#if DEPTH_PACKING == 3200
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
}`,$B=`#define DISTANCE
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
}`,ev=`#define DISTANCE
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
}`,tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Av=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nv=`uniform float scale;
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
}`,iv=`uniform vec3 diffuse;
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
}`,rv=`#include <common>
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
}`,sv=`uniform vec3 diffuse;
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
}`,ov=`#define LAMBERT
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
}`,av=`#define LAMBERT
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
}`,lv=`#define MATCAP
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
}`,cv=`#define MATCAP
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
}`,hv=`#define NORMAL
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
}`,uv=`#define NORMAL
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
}`,fv=`#define PHONG
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
}`,dv=`#define PHONG
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
}`,pv=`#define STANDARD
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
}`,gv=`#define STANDARD
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
}`,mv=`#define TOON
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
}`,xv=`#define TOON
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
}`,Bv=`uniform float size;
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
}`,vv=`uniform vec3 diffuse;
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
}`,wv=`#include <common>
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
}`,_v=`uniform vec3 color;
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
}`,Cv=`uniform float rotation;
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
}`,yv=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:Wm,alphahash_pars_fragment:Xm,alphamap_fragment:Ym,alphamap_pars_fragment:qm,alphatest_fragment:Jm,alphatest_pars_fragment:Zm,aomap_fragment:jm,aomap_pars_fragment:$m,batching_pars_vertex:ex,batching_vertex:tx,begin_vertex:Ax,beginnormal_vertex:nx,bsdfs:ix,iridescence_fragment:rx,bumpmap_pars_fragment:sx,clipping_planes_fragment:ox,clipping_planes_pars_fragment:ax,clipping_planes_pars_vertex:lx,clipping_planes_vertex:cx,color_fragment:hx,color_pars_fragment:ux,color_pars_vertex:fx,color_vertex:dx,common:px,cube_uv_reflection_fragment:gx,defaultnormal_vertex:mx,displacementmap_pars_vertex:xx,displacementmap_vertex:Bx,emissivemap_fragment:vx,emissivemap_pars_fragment:wx,colorspace_fragment:_x,colorspace_pars_fragment:Cx,envmap_fragment:yx,envmap_common_pars_fragment:Ex,envmap_pars_fragment:bx,envmap_pars_vertex:Mx,envmap_physical_pars_fragment:Hx,envmap_vertex:Sx,fog_vertex:Ux,fog_pars_vertex:Fx,fog_fragment:Tx,fog_pars_fragment:Ix,gradientmap_pars_fragment:Qx,lightmap_pars_fragment:Rx,lights_lambert_fragment:Lx,lights_lambert_pars_fragment:Dx,lights_pars_begin:Px,lights_toon_fragment:Nx,lights_toon_pars_fragment:Ox,lights_phong_fragment:Vx,lights_phong_pars_fragment:Gx,lights_physical_fragment:zx,lights_physical_pars_fragment:kx,lights_fragment_begin:Kx,lights_fragment_maps:Wx,lights_fragment_end:Xx,logdepthbuf_fragment:Yx,logdepthbuf_pars_fragment:qx,logdepthbuf_pars_vertex:Jx,logdepthbuf_vertex:Zx,map_fragment:jx,map_pars_fragment:$x,map_particle_fragment:eB,map_particle_pars_fragment:tB,metalnessmap_fragment:AB,metalnessmap_pars_fragment:nB,morphinstance_vertex:iB,morphcolor_vertex:rB,morphnormal_vertex:sB,morphtarget_pars_vertex:oB,morphtarget_vertex:aB,normal_fragment_begin:lB,normal_fragment_maps:cB,normal_pars_fragment:hB,normal_pars_vertex:uB,normal_vertex:fB,normalmap_pars_fragment:dB,clearcoat_normal_fragment_begin:pB,clearcoat_normal_fragment_maps:gB,clearcoat_pars_fragment:mB,iridescence_pars_fragment:xB,opaque_fragment:BB,packing:vB,premultiplied_alpha_fragment:wB,project_vertex:_B,dithering_fragment:CB,dithering_pars_fragment:yB,roughnessmap_fragment:EB,roughnessmap_pars_fragment:bB,shadowmap_pars_fragment:MB,shadowmap_pars_vertex:SB,shadowmap_vertex:UB,shadowmask_pars_fragment:FB,skinbase_vertex:TB,skinning_pars_vertex:IB,skinning_vertex:QB,skinnormal_vertex:RB,specularmap_fragment:LB,specularmap_pars_fragment:DB,tonemapping_fragment:PB,tonemapping_pars_fragment:HB,transmission_fragment:NB,transmission_pars_fragment:OB,uv_pars_fragment:VB,uv_pars_vertex:GB,uv_vertex:zB,worldpos_vertex:kB,background_vert:KB,background_frag:WB,backgroundCube_vert:XB,backgroundCube_frag:YB,cube_vert:qB,cube_frag:JB,depth_vert:ZB,depth_frag:jB,distanceRGBA_vert:$B,distanceRGBA_frag:ev,equirect_vert:tv,equirect_frag:Av,linedashed_vert:nv,linedashed_frag:iv,meshbasic_vert:rv,meshbasic_frag:sv,meshlambert_vert:ov,meshlambert_frag:av,meshmatcap_vert:lv,meshmatcap_frag:cv,meshnormal_vert:hv,meshnormal_frag:uv,meshphong_vert:fv,meshphong_frag:dv,meshphysical_vert:pv,meshphysical_frag:gv,meshtoon_vert:mv,meshtoon_frag:xv,points_vert:Bv,points_frag:vv,shadow_vert:wv,shadow_frag:_v,sprite_vert:Cv,sprite_frag:yv},le={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},XA={basic:{uniforms:$t([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:$t([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ie(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:$t([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:$t([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:$t([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ie(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:$t([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:$t([le.points,le.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:$t([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:$t([le.common,le.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:$t([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:$t([le.sprite,le.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:$t([le.common,le.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:$t([le.lights,le.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};XA.physical={uniforms:$t([XA.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const zs={r:0,b:0,g:0},ii=new $A,Ev=new xt;function bv(n,e,t,A,i,r,s){const o=new Ie(0);let a=r===!0?0:1,l,c,u=null,h=0,f=null;function p(B){let w=B.isScene===!0?B.background:null;return w&&w.isTexture&&(w=(B.backgroundBlurriness>0?t:e).get(w)),w}function m(B){let w=!1;const y=p(B);y===null?d(o,a):y&&y.isColor&&(d(y,1),w=!0);const v=n.xr.getEnvironmentBlendMode();v==="additive"?A.buffers.color.setClear(0,0,0,1,s):v==="alpha-blend"&&A.buffers.color.setClear(0,0,0,0,s),(n.autoClear||w)&&(A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(B,w){const y=p(w);y&&(y.isCubeTexture||y.mapping===$o)?(c===void 0&&(c=new iA(new fr(1,1,1),new AA({name:"BackgroundCubeMaterial",uniforms:sr(XA.backgroundCube.uniforms),vertexShader:XA.backgroundCube.vertexShader,fragmentShader:XA.backgroundCube.fragmentShader,side:hA,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,E,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),ii.copy(w.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ev.makeRotationFromEuler(ii)),c.material.toneMapped=At.getTransfer(y.colorSpace)!==at,(u!==y||h!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,f=n.toneMapping),c.layers.enableAll(),B.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new iA(new os(2,2),new AA({name:"BackgroundMaterial",uniforms:sr(XA.background.uniforms),vertexShader:XA.background.vertexShader,fragmentShader:XA.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=At.getTransfer(y.colorSpace)!==at,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,f=n.toneMapping),l.layers.enableAll(),B.unshift(l,l.geometry,l.material,0,0,null))}function d(B,w){B.getRGB(zs,Ld(n)),A.buffers.color.setClear(zs.r,zs.g,zs.b,w,s)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(B,w=1){o.set(B),a=w,d(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(B){a=B,d(o,a)},render:m,addToRenderList:g,dispose:x}}function Mv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),A={},i=h(null);let r=i,s=!1;function o(C,T,R,F,P){let D=!1;const Q=u(F,R,T);r!==Q&&(r=Q,l(r.object)),D=f(C,F,R,P),D&&p(C,F,R,P),P!==null&&e.update(P,n.ELEMENT_ARRAY_BUFFER),(D||s)&&(s=!1,w(C,T,R,F),P!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function a(){return n.createVertexArray()}function l(C){return n.bindVertexArray(C)}function c(C){return n.deleteVertexArray(C)}function u(C,T,R){const F=R.wireframe===!0;let P=A[C.id];P===void 0&&(P={},A[C.id]=P);let D=P[T.id];D===void 0&&(D={},P[T.id]=D);let Q=D[F];return Q===void 0&&(Q=h(a()),D[F]=Q),Q}function h(C){const T=[],R=[],F=[];for(let P=0;P<t;P++)T[P]=0,R[P]=0,F[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:R,attributeDivisors:F,object:C,attributes:{},index:null}}function f(C,T,R,F){const P=r.attributes,D=T.attributes;let Q=0;const k=R.getAttributes();for(const O in k)if(k[O].location>=0){const $=P[O];let ae=D[O];if(ae===void 0&&(O==="instanceMatrix"&&C.instanceMatrix&&(ae=C.instanceMatrix),O==="instanceColor"&&C.instanceColor&&(ae=C.instanceColor)),$===void 0||$.attribute!==ae||ae&&$.data!==ae.data)return!0;Q++}return r.attributesNum!==Q||r.index!==F}function p(C,T,R,F){const P={},D=T.attributes;let Q=0;const k=R.getAttributes();for(const O in k)if(k[O].location>=0){let $=D[O];$===void 0&&(O==="instanceMatrix"&&C.instanceMatrix&&($=C.instanceMatrix),O==="instanceColor"&&C.instanceColor&&($=C.instanceColor));const ae={};ae.attribute=$,$&&$.data&&(ae.data=$.data),P[O]=ae,Q++}r.attributes=P,r.attributesNum=Q,r.index=F}function m(){const C=r.newAttributes;for(let T=0,R=C.length;T<R;T++)C[T]=0}function g(C){d(C,0)}function d(C,T){const R=r.newAttributes,F=r.enabledAttributes,P=r.attributeDivisors;R[C]=1,F[C]===0&&(n.enableVertexAttribArray(C),F[C]=1),P[C]!==T&&(n.vertexAttribDivisor(C,T),P[C]=T)}function x(){const C=r.newAttributes,T=r.enabledAttributes;for(let R=0,F=T.length;R<F;R++)T[R]!==C[R]&&(n.disableVertexAttribArray(R),T[R]=0)}function B(C,T,R,F,P,D,Q){Q===!0?n.vertexAttribIPointer(C,T,R,P,D):n.vertexAttribPointer(C,T,R,F,P,D)}function w(C,T,R,F){m();const P=F.attributes,D=R.getAttributes(),Q=T.defaultAttributeValues;for(const k in D){const O=D[k];if(O.location>=0){let Y=P[k];if(Y===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(Y=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(Y=C.instanceColor)),Y!==void 0){const $=Y.normalized,ae=Y.itemSize,ne=e.get(Y);if(ne===void 0)continue;const Oe=ne.buffer,Ye=ne.type,Ke=ne.bytesPerElement,q=Ye===n.INT||Ye===n.UNSIGNED_INT||Y.gpuType===qc;if(Y.isInterleavedBufferAttribute){const Z=Y.data,Be=Z.stride,ke=Y.offset;if(Z.isInstancedInterleavedBuffer){for(let be=0;be<O.locationSize;be++)d(O.location+be,Z.meshPerAttribute);C.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let be=0;be<O.locationSize;be++)g(O.location+be);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let be=0;be<O.locationSize;be++)B(O.location+be,ae/O.locationSize,Ye,$,Be*Ke,(ke+ae/O.locationSize*be)*Ke,q)}else{if(Y.isInstancedBufferAttribute){for(let Z=0;Z<O.locationSize;Z++)d(O.location+Z,Y.meshPerAttribute);C.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Z=0;Z<O.locationSize;Z++)g(O.location+Z);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let Z=0;Z<O.locationSize;Z++)B(O.location+Z,ae/O.locationSize,Ye,$,ae*Ke,ae/O.locationSize*Z*Ke,q)}}else if(Q!==void 0){const $=Q[k];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(O.location,$);break;case 3:n.vertexAttrib3fv(O.location,$);break;case 4:n.vertexAttrib4fv(O.location,$);break;default:n.vertexAttrib1fv(O.location,$)}}}}x()}function y(){U();for(const C in A){const T=A[C];for(const R in T){const F=T[R];for(const P in F)c(F[P].object),delete F[P];delete T[R]}delete A[C]}}function v(C){if(A[C.id]===void 0)return;const T=A[C.id];for(const R in T){const F=T[R];for(const P in F)c(F[P].object),delete F[P];delete T[R]}delete A[C.id]}function E(C){for(const T in A){const R=A[T];if(R[C.id]===void 0)continue;const F=R[C.id];for(const P in F)c(F[P].object),delete F[P];delete R[C.id]}}function U(){_(),s=!0,r!==i&&(r=i,l(r.object))}function _(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:U,resetDefaultState:_,dispose:y,releaseStatesOfGeometry:v,releaseStatesOfProgram:E,initAttributes:m,enableAttribute:g,disableUnusedAttributes:x}}function Sv(n,e,t){let A;function i(l){A=l}function r(l,c){n.drawArrays(A,l,c),t.update(c,A,1)}function s(l,c,u){u!==0&&(n.drawArraysInstanced(A,l,c,u),t.update(c,A,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(A,l,0,c,0,u);let f=0;for(let p=0;p<u;p++)f+=c[p];t.update(f,A,1)}function a(l,c,u,h){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<l.length;p++)s(l[p],c[p],h[p]);else{f.multiDrawArraysInstancedWEBGL(A,l,0,c,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=c[m]*h[m];t.update(p,A,1)}}this.setMode=i,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=a}function Uv(n,e,t,A){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(E){return!(E!==HA&&A.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const U=E===JA&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==jA&&A.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==_n&&!U)}function a(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const c=a(l);c!==l&&(De("WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),B=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,v=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:a,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:x,maxVaryings:B,maxFragmentUniforms:w,vertexTextures:y,maxSamples:v}}function Fv(n){const e=this;let t=null,A=0,i=!1,r=!1;const s=new Bn,o=new ze,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||A!==0||i;return i=h,A=u.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=c(u,h,0)},this.setState=function(u,h,f){const p=u.clippingPlanes,m=u.clipIntersection,g=u.clipShadows,d=n.get(u);if(!i||p===null||p.length===0||r&&!g)r?c(null):l();else{const x=r?0:A,B=x*4;let w=d.clippingState||null;a.value=w,w=c(p,h,B,f);for(let y=0;y!==B;++y)w[y]=t[y];d.clippingState=w,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function l(){a.value!==t&&(a.value=t,a.needsUpdate=A>0),e.numPlanes=A,e.numIntersection=0}function c(u,h,f,p){const m=u!==null?u.length:0;let g=null;if(m!==0){if(g=a.value,p!==!0||g===null){const d=f+m*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<d)&&(g=new Float32Array(d));for(let B=0,w=f;B!==m;++B,w+=4)s.copy(u[B]).applyMatrix4(x,o),s.normal.toArray(g,w),g[w+3]=s.constant}a.value=g,a.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function Tv(n){let e=new WeakMap;function t(s,o){return o===Gl?s.mapping=Ar:o===zl&&(s.mapping=nr),s}function A(s){if(s&&s.isTexture){const o=s.mapping;if(o===Gl||o===zl)if(e.has(s)){const a=e.get(s).texture;return t(a,s.mapping)}else{const a=s.image;if(a&&a.height>0){const l=new am(a.height);return l.fromEquirectangularTexture(n,s),e.set(s,l),s.addEventListener("dispose",i),t(l.texture,s.mapping)}else return null}}return s}function i(s){const o=s.target;o.removeEventListener("dispose",i);const a=e.get(o);a!==void 0&&(e.delete(o),a.dispose())}function r(){e=new WeakMap}return{get:A,dispose:r}}const On=4,wu=[.125,.215,.35,.446,.526,.582],li=20,Iv=256,Cr=new dh,_u=new Ie;let ja=null,$a=0,el=0,tl=!1;const Qv=new N;class Cu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,A=.1,i=100,r={}){const{size:s=256,position:o=Qv}=r;ja=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,A,i,a,o),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ja,$a,el),this._renderer.xr.enabled=tl,e.scissorTest=!1,Ri(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ar||e.mapping===nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ja=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const A=t||this._allocateTargets();return this._textureToCubeUV(e,A),this._applyPMREM(A),this._cleanup(A),A}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,A={magFilter:SA,minFilter:SA,generateMipmaps:!1,type:JA,format:HA,colorSpace:ir,depthBuffer:!1},i=yu(e,t,A);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yu(e,t,A);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Rv(r)),this._blurMaterial=Dv(r,e,t),this._ggxMaterial=Lv(r,e,t)}return i}_compileMaterial(e){const t=new iA(new fA,e);this._renderer.compile(t,Cr)}_sceneToCubeUV(e,t,A,i,r){const a=new BA(90,1,t,A),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(_u),u.toneMapping=kn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new iA(new fr,new ur({name:"PMREM.Background",side:hA,depthWrite:!1,depthTest:!1})));const m=this._backgroundBox,g=m.material;let d=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,d=!0):(g.color.copy(_u),d=!0);for(let B=0;B<6;B++){const w=B%3;w===0?(a.up.set(0,l[B],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x+c[B],r.y,r.z)):w===1?(a.up.set(0,0,l[B]),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y+c[B],r.z)):(a.up.set(0,l[B],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y,r.z+c[B]));const y=this._cubeSize;Ri(i,w*y,B>2?y:0,y,y),u.setRenderTarget(i),d&&u.render(m,a),u.render(e,a)}u.toneMapping=f,u.autoClear=h,e.background=x}_textureToCubeUV(e,t){const A=this._renderer,i=e.mapping===Ar||e.mapping===nr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eu());const r=i?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const o=r.uniforms;o.envMap.value=e;const a=this._cubeSize;Ri(t,0,0,3*a,2*a),A.setRenderTarget(t),A.render(s,Cr)}_applyPMREM(e){const t=this._renderer,A=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=A}_applyGGXFilter(e,t,A){const i=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[A];o.material=s;const a=s.uniforms,l=A/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-c*c),h=.05+l*.95,f=u*h,{_lodMax:p}=this,m=this._sizeLods[A],g=3*m*(A>p-On?A-p+On:0),d=4*(this._cubeSize-m);a.envMap.value=e.texture,a.roughness.value=f,a.mipInt.value=p-t,Ri(r,g,d,3*m,2*m),i.setRenderTarget(r),i.render(o,Cr),a.envMap.value=r.texture,a.roughness.value=0,a.mipInt.value=p-A,Ri(e,g,d,3*m,2*m),i.setRenderTarget(e),i.render(o,Cr)}_blur(e,t,A,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,A,i,"latitudinal",r),this._halfBlur(s,e,A,A,i,"longitudinal",r)}_halfBlur(e,t,A,i,r,s,o){const a=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&yt("blur direction must be either latitudinal or longitudinal!");const c=3,u=this._lodMeshes[i];u.material=l;const h=l.uniforms,f=this._sizeLods[A]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*li-1),m=r/p,g=isFinite(r)?1+Math.floor(c*m):li;g>li&&De(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${li}`);const d=[];let x=0;for(let E=0;E<li;++E){const U=E/m,_=Math.exp(-U*U/2);d.push(_),E===0?x+=_:E<g&&(x+=2*_)}for(let E=0;E<d.length;E++)d[E]=d[E]/x;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:B}=this;h.dTheta.value=p,h.mipInt.value=B-A;const w=this._sizeLods[i],y=3*w*(i>B-On?i-B+On:0),v=4*(this._cubeSize-w);Ri(t,y,v,3*w,2*w),a.setRenderTarget(t),a.render(u,Cr)}}function Rv(n){const e=[],t=[],A=[];let i=n;const r=n-On+1+wu.length;for(let s=0;s<r;s++){const o=Math.pow(2,i);e.push(o);let a=1/o;s>n-On?a=wu[s-n+On-1]:s===0&&(a=0),t.push(a);const l=1/(o-2),c=-l,u=1+l,h=[c,c,u,c,u,u,c,c,u,u,c,u],f=6,p=6,m=3,g=2,d=1,x=new Float32Array(m*p*f),B=new Float32Array(g*p*f),w=new Float32Array(d*p*f);for(let v=0;v<f;v++){const E=v%3*2/3-1,U=v>2?0:-1,_=[E,U,0,E+2/3,U,0,E+2/3,U+1,0,E,U,0,E+2/3,U+1,0,E,U+1,0];x.set(_,m*p*v),B.set(h,g*p*v);const C=[v,v,v,v,v,v];w.set(C,d*p*v)}const y=new fA;y.setAttribute("position",new uA(x,m)),y.setAttribute("uv",new uA(B,g)),y.setAttribute("faceIndex",new uA(w,d)),A.push(new iA(y,null)),i>On&&i--}return{lodMeshes:A,sizeLods:e,sigmas:t}}function yu(n,e,t){const A=new OA(n,e,t);return A.texture.mapping=$o,A.texture.name="PMREM.cubeUv",A.scissorTest=!0,A}function Ri(n,e,t,A,i){n.viewport.set(e,t,A,i),n.scissor.set(e,t,A,i)}function Lv(n,e,t){return new AA({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Iv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:qA,depthTest:!1,depthWrite:!1})}function Dv(n,e,t){const A=new Float32Array(li),i=new N(0,1,0);return new AA({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:A},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:qA,depthTest:!1,depthWrite:!1})}function Eu(){return new AA({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:qA,depthTest:!1,depthWrite:!1})}function bu(){return new AA({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qA,depthTest:!1,depthWrite:!1})}function Aa(){return`

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
	`}function Pv(n){let e=new WeakMap,t=null;function A(o){if(o&&o.isTexture){const a=o.mapping,l=a===Gl||a===zl,c=a===Ar||a===nr;if(l||c){let u=e.get(o);const h=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Cu(n)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||c&&f&&i(f)?(t===null&&(t=new Cu(n)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let a=0;const l=6;for(let c=0;c<l;c++)o[c]!==void 0&&a++;return a===l}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:A,dispose:s}}function Hv(n){const e={};function t(A){if(e[A]!==void 0)return e[A];const i=n.getExtension(A);return e[A]=i,i}return{has:function(A){return t(A)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(A){const i=t(A);return i===null&&As("WebGLRenderer: "+A+" extension not supported."),i}}}function Nv(n,e,t,A){const i={},r=new WeakMap;function s(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",s),delete i[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),A.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return i[h.id]===!0||(h.addEventListener("dispose",s),i[h.id]=!0,t.memory.geometries++),h}function a(u){const h=u.attributes;for(const f in h)e.update(h[f],n.ARRAY_BUFFER)}function l(u){const h=[],f=u.index,p=u.attributes.position;let m=0;if(f!==null){const x=f.array;m=f.version;for(let B=0,w=x.length;B<w;B+=3){const y=x[B+0],v=x[B+1],E=x[B+2];h.push(y,v,v,E,E,y)}}else if(p!==void 0){const x=p.array;m=p.version;for(let B=0,w=x.length/3-1;B<w;B+=3){const y=B+0,v=B+1,E=B+2;h.push(y,v,v,E,E,y)}}else return;const g=new(Fd(h)?Rd:Qd)(h,1);g.version=m;const d=r.get(u);d&&e.remove(d),r.set(u,g)}function c(u){const h=r.get(u);if(h){const f=u.index;f!==null&&h.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:a,getWireframeAttribute:c}}function Ov(n,e,t){let A;function i(h){A=h}let r,s;function o(h){r=h.type,s=h.bytesPerElement}function a(h,f){n.drawElements(A,f,r,h*s),t.update(f,A,1)}function l(h,f,p){p!==0&&(n.drawElementsInstanced(A,f,r,h*s,p),t.update(f,A,p))}function c(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(A,f,0,r,h,0,p);let g=0;for(let d=0;d<p;d++)g+=f[d];t.update(g,A,1)}function u(h,f,p,m){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<h.length;d++)l(h[d]/s,f[d],m[d]);else{g.multiDrawElementsInstancedWEBGL(A,f,0,r,h,0,m,0,p);let d=0;for(let x=0;x<p;x++)d+=f[x]*m[x];t.update(d,A,1)}}this.setMode=i,this.setIndex=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function Vv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function A(r,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:yt("WebGLInfo: Unknown draw mode:",s);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:A}}function Gv(n,e,t){const A=new WeakMap,i=new Et;function r(s,o,a){const l=s.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=c!==void 0?c.length:0;let h=A.get(o);if(h===void 0||h.count!==u){let C=function(){U.dispose(),A.delete(o),o.removeEventListener("dispose",C)};var f=C;h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],B=o.morphAttributes.color||[];let w=0;p===!0&&(w=1),m===!0&&(w=2),g===!0&&(w=3);let y=o.attributes.position.count*w,v=1;y>e.maxTextureSize&&(v=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const E=new Float32Array(y*v*4*u),U=new Td(E,y,v,u);U.type=_n,U.needsUpdate=!0;const _=w*4;for(let T=0;T<u;T++){const R=d[T],F=x[T],P=B[T],D=y*v*4*T;for(let Q=0;Q<R.count;Q++){const k=Q*_;p===!0&&(i.fromBufferAttribute(R,Q),E[D+k+0]=i.x,E[D+k+1]=i.y,E[D+k+2]=i.z,E[D+k+3]=0),m===!0&&(i.fromBufferAttribute(F,Q),E[D+k+4]=i.x,E[D+k+5]=i.y,E[D+k+6]=i.z,E[D+k+7]=0),g===!0&&(i.fromBufferAttribute(P,Q),E[D+k+8]=i.x,E[D+k+9]=i.y,E[D+k+10]=i.z,E[D+k+11]=P.itemSize===4?i.w:1)}}h={count:u,texture:U,size:new ue(y,v)},A.set(o,h),o.addEventListener("dispose",C)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)a.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];const m=o.morphTargetsRelative?1:1-p;a.getUniforms().setValue(n,"morphTargetBaseInfluence",m),a.getUniforms().setValue(n,"morphTargetInfluences",l)}a.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),a.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function zv(n,e,t,A){let i=new WeakMap;function r(a){const l=A.render.frame,c=a.geometry,u=e.get(a,c);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),a.isInstancedMesh&&(a.hasEventListener("dispose",o)===!1&&a.addEventListener("dispose",o),i.get(a)!==l&&(t.update(a.instanceMatrix,n.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,n.ARRAY_BUFFER),i.set(a,l))),a.isSkinnedMesh){const h=a.skeleton;i.get(h)!==l&&(h.update(),i.set(h,l))}return u}function s(){i=new WeakMap}function o(a){const l=a.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:s}}const qd=new Jt,Mu=new Vd(1,1),Jd=new Td,Zd=new Wg,jd=new Pd,Su=[],Uu=[],Fu=new Float32Array(16),Tu=new Float32Array(9),Iu=new Float32Array(4);function dr(n,e,t){const A=n[0];if(A<=0||A>0)return n;const i=e*t;let r=Su[i];if(r===void 0&&(r=new Float32Array(i),Su[i]=r),e!==0){A.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(r,o)}return r}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,A=n.length;t<A;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,A=e.length;t<A;t++)n[t]=e[t]}function na(n,e){let t=Uu[e];t===void 0&&(t=new Int32Array(e),Uu[e]=t);for(let A=0;A!==e;++A)t[A]=n.allocateTextureUnit();return t}function kv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Kv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function Wv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function Xv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function Yv(n,e){const t=this.cache,A=e.elements;if(A===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Dt(t,A))return;Iu.set(A),n.uniformMatrix2fv(this.addr,!1,Iu),Pt(t,A)}}function qv(n,e){const t=this.cache,A=e.elements;if(A===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Dt(t,A))return;Tu.set(A),n.uniformMatrix3fv(this.addr,!1,Tu),Pt(t,A)}}function Jv(n,e){const t=this.cache,A=e.elements;if(A===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Dt(t,A))return;Fu.set(A),n.uniformMatrix4fv(this.addr,!1,Fu),Pt(t,A)}}function Zv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function jv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function $v(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function ew(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function tw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Aw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function nw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function iw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function rw(n,e,t){const A=this.cache,i=t.allocateTextureUnit();A[0]!==i&&(n.uniform1i(this.addr,i),A[0]=i);let r;this.type===n.SAMPLER_2D_SHADOW?(Mu.compareFunction=Ud,r=Mu):r=qd,t.setTexture2D(e||r,i)}function sw(n,e,t){const A=this.cache,i=t.allocateTextureUnit();A[0]!==i&&(n.uniform1i(this.addr,i),A[0]=i),t.setTexture3D(e||Zd,i)}function ow(n,e,t){const A=this.cache,i=t.allocateTextureUnit();A[0]!==i&&(n.uniform1i(this.addr,i),A[0]=i),t.setTextureCube(e||jd,i)}function aw(n,e,t){const A=this.cache,i=t.allocateTextureUnit();A[0]!==i&&(n.uniform1i(this.addr,i),A[0]=i),t.setTexture2DArray(e||Jd,i)}function lw(n){switch(n){case 5126:return kv;case 35664:return Kv;case 35665:return Wv;case 35666:return Xv;case 35674:return Yv;case 35675:return qv;case 35676:return Jv;case 5124:case 35670:return Zv;case 35667:case 35671:return jv;case 35668:case 35672:return $v;case 35669:case 35673:return ew;case 5125:return tw;case 36294:return Aw;case 36295:return nw;case 36296:return iw;case 35678:case 36198:case 36298:case 36306:case 35682:return rw;case 35679:case 36299:case 36307:return sw;case 35680:case 36300:case 36308:case 36293:return ow;case 36289:case 36303:case 36311:case 36292:return aw}}function cw(n,e){n.uniform1fv(this.addr,e)}function hw(n,e){const t=dr(e,this.size,2);n.uniform2fv(this.addr,t)}function uw(n,e){const t=dr(e,this.size,3);n.uniform3fv(this.addr,t)}function fw(n,e){const t=dr(e,this.size,4);n.uniform4fv(this.addr,t)}function dw(n,e){const t=dr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function pw(n,e){const t=dr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function gw(n,e){const t=dr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function mw(n,e){n.uniform1iv(this.addr,e)}function xw(n,e){n.uniform2iv(this.addr,e)}function Bw(n,e){n.uniform3iv(this.addr,e)}function vw(n,e){n.uniform4iv(this.addr,e)}function ww(n,e){n.uniform1uiv(this.addr,e)}function _w(n,e){n.uniform2uiv(this.addr,e)}function Cw(n,e){n.uniform3uiv(this.addr,e)}function yw(n,e){n.uniform4uiv(this.addr,e)}function Ew(n,e,t){const A=this.cache,i=e.length,r=na(t,i);Dt(A,r)||(n.uniform1iv(this.addr,r),Pt(A,r));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||qd,r[s])}function bw(n,e,t){const A=this.cache,i=e.length,r=na(t,i);Dt(A,r)||(n.uniform1iv(this.addr,r),Pt(A,r));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Zd,r[s])}function Mw(n,e,t){const A=this.cache,i=e.length,r=na(t,i);Dt(A,r)||(n.uniform1iv(this.addr,r),Pt(A,r));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||jd,r[s])}function Sw(n,e,t){const A=this.cache,i=e.length,r=na(t,i);Dt(A,r)||(n.uniform1iv(this.addr,r),Pt(A,r));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Jd,r[s])}function Uw(n){switch(n){case 5126:return cw;case 35664:return hw;case 35665:return uw;case 35666:return fw;case 35674:return dw;case 35675:return pw;case 35676:return gw;case 5124:case 35670:return mw;case 35667:case 35671:return xw;case 35668:case 35672:return Bw;case 35669:case 35673:return vw;case 5125:return ww;case 36294:return _w;case 36295:return Cw;case 36296:return yw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ew;case 35679:case 36299:case 36307:return bw;case 35680:case 36300:case 36308:case 36293:return Mw;case 36289:case 36303:case 36311:case 36292:return Sw}}class Fw{constructor(e,t,A){this.id=e,this.addr=A,this.cache=[],this.type=t.type,this.setValue=lw(t.type)}}class Tw{constructor(e,t,A){this.id=e,this.addr=A,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Uw(t.type)}}class Iw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,A){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(e,t[o.id],A)}}}const Al=/(\w+)(\])?(\[|\.)?/g;function Qu(n,e){n.seq.push(e),n.map[e.id]=e}function Qw(n,e,t){const A=n.name,i=A.length;for(Al.lastIndex=0;;){const r=Al.exec(A),s=Al.lastIndex;let o=r[1];const a=r[2]==="]",l=r[3];if(a&&(o=o|0),l===void 0||l==="["&&s+2===i){Qu(t,l===void 0?new Fw(o,n,e):new Tw(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Iw(o),Qu(t,u)),t=u}}}class Eo{constructor(e,t){this.seq=[],this.map={};const A=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<A;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);Qw(r,s,this)}}setValue(e,t,A,i){const r=this.map[t];r!==void 0&&r.setValue(e,A,i)}setOptional(e,t,A){const i=t[A];i!==void 0&&this.setValue(e,A,i)}static upload(e,t,A,i){for(let r=0,s=t.length;r!==s;++r){const o=t[r],a=A[o.id];a.needsUpdate!==!1&&o.setValue(e,a.value,i)}}static seqWithValue(e,t){const A=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&A.push(s)}return A}}function Ru(n,e,t){const A=n.createShader(e);return n.shaderSource(A,t),n.compileShader(A),A}const Rw=37297;let Lw=0;function Dw(n,e){const t=n.split(`
`),A=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){const o=s+1;A.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return A.join(`
`)}const Lu=new ze;function Pw(n){At._getMatrix(Lu,At.workingColorSpace,n);const e=`mat3( ${Lu.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(n)){case Io:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Du(n,e,t){const A=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(A&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Dw(n.getShaderSource(e),o)}else return r}function Hw(n,e){const t=Pw(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Nw(n,e){let t;switch(e){case sg:t="Linear";break;case og:t="Reinhard";break;case ag:t="Cineon";break;case wd:t="ACESFilmic";break;case cg:t="AgX";break;case hg:t="Neutral";break;case lg:t="Custom";break;default:De("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ks=new N;function Ow(){At.getLuminanceCoefficients(ks);const n=ks.x.toFixed(4),e=ks.y.toFixed(4),t=ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function Gw(n){const e=[];for(const t in n){const A=n[t];A!==!1&&e.push("#define "+t+" "+A)}return e.join(`
`)}function zw(n,e){const t={},A=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let i=0;i<A;i++){const r=n.getActiveAttrib(e,i),s=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function Ir(n){return n!==""}function Pu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kw=/^[ \t]*#include +<([\w\d./]+)>/gm;function vc(n){return n.replace(kw,Ww)}const Kw=new Map;function Ww(n,e){let t=We[e];if(t===void 0){const A=Kw.get(e);if(A!==void 0)t=We[A],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,A);else throw new Error("Can not resolve #include <"+e+">")}return vc(t)}const Xw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nu(n){return n.replace(Xw,Yw)}function Yw(n,e,t,A){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=A.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ou(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===xd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Bd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===xn&&(e="SHADOWMAP_TYPE_VSM"),e}function Jw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ar:case nr:e="ENVMAP_TYPE_CUBE";break;case $o:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case nr:e="ENVMAP_MODE_REFRACTION";break}return e}function jw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vd:e="ENVMAP_BLENDING_MULTIPLY";break;case ig:e="ENVMAP_BLENDING_MIX";break;case rg:e="ENVMAP_BLENDING_ADD";break}return e}function $w(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,A=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:A,maxMip:t}}function e_(n,e,t,A){const i=n.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const a=qw(t),l=Jw(t),c=Zw(t),u=jw(t),h=$w(t),f=Vw(t),p=Gw(r),m=i.createProgram();let g,d,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ir).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ir).join(`
`),d.length>0&&(d+=`
`)):(g=[Ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),d=[Ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?We.tonemapping_pars_fragment:"",t.toneMapping!==kn?Nw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Hw("linearToOutputTexel",t.outputColorSpace),Ow(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),s=vc(s),s=Pu(s,t),s=Hu(s,t),o=vc(o),o=Pu(o,t),o=Hu(o,t),s=Nu(s),o=Nu(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const B=x+g+s,w=x+d+o,y=Ru(i,i.VERTEX_SHADER,B),v=Ru(i,i.FRAGMENT_SHADER,w);i.attachShader(m,y),i.attachShader(m,v),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function E(T){if(n.debug.checkShaderErrors){const R=i.getProgramInfoLog(m)||"",F=i.getShaderInfoLog(y)||"",P=i.getShaderInfoLog(v)||"",D=R.trim(),Q=F.trim(),k=P.trim();let O=!0,Y=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(i,m,y,v);else{const $=Du(i,y,"vertex"),ae=Du(i,v,"fragment");yt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+D+`
`+$+`
`+ae)}else D!==""?De("WebGLProgram: Program Info Log:",D):(Q===""||k==="")&&(Y=!1);Y&&(T.diagnostics={runnable:O,programLog:D,vertexShader:{log:Q,prefix:g},fragmentShader:{log:k,prefix:d}})}i.deleteShader(y),i.deleteShader(v),U=new Eo(i,m),_=zw(i,m)}let U;this.getUniforms=function(){return U===void 0&&E(this),U};let _;this.getAttributes=function(){return _===void 0&&E(this),_};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(m,Rw)),C},this.destroy=function(){A.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lw++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=v,this}let t_=0;class A_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,A=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(A),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const A of t)A.usedTimes--,A.usedTimes===0&&this.shaderCache.delete(A.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let A=t.get(e);return A===void 0&&(A=new Set,t.set(e,A)),A}_getShaderStage(e){const t=this.shaderCache;let A=t.get(e);return A===void 0&&(A=new n_(e),t.set(e,A)),A}}class n_{constructor(e){this.id=t_++,this.code=e,this.usedTimes=0}}function i_(n,e,t,A,i,r,s){const o=new sh,a=new A_,l=new Set,c=[],u=i.logarithmicDepthBuffer,h=i.vertexTextures;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,C,T,R,F){const P=R.fog,D=F.geometry,Q=_.isMeshStandardMaterial?R.environment:null,k=(_.isMeshStandardMaterial?t:e).get(_.envMap||Q),O=k&&k.mapping===$o?k.image.height:null,Y=p[_.type];_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&De("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const $=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ae=$!==void 0?$.length:0;let ne=0;D.morphAttributes.position!==void 0&&(ne=1),D.morphAttributes.normal!==void 0&&(ne=2),D.morphAttributes.color!==void 0&&(ne=3);let Oe,Ye,Ke,q;if(Y){const st=XA[Y];Oe=st.vertexShader,Ye=st.fragmentShader}else Oe=_.vertexShader,Ye=_.fragmentShader,a.update(_),Ke=a.getVertexShaderID(_),q=a.getFragmentShaderID(_);const Z=n.getRenderTarget(),Be=n.state.buffers.depth.getReversed(),ke=F.isInstancedMesh===!0,be=F.isBatchedMesh===!0,Je=!!_.map,Vt=!!_.matcap,qe=!!k,gt=!!_.aoMap,L=!!_.lightMap,Ze=!!_.bumpMap,je=!!_.normalMap,ut=!!_.displacementMap,Ce=!!_.emissiveMap,Bt=!!_.metalnessMap,Se=!!_.roughnessMap,Ge=_.anisotropy>0,I=_.clearcoat>0,b=_.dispersion>0,z=_.iridescence>0,J=_.sheen>0,ee=_.transmission>0,X=Ge&&!!_.anisotropyMap,Ee=I&&!!_.clearcoatMap,ce=I&&!!_.clearcoatNormalMap,Ue=I&&!!_.clearcoatRoughnessMap,ye=z&&!!_.iridescenceMap,te=z&&!!_.iridescenceThicknessMap,re=J&&!!_.sheenColorMap,Re=J&&!!_.sheenRoughnessMap,Te=!!_.specularMap,ge=!!_.specularColorMap,Pe=!!_.specularIntensityMap,H=ee&&!!_.transmissionMap,he=ee&&!!_.thicknessMap,se=!!_.gradientMap,oe=!!_.alphaMap,Ae=_.alphaTest>0,j=!!_.alphaHash,we=!!_.extensions;let Ve=kn;_.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ve=n.toneMapping);const dt={shaderID:Y,shaderType:_.type,shaderName:_.name,vertexShader:Oe,fragmentShader:Ye,defines:_.defines,customVertexShaderID:Ke,customFragmentShaderID:q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:be,batchingColor:be&&F._colorsTexture!==null,instancing:ke,instancingColor:ke&&F.instanceColor!==null,instancingMorph:ke&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ir,alphaToCoverage:!!_.alphaToCoverage,map:Je,matcap:Vt,envMap:qe,envMapMode:qe&&k.mapping,envMapCubeUVHeight:O,aoMap:gt,lightMap:L,bumpMap:Ze,normalMap:je,displacementMap:h&&ut,emissiveMap:Ce,normalMapObjectSpace:je&&_.normalMapType===pg,normalMapTangentSpace:je&&_.normalMapType===nh,metalnessMap:Bt,roughnessMap:Se,anisotropy:Ge,anisotropyMap:X,clearcoat:I,clearcoatMap:Ee,clearcoatNormalMap:ce,clearcoatRoughnessMap:Ue,dispersion:b,iridescence:z,iridescenceMap:ye,iridescenceThicknessMap:te,sheen:J,sheenColorMap:re,sheenRoughnessMap:Re,specularMap:Te,specularColorMap:ge,specularIntensityMap:Pe,transmission:ee,transmissionMap:H,thicknessMap:he,gradientMap:se,opaque:_.transparent===!1&&_.blending===Zi&&_.alphaToCoverage===!1,alphaMap:oe,alphaTest:Ae,alphaHash:j,combine:_.combine,mapUv:Je&&m(_.map.channel),aoMapUv:gt&&m(_.aoMap.channel),lightMapUv:L&&m(_.lightMap.channel),bumpMapUv:Ze&&m(_.bumpMap.channel),normalMapUv:je&&m(_.normalMap.channel),displacementMapUv:ut&&m(_.displacementMap.channel),emissiveMapUv:Ce&&m(_.emissiveMap.channel),metalnessMapUv:Bt&&m(_.metalnessMap.channel),roughnessMapUv:Se&&m(_.roughnessMap.channel),anisotropyMapUv:X&&m(_.anisotropyMap.channel),clearcoatMapUv:Ee&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:ce&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:te&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:re&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:Re&&m(_.sheenRoughnessMap.channel),specularMapUv:Te&&m(_.specularMap.channel),specularColorMapUv:ge&&m(_.specularColorMap.channel),specularIntensityMapUv:Pe&&m(_.specularIntensityMap.channel),transmissionMapUv:H&&m(_.transmissionMap.channel),thicknessMapUv:he&&m(_.thicknessMap.channel),alphaMapUv:oe&&m(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(je||Ge),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!D.attributes.uv&&(Je||oe),fog:!!P,useFog:_.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Be,skinning:F.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ne,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Je&&_.map.isVideoTexture===!0&&At.getTransfer(_.map.colorSpace)===at,decodeVideoTextureEmissive:Ce&&_.emissiveMap.isVideoTexture===!0&&At.getTransfer(_.emissiveMap.colorSpace)===at,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===vn,flipSided:_.side===hA,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:we&&_.extensions.clipCullDistance===!0&&A.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&_.extensions.multiDraw===!0||be)&&A.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:A.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt}function d(_){const C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(const T in _.defines)C.push(T),C.push(_.defines[T]);return _.isRawShaderMaterial===!1&&(x(C,_),B(C,_),C.push(n.outputColorSpace)),C.push(_.customProgramCacheKey),C.join()}function x(_,C){_.push(C.precision),_.push(C.outputColorSpace),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.mapUv),_.push(C.alphaMapUv),_.push(C.lightMapUv),_.push(C.aoMapUv),_.push(C.bumpMapUv),_.push(C.normalMapUv),_.push(C.displacementMapUv),_.push(C.emissiveMapUv),_.push(C.metalnessMapUv),_.push(C.roughnessMapUv),_.push(C.anisotropyMapUv),_.push(C.clearcoatMapUv),_.push(C.clearcoatNormalMapUv),_.push(C.clearcoatRoughnessMapUv),_.push(C.iridescenceMapUv),_.push(C.iridescenceThicknessMapUv),_.push(C.sheenColorMapUv),_.push(C.sheenRoughnessMapUv),_.push(C.specularMapUv),_.push(C.specularColorMapUv),_.push(C.specularIntensityMapUv),_.push(C.transmissionMapUv),_.push(C.thicknessMapUv),_.push(C.combine),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numSpotLightMaps),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.numSpotLightShadowsWithMaps),_.push(C.numLightProbes),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function B(_,C){o.disableAll(),C.supportsVertexTextures&&o.enable(0),C.instancing&&o.enable(1),C.instancingColor&&o.enable(2),C.instancingMorph&&o.enable(3),C.matcap&&o.enable(4),C.envMap&&o.enable(5),C.normalMapObjectSpace&&o.enable(6),C.normalMapTangentSpace&&o.enable(7),C.clearcoat&&o.enable(8),C.iridescence&&o.enable(9),C.alphaTest&&o.enable(10),C.vertexColors&&o.enable(11),C.vertexAlphas&&o.enable(12),C.vertexUv1s&&o.enable(13),C.vertexUv2s&&o.enable(14),C.vertexUv3s&&o.enable(15),C.vertexTangents&&o.enable(16),C.anisotropy&&o.enable(17),C.alphaHash&&o.enable(18),C.batching&&o.enable(19),C.dispersion&&o.enable(20),C.batchingColor&&o.enable(21),C.gradientMap&&o.enable(22),_.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),_.push(o.mask)}function w(_){const C=p[_.type];let T;if(C){const R=XA[C];T=Lo.clone(R.uniforms)}else T=_.uniforms;return T}function y(_,C){let T;for(let R=0,F=c.length;R<F;R++){const P=c[R];if(P.cacheKey===C){T=P,++T.usedTimes;break}}return T===void 0&&(T=new e_(n,C,_,r),c.push(T)),T}function v(_){if(--_.usedTimes===0){const C=c.indexOf(_);c[C]=c[c.length-1],c.pop(),_.destroy()}}function E(_){a.remove(_)}function U(){a.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:w,acquireProgram:y,releaseProgram:v,releaseShaderCache:E,programs:c,dispose:U}}function r_(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function A(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{has:e,get:t,remove:A,update:i,dispose:r}}function s_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Vu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Gu(){const n=[];let e=0;const t=[],A=[],i=[];function r(){e=0,t.length=0,A.length=0,i.length=0}function s(u,h,f,p,m,g){let d=n[e];return d===void 0?(d={id:u.id,object:u,geometry:h,material:f,groupOrder:p,renderOrder:u.renderOrder,z:m,group:g},n[e]=d):(d.id=u.id,d.object=u,d.geometry=h,d.material=f,d.groupOrder=p,d.renderOrder=u.renderOrder,d.z=m,d.group=g),e++,d}function o(u,h,f,p,m,g){const d=s(u,h,f,p,m,g);f.transmission>0?A.push(d):f.transparent===!0?i.push(d):t.push(d)}function a(u,h,f,p,m,g){const d=s(u,h,f,p,m,g);f.transmission>0?A.unshift(d):f.transparent===!0?i.unshift(d):t.unshift(d)}function l(u,h){t.length>1&&t.sort(u||s_),A.length>1&&A.sort(h||Vu),i.length>1&&i.sort(h||Vu)}function c(){for(let u=e,h=n.length;u<h;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:A,transparent:i,init:r,push:o,unshift:a,finish:c,sort:l}}function o_(){let n=new WeakMap;function e(A,i){const r=n.get(A);let s;return r===void 0?(s=new Gu,n.set(A,[s])):i>=r.length?(s=new Gu,r.push(s)):s=r[i],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function a_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ie};break;case"SpotLight":t={position:new N,direction:new N,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function l_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let c_=0;function h_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function u_(n){const e=new a_,t=l_(),A={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)A.probe.push(new N);const i=new N,r=new xt,s=new xt;function o(l){let c=0,u=0,h=0;for(let _=0;_<9;_++)A.probe[_].set(0,0,0);let f=0,p=0,m=0,g=0,d=0,x=0,B=0,w=0,y=0,v=0,E=0;l.sort(h_);for(let _=0,C=l.length;_<C;_++){const T=l[_],R=T.color,F=T.intensity,P=T.distance,D=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)c+=R.r*F,u+=R.g*F,h+=R.b*F;else if(T.isLightProbe){for(let Q=0;Q<9;Q++)A.probe[Q].addScaledVector(T.sh.coefficients[Q],F);E++}else if(T.isDirectionalLight){const Q=e.get(T);if(Q.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const k=T.shadow,O=t.get(T);O.shadowIntensity=k.intensity,O.shadowBias=k.bias,O.shadowNormalBias=k.normalBias,O.shadowRadius=k.radius,O.shadowMapSize=k.mapSize,A.directionalShadow[f]=O,A.directionalShadowMap[f]=D,A.directionalShadowMatrix[f]=T.shadow.matrix,x++}A.directional[f]=Q,f++}else if(T.isSpotLight){const Q=e.get(T);Q.position.setFromMatrixPosition(T.matrixWorld),Q.color.copy(R).multiplyScalar(F),Q.distance=P,Q.coneCos=Math.cos(T.angle),Q.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),Q.decay=T.decay,A.spot[m]=Q;const k=T.shadow;if(T.map&&(A.spotLightMap[y]=T.map,y++,k.updateMatrices(T),T.castShadow&&v++),A.spotLightMatrix[m]=k.matrix,T.castShadow){const O=t.get(T);O.shadowIntensity=k.intensity,O.shadowBias=k.bias,O.shadowNormalBias=k.normalBias,O.shadowRadius=k.radius,O.shadowMapSize=k.mapSize,A.spotShadow[m]=O,A.spotShadowMap[m]=D,w++}m++}else if(T.isRectAreaLight){const Q=e.get(T);Q.color.copy(R).multiplyScalar(F),Q.halfWidth.set(T.width*.5,0,0),Q.halfHeight.set(0,T.height*.5,0),A.rectArea[g]=Q,g++}else if(T.isPointLight){const Q=e.get(T);if(Q.color.copy(T.color).multiplyScalar(T.intensity),Q.distance=T.distance,Q.decay=T.decay,T.castShadow){const k=T.shadow,O=t.get(T);O.shadowIntensity=k.intensity,O.shadowBias=k.bias,O.shadowNormalBias=k.normalBias,O.shadowRadius=k.radius,O.shadowMapSize=k.mapSize,O.shadowCameraNear=k.camera.near,O.shadowCameraFar=k.camera.far,A.pointShadow[p]=O,A.pointShadowMap[p]=D,A.pointShadowMatrix[p]=T.shadow.matrix,B++}A.point[p]=Q,p++}else if(T.isHemisphereLight){const Q=e.get(T);Q.skyColor.copy(T.color).multiplyScalar(F),Q.groundColor.copy(T.groundColor).multiplyScalar(F),A.hemi[d]=Q,d++}}g>0&&(n.has("OES_texture_float_linear")===!0?(A.rectAreaLTC1=le.LTC_FLOAT_1,A.rectAreaLTC2=le.LTC_FLOAT_2):(A.rectAreaLTC1=le.LTC_HALF_1,A.rectAreaLTC2=le.LTC_HALF_2)),A.ambient[0]=c,A.ambient[1]=u,A.ambient[2]=h;const U=A.hash;(U.directionalLength!==f||U.pointLength!==p||U.spotLength!==m||U.rectAreaLength!==g||U.hemiLength!==d||U.numDirectionalShadows!==x||U.numPointShadows!==B||U.numSpotShadows!==w||U.numSpotMaps!==y||U.numLightProbes!==E)&&(A.directional.length=f,A.spot.length=m,A.rectArea.length=g,A.point.length=p,A.hemi.length=d,A.directionalShadow.length=x,A.directionalShadowMap.length=x,A.pointShadow.length=B,A.pointShadowMap.length=B,A.spotShadow.length=w,A.spotShadowMap.length=w,A.directionalShadowMatrix.length=x,A.pointShadowMatrix.length=B,A.spotLightMatrix.length=w+y-v,A.spotLightMap.length=y,A.numSpotLightShadowsWithMaps=v,A.numLightProbes=E,U.directionalLength=f,U.pointLength=p,U.spotLength=m,U.rectAreaLength=g,U.hemiLength=d,U.numDirectionalShadows=x,U.numPointShadows=B,U.numSpotShadows=w,U.numSpotMaps=y,U.numLightProbes=E,A.version=c_++)}function a(l,c){let u=0,h=0,f=0,p=0,m=0;const g=c.matrixWorldInverse;for(let d=0,x=l.length;d<x;d++){const B=l[d];if(B.isDirectionalLight){const w=A.directional[u];w.direction.setFromMatrixPosition(B.matrixWorld),i.setFromMatrixPosition(B.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),u++}else if(B.isSpotLight){const w=A.spot[f];w.position.setFromMatrixPosition(B.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(B.matrixWorld),i.setFromMatrixPosition(B.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),f++}else if(B.isRectAreaLight){const w=A.rectArea[p];w.position.setFromMatrixPosition(B.matrixWorld),w.position.applyMatrix4(g),s.identity(),r.copy(B.matrixWorld),r.premultiply(g),s.extractRotation(r),w.halfWidth.set(B.width*.5,0,0),w.halfHeight.set(0,B.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),p++}else if(B.isPointLight){const w=A.point[h];w.position.setFromMatrixPosition(B.matrixWorld),w.position.applyMatrix4(g),h++}else if(B.isHemisphereLight){const w=A.hemi[m];w.direction.setFromMatrixPosition(B.matrixWorld),w.direction.transformDirection(g),m++}}}return{setup:o,setupView:a,state:A}}function zu(n){const e=new u_(n),t=[],A=[];function i(c){l.camera=c,t.length=0,A.length=0}function r(c){t.push(c)}function s(c){A.push(c)}function o(){e.setup(t)}function a(c){e.setupView(t,c)}const l={lightsArray:t,shadowsArray:A,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:a,pushLight:r,pushShadow:s}}function f_(n){let e=new WeakMap;function t(i,r=0){const s=e.get(i);let o;return s===void 0?(o=new zu(n),e.set(i,[o])):r>=s.length?(o=new zu(n),s.push(o)):o=s[r],o}function A(){e=new WeakMap}return{get:t,dispose:A}}const d_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p_=`uniform sampler2D shadow_pass;
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
}`;function g_(n,e,t){let A=new ah;const i=new ue,r=new ue,s=new Et,o=new Rm({depthPacking:dg}),a=new Lm,l={},c=t.maxTextureSize,u={[Xn]:hA,[hA]:Xn,[vn]:vn},h=new AA({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:d_,fragmentShader:p_}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const p=new fA;p.setAttribute("position",new uA(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new iA(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xd;let d=this.type;this.render=function(v,E,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||v.length===0)return;const _=n.getRenderTarget(),C=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),R=n.state;R.setBlending(qA),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const F=d!==xn&&this.type===xn,P=d===xn&&this.type!==xn;for(let D=0,Q=v.length;D<Q;D++){const k=v[D],O=k.shadow;if(O===void 0){De("WebGLShadowMap:",k,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const Y=O.getFrameExtents();if(i.multiply(Y),r.copy(O.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(r.x=Math.floor(c/Y.x),i.x=r.x*Y.x,O.mapSize.x=r.x),i.y>c&&(r.y=Math.floor(c/Y.y),i.y=r.y*Y.y,O.mapSize.y=r.y)),O.map===null||F===!0||P===!0){const ae=this.type!==xn?{minFilter:nA,magFilter:nA}:{};O.map!==null&&O.map.dispose(),O.map=new OA(i.x,i.y,ae),O.map.texture.name=k.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const $=O.getViewportCount();for(let ae=0;ae<$;ae++){const ne=O.getViewport(ae);s.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),R.viewport(s),O.updateMatrices(k,ae),A=O.getFrustum(),w(E,U,O.camera,k,this.type)}O.isPointLightShadow!==!0&&this.type===xn&&x(O,U),O.needsUpdate=!1}d=this.type,g.needsUpdate=!1,n.setRenderTarget(_,C,T)};function x(v,E){const U=e.update(m);h.defines.VSM_SAMPLES!==v.blurSamples&&(h.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new OA(i.x,i.y)),h.uniforms.shadow_pass.value=v.map.texture,h.uniforms.resolution.value=v.mapSize,h.uniforms.radius.value=v.radius,n.setRenderTarget(v.mapPass),n.clear(),n.renderBufferDirect(E,null,U,h,m,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,n.setRenderTarget(v.map),n.clear(),n.renderBufferDirect(E,null,U,f,m,null)}function B(v,E,U,_){let C=null;const T=U.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(T!==void 0)C=T;else if(C=U.isPointLight===!0?a:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const R=C.uuid,F=E.uuid;let P=l[R];P===void 0&&(P={},l[R]=P);let D=P[F];D===void 0&&(D=C.clone(),P[F]=D,E.addEventListener("dispose",y)),C=D}if(C.visible=E.visible,C.wireframe=E.wireframe,_===xn?C.side=E.shadowSide!==null?E.shadowSide:E.side:C.side=E.shadowSide!==null?E.shadowSide:u[E.side],C.alphaMap=E.alphaMap,C.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,C.map=E.map,C.clipShadows=E.clipShadows,C.clippingPlanes=E.clippingPlanes,C.clipIntersection=E.clipIntersection,C.displacementMap=E.displacementMap,C.displacementScale=E.displacementScale,C.displacementBias=E.displacementBias,C.wireframeLinewidth=E.wireframeLinewidth,C.linewidth=E.linewidth,U.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const R=n.properties.get(C);R.light=U}return C}function w(v,E,U,_,C){if(v.visible===!1)return;if(v.layers.test(E.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&C===xn)&&(!v.frustumCulled||A.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,v.matrixWorld);const F=e.update(v),P=v.material;if(Array.isArray(P)){const D=F.groups;for(let Q=0,k=D.length;Q<k;Q++){const O=D[Q],Y=P[O.materialIndex];if(Y&&Y.visible){const $=B(v,Y,_,C);v.onBeforeShadow(n,v,E,U,F,$,O),n.renderBufferDirect(U,null,F,$,v,O),v.onAfterShadow(n,v,E,U,F,$,O)}}}else if(P.visible){const D=B(v,P,_,C);v.onBeforeShadow(n,v,E,U,F,D,null),n.renderBufferDirect(U,null,F,D,v,null),v.onAfterShadow(n,v,E,U,F,D,null)}}const R=v.children;for(let F=0,P=R.length;F<P;F++)w(R[F],E,U,_,C)}function y(v){v.target.removeEventListener("dispose",y);for(const U in l){const _=l[U],C=v.target.uuid;C in _&&(_[C].dispose(),delete _[C])}}}const m_={[Ll]:Dl,[Pl]:Ol,[Hl]:Vl,[tr]:Nl,[Dl]:Ll,[Ol]:Pl,[Vl]:Hl,[Nl]:tr};function x_(n,e){function t(){let H=!1;const he=new Et;let se=null;const oe=new Et(0,0,0,0);return{setMask:function(Ae){se!==Ae&&!H&&(n.colorMask(Ae,Ae,Ae,Ae),se=Ae)},setLocked:function(Ae){H=Ae},setClear:function(Ae,j,we,Ve,dt){dt===!0&&(Ae*=Ve,j*=Ve,we*=Ve),he.set(Ae,j,we,Ve),oe.equals(he)===!1&&(n.clearColor(Ae,j,we,Ve),oe.copy(he))},reset:function(){H=!1,se=null,oe.set(-1,0,0,0)}}}function A(){let H=!1,he=!1,se=null,oe=null,Ae=null;return{setReversed:function(j){if(he!==j){const we=e.get("EXT_clip_control");j?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),he=j;const Ve=Ae;Ae=null,this.setClear(Ve)}},getReversed:function(){return he},setTest:function(j){j?Z(n.DEPTH_TEST):Be(n.DEPTH_TEST)},setMask:function(j){se!==j&&!H&&(n.depthMask(j),se=j)},setFunc:function(j){if(he&&(j=m_[j]),oe!==j){switch(j){case Ll:n.depthFunc(n.NEVER);break;case Dl:n.depthFunc(n.ALWAYS);break;case Pl:n.depthFunc(n.LESS);break;case tr:n.depthFunc(n.LEQUAL);break;case Hl:n.depthFunc(n.EQUAL);break;case Nl:n.depthFunc(n.GEQUAL);break;case Ol:n.depthFunc(n.GREATER);break;case Vl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=j}},setLocked:function(j){H=j},setClear:function(j){Ae!==j&&(he&&(j=1-j),n.clearDepth(j),Ae=j)},reset:function(){H=!1,se=null,oe=null,Ae=null,he=!1}}}function i(){let H=!1,he=null,se=null,oe=null,Ae=null,j=null,we=null,Ve=null,dt=null;return{setTest:function(st){H||(st?Z(n.STENCIL_TEST):Be(n.STENCIL_TEST))},setMask:function(st){he!==st&&!H&&(n.stencilMask(st),he=st)},setFunc:function(st,GA,IA){(se!==st||oe!==GA||Ae!==IA)&&(n.stencilFunc(st,GA,IA),se=st,oe=GA,Ae=IA)},setOp:function(st,GA,IA){(j!==st||we!==GA||Ve!==IA)&&(n.stencilOp(st,GA,IA),j=st,we=GA,Ve=IA)},setLocked:function(st){H=st},setClear:function(st){dt!==st&&(n.clearStencil(st),dt=st)},reset:function(){H=!1,he=null,se=null,oe=null,Ae=null,j=null,we=null,Ve=null,dt=null}}}const r=new t,s=new A,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],p=null,m=!1,g=null,d=null,x=null,B=null,w=null,y=null,v=null,E=new Ie(0,0,0),U=0,_=!1,C=null,T=null,R=null,F=null,P=null;const D=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,k=0;const O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(O)[1]),Q=k>=1):O.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),Q=k>=2);let Y=null,$={};const ae=n.getParameter(n.SCISSOR_BOX),ne=n.getParameter(n.VIEWPORT),Oe=new Et().fromArray(ae),Ye=new Et().fromArray(ne);function Ke(H,he,se,oe){const Ae=new Uint8Array(4),j=n.createTexture();n.bindTexture(H,j),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<se;we++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,oe,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(he+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return j}const q={};q[n.TEXTURE_2D]=Ke(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=Ke(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=Ke(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=Ke(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Z(n.DEPTH_TEST),s.setFunc(tr),Ze(!1),je(Hh),Z(n.CULL_FACE),gt(qA);function Z(H){c[H]!==!0&&(n.enable(H),c[H]=!0)}function Be(H){c[H]!==!1&&(n.disable(H),c[H]=!1)}function ke(H,he){return u[H]!==he?(n.bindFramebuffer(H,he),u[H]=he,H===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=he),H===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=he),!0):!1}function be(H,he){let se=f,oe=!1;if(H){se=h.get(he),se===void 0&&(se=[],h.set(he,se));const Ae=H.textures;if(se.length!==Ae.length||se[0]!==n.COLOR_ATTACHMENT0){for(let j=0,we=Ae.length;j<we;j++)se[j]=n.COLOR_ATTACHMENT0+j;se.length=Ae.length,oe=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,oe=!0);oe&&n.drawBuffers(se)}function Je(H){return p!==H?(n.useProgram(H),p=H,!0):!1}const Vt={[ai]:n.FUNC_ADD,[V0]:n.FUNC_SUBTRACT,[G0]:n.FUNC_REVERSE_SUBTRACT};Vt[z0]=n.MIN,Vt[k0]=n.MAX;const qe={[K0]:n.ZERO,[W0]:n.ONE,[X0]:n.SRC_COLOR,[Ql]:n.SRC_ALPHA,[$0]:n.SRC_ALPHA_SATURATE,[Z0]:n.DST_COLOR,[q0]:n.DST_ALPHA,[Y0]:n.ONE_MINUS_SRC_COLOR,[Rl]:n.ONE_MINUS_SRC_ALPHA,[j0]:n.ONE_MINUS_DST_COLOR,[J0]:n.ONE_MINUS_DST_ALPHA,[eg]:n.CONSTANT_COLOR,[tg]:n.ONE_MINUS_CONSTANT_COLOR,[Ag]:n.CONSTANT_ALPHA,[ng]:n.ONE_MINUS_CONSTANT_ALPHA};function gt(H,he,se,oe,Ae,j,we,Ve,dt,st){if(H===qA){m===!0&&(Be(n.BLEND),m=!1);return}if(m===!1&&(Z(n.BLEND),m=!0),H!==O0){if(H!==g||st!==_){if((d!==ai||w!==ai)&&(n.blendEquation(n.FUNC_ADD),d=ai,w=ai),st)switch(H){case Zi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case To:n.blendFunc(n.ONE,n.ONE);break;case Nh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Oh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:yt("WebGLState: Invalid blending: ",H);break}else switch(H){case Zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case To:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Nh:yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Oh:yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:yt("WebGLState: Invalid blending: ",H);break}x=null,B=null,y=null,v=null,E.set(0,0,0),U=0,g=H,_=st}return}Ae=Ae||he,j=j||se,we=we||oe,(he!==d||Ae!==w)&&(n.blendEquationSeparate(Vt[he],Vt[Ae]),d=he,w=Ae),(se!==x||oe!==B||j!==y||we!==v)&&(n.blendFuncSeparate(qe[se],qe[oe],qe[j],qe[we]),x=se,B=oe,y=j,v=we),(Ve.equals(E)===!1||dt!==U)&&(n.blendColor(Ve.r,Ve.g,Ve.b,dt),E.copy(Ve),U=dt),g=H,_=!1}function L(H,he){H.side===vn?Be(n.CULL_FACE):Z(n.CULL_FACE);let se=H.side===hA;he&&(se=!se),Ze(se),H.blending===Zi&&H.transparent===!1?gt(qA):gt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),s.setFunc(H.depthFunc),s.setTest(H.depthTest),s.setMask(H.depthWrite),r.setMask(H.colorWrite);const oe=H.stencilWrite;o.setTest(oe),oe&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ce(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):Be(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(H){C!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),C=H)}function je(H){H!==H0?(Z(n.CULL_FACE),H!==T&&(H===Hh?n.cullFace(n.BACK):H===N0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Be(n.CULL_FACE),T=H}function ut(H){H!==R&&(Q&&n.lineWidth(H),R=H)}function Ce(H,he,se){H?(Z(n.POLYGON_OFFSET_FILL),(F!==he||P!==se)&&(n.polygonOffset(he,se),F=he,P=se)):Be(n.POLYGON_OFFSET_FILL)}function Bt(H){H?Z(n.SCISSOR_TEST):Be(n.SCISSOR_TEST)}function Se(H){H===void 0&&(H=n.TEXTURE0+D-1),Y!==H&&(n.activeTexture(H),Y=H)}function Ge(H,he,se){se===void 0&&(Y===null?se=n.TEXTURE0+D-1:se=Y);let oe=$[se];oe===void 0&&(oe={type:void 0,texture:void 0},$[se]=oe),(oe.type!==H||oe.texture!==he)&&(Y!==se&&(n.activeTexture(se),Y=se),n.bindTexture(H,he||q[H]),oe.type=H,oe.texture=he)}function I(){const H=$[Y];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function b(){try{n.compressedTexImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function J(){try{n.texSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function ee(){try{n.texSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Ee(){try{n.compressedTexSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function ce(){try{n.texStorage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Ue(){try{n.texStorage3D(...arguments)}catch(H){H("WebGLState:",H)}}function ye(){try{n.texImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function te(){try{n.texImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function re(H){Oe.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Oe.copy(H))}function Re(H){Ye.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),Ye.copy(H))}function Te(H,he){let se=l.get(he);se===void 0&&(se=new WeakMap,l.set(he,se));let oe=se.get(H);oe===void 0&&(oe=n.getUniformBlockIndex(he,H.name),se.set(H,oe))}function ge(H,he){const oe=l.get(he).get(H);a.get(he)!==oe&&(n.uniformBlockBinding(he,oe,H.__bindingPointIndex),a.set(he,oe))}function Pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},Y=null,$={},u={},h=new WeakMap,f=[],p=null,m=!1,g=null,d=null,x=null,B=null,w=null,y=null,v=null,E=new Ie(0,0,0),U=0,_=!1,C=null,T=null,R=null,F=null,P=null,Oe.set(0,0,n.canvas.width,n.canvas.height),Ye.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Z,disable:Be,bindFramebuffer:ke,drawBuffers:be,useProgram:Je,setBlending:gt,setMaterial:L,setFlipSided:Ze,setCullFace:je,setLineWidth:ut,setPolygonOffset:Ce,setScissorTest:Bt,activeTexture:Se,bindTexture:Ge,unbindTexture:I,compressedTexImage2D:b,compressedTexImage3D:z,texImage2D:ye,texImage3D:te,updateUBOMapping:Te,uniformBlockBinding:ge,texStorage2D:ce,texStorage3D:Ue,texSubImage2D:J,texSubImage3D:ee,compressedTexSubImage2D:X,compressedTexSubImage3D:Ee,scissor:re,viewport:Re,reset:Pe}}function B_(n,e,t,A,i,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ue,c=new WeakMap;let u;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,b){return f?new OffscreenCanvas(I,b):Ro("canvas")}function m(I,b,z){let J=1;const ee=Ge(I);if((ee.width>z||ee.height>z)&&(J=z/Math.max(ee.width,ee.height)),J<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const X=Math.floor(J*ee.width),Ee=Math.floor(J*ee.height);u===void 0&&(u=p(X,Ee));const ce=b?p(X,Ee):u;return ce.width=X,ce.height=Ee,ce.getContext("2d").drawImage(I,0,0,X,Ee),De("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+X+"x"+Ee+")."),ce}else return"data"in I&&De("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),I;return I}function g(I){return I.generateMipmaps}function d(I){n.generateMipmap(I)}function x(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function B(I,b,z,J,ee=!1){if(I!==null){if(n[I]!==void 0)return n[I];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let X=b;if(b===n.RED&&(z===n.FLOAT&&(X=n.R32F),z===n.HALF_FLOAT&&(X=n.R16F),z===n.UNSIGNED_BYTE&&(X=n.R8)),b===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(X=n.R8UI),z===n.UNSIGNED_SHORT&&(X=n.R16UI),z===n.UNSIGNED_INT&&(X=n.R32UI),z===n.BYTE&&(X=n.R8I),z===n.SHORT&&(X=n.R16I),z===n.INT&&(X=n.R32I)),b===n.RG&&(z===n.FLOAT&&(X=n.RG32F),z===n.HALF_FLOAT&&(X=n.RG16F),z===n.UNSIGNED_BYTE&&(X=n.RG8)),b===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(X=n.RG8UI),z===n.UNSIGNED_SHORT&&(X=n.RG16UI),z===n.UNSIGNED_INT&&(X=n.RG32UI),z===n.BYTE&&(X=n.RG8I),z===n.SHORT&&(X=n.RG16I),z===n.INT&&(X=n.RG32I)),b===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(X=n.RGB8UI),z===n.UNSIGNED_SHORT&&(X=n.RGB16UI),z===n.UNSIGNED_INT&&(X=n.RGB32UI),z===n.BYTE&&(X=n.RGB8I),z===n.SHORT&&(X=n.RGB16I),z===n.INT&&(X=n.RGB32I)),b===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),z===n.UNSIGNED_INT&&(X=n.RGBA32UI),z===n.BYTE&&(X=n.RGBA8I),z===n.SHORT&&(X=n.RGBA16I),z===n.INT&&(X=n.RGBA32I)),b===n.RGB&&(z===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),b===n.RGBA){const Ee=ee?Io:At.getTransfer(J);z===n.FLOAT&&(X=n.RGBA32F),z===n.HALF_FLOAT&&(X=n.RGBA16F),z===n.UNSIGNED_BYTE&&(X=Ee===at?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function w(I,b){let z;return I?b===null||b===mi||b===$r?z=n.DEPTH24_STENCIL8:b===_n?z=n.DEPTH32F_STENCIL8:b===jr&&(z=n.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===mi||b===$r?z=n.DEPTH_COMPONENT24:b===_n?z=n.DEPTH_COMPONENT32F:b===jr&&(z=n.DEPTH_COMPONENT16),z}function y(I,b){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==nA&&I.minFilter!==SA?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function v(I){const b=I.target;b.removeEventListener("dispose",v),U(b),b.isVideoTexture&&c.delete(b)}function E(I){const b=I.target;b.removeEventListener("dispose",E),C(b)}function U(I){const b=A.get(I);if(b.__webglInit===void 0)return;const z=I.source,J=h.get(z);if(J){const ee=J[b.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&_(I),Object.keys(J).length===0&&h.delete(z)}A.remove(I)}function _(I){const b=A.get(I);n.deleteTexture(b.__webglTexture);const z=I.source,J=h.get(z);delete J[b.__cacheKey],s.memory.textures--}function C(I){const b=A.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),A.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(b.__webglFramebuffer[J]))for(let ee=0;ee<b.__webglFramebuffer[J].length;ee++)n.deleteFramebuffer(b.__webglFramebuffer[J][ee]);else n.deleteFramebuffer(b.__webglFramebuffer[J]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[J])}else{if(Array.isArray(b.__webglFramebuffer))for(let J=0;J<b.__webglFramebuffer.length;J++)n.deleteFramebuffer(b.__webglFramebuffer[J]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let J=0;J<b.__webglColorRenderbuffer.length;J++)b.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[J]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const z=I.textures;for(let J=0,ee=z.length;J<ee;J++){const X=A.get(z[J]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),s.memory.textures--),A.remove(z[J])}A.remove(I)}let T=0;function R(){T=0}function F(){const I=T;return I>=i.maxTextures&&De("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),T+=1,I}function P(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function D(I,b){const z=A.get(I);if(I.isVideoTexture&&Bt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&z.__version!==I.version){const J=I.image;if(J===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,I,b);return}}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+b)}function Q(I,b){const z=A.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){q(z,I,b);return}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+b)}function k(I,b){const z=A.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){q(z,I,b);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+b)}function O(I,b){const z=A.get(I);if(I.version>0&&z.__version!==I.version){Z(z,I,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+b)}const Y={[Zr]:n.REPEAT,[wn]:n.CLAMP_TO_EDGE,[kl]:n.MIRRORED_REPEAT},$={[nA]:n.NEAREST,[ug]:n.NEAREST_MIPMAP_NEAREST,[Bs]:n.NEAREST_MIPMAP_LINEAR,[SA]:n.LINEAR,[Ca]:n.LINEAR_MIPMAP_NEAREST,[ui]:n.LINEAR_MIPMAP_LINEAR},ae={[gg]:n.NEVER,[_g]:n.ALWAYS,[mg]:n.LESS,[Ud]:n.LEQUAL,[xg]:n.EQUAL,[wg]:n.GEQUAL,[Bg]:n.GREATER,[vg]:n.NOTEQUAL};function ne(I,b){if(b.type===_n&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===SA||b.magFilter===Ca||b.magFilter===Bs||b.magFilter===ui||b.minFilter===SA||b.minFilter===Ca||b.minFilter===Bs||b.minFilter===ui)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,Y[b.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,Y[b.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,Y[b.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,$[b.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,$[b.minFilter]),b.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,ae[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===nA||b.minFilter!==Bs&&b.minFilter!==ui||b.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||A.get(b).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),A.get(b).__currentAnisotropy=b.anisotropy}}}function Oe(I,b){let z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",v));const J=b.source;let ee=h.get(J);ee===void 0&&(ee={},h.set(J,ee));const X=P(b);if(X!==I.__cacheKey){ee[X]===void 0&&(ee[X]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,z=!0),ee[X].usedTimes++;const Ee=ee[I.__cacheKey];Ee!==void 0&&(ee[I.__cacheKey].usedTimes--,Ee.usedTimes===0&&_(b)),I.__cacheKey=X,I.__webglTexture=ee[X].texture}return z}function Ye(I,b,z){return Math.floor(Math.floor(I/z)/b)}function Ke(I,b,z,J){const X=I.updateRanges;if(X.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,z,J,b.data);else{X.sort((te,re)=>te.start-re.start);let Ee=0;for(let te=1;te<X.length;te++){const re=X[Ee],Re=X[te],Te=re.start+re.count,ge=Ye(Re.start,b.width,4),Pe=Ye(re.start,b.width,4);Re.start<=Te+1&&ge===Pe&&Ye(Re.start+Re.count-1,b.width,4)===ge?re.count=Math.max(re.count,Re.start+Re.count-re.start):(++Ee,X[Ee]=Re)}X.length=Ee+1;const ce=n.getParameter(n.UNPACK_ROW_LENGTH),Ue=n.getParameter(n.UNPACK_SKIP_PIXELS),ye=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let te=0,re=X.length;te<re;te++){const Re=X[te],Te=Math.floor(Re.start/4),ge=Math.ceil(Re.count/4),Pe=Te%b.width,H=Math.floor(Te/b.width),he=ge,se=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Pe),n.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,Pe,H,he,se,z,J,b.data)}I.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ce),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ue),n.pixelStorei(n.UNPACK_SKIP_ROWS,ye)}}function q(I,b,z){let J=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(J=n.TEXTURE_3D);const ee=Oe(I,b),X=b.source;t.bindTexture(J,I.__webglTexture,n.TEXTURE0+z);const Ee=A.get(X);if(X.version!==Ee.__version||ee===!0){t.activeTexture(n.TEXTURE0+z);const ce=At.getPrimaries(At.workingColorSpace),Ue=b.colorSpace===Nn?null:At.getPrimaries(b.colorSpace),ye=b.colorSpace===Nn||ce===Ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let te=m(b.image,!1,i.maxTextureSize);te=Se(b,te);const re=r.convert(b.format,b.colorSpace),Re=r.convert(b.type);let Te=B(b.internalFormat,re,Re,b.colorSpace,b.isVideoTexture);ne(J,b);let ge;const Pe=b.mipmaps,H=b.isVideoTexture!==!0,he=Ee.__version===void 0||ee===!0,se=X.dataReady,oe=y(b,te);if(b.isDepthTexture)Te=w(b.format===ts,b.type),he&&(H?t.texStorage2D(n.TEXTURE_2D,1,Te,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Te,te.width,te.height,0,re,Re,null));else if(b.isDataTexture)if(Pe.length>0){H&&he&&t.texStorage2D(n.TEXTURE_2D,oe,Te,Pe[0].width,Pe[0].height);for(let Ae=0,j=Pe.length;Ae<j;Ae++)ge=Pe[Ae],H?se&&t.texSubImage2D(n.TEXTURE_2D,Ae,0,0,ge.width,ge.height,re,Re,ge.data):t.texImage2D(n.TEXTURE_2D,Ae,Te,ge.width,ge.height,0,re,Re,ge.data);b.generateMipmaps=!1}else H?(he&&t.texStorage2D(n.TEXTURE_2D,oe,Te,te.width,te.height),se&&Ke(b,te,re,Re)):t.texImage2D(n.TEXTURE_2D,0,Te,te.width,te.height,0,re,Re,te.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){H&&he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,Te,Pe[0].width,Pe[0].height,te.depth);for(let Ae=0,j=Pe.length;Ae<j;Ae++)if(ge=Pe[Ae],b.format!==HA)if(re!==null)if(H){if(se)if(b.layerUpdates.size>0){const we=vu(ge.width,ge.height,b.format,b.type);for(const Ve of b.layerUpdates){const dt=ge.data.subarray(Ve*we/ge.data.BYTES_PER_ELEMENT,(Ve+1)*we/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ae,0,0,Ve,ge.width,ge.height,1,re,dt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ae,0,0,0,ge.width,ge.height,te.depth,re,ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Ae,Te,ge.width,ge.height,te.depth,0,ge.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Ae,0,0,0,ge.width,ge.height,te.depth,re,Re,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Ae,Te,ge.width,ge.height,te.depth,0,re,Re,ge.data)}else{H&&he&&t.texStorage2D(n.TEXTURE_2D,oe,Te,Pe[0].width,Pe[0].height);for(let Ae=0,j=Pe.length;Ae<j;Ae++)ge=Pe[Ae],b.format!==HA?re!==null?H?se&&t.compressedTexSubImage2D(n.TEXTURE_2D,Ae,0,0,ge.width,ge.height,re,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,Ae,Te,ge.width,ge.height,0,ge.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?se&&t.texSubImage2D(n.TEXTURE_2D,Ae,0,0,ge.width,ge.height,re,Re,ge.data):t.texImage2D(n.TEXTURE_2D,Ae,Te,ge.width,ge.height,0,re,Re,ge.data)}else if(b.isDataArrayTexture)if(H){if(he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,Te,te.width,te.height,te.depth),se)if(b.layerUpdates.size>0){const Ae=vu(te.width,te.height,b.format,b.type);for(const j of b.layerUpdates){const we=te.data.subarray(j*Ae/te.data.BYTES_PER_ELEMENT,(j+1)*Ae/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,te.width,te.height,1,re,Re,we)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,re,Re,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,te.width,te.height,te.depth,0,re,Re,te.data);else if(b.isData3DTexture)H?(he&&t.texStorage3D(n.TEXTURE_3D,oe,Te,te.width,te.height,te.depth),se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,re,Re,te.data)):t.texImage3D(n.TEXTURE_3D,0,Te,te.width,te.height,te.depth,0,re,Re,te.data);else if(b.isFramebufferTexture){if(he)if(H)t.texStorage2D(n.TEXTURE_2D,oe,Te,te.width,te.height);else{let Ae=te.width,j=te.height;for(let we=0;we<oe;we++)t.texImage2D(n.TEXTURE_2D,we,Te,Ae,j,0,re,Re,null),Ae>>=1,j>>=1}}else if(Pe.length>0){if(H&&he){const Ae=Ge(Pe[0]);t.texStorage2D(n.TEXTURE_2D,oe,Te,Ae.width,Ae.height)}for(let Ae=0,j=Pe.length;Ae<j;Ae++)ge=Pe[Ae],H?se&&t.texSubImage2D(n.TEXTURE_2D,Ae,0,0,re,Re,ge):t.texImage2D(n.TEXTURE_2D,Ae,Te,re,Re,ge);b.generateMipmaps=!1}else if(H){if(he){const Ae=Ge(te);t.texStorage2D(n.TEXTURE_2D,oe,Te,Ae.width,Ae.height)}se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re,Re,te)}else t.texImage2D(n.TEXTURE_2D,0,Te,re,Re,te);g(b)&&d(J),Ee.__version=X.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function Z(I,b,z){if(b.image.length!==6)return;const J=Oe(I,b),ee=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+z);const X=A.get(ee);if(ee.version!==X.__version||J===!0){t.activeTexture(n.TEXTURE0+z);const Ee=At.getPrimaries(At.workingColorSpace),ce=b.colorSpace===Nn?null:At.getPrimaries(b.colorSpace),Ue=b.colorSpace===Nn||Ee===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ye=b.isCompressedTexture||b.image[0].isCompressedTexture,te=b.image[0]&&b.image[0].isDataTexture,re=[];for(let j=0;j<6;j++)!ye&&!te?re[j]=m(b.image[j],!0,i.maxCubemapSize):re[j]=te?b.image[j].image:b.image[j],re[j]=Se(b,re[j]);const Re=re[0],Te=r.convert(b.format,b.colorSpace),ge=r.convert(b.type),Pe=B(b.internalFormat,Te,ge,b.colorSpace),H=b.isVideoTexture!==!0,he=X.__version===void 0||J===!0,se=ee.dataReady;let oe=y(b,Re);ne(n.TEXTURE_CUBE_MAP,b);let Ae;if(ye){H&&he&&t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,Pe,Re.width,Re.height);for(let j=0;j<6;j++){Ae=re[j].mipmaps;for(let we=0;we<Ae.length;we++){const Ve=Ae[we];b.format!==HA?Te!==null?H?se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,we,0,0,Ve.width,Ve.height,Te,Ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,we,Pe,Ve.width,Ve.height,0,Ve.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,we,0,0,Ve.width,Ve.height,Te,ge,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,we,Pe,Ve.width,Ve.height,0,Te,ge,Ve.data)}}}else{if(Ae=b.mipmaps,H&&he){Ae.length>0&&oe++;const j=Ge(re[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,Pe,j.width,j.height)}for(let j=0;j<6;j++)if(te){H?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,re[j].width,re[j].height,Te,ge,re[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Pe,re[j].width,re[j].height,0,Te,ge,re[j].data);for(let we=0;we<Ae.length;we++){const dt=Ae[we].image[j].image;H?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,we+1,0,0,dt.width,dt.height,Te,ge,dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,we+1,Pe,dt.width,dt.height,0,Te,ge,dt.data)}}else{H?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Te,ge,re[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Pe,Te,ge,re[j]);for(let we=0;we<Ae.length;we++){const Ve=Ae[we];H?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,we+1,0,0,Te,ge,Ve.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,we+1,Pe,Te,ge,Ve.image[j])}}}g(b)&&d(n.TEXTURE_CUBE_MAP),X.__version=ee.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function Be(I,b,z,J,ee,X){const Ee=r.convert(z.format,z.colorSpace),ce=r.convert(z.type),Ue=B(z.internalFormat,Ee,ce,z.colorSpace),ye=A.get(b),te=A.get(z);if(te.__renderTarget=b,!ye.__hasExternalTextures){const re=Math.max(1,b.width>>X),Re=Math.max(1,b.height>>X);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,X,Ue,re,Re,b.depth,0,Ee,ce,null):t.texImage2D(ee,X,Ue,re,Re,0,Ee,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Ce(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ee,te.__webglTexture,0,ut(b)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,ee,te.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(I,b,z){if(n.bindRenderbuffer(n.RENDERBUFFER,I),b.depthBuffer){const J=b.depthTexture,ee=J&&J.isDepthTexture?J.type:null,X=w(b.stencilBuffer,ee),Ee=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=ut(b);Ce(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,X,b.width,b.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,X,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,X,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,I)}else{const J=b.textures;for(let ee=0;ee<J.length;ee++){const X=J[ee],Ee=r.convert(X.format,X.colorSpace),ce=r.convert(X.type),Ue=B(X.internalFormat,Ee,ce,X.colorSpace),ye=ut(b);z&&Ce(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,Ue,b.width,b.height):Ce(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,Ue,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Ue,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(I,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=A.get(b.depthTexture);J.__renderTarget=b,(!J.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),D(b.depthTexture,0);const ee=J.__webglTexture,X=ut(b);if(b.depthTexture.format===es)Ce(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(b.depthTexture.format===ts)Ce(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Je(I){const b=A.get(I),z=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){const J=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),J){const ee=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,J.removeEventListener("dispose",ee)};J.addEventListener("dispose",ee),b.__depthDisposeCallback=ee}b.__boundDepthTexture=J}if(I.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const J=I.texture.mipmaps;J&&J.length>0?be(b.__webglFramebuffer[0],I):be(b.__webglFramebuffer,I)}else if(z){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]===void 0)b.__webglDepthbuffer[J]=n.createRenderbuffer(),ke(b.__webglDepthbuffer[J],I,!1);else{const ee=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=b.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,X)}}else{const J=I.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),ke(b.__webglDepthbuffer,I,!1);else{const ee=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,X)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Vt(I,b,z){const J=A.get(I);b!==void 0&&Be(J.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Je(I)}function qe(I){const b=I.texture,z=A.get(I),J=A.get(b);I.addEventListener("dispose",E);const ee=I.textures,X=I.isWebGLCubeRenderTarget===!0,Ee=ee.length>1;if(Ee||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=b.version,s.memory.textures++),X){z.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[ce]=[];for(let Ue=0;Ue<b.mipmaps.length;Ue++)z.__webglFramebuffer[ce][Ue]=n.createFramebuffer()}else z.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let ce=0;ce<b.mipmaps.length;ce++)z.__webglFramebuffer[ce]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let ce=0,Ue=ee.length;ce<Ue;ce++){const ye=A.get(ee[ce]);ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture(),s.memory.textures++)}if(I.samples>0&&Ce(I)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ce=0;ce<ee.length;ce++){const Ue=ee[ce];z.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[ce]);const ye=r.convert(Ue.format,Ue.colorSpace),te=r.convert(Ue.type),re=B(Ue.internalFormat,ye,te,Ue.colorSpace,I.isXRRenderTarget===!0),Re=ut(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,re,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,z.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),ke(z.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),ne(n.TEXTURE_CUBE_MAP,b);for(let ce=0;ce<6;ce++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ue=0;Ue<b.mipmaps.length;Ue++)Be(z.__webglFramebuffer[ce][Ue],I,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue);else Be(z.__webglFramebuffer[ce],I,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);g(b)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ce=0,Ue=ee.length;ce<Ue;ce++){const ye=ee[ce],te=A.get(ye);let re=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(re=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,te.__webglTexture),ne(re,ye),Be(z.__webglFramebuffer,I,ye,n.COLOR_ATTACHMENT0+ce,re,0),g(ye)&&d(re)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ce=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,J.__webglTexture),ne(ce,b),b.mipmaps&&b.mipmaps.length>0)for(let Ue=0;Ue<b.mipmaps.length;Ue++)Be(z.__webglFramebuffer[Ue],I,b,n.COLOR_ATTACHMENT0,ce,Ue);else Be(z.__webglFramebuffer,I,b,n.COLOR_ATTACHMENT0,ce,0);g(b)&&d(ce),t.unbindTexture()}I.depthBuffer&&Je(I)}function gt(I){const b=I.textures;for(let z=0,J=b.length;z<J;z++){const ee=b[z];if(g(ee)){const X=x(I),Ee=A.get(ee).__webglTexture;t.bindTexture(X,Ee),d(X),t.unbindTexture()}}}const L=[],Ze=[];function je(I){if(I.samples>0){if(Ce(I)===!1){const b=I.textures,z=I.width,J=I.height;let ee=n.COLOR_BUFFER_BIT;const X=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=A.get(I),ce=b.length>1;if(ce)for(let ye=0;ye<b.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Ue=I.texture.mipmaps;Ue&&Ue.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ye=0;ye<b.length;ye++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[ye]);const te=A.get(b[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,z,J,0,0,z,J,ee,n.NEAREST),a===!0&&(L.length=0,Ze.length=0,L.push(n.COLOR_ATTACHMENT0+ye),I.depthBuffer&&I.resolveDepthBuffer===!1&&(L.push(X),Ze.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ze)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,L))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let ye=0;ye<b.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[ye]);const te=A.get(b[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&a){const b=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function ut(I){return Math.min(i.maxSamples,I.samples)}function Ce(I){const b=A.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Bt(I){const b=s.render.frame;c.get(I)!==b&&(c.set(I,b),I.update())}function Se(I,b){const z=I.colorSpace,J=I.format,ee=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||z!==ir&&z!==Nn&&(At.getTransfer(z)===at?(J!==HA||ee!==jA)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):yt("WebGLTextures: Unsupported texture color space:",z)),b}function Ge(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=R,this.setTexture2D=D,this.setTexture2DArray=Q,this.setTexture3D=k,this.setTextureCube=O,this.rebindTextures=Vt,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=Ce}function v_(n,e){function t(A,i=Nn){let r;const s=At.getTransfer(i);if(A===jA)return n.UNSIGNED_BYTE;if(A===Jc)return n.UNSIGNED_SHORT_4_4_4_4;if(A===Zc)return n.UNSIGNED_SHORT_5_5_5_1;if(A===Ed)return n.UNSIGNED_INT_5_9_9_9_REV;if(A===bd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(A===Cd)return n.BYTE;if(A===yd)return n.SHORT;if(A===jr)return n.UNSIGNED_SHORT;if(A===qc)return n.INT;if(A===mi)return n.UNSIGNED_INT;if(A===_n)return n.FLOAT;if(A===JA)return n.HALF_FLOAT;if(A===Md)return n.ALPHA;if(A===jc)return n.RGB;if(A===HA)return n.RGBA;if(A===es)return n.DEPTH_COMPONENT;if(A===ts)return n.DEPTH_STENCIL;if(A===Sd)return n.RED;if(A===$c)return n.RED_INTEGER;if(A===eh)return n.RG;if(A===th)return n.RG_INTEGER;if(A===Ah)return n.RGBA_INTEGER;if(A===wo||A===_o||A===Co||A===yo)if(s===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(A===wo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(A===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(A===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(A===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(A===wo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(A===_o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(A===Co)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(A===yo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(A===Kl||A===Wl||A===Xl||A===Yl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(A===Kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(A===Wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(A===Xl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(A===Yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(A===ql||A===Jl||A===Zl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(A===ql||A===Jl)return s===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(A===Zl)return s===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(A===jl||A===$l||A===ec||A===tc||A===Ac||A===nc||A===ic||A===rc||A===sc||A===oc||A===ac||A===lc||A===cc||A===hc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(A===jl)return s===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(A===$l)return s===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(A===ec)return s===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(A===tc)return s===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(A===Ac)return s===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(A===nc)return s===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(A===ic)return s===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(A===rc)return s===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(A===sc)return s===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(A===oc)return s===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(A===ac)return s===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(A===lc)return s===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(A===cc)return s===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(A===hc)return s===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(A===uc||A===fc||A===dc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(A===uc)return s===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(A===fc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(A===dc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(A===pc||A===gc||A===mc||A===xc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(A===pc)return r.COMPRESSED_RED_RGTC1_EXT;if(A===gc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(A===mc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(A===xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return A===$r?n.UNSIGNED_INT_24_8:n[A]!==void 0?n[A]:null}return{convert:t}}const w_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,__=`
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

}`;class C_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const A=new Gd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=A}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,A=new AA({vertexShader:w_,fragmentShader:__,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new iA(new os(20,20),A)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class y_ extends xi{constructor(e,t){super();const A=this;let i=null,r=1,s=null,o="local-floor",a=1,l=null,c=null,u=null,h=null,f=null,p=null;const m=typeof XRWebGLBinding<"u",g=new C_,d={},x=t.getContextAttributes();let B=null,w=null;const y=[],v=[],E=new ue;let U=null;const _=new BA;_.viewport=new Et;const C=new BA;C.viewport=new Et;const T=[_,C],R=new Om;let F=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=y[q];return Z===void 0&&(Z=new ka,y[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=y[q];return Z===void 0&&(Z=new ka,y[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=y[q];return Z===void 0&&(Z=new ka,y[q]=Z),Z.getHandSpace()};function D(q){const Z=v.indexOf(q.inputSource);if(Z===-1)return;const Be=y[Z];Be!==void 0&&(Be.update(q.inputSource,q.frame,l||s),Be.dispatchEvent({type:q.type,data:q.inputSource}))}function Q(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",Q),i.removeEventListener("inputsourceschange",k);for(let q=0;q<y.length;q++){const Z=v[q];Z!==null&&(v[q]=null,y[q].disconnect(Z))}F=null,P=null,g.reset();for(const q in d)delete d[q];e.setRenderTarget(B),f=null,h=null,u=null,i=null,w=null,Ke.stop(),A.isPresenting=!1,e.setPixelRatio(U),e.setSize(E.width,E.height,!1),A.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,A.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,A.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(B=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",Q),i.addEventListener("inputsourceschange",k),x.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(E),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let Be=null,ke=null,be=null;x.depth&&(be=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Be=x.stencil?ts:es,ke=x.stencil?$r:mi);const Je={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};u=this.getBinding(),h=u.createProjectionLayer(Je),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),w=new OA(h.textureWidth,h.textureHeight,{format:HA,type:jA,depthTexture:new Vd(h.textureWidth,h.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,Be),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Be={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Be),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new OA(f.framebufferWidth,f.framebufferHeight,{format:HA,type:jA,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(a),l=null,s=await i.requestReferenceSpace(o),Ke.setContext(i),Ke.start(),A.isPresenting=!0,A.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(q){for(let Z=0;Z<q.removed.length;Z++){const Be=q.removed[Z],ke=v.indexOf(Be);ke>=0&&(v[ke]=null,y[ke].disconnect(Be))}for(let Z=0;Z<q.added.length;Z++){const Be=q.added[Z];let ke=v.indexOf(Be);if(ke===-1){for(let Je=0;Je<y.length;Je++)if(Je>=v.length){v.push(Be),ke=Je;break}else if(v[Je]===null){v[Je]=Be,ke=Je;break}if(ke===-1)break}const be=y[ke];be&&be.connect(Be)}}const O=new N,Y=new N;function $(q,Z,Be){O.setFromMatrixPosition(Z.matrixWorld),Y.setFromMatrixPosition(Be.matrixWorld);const ke=O.distanceTo(Y),be=Z.projectionMatrix.elements,Je=Be.projectionMatrix.elements,Vt=be[14]/(be[10]-1),qe=be[14]/(be[10]+1),gt=(be[9]+1)/be[5],L=(be[9]-1)/be[5],Ze=(be[8]-1)/be[0],je=(Je[8]+1)/Je[0],ut=Vt*Ze,Ce=Vt*je,Bt=ke/(-Ze+je),Se=Bt*-Ze;if(Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Se),q.translateZ(Bt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),be[10]===-1)q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Ge=Vt+Bt,I=qe+Bt,b=ut-Se,z=Ce+(ke-Se),J=gt*qe/I*Ge,ee=L*qe/I*Ge;q.projectionMatrix.makePerspective(b,z,J,ee,Ge,I),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ae(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let Z=q.near,Be=q.far;g.texture!==null&&(g.depthNear>0&&(Z=g.depthNear),g.depthFar>0&&(Be=g.depthFar)),R.near=C.near=_.near=Z,R.far=C.far=_.far=Be,(F!==R.near||P!==R.far)&&(i.updateRenderState({depthNear:R.near,depthFar:R.far}),F=R.near,P=R.far),R.layers.mask=q.layers.mask|6,_.layers.mask=R.layers.mask&3,C.layers.mask=R.layers.mask&5;const ke=q.parent,be=R.cameras;ae(R,ke);for(let Je=0;Je<be.length;Je++)ae(be[Je],ke);be.length===2?$(R,_,C):R.projectionMatrix.copy(_.projectionMatrix),ne(q,R,ke)};function ne(q,Z,Be){Be===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(Be.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=rr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(h===null&&f===null))return a},this.setFoveation=function(q){a=q,h!==null&&(h.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(R)},this.getCameraTexture=function(q){return d[q]};let Oe=null;function Ye(q,Z){if(c=Z.getViewerPose(l||s),p=Z,c!==null){const Be=c.views;f!==null&&(e.setRenderTargetFramebuffer(w,f.framebuffer),e.setRenderTarget(w));let ke=!1;Be.length!==R.cameras.length&&(R.cameras.length=0,ke=!0);for(let qe=0;qe<Be.length;qe++){const gt=Be[qe];let L=null;if(f!==null)L=f.getViewport(gt);else{const je=u.getViewSubImage(h,gt);L=je.viewport,qe===0&&(e.setRenderTargetTextures(w,je.colorTexture,je.depthStencilTexture),e.setRenderTarget(w))}let Ze=T[qe];Ze===void 0&&(Ze=new BA,Ze.layers.enable(qe),Ze.viewport=new Et,T[qe]=Ze),Ze.matrix.fromArray(gt.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(gt.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(L.x,L.y,L.width,L.height),qe===0&&(R.matrix.copy(Ze.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ke===!0&&R.cameras.push(Ze)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&m){u=A.getBinding();const qe=u.getDepthInformation(Be[0]);qe&&qe.isValid&&qe.texture&&g.init(qe,i.renderState)}if(be&&be.includes("camera-access")&&m){e.state.unbindTexture(),u=A.getBinding();for(let qe=0;qe<Be.length;qe++){const gt=Be[qe].camera;if(gt){let L=d[gt];L||(L=new Gd,d[gt]=L);const Ze=u.getCameraImage(gt);L.sourceTexture=Ze}}}}for(let Be=0;Be<y.length;Be++){const ke=v[Be],be=y[Be];ke!==null&&be!==void 0&&be.update(ke,Z,l||s)}Oe&&Oe(q,Z),Z.detectedPlanes&&A.dispatchEvent({type:"planesdetected",data:Z}),p=null}const Ke=new Yd;Ke.setAnimationLoop(Ye),this.setAnimationLoop=function(q){Oe=q},this.dispose=function(){}}}const ri=new $A,E_=new xt;function b_(n,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function A(g,d){d.color.getRGB(g.fogColor.value,Ld(n)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function i(g,d,x,B,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(g,d):d.isMeshToonMaterial?(r(g,d),u(g,d)):d.isMeshPhongMaterial?(r(g,d),c(g,d)):d.isMeshStandardMaterial?(r(g,d),h(g,d),d.isMeshPhysicalMaterial&&f(g,d,w)):d.isMeshMatcapMaterial?(r(g,d),p(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),m(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(s(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?a(g,d,x,B):d.isSpriteMaterial?l(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===hA&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===hA&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const x=e.get(d),B=x.envMap,w=x.envMapRotation;B&&(g.envMap.value=B,ri.copy(w),ri.x*=-1,ri.y*=-1,ri.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),g.envMapRotation.value.setFromMatrix4(E_.makeRotationFromEuler(ri)),g.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function s(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function a(g,d,x,B){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*x,g.scale.value=B*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function l(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function u(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function f(g,d,x){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===hA&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,d){d.matcap&&(g.matcap.value=d.matcap)}function m(g,d){const x=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:A,refreshMaterialUniforms:i}}function M_(n,e,t,A){let i={},r={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function a(x,B){const w=B.program;A.uniformBlockBinding(x,w)}function l(x,B){let w=i[x.id];w===void 0&&(p(x),w=c(x),i[x.id]=w,x.addEventListener("dispose",g));const y=B.program;A.updateUBOMapping(x,y);const v=e.render.frame;r[x.id]!==v&&(h(x),r[x.id]=v)}function c(x){const B=u();x.__bindingPointIndex=B;const w=n.createBuffer(),y=x.__size,v=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,y,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,B,w),w}function u(){for(let x=0;x<o;x++)if(s.indexOf(x)===-1)return s.push(x),x;return yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const B=i[x.id],w=x.uniforms,y=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,B);for(let v=0,E=w.length;v<E;v++){const U=Array.isArray(w[v])?w[v]:[w[v]];for(let _=0,C=U.length;_<C;_++){const T=U[_];if(f(T,v,_,y)===!0){const R=T.__offset,F=Array.isArray(T.value)?T.value:[T.value];let P=0;for(let D=0;D<F.length;D++){const Q=F[D],k=m(Q);typeof Q=="number"||typeof Q=="boolean"?(T.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,R+P,T.__data)):Q.isMatrix3?(T.__data[0]=Q.elements[0],T.__data[1]=Q.elements[1],T.__data[2]=Q.elements[2],T.__data[3]=0,T.__data[4]=Q.elements[3],T.__data[5]=Q.elements[4],T.__data[6]=Q.elements[5],T.__data[7]=0,T.__data[8]=Q.elements[6],T.__data[9]=Q.elements[7],T.__data[10]=Q.elements[8],T.__data[11]=0):(Q.toArray(T.__data,P),P+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,R,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,B,w,y){const v=x.value,E=B+"_"+w;if(y[E]===void 0)return typeof v=="number"||typeof v=="boolean"?y[E]=v:y[E]=v.clone(),!0;{const U=y[E];if(typeof v=="number"||typeof v=="boolean"){if(U!==v)return y[E]=v,!0}else if(U.equals(v)===!1)return U.copy(v),!0}return!1}function p(x){const B=x.uniforms;let w=0;const y=16;for(let E=0,U=B.length;E<U;E++){const _=Array.isArray(B[E])?B[E]:[B[E]];for(let C=0,T=_.length;C<T;C++){const R=_[C],F=Array.isArray(R.value)?R.value:[R.value];for(let P=0,D=F.length;P<D;P++){const Q=F[P],k=m(Q),O=w%y,Y=O%k.boundary,$=O+Y;w+=Y,$!==0&&y-$<k.storage&&(w+=y-$),R.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=w,w+=k.storage}}}const v=w%y;return v>0&&(w+=y-v),x.__size=w,x.__cache={},this}function m(x){const B={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(B.boundary=4,B.storage=4):x.isVector2?(B.boundary=8,B.storage=8):x.isVector3||x.isColor?(B.boundary=16,B.storage=12):x.isVector4?(B.boundary=16,B.storage=16):x.isMatrix3?(B.boundary=48,B.storage=48):x.isMatrix4?(B.boundary=64,B.storage=64):x.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):De("WebGLRenderer: Unsupported uniform value type.",x),B}function g(x){const B=x.target;B.removeEventListener("dispose",g);const w=s.indexOf(B.__bindingPointIndex);s.splice(w,1),n.deleteBuffer(i[B.id]),delete i[B.id],delete r[B.id]}function d(){for(const x in i)n.deleteBuffer(i[x]);s=[],i={},r={}}return{bind:a,update:l,dispose:d}}const S_=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let hn=null;function U_(){return hn===null&&(hn=new Hd(S_,32,32,eh,JA),hn.minFilter=SA,hn.magFilter=SA,hn.wrapS=wn,hn.wrapT=wn,hn.generateMipmaps=!1,hn.needsUpdate=!0),hn}class F_{constructor(e={}){const{canvas:t=Cg(),context:A=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(A!==null){if(typeof WebGLRenderingContext<"u"&&A instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=A.getContextAttributes().alpha}else f=s;const p=new Set([Ah,th,$c]),m=new Set([jA,mi,jr,$r,Jc,Zc]),g=new Uint32Array(4),d=new Int32Array(4);let x=null,B=null;const w=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let E=!1;this._outputColorSpace=zt;let U=0,_=0,C=null,T=-1,R=null;const F=new Et,P=new Et;let D=null;const Q=new Ie(0);let k=0,O=t.width,Y=t.height,$=1,ae=null,ne=null;const Oe=new Et(0,0,O,Y),Ye=new Et(0,0,O,Y);let Ke=!1;const q=new ah;let Z=!1,Be=!1;const ke=new xt,be=new N,Je=new Et,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function gt(){return C===null?$:1}let L=A;function Ze(S,V){return t.getContext(S,V)}try{const S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yc}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",j,!1),t.addEventListener("webglcontextcreationerror",we,!1),L===null){const V="webgl2";if(L=Ze(V,S),L===null)throw Ze(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw S("WebGLRenderer: "+S.message),S}let je,ut,Ce,Bt,Se,Ge,I,b,z,J,ee,X,Ee,ce,Ue,ye,te,re,Re,Te,ge,Pe,H,he;function se(){je=new Hv(L),je.init(),Pe=new v_(L,je),ut=new Uv(L,je,e,Pe),Ce=new x_(L,je),ut.reversedDepthBuffer&&h&&Ce.buffers.depth.setReversed(!0),Bt=new Vv(L),Se=new r_,Ge=new B_(L,je,Ce,Se,ut,Pe,Bt),I=new Tv(v),b=new Pv(v),z=new Km(L),H=new Mv(L,z),J=new Nv(L,z,Bt,H),ee=new zv(L,J,z,Bt),Re=new Gv(L,ut,Ge),ye=new Fv(Se),X=new i_(v,I,b,je,ut,H,ye),Ee=new b_(v,Se),ce=new o_,Ue=new f_(je),re=new bv(v,I,b,Ce,ee,f,a),te=new g_(v,ee,ut),he=new M_(L,Bt,ut,Ce),Te=new Sv(L,je,Bt),ge=new Ov(L,je,Bt),Bt.programs=X.programs,v.capabilities=ut,v.extensions=je,v.properties=Se,v.renderLists=ce,v.shadowMap=te,v.state=Ce,v.info=Bt}se();const oe=new y_(v,L);this.xr=oe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const S=je.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=je.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(S){S!==void 0&&($=S,this.setSize(O,Y,!1))},this.getSize=function(S){return S.set(O,Y)},this.setSize=function(S,V,K=!0){if(oe.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}O=S,Y=V,t.width=Math.floor(S*$),t.height=Math.floor(V*$),K===!0&&(t.style.width=S+"px",t.style.height=V+"px"),this.setViewport(0,0,S,V)},this.getDrawingBufferSize=function(S){return S.set(O*$,Y*$).floor()},this.setDrawingBufferSize=function(S,V,K){O=S,Y=V,$=K,t.width=Math.floor(S*K),t.height=Math.floor(V*K),this.setViewport(0,0,S,V)},this.getCurrentViewport=function(S){return S.copy(F)},this.getViewport=function(S){return S.copy(Oe)},this.setViewport=function(S,V,K,W){S.isVector4?Oe.set(S.x,S.y,S.z,S.w):Oe.set(S,V,K,W),Ce.viewport(F.copy(Oe).multiplyScalar($).round())},this.getScissor=function(S){return S.copy(Ye)},this.setScissor=function(S,V,K,W){S.isVector4?Ye.set(S.x,S.y,S.z,S.w):Ye.set(S,V,K,W),Ce.scissor(P.copy(Ye).multiplyScalar($).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(S){Ce.setScissorTest(Ke=S)},this.setOpaqueSort=function(S){ae=S},this.setTransparentSort=function(S){ne=S},this.getClearColor=function(S){return S.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(S=!0,V=!0,K=!0){let W=0;if(S){let G=!1;if(C!==null){const ie=C.texture.format;G=p.has(ie)}if(G){const ie=C.texture.type,de=m.has(ie),_e=re.getClearColor(),me=re.getClearAlpha(),Qe=_e.r,Le=_e.g,Me=_e.b;de?(g[0]=Qe,g[1]=Le,g[2]=Me,g[3]=me,L.clearBufferuiv(L.COLOR,0,g)):(d[0]=Qe,d[1]=Le,d[2]=Me,d[3]=me,L.clearBufferiv(L.COLOR,0,d))}else W|=L.COLOR_BUFFER_BIT}V&&(W|=L.DEPTH_BUFFER_BIT),K&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",we,!1),re.dispose(),ce.dispose(),Ue.dispose(),Se.dispose(),I.dispose(),b.dispose(),ee.dispose(),H.dispose(),he.dispose(),X.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Th),oe.removeEventListener("sessionend",Ih),jn.stop()};function Ae(S){S.preventDefault(),Kh("WebGLRenderer: Context Lost."),E=!0}function j(){Kh("WebGLRenderer: Context Restored."),E=!1;const S=Bt.autoReset,V=te.enabled,K=te.autoUpdate,W=te.needsUpdate,G=te.type;se(),Bt.autoReset=S,te.enabled=V,te.autoUpdate=K,te.needsUpdate=W,te.type=G}function we(S){yt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ve(S){const V=S.target;V.removeEventListener("dispose",Ve),dt(V)}function dt(S){st(S),Se.remove(S)}function st(S){const V=Se.get(S).programs;V!==void 0&&(V.forEach(function(K){X.releaseProgram(K)}),S.isShaderMaterial&&X.releaseShaderCache(S))}this.renderBufferDirect=function(S,V,K,W,G,ie){V===null&&(V=Vt);const de=G.isMesh&&G.matrixWorld.determinant()<0,_e=I0(S,V,K,W,G);Ce.setMaterial(W,de);let me=K.index,Qe=1;if(W.wireframe===!0){if(me=J.getWireframeAttribute(K),me===void 0)return;Qe=2}const Le=K.drawRange,Me=K.attributes.position;let $e=Le.start*Qe,ot=(Le.start+Le.count)*Qe;ie!==null&&($e=Math.max($e,ie.start*Qe),ot=Math.min(ot,(ie.start+ie.count)*Qe)),me!==null?($e=Math.max($e,0),ot=Math.min(ot,me.count)):Me!=null&&($e=Math.max($e,0),ot=Math.min(ot,Me.count));const _t=ot-$e;if(_t<0||_t===1/0)return;H.setup(G,W,_e,K,me);let Ct,ht=Te;if(me!==null&&(Ct=z.get(me),ht=ge,ht.setIndex(Ct)),G.isMesh)W.wireframe===!0?(Ce.setLineWidth(W.wireframeLinewidth*gt()),ht.setMode(L.LINES)):ht.setMode(L.TRIANGLES);else if(G.isLine){let Fe=W.linewidth;Fe===void 0&&(Fe=1),Ce.setLineWidth(Fe*gt()),G.isLineSegments?ht.setMode(L.LINES):G.isLineLoop?ht.setMode(L.LINE_LOOP):ht.setMode(L.LINE_STRIP)}else G.isPoints?ht.setMode(L.POINTS):G.isSprite&&ht.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)As("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))ht.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Fe=G._multiDrawStarts,vt=G._multiDrawCounts,nt=G._multiDrawCount,dA=me?z.get(me).bytesPerElement:1,vi=Se.get(W).currentProgram.getUniforms();for(let pA=0;pA<nt;pA++)vi.setValue(L,"_gl_DrawID",pA),ht.render(Fe[pA]/dA,vt[pA])}else if(G.isInstancedMesh)ht.renderInstances($e,_t,G.count);else if(K.isInstancedBufferGeometry){const Fe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,vt=Math.min(K.instanceCount,Fe);ht.renderInstances($e,_t,vt)}else ht.render($e,_t)};function GA(S,V,K){S.transparent===!0&&S.side===vn&&S.forceSinglePass===!1?(S.side=hA,S.needsUpdate=!0,xs(S,V,K),S.side=Xn,S.needsUpdate=!0,xs(S,V,K),S.side=vn):xs(S,V,K)}this.compile=function(S,V,K=null){K===null&&(K=S),B=Ue.get(K),B.init(V),y.push(B),K.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(B.pushLight(G),G.castShadow&&B.pushShadow(G))}),S!==K&&S.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(B.pushLight(G),G.castShadow&&B.pushShadow(G))}),B.setupLights();const W=new Set;return S.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ie=G.material;if(ie)if(Array.isArray(ie))for(let de=0;de<ie.length;de++){const _e=ie[de];GA(_e,K,G),W.add(_e)}else GA(ie,K,G),W.add(ie)}),B=y.pop(),W},this.compileAsync=function(S,V,K=null){const W=this.compile(S,V,K);return new Promise(G=>{function ie(){if(W.forEach(function(de){Se.get(de).currentProgram.isReady()&&W.delete(de)}),W.size===0){G(S);return}setTimeout(ie,10)}je.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let IA=null;function T0(S){IA&&IA(S)}function Th(){jn.stop()}function Ih(){jn.start()}const jn=new Yd;jn.setAnimationLoop(T0),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(S){IA=S,oe.setAnimationLoop(S),S===null?jn.stop():jn.start()},oe.addEventListener("sessionstart",Th),oe.addEventListener("sessionend",Ih),this.render=function(S,V){if(V!==void 0&&V.isCamera!==!0){yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(V),V=oe.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,V,C),B=Ue.get(S,y.length),B.init(V),y.push(B),ke.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),q.setFromProjectionMatrix(ke,YA,V.reversedDepth),Be=this.localClippingEnabled,Z=ye.init(this.clippingPlanes,Be),x=ce.get(S,w.length),x.init(),w.push(x),oe.enabled===!0&&oe.isPresenting===!0){const ie=v.xr.getDepthSensingMesh();ie!==null&&wa(ie,V,-1/0,v.sortObjects)}wa(S,V,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(ae,ne),qe=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,qe&&re.addToRenderList(x,S),this.info.render.frame++,Z===!0&&ye.beginShadows();const K=B.state.shadowsArray;te.render(K,S,V),Z===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=x.opaque,G=x.transmissive;if(B.setupLights(),V.isArrayCamera){const ie=V.cameras;if(G.length>0)for(let de=0,_e=ie.length;de<_e;de++){const me=ie[de];Rh(W,G,S,me)}qe&&re.render(S);for(let de=0,_e=ie.length;de<_e;de++){const me=ie[de];Qh(x,S,me,me.viewport)}}else G.length>0&&Rh(W,G,S,V),qe&&re.render(S),Qh(x,S,V);C!==null&&_===0&&(Ge.updateMultisampleRenderTarget(C),Ge.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(v,S,V),H.resetDefaultState(),T=-1,R=null,y.pop(),y.length>0?(B=y[y.length-1],Z===!0&&ye.setGlobalState(v.clippingPlanes,B.state.camera)):B=null,w.pop(),w.length>0?x=w[w.length-1]:x=null};function wa(S,V,K,W){if(S.visible===!1)return;if(S.layers.test(V.layers)){if(S.isGroup)K=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(V);else if(S.isLight)B.pushLight(S),S.castShadow&&B.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||q.intersectsSprite(S)){W&&Je.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ke);const de=ee.update(S),_e=S.material;_e.visible&&x.push(S,de,_e,K,Je.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||q.intersectsObject(S))){const de=ee.update(S),_e=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Je.copy(S.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Je.copy(de.boundingSphere.center)),Je.applyMatrix4(S.matrixWorld).applyMatrix4(ke)),Array.isArray(_e)){const me=de.groups;for(let Qe=0,Le=me.length;Qe<Le;Qe++){const Me=me[Qe],$e=_e[Me.materialIndex];$e&&$e.visible&&x.push(S,de,$e,K,Je.z,Me)}}else _e.visible&&x.push(S,de,_e,K,Je.z,null)}}const ie=S.children;for(let de=0,_e=ie.length;de<_e;de++)wa(ie[de],V,K,W)}function Qh(S,V,K,W){const{opaque:G,transmissive:ie,transparent:de}=S;B.setupLightsView(K),Z===!0&&ye.setGlobalState(v.clippingPlanes,K),W&&Ce.viewport(F.copy(W)),G.length>0&&ms(G,V,K),ie.length>0&&ms(ie,V,K),de.length>0&&ms(de,V,K),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Rh(S,V,K,W){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;B.state.transmissionRenderTarget[W.id]===void 0&&(B.state.transmissionRenderTarget[W.id]=new OA(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?JA:jA,minFilter:ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const ie=B.state.transmissionRenderTarget[W.id],de=W.viewport||F;ie.setSize(de.z*v.transmissionResolutionScale,de.w*v.transmissionResolutionScale);const _e=v.getRenderTarget(),me=v.getActiveCubeFace(),Qe=v.getActiveMipmapLevel();v.setRenderTarget(ie),v.getClearColor(Q),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),qe&&re.render(K);const Le=v.toneMapping;v.toneMapping=kn;const Me=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),B.setupLightsView(W),Z===!0&&ye.setGlobalState(v.clippingPlanes,W),ms(S,K,W),Ge.updateMultisampleRenderTarget(ie),Ge.updateRenderTargetMipmap(ie),je.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let ot=0,_t=V.length;ot<_t;ot++){const Ct=V[ot],{object:ht,geometry:Fe,material:vt,group:nt}=Ct;if(vt.side===vn&&ht.layers.test(W.layers)){const dA=vt.side;vt.side=hA,vt.needsUpdate=!0,Lh(ht,K,W,Fe,vt,nt),vt.side=dA,vt.needsUpdate=!0,$e=!0}}$e===!0&&(Ge.updateMultisampleRenderTarget(ie),Ge.updateRenderTargetMipmap(ie))}v.setRenderTarget(_e,me,Qe),v.setClearColor(Q,k),Me!==void 0&&(W.viewport=Me),v.toneMapping=Le}function ms(S,V,K){const W=V.isScene===!0?V.overrideMaterial:null;for(let G=0,ie=S.length;G<ie;G++){const de=S[G],{object:_e,geometry:me,group:Qe}=de;let Le=de.material;Le.allowOverride===!0&&W!==null&&(Le=W),_e.layers.test(K.layers)&&Lh(_e,V,K,me,Le,Qe)}}function Lh(S,V,K,W,G,ie){S.onBeforeRender(v,V,K,W,G,ie),S.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(v,V,K,W,S,ie),G.transparent===!0&&G.side===vn&&G.forceSinglePass===!1?(G.side=hA,G.needsUpdate=!0,v.renderBufferDirect(K,V,W,G,S,ie),G.side=Xn,G.needsUpdate=!0,v.renderBufferDirect(K,V,W,G,S,ie),G.side=vn):v.renderBufferDirect(K,V,W,G,S,ie),S.onAfterRender(v,V,K,W,G,ie)}function xs(S,V,K){V.isScene!==!0&&(V=Vt);const W=Se.get(S),G=B.state.lights,ie=B.state.shadowsArray,de=G.state.version,_e=X.getParameters(S,G.state,ie,V,K),me=X.getProgramCacheKey(_e);let Qe=W.programs;W.environment=S.isMeshStandardMaterial?V.environment:null,W.fog=V.fog,W.envMap=(S.isMeshStandardMaterial?b:I).get(S.envMap||W.environment),W.envMapRotation=W.environment!==null&&S.envMap===null?V.environmentRotation:S.envMapRotation,Qe===void 0&&(S.addEventListener("dispose",Ve),Qe=new Map,W.programs=Qe);let Le=Qe.get(me);if(Le!==void 0){if(W.currentProgram===Le&&W.lightsStateVersion===de)return Ph(S,_e),Le}else _e.uniforms=X.getUniforms(S),S.onBeforeCompile(_e,v),Le=X.acquireProgram(_e,me),Qe.set(me,Le),W.uniforms=_e.uniforms;const Me=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Me.clippingPlanes=ye.uniform),Ph(S,_e),W.needsLights=R0(S),W.lightsStateVersion=de,W.needsLights&&(Me.ambientLightColor.value=G.state.ambient,Me.lightProbe.value=G.state.probe,Me.directionalLights.value=G.state.directional,Me.directionalLightShadows.value=G.state.directionalShadow,Me.spotLights.value=G.state.spot,Me.spotLightShadows.value=G.state.spotShadow,Me.rectAreaLights.value=G.state.rectArea,Me.ltc_1.value=G.state.rectAreaLTC1,Me.ltc_2.value=G.state.rectAreaLTC2,Me.pointLights.value=G.state.point,Me.pointLightShadows.value=G.state.pointShadow,Me.hemisphereLights.value=G.state.hemi,Me.directionalShadowMap.value=G.state.directionalShadowMap,Me.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Me.spotShadowMap.value=G.state.spotShadowMap,Me.spotLightMatrix.value=G.state.spotLightMatrix,Me.spotLightMap.value=G.state.spotLightMap,Me.pointShadowMap.value=G.state.pointShadowMap,Me.pointShadowMatrix.value=G.state.pointShadowMatrix),W.currentProgram=Le,W.uniformsList=null,Le}function Dh(S){if(S.uniformsList===null){const V=S.currentProgram.getUniforms();S.uniformsList=Eo.seqWithValue(V.seq,S.uniforms)}return S.uniformsList}function Ph(S,V){const K=Se.get(S);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.batchingColor=V.batchingColor,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.instancingMorph=V.instancingMorph,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function I0(S,V,K,W,G){V.isScene!==!0&&(V=Vt),Ge.resetTextureUnits();const ie=V.fog,de=W.isMeshStandardMaterial?V.environment:null,_e=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ir,me=(W.isMeshStandardMaterial?b:I).get(W.envMap||de),Qe=W.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Le=!!K.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Me=!!K.morphAttributes.position,$e=!!K.morphAttributes.normal,ot=!!K.morphAttributes.color;let _t=kn;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(_t=v.toneMapping);const Ct=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ht=Ct!==void 0?Ct.length:0,Fe=Se.get(W),vt=B.state.lights;if(Z===!0&&(Be===!0||S!==R)){const Zt=S===R&&W.id===T;ye.setState(W,S,Zt)}let nt=!1;W.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==vt.state.version||Fe.outputColorSpace!==_e||G.isBatchedMesh&&Fe.batching===!1||!G.isBatchedMesh&&Fe.batching===!0||G.isBatchedMesh&&Fe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Fe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Fe.instancing===!1||!G.isInstancedMesh&&Fe.instancing===!0||G.isSkinnedMesh&&Fe.skinning===!1||!G.isSkinnedMesh&&Fe.skinning===!0||G.isInstancedMesh&&Fe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Fe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Fe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Fe.instancingMorph===!1&&G.morphTexture!==null||Fe.envMap!==me||W.fog===!0&&Fe.fog!==ie||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ye.numPlanes||Fe.numIntersection!==ye.numIntersection)||Fe.vertexAlphas!==Qe||Fe.vertexTangents!==Le||Fe.morphTargets!==Me||Fe.morphNormals!==$e||Fe.morphColors!==ot||Fe.toneMapping!==_t||Fe.morphTargetsCount!==ht)&&(nt=!0):(nt=!0,Fe.__version=W.version);let dA=Fe.currentProgram;nt===!0&&(dA=xs(W,V,G));let vi=!1,pA=!1,mr=!1;const wt=dA.getUniforms(),sA=Fe.uniforms;if(Ce.useProgram(dA.program)&&(vi=!0,pA=!0,mr=!0),W.id!==T&&(T=W.id,pA=!0),vi||R!==S){Ce.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),wt.setValue(L,"projectionMatrix",S.projectionMatrix),wt.setValue(L,"viewMatrix",S.matrixWorldInverse);const oA=wt.map.cameraPosition;oA!==void 0&&oA.setValue(L,be.setFromMatrixPosition(S.matrixWorld)),ut.logarithmicDepthBuffer&&wt.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&wt.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),R!==S&&(R=S,pA=!0,mr=!0)}if(G.isSkinnedMesh){wt.setOptional(L,G,"bindMatrix"),wt.setOptional(L,G,"bindMatrixInverse");const Zt=G.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),wt.setValue(L,"boneTexture",Zt.boneTexture,Ge))}G.isBatchedMesh&&(wt.setOptional(L,G,"batchingTexture"),wt.setValue(L,"batchingTexture",G._matricesTexture,Ge),wt.setOptional(L,G,"batchingIdTexture"),wt.setValue(L,"batchingIdTexture",G._indirectTexture,Ge),wt.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&wt.setValue(L,"batchingColorTexture",G._colorsTexture,Ge));const CA=K.morphAttributes;if((CA.position!==void 0||CA.normal!==void 0||CA.color!==void 0)&&Re.update(G,K,dA),(pA||Fe.receiveShadow!==G.receiveShadow)&&(Fe.receiveShadow=G.receiveShadow,wt.setValue(L,"receiveShadow",G.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(sA.envMap.value=me,sA.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&V.environment!==null&&(sA.envMapIntensity.value=V.environmentIntensity),sA.dfgLUT!==void 0&&(sA.dfgLUT.value=U_()),pA&&(wt.setValue(L,"toneMappingExposure",v.toneMappingExposure),Fe.needsLights&&Q0(sA,mr),ie&&W.fog===!0&&Ee.refreshFogUniforms(sA,ie),Ee.refreshMaterialUniforms(sA,W,$,Y,B.state.transmissionRenderTarget[S.id]),Eo.upload(L,Dh(Fe),sA,Ge)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Eo.upload(L,Dh(Fe),sA,Ge),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&wt.setValue(L,"center",G.center),wt.setValue(L,"modelViewMatrix",G.modelViewMatrix),wt.setValue(L,"normalMatrix",G.normalMatrix),wt.setValue(L,"modelMatrix",G.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Zt=W.uniformsGroups;for(let oA=0,_a=Zt.length;oA<_a;oA++){const $n=Zt[oA];he.update($n,dA),he.bind($n,dA)}}return dA}function Q0(S,V){S.ambientLightColor.needsUpdate=V,S.lightProbe.needsUpdate=V,S.directionalLights.needsUpdate=V,S.directionalLightShadows.needsUpdate=V,S.pointLights.needsUpdate=V,S.pointLightShadows.needsUpdate=V,S.spotLights.needsUpdate=V,S.spotLightShadows.needsUpdate=V,S.rectAreaLights.needsUpdate=V,S.hemisphereLights.needsUpdate=V}function R0(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,V,K){const W=Se.get(S);W.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Se.get(S.texture).__webglTexture=V,Se.get(S.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:K,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,V){const K=Se.get(S);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0};const L0=L.createFramebuffer();this.setRenderTarget=function(S,V=0,K=0){C=S,U=V,_=K;let W=!0,G=null,ie=!1,de=!1;if(S){const me=Se.get(S);if(me.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(L.FRAMEBUFFER,null),W=!1;else if(me.__webglFramebuffer===void 0)Ge.setupRenderTarget(S);else if(me.__hasExternalTextures)Ge.rebindTextures(S,Se.get(S.texture).__webglTexture,Se.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Me=S.depthTexture;if(me.__boundDepthTexture!==Me){if(Me!==null&&Se.has(Me)&&(S.width!==Me.image.width||S.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(S)}}const Qe=S.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(de=!0);const Le=Se.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Le[V])?G=Le[V][K]:G=Le[V],ie=!0):S.samples>0&&Ge.useMultisampledRTT(S)===!1?G=Se.get(S).__webglMultisampledFramebuffer:Array.isArray(Le)?G=Le[K]:G=Le,F.copy(S.viewport),P.copy(S.scissor),D=S.scissorTest}else F.copy(Oe).multiplyScalar($).floor(),P.copy(Ye).multiplyScalar($).floor(),D=Ke;if(K!==0&&(G=L0),Ce.bindFramebuffer(L.FRAMEBUFFER,G)&&W&&Ce.drawBuffers(S,G),Ce.viewport(F),Ce.scissor(P),Ce.setScissorTest(D),ie){const me=Se.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+V,me.__webglTexture,K)}else if(de){const me=V;for(let Qe=0;Qe<S.textures.length;Qe++){const Le=Se.get(S.textures[Qe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Qe,Le.__webglTexture,K,me)}}else if(S!==null&&K!==0){const me=Se.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,me.__webglTexture,K)}T=-1},this.readRenderTargetPixels=function(S,V,K,W,G,ie,de,_e=0){if(!(S&&S.isWebGLRenderTarget)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Se.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me){Ce.bindFramebuffer(L.FRAMEBUFFER,me);try{const Qe=S.textures[_e],Le=Qe.format,Me=Qe.type;if(!ut.textureFormatReadable(Le)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Me)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=S.width-W&&K>=0&&K<=S.height-G&&(S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+_e),L.readPixels(V,K,W,G,Pe.convert(Le),Pe.convert(Me),ie))}finally{const Qe=C!==null?Se.get(C).__webglFramebuffer:null;Ce.bindFramebuffer(L.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(S,V,K,W,G,ie,de,_e=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Se.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me)if(V>=0&&V<=S.width-W&&K>=0&&K<=S.height-G){Ce.bindFramebuffer(L.FRAMEBUFFER,me);const Qe=S.textures[_e],Le=Qe.format,Me=Qe.type;if(!ut.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,$e),L.bufferData(L.PIXEL_PACK_BUFFER,ie.byteLength,L.STREAM_READ),S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+_e),L.readPixels(V,K,W,G,Pe.convert(Le),Pe.convert(Me),0);const ot=C!==null?Se.get(C).__webglFramebuffer:null;Ce.bindFramebuffer(L.FRAMEBUFFER,ot);const _t=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await yg(L,_t,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,$e),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ie),L.deleteBuffer($e),L.deleteSync(_t),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,V=null,K=0){const W=Math.pow(2,-K),G=Math.floor(S.image.width*W),ie=Math.floor(S.image.height*W),de=V!==null?V.x:0,_e=V!==null?V.y:0;Ge.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,K,0,0,de,_e,G,ie),Ce.unbindTexture()};const D0=L.createFramebuffer(),P0=L.createFramebuffer();this.copyTextureToTexture=function(S,V,K=null,W=null,G=0,ie=null){ie===null&&(G!==0?(As("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=G,G=0):ie=0);let de,_e,me,Qe,Le,Me,$e,ot,_t;const Ct=S.isCompressedTexture?S.mipmaps[ie]:S.image;if(K!==null)de=K.max.x-K.min.x,_e=K.max.y-K.min.y,me=K.isBox3?K.max.z-K.min.z:1,Qe=K.min.x,Le=K.min.y,Me=K.isBox3?K.min.z:0;else{const CA=Math.pow(2,-G);de=Math.floor(Ct.width*CA),_e=Math.floor(Ct.height*CA),S.isDataArrayTexture?me=Ct.depth:S.isData3DTexture?me=Math.floor(Ct.depth*CA):me=1,Qe=0,Le=0,Me=0}W!==null?($e=W.x,ot=W.y,_t=W.z):($e=0,ot=0,_t=0);const ht=Pe.convert(V.format),Fe=Pe.convert(V.type);let vt;V.isData3DTexture?(Ge.setTexture3D(V,0),vt=L.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Ge.setTexture2DArray(V,0),vt=L.TEXTURE_2D_ARRAY):(Ge.setTexture2D(V,0),vt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,V.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,V.unpackAlignment);const nt=L.getParameter(L.UNPACK_ROW_LENGTH),dA=L.getParameter(L.UNPACK_IMAGE_HEIGHT),vi=L.getParameter(L.UNPACK_SKIP_PIXELS),pA=L.getParameter(L.UNPACK_SKIP_ROWS),mr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ct.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ct.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Qe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Le),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Me);const wt=S.isDataArrayTexture||S.isData3DTexture,sA=V.isDataArrayTexture||V.isData3DTexture;if(S.isDepthTexture){const CA=Se.get(S),Zt=Se.get(V),oA=Se.get(CA.__renderTarget),_a=Se.get(Zt.__renderTarget);Ce.bindFramebuffer(L.READ_FRAMEBUFFER,oA.__webglFramebuffer),Ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,_a.__webglFramebuffer);for(let $n=0;$n<me;$n++)wt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.get(S).__webglTexture,G,Me+$n),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.get(V).__webglTexture,ie,_t+$n)),L.blitFramebuffer(Qe,Le,de,_e,$e,ot,de,_e,L.DEPTH_BUFFER_BIT,L.NEAREST);Ce.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(G!==0||S.isRenderTargetTexture||Se.has(S)){const CA=Se.get(S),Zt=Se.get(V);Ce.bindFramebuffer(L.READ_FRAMEBUFFER,D0),Ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,P0);for(let oA=0;oA<me;oA++)wt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,CA.__webglTexture,G,Me+oA):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,CA.__webglTexture,G),sA?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Zt.__webglTexture,ie,_t+oA):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Zt.__webglTexture,ie),G!==0?L.blitFramebuffer(Qe,Le,de,_e,$e,ot,de,_e,L.COLOR_BUFFER_BIT,L.NEAREST):sA?L.copyTexSubImage3D(vt,ie,$e,ot,_t+oA,Qe,Le,de,_e):L.copyTexSubImage2D(vt,ie,$e,ot,Qe,Le,de,_e);Ce.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else sA?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(vt,ie,$e,ot,_t,de,_e,me,ht,Fe,Ct.data):V.isCompressedArrayTexture?L.compressedTexSubImage3D(vt,ie,$e,ot,_t,de,_e,me,ht,Ct.data):L.texSubImage3D(vt,ie,$e,ot,_t,de,_e,me,ht,Fe,Ct):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ie,$e,ot,de,_e,ht,Fe,Ct.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ie,$e,ot,Ct.width,Ct.height,ht,Ct.data):L.texSubImage2D(L.TEXTURE_2D,ie,$e,ot,de,_e,ht,Fe,Ct);L.pixelStorei(L.UNPACK_ROW_LENGTH,nt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,dA),L.pixelStorei(L.UNPACK_SKIP_PIXELS,vi),L.pixelStorei(L.UNPACK_SKIP_ROWS,pA),L.pixelStorei(L.UNPACK_SKIP_IMAGES,mr),ie===0&&V.generateMipmaps&&L.generateMipmap(vt),Ce.unbindTexture()},this.initRenderTarget=function(S){Se.get(S).__webglFramebuffer===void 0&&Ge.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Ge.setTextureCube(S,0):S.isData3DTexture?Ge.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ge.setTexture2DArray(S,0):Ge.setTexture2D(S,0),Ce.unbindTexture()},this.resetState=function(){U=0,_=0,C=null,Ce.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return YA}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}const ku={type:"change"},ph={type:"start"},$d={type:"end"},Ks=new ta,Ku=new Bn,T_=Math.cos(70*tt.DEG2RAD),Qt=new N,aA=2*Math.PI,lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nl=1e-6;class I_ extends zm{constructor(e,t=null){super(e,t),this.state=lt.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ji.ROTATE,MIDDLE:Ji.DOLLY,RIGHT:Ji.PAN},this.touches={ONE:Wi.ROTATE,TWO:Wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Yn,this._lastTargetPosition=new N,this._quat=new Yn().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Bu,this._sphericalDelta=new Bu,this._scale=1,this._panOffset=new N,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new N,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=R_.bind(this),this._onPointerDown=Q_.bind(this),this._onPointerUp=L_.bind(this),this._onContextMenu=G_.bind(this),this._onMouseWheel=H_.bind(this),this._onKeyDown=N_.bind(this),this._onTouchStart=O_.bind(this),this._onTouchMove=V_.bind(this),this._onMouseDown=D_.bind(this),this._onMouseMove=P_.bind(this),this._interceptControlDown=z_.bind(this),this._interceptControlUp=k_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ku),this.update(),this.state=lt.NONE}update(e=null){const t=this.object.position;Qt.copy(t).sub(this.target),Qt.applyQuaternion(this._quat),this._spherical.setFromVector3(Qt),this.autoRotate&&this.state===lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let A=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(A)&&isFinite(i)&&(A<-Math.PI?A+=aA:A>Math.PI&&(A-=aA),i<-Math.PI?i+=aA:i>Math.PI&&(i-=aA),A<=i?this._spherical.theta=Math.max(A,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(A+i)/2?Math.max(A,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=s!=this._spherical.radius}if(Qt.setFromSpherical(this._spherical),Qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const o=Qt.length();s=this._clampDistance(o*this._scale);const a=o-s;this.object.position.addScaledVector(this._dollyDirection,a),this.object.updateMatrixWorld(),r=!!a}else if(this.object.isOrthographicCamera){const o=new N(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=a!==this.object.zoom;const l=new N(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),s=Qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(Ks.origin.copy(this.object.position),Ks.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ks.direction))<T_?this.object.lookAt(this.target):(Ku.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ks.intersectPlane(Ku,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>nl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nl||this._lastTargetPosition.distanceToSquared(this.target)>nl?(this.dispatchEvent(ku),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?aA/60*this.autoRotateSpeed*e:aA/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Qt.setFromMatrixColumn(t,0),Qt.multiplyScalar(-e),this._panOffset.add(Qt)}_panUp(e,t){this.screenSpacePanning===!0?Qt.setFromMatrixColumn(t,1):(Qt.setFromMatrixColumn(t,0),Qt.crossVectors(this.object.up,Qt)),Qt.multiplyScalar(e),this._panOffset.add(Qt)}_pan(e,t){const A=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Qt.copy(i).sub(this.target);let r=Qt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/A.clientHeight,this.object.matrix),this._panUp(2*t*r/A.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/A.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/A.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const A=this.domElement.getBoundingClientRect(),i=e-A.left,r=t-A.top,s=A.width,o=A.height;this._mouse.x=i/s*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(aA*this._rotateDelta.x/t.clientHeight),this._rotateUp(aA*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(aA*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-aA*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(aA*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-aA*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),A=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(A,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),A=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(A,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),A=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(A*A+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const A=this._getSecondPointerPosition(e),i=.5*(e.pageX+A.x),r=.5*(e.pageY+A.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(aA*this._rotateDelta.x/t.clientHeight),this._rotateUp(aA*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),A=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(A,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),A=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(A*A+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,A={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:A.deltaY*=16;break;case 2:A.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(A.deltaY*=10),A}}function Q_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function R_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function L_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($d),this.state=lt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function D_(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ji.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=lt.DOLLY;break;case Ji.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=lt.ROTATE}break;case Ji.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=lt.PAN}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(ph)}function P_(n){switch(this.state){case lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function H_(n){this.enabled===!1||this.enableZoom===!1||this.state!==lt.NONE||(n.preventDefault(),this.dispatchEvent(ph),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent($d))}function N_(n){this.enabled!==!1&&this._handleKeyDown(n)}function O_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Wi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=lt.TOUCH_ROTATE;break;case Wi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=lt.TOUCH_PAN;break;default:this.state=lt.NONE}break;case 2:switch(this.touches.TWO){case Wi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=lt.TOUCH_DOLLY_PAN;break;case Wi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=lt.TOUCH_DOLLY_ROTATE;break;default:this.state=lt.NONE}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(ph)}function V_(n){switch(this._trackPointer(n),this.state){case lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=lt.NONE}}function G_(n){this.enabled!==!1&&n.preventDefault()}function z_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function k_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const bo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class as{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const K_=new dh(-1,1,1,-1,0,1);class W_ extends fA{constructor(){super(),this.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ot([0,2,0,0,2,0],2))}}const X_=new W_;class ep{constructor(e){this._mesh=new iA(X_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,K_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Y_ extends as{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof AA?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Lo.clone(e.uniforms),this.material=new AA({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ep(this.material)}render(e,t,A){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=A.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Wu extends as{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,A){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,s,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(A),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class q_ extends as{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class J_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const A=e.getSize(new ue);this._width=A.width,this._height=A.height,t=new OA(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:JA}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Y_(bo),this.copyPass.material.blending=qA,this.clock=new Xd}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let A=!1;for(let i=0,r=this.passes.length;i<r;i++){const s=this.passes[i];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,A),s.needsSwap){if(A){const o=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Wu!==void 0&&(s instanceof Wu?A=!0:s instanceof q_&&(A=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const A=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(A,i),this.renderTarget2.setSize(A,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(A,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Z_ extends as{constructor(e,t,A=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=A,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ie}render(e,t,A){const i=e.autoClear;e.autoClear=!1;let r,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:A),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=i}}const j_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ie(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class or extends as{constructor(e,t=1,A,i){super(),this.strength=t,this.radius=A,this.threshold=i,this.resolution=e!==void 0?new ue(e.x,e.y):new ue(256,256),this.clearColor=new Ie(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new OA(r,s,{type:JA}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){const u=new OA(r,s,{type:JA});u.texture.name="UnrealBloomPass.h"+c,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const h=new OA(r,s,{type:JA});h.texture.name="UnrealBloomPass.v"+c,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),s=Math.round(s/2)}const o=j_;this.highPassUniforms=Lo.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new AA({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const a=[6,10,14,18,22];r=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(a[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new ue(1/r,1/s),r=Math.round(r/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Lo.clone(bo.uniforms),this.blendMaterial=new AA({uniforms:this.copyUniforms,vertexShader:bo.vertexShader,fragmentShader:bo.fragmentShader,blending:To,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ie,this._oldClearAlpha=1,this._basic=new ur,this._fsQuad=new ep(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let A=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(A,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(A,i),this.renderTargetsVertical[r].setSize(A,i),this.separableBlurMaterials[r].uniforms.invSize.value=new ue(1/A,1/i),A=Math.round(A/2),i=Math.round(i/2)}render(e,t,A,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=A.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=A.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this._fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[a].uniforms.direction.value=or.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[a]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=or.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[a]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[a];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(A),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){const t=[],A=e/3;for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(A*A))/A);return new AA({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ue(.5,.5)},direction:{value:new ue(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}}or.BlurDirectionX=new ue(1,0);or.BlurDirectionY=new ue(0,1);class $_{parse(e){let t="",A=0,i=0,r=0;const s=new N,o=new Ie,a=new N,l=new ue,c=[];function u(p){let m=0,g=0,d=0;const x=p.geometry,B=new ze,w=x.getAttribute("position"),y=x.getAttribute("normal"),v=x.getAttribute("uv"),E=x.getIndex();if(t+="o "+p.name+`
`,p.material&&p.material.name&&(t+="usemtl "+p.material.name+`
`),w!==void 0)for(let U=0,_=w.count;U<_;U++,m++)s.fromBufferAttribute(w,U),s.applyMatrix4(p.matrixWorld),t+="v "+s.x+" "+s.y+" "+s.z+`
`;if(v!==void 0)for(let U=0,_=v.count;U<_;U++,d++)l.fromBufferAttribute(v,U),t+="vt "+l.x+" "+l.y+`
`;if(y!==void 0){B.getNormalMatrix(p.matrixWorld);for(let U=0,_=y.count;U<_;U++,g++)a.fromBufferAttribute(y,U),a.applyMatrix3(B).normalize(),t+="vn "+a.x+" "+a.y+" "+a.z+`
`}if(E!==null)for(let U=0,_=E.count;U<_;U+=3){for(let C=0;C<3;C++){const T=E.getX(U+C)+1;c[C]=A+T+(y||v?"/"+(v?i+T:"")+(y?"/"+(r+T):""):"")}t+="f "+c.join(" ")+`
`}else for(let U=0,_=w.count;U<_;U+=3){for(let C=0;C<3;C++){const T=U+C+1;c[C]=A+T+(y||v?"/"+(v?i+T:"")+(y?"/"+(r+T):""):"")}t+="f "+c.join(" ")+`
`}A+=m,i+=d,r+=g}function h(p){let m=0;const g=p.geometry,d=p.type,x=g.getAttribute("position");if(t+="o "+p.name+`
`,x!==void 0)for(let B=0,w=x.count;B<w;B++,m++)s.fromBufferAttribute(x,B),s.applyMatrix4(p.matrixWorld),t+="v "+s.x+" "+s.y+" "+s.z+`
`;if(d==="Line"){t+="l ";for(let B=1,w=x.count;B<=w;B++)t+=A+B+" ";t+=`
`}if(d==="LineSegments")for(let B=1,w=B+1,y=x.count;B<y;B+=2,w=B+1)t+="l "+(A+B)+" "+(A+w)+`
`;A+=m}function f(p){let m=0;const g=p.geometry,d=g.getAttribute("position"),x=g.getAttribute("color");if(t+="o "+p.name+`
`,d!==void 0){for(let B=0,w=d.count;B<w;B++,m++)s.fromBufferAttribute(d,B),s.applyMatrix4(p.matrixWorld),t+="v "+s.x+" "+s.y+" "+s.z,x!==void 0&&(o.fromBufferAttribute(x,B),At.workingToColorSpace(o,zt),t+=" "+o.r+" "+o.g+" "+o.b),t+=`
`;t+="p ";for(let B=1,w=d.count;B<=w;B++)t+=A+B+" ";t+=`
`}A+=m}return e.traverse(function(p){p.isMesh===!0&&u(p),p.isLine===!0&&h(p),p.isPoints===!0&&f(p)}),t}}class eC{parse(e,t,A={}){function i(B){e.traverse(function(w){if(w.isMesh===!0||w.isPoints){const y=w,v=y.geometry;v.hasAttribute("position")===!0&&B(y,v)}})}A=Object.assign({binary:!1,excludeAttributes:[],littleEndian:!1},A);const s=A.excludeAttributes;let o=!0,a=!1,l=!1,c=!1,u=0,h=0;e.traverse(function(B){if(B.isMesh===!0){const y=B.geometry,v=y.getAttribute("position"),E=y.getAttribute("normal"),U=y.getAttribute("uv"),_=y.getAttribute("color"),C=y.getIndex();if(v===void 0)return;u+=v.count,h+=C?C.count/3:v.count/3,E!==void 0&&(a=!0),U!==void 0&&(c=!0),_!==void 0&&(l=!0)}else if(B.isPoints){const y=B.geometry,v=y.getAttribute("position"),E=y.getAttribute("normal"),U=y.getAttribute("color");u+=v.count,E!==void 0&&(a=!0),U!==void 0&&(l=!0),o=!1}});const f=new Ie;if(o=o&&s.indexOf("index")===-1,a=a&&s.indexOf("normal")===-1,l=l&&s.indexOf("color")===-1,c=c&&s.indexOf("uv")===-1,o&&h!==Math.floor(h))return console.error("PLYExporter: Failed to generate a valid PLY file with triangle indices because the number of indices is not divisible by 3."),null;const p=4;let m=`ply
format ${A.binary?A.littleEndian?"binary_little_endian":"binary_big_endian":"ascii"} 1.0
element vertex ${u}
property float x
property float y
property float z
`;a===!0&&(m+=`property float nx
property float ny
property float nz
`),c===!0&&(m+=`property float s
property float t
`),l===!0&&(m+=`property uchar red
property uchar green
property uchar blue
`),o===!0&&(m+=`element face ${h}
property list uchar int vertex_index
`),m+=`end_header
`;const g=new N,d=new ze;let x=null;if(A.binary===!0){const B=new TextEncoder().encode(m),w=u*(12+(a?12:0)+(l?3:0)+(c?8:0)),y=o?h*(p*3+1):0,v=new DataView(new ArrayBuffer(B.length+w+y));new Uint8Array(v.buffer).set(B,0);let E=B.length,U=B.length+w,_=0;i(function(C,T){const R=T.getAttribute("position"),F=T.getAttribute("normal"),P=T.getAttribute("uv"),D=T.getAttribute("color"),Q=T.getIndex();d.getNormalMatrix(C.matrixWorld);for(let k=0,O=R.count;k<O;k++)g.fromBufferAttribute(R,k),g.applyMatrix4(C.matrixWorld),v.setFloat32(E,g.x,A.littleEndian),E+=4,v.setFloat32(E,g.y,A.littleEndian),E+=4,v.setFloat32(E,g.z,A.littleEndian),E+=4,a===!0&&(F!=null?(g.fromBufferAttribute(F,k),g.applyMatrix3(d).normalize(),v.setFloat32(E,g.x,A.littleEndian),E+=4,v.setFloat32(E,g.y,A.littleEndian),E+=4,v.setFloat32(E,g.z,A.littleEndian),E+=4):(v.setFloat32(E,0,A.littleEndian),E+=4,v.setFloat32(E,0,A.littleEndian),E+=4,v.setFloat32(E,0,A.littleEndian),E+=4)),c===!0&&(P!=null?(v.setFloat32(E,P.getX(k),A.littleEndian),E+=4,v.setFloat32(E,P.getY(k),A.littleEndian),E+=4):(v.setFloat32(E,0,A.littleEndian),E+=4,v.setFloat32(E,0,A.littleEndian),E+=4)),l===!0&&(D!=null?(f.fromBufferAttribute(D,k),At.workingToColorSpace(f,zt),v.setUint8(E,Math.floor(f.r*255)),E+=1,v.setUint8(E,Math.floor(f.g*255)),E+=1,v.setUint8(E,Math.floor(f.b*255)),E+=1):(v.setUint8(E,255),E+=1,v.setUint8(E,255),E+=1,v.setUint8(E,255),E+=1));if(o===!0)if(Q!==null)for(let k=0,O=Q.count;k<O;k+=3)v.setUint8(U,3),U+=1,v.setUint32(U,Q.getX(k+0)+_,A.littleEndian),U+=p,v.setUint32(U,Q.getX(k+1)+_,A.littleEndian),U+=p,v.setUint32(U,Q.getX(k+2)+_,A.littleEndian),U+=p;else for(let k=0,O=R.count;k<O;k+=3)v.setUint8(U,3),U+=1,v.setUint32(U,_+k,A.littleEndian),U+=p,v.setUint32(U,_+k+1,A.littleEndian),U+=p,v.setUint32(U,_+k+2,A.littleEndian),U+=p;_+=R.count}),x=v.buffer}else{let B=0,w="",y="";i(function(v,E){const U=E.getAttribute("position"),_=E.getAttribute("normal"),C=E.getAttribute("uv"),T=E.getAttribute("color"),R=E.getIndex();d.getNormalMatrix(v.matrixWorld);for(let F=0,P=U.count;F<P;F++){g.fromBufferAttribute(U,F),g.applyMatrix4(v.matrixWorld);let D=g.x+" "+g.y+" "+g.z;a===!0&&(_!=null?(g.fromBufferAttribute(_,F),g.applyMatrix3(d).normalize(),D+=" "+g.x+" "+g.y+" "+g.z):D+=" 0 0 0"),c===!0&&(C!=null?D+=" "+C.getX(F)+" "+C.getY(F):D+=" 0 0"),l===!0&&(T!=null?(f.fromBufferAttribute(T,F),At.workingToColorSpace(f,zt),D+=" "+Math.floor(f.r*255)+" "+Math.floor(f.g*255)+" "+Math.floor(f.b*255)):D+=" 255 255 255"),w+=D+`
`}if(o===!0){if(R!==null)for(let F=0,P=R.count;F<P;F+=3)y+=`3 ${R.getX(F+0)+B}`,y+=` ${R.getX(F+1)+B}`,y+=` ${R.getX(F+2)+B}
`;else for(let F=0,P=U.count;F<P;F+=3)y+=`3 ${B+F} ${B+F+1} ${B+F+2}
`;h+=R?R.count/3:U.count/3}B+=U.count}),x=`${m}${w}${o?`${y}
`:`
`}`}return typeof t=="function"&&requestAnimationFrame(()=>t(x)),x}}function tp(n,e=!1){const t=n[0].index!==null,A=new Set(Object.keys(n[0].attributes)),i=new Set(Object.keys(n[0].morphAttributes)),r={},s={},o=n[0].morphTargetsRelative,a=new fA;let l=0;for(let c=0;c<n.length;++c){const u=n[c];let h=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!A.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),h++}if(h!==A.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;a.addGroup(l,f,c),l+=f}}if(t){let c=0;const u=[];for(let h=0;h<n.length;++h){const f=n[h].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+c);c+=n[h].attributes.position.count}a.setIndex(u)}for(const c in r){const u=Xu(r[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;a.setAttribute(c,u)}for(const c in s){const u=s[c][0].length;if(u===0)break;a.morphAttributes=a.morphAttributes||{},a.morphAttributes[c]=[];for(let h=0;h<u;++h){const f=[];for(let m=0;m<s[c].length;++m)f.push(s[c][m][h]);const p=Xu(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;a.morphAttributes[c].push(p)}}return a}function Xu(n){let e,t,A,i=-1,r=0;for(let l=0;l<n.length;++l){const c=n[l];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(A===void 0&&(A=c.normalized),A!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=c.gpuType),i!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*t}const s=new e(r),o=new uA(s,t,A);let a=0;for(let l=0;l<n.length;++l){const c=n[l];if(c.isInterleavedBufferAttribute){const u=a/t;for(let h=0,f=c.count;h<f;h++)for(let p=0;p<t;p++){const m=c.getComponent(h,p);o.setComponent(h+u,p,m)}}else s.set(c.array,a);a+=c.count*t}return i!==void 0&&(o.gpuType=i),o}var wc=function(n,e){return wc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,A){t.__proto__=A}||function(t,A){for(var i in A)Object.prototype.hasOwnProperty.call(A,i)&&(t[i]=A[i])},wc(n,e)};function VA(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");wc(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var _c=function(){return _c=Object.assign||function(e){for(var t,A=1,i=arguments.length;A<i;A++){t=arguments[A];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},_c.apply(this,arguments)};function eA(n,e,t,A){function i(r){return r instanceof t?r:new t(function(s){s(r)})}return new(t||(t=Promise))(function(r,s){function o(c){try{l(A.next(c))}catch(u){s(u)}}function a(c){try{l(A.throw(c))}catch(u){s(u)}}function l(c){c.done?r(c.value):i(c.value).then(o,a)}l((A=A.apply(n,[])).next())})}function Yt(n,e){var t={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},A,i,r,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(l){return function(c){return a([l,c])}}function a(l){if(A)throw new TypeError("Generator is already executing.");for(;t;)try{if(A=1,i&&(r=l[0]&2?i.return:l[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,l[1])).done)return r;switch(i=0,r&&(l=[l[0]&2,r.value]),l[0]){case 0:case 1:r=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,i=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(r=t.trys,!(r=r.length>0&&r[r.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!r||l[1]>r[0]&&l[1]<r[3])){t.label=l[1];break}if(l[0]===6&&t.label<r[1]){t.label=r[1],r=l;break}if(r&&t.label<r[2]){t.label=r[2],t.ops.push(l);break}r[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(n,t)}catch(c){l=[6,c],i=0}finally{A=r=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function Ws(n,e,t){if(arguments.length===2)for(var A=0,i=e.length,r;A<i;A++)(r||!(A in e))&&(r||(r=Array.prototype.slice.call(e,0,A)),r[A]=e[A]);return n.concat(r||e)}var bn=(function(){function n(e,t,A,i){this.left=e,this.top=t,this.width=A,this.height=i}return n.prototype.add=function(e,t,A,i){return new n(this.left+e,this.top+t,this.width+A,this.height+i)},n.fromClientRect=function(e,t){return new n(t.left+e.windowBounds.left,t.top+e.windowBounds.top,t.width,t.height)},n.fromDOMRectList=function(e,t){var A=Array.from(t).find(function(i){return i.width!==0});return A?new n(A.left+e.windowBounds.left,A.top+e.windowBounds.top,A.width,A.height):n.EMPTY},n.EMPTY=new n(0,0,0,0),n})(),ia=function(n,e){return bn.fromClientRect(n,e.getBoundingClientRect())},tC=function(n){var e=n.body,t=n.documentElement;if(!e||!t)throw new Error("Unable to get document size");var A=Math.max(Math.max(e.scrollWidth,t.scrollWidth),Math.max(e.offsetWidth,t.offsetWidth),Math.max(e.clientWidth,t.clientWidth)),i=Math.max(Math.max(e.scrollHeight,t.scrollHeight),Math.max(e.offsetHeight,t.offsetHeight),Math.max(e.clientHeight,t.clientHeight));return new bn(0,0,A,i)},ra=function(n){for(var e=[],t=0,A=n.length;t<A;){var i=n.charCodeAt(t++);if(i>=55296&&i<=56319&&t<A){var r=n.charCodeAt(t++);(r&64512)===56320?e.push(((i&1023)<<10)+(r&1023)+65536):(e.push(i),t--)}else e.push(i)}return e},Mt=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,n);var t=n.length;if(!t)return"";for(var A=[],i=-1,r="";++i<t;){var s=n[i];s<=65535?A.push(s):(s-=65536,A.push((s>>10)+55296,s%1024+56320)),(i+1===t||A.length>16384)&&(r+=String.fromCharCode.apply(String,A),A.length=0)}return r},Yu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",AC=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Xs=0;Xs<Yu.length;Xs++)AC[Yu.charCodeAt(Xs)]=Xs;var qu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Qr=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Ys=0;Ys<qu.length;Ys++)Qr[qu.charCodeAt(Ys)]=Ys;var nC=function(n){var e=n.length*.75,t=n.length,A,i=0,r,s,o,a;n[n.length-1]==="="&&(e--,n[n.length-2]==="="&&e--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(e):new Array(e),c=Array.isArray(l)?l:new Uint8Array(l);for(A=0;A<t;A+=4)r=Qr[n.charCodeAt(A)],s=Qr[n.charCodeAt(A+1)],o=Qr[n.charCodeAt(A+2)],a=Qr[n.charCodeAt(A+3)],c[i++]=r<<2|s>>4,c[i++]=(s&15)<<4|o>>2,c[i++]=(o&3)<<6|a&63;return l},iC=function(n){for(var e=n.length,t=[],A=0;A<e;A+=2)t.push(n[A+1]<<8|n[A]);return t},rC=function(n){for(var e=n.length,t=[],A=0;A<e;A+=4)t.push(n[A+3]<<24|n[A+2]<<16|n[A+1]<<8|n[A]);return t},di=5,gh=11,il=2,sC=gh-di,Ap=65536>>di,oC=1<<di,rl=oC-1,aC=1024>>di,lC=Ap+aC,cC=lC,hC=32,uC=cC+hC,fC=65536>>gh,dC=1<<sC,pC=dC-1,Ju=function(n,e,t){return n.slice?n.slice(e,t):new Uint16Array(Array.prototype.slice.call(n,e,t))},gC=function(n,e,t){return n.slice?n.slice(e,t):new Uint32Array(Array.prototype.slice.call(n,e,t))},mC=function(n,e){var t=nC(n),A=Array.isArray(t)?rC(t):new Uint32Array(t),i=Array.isArray(t)?iC(t):new Uint16Array(t),r=24,s=Ju(i,r/2,A[4]/2),o=A[5]===2?Ju(i,(r+A[4])/2):gC(A,Math.ceil((r+A[4])/4));return new xC(A[0],A[1],A[2],A[3],s,o)},xC=(function(){function n(e,t,A,i,r,s){this.initialValue=e,this.errorValue=t,this.highStart=A,this.highValueIndex=i,this.index=r,this.data=s}return n.prototype.get=function(e){var t;if(e>=0){if(e<55296||e>56319&&e<=65535)return t=this.index[e>>di],t=(t<<il)+(e&rl),this.data[t];if(e<=65535)return t=this.index[Ap+(e-55296>>di)],t=(t<<il)+(e&rl),this.data[t];if(e<this.highStart)return t=uC-fC+(e>>gh),t=this.index[t],t+=e>>di&pC,t=this.index[t],t=(t<<il)+(e&rl),this.data[t];if(e<=1114111)return this.data[this.highValueIndex]}return this.errorValue},n})(),Zu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",BC=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var qs=0;qs<Zu.length;qs++)BC[Zu.charCodeAt(qs)]=qs;var vC="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",ju=50,wC=1,np=2,ip=3,_C=4,CC=5,$u=7,rp=8,ef=9,Vn=10,Cc=11,tf=12,yc=13,yC=14,Rr=15,Ec=16,Js=17,yr=18,EC=19,Af=20,bc=21,Er=22,sl=23,Li=24,xA=25,Lr=26,Dr=27,Di=28,bC=29,ci=30,MC=31,Zs=32,js=33,Mc=34,Sc=35,Uc=36,ns=37,Fc=38,Mo=39,So=40,ol=41,sp=42,SC=43,UC=[9001,65288],op="!",et="×",$s="÷",Tc=mC(vC),un=[ci,Uc],Ic=[wC,np,ip,CC],ap=[Vn,rp],nf=[Dr,Lr],FC=Ic.concat(ap),rf=[Fc,Mo,So,Mc,Sc],TC=[Rr,yc],IC=function(n,e){e===void 0&&(e="strict");var t=[],A=[],i=[];return n.forEach(function(r,s){var o=Tc.get(r);if(o>ju?(i.push(!0),o-=ju):i.push(!1),["normal","auto","loose"].indexOf(e)!==-1&&[8208,8211,12316,12448].indexOf(r)!==-1)return A.push(s),t.push(Ec);if(o===_C||o===Cc){if(s===0)return A.push(s),t.push(ci);var a=t[s-1];return FC.indexOf(a)===-1?(A.push(A[s-1]),t.push(a)):(A.push(s),t.push(ci))}if(A.push(s),o===MC)return t.push(e==="strict"?bc:ns);if(o===sp||o===bC)return t.push(ci);if(o===SC)return r>=131072&&r<=196605||r>=196608&&r<=262141?t.push(ns):t.push(ci);t.push(o)}),[A,t,i]},al=function(n,e,t,A){var i=A[t];if(Array.isArray(n)?n.indexOf(i)!==-1:n===i)for(var r=t;r<=A.length;){r++;var s=A[r];if(s===e)return!0;if(s!==Vn)break}if(i===Vn)for(var r=t;r>0;){r--;var o=A[r];if(Array.isArray(n)?n.indexOf(o)!==-1:n===o)for(var a=t;a<=A.length;){a++;var s=A[a];if(s===e)return!0;if(s!==Vn)break}if(o!==Vn)break}return!1},sf=function(n,e){for(var t=n;t>=0;){var A=e[t];if(A===Vn)t--;else return A}return 0},QC=function(n,e,t,A,i){if(t[A]===0)return et;var r=A-1;if(Array.isArray(i)&&i[r]===!0)return et;var s=r-1,o=r+1,a=e[r],l=s>=0?e[s]:0,c=e[o];if(a===np&&c===ip)return et;if(Ic.indexOf(a)!==-1)return op;if(Ic.indexOf(c)!==-1||ap.indexOf(c)!==-1)return et;if(sf(r,e)===rp)return $s;if(Tc.get(n[r])===Cc||(a===Zs||a===js)&&Tc.get(n[o])===Cc||a===$u||c===$u||a===ef||[Vn,yc,Rr].indexOf(a)===-1&&c===ef||[Js,yr,EC,Li,Di].indexOf(c)!==-1||sf(r,e)===Er||al(sl,Er,r,e)||al([Js,yr],bc,r,e)||al(tf,tf,r,e))return et;if(a===Vn)return $s;if(a===sl||c===sl)return et;if(c===Ec||a===Ec)return $s;if([yc,Rr,bc].indexOf(c)!==-1||a===yC||l===Uc&&TC.indexOf(a)!==-1||a===Di&&c===Uc||c===Af||un.indexOf(c)!==-1&&a===xA||un.indexOf(a)!==-1&&c===xA||a===Dr&&[ns,Zs,js].indexOf(c)!==-1||[ns,Zs,js].indexOf(a)!==-1&&c===Lr||un.indexOf(a)!==-1&&nf.indexOf(c)!==-1||nf.indexOf(a)!==-1&&un.indexOf(c)!==-1||[Dr,Lr].indexOf(a)!==-1&&(c===xA||[Er,Rr].indexOf(c)!==-1&&e[o+1]===xA)||[Er,Rr].indexOf(a)!==-1&&c===xA||a===xA&&[xA,Di,Li].indexOf(c)!==-1)return et;if([xA,Di,Li,Js,yr].indexOf(c)!==-1)for(var u=r;u>=0;){var h=e[u];if(h===xA)return et;if([Di,Li].indexOf(h)!==-1)u--;else break}if([Dr,Lr].indexOf(c)!==-1)for(var u=[Js,yr].indexOf(a)!==-1?s:r;u>=0;){var h=e[u];if(h===xA)return et;if([Di,Li].indexOf(h)!==-1)u--;else break}if(Fc===a&&[Fc,Mo,Mc,Sc].indexOf(c)!==-1||[Mo,Mc].indexOf(a)!==-1&&[Mo,So].indexOf(c)!==-1||[So,Sc].indexOf(a)!==-1&&c===So||rf.indexOf(a)!==-1&&[Af,Lr].indexOf(c)!==-1||rf.indexOf(c)!==-1&&a===Dr||un.indexOf(a)!==-1&&un.indexOf(c)!==-1||a===Li&&un.indexOf(c)!==-1||un.concat(xA).indexOf(a)!==-1&&c===Er&&UC.indexOf(n[o])===-1||un.concat(xA).indexOf(c)!==-1&&a===yr)return et;if(a===ol&&c===ol){for(var f=t[r],p=1;f>0&&(f--,e[f]===ol);)p++;if(p%2!==0)return et}return a===Zs&&c===js?et:$s},RC=function(n,e){e||(e={lineBreak:"normal",wordBreak:"normal"});var t=IC(n,e.lineBreak),A=t[0],i=t[1],r=t[2];(e.wordBreak==="break-all"||e.wordBreak==="break-word")&&(i=i.map(function(o){return[xA,ci,sp].indexOf(o)!==-1?ns:o}));var s=e.wordBreak==="keep-all"?r.map(function(o,a){return o&&n[a]>=19968&&n[a]<=40959}):void 0;return[A,i,s]},LC=(function(){function n(e,t,A,i){this.codePoints=e,this.required=t===op,this.start=A,this.end=i}return n.prototype.slice=function(){return Mt.apply(void 0,this.codePoints.slice(this.start,this.end))},n})(),DC=function(n,e){var t=ra(n),A=RC(t,e),i=A[0],r=A[1],s=A[2],o=t.length,a=0,l=0;return{next:function(){if(l>=o)return{done:!0,value:null};for(var c=et;l<o&&(c=QC(t,r,i,++l,s))===et;);if(c!==et||l===o){var u=new LC(t,c,a,l);return a=l,{value:u,done:!1}}return{done:!0,value:null}}}},PC=1,HC=2,ls=4,of=8,Ho=10,af=47,kr=92,NC=9,OC=32,eo=34,br=61,VC=35,GC=36,zC=37,to=39,Ao=40,Mr=41,kC=95,cA=45,KC=33,WC=60,XC=62,YC=64,qC=91,JC=93,ZC=61,jC=123,no=63,$C=125,lf=124,ey=126,ty=128,cf=65533,ll=42,fi=43,Ay=44,ny=58,iy=59,is=46,ry=0,sy=8,oy=11,ay=14,ly=31,cy=127,zA=-1,lp=48,cp=97,hp=101,hy=102,uy=117,fy=122,up=65,fp=69,dp=70,dy=85,py=90,qt=function(n){return n>=lp&&n<=57},gy=function(n){return n>=55296&&n<=57343},Pi=function(n){return qt(n)||n>=up&&n<=dp||n>=cp&&n<=hy},my=function(n){return n>=cp&&n<=fy},xy=function(n){return n>=up&&n<=py},By=function(n){return my(n)||xy(n)},vy=function(n){return n>=ty},io=function(n){return n===Ho||n===NC||n===OC},No=function(n){return By(n)||vy(n)||n===kC},hf=function(n){return No(n)||qt(n)||n===cA},wy=function(n){return n>=ry&&n<=sy||n===oy||n>=ay&&n<=ly||n===cy},Hn=function(n,e){return n!==kr?!1:e!==Ho},ro=function(n,e,t){return n===cA?No(e)||Hn(e,t):No(n)?!0:!!(n===kr&&Hn(n,e))},cl=function(n,e,t){return n===fi||n===cA?qt(e)?!0:e===is&&qt(t):qt(n===is?e:n)},_y=function(n){var e=0,t=1;(n[e]===fi||n[e]===cA)&&(n[e]===cA&&(t=-1),e++);for(var A=[];qt(n[e]);)A.push(n[e++]);var i=A.length?parseInt(Mt.apply(void 0,A),10):0;n[e]===is&&e++;for(var r=[];qt(n[e]);)r.push(n[e++]);var s=r.length,o=s?parseInt(Mt.apply(void 0,r),10):0;(n[e]===fp||n[e]===hp)&&e++;var a=1;(n[e]===fi||n[e]===cA)&&(n[e]===cA&&(a=-1),e++);for(var l=[];qt(n[e]);)l.push(n[e++]);var c=l.length?parseInt(Mt.apply(void 0,l),10):0;return t*(i+o*Math.pow(10,-s))*Math.pow(10,a*c)},Cy={type:2},yy={type:3},Ey={type:4},by={type:13},My={type:8},Sy={type:21},Uy={type:9},Fy={type:10},Ty={type:11},Iy={type:12},Qy={type:14},so={type:23},Ry={type:1},Ly={type:25},Dy={type:24},Py={type:26},Hy={type:27},Ny={type:28},Oy={type:29},Vy={type:31},Qc={type:32},pp=(function(){function n(){this._value=[]}return n.prototype.write=function(e){this._value=this._value.concat(ra(e))},n.prototype.read=function(){for(var e=[],t=this.consumeToken();t!==Qc;)e.push(t),t=this.consumeToken();return e},n.prototype.consumeToken=function(){var e=this.consumeCodePoint();switch(e){case eo:return this.consumeStringToken(eo);case VC:var t=this.peekCodePoint(0),A=this.peekCodePoint(1),i=this.peekCodePoint(2);if(hf(t)||Hn(A,i)){var r=ro(t,A,i)?HC:PC,s=this.consumeName();return{type:5,value:s,flags:r}}break;case GC:if(this.peekCodePoint(0)===br)return this.consumeCodePoint(),by;break;case to:return this.consumeStringToken(to);case Ao:return Cy;case Mr:return yy;case ll:if(this.peekCodePoint(0)===br)return this.consumeCodePoint(),Qy;break;case fi:if(cl(e,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(e),this.consumeNumericToken();break;case Ay:return Ey;case cA:var o=e,a=this.peekCodePoint(0),l=this.peekCodePoint(1);if(cl(o,a,l))return this.reconsumeCodePoint(e),this.consumeNumericToken();if(ro(o,a,l))return this.reconsumeCodePoint(e),this.consumeIdentLikeToken();if(a===cA&&l===XC)return this.consumeCodePoint(),this.consumeCodePoint(),Dy;break;case is:if(cl(e,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(e),this.consumeNumericToken();break;case af:if(this.peekCodePoint(0)===ll)for(this.consumeCodePoint();;){var c=this.consumeCodePoint();if(c===ll&&(c=this.consumeCodePoint(),c===af))return this.consumeToken();if(c===zA)return this.consumeToken()}break;case ny:return Py;case iy:return Hy;case WC:if(this.peekCodePoint(0)===KC&&this.peekCodePoint(1)===cA&&this.peekCodePoint(2)===cA)return this.consumeCodePoint(),this.consumeCodePoint(),Ly;break;case YC:var u=this.peekCodePoint(0),h=this.peekCodePoint(1),f=this.peekCodePoint(2);if(ro(u,h,f)){var s=this.consumeName();return{type:7,value:s}}break;case qC:return Ny;case kr:if(Hn(e,this.peekCodePoint(0)))return this.reconsumeCodePoint(e),this.consumeIdentLikeToken();break;case JC:return Oy;case ZC:if(this.peekCodePoint(0)===br)return this.consumeCodePoint(),My;break;case jC:return Ty;case $C:return Iy;case uy:case dy:var p=this.peekCodePoint(0),m=this.peekCodePoint(1);return p===fi&&(Pi(m)||m===no)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(e),this.consumeIdentLikeToken();case lf:if(this.peekCodePoint(0)===br)return this.consumeCodePoint(),Uy;if(this.peekCodePoint(0)===lf)return this.consumeCodePoint(),Sy;break;case ey:if(this.peekCodePoint(0)===br)return this.consumeCodePoint(),Fy;break;case zA:return Qc}return io(e)?(this.consumeWhiteSpace(),Vy):qt(e)?(this.reconsumeCodePoint(e),this.consumeNumericToken()):No(e)?(this.reconsumeCodePoint(e),this.consumeIdentLikeToken()):{type:6,value:Mt(e)}},n.prototype.consumeCodePoint=function(){var e=this._value.shift();return typeof e>"u"?-1:e},n.prototype.reconsumeCodePoint=function(e){this._value.unshift(e)},n.prototype.peekCodePoint=function(e){return e>=this._value.length?-1:this._value[e]},n.prototype.consumeUnicodeRangeToken=function(){for(var e=[],t=this.consumeCodePoint();Pi(t)&&e.length<6;)e.push(t),t=this.consumeCodePoint();for(var A=!1;t===no&&e.length<6;)e.push(t),t=this.consumeCodePoint(),A=!0;if(A){var i=parseInt(Mt.apply(void 0,e.map(function(a){return a===no?lp:a})),16),r=parseInt(Mt.apply(void 0,e.map(function(a){return a===no?dp:a})),16);return{type:30,start:i,end:r}}var s=parseInt(Mt.apply(void 0,e),16);if(this.peekCodePoint(0)===cA&&Pi(this.peekCodePoint(1))){this.consumeCodePoint(),t=this.consumeCodePoint();for(var o=[];Pi(t)&&o.length<6;)o.push(t),t=this.consumeCodePoint();var r=parseInt(Mt.apply(void 0,o),16);return{type:30,start:s,end:r}}else return{type:30,start:s,end:s}},n.prototype.consumeIdentLikeToken=function(){var e=this.consumeName();return e.toLowerCase()==="url"&&this.peekCodePoint(0)===Ao?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===Ao?(this.consumeCodePoint(),{type:19,value:e}):{type:20,value:e}},n.prototype.consumeUrlToken=function(){var e=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===zA)return{type:22,value:""};var t=this.peekCodePoint(0);if(t===to||t===eo){var A=this.consumeStringToken(this.consumeCodePoint());return A.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===zA||this.peekCodePoint(0)===Mr)?(this.consumeCodePoint(),{type:22,value:A.value}):(this.consumeBadUrlRemnants(),so)}for(;;){var i=this.consumeCodePoint();if(i===zA||i===Mr)return{type:22,value:Mt.apply(void 0,e)};if(io(i))return this.consumeWhiteSpace(),this.peekCodePoint(0)===zA||this.peekCodePoint(0)===Mr?(this.consumeCodePoint(),{type:22,value:Mt.apply(void 0,e)}):(this.consumeBadUrlRemnants(),so);if(i===eo||i===to||i===Ao||wy(i))return this.consumeBadUrlRemnants(),so;if(i===kr)if(Hn(i,this.peekCodePoint(0)))e.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),so;else e.push(i)}},n.prototype.consumeWhiteSpace=function(){for(;io(this.peekCodePoint(0));)this.consumeCodePoint()},n.prototype.consumeBadUrlRemnants=function(){for(;;){var e=this.consumeCodePoint();if(e===Mr||e===zA)return;Hn(e,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},n.prototype.consumeStringSlice=function(e){for(var t=5e4,A="";e>0;){var i=Math.min(t,e);A+=Mt.apply(void 0,this._value.splice(0,i)),e-=i}return this._value.shift(),A},n.prototype.consumeStringToken=function(e){var t="",A=0;do{var i=this._value[A];if(i===zA||i===void 0||i===e)return t+=this.consumeStringSlice(A),{type:0,value:t};if(i===Ho)return this._value.splice(0,A),Ry;if(i===kr){var r=this._value[A+1];r!==zA&&r!==void 0&&(r===Ho?(t+=this.consumeStringSlice(A),A=-1,this._value.shift()):Hn(i,r)&&(t+=this.consumeStringSlice(A),t+=Mt(this.consumeEscapedCodePoint()),A=-1))}A++}while(!0)},n.prototype.consumeNumber=function(){var e=[],t=ls,A=this.peekCodePoint(0);for((A===fi||A===cA)&&e.push(this.consumeCodePoint());qt(this.peekCodePoint(0));)e.push(this.consumeCodePoint());A=this.peekCodePoint(0);var i=this.peekCodePoint(1);if(A===is&&qt(i))for(e.push(this.consumeCodePoint(),this.consumeCodePoint()),t=of;qt(this.peekCodePoint(0));)e.push(this.consumeCodePoint());A=this.peekCodePoint(0),i=this.peekCodePoint(1);var r=this.peekCodePoint(2);if((A===fp||A===hp)&&((i===fi||i===cA)&&qt(r)||qt(i)))for(e.push(this.consumeCodePoint(),this.consumeCodePoint()),t=of;qt(this.peekCodePoint(0));)e.push(this.consumeCodePoint());return[_y(e),t]},n.prototype.consumeNumericToken=function(){var e=this.consumeNumber(),t=e[0],A=e[1],i=this.peekCodePoint(0),r=this.peekCodePoint(1),s=this.peekCodePoint(2);if(ro(i,r,s)){var o=this.consumeName();return{type:15,number:t,flags:A,unit:o}}return i===zC?(this.consumeCodePoint(),{type:16,number:t,flags:A}):{type:17,number:t,flags:A}},n.prototype.consumeEscapedCodePoint=function(){var e=this.consumeCodePoint();if(Pi(e)){for(var t=Mt(e);Pi(this.peekCodePoint(0))&&t.length<6;)t+=Mt(this.consumeCodePoint());io(this.peekCodePoint(0))&&this.consumeCodePoint();var A=parseInt(t,16);return A===0||gy(A)||A>1114111?cf:A}return e===zA?cf:e},n.prototype.consumeName=function(){for(var e="";;){var t=this.consumeCodePoint();if(hf(t))e+=Mt(t);else if(Hn(t,this.peekCodePoint(0)))e+=Mt(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(t),e}},n})(),gp=(function(){function n(e){this._tokens=e}return n.create=function(e){var t=new pp;return t.write(e),new n(t.read())},n.parseValue=function(e){return n.create(e).parseComponentValue()},n.parseValues=function(e){return n.create(e).parseComponentValues()},n.prototype.parseComponentValue=function(){for(var e=this.consumeToken();e.type===31;)e=this.consumeToken();if(e.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(e);var t=this.consumeComponentValue();do e=this.consumeToken();while(e.type===31);if(e.type===32)return t;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},n.prototype.parseComponentValues=function(){for(var e=[];;){var t=this.consumeComponentValue();if(t.type===32)return e;e.push(t),e.push()}},n.prototype.consumeComponentValue=function(){var e=this.consumeToken();switch(e.type){case 11:case 28:case 2:return this.consumeSimpleBlock(e.type);case 19:return this.consumeFunction(e)}return e},n.prototype.consumeSimpleBlock=function(e){for(var t={type:e,values:[]},A=this.consumeToken();;){if(A.type===32||zy(A,e))return t;this.reconsumeToken(A),t.values.push(this.consumeComponentValue()),A=this.consumeToken()}},n.prototype.consumeFunction=function(e){for(var t={name:e.value,values:[],type:18};;){var A=this.consumeToken();if(A.type===32||A.type===3)return t;this.reconsumeToken(A),t.values.push(this.consumeComponentValue())}},n.prototype.consumeToken=function(){var e=this._tokens.shift();return typeof e>"u"?Qc:e},n.prototype.reconsumeToken=function(e){this._tokens.unshift(e)},n})(),cs=function(n){return n.type===15},pr=function(n){return n.type===17},ct=function(n){return n.type===20},Gy=function(n){return n.type===0},Rc=function(n,e){return ct(n)&&n.value===e},mp=function(n){return n.type!==31},ar=function(n){return n.type!==31&&n.type!==4},tn=function(n){var e=[],t=[];return n.forEach(function(A){if(A.type===4){if(t.length===0)throw new Error("Error parsing function args, zero tokens for arg");e.push(t),t=[];return}A.type!==31&&t.push(A)}),t.length&&e.push(t),e},zy=function(n,e){return e===11&&n.type===12||e===28&&n.type===29?!0:e===2&&n.type===3},qn=function(n){return n.type===17||n.type===15},Tt=function(n){return n.type===16||qn(n)},xp=function(n){return n.length>1?[n[0],n[1]]:[n[0]]},kt={type:17,number:0,flags:ls},mh={type:16,number:50,flags:ls},Gn={type:16,number:100,flags:ls},Pr=function(n,e,t){var A=n[0],i=n[1];return[ft(A,e),ft(typeof i<"u"?i:A,t)]},ft=function(n,e){if(n.type===16)return n.number/100*e;if(cs(n))switch(n.unit){case"rem":case"em":return 16*n.number;case"px":default:return n.number}return n.number},Bp="deg",vp="grad",wp="rad",_p="turn",sa={name:"angle",parse:function(n,e){if(e.type===15)switch(e.unit){case Bp:return Math.PI*e.number/180;case vp:return Math.PI/200*e.number;case wp:return e.number;case _p:return Math.PI*2*e.number}throw new Error("Unsupported angle type")}},Cp=function(n){return n.type===15&&(n.unit===Bp||n.unit===vp||n.unit===wp||n.unit===_p)},yp=function(n){var e=n.filter(ct).map(function(t){return t.value}).join(" ");switch(e){case"to bottom right":case"to right bottom":case"left top":case"top left":return[kt,kt];case"to top":case"bottom":return UA(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[kt,Gn];case"to right":case"left":return UA(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[Gn,Gn];case"to bottom":case"top":return UA(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[Gn,kt];case"to left":case"right":return UA(270)}return 0},UA=function(n){return Math.PI*n/180},Kn={name:"color",parse:function(n,e){if(e.type===18){var t=ky[e.name];if(typeof t>"u")throw new Error('Attempting to parse an unsupported color function "'+e.name+'"');return t(n,e.values)}if(e.type===5){if(e.value.length===3){var A=e.value.substring(0,1),i=e.value.substring(1,2),r=e.value.substring(2,3);return zn(parseInt(A+A,16),parseInt(i+i,16),parseInt(r+r,16),1)}if(e.value.length===4){var A=e.value.substring(0,1),i=e.value.substring(1,2),r=e.value.substring(2,3),s=e.value.substring(3,4);return zn(parseInt(A+A,16),parseInt(i+i,16),parseInt(r+r,16),parseInt(s+s,16)/255)}if(e.value.length===6){var A=e.value.substring(0,2),i=e.value.substring(2,4),r=e.value.substring(4,6);return zn(parseInt(A,16),parseInt(i,16),parseInt(r,16),1)}if(e.value.length===8){var A=e.value.substring(0,2),i=e.value.substring(2,4),r=e.value.substring(4,6),s=e.value.substring(6,8);return zn(parseInt(A,16),parseInt(i,16),parseInt(r,16),parseInt(s,16)/255)}}if(e.type===20){var o=En[e.value.toUpperCase()];if(typeof o<"u")return o}return En.TRANSPARENT}},Wn=function(n){return(255&n)===0},Nt=function(n){var e=255&n,t=255&n>>8,A=255&n>>16,i=255&n>>24;return e<255?"rgba("+i+","+A+","+t+","+e/255+")":"rgb("+i+","+A+","+t+")"},zn=function(n,e,t,A){return(n<<24|e<<16|t<<8|Math.round(A*255)<<0)>>>0},uf=function(n,e){if(n.type===17)return n.number;if(n.type===16){var t=e===3?1:255;return e===3?n.number/100*t:Math.round(n.number/100*t)}return 0},ff=function(n,e){var t=e.filter(ar);if(t.length===3){var A=t.map(uf),i=A[0],r=A[1],s=A[2];return zn(i,r,s,1)}if(t.length===4){var o=t.map(uf),i=o[0],r=o[1],s=o[2],a=o[3];return zn(i,r,s,a)}return 0};function hl(n,e,t){return t<0&&(t+=1),t>=1&&(t-=1),t<1/6?(e-n)*t*6+n:t<1/2?e:t<2/3?(e-n)*6*(2/3-t)+n:n}var df=function(n,e){var t=e.filter(ar),A=t[0],i=t[1],r=t[2],s=t[3],o=(A.type===17?UA(A.number):sa.parse(n,A))/(Math.PI*2),a=Tt(i)?i.number/100:0,l=Tt(r)?r.number/100:0,c=typeof s<"u"&&Tt(s)?ft(s,1):1;if(a===0)return zn(l*255,l*255,l*255,1);var u=l<=.5?l*(a+1):l+a-l*a,h=l*2-u,f=hl(h,u,o+1/3),p=hl(h,u,o),m=hl(h,u,o-1/3);return zn(f*255,p*255,m*255,c)},ky={hsl:df,hsla:df,rgb:ff,rgba:ff},Kr=function(n,e){return Kn.parse(n,gp.create(e).parseComponentValue())},En={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},Ky={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(n,e){return e.map(function(t){if(ct(t))switch(t.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},Wy={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},oa=function(n,e){var t=Kn.parse(n,e[0]),A=e[1];return A&&Tt(A)?{color:t,stop:A}:{color:t,stop:null}},pf=function(n,e){var t=n[0],A=n[n.length-1];t.stop===null&&(t.stop=kt),A.stop===null&&(A.stop=Gn);for(var i=[],r=0,s=0;s<n.length;s++){var o=n[s].stop;if(o!==null){var a=ft(o,e);a>r?i.push(a):i.push(r),r=a}else i.push(null)}for(var l=null,s=0;s<i.length;s++){var c=i[s];if(c===null)l===null&&(l=s);else if(l!==null){for(var u=s-l,h=i[l-1],f=(c-h)/(u+1),p=1;p<=u;p++)i[l+p-1]=f*p;l=null}}return n.map(function(m,g){var d=m.color;return{color:d,stop:Math.max(Math.min(1,i[g]/e),0)}})},Xy=function(n,e,t){var A=e/2,i=t/2,r=ft(n[0],e)-A,s=i-ft(n[1],t);return(Math.atan2(s,r)+Math.PI*2)%(Math.PI*2)},Yy=function(n,e,t){var A=typeof n=="number"?n:Xy(n,e,t),i=Math.abs(e*Math.sin(A))+Math.abs(t*Math.cos(A)),r=e/2,s=t/2,o=i/2,a=Math.sin(A-Math.PI/2)*o,l=Math.cos(A-Math.PI/2)*o;return[i,r-l,r+l,s-a,s+a]},PA=function(n,e){return Math.sqrt(n*n+e*e)},gf=function(n,e,t,A,i){var r=[[0,0],[0,e],[n,0],[n,e]];return r.reduce(function(s,o){var a=o[0],l=o[1],c=PA(t-a,A-l);return(i?c<s.optimumDistance:c>s.optimumDistance)?{optimumCorner:o,optimumDistance:c}:s},{optimumDistance:i?1/0:-1/0,optimumCorner:null}).optimumCorner},qy=function(n,e,t,A,i){var r=0,s=0;switch(n.size){case 0:n.shape===0?r=s=Math.min(Math.abs(e),Math.abs(e-A),Math.abs(t),Math.abs(t-i)):n.shape===1&&(r=Math.min(Math.abs(e),Math.abs(e-A)),s=Math.min(Math.abs(t),Math.abs(t-i)));break;case 2:if(n.shape===0)r=s=Math.min(PA(e,t),PA(e,t-i),PA(e-A,t),PA(e-A,t-i));else if(n.shape===1){var o=Math.min(Math.abs(t),Math.abs(t-i))/Math.min(Math.abs(e),Math.abs(e-A)),a=gf(A,i,e,t,!0),l=a[0],c=a[1];r=PA(l-e,(c-t)/o),s=o*r}break;case 1:n.shape===0?r=s=Math.max(Math.abs(e),Math.abs(e-A),Math.abs(t),Math.abs(t-i)):n.shape===1&&(r=Math.max(Math.abs(e),Math.abs(e-A)),s=Math.max(Math.abs(t),Math.abs(t-i)));break;case 3:if(n.shape===0)r=s=Math.max(PA(e,t),PA(e,t-i),PA(e-A,t),PA(e-A,t-i));else if(n.shape===1){var o=Math.max(Math.abs(t),Math.abs(t-i))/Math.max(Math.abs(e),Math.abs(e-A)),u=gf(A,i,e,t,!1),l=u[0],c=u[1];r=PA(l-e,(c-t)/o),s=o*r}break}return Array.isArray(n.size)&&(r=ft(n.size[0],A),s=n.size.length===2?ft(n.size[1],i):r),[r,s]},Jy=function(n,e){var t=UA(180),A=[];return tn(e).forEach(function(i,r){if(r===0){var s=i[0];if(s.type===20&&s.value==="to"){t=yp(i);return}else if(Cp(s)){t=sa.parse(n,s);return}}var o=oa(n,i);A.push(o)}),{angle:t,stops:A,type:1}},oo=function(n,e){var t=UA(180),A=[];return tn(e).forEach(function(i,r){if(r===0){var s=i[0];if(s.type===20&&["top","left","right","bottom"].indexOf(s.value)!==-1){t=yp(i);return}else if(Cp(s)){t=(sa.parse(n,s)+UA(270))%UA(360);return}}var o=oa(n,i);A.push(o)}),{angle:t,stops:A,type:1}},Zy=function(n,e){var t=UA(180),A=[],i=1,r=0,s=3,o=[];return tn(e).forEach(function(a,l){var c=a[0];if(l===0){if(ct(c)&&c.value==="linear"){i=1;return}else if(ct(c)&&c.value==="radial"){i=2;return}}if(c.type===18){if(c.name==="from"){var u=Kn.parse(n,c.values[0]);A.push({stop:kt,color:u})}else if(c.name==="to"){var u=Kn.parse(n,c.values[0]);A.push({stop:Gn,color:u})}else if(c.name==="color-stop"){var h=c.values.filter(ar);if(h.length===2){var u=Kn.parse(n,h[1]),f=h[0];pr(f)&&A.push({stop:{type:16,number:f.number*100,flags:f.flags},color:u})}}}}),i===1?{angle:(t+UA(180))%UA(360),stops:A,type:i}:{size:s,shape:r,stops:A,position:o,type:i}},Ep="closest-side",bp="farthest-side",Mp="closest-corner",Sp="farthest-corner",Up="circle",Fp="ellipse",Tp="cover",Ip="contain",jy=function(n,e){var t=0,A=3,i=[],r=[];return tn(e).forEach(function(s,o){var a=!0;if(o===0){var l=!1;a=s.reduce(function(u,h){if(l)if(ct(h))switch(h.value){case"center":return r.push(mh),u;case"top":case"left":return r.push(kt),u;case"right":case"bottom":return r.push(Gn),u}else(Tt(h)||qn(h))&&r.push(h);else if(ct(h))switch(h.value){case Up:return t=0,!1;case Fp:return t=1,!1;case"at":return l=!0,!1;case Ep:return A=0,!1;case Tp:case bp:return A=1,!1;case Ip:case Mp:return A=2,!1;case Sp:return A=3,!1}else if(qn(h)||Tt(h))return Array.isArray(A)||(A=[]),A.push(h),!1;return u},a)}if(a){var c=oa(n,s);i.push(c)}}),{size:A,shape:t,stops:i,position:r,type:2}},ao=function(n,e){var t=0,A=3,i=[],r=[];return tn(e).forEach(function(s,o){var a=!0;if(o===0?a=s.reduce(function(c,u){if(ct(u))switch(u.value){case"center":return r.push(mh),!1;case"top":case"left":return r.push(kt),!1;case"right":case"bottom":return r.push(Gn),!1}else if(Tt(u)||qn(u))return r.push(u),!1;return c},a):o===1&&(a=s.reduce(function(c,u){if(ct(u))switch(u.value){case Up:return t=0,!1;case Fp:return t=1,!1;case Ip:case Ep:return A=0,!1;case bp:return A=1,!1;case Mp:return A=2,!1;case Tp:case Sp:return A=3,!1}else if(qn(u)||Tt(u))return Array.isArray(A)||(A=[]),A.push(u),!1;return c},a)),a){var l=oa(n,s);i.push(l)}}),{size:A,shape:t,stops:i,position:r,type:2}},$y=function(n){return n.type===1},eE=function(n){return n.type===2},xh={name:"image",parse:function(n,e){if(e.type===22){var t={url:e.value,type:0};return n.cache.addImage(e.value),t}if(e.type===18){var A=Qp[e.name];if(typeof A>"u")throw new Error('Attempting to parse an unsupported image function "'+e.name+'"');return A(n,e.values)}throw new Error("Unsupported image type "+e.type)}};function tE(n){return!(n.type===20&&n.value==="none")&&(n.type!==18||!!Qp[n.name])}var Qp={"linear-gradient":Jy,"-moz-linear-gradient":oo,"-ms-linear-gradient":oo,"-o-linear-gradient":oo,"-webkit-linear-gradient":oo,"radial-gradient":jy,"-moz-radial-gradient":ao,"-ms-radial-gradient":ao,"-o-radial-gradient":ao,"-webkit-radial-gradient":ao,"-webkit-gradient":Zy},AE={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(n,e){if(e.length===0)return[];var t=e[0];return t.type===20&&t.value==="none"?[]:e.filter(function(A){return ar(A)&&tE(A)}).map(function(A){return xh.parse(n,A)})}},nE={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(n,e){return e.map(function(t){if(ct(t))switch(t.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},iE={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(n,e){return tn(e).map(function(t){return t.filter(Tt)}).map(xp)}},rE={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(n,e){return tn(e).map(function(t){return t.filter(ct).map(function(A){return A.value}).join(" ")}).map(sE)}},sE=function(n){switch(n){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;case"repeat":default:return 0}},er;(function(n){n.AUTO="auto",n.CONTAIN="contain",n.COVER="cover"})(er||(er={}));var oE={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(n,e){return tn(e).map(function(t){return t.filter(aE)})}},aE=function(n){return ct(n)||Tt(n)},aa=function(n){return{name:"border-"+n+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},lE=aa("top"),cE=aa("right"),hE=aa("bottom"),uE=aa("left"),la=function(n){return{name:"border-radius-"+n,initialValue:"0 0",prefix:!1,type:1,parse:function(e,t){return xp(t.filter(Tt))}}},fE=la("top-left"),dE=la("top-right"),pE=la("bottom-right"),gE=la("bottom-left"),ca=function(n){return{name:"border-"+n+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(e,t){switch(t){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},mE=ca("top"),xE=ca("right"),BE=ca("bottom"),vE=ca("left"),ha=function(n){return{name:"border-"+n+"-width",initialValue:"0",type:0,prefix:!1,parse:function(e,t){return cs(t)?t.number:0}}},wE=ha("top"),_E=ha("right"),CE=ha("bottom"),yE=ha("left"),EE={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},bE={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(n,e){switch(e){case"rtl":return 1;case"ltr":default:return 0}}},ME={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(n,e){return e.filter(ct).reduce(function(t,A){return t|SE(A.value)},0)}},SE=function(n){switch(n){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},UE={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(n,e){switch(e){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},FE={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(n,e){return e.type===20&&e.value==="normal"?0:e.type===17||e.type===15?e.number:0}},Oo;(function(n){n.NORMAL="normal",n.STRICT="strict"})(Oo||(Oo={}));var TE={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(n,e){switch(e){case"strict":return Oo.STRICT;case"normal":default:return Oo.NORMAL}}},IE={name:"line-height",initialValue:"normal",prefix:!1,type:4},mf=function(n,e){return ct(n)&&n.value==="normal"?1.2*e:n.type===17?e*n.number:Tt(n)?ft(n,e):e},QE={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(n,e){return e.type===20&&e.value==="none"?null:xh.parse(n,e)}},RE={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(n,e){switch(e){case"inside":return 0;case"outside":default:return 1}}},Lc={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(n,e){switch(e){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;case"none":default:return-1}}},ua=function(n){return{name:"margin-"+n,initialValue:"0",prefix:!1,type:4}},LE=ua("top"),DE=ua("right"),PE=ua("bottom"),HE=ua("left"),NE={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(n,e){return e.filter(ct).map(function(t){switch(t.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;case"visible":default:return 0}})}},OE={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(n,e){switch(e){case"break-word":return"break-word";case"normal":default:return"normal"}}},fa=function(n){return{name:"padding-"+n,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},VE=fa("top"),GE=fa("right"),zE=fa("bottom"),kE=fa("left"),KE={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(n,e){switch(e){case"right":return 2;case"center":case"justify":return 1;case"left":default:return 0}}},WE={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(n,e){switch(e){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},XE={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(n,e){return e.length===1&&Rc(e[0],"none")?[]:tn(e).map(function(t){for(var A={color:En.TRANSPARENT,offsetX:kt,offsetY:kt,blur:kt},i=0,r=0;r<t.length;r++){var s=t[r];qn(s)?(i===0?A.offsetX=s:i===1?A.offsetY=s:A.blur=s,i++):A.color=Kn.parse(n,s)}return A})}},YE={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(n,e){switch(e){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},qE={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(n,e){if(e.type===20&&e.value==="none")return null;if(e.type===18){var t=jE[e.name];if(typeof t>"u")throw new Error('Attempting to parse an unsupported transform function "'+e.name+'"');return t(e.values)}return null}},JE=function(n){var e=n.filter(function(t){return t.type===17}).map(function(t){return t.number});return e.length===6?e:null},ZE=function(n){var e=n.filter(function(a){return a.type===17}).map(function(a){return a.number}),t=e[0],A=e[1];e[2],e[3];var i=e[4],r=e[5];e[6],e[7],e[8],e[9],e[10],e[11];var s=e[12],o=e[13];return e[14],e[15],e.length===16?[t,A,i,r,s,o]:null},jE={matrix:JE,matrix3d:ZE},xf={type:16,number:50,flags:ls},$E=[xf,xf],eb={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(n,e){var t=e.filter(Tt);return t.length!==2?$E:[t[0],t[1]]}},tb={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(n,e){switch(e){case"hidden":return 1;case"collapse":return 2;case"visible":default:return 0}}},Wr;(function(n){n.NORMAL="normal",n.BREAK_ALL="break-all",n.KEEP_ALL="keep-all"})(Wr||(Wr={}));var Ab={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(n,e){switch(e){case"break-all":return Wr.BREAK_ALL;case"keep-all":return Wr.KEEP_ALL;case"normal":default:return Wr.NORMAL}}},nb={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(n,e){if(e.type===20)return{auto:!0,order:0};if(pr(e))return{auto:!1,order:e.number};throw new Error("Invalid z-index number parsed")}},Rp={name:"time",parse:function(n,e){if(e.type===15)switch(e.unit.toLowerCase()){case"s":return 1e3*e.number;case"ms":return e.number}throw new Error("Unsupported time type")}},ib={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(n,e){return pr(e)?e.number:1}},rb={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},sb={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(n,e){return e.filter(ct).map(function(t){switch(t.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(t){return t!==0})}},ob={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(n,e){var t=[],A=[];return e.forEach(function(i){switch(i.type){case 20:case 0:t.push(i.value);break;case 17:t.push(i.number.toString());break;case 4:A.push(t.join(" ")),t.length=0;break}}),t.length&&A.push(t.join(" ")),A.map(function(i){return i.indexOf(" ")===-1?i:"'"+i+"'"})}},ab={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},lb={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(n,e){if(pr(e))return e.number;if(ct(e))switch(e.value){case"bold":return 700;case"normal":default:return 400}return 400}},cb={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(n,e){return e.filter(ct).map(function(t){return t.value})}},hb={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(n,e){switch(e){case"oblique":return"oblique";case"italic":return"italic";case"normal":default:return"normal"}}},Lt=function(n,e){return(n&e)!==0},ub={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(n,e){if(e.length===0)return[];var t=e[0];return t.type===20&&t.value==="none"?[]:e}},fb={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(n,e){if(e.length===0)return null;var t=e[0];if(t.type===20&&t.value==="none")return null;for(var A=[],i=e.filter(mp),r=0;r<i.length;r++){var s=i[r],o=i[r+1];if(s.type===20){var a=o&&pr(o)?o.number:1;A.push({counter:s.value,increment:a})}}return A}},db={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(n,e){if(e.length===0)return[];for(var t=[],A=e.filter(mp),i=0;i<A.length;i++){var r=A[i],s=A[i+1];if(ct(r)&&r.value!=="none"){var o=s&&pr(s)?s.number:0;t.push({counter:r.value,reset:o})}}return t}},pb={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(n,e){return e.filter(cs).map(function(t){return Rp.parse(n,t)})}},gb={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(n,e){if(e.length===0)return null;var t=e[0];if(t.type===20&&t.value==="none")return null;var A=[],i=e.filter(Gy);if(i.length%2!==0)return null;for(var r=0;r<i.length;r+=2){var s=i[r].value,o=i[r+1].value;A.push({open:s,close:o})}return A}},Bf=function(n,e,t){if(!n)return"";var A=n[Math.min(e,n.length-1)];return A?t?A.open:A.close:""},mb={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(n,e){return e.length===1&&Rc(e[0],"none")?[]:tn(e).map(function(t){for(var A={color:255,offsetX:kt,offsetY:kt,blur:kt,spread:kt,inset:!1},i=0,r=0;r<t.length;r++){var s=t[r];Rc(s,"inset")?A.inset=!0:qn(s)?(i===0?A.offsetX=s:i===1?A.offsetY=s:i===2?A.blur=s:A.spread=s,i++):A.color=Kn.parse(n,s)}return A})}},xb={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(n,e){var t=[0,1,2],A=[];return e.filter(ct).forEach(function(i){switch(i.value){case"stroke":A.push(1);break;case"fill":A.push(0);break;case"markers":A.push(2);break}}),t.forEach(function(i){A.indexOf(i)===-1&&A.push(i)}),A}},Bb={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},vb={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(n,e){return cs(e)?e.number:0}},wb=(function(){function n(e,t){var A,i;this.animationDuration=pe(e,pb,t.animationDuration),this.backgroundClip=pe(e,Ky,t.backgroundClip),this.backgroundColor=pe(e,Wy,t.backgroundColor),this.backgroundImage=pe(e,AE,t.backgroundImage),this.backgroundOrigin=pe(e,nE,t.backgroundOrigin),this.backgroundPosition=pe(e,iE,t.backgroundPosition),this.backgroundRepeat=pe(e,rE,t.backgroundRepeat),this.backgroundSize=pe(e,oE,t.backgroundSize),this.borderTopColor=pe(e,lE,t.borderTopColor),this.borderRightColor=pe(e,cE,t.borderRightColor),this.borderBottomColor=pe(e,hE,t.borderBottomColor),this.borderLeftColor=pe(e,uE,t.borderLeftColor),this.borderTopLeftRadius=pe(e,fE,t.borderTopLeftRadius),this.borderTopRightRadius=pe(e,dE,t.borderTopRightRadius),this.borderBottomRightRadius=pe(e,pE,t.borderBottomRightRadius),this.borderBottomLeftRadius=pe(e,gE,t.borderBottomLeftRadius),this.borderTopStyle=pe(e,mE,t.borderTopStyle),this.borderRightStyle=pe(e,xE,t.borderRightStyle),this.borderBottomStyle=pe(e,BE,t.borderBottomStyle),this.borderLeftStyle=pe(e,vE,t.borderLeftStyle),this.borderTopWidth=pe(e,wE,t.borderTopWidth),this.borderRightWidth=pe(e,_E,t.borderRightWidth),this.borderBottomWidth=pe(e,CE,t.borderBottomWidth),this.borderLeftWidth=pe(e,yE,t.borderLeftWidth),this.boxShadow=pe(e,mb,t.boxShadow),this.color=pe(e,EE,t.color),this.direction=pe(e,bE,t.direction),this.display=pe(e,ME,t.display),this.float=pe(e,UE,t.cssFloat),this.fontFamily=pe(e,ob,t.fontFamily),this.fontSize=pe(e,ab,t.fontSize),this.fontStyle=pe(e,hb,t.fontStyle),this.fontVariant=pe(e,cb,t.fontVariant),this.fontWeight=pe(e,lb,t.fontWeight),this.letterSpacing=pe(e,FE,t.letterSpacing),this.lineBreak=pe(e,TE,t.lineBreak),this.lineHeight=pe(e,IE,t.lineHeight),this.listStyleImage=pe(e,QE,t.listStyleImage),this.listStylePosition=pe(e,RE,t.listStylePosition),this.listStyleType=pe(e,Lc,t.listStyleType),this.marginTop=pe(e,LE,t.marginTop),this.marginRight=pe(e,DE,t.marginRight),this.marginBottom=pe(e,PE,t.marginBottom),this.marginLeft=pe(e,HE,t.marginLeft),this.opacity=pe(e,ib,t.opacity);var r=pe(e,NE,t.overflow);this.overflowX=r[0],this.overflowY=r[r.length>1?1:0],this.overflowWrap=pe(e,OE,t.overflowWrap),this.paddingTop=pe(e,VE,t.paddingTop),this.paddingRight=pe(e,GE,t.paddingRight),this.paddingBottom=pe(e,zE,t.paddingBottom),this.paddingLeft=pe(e,kE,t.paddingLeft),this.paintOrder=pe(e,xb,t.paintOrder),this.position=pe(e,WE,t.position),this.textAlign=pe(e,KE,t.textAlign),this.textDecorationColor=pe(e,rb,(A=t.textDecorationColor)!==null&&A!==void 0?A:t.color),this.textDecorationLine=pe(e,sb,(i=t.textDecorationLine)!==null&&i!==void 0?i:t.textDecoration),this.textShadow=pe(e,XE,t.textShadow),this.textTransform=pe(e,YE,t.textTransform),this.transform=pe(e,qE,t.transform),this.transformOrigin=pe(e,eb,t.transformOrigin),this.visibility=pe(e,tb,t.visibility),this.webkitTextStrokeColor=pe(e,Bb,t.webkitTextStrokeColor),this.webkitTextStrokeWidth=pe(e,vb,t.webkitTextStrokeWidth),this.wordBreak=pe(e,Ab,t.wordBreak),this.zIndex=pe(e,nb,t.zIndex)}return n.prototype.isVisible=function(){return this.display>0&&this.opacity>0&&this.visibility===0},n.prototype.isTransparent=function(){return Wn(this.backgroundColor)},n.prototype.isTransformed=function(){return this.transform!==null},n.prototype.isPositioned=function(){return this.position!==0},n.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},n.prototype.isFloating=function(){return this.float!==0},n.prototype.isInlineLevel=function(){return Lt(this.display,4)||Lt(this.display,33554432)||Lt(this.display,268435456)||Lt(this.display,536870912)||Lt(this.display,67108864)||Lt(this.display,134217728)},n})(),_b=(function(){function n(e,t){this.content=pe(e,ub,t.content),this.quotes=pe(e,gb,t.quotes)}return n})(),vf=(function(){function n(e,t){this.counterIncrement=pe(e,fb,t.counterIncrement),this.counterReset=pe(e,db,t.counterReset)}return n})(),pe=function(n,e,t){var A=new pp,i=t!==null&&typeof t<"u"?t.toString():e.initialValue;A.write(i);var r=new gp(A.read());switch(e.type){case 2:var s=r.parseComponentValue();return e.parse(n,ct(s)?s.value:e.initialValue);case 0:return e.parse(n,r.parseComponentValue());case 1:return e.parse(n,r.parseComponentValues());case 4:return r.parseComponentValue();case 3:switch(e.format){case"angle":return sa.parse(n,r.parseComponentValue());case"color":return Kn.parse(n,r.parseComponentValue());case"image":return xh.parse(n,r.parseComponentValue());case"length":var o=r.parseComponentValue();return qn(o)?o:kt;case"length-percentage":var a=r.parseComponentValue();return Tt(a)?a:kt;case"time":return Rp.parse(n,r.parseComponentValue())}break}},Cb="data-html2canvas-debug",yb=function(n){var e=n.getAttribute(Cb);switch(e){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},Dc=function(n,e){var t=yb(n);return t===1||e===t},An=(function(){function n(e,t){if(this.context=e,this.textNodes=[],this.elements=[],this.flags=0,Dc(t,3))debugger;this.styles=new wb(e,window.getComputedStyle(t,null)),Nc(t)&&(this.styles.animationDuration.some(function(A){return A>0})&&(t.style.animationDuration="0s"),this.styles.transform!==null&&(t.style.transform="none")),this.bounds=ia(this.context,t),Dc(t,4)&&(this.flags|=16)}return n})(),Eb="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",wf="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Hr=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var lo=0;lo<wf.length;lo++)Hr[wf.charCodeAt(lo)]=lo;var bb=function(n){var e=n.length*.75,t=n.length,A,i=0,r,s,o,a;n[n.length-1]==="="&&(e--,n[n.length-2]==="="&&e--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(e):new Array(e),c=Array.isArray(l)?l:new Uint8Array(l);for(A=0;A<t;A+=4)r=Hr[n.charCodeAt(A)],s=Hr[n.charCodeAt(A+1)],o=Hr[n.charCodeAt(A+2)],a=Hr[n.charCodeAt(A+3)],c[i++]=r<<2|s>>4,c[i++]=(s&15)<<4|o>>2,c[i++]=(o&3)<<6|a&63;return l},Mb=function(n){for(var e=n.length,t=[],A=0;A<e;A+=2)t.push(n[A+1]<<8|n[A]);return t},Sb=function(n){for(var e=n.length,t=[],A=0;A<e;A+=4)t.push(n[A+3]<<24|n[A+2]<<16|n[A+1]<<8|n[A]);return t},pi=5,Bh=11,ul=2,Ub=Bh-pi,Lp=65536>>pi,Fb=1<<pi,fl=Fb-1,Tb=1024>>pi,Ib=Lp+Tb,Qb=Ib,Rb=32,Lb=Qb+Rb,Db=65536>>Bh,Pb=1<<Ub,Hb=Pb-1,_f=function(n,e,t){return n.slice?n.slice(e,t):new Uint16Array(Array.prototype.slice.call(n,e,t))},Nb=function(n,e,t){return n.slice?n.slice(e,t):new Uint32Array(Array.prototype.slice.call(n,e,t))},Ob=function(n,e){var t=bb(n),A=Array.isArray(t)?Sb(t):new Uint32Array(t),i=Array.isArray(t)?Mb(t):new Uint16Array(t),r=24,s=_f(i,r/2,A[4]/2),o=A[5]===2?_f(i,(r+A[4])/2):Nb(A,Math.ceil((r+A[4])/4));return new Vb(A[0],A[1],A[2],A[3],s,o)},Vb=(function(){function n(e,t,A,i,r,s){this.initialValue=e,this.errorValue=t,this.highStart=A,this.highValueIndex=i,this.index=r,this.data=s}return n.prototype.get=function(e){var t;if(e>=0){if(e<55296||e>56319&&e<=65535)return t=this.index[e>>pi],t=(t<<ul)+(e&fl),this.data[t];if(e<=65535)return t=this.index[Lp+(e-55296>>pi)],t=(t<<ul)+(e&fl),this.data[t];if(e<this.highStart)return t=Lb-Db+(e>>Bh),t=this.index[t],t+=e>>pi&Hb,t=this.index[t],t=(t<<ul)+(e&fl),this.data[t];if(e<=1114111)return this.data[this.highValueIndex]}return this.errorValue},n})(),Cf="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Gb=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var co=0;co<Cf.length;co++)Gb[Cf.charCodeAt(co)]=co;var zb=1,dl=2,pl=3,yf=4,Ef=5,kb=7,bf=8,gl=9,ml=10,Mf=11,Sf=12,Uf=13,Ff=14,xl=15,Kb=function(n){for(var e=[],t=0,A=n.length;t<A;){var i=n.charCodeAt(t++);if(i>=55296&&i<=56319&&t<A){var r=n.charCodeAt(t++);(r&64512)===56320?e.push(((i&1023)<<10)+(r&1023)+65536):(e.push(i),t--)}else e.push(i)}return e},Wb=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,n);var t=n.length;if(!t)return"";for(var A=[],i=-1,r="";++i<t;){var s=n[i];s<=65535?A.push(s):(s-=65536,A.push((s>>10)+55296,s%1024+56320)),(i+1===t||A.length>16384)&&(r+=String.fromCharCode.apply(String,A),A.length=0)}return r},Xb=Ob(Eb),EA="×",Bl="÷",Yb=function(n){return Xb.get(n)},qb=function(n,e,t){var A=t-2,i=e[A],r=e[t-1],s=e[t];if(r===dl&&s===pl)return EA;if(r===dl||r===pl||r===yf||s===dl||s===pl||s===yf)return Bl;if(r===bf&&[bf,gl,Mf,Sf].indexOf(s)!==-1||(r===Mf||r===gl)&&(s===gl||s===ml)||(r===Sf||r===ml)&&s===ml||s===Uf||s===Ef||s===kb||r===zb)return EA;if(r===Uf&&s===Ff){for(;i===Ef;)i=e[--A];if(i===Ff)return EA}if(r===xl&&s===xl){for(var o=0;i===xl;)o++,i=e[--A];if(o%2===0)return EA}return Bl},Jb=function(n){var e=Kb(n),t=e.length,A=0,i=0,r=e.map(Yb);return{next:function(){if(A>=t)return{done:!0,value:null};for(var s=EA;A<t&&(s=qb(e,r,++A))===EA;);if(s!==EA||A===t){var o=Wb.apply(null,e.slice(i,A));return i=A,{value:o,done:!1}}return{done:!0,value:null}}}},Zb=function(n){for(var e=Jb(n),t=[],A;!(A=e.next()).done;)A.value&&t.push(A.value.slice());return t},jb=function(n){var e=123;if(n.createRange){var t=n.createRange();if(t.getBoundingClientRect){var A=n.createElement("boundtest");A.style.height=e+"px",A.style.display="block",n.body.appendChild(A),t.selectNode(A);var i=t.getBoundingClientRect(),r=Math.round(i.height);if(n.body.removeChild(A),r===e)return!0}}return!1},$b=function(n){var e=n.createElement("boundtest");e.style.width="50px",e.style.display="block",e.style.fontSize="12px",e.style.letterSpacing="0px",e.style.wordSpacing="0px",n.body.appendChild(e);var t=n.createRange();e.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";var A=e.firstChild,i=ra(A.data).map(function(a){return Mt(a)}),r=0,s={},o=i.every(function(a,l){t.setStart(A,r),t.setEnd(A,r+a.length);var c=t.getBoundingClientRect();r+=a.length;var u=c.x>s.x||c.y>s.y;return s=c,l===0?!0:u});return n.body.removeChild(e),o},eM=function(){return typeof new Image().crossOrigin<"u"},tM=function(){return typeof new XMLHttpRequest().responseType=="string"},AM=function(n){var e=new Image,t=n.createElement("canvas"),A=t.getContext("2d");if(!A)return!1;e.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{A.drawImage(e,0,0),t.toDataURL()}catch{return!1}return!0},Tf=function(n){return n[0]===0&&n[1]===255&&n[2]===0&&n[3]===255},nM=function(n){var e=n.createElement("canvas"),t=100;e.width=t,e.height=t;var A=e.getContext("2d");if(!A)return Promise.reject(!1);A.fillStyle="rgb(0, 255, 0)",A.fillRect(0,0,t,t);var i=new Image,r=e.toDataURL();i.src=r;var s=Pc(t,t,0,0,i);return A.fillStyle="red",A.fillRect(0,0,t,t),If(s).then(function(o){A.drawImage(o,0,0);var a=A.getImageData(0,0,t,t).data;A.fillStyle="red",A.fillRect(0,0,t,t);var l=n.createElement("div");return l.style.backgroundImage="url("+r+")",l.style.height=t+"px",Tf(a)?If(Pc(t,t,0,0,l)):Promise.reject(!1)}).then(function(o){return A.drawImage(o,0,0),Tf(A.getImageData(0,0,t,t).data)}).catch(function(){return!1})},Pc=function(n,e,t,A,i){var r="http://www.w3.org/2000/svg",s=document.createElementNS(r,"svg"),o=document.createElementNS(r,"foreignObject");return s.setAttributeNS(null,"width",n.toString()),s.setAttributeNS(null,"height",e.toString()),o.setAttributeNS(null,"width","100%"),o.setAttributeNS(null,"height","100%"),o.setAttributeNS(null,"x",t.toString()),o.setAttributeNS(null,"y",A.toString()),o.setAttributeNS(null,"externalResourcesRequired","true"),s.appendChild(o),o.appendChild(i),s},If=function(n){return new Promise(function(e,t){var A=new Image;A.onload=function(){return e(A)},A.onerror=t,A.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(n))})},Gt={get SUPPORT_RANGE_BOUNDS(){var n=jb(document);return Object.defineProperty(Gt,"SUPPORT_RANGE_BOUNDS",{value:n}),n},get SUPPORT_WORD_BREAKING(){var n=Gt.SUPPORT_RANGE_BOUNDS&&$b(document);return Object.defineProperty(Gt,"SUPPORT_WORD_BREAKING",{value:n}),n},get SUPPORT_SVG_DRAWING(){var n=AM(document);return Object.defineProperty(Gt,"SUPPORT_SVG_DRAWING",{value:n}),n},get SUPPORT_FOREIGNOBJECT_DRAWING(){var n=typeof Array.from=="function"&&typeof window.fetch=="function"?nM(document):Promise.resolve(!1);return Object.defineProperty(Gt,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:n}),n},get SUPPORT_CORS_IMAGES(){var n=eM();return Object.defineProperty(Gt,"SUPPORT_CORS_IMAGES",{value:n}),n},get SUPPORT_RESPONSE_TYPE(){var n=tM();return Object.defineProperty(Gt,"SUPPORT_RESPONSE_TYPE",{value:n}),n},get SUPPORT_CORS_XHR(){var n="withCredentials"in new XMLHttpRequest;return Object.defineProperty(Gt,"SUPPORT_CORS_XHR",{value:n}),n},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var n=!!(typeof Intl<"u"&&Intl.Segmenter);return Object.defineProperty(Gt,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:n}),n}},Xr=(function(){function n(e,t){this.text=e,this.bounds=t}return n})(),iM=function(n,e,t,A){var i=oM(e,t),r=[],s=0;return i.forEach(function(o){if(t.textDecorationLine.length||o.trim().length>0)if(Gt.SUPPORT_RANGE_BOUNDS){var a=Qf(A,s,o.length).getClientRects();if(a.length>1){var l=vh(o),c=0;l.forEach(function(h){r.push(new Xr(h,bn.fromDOMRectList(n,Qf(A,c+s,h.length).getClientRects()))),c+=h.length})}else r.push(new Xr(o,bn.fromDOMRectList(n,a)))}else{var u=A.splitText(o.length);r.push(new Xr(o,rM(n,A))),A=u}else Gt.SUPPORT_RANGE_BOUNDS||(A=A.splitText(o.length));s+=o.length}),r},rM=function(n,e){var t=e.ownerDocument;if(t){var A=t.createElement("html2canvaswrapper");A.appendChild(e.cloneNode(!0));var i=e.parentNode;if(i){i.replaceChild(A,e);var r=ia(n,A);return A.firstChild&&i.replaceChild(A.firstChild,A),r}}return bn.EMPTY},Qf=function(n,e,t){var A=n.ownerDocument;if(!A)throw new Error("Node has no owner document");var i=A.createRange();return i.setStart(n,e),i.setEnd(n,e+t),i},vh=function(n){if(Gt.SUPPORT_NATIVE_TEXT_SEGMENTATION){var e=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(e.segment(n)).map(function(t){return t.segment})}return Zb(n)},sM=function(n,e){if(Gt.SUPPORT_NATIVE_TEXT_SEGMENTATION){var t=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(t.segment(n)).map(function(A){return A.segment})}return lM(n,e)},oM=function(n,e){return e.letterSpacing!==0?vh(n):sM(n,e)},aM=[32,160,4961,65792,65793,4153,4241],lM=function(n,e){for(var t=DC(n,{lineBreak:e.lineBreak,wordBreak:e.overflowWrap==="break-word"?"break-word":e.wordBreak}),A=[],i,r=function(){if(i.value){var s=i.value.slice(),o=ra(s),a="";o.forEach(function(l){aM.indexOf(l)===-1?a+=Mt(l):(a.length&&A.push(a),A.push(Mt(l)),a="")}),a.length&&A.push(a)}};!(i=t.next()).done;)r();return A},cM=(function(){function n(e,t,A){this.text=hM(t.data,A.textTransform),this.textBounds=iM(e,this.text,A,t)}return n})(),hM=function(n,e){switch(e){case 1:return n.toLowerCase();case 3:return n.replace(uM,fM);case 2:return n.toUpperCase();default:return n}},uM=/(^|\s|:|-|\(|\))([a-z])/g,fM=function(n,e,t){return n.length>0?e+t.toUpperCase():n},Dp=(function(n){VA(e,n);function e(t,A){var i=n.call(this,t,A)||this;return i.src=A.currentSrc||A.src,i.intrinsicWidth=A.naturalWidth,i.intrinsicHeight=A.naturalHeight,i.context.cache.addImage(i.src),i}return e})(An),Pp=(function(n){VA(e,n);function e(t,A){var i=n.call(this,t,A)||this;return i.canvas=A,i.intrinsicWidth=A.width,i.intrinsicHeight=A.height,i}return e})(An),Hp=(function(n){VA(e,n);function e(t,A){var i=n.call(this,t,A)||this,r=new XMLSerializer,s=ia(t,A);return A.setAttribute("width",s.width+"px"),A.setAttribute("height",s.height+"px"),i.svg="data:image/svg+xml,"+encodeURIComponent(r.serializeToString(A)),i.intrinsicWidth=A.width.baseVal.value,i.intrinsicHeight=A.height.baseVal.value,i.context.cache.addImage(i.svg),i}return e})(An),Np=(function(n){VA(e,n);function e(t,A){var i=n.call(this,t,A)||this;return i.value=A.value,i}return e})(An),Hc=(function(n){VA(e,n);function e(t,A){var i=n.call(this,t,A)||this;return i.start=A.start,i.reversed=typeof A.reversed=="boolean"&&A.reversed===!0,i}return e})(An),dM=[{type:15,flags:0,unit:"px",number:3}],pM=[{type:16,flags:0,number:50}],gM=function(n){return n.width>n.height?new bn(n.left+(n.width-n.height)/2,n.top,n.height,n.height):n.width<n.height?new bn(n.left,n.top+(n.height-n.width)/2,n.width,n.width):n},mM=function(n){var e=n.type===xM?new Array(n.value.length+1).join("•"):n.value;return e.length===0?n.placeholder||"":e},Vo="checkbox",Go="radio",xM="password",Rf=707406591,wh=(function(n){VA(e,n);function e(t,A){var i=n.call(this,t,A)||this;switch(i.type=A.type.toLowerCase(),i.checked=A.checked,i.value=mM(A),(i.type===Vo||i.type===Go)&&(i.styles.backgroundColor=3739148031,i.styles.borderTopColor=i.styles.borderRightColor=i.styles.borderBottomColor=i.styles.borderLeftColor=2779096575,i.styles.borderTopWidth=i.styles.borderRightWidth=i.styles.borderBottomWidth=i.styles.borderLeftWidth=1,i.styles.borderTopStyle=i.styles.borderRightStyle=i.styles.borderBottomStyle=i.styles.borderLeftStyle=1,i.styles.backgroundClip=[0],i.styles.backgroundOrigin=[0],i.bounds=gM(i.bounds)),i.type){case Vo:i.styles.borderTopRightRadius=i.styles.borderTopLeftRadius=i.styles.borderBottomRightRadius=i.styles.borderBottomLeftRadius=dM;break;case Go:i.styles.borderTopRightRadius=i.styles.borderTopLeftRadius=i.styles.borderBottomRightRadius=i.styles.borderBottomLeftRadius=pM;break}return i}return e})(An),Op=(function(n){VA(e,n);function e(t,A){var i=n.call(this,t,A)||this,r=A.options[A.selectedIndex||0];return i.value=r&&r.text||"",i}return e})(An),Vp=(function(n){VA(e,n);function e(t,A){var i=n.call(this,t,A)||this;return i.value=A.value,i}return e})(An),Gp=(function(n){VA(e,n);function e(t,A){var i=n.call(this,t,A)||this;i.src=A.src,i.width=parseInt(A.width,10)||0,i.height=parseInt(A.height,10)||0,i.backgroundColor=i.styles.backgroundColor;try{if(A.contentWindow&&A.contentWindow.document&&A.contentWindow.document.documentElement){i.tree=kp(t,A.contentWindow.document.documentElement);var r=A.contentWindow.document.documentElement?Kr(t,getComputedStyle(A.contentWindow.document.documentElement).backgroundColor):En.TRANSPARENT,s=A.contentWindow.document.body?Kr(t,getComputedStyle(A.contentWindow.document.body).backgroundColor):En.TRANSPARENT;i.backgroundColor=Wn(r)?Wn(s)?i.styles.backgroundColor:s:r}}catch{}return i}return e})(An),BM=["OL","UL","MENU"],Uo=function(n,e,t,A){for(var i=e.firstChild,r=void 0;i;i=r)if(r=i.nextSibling,Kp(i)&&i.data.trim().length>0)t.textNodes.push(new cM(n,i,t.styles));else if(Yi(i))if(qp(i)&&i.assignedNodes)i.assignedNodes().forEach(function(o){return Uo(n,o,t,A)});else{var s=zp(n,i);s.styles.isVisible()&&(vM(i,s,A)?s.flags|=4:wM(s.styles)&&(s.flags|=2),BM.indexOf(i.tagName)!==-1&&(s.flags|=8),t.elements.push(s),i.slot,i.shadowRoot?Uo(n,i.shadowRoot,s,A):!zo(i)&&!Wp(i)&&!ko(i)&&Uo(n,i,s,A))}},zp=function(n,e){return Oc(e)?new Dp(n,e):Xp(e)?new Pp(n,e):Wp(e)?new Hp(n,e):_M(e)?new Np(n,e):CM(e)?new Hc(n,e):yM(e)?new wh(n,e):ko(e)?new Op(n,e):zo(e)?new Vp(n,e):Yp(e)?new Gp(n,e):new An(n,e)},kp=function(n,e){var t=zp(n,e);return t.flags|=4,Uo(n,e,t,t),t},vM=function(n,e,t){return e.styles.isPositionedWithZIndex()||e.styles.opacity<1||e.styles.isTransformed()||_h(n)&&t.styles.isTransparent()},wM=function(n){return n.isPositioned()||n.isFloating()},Kp=function(n){return n.nodeType===Node.TEXT_NODE},Yi=function(n){return n.nodeType===Node.ELEMENT_NODE},Nc=function(n){return Yi(n)&&typeof n.style<"u"&&!Fo(n)},Fo=function(n){return typeof n.className=="object"},_M=function(n){return n.tagName==="LI"},CM=function(n){return n.tagName==="OL"},yM=function(n){return n.tagName==="INPUT"},EM=function(n){return n.tagName==="HTML"},Wp=function(n){return n.tagName==="svg"},_h=function(n){return n.tagName==="BODY"},Xp=function(n){return n.tagName==="CANVAS"},Lf=function(n){return n.tagName==="VIDEO"},Oc=function(n){return n.tagName==="IMG"},Yp=function(n){return n.tagName==="IFRAME"},Df=function(n){return n.tagName==="STYLE"},bM=function(n){return n.tagName==="SCRIPT"},zo=function(n){return n.tagName==="TEXTAREA"},ko=function(n){return n.tagName==="SELECT"},qp=function(n){return n.tagName==="SLOT"},Pf=function(n){return n.tagName.indexOf("-")>0},MM=(function(){function n(){this.counters={}}return n.prototype.getCounterValue=function(e){var t=this.counters[e];return t&&t.length?t[t.length-1]:1},n.prototype.getCounterValues=function(e){var t=this.counters[e];return t||[]},n.prototype.pop=function(e){var t=this;e.forEach(function(A){return t.counters[A].pop()})},n.prototype.parse=function(e){var t=this,A=e.counterIncrement,i=e.counterReset,r=!0;A!==null&&A.forEach(function(o){var a=t.counters[o.counter];a&&o.increment!==0&&(r=!1,a.length||a.push(1),a[Math.max(0,a.length-1)]+=o.increment)});var s=[];return r&&i.forEach(function(o){var a=t.counters[o.counter];s.push(o.counter),a||(a=t.counters[o.counter]=[]),a.push(o.reset)}),s},n})(),Hf={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},Nf={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},SM={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},UM={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},Hi=function(n,e,t,A,i,r){return n<e||n>t?rs(n,i,r.length>0):A.integers.reduce(function(s,o,a){for(;n>=o;)n-=o,s+=A.values[a];return s},"")+r},Jp=function(n,e,t,A){var i="";do t||n--,i=A(n)+i,n/=e;while(n*e>=e);return i},bt=function(n,e,t,A,i){var r=t-e+1;return(n<0?"-":"")+(Jp(Math.abs(n),r,A,function(s){return Mt(Math.floor(s%r)+e)})+i)},si=function(n,e,t){t===void 0&&(t=". ");var A=e.length;return Jp(Math.abs(n),A,!1,function(i){return e[Math.floor(i%A)]})+t},ki=1,Dn=2,Pn=4,Nr=8,fn=function(n,e,t,A,i,r){if(n<-9999||n>9999)return rs(n,4,i.length>0);var s=Math.abs(n),o=i;if(s===0)return e[0]+o;for(var a=0;s>0&&a<=4;a++){var l=s%10;l===0&&Lt(r,ki)&&o!==""?o=e[l]+o:l>1||l===1&&a===0||l===1&&a===1&&Lt(r,Dn)||l===1&&a===1&&Lt(r,Pn)&&n>100||l===1&&a>1&&Lt(r,Nr)?o=e[l]+(a>0?t[a-1]:"")+o:l===1&&a>0&&(o=t[a-1]+o),s=Math.floor(s/10)}return(n<0?A:"")+o},Of="十百千萬",Vf="拾佰仟萬",Gf="マイナス",vl="마이너스",rs=function(n,e,t){var A=t?". ":"",i=t?"、":"",r=t?", ":"",s=t?" ":"";switch(e){case 0:return"•"+s;case 1:return"◦"+s;case 2:return"◾"+s;case 5:var o=bt(n,48,57,!0,A);return o.length<4?"0"+o:o;case 4:return si(n,"〇一二三四五六七八九",i);case 6:return Hi(n,1,3999,Hf,3,A).toLowerCase();case 7:return Hi(n,1,3999,Hf,3,A);case 8:return bt(n,945,969,!1,A);case 9:return bt(n,97,122,!1,A);case 10:return bt(n,65,90,!1,A);case 11:return bt(n,1632,1641,!0,A);case 12:case 49:return Hi(n,1,9999,Nf,3,A);case 35:return Hi(n,1,9999,Nf,3,A).toLowerCase();case 13:return bt(n,2534,2543,!0,A);case 14:case 30:return bt(n,6112,6121,!0,A);case 15:return si(n,"子丑寅卯辰巳午未申酉戌亥",i);case 16:return si(n,"甲乙丙丁戊己庚辛壬癸",i);case 17:case 48:return fn(n,"零一二三四五六七八九",Of,"負",i,Dn|Pn|Nr);case 47:return fn(n,"零壹貳參肆伍陸柒捌玖",Vf,"負",i,ki|Dn|Pn|Nr);case 42:return fn(n,"零一二三四五六七八九",Of,"负",i,Dn|Pn|Nr);case 41:return fn(n,"零壹贰叁肆伍陆柒捌玖",Vf,"负",i,ki|Dn|Pn|Nr);case 26:return fn(n,"〇一二三四五六七八九","十百千万",Gf,i,0);case 25:return fn(n,"零壱弐参四伍六七八九","拾百千万",Gf,i,ki|Dn|Pn);case 31:return fn(n,"영일이삼사오육칠팔구","십백천만",vl,r,ki|Dn|Pn);case 33:return fn(n,"零一二三四五六七八九","十百千萬",vl,r,0);case 32:return fn(n,"零壹貳參四五六七八九","拾百千",vl,r,ki|Dn|Pn);case 18:return bt(n,2406,2415,!0,A);case 20:return Hi(n,1,19999,UM,3,A);case 21:return bt(n,2790,2799,!0,A);case 22:return bt(n,2662,2671,!0,A);case 22:return Hi(n,1,10999,SM,3,A);case 23:return si(n,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return si(n,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return bt(n,3302,3311,!0,A);case 28:return si(n,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",i);case 29:return si(n,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",i);case 34:return bt(n,3792,3801,!0,A);case 37:return bt(n,6160,6169,!0,A);case 38:return bt(n,4160,4169,!0,A);case 39:return bt(n,2918,2927,!0,A);case 40:return bt(n,1776,1785,!0,A);case 43:return bt(n,3046,3055,!0,A);case 44:return bt(n,3174,3183,!0,A);case 45:return bt(n,3664,3673,!0,A);case 46:return bt(n,3872,3881,!0,A);case 3:default:return bt(n,48,57,!0,A)}},Zp="data-html2canvas-ignore",zf=(function(){function n(e,t,A){if(this.context=e,this.options=A,this.scrolledElements=[],this.referenceElement=t,this.counters=new MM,this.quoteDepth=0,!t.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(t.ownerDocument.documentElement,!1)}return n.prototype.toIFrame=function(e,t){var A=this,i=FM(e,t);if(!i.contentWindow)return Promise.reject("Unable to find iframe window");var r=e.defaultView.pageXOffset,s=e.defaultView.pageYOffset,o=i.contentWindow,a=o.document,l=QM(i).then(function(){return eA(A,void 0,void 0,function(){var c,u;return Yt(this,function(h){switch(h.label){case 0:return this.scrolledElements.forEach(PM),o&&(o.scrollTo(t.left,t.top),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(o.scrollY!==t.top||o.scrollX!==t.left)&&(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(o.scrollX-t.left,o.scrollY-t.top,0,0))),c=this.options.onclone,u=this.clonedReferenceElement,typeof u>"u"?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:a.fonts&&a.fonts.ready?[4,a.fonts.ready]:[3,2];case 1:h.sent(),h.label=2;case 2:return/(AppleWebKit)/g.test(navigator.userAgent)?[4,IM(a)]:[3,4];case 3:h.sent(),h.label=4;case 4:return typeof c=="function"?[2,Promise.resolve().then(function(){return c(a,u)}).then(function(){return i})]:[2,i]}})})});return a.open(),a.write(LM(document.doctype)+"<html></html>"),DM(this.referenceElement.ownerDocument,r,s),a.replaceChild(a.adoptNode(this.documentElement),a.documentElement),a.close(),l},n.prototype.createElementClone=function(e){if(Dc(e,2))debugger;if(Xp(e))return this.createCanvasClone(e);if(Lf(e))return this.createVideoClone(e);if(Df(e))return this.createStyleClone(e);var t=e.cloneNode(!1);return Oc(t)&&(Oc(e)&&e.currentSrc&&e.currentSrc!==e.src&&(t.src=e.currentSrc,t.srcset=""),t.loading==="lazy"&&(t.loading="eager")),Pf(t)?this.createCustomElementClone(t):t},n.prototype.createCustomElementClone=function(e){var t=document.createElement("html2canvascustomelement");return wl(e.style,t),t},n.prototype.createStyleClone=function(e){try{var t=e.sheet;if(t&&t.cssRules){var A=[].slice.call(t.cssRules,0).reduce(function(r,s){return s&&typeof s.cssText=="string"?r+s.cssText:r},""),i=e.cloneNode(!1);return i.textContent=A,i}}catch(r){if(this.context.logger.error("Unable to access cssRules property",r),r.name!=="SecurityError")throw r}return e.cloneNode(!1)},n.prototype.createCanvasClone=function(e){var t;if(this.options.inlineImages&&e.ownerDocument){var A=e.ownerDocument.createElement("img");try{return A.src=e.toDataURL(),A}catch{this.context.logger.info("Unable to inline canvas contents, canvas is tainted",e)}}var i=e.cloneNode(!1);try{i.width=e.width,i.height=e.height;var r=e.getContext("2d"),s=i.getContext("2d");if(s)if(!this.options.allowTaint&&r)s.putImageData(r.getImageData(0,0,e.width,e.height),0,0);else{var o=(t=e.getContext("webgl2"))!==null&&t!==void 0?t:e.getContext("webgl");if(o){var a=o.getContextAttributes();a?.preserveDrawingBuffer===!1&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",e)}s.drawImage(e,0,0)}return i}catch{this.context.logger.info("Unable to clone canvas as it is tainted",e)}return i},n.prototype.createVideoClone=function(e){var t=e.ownerDocument.createElement("canvas");t.width=e.offsetWidth,t.height=e.offsetHeight;var A=t.getContext("2d");try{return A&&(A.drawImage(e,0,0,t.width,t.height),this.options.allowTaint||A.getImageData(0,0,t.width,t.height)),t}catch{this.context.logger.info("Unable to clone video as it is tainted",e)}var i=e.ownerDocument.createElement("canvas");return i.width=e.offsetWidth,i.height=e.offsetHeight,i},n.prototype.appendChildNode=function(e,t,A){(!Yi(t)||!bM(t)&&!t.hasAttribute(Zp)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(t)))&&(!this.options.copyStyles||!Yi(t)||!Df(t))&&e.appendChild(this.cloneNode(t,A))},n.prototype.cloneChildNodes=function(e,t,A){for(var i=this,r=e.shadowRoot?e.shadowRoot.firstChild:e.firstChild;r;r=r.nextSibling)if(Yi(r)&&qp(r)&&typeof r.assignedNodes=="function"){var s=r.assignedNodes();s.length&&s.forEach(function(o){return i.appendChildNode(t,o,A)})}else this.appendChildNode(t,r,A)},n.prototype.cloneNode=function(e,t){if(Kp(e))return document.createTextNode(e.data);if(!e.ownerDocument)return e.cloneNode(!1);var A=e.ownerDocument.defaultView;if(A&&Yi(e)&&(Nc(e)||Fo(e))){var i=this.createElementClone(e);i.style.transitionProperty="none";var r=A.getComputedStyle(e),s=A.getComputedStyle(e,":before"),o=A.getComputedStyle(e,":after");this.referenceElement===e&&Nc(i)&&(this.clonedReferenceElement=i),_h(i)&&OM(i);var a=this.counters.parse(new vf(this.context,r)),l=this.resolvePseudoContent(e,i,s,Yr.BEFORE);Pf(e)&&(t=!0),Lf(e)||this.cloneChildNodes(e,i,t),l&&i.insertBefore(l,i.firstChild);var c=this.resolvePseudoContent(e,i,o,Yr.AFTER);return c&&i.appendChild(c),this.counters.pop(a),(r&&(this.options.copyStyles||Fo(e))&&!Yp(e)||t)&&wl(r,i),(e.scrollTop!==0||e.scrollLeft!==0)&&this.scrolledElements.push([i,e.scrollLeft,e.scrollTop]),(zo(e)||ko(e))&&(zo(i)||ko(i))&&(i.value=e.value),i}return e.cloneNode(!1)},n.prototype.resolvePseudoContent=function(e,t,A,i){var r=this;if(A){var s=A.content,o=t.ownerDocument;if(!(!o||!s||s==="none"||s==="-moz-alt-content"||A.display==="none")){this.counters.parse(new vf(this.context,A));var a=new _b(this.context,A),l=o.createElement("html2canvaspseudoelement");wl(A,l),a.content.forEach(function(u){if(u.type===0)l.appendChild(o.createTextNode(u.value));else if(u.type===22){var h=o.createElement("img");h.src=u.value,h.style.opacity="1",l.appendChild(h)}else if(u.type===18){if(u.name==="attr"){var f=u.values.filter(ct);f.length&&l.appendChild(o.createTextNode(e.getAttribute(f[0].value)||""))}else if(u.name==="counter"){var p=u.values.filter(ar),m=p[0],g=p[1];if(m&&ct(m)){var d=r.counters.getCounterValue(m.value),x=g&&ct(g)?Lc.parse(r.context,g.value):3;l.appendChild(o.createTextNode(rs(d,x,!1)))}}else if(u.name==="counters"){var B=u.values.filter(ar),m=B[0],w=B[1],g=B[2];if(m&&ct(m)){var y=r.counters.getCounterValues(m.value),v=g&&ct(g)?Lc.parse(r.context,g.value):3,E=w&&w.type===0?w.value:"",U=y.map(function(T){return rs(T,v,!1)}).join(E);l.appendChild(o.createTextNode(U))}}}else if(u.type===20)switch(u.value){case"open-quote":l.appendChild(o.createTextNode(Bf(a.quotes,r.quoteDepth++,!0)));break;case"close-quote":l.appendChild(o.createTextNode(Bf(a.quotes,--r.quoteDepth,!1)));break;default:l.appendChild(o.createTextNode(u.value))}}),l.className=Vc+" "+Gc;var c=i===Yr.BEFORE?" "+Vc:" "+Gc;return Fo(t)?t.className.baseValue+=c:t.className+=c,l}}},n.destroy=function(e){return e.parentNode?(e.parentNode.removeChild(e),!0):!1},n})(),Yr;(function(n){n[n.BEFORE=0]="BEFORE",n[n.AFTER=1]="AFTER"})(Yr||(Yr={}));var FM=function(n,e){var t=n.createElement("iframe");return t.className="html2canvas-container",t.style.visibility="hidden",t.style.position="fixed",t.style.left="-10000px",t.style.top="0px",t.style.border="0",t.width=e.width.toString(),t.height=e.height.toString(),t.scrolling="no",t.setAttribute(Zp,"true"),n.body.appendChild(t),t},TM=function(n){return new Promise(function(e){if(n.complete){e();return}if(!n.src){e();return}n.onload=e,n.onerror=e})},IM=function(n){return Promise.all([].slice.call(n.images,0).map(TM))},QM=function(n){return new Promise(function(e,t){var A=n.contentWindow;if(!A)return t("No window assigned for iframe");var i=A.document;A.onload=n.onload=function(){A.onload=n.onload=null;var r=setInterval(function(){i.body.childNodes.length>0&&i.readyState==="complete"&&(clearInterval(r),e(n))},50)}})},RM=["all","d","content"],wl=function(n,e){for(var t=n.length-1;t>=0;t--){var A=n.item(t);RM.indexOf(A)===-1&&e.style.setProperty(A,n.getPropertyValue(A))}return e},LM=function(n){var e="";return n&&(e+="<!DOCTYPE ",n.name&&(e+=n.name),n.internalSubset&&(e+=n.internalSubset),n.publicId&&(e+='"'+n.publicId+'"'),n.systemId&&(e+='"'+n.systemId+'"'),e+=">"),e},DM=function(n,e,t){n&&n.defaultView&&(e!==n.defaultView.pageXOffset||t!==n.defaultView.pageYOffset)&&n.defaultView.scrollTo(e,t)},PM=function(n){var e=n[0],t=n[1],A=n[2];e.scrollLeft=t,e.scrollTop=A},HM=":before",NM=":after",Vc="___html2canvas___pseudoelement_before",Gc="___html2canvas___pseudoelement_after",kf=`{
    content: "" !important;
    display: none !important;
}`,OM=function(n){VM(n,"."+Vc+HM+kf+`
         .`+Gc+NM+kf)},VM=function(n,e){var t=n.ownerDocument;if(t){var A=t.createElement("style");A.textContent=e,n.appendChild(A)}},jp=(function(){function n(){}return n.getOrigin=function(e){var t=n._link;return t?(t.href=e,t.href=t.href,t.protocol+t.hostname+t.port):"about:blank"},n.isSameOrigin=function(e){return n.getOrigin(e)===n._origin},n.setContext=function(e){n._link=e.document.createElement("a"),n._origin=n.getOrigin(e.location.href)},n._origin="about:blank",n})(),GM=(function(){function n(e,t){this.context=e,this._options=t,this._cache={}}return n.prototype.addImage=function(e){var t=Promise.resolve();return this.has(e)||(Cl(e)||WM(e))&&(this._cache[e]=this.loadImage(e)).catch(function(){}),t},n.prototype.match=function(e){return this._cache[e]},n.prototype.loadImage=function(e){return eA(this,void 0,void 0,function(){var t,A,i,r,s=this;return Yt(this,function(o){switch(o.label){case 0:return t=jp.isSameOrigin(e),A=!_l(e)&&this._options.useCORS===!0&&Gt.SUPPORT_CORS_IMAGES&&!t,i=!_l(e)&&!t&&!Cl(e)&&typeof this._options.proxy=="string"&&Gt.SUPPORT_CORS_XHR&&!A,!t&&this._options.allowTaint===!1&&!_l(e)&&!Cl(e)&&!i&&!A?[2]:(r=e,i?[4,this.proxy(r)]:[3,2]);case 1:r=o.sent(),o.label=2;case 2:return this.context.logger.debug("Added image "+e.substring(0,256)),[4,new Promise(function(a,l){var c=new Image;c.onload=function(){return a(c)},c.onerror=l,(XM(r)||A)&&(c.crossOrigin="anonymous"),c.src=r,c.complete===!0&&setTimeout(function(){return a(c)},500),s._options.imageTimeout>0&&setTimeout(function(){return l("Timed out ("+s._options.imageTimeout+"ms) loading image")},s._options.imageTimeout)})];case 3:return[2,o.sent()]}})})},n.prototype.has=function(e){return typeof this._cache[e]<"u"},n.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},n.prototype.proxy=function(e){var t=this,A=this._options.proxy;if(!A)throw new Error("No proxy defined");var i=e.substring(0,256);return new Promise(function(r,s){var o=Gt.SUPPORT_RESPONSE_TYPE?"blob":"text",a=new XMLHttpRequest;a.onload=function(){if(a.status===200)if(o==="text")r(a.response);else{var u=new FileReader;u.addEventListener("load",function(){return r(u.result)},!1),u.addEventListener("error",function(h){return s(h)},!1),u.readAsDataURL(a.response)}else s("Failed to proxy resource "+i+" with status code "+a.status)},a.onerror=s;var l=A.indexOf("?")>-1?"&":"?";if(a.open("GET",""+A+l+"url="+encodeURIComponent(e)+"&responseType="+o),o!=="text"&&a instanceof XMLHttpRequest&&(a.responseType=o),t._options.imageTimeout){var c=t._options.imageTimeout;a.timeout=c,a.ontimeout=function(){return s("Timed out ("+c+"ms) proxying "+i)}}a.send()})},n})(),zM=/^data:image\/svg\+xml/i,kM=/^data:image\/.*;base64,/i,KM=/^data:image\/.*/i,WM=function(n){return Gt.SUPPORT_SVG_DRAWING||!YM(n)},_l=function(n){return KM.test(n)},XM=function(n){return kM.test(n)},Cl=function(n){return n.substr(0,4)==="blob"},YM=function(n){return n.substr(-3).toLowerCase()==="svg"||zM.test(n)},fe=(function(){function n(e,t){this.type=0,this.x=e,this.y=t}return n.prototype.add=function(e,t){return new n(this.x+e,this.y+t)},n})(),Ni=function(n,e,t){return new fe(n.x+(e.x-n.x)*t,n.y+(e.y-n.y)*t)},ho=(function(){function n(e,t,A,i){this.type=1,this.start=e,this.startControl=t,this.endControl=A,this.end=i}return n.prototype.subdivide=function(e,t){var A=Ni(this.start,this.startControl,e),i=Ni(this.startControl,this.endControl,e),r=Ni(this.endControl,this.end,e),s=Ni(A,i,e),o=Ni(i,r,e),a=Ni(s,o,e);return t?new n(this.start,A,s,a):new n(a,o,r,this.end)},n.prototype.add=function(e,t){return new n(this.start.add(e,t),this.startControl.add(e,t),this.endControl.add(e,t),this.end.add(e,t))},n.prototype.reverse=function(){return new n(this.end,this.endControl,this.startControl,this.start)},n})(),bA=function(n){return n.type===1},qM=(function(){function n(e){var t=e.styles,A=e.bounds,i=Pr(t.borderTopLeftRadius,A.width,A.height),r=i[0],s=i[1],o=Pr(t.borderTopRightRadius,A.width,A.height),a=o[0],l=o[1],c=Pr(t.borderBottomRightRadius,A.width,A.height),u=c[0],h=c[1],f=Pr(t.borderBottomLeftRadius,A.width,A.height),p=f[0],m=f[1],g=[];g.push((r+a)/A.width),g.push((p+u)/A.width),g.push((s+m)/A.height),g.push((l+h)/A.height);var d=Math.max.apply(Math,g);d>1&&(r/=d,s/=d,a/=d,l/=d,u/=d,h/=d,p/=d,m/=d);var x=A.width-a,B=A.height-h,w=A.width-u,y=A.height-m,v=t.borderTopWidth,E=t.borderRightWidth,U=t.borderBottomWidth,_=t.borderLeftWidth,C=ft(t.paddingTop,e.bounds.width),T=ft(t.paddingRight,e.bounds.width),R=ft(t.paddingBottom,e.bounds.width),F=ft(t.paddingLeft,e.bounds.width);this.topLeftBorderDoubleOuterBox=r>0||s>0?mt(A.left+_/3,A.top+v/3,r-_/3,s-v/3,rt.TOP_LEFT):new fe(A.left+_/3,A.top+v/3),this.topRightBorderDoubleOuterBox=r>0||s>0?mt(A.left+x,A.top+v/3,a-E/3,l-v/3,rt.TOP_RIGHT):new fe(A.left+A.width-E/3,A.top+v/3),this.bottomRightBorderDoubleOuterBox=u>0||h>0?mt(A.left+w,A.top+B,u-E/3,h-U/3,rt.BOTTOM_RIGHT):new fe(A.left+A.width-E/3,A.top+A.height-U/3),this.bottomLeftBorderDoubleOuterBox=p>0||m>0?mt(A.left+_/3,A.top+y,p-_/3,m-U/3,rt.BOTTOM_LEFT):new fe(A.left+_/3,A.top+A.height-U/3),this.topLeftBorderDoubleInnerBox=r>0||s>0?mt(A.left+_*2/3,A.top+v*2/3,r-_*2/3,s-v*2/3,rt.TOP_LEFT):new fe(A.left+_*2/3,A.top+v*2/3),this.topRightBorderDoubleInnerBox=r>0||s>0?mt(A.left+x,A.top+v*2/3,a-E*2/3,l-v*2/3,rt.TOP_RIGHT):new fe(A.left+A.width-E*2/3,A.top+v*2/3),this.bottomRightBorderDoubleInnerBox=u>0||h>0?mt(A.left+w,A.top+B,u-E*2/3,h-U*2/3,rt.BOTTOM_RIGHT):new fe(A.left+A.width-E*2/3,A.top+A.height-U*2/3),this.bottomLeftBorderDoubleInnerBox=p>0||m>0?mt(A.left+_*2/3,A.top+y,p-_*2/3,m-U*2/3,rt.BOTTOM_LEFT):new fe(A.left+_*2/3,A.top+A.height-U*2/3),this.topLeftBorderStroke=r>0||s>0?mt(A.left+_/2,A.top+v/2,r-_/2,s-v/2,rt.TOP_LEFT):new fe(A.left+_/2,A.top+v/2),this.topRightBorderStroke=r>0||s>0?mt(A.left+x,A.top+v/2,a-E/2,l-v/2,rt.TOP_RIGHT):new fe(A.left+A.width-E/2,A.top+v/2),this.bottomRightBorderStroke=u>0||h>0?mt(A.left+w,A.top+B,u-E/2,h-U/2,rt.BOTTOM_RIGHT):new fe(A.left+A.width-E/2,A.top+A.height-U/2),this.bottomLeftBorderStroke=p>0||m>0?mt(A.left+_/2,A.top+y,p-_/2,m-U/2,rt.BOTTOM_LEFT):new fe(A.left+_/2,A.top+A.height-U/2),this.topLeftBorderBox=r>0||s>0?mt(A.left,A.top,r,s,rt.TOP_LEFT):new fe(A.left,A.top),this.topRightBorderBox=a>0||l>0?mt(A.left+x,A.top,a,l,rt.TOP_RIGHT):new fe(A.left+A.width,A.top),this.bottomRightBorderBox=u>0||h>0?mt(A.left+w,A.top+B,u,h,rt.BOTTOM_RIGHT):new fe(A.left+A.width,A.top+A.height),this.bottomLeftBorderBox=p>0||m>0?mt(A.left,A.top+y,p,m,rt.BOTTOM_LEFT):new fe(A.left,A.top+A.height),this.topLeftPaddingBox=r>0||s>0?mt(A.left+_,A.top+v,Math.max(0,r-_),Math.max(0,s-v),rt.TOP_LEFT):new fe(A.left+_,A.top+v),this.topRightPaddingBox=a>0||l>0?mt(A.left+Math.min(x,A.width-E),A.top+v,x>A.width+E?0:Math.max(0,a-E),Math.max(0,l-v),rt.TOP_RIGHT):new fe(A.left+A.width-E,A.top+v),this.bottomRightPaddingBox=u>0||h>0?mt(A.left+Math.min(w,A.width-_),A.top+Math.min(B,A.height-U),Math.max(0,u-E),Math.max(0,h-U),rt.BOTTOM_RIGHT):new fe(A.left+A.width-E,A.top+A.height-U),this.bottomLeftPaddingBox=p>0||m>0?mt(A.left+_,A.top+Math.min(y,A.height-U),Math.max(0,p-_),Math.max(0,m-U),rt.BOTTOM_LEFT):new fe(A.left+_,A.top+A.height-U),this.topLeftContentBox=r>0||s>0?mt(A.left+_+F,A.top+v+C,Math.max(0,r-(_+F)),Math.max(0,s-(v+C)),rt.TOP_LEFT):new fe(A.left+_+F,A.top+v+C),this.topRightContentBox=a>0||l>0?mt(A.left+Math.min(x,A.width+_+F),A.top+v+C,x>A.width+_+F?0:a-_+F,l-(v+C),rt.TOP_RIGHT):new fe(A.left+A.width-(E+T),A.top+v+C),this.bottomRightContentBox=u>0||h>0?mt(A.left+Math.min(w,A.width-(_+F)),A.top+Math.min(B,A.height+v+C),Math.max(0,u-(E+T)),h-(U+R),rt.BOTTOM_RIGHT):new fe(A.left+A.width-(E+T),A.top+A.height-(U+R)),this.bottomLeftContentBox=p>0||m>0?mt(A.left+_+F,A.top+y,Math.max(0,p-(_+F)),m-(U+R),rt.BOTTOM_LEFT):new fe(A.left+_+F,A.top+A.height-(U+R))}return n})(),rt;(function(n){n[n.TOP_LEFT=0]="TOP_LEFT",n[n.TOP_RIGHT=1]="TOP_RIGHT",n[n.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",n[n.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(rt||(rt={}));var mt=function(n,e,t,A,i){var r=4*((Math.sqrt(2)-1)/3),s=t*r,o=A*r,a=n+t,l=e+A;switch(i){case rt.TOP_LEFT:return new ho(new fe(n,l),new fe(n,l-o),new fe(a-s,e),new fe(a,e));case rt.TOP_RIGHT:return new ho(new fe(n,e),new fe(n+s,e),new fe(a,l-o),new fe(a,l));case rt.BOTTOM_RIGHT:return new ho(new fe(a,e),new fe(a,e+o),new fe(n+s,l),new fe(n,l));case rt.BOTTOM_LEFT:default:return new ho(new fe(a,l),new fe(a-s,l),new fe(n,e+o),new fe(n,e))}},Ko=function(n){return[n.topLeftBorderBox,n.topRightBorderBox,n.bottomRightBorderBox,n.bottomLeftBorderBox]},JM=function(n){return[n.topLeftContentBox,n.topRightContentBox,n.bottomRightContentBox,n.bottomLeftContentBox]},Wo=function(n){return[n.topLeftPaddingBox,n.topRightPaddingBox,n.bottomRightPaddingBox,n.bottomLeftPaddingBox]},ZM=(function(){function n(e,t,A){this.offsetX=e,this.offsetY=t,this.matrix=A,this.type=0,this.target=6}return n})(),uo=(function(){function n(e,t){this.path=e,this.target=t,this.type=1}return n})(),jM=(function(){function n(e){this.opacity=e,this.type=2,this.target=6}return n})(),$M=function(n){return n.type===0},$p=function(n){return n.type===1},eS=function(n){return n.type===2},Kf=function(n,e){return n.length===e.length?n.some(function(t,A){return t===e[A]}):!1},tS=function(n,e,t,A,i){return n.map(function(r,s){switch(s){case 0:return r.add(e,t);case 1:return r.add(e+A,t);case 2:return r.add(e+A,t+i);case 3:return r.add(e,t+i)}return r})},e0=(function(){function n(e){this.element=e,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}return n})(),t0=(function(){function n(e,t){if(this.container=e,this.parent=t,this.effects=[],this.curves=new qM(this.container),this.container.styles.opacity<1&&this.effects.push(new jM(this.container.styles.opacity)),this.container.styles.transform!==null){var A=this.container.bounds.left+this.container.styles.transformOrigin[0].number,i=this.container.bounds.top+this.container.styles.transformOrigin[1].number,r=this.container.styles.transform;this.effects.push(new ZM(A,i,r))}if(this.container.styles.overflowX!==0){var s=Ko(this.curves),o=Wo(this.curves);Kf(s,o)?this.effects.push(new uo(s,6)):(this.effects.push(new uo(s,2)),this.effects.push(new uo(o,4)))}}return n.prototype.getEffects=function(e){for(var t=[2,3].indexOf(this.container.styles.position)===-1,A=this.parent,i=this.effects.slice(0);A;){var r=A.effects.filter(function(a){return!$p(a)});if(t||A.container.styles.position!==0||!A.parent){if(i.unshift.apply(i,r),t=[2,3].indexOf(A.container.styles.position)===-1,A.container.styles.overflowX!==0){var s=Ko(A.curves),o=Wo(A.curves);Kf(s,o)||i.unshift(new uo(o,6))}}else i.unshift.apply(i,r);A=A.parent}return i.filter(function(a){return Lt(a.target,e)})},n})(),zc=function(n,e,t,A){n.container.elements.forEach(function(i){var r=Lt(i.flags,4),s=Lt(i.flags,2),o=new t0(i,n);Lt(i.styles.display,2048)&&A.push(o);var a=Lt(i.flags,8)?[]:A;if(r||s){var l=r||i.styles.isPositioned()?t:e,c=new e0(o);if(i.styles.isPositioned()||i.styles.opacity<1||i.styles.isTransformed()){var u=i.styles.zIndex.order;if(u<0){var h=0;l.negativeZIndex.some(function(p,m){return u>p.element.container.styles.zIndex.order?(h=m,!1):h>0}),l.negativeZIndex.splice(h,0,c)}else if(u>0){var f=0;l.positiveZIndex.some(function(p,m){return u>=p.element.container.styles.zIndex.order?(f=m+1,!1):f>0}),l.positiveZIndex.splice(f,0,c)}else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(c)}else i.styles.isFloating()?l.nonPositionedFloats.push(c):l.nonPositionedInlineLevel.push(c);zc(o,c,r?c:t,a)}else i.styles.isInlineLevel()?e.inlineLevel.push(o):e.nonInlineLevel.push(o),zc(o,e,t,a);Lt(i.flags,8)&&A0(i,a)})},A0=function(n,e){for(var t=n instanceof Hc?n.start:1,A=n instanceof Hc?n.reversed:!1,i=0;i<e.length;i++){var r=e[i];r.container instanceof Np&&typeof r.container.value=="number"&&r.container.value!==0&&(t=r.container.value),r.listValue=rs(t,r.container.styles.listStyleType,!0),t+=A?-1:1}},AS=function(n){var e=new t0(n,null),t=new e0(e),A=[];return zc(e,t,t,A),A0(e.container,A),t},Wf=function(n,e){switch(e){case 0:return FA(n.topLeftBorderBox,n.topLeftPaddingBox,n.topRightBorderBox,n.topRightPaddingBox);case 1:return FA(n.topRightBorderBox,n.topRightPaddingBox,n.bottomRightBorderBox,n.bottomRightPaddingBox);case 2:return FA(n.bottomRightBorderBox,n.bottomRightPaddingBox,n.bottomLeftBorderBox,n.bottomLeftPaddingBox);case 3:default:return FA(n.bottomLeftBorderBox,n.bottomLeftPaddingBox,n.topLeftBorderBox,n.topLeftPaddingBox)}},nS=function(n,e){switch(e){case 0:return FA(n.topLeftBorderBox,n.topLeftBorderDoubleOuterBox,n.topRightBorderBox,n.topRightBorderDoubleOuterBox);case 1:return FA(n.topRightBorderBox,n.topRightBorderDoubleOuterBox,n.bottomRightBorderBox,n.bottomRightBorderDoubleOuterBox);case 2:return FA(n.bottomRightBorderBox,n.bottomRightBorderDoubleOuterBox,n.bottomLeftBorderBox,n.bottomLeftBorderDoubleOuterBox);case 3:default:return FA(n.bottomLeftBorderBox,n.bottomLeftBorderDoubleOuterBox,n.topLeftBorderBox,n.topLeftBorderDoubleOuterBox)}},iS=function(n,e){switch(e){case 0:return FA(n.topLeftBorderDoubleInnerBox,n.topLeftPaddingBox,n.topRightBorderDoubleInnerBox,n.topRightPaddingBox);case 1:return FA(n.topRightBorderDoubleInnerBox,n.topRightPaddingBox,n.bottomRightBorderDoubleInnerBox,n.bottomRightPaddingBox);case 2:return FA(n.bottomRightBorderDoubleInnerBox,n.bottomRightPaddingBox,n.bottomLeftBorderDoubleInnerBox,n.bottomLeftPaddingBox);case 3:default:return FA(n.bottomLeftBorderDoubleInnerBox,n.bottomLeftPaddingBox,n.topLeftBorderDoubleInnerBox,n.topLeftPaddingBox)}},rS=function(n,e){switch(e){case 0:return fo(n.topLeftBorderStroke,n.topRightBorderStroke);case 1:return fo(n.topRightBorderStroke,n.bottomRightBorderStroke);case 2:return fo(n.bottomRightBorderStroke,n.bottomLeftBorderStroke);case 3:default:return fo(n.bottomLeftBorderStroke,n.topLeftBorderStroke)}},fo=function(n,e){var t=[];return bA(n)?t.push(n.subdivide(.5,!1)):t.push(n),bA(e)?t.push(e.subdivide(.5,!0)):t.push(e),t},FA=function(n,e,t,A){var i=[];return bA(n)?i.push(n.subdivide(.5,!1)):i.push(n),bA(t)?i.push(t.subdivide(.5,!0)):i.push(t),bA(A)?i.push(A.subdivide(.5,!0).reverse()):i.push(A),bA(e)?i.push(e.subdivide(.5,!1).reverse()):i.push(e),i},n0=function(n){var e=n.bounds,t=n.styles;return e.add(t.borderLeftWidth,t.borderTopWidth,-(t.borderRightWidth+t.borderLeftWidth),-(t.borderTopWidth+t.borderBottomWidth))},Xo=function(n){var e=n.styles,t=n.bounds,A=ft(e.paddingLeft,t.width),i=ft(e.paddingRight,t.width),r=ft(e.paddingTop,t.width),s=ft(e.paddingBottom,t.width);return t.add(A+e.borderLeftWidth,r+e.borderTopWidth,-(e.borderRightWidth+e.borderLeftWidth+A+i),-(e.borderTopWidth+e.borderBottomWidth+r+s))},sS=function(n,e){return n===0?e.bounds:n===2?Xo(e):n0(e)},oS=function(n,e){return n===0?e.bounds:n===2?Xo(e):n0(e)},yl=function(n,e,t){var A=sS(Ki(n.styles.backgroundOrigin,e),n),i=oS(Ki(n.styles.backgroundClip,e),n),r=aS(Ki(n.styles.backgroundSize,e),t,A),s=r[0],o=r[1],a=Pr(Ki(n.styles.backgroundPosition,e),A.width-s,A.height-o),l=lS(Ki(n.styles.backgroundRepeat,e),a,r,A,i),c=Math.round(A.left+a[0]),u=Math.round(A.top+a[1]);return[l,c,u,s,o]},Oi=function(n){return ct(n)&&n.value===er.AUTO},po=function(n){return typeof n=="number"},aS=function(n,e,t){var A=e[0],i=e[1],r=e[2],s=n[0],o=n[1];if(!s)return[0,0];if(Tt(s)&&o&&Tt(o))return[ft(s,t.width),ft(o,t.height)];var a=po(r);if(ct(s)&&(s.value===er.CONTAIN||s.value===er.COVER)){if(po(r)){var l=t.width/t.height;return l<r!=(s.value===er.COVER)?[t.width,t.width/r]:[t.height*r,t.height]}return[t.width,t.height]}var c=po(A),u=po(i),h=c||u;if(Oi(s)&&(!o||Oi(o))){if(c&&u)return[A,i];if(!a&&!h)return[t.width,t.height];if(h&&a){var f=c?A:i*r,p=u?i:A/r;return[f,p]}var m=c?A:t.width,g=u?i:t.height;return[m,g]}if(a){var d=0,x=0;return Tt(s)?d=ft(s,t.width):Tt(o)&&(x=ft(o,t.height)),Oi(s)?d=x*r:(!o||Oi(o))&&(x=d/r),[d,x]}var B=null,w=null;if(Tt(s)?B=ft(s,t.width):o&&Tt(o)&&(w=ft(o,t.height)),B!==null&&(!o||Oi(o))&&(w=c&&u?B/A*i:t.height),w!==null&&Oi(s)&&(B=c&&u?w/i*A:t.width),B!==null&&w!==null)return[B,w];throw new Error("Unable to calculate background-size for element")},Ki=function(n,e){var t=n[e];return typeof t>"u"?n[0]:t},lS=function(n,e,t,A,i){var r=e[0],s=e[1],o=t[0],a=t[1];switch(n){case 2:return[new fe(Math.round(A.left),Math.round(A.top+s)),new fe(Math.round(A.left+A.width),Math.round(A.top+s)),new fe(Math.round(A.left+A.width),Math.round(a+A.top+s)),new fe(Math.round(A.left),Math.round(a+A.top+s))];case 3:return[new fe(Math.round(A.left+r),Math.round(A.top)),new fe(Math.round(A.left+r+o),Math.round(A.top)),new fe(Math.round(A.left+r+o),Math.round(A.height+A.top)),new fe(Math.round(A.left+r),Math.round(A.height+A.top))];case 1:return[new fe(Math.round(A.left+r),Math.round(A.top+s)),new fe(Math.round(A.left+r+o),Math.round(A.top+s)),new fe(Math.round(A.left+r+o),Math.round(A.top+s+a)),new fe(Math.round(A.left+r),Math.round(A.top+s+a))];default:return[new fe(Math.round(i.left),Math.round(i.top)),new fe(Math.round(i.left+i.width),Math.round(i.top)),new fe(Math.round(i.left+i.width),Math.round(i.height+i.top)),new fe(Math.round(i.left),Math.round(i.height+i.top))]}},cS="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",Xf="Hidden Text",hS=(function(){function n(e){this._data={},this._document=e}return n.prototype.parseMetrics=function(e,t){var A=this._document.createElement("div"),i=this._document.createElement("img"),r=this._document.createElement("span"),s=this._document.body;A.style.visibility="hidden",A.style.fontFamily=e,A.style.fontSize=t,A.style.margin="0",A.style.padding="0",A.style.whiteSpace="nowrap",s.appendChild(A),i.src=cS,i.width=1,i.height=1,i.style.margin="0",i.style.padding="0",i.style.verticalAlign="baseline",r.style.fontFamily=e,r.style.fontSize=t,r.style.margin="0",r.style.padding="0",r.appendChild(this._document.createTextNode(Xf)),A.appendChild(r),A.appendChild(i);var o=i.offsetTop-r.offsetTop+2;A.removeChild(r),A.appendChild(this._document.createTextNode(Xf)),A.style.lineHeight="normal",i.style.verticalAlign="super";var a=i.offsetTop-A.offsetTop+2;return s.removeChild(A),{baseline:o,middle:a}},n.prototype.getMetrics=function(e,t){var A=e+" "+t;return typeof this._data[A]>"u"&&(this._data[A]=this.parseMetrics(e,t)),this._data[A]},n})(),i0=(function(){function n(e,t){this.context=e,this.options=t}return n})(),uS=1e4,fS=(function(n){VA(e,n);function e(t,A){var i=n.call(this,t,A)||this;return i._activeEffects=[],i.canvas=A.canvas?A.canvas:document.createElement("canvas"),i.ctx=i.canvas.getContext("2d"),A.canvas||(i.canvas.width=Math.floor(A.width*A.scale),i.canvas.height=Math.floor(A.height*A.scale),i.canvas.style.width=A.width+"px",i.canvas.style.height=A.height+"px"),i.fontMetrics=new hS(document),i.ctx.scale(i.options.scale,i.options.scale),i.ctx.translate(-A.x,-A.y),i.ctx.textBaseline="bottom",i._activeEffects=[],i.context.logger.debug("Canvas renderer initialized ("+A.width+"x"+A.height+") with scale "+A.scale),i}return e.prototype.applyEffects=function(t){for(var A=this;this._activeEffects.length;)this.popEffect();t.forEach(function(i){return A.applyEffect(i)})},e.prototype.applyEffect=function(t){this.ctx.save(),eS(t)&&(this.ctx.globalAlpha=t.opacity),$M(t)&&(this.ctx.translate(t.offsetX,t.offsetY),this.ctx.transform(t.matrix[0],t.matrix[1],t.matrix[2],t.matrix[3],t.matrix[4],t.matrix[5]),this.ctx.translate(-t.offsetX,-t.offsetY)),$p(t)&&(this.path(t.path),this.ctx.clip()),this._activeEffects.push(t)},e.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},e.prototype.renderStack=function(t){return eA(this,void 0,void 0,function(){var A;return Yt(this,function(i){switch(i.label){case 0:return A=t.element.container.styles,A.isVisible()?[4,this.renderStackContent(t)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2]}})})},e.prototype.renderNode=function(t){return eA(this,void 0,void 0,function(){return Yt(this,function(A){switch(A.label){case 0:if(Lt(t.container.flags,16))debugger;return t.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(t)]:[3,3];case 1:return A.sent(),[4,this.renderNodeContent(t)];case 2:A.sent(),A.label=3;case 3:return[2]}})})},e.prototype.renderTextWithLetterSpacing=function(t,A,i){var r=this;if(A===0)this.ctx.fillText(t.text,t.bounds.left,t.bounds.top+i);else{var s=vh(t.text);s.reduce(function(o,a){return r.ctx.fillText(a,o,t.bounds.top+i),o+r.ctx.measureText(a).width},t.bounds.left)}},e.prototype.createFontStyle=function(t){var A=t.fontVariant.filter(function(s){return s==="normal"||s==="small-caps"}).join(""),i=xS(t.fontFamily).join(", "),r=cs(t.fontSize)?""+t.fontSize.number+t.fontSize.unit:t.fontSize.number+"px";return[[t.fontStyle,A,t.fontWeight,r,i].join(" "),i,r]},e.prototype.renderTextNode=function(t,A){return eA(this,void 0,void 0,function(){var i,r,s,o,a,l,c,u,h=this;return Yt(this,function(f){return i=this.createFontStyle(A),r=i[0],s=i[1],o=i[2],this.ctx.font=r,this.ctx.direction=A.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",a=this.fontMetrics.getMetrics(s,o),l=a.baseline,c=a.middle,u=A.paintOrder,t.textBounds.forEach(function(p){u.forEach(function(m){switch(m){case 0:h.ctx.fillStyle=Nt(A.color),h.renderTextWithLetterSpacing(p,A.letterSpacing,l);var g=A.textShadow;g.length&&p.text.trim().length&&(g.slice(0).reverse().forEach(function(d){h.ctx.shadowColor=Nt(d.color),h.ctx.shadowOffsetX=d.offsetX.number*h.options.scale,h.ctx.shadowOffsetY=d.offsetY.number*h.options.scale,h.ctx.shadowBlur=d.blur.number,h.renderTextWithLetterSpacing(p,A.letterSpacing,l)}),h.ctx.shadowColor="",h.ctx.shadowOffsetX=0,h.ctx.shadowOffsetY=0,h.ctx.shadowBlur=0),A.textDecorationLine.length&&(h.ctx.fillStyle=Nt(A.textDecorationColor||A.color),A.textDecorationLine.forEach(function(d){switch(d){case 1:h.ctx.fillRect(p.bounds.left,Math.round(p.bounds.top+l),p.bounds.width,1);break;case 2:h.ctx.fillRect(p.bounds.left,Math.round(p.bounds.top),p.bounds.width,1);break;case 3:h.ctx.fillRect(p.bounds.left,Math.ceil(p.bounds.top+c),p.bounds.width,1);break}}));break;case 1:A.webkitTextStrokeWidth&&p.text.trim().length&&(h.ctx.strokeStyle=Nt(A.webkitTextStrokeColor),h.ctx.lineWidth=A.webkitTextStrokeWidth,h.ctx.lineJoin=window.chrome?"miter":"round",h.ctx.strokeText(p.text,p.bounds.left,p.bounds.top+l)),h.ctx.strokeStyle="",h.ctx.lineWidth=0,h.ctx.lineJoin="miter";break}})}),[2]})})},e.prototype.renderReplacedElement=function(t,A,i){if(i&&t.intrinsicWidth>0&&t.intrinsicHeight>0){var r=Xo(t),s=Wo(A);this.path(s),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(i,0,0,t.intrinsicWidth,t.intrinsicHeight,r.left,r.top,r.width,r.height),this.ctx.restore()}},e.prototype.renderNodeContent=function(t){return eA(this,void 0,void 0,function(){var A,i,r,s,o,a,x,x,l,c,u,h,w,f,p,y,m,g,d,x,B,w,y;return Yt(this,function(v){switch(v.label){case 0:this.applyEffects(t.getEffects(4)),A=t.container,i=t.curves,r=A.styles,s=0,o=A.textNodes,v.label=1;case 1:return s<o.length?(a=o[s],[4,this.renderTextNode(a,r)]):[3,4];case 2:v.sent(),v.label=3;case 3:return s++,[3,1];case 4:if(!(A instanceof Dp))return[3,8];v.label=5;case 5:return v.trys.push([5,7,,8]),[4,this.context.cache.match(A.src)];case 6:return x=v.sent(),this.renderReplacedElement(A,i,x),[3,8];case 7:return v.sent(),this.context.logger.error("Error loading image "+A.src),[3,8];case 8:if(A instanceof Pp&&this.renderReplacedElement(A,i,A.canvas),!(A instanceof Hp))return[3,12];v.label=9;case 9:return v.trys.push([9,11,,12]),[4,this.context.cache.match(A.svg)];case 10:return x=v.sent(),this.renderReplacedElement(A,i,x),[3,12];case 11:return v.sent(),this.context.logger.error("Error loading svg "+A.svg.substring(0,255)),[3,12];case 12:return A instanceof Gp&&A.tree?(l=new e(this.context,{scale:this.options.scale,backgroundColor:A.backgroundColor,x:0,y:0,width:A.width,height:A.height}),[4,l.render(A.tree)]):[3,14];case 13:c=v.sent(),A.width&&A.height&&this.ctx.drawImage(c,0,0,A.width,A.height,A.bounds.left,A.bounds.top,A.bounds.width,A.bounds.height),v.label=14;case 14:if(A instanceof wh&&(u=Math.min(A.bounds.width,A.bounds.height),A.type===Vo?A.checked&&(this.ctx.save(),this.path([new fe(A.bounds.left+u*.39363,A.bounds.top+u*.79),new fe(A.bounds.left+u*.16,A.bounds.top+u*.5549),new fe(A.bounds.left+u*.27347,A.bounds.top+u*.44071),new fe(A.bounds.left+u*.39694,A.bounds.top+u*.5649),new fe(A.bounds.left+u*.72983,A.bounds.top+u*.23),new fe(A.bounds.left+u*.84,A.bounds.top+u*.34085),new fe(A.bounds.left+u*.39363,A.bounds.top+u*.79)]),this.ctx.fillStyle=Nt(Rf),this.ctx.fill(),this.ctx.restore()):A.type===Go&&A.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(A.bounds.left+u/2,A.bounds.top+u/2,u/4,0,Math.PI*2,!0),this.ctx.fillStyle=Nt(Rf),this.ctx.fill(),this.ctx.restore())),dS(A)&&A.value.length){switch(h=this.createFontStyle(r),w=h[0],f=h[1],p=this.fontMetrics.getMetrics(w,f).baseline,this.ctx.font=w,this.ctx.fillStyle=Nt(r.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=gS(A.styles.textAlign),y=Xo(A),m=0,A.styles.textAlign){case 1:m+=y.width/2;break;case 2:m+=y.width;break}g=y.add(m,0,0,-y.height/2+1),this.ctx.save(),this.path([new fe(y.left,y.top),new fe(y.left+y.width,y.top),new fe(y.left+y.width,y.top+y.height),new fe(y.left,y.top+y.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new Xr(A.value,g),r.letterSpacing,p),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!Lt(A.styles.display,2048))return[3,20];if(A.styles.listStyleImage===null)return[3,19];if(d=A.styles.listStyleImage,d.type!==0)return[3,18];x=void 0,B=d.url,v.label=15;case 15:return v.trys.push([15,17,,18]),[4,this.context.cache.match(B)];case 16:return x=v.sent(),this.ctx.drawImage(x,A.bounds.left-(x.width+10),A.bounds.top),[3,18];case 17:return v.sent(),this.context.logger.error("Error loading list-style-image "+B),[3,18];case 18:return[3,20];case 19:t.listValue&&A.styles.listStyleType!==-1&&(w=this.createFontStyle(r)[0],this.ctx.font=w,this.ctx.fillStyle=Nt(r.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",y=new bn(A.bounds.left,A.bounds.top+ft(A.styles.paddingTop,A.bounds.width),A.bounds.width,mf(r.lineHeight,r.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new Xr(t.listValue,y),r.letterSpacing,mf(r.lineHeight,r.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),v.label=20;case 20:return[2]}})})},e.prototype.renderStackContent=function(t){return eA(this,void 0,void 0,function(){var A,i,d,r,s,d,o,a,d,l,c,d,u,h,d,f,p,d,m,g,d;return Yt(this,function(x){switch(x.label){case 0:if(Lt(t.element.container.flags,16))debugger;return[4,this.renderNodeBackgroundAndBorders(t.element)];case 1:x.sent(),A=0,i=t.negativeZIndex,x.label=2;case 2:return A<i.length?(d=i[A],[4,this.renderStack(d)]):[3,5];case 3:x.sent(),x.label=4;case 4:return A++,[3,2];case 5:return[4,this.renderNodeContent(t.element)];case 6:x.sent(),r=0,s=t.nonInlineLevel,x.label=7;case 7:return r<s.length?(d=s[r],[4,this.renderNode(d)]):[3,10];case 8:x.sent(),x.label=9;case 9:return r++,[3,7];case 10:o=0,a=t.nonPositionedFloats,x.label=11;case 11:return o<a.length?(d=a[o],[4,this.renderStack(d)]):[3,14];case 12:x.sent(),x.label=13;case 13:return o++,[3,11];case 14:l=0,c=t.nonPositionedInlineLevel,x.label=15;case 15:return l<c.length?(d=c[l],[4,this.renderStack(d)]):[3,18];case 16:x.sent(),x.label=17;case 17:return l++,[3,15];case 18:u=0,h=t.inlineLevel,x.label=19;case 19:return u<h.length?(d=h[u],[4,this.renderNode(d)]):[3,22];case 20:x.sent(),x.label=21;case 21:return u++,[3,19];case 22:f=0,p=t.zeroOrAutoZIndexOrTransformedOrOpacity,x.label=23;case 23:return f<p.length?(d=p[f],[4,this.renderStack(d)]):[3,26];case 24:x.sent(),x.label=25;case 25:return f++,[3,23];case 26:m=0,g=t.positiveZIndex,x.label=27;case 27:return m<g.length?(d=g[m],[4,this.renderStack(d)]):[3,30];case 28:x.sent(),x.label=29;case 29:return m++,[3,27];case 30:return[2]}})})},e.prototype.mask=function(t){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(t.slice(0).reverse()),this.ctx.closePath()},e.prototype.path=function(t){this.ctx.beginPath(),this.formatPath(t),this.ctx.closePath()},e.prototype.formatPath=function(t){var A=this;t.forEach(function(i,r){var s=bA(i)?i.start:i;r===0?A.ctx.moveTo(s.x,s.y):A.ctx.lineTo(s.x,s.y),bA(i)&&A.ctx.bezierCurveTo(i.startControl.x,i.startControl.y,i.endControl.x,i.endControl.y,i.end.x,i.end.y)})},e.prototype.renderRepeat=function(t,A,i,r){this.path(t),this.ctx.fillStyle=A,this.ctx.translate(i,r),this.ctx.fill(),this.ctx.translate(-i,-r)},e.prototype.resizeImage=function(t,A,i){var r;if(t.width===A&&t.height===i)return t;var s=(r=this.canvas.ownerDocument)!==null&&r!==void 0?r:document,o=s.createElement("canvas");o.width=Math.max(1,A),o.height=Math.max(1,i);var a=o.getContext("2d");return a.drawImage(t,0,0,t.width,t.height,0,0,A,i),o},e.prototype.renderBackgroundImage=function(t){return eA(this,void 0,void 0,function(){var A,i,r,s,o,a;return Yt(this,function(l){switch(l.label){case 0:A=t.styles.backgroundImage.length-1,i=function(c){var u,h,f,C,Q,k,F,P,U,p,C,Q,k,F,P,m,g,d,x,B,w,y,v,E,U,_,C,T,R,F,P,D,Q,k,O,Y,$,ae,ne,Oe,Ye,Ke;return Yt(this,function(q){switch(q.label){case 0:if(c.type!==0)return[3,5];u=void 0,h=c.url,q.label=1;case 1:return q.trys.push([1,3,,4]),[4,r.context.cache.match(h)];case 2:return u=q.sent(),[3,4];case 3:return q.sent(),r.context.logger.error("Error loading background-image "+h),[3,4];case 4:return u&&(f=yl(t,A,[u.width,u.height,u.width/u.height]),C=f[0],Q=f[1],k=f[2],F=f[3],P=f[4],U=r.ctx.createPattern(r.resizeImage(u,F,P),"repeat"),r.renderRepeat(C,U,Q,k)),[3,6];case 5:$y(c)?(p=yl(t,A,[null,null,null]),C=p[0],Q=p[1],k=p[2],F=p[3],P=p[4],m=Yy(c.angle,F,P),g=m[0],d=m[1],x=m[2],B=m[3],w=m[4],y=document.createElement("canvas"),y.width=F,y.height=P,v=y.getContext("2d"),E=v.createLinearGradient(d,B,x,w),pf(c.stops,g).forEach(function(Z){return E.addColorStop(Z.stop,Nt(Z.color))}),v.fillStyle=E,v.fillRect(0,0,F,P),F>0&&P>0&&(U=r.ctx.createPattern(y,"repeat"),r.renderRepeat(C,U,Q,k))):eE(c)&&(_=yl(t,A,[null,null,null]),C=_[0],T=_[1],R=_[2],F=_[3],P=_[4],D=c.position.length===0?[mh]:c.position,Q=ft(D[0],F),k=ft(D[D.length-1],P),O=qy(c,Q,k,F,P),Y=O[0],$=O[1],Y>0&&$>0&&(ae=r.ctx.createRadialGradient(T+Q,R+k,0,T+Q,R+k,Y),pf(c.stops,Y*2).forEach(function(Z){return ae.addColorStop(Z.stop,Nt(Z.color))}),r.path(C),r.ctx.fillStyle=ae,Y!==$?(ne=t.bounds.left+.5*t.bounds.width,Oe=t.bounds.top+.5*t.bounds.height,Ye=$/Y,Ke=1/Ye,r.ctx.save(),r.ctx.translate(ne,Oe),r.ctx.transform(1,0,0,Ye,0,0),r.ctx.translate(-ne,-Oe),r.ctx.fillRect(T,Ke*(R-Oe)+Oe,F,P*Ke),r.ctx.restore()):r.ctx.fill())),q.label=6;case 6:return A--,[2]}})},r=this,s=0,o=t.styles.backgroundImage.slice(0).reverse(),l.label=1;case 1:return s<o.length?(a=o[s],[5,i(a)]):[3,4];case 2:l.sent(),l.label=3;case 3:return s++,[3,1];case 4:return[2]}})})},e.prototype.renderSolidBorder=function(t,A,i){return eA(this,void 0,void 0,function(){return Yt(this,function(r){return this.path(Wf(i,A)),this.ctx.fillStyle=Nt(t),this.ctx.fill(),[2]})})},e.prototype.renderDoubleBorder=function(t,A,i,r){return eA(this,void 0,void 0,function(){var s,o;return Yt(this,function(a){switch(a.label){case 0:return A<3?[4,this.renderSolidBorder(t,i,r)]:[3,2];case 1:return a.sent(),[2];case 2:return s=nS(r,i),this.path(s),this.ctx.fillStyle=Nt(t),this.ctx.fill(),o=iS(r,i),this.path(o),this.ctx.fill(),[2]}})})},e.prototype.renderNodeBackgroundAndBorders=function(t){return eA(this,void 0,void 0,function(){var A,i,r,s,o,a,l,c,u=this;return Yt(this,function(h){switch(h.label){case 0:return this.applyEffects(t.getEffects(2)),A=t.container.styles,i=!Wn(A.backgroundColor)||A.backgroundImage.length,r=[{style:A.borderTopStyle,color:A.borderTopColor,width:A.borderTopWidth},{style:A.borderRightStyle,color:A.borderRightColor,width:A.borderRightWidth},{style:A.borderBottomStyle,color:A.borderBottomColor,width:A.borderBottomWidth},{style:A.borderLeftStyle,color:A.borderLeftColor,width:A.borderLeftWidth}],s=pS(Ki(A.backgroundClip,0),t.curves),i||A.boxShadow.length?(this.ctx.save(),this.path(s),this.ctx.clip(),Wn(A.backgroundColor)||(this.ctx.fillStyle=Nt(A.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(t.container)]):[3,2];case 1:h.sent(),this.ctx.restore(),A.boxShadow.slice(0).reverse().forEach(function(f){u.ctx.save();var p=Ko(t.curves),m=f.inset?0:uS,g=tS(p,-m+(f.inset?1:-1)*f.spread.number,(f.inset?1:-1)*f.spread.number,f.spread.number*(f.inset?-2:2),f.spread.number*(f.inset?-2:2));f.inset?(u.path(p),u.ctx.clip(),u.mask(g)):(u.mask(p),u.ctx.clip(),u.path(g)),u.ctx.shadowOffsetX=f.offsetX.number+m,u.ctx.shadowOffsetY=f.offsetY.number,u.ctx.shadowColor=Nt(f.color),u.ctx.shadowBlur=f.blur.number,u.ctx.fillStyle=f.inset?Nt(f.color):"rgba(0,0,0,1)",u.ctx.fill(),u.ctx.restore()}),h.label=2;case 2:o=0,a=0,l=r,h.label=3;case 3:return a<l.length?(c=l[a],c.style!==0&&!Wn(c.color)&&c.width>0?c.style!==2?[3,5]:[4,this.renderDashedDottedBorder(c.color,c.width,o,t.curves,2)]:[3,11]):[3,13];case 4:return h.sent(),[3,11];case 5:return c.style!==3?[3,7]:[4,this.renderDashedDottedBorder(c.color,c.width,o,t.curves,3)];case 6:return h.sent(),[3,11];case 7:return c.style!==4?[3,9]:[4,this.renderDoubleBorder(c.color,c.width,o,t.curves)];case 8:return h.sent(),[3,11];case 9:return[4,this.renderSolidBorder(c.color,o,t.curves)];case 10:h.sent(),h.label=11;case 11:o++,h.label=12;case 12:return a++,[3,3];case 13:return[2]}})})},e.prototype.renderDashedDottedBorder=function(t,A,i,r,s){return eA(this,void 0,void 0,function(){var o,a,l,c,u,h,f,p,m,g,d,x,B,w,y,v,y,v;return Yt(this,function(E){return this.ctx.save(),o=rS(r,i),a=Wf(r,i),s===2&&(this.path(a),this.ctx.clip()),bA(a[0])?(l=a[0].start.x,c=a[0].start.y):(l=a[0].x,c=a[0].y),bA(a[1])?(u=a[1].end.x,h=a[1].end.y):(u=a[1].x,h=a[1].y),i===0||i===2?f=Math.abs(l-u):f=Math.abs(c-h),this.ctx.beginPath(),s===3?this.formatPath(o):this.formatPath(a.slice(0,2)),p=A<3?A*3:A*2,m=A<3?A*2:A,s===3&&(p=A,m=A),g=!0,f<=p*2?g=!1:f<=p*2+m?(d=f/(2*p+m),p*=d,m*=d):(x=Math.floor((f+m)/(p+m)),B=(f-x*p)/(x-1),w=(f-(x+1)*p)/x,m=w<=0||Math.abs(m-B)<Math.abs(m-w)?B:w),g&&(s===3?this.ctx.setLineDash([0,p+m]):this.ctx.setLineDash([p,m])),s===3?(this.ctx.lineCap="round",this.ctx.lineWidth=A):this.ctx.lineWidth=A*2+1.1,this.ctx.strokeStyle=Nt(t),this.ctx.stroke(),this.ctx.setLineDash([]),s===2&&(bA(a[0])&&(y=a[3],v=a[0],this.ctx.beginPath(),this.formatPath([new fe(y.end.x,y.end.y),new fe(v.start.x,v.start.y)]),this.ctx.stroke()),bA(a[1])&&(y=a[1],v=a[2],this.ctx.beginPath(),this.formatPath([new fe(y.end.x,y.end.y),new fe(v.start.x,v.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},e.prototype.render=function(t){return eA(this,void 0,void 0,function(){var A;return Yt(this,function(i){switch(i.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=Nt(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),A=AS(t),[4,this.renderStack(A)];case 1:return i.sent(),this.applyEffects([]),[2,this.canvas]}})})},e})(i0),dS=function(n){return n instanceof Vp||n instanceof Op?!0:n instanceof wh&&n.type!==Go&&n.type!==Vo},pS=function(n,e){switch(n){case 0:return Ko(e);case 2:return JM(e);case 1:default:return Wo(e)}},gS=function(n){switch(n){case 1:return"center";case 2:return"right";case 0:default:return"left"}},mS=["-apple-system","system-ui"],xS=function(n){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?n.filter(function(e){return mS.indexOf(e)===-1}):n},BS=(function(n){VA(e,n);function e(t,A){var i=n.call(this,t,A)||this;return i.canvas=A.canvas?A.canvas:document.createElement("canvas"),i.ctx=i.canvas.getContext("2d"),i.options=A,i.canvas.width=Math.floor(A.width*A.scale),i.canvas.height=Math.floor(A.height*A.scale),i.canvas.style.width=A.width+"px",i.canvas.style.height=A.height+"px",i.ctx.scale(i.options.scale,i.options.scale),i.ctx.translate(-A.x,-A.y),i.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+A.width+"x"+A.height+" at "+A.x+","+A.y+") with scale "+A.scale),i}return e.prototype.render=function(t){return eA(this,void 0,void 0,function(){var A,i;return Yt(this,function(r){switch(r.label){case 0:return A=Pc(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,t),[4,vS(A)];case 1:return i=r.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=Nt(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(i,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},e})(i0),vS=function(n){return new Promise(function(e,t){var A=new Image;A.onload=function(){e(A)},A.onerror=t,A.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(n))})},wS=(function(){function n(e){var t=e.id,A=e.enabled;this.id=t,this.enabled=A,this.start=Date.now()}return n.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.debug=="function"?console.debug.apply(console,Ws([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},n.prototype.getTime=function(){return Date.now()-this.start},n.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&typeof window<"u"&&window.console&&typeof console.info=="function"&&console.info.apply(console,Ws([this.id,this.getTime()+"ms"],e))},n.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.warn=="function"?console.warn.apply(console,Ws([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},n.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.error=="function"?console.error.apply(console,Ws([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},n.instances={},n})(),_S=(function(){function n(e,t){var A;this.windowBounds=t,this.instanceName="#"+n.instanceCount++,this.logger=new wS({id:this.instanceName,enabled:e.logging}),this.cache=(A=e.cache)!==null&&A!==void 0?A:new GM(this,e)}return n.instanceCount=1,n})(),CS=function(n,e){return e===void 0&&(e={}),yS(n,e)};typeof window<"u"&&jp.setContext(window);var yS=function(n,e){return eA(void 0,void 0,void 0,function(){var t,A,i,r,s,o,a,l,c,u,h,f,p,m,g,d,x,B,w,y,E,v,E,U,_,C,T,R,F,P,D,Q,k,O,Y,$,ae,ne,Oe,Ye;return Yt(this,function(Ke){switch(Ke.label){case 0:if(!n||typeof n!="object")return[2,Promise.reject("Invalid element provided as first argument")];if(t=n.ownerDocument,!t)throw new Error("Element is not attached to a Document");if(A=t.defaultView,!A)throw new Error("Document is not attached to a Window");return i={allowTaint:(U=e.allowTaint)!==null&&U!==void 0?U:!1,imageTimeout:(_=e.imageTimeout)!==null&&_!==void 0?_:15e3,proxy:e.proxy,useCORS:(C=e.useCORS)!==null&&C!==void 0?C:!1},r=_c({logging:(T=e.logging)!==null&&T!==void 0?T:!0,cache:e.cache},i),s={windowWidth:(R=e.windowWidth)!==null&&R!==void 0?R:A.innerWidth,windowHeight:(F=e.windowHeight)!==null&&F!==void 0?F:A.innerHeight,scrollX:(P=e.scrollX)!==null&&P!==void 0?P:A.pageXOffset,scrollY:(D=e.scrollY)!==null&&D!==void 0?D:A.pageYOffset},o=new bn(s.scrollX,s.scrollY,s.windowWidth,s.windowHeight),a=new _S(r,o),l=(Q=e.foreignObjectRendering)!==null&&Q!==void 0?Q:!1,c={allowTaint:(k=e.allowTaint)!==null&&k!==void 0?k:!1,onclone:e.onclone,ignoreElements:e.ignoreElements,inlineImages:l,copyStyles:l},a.logger.debug("Starting document clone with size "+o.width+"x"+o.height+" scrolled to "+-o.left+","+-o.top),u=new zf(a,n,c),h=u.clonedReferenceElement,h?[4,u.toIFrame(t,o)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return f=Ke.sent(),p=_h(h)||EM(h)?tC(h.ownerDocument):ia(a,h),m=p.width,g=p.height,d=p.left,x=p.top,B=ES(a,h,e.backgroundColor),w={canvas:e.canvas,backgroundColor:B,scale:(Y=(O=e.scale)!==null&&O!==void 0?O:A.devicePixelRatio)!==null&&Y!==void 0?Y:1,x:(($=e.x)!==null&&$!==void 0?$:0)+d,y:((ae=e.y)!==null&&ae!==void 0?ae:0)+x,width:(ne=e.width)!==null&&ne!==void 0?ne:Math.ceil(m),height:(Oe=e.height)!==null&&Oe!==void 0?Oe:Math.ceil(g)},l?(a.logger.debug("Document cloned, using foreign object rendering"),E=new BS(a,w),[4,E.render(h)]):[3,3];case 2:return y=Ke.sent(),[3,5];case 3:return a.logger.debug("Document cloned, element located at "+d+","+x+" with size "+m+"x"+g+" using computed rendering"),a.logger.debug("Starting DOM parsing"),v=kp(a,h),B===v.styles.backgroundColor&&(v.styles.backgroundColor=En.TRANSPARENT),a.logger.debug("Starting renderer for element at "+w.x+","+w.y+" with size "+w.width+"x"+w.height),E=new fS(a,w),[4,E.render(v)];case 4:y=Ke.sent(),Ke.label=5;case 5:return(!((Ye=e.removeContainer)!==null&&Ye!==void 0)||Ye)&&(zf.destroy(f)||a.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),a.logger.debug("Finished rendering"),[2,y]}})})},ES=function(n,e,t){var A=e.ownerDocument,i=A.documentElement?Kr(n,getComputedStyle(A.documentElement).backgroundColor):En.TRANSPARENT,r=A.body?Kr(n,getComputedStyle(A.body).backgroundColor):En.TRANSPARENT,s=typeof t=="string"?Kr(n,t):t===null?En.TRANSPARENT:4294967295;return e===A.documentElement?Wn(i)?Wn(r)?s:r:i:s};class NA{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new M);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new M);const A=this.elements,i=e.x,r=e.y,s=e.z;return t.x=A[0]*i+A[1]*r+A[2]*s,t.y=A[3]*i+A[4]*r+A[5]*s,t.z=A[6]*i+A[7]*r+A[8]*s,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new NA);const A=this.elements,i=e.elements,r=t.elements,s=A[0],o=A[1],a=A[2],l=A[3],c=A[4],u=A[5],h=A[6],f=A[7],p=A[8],m=i[0],g=i[1],d=i[2],x=i[3],B=i[4],w=i[5],y=i[6],v=i[7],E=i[8];return r[0]=s*m+o*x+a*y,r[1]=s*g+o*B+a*v,r[2]=s*d+o*w+a*E,r[3]=l*m+c*x+u*y,r[4]=l*g+c*B+u*v,r[5]=l*d+c*w+u*E,r[6]=h*m+f*x+p*y,r[7]=h*g+f*B+p*v,r[8]=h*d+f*w+p*E,t}scale(e,t){t===void 0&&(t=new NA);const A=this.elements,i=t.elements;for(let r=0;r!==3;r++)i[3*r+0]=e.x*A[3*r+0],i[3*r+1]=e.y*A[3*r+1],i[3*r+2]=e.z*A[3*r+2];return t}solve(e,t){t===void 0&&(t=new M);const A=3,i=4,r=[];let s,o;for(s=0;s<A*i;s++)r.push(0);for(s=0;s<3;s++)for(o=0;o<3;o++)r[s+i*o]=this.elements[s+3*o];r[3]=e.x,r[7]=e.y,r[11]=e.z;let a=3;const l=a;let c;const u=4;let h;do{if(s=l-a,r[s+i*s]===0){for(o=s+1;o<l;o++)if(r[s+i*o]!==0){c=u;do h=u-c,r[h+i*s]+=r[h+i*o];while(--c);break}}if(r[s+i*s]!==0)for(o=s+1;o<l;o++){const f=r[s+i*o]/r[s+i*s];c=u;do h=u-c,r[h+i*o]=h<=s?0:r[h+i*o]-r[h+i*s]*f;while(--c)}}while(--a);if(t.z=r[2*i+3]/r[2*i+2],t.y=(r[1*i+3]-r[1*i+2]*t.z)/r[1*i+1],t.x=(r[0*i+3]-r[0*i+2]*t.z-r[0*i+1]*t.y)/r[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,A){if(A===void 0)return this.elements[t+3*e];this.elements[t+3*e]=A}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";for(let A=0;A<9;A++)e+=this.elements[A]+",";return e}reverse(e){e===void 0&&(e=new NA);const t=3,A=6,i=bS;let r,s;for(r=0;r<3;r++)for(s=0;s<3;s++)i[r+A*s]=this.elements[r+3*s];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let o=3;const a=o;let l;const c=A;let u;do{if(r=a-o,i[r+A*r]===0){for(s=r+1;s<a;s++)if(i[r+A*s]!==0){l=c;do u=c-l,i[u+A*r]+=i[u+A*s];while(--l);break}}if(i[r+A*r]!==0)for(s=r+1;s<a;s++){const h=i[r+A*s]/i[r+A*r];l=c;do u=c-l,i[u+A*s]=u<=r?0:i[u+A*s]-i[u+A*r]*h;while(--l)}}while(--o);r=2;do{s=r-1;do{const h=i[r+A*s]/i[r+A*r];l=A;do u=A-l,i[u+A*s]=i[u+A*s]-i[u+A*r]*h;while(--l)}while(s--)}while(--r);r=2;do{const h=1/i[r+A*r];l=A;do u=A-l,i[u+A*r]=i[u+A*r]*h;while(--l)}while(r--);r=2;do{s=2;do{if(u=i[t+s+A*r],isNaN(u)||u===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(r,s,u)}while(s--)}while(r--);return e}setRotationFromQuaternion(e){const t=e.x,A=e.y,i=e.z,r=e.w,s=t+t,o=A+A,a=i+i,l=t*s,c=t*o,u=t*a,h=A*o,f=A*a,p=i*a,m=r*s,g=r*o,d=r*a,x=this.elements;return x[0]=1-(h+p),x[1]=c-d,x[2]=u+g,x[3]=c+d,x[4]=1-(l+p),x[5]=f-m,x[6]=u-g,x[7]=f+m,x[8]=1-(l+h),this}transpose(e){e===void 0&&(e=new NA);const t=this.elements,A=e.elements;let i;return A[0]=t[0],A[4]=t[4],A[8]=t[8],i=t[1],A[1]=t[3],A[3]=i,i=t[2],A[2]=t[6],A[6]=i,i=t[5],A[5]=t[7],A[7]=i,e}}const bS=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class M{constructor(e,t,A){e===void 0&&(e=0),t===void 0&&(t=0),A===void 0&&(A=0),this.x=e,this.y=t,this.z=A}cross(e,t){t===void 0&&(t=new M);const A=e.x,i=e.y,r=e.z,s=this.x,o=this.y,a=this.z;return t.x=o*r-a*i,t.y=a*A-s*r,t.z=s*i-o*A,t}set(e,t,A){return this.x=e,this.y=t,this.z=A,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new M(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new M(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new NA([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,A=this.z,i=Math.sqrt(e*e+t*t+A*A);if(i>0){const r=1/i;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new M);const t=this.x,A=this.y,i=this.z;let r=Math.sqrt(t*t+A*A+i*i);return r>0?(r=1/r,e.x=t*r,e.y=A*r,e.z=i*r):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,A=this.z;return Math.sqrt(e*e+t*t+A*A)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,A=this.y,i=this.z,r=e.x,s=e.y,o=e.z;return Math.sqrt((r-t)*(r-t)+(s-A)*(s-A)+(o-i)*(o-i))}distanceSquared(e){const t=this.x,A=this.y,i=this.z,r=e.x,s=e.y,o=e.z;return(r-t)*(r-t)+(s-A)*(s-A)+(o-i)*(o-i)}scale(e,t){t===void 0&&(t=new M);const A=this.x,i=this.y,r=this.z;return t.x=e*A,t.y=e*i,t.z=e*r,t}vmul(e,t){return t===void 0&&(t=new M),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,A){return A===void 0&&(A=new M),A.x=this.x+e*t.x,A.y=this.y+e*t.y,A.z=this.z+e*t.z,A}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new M),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const A=this.length();if(A>0){const i=MS,r=1/A;i.set(this.x*r,this.y*r,this.z*r);const s=SS;Math.abs(i.x)<.9?(s.set(1,0,0),i.cross(s,e)):(s.set(0,1,0),i.cross(s,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,A){const i=this.x,r=this.y,s=this.z;A.x=i+(e.x-i)*t,A.y=r+(e.y-r)*t,A.z=s+(e.z-s)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Yf),Yf.almostEquals(e,t)}clone(){return new M(this.x,this.y,this.z)}}M.ZERO=new M(0,0,0);M.UNIT_X=new M(1,0,0);M.UNIT_Y=new M(0,1,0);M.UNIT_Z=new M(0,0,1);const MS=new M,SS=new M,Yf=new M;class wA{constructor(e){e===void 0&&(e={}),this.lowerBound=new M,this.upperBound=new M,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,A,i){const r=this.lowerBound,s=this.upperBound,o=A;r.copy(e[0]),o&&o.vmult(r,r),s.copy(r);for(let a=1;a<e.length;a++){let l=e[a];o&&(o.vmult(l,qf),l=qf),l.x>s.x&&(s.x=l.x),l.x<r.x&&(r.x=l.x),l.y>s.y&&(s.y=l.y),l.y<r.y&&(r.y=l.y),l.z>s.z&&(s.z=l.z),l.z<r.z&&(r.z=l.z)}return t&&(t.vadd(r,r),t.vadd(s,s)),i&&(r.x-=i,r.y-=i,r.z-=i,s.x+=i,s.y+=i,s.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new wA().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,A=this.upperBound,i=e.lowerBound,r=e.upperBound,s=i.x<=A.x&&A.x<=r.x||t.x<=r.x&&r.x<=A.x,o=i.y<=A.y&&A.y<=r.y||t.y<=r.y&&r.y<=A.y,a=i.z<=A.z&&A.z<=r.z||t.z<=r.z&&r.z<=A.z;return s&&o&&a}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,A=this.upperBound,i=e.lowerBound,r=e.upperBound;return t.x<=i.x&&A.x>=r.x&&t.y<=i.y&&A.y>=r.y&&t.z<=i.z&&A.z>=r.z}getCorners(e,t,A,i,r,s,o,a){const l=this.lowerBound,c=this.upperBound;e.copy(l),t.set(c.x,l.y,l.z),A.set(c.x,c.y,l.z),i.set(l.x,c.y,c.z),r.set(c.x,l.y,c.z),s.set(l.x,c.y,l.z),o.set(l.x,l.y,c.z),a.copy(c)}toLocalFrame(e,t){const A=Jf,i=A[0],r=A[1],s=A[2],o=A[3],a=A[4],l=A[5],c=A[6],u=A[7];this.getCorners(i,r,s,o,a,l,c,u);for(let h=0;h!==8;h++){const f=A[h];e.pointToLocal(f,f)}return t.setFromPoints(A)}toWorldFrame(e,t){const A=Jf,i=A[0],r=A[1],s=A[2],o=A[3],a=A[4],l=A[5],c=A[6],u=A[7];this.getCorners(i,r,s,o,a,l,c,u);for(let h=0;h!==8;h++){const f=A[h];e.pointToWorld(f,f)}return t.setFromPoints(A)}overlapsRay(e){const{direction:t,from:A}=e,i=1/t.x,r=1/t.y,s=1/t.z,o=(this.lowerBound.x-A.x)*i,a=(this.upperBound.x-A.x)*i,l=(this.lowerBound.y-A.y)*r,c=(this.upperBound.y-A.y)*r,u=(this.lowerBound.z-A.z)*s,h=(this.upperBound.z-A.z)*s,f=Math.max(Math.max(Math.min(o,a),Math.min(l,c)),Math.min(u,h)),p=Math.min(Math.min(Math.max(o,a),Math.max(l,c)),Math.max(u,h));return!(p<0||f>p)}}const qf=new M,Jf=[new M,new M,new M,new M,new M,new M,new M,new M];class Zf{constructor(){this.matrix=[]}get(e,t){let{index:A}=e,{index:i}=t;if(i>A){const r=i;i=A,A=r}return this.matrix[(A*(A+1)>>1)+i-1]}set(e,t,A){let{index:i}=e,{index:r}=t;if(r>i){const s=r;r=i,i=s}this.matrix[(i*(i+1)>>1)+r-1]=A?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class r0{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const A=this._listeners;return A[e]===void 0&&(A[e]=[]),A[e].includes(t)||A[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const A=this._listeners;return!!(A[e]!==void 0&&A[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const A=this._listeners;if(A[e]===void 0)return this;const i=A[e].indexOf(t);return i!==-1&&A[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const A=this._listeners[e.type];if(A!==void 0){e.target=this;for(let i=0,r=A.length;i<r;i++)A[i].call(this,e)}return this}}class St{constructor(e,t,A,i){e===void 0&&(e=0),t===void 0&&(t=0),A===void 0&&(A=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=A,this.w=i}set(e,t,A,i){return this.x=e,this.y=t,this.z=A,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const A=Math.sin(t*.5);return this.x=e.x*A,this.y=e.y*A,this.z=e.z*A,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new M),this.normalize();const t=2*Math.acos(this.w),A=Math.sqrt(1-this.w*this.w);return A<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/A,e.y=this.y/A,e.z=this.z/A),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const A=US,i=FS;e.tangents(A,i),this.setFromAxisAngle(A,Math.PI)}else{const A=e.cross(t);this.x=A.x,this.y=A.y,this.z=A.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new St);const A=this.x,i=this.y,r=this.z,s=this.w,o=e.x,a=e.y,l=e.z,c=e.w;return t.x=A*c+s*o+i*l-r*a,t.y=i*c+s*a+r*o-A*l,t.z=r*c+s*l+A*a-i*o,t.w=s*c-A*o-i*a-r*l,t}inverse(e){e===void 0&&(e=new St);const t=this.x,A=this.y,i=this.z,r=this.w;this.conjugate(e);const s=1/(t*t+A*A+i*i+r*r);return e.x*=s,e.y*=s,e.z*=s,e.w*=s,e}conjugate(e){return e===void 0&&(e=new St),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new M);const A=e.x,i=e.y,r=e.z,s=this.x,o=this.y,a=this.z,l=this.w,c=l*A+o*r-a*i,u=l*i+a*A-s*r,h=l*r+s*i-o*A,f=-s*A-o*i-a*r;return t.x=c*l+f*-s+u*-a-h*-o,t.y=u*l+f*-o+h*-s-c*-a,t.z=h*l+f*-a+c*-o-u*-s,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let A,i,r;const s=this.x,o=this.y,a=this.z,l=this.w;switch(t){case"YZX":const c=s*o+a*l;if(c>.499&&(A=2*Math.atan2(s,l),i=Math.PI/2,r=0),c<-.499&&(A=-2*Math.atan2(s,l),i=-Math.PI/2,r=0),A===void 0){const u=s*s,h=o*o,f=a*a;A=Math.atan2(2*o*l-2*s*a,1-2*h-2*f),i=Math.asin(2*c),r=Math.atan2(2*s*l-2*o*a,1-2*u-2*f)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=A,e.z=i,e.x=r}setFromEuler(e,t,A,i){i===void 0&&(i="XYZ");const r=Math.cos(e/2),s=Math.cos(t/2),o=Math.cos(A/2),a=Math.sin(e/2),l=Math.sin(t/2),c=Math.sin(A/2);return i==="XYZ"?(this.x=a*s*o+r*l*c,this.y=r*l*o-a*s*c,this.z=r*s*c+a*l*o,this.w=r*s*o-a*l*c):i==="YXZ"?(this.x=a*s*o+r*l*c,this.y=r*l*o-a*s*c,this.z=r*s*c-a*l*o,this.w=r*s*o+a*l*c):i==="ZXY"?(this.x=a*s*o-r*l*c,this.y=r*l*o+a*s*c,this.z=r*s*c+a*l*o,this.w=r*s*o-a*l*c):i==="ZYX"?(this.x=a*s*o-r*l*c,this.y=r*l*o+a*s*c,this.z=r*s*c-a*l*o,this.w=r*s*o+a*l*c):i==="YZX"?(this.x=a*s*o+r*l*c,this.y=r*l*o+a*s*c,this.z=r*s*c-a*l*o,this.w=r*s*o-a*l*c):i==="XZY"&&(this.x=a*s*o-r*l*c,this.y=r*l*o-a*s*c,this.z=r*s*c+a*l*o,this.w=r*s*o+a*l*c),this}clone(){return new St(this.x,this.y,this.z,this.w)}slerp(e,t,A){A===void 0&&(A=new St);const i=this.x,r=this.y,s=this.z,o=this.w;let a=e.x,l=e.y,c=e.z,u=e.w,h,f,p,m,g;return f=i*a+r*l+s*c+o*u,f<0&&(f=-f,a=-a,l=-l,c=-c,u=-u),1-f>1e-6?(h=Math.acos(f),p=Math.sin(h),m=Math.sin((1-t)*h)/p,g=Math.sin(t*h)/p):(m=1-t,g=t),A.x=m*i+g*a,A.y=m*r+g*l,A.z=m*s+g*c,A.w=m*o+g*u,A}integrate(e,t,A,i){i===void 0&&(i=new St);const r=e.x*A.x,s=e.y*A.y,o=e.z*A.z,a=this.x,l=this.y,c=this.z,u=this.w,h=t*.5;return i.x+=h*(r*u+s*c-o*l),i.y+=h*(s*u+o*a-r*c),i.z+=h*(o*u+r*l-s*a),i.w+=h*(-r*a-s*l-o*c),i}}const US=new M,FS=new M,TS={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class ve{constructor(e){e===void 0&&(e={}),this.id=ve.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,A,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}ve.idCounter=0;ve.types=TS;class it{constructor(e){e===void 0&&(e={}),this.position=new M,this.quaternion=new St,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return it.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return it.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,A,i){return i===void 0&&(i=new M),A.vsub(e,i),t.conjugate(jf),jf.vmult(i,i),i}static pointToWorldFrame(e,t,A,i){return i===void 0&&(i=new M),t.vmult(A,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,A){return A===void 0&&(A=new M),e.vmult(t,A),A}static vectorToLocalFrame(e,t,A,i){return i===void 0&&(i=new M),t.w*=-1,t.vmult(A,i),t.w*=-1,i}}const jf=new St;class qr extends ve{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:A=[],normals:i=[],axes:r,boundingSphereRadius:s}=e;super({type:ve.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=A,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),s?this.boundingSphereRadius=s:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,A=this.uniqueEdges;A.length=0;const i=new M;for(let r=0;r!==e.length;r++){const s=e[r],o=s.length;for(let a=0;a!==o;a++){const l=(a+1)%o;t[s[a]].vsub(t[s[l]],i),i.normalize();let c=!1;for(let u=0;u!==A.length;u++)if(A[u].almostEquals(i)||A[u].almostEquals(i)){c=!0;break}c||A.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new M;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const A=this.vertices[this.faces[e][0]];if(t.dot(A)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const A=this.faces[e],i=this.vertices[A[0]],r=this.vertices[A[1]],s=this.vertices[A[2]];qr.computeNormal(i,r,s,t)}static computeNormal(e,t,A,i){const r=new M,s=new M;t.vsub(e,s),A.vsub(t,r),r.cross(s,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,A,i,r,s,o,a,l){const c=new M;let u=-1,h=-Number.MAX_VALUE;for(let p=0;p<A.faces.length;p++){c.copy(A.faceNormals[p]),r.vmult(c,c);const m=c.dot(s);m>h&&(h=m,u=p)}const f=[];for(let p=0;p<A.faces[u].length;p++){const m=A.vertices[A.faces[u][p]],g=new M;g.copy(m),r.vmult(g,g),i.vadd(g,g),f.push(g)}u>=0&&this.clipFaceAgainstHull(s,e,t,f,o,a,l)}findSeparatingAxis(e,t,A,i,r,s,o,a){const l=new M,c=new M,u=new M,h=new M,f=new M,p=new M;let m=Number.MAX_VALUE;const g=this;if(g.uniqueAxes)for(let d=0;d!==g.uniqueAxes.length;d++){A.vmult(g.uniqueAxes[d],l);const x=g.testSepAxis(l,e,t,A,i,r);if(x===!1)return!1;x<m&&(m=x,s.copy(l))}else{const d=o?o.length:g.faces.length;for(let x=0;x<d;x++){const B=o?o[x]:x;l.copy(g.faceNormals[B]),A.vmult(l,l);const w=g.testSepAxis(l,e,t,A,i,r);if(w===!1)return!1;w<m&&(m=w,s.copy(l))}}if(e.uniqueAxes)for(let d=0;d!==e.uniqueAxes.length;d++){r.vmult(e.uniqueAxes[d],c);const x=g.testSepAxis(c,e,t,A,i,r);if(x===!1)return!1;x<m&&(m=x,s.copy(c))}else{const d=a?a.length:e.faces.length;for(let x=0;x<d;x++){const B=a?a[x]:x;c.copy(e.faceNormals[B]),r.vmult(c,c);const w=g.testSepAxis(c,e,t,A,i,r);if(w===!1)return!1;w<m&&(m=w,s.copy(c))}}for(let d=0;d!==g.uniqueEdges.length;d++){A.vmult(g.uniqueEdges[d],h);for(let x=0;x!==e.uniqueEdges.length;x++)if(r.vmult(e.uniqueEdges[x],f),h.cross(f,p),!p.almostZero()){p.normalize();const B=g.testSepAxis(p,e,t,A,i,r);if(B===!1)return!1;B<m&&(m=B,s.copy(p))}}return i.vsub(t,u),u.dot(s)>0&&s.negate(s),!0}testSepAxis(e,t,A,i,r,s){const o=this;qr.project(o,e,A,i,El),qr.project(t,e,r,s,bl);const a=El[0],l=El[1],c=bl[0],u=bl[1];if(a<u||c<l)return!1;const h=a-u,f=c-l;return h<f?h:f}calculateLocalInertia(e,t){const A=new M,i=new M;this.computeLocalAABB(i,A);const r=A.x-i.x,s=A.y-i.y,o=A.z-i.z;t.x=1/12*e*(2*s*2*s+2*o*2*o),t.y=1/12*e*(2*r*2*r+2*o*2*o),t.z=1/12*e*(2*s*2*s+2*r*2*r)}getPlaneConstantOfFace(e){const t=this.faces[e],A=this.faceNormals[e],i=this.vertices[t[0]];return-A.dot(i)}clipFaceAgainstHull(e,t,A,i,r,s,o){const a=new M,l=new M,c=new M,u=new M,h=new M,f=new M,p=new M,m=new M,g=this,d=[],x=i,B=d;let w=-1,y=Number.MAX_VALUE;for(let C=0;C<g.faces.length;C++){a.copy(g.faceNormals[C]),A.vmult(a,a);const T=a.dot(e);T<y&&(y=T,w=C)}if(w<0)return;const v=g.faces[w];v.connectedFaces=[];for(let C=0;C<g.faces.length;C++)for(let T=0;T<g.faces[C].length;T++)v.indexOf(g.faces[C][T])!==-1&&C!==w&&v.connectedFaces.indexOf(C)===-1&&v.connectedFaces.push(C);const E=v.length;for(let C=0;C<E;C++){const T=g.vertices[v[C]],R=g.vertices[v[(C+1)%E]];T.vsub(R,l),c.copy(l),A.vmult(c,c),t.vadd(c,c),u.copy(this.faceNormals[w]),A.vmult(u,u),t.vadd(u,u),c.cross(u,h),h.negate(h),f.copy(T),A.vmult(f,f),t.vadd(f,f);const F=v.connectedFaces[C];p.copy(this.faceNormals[F]);const P=this.getPlaneConstantOfFace(F);m.copy(p),A.vmult(m,m);const D=P-m.dot(t);for(this.clipFaceAgainstPlane(x,B,m,D);x.length;)x.shift();for(;B.length;)x.push(B.shift())}p.copy(this.faceNormals[w]);const U=this.getPlaneConstantOfFace(w);m.copy(p),A.vmult(m,m);const _=U-m.dot(t);for(let C=0;C<x.length;C++){let T=m.dot(x[C])+_;if(T<=r&&(console.log(`clamped: depth=${T} to minDist=${r}`),T=r),T<=s){const R=x[C];if(T<=1e-6){const F={point:R,normal:m,depth:T};o.push(F)}}}}clipFaceAgainstPlane(e,t,A,i){let r,s;const o=e.length;if(o<2)return t;let a=e[e.length-1],l=e[0];r=A.dot(a)+i;for(let c=0;c<o;c++){if(l=e[c],s=A.dot(l)+i,r<0)if(s<0){const u=new M;u.copy(l),t.push(u)}else{const u=new M;a.lerp(l,r/(r-s),u),t.push(u)}else if(s<0){const u=new M;a.lerp(l,r/(r-s),u),t.push(u),t.push(l)}a=l,r=s}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new M);const A=this.vertices,i=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)t.vmult(A[r],i[r]),e.vadd(i[r],i[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const A=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const r=A[i];r.x<e.x?e.x=r.x:r.x>t.x&&(t.x=r.x),r.y<e.y?e.y=r.y:r.y>t.y&&(t.y=r.y),r.z<e.z?e.z=r.z:r.z>t.z&&(t.z=r.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new M);const A=this.faceNormals,i=this.worldFaceNormals;for(let r=0;r!==t;r++)e.vmult(A[r],i[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let A=0;A!==t.length;A++){const i=t[A].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,A,i){const r=this.vertices;let s,o,a,l,c,u,h=new M;for(let f=0;f<r.length;f++){h.copy(r[f]),t.vmult(h,h),e.vadd(h,h);const p=h;(s===void 0||p.x<s)&&(s=p.x),(l===void 0||p.x>l)&&(l=p.x),(o===void 0||p.y<o)&&(o=p.y),(c===void 0||p.y>c)&&(c=p.y),(a===void 0||p.z<a)&&(a=p.z),(u===void 0||p.z>u)&&(u=p.z)}A.set(s,o,a),i.set(l,c,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new M);const t=this.vertices;for(let A=0;A<t.length;A++)e.vadd(t[A],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const A=this.vertices.length,i=this.vertices;if(t){for(let r=0;r<A;r++){const s=i[r];t.vmult(s,s)}for(let r=0;r<this.faceNormals.length;r++){const s=this.faceNormals[r];t.vmult(s,s)}}if(e)for(let r=0;r<A;r++){const s=i[r];s.vadd(e,s)}}pointIsInside(e){const t=this.vertices,A=this.faces,i=this.faceNormals,r=new M;this.getAveragePointLocal(r);for(let s=0;s<this.faces.length;s++){let o=i[s];const a=t[A[s][0]],l=new M;e.vsub(a,l);const c=o.dot(l),u=new M;r.vsub(a,u);const h=o.dot(u);if(c<0&&h>0||c>0&&h<0)return!1}return-1}static project(e,t,A,i,r){const s=e.vertices.length,o=IS;let a=0,l=0;const c=QS,u=e.vertices;c.setZero(),it.vectorToLocalFrame(A,i,t,o),it.pointToLocalFrame(A,i,c,c);const h=c.dot(o);l=a=u[0].dot(o);for(let f=1;f<s;f++){const p=u[f].dot(o);p>a&&(a=p),p<l&&(l=p)}if(l-=h,a-=h,l>a){const f=l;l=a,a=f}r[0]=a,r[1]=l}}const El=[],bl=[];new M;const IS=new M,QS=new M;class hs extends ve{constructor(e){super({type:ve.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,A=this.halfExtents.z,i=M,r=[new i(-e,-t,-A),new i(e,-t,-A),new i(e,t,-A),new i(-e,t,-A),new i(-e,-t,A),new i(e,-t,A),new i(e,t,A),new i(-e,t,A)],s=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],o=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],a=new qr({vertices:r,faces:s,axes:o});this.convexPolyhedronRepresentation=a,a.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new M),hs.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,A){const i=e;A.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),A.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),A.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const A=e,i=this.halfExtents;if(A[0].set(i.x,0,0),A[1].set(0,i.y,0),A[2].set(0,0,i.z),A[3].set(-i.x,0,0),A[4].set(0,-i.y,0),A[5].set(0,0,-i.z),t!==void 0)for(let r=0;r!==A.length;r++)t.vmult(A[r],A[r]);return A}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,A){const i=this.halfExtents,r=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let s=0;s<r.length;s++)Ln.set(r[s][0],r[s][1],r[s][2]),t.vmult(Ln,Ln),e.vadd(Ln,Ln),A(Ln.x,Ln.y,Ln.z)}calculateWorldAABB(e,t,A,i){const r=this.halfExtents;kA[0].set(r.x,r.y,r.z),kA[1].set(-r.x,r.y,r.z),kA[2].set(-r.x,-r.y,r.z),kA[3].set(-r.x,-r.y,-r.z),kA[4].set(r.x,-r.y,-r.z),kA[5].set(r.x,r.y,-r.z),kA[6].set(-r.x,r.y,-r.z),kA[7].set(r.x,-r.y,r.z);const s=kA[0];t.vmult(s,s),e.vadd(s,s),i.copy(s),A.copy(s);for(let o=1;o<8;o++){const a=kA[o];t.vmult(a,a),e.vadd(a,a);const l=a.x,c=a.y,u=a.z;l>i.x&&(i.x=l),c>i.y&&(i.y=c),u>i.z&&(i.z=u),l<A.x&&(A.x=l),c<A.y&&(A.y=c),u<A.z&&(A.z=u)}}}const Ln=new M,kA=[new M,new M,new M,new M,new M,new M,new M,new M],Ch={DYNAMIC:1,STATIC:2,KINEMATIC:4},yh={AWAKE:0,SLEEPY:1,SLEEPING:2};class xe extends r0{constructor(e){e===void 0&&(e={}),super(),this.id=xe.idCounter++,this.index=-1,this.world=null,this.vlambda=new M,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new M,this.previousPosition=new M,this.interpolatedPosition=new M,this.initPosition=new M,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new M,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new M,this.force=new M;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?xe.STATIC:xe.DYNAMIC,typeof e.type==typeof xe.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=xe.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new M,this.quaternion=new St,this.initQuaternion=new St,this.previousQuaternion=new St,this.interpolatedQuaternion=new St,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new M,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new M,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new M,this.invInertia=new M,this.invInertiaWorld=new NA,this.invMassSolve=0,this.invInertiaSolve=new M,this.invInertiaWorldSolve=new NA,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new M(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new M(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new wA,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new M,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=xe.AWAKE,this.wakeUpAfterNarrowphase=!1,e===xe.SLEEPING&&this.dispatchEvent(xe.wakeupEvent)}sleep(){this.sleepState=xe.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,A=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===xe.AWAKE&&A<i?(this.sleepState=xe.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(xe.sleepyEvent)):t===xe.SLEEPY&&A>i?this.wakeUp():t===xe.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(xe.sleepEvent))}}updateSolveMassProperties(){this.sleepState===xe.SLEEPING||this.type===xe.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new M),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new M),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t}addShape(e,t,A){const i=new M,r=new St;return t&&i.copy(t),A&&r.copy(A),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,A=e.length;let i=0;for(let r=0;r!==A;r++){const s=e[r];s.updateBoundingSphereRadius();const o=t[r].length(),a=s.boundingSphereRadius;o+a>i&&(i=o+a)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,A=this.shapeOrientations,i=e.length,r=RS,s=LS,o=this.quaternion,a=this.aabb,l=DS;for(let c=0;c!==i;c++){const u=e[c];o.vmult(t[c],r),r.vadd(this.position,r),o.mult(A[c],s),u.calculateWorldAABB(r,s,l.lowerBound,l.upperBound),c===0?a.copy(l):a.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const A=PS,i=HS;A.setRotationFromQuaternion(this.quaternion),A.transpose(i),A.scale(t,A),A.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new M),this.type!==xe.DYNAMIC)return;this.sleepState===xe.SLEEPING&&this.wakeUp();const A=NS;t.cross(e,A),this.force.vadd(e,this.force),this.torque.vadd(A,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new M),this.type!==xe.DYNAMIC)return;const A=OS,i=VS;this.vectorToWorldFrame(e,A),this.vectorToWorldFrame(t,i),this.applyForce(A,i)}applyTorque(e){this.type===xe.DYNAMIC&&(this.sleepState===xe.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new M),this.type!==xe.DYNAMIC)return;this.sleepState===xe.SLEEPING&&this.wakeUp();const A=t,i=GS;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const r=zS;A.cross(e,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new M),this.type!==xe.DYNAMIC)return;const A=kS,i=KS;this.vectorToWorldFrame(e,A),this.vectorToWorldFrame(t,i),this.applyImpulse(A,i)}updateMassProperties(){const e=WS;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,A=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),hs.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!A?1/t.x:0,t.y>0&&!A?1/t.y:0,t.z>0&&!A?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const A=new M;return e.vsub(this.position,A),this.angularVelocity.cross(A,t),this.velocity.vadd(t,t),t}integrate(e,t,A){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===xe.DYNAMIC||this.type===xe.KINEMATIC)||this.sleepState===xe.SLEEPING)return;const i=this.velocity,r=this.angularVelocity,s=this.position,o=this.force,a=this.torque,l=this.quaternion,c=this.invMass,u=this.invInertiaWorld,h=this.linearFactor,f=c*e;i.x+=o.x*f*h.x,i.y+=o.y*f*h.y,i.z+=o.z*f*h.z;const p=u.elements,m=this.angularFactor,g=a.x*m.x,d=a.y*m.y,x=a.z*m.z;r.x+=e*(p[0]*g+p[1]*d+p[2]*x),r.y+=e*(p[3]*g+p[4]*d+p[5]*x),r.z+=e*(p[6]*g+p[7]*d+p[8]*x),s.x+=i.x*e,s.y+=i.y*e,s.z+=i.z*e,l.integrate(this.angularVelocity,e,this.angularFactor,l),t&&(A?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}xe.idCounter=0;xe.COLLIDE_EVENT_NAME="collide";xe.DYNAMIC=Ch.DYNAMIC;xe.STATIC=Ch.STATIC;xe.KINEMATIC=Ch.KINEMATIC;xe.AWAKE=yh.AWAKE;xe.SLEEPY=yh.SLEEPY;xe.SLEEPING=yh.SLEEPING;xe.wakeupEvent={type:"wakeup"};xe.sleepyEvent={type:"sleepy"};xe.sleepEvent={type:"sleep"};const RS=new M,LS=new St,DS=new wA,PS=new NA,HS=new NA;new NA;const NS=new M,OS=new M,VS=new M,GS=new M,zS=new M,kS=new M,KS=new M,WS=new M;class XS{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,A){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!((e.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&xe.STATIC)!==0||e.sleepState===xe.SLEEPING)&&((t.type&xe.STATIC)!==0||t.sleepState===xe.SLEEPING))}intersectionTest(e,t,A,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,A,i):this.doBoundingSphereBroadphase(e,t,A,i)}doBoundingSphereBroadphase(e,t,A,i){const r=YS;t.position.vsub(e.position,r);const s=(e.boundingRadius+t.boundingRadius)**2;r.lengthSquared()<s&&(A.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,A,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(A.push(e),i.push(t))}makePairsUnique(e,t){const A=qS,i=JS,r=ZS,s=e.length;for(let o=0;o!==s;o++)i[o]=e[o],r[o]=t[o];e.length=0,t.length=0;for(let o=0;o!==s;o++){const a=i[o].id,l=r[o].id,c=a<l?`${a},${l}`:`${l},${a}`;A[c]=o,A.keys.push(c)}for(let o=0;o!==A.keys.length;o++){const a=A.keys.pop(),l=A[a];e.push(i[l]),t.push(r[l]),delete A[a]}}setWorld(e){}static boundingSphereCheck(e,t){const A=new M;e.position.vsub(t.position,A);const i=e.shapes[0],r=t.shapes[0];return Math.pow(i.boundingSphereRadius+r.boundingSphereRadius,2)>A.lengthSquared()}aabbQuery(e,t,A){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const YS=new M;new M;new St;new M;const qS={keys:[]},JS=[],ZS=[];new M;new M;new M;class jS extends XS{constructor(){super()}collisionPairs(e,t,A){const i=e.bodies,r=i.length;let s,o;for(let a=0;a!==r;a++)for(let l=0;l!==a;l++)s=i[a],o=i[l],this.needBroadphaseCollision(s,o)&&this.intersectionTest(s,o,t,A)}aabbQuery(e,t,A){A===void 0&&(A=[]);for(let i=0;i<e.bodies.length;i++){const r=e.bodies[i];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(t)&&A.push(r)}return A}}class Yo{constructor(){this.rayFromWorld=new M,this.rayToWorld=new M,this.hitNormalWorld=new M,this.hitPointWorld=new M,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,A,i,r,s,o){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(A),this.hitPointWorld.copy(i),this.shape=r,this.body=s,this.distance=o}}let s0,o0,a0,l0,c0,h0,u0;const Eh={CLOSEST:1,ANY:2,ALL:4};s0=ve.types.SPHERE;o0=ve.types.PLANE;a0=ve.types.BOX;l0=ve.types.CYLINDER;c0=ve.types.CONVEXPOLYHEDRON;h0=ve.types.HEIGHTFIELD;u0=ve.types.TRIMESH;class Ft{get[s0](){return this._intersectSphere}get[o0](){return this._intersectPlane}get[a0](){return this._intersectBox}get[l0](){return this._intersectConvex}get[c0](){return this._intersectConvex}get[h0](){return this._intersectHeightfield}get[u0](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new M),t===void 0&&(t=new M),this.from=e.clone(),this.to=t.clone(),this.direction=new M,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Ft.ANY,this.result=new Yo,this.hasHit=!1,this.callback=A=>{}}intersectWorld(e,t){return this.mode=t.mode||Ft.ANY,this.result=t.result||new Yo,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB($f),Ml.length=0,e.broadphase.aabbQuery(e,$f,Ml),this.intersectBodies(Ml),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const A=this.checkCollisionResponse;if(A&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;const i=$S,r=eU;for(let s=0,o=e.shapes.length;s<o;s++){const a=e.shapes[s];if(!(A&&!a.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[s],r),e.quaternion.vmult(e.shapeOffsets[s],i),i.vadd(e.position,i),this.intersectShape(a,r,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let A=0,i=e.length;!this.result.shouldStop&&A<i;A++)this.intersectBody(e[A])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,A,i){const r=this.from;if(dU(r,this.direction,A)>e.boundingSphereRadius)return;const o=this[e.type];o&&o.call(this,e,t,A,i,e)}_intersectBox(e,t,A,i,r){return this._intersectConvex(e.convexPolyhedronRepresentation,t,A,i,r)}_intersectPlane(e,t,A,i,r){const s=this.from,o=this.to,a=this.direction,l=new M(0,0,1);t.vmult(l,l);const c=new M;s.vsub(A,c);const u=c.dot(l);o.vsub(A,c);const h=c.dot(l);if(u*h>0||s.distanceTo(o)<u)return;const f=l.dot(a);if(Math.abs(f)<this.precision)return;const p=new M,m=new M,g=new M;s.vsub(A,p);const d=-l.dot(p)/f;a.scale(d,m),s.vadd(m,g),this.reportIntersection(l,g,r,i,-1)}getAABB(e){const{lowerBound:t,upperBound:A}=e,i=this.to,r=this.from;t.x=Math.min(i.x,r.x),t.y=Math.min(i.y,r.y),t.z=Math.min(i.z,r.z),A.x=Math.max(i.x,r.x),A.y=Math.max(i.y,r.y),A.z=Math.max(i.z,r.z)}_intersectHeightfield(e,t,A,i,r){e.data,e.elementSize;const s=tU;s.from.copy(this.from),s.to.copy(this.to),it.pointToLocalFrame(A,t,s.from,s.from),it.pointToLocalFrame(A,t,s.to,s.to),s.updateDirection();const o=AU;let a,l,c,u;a=l=0,c=u=e.data.length-1;const h=new wA;s.getAABB(h),e.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,o,!0),a=Math.max(a,o[0]),l=Math.max(l,o[1]),e.getIndexOfPosition(h.upperBound.x,h.upperBound.y,o,!0),c=Math.min(c,o[0]+1),u=Math.min(u,o[1]+1);for(let f=a;f<c;f++)for(let p=l;p<u;p++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,p,h),!!h.overlapsRay(s)){if(e.getConvexTrianglePillar(f,p,!1),it.pointToWorldFrame(A,t,e.pillarOffset,go),this._intersectConvex(e.pillarConvex,t,go,i,r,ed),this.result.shouldStop)return;e.getConvexTrianglePillar(f,p,!0),it.pointToWorldFrame(A,t,e.pillarOffset,go),this._intersectConvex(e.pillarConvex,t,go,i,r,ed)}}}_intersectSphere(e,t,A,i,r){const s=this.from,o=this.to,a=e.radius,l=(o.x-s.x)**2+(o.y-s.y)**2+(o.z-s.z)**2,c=2*((o.x-s.x)*(s.x-A.x)+(o.y-s.y)*(s.y-A.y)+(o.z-s.z)*(s.z-A.z)),u=(s.x-A.x)**2+(s.y-A.y)**2+(s.z-A.z)**2-a**2,h=c**2-4*l*u,f=nU,p=iU;if(!(h<0))if(h===0)s.lerp(o,h,f),f.vsub(A,p),p.normalize(),this.reportIntersection(p,f,r,i,-1);else{const m=(-c-Math.sqrt(h))/(2*l),g=(-c+Math.sqrt(h))/(2*l);if(m>=0&&m<=1&&(s.lerp(o,m,f),f.vsub(A,p),p.normalize(),this.reportIntersection(p,f,r,i,-1)),this.result.shouldStop)return;g>=0&&g<=1&&(s.lerp(o,g,f),f.vsub(A,p),p.normalize(),this.reportIntersection(p,f,r,i,-1))}}_intersectConvex(e,t,A,i,r,s){const o=rU,a=td,l=s&&s.faceList||null,c=e.faces,u=e.vertices,h=e.faceNormals,f=this.direction,p=this.from,m=this.to,g=p.distanceTo(m),d=l?l.length:c.length,x=this.result;for(let B=0;!x.shouldStop&&B<d;B++){const w=l?l[B]:B,y=c[w],v=h[w],E=t,U=A;a.copy(u[y[0]]),E.vmult(a,a),a.vadd(U,a),a.vsub(p,a),E.vmult(v,o);const _=f.dot(o);if(Math.abs(_)<this.precision)continue;const C=o.dot(a)/_;if(!(C<0)){f.scale(C,lA),lA.vadd(p,lA),DA.copy(u[y[0]]),E.vmult(DA,DA),U.vadd(DA,DA);for(let T=1;!x.shouldStop&&T<y.length-1;T++){KA.copy(u[y[T]]),WA.copy(u[y[T+1]]),E.vmult(KA,KA),E.vmult(WA,WA),U.vadd(KA,KA),U.vadd(WA,WA);const R=lA.distanceTo(p);!(Ft.pointInTriangle(lA,DA,KA,WA)||Ft.pointInTriangle(lA,KA,DA,WA))||R>g||this.reportIntersection(o,lA,r,i,w)}}}}_intersectTrimesh(e,t,A,i,r,s){const o=sU,a=uU,l=fU,c=td,u=oU,h=aU,f=lU,p=hU,m=cU,g=e.indices;e.vertices;const d=this.from,x=this.to,B=this.direction;l.position.copy(A),l.quaternion.copy(t),it.vectorToLocalFrame(A,t,B,u),it.pointToLocalFrame(A,t,d,h),it.pointToLocalFrame(A,t,x,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,h.x*=e.scale.x,h.y*=e.scale.y,h.z*=e.scale.z,f.vsub(h,u),u.normalize();const w=h.distanceSquared(f);e.tree.rayQuery(this,l,a);for(let y=0,v=a.length;!this.result.shouldStop&&y!==v;y++){const E=a[y];e.getNormal(E,o),e.getVertex(g[E*3],DA),DA.vsub(h,c);const U=u.dot(o),_=o.dot(c)/U;if(_<0)continue;u.scale(_,lA),lA.vadd(h,lA),e.getVertex(g[E*3+1],KA),e.getVertex(g[E*3+2],WA);const C=lA.distanceSquared(h);!(Ft.pointInTriangle(lA,KA,DA,WA)||Ft.pointInTriangle(lA,DA,KA,WA))||C>w||(it.vectorToWorldFrame(t,o,m),it.pointToWorldFrame(A,t,lA,p),this.reportIntersection(m,p,r,i,E))}a.length=0}reportIntersection(e,t,A,i,r){const s=this.from,o=this.to,a=s.distanceTo(t),l=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(l.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case Ft.ALL:this.hasHit=!0,l.set(s,o,e,t,A,i,a),l.hasHit=!0,this.callback(l);break;case Ft.CLOSEST:(a<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(s,o,e,t,A,i,a));break;case Ft.ANY:this.hasHit=!0,l.hasHit=!0,l.set(s,o,e,t,A,i,a),l.shouldStop=!0;break}}static pointInTriangle(e,t,A,i){i.vsub(t,hi),A.vsub(t,Sr),e.vsub(t,Sl);const r=hi.dot(hi),s=hi.dot(Sr),o=hi.dot(Sl),a=Sr.dot(Sr),l=Sr.dot(Sl);let c,u;return(c=a*o-s*l)>=0&&(u=r*l-s*o)>=0&&c+u<r*a-s*s}}Ft.CLOSEST=Eh.CLOSEST;Ft.ANY=Eh.ANY;Ft.ALL=Eh.ALL;const $f=new wA,Ml=[],Sr=new M,Sl=new M,$S=new M,eU=new St,lA=new M,DA=new M,KA=new M,WA=new M;new M;new Yo;const ed={faceList:[0]},go=new M,tU=new Ft,AU=[],nU=new M,iU=new M,rU=new M;new M;new M;const td=new M,sU=new M,oU=new M,aU=new M,lU=new M,cU=new M,hU=new M;new wA;const uU=[],fU=new it,hi=new M,mo=new M;function dU(n,e,t){t.vsub(n,hi);const A=hi.dot(e);return e.scale(A,mo),mo.vadd(n,mo),t.distanceTo(mo)}class pU{static defaults(e,t){e===void 0&&(e={});for(let A in t)A in e||(e[A]=t[A]);return e}}class Ad{constructor(){this.spatial=new M,this.rotational=new M}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class us{constructor(e,t,A,i){A===void 0&&(A=-1e6),i===void 0&&(i=1e6),this.id=us.idCounter++,this.minForce=A,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Ad,this.jacobianElementB=new Ad,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,A){const i=t,r=e,s=A;this.a=4/(s*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(s*s*r*(1+4*i))}computeB(e,t,A){const i=this.computeGW(),r=this.computeGq(),s=this.computeGiMf();return-r*e-i*t-s*A}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,A=this.bi,i=this.bj,r=A.position,s=i.position;return e.spatial.dot(r)+t.spatial.dot(s)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,A=this.bi,i=this.bj,r=A.velocity,s=i.velocity,o=A.angularVelocity,a=i.angularVelocity;return e.multiplyVectors(r,o)+t.multiplyVectors(s,a)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,A=this.bi,i=this.bj,r=A.vlambda,s=i.vlambda,o=A.wlambda,a=i.wlambda;return e.multiplyVectors(r,o)+t.multiplyVectors(s,a)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,A=this.bi,i=this.bj,r=A.force,s=A.torque,o=i.force,a=i.torque,l=A.invMassSolve,c=i.invMassSolve;return r.scale(l,nd),o.scale(c,id),A.invInertiaWorldSolve.vmult(s,rd),i.invInertiaWorldSolve.vmult(a,sd),e.multiplyVectors(nd,rd)+t.multiplyVectors(id,sd)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,A=this.bi,i=this.bj,r=A.invMassSolve,s=i.invMassSolve,o=A.invInertiaWorldSolve,a=i.invInertiaWorldSolve;let l=r+s;return o.vmult(e.rotational,xo),l+=xo.dot(e.rotational),a.vmult(t.rotational,xo),l+=xo.dot(t.rotational),l}addToWlambda(e){const t=this.jacobianElementA,A=this.jacobianElementB,i=this.bi,r=this.bj,s=gU;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),r.vlambda.addScaledVector(r.invMassSolve*e,A.spatial,r.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,s),i.wlambda.addScaledVector(e,s,i.wlambda),r.invInertiaWorldSolve.vmult(A.rotational,s),r.wlambda.addScaledVector(e,s,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}us.idCounter=0;const nd=new M,id=new M,rd=new M,sd=new M,xo=new M,gU=new M;class mU extends us{constructor(e,t,A){A===void 0&&(A=1e6),super(e,t,0,A),this.restitution=0,this.ri=new M,this.rj=new M,this.ni=new M}computeB(e){const t=this.a,A=this.b,i=this.bi,r=this.bj,s=this.ri,o=this.rj,a=xU,l=BU,c=i.velocity,u=i.angularVelocity;i.force,i.torque;const h=r.velocity,f=r.angularVelocity;r.force,r.torque;const p=vU,m=this.jacobianElementA,g=this.jacobianElementB,d=this.ni;s.cross(d,a),o.cross(d,l),d.negate(m.spatial),a.negate(m.rotational),g.spatial.copy(d),g.rotational.copy(l),p.copy(r.position),p.vadd(o,p),p.vsub(i.position,p),p.vsub(s,p);const x=d.dot(p),B=this.restitution+1,w=B*h.dot(d)-B*c.dot(d)+f.dot(l)-u.dot(a),y=this.computeGiMf();return-x*t-w*A-e*y}getImpactVelocityAlongNormal(){const e=wU,t=_U,A=CU,i=yU,r=EU;return this.bi.position.vadd(this.ri,A),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(A,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,r),this.ni.dot(r)}}const xU=new M,BU=new M,vU=new M,wU=new M,_U=new M,CU=new M,yU=new M,EU=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class od extends us{constructor(e,t,A){super(e,t,-A,A),this.ri=new M,this.rj=new M,this.t=new M}computeB(e){this.a;const t=this.b;this.bi,this.bj;const A=this.ri,i=this.rj,r=bU,s=MU,o=this.t;A.cross(o,r),i.cross(o,s);const a=this.jacobianElementA,l=this.jacobianElementB;o.negate(a.spatial),r.negate(a.rotational),l.spatial.copy(o),l.rotational.copy(s);const c=this.computeGW(),u=this.computeGiMf();return-c*t-e*u}}const bU=new M,MU=new M;class fs{constructor(e,t,A){A=pU.defaults(A,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=fs.idCounter++,this.materials=[e,t],this.friction=A.friction,this.restitution=A.restitution,this.contactEquationStiffness=A.contactEquationStiffness,this.contactEquationRelaxation=A.contactEquationRelaxation,this.frictionEquationStiffness=A.frictionEquationStiffness,this.frictionEquationRelaxation=A.frictionEquationRelaxation}}fs.idCounter=0;class lr{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=lr.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}lr.idCounter=0;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new Ft;new M;new M;new M;new M(1,0,0),new M(0,1,0),new M(0,0,1);new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new wA;new M;new wA;new M;new M;new M;new M;new M;new M;new M;new wA;new M;new it;new wA;class SU{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,A=t.indexOf(e);A!==-1&&t.splice(A,1)}removeAllEquations(){this.equations.length=0}}class UU extends SU{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let A=0;const i=this.iterations,r=this.tolerance*this.tolerance,s=this.equations,o=s.length,a=t.bodies,l=a.length,c=e;let u,h,f,p,m,g;if(o!==0)for(let w=0;w!==l;w++)a[w].updateSolveMassProperties();const d=TU,x=IU,B=FU;d.length=o,x.length=o,B.length=o;for(let w=0;w!==o;w++){const y=s[w];B[w]=0,x[w]=y.computeB(c),d[w]=1/y.computeC()}if(o!==0){for(let v=0;v!==l;v++){const E=a[v],U=E.vlambda,_=E.wlambda;U.set(0,0,0),_.set(0,0,0)}for(A=0;A!==i;A++){p=0;for(let v=0;v!==o;v++){const E=s[v];u=x[v],h=d[v],g=B[v],m=E.computeGWlambda(),f=h*(u-m-E.eps*g),g+f<E.minForce?f=E.minForce-g:g+f>E.maxForce&&(f=E.maxForce-g),B[v]+=f,p+=f>0?f:-f,E.addToWlambda(f)}if(p*p<r)break}for(let v=0;v!==l;v++){const E=a[v],U=E.velocity,_=E.angularVelocity;E.vlambda.vmul(E.linearFactor,E.vlambda),U.vadd(E.vlambda,U),E.wlambda.vmul(E.angularFactor,E.wlambda),_.vadd(E.wlambda,_)}let w=s.length;const y=1/c;for(;w--;)s[w].multiplier=B[w]*y}return A}}const FU=[],TU=[],IU=[];class QU{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class RU extends QU{constructor(){super(...arguments),this.type=M}constructObject(){return new M}}const pt={sphereSphere:ve.types.SPHERE,spherePlane:ve.types.SPHERE|ve.types.PLANE,boxBox:ve.types.BOX|ve.types.BOX,sphereBox:ve.types.SPHERE|ve.types.BOX,planeBox:ve.types.PLANE|ve.types.BOX,convexConvex:ve.types.CONVEXPOLYHEDRON,sphereConvex:ve.types.SPHERE|ve.types.CONVEXPOLYHEDRON,planeConvex:ve.types.PLANE|ve.types.CONVEXPOLYHEDRON,boxConvex:ve.types.BOX|ve.types.CONVEXPOLYHEDRON,sphereHeightfield:ve.types.SPHERE|ve.types.HEIGHTFIELD,boxHeightfield:ve.types.BOX|ve.types.HEIGHTFIELD,convexHeightfield:ve.types.CONVEXPOLYHEDRON|ve.types.HEIGHTFIELD,sphereParticle:ve.types.PARTICLE|ve.types.SPHERE,planeParticle:ve.types.PLANE|ve.types.PARTICLE,boxParticle:ve.types.BOX|ve.types.PARTICLE,convexParticle:ve.types.PARTICLE|ve.types.CONVEXPOLYHEDRON,cylinderCylinder:ve.types.CYLINDER,sphereCylinder:ve.types.SPHERE|ve.types.CYLINDER,planeCylinder:ve.types.PLANE|ve.types.CYLINDER,boxCylinder:ve.types.BOX|ve.types.CYLINDER,convexCylinder:ve.types.CONVEXPOLYHEDRON|ve.types.CYLINDER,heightfieldCylinder:ve.types.HEIGHTFIELD|ve.types.CYLINDER,particleCylinder:ve.types.PARTICLE|ve.types.CYLINDER,sphereTrimesh:ve.types.SPHERE|ve.types.TRIMESH,planeTrimesh:ve.types.PLANE|ve.types.TRIMESH};class LU{get[pt.sphereSphere](){return this.sphereSphere}get[pt.spherePlane](){return this.spherePlane}get[pt.boxBox](){return this.boxBox}get[pt.sphereBox](){return this.sphereBox}get[pt.planeBox](){return this.planeBox}get[pt.convexConvex](){return this.convexConvex}get[pt.sphereConvex](){return this.sphereConvex}get[pt.planeConvex](){return this.planeConvex}get[pt.boxConvex](){return this.boxConvex}get[pt.sphereHeightfield](){return this.sphereHeightfield}get[pt.boxHeightfield](){return this.boxHeightfield}get[pt.convexHeightfield](){return this.convexHeightfield}get[pt.sphereParticle](){return this.sphereParticle}get[pt.planeParticle](){return this.planeParticle}get[pt.boxParticle](){return this.boxParticle}get[pt.convexParticle](){return this.convexParticle}get[pt.cylinderCylinder](){return this.convexConvex}get[pt.sphereCylinder](){return this.sphereConvex}get[pt.planeCylinder](){return this.planeConvex}get[pt.boxCylinder](){return this.boxConvex}get[pt.convexCylinder](){return this.convexConvex}get[pt.heightfieldCylinder](){return this.heightfieldCylinder}get[pt.particleCylinder](){return this.particleCylinder}get[pt.sphereTrimesh](){return this.sphereTrimesh}get[pt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new RU,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,A,i,r,s){let o;this.contactPointPool.length?(o=this.contactPointPool.pop(),o.bi=e,o.bj=t):o=new mU(e,t),o.enabled=e.collisionResponse&&t.collisionResponse&&A.collisionResponse&&i.collisionResponse;const a=this.currentContactMaterial;o.restitution=a.restitution,o.setSpookParams(a.contactEquationStiffness,a.contactEquationRelaxation,this.world.dt);const l=A.material||e.material,c=i.material||t.material;return l&&c&&l.restitution>=0&&c.restitution>=0&&(o.restitution=l.restitution*c.restitution),o.si=r||A,o.sj=s||i,o}createFrictionEquationsFromContact(e,t){const A=e.bi,i=e.bj,r=e.si,s=e.sj,o=this.world,a=this.currentContactMaterial;let l=a.friction;const c=r.material||A.material,u=s.material||i.material;if(c&&u&&c.friction>=0&&u.friction>=0&&(l=c.friction*u.friction),l>0){const h=l*(o.frictionGravity||o.gravity).length();let f=A.invMass+i.invMass;f>0&&(f=1/f);const p=this.frictionEquationPool,m=p.length?p.pop():new od(A,i,h*f),g=p.length?p.pop():new od(A,i,h*f);return m.bi=g.bi=A,m.bj=g.bj=i,m.minForce=g.minForce=-h*f,m.maxForce=g.maxForce=h*f,m.ri.copy(e.ri),m.rj.copy(e.rj),g.ri.copy(e.ri),g.rj.copy(e.rj),e.ni.tangents(m.t,g.t),m.setSpookParams(a.frictionEquationStiffness,a.frictionEquationRelaxation,o.dt),g.setSpookParams(a.frictionEquationStiffness,a.frictionEquationRelaxation,o.dt),m.enabled=g.enabled=e.enabled,t.push(m,g),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const A=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];oi.setZero(),Vi.setZero(),Gi.setZero();const r=t.bi;t.bj;for(let o=0;o!==e;o++)t=this.result[this.result.length-1-o],t.bi!==r?(oi.vadd(t.ni,oi),Vi.vadd(t.ri,Vi),Gi.vadd(t.rj,Gi)):(oi.vsub(t.ni,oi),Vi.vadd(t.rj,Vi),Gi.vadd(t.ri,Gi));const s=1/e;Vi.scale(s,A.ri),Gi.scale(s,A.rj),i.ri.copy(A.ri),i.rj.copy(A.rj),oi.normalize(),oi.tangents(A.t,i.t)}getContacts(e,t,A,i,r,s,o){this.contactPointPool=r,this.frictionEquationPool=o,this.result=i,this.frictionResult=s;const a=HU,l=NU,c=DU,u=PU;for(let h=0,f=e.length;h!==f;h++){const p=e[h],m=t[h];let g=null;p.material&&m.material&&(g=A.getContactMaterial(p.material,m.material)||null);const d=p.type&xe.KINEMATIC&&m.type&xe.STATIC||p.type&xe.STATIC&&m.type&xe.KINEMATIC||p.type&xe.KINEMATIC&&m.type&xe.KINEMATIC;for(let x=0;x<p.shapes.length;x++){p.quaternion.mult(p.shapeOrientations[x],a),p.quaternion.vmult(p.shapeOffsets[x],c),c.vadd(p.position,c);const B=p.shapes[x];for(let w=0;w<m.shapes.length;w++){m.quaternion.mult(m.shapeOrientations[w],l),m.quaternion.vmult(m.shapeOffsets[w],u),u.vadd(m.position,u);const y=m.shapes[w];if(!(B.collisionFilterMask&y.collisionFilterGroup&&y.collisionFilterMask&B.collisionFilterGroup)||c.distanceTo(u)>B.boundingSphereRadius+y.boundingSphereRadius)continue;let v=null;B.material&&y.material&&(v=A.getContactMaterial(B.material,y.material)||null),this.currentContactMaterial=v||g||A.defaultContactMaterial;const E=B.type|y.type,U=this[E];if(U){let _=!1;B.type<y.type?_=U.call(this,B,y,c,u,a,l,p,m,B,y,d):_=U.call(this,y,B,u,c,l,a,m,p,B,y,d),_&&d&&(A.shapeOverlapKeeper.set(B.id,y.id),A.bodyOverlapKeeper.set(p.id,m.id))}}}}}sphereSphere(e,t,A,i,r,s,o,a,l,c,u){if(u)return A.distanceSquared(i)<(e.radius+t.radius)**2;const h=this.createContactEquation(o,a,e,t,l,c);i.vsub(A,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(e.radius,h.ri),h.rj.scale(-t.radius,h.rj),h.ri.vadd(A,h.ri),h.ri.vsub(o.position,h.ri),h.rj.vadd(i,h.rj),h.rj.vsub(a.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(e,t,A,i,r,s,o,a,l,c,u){const h=this.createContactEquation(o,a,e,t,l,c);if(h.ni.set(0,0,1),s.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(e.radius,h.ri),A.vsub(i,Bo),h.ni.scale(h.ni.dot(Bo),ad),Bo.vsub(ad,h.rj),-Bo.dot(h.ni)<=e.radius){if(u)return!0;const f=h.ri,p=h.rj;f.vadd(A,f),f.vsub(o.position,f),p.vadd(i,p),p.vsub(a.position,p),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(e,t,A,i,r,s,o,a,l,c,u){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,A,i,r,s,o,a,e,t,u)}sphereBox(e,t,A,i,r,s,o,a,l,c,u){const h=this.v3pool,f=hF;A.vsub(i,vo),t.getSideNormals(f,s);const p=e.radius;let m=!1;const g=fF,d=dF,x=pF;let B=null,w=0,y=0,v=0,E=null;for(let Q=0,k=f.length;Q!==k&&m===!1;Q++){const O=aF;O.copy(f[Q]);const Y=O.length();O.normalize();const $=vo.dot(O);if($<Y+p&&$>0){const ae=lF,ne=cF;ae.copy(f[(Q+1)%3]),ne.copy(f[(Q+2)%3]);const Oe=ae.length(),Ye=ne.length();ae.normalize(),ne.normalize();const Ke=vo.dot(ae),q=vo.dot(ne);if(Ke<Oe&&Ke>-Oe&&q<Ye&&q>-Ye){const Z=Math.abs($-Y-p);if((E===null||Z<E)&&(E=Z,y=Ke,v=q,B=Y,g.copy(O),d.copy(ae),x.copy(ne),w++,u))return!0}}}if(w){m=!0;const Q=this.createContactEquation(o,a,e,t,l,c);g.scale(-p,Q.ri),Q.ni.copy(g),Q.ni.negate(Q.ni),g.scale(B,g),d.scale(y,d),g.vadd(d,g),x.scale(v,x),g.vadd(x,Q.rj),Q.ri.vadd(A,Q.ri),Q.ri.vsub(o.position,Q.ri),Q.rj.vadd(i,Q.rj),Q.rj.vsub(a.position,Q.rj),this.result.push(Q),this.createFrictionEquationsFromContact(Q,this.frictionResult)}let U=h.get();const _=uF;for(let Q=0;Q!==2&&!m;Q++)for(let k=0;k!==2&&!m;k++)for(let O=0;O!==2&&!m;O++)if(U.set(0,0,0),Q?U.vadd(f[0],U):U.vsub(f[0],U),k?U.vadd(f[1],U):U.vsub(f[1],U),O?U.vadd(f[2],U):U.vsub(f[2],U),i.vadd(U,_),_.vsub(A,_),_.lengthSquared()<p*p){if(u)return!0;m=!0;const Y=this.createContactEquation(o,a,e,t,l,c);Y.ri.copy(_),Y.ri.normalize(),Y.ni.copy(Y.ri),Y.ri.scale(p,Y.ri),Y.rj.copy(U),Y.ri.vadd(A,Y.ri),Y.ri.vsub(o.position,Y.ri),Y.rj.vadd(i,Y.rj),Y.rj.vsub(a.position,Y.rj),this.result.push(Y),this.createFrictionEquationsFromContact(Y,this.frictionResult)}h.release(U),U=null;const C=h.get(),T=h.get(),R=h.get(),F=h.get(),P=h.get(),D=f.length;for(let Q=0;Q!==D&&!m;Q++)for(let k=0;k!==D&&!m;k++)if(Q%3!==k%3){f[k].cross(f[Q],C),C.normalize(),f[Q].vadd(f[k],T),R.copy(A),R.vsub(T,R),R.vsub(i,R);const O=R.dot(C);C.scale(O,F);let Y=0;for(;Y===Q%3||Y===k%3;)Y++;P.copy(A),P.vsub(F,P),P.vsub(T,P),P.vsub(i,P);const $=Math.abs(O),ae=P.length();if($<f[Y].length()&&ae<p){if(u)return!0;m=!0;const ne=this.createContactEquation(o,a,e,t,l,c);T.vadd(F,ne.rj),ne.rj.copy(ne.rj),P.negate(ne.ni),ne.ni.normalize(),ne.ri.copy(ne.rj),ne.ri.vadd(i,ne.ri),ne.ri.vsub(A,ne.ri),ne.ri.normalize(),ne.ri.scale(p,ne.ri),ne.ri.vadd(A,ne.ri),ne.ri.vsub(o.position,ne.ri),ne.rj.vadd(i,ne.rj),ne.rj.vsub(a.position,ne.rj),this.result.push(ne),this.createFrictionEquationsFromContact(ne,this.frictionResult)}}h.release(C,T,R,F,P)}planeBox(e,t,A,i,r,s,o,a,l,c,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,A,i,r,s,o,a,e,t,u)}convexConvex(e,t,A,i,r,s,o,a,l,c,u,h,f){const p=FF;if(!(A.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,A,r,i,s,p,h,f)){const m=[],g=TF;e.clipAgainstHull(A,r,t,i,s,p,-100,100,m);let d=0;for(let x=0;x!==m.length;x++){if(u)return!0;const B=this.createContactEquation(o,a,e,t,l,c),w=B.ri,y=B.rj;p.negate(B.ni),m[x].normal.negate(g),g.scale(m[x].depth,g),m[x].point.vadd(g,w),y.copy(m[x].point),w.vsub(A,w),y.vsub(i,y),w.vadd(A,w),w.vsub(o.position,w),y.vadd(i,y),y.vsub(a.position,y),this.result.push(B),d++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(B,this.frictionResult)}this.enableFrictionReduction&&d&&this.createFrictionFromAverage(d)}}sphereConvex(e,t,A,i,r,s,o,a,l,c,u){const h=this.v3pool;A.vsub(i,gF);const f=t.faceNormals,p=t.faces,m=t.vertices,g=e.radius;let d=!1;for(let x=0;x!==m.length;x++){const B=m[x],w=vF;s.vmult(B,w),i.vadd(w,w);const y=BF;if(w.vsub(A,y),y.lengthSquared()<g*g){if(u)return!0;d=!0;const v=this.createContactEquation(o,a,e,t,l,c);v.ri.copy(y),v.ri.normalize(),v.ni.copy(v.ri),v.ri.scale(g,v.ri),w.vsub(i,v.rj),v.ri.vadd(A,v.ri),v.ri.vsub(o.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(a.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult);return}}for(let x=0,B=p.length;x!==B&&d===!1;x++){const w=f[x],y=p[x],v=wF;s.vmult(w,v);const E=_F;s.vmult(m[y[0]],E),E.vadd(i,E);const U=CF;v.scale(-g,U),A.vadd(U,U);const _=yF;U.vsub(E,_);const C=_.dot(v),T=EF;if(A.vsub(E,T),C<0&&T.dot(v)>0){const R=[];for(let F=0,P=y.length;F!==P;F++){const D=h.get();s.vmult(m[y[F]],D),i.vadd(D,D),R.push(D)}if(oF(R,v,A)){if(u)return!0;d=!0;const F=this.createContactEquation(o,a,e,t,l,c);v.scale(-g,F.ri),v.negate(F.ni);const P=h.get();v.scale(-C,P);const D=h.get();v.scale(-g,D),A.vsub(i,F.rj),F.rj.vadd(D,F.rj),F.rj.vadd(P,F.rj),F.rj.vadd(i,F.rj),F.rj.vsub(a.position,F.rj),F.ri.vadd(A,F.ri),F.ri.vsub(o.position,F.ri),h.release(P),h.release(D),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult);for(let Q=0,k=R.length;Q!==k;Q++)h.release(R[Q]);return}else for(let F=0;F!==y.length;F++){const P=h.get(),D=h.get();s.vmult(m[y[(F+1)%y.length]],P),s.vmult(m[y[(F+2)%y.length]],D),i.vadd(P,P),i.vadd(D,D);const Q=mF;D.vsub(P,Q);const k=xF;Q.unit(k);const O=h.get(),Y=h.get();A.vsub(P,Y);const $=Y.dot(k);k.scale($,O),O.vadd(P,O);const ae=h.get();if(O.vsub(A,ae),$>0&&$*$<Q.lengthSquared()&&ae.lengthSquared()<g*g){if(u)return!0;const ne=this.createContactEquation(o,a,e,t,l,c);O.vsub(i,ne.rj),O.vsub(A,ne.ni),ne.ni.normalize(),ne.ni.scale(g,ne.ri),ne.rj.vadd(i,ne.rj),ne.rj.vsub(a.position,ne.rj),ne.ri.vadd(A,ne.ri),ne.ri.vsub(o.position,ne.ri),this.result.push(ne),this.createFrictionEquationsFromContact(ne,this.frictionResult);for(let Oe=0,Ye=R.length;Oe!==Ye;Oe++)h.release(R[Oe]);h.release(P),h.release(D),h.release(O),h.release(ae),h.release(Y);return}h.release(P),h.release(D),h.release(O),h.release(ae),h.release(Y)}for(let F=0,P=R.length;F!==P;F++)h.release(R[F])}}}planeConvex(e,t,A,i,r,s,o,a,l,c,u){const h=bF,f=MF;f.set(0,0,1),r.vmult(f,f);let p=0;const m=SF;for(let g=0;g!==t.vertices.length;g++)if(h.copy(t.vertices[g]),s.vmult(h,h),i.vadd(h,h),h.vsub(A,m),f.dot(m)<=0){if(u)return!0;const x=this.createContactEquation(o,a,e,t,l,c),B=UF;f.scale(f.dot(m),B),h.vsub(B,B),B.vsub(A,x.ri),x.ni.copy(f),h.vsub(i,x.rj),x.ri.vadd(A,x.ri),x.ri.vsub(o.position,x.ri),x.rj.vadd(i,x.rj),x.rj.vsub(a.position,x.rj),this.result.push(x),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}boxConvex(e,t,A,i,r,s,o,a,l,c,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,A,i,r,s,o,a,e,t,u)}sphereHeightfield(e,t,A,i,r,s,o,a,l,c,u){const h=t.data,f=e.radius,p=t.elementSize,m=zF,g=GF;it.pointToLocalFrame(i,s,A,g);let d=Math.floor((g.x-f)/p)-1,x=Math.ceil((g.x+f)/p)+1,B=Math.floor((g.y-f)/p)-1,w=Math.ceil((g.y+f)/p)+1;if(x<0||w<0||d>h.length||B>h[0].length)return;d<0&&(d=0),x<0&&(x=0),B<0&&(B=0),w<0&&(w=0),d>=h.length&&(d=h.length-1),x>=h.length&&(x=h.length-1),w>=h[0].length&&(w=h[0].length-1),B>=h[0].length&&(B=h[0].length-1);const y=[];t.getRectMinMax(d,B,x,w,y);const v=y[0],E=y[1];if(g.z-f>E||g.z+f<v)return;const U=this.result;for(let _=d;_<x;_++)for(let C=B;C<w;C++){const T=U.length;let R=!1;if(t.getConvexTrianglePillar(_,C,!1),it.pointToWorldFrame(i,s,t.pillarOffset,m),A.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(R=this.sphereConvex(e,t.pillarConvex,A,m,r,s,o,a,e,t,u)),u&&R||(t.getConvexTrianglePillar(_,C,!0),it.pointToWorldFrame(i,s,t.pillarOffset,m),A.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(R=this.sphereConvex(e,t.pillarConvex,A,m,r,s,o,a,e,t,u)),u&&R))return!0;if(U.length-T>2)return}}boxHeightfield(e,t,A,i,r,s,o,a,l,c,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,A,i,r,s,o,a,e,t,u)}convexHeightfield(e,t,A,i,r,s,o,a,l,c,u){const h=t.data,f=t.elementSize,p=e.boundingSphereRadius,m=OF,g=VF,d=NF;it.pointToLocalFrame(i,s,A,d);let x=Math.floor((d.x-p)/f)-1,B=Math.ceil((d.x+p)/f)+1,w=Math.floor((d.y-p)/f)-1,y=Math.ceil((d.y+p)/f)+1;if(B<0||y<0||x>h.length||w>h[0].length)return;x<0&&(x=0),B<0&&(B=0),w<0&&(w=0),y<0&&(y=0),x>=h.length&&(x=h.length-1),B>=h.length&&(B=h.length-1),y>=h[0].length&&(y=h[0].length-1),w>=h[0].length&&(w=h[0].length-1);const v=[];t.getRectMinMax(x,w,B,y,v);const E=v[0],U=v[1];if(!(d.z-p>U||d.z+p<E))for(let _=x;_<B;_++)for(let C=w;C<y;C++){let T=!1;if(t.getConvexTrianglePillar(_,C,!1),it.pointToWorldFrame(i,s,t.pillarOffset,m),A.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(T=this.convexConvex(e,t.pillarConvex,A,m,r,s,o,a,null,null,u,g,null)),u&&T||(t.getConvexTrianglePillar(_,C,!0),it.pointToWorldFrame(i,s,t.pillarOffset,m),A.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(T=this.convexConvex(e,t.pillarConvex,A,m,r,s,o,a,null,null,u,g,null)),u&&T))return!0}}sphereParticle(e,t,A,i,r,s,o,a,l,c,u){const h=LF;if(h.set(0,0,1),i.vsub(A,h),h.lengthSquared()<=e.radius*e.radius){if(u)return!0;const p=this.createContactEquation(a,o,t,e,l,c);h.normalize(),p.rj.copy(h),p.rj.scale(e.radius,p.rj),p.ni.copy(h),p.ni.negate(p.ni),p.ri.set(0,0,0),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}planeParticle(e,t,A,i,r,s,o,a,l,c,u){const h=IF;h.set(0,0,1),o.quaternion.vmult(h,h);const f=QF;if(i.vsub(o.position,f),h.dot(f)<=0){if(u)return!0;const m=this.createContactEquation(a,o,t,e,l,c);m.ni.copy(h),m.ni.negate(m.ni),m.ri.set(0,0,0);const g=RF;h.scale(h.dot(i),g),i.vsub(g,g),m.rj.copy(g),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}boxParticle(e,t,A,i,r,s,o,a,l,c,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,A,i,r,s,o,a,e,t,u)}convexParticle(e,t,A,i,r,s,o,a,l,c,u){let h=-1;const f=PF,p=HF;let m=null;const g=DF;if(g.copy(i),g.vsub(A,g),r.conjugate(ld),ld.vmult(g,g),e.pointIsInside(g)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(A,r),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(r);for(let d=0,x=e.faces.length;d!==x;d++){const B=[e.worldVertices[e.faces[d][0]]],w=e.worldFaceNormals[d];i.vsub(B[0],cd);const y=-w.dot(cd);if(m===null||Math.abs(y)<Math.abs(m)){if(u)return!0;m=y,h=d,f.copy(w)}}if(h!==-1){const d=this.createContactEquation(a,o,t,e,l,c);f.scale(m,p),p.vadd(i,p),p.vsub(A,p),d.rj.copy(p),f.negate(d.ni),d.ri.set(0,0,0);const x=d.ri,B=d.rj;x.vadd(i,x),x.vsub(a.position,x),B.vadd(A,B),B.vsub(o.position,B),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,A,i,r,s,o,a,l,c,u){return this.convexHeightfield(t,e,i,A,s,r,a,o,l,c,u)}particleCylinder(e,t,A,i,r,s,o,a,l,c,u){return this.convexParticle(t,e,i,A,s,r,a,o,l,c,u)}sphereTrimesh(e,t,A,i,r,s,o,a,l,c,u){const h=XU,f=YU,p=qU,m=JU,g=ZU,d=jU,x=AF,B=WU,w=kU,y=nF;it.pointToLocalFrame(i,s,A,g);const v=e.radius;x.lowerBound.set(g.x-v,g.y-v,g.z-v),x.upperBound.set(g.x+v,g.y+v,g.z+v),t.getTrianglesInAABB(x,y);const E=KU,U=e.radius*e.radius;for(let F=0;F<y.length;F++)for(let P=0;P<3;P++)if(t.getVertex(t.indices[y[F]*3+P],E),E.vsub(g,w),w.lengthSquared()<=U){if(B.copy(E),it.pointToWorldFrame(i,s,B,E),E.vsub(A,w),u)return!0;let D=this.createContactEquation(o,a,e,t,l,c);D.ni.copy(w),D.ni.normalize(),D.ri.copy(D.ni),D.ri.scale(e.radius,D.ri),D.ri.vadd(A,D.ri),D.ri.vsub(o.position,D.ri),D.rj.copy(E),D.rj.vsub(a.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}for(let F=0;F<y.length;F++)for(let P=0;P<3;P++){t.getVertex(t.indices[y[F]*3+P],h),t.getVertex(t.indices[y[F]*3+(P+1)%3],f),f.vsub(h,p),g.vsub(f,d);const D=d.dot(p);g.vsub(h,d);let Q=d.dot(p);if(Q>0&&D<0&&(g.vsub(h,d),m.copy(p),m.normalize(),Q=d.dot(m),m.scale(Q,d),d.vadd(h,d),d.distanceTo(g)<e.radius)){if(u)return!0;const O=this.createContactEquation(o,a,e,t,l,c);d.vsub(g,O.ni),O.ni.normalize(),O.ni.scale(e.radius,O.ri),O.ri.vadd(A,O.ri),O.ri.vsub(o.position,O.ri),it.pointToWorldFrame(i,s,d,d),d.vsub(a.position,O.rj),it.vectorToWorldFrame(s,O.ni,O.ni),it.vectorToWorldFrame(s,O.ri,O.ri),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}}const _=$U,C=eF,T=tF,R=zU;for(let F=0,P=y.length;F!==P;F++){t.getTriangleVertices(y[F],_,C,T),t.getNormal(y[F],R),g.vsub(_,d);let D=d.dot(R);if(R.scale(D,d),g.vsub(d,d),D=d.distanceTo(g),Ft.pointInTriangle(d,_,C,T)&&D<e.radius){if(u)return!0;let Q=this.createContactEquation(o,a,e,t,l,c);d.vsub(g,Q.ni),Q.ni.normalize(),Q.ni.scale(e.radius,Q.ri),Q.ri.vadd(A,Q.ri),Q.ri.vsub(o.position,Q.ri),it.pointToWorldFrame(i,s,d,d),d.vsub(a.position,Q.rj),it.vectorToWorldFrame(s,Q.ni,Q.ni),it.vectorToWorldFrame(s,Q.ri,Q.ri),this.result.push(Q),this.createFrictionEquationsFromContact(Q,this.frictionResult)}}y.length=0}planeTrimesh(e,t,A,i,r,s,o,a,l,c,u){const h=new M,f=OU;f.set(0,0,1),r.vmult(f,f);for(let p=0;p<t.vertices.length/3;p++){t.getVertex(p,h);const m=new M;m.copy(h),it.pointToWorldFrame(i,s,m,h);const g=VU;if(h.vsub(A,g),f.dot(g)<=0){if(u)return!0;const x=this.createContactEquation(o,a,e,t,l,c);x.ni.copy(f);const B=GU;f.scale(g.dot(f),B),h.vsub(B,B),x.ri.copy(B),x.ri.vsub(o.position,x.ri),x.rj.copy(h),x.rj.vsub(a.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}}const oi=new M,Vi=new M,Gi=new M,DU=new M,PU=new M,HU=new St,NU=new St,OU=new M,VU=new M,GU=new M,zU=new M,kU=new M;new M;const KU=new M,WU=new M,XU=new M,YU=new M,qU=new M,JU=new M,ZU=new M,jU=new M,$U=new M,eF=new M,tF=new M,AF=new wA,nF=[],Bo=new M,ad=new M,iF=new M,rF=new M,sF=new M;function oF(n,e,t){let A=null;const i=n.length;for(let r=0;r!==i;r++){const s=n[r],o=iF;n[(r+1)%i].vsub(s,o);const a=rF;o.cross(e,a);const l=sF;t.vsub(s,l);const c=a.dot(l);if(A===null||c>0&&A===!0||c<=0&&A===!1){A===null&&(A=c>0);continue}else return!1}return!0}const vo=new M,aF=new M,lF=new M,cF=new M,hF=[new M,new M,new M,new M,new M,new M],uF=new M,fF=new M,dF=new M,pF=new M,gF=new M,mF=new M,xF=new M,BF=new M,vF=new M,wF=new M,_F=new M,CF=new M,yF=new M,EF=new M;new M;new M;const bF=new M,MF=new M,SF=new M,UF=new M,FF=new M,TF=new M,IF=new M,QF=new M,RF=new M,LF=new M,ld=new St,DF=new M;new M;const PF=new M,cd=new M,HF=new M,NF=new M,OF=new M,VF=[0],GF=new M,zF=new M;class hd{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const A=t;t=e,e=A}return e<<16|t}set(e,t){const A=this.getKey(e,t),i=this.current;let r=0;for(;A>i[r];)r++;if(A!==i[r]){for(let s=i.length-1;s>=r;s--)i[s+1]=i[s];i[r]=A}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const A=this.current,i=this.previous,r=A.length,s=i.length;let o=0;for(let a=0;a<r;a++){let l=!1;const c=A[a];for(;c>i[o];)o++;l=c===i[o],l||ud(e,c)}o=0;for(let a=0;a<s;a++){let l=!1;const c=i[a];for(;c>A[o];)o++;l=A[o]===c,l||ud(t,c)}}}function ud(n,e){n.push((e&4294901760)>>16,e&65535)}const Ul=(n,e)=>n<e?`${n}-${e}`:`${e}-${n}`;class kF{constructor(){this.data={keys:[]}}get(e,t){const A=Ul(e,t);return this.data[A]}set(e,t,A){const i=Ul(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=A}delete(e,t){const A=Ul(e,t),i=this.data.keys.indexOf(A);i!==-1&&this.data.keys.splice(i,1),delete this.data[A]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const A=t.pop();delete e[A]}}}class KF extends r0{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new M,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new M,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new jS,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new UU,this.constraints=[],this.narrowphase=new LU(this),this.collisionMatrix=new Zf,this.collisionMatrixPrevious=new Zf,this.bodyOverlapKeeper=new hd,this.shapeOverlapKeeper=new hd,this.contactmaterials=[],this.contactMaterialTable=new kF,this.defaultMaterial=new lr("default"),this.defaultContactMaterial=new fs(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,A){A instanceof Yo?this.raycastClosest(e,t,{skipBackfaces:!0},A):this.raycastAll(e,t,{skipBackfaces:!0},A)}raycastAll(e,t,A,i){return A===void 0&&(A={}),A.mode=Ft.ALL,A.from=e,A.to=t,A.callback=i,Fl.intersectWorld(this,A)}raycastAny(e,t,A,i){return A===void 0&&(A={}),A.mode=Ft.ANY,A.from=e,A.to=t,A.result=i,Fl.intersectWorld(this,A)}raycastClosest(e,t,A,i){return A===void 0&&(A={}),A.mode=Ft.CLOSEST,A.from=e,A.to=t,A.result=i,Fl.intersectWorld(this,A)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof xe&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,A=this.bodies,i=A.indexOf(e);if(i!==-1){A.splice(i,1);for(let r=0;r!==A.length;r++)A[r].index=r;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let A=0;A<t.length;A++){const i=t[A].shapes;for(let r=0;r<i.length;r++){const s=i[r];if(s.id===e)return s}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const A=Rt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=A-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=A}step(e,t,A){if(A===void 0&&(A=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=Rt.now();let r=0;for(;this.accumulator>=e&&r<A&&(this.internalStep(e),this.accumulator-=e,r++,!(Rt.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const s=this.accumulator/e;for(let o=0;o!==this.bodies.length;o++){const a=this.bodies[o];a.previousPosition.lerp(a.position,s,a.interpolatedPosition),a.previousQuaternion.slerp(a.quaternion,s,a.interpolatedQuaternion),a.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,A=JF,i=ZF,r=this.bodies.length,s=this.bodies,o=this.solver,a=this.gravity,l=this.doProfiling,c=this.profile,u=xe.DYNAMIC;let h=-1/0;const f=this.constraints,p=qF;a.length();const m=a.x,g=a.y,d=a.z;let x=0;for(l&&(h=Rt.now()),x=0;x!==r;x++){const F=s[x];if(F.type===u){const P=F.force,D=F.mass;P.x+=D*m,P.y+=D*g,P.z+=D*d}}for(let F=0,P=this.subsystems.length;F!==P;F++)this.subsystems[F].update();l&&(h=Rt.now()),A.length=0,i.length=0,this.broadphase.collisionPairs(this,A,i),l&&(c.broadphase=Rt.now()-h);let B=f.length;for(x=0;x!==B;x++){const F=f[x];if(!F.collideConnected)for(let P=A.length-1;P>=0;P-=1)(F.bodyA===A[P]&&F.bodyB===i[P]||F.bodyB===A[P]&&F.bodyA===i[P])&&(A.splice(P,1),i.splice(P,1))}this.collisionMatrixTick(),l&&(h=Rt.now());const w=YF,y=t.length;for(x=0;x!==y;x++)w.push(t[x]);t.length=0;const v=this.frictionEquations.length;for(x=0;x!==v;x++)p.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(A,i,this,t,w,this.frictionEquations,p),l&&(c.narrowphase=Rt.now()-h),l&&(h=Rt.now()),x=0;x<this.frictionEquations.length;x++)o.addEquation(this.frictionEquations[x]);const E=t.length;for(let F=0;F!==E;F++){const P=t[F],D=P.bi,Q=P.bj,k=P.si,O=P.sj;let Y;if(D.material&&Q.material?Y=this.getContactMaterial(D.material,Q.material)||this.defaultContactMaterial:Y=this.defaultContactMaterial,Y.friction,D.material&&Q.material&&(D.material.friction>=0&&Q.material.friction>=0&&D.material.friction*Q.material.friction,D.material.restitution>=0&&Q.material.restitution>=0&&(P.restitution=D.material.restitution*Q.material.restitution)),o.addEquation(P),D.allowSleep&&D.type===xe.DYNAMIC&&D.sleepState===xe.SLEEPING&&Q.sleepState===xe.AWAKE&&Q.type!==xe.STATIC){const $=Q.velocity.lengthSquared()+Q.angularVelocity.lengthSquared(),ae=Q.sleepSpeedLimit**2;$>=ae*2&&(D.wakeUpAfterNarrowphase=!0)}if(Q.allowSleep&&Q.type===xe.DYNAMIC&&Q.sleepState===xe.SLEEPING&&D.sleepState===xe.AWAKE&&D.type!==xe.STATIC){const $=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),ae=D.sleepSpeedLimit**2;$>=ae*2&&(Q.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(D,Q,!0),this.collisionMatrixPrevious.get(D,Q)||(Ur.body=Q,Ur.contact=P,D.dispatchEvent(Ur),Ur.body=D,Q.dispatchEvent(Ur)),this.bodyOverlapKeeper.set(D.id,Q.id),this.shapeOverlapKeeper.set(k.id,O.id)}for(this.emitContactEvents(),l&&(c.makeContactConstraints=Rt.now()-h,h=Rt.now()),x=0;x!==r;x++){const F=s[x];F.wakeUpAfterNarrowphase&&(F.wakeUp(),F.wakeUpAfterNarrowphase=!1)}for(B=f.length,x=0;x!==B;x++){const F=f[x];F.update();for(let P=0,D=F.equations.length;P!==D;P++){const Q=F.equations[P];o.addEquation(Q)}}o.solve(e,this),l&&(c.solve=Rt.now()-h),o.removeAllEquations();const U=Math.pow;for(x=0;x!==r;x++){const F=s[x];if(F.type&u){const P=U(1-F.linearDamping,e),D=F.velocity;D.scale(P,D);const Q=F.angularVelocity;if(Q){const k=U(1-F.angularDamping,e);Q.scale(k,Q)}}}this.dispatchEvent(XF),l&&(h=Rt.now());const C=this.stepnumber%(this.quatNormalizeSkip+1)===0,T=this.quatNormalizeFast;for(x=0;x!==r;x++)s[x].integrate(e,C,T);this.clearForces(),this.broadphase.dirty=!0,l&&(c.integrate=Rt.now()-h),this.stepnumber+=1,this.dispatchEvent(WF);let R=!0;if(this.allowSleep)for(R=!1,x=0;x!==r;x++){const F=s[x];F.sleepTick(this.time),F.sleepState!==xe.SLEEPING&&(R=!0)}this.hasActiveBodies=R}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(dn,pn),e){for(let r=0,s=dn.length;r<s;r+=2)Fr.bodyA=this.getBodyById(dn[r]),Fr.bodyB=this.getBodyById(dn[r+1]),this.dispatchEvent(Fr);Fr.bodyA=Fr.bodyB=null}if(t){for(let r=0,s=pn.length;r<s;r+=2)Tr.bodyA=this.getBodyById(pn[r]),Tr.bodyB=this.getBodyById(pn[r+1]),this.dispatchEvent(Tr);Tr.bodyA=Tr.bodyB=null}dn.length=pn.length=0;const A=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((A||i)&&this.shapeOverlapKeeper.getDiff(dn,pn),A){for(let r=0,s=dn.length;r<s;r+=2){const o=this.getShapeById(dn[r]),a=this.getShapeById(dn[r+1]);gn.shapeA=o,gn.shapeB=a,o&&(gn.bodyA=o.body),a&&(gn.bodyB=a.body),this.dispatchEvent(gn)}gn.bodyA=gn.bodyB=gn.shapeA=gn.shapeB=null}if(i){for(let r=0,s=pn.length;r<s;r+=2){const o=this.getShapeById(pn[r]),a=this.getShapeById(pn[r+1]);mn.shapeA=o,mn.shapeB=a,o&&(mn.bodyA=o.body),a&&(mn.bodyB=a.body),this.dispatchEvent(mn)}mn.bodyA=mn.bodyB=mn.shapeA=mn.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let A=0;A!==t;A++){const i=e[A];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new wA;const Fl=new Ft,Rt=globalThis.performance||{};if(!Rt.now){let n=Date.now();Rt.timing&&Rt.timing.navigationStart&&(n=Rt.timing.navigationStart),Rt.now=()=>Date.now()-n}new M;const WF={type:"postStep"},XF={type:"preStep"},Ur={type:xe.COLLIDE_EVENT_NAME,body:null,contact:null},YF=[],qF=[],JF=[],ZF=[],dn=[],pn=[],Fr={type:"beginContact",bodyA:null,bodyB:null},Tr={type:"endContact",bodyA:null,bodyB:null},gn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},mn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class ZA{constructor(e,t,A,i,r="div"){this.parent=e,this.object=t,this.property=A,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),ZA.nextNameID=ZA.nextNameID||0,this.$name.id=`lil-gui-name-${++ZA.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",s=>s.stopPropagation()),this.domElement.addEventListener("keyup",s=>s.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(A)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class jF extends ZA{constructor(e,t,A){super(e,t,A,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function kc(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const $F={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:kc,toHexString:kc},ss={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},e1={isPrimitive:!1,match:n=>Array.isArray(n)||ArrayBuffer.isView(n),fromHexString(n,e,t=1){const A=ss.fromHexString(n);e[0]=(A>>16&255)/255*t,e[1]=(A>>8&255)/255*t,e[2]=(A&255)/255*t},toHexString([n,e,t],A=1){A=255/A;const i=n*A<<16^e*A<<8^t*A<<0;return ss.toHexString(i)}},t1={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){const A=ss.fromHexString(n);e.r=(A>>16&255)/255*t,e.g=(A>>8&255)/255*t,e.b=(A&255)/255*t},toHexString({r:n,g:e,b:t},A=1){A=255/A;const i=n*A<<16^e*A<<8^t*A<<0;return ss.toHexString(i)}},A1=[$F,ss,e1,t1];function n1(n){return A1.find(e=>e.match(n))}class i1 extends ZA{constructor(e,t,A,i){super(e,t,A,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=n1(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=kc(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Tl extends ZA{constructor(e,t,A){super(e,t,A,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class r1 extends ZA{constructor(e,t,A,i,r,s){super(e,t,A,"lil-number"),this._initInput(),this.min(i),this.max(r);const o=s!==void 0;this.step(o?s:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let x=parseFloat(this.$input.value);isNaN(x)||(this._stepExplicit&&(x=this._snap(x)),this.setValue(this._clamp(x)))},A=x=>{const B=parseFloat(this.$input.value);isNaN(B)||(this._snapClampSetValue(B+x),this.$input.value=this.getValue())},i=x=>{x.key==="Enter"&&this.$input.blur(),x.code==="ArrowUp"&&(x.preventDefault(),A(this._step*this._arrowKeyMultiplier(x))),x.code==="ArrowDown"&&(x.preventDefault(),A(this._step*this._arrowKeyMultiplier(x)*-1))},r=x=>{this._inputFocused&&(x.preventDefault(),A(this._step*this._normalizeMouseWheel(x)))};let s=!1,o,a,l,c,u;const h=5,f=x=>{o=x.clientX,a=l=x.clientY,s=!0,c=this.getValue(),u=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",m)},p=x=>{if(s){const B=x.clientX-o,w=x.clientY-a;Math.abs(w)>h?(x.preventDefault(),this.$input.blur(),s=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(B)>h&&m()}if(!s){const B=x.clientY-l;u-=B*this._step*this._arrowKeyMultiplier(x),c+u>this._max?u=this._max-c:c+u<this._min&&(u=this._min-c),this._snapClampSetValue(c+u)}l=x.clientY},m=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",m)},g=()=>{this._inputFocused=!0},d=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",d)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const e=(d,x,B,w,y)=>(d-x)/(B-x)*(y-w)+w,t=d=>{const x=this.$slider.getBoundingClientRect();let B=e(d,x.left,x.right,this._min,this._max);this._snapClampSetValue(B)},A=d=>{this._setDraggingStyle(!0),t(d.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=d=>{t(d.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let s=!1,o,a;const l=d=>{d.preventDefault(),this._setDraggingStyle(!0),t(d.touches[0].clientX),s=!1},c=d=>{d.touches.length>1||(this._hasScrollBar?(o=d.touches[0].clientX,a=d.touches[0].clientY,s=!0):l(d),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",h))},u=d=>{if(s){const x=d.touches[0].clientX-o,B=d.touches[0].clientY-a;Math.abs(x)>Math.abs(B)?l(d):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",h))}else d.preventDefault(),t(d.touches[0].clientX)},h=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",h)},f=this._callOnFinishChange.bind(this),p=400;let m;const g=d=>{if(Math.abs(d.deltaX)<Math.abs(d.deltaY)&&this._hasScrollBar)return;d.preventDefault();const B=this._normalizeMouseWheel(d)*this._step;this._snapClampSetValue(this.getValue()+B),this.$input.value=this.getValue(),clearTimeout(m),m=setTimeout(f,p)};this.$slider.addEventListener("mousedown",A),this.$slider.addEventListener("touchstart",c,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:A}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,A=-e.wheelDelta/120,A*=this._stepExplicit?1:10),t+-A}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class s1 extends ZA{constructor(e,t,A,i){super(e,t,A,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const A=document.createElement("option");A.textContent=t,this.$select.appendChild(A)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class o1 extends ZA{constructor(e,t,A){super(e,t,A,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var a1=`.lil-gui {
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
}`;function l1(n){const e=document.createElement("style");e.innerHTML=n;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let fd=!1;class bh{constructor({parent:e,autoPlace:t=e===void 0,container:A,width:i,title:r="Controls",closeFolders:s=!1,injectStyles:o=!0,touchStyles:a=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),a&&this.domElement.classList.add("lil-allow-touch-styles"),!fd&&o&&(l1(a1),fd=!0),A?A.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=s}add(e,t,A,i,r){if(Object(A)===A)return new s1(this,e,t,A);const s=e[t];switch(typeof s){case"number":return new r1(this,e,t,A,i,r);case"boolean":return new jF(this,e,t);case"string":return new o1(this,e,t);case"function":return new Tl(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,s)}addColor(e,t,A=1){return new i1(this,e,t,A)}addFolder(e){const t=new bh({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(A=>{A instanceof Tl||A._name in e.controllers&&A.load(e.controllers[A._name])}),t&&e.folders&&this.folders.forEach(A=>{A._title in e.folders&&A.load(e.folders[A._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(A=>{if(!(A instanceof Tl)){if(A._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${A._name}"`);t.controllers[A._name]=A.save()}}),e&&this.folders.forEach(A=>{if(A._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${A._title}"`);t.folders[A._title]=A.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");const A=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",A))};this.$children.addEventListener("transitionend",A);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(A=>A.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}window.__BRICK_WALL_BUILD__="2025-11-25-preview";const c1=document.getElementById("app"),rA=new F_({antialias:!0,preserveDrawingBuffer:!0});rA.setPixelRatio(Math.min(window.devicePixelRatio,2));rA.setSize(window.innerWidth,window.innerHeight);rA.shadowMap.enabled=!0;rA.shadowMap.type=Bd;rA.toneMapping=wd;rA.toneMappingExposure=1.15;rA.physicallyCorrectLights=!0;c1.appendChild(rA.domElement);const _A=new cm;_A.background=new Ie(527121);_A.fog=new oh(527121,40,140);const Mn=new BA(50,window.innerWidth/window.innerHeight,.1,200);Mn.position.set(7,5,10);_A.add(Mn);const da=new J_(rA);da.addPass(new Z_(_A,Mn));const gi=new or(new ue(window.innerWidth,window.innerHeight),.35,.8,.2);da.addPass(gi);const Bi=new I_(Mn,rA.domElement);Bi.enableDamping=!0;Bi.maxPolarAngle=Math.PI*.48;Bi.target.set(0,1.2,0);Bi.update();const pa=new iA(new os(500,500),new Tm({opacity:.25}));pa.rotation.x=-Math.PI/2;pa.position.y=-.01;pa.receiveShadow=!0;_A.add(pa);const ds=new Gm(500,200,4868682,4868682);ds.position.y=.001;ds.material.opacity=.24;ds.material.transparent=!0;ds.material.depthWrite=!1;_A.add(ds);const h1=new Dm(16316145,1053466,1.35);_A.add(h1);const nn=new Wd(16777215,2.4);nn.position.set(14,18,12);nn.castShadow=!0;nn.shadow.mapSize.set(4096,4096);nn.shadow.camera.near=1;nn.shadow.camera.far=80;nn.shadow.camera.left=-24;nn.shadow.camera.right=24;nn.shadow.camera.top=24;nn.shadow.camera.bottom=-24;_A.add(nn);const f0=new Wd(12044031,.9);f0.position.set(-8,9,-10);_A.add(f0);const ga=new Hm(16773592,1.1,80,Math.PI/5,.2,1);ga.position.set(-6,12,6);ga.castShadow=!0;_A.add(ga);_A.add(ga.target);const u1=v1(),f1=w1(rA.capabilities.getMaxAnisotropy?.()||8),d1=_1(),d0=new Qm({color:16777215,vertexColors:!0,map:f1,bumpMap:d1,bumpScale:.35,gradientMap:u1,emissive:new Ie(9479423),emissiveIntensity:.06}),p1=new lh({color:10396853}),qo=new Xi;_A.add(qo);let Kt=[],p0=null,g0=!1;const Jo=new Vm,Zo=new ue,m0=new Bn(new N(0,1,0),0);let jo=!1,Cn=null,Mh=!1,ma=!1,Il,Kc,dd;const Wc=[],x0=new Xd,TA={mode:"catmullrom",points:{catmullrom:[new N(.1,0,.45),new N(.32,0,.55),new N(.64,0,.42),new N(.9,0,.58)],polyline:[new N(.08,0,.2),new N(.32,0,.82),new N(.64,0,.22),new N(.92,0,.65)]}},pd={catmullrom:{stroke:"#3ecaff",point:"#6fb2ff"},polyline:{stroke:"#3a8dff",point:"#3a8dff"}},He={canvas:null,ctx:null,padding:16,width:260,height:260,dragging:null},B0=new Im({color:16718362,emissive:16718362,emissiveIntensity:8,roughness:.25,metalness:0});B0.toneMapped=!1;const vA=new iA(new uh(.16,32,32),B0);vA.castShadow=!0;_A.add(vA);const Ne={brickLength:.6,wallLength:8,wallWidth:.25,wallHeight:3,gap:0,rows:10,falloff:.15,horizontalGap:0};let Sh=Ne.wallHeight/Ne.rows,Xc=Ne.rows;const tA={bloomStrength:.3,bloomThreshold:.08,bloomRadius:1,glowSpeed:1.25,glowIntensity:.1},ps=new bh({title:"Parametric Brick Wall"}),Sn=ps.addFolder("Wall Parameters");Sn.add(Ne,"brickLength",.2,1.2,.02).name("Brick Length").onChange(rn);Sn.add(Ne,"wallLength",2,20,.1).name("Wall Length").onChange(rn);Sn.add(Ne,"wallWidth",.2,.4,.01).name("Wall Width").onChange(rn);Sn.add(Ne,"wallHeight",1,6,.1).name("Wall Height").onChange(B1);Sn.add(Ne,"gap",0,.15,.005).name("Vertical Gap").onChange(rn);Sn.add(Ne,"horizontalGap",0,.15,.005).name("Horizontal Gap").onChange(rn);Sn.add(Ne,"rows",2,30,1).name("Rows").onChange(x1);Sn.add(Ne,"falloff",0,1,.01).name("Falloff").onChange(()=>{_0(),gs()});Sn.open();const xa=ps.addFolder("Curve Control Panel");xa.domElement.style.marginTop="8px";xa.add(TA,"mode",{"Catmull-Rom Curve":"catmullrom","Polyline (4 corners)":"polyline"}).name("Curve Type").onChange(m1);P1(xa);xa.open();const gr=ps.addFolder("VFX Settings");gr.add(tA,"bloomStrength",0,.5,.01).name("Bloom Strength").onChange(()=>gi.strength=tA.bloomStrength);gr.add(tA,"bloomThreshold",0,1,.01).name("Bloom Threshold").onChange(()=>gi.threshold=tA.bloomThreshold);gr.add(tA,"bloomRadius",0,1.25,.01).name("Bloom Radius").onChange(()=>gi.radius=tA.bloomRadius);gr.add(tA,"glowSpeed",.25,10,.05).name("Glow Speed");gr.add(tA,"glowIntensity",0,.3,.01).name("Glow Intensity");gr.close();const Uh=ps.addFolder("Export");Uh.add({exportObj:I1},"exportObj").name("Export .obj");Uh.add({snapshot:Q1},"snapshot").name("Snapshot");Uh.add({exportPly:R1},"exportPly").name("Export .ply");const v0=ps.addFolder("Simulation");v0.add({start:L1},"start").name("Start Collapse");v0.add({reset:D1},"reset").name("Reset Wall");function Zn(){return TA.points[TA.mode]}function g1(){return pd[TA.mode]||pd.catmullrom}function m1(){He.dragging=null;const n=TA.mode==="catmullrom";va(Zn(),{sort:n}),U0(),Or()}function Or(n={}){const{dragging:e=!1}=n,t=TA.mode==="catmullrom";va(Zn(),{sort:t&&!e}),w0(),rn()}function w0(){qi()}function _0(n=p0){if(g0)return;const e=n?n.getPoint(.5):new N,t=n?n.getTangent(.5).setY(0).normalize():new N(0,0,1),i=new N().crossVectors(t,new N(0,1,0)).normalize().multiplyScalar(Ne.wallWidth+.8),r=e.clone().add(i);C0(r.x,r.z,Ne.wallHeight*.6)}function C0(n,e,t=null){const i=Ne.wallHeight+4,r=t!==null?t:vA.position.y||Ne.wallHeight*.5,s=tt.clamp(r,.12,i);vA.position.set(n,s,e)}function x1(){const n=Sh||Ne.wallHeight/Math.max(Xc,1);Ne.wallHeight=n*Ne.rows,Xc=Ne.rows,rn()}function B1(){Sh=Ne.wallHeight/Math.max(Ne.rows,1),rn()}function v1(){const n=new Uint8Array([255,255,255,220,224,235,186,190,200,130,134,145,90,95,110]),e=new Hd(n,5,1,jc);return e.needsUpdate=!0,e.colorSpace=zt,e.minFilter=nA,e.magFilter=nA,e.generateMipmaps=!1,e}function w1(n=8){const t=document.createElement("canvas");t.width=t.height=256;const A=t.getContext("2d");A.fillStyle="#c95333",A.fillRect(0,0,256,256);const i=256*60;for(let o=0;o<i;o+=1){const a=Math.random()*256,l=Math.random()*256,c=.1+Math.random()*.2;A.fillStyle=`rgba(85,40,25,${c})`,A.fillRect(a,l,1.2+Math.random()*1.5,1.2+Math.random()*1.5)}const r=A.createLinearGradient(0,0,0,256);r.addColorStop(0,"rgba(0,0,0,0.05)"),r.addColorStop(1,"rgba(255,255,255,0.05)"),A.fillStyle=r,A.fillRect(0,0,256,256);const s=new Od(t);return s.colorSpace=zt,s.wrapS=s.wrapT=Zr,s.repeat.set(1,1),s.anisotropy=n,s.needsUpdate=!0,s}function _1(){const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d");t.fillStyle="#808080",t.fillRect(0,0,256,256);const A=256*120;for(let r=0;r<A;r+=1){const s=Math.random()*256,o=Math.random()*256,l=90+Math.random()*130|0;t.fillStyle=`rgb(${l},${l},${l})`,t.fillRect(s,o,1.5+Math.random()*1.5,1.5+Math.random()*1.5)}const i=new Od(e);return i.wrapS=i.wrapT=Zr,i.repeat.set(1,1),i.needsUpdate=!0,i}function C1(){const n=Zn();va(n);const e=Ne.wallLength*.9,t=n.map(l=>{const c=tt.clamp(l.x,0,1),u=tt.clamp(l.z,0,1);return new N((c-.5)*e,0,(.5-u)*e)}),A=t.reduce((l,c)=>l.add(c),new N).multiplyScalar(1/t.length),i=l=>{if(TA.mode==="polyline"){const c=new Fm;for(let u=0;u<l.length-1;u+=1)c.add(new kd(l[u].clone(),l[u+1].clone()));return c}return new hh(l,!1,"catmullrom",.5)},r=i(t),s=Math.max(r.getLength(),1e-4),o=Ne.wallLength/s,a=t.map(l=>l.clone().sub(A).multiplyScalar(o).add(A));return i(a)}function y1(){[...qo.children].forEach(n=>{qo.remove(n),n.traverse(e=>{(e.isMesh||e.isLineSegments)&&e.geometry&&e.geometry.dispose()})}),Kt=[],Fh()}function E1(n){const e=n.attributes.position.count,t=new Ie("#f0f1f5"),A=new Ie("#d8dbe3"),i=[];for(let s=0;s<e;s+=1){const o=s%3===0?t:A;i.push(o.r,o.g,o.b)}const r=new Ot(i,3);n.setAttribute("color",r),n.userData.baseColors=Float32Array.from(r.array)}function b1(n,e,t){const A=new fr(n,e,t,1,1,1);E1(A);const i=new iA(A,d0);i.castShadow=!0,i.receiveShadow=!0;const r=new pm(A),s=new Nd(r,p1),o=new ur({color:16722474,transparent:!0,opacity:0,depthWrite:!1,blending:To}),a=new iA(A.clone(),o);a.visible=!1;const l=new Xi;return l.add(i),l.add(s),l.add(a),l.castShadow=!0,l.receiveShadow=!0,{group:l,glow:a}}function rn(){const n=C1();p0=n,_0(n),y1(),qi();const e=Math.max(n.getLength(),1e-4),t=Math.max(2,Math.ceil(e/Ne.brickLength)),A=e/t,i=Math.max(.001,1-Ne.horizontalGap),r=A*1.01*i,s=Ne.wallHeight/Ne.rows,o=Math.max(.05,s-Ne.gap);for(let a=0;a<Ne.rows;a+=1){const l=a*s+o/2,c=a%2===0?A*.5:0;for(let u=c,h=0;u<=e-A*.25;u+=A,h+=1){const f=tt.clamp(u/e,0,1),p=n.getPointAt(f),m=n.getTangentAt(f).setY(0).normalize();m.lengthSq()<1e-5&&m.set(1,0,0),p.y=l;const{group:g,glow:d}=b1(r,o,Ne.wallWidth),x=new Yn;x.setFromUnitVectors(new N(1,0,0),m),g.position.copy(p),g.quaternion.copy(x),qo.add(g);const B={object:g,glow:d,row:a,column:h,curveT:f,dims:{x:r,y:o,z:Ne.wallWidth}};Kt.push(B),ma&&S0(B)}}b0(),gs(),Sh=Ne.wallHeight/Math.max(Ne.rows,1),Xc=Ne.rows}function gs(){const n=Kt;if(!n.length)return;Kt.forEach(f=>{f.object.visible=!0,f.glow&&(f.glow.visible=!1,f.glow.userData.baseOpacity=0,f.glow.userData.intensity=0)});let e=1/0;n.forEach(f=>{const p=vA.position.distanceTo(f.object.position);p<e&&(e=p)});const t=Math.max(Ne.wallLength,Ne.wallHeight)*.6+Ne.wallWidth,A=tt.lerp(.5,2,Ne.falloff),i=t*A,r=tt.clamp(1-e/Math.max(i,.001),0,1),s=tt.clamp(Ne.falloff*r,0,1),o=[...n].sort((f,p)=>{const m=f.object.position.distanceTo(vA.position),g=p.object.position.distanceTo(vA.position);return Math.abs(m-g)>1e-4?m-g:p.row-f.row}),a=Math.floor(o.length*.75),l=Math.floor(a*s);o.forEach((f,p)=>{f.object.visible=p>=l});const c=Ne.falloff>0,h=Math.max(Ne.wallLength,Ne.wallHeight)*.9+Ne.wallWidth+1.2;Kt.forEach(f=>{if(!f.glow)return;const p=vA.position.distanceTo(f.object.position),m=tt.clamp(1-p/Math.max(h,.001),0,1),g=Math.pow(m,2.2),d=m>.85?tt.smoothstep(m,.85,1)*.7:0,x=tt.clamp(g+d,0,1.6),B=f.object.visible&&c?x:0;f.glow.userData.baseOpacity=B,f.glow.userData.intensity=x,f.glow.visible=c&&B>.01;const w=tt.clamp(m,0,1);f.colorIntensity=Math.max(w,x)}),b0(),Kt.forEach(f=>Ba(f))}function y0(n){const e=rA.domElement.getBoundingClientRect();Zo.x=(n.clientX-e.left)/e.width*2-1,Zo.y=-((n.clientY-e.top)/e.height)*2+1}function M1(n){if(y0(n),Jo.setFromCamera(Zo,Mn),Jo.intersectObject(vA,!1).length){const t=Mn.getWorldDirection(new N);m0.setFromNormalAndCoplanarPoint(t,vA.position),jo=!0,g0=!0,Bi.enabled=!1}}function S1(n){if(!jo)return;y0(n),Jo.setFromCamera(Zo,Mn);const e=new N;Jo.ray.intersectPlane(m0,e)&&(C0(e.x,e.z,e.y),gs())}function U1(){jo&&(jo=!1,Bi.enabled=!0)}function F1(){Mn.aspect=window.innerWidth/window.innerHeight,Mn.updateProjectionMatrix(),rA.setSize(window.innerWidth,window.innerHeight),da.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",F1);rA.domElement.addEventListener("pointerdown",M1);rA.domElement.addEventListener("pointermove",S1);window.addEventListener("pointerup",U1);w0();rn();function E0(){requestAnimationFrame(E0),Bi.update(),T1(),da.render()}E0();function T1(){const n=performance.now()*.001,e=.5+.5*Math.sin(n*tA.glowSpeed),t=tA.glowIntensity*e;d0.emissiveIntensity=.06;const A=Ne.falloff>0,i=8,r=A?4.5:0;if(vA.material.emissiveIntensity=i+t*r,Kt.forEach(s=>{if(s.glow&&s.glow.visible){const o=s.glow.userData.baseOpacity||0,a=s.glow.userData.intensity||0,l=tt.lerp(1.2,3.6,a);s.glow.material.opacity=o*l*(.55+1.05*t);const c=tt.lerp(.35,.05,a);s.glow.material.color.setRGB(1,c,c)}Ba(s,t,A)}),gi.strength=tA.bloomStrength,gi.threshold=tA.bloomThreshold,gi.radius=tA.bloomRadius,ma&&Cn){const s=x0.getDelta();Cn.step(1/60,s,3),Kt.forEach(o=>{o.body&&(o.object.position.copy(o.body.position),o.object.quaternion.copy(o.body.quaternion))})}}function Ba(n,e=0,t=!1){const A=n.object.children.find(f=>f.isMesh);if(!A)return;const i=A.geometry,r=i.userData.baseColors,s=i.getAttribute("color");if(!r||!s)return;const o=n.baseColorIntensity||0,a=n.colorIntensity||0,l=t?1+e*.35:1,c=Math.max(o*1.2,a*3),u=tt.clamp(c*5*l,0,1),h=new Ie(1,0,0);for(let f=0;f<s.count;f+=1){const p=f*3,m=r[p],g=r[p+1],d=r[p+2];s.array[p]=tt.lerp(m,h.r,u),s.array[p+1]=tt.lerp(g,h.g,u),s.array[p+2]=tt.lerp(d,h.b,u)}s.needsUpdate=!0}function b0(){const n=Kt.filter(o=>o.object.visible);if(!n.length)return;let e=1/0,t=-1/0,A=1/0,i=-1/0;n.forEach(o=>{const a=o.object.children.find(c=>c.isMesh);if(!a)return;const l=new hr().setFromObject(a);e=Math.min(e,l.min.y),t=Math.max(t,l.max.y),A=Math.min(A,l.min.z),i=Math.max(i,l.max.z)});const r=Math.max(t-e,1e-4),s=Math.max(i-A,1e-4);n.forEach(o=>{const a=o.object.children.find(h=>h.isMesh);if(!a)return;const l=a.geometry.attributes.position;let c=0;for(let h=0;h<l.count;h+=1){const f=(l.getY(h)-e)/r,p=(l.getZ(h)-A)/s;c+=f*.7+p*.3}const u=c/l.count;o.baseColorIntensity=tt.clamp(u,0,1)})}function I1(){gs();const n=Ne.falloff>0,e=n?tA.glowIntensity:0;Kt.forEach(B=>Ba(B,e,n));const t=new $_,A=Kt.filter(B=>B.object.visible);if(!A.length){console.warn("No visible bricks to export.");return}const i=[];if(A.forEach(B=>{const w=B.object.children.find(R=>R.isMesh);if(!w||!w.geometry)return;const y=w.geometry.clone(),v=y.getAttribute("position"),E=v.count,U=new Float32Array(E*3);let _=1/0,C=-1/0;for(let R=0;R<E;R++){const F=v.getY(R);_=Math.min(_,F),C=Math.max(C,F)}const T=Math.max(C-_,1e-4);for(let R=0;R<E;R++){const P=(v.getY(R)-_)/T,D=tt.lerp(.1,0,P),Q=tt.lerp(.08,0,P);U[R*3]=1,U[R*3+1]=D,U[R*3+2]=Q}y.setAttribute("color",new uA(U,3)),y.applyMatrix4(w.matrixWorld),i.push(y)}),!i.length)return;const r=tp(i,!0),s=r.getAttribute("position"),o=new Float32Array(s.count*3);let a=1/0,l=-1/0,c=1/0,u=-1/0;for(let B=0;B<s.count;B++){const w=s.getY(B),y=s.getZ(B);a=Math.min(a,w),l=Math.max(l,w),c=Math.min(c,y),u=Math.max(u,y)}const h=Math.max(l-a,1e-4),f=Math.max(u-c,1e-4);for(let B=0;B<s.count;B++){const w=s.getY(B),y=s.getZ(B),v=(w-a)/h,E=(y-c)/f,U=tt.clamp(v*.7+E*.3,0,1);o[B*3]=1,o[B*3+1]=tt.lerp(.6,0,U),o[B*3+2]=tt.lerp(.6,0,U)}r.setAttribute("color",new uA(o,3));const p=new iA(r,new ur({vertexColors:!0})),m=t.parse(p),g=new Blob([m],{type:"text/plain"}),d=URL.createObjectURL(g),x=document.createElement("a");x.href=d,x.download="brick_wall.obj",x.click(),setTimeout(()=>URL.revokeObjectURL(d),1500)}function Q1(){CS(document.body,{backgroundColor:"#080b11",useCORS:!0,logging:!1}).then(n=>{const e=n.toDataURL("image/png",1),t=document.createElement("a");t.href=e,t.download="brick_wall_snapshot.png",t.click()})}function R1(){gs();const n=!0,e=Math.max(tA.glowIntensity,.2);Kt.forEach(w=>Ba(w,e,n));const t=new eC,A=Kt.filter(w=>w.object.visible);if(!A.length){console.warn("No visible bricks to export.");return}const i=[];if(A.forEach(w=>{const y=w.object.children.find(E=>E.isMesh);if(!y||!y.geometry)return;const v=y.geometry.clone();v.applyMatrix4(y.matrixWorld),i.push(v)}),!i.length)return;const r=tp(i,!0),s=r.getAttribute("position"),o=new Float32Array(s.count*3);let a=1/0,l=-1/0,c=1/0,u=-1/0;const h=vA.position.clone();for(let w=0;w<s.count;w++){const y=s.getY(w),v=s.getX(w)-h.x,E=s.getY(w)-h.y,U=s.getZ(w)-h.z,_=Math.sqrt(v*v+E*E+U*U);a=Math.min(a,y),l=Math.max(l,y),c=Math.min(c,_),u=Math.max(u,_)}const f=Math.max(l-a,1e-4),p=Math.max(u-c,1e-4);for(let w=0;w<s.count;w++){const v=(s.getY(w)-a)/f,E=s.getX(w)-h.x,U=s.getY(w)-h.y,_=s.getZ(w)-h.z,C=Math.sqrt(E*E+U*U+_*_),T=Math.min(Math.max((C-c)/p,0),1),R=tt.clamp(.2+T*.7+v*.05,0,1),F=tt.lerp(.6,0,R),P=tt.lerp(.6,0,R);o[w*3]=1,o[w*3+1]=F,o[w*3+2]=P}r.setAttribute("color",new uA(o,3));const m=new iA(r,new ur({vertexColors:!0})),g=t.parse(m),d=new Blob([g],{type:"text/plain"}),x=URL.createObjectURL(d),B=document.createElement("a");B.href=x,B.download="brick_wall.ply",B.click(),setTimeout(()=>URL.revokeObjectURL(x),1500)}function M0(){Cn=new KF,Cn.gravity.set(0,-25.9,0),Il=new lr("ground"),Kc=new lr("brick"),dd=new fs(Il,Kc,{friction:.5,restitution:.05}),Cn.addContactMaterial(dd);const n=new xe({mass:0,shape:new hs(new M(250,.1,250)),material:Il});n.position.set(0,-.05,0),Cn.addBody(n),Mh=!0}function Fh(){Cn&&(Wc.forEach(n=>Cn.removeBody(n)),Wc.length=0,Kt.forEach(n=>{n.body=null}))}function S0(n){Mh||M0();const{x:e,y:t,z:A}=n.dims,i=new hs(new M(e/2,t/2,A/2)),r=new xe({mass:1,shape:i,position:new M(n.object.position.x,n.object.position.y,n.object.position.z),quaternion:new St(n.object.quaternion.x,n.object.quaternion.y,n.object.quaternion.z,n.object.quaternion.w),material:Kc,allowSleep:!1,linearDamping:.007,angularDamping:.0035});Cn.addBody(r),Wc.push(r),n.body=r}function L1(){ma=!0,Fh(),Mh||M0(),Kt.forEach(A=>S0(A));const n=Math.max(...Kt.map(A=>A.row)),e=vA.position.clone(),t=Math.max(Ne.wallLength*.35,1.5);Kt.forEach(A=>{if(!A.body)return;const i=A.object.position.distanceTo(e),r=tt.clamp(1-i/t,0,1),s=Math.pow(r,2.6),o=n>0?A.row/n:0,a=s*.95+o*.45,l=(.05+.15*s)*1.6*1.7,c=(.4+6*a)*2*1.15*2.15625*1.18965*1.071,u=new M((Math.random()-.5)*l,-c,(Math.random()-.5)*l);A.body.applyImpulse(u,A.body.position);const h=new M((Math.random()-.5)*4*1.15,(Math.random()-.5)*4*1.15,(Math.random()-.5)*4*1.15);A.body.angularVelocity=h}),x0.getElapsedTime()}function D1(){ma=!1,Fh(),rn()}function P1(n){const e=document.createElement("div");e.style.padding="8px 6px 10px";const t=document.createElement("canvas");t.width=He.width,t.height=He.height,t.style.width="100%",t.style.borderRadius="10px",t.style.background="linear-gradient(180deg, #0c111c 0%, #0a0e17 100%)",t.style.boxShadow="inset 0 0 0 1px rgba(255,255,255,0.06)",t.style.cursor="crosshair",e.appendChild(t);const A=document.createElement("div");A.style.marginTop="6px",A.style.fontSize="12px",A.style.lineHeight="1.5",A.style.color="#c7cedd",A.innerHTML="Drag points to bend the path.<br>Points are normalized (0-1) across the panel.",e.appendChild(A);const i=document.createElement("div");i.style.marginTop="4px",i.style.fontSize="12px",i.style.lineHeight="1.5",i.style.color="#c7cedd",i.textContent="Left click on the curve to add new point, and right click on the point to delete it.",e.appendChild(i),n.domElement.appendChild(e),He.canvas=t,He.ctx=t.getContext("2d"),He.infoNode=A,He.info2Node=i,O1(n),U0();const r=a=>{a.preventDefault();const l=gd(a);TA.mode;const u=F0().map(Jr).findIndex(h=>H1(h,l)<225);if(u>=0){if(a.button===2){G1(u),Or(),qi();return}He.dragging=u,window.addEventListener("pointermove",s),window.addEventListener("pointerup",o,{once:!0});return}if(a.button===0){const h=md(l);V1(h),Or(),qi()}},s=a=>{if(He.dragging===null)return;const l=gd(a),c=md(l),u=Zn();u[He.dragging].x=c.x,u[He.dragging].z=c.z,Or({dragging:!0}),qi()},o=()=>{He.dragging=null,Or(),window.removeEventListener("pointermove",s)};t.addEventListener("pointerdown",r),t.addEventListener("contextmenu",a=>a.preventDefault()),qi()}function U0(){if(!He.infoNode||!He.info2Node)return;const n=TA.mode==="catmullrom";He.infoNode.innerHTML=n?"Drag points to bend the path.<br>Points are normalized (0-1) across the panel.":"Drag the blue points to set sharp corners.<br>Points are normalized (0-1) across the panel.",He.info2Node.textContent=n?"Left click on the curve to add new point, and right click on the point to delete it.":"Left click to add a point; right click a point to delete it."}function F0(){return Zn()}function gd(n){const e=He.canvas.getBoundingClientRect();return{x:(n.clientX-e.left)/e.width*He.width,y:(n.clientY-e.top)/e.height*He.height}}function Jr(n){const e=He.width-He.padding*2,t=He.height-He.padding*2,A=tt.clamp(n.x,0,1),i=tt.clamp(n.z,0,1);return{x:He.padding+A*e,y:He.height-(He.padding+i*t)}}function md(n){const e=He.width-He.padding*2,t=He.height-He.padding*2,A=tt.clamp((n.x-He.padding)/e,0,1),i=tt.clamp((He.height-n.y-He.padding)/t,0,1);return{x:A,z:i}}function qi(){if(!He.ctx)return;const n=He.ctx,e=He.width,t=He.height;n.clearRect(0,0,e,t),n.save(),n.strokeStyle="rgba(255,255,255,0.05)",n.lineWidth=1;const A=20;for(let a=He.padding;a<=e-He.padding+1;a+=A)n.beginPath(),n.moveTo(a,He.padding),n.lineTo(a,t-He.padding),n.stroke();for(let a=He.padding;a<=t-He.padding+1;a+=A)n.beginPath(),n.moveTo(He.padding,a),n.lineTo(e-He.padding,a),n.stroke();n.restore();const i=F0(),r=g1(),s=i.map(Jr),o=N1(i);if(n.save(),n.strokeStyle=r.stroke,n.lineWidth=2.5,n.beginPath(),o.length>0){n.moveTo(o[0].x,o[0].y);for(let a=1;a<o.length;a++)n.lineTo(o[a].x,o[a].y)}n.stroke(),n.restore(),s.forEach((a,l)=>{n.save(),n.fillStyle=l===He.dragging?"#ff6b4a":r.point,n.strokeStyle="rgba(255,255,255,0.35)",n.lineWidth=1.5,n.beginPath(),n.arc(a.x,a.y,8,0,Math.PI*2),n.fill(),n.stroke(),n.restore()})}function H1(n,e){const t=n.x-e.x,A=n.y-e.y;return t*t+A*A}function N1(n){return n.length?n.length===1?[Jr(n[0])]:TA.mode==="polyline"?n.map(Jr):new hh(n.map(A=>new N(A.x,0,A.z)),!1,"catmullrom",.5).getSpacedPoints(80).map(A=>Jr({x:A.x,z:A.z})):[]}function O1(n){const e=()=>{n.domElement.querySelectorAll(".controller.empty").forEach(A=>A.remove())};e(),requestAnimationFrame(e)}function va(n=Zn(),{sort:e}={}){const t=TA.mode==="catmullrom",A=e!==void 0?e:t,i=.02;A&&n.sort((r,s)=>r.x-s.x);for(let r=0;r<n.length;r+=1){if(t){const s=r===0?0:n[r-1].x+i,o=r===n.length-1?1:n[r+1].x-i;n[r].x=tt.clamp(n[r].x,s,o)}else n[r].x=tt.clamp(n[r].x,0,1);n[r].z=tt.clamp(n[r].z,0,1)}}function V1(n){const e=Zn(),t=TA.mode==="catmullrom",A=new N(n.x,0,n.z);if(!e.length)e.push(A);else if(t)e.push(A),e.sort((i,r)=>i.x-r.x);else{const i=z1(e,A);e.splice(i,0,A)}va(e,{sort:t})}function G1(n){const e=Zn();n<=0||n>=e.length-1||e.length<=2||e.splice(n,1)}function z1(n,e){if(n.length<2)return n.length;let t=0,A=1/0;for(let i=0;i<n.length-1;i+=1){const r=n[i],s=n[i+1],o=s.x-r.x,a=s.z-r.z,l=e.x-r.x,c=e.z-r.z,u=o*o+a*a||1e-5,h=tt.clamp((l*o+c*a)/u,0,1),f=r.x+o*h,p=r.z+a*h,m=e.x-f,g=e.z-p,d=m*m+g*g;d<A&&(A=d,t=i)}return t+1}
