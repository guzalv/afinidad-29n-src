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

## Review 2 (2026-11-22, programme-based)
Checked every item against the audited scores (ext/) and programme text. 41 items (+2 added, 1 likert→choice, 10 recalibrated). Party bots: 14/14 rank themselves first (Compromís previously tied with FA 98/98; now 98.6 vs 98.1).

### Changed
- Herencia: "Sí, como cualquier otro ingreso" (-2) matched no programme; now "Sí, de forma progresiva" (-2: Adelante #234 suelo común; FA p46 tope 10 M€). "Solo si es grande" -0.5 → -1 (FA p45 impuesto estatal a herencias >1 M€). Junts p68 and SALF p13 abolish → "No".
- Despido: "no despedir con beneficios" was no party's measure, and PSOE (-1.5) landed on it. Now 4 options: autorización + más indemnización (-2: FA p53, ERC p26, Bildu p6, Podemos p42, Adelante #272) / más indemnización (-1.5: PSOE p41 "reparación efectiva") / ley actual (0.5: PP, Junts) / menos trámites e indemnización (1.5: SALF p30-31 contrato único).
- Jornada: "por ley" split into 37,5 h (-1.5: PSOE p41, ERC p26) and hacia 32 h (-2: FA p56, Compromís p7, Bildu p6, Adelante #268, BNG p15; Podemos 30 h p41). Junts p70 against → sector a sector.
- Financiación de la jubilación: dropped "pensiones que suban con el IPC" from the public-only option; PP p34 and SALF p20-21 also back IPC uprating, so it was not a financing contrast.
- Nucleares: "Alargar mientras sean seguras" 1.5 → 1 (Junts p78 "revisar el calendario", PNV p15 "revisar el PNIEC"; full extension and SMRs/new plants stay at 2: PP p54, Vox p12).
- Sin papeles: added "No regularizarlas, salvo casos excepcionales" (1.5): PP p19 (prohibir regularizaciones masivas, arraigo excepcional) and Junts p47-49 had to choose "expulsar" (Vox p15 remigración).
- Independencia: "Negociar más autogobierno, sin referéndum" -0.5 → -1. PNV p37-39 (Concierto Político, sin independencia ni referéndum), CC p3 (decidir dentro del Estado) and Compromís (sin autodeterminación) sit there; PSOE p91 ("ni recentralizar ni fragmentar") is also nearest. Option order reversed (right-first).
- Aborto: likert ("solo de la mujer", everyone left of PP agreed) → 4 options: restringir (2: Vox p52) / seguir como está + medidas para continuar el embarazo (0.5: PP p44 concebido no nacido) / seguir como está garantizando la sanidad pública (-1.5: Compromís p46 "en los términos previstos legalmente", PNV p26) / derecho en la Constitución (-2: PSOE p81, FA p28, Podemos p51, Adelante #33). This is the main real Compromís–FA difference on bioethics.
- UE: added "Mucho menos: replantearse seguir en ella" (2: SALF p35 referéndum de renegociación/salida); "Menos cosas" 2 → 1 (Vox p33-34 and BNG p47-48 are sovereigntist without proposing exit).
- Monarquía: added "Aceptable, mientras cumpla bien su papel" (1). PSOE, CC and SALF (1, programmes silent; none proposes a republic) had to choose between "útil" (2) and "anticuada" (-0.5).

### Added
- Compra de vivienda en zonas caras (housing): solo quien vaya a vivir (-2: Podemos p8, Compromís p5 no residentes en zonas tensionadas, FA p11 personas jurídicas, CC p11 extranjeros) / solo prohibir a fondos y grandes empresas (-1: Junts p17 hasta 2028, PSOE p32, Bildu p5-6) / más impuestos a fondos y compradores no residentes en la UE (0.5: Vox p24-25) / sin límites (2: PP p41-43, SALF p5-7).
- Edad de jubilación (welfare): volver a 65 o menos (-2: FA p58, Compromís p8, BNG p19, Podemos p41 63 años, Adelante 64) / mantener sin penalizar a 40 años cotizados (-1: PNV p31, Junts p58, ERC p26, PSOE p40 penosidad) / mantener y premiar seguir trabajando (0.5: PP p34 jubilación activa, SALF p20) / seguir subiéndola (2, pole).

### Not added
- Palestinian recognition: already done (2024), so it no longer separates parties. The Israel item covers sanctions and the arms embargo.
- Regional minimum wage (Bildu p6, PNV p9, ERC p20, Junts p88): territorial already has 4 items, and the parties that propose it never compete in the same region.
- Compromís vs FA: the remaining score gaps are concertada (handled), abortion (above) and EU (existing item). Defence and anti-establishment have equal scores, so no item can separate them.
