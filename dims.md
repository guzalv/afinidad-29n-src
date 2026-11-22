# Dimensions (score each -2..+2, step 0.5; extremes = extremes of the Spanish party spectrum)
id | -2 pole | +2 pole
tax | raise taxes on high incomes/wealth/companies, bigger public spending | broad tax cuts (IRPF, sucesiones, sociedades), smaller state
labor | more worker protection (shorter week, high SMI, costlier dismissal, unions) | labour flexibility, deregulation, lower social contributions
housing | strong intervention (rent caps, massive public stock, limit tourist flats/funds/foreign buyers, expropriate empty homes) | market/supply side (liberalise land, no caps, fast eviction of okupas, tax incentives to buy)
welfare | expand public benefits (pensions indexed/raised, IMV, basic income, dependency) | contain spending, private/capitalisation complements, conditional aid
public_services | 100% public health/education, end conciertos & private management | free choice, concertada, public-private collaboration, school voucher
public_ownership | public companies (public energy co., public bank), nationalisations | privatisation, free market, less state in economy
immigration | regularisation, broad legal routes, welcoming | strong restriction, deportations, national priority, closed borders
territorial | plurinational state, self-determination, own fiscal sovereignty, amnesty, co-official languages first | recentralisation, return powers to State, Spanish as vehicular language, outlaw separatism
feminism | strong feminist policy (gender violence law, trans law, parity) | repeal gender laws, "intrafamily violence", against "gender ideology"
bioethics | abortion/euthanasia as rights, enshrine them | restrict abortion, repeal euthanasia, pro-life
climate | ambitious ecological transition, more green regulation | Agenda-2030 scepticism, prioritise industry/farmers over environmental rules
nuclear | close nuclear plants on schedule | extend/expand nuclear
eu | deeper EU integration/federalism | sovereigntism, less Brussels
defense | cut military spending, leave/limit NATO | raise defence spending, firm NATO commitment
israel | embargo/sanctions on Israel, recognise genocide | alliance with Israel
monarchy | republic/referendum | defend the Crown
memory | expand historical memory law (exhumations, ban Franco apology) | repeal memory laws ("concordia")
security | repeal ley mordaza, rehabilitation focus | tougher sentences, more police, prisión permanente, anti-recidivism
anti_establishment | institutionalist, defends system & consensus | against "casta"/partitocracy, radical system change, distrust of media/institutions
animals_tradition | animal rights, end bullfighting support, limit hunting | protect bullfighting & hunting as culture
religion | strict secularism, revise Holy See agreements, religion out of school | defend Christian roots, religion in school

# Output JSON schema (write to ext/<slug>.json, valid JSON, UTF-8)
{
 "party": "...", "slug": "...",
 "summary": "2-3 sentences in Spanish",
 "fundamentals": ["8-12 bullets in Spanish: core pillars"],
 "signature": [{"text":"distinctive concrete proposal, Spanish","page":"p12"}],   // 5-8 items
 "dims": {
   "<id>": {"score": -2..2 or null, "conf": "high|med|low", "src": "programme|inferred", "evidence": "short quote or paraphrase ≤30 words + page marker"}
   // all 21 ids present
 }
}
Rules: prefer explicit programme text. If the programme is silent, you may infer from the party's well-known public stance: set src "inferred", conf "low". Use null only if truly unknowable. Be calibrated across the whole Spanish spectrum (Podemos..Vox), not relative to the party itself.
