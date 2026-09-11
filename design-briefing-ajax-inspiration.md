# Design-Briefing: Ajax-Systems-Inspiration für Sicura Sicherheitstechnik

> Diese Datei ist für Claude Code gedacht. Sie beschreibt die Design-Sprache von **ajax.systems**
> (europäischer Marktführer für Sicherheitssysteme) und übersetzt sie in konkrete, umsetzbare
> Vorgaben für den Relaunch der Sicura-Website (plain HTML/CSS/JS, Deployment über Cloudflare).
> Ziel ist **Inspiration**, keine 1:1-Kopie: Logo, Wortmarke, Produktfotos und die proprietäre
> "Ajax Space Font" bleiben geistiges Eigentum von Ajax Systems und werden NICHT übernommen.

## 1. Design-Philosophie (das Gefühl, das entstehen soll)

Ajax Systems wirkt wie ein Tech-/Security-Unternehmen, nicht wie ein klassischer Handwerksbetrieb:
- **Dunkel, selbstbewusst, präzise** – fast durchgängig Schwarz als Basis, sehr sparsamer Akzent
- **Große, hochwertige Produkt-/Szenenfotografie** statt Icon-Wüsten
- **Viel Weißraum / Blackspace**, klare Kanten, kein Spielerei-Schnickschnack
- **Harte Kontraste**: Weißer Text auf Schwarz bzw. Schwarz auf Bild mit dunklem Overlay
- **Kachel-/Grid-basierte Navigation** durch Themenwelten (Produktkategorien, Einsatzorte)
- **Zahlen als Vertrauensbeweis** ("4.500.000 Menschen weltweit geschützt") groß inszeniert

Für Sicura heißt das: weg von "freundlicher Handwerker-Website", hin zu **"professionelles
Sicherheitssystem-Unternehmen, dem man sein Zuhause/Gewerbe anvertraut."**

## 2. Farbpalette

