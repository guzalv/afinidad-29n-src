// node bin/selftest.js site/index.html — simulates archetype respondents, prints top matches
const fs=require('fs'),vm=require('vm');
const html=fs.readFileSync(process.argv[2],'utf8');
const js=html.match(/<script>([\s\S]*)<\/script>/)[1]+';this.R={Q,DATA,profile,match,begin,getOrder:()=>order,setAns:a=>{ans=a}};';
const ctx={document:{querySelector:()=>({set innerHTML(v){},get innerHTML(){return''}})},scrollTo(){},Math,Object,String,JSON};
vm.createContext(ctx);vm.runInContext(js,ctx);const {Q,DATA,profile,match,setAns}=ctx.R;
const val=e=>Object.values(e).reduce((s,[v,w])=>s+v*w,0); // + = right-ish on most dims
function run(name,dir,terr){ // dir: +1 right, -1 left; terr overrides territorial sign
  const ans={};
  Q.forEach((q,n)=>{
    const score=e=>Object.entries(e).reduce((s,[d,[v,w]])=>s+v*w*(d==='territorial'&&terr!==undefined?terr:dir),0);
    if(q.k==='grid'){ans[n]={};q.r.forEach(r=>ans[n][r[0]]=score(r[1])>0?5:1)}
    else if(q.k==='lik')ans[n]=score(q.e)>0?2:-2;
    else if(q.k==='pick')ans[n]=q.o.slice().sort((a,b)=>score(b[1])-score(a[1])).slice(0,q.max).map(o=>o[0]);
    else ans[n]=q.o.slice().sort((a,b)=>score(b[1])-score(a[1]))[0][0];
  });
  setAns(ans);const u=profile();
  const r=Object.entries(DATA).map(([k,p])=>[k,match(u,p).pct]).sort((a,b)=>b[1]-a[1]);
  console.log(name.padEnd(28),r.slice(0,5).map(x=>x.join(':')).join(' '),'… last',r.at(-1).join(':'));
  return r;
}
const R=run('right, centralist',1,1), L=run('left, centralist-ish',-1,0), N=run('left, nationalist',-1,-1), C=run('right econ, nationalist',1,-1);
console.assert(['vox','salf','pp'].includes(R[0][0]),'right archetype should top Vox/SALF/PP');
console.assert(!['vox','salf','pp'].includes(L[0][0]),'left archetype should not top right parties');
console.assert(R.at(-1)[1]<40 && L.find(x=>x[0]==='vox')[1]<40,'extremes should be far apart');
console.log('selftest done');
function near(name,t){ // picks options whose mean position is closest to t (moderates)
  const ans={},m=e=>{const ws=Object.values(e).reduce((s,[v,w])=>s+w,0);return ws?Object.values(e).reduce((s,[v,w])=>s+v*w,0)/ws:0};
  Q.forEach((q,n)=>{
    if(q.k==='grid'){ans[n]={};q.r.forEach(r=>ans[n][r[0]]=3+Math.round(t*Math.sign(Object.values(r[1])[0][0])))}
    else if(q.k==='lik')ans[n]=Math.round(t*Math.sign(Object.values(q.e)[0][0]));
    else if(q.k==='pick')ans[n]=q.o.slice().sort((a,b)=>Math.abs(m(a[1])-t*2)-Math.abs(m(b[1])-t*2)).slice(0,q.max).map(o=>o[0]);
    else ans[n]=q.o.slice().sort((a,b)=>Math.abs(m(a[1])-t)-Math.abs(m(b[1])-t))[0][0];
  });
  setAns(ans);const u=profile();
  const r=Object.entries(DATA).map(([k,p])=>[k,match(u,p).pct]).sort((a,b)=>b[1]-a[1]);
  console.log(name.padEnd(28),r.slice(0,5).map(x=>x.join(':')).join(' '));return r;
}
const CL=near('centre-left (-0.8)',-.8), CR=near('centre-right (+0.8)',.8);
console.assert(['psoe','pnv','cc'].includes(CL[0][0])||CL.slice(0,3).some(x=>x[0]==='psoe'),'centre-left should reach PSOE');
console.assert(CR.slice(0,3).some(x=>x[0]==='pp'),'centre-right should reach PP');
// regression: begin() must not clobber the pick count (it once overwrote q.n)
ctx.R.begin();console.assert(ctx.R.getOrder().find(q=>q.k==='pick').max===3,'pick max lost in begin()');
// party bots: answer every item with the option closest to a party's programme scores; each must rank its own party first
const sc=(p,d)=>DATA[p].dims[d]?.score??0,dist=(p,e)=>{let s=0,w=0;for(const[d,[v,ww]]of Object.entries(e)){s+=Math.abs(v-sc(p,d))*ww;w+=ww}return w?s/w:9};
for(const p of Object.keys(DATA)){const ans={};
  Q.forEach((q,n)=>{
    if(q.k==='grid'){ans[n]={};q.r.forEach(r=>{const[d,[s]]=Object.entries(r[1])[0];ans[n][r[0]]=3+Math.round(sc(p,d)*s)})}
    else if(q.k==='lik')ans[n]=Math.round(Object.entries(q.e).reduce((a,[d,[s,w]])=>a+sc(p,d)*s*w,0)/Object.values(q.e).reduce((a,[s,w])=>a+w,0));
    else if(q.k==='pick')ans[n]=q.o.filter(o=>Object.keys(o[1]).length).sort((a,b)=>dist(p,a[1])-dist(p,b[1])).slice(0,q.max).map(o=>o[0]);
    else ans[n]=q.o.slice().sort((a,b)=>dist(p,a[1])-dist(p,b[1]))[0][0];});
  setAns(ans);const u=profile(),r=Object.entries(DATA).map(([k,x])=>[k,match(u,x).pct]).sort((a,b)=>b[1]-a[1]);
  console.assert(r[0][0]===p,`${p} bot should rank ${p} first, got ${r.slice(0,3).map(x=>x.join(':'))}`);}
console.log('party bots done');
