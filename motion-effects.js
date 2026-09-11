// ==========================================================================
// Sicura Sicherheitstechnik — Motion-Effekte (motion.dev, vendored)
// Ergänzt das bestehende Scroll-Reveal in script.js um Effekte, die eine
// binäre IntersectionObserver-Umschaltung nicht leisten kann: eine
// kontinuierliche, scroll-gekoppelte Fortschrittslinie sowie die Einblendung
// des Hero-/Seitenkopf-Inhalts beim Laden. Läuft rein progressiv: ohne JS
// oder bei deaktiviertem Motion bleibt der Inhalt regulär sichtbar, da
// nichts per CSS vorab ausgeblendet wird.
// ==========================================================================

(function () {
  'use strict';

  if (!window.Motion) return;

  var animate = window.Motion.animate;
  var scroll = window.Motion.scroll;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduce) return;

  /* ---- Kopfzeile: Fortschrittslinie über die gesamte Seitenhöhe ---- */
  var bar = document.querySelector('.nav-progress');
  if (bar) {
    scroll(animate(bar, { scaleX: [0, 1] }, { ease: 'linear' }));
  }

  /* ---- Hero / Seitenkopf: Einblendung beim Laden ----
     Kritisch gedämpfte Spring (bounce: 0) statt fixer Cubic-Bezier-Dauer:
     kein Überschwingen, da das Einblenden nicht aus einer Geste mit
     Schwung entsteht (siehe Apple "Designing Fluid Interfaces"). */
  var intro = document.querySelector('.hero-content') || document.querySelector('.page-hero .container');
  if (intro) {
    animate(
      intro,
      { opacity: [0, 1], y: [24, 0] },
      { type: 'spring', bounce: 0, duration: 0.5, delay: 0.1 }
    );
  }

  /* ---- Stat-Band: Count-up beim ersten Erscheinen im Viewport ----
     Nur Elemente mit [data-stat-target] animieren (z. B. nicht "1:1" –
     ein Verhältnis lässt sich nicht sinnvoll hochzählen). Das im HTML
     stehende Endergebnis ist immer schon der korrekte Wert: ohne JS oder
     bei reduzierter Bewegung (früher Return oben) bleibt er einfach
     stehen, es gibt also kein "leeres" Flackern. */
  var inView = window.Motion.inView;
  if (inView) {
    var statEls = document.querySelectorAll('.stat-number[data-stat-target]');
    statEls.forEach(function (el) {
      var target = parseFloat(el.getAttribute('data-stat-target'));
      var decimals = parseInt(el.getAttribute('data-stat-decimals') || '0', 10);
      var prefix = el.getAttribute('data-stat-prefix') || '';
      var suffix = el.getAttribute('data-stat-suffix') || '';

      if (isNaN(target)) return;

      var stop = inView(
        el,
        function () {
          animate(0, target, {
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: function (value) {
              /* useGrouping: false – "2010" ist eine Jahreszahl und soll nie
                 als "2.010" mit Tausendertrennzeichen erscheinen. */
              el.textContent =
                prefix +
                value.toLocaleString('de-DE', {
                  minimumFractionDigits: decimals,
                  maximumFractionDigits: decimals,
                  useGrouping: false
                }) +
                suffix;
            }
          });
          if (stop) stop();
        },
        { amount: 0.4 }
      );
    });
  }
})();
