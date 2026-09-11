# Projektanweisungen

Dieses Dokument gilt für alle Arbeiten von Claude Code an diesem Projekt (Website).

## Preview-Server zu Sitzungsbeginn (immer)

Zu Beginn **jeder** Session ist automatisch der lokale Dev-/Preview-Server der Website zu starten, ohne dass explizit danach gefragt werden muss. Ziel: Ich soll die Website jederzeit direkt in der Vorschau öffnen und über die normale Navigationsleiste selbst zwischen den Seiten klicken können, um Änderungen live zu begutachten.

- Server über die Preview-Funktion starten (nicht nur Code schreiben, ohne ihn laufen zu lassen).
- Sicherstellen, dass die Navigation der Website in der Vorschau voll funktionsfähig ist (Links/Routing funktionieren, keine kaputten Pfade), damit ich frei zwischen Seiten wechseln kann.
- Der lokale Server muss Clean URLs unterstützen, so wie es der Hoster produktiv auch macht: Ruft man z. B. `/kontakt` auf, muss der Server automatisch `/kontakt.html` ausliefern (`.html`-Fallback), ohne dass die Dateiendung in der URL sichtbar ist oder in den Links ergänzt werden muss. Ohne diesen Fallback funktioniert die Navigationsleiste im Browser-Preview nicht korrekt. Falls das genutzte Server-Setup (z. B. `serve`, `live-server`, individuelles Script) das nicht von Haus aus unterstützt, ist die Konfiguration entsprechend anzupassen bzw. ein passendes Tool/Flag zu wählen.
- Falls der Server bereits läuft (z. B. nach einem Neustart der Session), Status kurz prüfen statt einen zweiten Server auf demselben Port zu starten.
- Falls kein Startbefehl eindeutig erkennbar ist oder mehrere Server-Konfigurationen in Frage kommen (z. B. Monorepo mit Frontend/Backend), gemäß Abschnitt „Nachfragen statt raten“ aktiv nachfragen statt zu raten.
- Sollte der Start fehlschlagen (z. B. Portkonflikt, fehlende Konfiguration in `.claude/launch.json`), das Problem kurz melden statt es stillschweigend zu ignorieren.

## Grundprinzip

Bevor eine Änderung als abgeschlossen gilt, muss sie die folgende Prüfung vollständig durchlaufen. Erst wenn **alle vier Bereiche** ohne offene kritische Punkte sind, wird die Änderung final übernommen. Werden dabei Probleme gefunden, behebe sie zuerst selbst (sofern eindeutig) oder frage nach (siehe unten).

Gehe bei jeder Aufgabe wie folgt vor:

1. Änderung umsetzen (Entwurf).
2. Selbstprüfung anhand der Checkliste unten durchführen und Ergebnis kurz zusammenfassen (was geprüft wurde, was ggf. angepasst wurde).
3. Nur wenn alle Punkte erfüllt sind: Änderung als final markieren.
4. Bei Unklarheiten, fehlenden Informationen oder mehreren sinnvollen Optionen: **immer aktiv nachfragen**, bevor weitergemacht wird – nicht raten oder stillschweigend eine Annahme treffen.

## Sitemap-Pflege (immer)

Bei **jeder** Änderung, die die Seitenstruktur betrifft (neue Seite, gelöschte Seite, geänderte URL), ist die `sitemap.xml` im selben Arbeitsschritt passend zu ergänzen bzw. zu korrigieren – nicht erst auf Nachfrage. Dazu gehört:
- Neue URLs mit korrektem `<loc>`, sinnvollem `<lastmod>` (aktuelles Datum) ergänzen.
- Entfernte/nicht mehr existierende Seiten aus der Sitemap löschen.
- Bei geänderten URLs: alten Eintrag ersetzen und passenden 301-Redirect prüfen (siehe SEO-Checkliste).
- Am Ende kurz bestätigen, dass die Sitemap aktualisiert wurde (oder dass keine Änderung nötig war, weil sich die Struktur nicht geändert hat).

## Checkliste vor jeder Änderung

### 1. Cybersecurity
- Werden keine sensiblen Daten (API-Keys, Passwörter, Tokens, personenbezogene Daten) im Code, in Kommentaren oder in Logs offengelegt?
- Sind Nutzereingaben validiert/escaped (Schutz vor XSS, SQL-Injection, CSRF etc.), falls relevant?
- Werden keine unsicheren Abhängigkeiten, veralteten Bibliotheken oder unnötig freizügigen Berechtigungen eingeführt?
- Sind externe Ressourcen (Scripts, iFrames, Links) vertrauenswürdig und wo sinnvoll abgesichert (z. B. `rel="noopener noreferrer"`, CSP)?

### 2. Rechtliches
- Entspricht die Änderung der DSGVO (z. B. bei Formularen, Tracking, Cookies, Newsletter-Anmeldungen)?
- Sind Impressum, Datenschutzerklärung oder AGB betroffen und ggf. anzupassen?
- Werden keine urheberrechtlich geschützten Inhalte (Bilder, Texte, Schriften) ohne Lizenz verwendet?
- Sind Pflichtangaben (z. B. bei Preisen, Widerrufsrecht, Kontaktdaten) korrekt und vollständig, falls betroffen?

### 3. Marketing
- Ist die Änderung konsistent mit Tonalität, Markenbotschaft und Zielgruppenansprache der Website?
- Sind Call-to-Actions klar, sinnvoll platziert und nicht widersprüchlich zu bestehenden?
- Werden Tracking/Analytics (falls vorhanden) durch die Änderung nicht versehentlich beschädigt?
- Wirkt der Inhalt vertrauenswürdig und professionell (keine Tippfehler, keine irreführenden Aussagen)?

### 4. SEO
- Sind Meta-Title, Meta-Description und Überschriftenstruktur (H1–H3) sinnvoll gesetzt bzw. nicht durch die Änderung beschädigt?
- Ist die `sitemap.xml` aktuell, falls sich URLs/Seitenstruktur geändert haben?
- Sind interne Verlinkungen weiterhin korrekt (keine toten Links, keine falschen Weiterleitungen)?
- Sind Bilder mit Alt-Texten versehen und Ladezeiten/Performance nicht negativ beeinflusst?
- Werden bei URL-Änderungen 301-Redirects gesetzt, um Rankings nicht zu verlieren?

## Nachfragen statt raten

Wenn eine dieser Fragen zutrifft, aktiv nachfragen statt selbst zu entscheiden:
- Es gibt mehrere sinnvolle Umsetzungsmöglichkeiten mit unterschiedlichen Auswirkungen.
- Rechtliche oder sicherheitsrelevante Sachverhalte sind nicht eindeutig einschätzbar.
- Die gewünschte Wirkung/Zielsetzung der Änderung ist nicht klar.
- Eine Änderung könnte bestehende Inhalte, Rankings oder Funktionen beeinträchtigen.

## Kurzform-Zusammenfassung nach jeder Änderung

Am Ende jeder umgesetzten Änderung kurz angeben:
- Was wurde geändert
- Ergebnis der 4-Punkte-Prüfung (unauffällig / angepasst / Rückfrage nötig)
- Offene Punkte, falls vorhanden
