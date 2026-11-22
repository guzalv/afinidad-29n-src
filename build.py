# Injects party data into template.html -> site/index.html (single file, no external calls)
import json, glob, os
P = {  # slug: (name, colour, regions or None=national)
 'pp':('Partido Popular','#1d84ce',None),'psoe':('PSOE','#e30613',None),'vox':('Vox','#5ac035',None),
 'fa':('Frente Amplio','#d6246e',None),'podemos':('Podemos','#6b2c91',None),'salf':('Se Acabó La Fiesta','#444',None),
 'erc':('ERC','#f5a623',['cat']),'junts':('Junts','#20c0b0',['cat']),'bildu':('EH Bildu','#9bbf1e',['pv','nav']),
 'pnv':('EAJ-PNV','#2e7d32',['pv']),'bng':('BNG','#5fa8d3',['gal']),'cc':('Coalición Canaria','#e6b800',['can']),
 'compromis':('Compromís','#ef7d00',['val']),'adelante':('Adelante Andalucía','#1aa34a',['and'])}
SRC = json.load(open('sources.json'))
out = {}
for s,(n,c,r) in P.items():
    j = json.load(open(f'ext/{s}.json')); m = SRC[s]
    out[s] = dict(name=n, color=c, regions=r, url=m['url'], pages=m.get('pages'), title=m.get('title',''),
                  src_note=m.get('src_note',''), summary=j['summary'],
                  fundamentals=j['fundamentals'], signature=j['signature'], dims=j['dims'])
data = json.dumps(out, ensure_ascii=False).replace('</','<\\/')
html = open('template.html').read().replace('/*QUESTIONS*/', open('questions.js').read()).replace('/*DATA*/null', data)
os.makedirs('site', exist_ok=True); open('site/index.html','w').write(html)
print('ok', len(html)//1024, 'KB')
