export const site = {
  displayName: 'Williams B&R GmbH', legalName: 'Williams B&R GmbH',
  tagline: 'Bau & Rückbau',
  logo: '/images/williams-logo.png' as string | null,
  logoAlt: 'Williams B&R GmbH – Bau & Rückbau',
  hero: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=85',
  architecture: '/images/hamburg-architecture.jpg',
  detail: '/images/hamburg-architecture.jpg',
  intro: 'Von der ersten Bestandsaufnahme bis zur Umsetzung: Wir begleiten Bauvorhaben mit klarer Abstimmung und einem Blick für das Ganze. In Hamburg, deutschlandweit und nach Vereinbarung auch international.',
  services: [
    {id:'entkernung-rueckbau',number:'01',title:'Entkernung & Rückbau',tag:'BESTAND NEU DENKEN',description:'Gezielt entfernen. Substanz erhalten. Wir schaffen die Grundlage für eine neue Nutzung.',image:'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=85',alt:'Illustrative Aufnahme eines Gebäudes im Rohbau'},
    {id:'abbruch-abriss',number:'02',title:'Abbruch & Abriss',tag:'PLATZ FÜR PERSPEKTIVEN',description:'Kontrollierter Abbruch beginnt mit einem klaren Plan. Für den nächsten Schritt Ihres Grundstücks.',image:'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85',alt:'Illustrative Baustellenaufnahme mit Tragwerk'},
    {id:'hochbau',number:'03',title:'Hochbau',tag:'IDEEN WERDEN SUBSTANZ',description:'Aus Planung wird Bauwerk. Mit koordinierten Abläufen und einem präzisen Blick auf die Ausführung.',image:'/images/hamburg-architecture.jpg',alt:'Hamburger Backsteinarchitektur als illustratives Standortmotiv'},
    {id:'tiefbau',number:'04',title:'Tiefbau',tag:'AUF SICHEREM GRUND',description:'Die Basis für alles, was folgt. Erdarbeiten und vorbereitende Maßnahmen für Ihr Bauvorhaben.',image:'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85',alt:'Illustrative Aufnahme einer Baustelle mit Erdarbeiten'}
  ],
  process:[['Verstehen','Bestand, Anforderungen und Ziele gemeinsam klären.'],['Koordinieren','Schnittstellen abstimmen und Abläufe nachvollziehbar planen.'],['Umsetzen','Arbeiten kontrolliert ausführen und den Fortschritt im Blick behalten.']],
  additional:[{title:'Innenausbau',items:['Trockenbau','Malerarbeiten','Fliesenarbeiten','Bodenverlegung']},{title:'Bestand & Baustelle',items:['Renovierung','Demontage','Baustellenräumung']},{title:'Individuelle Lösungen',items:['Baumaschinenvermietung','Individuelle Bauarbeiten']}]
};
