/* Questions. e:{dim:[value or sign, weight]}. Indirect by design: no party or topic labels are shown.
   Rules: one construct per item; every option of a choice item loads on the same dimension(s);
   keep:1 = ordinal scale, its direction alternates between items to spread order effects. */
const Q=[
// --- values / indirect ---
{t:'Al diseñar una ayuda pública, ¿qué error te parece más grave?',o:[
 ['Que alguien que la necesita se quede sin ella',{welfare:[-1.5,1]}],
 ['Que alguien que no la necesita la cobre',{welfare:[1.5,1]}]]},
{k:'grid',t:'¿Cuánta confianza te inspiran…?',h:'1 = ninguna, 5 = mucha',r:[
 ['La Policía y la Guardia Civil',{security:[1,.6]}],
 ['Los sindicatos',{labor:[-1,.7]}],
 ['Las grandes empresas',{public_ownership:[1,.6]}],
 ['La Iglesia católica',{religion:[1,.8]}],
 ['Los grandes medios de comunicación',{anti_establishment:[-1,.8]}],
 ['La Unión Europea',{eu:[-1,.8]}],
 ['Las ONG que rescatan migrantes en el mar',{immigration:[-1,.7]}],
 ['La OTAN',{defense:[1,.7]}],
 ['La Casa Real',{monarchy:[1,1]}],
 ['Las centrales nucleares',{nuclear:[1,.7]}],
 ['El Gobierno de Israel',{israel:[1,.7]}]]},
{k:'lik',t:'Las tradiciones merecen respeto aunque no sepamos bien por qué existen.',e:{religion:[1,.4],animals_tradition:[1,.4],monarchy:[1,.3]}},
{t:'Cuando alguien vive en la pobreza, suele ser más por…',o:[
 ['Circunstancias que no eligió',{welfare:[-2,.8]}],
 ['Un poco de todo',{welfare:[0,.4]}],
 ['Decisiones que tomó',{welfare:[2,.8]}]],keep:1},
{k:'pick',max:3,t:'Hay dinero público extra. Elige exactamente tres destinos.',o:[
 ['Más policías y juzgados',{security:[2,.5]}],
 ['Vivienda pública en alquiler',{housing:[-2,.6]}],
 ['Bajar el IRPF',{tax:[2,.7]}],
 ['Renovables y transporte público',{climate:[-2,.5]}],
 ['Defensa y Fuerzas Armadas',{defense:[2,.6]}],
 ['Acogida de refugiados',{immigration:[-2,.5]}],
 ['Control de fronteras',{immigration:[2,.6]}],
 ['Pensiones y dependencia',{welfare:[-1.5,.4]}],
 ['Ayudas por hijo a las familias',{}],
 ['Reducir listas de espera en la sanidad',{}],
 ['Campo y mundo rural',{}]]},
// --- economy ---
{t:'Si hubiera que elegir, ¿qué preferirías?',o:[
 ['Más servicios públicos, aunque haya que pagar más impuestos',{tax:[-2,1]}],
 ['Mantener impuestos y servicios como están',{tax:[0,.5]}],
 ['Menos impuestos, aunque haya menos servicios públicos',{tax:[2,1]}]],keep:1},
{t:'Una persona hereda de sus padres una vivienda y algunos ahorros. ¿Debería pagar impuestos por ello?',o:[
 ['No: esos bienes ya pagaron impuestos',{tax:[2,1]}],
 ['Solo si la herencia es grande',{tax:[-.5,.7]}],
 ['Sí, como por cualquier otro ingreso',{tax:[-2,1]}]],keep:1},
{t:'Una empresa con beneficios quiere despedir a 50 personas para reducir costes. ¿Qué te parece más justo?',o:[
 ['Que no pueda despedir mientras tenga beneficios',{labor:[-2,1]}],
 ['Que pueda, solo si demuestra que no hay alternativa (recolocar, reducir jornada…)',{labor:[-.5,.7]}],
 ['Que pueda, pagando la indemnización que marca la ley',{labor:[1.5,1]}]],keep:1},
{t:'La jornada laboral máxima es de 40 horas semanales. Debería…',o:[
 ['Quedarse así; cada empresa ya puede pactar menos',{labor:[1.5,.8]}],
 ['Reducirse sector a sector, si lo pactan empresas y sindicatos',{labor:[0,.6]}],
 ['Reducirse por ley para todos, sin bajar sueldos',{labor:[-2,1]}]],keep:1},
{t:'En tu ciudad los alquileres han subido un 40% en cinco años. ¿Qué medida tomarías primero?',o:[
 ['Limitar por ley cuánto pueden subir los alquileres',{housing:[-2,1]}],
 ['Construir mucha vivienda pública de alquiler',{housing:[-1.5,.8]}],
 ['Liberar suelo y agilizar licencias para que se construya más',{housing:[1.5,1]}],
 ['Proteger más a los propietarios frente a impagos y ocupaciones',{housing:[2,1]}]]},
{t:'Un vecino tiene un segundo piso vacío desde hace años. La administración debería…',o:[
 ['No intervenir: es su propiedad',{housing:[2,1]}],
 ['Darle ventajas fiscales si lo alquila',{housing:[1,.7]}],
 ['Cobrarle más impuestos mientras siga vacío',{housing:[-1,.8]}],
 ['Poder ponerlo en alquiler social, pagándole una renta',{housing:[-2,1]}]],keep:1},
{t:'¿Cómo debería financiarse la jubilación?',o:[
 ['Con el sistema público, con pensiones que suban siempre con el IPC',{welfare:[-2,.9]}],
 ['Sobre todo pública, con planes de empresa como complemento',{welfare:[0,.6]}],
 ['Una parte pública y otra de ahorro individual obligatorio',{welfare:[2,.9]}]],keep:1},
{t:'Los colegios concertados (privados pagados con dinero público) deberían…',o:[
 ['Mantenerse o crecer: las familias deben poder elegir',{public_services:[2,1]}],
 ['Mantenerse solo si son gratuitos de verdad y admiten a todos',{public_services:[-.5,.7]}],
 ['Integrarse poco a poco en la red pública',{public_services:[-2,1]}]],keep:1},
{t:'Para reducir las listas de espera, ¿debería la sanidad pública pagar a clínicas privadas para que atiendan a sus pacientes?',o:[
 ['No: ese dinero debe ir a reforzar la sanidad pública',{public_services:[-2,1]}],
 ['Solo de forma puntual, mientras se refuerza la pública',{public_services:[-.5,.7]}],
 ['Sí: lo importante es que te atiendan antes',{public_services:[2,1]}]],keep:1},
{t:'Las grandes eléctricas tienen muchos beneficios mientras la factura sigue alta. ¿Qué sería lo mejor?',o:[
 ['Crear una empresa pública de energía',{public_ownership:[-2,1]}],
 ['Regular más los precios y los márgenes',{public_ownership:[-1,.8]}],
 ['Facilitar que entren nuevas empresas a competir',{public_ownership:[1.5,1]}]],keep:1},
// --- environment / energy ---
{t:'Una fábrica contaminante da 300 empleos a un pueblo. Una nueva norma ambiental obligaría a cerrarla en cinco años.',o:[
 ['Retirar la norma: el empleo es lo primero',{climate:[2,1]}],
 ['Dar más plazo y ayudas para que se adapte',{climate:[0,.6]}],
 ['Aplicar la norma y ayudar a reconvertir la zona',{climate:[-2,1]}]],keep:1},
{k:'lik',t:'Está bien restringir la entrada de coches contaminantes al centro de las ciudades, aunque perjudique a quien no puede cambiar de coche.',e:{climate:[-1,.8]}},
{t:'Las centrales nucleares españolas tienen previsto cerrar entre 2027 y 2035. ¿Qué harías?',o:[
 ['Cerrarlas según el calendario',{nuclear:[-2,1]}],
 ['Alargar su vida mientras sean seguras',{nuclear:[1.5,1]}],
 ['Alargarlas y construir otras nuevas',{nuclear:[2,1]}]],keep:1},
// --- immigration ---
{t:'Un barrio ha cambiado mucho en diez años por la llegada de personas de otros países. ¿Qué palabra te viene primero?',o:[
 ['Vida',{immigration:[-2,.8]}],['Oportunidad',{immigration:[-1,.8]}],['Incertidumbre',{immigration:[1,.8]}],['Pérdida',{immigration:[2,.8]}]]},
{t:'En España viven cientos de miles de personas sin papeles, muchas de ellas trabajando. Lo más razonable es…',o:[
 ['Expulsarlas progresivamente',{immigration:[2,1]}],
 ['Regularizar solo a quien demuestre arraigo y trabajo',{immigration:[0,.6]}],
 ['Regularizarlas',{immigration:[-2,1]}]],keep:1},
// --- territory ---
{t:'En una comunidad con dos lenguas oficiales, en la escuela pública…',o:[
 ['La lengua propia debería ser la principal, para que todos la dominen',{territorial:[-2,.8]}],
 ['Las dos deberían usarse por igual',{territorial:[0,.6]}],
 ['Las familias deberían poder elegir la lengua principal',{territorial:[1.5,.8]}],
 ['El castellano debería ser la principal',{territorial:[2,.8]}]],keep:1},
{t:'País Vasco y Navarra recaudan casi todos sus impuestos y pagan al Estado una cuota por los servicios comunes. ¿Qué te parece?',o:[
 ['Debería acabarse: mismas reglas fiscales para todos',{territorial:[2,.9]}],
 ['Bien donde ya existe, pero no debería extenderse',{territorial:[.5,.6]}],
 ['Cualquier comunidad que lo quiera debería poder hacerlo',{territorial:[-2,.9]}]],keep:1},
{t:'En una comunidad donde gran parte de la población quiere la independencia, el Estado debería…',o:[
 ['Pactar un referéndum de independencia',{territorial:[-2,1]}],
 ['Negociar más autogobierno, sin referéndum',{territorial:[-.5,.8]}],
 ['Mantener el marco actual, sin concesiones',{territorial:[1.5,.9]}],
 ['Recuperar competencias para el Estado',{territorial:[2,.9]}]],keep:1},
// --- gender / bioethics ---
{t:'Hoy en España, ¿quién lo tiene en general más difícil: un hombre joven o una mujer joven?',o:[
 ['Una mujer, claramente',{feminism:[-2,.8]}],['Una mujer, algo más',{feminism:[-1,.7]}],
 ['Más o menos igual',{feminism:[.5,.6]}],['Un hombre',{feminism:[2,.8]}]],keep:1},
{t:'La violencia de un hombre contra su pareja o expareja debería tratarse…',o:[
 ['Como cualquier violencia en la familia, sin distinguir por sexo',{feminism:[2,1]}],
 ['Con su ley específica, pero revisando lo que no funcione',{feminism:[0,.6]}],
 ['Como violencia de género, con leyes y juzgados propios',{feminism:[-2,1]}]],keep:1},
{t:'Una persona con una enfermedad incurable y gran sufrimiento pide ayuda médica para morir. ¿Debería poder recibirla?',o:[
 ['Sí',{bioethics:[-2,1]}],['Solo si está en fase terminal',{bioethics:[.5,.6]}],['No; hay que reforzar los cuidados paliativos',{bioethics:[2,1]}]],keep:1},
{k:'lik',t:'La decisión de abortar en las primeras semanas debe ser solo de la mujer.',e:{bioethics:[-1,1]}},
// --- foreign / defence ---
{t:'El gasto en defensa de España, alrededor del 2% del PIB, debería…',o:[
 ['Subir bastante',{defense:[2,1]}],['Subir algo',{defense:[1,.8]}],['Quedarse como está',{defense:[-.5,.7]}],['Bajar',{defense:[-2,1]}]],keep:1},
{t:'En los próximos años, la Unión Europea debería decidir…',o:[
 ['Muchas más cosas, hacia una Europa federal',{eu:[-2,1]}],['Algunas cosas más que ahora',{eu:[-1,.8]}],
 ['Lo mismo que ahora',{eu:[0,.6]}],['Menos cosas: más poder para cada país',{eu:[2,1]}]],keep:1},
{t:'Sobre el conflicto entre Israel y Palestina, ¿qué frase te representa más?',o:[
 ['España debería apoyar a Israel, un aliado democrático',{israel:[2,.9]}],
 ['Hay que mantener relaciones con Israel y exigirle que respete el derecho internacional',{israel:[.5,.6]}],
 ['España debe sancionar a Israel y no comerciar armas con él',{israel:[-2,1]}]],keep:1},
// --- institutions / memory / order ---
{t:'La monarquía te parece…',o:[
 ['Útil: da estabilidad y representa a todos',{monarchy:[2,1]}],['Anticuada, pero no me molesta',{monarchy:[-.5,.6]}],['Incompatible con una democracia plena',{monarchy:[-2,1]}]],keep:1},
{t:'Sobre la Guerra Civil y el franquismo, ¿con qué frase estás más de acuerdo?',o:[
 ['Hay que seguir exhumando fosas y reparar a las víctimas de la dictadura',{memory:[-2,1]}],
 ['Hay que recordar por igual a las víctimas de los dos bandos',{memory:[1,.8]}],
 ['Mejor dejarlo a los historiadores y mirar al futuro',{memory:[1.5,.8]}]]},
{k:'lik',t:'Deberían prohibirse las fundaciones y asociaciones que hacen apología del franquismo.',e:{memory:[-1,.8]}},
{t:'Un joven de 19 años es detenido por tercera vez por pequeños robos. ¿Qué sería lo más útil?',o:[
 ['Un programa de reinserción con formación y empleo',{security:[-2,1]}],
 ['Trabajos para la comunidad y reparar el daño',{security:[0,.6]}],
 ['Prisión: la reincidencia debe castigarse más',{security:[2,1]}]],keep:1},
{t:'¿Qué te preocupa más?',o:[
 ['Que la policía tenga poco margen para frenar la delincuencia',{security:[1.5,1]}],
 ['Que la policía tenga demasiado poder y se abuse de él',{security:[-1.5,1]}]]},
{t:'Sobre el sistema político español, ¿con qué frase estás más de acuerdo?',o:[
 ['Funciona razonablemente bien; basta con ajustes',{anti_establishment:[-2,1]}],
 ['Necesita reformas importantes, pero sobre la base actual',{anti_establishment:[-.5,.6]}],
 ['Necesita un cambio de raíz',{anti_establishment:[2,1]}]],keep:1},
{k:'lik',t:'Prefiero que me represente un ciudadano corriente antes que un político profesional.',e:{anti_establishment:[1,.8]}},
// --- culture ---
{t:'Un pueblo celebra sus fiestas con toros y los vecinos están divididos. ¿Qué harías?',o:[
 ['Mantenerlas como son: forman parte de su cultura',{animals_tradition:[2,1]}],
 ['Mantenerlas, pero sin maltratar ni matar al animal',{animals_tradition:[-.5,.6]}],
 ['Sustituirlas por fiestas sin animales',{animals_tradition:[-2,1]}]],keep:1},
{t:'La asignatura de Religión en la escuela pública debería…',o:[
 ['Salir del horario escolar',{religion:[-2,1]}],
 ['Sustituirse por historia de las religiones para todos',{religion:[-1,.7]}],
 ['Seguir como optativa, como ahora',{religion:[.5,.6]}],
 ['Seguir como optativa y contar para la nota media',{religion:[2,1]}]],keep:1}];
