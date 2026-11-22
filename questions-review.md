# Questions review (39 items: 31 changed, 5 removed, 8 added)

## Changed
- Ayuda pública (error más grave): dropped secondary `tax` loading (one construct: welfare deservingness); ±2 → ±1.5 for a binary.
- Grid de confianza: removed `tax` from "grandes empresas" and `bioethics` from "Iglesia" (one construct per row); "medios" → "grandes medios"; "Ejército" → "La OTAN" (pole is NATO commitment; army trust is near-universal); dropped "científicos" (no party contrast); added "centrales nucleares" and "Gobierno de Israel" for a second item on nuclear/israel; added 1–5 hint.
- Tradiciones (likert): dropped `memory` (respecting traditions does not imply repealing memory laws).
- Pobreza: dropped secondary `tax`; lighter weights.
- Pick de gasto: removed "Ayuda humanitaria" (mapped to immigration/defence without justification); "Acogida de refugiados" added as mirror of "Control de fronteras" (polarity balance); "listas de espera" and "campo" made neutral fillers (every party backs them; "campo"→climate was a lifestyle proxy); "pensiones" → "pensiones y dependencia".
- ¿Por qué está cara la vivienda? → "¿Qué medida tomarías primero?": options mixed housing, immigration and labour, and were non-exclusive causes; now 4 housing policies.
- Barrio (palabra): "gente de fuera" was ambiguous (could mean other regions) → "personas de otros países".
- Lengua en la escuela: removed spurious `public_services` loading; added "castellano principal" so PP (elegir) and Vox (castellano) are separable.
- Concierto vasco: "Bien; las demás deberían poder…" bundled approval with extension and "Es un privilegio" was loaded; now an ordinal: abolish / keep but don't extend / extend to any.
- Despido: small sympathetic family firm + underperformer was leading, and "indemnización justa" overlapped the other options; now a profitable firm with a clear ordinal (ban / justify / allowed with legal severance).
- Fábrica contaminante: "más plazo" was -0.5 though it delays the rule; set to 0.
- Electricidad 2040 → nucleares: options bundled nuclear and climate ("lo más barato" is not climate scepticism); now pure nuclear calendar.
- Hombre/mujer joven: scale was asymmetric ("claramente" vs "en algunos aspectos"); now 4 balanced points.
- Eutanasia: "solo en casos muy extremos" overlapped the stem (already extreme) → "solo en fase terminal".
- Aborto (likert): "en las primeras semanas" (matches the actual debate); dropped `feminism` loading.
- Gaza: "Israel es un aliado democrático que se defiende" plus a time-bound "guerra"; neutral stem, middle option mapped 0.5 (PP/Junts position).
- Defensa (owner's example): "allies ask" + "sin recortar en lo social" mixed compliance and budget allocation; now a pure spending-level ordinal.
- Bruselas vs "la mayoría de españoles": loaded (frames the EU as against the majority) and excluded nationalist identities; now "how much should the EU decide" ordinal.
- Rey: wording only ("útil: da estabilidad y representa a todos", "anticuada, pero no me molesta").
- Guerra Civil: wording; "víctimas de la dictadura" makes option 1 distinct from the "both sides" (concordia) option.
- Joven reincidente: removed "Expulsarlo si es extranjero" (other dimension, irrelevant to the scenario); "para que aprenda" was loaded; added a middle (community service).
- Frase sobre el sistema: option 1 was double-barrelled ("partidos iguales" + "sistema se protege") and the middle ("quién las ocupa") was partisan; now clean ordinal: works / reform / change from the roots.
- Toros: "que voten los vecinos" was procedural, not a position → substantive middle (keep without harming the animal).
- Religión: added "como ahora" and "contar para la nota" to separate PP (status quo) from Vox (counts for grades).
- Concertados: "colegio con muy buenos resultados" was leading; neutral definition instead.
- Eléctricas: options loaded on public_ownership and tax, and "más competencia y menos impuestos" was double-barrelled; now 3 public_ownership levels.
- Herencia: "el piso de tus padres" invited self-interest; neutral third person; "solo si es grande" -0.5.
- Sin papeles: arraigo middle mapped 0 (it is current law, not a pro-immigration stance).
- Jubilación: "no me fío de que haya pensiones" is an expectation (and an age proxy), not a preference, and carried an anti-establishment loading; now 3 financing models.
- Piso vacío: "puede hacer lo que quiera" sounded like a caricature; added "ventajas fiscales si lo alquila" (PP-type answer).
- Independentistas: "hacer cumplir la ley" did not exclude "más autogobierno"; now 4 exclusive responses including recentralisation (Vox).
- All ordinal items: direction alternated (left-first / right-first) to spread order effects.

## Removed
- Selección española: double-barrelled (not liking football = "prefer another team" → territorial -2).
- 10% más sueldo vs 10% menos jornada: personal preference and an income proxy, not a policy stance → replaced by the working-week item.
- ¿Dónde te informas?: behavioural/age proxy → replaced by a populism likert.
- Faltan trabajadores: each option on a different dimension (immigration, labour, welfare); immigration is covered by 4 other items.
- ¿Cómo te sientes? (Moreno): identity rather than position (a left-wing voter in Madrid answers "tan español" but supports plurinationality); territorial is covered by 3 stronger items.

## Added
- Impuestos vs servicios (CIS classic): second core tax item; separates Junts/PNV from ERC/Bildu.
- Jornada de 40 h: law / sector bargaining / unchanged; splits Junts from ERC and PSOE from PP.
- Sanidad pública pagando clínicas privadas: second public_services item (PP vs PSOE vs Podemos).
- Coches contaminantes en el centro (likert, trade-off "aunque perjudique…"): second climate item; agree = green.
- Violencia de género vs intrafamiliar: main feminism contrast between PP (0.5) and Vox (2).
- Prohibir fundaciones que hacen apología del franquismo (likert): second memory item; agree = left (balances polarity).
- Policía: ¿poco margen o demasiado poder?: forced choice on the "ley mordaza" axis (PSOE 0 vs PP 2 vs Podemos -2).
- Ciudadano corriente vs político profesional (likert, populism scale): second attitudinal anti-establishment item; the only real FA vs Podemos and PP vs Vox/SALF separator.

## Self-test
- Added party-bot check to bin/selftest.js: each party answering by its own programme scores must rank itself first. New set: 14/14; original: 13/14 (Adelante tied with FA).
