from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
root=Path('dist/client');broken=set();pages=list(root.rglob('*.html'));titles=[]
class Links(HTMLParser):
 def handle_starttag(self,tag,attrs):
  for k,v in attrs:
   if k in ('src','href') and v and v.startswith('/') and not v.startswith('//'):
    path=unquote(urlsplit(v).path).lstrip('/');q=root/path
    if path=='' or q.is_file() or (root/(path+'.html')).is_file() or (q/'index.html').is_file():continue
    broken.add(v)
for p in pages:
 text=p.read_text(encoding='utf-8');Links().feed(text)
 if '<h1' not in text: print('Missing h1:',p)
print('Rendered HTML pages:',len(pages));print('Broken internal links/assets:',sorted(broken))
assert not broken
