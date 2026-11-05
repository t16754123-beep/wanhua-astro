import fs from 'node:fs/promises';
import path from 'node:path';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import {fileURLToPath} from 'node:url';
const run=promisify(execFile);
const root=fileURLToPath(new URL('../',import.meta.url));
process.chdir(root);
const html=await fs.readFile('reference/index-utf8.html','utf8');
const assets=[...new Set([...html.matchAll(/(?:src=["']|url\(['"]?)(\/[^"')]+\.(?:jpg|png|gif|css))/gi)].map(m=>m[1]))];
assets.push('/Templates/cn/css/metinfo.css','/Templates/cn/css/jquery.jslides.css');
let queue=[...new Set(assets)];let failures=[];
async function get(url){const out='public'+url;await fs.mkdir(path.dirname(out),{recursive:true});try{await run('curl.exe',['-sSL','--max-time','30','--retry','1','https://www.czsrfloor.com'+url,'-o',out]);console.log('OK',url)}catch{failures.push(url)}}
// Each subprocess streams directly to disk; no image buffers retained.
let cursor=0;await Promise.all(Array.from({length:3},async()=>{while(cursor<queue.length)await get(queue[cursor++])}));
const css=await fs.readFile('public/Templates/cn/css/metinfo.css','utf8');
const urls=[...new Set([...css.matchAll(/url\(['"]?([^'"\)]+)['"]?\)/gi)].map(m=>new URL(m[1],'https://www.czsrfloor.com/Templates/cn/css/metinfo.css').pathname))];
queue=urls.filter(url=>!queue.includes(url));cursor=0;await Promise.all(Array.from({length:3},async()=>{while(cursor<queue.length)await get(queue[cursor++])}));
console.log('FAILURES',failures);
