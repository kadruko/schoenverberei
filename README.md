# Gedicht der Woche aktualisieren

## Was du brauchst
- Einen GitHub-Account (einmalig anlegen auf github.com)
- Den Link zu deinem Repository

---

## Schritt-für-Schritt

### 1. Öffne die Datei `site/poem.json` im Repository

Navigiere im Browser zu deinem Repository auf GitHub und klicke auf den Ordner `site`, dann auf die Datei `poem.json`.

### 2. Klicke auf das Stift-Symbol (✏️) oben rechts

Das öffnet den Editor direkt im Browser.

### 3. Ändere den Inhalt

Die Datei sieht so aus:

```json
{
  "title": "Titel des Gedichts",
  "stanzas": [
    "Erste Strophe Zeile 1\nZeile 2\nZeile 3\nZeile 4",
    "Zweite Strophe Zeile 1\nZeile 2\nZeile 3\nZeile 4"
  ]
}
```

**Regeln:**
- `\n` bedeutet Zeilenumbruch innerhalb einer Strophe — das so lassen
- Jede Strophe steht zwischen `"..."` und wird durch ein Komma getrennt
- Letzte Strophe hat **kein** Komma danach
- Anführungszeichen `"` innerhalb des Textes bitte vermeiden

**Beispiel für ein neues Gedicht mit 2 Strophen:**

```json
{
  "title": "Mein neues Gedicht",
  "stanzas": [
    "Erste Zeile der ersten Strophe\nZweite Zeile\nDritte Zeile\nVierte Zeile",
    "Erste Zeile der zweiten Strophe\nZweite Zeile\nDritte Zeile\nVierte Zeile"
  ]
}
```

### 4. Klicke auf "Commit changes..." (grüner Button oben rechts)

Im Dialogfeld einfach auf "Commit changes" klicken — fertig.

Die Webseite aktualisiert sich automatisch innerhalb von ca. 1–2 Minuten.

---

## Häufige Fehler

| Problem | Lösung |
|---|---|
| Gedicht erscheint nicht | Warte 2 Minuten und lade die Seite neu |
| Seite zeigt "Gedicht wird geladen…" | Wahrscheinlich ein Tippfehler in der JSON-Datei (fehlendes Komma, etc.) — Datei nochmals prüfen |
