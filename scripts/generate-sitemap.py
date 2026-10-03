from pathlib import Path
from xml.sax.saxutils import escape
root=Path('dist/client');base='https://skace-healthtech-demo-20260908.surge.sh'
routes=sorted('/'+str(p.relative_to(root)).replace('\\','/').removesuffix('.html') for p in root.rglob('*.html') if p.name!='404.html')
routes=['/' if r=='/index' else r for r in routes]
Path('public/sitemap.xml').write_text('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+''.join('<url><loc>'+escape(base+r)+'</loc></url>' for r in routes)+'</urlset>',encoding='utf-8')
Path('public/robots.txt').write_text('User-agent: *\nAllow: /\nSitemap: '+base+'/sitemap.xml\n',encoding='utf-8')
print('Sitemap routes:',len(routes))
