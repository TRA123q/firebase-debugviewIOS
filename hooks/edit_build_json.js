var fs = require('fs');

if ( fs.existsSync("build.json") ) {

var text = fs.readFileSync('build.json','utf8');
var obj = JSON.parse( text );
  
console.log(text);

if ( !obj.hasOwnProperty('ios') ) {
obj['ios'] = {};
}
var obj_ios = obj['ios'];

if ( !obj_ios.hasOwnProperty('debug') ) {
obj_ios['debug'] = {};
}
if ( !obj_ios.hasOwnProperty('release') ) {
obj_ios['release'] = {};
}
var obj_ios_debug = obj_ios['debug'];
var obj_ios_release = obj_ios['release'];

if ( !obj_ios_debug.hasOwnProperty('buildFlag') ) {
obj_ios_debug['buildFlag'] = [];
}
if ( !obj_ios_release.hasOwnProperty('buildFlag') ) {
obj_ios_release['buildFlag'] = [];
}
  
if( !obj_ios_debug.buildFlag.includes('-FIRDebugEnabled=true') ) {
obj_ios_debug.buildFlag.push( '-FIRDebugEnabled=true' );
}
if( !obj_ios_release.buildFlag.includes('-FIRDebugEnabled=true') ) {
obj_ios_release.buildFlag.push( '-FIRDebugEnabled=true' );
}

var json = JSON.stringify( obj, null, 2 );
  
console.log(json);
  
fs.writeFileSync('build.json', json, 'utf8');
}
