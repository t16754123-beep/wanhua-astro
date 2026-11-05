import fs from 'node:fs';
const h=fs.readFileSync('reference/index-utf8.html','utf8');
const groups=['防静电地板','OA智能网络地板','通风板','贴面系列','配件系列'];
const products=[];
for(let i=0;i<5;i++){
 const chunk=h.split(`id="myTab0_Content${i}"`)[1]?.split('<script>')[0]||'';
 for(const m of chunk.matchAll(/<A title="([^"]+)" href="([^"]+)"[^]*?<img src="([^"]+)"/g))products.push({name:m[1],url:m[2],image:m[3],group:groups[i],category:i});
}
const faq=[...h.matchAll(/<dl>\s*<dd><a href="([^"]+)"[^>]*>([^<]+)<\/a><\/dd>\s*<dt>([^]*?)<\/dt>/g)].map(m=>({url:m[1],title:m[2],text:m[3].replace(/&nbsp;/g,' ').replace(/<[^>]+>/g,'')}));
fs.writeFileSync('src/data/catalog.json',JSON.stringify({groups,products,faq},null,2));
console.log('Prepared',products.length,'products and',faq.length,'articles');