| Rolle | Wert | Verwendung |
|---|---|---|
| Basis (Hintergrund) | `#000000` (bzw. `#0A0A0B` für weichere Flächen) | Header, Hero, Footer, dunkle Sections |
| Fläche hell | `#FFFFFF` / `#F5F5F5` | Content-Sections zum Auflockern |
| Text auf Dunkel | `#FFFFFF` / `#B8B8BC` (sekundär) | Fließtext auf schwarzem Grund |
| Text auf Hell | `#0A0A0B` / `#5A5A60` (sekundär) | Fließtext auf weißem Grund |
| Akzent | ein einziger kräftiger, signalhafter **Neongrün-/Limetteton** (Ajax' Markenfarbe, zu finden auf Hub-LEDs, App-Icon, Verpackung) | NUR für CTA-Buttons, Hover-States, kleine Status-/Alarm-Marker – bewusst sparsam einsetzen |

**Hinweis:** Den exakten Hex-Wert liefern die Branding-Guideline-Seiten nur als Bild, nicht als
Text – daher lässt er sich nicht zuverlässig aus dem Text-Fetch auslesen. Claude Code sollte
hierfür entweder einen Screenshot von ajax.systems/der Farb-Guideline-Seite als Referenz nehmen,
oder ersatzweise mit einem Platzhalter-Neongrün (z. B. `#B4D404` als Ausgangspunkt, per Screenshot
feinjustieren) arbeiten. Wichtig ist die **Zurückhaltung**: Farbe wird als Werkzeug für Status/CTA
eingesetzt, nicht als Deko-Fläche (Prinzip direkt aus den Ajax Brand Guidelines: *"Do not use
colors that are not specified in these branding guidelines."*). Da Grün im DACH-Raum oft mit
Ökologie/Handwerk assoziiert wird, sollte Claude Code das Grün bewusst "technisch" einsetzen
(Neon-/Signal-Charakter, nicht Naturgrün) – z. B. für Status-Anzeigen ("System aktiv"), kleine
Icons, CTA-Hover –, damit die Assoziation "Sicherheitstechnologie" statt "Garten/Bio" entsteht.

## 3. Typografie

Ajax nutzt zwei Ebenen:
1. Eine **proprietäre Display-Schrift** ("Ajax Space Font") ausschließlich für Logo, große
   Headlines/Taglines – nicht für Fließtext, nicht lizenzierbar für Dritte.
2. **Roboto** (Thin/Light/Regular/Medium/Black) für die gesamte übrige Hierarchie.

Für Sicura – lizenzfreie, ähnlich wirkende Alternativen:

| Zweck | Ajax-Vorbild | Empfehlung für Sicura (Google Fonts, frei) |
|---|---|---|
| Große Headlines / Hero | Ajax Space Font (geometrisch, technisch, leicht futuristisch) | `Space Grotesk` oder `General Sans` – nur für H1/H2, kurze Zeilen |
| Fließtext, UI, Buttons | Roboto | `Roboto` (identisch) oder `Inter` |

Regeln 1:1 aus den Ajax-Guidelines übernehmen:
- Display-Font **nie** für lange Textblöcke verwenden
- Innerhalb einer Hierarchie ist die Display-Schrift immer das dominante Element (größer/fetter)
- Kein Outline-/Stroke-Text
- Kein übertriebenes Letter-Spacing
- Kein vertikal gedrehter Text
- Text auf Bildern nie ohne Kontrast-Overlay (siehe Punkt 5)

## 4. Layout-Prinzipien

- **Vollflächiger Hero** mit kurzer, prägnanter Headline (max. 5–7 Wörter) + einem klaren CTA
- **Kachel-Navigation** direkt unter dem Hero: große Bild-Kacheln mit Hover-Zoom, die zu den
  Hauptleistungen führen (bei Sicura z. B. Einbruchschutz, Videoüberwachung, Brandschutz,
  Zutrittskontrolle statt Ajax' Produktkategorien)
- **Grid aus News-/Referenz-Cards** (Bild oben, Titel darunter, keine überladenen Beschreibungen)
- **"Solution overview"-Sektion**: 3–4 große Cards, die zu Lösungswegen führen (z. B. "Lösung nach
  Objekttyp finden", "Referenzen ansehen", "Angebot anfordern")
- **Vertrauens-Zahl** groß und zentral platziert (z. B. Anzahl geschützter Objekte, Jahre Erfahrung,
  Reaktionszeit) – bewusst als eigenständiges Design-Element, nicht als Fußnote
- **Mega-Footer** mit vollständiger Sitemap, Kontaktoptionen (Telefon, E-Mail, Formular) und
  Social-Links – wirkt seriös und vollständig, typisch für etablierte Sicherheitsunternehmen
- Konsistente **solide Overlays** hinter Text auf Bildern (Verlauf oder Flächen-Overlay, kein
  reiner Blur), damit Lesbarkeit auf jedem Foto garantiert ist

## 5. Komponenten-Checkliste für Claude Code

- [ ] CSS-Variablen für Farben/Typografie gemäß Tabellen oben anlegen (`--color-bg`, `--color-bg-alt`,
      `--color-text`, `--color-text-muted`, `--color-accent`, `--font-display`, `--font-body`)
- [ ] Hero-Section: dunkler Hintergrund, großes Bild/Video, kurze Headline in Display-Font, ein CTA-Button
- [ ] Leistungs-Kacheln (analog Ajax' erste Bildreihe) mit Hover-Effekt (leichtes Zoom + Overlay-Fade)
- [ ] News/Referenz-Grid mit Card-Komponente (Bild, Kategorie-Tag, Titel, Datum optional)
- [ ] Stat-Counter-Sektion (eine oder zwei große Kennzahlen, animierbar via `/scroll-experience`)
- [ ] Solution-Overview-Cards (3–4 Stück, große Fotos, kurzer Titel, Link)
- [ ] Mega-Footer mit Sitemap-Spalten + Kontaktblock
- [ ] Konsistentes Overlay-System für Text auf Bildern (eine wiederverwendbare CSS-Klasse)
- [ ] Bestehende Custom Commands `/ui-ux-pro-max` und `/scroll-experience` für Feinschliff bzw.
      Scroll-Animationen der Kacheln/Stat-Counter einsetzen

## 6. Was NICHT übernommen werden soll

- Logo, Wortmarke oder Ajax-spezifische Produktbilder
- Die proprietäre "Ajax Space Font" selbst (nur die *Anmutung* über eine freie Alternative)
- Ajax-spezifische Inhalte/Navigation (Produktkategorien wie "Intrusion protection" 1:1) –
  stattdessen auf Sicura-Leistungen und -Zielgruppen (Mainz/Frankfurt/Worms-Region) anpassen

## 7. Referenz

Quelle der Stil-Analyse: [ajax.systems](https://ajax.systems) sowie die öffentlichen
[Ajax Brand Guidelines](https://ajax.systems/branding-guidelines/) (Farben, Fonts, Layout).
Für exakte Werte (Hex-Codes, Bildmaterial) empfiehlt sich ein Screenshot-Abgleich, da diese
Broschüren-Seiten Farbwerte nur als Bilder, nicht als Text ausliefern.
