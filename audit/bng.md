# Audit BNG (txt/bng.txt, 91 pp read sequentially to EOF)

## Page log
- p1-3: cover, index
- p4-7: introduction (priorities, compliance record, PSOE-Sumar criticism, antifascism, coherence)
- p8-10: 1. Más fuerza para Galiza: concierto económico, Facenda Galega, list of transfers (laboral, Seg. Social, policía, costas, puertos, AP-9/AP-53, SAREB)
- p11-14: 2.1 Vivienda (tope alquileres, 3% PGE, canon vacía, SOCIMI)
- p14-18: 2.2 Derechos laborales (derogar reformas, 35h, SMI 60%, ETT, desempleo, empleo público)
- p18-20: 2.3 Pensiones (derogar 2011-2023, IPC real, MEI, no planes privados)
- p20-21: 2.4 Pobreza (IMV/renta gallega, precios máx. combustibles)
- p22-23: 2.5 Inmigración (regularización, CIE, asilo, gallego y nacionalidad)
- p24-28: 2.6 Feminismo (violencia machista, abolicionismo, vientres de alquiler, conciliación)
- p28-29: 2.7 LGBT (trans, no binarias)
- p29-32: 2.8 Libertades (mordaza, prisión permanente, memoria, Amnistía 1977, referendos, Concordato, ley electoral)
- p33-36: 3.1 Educación (pública única, fin conciertos, laica, 7% PIB, universidad)
- p36-40: 3.2 Sanidad (gestión exclusivamente pública, copagos)
- p40-42: 3.3 dependencia, 3.4 anticorrupción/contratación, 3.5 supresión diputaciones
- p43-45: 4.1 Fiscalidad (IRPF, IS, IVA, impuestos banca/energéticas/fortunas)
- p45-47: 4.2 Industria (Navantia, Alcoa, Corporación Industrial Pública Galega)
- p47-51: 4.3 Agro (Mercosur, MFP, PAC), pesca (eólica marina, competencias)
- p51-53: 4.4 autónomos, 4.5 ciencia (3% PIB)
- p53-56: 4.6 Transición energética (tarifa gallega, POEM, empresa pública energía, fracking)
- p56-59: minería sostenible (20% público, zonas de reserva)
- p60-64: 5. Infraestructuras (ferrocarril, GALTRÉN, AP-9, AP-53, puertos, aeropuertos)
- p65-70: 6. Crisis ambiental (competencias, 30x30, litoral, Fosa Atlántica, eucalipto, residuos)
- p71-74: 7. Lengua y cultura (oficialidad UE, lusofonía)
- p75-83: 8. Soberanía digital (IA, algoritmos, nube pública, centros de datos)
- p84-87: 9. Juventud (voto 16, vivienda, abolición servicio militar, mordaza repetida)
- p88: 10. Deportes (selecciones gallegas)
- p89-91: 11. Paz (salida OTAN, Ucrania, Israel/Palestina, Sáhara, Schengen)

## Verdict table
dim | old | new | evid verified | note
---|---|---|---|---
tax | -1.5 | -1.5 | Y (page fixed) | 7% PIB education is p35, not p43-44; also pro-pyme (reserva capitalización 10->25%, p44) and IVA/IEE cuts: moderate
labor | -2 | -2 | Y | p15-17 confirmed
housing | -2 | -2 | Y | expropiation clause is about public-promotion homes bought by funds (p12); canon/alquiler forzoso p14; no foreign-buyer limit but still pole
welfare | -2 | -2 | Y | p18-21 confirmed
public_services | -2 | -2 | Y | added p37 (sanidad exclusivamente pública)
public_ownership | -2 | -2 | Y | also GALTRÉN p61; Corporación p46; 20% p58; energía p55-56
immigration | -1.5 | -1.5 | Y | regularización "promover" (p22-23), no mass-regularisation/ILP, so not -2
territorial | -2 | -2 | Y | added p73
feminism | -2 | -2 | Y | p24-29
bioethics | -2 | -2 | Y (silent confirmed) | grep+read: no abortion/euthanasia; inferred ok
climate | -1 | -1.5 | Y | pages corrected (fracking p56, p21 is fuel price cap); chapter 6, precaution principle, fiscalidad ambiental p45, mining restrictions p57-59 outweigh offshore/ZBE caveats
nuclear | -1.5 | -1.5 | Y (silent confirmed) | only Fosa Atlántica p68; "cierre de centrales" p56 = coal
eu | 1 | 1 | Y | p47-48, 73, 90-91 ok; added p6
defense | -2 | -2 | Y | p89-91, p86
israel | -2 | -2 | Y | "xenocidio...sionismo" p6; condena + reconocimiento Palestina p90
monarchy | -2 | -2 | Y (silent confirmed) | only injurias Coroa p30; no republic wording
memory | -2 | -2 | Y | p31-32
security | -2 | -2 | Y | p30-31, p86; "p77" ok (predictive policing veto)
anti_establishment | 0.5 | 0.5 | Y | p8
animals_tradition | -1 | -1 | Y (silent confirmed) | no bullfighting/hunting/animal text
religion | -2 | -2 | Y | p32, p35

## Errors found
- tax: "educación 7% PIB (p43-44)" wrong page -> p35; SOCIMI surcharge is p13.
- climate: fracking cited under p21 range (p21 is fuel price cap); real p56. Miscalibrated -1 -> -1.5.
- Minor omissions: public_services p37, territorial p73, eu p6.
- No fabricated quotes found; summary/fundamentals/signature pages verified.

## Distinguishing positions (quiz)
1. Concierto económico + Facenda Galega, Galiza recauda todos los impuestos (p8-9)
2. Salida de la OTAN, fin envío armas a Ucrania, cancelar acuerdos España-EEUU (p89-90)
3. AP-9/AP-53 traspaso, nacionalización y sin peajes (p10, p62)
4. Galiza libre de eólica marina, retirar POEM (p50, p54) + empresa pública gallega de energía y tarifa gallega (p54-56)
5. Derogar Ley de Amnistía de 1977 y referendos vinculantes incl. autodeterminación (p31-32)
6. Educación única red pública, fin de conciertos, 35h y SMI 60% del salario medio, voto a los 16 (p34-35, p15, p86)
