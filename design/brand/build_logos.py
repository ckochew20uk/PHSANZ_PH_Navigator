from pathlib import Path
import xml.etree.ElementTree as ET
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.varLib.instancer import instantiateVariableFont
root=Path('artifacts/ph-navigator/public'); kit=root/'brand'
original=Path('design/brand/logo-master.svg').read_text()
body=original[original.index('  <defs>'):original.rindex('</svg>')]
font=instantiateVariableFont(TTFont('design/brand/fonts/DM-Sans.ttf'), {'wght':500,'opsz':48}, inplace=False); glyphs=font.getGlyphSet(); cmap=font.getBestCmap()
def text_paths(text,x,y,size,colour):
 scale=size/font['head'].unitsPerEm; advance=0; paths=[]
 for char in text:
  name=cmap[ord(char)]; pen=SVGPathPen(glyphs); glyphs[name].draw(pen)
  paths.append(f'<path d="{pen.getCommands()}" transform="translate({x+advance*scale} {y}) scale({scale} {-scale})"/>')
  advance+=font['hmtx'][name][0]
 return f'<g fill="{colour}">'+''.join(paths)+'</g>'
def svg(w,h,content,title='PH Navigator'):
 return f'<svg xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="{w}" height="{h}" viewBox="0 0 {w} {h}" role="img"><title>{title}</title>{content}</svg>'
def mark(colour=None):
 if not colour:return body
 import re
 return re.sub(r'fill="url\(#[^)]+\)"',f'fill="{colour}"',body)
def symbol(x,y,size,colour=None):return f'<g transform="translate({x} {y}) scale({size/996})">{mark(colour)}</g>'
def text_width(text,size):
 return sum(font['hmtx'][cmap[ord(c)]][0] for c in text)*size/font['head'].unitsPerEm
variants={}
for name,colour in [('colour',None),('white','#ffffff'),('navy','#172e5b')]:
 ink=colour or '#172e5b'
 variants[f'logo-horizontal-{name}.svg']=svg(round(285+text_width('PH Navigator',100)+45),260,symbol(0,0,260,colour)+text_paths('PH Navigator',285,159,100,ink))
 variants[f'logo-stacked-{name}.svg']=svg(760,720,symbol(130,0,500,colour)+text_paths('PH Navigator',(760-text_width('PH Navigator',92))/2,650,92,ink))
 variants[f'logo-mark-{name}.svg']=svg(996,996,mark(colour))
# Deliberately simple favicon: sail, mast, hull, heart; removes flag, wave detail and gradients.
simple='<path fill="#17748c" d="M14 4 4 22h10zm3 0v18h10z"/><path fill="#172e5b" d="M15 3h2v21h-2zM3 24h26l-5 5H8z"/><path fill="none" stroke="#172e5b" stroke-width="2" d="M22 9c-5-5-8 3 0 8 8-5 5-13 0-8z"/>'
variants['favicon.svg']=svg(32,32,simple)
for name,content in variants.items():(kit/name).write_text(content)
for public,asset in [('logo-primary.svg','logo-horizontal-colour.svg'),('logo-white.svg','logo-horizontal-white.svg'),('logo-mark.svg','logo-mark-colour.svg'),('favicon.svg','favicon.svg')]:
 (root/public).write_text(variants[asset])
# SVG source for a padded, opaque home-screen icon.
(kit/'apple-touch-icon-source.svg').write_text(svg(180,180,'<rect width="180" height="180" rx="32" fill="#f7f9fb"/>'+symbol(14,14,152)))
(root/'brand/social-card.svg').write_text(svg(1200,630,'<rect width="1200" height="630" fill="#f7f9fb"/><circle cx="1120" cy="70" r="240" fill="#e3f2f2"/>'+symbol(48,55,390)+text_paths('PH Navigator',445,255,82,'#172e5b')+'<text x="450" y="320" font-family="sans-serif" font-size="27" fill="#17748c">Navigating life with PH — together.</text>'))
