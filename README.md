# Afinidad 29-N

Cuestionario estático (un solo HTML, sin llamadas externas) que compara tus respuestas con los programas electorales de 14 partidos para las elecciones generales del 29-11-2026. Las preguntas son indirectas a propósito, para que sea difícil "tunear" las respuestas hacia el partido de siempre.

Demo: https://guzalv.github.io/afinidad-29n/

## Cómo funciona
- `dims.md`: los 21 ejes (impuestos, vivienda, inmigración, modelo territorial…) y sus polos, de −2 a +2.
- `ext/<partido>.json`: posición de cada programa en cada eje, con cita y página. Extraído automáticamente con modelos de lenguaje; **puede contener errores**. Cuando el programa no se pronuncia, la posición está marcada `inferred` y pesa menos.
- `sources.json`: de dónde salió cada programa. Varios son copias alojadas en medios de comunicación, no en la web del partido.
- `questions.js`: preguntas y su efecto (ponderado) sobre cada eje. `questions-review.md`: qué se cambió y por qué.
- `template.html` + `build.py` → `site/index.html`. `bin/selftest.js` simula respondientes tipo y comprueba que cada partido, respondiendo según su propio programa, sale primero.

```
python3 build.py && node bin/selftest.js site/index.html
```

`bin/pdf2txt.py` (PyMuPDF) convierte los PDF de los programas a texto con marcadores de página.

## Límites
Orientativo. No sustituye a leer los programas. Frente Amplio y Podemos quedan muy cerca porque sus programas difieren poco en los ejes medidos.

Licencia: MIT (código). Los textos citados pertenecen a sus partidos.
