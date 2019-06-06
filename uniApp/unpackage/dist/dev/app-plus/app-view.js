var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190312_syb_scopedata*/window.__wcc_version__='v0.5vv_20190312_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'simiMvList'])
Z([3,'__i0__'])
Z([3,'item'])
Z([[7],[3,'singerMvs']])
Z([3,'id'])
Z([3,'__e'])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'openMvDetail']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'singerMvs']],[1,'id']],[[6],[[7],[3,'item']],[3,'id']]],[1,'id']]]]]]]]]]]]]]])
Z([3,'pic'])
Z([3,'aspectFill'])
Z([[6],[[7],[3,'item']],[3,'imgurl16v9']])
Z([3,'info'])
Z([3,'name'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([3,'artistName'])
Z([a,[[6],[[7],[3,'item']],[3,'artistName']]])
Z([3,'btn'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'mvListTPage'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'data']])
Z([3,'id'])
Z([3,'__e'])
Z([3,'mvListTPage-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'openMvDetail']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'data']],[1,'id']],[[6],[[7],[3,'item']],[3,'id']]],[1,'id']]]]]]]]]]]]]]])
Z([3,'mvListTPage-item-image'])
Z([3,'scaleToFill'])
Z([[2,'?:'],[[6],[[7],[3,'item']],[3,'cover']],[[6],[[7],[3,'item']],[3,'cover']],[[6],[[7],[3,'item']],[3,'picUrl']]])
Z([3,'mvListTPage-item-name'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([3,'mvListTPage-item-playBtn'])
Z([3,'mvListTPage-item-playBtn-icon'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'nowPlay'])
Z([[2,'!'],[[7],[3,'isMusicStart']]])
Z([3,'__e'])
Z([3,'nowPlay-panel _div'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'toPlaying']]]]]]]]])
Z([3,'nowPlayIcom'])
Z([3,'../../static/images/nowPlay.png'])
Z([3,'nowPlayInfo'])
Z([3,'正在播放 :'])
Z([[2,'!='],[[7],[3,'musicInfo']],[1,'']])
Z([3,'nowPlayName'])
Z([a,[[2,'+'],[[2,'+'],[[6],[[7],[3,'musicInfo']],[3,'name']],[1,'--']],[[6],[[7],[3,'musicInfo']],[3,'author']]]])
Z([3,'nowPlayIcomP'])
Z([[6],[[7],[3,'musicInfo']],[3,'picUrl']])
Z([3,'nowPlay-seat _div'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'djRecommendList'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'programsList']])
Z(z[2])
Z([3,'__e'])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toPlay']],[[4],[[5],[[4],[[5],[[5],[1,'o']],[[4],[[5],[[5],[1,'item']],[[7],[3,'item']]]]]]]]]]]]]]]])
Z([3,'pic'])
Z([3,'widthFix'])
Z([[6],[[6],[[6],[[7],[3,'item']],[3,'mainSong']],[3,'album']],[3,'picUrl']])
Z([3,'playBtn'])
Z([3,'icon'])
Z([3,'content'])
Z([3,'name'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([3,'rcmdtext'])
Z([a,[[6],[[7],[3,'item']],[3,'reason']]])
Z([3,'info'])
Z([a,[[2,'+'],[[2,'+'],[1,'播放 : '],[[6],[[7],[3,'item']],[3,'listenerCount']]],[1,'次']]])
Z([[2,'!=='],[[6],[[6],[[7],[3,'item']],[3,'channels']],[3,'length']],[1,0]])
Z([3,'category'])
Z([a,[[2,'+'],[1,'类型 : '],[[6],[[6],[[7],[3,'item']],[3,'channels']],[1,0]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'privileges'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'singerHotSongs']])
Z(z[2])
Z([3,'__e'])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'toPlay']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'singerHotSongs']],[1,'']],[[6],[[7],[3,'item']],[3,'index']]],[1,'id']]]]]]]]]]]]]]])
Z(z[2])
Z([a,[[2,'+'],[[7],[3,'index']],[1,1]]])
Z([3,'info'])
Z([3,'name'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([3,'i'])
Z([3,'childItem'])
Z([[6],[[7],[3,'item']],[3,'ar']])
Z(z[14])
Z([3,'arName'])
Z([a,[[2,'+'],[[6],[[7],[3,'childItem']],[3,'name']],[1,'']]])
Z([3,'btn'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[2,'=='],[[2,'!'],[[7],[3,'playlist']]],[1,'']])
Z(z[0])
Z([3,'display:flex;flex-direction:column;'])
Z([3,'height:300rpx;flex-direction:row;display:flex;width:100%;'])
Z([3,'coverImgUrls'])
Z([3,'scaleToFill'])
Z([[6],[[7],[3,'playlist']],[3,'coverImgUrl']])
Z([3,'playlistInfo'])
Z([3,'name'])
Z([a,[[6],[[7],[3,'playlist']],[3,'name']]])
Z([3,'description'])
Z([a,[[6],[[7],[3,'playlist']],[3,'description']]])
Z([3,'privileges'])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'playlist']],[3,'tracks']])
Z(z[14])
Z([3,'__e'])
Z(z[15])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'toPlay']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'playlist.tracks']],[1,'']],[[6],[[7],[3,'item']],[3,'index']]],[1,'id']]]]]]]]]]]]]]])
Z(z[14])
Z([a,[[2,'+'],[[7],[3,'index']],[1,1]]])
Z([3,'info'])
Z(z[9])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([3,'i'])
Z([3,'childItem'])
Z([[6],[[7],[3,'item']],[3,'ar']])
Z(z[26])
Z([3,'arName'])
Z([a,[[2,'+'],[[6],[[7],[3,'childItem']],[3,'name']],[1,'']]])
Z([3,'btn'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'indexPage'])
Z([3,'index-swiper-view'])
Z([[6],[[7],[3,'swiper']],[3,'autoplay']])
Z([[6],[[7],[3,'swiper']],[3,'circular']])
Z([3,'index-swiper'])
Z([[6],[[7],[3,'swiper']],[3,'duration']])
Z([[6],[[7],[3,'swiper']],[3,'indicatorActiveColor']])
Z([[6],[[7],[3,'swiper']],[3,'indicatorDots']])
Z([[6],[[7],[3,'swiper']],[3,'interval']])
Z([[6],[[7],[3,'swiper']],[3,'previousMargin']])
Z(z[10])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'bannersList']])
Z(z[12])
Z([3,'__e'])
Z([3,'index-swiper-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toRankingList']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([3,'index-swiper-item-image'])
Z([3,'scaleToFill'])
Z([[6],[[7],[3,'item']],[3,'imageUrl']])
Z(z[16])
Z([3,'page-index-title'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'openPersonalizedList']]]]]]]]])
Z([3,'page-index-title-text'])
Z([3,'推'])
Z([3,'荐歌单'])
Z([3,'scroll-persona-view'])
Z([3,'display:flex;flex-direction:row;'])
Z(z[12])
Z(z[13])
Z([[7],[3,'personalizedList']])
Z(z[12])
Z([[2,'<='],[[7],[3,'index']],[1,10]])
Z(z[16])
Z([3,'scroll-persona-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'openPersonalizedDetail']],[[4],[[5],[[4],[[5],[[5],[1,'o']],[[4],[[5],[[5],[1,'item']],[[7],[3,'item']]]]]]]]]]]]]]]])
Z([3,'scroll-persona-item-image'])
Z(z[20])
Z([[6],[[7],[3,'item']],[3,'picUrl']])
Z([3,'scroll-persona-item-name'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z(z[23])
Z(z[25])
Z([3,'M'])
Z([3,'V排行'])
Z([3,'scroll-mv-view'])
Z(z[29])
Z([3,'__i0__'])
Z(z[13])
Z([[7],[3,'topMvList']])
Z(z[12])
Z(z[16])
Z([3,'scroll-mv-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'openMvDetail']],[[4],[[5],[[4],[[5],[[5],[1,'o']],[[4],[[5],[[5],[1,'item']],[[7],[3,'item']]]]]]]]]]]]]]]])
Z([3,'scroll-mv-item-image'])
Z(z[20])
Z([[6],[[7],[3,'item']],[3,'cover']])
Z(z[41])
Z([a,z[42][1]])
Z([3,'playBtn'])
Z([3,'icon'])
Z(z[23])
Z(z[25])
Z([3,'歌'])
Z([3,'手榜'])
Z([3,'scroll-song-view'])
Z(z[29])
Z(z[12])
Z(z[13])
Z([[7],[3,'toplistArtistList']])
Z(z[12])
Z([[2,'<='],[[7],[3,'index']],[1,20]])
Z(z[16])
Z([3,'scroll-song-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toSingerInfo']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([3,'scroll-song-image'])
Z(z[20])
Z([[6],[[7],[3,'item']],[3,'img1v1Url']])
Z([3,'scroll-song-name'])
Z([a,z[42][1]])
Z(z[23])
Z(z[25])
Z(z[26])
Z([3,'荐节目'])
Z([[7],[3,'programsList']])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'indexPage'])
Z([3,'left-tab'])
Z([3,'tab-title-view'])
Z([3,'__e'])
Z([[4],[[5],[[2,'?:'],[[2,'=='],[[7],[3,'tabNum']],[1,1]],[1,'tab-title-view-item-selected'],[1,'tab-title-view-item']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'e0']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'最新MV'])
Z(z[4])
Z([[4],[[5],[[2,'?:'],[[2,'=='],[[7],[3,'tabNum']],[1,2]],[1,'tab-title-view-item-selected'],[1,'tab-title-view-item']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'e1']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'MV排行'])
Z(z[4])
Z([[4],[[5],[[2,'?:'],[[2,'=='],[[7],[3,'tabNum']],[1,3]],[1,'tab-title-view-item-selected'],[1,'tab-title-view-item']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'e2']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'推荐MV'])
Z([3,'tab-botton-view'])
Z([[2,'=='],[[7],[3,'tabNum']],[1,1]])
Z(z[16])
Z([[7],[3,'mvFirstList']])
Z([3,'width:100%;'])
Z([[2,'=='],[[7],[3,'tabNum']],[1,2]])
Z(z[16])
Z([[7],[3,'topMvList']])
Z(z[20])
Z([[2,'=='],[[7],[3,'tabNum']],[1,3]])
Z(z[16])
Z([[7],[3,'personalizedMvList']])
Z(z[20])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[2,'=='],[[2,'!'],[[7],[3,'mvDetail']]],[1,'']])
Z(z[0])
Z([3,'video'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'error']],[[4],[[5],[[4],[[5],[[5],[1,'videoErrorCallback']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'myVideo'])
Z([[6],[[7],[3,'mvDetail']],[3,'cover']])
Z([[7],[3,'mvUrl']])
Z([3,'page-panel'])
Z([3,'videoInfo'])
Z([3,'name'])
Z([a,[[6],[[7],[3,'mvDetail']],[3,'name']]])
Z([3,'tips'])
Z([a,[[2,'+'],[1,'发布 : '],[[6],[[7],[3,'mvDetail']],[3,'publishTime']]]])
Z([3,'artistName'])
Z([a,[[2,'+'],[1,'演唱 : '],[[6],[[7],[3,'mvDetail']],[3,'artistName']]]])
Z([3,'desc'])
Z([a,[[6],[[7],[3,'mvDetail']],[3,'desc']]])
Z([3,'page-index-title'])
Z([3,'page-index-title-text'])
Z([3,'类'])
Z([3,'似MV'])
Z([3,'simiMvList'])
Z([3,'__i0__'])
Z([3,'item'])
Z([[7],[3,'simiMvList']])
Z([3,'id'])
Z(z[4])
Z(z[25])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'toMvDetail']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'simiMvList']],[1,'id']],[[6],[[7],[3,'item']],[3,'id']]],[1,'id']]]]]]]]]]]]]]])
Z([3,'pic'])
Z([3,'aspectFill'])
Z([[6],[[7],[3,'item']],[3,'cover']])
Z([3,'info'])
Z(z[11])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z(z[15])
Z([a,[[6],[[7],[3,'item']],[3,'artistName']]])
Z([3,'btn'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[2,'=='],[[2,'!'],[[7],[3,'personalizedList']]],[1,'']])
Z(z[0])
Z([3,'display:flex;'])
Z([3,'display:flex;flex-direction:row;flex-wrap:wrap;width:100%;margin-left:12rpx;'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'personalizedList']])
Z([3,'id'])
Z([3,'__e'])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'openPersonalizedDetail']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'personalizedList']],[1,'id']],[[6],[[7],[3,'item']],[3,'id']]],[1,'id']]]]]]]]]]]]]]])
Z([3,'item-image'])
Z([3,'scaleToFill'])
Z([[6],[[7],[3,'item']],[3,'picUrl']])
Z([3,'item-name'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[2,'=='],[[2,'!'],[[6],[[7],[3,'musicDetail']],[3,'name']]],[1,'']])
Z(z[0])
Z([3,'page-panel-h'])
Z([3,'music-name'])
Z([a,[[6],[[7],[3,'musicDetail']],[3,'name']]])
Z([3,'music-author'])
Z([a,[[6],[[7],[3,'musicDetail']],[3,'author']]])
Z([3,'music-pic'])
Z([[6],[[7],[3,'musicDetail']],[3,'picUrl']])
Z([3,'player-panel'])
Z([3,'time'])
Z([3,'item'])
Z([a,[[6],[[7],[3,'musicTime']],[3,'currentTime']]])
Z(z[12])
Z([a,[[6],[[7],[3,'musicTime']],[3,'duration']]])
Z([3,'#E91E63'])
Z([3,'__e'])
Z([3,'12'])
Z([[4],[[5],[[4],[[5],[[5],[1,'changing']],[[4],[[5],[[4],[[5],[[5],[1,'sliderChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'musicTime']],[3,'duration']])
Z([3,'0'])
Z([3,'0.01'])
Z([[6],[[7],[3,'musicTime']],[3,'currentTime']])
Z([3,'player-btn'])
Z([3,'nextPrev'])
Z([3,'../../static/images/prev.png'])
Z([[7],[3,'isStop']])
Z(z[17])
Z([3,'playStop'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'toAgain']]]]]]]]])
Z([3,'../../static/images/again.png'])
Z([[2,'!'],[[7],[3,'isStop']]])
Z(z[17])
Z(z[29])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'toPausePlay']]]]]]]]])
Z([[2,'?:'],[[7],[3,'isPlay']],[[7],[3,'playIcon']],[[7],[3,'pauseIcon']]])
Z(z[25])
Z([3,'../../static/images/next.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'display:flex;'])
Z([3,'display:flex;flex-direction:row;flex-wrap:wrap;width:100%;margin-left:12rpx;'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'rankingList']])
Z(z[3])
Z([3,'__e'])
Z(z[4])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toRankingList']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([3,'item-image'])
Z([3,'scaleToFill'])
Z([[6],[[7],[3,'item']],[3,'picUrl']])
Z([3,'item-name'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[2,'=='],[[2,'!'],[[7],[3,'playlist']]],[1,'']])
Z(z[0])
Z([3,'display:flex;flex-direction:column;'])
Z([3,'height:300rpx;flex-direction:row;display:flex;width:100%;'])
Z([3,'coverImgUrls'])
Z([3,'scaleToFill'])
Z([[6],[[7],[3,'playlist']],[3,'coverImgUrl']])
Z([3,'playlistInfo'])
Z([3,'name'])
Z([a,[[6],[[7],[3,'playlist']],[3,'name']]])
Z([3,'description'])
Z([a,[[6],[[7],[3,'playlist']],[3,'description']]])
Z([3,'privileges'])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'playlist']],[3,'tracks']])
Z(z[14])
Z([3,'__e'])
Z(z[15])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toPlay']],[[4],[[5],[[4],[[5],[[5],[1,'o']],[[4],[[5],[[5],[1,'item']],[[7],[3,'item']]]]]]]]]]]]]]]])
Z(z[14])
Z([a,[[2,'+'],[[7],[3,'index']],[1,1]]])
Z([3,'info'])
Z(z[9])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([3,'i'])
Z([3,'childItem'])
Z([[6],[[7],[3,'item']],[3,'ar']])
Z(z[26])
Z([3,'arName'])
Z([a,[[2,'+'],[[6],[[7],[3,'childItem']],[3,'name']],[1,'']]])
Z([3,'btn'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'page-panel singerInfo'])
Z([3,'panel'])
Z([[6],[[7],[3,'singerInfo']],[3,'picUrl']])
Z([3,'name'])
Z([a,[[6],[[7],[3,'singerInfo']],[3,'name']]])
Z([3,'tab'])
Z([3,'tab-title'])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'item']],[[2,'?:'],[[2,'=='],[[7],[3,'tabNum']],[1,1]],[1,'active'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'e0']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'描述'])
Z(z[8])
Z([[4],[[5],[[5],[1,'item']],[[2,'?:'],[[2,'=='],[[7],[3,'tabNum']],[1,2]],[1,'active'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'e1']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'单曲'])
Z(z[8])
Z([[4],[[5],[[5],[1,'item']],[[2,'?:'],[[2,'=='],[[7],[3,'tabNum']],[1,4]],[1,'active'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'e2']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'MV'])
Z([3,'tab-content'])
Z([[2,'=='],[[7],[3,'tabNum']],[1,1]])
Z([3,'item'])
Z([3,'SingerDesc'])
Z([a,[[6],[[7],[3,'SingerDesc']],[3,'briefDesc']]])
Z([[2,'=='],[[7],[3,'tabNum']],[1,2]])
Z(z[22])
Z([[7],[3,'singerHotSongs']])
Z([3,'width:100%;'])
Z([[2,'=='],[[7],[3,'tabNum']],[1,4]])
Z(z[22])
Z([[7],[3,'singerMvs']])
Z(z[28])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/mvList.wxml','./components/mvListT.wxml','./components/nowPlay.wxml','./components/programsList.wxml','./components/songList.wxml','./pages/getPlaylistDetail/getPlaylistDetail.wxml','./pages/index/index.wxml','./pages/mv/mv.wxml','./pages/mvDetail/mvDetail.wxml','./pages/personalizedList/personalizedList.wxml','./pages/play/play.wxml','./pages/ranking/ranking.wxml','./pages/rankingList/rankingList.wxml','./pages/singerInfo/singerInfo.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
cs.push("./components/mvList.wxml:view:1:1")
var oB=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./components/mvList.wxml:block:1:41")
var oD=function(cF,fE,hG,gg){
cs.push("./components/mvList.wxml:block:1:41")
cs.push("./components/mvList.wxml:view:1:124")
var cI=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],cF,fE,gg)
cs.push("./components/mvList.wxml:view:1:251")
var oJ=_n('view')
_rz(z,oJ,'class',9,cF,fE,gg)
cs.push("./components/mvList.wxml:image:1:269")
var lK=_mz(z,'image',['mode',10,'src',1],[],cF,fE,gg)
cs.pop()
_(oJ,lK)
cs.pop()
_(cI,oJ)
cs.push("./components/mvList.wxml:view:1:335")
var aL=_n('view')
_rz(z,aL,'class',12,cF,fE,gg)
cs.push("./components/mvList.wxml:view:1:354")
var tM=_n('view')
_rz(z,tM,'class',13,cF,fE,gg)
var eN=_oz(z,14,cF,fE,gg)
_(tM,eN)
cs.pop()
_(aL,tM)
cs.push("./components/mvList.wxml:view:1:393")
var bO=_n('view')
_rz(z,bO,'class',15,cF,fE,gg)
var oP=_oz(z,16,cF,fE,gg)
_(bO,oP)
cs.pop()
_(aL,bO)
cs.pop()
_(cI,aL)
cs.push("./components/mvList.wxml:view:1:451")
var xQ=_n('view')
_rz(z,xQ,'class',17,cF,fE,gg)
cs.push("./components/mvList.wxml:text:1:469")
var oR=_n('text')
cs.pop()
_(xQ,oR)
cs.push("./components/mvList.wxml:text:1:482")
var fS=_n('text')
cs.pop()
_(xQ,fS)
cs.push("./components/mvList.wxml:text:1:495")
var cT=_n('text')
cs.pop()
_(xQ,cT)
cs.pop()
_(cI,xQ)
cs.pop()
_(hG,cI)
cs.pop()
return hG
}
xC.wxXCkey=2
_2z(z,4,oD,e,s,gg,xC,'item','__i0__','id')
cs.pop()
cs.pop()
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
cs.push("./components/mvListT.wxml:view:1:1")
var oV=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
var cW=_v()
_(oV,cW)
cs.push("./components/mvListT.wxml:block:1:42")
var oX=function(aZ,lY,t1,gg){
cs.push("./components/mvListT.wxml:block:1:42")
cs.push("./components/mvListT.wxml:view:1:119")
var b3=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],aZ,lY,gg)
cs.push("./components/mvListT.wxml:image:1:253")
var o4=_mz(z,'image',['class',9,'mode',1,'src',2],[],aZ,lY,gg)
cs.pop()
_(b3,o4)
cs.push("./components/mvListT.wxml:text:1:362")
var x5=_n('text')
_rz(z,x5,'class',12,aZ,lY,gg)
var o6=_oz(z,13,aZ,lY,gg)
_(x5,o6)
cs.pop()
_(b3,x5)
cs.push("./components/mvListT.wxml:view:1:418")
var f7=_n('view')
_rz(z,f7,'class',14,aZ,lY,gg)
cs.push("./components/mvListT.wxml:view:1:457")
var c8=_n('view')
_rz(z,c8,'class',15,aZ,lY,gg)
cs.pop()
_(f7,c8)
cs.pop()
_(b3,f7)
cs.pop()
_(t1,b3)
cs.pop()
return t1
}
cW.wxXCkey=2
_2z(z,4,oX,e,s,gg,cW,'item','index','id')
cs.pop()
cs.pop()
_(r,oV)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
cs.push("./components/nowPlay.wxml:view:1:1")
var o0=_mz(z,'view',['bind:__l',0,'class',1,'hidden',1],[],e,s,gg)
cs.push("./components/nowPlay.wxml:view:1:67")
var cAB=_mz(z,'view',['bindtap',3,'class',1,'data-event-opts',2],[],e,s,gg)
cs.push("./components/nowPlay.wxml:image:1:162")
var lCB=_mz(z,'image',['mode',-1,'class',6,'src',1],[],e,s,gg)
cs.pop()
_(cAB,lCB)
cs.push("./components/nowPlay.wxml:view:1:240")
var aDB=_n('view')
_rz(z,aDB,'class',8,e,s,gg)
var tEB=_oz(z,9,e,s,gg)
_(aDB,tEB)
cs.pop()
_(cAB,aDB)
var oBB=_v()
_(cAB,oBB)
if(_oz(z,10,e,s,gg)){oBB.wxVkey=1
cs.push("./components/nowPlay.wxml:block:1:287")
cs.push("./components/nowPlay.wxml:view:1:320")
var eFB=_n('view')
_rz(z,eFB,'class',11,e,s,gg)
var bGB=_oz(z,12,e,s,gg)
_(eFB,bGB)
cs.pop()
_(oBB,eFB)
cs.push("./components/nowPlay.wxml:image:1:393")
var oHB=_mz(z,'image',['mode',-1,'class',13,'src',1],[],e,s,gg)
cs.pop()
_(oBB,oHB)
cs.pop()
}
oBB.wxXCkey=1
cs.pop()
_(o0,cAB)
cs.push("./components/nowPlay.wxml:view:1:476")
var xIB=_n('view')
_rz(z,xIB,'class',15,e,s,gg)
cs.pop()
_(o0,xIB)
cs.pop()
_(r,o0)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
cs.push("./components/programsList.wxml:view:1:1")
var fKB=_n('view')
_rz(z,fKB,'bind:__l',0,e,s,gg)
cs.push("./components/programsList.wxml:view:1:22")
var cLB=_n('view')
_rz(z,cLB,'class',1,e,s,gg)
var hMB=_v()
_(cLB,hMB)
cs.push("./components/programsList.wxml:block:1:52")
var oNB=function(oPB,cOB,lQB,gg){
cs.push("./components/programsList.wxml:block:1:52")
cs.push("./components/programsList.wxml:view:1:140")
var tSB=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],oPB,cOB,gg)
cs.push("./components/programsList.wxml:view:1:240")
var eTB=_n('view')
_rz(z,eTB,'class',9,oPB,cOB,gg)
cs.push("./components/programsList.wxml:image:1:258")
var bUB=_mz(z,'image',['mode',10,'src',1],[],oPB,cOB,gg)
cs.pop()
_(eTB,bUB)
cs.push("./components/programsList.wxml:view:1:326")
var oVB=_n('view')
_rz(z,oVB,'class',12,oPB,cOB,gg)
cs.push("./components/programsList.wxml:view:1:348")
var xWB=_n('view')
_rz(z,xWB,'class',13,oPB,cOB,gg)
cs.pop()
_(oVB,xWB)
cs.pop()
_(eTB,oVB)
cs.pop()
_(tSB,eTB)
cs.push("./components/programsList.wxml:view:1:388")
var oXB=_n('view')
_rz(z,oXB,'class',14,oPB,cOB,gg)
cs.push("./components/programsList.wxml:view:1:410")
var fYB=_n('view')
_rz(z,fYB,'class',15,oPB,cOB,gg)
var cZB=_oz(z,16,oPB,cOB,gg)
_(fYB,cZB)
cs.pop()
_(oXB,fYB)
cs.push("./components/programsList.wxml:view:1:449")
var h1B=_n('view')
_rz(z,h1B,'class',17,oPB,cOB,gg)
var o2B=_oz(z,18,oPB,cOB,gg)
_(h1B,o2B)
cs.pop()
_(oXB,h1B)
cs.push("./components/programsList.wxml:view:1:494")
var c3B=_n('view')
_rz(z,c3B,'class',19,oPB,cOB,gg)
cs.push("./components/programsList.wxml:text:1:513")
var l5B=_n('text')
var a6B=_oz(z,20,oPB,cOB,gg)
_(l5B,a6B)
cs.pop()
_(c3B,l5B)
var o4B=_v()
_(c3B,o4B)
if(_oz(z,21,oPB,cOB,gg)){o4B.wxVkey=1
cs.push("./components/programsList.wxml:block:1:566")
cs.push("./components/programsList.wxml:text:1:610")
var t7B=_n('text')
_rz(z,t7B,'class',22,oPB,cOB,gg)
var e8B=_oz(z,23,oPB,cOB,gg)
_(t7B,e8B)
cs.pop()
_(o4B,t7B)
cs.pop()
}
o4B.wxXCkey=1
cs.pop()
_(oXB,c3B)
cs.pop()
_(tSB,oXB)
cs.pop()
_(lQB,tSB)
cs.pop()
return lQB
}
hMB.wxXCkey=2
_2z(z,4,oNB,e,s,gg,hMB,'item','index','index')
cs.pop()
cs.pop()
_(fKB,cLB)
cs.pop()
_(r,fKB)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
cs.push("./components/songList.wxml:view:1:1")
var o0B=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
var xAC=_v()
_(o0B,xAC)
cs.push("./components/songList.wxml:block:1:41")
var oBC=function(cDC,fCC,hEC,gg){
cs.push("./components/songList.wxml:block:1:41")
cs.push("./components/songList.wxml:view:1:131")
var cGC=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],cDC,fCC,gg)
cs.push("./components/songList.wxml:view:1:258")
var oHC=_n('view')
_rz(z,oHC,'class',9,cDC,fCC,gg)
var lIC=_oz(z,10,cDC,fCC,gg)
_(oHC,lIC)
cs.pop()
_(cGC,oHC)
cs.push("./components/songList.wxml:view:1:296")
var aJC=_n('view')
_rz(z,aJC,'class',11,cDC,fCC,gg)
cs.push("./components/songList.wxml:view:1:315")
var tKC=_n('view')
_rz(z,tKC,'class',12,cDC,fCC,gg)
var eLC=_oz(z,13,cDC,fCC,gg)
_(tKC,eLC)
cs.pop()
_(aJC,tKC)
var bMC=_v()
_(aJC,bMC)
cs.push("./components/songList.wxml:block:1:354")
var oNC=function(oPC,xOC,fQC,gg){
cs.push("./components/songList.wxml:block:1:354")
cs.push("./components/songList.wxml:text:1:434")
var hSC=_n('text')
_rz(z,hSC,'class',18,oPC,xOC,gg)
var oTC=_oz(z,19,oPC,xOC,gg)
_(hSC,oTC)
cs.pop()
_(fQC,hSC)
cs.pop()
return fQC
}
bMC.wxXCkey=2
_2z(z,16,oNC,cDC,fCC,gg,bMC,'childItem','i','i')
cs.pop()
cs.pop()
_(cGC,aJC)
cs.push("./components/songList.wxml:view:1:498")
var cUC=_n('view')
_rz(z,cUC,'class',20,cDC,fCC,gg)
cs.push("./components/songList.wxml:text:1:516")
var oVC=_n('text')
cs.pop()
_(cUC,oVC)
cs.push("./components/songList.wxml:text:1:529")
var lWC=_n('text')
cs.pop()
_(cUC,lWC)
cs.push("./components/songList.wxml:text:1:542")
var aXC=_n('text')
cs.pop()
_(cUC,aXC)
cs.pop()
_(cGC,cUC)
cs.pop()
_(hEC,cGC)
cs.pop()
return hEC
}
xAC.wxXCkey=2
_2z(z,4,oBC,e,s,gg,xAC,'item','index','index')
cs.pop()
cs.pop()
_(r,o0B)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var eZC=_v()
_(r,eZC)
if(_oz(z,1,e,s,gg)){eZC.wxVkey=1
cs.push("./pages/getPlaylistDetail/getPlaylistDetail.wxml:block:1:1")
cs.push("./pages/getPlaylistDetail/getPlaylistDetail.wxml:view:1:49")
var b1C=_mz(z,'view',['bind:__l',2,'style',1],[],e,s,gg)
cs.push("./pages/getPlaylistDetail/getPlaylistDetail.wxml:view:1:114")
var o2C=_n('view')
_rz(z,o2C,'style',4,e,s,gg)
cs.push("./pages/getPlaylistDetail/getPlaylistDetail.wxml:view:1:186")
var x3C=_n('view')
_rz(z,x3C,'class',5,e,s,gg)
cs.push("./pages/getPlaylistDetail/getPlaylistDetail.wxml:image:1:213")
var o4C=_mz(z,'image',['mode',6,'src',1],[],e,s,gg)
cs.pop()
_(x3C,o4C)
cs.pop()
_(o2C,x3C)
cs.push("./pages/getPlaylistDetail/getPlaylistDetail.wxml:view:1:285")
var f5C=_n('view')
_rz(z,f5C,'class',8,e,s,gg)
cs.push("./pages/getPlaylistDetail/getPlaylistDetail.wxml:view:1:312")
var c6C=_n('view')
_rz(z,c6C,'class',9,e,s,gg)
var h7C=_oz(z,10,e,s,gg)
_(c6C,h7C)
cs.pop()
_(f5C,c6C)
cs.push("./pages/getPlaylistDetail/getPlaylistDetail.wxml:view:1:355")
var o8C=_n('view')
_rz(z,o8C,'class',11,e,s,gg)
var c9C=_oz(z,12,e,s,gg)
_(o8C,c9C)
cs.pop()
_(f5C,o8C)
cs.pop()
_(o2C,f5C)
cs.pop()
_(b1C,o2C)
cs.push("./pages/getPlaylistDetail/getPlaylistDetail.wxml:view:1:426")
var o0C=_n('view')
_rz(z,o0C,'class',13,e,s,gg)
var lAD=_v()
_(o0C,lAD)
cs.push("./pages/getPlaylistDetail/getPlaylistDetail.wxml:block:1:451")
var aBD=function(eDD,tCD,bED,gg){
cs.push("./pages/getPlaylistDetail/getPlaylistDetail.wxml:block:1:451")
cs.push("./pages/getPlaylistDetail/getPlaylistDetail.wxml:view:1:542")
var xGD=_mz(z,'view',['bindtap',18,'class',1,'data-event-opts',2],[],eDD,tCD,gg)
cs.push("./pages/getPlaylistDetail/getPlaylistDetail.wxml:view:1:670")
var oHD=_n('view')
_rz(z,oHD,'class',21,eDD,tCD,gg)
var fID=_oz(z,22,eDD,tCD,gg)
_(oHD,fID)
cs.pop()
_(xGD,oHD)
cs.push("./pages/getPlaylistDetail/getPlaylistDetail.wxml:view:1:708")
var cJD=_n('view')
_rz(z,cJD,'class',23,eDD,tCD,gg)
cs.push("./pages/getPlaylistDetail/getPlaylistDetail.wxml:view:1:727")
var hKD=_n('view')
_rz(z,hKD,'class',24,eDD,tCD,gg)
var oLD=_oz(z,25,eDD,tCD,gg)
_(hKD,oLD)
cs.pop()
_(cJD,hKD)
var cMD=_v()
_(cJD,cMD)
cs.push("./pages/getPlaylistDetail/getPlaylistDetail.wxml:block:1:766")
var oND=function(aPD,lOD,tQD,gg){
cs.push("./pages/getPlaylistDetail/getPlaylistDetail.wxml:block:1:766")
cs.push("./pages/getPlaylistDetail/getPlaylistDetail.wxml:text:1:846")
var bSD=_n('text')
_rz(z,bSD,'class',30,aPD,lOD,gg)
var oTD=_oz(z,31,aPD,lOD,gg)
_(bSD,oTD)
cs.pop()
_(tQD,bSD)
cs.pop()
return tQD
}
cMD.wxXCkey=2
_2z(z,28,oND,eDD,tCD,gg,cMD,'childItem','i','i')
cs.pop()
cs.pop()
_(xGD,cJD)
cs.push("./pages/getPlaylistDetail/getPlaylistDetail.wxml:view:1:910")
var xUD=_n('view')
_rz(z,xUD,'class',32,eDD,tCD,gg)
cs.push("./pages/getPlaylistDetail/getPlaylistDetail.wxml:text:1:928")
var oVD=_n('text')
cs.pop()
_(xUD,oVD)
cs.push("./pages/getPlaylistDetail/getPlaylistDetail.wxml:text:1:941")
var fWD=_n('text')
cs.pop()
_(xUD,fWD)
cs.push("./pages/getPlaylistDetail/getPlaylistDetail.wxml:text:1:954")
var cXD=_n('text')
cs.pop()
_(xUD,cXD)
cs.pop()
_(xGD,xUD)
cs.pop()
_(bED,xGD)
cs.pop()
return bED
}
lAD.wxXCkey=2
_2z(z,16,aBD,e,s,gg,lAD,'item','index','index')
cs.pop()
cs.pop()
_(b1C,o0C)
cs.pop()
_(eZC,b1C)
cs.pop()
}
eZC.wxXCkey=1
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
cs.push("./pages/index/index.wxml:view:1:1")
var oZD=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/index/index.wxml:view:1:40")
var c1D=_n('view')
_rz(z,c1D,'class',2,e,s,gg)
cs.push("./pages/index/index.wxml:swiper:1:72")
var o2D=_mz(z,'swiper',['autoplay',3,'circular',1,'class',2,'duration',3,'indicatorActiveColor',4,'indicatorDots',5,'interval',6,'nextMargin',7,'previousMargin',8],[],e,s,gg)
var l3D=_v()
_(o2D,l3D)
cs.push("./pages/index/index.wxml:block:1:408")
var a4D=function(e6D,t5D,b7D,gg){
cs.push("./pages/index/index.wxml:block:1:408")
cs.push("./pages/index/index.wxml:swiper-item:1:495")
var x9D=_mz(z,'swiper-item',['bindtap',16,'class',1,'data-event-opts',2],[],e6D,t5D,gg)
cs.push("./pages/index/index.wxml:image:1:608")
var o0D=_mz(z,'image',['class',19,'mode',1,'src',2],[],e6D,t5D,gg)
cs.pop()
_(x9D,o0D)
cs.pop()
_(b7D,x9D)
cs.pop()
return b7D
}
l3D.wxXCkey=2
_2z(z,14,a4D,e,s,gg,l3D,'item','index','index')
cs.pop()
cs.pop()
_(c1D,o2D)
cs.pop()
_(oZD,c1D)
cs.push("./pages/index/index.wxml:view:1:736")
var fAE=_mz(z,'view',['bindtap',22,'class',1,'data-event-opts',2],[],e,s,gg)
cs.push("./pages/index/index.wxml:text:1:840")
var cBE=_n('text')
_rz(z,cBE,'class',25,e,s,gg)
var hCE=_oz(z,26,e,s,gg)
_(cBE,hCE)
cs.pop()
_(fAE,cBE)
var oDE=_oz(z,27,e,s,gg)
_(fAE,oDE)
cs.pop()
_(oZD,fAE)
cs.push("./pages/index/index.wxml:scroll-view:1:902")
var cEE=_mz(z,'scroll-view',['scrollX',-1,'class',28],[],e,s,gg)
cs.push("./pages/index/index.wxml:view:1:952")
var oFE=_n('view')
_rz(z,oFE,'style',29,e,s,gg)
var lGE=_v()
_(oFE,lGE)
cs.push("./pages/index/index.wxml:block:1:999")
var aHE=function(eJE,tIE,bKE,gg){
cs.push("./pages/index/index.wxml:block:1:999")
var xME=_v()
_(bKE,xME)
if(_oz(z,34,eJE,tIE,gg)){xME.wxVkey=1
cs.push("./pages/index/index.wxml:block:1:1091")
cs.push("./pages/index/index.wxml:view:1:1120")
var oNE=_mz(z,'view',['bindtap',35,'class',1,'data-event-opts',2],[],eJE,tIE,gg)
cs.push("./pages/index/index.wxml:image:1:1251")
var fOE=_mz(z,'image',['class',38,'mode',1,'src',2],[],eJE,tIE,gg)
cs.pop()
_(oNE,fOE)
cs.push("./pages/index/index.wxml:text:1:1341")
var cPE=_n('text')
_rz(z,cPE,'class',41,eJE,tIE,gg)
var hQE=_oz(z,42,eJE,tIE,gg)
_(cPE,hQE)
cs.pop()
_(oNE,cPE)
cs.pop()
_(xME,oNE)
cs.pop()
}
xME.wxXCkey=1
cs.pop()
return bKE
}
lGE.wxXCkey=2
_2z(z,32,aHE,e,s,gg,lGE,'item','index','index')
cs.pop()
cs.pop()
_(cEE,oFE)
cs.pop()
_(oZD,cEE)
cs.push("./pages/index/index.wxml:view:1:1444")
var oRE=_n('view')
_rz(z,oRE,'class',43,e,s,gg)
cs.push("./pages/index/index.wxml:text:1:1475")
var cSE=_n('text')
_rz(z,cSE,'class',44,e,s,gg)
var oTE=_oz(z,45,e,s,gg)
_(cSE,oTE)
cs.pop()
_(oRE,cSE)
var lUE=_oz(z,46,e,s,gg)
_(oRE,lUE)
cs.pop()
_(oZD,oRE)
cs.push("./pages/index/index.wxml:scroll-view:1:1533")
var aVE=_mz(z,'scroll-view',['scrollX',-1,'class',47],[],e,s,gg)
cs.push("./pages/index/index.wxml:view:1:1578")
var tWE=_n('view')
_rz(z,tWE,'style',48,e,s,gg)
var eXE=_v()
_(tWE,eXE)
cs.push("./pages/index/index.wxml:block:1:1625")
var bYE=function(x1E,oZE,o2E,gg){
cs.push("./pages/index/index.wxml:block:1:1625")
cs.push("./pages/index/index.wxml:view:1:1711")
var c4E=_mz(z,'view',['bindtap',53,'class',1,'data-event-opts',2],[],x1E,oZE,gg)
cs.push("./pages/index/index.wxml:image:1:1827")
var h5E=_mz(z,'image',['class',56,'mode',1,'src',2],[],x1E,oZE,gg)
cs.pop()
_(c4E,h5E)
cs.push("./pages/index/index.wxml:text:1:1911")
var o6E=_n('text')
_rz(z,o6E,'class',59,x1E,oZE,gg)
var c7E=_oz(z,60,x1E,oZE,gg)
_(o6E,c7E)
cs.pop()
_(c4E,o6E)
cs.push("./pages/index/index.wxml:view:1:1970")
var o8E=_n('view')
_rz(z,o8E,'class',61,x1E,oZE,gg)
cs.push("./pages/index/index.wxml:view:1:1992")
var l9E=_n('view')
_rz(z,l9E,'class',62,x1E,oZE,gg)
cs.pop()
_(o8E,l9E)
cs.pop()
_(c4E,o8E)
cs.pop()
_(o2E,c4E)
cs.pop()
return o2E
}
eXE.wxXCkey=2
_2z(z,51,bYE,e,s,gg,eXE,'item','__i0__','index')
cs.pop()
cs.pop()
_(aVE,tWE)
cs.pop()
_(oZD,aVE)
cs.push("./pages/index/index.wxml:view:1:2061")
var a0E=_n('view')
_rz(z,a0E,'class',63,e,s,gg)
cs.push("./pages/index/index.wxml:text:1:2092")
var tAF=_n('text')
_rz(z,tAF,'class',64,e,s,gg)
var eBF=_oz(z,65,e,s,gg)
_(tAF,eBF)
cs.pop()
_(a0E,tAF)
var bCF=_oz(z,66,e,s,gg)
_(a0E,bCF)
cs.pop()
_(oZD,a0E)
cs.push("./pages/index/index.wxml:scroll-view:1:2151")
var oDF=_mz(z,'scroll-view',['scrollX',-1,'class',67],[],e,s,gg)
cs.push("./pages/index/index.wxml:view:1:2198")
var xEF=_n('view')
_rz(z,xEF,'style',68,e,s,gg)
var oFF=_v()
_(xEF,oFF)
cs.push("./pages/index/index.wxml:block:1:2245")
var fGF=function(hIF,cHF,oJF,gg){
cs.push("./pages/index/index.wxml:block:1:2245")
var oLF=_v()
_(oJF,oLF)
if(_oz(z,73,hIF,cHF,gg)){oLF.wxVkey=1
cs.push("./pages/index/index.wxml:block:1:2338")
cs.push("./pages/index/index.wxml:view:1:2367")
var lMF=_mz(z,'view',['bindtap',74,'class',1,'data-event-opts',2],[],hIF,cHF,gg)
cs.push("./pages/index/index.wxml:image:1:2471")
var aNF=_mz(z,'image',['class',77,'mode',1,'src',2],[],hIF,cHF,gg)
cs.pop()
_(lMF,aNF)
cs.push("./pages/index/index.wxml:text:1:2556")
var tOF=_n('text')
_rz(z,tOF,'class',80,hIF,cHF,gg)
var ePF=_oz(z,81,hIF,cHF,gg)
_(tOF,ePF)
cs.pop()
_(lMF,tOF)
cs.pop()
_(oLF,lMF)
cs.pop()
}
oLF.wxXCkey=1
cs.pop()
return oJF
}
oFF.wxXCkey=2
_2z(z,71,fGF,e,s,gg,oFF,'item','index','index')
cs.pop()
cs.pop()
_(oDF,xEF)
cs.pop()
_(oZD,oDF)
cs.push("./pages/index/index.wxml:view:1:2651")
var bQF=_n('view')
_rz(z,bQF,'class',82,e,s,gg)
cs.push("./pages/index/index.wxml:text:1:2682")
var oRF=_n('text')
_rz(z,oRF,'class',83,e,s,gg)
var xSF=_oz(z,84,e,s,gg)
_(oRF,xSF)
cs.pop()
_(bQF,oRF)
var oTF=_oz(z,85,e,s,gg)
_(bQF,oTF)
cs.pop()
_(oZD,bQF)
cs.push("./pages/index/index.wxml:programs-list:1:2744")
var fUF=_n('programs-list')
_rz(z,fUF,'programsList',86,e,s,gg)
cs.pop()
_(oZD,fUF)
cs.pop()
_(r,oZD)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
cs.push("./pages/mv/mv.wxml:view:1:1")
var hWF=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/mv/mv.wxml:view:1:40")
var oXF=_n('view')
_rz(z,oXF,'class',2,e,s,gg)
cs.push("./pages/mv/mv.wxml:view:1:63")
var cYF=_n('view')
_rz(z,cYF,'class',3,e,s,gg)
cs.push("./pages/mv/mv.wxml:text:1:92")
var oZF=_mz(z,'text',['bindtap',4,'class',1,'data-event-opts',2],[],e,s,gg)
var l1F=_oz(z,7,e,s,gg)
_(oZF,l1F)
cs.pop()
_(cYF,oZF)
cs.push("./pages/mv/mv.wxml:text:1:256")
var a2F=_mz(z,'text',['bindtap',8,'class',1,'data-event-opts',2],[],e,s,gg)
var t3F=_oz(z,11,e,s,gg)
_(a2F,t3F)
cs.pop()
_(cYF,a2F)
cs.push("./pages/mv/mv.wxml:text:1:420")
var e4F=_mz(z,'text',['bindtap',12,'class',1,'data-event-opts',2],[],e,s,gg)
var b5F=_oz(z,15,e,s,gg)
_(e4F,b5F)
cs.pop()
_(cYF,e4F)
cs.pop()
_(oXF,cYF)
cs.push("./pages/mv/mv.wxml:view:1:591")
var o6F=_n('view')
_rz(z,o6F,'class',16,e,s,gg)
var x7F=_v()
_(o6F,x7F)
if(_oz(z,17,e,s,gg)){x7F.wxVkey=1
cs.push("./pages/mv/mv.wxml:block:1:621")
cs.push("./pages/mv/mv.wxml:view:1:650")
var c0F=_n('view')
_rz(z,c0F,'class',18,e,s,gg)
cs.push("./pages/mv/mv.wxml:mv-list-t:1:680")
var hAG=_mz(z,'mv-list-t',['data',19,'style',1],[],e,s,gg)
cs.pop()
_(c0F,hAG)
cs.pop()
_(x7F,c0F)
cs.pop()
}
var o8F=_v()
_(o6F,o8F)
if(_oz(z,21,e,s,gg)){o8F.wxVkey=1
cs.push("./pages/mv/mv.wxml:block:1:761")
cs.push("./pages/mv/mv.wxml:view:1:790")
var oBG=_n('view')
_rz(z,oBG,'class',22,e,s,gg)
cs.push("./pages/mv/mv.wxml:mv-list-t:1:820")
var cCG=_mz(z,'mv-list-t',['data',23,'style',1],[],e,s,gg)
cs.pop()
_(oBG,cCG)
cs.pop()
_(o8F,oBG)
cs.pop()
}
var f9F=_v()
_(o6F,f9F)
if(_oz(z,25,e,s,gg)){f9F.wxVkey=1
cs.push("./pages/mv/mv.wxml:block:1:899")
cs.push("./pages/mv/mv.wxml:view:1:928")
var oDG=_n('view')
_rz(z,oDG,'class',26,e,s,gg)
cs.push("./pages/mv/mv.wxml:mv-list-t:1:958")
var lEG=_mz(z,'mv-list-t',['data',27,'style',1],[],e,s,gg)
cs.pop()
_(oDG,lEG)
cs.pop()
_(f9F,oDG)
cs.pop()
}
x7F.wxXCkey=1
x7F.wxXCkey=3
o8F.wxXCkey=1
o8F.wxXCkey=3
f9F.wxXCkey=1
f9F.wxXCkey=3
cs.pop()
_(oXF,o6F)
cs.pop()
_(hWF,oXF)
cs.pop()
_(r,hWF)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var tGG=_v()
_(r,tGG)
if(_oz(z,1,e,s,gg)){tGG.wxVkey=1
cs.push("./pages/mvDetail/mvDetail.wxml:block:1:1")
cs.push("./pages/mvDetail/mvDetail.wxml:view:1:49")
var eHG=_n('view')
_rz(z,eHG,'bind:__l',2,e,s,gg)
cs.push("./pages/mvDetail/mvDetail.wxml:view:1:70")
var bIG=_n('view')
_rz(z,bIG,'class',3,e,s,gg)
cs.push("./pages/mvDetail/mvDetail.wxml:video:1:90")
var oJG=_mz(z,'video',['controls',-1,'binderror',4,'data-event-opts',1,'id',2,'poster',3,'src',4],[],e,s,gg)
cs.pop()
_(bIG,oJG)
cs.pop()
_(eHG,bIG)
cs.push("./pages/mvDetail/mvDetail.wxml:view:1:264")
var xKG=_n('view')
_rz(z,xKG,'class',9,e,s,gg)
cs.push("./pages/mvDetail/mvDetail.wxml:view:1:289")
var oLG=_n('view')
_rz(z,oLG,'class',10,e,s,gg)
cs.push("./pages/mvDetail/mvDetail.wxml:view:1:313")
var fMG=_n('view')
_rz(z,fMG,'class',11,e,s,gg)
var cNG=_oz(z,12,e,s,gg)
_(fMG,cNG)
cs.pop()
_(oLG,fMG)
cs.push("./pages/mvDetail/mvDetail.wxml:view:1:356")
var hOG=_n('view')
_rz(z,hOG,'class',13,e,s,gg)
cs.push("./pages/mvDetail/mvDetail.wxml:text:1:375")
var oPG=_n('text')
var cQG=_oz(z,14,e,s,gg)
_(oPG,cQG)
cs.pop()
_(hOG,oPG)
cs.push("./pages/mvDetail/mvDetail.wxml:text:1:424")
var oRG=_n('text')
_rz(z,oRG,'class',15,e,s,gg)
var lSG=_oz(z,16,e,s,gg)
_(oRG,lSG)
cs.pop()
_(hOG,oRG)
cs.pop()
_(oLG,hOG)
cs.push("./pages/mvDetail/mvDetail.wxml:view:1:498")
var aTG=_n('view')
_rz(z,aTG,'class',17,e,s,gg)
var tUG=_oz(z,18,e,s,gg)
_(aTG,tUG)
cs.pop()
_(oLG,aTG)
cs.pop()
_(xKG,oLG)
cs.push("./pages/mvDetail/mvDetail.wxml:view:1:548")
var eVG=_n('view')
_rz(z,eVG,'class',19,e,s,gg)
cs.push("./pages/mvDetail/mvDetail.wxml:text:1:579")
var bWG=_n('text')
_rz(z,bWG,'class',20,e,s,gg)
var oXG=_oz(z,21,e,s,gg)
_(bWG,oXG)
cs.pop()
_(eVG,bWG)
var xYG=_oz(z,22,e,s,gg)
_(eVG,xYG)
cs.pop()
_(xKG,eVG)
cs.push("./pages/mvDetail/mvDetail.wxml:view:1:637")
var oZG=_n('view')
_rz(z,oZG,'class',23,e,s,gg)
var f1G=_v()
_(oZG,f1G)
cs.push("./pages/mvDetail/mvDetail.wxml:block:1:662")
var c2G=function(o4G,h3G,c5G,gg){
cs.push("./pages/mvDetail/mvDetail.wxml:block:1:662")
cs.push("./pages/mvDetail/mvDetail.wxml:view:1:746")
var l7G=_mz(z,'view',['bindtap',28,'class',1,'data-event-opts',2],[],o4G,h3G,gg)
cs.push("./pages/mvDetail/mvDetail.wxml:view:1:872")
var a8G=_n('view')
_rz(z,a8G,'class',31,o4G,h3G,gg)
cs.push("./pages/mvDetail/mvDetail.wxml:image:1:890")
var t9G=_mz(z,'image',['mode',32,'src',1],[],o4G,h3G,gg)
cs.pop()
_(a8G,t9G)
cs.pop()
_(l7G,a8G)
cs.push("./pages/mvDetail/mvDetail.wxml:view:1:951")
var e0G=_n('view')
_rz(z,e0G,'class',34,o4G,h3G,gg)
cs.push("./pages/mvDetail/mvDetail.wxml:view:1:970")
var bAH=_n('view')
_rz(z,bAH,'class',35,o4G,h3G,gg)
var oBH=_oz(z,36,o4G,h3G,gg)
_(bAH,oBH)
cs.pop()
_(e0G,bAH)
cs.push("./pages/mvDetail/mvDetail.wxml:view:1:1009")
var xCH=_n('view')
_rz(z,xCH,'class',37,o4G,h3G,gg)
var oDH=_oz(z,38,o4G,h3G,gg)
_(xCH,oDH)
cs.pop()
_(e0G,xCH)
cs.pop()
_(l7G,e0G)
cs.push("./pages/mvDetail/mvDetail.wxml:view:1:1067")
var fEH=_n('view')
_rz(z,fEH,'class',39,o4G,h3G,gg)
cs.push("./pages/mvDetail/mvDetail.wxml:text:1:1085")
var cFH=_n('text')
cs.pop()
_(fEH,cFH)
cs.push("./pages/mvDetail/mvDetail.wxml:text:1:1098")
var hGH=_n('text')
cs.pop()
_(fEH,hGH)
cs.push("./pages/mvDetail/mvDetail.wxml:text:1:1111")
var oHH=_n('text')
cs.pop()
_(fEH,oHH)
cs.pop()
_(l7G,fEH)
cs.pop()
_(c5G,l7G)
cs.pop()
return c5G
}
f1G.wxXCkey=2
_2z(z,26,c2G,e,s,gg,f1G,'item','__i0__','id')
cs.pop()
cs.pop()
_(xKG,oZG)
cs.pop()
_(eHG,xKG)
cs.pop()
_(tGG,eHG)
cs.pop()
}
tGG.wxXCkey=1
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var oJH=_v()
_(r,oJH)
if(_oz(z,1,e,s,gg)){oJH.wxVkey=1
cs.push("./pages/personalizedList/personalizedList.wxml:block:1:1")
cs.push("./pages/personalizedList/personalizedList.wxml:view:1:57")
var lKH=_mz(z,'view',['bind:__l',2,'style',1],[],e,s,gg)
cs.push("./pages/personalizedList/personalizedList.wxml:view:1:100")
var aLH=_n('view')
_rz(z,aLH,'style',4,e,s,gg)
var tMH=_v()
_(aLH,tMH)
cs.push("./pages/personalizedList/personalizedList.wxml:block:1:191")
var eNH=function(oPH,bOH,xQH,gg){
cs.push("./pages/personalizedList/personalizedList.wxml:block:1:191")
cs.push("./pages/personalizedList/personalizedList.wxml:view:1:280")
var fSH=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2],[],oPH,bOH,gg)
cs.push("./pages/personalizedList/personalizedList.wxml:image:1:424")
var cTH=_mz(z,'image',['class',12,'mode',1,'src',2],[],oPH,bOH,gg)
cs.pop()
_(fSH,cTH)
cs.push("./pages/personalizedList/personalizedList.wxml:text:1:499")
var hUH=_n('text')
_rz(z,hUH,'class',15,oPH,bOH,gg)
var oVH=_oz(z,16,oPH,bOH,gg)
_(hUH,oVH)
cs.pop()
_(fSH,hUH)
cs.pop()
_(xQH,fSH)
cs.pop()
return xQH
}
tMH.wxXCkey=2
_2z(z,7,eNH,e,s,gg,tMH,'item','index','id')
cs.pop()
cs.pop()
_(lKH,aLH)
cs.pop()
_(oJH,lKH)
cs.pop()
}
oJH.wxXCkey=1
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var oXH=_v()
_(r,oXH)
if(_oz(z,1,e,s,gg)){oXH.wxVkey=1
cs.push("./pages/play/play.wxml:block:1:1")
cs.push("./pages/play/play.wxml:view:1:57")
var lYH=_mz(z,'view',['bind:__l',2,'class',1],[],e,s,gg)
cs.push("./pages/play/play.wxml:view:1:99")
var aZH=_n('view')
_rz(z,aZH,'class',4,e,s,gg)
var t1H=_oz(z,5,e,s,gg)
_(aZH,t1H)
cs.pop()
_(lYH,aZH)
cs.push("./pages/play/play.wxml:view:1:151")
var e2H=_n('view')
_rz(z,e2H,'class',6,e,s,gg)
var b3H=_oz(z,7,e,s,gg)
_(e2H,b3H)
cs.pop()
_(lYH,e2H)
cs.push("./pages/play/play.wxml:view:1:207")
var o4H=_n('view')
_rz(z,o4H,'class',8,e,s,gg)
cs.push("./pages/play/play.wxml:image:1:231")
var x5H=_n('image')
_rz(z,x5H,'src',9,e,s,gg)
cs.pop()
_(o4H,x5H)
cs.pop()
_(lYH,o4H)
cs.push("./pages/play/play.wxml:view:1:282")
var o6H=_n('view')
_rz(z,o6H,'class',10,e,s,gg)
cs.push("./pages/play/play.wxml:view:1:309")
var f7H=_n('view')
_rz(z,f7H,'class',11,e,s,gg)
cs.push("./pages/play/play.wxml:view:1:328")
var c8H=_n('view')
_rz(z,c8H,'class',12,e,s,gg)
var h9H=_oz(z,13,e,s,gg)
_(c8H,h9H)
cs.pop()
_(f7H,c8H)
cs.push("./pages/play/play.wxml:view:1:379")
var o0H=_n('view')
_rz(z,o0H,'class',14,e,s,gg)
var cAI=_oz(z,15,e,s,gg)
_(o0H,cAI)
cs.pop()
_(f7H,o0H)
cs.pop()
_(o6H,f7H)
cs.push("./pages/play/play.wxml:slider:1:434")
var oBI=_mz(z,'slider',['activeColor',16,'bindchanging',1,'blockSize',2,'data-event-opts',3,'max',4,'min',5,'step',6,'value',7],[],e,s,gg)
cs.pop()
_(o6H,oBI)
cs.push("./pages/play/play.wxml:view:1:658")
var lCI=_n('view')
_rz(z,lCI,'class',24,e,s,gg)
cs.push("./pages/play/play.wxml:view:1:683")
var eFI=_n('view')
_rz(z,eFI,'class',25,e,s,gg)
cs.push("./pages/play/play.wxml:image:1:706")
var bGI=_mz(z,'image',['mode',-1,'src',26],[],e,s,gg)
cs.pop()
_(eFI,bGI)
cs.pop()
_(lCI,eFI)
var aDI=_v()
_(lCI,aDI)
if(_oz(z,27,e,s,gg)){aDI.wxVkey=1
cs.push("./pages/play/play.wxml:block:1:768")
cs.push("./pages/play/play.wxml:view:1:794")
var oHI=_mz(z,'view',['bindtap',28,'class',1,'data-event-opts',2],[],e,s,gg)
cs.push("./pages/play/play.wxml:image:1:877")
var xII=_mz(z,'image',['mode',-1,'src',31],[],e,s,gg)
cs.pop()
_(oHI,xII)
cs.pop()
_(aDI,oHI)
cs.pop()
}
var tEI=_v()
_(lCI,tEI)
if(_oz(z,32,e,s,gg)){tEI.wxVkey=1
cs.push("./pages/play/play.wxml:block:1:948")
cs.push("./pages/play/play.wxml:view:1:975")
var oJI=_mz(z,'view',['bindtap',33,'class',1,'data-event-opts',2],[],e,s,gg)
cs.push("./pages/play/play.wxml:image:1:1062")
var fKI=_mz(z,'image',['mode',-1,'src',36],[],e,s,gg)
cs.pop()
_(oJI,fKI)
cs.pop()
_(tEI,oJI)
cs.pop()
}
cs.push("./pages/play/play.wxml:view:1:1133")
var cLI=_n('view')
_rz(z,cLI,'class',37,e,s,gg)
cs.push("./pages/play/play.wxml:image:1:1156")
var hMI=_mz(z,'image',['mode',-1,'src',38],[],e,s,gg)
cs.pop()
_(cLI,hMI)
cs.pop()
_(lCI,cLI)
aDI.wxXCkey=1
tEI.wxXCkey=1
cs.pop()
_(o6H,lCI)
cs.pop()
_(lYH,o6H)
cs.pop()
_(oXH,lYH)
cs.pop()
}
oXH.wxXCkey=1
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
cs.push("./pages/ranking/ranking.wxml:view:1:1")
var cOI=_mz(z,'view',['bind:__l',0,'style',1],[],e,s,gg)
cs.push("./pages/ranking/ranking.wxml:view:1:44")
var oPI=_n('view')
_rz(z,oPI,'style',2,e,s,gg)
var lQI=_v()
_(oPI,lQI)
cs.push("./pages/ranking/ranking.wxml:block:1:135")
var aRI=function(eTI,tSI,bUI,gg){
cs.push("./pages/ranking/ranking.wxml:block:1:135")
cs.push("./pages/ranking/ranking.wxml:view:1:222")
var xWI=_mz(z,'view',['bindtap',7,'class',1,'data-event-opts',2],[],eTI,tSI,gg)
cs.push("./pages/ranking/ranking.wxml:image:1:315")
var oXI=_mz(z,'image',['class',10,'mode',1,'src',2],[],eTI,tSI,gg)
cs.pop()
_(xWI,oXI)
cs.push("./pages/ranking/ranking.wxml:view:1:390")
var fYI=_n('view')
_rz(z,fYI,'class',13,eTI,tSI,gg)
var cZI=_oz(z,14,eTI,tSI,gg)
_(fYI,cZI)
cs.pop()
_(xWI,fYI)
cs.pop()
_(bUI,xWI)
cs.pop()
return bUI
}
lQI.wxXCkey=2
_2z(z,5,aRI,e,s,gg,lQI,'item','index','index')
cs.pop()
cs.pop()
_(cOI,oPI)
cs.pop()
_(r,cOI)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var o2I=_v()
_(r,o2I)
if(_oz(z,1,e,s,gg)){o2I.wxVkey=1
cs.push("./pages/rankingList/rankingList.wxml:block:1:1")
cs.push("./pages/rankingList/rankingList.wxml:view:1:49")
var c3I=_mz(z,'view',['bind:__l',2,'style',1],[],e,s,gg)
cs.push("./pages/rankingList/rankingList.wxml:view:1:114")
var o4I=_n('view')
_rz(z,o4I,'style',4,e,s,gg)
cs.push("./pages/rankingList/rankingList.wxml:view:1:186")
var l5I=_n('view')
_rz(z,l5I,'class',5,e,s,gg)
cs.push("./pages/rankingList/rankingList.wxml:image:1:213")
var a6I=_mz(z,'image',['mode',6,'src',1],[],e,s,gg)
cs.pop()
_(l5I,a6I)
cs.pop()
_(o4I,l5I)
cs.push("./pages/rankingList/rankingList.wxml:view:1:285")
var t7I=_n('view')
_rz(z,t7I,'class',8,e,s,gg)
cs.push("./pages/rankingList/rankingList.wxml:view:1:312")
var e8I=_n('view')
_rz(z,e8I,'class',9,e,s,gg)
var b9I=_oz(z,10,e,s,gg)
_(e8I,b9I)
cs.pop()
_(t7I,e8I)
cs.push("./pages/rankingList/rankingList.wxml:view:1:355")
var o0I=_n('view')
_rz(z,o0I,'class',11,e,s,gg)
var xAJ=_oz(z,12,e,s,gg)
_(o0I,xAJ)
cs.pop()
_(t7I,o0I)
cs.pop()
_(o4I,t7I)
cs.pop()
_(c3I,o4I)
cs.push("./pages/rankingList/rankingList.wxml:view:1:426")
var oBJ=_n('view')
_rz(z,oBJ,'class',13,e,s,gg)
var fCJ=_v()
_(oBJ,fCJ)
cs.push("./pages/rankingList/rankingList.wxml:block:1:451")
var cDJ=function(oFJ,hEJ,cGJ,gg){
cs.push("./pages/rankingList/rankingList.wxml:block:1:451")
cs.push("./pages/rankingList/rankingList.wxml:view:1:542")
var lIJ=_mz(z,'view',['bindtap',18,'class',1,'data-event-opts',2],[],oFJ,hEJ,gg)
cs.push("./pages/rankingList/rankingList.wxml:view:1:642")
var aJJ=_n('view')
_rz(z,aJJ,'class',21,oFJ,hEJ,gg)
var tKJ=_oz(z,22,oFJ,hEJ,gg)
_(aJJ,tKJ)
cs.pop()
_(lIJ,aJJ)
cs.push("./pages/rankingList/rankingList.wxml:view:1:680")
var eLJ=_n('view')
_rz(z,eLJ,'class',23,oFJ,hEJ,gg)
cs.push("./pages/rankingList/rankingList.wxml:view:1:699")
var bMJ=_n('view')
_rz(z,bMJ,'class',24,oFJ,hEJ,gg)
var oNJ=_oz(z,25,oFJ,hEJ,gg)
_(bMJ,oNJ)
cs.pop()
_(eLJ,bMJ)
var xOJ=_v()
_(eLJ,xOJ)
cs.push("./pages/rankingList/rankingList.wxml:block:1:738")
var oPJ=function(cRJ,fQJ,hSJ,gg){
cs.push("./pages/rankingList/rankingList.wxml:block:1:738")
cs.push("./pages/rankingList/rankingList.wxml:text:1:818")
var cUJ=_n('text')
_rz(z,cUJ,'class',30,cRJ,fQJ,gg)
var oVJ=_oz(z,31,cRJ,fQJ,gg)
_(cUJ,oVJ)
cs.pop()
_(hSJ,cUJ)
cs.pop()
return hSJ
}
xOJ.wxXCkey=2
_2z(z,28,oPJ,oFJ,hEJ,gg,xOJ,'childItem','i','i')
cs.pop()
cs.pop()
_(lIJ,eLJ)
cs.push("./pages/rankingList/rankingList.wxml:view:1:882")
var lWJ=_n('view')
_rz(z,lWJ,'class',32,oFJ,hEJ,gg)
cs.push("./pages/rankingList/rankingList.wxml:text:1:900")
var aXJ=_n('text')
cs.pop()
_(lWJ,aXJ)
cs.push("./pages/rankingList/rankingList.wxml:text:1:913")
var tYJ=_n('text')
cs.pop()
_(lWJ,tYJ)
cs.push("./pages/rankingList/rankingList.wxml:text:1:926")
var eZJ=_n('text')
cs.pop()
_(lWJ,eZJ)
cs.pop()
_(lIJ,lWJ)
cs.pop()
_(cGJ,lIJ)
cs.pop()
return cGJ
}
fCJ.wxXCkey=2
_2z(z,16,cDJ,e,s,gg,fCJ,'item','index','index')
cs.pop()
cs.pop()
_(c3I,oBJ)
cs.pop()
_(o2I,c3I)
cs.pop()
}
o2I.wxXCkey=1
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
cs.push("./pages/singerInfo/singerInfo.wxml:view:1:1")
var o2J=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/singerInfo/singerInfo.wxml:view:1:52")
var x3J=_n('view')
_rz(z,x3J,'class',2,e,s,gg)
cs.push("./pages/singerInfo/singerInfo.wxml:image:1:72")
var o4J=_mz(z,'image',['mode',-1,'src',3],[],e,s,gg)
cs.pop()
_(x3J,o4J)
cs.push("./pages/singerInfo/singerInfo.wxml:view:1:120")
var f5J=_n('view')
_rz(z,f5J,'class',4,e,s,gg)
var c6J=_oz(z,5,e,s,gg)
_(f5J,c6J)
cs.pop()
_(x3J,f5J)
cs.pop()
_(o2J,x3J)
cs.push("./pages/singerInfo/singerInfo.wxml:view:1:172")
var h7J=_n('view')
_rz(z,h7J,'class',6,e,s,gg)
cs.push("./pages/singerInfo/singerInfo.wxml:view:1:190")
var o8J=_n('view')
_rz(z,o8J,'class',7,e,s,gg)
cs.push("./pages/singerInfo/singerInfo.wxml:view:1:214")
var c9J=_mz(z,'view',['bindtap',8,'class',1,'data-event-opts',2],[],e,s,gg)
var o0J=_oz(z,11,e,s,gg)
_(c9J,o0J)
cs.pop()
_(o8J,c9J)
cs.push("./pages/singerInfo/singerInfo.wxml:view:1:342")
var lAK=_mz(z,'view',['bindtap',12,'class',1,'data-event-opts',2],[],e,s,gg)
var aBK=_oz(z,15,e,s,gg)
_(lAK,aBK)
cs.pop()
_(o8J,lAK)
cs.push("./pages/singerInfo/singerInfo.wxml:view:1:470")
var tCK=_mz(z,'view',['bindtap',16,'class',1,'data-event-opts',2],[],e,s,gg)
var eDK=_oz(z,19,e,s,gg)
_(tCK,eDK)
cs.pop()
_(o8J,tCK)
cs.pop()
_(h7J,o8J)
cs.push("./pages/singerInfo/singerInfo.wxml:view:1:601")
var bEK=_n('view')
_rz(z,bEK,'class',20,e,s,gg)
var oFK=_v()
_(bEK,oFK)
if(_oz(z,21,e,s,gg)){oFK.wxVkey=1
cs.push("./pages/singerInfo/singerInfo.wxml:block:1:627")
cs.push("./pages/singerInfo/singerInfo.wxml:view:1:656")
var fIK=_n('view')
_rz(z,fIK,'class',22,e,s,gg)
cs.push("./pages/singerInfo/singerInfo.wxml:view:1:675")
var cJK=_n('view')
_rz(z,cJK,'class',23,e,s,gg)
var hKK=_oz(z,24,e,s,gg)
_(cJK,hKK)
cs.pop()
_(fIK,cJK)
cs.pop()
_(oFK,fIK)
cs.pop()
}
var xGK=_v()
_(bEK,xGK)
if(_oz(z,25,e,s,gg)){xGK.wxVkey=1
cs.push("./pages/singerInfo/singerInfo.wxml:block:1:746")
cs.push("./pages/singerInfo/singerInfo.wxml:view:1:775")
var oLK=_n('view')
_rz(z,oLK,'class',26,e,s,gg)
cs.push("./pages/singerInfo/singerInfo.wxml:song-list:1:794")
var cMK=_mz(z,'song-list',['singerHotSongs',27,'style',1],[],e,s,gg)
cs.pop()
_(oLK,cMK)
cs.pop()
_(xGK,oLK)
cs.pop()
}
var oHK=_v()
_(bEK,oHK)
if(_oz(z,29,e,s,gg)){oHK.wxVkey=1
cs.push("./pages/singerInfo/singerInfo.wxml:block:1:888")
cs.push("./pages/singerInfo/singerInfo.wxml:view:1:917")
var oNK=_n('view')
_rz(z,oNK,'class',30,e,s,gg)
cs.push("./pages/singerInfo/singerInfo.wxml:mv-list:1:936")
var lOK=_mz(z,'mv-list',['singerMvs',31,'style',1],[],e,s,gg)
cs.pop()
_(oNK,lOK)
cs.pop()
_(oHK,oNK)
cs.pop()
}
oFK.wxXCkey=1
xGK.wxXCkey=1
xGK.wxXCkey=3
oHK.wxXCkey=1
oHK.wxXCkey=3
cs.pop()
_(h7J,bEK)
cs.pop()
_(o2J,h7J)
cs.pop()
_(r,o2J)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],[".",[1],"playBtn { position: absolute; z-index: 99; left: ",[0,30],"; top: ",[0,30],"; width: ",[0,80],"; height: ",[0,80],"; background: rgba(255, 255, 255, 0.8); border-radius: 50%; }\n.",[1],"playBtn .",[1],"icon { margin: ",[0,26]," ",[0,0]," ",[0,0]," ",[0,30],"; width: 0; height: 0; border-top: ",[0,14]," solid transparent; border-bottom: ",[0,14]," solid transparent; border-left: ",[0,28]," solid #e91e63; border-radius: ",[0,5],"; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/mvList.wxss']=setCssToHead([".",[1],"simiMvList { margin-left: ",[0,20],"; margin-right: ",[0,20],"; }\n.",[1],"simiMvList .",[1],"item { background: #fff; border-radius: ",[0,10],"; -webkit-box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.2); box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.2); margin-bottom: ",[0,40],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"simiMvList .",[1],"item .",[1],"pic { width: ",[0,270],"; height: ",[0,170],"; margin-right: ",[0,30],"; }\n.",[1],"simiMvList .",[1],"item .",[1],"pic wx-image { max-width: 100%; height: ",[0,170],"; border-radius: ",[0,10],"; }\n.",[1],"simiMvList .",[1],"item .",[1],"info { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"simiMvList .",[1],"item .",[1],"info .",[1],"name { margin-top: ",[0,25],"; font-weight: bold; font-size: ",[0,30],"; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; }\n.",[1],"simiMvList .",[1],"item .",[1],"info .",[1],"artistName { color: #999; font-size: ",[0,24],"; }\n.",[1],"simiMvList .",[1],"item .",[1],"btn { margin-top: ",[0,50],"; margin-left: ",[0,10],"; width: ",[0,85],"; }\n.",[1],"simiMvList .",[1],"item .",[1],"btn wx-text { display: inline-block; width: ",[0,10],"; height: ",[0,10],"; border-radius: 50%; background: #999; margin: ",[0,0]," ",[0,5],"; }\n",],undefined,{path:"./components/mvList.wxss"});    
__wxAppCode__['components/mvList.wxml']=$gwx('./components/mvList.wxml');

__wxAppCode__['components/mvListT.wxss']=setCssToHead([".",[1],"mvListTPage { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; width: 100%; }\n.",[1],"mvListTPage-item { z-index: 1; overflow: hidden; height: ",[0,400],"; margin-bottom: ",[0,25],"; border-radius: ",[0,10],"; -webkit-box-shadow: 0 0 10px hsla(0, 0%, 50%, 0.1); box-shadow: 0 0 10px hsla(0, 0%, 50%, 0.1); margin-left: ",[0,12],"; margin-right: ",[0,12],"; background-color: #007AFF; position: relative; }\n.",[1],"mvListTPage-item-name { position: absolute; z-index: 2; left: 0; bottom: 0; width: 100%; color: #fff; font-size: ",[0,22],"; -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,12]," ",[0,16],"; background: rgba(0, 0, 0, 0.5); overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; white-space: nowrap; }\n.",[1],"mvListTPage-item-image { width: 100%; height: ",[0,400],"; border-radius: ",[0,10],"; }\n.",[1],"mvListTPage-item-playBtn { left: ",[0,40],"; top: ",[0,40],"; width: ",[0,100],"; height: ",[0,100],"; position: absolute; background: rgba(255, 255, 255, 0.6); border-radius: 50%; }\n.",[1],"mvListTPage-item-playBtn-icon { margin: ",[0,32]," ",[0,0]," ",[0,0]," ",[0,40],"; border-top: ",[0,16]," solid transparent; border-bottom: ",[0,16]," solid transparent; border-left: ",[0,30]," solid #e91e63; position: absolute; }\n",],undefined,{path:"./components/mvListT.wxss"});    
__wxAppCode__['components/mvListT.wxml']=$gwx('./components/mvListT.wxml');

__wxAppCode__['components/nowPlay.wxss']=setCssToHead([".",[1],"nowPlay-seat { height: ",[0,100],"; }\n.",[1],"nowPlay-panel { position: fixed; z-index: 999; top: ",[0,0],"; left: ",[0,0],"; width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; line-height: ",[0,62],"; overflow: hidden; padding: ",[0,20]," ",[0,32],"; -webkit-box-sizing: border-box; box-sizing: border-box; background: #fff; -webkit-box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.1); box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.1); }\n.",[1],"nowPlayIcom { width: ",[0,60],"; height: ",[0,60],"; margin-right: ",[0,10],"; }\n.",[1],"nowPlayIcomP { border-radius: 50%; -webkit-box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.1); box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.1); width: ",[0,56],"; height: ",[0,56],"; margin-left: ",[0,10],"; margin-top: ",[0,2],"; }\n.",[1],"nowPlayInfo { font-size: ",[0,34],"; color: #e91e63; margin-right: ",[0,12],"; }\n.",[1],"nowPlayName { font-size: ",[0,34],"; color: #666; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; white-space: nowrap; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n",],undefined,{path:"./components/nowPlay.wxss"});    
__wxAppCode__['components/nowPlay.wxml']=$gwx('./components/nowPlay.wxml');

__wxAppCode__['components/programsList.wxss']=setCssToHead([".",[1],"djRecommendList .",[1],"item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; margin-bottom: ",[0,40],"; }\n.",[1],"djRecommendList .",[1],"item .",[1],"pic { position: relative; z-index: 1; margin-right: ",[0,40],"; }\n.",[1],"djRecommendList .",[1],"item .",[1],"pic .",[1],"playBtn { left: inherit; top: inherit; right: ",[0,20],"; bottom: ",[0,30],"; width: ",[0,50],"; height: ",[0,50],"; }\n.",[1],"djRecommendList .",[1],"item .",[1],"pic .",[1],"playBtn .",[1],"icon { margin: ",[0,16]," ",[0,0]," ",[0,0]," ",[0,18],"; border-top: ",[0,10]," solid transparent; border-bottom: ",[0,10]," solid transparent; border-left: ",[0,20]," solid #e91e63; }\n.",[1],"djRecommendList .",[1],"item .",[1],"pic wx-image { width: ",[0,180],"; height: ",[0,180],"; border-radius: ",[0,10],"; -webkit-box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3); box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3); }\n.",[1],"djRecommendList .",[1],"item .",[1],"content { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"djRecommendList .",[1],"item .",[1],"content .",[1],"name { font-size: ",[0,32],"; font-weight: bold; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; }\n.",[1],"djRecommendList .",[1],"item .",[1],"content .",[1],"rcmdtext { margin-top: ",[0,10],"; font-size: ",[0,28],"; }\n.",[1],"djRecommendList .",[1],"item .",[1],"content .",[1],"info { margin-top: ",[0,10],"; font-size: ",[0,20],"; color: #999; }\n.",[1],"djRecommendList .",[1],"item .",[1],"content .",[1],"category { margin-left: ",[0,40],"; }\n",],undefined,{path:"./components/programsList.wxss"});    
__wxAppCode__['components/programsList.wxml']=$gwx('./components/programsList.wxml');

__wxAppCode__['components/songList.wxss']=setCssToHead([".",[1],"privileges { margin-left: ",[0,20],"; margin-right: ",[0,20],"; }\n.",[1],"privileges .",[1],"item { background: #fff; border-radius: ",[0,10],"; -webkit-box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3); box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3); margin-top: ",[0,32],"; padding: ",[0,20]," ",[0,32],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"privileges .",[1],"item .",[1],"index { font-weight: bold; color: #666; margin-right: ",[0,32],"; line-height: ",[0,94],"; font-size: ",[0,48],"; padding: ",[0,0]," ",[0,10],"; }\n.",[1],"privileges .",[1],"item .",[1],"info { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; overflow: hidden; }\n.",[1],"privileges .",[1],"item .",[1],"info .",[1],"name { width: 100%; font-size: ",[0,34],"; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; white-space: nowrap; }\n.",[1],"privileges .",[1],"item .",[1],"info .",[1],"arName { font-size: ",[0,28],"; color: #888; }\n.",[1],"privileges .",[1],"item .",[1],"btn { margin-top: ",[0,20],"; margin-left: ",[0,10],"; width: ",[0,70],"; }\n.",[1],"privileges .",[1],"item .",[1],"btn wx-text { display: inline-block; width: ",[0,10],"; height: ",[0,10],"; border-radius: 50%; background: #999; margin: ",[0,0]," ",[0,5],"; }\n",],undefined,{path:"./components/songList.wxss"});    
__wxAppCode__['components/songList.wxml']=$gwx('./components/songList.wxml');

__wxAppCode__['pages/getPlaylistDetail/getPlaylistDetail.wxss']=setCssToHead([".",[1],"coverImgUrls { left: ",[0,0],"; top: ",[0,0],"; height: 100%; min-width: ",[0,300],"; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; position: relative; }\n.",[1],"coverImgUrls wx-image { width: ",[0,240],"; height: ",[0,240],"; border-radius: ",[0,10],"; -webkit-box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3); box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3); }\n.",[1],"playlistInfo { margin-right: ",[0,12],"; margin-top: ",[0,24],"; }\n.",[1],"playlistInfo .",[1],"name { font-weight: bold; font-size: ",[0,32],"; }\n.",[1],"playlistInfo .",[1],"description { margin-top: ",[0,6],"; color: #999; font-size: ",[0,22],"; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden; }\n.",[1],"privileges { margin-left: ",[0,12],"; margin-right: ",[0,12],"; }\n.",[1],"privileges .",[1],"item { background: #fff; border-radius: ",[0,10],"; -webkit-box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3); box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3); margin-bottom: ",[0,20],"; padding: ",[0,20]," ",[0,32],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"privileges .",[1],"item .",[1],"index { font-weight: bold; color: #666; margin-right: ",[0,32],"; line-height: ",[0,94],"; font-size: ",[0,48],"; padding: ",[0,0]," ",[0,10],"; }\n.",[1],"privileges .",[1],"item .",[1],"info { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; overflow: hidden; }\n.",[1],"privileges .",[1],"item .",[1],"info .",[1],"name { width: 100%; font-size: ",[0,34],"; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; white-space: nowrap; }\n.",[1],"privileges .",[1],"item .",[1],"info .",[1],"arName { font-size: ",[0,28],"; color: #888; }\n.",[1],"privileges .",[1],"item .",[1],"btn { margin-top: ",[0,20],"; margin-left: ",[0,10],"; width: ",[0,70],"; }\n.",[1],"privileges .",[1],"item .",[1],"btn wx-text { display: inline-block; width: ",[0,10],"; height: ",[0,10],"; border-radius: 50%; background: #999; margin: ",[0,0]," ",[0,5],"; }\n",],undefined,{path:"./pages/getPlaylistDetail/getPlaylistDetail.wxss"});    
__wxAppCode__['pages/getPlaylistDetail/getPlaylistDetail.wxml']=$gwx('./pages/getPlaylistDetail/getPlaylistDetail.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead([".",[1],"indexPage { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; margin-left: ",[0,14],"; margin-right: ",[0,14],"; margin-top: ",[0,12],"; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; background-color: #FFFFFF; }\n.",[1],"index-swiper-view { height: ",[0,300],"; width: 100%; }\n.",[1],"index-swiper { height: ",[0,300],"; border-radius: ",[0,10],"; overflow: hidden; }\n.",[1],"index-swiper-item { padding: ",[0,0]," ",[0,5],"; -webkit-box-sizing: border-box; box-sizing: border-box; height: ",[0,300],"; }\n.",[1],"index-swiper-item-image { width: 100%; height: ",[0,300],"; border-radius: ",[0,10],"; -webkit-box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.1); box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.1); }\n.",[1],"page-index-title{ height: ",[0,100],"; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,40],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"page-index-title-text { color: #e91e63; font-size: ",[0,50],"; }\n.",[1],"scroll-persona-view { height: ",[0,260],"; width: 100%; }\n.",[1],"scroll-persona-item{ width: ",[0,260],"; height: ",[0,260],"; margin-right: ",[0,12],"; position: relative; }\n.",[1],"scroll-persona-item-image { border-radius: ",[0,10],"; height: ",[0,260],"; width: ",[0,260],"; }\n.",[1],"scroll-persona-item-name { background-color: rgb(0, 0, 0, 0.3); width: 100%; border-radius: ",[0,0]," ",[0,0]," ",[0,10]," ",[0,10],"; left: ",[0,0],"; bottom: ",[0,0],"; font-size: 10px; padding: ",[0,15],"; color: #fff; position: absolute; -webkit-box-sizing: border-box; box-sizing: border-box; display: inline-block; white-space: nowrap; overflow: hidden; -o-text-overflow:ellipsis; text-overflow:ellipsis; }\n.",[1],"scroll-mv-view { height: ",[0,240],"; width: 100%; }\n.",[1],"scroll-mv-item{ width: ",[0,360],"; height: ",[0,240],"; margin-right: ",[0,12],"; position: relative; }\n.",[1],"scroll-mv-item-image { border-radius: ",[0,10],"; height: ",[0,240],"; width: ",[0,360],"; }\n.",[1],"scroll-song-view { width: 100%; height: ",[0,200],"; }\n.",[1],"scroll-song-item { width: ",[0,200],"; height: ",[0,200],"; margin-right: ",[0,12],"; position: relative; }\n.",[1],"scroll-song-image { width: ",[0,200],"; height: ",[0,200],"; border-radius: 50%; }\n.",[1],"scroll-song-name { background-color: rgb(0, 0, 0, 0.3); width: 100%; top: ",[0,90],"; left: ",[0,0],"; font-size: 10px; color: #fff; position: absolute; -webkit-box-sizing: border-box; box-sizing: border-box; display: inline-block; white-space: nowrap; overflow: hidden; -o-text-overflow:ellipsis; text-overflow:ellipsis; text-align: center; z-index: 1; }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/mv/mv.wxss']=setCssToHead([".",[1],"mvPage { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; background-color: #FFFFFF; }\n.",[1],"tab-title-view { height: ",[0,100],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; width: 100%; background-color: #FFFFFF; border-bottom-width: ",[0,1],"; border-bottom-color: #808080; }\n.",[1],"tab-title-view-item { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; color: #000000; }\n.",[1],"tab-title-view-item-selected { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; color: #e91e63; }\n.",[1],"tab-botton-view { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; background-color: #FFFFFF; }\n.",[1],"left-tab .",[1],"tab-title { text-align: center; }\n.",[1],"left-tab .",[1],"tab-title .",[1],"item { display: inline-block; -webkit-box-shadow: 0 0 10px hsla(0, 0%, 50%, 0.1); box-shadow: 0 0 10px hsla(0, 0%, 50%, 0.1); text-align: center; font-size: ",[0,26],"; padding: ",[0,20]," ",[0,40],"; margin: ",[0,0]," ",[0,20]," ",[0,30],"; border-radius: ",[0,10],"; color: #888; }\n.",[1],"left-tab .",[1],"tab-title .",[1],"item.",[1],"active { background: #e91e63; color: #fff; }\n",],undefined,{path:"./pages/mv/mv.wxss"});    
__wxAppCode__['pages/mv/mv.wxml']=$gwx('./pages/mv/mv.wxml');

__wxAppCode__['pages/mvDetail/mvDetail.wxss']=setCssToHead(["body { background: rgb(251, 251, 251); }\n.",[1],"page-index-title{ height: ",[0,100],"; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,40],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"page-index-title-text { color: #e91e63; font-size: ",[0,50],"; }\n.",[1],"page-panel { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; margin-left: ",[0,20],"; margin-right: ",[0,20],"; }\n.",[1],"video wx-video { width: 100%; }\n.",[1],"videoInfo { padding-bottom: ",[0,40],"; }\n.",[1],"videoInfo .",[1],"name { font-weight: bold; font-size: ",[0,34],"; }\n.",[1],"videoInfo .",[1],"tips { margin-top: ",[0,20],"; font-size: ",[0,22],"; color: #999; }\n.",[1],"videoInfo .",[1],"tips .",[1],"artistName { margin-left: ",[0,40],"; }\n.",[1],"videoInfo .",[1],"desc { margin-top: ",[0,20],"; font-size: ",[0,26],"; color: #666; line-height: ",[0,40],"; }\n.",[1],"simiMvList .",[1],"item { background: #fff; border-radius: ",[0,10],"; -webkit-box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.2); box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.2); margin-bottom: ",[0,40],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"simiMvList .",[1],"item .",[1],"pic { width: ",[0,270],"; height: ",[0,170],"; margin-right: ",[0,30],"; }\n.",[1],"simiMvList .",[1],"item .",[1],"pic wx-image { max-width: 100%; height: ",[0,170],"; border-radius: ",[0,10],"; }\n.",[1],"simiMvList .",[1],"item .",[1],"info { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"simiMvList .",[1],"item .",[1],"info .",[1],"name { margin-top: ",[0,25],"; font-weight: bold; font-size: ",[0,30],"; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; }\n.",[1],"simiMvList .",[1],"item .",[1],"info .",[1],"artistName { color: #999; font-size: ",[0,24],"; }\n.",[1],"simiMvList .",[1],"item .",[1],"btn { margin-top: ",[0,50],"; margin-left: ",[0,10],"; width: ",[0,85],"; }\n.",[1],"simiMvList .",[1],"item .",[1],"btn wx-text { display: inline-block; width: ",[0,10],"; height: ",[0,10],"; border-radius: 50%; background: #999; margin: ",[0,0]," ",[0,5],"; }\n",],undefined,{path:"./pages/mvDetail/mvDetail.wxss"});    
__wxAppCode__['pages/mvDetail/mvDetail.wxml']=$gwx('./pages/mvDetail/mvDetail.wxml');

__wxAppCode__['pages/personalizedList/personalizedList.wxss']=setCssToHead([".",[1],"item { display: inline-block; width: calc((100% - ",[0,12],") / 2 - ",[0,12],"); height: 0; padding-bottom: calc((100% - ",[0,12],") / 2 - ",[0,12],"); position: relative; margin-right: ",[0,12],"; margin-top: ",[0,12],"; }\n.",[1],"item-name { position: absolute; z-index: 2; bottom: 0; left: 0; background: rgba(0, 0, 0, 0.3); border-radius: ",[0,0]," ",[0,0]," ",[0,10]," ",[0,10],"; padding: ",[0,15],"; font-size: ",[0,22],"; width: 100%; -webkit-box-sizing: border-box; box-sizing: border-box; color: #fff; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; white-space: nowrap; text-align: center; }\n.",[1],"item-image { width: 100%; border-radius: ",[0,10],"; -webkit-box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3); box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3); height: 100%; left: 0; top: 0; position: absolute; }\n",],undefined,{path:"./pages/personalizedList/personalizedList.wxss"});    
__wxAppCode__['pages/personalizedList/personalizedList.wxml']=$gwx('./pages/personalizedList/personalizedList.wxml');

__wxAppCode__['pages/play/play.wxss']=setCssToHead([".",[1],"page-panel-h { position: relative; z-index: 1; width: 100%; height: 100%; color: #e91e63; text-align: center; }\n.",[1],"music-name { padding: ",[0,40]," ",[0,20]," ",[0,0],"; font-size: ",[0,40],"; font-weight: bold; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; }\n.",[1],"music-author { font-size: ",[0,28],"; }\n.",[1],"music-pic { margin: ",[0,60]," auto ",[0,0],"; width: ",[0,340],"; height: ",[0,340],"; border-radius: 50%; overflow: hidden; border: ",[0,15]," solid #e91e63; -webkit-box-shadow: 0px 0px ",[0,20]," rgba(233, 30, 99, 0.5); box-shadow: 0px 0px ",[0,20]," rgba(233, 30, 99, 0.5); }\n.",[1],"music-pic wx-image { width: ",[0,340],"; height: ",[0,340],"; border-radius: 50%; }\n.",[1],"player-panel { position: fixed; z-index: 2; left: 0; bottom: 0; width: 100%; padding: ",[0,20]," ",[0,0],"; }\n.",[1],"player-btn { text-align: center; line-height: ",[0,100],"; padding-bottom: ",[0,100],"; }\n.",[1],"player-btn .",[1],"playStop, .",[1],"player-btn .",[1],"nextPrev { display: inline-block; }\n.",[1],"player-btn .",[1],"playStop wx-image { width: ",[0,100],"; height: ",[0,100],"; margin: ",[0,0]," ",[0,80],"; }\n.",[1],"player-btn .",[1],"nextPrev wx-image { width: ",[0,70],"; height: ",[0,70],"; }\n.",[1],"time { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; padding: ",[0,0]," ",[0,30],"; }\n.",[1],"time .",[1],"item { font-size: ",[0,24],"; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; text-align: left; }\n.",[1],"time .",[1],"item:nth-child(2) { text-align: right; }\n",],undefined,{path:"./pages/play/play.wxss"});    
__wxAppCode__['pages/play/play.wxml']=$gwx('./pages/play/play.wxml');

__wxAppCode__['pages/ranking/ranking.wxss']=setCssToHead([".",[1],"item { display: inline-block; width: calc((100% - ",[0,12],") / 3 - ",[0,12],"); height: 0; padding-bottom: calc((100% - ",[0,12],") / 3 - ",[0,12],"); position: relative; margin-right: ",[0,12],"; margin-top: ",[0,12],"; }\n.",[1],"item-name { position: absolute; z-index: 2; bottom: 0; left: 0; background: rgba(0, 0, 0, 0.3); border-radius: ",[0,0]," ",[0,0]," ",[0,10]," ",[0,10],"; padding: ",[0,15],"; font-size: ",[0,22],"; width: 100%; -webkit-box-sizing: border-box; box-sizing: border-box; color: #fff; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; white-space: nowrap; text-align: center; }\n.",[1],"item-image { width: 100%; border-radius: ",[0,10],"; -webkit-box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3); box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3); height: 100%; left: 0; top: 0; position: absolute; }\n",],undefined,{path:"./pages/ranking/ranking.wxss"});    
__wxAppCode__['pages/ranking/ranking.wxml']=$gwx('./pages/ranking/ranking.wxml');

__wxAppCode__['pages/rankingList/rankingList.wxss']=setCssToHead([".",[1],"coverImgUrls { left: ",[0,0],"; top: ",[0,0],"; height: 100%; min-width: ",[0,300],"; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; position: relative; }\n.",[1],"coverImgUrls wx-image { width: ",[0,240],"; height: ",[0,240],"; border-radius: ",[0,10],"; -webkit-box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3); box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3); }\n.",[1],"playlistInfo { margin-right: ",[0,12],"; margin-top: ",[0,24],"; }\n.",[1],"playlistInfo .",[1],"name { font-weight: bold; font-size: ",[0,32],"; }\n.",[1],"playlistInfo .",[1],"description { margin-top: ",[0,6],"; color: #999; font-size: ",[0,22],"; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden; }\n.",[1],"privileges { margin-left: ",[0,12],"; margin-right: ",[0,12],"; }\n.",[1],"privileges .",[1],"item { background: #fff; border-radius: ",[0,10],"; -webkit-box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3); box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3); margin-bottom: ",[0,20],"; padding: ",[0,20]," ",[0,32],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"privileges .",[1],"item .",[1],"index { font-weight: bold; color: #666; margin-right: ",[0,32],"; line-height: ",[0,94],"; font-size: ",[0,48],"; padding: ",[0,0]," ",[0,10],"; }\n.",[1],"privileges .",[1],"item .",[1],"info { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; overflow: hidden; }\n.",[1],"privileges .",[1],"item .",[1],"info .",[1],"name { width: 100%; font-size: ",[0,34],"; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; white-space: nowrap; }\n.",[1],"privileges .",[1],"item .",[1],"info .",[1],"arName { font-size: ",[0,28],"; color: #888; }\n.",[1],"privileges .",[1],"item .",[1],"btn { margin-top: ",[0,20],"; margin-left: ",[0,10],"; width: ",[0,70],"; }\n.",[1],"privileges .",[1],"item .",[1],"btn wx-text { display: inline-block; width: ",[0,10],"; height: ",[0,10],"; border-radius: 50%; background: #999; margin: ",[0,0]," ",[0,5],"; }\n",],undefined,{path:"./pages/rankingList/rankingList.wxss"});    
__wxAppCode__['pages/rankingList/rankingList.wxml']=$gwx('./pages/rankingList/rankingList.wxml');

__wxAppCode__['pages/singerInfo/singerInfo.wxss']=setCssToHead([".",[1],"singerInfo .",[1],"panel { position: relative; z-index: 1; width: ",[0,300],"; height: ",[0,300],"; text-align: center; margin: ",[0,20]," auto; font-weight: bold; border-radius: 50%; overflow: hidden; color: #fff; -webkit-box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3); box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3); }\n.",[1],"singerInfo .",[1],"panel wx-image { width: ",[0,300],"; height: ",[0,300],"; }\n.",[1],"singerInfo .",[1],"panel .",[1],"name { position: absolute; z-index: 2; top: 0; left: 0; width: ",[0,300],"; height: ",[0,300],"; line-height: ",[0,300],"; background: rgba(0, 0, 0, 0.3); }\n.",[1],"tab-title { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; text-align: center; font-size: ",[0,28],"; }\n.",[1],"tab-title .",[1],"item { padding: ",[0,20],"; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; border-bottom: 3px solid #fff; }\n.",[1],"tab-title .",[1],"item.",[1],"active { border-color: #e91e63; }\n.",[1],"tab-content .",[1],"item { margin-top: ",[0,40],"; }\n.",[1],"SingerDesc { color: #666; font-size: ",[0,28],"; line-height: 1.8; text-indent: 2em; border-radius: ",[0,10],"; padding: ",[0,20]," ",[0,30],"; -webkit-box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.1); box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.1); }\n",],undefined,{path:"./pages/singerInfo/singerInfo.wxss"});    
__wxAppCode__['pages/singerInfo/singerInfo.wxml']=$gwx('./pages/singerInfo/singerInfo.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
