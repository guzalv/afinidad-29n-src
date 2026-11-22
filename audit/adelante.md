# Audit: Adelante Andalucía (adelante)

## Page log (txt/adelante.txt, lines 1-2958; read to EOF)
- cap1 Servicios públicos (#1-231; l.1-751): sanidad (desprivatizar, Ley 15/1997, MUFACE, primaria 48h, aborto/eutanasia), educación (una red pública laica, 0-3, FP), universidad, vivienda (#157-191), cuidados, servicios sociales, pensiones (#216-225), empleo público.
- cap2 Economía y empleo (#232-336; l.752-1092): fiscalidad, fraude, banca/aseguradora pública, modelo productivo y turismo, empleo (32h, despido 50/60, abanico 1:5), protección social/RBU, autónomos, campo y supermercados públicos.
- cap3 Andalucía en el Estado (#337-373; l.1093-1220): financiación sin ordinalidad, deuda, autogobierno (nacionalidad histórica, confederal, policía autonómica, traspasos), inversión, municipios.
- cap4 Movilidad (#374-396; l.1221-1302): ferrocarril, desprivatización, abono único, transporte gratis.
- cap5 Bienes comunes (#397-452; l.1303-1487): clima/energía pública, gas 2030, El Cabril, agua pública, Doñana, naturaleza, mundo rural.
- cap6 Instituciones y libertades (#453-507; l.1488-1675): privilegios, corrupción, justicia/CGPJ, Senado, democracia directa, mordaza, prisión permanente, medios, Estado laico.
- cap7 Feminismos (#508-533; l.1676-1769) and cap8 LGTBIQA+ (#534-546; l.1770-1816).
- cap9 DDHH/migración/memoria/paz/gitano (#547-594; l.1817-1977): Extranjería, CIE, memoria, OTAN/rearme, Rota/Morón, Israel, Sáhara/Rif, mili.
- cap10 Cultura, hablas, digital, deporte (#595-621; l.1978-2079); cap11 Animales (#622-637; l.2080-2138): toros, caza.
- cap12 Reclamaciones por provincia (#638-719; l.2139-2419): obras ferroviarias/viarias, Palomares, memoria Huelva/Ronda.
- las-29 (m1-m29; l.2420-2958, last line): resumen de 29 medidas; confirma 32h, 20 % alquiler, banca pública, ruptura con Israel (m29), etc. EOF reached.

## Per-dim verdicts
dim | old | new | evidence verified | note
--|--|--|--|--
tax | -2 | -2 | Y | #232-236, #243 exist as cited
labor | -2 | -2 | Y | #268-275 ok
housing | -2 | -2 | Y | #159-162,173,185 ok; also constructora pública (m1), SOCIMI sin exenciones #166
welfare | -2 | -2 | Y | #212,216-220,298 ok
public_services | -2 | -2 | Y | #2-3,72,137 ok
public_ownership | -2 | -2 | Y | #56,255-258,313,381,399 ok
immigration | -2 | -2 | Y | #547-553,558 ok
territorial | -1.5 | -1.5 | Y | no autodeterminación para Andalucía; confederal, policía autonómica, Senado de nacionalidades; no co-oficialidad ni amnistía; fits -1.5
feminism | -2 | -2 | Y | #508-509,517,527,534 ok
bioethics | -2 | -2 | Y | #33,47-48 ok
climate | -2 | -2 | Y | #397,404,407,430 ok
nuclear | -2 | -1.5 | Y (partial) | programa NO pide cerrar centrales: solo fin subsidios, fuera de taxonomía, cierre de El Cabril (#405,#407). Sin calendario de cierre, pole -2 no soportado
eu | 0 | 0 | Y | mixto; sin postura sobre integración; #381,#498,#578,#584 ok
defense | -2 | -2 | Y | #578-580,589 ok (reducción progresiva en #578)
israel | -2 | -2 | Y | #583-584 + m29 (juicio a dirigentes, BDS solo en m29)
monarchy | -1.5 | -1.5 | Y | programa silente sobre república (grep: Corona solo en #455); inferido, low ok
memory | -2 | -2 | Y | #567-573, #492 ok
security | -2 | -2 | Y | #487-489,495-496 ok
anti_establishment | 1 | 1 | Y | retórica antiprivilegios (#453-456,472,503) pero reformista e institucional; "impago deuda ilegítima" es m20 (también #252)
animals_tradition | -2 | -2 | Y | #622,631-637 ok
religion | -2 | -2 | Y | #73,504-507 ok; Concordato/Santa Sede no mencionado explícitamente

## Errors found
- Evidence errors (wrong quote/page): 0. All cited proposal numbers exist and match content.
- fundamentals: "salida del gas en 2030" overstated; #404 = gas fuera del sistema eléctrico 2030, industria 2035. Corrected.
- nuclear miscalibrated (-2 vs text only anti-waste/subsidy). Corrected to -1.5.
- Minor: "juicio a sus dirigentes" (Israel) and BDS appear only in las29 m29, not #583-584 (evidence already cites m29).
- summary and signature page refs verified (719 = 231+105+37+23+56+55+26+13+48+27+16+82).

## Distinguishing positions (vs Podemos/Sumar-IU)
1. Andalucía nacionalidad histórica, horizonte confederal, sin ordinalidad, 55 % IRPF y 70 % IVA a CCAA (cap3 #337,339,345-346).
2. Policía autonómica, Inspección de Trabajo, paro, Cercanías y Guadalquivir traspasados a Andalucía (cap3 #348-350,354-355; cap4 #382).
3. Empresa pública de energía (filial andaluza), gas fuera del sistema eléctrico 2030, cierre de El Cabril (cap5 #399,404,407).
4. Prohibir compra de vivienda a fondos y sociedades, alquiler <=20 % renta, parque público 9 % (cap1 #161,167,185).
5. 32 h, despido 50/60 días con autorización de Inspección, abanico salarial 1:5, jubilación a los 64 y RBU (cap2 #268,272,275,298; cap1 #220).
6. Autodeterminación del Sáhara y del Rif, referéndum OTAN, cierre de Rota/Morón, selecciones deportivas y hablas andaluzas (cap9 #579-580,585; cap10 #606-608,614).
