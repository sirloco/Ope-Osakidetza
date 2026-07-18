const preguntas = [
  {
    id: 1,
    enunciado: "De acuerdo con las normas generales de ordenación de las profesiones sanitarias, para poder ejercer una profesión sanitaria será requisito imprescindible:",
    opciones: {
      a: "La colegiación, cuando una ley estatal establezca esta obligación para el ejercicio de una profesión titulada o algunas actividades propias de ésta.",
      b: "La inexistencia de inhabilitación o suspensión para el ejercicio profesional por sentencia judicial, aunque no sea firme, durante el periodo de tiempo que fije ésta; por resolución sancionadora impuesta por un colegio profesional sanitario, cuando una ley estatal establezca para este ejercicio la obligación de pertenecer al colegio profesional respectivo durante el periodo de tiempo que fije ésta; o por resolución administrativa sancionadora firme, durante el periodo de tiempo que fije ésta, cuando se ejerza la profesión en el ámbito de la asistencia sanitaria pública.",
      c: "Tener suscrito y vigente un seguro de responsabilidad, un aval u otra garantía financiera, ya sean de protección personal o colectiva, que cubra las indemnizaciones que se puedan derivar de la responsabilidad profesional por un eventual daño a las personas, causado con ocasión de la prestación de tal asistencia o servicios, cuando se ejerza la profesión en el ámbito de la asistencia sanitaria pública.",
      d: "Todo lo anterior."
    },
    respuesta_correcta: "a"
  },
  {
    id: 2,
    enunciado: "Según lo establecido en la normativa vigente sobre ordenación de las profesiones sanitarias, para poder ejercer una profesión sanitaria:",
    opciones: {
      a: "Se ha de tener suscrito y vigente un seguro de responsabilidad que cubra las indemnizaciones que se puedan derivar de la responsabilidad profesional por un eventual daño a las personas causado con ocasión de la prestación de tal asistencia o servicios cuando se ejerza la profesión en el ámbito de la asistencia sanitaria privada, no siendo suficiente un aval u otra garantía financiera de protección colectiva.",
      b: "Se ha de tener suscrito y vigente un seguro de responsabilidad, un aval u otra garantía financiera, sean de protección personal o colectiva, que cubra las indemnizaciones que se puedan derivar de la responsabilidad profesional por un eventual daño a las personas causado con ocasión de la prestación de tal asistencia o servicios cuando se ejerza la profesión en el ámbito de la asistencia sanitaria privada.",
      c: "Se ha de tener suscrito y vigente un seguro de responsabilidad, un aval u otra garantía financiera, sean de protección personal o colectiva, que cubra las indemnizaciones que se puedan derivar de la responsabilidad profesional por un eventual daño a las personas causado con ocasión de la prestación de tal asistencia o servicios cuando se ejerza la profesión en el ámbito de la asistencia sanitaria pública.",
      d: "Todas las opciones son falsas."
    },
    respuesta_correcta: "b"
  },
  {
    id: 3,
    enunciado: "Con la finalidad de facilitar la observancia de los requisitos previstos en la normativa vigente para ejercer las profesiones sanitarias (señálese la afirmación que sea falsa):",
    opciones: {
      a: "Los juzgados y tribunales deberán remitir aquellos datos necesarios referentes a las sentencias firmes de inhabilitación o suspensión para el ejercicio profesional al Ministerio de Sanidad, Servicios Sociales e Igualdad en la forma que reglamentariamente se establezca.",
      b: "Las administraciones públicas con competencias sancionadoras sobre el personal sanitario a su servicio deberán remitir las resoluciones sancionadoras que afecten a la situación de suspensión o habilitación de dicho personal.",
      c: "Las corporaciones colegiales deberán remitir al Ministerio de Sanidad, Servicios Sociales e Igualdad copia de las resoluciones sancionadoras que suspendan o inhabiliten para el ejercicio profesional impuestas por ellos, cuando una ley estatal establezca para este ejercicio la obligación de colegiación siempre que la persona colegiada no se oponga explícitamente.",
      d: "El Ministerio de Sanidad, Servicios Sociales e Igualdad comunicará a las entidades mencionadas en las opciones b) y c) anteriores, las resoluciones sancionadoras que reciba."
    },
    respuesta_correcta: "c"
  },
  {
    id: 4,
    enunciado: "Según la normativa vigente, el órgano encargado del Registro Estatal de Profesionales Sanitarios podrá (indíquese la que sea correcta):",
    opciones: {
      a: "Consultar los datos de carácter personal de la población profesional sanitaria contenidos en los archivos y ficheros del Documento Nacional de Identidad (DNI) y del Número de Identidad de Extranjero (NIE) competencia del Ministerio del Interior, para contrastar la veracidad de la información que consta en el registro.",
      b: "Consultar los datos de carácter personal de la población profesional sanitaria contenidos en los archivos y ficheros del Documento Nacional de Identidad (DNI) y del Número de Identidad de Extranjero (NIE) competencia del Ministerio del Interior, para contrastar la veracidad de la información que consta en el registro, pero solo si la persona titular no se ha opuesto explícitamente.",
      c: "Consultar los datos de carácter personal de los profesionales sanitarios contenidos en los archivos y ficheros del Documento Nacional de Identidad (DNI) y del Número de Identidad de Extranjero (NIE) competencia del Ministerio del Interior, para contrastar la veracidad de la información que consta en el registro, pero solo si la persona titular de los datos da su consentimiento expreso.",
      d: "Solo podrá consultar los datos de carácter personal de la población profesional sanitaria contenidos en los archivos y ficheros del Documento Nacional de Identidad (DNI) y del Número de Identidad de Extranjero (NIE) en el curso de una investigación sobre una infracción administrativa."
    },
    respuesta_correcta: "a"
  },
  {
    id: 5,
    enunciado: "En el marco de la ordenación de las profesiones sanitarias, las personas pacientes:",
    opciones: {
      a: "Tienen derecho a la libre elección del personal facultativo que debe atenderles, tanto si su ejercicio profesional se desarrolla en el sistema público como en el ámbito privado.",
      b: "Tienen derecho a la libre elección del personal facultativo que debe atenderles, pero solo si su ejercicio profesional se desarrolla en el sistema público.",
      c: "Tienen derecho a la libre elección del personal facultativo que debe atenderles, pero solo si su ejercicio profesional se desarrolla en el ámbito privado.",
      d: "Ninguna de las anteriores es correcta."
    },
    respuesta_correcta: "a"
  },
  {
    id: 6,
    enunciado: "Según la normativa de ordenación de las profesiones sanitarias, el personal profesional y las personas responsables de los centros sanitarios facilitarán a sus pacientes el ejercicio del derecho a conocer:",
    opciones: {
      a: "El nombre, la titulación, la especialidad y la hoja de servicios del personal sanitario que les atiende, así como la categoría y función de dicho personal, si así estuvieran definidas en su centro o institución.",
      b: "El nombre, la titulación y la especialidad del personal sanitario que les atiende y su categoría, pero no su función en su centro o institución.",
      c: "El nombre, la titulación y la especialidad del personal sanitario que les atiende, así como la categoría y función de dicho personal, si así estuvieran definidas en su centro o institución.",
      d: "El nombre, la titulación y la especialidad del personal sanitario que les atiende, pero no su categoría y función en su centro o institución."
    },
    respuesta_correcta: "c"
  },
  {
    id: 7,
    enunciado: "De acuerdo con las normas generales de ordenación de las profesiones sanitarias, el ejercicio del derecho del personal profesional sanitario a la renuncia a la atención a una persona paciente queda condicionado a que (señálese la respuesta incorrecta):",
    opciones: {
      a: "Su renuncia no conlleve desatención de la persona paciente.",
      b: "La renuncia se ejerza de acuerdo con procedimientos regulares.",
      c: "Quede constancia, aunque no sea formal, de la renuncia.",
      d: "La renuncia se ejerza de acuerdo con procedimientos establecidos y explícitos."
    },
    respuesta_correcta: "c"
  },
  {
    id: 8,
    enunciado: "De acuerdo con las normas generales de ordenación de las profesiones sanitarias, las personas pacientes tienen derecho a recibir información de acuerdo con lo establecido en:",
    opciones: {
      a: "La Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de los derechos y obligaciones en materia de información y documentación clínica.",
      b: "La Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas.",
      c: "El Código Civil vigente.",
      d: "Ninguna de las anteriores."
    },
    respuesta_correcta: "a"
  },
  {
    id: 9,
    enunciado: "De acuerdo con la Ley 44/2003, de 21 de noviembre, de ordenación de las profesiones sanitarias, corresponde al personal con la titulación de Licenciatura o Grado en Medicina la indicación y realización de las actividades dirigidas a (señálese la respuesta incorrecta):",
    opciones: {
      a: "La promoción y mantenimiento de la salud de las personas pacientes.",
      b: "La dispensación de los medicamentos a las personas pacientes.",
      c: "La prevención de las enfermedades y al diagnóstico, tratamiento, terapéutica y rehabilitación de las personas pacientes.",
      d: "El enjuiciamiento y pronóstico de los procesos objeto de atención."
    },
    respuesta_correcta: "b"
  },
  {
    id: 10,
    enunciado: "Los centros sanitarios revisarán que el personal sanitario de su plantilla cumple los requisitos necesarios para ejercer la profesión conforme a lo previsto en la Ley 44/2003, de 21 de noviembre, de ordenación de las profesiones sanitarias y en las demás normas aplicables:",
    opciones: {
      a: "Cada cinco años como mínimo.",
      b: "Cada tres años como mínimo.",
      c: "Cada dos años como mínimo.",
      d: "Cada cuatro años como mínimo."
    },
    respuesta_correcta: "b"
  },
  {
    id: 11,
    enunciado: "Según dispone la Ley 44/2003, de 21 de noviembre, de ordenación de las profesiones sanitarias, cuando una actuación sanitaria se realice por un equipo de profesionales (señálese la respuesta incorrecta):",
    opciones: {
      a: "Se articulará, preferentemente, de forma jerarquizada atendiendo a los criterios de conocimientos y competencia y, en su caso, al de titulación del personal profesional que integra el equipo, en función de la actividad concreta a desarrollar, de la confianza y conocimiento recíproco de las capacidades de quienes forman el equipo, y de los principios de accesibilidad y continuidad asistencial de las personas atendidas.",
      b: "Se articulará de forma jerarquizada o colegiada, atendiendo a los criterios de conocimientos y competencia y, en su caso, al de titulación del personal profesional que integra el equipo, en función de la actividad concreta a desarrollar, de la confianza y conocimiento recíproco de las capacidades de quienes forman el equipo, y de los principios de accesibilidad y continuidad asistencial de las personas atendidas.",
      c: "Se articulará de forma preferentemente colegiada, atendiendo a los criterios de conocimientos y competencia y, en su caso, al de titulación del personal profesional que integra el equipo, en función de la actividad concreta a desarrollar, de la confianza y conocimiento recíproco de las capacidades de quienes forman el equipo, y de los principios de accesibilidad y continuidad asistencial de las personas atendidas.",
      d: "Ninguna de las anteriores es correcta."
    },
    respuesta_correcta: "d"
  },
  {
    id: 12,
    enunciado: "A los efectos de la Ley 44/2003, de 21 de noviembre, de ordenación de las profesiones sanitarias tienen la consideración de funciones de gestión clínica (señálese la respuesta incorrecta):",
    opciones: {
      a: "Las relativas a la jefatura o coordinación de unidades y equipos sanitarios y asistenciales.",
      b: "Las de tutorías y organización de formación especializada, continuada y de investigación.",
      c: "Las de creación y difusión de contenidos a través de las redes sociales gestionadas por la unidad correspondiente.",
      d: "Las de participación en comités internos o proyectos institucionales de los centros sanitarios dirigidos, entre otros, a asegurar la calidad, seguridad, eficacia, eficiencia y ética asistencial, la continuidad y coordinación entre niveles o el acogimiento, cuidados y bienestar de las personas pacientes."
    },
    respuesta_correcta: "c"
  },
  {
    id: 13,
    enunciado: "De acuerdo con la Ley 44/2003, de 21 de noviembre, de ordenación de las profesiones sanitarias, el ejercicio de funciones de gestión clínica estará sometido a una evaluación del desempeño y de los resultados que tendrá lugar:",
    opciones: {
      a: "Anualmente.",
      b: "Cada dos años.",
      c: "Cada cuatro años.",
      d: "La Ley no lo determina explícitamente."
    },
    respuesta_correcta: "d"
  },
  {
    id: 14,
    enunciado: "De acuerdo con la normativa vigente de ordenación de las profesiones sanitarias, el reconocimiento del desempeño de funciones de gestión clínica:",
    opciones: {
      a: "Se evaluará cuidadosamente cada dos años, de acuerdo con lo dispuesto en la Ley 44/2003, de 21 de noviembre, de ordenación de las profesiones sanitarias.",
      b: "Será objeto del oportuno reconocimiento por parte del centro, del servicio de salud y del conjunto del sistema sanitario, en la forma en que en cada comunidad autónoma se determine.",
      c: "Se realizará siempre por parte del Ministerio de Sanidad.",
      d: "Todas las anteriores son incorrectas."
    },
    respuesta_correcta: "b"
  },
  {
    id: 15,
    enunciado: "Según la Ley 44/2003, de 21 de noviembre, de ordenación de las profesiones sanitarias, señale cuál de estas afirmaciones es incorrecta:",
    opciones: {
      a: "Los equipos de profesionales, una vez constituidos y aprobados en el seno de organizaciones o instituciones sanitarias, serán reconocidos y apoyados, y sus actuaciones facilitadas, por los órganos directivos y gestores de las mismas.",
      b: "La responsabilidad de la capacidad del personal profesional para realizar una correcta actuación, en las tareas y funciones que les sean encomendadas en el proceso de distribución del trabajo en equipo, recaerá sobre los centros e instituciones en los que desempeñen su actividad.",
      c: "Dentro de un equipo de profesionales, será posible la delegación de actuaciones si las condiciones bajo las que se producirá tal delegación están previamente establecidas dentro del equipo.",
      d: "La responsabilidad de un equipo de profesionales recaerá en aquellas personas integrantes que hayan adquirido las tareas y funciones que hayan causado la responsabilidad, siempre que las condiciones de la delegación se adecúen a lo establecido."
    },
    respuesta_correcta: "d"
  },
  {
    id: 16,
    enunciado: "Quien ostente la titularidad de los centros sanitarios y los servicios de salud podrá formalizar convenios y conciertos con el Instituto de Salud Carlos III, con otros centros de investigación, públicos o privados, y con otras instituciones que tengan interés en la investigación sanitaria, para (señálese la respuesta incorrecta):",
    opciones: {
      a: "El desarrollo de programas de investigación.",
      b: "La designación de la tutoría de la investigación.",
      c: "La dotación de plazas vinculadas o específicas de investigación, en los establecimientos sanitarios.",
      d: "El establecimiento de sistemas específicos de formación de personal investigador durante el período inmediatamente anterior a la obtención del título de especialista."
    },
    respuesta_correcta: "d"
  },
  {
    id: 17,
    enunciado: "De acuerdo con la Ley 44/2003, de 21 de noviembre, de ordenación de las profesiones sanitarias, diga cuál de los siguientes principios generales de la relación entre las personas que ejercen profesiones sanitarias y las personas atendidas no es tal:",
    opciones: {
      a: "El personal profesional tiene el deber de hacer un uso racional de los recursos diagnósticos y terapéuticos a su cargo, tomando en consideración, entre otros, los costes de sus decisiones y evitando la sobreutilización, la infrautilización y la inadecuada utilización de los mismos.",
      b: "El personal profesional tiene el deber de prestar una atención sanitaria técnica y profesional adecuada a las necesidades de salud de las personas que atiende, de acuerdo con el estado de desarrollo de los conocimientos científicos de cada momento y con los niveles de calidad y seguridad que se establecen en esta ley y el resto de normas legales y deontológicas aplicables.",
      c: "El personal profesional tiene el deber de proporcionar a las personas pacientes información precisa sobre su formación profesional, la forma en que han actualizado sus conocimientos y las demandas de responsabilidad que hayan podido derivar en responsabilidades administrativas.",
      d: "El personal profesional tiene el deber de respetar la personalidad, dignidad e intimidad de las personas a su cuidado y debe respetar su participación en las tomas de decisiones que les afecten. En todo caso, deben ofrecer una información suficiente y adecuada para que puedan ejercer su derecho al consentimiento sobre dichas decisiones."
    },
    respuesta_correcta: "c"
  },
  {
    id: 18,
    enunciado: "De acuerdo con la Ley 44/2003, de 21 de noviembre, de ordenación de las profesiones sanitarias, la eficacia organizativa de los servicios, secciones y equipos, o unidades asistenciales equivalentes sea cual sea su denominación, requerirá (señálese la que sea incorrecta):",
    opciones: {
      a: "La existencia escrita de normas de funcionamiento interno.",
      b: "La definición de objetivos y funciones tanto generales como específicas para cada persona perteneciente al mismo.",
      c: "La cumplimentación por parte del personal profesional de la documentación asistencial, informativa o estadística que determine el centro.",
      d: "La realización de controles periódicos sobre la eficiencia del personal profesional sanitario."
    },
    respuesta_correcta: "d"
  },
  {
    id: 19,
    enunciado: "De acuerdo con la Ley 44/2003, de 21 de noviembre, de ordenación de las profesiones sanitarias, señálese la afirmación incorrecta:",
    opciones: {
      a: "Los centros sanitarios acreditados para la formación especializada deberán contar con una comisión de docencia.",
      b: "Los centros sanitarios acreditados para la formación especializada deberán contar con jefaturas de estudios y con la coordinación docente que resulten adecuados en función de su capacidad docente.",
      c: "Los centros sanitarios acreditados para la formación especializada deberán contar con el personal tutor de la formación que resulte adecuado en función de su capacidad docente.",
      d: "Los centros sanitarios acreditados para la formación especializada deberán contar con jefaturas de estudios, coordinación docente y personal tutor de la formación que resulten adecuados en función de su capacidad docente, pero no con una comisión de docencia."
    },
    respuesta_correcta: "d"
  },
  {
    id: 20,
    enunciado: "De acuerdo con la Ley 44/2003, de 21 de noviembre, de ordenación de las profesiones sanitarias, los centros sanitarios acreditados para desarrollar programas de formación continuada:",
    opciones: {
      a: "Deberán contar con jefaturas de estudios, con la coordinación docente y con el personal tutor de la formación que resulten adecuados en función de las actividades a desarrollar, así como con una figura de defensoría del alumnado.",
      b: "Deberán contar una comisión de docencia, así como con jefaturas de estudios, coordinación docente y personal tutor de la formación que resulten adecuados en función de las actividades a desarrollar.",
      c: "Deberán contar una comisión de docencia y con una figura de defensoría del alumnado, así como con jefaturas de estudios, coordinación docente y personal tutor de la formación que resulten adecuados en función de las actividades a desarrollar.",
      d: "Todas las anteriores son incorrectas."
    },
    respuesta_correcta: "d"
  },
  {
    id: 21,
    enunciado: "Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, sus disposiciones se aplicarán a:",
    opciones: {
      a: "A los servicios sanitarios de financiación pública y a los privados, en los mismos términos.",
      b: "A los servicios sanitarios de financiación pública. También a los privados en lo que se refiere al control de las actividades de salud pública y en materia de garantías de información, seguridad y calidad.",
      c: "A los servicios sanitarios de financiación pública y a los privados concertados.",
      d: "Únicamente a los servicios sanitarios de financiación pública."
    },
    respuesta_correcta: "b"
  },
  {
    id: 22,
    enunciado: "Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, para hacer efectivo el derecho a la protección de la salud y a la atención sanitaria, las personas titulares de los mismos deberán:",
    opciones: {
      a: "Tener nacionalidad española y residencia habitual en el territorio español.",
      b: "Tener reconocido su derecho a la asistencia sanitaria en España por cualquier otro título jurídico, aun no teniendo su residencia habitual en territorio español, siempre que no exista un tercero obligado al pago de dicha asistencia.",
      c: "Ser persona extranjera y con residencia legal y habitual en el territorio español y no tener la obligación de acreditar la cobertura obligatoria de la prestación sanitaria por otra vía.",
      d: "Todas las respuestas anteriores son correctas."
    },
    respuesta_correcta: "d"
  },
  {
    id: 23,
    enunciado: "Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la ciudadanía tendrá los siguientes derechos en el conjunto del Sistema Nacional de Salud:",
    opciones: {
      a: "A recibir asistencia sanitaria en su comunidad autónoma de residencia.",
      b: "A recibir el reembolso de los gastos derivados de la asistencia en la sanidad privada cuando se trate de servicios recogidos en el catálogo de prestaciones del Sistema Nacional de Salud.",
      c: "A recibir el reembolso de los gastos derivados de la asistencia sanitaria del catálogo de prestaciones del Sistema Nacional de Salud que pudiera requerir del servicio de salud de la comunidad autónoma en la que se encuentre desplazado/a.",
      d: "Ninguna de las respuestas anteriores es correcta."
    },
    respuesta_correcta: "a"
  },
  {
    id: 24,
    enunciado: "Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la cartera común de servicios del Sistema Nacional de Salud se articula en torno a las siguientes modalidades:",
    opciones: {
      a: "Cartera común básica de servicios asistenciales, cartera común suplementaria y cartera común de servicios accesorios.",
      b: "Cartera común básica nacional de servicios asistenciales y cartera común autonómica de servicios asistenciales.",
      c: "Cartera común nacional básica de servicios asistenciales, cartera común suplementaria autonómica y cartera común de servicios accesorios autonómicos.",
      d: "Cartera común nacional y autonómica básica de servicios asistenciales, cartera común nacional y autonómica suplementaria y cartera común nacional y autonómica de servicios accesorios."
    },
    respuesta_correcta: "a"
  },
  {
    id: 25,
    enunciado: "Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la cartera común básica de servicios asistenciales del Sistema Nacional de Salud:",
    opciones: {
      a: "Se acordará en el seno del Consejo Interterritorial del Sistema Nacional de Salud y se aprobará en la Ley General de Presupuestos del Estado.",
      b: "Se acordará en el seno del Consejo Interterritorial del Sistema Nacional de Salud y se aprobará mediante Real Decreto.",
      c: "Se acordará en el seno del Consejo Interterritorial del Sistema Nacional de Salud y se aprobará en las normas autonómicas correspondientes.",
      d: "Se acordará en el seno de la Conferencia de Presidentes de las Comunidades Autónomas y se aprobará en las normas autonómicas correspondientes"
    },
    respuesta_correcta: "b"
  },
  {
    id: 26,
    enunciado: "Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la cartera común básica de servicios asistenciales del Sistema Nacional de Salud comprende:",
    opciones: {
      a: "Todas las actividades asistenciales de prevención, diagnóstico, tratamiento y rehabilitación que se realicen en centros sanitarios o sociosanitarios, así como el transporte sanitario urgente, la prestación farmacéutica y la prestación ortoprotésica, cubiertos de forma completa por financiación pública.",
      b: "Todas las actividades asistenciales de prevención, diagnóstico, tratamiento y rehabilitación que se realicen en centros sanitarios o sociosanitarios, así como el transporte sanitario urgente y la prestación farmacéutica, cubiertos de forma completa por financiación pública.",
      c: "Todas las actividades asistenciales de prevención, diagnóstico, tratamiento y rehabilitación que se realicen en centros sanitarios o sociosanitarios, así como el transporte sanitario urgente, y la prestación ortoprotésica, cubiertos de forma completa por financiación pública.",
      d: "Todas las actividades asistenciales de prevención, diagnóstico, tratamiento y rehabilitación que se realicen en centros sanitarios o sociosanitarios, así como el transporte sanitario urgente, cubiertos de forma completa por financiación pública."
    },
    respuesta_correcta: "d"
  },
  {
    id: 27,
    enunciado: "Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la cartera común suplementaria del Sistema Nacional de Salud incluirá las siguientes prestaciones:",
    opciones: {
      a: "Únicamente la prestación farmacéutica.",
      b: "Únicamente la prestación ortoprotésica.",
      c: "Únicamente la prestación farmacéutica y la prestación ortoprotésica.",
      d: "La prestación farmacéutica, la prestación ortoprotésica y la prestación con productos dietéticos."
    },
    respuesta_correcta: "d"
  },
  {
    id: 28,
    enunciado: "Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la cartera común de servicios accesorios del Sistema Nacional de Salud incluye:",
    opciones: {
      a: "Todas aquellas actividades, servicios o técnicas, sin carácter de prestación, que no se consideran esenciales y/o que son coadyuvantes o de apoyo para la mejora de una patología de carácter crónico, estando sujetas a aportación y/o reembolso por parte de la persona usuaria.",
      b: "Todas aquellas actividades, servicios o técnicas, sin carácter de prestación, que no se consideran esenciales y/o que son coadyuvantes o de apoyo para la mejora de una patología de carácter crónico, estando sujetas siempre a aportación de la persona usuaria.",
      c: "Todas aquellas actividades, servicios o técnicas, sin carácter de prestación, que no se consideran esenciales y/o que son coadyuvantes o de apoyo para la mejora de una patología de carácter crónico, estando sujetas a siempre a reembolso por parte de la persona usuaria.",
      d: "Todas aquellas actividades, servicios o técnicas, sin carácter de prestación, que no se consideran esenciales y/o que son coadyuvantes o de apoyo para la mejora de una patología de carácter crónico, pero también cubiertos de forma completa por financiación pública."
    },
    respuesta_correcta: "a"
  },
  {
    id: 29,
    enunciado: "Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, las comunidades autónomas, en el ámbito de sus competencias, podrán aprobar sus respectivas carteras de servicios que incluirán, cuando menos:",
    opciones: {
      a: "La cartera común de servicios del Sistema Nacional de Salud en su modalidad básica de servicios asistenciales.",
      b: "La cartera común de servicios del Sistema Nacional de Salud en sus modalidades básica de servicios asistenciales y suplementaria.",
      c: "La cartera común de servicios del Sistema Nacional de Salud en sus modalidades básica de servicios asistenciales, suplementaria y de servicios accesorios.",
      d: "Ninguna de las respuestas anteriores es correcta."
    },
    respuesta_correcta: "c"
  },
  {
    id: 30,
    enunciado: "Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, las comunidades autónomas, podrán incorporar en sus carteras de servicios una técnica, tecnología o procedimiento no contemplado en la cartera común de servicios del Sistema Nacional de Salud. Con anterioridad a su incorporación, la comunidad autónoma concernida deberá informar, de forma motivada, al Consejo Interterritorial del Sistema Nacional de Salud:",
    opciones: {
      a: "Esta afirmación es correcta.",
      b: "Esta afirmación es correcta, salvo en lo que se refiere a la obligación de informar.",
      c: "Esta afirmación es correcta, salvo en lo que se refiere a que la información deberá ser motivada.",
      d: "Esta afirmación es falsa."
    },
    respuesta_correcta: "a"
  },
  {
    id: 31,
    enunciado: "Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la prestación de atención primaria no comprenderá:",
    opciones: {
      a: "La atención a la salud bucodental.",
      b: "La atención paliativa a personas enfermas terminales.",
      c: "La rehabilitación básica.",
      d: "Ninguna de las respuestas anteriores es correcta."
    },
    respuesta_correcta: "d"
  },
  {
    id: 32,
    enunciado: "Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, para la elaboración del contenido de la cartera común de servicios del Sistema Nacional de Salud:",
    opciones: {
      a: "Es preceptivo el informe favorable de la Red Española de Agencias de Evaluación de Tecnologías Sanitarias y Prestaciones del Sistema Nacional de Salud, en relación con la eficacia, eficiencia, efectividad, seguridad y utilidad terapéuticas, así como las ventajas y alternativas asistenciales, el cuidado de grupos menos protegidos o de riesgo y las necesidades sociales, así como su impacto económico y organizativo.",
      b: "Se contará con la participación de la Red Española de Agencias de Evaluación de Tecnologías Sanitarias y Prestaciones del Sistema Nacional de Salud, en la evaluación de la eficacia, eficiencia, efectividad, seguridad y utilidad terapéuticas, así como las ventajas y alternativas asistenciales, el cuidado de grupos menos protegidos o de riesgo y las necesidades sociales, así como su impacto económico y organizativo.",
      c: "Es preceptivo el informe favorable de las sociedades científicas implicadas, en relación con la eficacia, eficiencia, efectividad, seguridad y utilidad terapéuticas, así como las ventajas y alternativas asistenciales, el cuidado de grupos menos protegidos o de riesgo y las necesidades sociales, así como su impacto económico y organizativo.",
      d: "Se contará con la participación de las sociedades científicas implicadas, en la evaluación de la eficacia, eficiencia, efectividad, seguridad y utilidad terapéuticas, así como las ventajas y alternativas asistenciales, el cuidado de grupos menos protegidos o de riesgo y las necesidades sociales, así como su impacto económico y organizativo."
    },
    respuesta_correcta: "b"
  },
  {
    id: 33,
    enunciado: "Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la exclusión de una técnica, tecnología o procedimiento actualmente incluido en la cartera de servicios se llevará a cabo cuando:",
    opciones: {
      a: "Se evidencie su falta de eficacia, efectividad o eficiencia, o que el balance entre beneficio y riesgo sea significativamente desfavorable.",
      b: "Requiera una formación para la que no exista la especialidad médica correspondiente.",
      c: "Hayan cambiado las condiciones económicas de su implantación.",
      d: "Todas las respuestas anteriores son correctas."
    },
    respuesta_correcta: "a"
  },
  {
    id: 34,
    enunciado: "Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, los servicios de referencia:",
    opciones: {
      a: "Serán designados en el seno del Consejo Interterritorial del Sistema Nacional de Salud y acreditados por el Ministerio de Sanidad y Consumo.",
      b: "Serán designados en el seno del Consejo Interterritorial del Sistema Nacional de Salud y acreditados por la autoridad correspondiente de la Comunidad Autónoma donde se ubiquen.",
      c: "Serán designados y acreditados en el seno del Consejo Interterritorial del Sistema Nacional de Salud.",
      d: "Serán designados en el seno del Consejo Interterritorial del Sistema Nacional de Salud, acreditados por el Ministerio de Sanidad y Consumo y financiados por la Comunidad Autónoma donde se ubiquen."
    },
    respuesta_correcta: "a"
  },
  {
    id: 35,
    enunciado: "Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la decisión sobre la financiación de los medicamentos de uso humano y veterinario corresponde:",
    opciones: {
      a: "Al Consejo Interterritorial del Sistema Nacional de Salud.",
      b: "Al Ministerio de Sanidad y Consumo.",
      c: "A cada Comunidad Autónoma.",
      d: "Al Ministerio de Economía y Hacienda."
    },
    respuesta_correcta: "b"
  },
  {
    id: 36,
    enunciado: "Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, el diseño de programas de formación y modernización de los recursos humanos del Sistema Nacional de Salud corresponde:",
    opciones: {
      a: "A la Comisión de Recursos Humanos del Sistema Nacional de Salud, sin perjuicio de las competencias de las comunidades autónomas.",
      b: "Al Ministerio de Educación, sin prejuicio de las competencias de las comunidades autónomas.",
      c: "A las comunidades autónomas, sin perjuicio de las competencias del Ministerio de Educación.",
      d: "A las comunidades autónomas, sin perjuicio de las competencias de la Comisión de Recursos Humanos del Sistema Nacional de Salud."
    },
    respuesta_correcta: "a"
  },
  {
    id: 37,
    enunciado: "A los efectos de la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la competencia profesional es:",
    opciones: {
      a: "La acreditación de formación continuada a lo largo del desempeño de su carrera profesional.",
      b: "La competencia acreditada por el título correspondiente acreditativo de la adquisición de conocimientos requeridos para el desempeño del puesto designado.",
      c: "La aptitud del personal profesional sanitario para integrar y aplicar los conocimientos, habilidades y actitudes asociados a las buenas prácticas de su profesión para resolver los problemas que se le plantean.",
      d: "La superación del proceso selectivo oficial convocado por la autoridad competente para la adquisición del vínculo estatutario con los servicios sanitarios."
    },
    respuesta_correcta: "c"
  },
  {
    id: 38,
    enunciado: "Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la tarjeta sanitaria individual incluirá los siguientes datos:",
    opciones: {
      a: "Exclusivamente los datos básicos de identificación de la persona titular de la tarjeta.",
      b: "Exclusivamente los datos básicos de identificación de la persona titular de la tarjeta y del derecho que le asiste en relación con la prestación farmacéutica.",
      c: "Los datos básicos de identificación de la persona titular de la tarjeta, del derecho que le asiste en relación con la prestación farmacéutica y del servicio de salud o entidad responsable de la asistencia sanitaria.",
      d: "Los datos básicos de identificación de la persona titular de la tarjeta, del derecho que le asiste en relación con la prestación farmacéutica, del servicio de salud o entidad responsable de la asistencia sanitaria y del personal profesional al que está adscrito en atención primaria."
    },
    respuesta_correcta: "c"
  },
  {
    id: 39,
    enunciado: "Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la infraestructura para la mejora de la calidad del Sistema Nacional de Salud estará constituida por los elementos siguientes:",
    opciones: {
      a: "El registro de agresiones a profesionales de la sanidad, con el fin de adopción de medidas preventivas.",
      b: "El registro de acontecimientos adversos, que recogerá información sobre aquellas practices que hayan resultado un problema potencial de seguridad para la persona paciente.",
      c: "Las respuestas a) y b) son correctas.",
      d: "Las respuestas a) y b) son falsas."
    },
    respuesta_correcta: "b"
  },
  {
    id: 40,
    enunciado: "Según dispone la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud, la declaración de actuaciones coordinadas en salud pública y en seguridad alimentaria deberán encuadrarse en alguno de los supuestos siguientes:",
    opciones: {
      a: "Responder a situaciones de especial riesgo o alarma para la salud pública.",
      b: "Establecer planes preventivos para hacer frente a situaciones de especial riesgo o alarma para la salud pública.",
      c: "Realizar análisis epidemiológicos que permitan establecer estructuras y recursos según las previsiones en materia de salud pública y seguridad alimentaria.",
      d: "Las respuestas a) y b) son verdaderas y la c) es falsa."
    },
    respuesta_correcta: "a"
  },
  {
    id: 41,
    enunciado: "El objeto de la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud es:",
    opciones: {
      a: "Establecer las bases reguladoras de la relación funcionarial especial del personal estatutario de los servicios de salud que conforman el Sistema Nacional de Salud.",
      b: "Establecer el Estatuto Marco del personal estatutario vinculado por una relación laboral especial a los servicios de salud que integran el Sistema Nacional de Salud.",
      c: "Establecer las bases reguladoras de la relación funcionarial del personal estatutario de los servicios de salud que conforman el Sistema Nacional de Salud.",
      d: "Ninguna de las anteriores respuestas es correcta."
    },
    respuesta_correcta: "a"
  },
  {
    id: 42,
    enunciado: "Según dispone la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud, la ordenación del régimen personal estatutario de los servicios de salud se rige por una serie de principios y criterios. Señale cuales no están entre los mencionados por esta ley:",
    opciones: {
      a: "Sometimiento pleno a la ley y el derecho.",
      b: "Igualdad, mérito, capacidad y promoción en el acceso a la condición de personal estatutario.",
      c: "Integración en el régimen organizativo y funcional del servicio de salud y de sus centros e instituciones.",
      d: "Coordinación, cooperación y mutua información entre las Administraciones sanitarias públicas."
    },
    respuesta_correcta: "b"
  },
  {
    id: 43,
    enunciado: "El personal estatutario de los servicios de salud que conforman el Sistema Nacional de Salud:",
    opciones: {
      a: "No ostenta el derecho individual a la libre sindicación.",
      b: "Ostenta el derecho a la actividad sindical.",
      c: "Ostenta el derecho de reunión, que podrá ejercerlo siempre que cuente con la necesaria autorización previa.",
      d: "Todas las respuestas son correctas."
    },
    respuesta_correcta: "b"
  },
  {
    id: 44,
    enunciado: "La condición de personal estatutario fijo se adquiere, tal y como prevé la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud, por el cumplimiento de los siguientes requisitos:",
    opciones: {
      a: "Incorporación a una plaza de servicio, institución o centro que corresponda en el plazo fijado en la convocatoria tras la superación de las pruebas de selección.",
      b: "Superación de las pruebas de selección; nombramiento conferido por el órgano competente; e incorporación a una plaza del servicio, institución o centro que corresponda en el plazo de un mes.",
      c: "Superación de las pruebas de selección; nombramiento conferido por el órgano competente; e incorporación, previo cumplimiento de los requisitos formales en cada caso establecidos, a una plaza del servicio, institución o centro que corresponda en el plazo determinado en la convocatoria.",
      d: "Superación de las pruebas de selección; nombramiento conferido por el órgano competente; e incorporación a una plaza del servicio, institución o centro que corresponda en todo caso en el plazo determinado en la convocatoria."
    },
    respuesta_correcta: "c"
  },
  {
    id: 45,
    enunciado: "Según dice la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud, en el proceso de la adquisición de la condición de personal estatutario fijo, no podrán recibir nombramiento y quedarán sin efecto las actuaciones de quienes:",
    opciones: {
      a: "No acrediten que reúnen los requisitos y condiciones exigidos en la convocatoria, una vez superado el proceso selectivo.",
      b: "No acrediten que reúnen los requisitos y condiciones exigidos en la convocatoria, con carácter previo a la superación del proceso selectivo.",
      c: "No acrediten que reúnen los requisitos y condiciones exigidos en la convocatoria, una vez firmada la convocatoria.",
      d: "Una vez superado el proceso selectivo, automáticamente se procede al nombramiento por el órgano competente."
    },
    respuesta_correcta: "a"
  },
  {
    id: 46,
    enunciado: "La pérdida de la condición de personal estatutario regulada en la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud, se produce:",
    opciones: {
      a: "Siempre en caso de pena de inhabilitación especial para empleo o cargo público, afecte o no al correspondiente nombramiento.",
      b: "En caso de que se adopte la pena de inhabilitación absoluta sea firme o no.",
      c: "En caso de que se adopte la pena de inhabilitación especial para la correspondiente profesión, siempre que esta exceda de seis años.",
      d: "En caso de que se adopte la pena de inhabilitación especial para la correspondiente profesión, siempre que esta exceda de tres años."
    },
    respuesta_correcta: "c"
  },
  {
    id: 47,
    enunciado: "Conforme a la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud, señale cuál de las siguientes afirmaciones no es correcta:",
    opciones: {
      a: "La jubilación puede ser forzosa o voluntaria.",
      b: "Para que la persona interesada pueda prolongar su permanencia en servicio activo hasta cumplir los 70 años, bastará con que lo solicite voluntariamente.",
      c: "La jubilación forzosa se declarará al cumplir la persona interesada 65 años.",
      d: "Podrá optar a la jubilación voluntaria, total o parcial, el personal estatutario que reúna los requisitos establecidos en la legislación de Seguridad Social."
    },
    respuesta_correcta: "b"
  },
  {
    id: 48,
    enunciado: "Procede la extinción de la condición de personal estatutario fijo de los servicios de salud:",
    opciones: {
      a: "Cuando se produzca la pérdida de la nacionalidad.",
      b: "En caso de recaer sanción firme disciplinaria de separación del servicio.",
      c: "Siempre que se imponga una pena principal o accesoria de inhabilitación especial para empleo o cargo público o para el ejercicio de la correspondiente profesión.",
      d: "Todas las anteriores respuestas son correctas."
    },
    respuesta_correcta: "d"
  },
  {
    id: 49,
    enunciado: "En materia de retribuciones, la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud, prevé que:",
    opciones: {
      a: "El sistema retributivo del personal estatutario se estructura en retribuciones básicas y retribuciones complementarias.",
      b: "La evaluación del personal estatutario a efectos de determinación de una parte de la retribuciones complementarias se establecerá a través de procedimientos fundados en los principios igualdad, objetividad y transparencia.",
      c: "El sistema retributivo del personal estatutario responde a los principios de cualificación técnica y profesional.",
      d: "Todas las respuestas son correctas."
    },
    respuesta_correcta: "d"
  },
  {
    id: 50,
    enunciado: "De acuerdo con la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud, señale la respuesta correcta respecto a las retribuciones del personal estatutario de los servicios de salud:",
    opciones: {
      a: "Las retribuciones básicas son: el sueldo asignado a cada categoría en función del título exigido para su desempeño; los trienios; y las pagas extraordinarias.",
      b: "Las retribuciones básicas serán iguales en todos los servicios de salud independientemente de la anualidad en la que se perciban.",
      c: "El personal estatutario temporal percibirá la totalidad de las retribuciones que, en el correspondiente servicio de salud, correspondan a su nombramiento, con excepción del complemento de carrera.",
      d: "El complemento de atención continuada está destinado a retribuir la iniciativa continuada y permanente de la persona titular del puesto."
    },
    respuesta_correcta: "a"
  },
  {
    id: 51,
    enunciado: "La pérdida de la condición de personal estatutario de los servicios de salud se produce cuando la incapacidad permanente sea declarada:",
    opciones: {
      a: "En grado de incapacidad permanente total para la profesión habitual.",
      b: "En grado de incapacidad absoluta para todo trabajo.",
      c: "En grado de gran invalidez.",
      d: "Todas las respuestas son correctas."
    },
    respuesta_correcta: "d"
  },
  {
    id: 52,
    enunciado: "La Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud, establece que:",
    opciones: {
      a: "El tiempo de trabajo es el período en el que el personal permanece en el centro sanitario.",
      b: "Solo se considera tiempo de trabajo aquel en el que el personal se encuentre dentro del centro sanitario en su puesto de trabajo y en el ejercicio de su actividad y funciones.",
      c: "Para el cómputo del tiempo de trabajo, se puede tomar en consideración tanto el tiempo en el que se permanece en el centro sanitario como fuera de dicho centro.",
      d: "Ninguna de las respuestas anteriores es correcta."
    },
    respuesta_correcta: "c"
  },
  {
    id: 53,
    enunciado: "En el supuesto del personal estatutario de los servicios de salud:",
    opciones: {
      a: "El período de localización es aquel período de tiempo en el que el personal se encuentra únicamente en situación de disponibilidad.",
      b: "Se considera período de descanso todo período de tiempo que no sea tiempo de trabajo.",
      c: "El trabajo por turnos es una forma de organización del trabajo en equipo con arreglo al ritmo rotatorio y siempre de tipo continuo.",
      d: "El período de localización es aquel período de tiempo en el que el personal se encuentra en situación de disponibilidad a los solos efectos de asegurar su posible localización."
    },
    respuesta_correcta: "b"
  },
  {
    id: 54,
    enunciado: "Para el personal estatutario de los servicios de salud, el período nocturno tendrá la siguiente duración:",
    opciones: {
      a: "Mínima de siete horas e incluirá necesariamente el período comprendido entre las cero y las cinco horas de cada día natural.",
      b: "Mínima de ocho horas e incluirá necesariamente el período comprendido entre las cero y las cinco horas de cada día natural.",
      c: "Mínima de ocho horas e incluirá necesariamente el período comprendido entre las doce y las cinco horas de cada día natural.",
      d: "Mínima de siete horas e incluirá necesariamente el período comprendido entre las doce y las cinco horas de cada día natural."
    },
    respuesta_correcta: "a"
  },
  {
    id: 55,
    enunciado: "Atendiendo a lo dispuesto en la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud, señale la respuesta que no es correcta:",
    opciones: {
      a: "Para superarse la duración máxima conjunta de la jornada ordinaria y la jornada complementaria, será suficiente con justificar por parte del centro sanitario que existen razones organizativas o asistenciales que así lo justifiquen.",
      b: "Podrá superarse la duración máxima conjunta de la jornada ordinaria y de la jornada complementaria cuando el personal lo consienta y siempre que existan razones organizativas o asistenciales que así lo justifiquen en aras a garantizar la adecuada atención continuada y permanente",
      c: "Podrá superarse la duración máxima conjunta de la jornada ordinaria y de la jornada complementaria siempre previa oferta expresa del centro sanitario.",
      d: "Los excesos de jornada tendrán el carácter de jornada complementaria y un límite máximo de 150 horas anuales."
    },
    respuesta_correcta: "a"
  },
  {
    id: 56,
    enunciado: "Respecto a la jornada y descansos diarios del personal estatutario de los servicios de salud, es correcta la siguiente afirmación:",
    opciones: {
      a: "El tiempo de trabajo correspondiente a la jornada ordinaria será siempre de 12 horas ininterrumpidas.",
      b: "El personal tiene derecho a un período mínimo de descanso ininterrumpido de 8 horas entre el fin de una jornada y el comienzo de la siguiente.",
      c: "Se podrán establecer jornadas ordinarias de hasta 24 horas con carácter excepcional y cuando así lo aconsejen razones organizativas o asistenciales.",
      d: "El descanso ininterrumpido de 12 horas entre el fin de una jornada y el comienzo de la siguiente solo podrá reducirse en el caso de trabajo a turnos, cuando el personal cambie de equipo y no pueda disfrutar del período de descanso diario entre el final de la jornada de un equipo y el comienzo de la jornada del siguiente."
    },
    respuesta_correcta: "c"
  },
  {
    id: 57,
    enunciado: "Según establece la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud:",
    opciones: {
      a: "Resulta incompatible para el personal estatutario de los servicios de salud el ejercicio de las funciones sanitarias con cualquier otro tipo de funciones.",
      b: "Al personal estatutario de los servicios de salud le resulta aplicable el mismo régimen de incompatibilidades establecido para el personal funcionario.",
      c: "Atendiendo a lo que establezca la legislación vigente, el personal estatutario de los servicios de salud podrá compatibilizar las funciones sanitarias y docente.",
      d: "Para el personal licenciado sanitario el complemento específico resulta irrenunciable."
    },
    respuesta_correcta: "c"
  },
  {
    id: 58,
    enunciado: "La Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud regula el descanso semanal. Señale la respuesta que no es correcta:",
    opciones: {
      a: "El personal tendrá derecho a un período mínimo que siempre será fijo de descanso ininterrumpido con una duración media de 24 horas semanales.",
      b: "El período de referencia para el cálculo del período de descanso semanal será de tres meses.",
      c: "En el caso de que no se hubiera disfrutado del tiempo mínimo de descanso semanal en el período de tres meses se producirá una compensación a través del régimen de descansos alternativos.",
      d: "El período de referencia para el cálculo del período de descanso semanal será de dos meses."
    },
    respuesta_correcta: "b"
  },
  {
    id: 59,
    enunciado: "Conforme a la Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud:",
    opciones: {
      a: "El personal tendrá derecho a una vacación retribuida cuya duración no será inferior en ningún caso a 30 días naturales.",
      b: "El personal estatutario de los servicios de salud podrá elegir sustituir el período de vacación por una compensación económica.",
      c: "Solo podrá ser sustituido por una compensación económica el período vacacional anual mediante la programación funcional de los centros, cuando así lo aconsejen razones organizativas.",
      d: "Anualmente, el personal tendrá derecho a una vacación retribuida cuya duración no será inferior a 30 días naturales, o al tiempo que proporcionalmente corresponda en función del tiempo de servicios."
    },
    respuesta_correcta: "d"
  },
  {
    id: 60,
    enunciado: "La excedencia voluntaria solicitada por el personal estatutario de los servicios de salud por interés particular exige haber prestado servicios efectivos en cualquiera de las Administraciones públicas durante:",
    opciones: {
      a: "Los cinco años inmediatamente anteriores.",
      b: "Los cuatro años inmediatamente anteriores.",
      c: "Los dos años inmediatamente anteriores.",
      d: "Los tres años inmediatamente anteriores."
    },
    respuesta_correcta: "a"
  },
  {
    id: 61,
    enunciado: "La Ley 8/1997, de 26 de junio, de ordenación Sanitaria de Euskadi, establece que la Administración sanitaria vasca debe garantizar la tutela general de la salud pública a través de:",
    opciones: {
      a: "Medidas preventivas.",
      b: "Promoción de la salud.",
      c: "Prestaciones sanitarias individuales.",
      d: "Son correctas todas las respuestas."
    },
    respuesta_correcta: "d"
  },
  {
    id: 62,
    enunciado: "La Ley 8/1997, de 26 de junio, de ordenación Sanitaria de Euskadi, reconoce la universalidad del derecho a la protección de la salud para:",
    opciones: {
      a: "Todas las personas residentes en el territorio de Euskadi, así como para las personas transeúntes.",
      b: "Todas las personas residentes en Euskadi o fuera de Euskadi, así como para las personas transeúntes.",
      c: "Solo para las personas que tengan vecindad administrativa en Euskadi.",
      d: "Solo para las personas de quienes pueda predicarse la condición política de vascos."
    },
    respuesta_correcta: "a"
  },
  {
    id: 63,
    enunciado: "Señale cuál de los siguientes principios no se enuncian entre los principios informadores del sistema sanitario de Euskadi en la Ley 8/1997, de 26 de junio, de ordenación Sanitaria de Euskadi:",
    opciones: {
      a: "Universalidad.",
      b: "Solidaridad ciudadana.",
      c: "Equidad.",
      d: "Calidad de los servicios."
    },
    respuesta_correcta: "b"
  },
  {
    id: 64,
    enunciado: "La Ley 8/1997, de 26 de junio, de ordenación Sanitaria de Euskadi, establece respecto a las áreas de salud que:",
    opciones: {
      a: "La Comunidad Autónoma del País Vasco se divide territorialmente en áreas de salud de acuerdo con la situación socio-económica de cada demarcación geográfica.",
      b: "En cada área de salud pueden ponerse en práctica las actuaciones esenciales que requiere la tutela general de la salud pública y exclusivamente la asistencia sanitaria primaria .",
      c: "En cada área de salud se garantizará una adecuada ordenación de la atención primaria y su coordinación con la atención especializada.",
      d: "Son correctas la a) y la c)."
    },
    respuesta_correcta: "c"
  },
  {
    id: 65,
    enunciado: "Según la Ley 8/1997, de 26 de junio, de ordenación Sanitaria de Euskadi, señale que respuesta no es correcta. Son principios programáticos de organización y funcionamiento del sistema sanitario de Euskadi los siguientes:",
    opciones: {
      a: "La optimización del marco de cualquier tipo de financiación del catálogo de prestaciones sanitarias que asegure la Comunidad Autónoma de Euskadi.",
      b: "La orientación prioritaria de los medios y actuaciones a la promoción de la salud y a la prevención de las enfermedades.",
      c: "El desarrollo interno de la organización mediante el principio de separación de los cometidos de regulación y financiación del sistema respecto de la provisión de servicios sanitarios.",
      d: "La responsabilización y participación del personal profesional sanitario en las decisiones de organización y gestión de los recursos que tengan asignados."
    },
    respuesta_correcta: "a"
  },
  {
    id: 66,
    enunciado: "La Ley 8/1997, de 26 de junio, de ordenación Sanitaria de Euskadi prevé la creación de sistemas de información necesarios para facilitar el ejercicio adecuado de los distintos niveles de responsabilidad en el sistema. A tal fin, los datos de carácter personal relativos a la salud podrán ser recabados y tratados siempre que se cumplan los siguientes requisitos:",
    opciones: {
      a: "Siempre debe constar el previo consentimiento de la persona afectada.",
      b: "Si no consta el previo consentimiento de la persona afectada se requiere que la actuación se encuentre debidamente autorizada y se efectúe previo procedimiento de disociación que garantice el anonimato de la información.",
      c: "Que conste el previo consentimiento de la persona afectada por escrito y que se garantice el anonimato de la información.",
      d: "Basta con que la actuación se encuentre debidamente autorizada."
    },
    respuesta_correcta: "b"
  },
  {
    id: 67,
    enunciado: "La Ley 8/1997, de 26 de junio, de Ordenación Sanitaria de Euskadi contempla que:",
    opciones: {
      a: "El acceso de la ciudadanía a los servicios sanitarios de cobertura pública garantizará el principio de igualdad formal.",
      b: "El acceso de la ciudadanía a cualquier servicio sanitario garantizará el principio de igualdad efectiva.",
      c: "El acceso de la ciudadanía a los servicios sanitarios de cobertura pública garantizará el principio de igualdad efectiva.",
      d: "El acceso de la ciudadanía a los servicios sanitarios garantizará el principio de universalidad."
    },
    respuesta_correcta: "c"
  },
  {
    id: 68,
    enunciado: "La Ley 8/1997, de 26 de junio, de Ordenación Sanitaria de Euskadi al contemplar los derechos y deberes ciudadanos, alude a:",
    opciones: {
      a: "La obligación de dejar constancia escrita de todo proceso diagnóstico o terapéutico.",
      b: "La obligación de dejar constancia por cualquier medio de todo proceso diagnóstico.",
      c: "La obligación de dejar constancia por cualquier medio de todo proceso diagnóstico o terapéutico.",
      d: "No existe en la Ley ninguna previsión a este respecto, de modo que será el personal facultativo el que decida si el proceso diagnóstico o terapéutico debe quedar registrado."
    },
    respuesta_correcta: "a"
  },
  {
    id: 69,
    enunciado: "Atendiendo a lo dispuesto en la Ley 8/1997, de 26 de junio, de Ordenación Sanitaria de Euskadi, señale cuál es la afirmación correcta con relación a los consejos de participación comunitaria :",
    opciones: {
      a: "Tienen facultades decisorias en la formulación de planes y objetivos generales del sistema.",
      b: "Se les atribuyen facultades consultivas y de asesoramiento en la formulación de planes y objetivos generales del sistema.",
      c: "Su composición responde exclusivamente a criterios de representatividad territorial.",
      d: "Su composición responde a criterios de representatividad territorial y podrán incorporarse, cuando así lo decida su presidencia, además de representantes de las Administraciones locales y forales, representantes de los colegios profesionales sanitarios."
    },
    respuesta_correcta: "b"
  },
  {
    id: 70,
    enunciado: "El contrato-programa, tal y como establece la Ley 8/1997, de 26 de junio, de Ordenación Sanitaria de Euskadi:",
    opciones: {
      a: "Es el instrumento jurídico mediante el que se articulan las relaciones entre el Gobierno Vasco y las organizaciones del ente público Osakidetza-Servicio Vasco de Salud para la provisión de servicios sanitarios.",
      b: "Es el instrumento jurídico mediante el que se articulan de manera directa las relaciones entre el Departamento competente en materia de sanidad y las organizaciones del ente público Osakidetza-Servicio Vasco de Salud que tiene naturaleza jurídica de concierto.",
      c: "Es el instrumento jurídico mediante el que se articulan de manera directa las relaciones entre el Departamento competente en materia de sanidad y las  organizaciones del ente público Osakidetza-Servicio Vasco de Salud que tiene naturaleza jurídica de un convenio de carácter especial.",
      d: "Ninguna respuesta es correcta."
    },
    respuesta_correcta: "c"
  },
  {
    id: 71,
    enunciado: "Osakidetza-Servicio Vasco de Salud se constituye como:",
    opciones: {
      a: "Ente público con personalidad jurídica propia y adscrito al Departamento de la Administración General competente en materia de salud.",
      b: "Ente público de derecho privado con personalidad jurídica propia.",
      c: "Ente público de derecho público al que se le atribuye personalidad jurídica propia.",
      d: "Ninguna respuesta es correcta."
    },
    respuesta_correcta: "b"
  },
  {
    id: 72,
    enunciado: "El consejo de administración de Osakidetza-Servicio Vasco de Salud está integrado por:",
    opciones: {
      a: "La persona titular de la presidencia y por un número no superior a cinco miembros en representación de la Administración de la Comunidad Autónoma de Euskadi.",
      b: "La persona titular de la presidencia y por un número no superior a tres miembros en representación de la Administración de la Comunidad Autónoma de Euskadi.",
      c: "La persona titular de la presidencia y por cinco miembros en representación del Departamento competente en materia de sanidad.",
      d: "La persona titular de la presidencia, la Consejería del Departamento competente en materia de sanidad y tres miembros en representación de la Administración de la Comunidad Autónoma de Euskadi."
    },
    respuesta_correcta: "a"
  },
  {
    id: 73,
    enunciado: "Según establece la Ley 8/1997, de 26 de junio, de Ordenación Sanitaria de Euskadi:",
    opciones: {
      a: "El Plan de Salud de Euskadi debe ser aprobado por el Parlamento Vasco.",
      b: "El Departamento competente en materia de sanidad debe elaborar semestralmente y remitir al Parlamento un informe con la evaluación de los objetivos y determinaciones del Plan de Salud de Euskadi.",
      c: "El Departamento competente en materia de sanidad debe elaborar anualmente y remitir al Parlamento un informe con la evaluación de los objetivos y determinaciones del Plan de Salud de Euskadi.",
      d: "Son correctas las respuestas a) y c)."
    },
    respuesta_correcta: "c"
  },
  {
    id: 74,
    enunciado: "A los efectos de la Ley 8/1997, de 26 de junio, de Ordenación Sanitaria de Euskadi, las plantillas de personal del ente público Osakidetza-Servicio Vasco de Salud:",
    opciones: {
      a: "Serán aprobadas por la Presidencia a propuesta del consejo de administración.",
      b: "Se denomina así al número de efectivos de carácter estructural con que cuentan tanto su organización central de administración como las organizaciones de servicios dependientes de Osakidetza-Servicio Vasco de Salud.",
      c: "Deberán ajustarse al número máximo de efectivos, según grupos profesionales, que anualmente aprobará su consejo de administración a propuesta del Departamento de Sanidad.",
      d: "Deberán ajustarse al número máximo de efectivos, según grupos de titulación, que anualmente aprobará el Departamento de Sanidad."
    },
    respuesta_correcta: "b"
  },
  {
    id: 75,
    enunciado: "La dirección, planificación y programación del sistema sanitario de Euskadi es competencia:",
    opciones: {
      a: "Del Gobierno Vasco.",
      b: "Del presidente del ente público Osakidetza-Servicio Vasco de Salud a propuesta de su consejo de administración.",
      c: "Del Parlamento Vasco.",
      d: "Del Departamento competente en materia de sanidad."
    },
    respuesta_correcta: "a"
  },
  {
    id: 76,
    enunciado: "En el ámbito territorial de la Comunidad Autónoma de Euskadi, las inspecciones necesarias para asegurar el cumplimiento de lo previsto en la Ley 8/1997, de 26 de junio, de Ordenación Sanitaria de Euskadi y en el resto de la legislación sanitaria corresponde:",
    opciones: {
      a: "A la inspección de trabajo del País Vasco adscrita al Departamento de trabajo y empleo del Gobierno Vasco.",
      b: "En todos los casos a las corporaciones locales de la Comunidad Autónoma.",
      c: "Al Departamento competente en materia de sanidad.",
      d: "La inspección en materia sanitaria no es competencia de la Comunidad Autónoma de Euskadi."
    },
    respuesta_correcta: "c"
  },
  {
    id: 77,
    enunciado: "Señale cuál de los siguientes criterios no está contemplado en la Ley 8/1997, de 26 de junio, de Ordenación Sanitaria de Euskadi para la clasificación de las infracciones en leves, graves o muy graves:",
    opciones: {
      a: "La cuantía de la indemnización solicitada.",
      b: "Los riesgos para la salud.",
      c: "El grado de intencionalidad.",
      d: "La gravedad de la alteración sanitaria y social producida."
    },
    respuesta_correcta: "a"
  },
  {
    id: 78,
    enunciado: "Según establece la Ley 8/1997, de 26 de junio, de Ordenación Sanitaria de Euskadi, en materia de sanciones señale la respuesta correcta:",
    opciones: {
      a: "Las infracciones serán sancionadas exclusivamente con sanción pecuniaria o económica.",
      b: "En los casos de infracciones muy graves, el Gobierno Vasco podrá acordar el cierre temporal del establecimiento, instalación o servicio por un plazo máximo de cinco años.",
      c: "Sin perjuicio de la multa que proceda imponer, en ciertos casos, la sanción económica que se imponga podrá ser incrementada hasta el triple de la cuantía del beneficio ilícito obtenido.",
      d: "En los casos de infracciones muy graves, el Gobierno Vasco podrá acordar el cierre temporal del establecimiento, instalación o servicio por un plazo máximo de tres años."
    },
    respuesta_correcta: "b"
  },
  {
    id: 79,
    enunciado: "Según la Ley 8/1997, de 26 de junio, de Ordenación Sanitaria de Euskadi, las organizaciones a través de las que se procede a la provisión de servicios sanitarios con medios adscritos al ente público Osakidetza-Servicio Vasco de Salud:",
    opciones: {
      a: "Realizarán su actividad bajo el principio de autonomía económico-financiera y de gestión.",
      b: "Se configurarán como instituciones de titularidad privada y con personalidad jurídica propia.",
      c: "Se crearán por ley como entidades de titularidad pública y con personalidad jurídica propia.",
      d: "Para realizar su actividad dependen presupuestariamente del ente público Osakidetza- Servicio Vasco de Salud."
    },
    respuesta_correcta: "a"
  },
  {
    id: 80,
    enunciado: "Respecto al personal sujeto al régimen estatutario que establece la Ley 8/1997, de 26 de junio, de Ordenación Sanitaria de Euskadi, señale la respuesta correcta:",
    opciones: {
      a: "Este vínculo estatutario se adquiere mediante el cumplimiento de los dos siguientes requisitos: superación del proceso selectivo correspondiente y nombramiento conferido por autoridad competente.",
      b: "Los principios que rigen el procedimiento selectivo para la adquisición del vínculo estatutario son exclusivamente el de igualdad, mérito y capacidad.",
      c: "Los instrumentos de clasificación del personal sujeto a este régimen estatutario son el grupo de titulación, el grupo profesional, la categoría y el puesto funcional que se desempeñe.",
      d: "El grupo de titulación constituye el instrumento de clasificación del personal en base al agrupamiento unitario de las aptitudes profesionales y contenido específico da las tareas propias de la prestación."
    },
    respuesta_correcta: "c"
  },
  {
    id: 81,
    enunciado: "El ente público Osakidetza-Servicio Vasco de Salud es:",
    opciones: {
      a: "El Ente Institucional de la Comunidad Autónoma, de naturaleza pública y bajo la calificación de ente público de derecho privado o público.",
      b: "El Ente Institucional de la Comunidad Autónoma, de naturaleza pública y bajo la calificación de ente público de derecho público",
      c: "El Ente Institucional de la Comunidad Autónoma, de naturaleza pública y bajo la calificación de ente público de derecho privado",
      d: "Las tres anteriores son erróneas"
    },
    respuesta_correcta: "c"
  },
  {
    id: 82,
    enunciado: "En desarrollo de su objeto, el ente público Osakidetza-Servicio Vasco de Salud perseguirá a través de todas sus organizaciones los siguientes fines (señálese la respuesta incorrecta):",
    opciones: {
      a: "Ejecutar la provisión del servicio público sanitario en la Comunidad Autónoma de Euskadi.",
      b: "Promocionar el desarrollo de sus recursos sanitarios a través de acciones y programas propios o en colaboración con otras instituciones, y cualquier otro fin relacionado con su objeto que decida su Dirección General.",
      c: "Promover la formación y actualización de los conocimientos especializados que requiere su personal sanitario y no sanitario, tanto en el campo específico de la salud como en los de la gestión y administración sanitarias.",
      d: "Proporcionar a las personas que accedan a sus servicios las condiciones necesarias para el pleno ejercicio de sus derechos y deberes de carácter instrumental o complementario."
    },
    respuesta_correcta: "b"
  },
  {
    id: 83,
    enunciado: "Corresponderá la presidencia del ente público Osakidetza-Servicio Vasco de Salud a:",
    opciones: {
      a: "Quien ostente la presidencia del Gobierno (Lehendakari) de la Comunidad Autónoma del País Vasco.",
      b: "La Diputación General del Territorio Histórico en que esté situado el Ente.",
      c: "La presidencia a quien ostente la titularidad del Departamento de Sanidad y la presidencia de honor a quien ostente la presidencia del Gobierno (Lehendakari) de la Comunidad Autónoma del País Vasco.",
      d: "Quien ostente la titularidad de del Departamento de Sanidad."
    },
    respuesta_correcta: "d"
  },
  {
    id: 84,
    enunciado: "La función de nombrar y separar a quienes ocupen las Direcciones de División de la organización central del ente público Osakidetza-Servicio Vasco de Salud corresponde a:",
    opciones: {
      a: "El Consejo de Administración del Ente.",
      b: "La Dirección General del Ente.",
      c: "La Presidencia del Ente.",
      d: "Ninguno de los anteriores."
    },
    respuesta_correcta: "a"
  },
  {
    id: 85,
    enunciado: "La composición del Consejo del ente público Osakidetza-Servicio Vasco de Salud contará, además de la persona que ejerza la Presidencia:",
    opciones: {
      a: "Con cinco integrantes en representación de la Administración de la Comunidad Autónoma, que nombrará el Gobierno: una persona a propuesta de la titularidad del Departamento de Hacienda y Administración Pública, otra a propuesta de quien ostente la titularidad de Bienestar Social y las tres restantes a propuesta de la persona titular de Sanidad.",
      b: "Con cinco integrantes en representación de la Administración de la Comunidad Autónoma, que nombrará el Gobierno: una persona a propuesta de la titularidad del Departamento de Hacienda y Administración Pública, otra a propuesta de la persona titular de la Consejería de Presidencia y las tres restantes a propuesta de la persona titular de Sanidad.",
      c: "Con cinco integrantes en representación de la Administración de la Comunidad Autónoma, que nombrará el Gobierno: dos a propuesta de la persona titular del Departamento de Hacienda y Administración Pública y las tres restantes a propuesta de la persona titular de Sanidad.",
      d: "Ninguna de los anteriores."
    },
    respuesta_correcta: "c"
  },
  {
    id: 86,
    enunciado: "La función de aprobar los criterios y líneas generales de actuación del ente público Osakidetza-Servicio Vasco de Salud corresponde a:",
    opciones: {
      a: "El Consejo de Administración del Ente.",
      b: "La Dirección General del Ente.",
      c: "La Presidencia del Ente.",
      d: "Ninguno de los anteriores."
    },
    respuesta_correcta: "a"
  },
  {
    id: 87,
    enunciado: "La propuesta de Plan Estratégico del ente público Osakidetza-Servicio Vasco de Salud:",
    opciones: {
      a: "Será formulada por la Dirección General del Ente.",
      b: "Será aprobada por la Presidencia del Ente.",
      c: "Será sometida a informe del Consejo de Administración del Ente.",
      d: "Todas las anteriores son ciertas."
    },
    respuesta_correcta: "a"
  },
  {
    id: 88,
    enunciado: "La función de convocar, presidir, suspender y levantar las sesiones, arbitrar las deliberaciones del Consejo de Administración del ente público OsakidetzaServicio vasco de salud y decidir los empates con su voto de calidad corresponderá a:",
    opciones: {
      a: "La Dirección General.",
      b: "La Presidencia.",
      c: "La persona de mayor antigüedad del Consejo de Administración.",
      d: "Ninguna de las anteriores."
    },
    respuesta_correcta: "b"
  },
  {
    id: 89,
    enunciado: "De acuerdo con el Decreto 255/1997, de 11 de noviembre, por el que se establecen los Estatutos Sociales del ente público Osakidetza-Servicio Vasco de Salud, para el desarrollo de sus funciones, la Dirección General del ente público Osakidetza-Servicio Vasco de Salud contará con el apoyo de un equipo directivo formado por:",
    opciones: {
      a: "Dos Direcciones de División.",
      b: "Tres Direcciones de División.",
      c: "Cuatro Direcciones de División.",
      d: "La norma no establece el número concreto de Direcciones de División."
    },
    respuesta_correcta: "b"
  },
  {
    id: 90,
    enunciado: "La persona titular de la Dirección General del ente público OsakidetzaServicio Vasco de Salud:",
    opciones: {
      a: "No podrá asistir a las reuniones del Consejo de Administración del Ente.",
      b: "Presidirá las reuniones del Consejo de Administración del Ente.",
      c: "Asistirá a las reuniones del Consejo de Administración del Ente con voz y voto.",
      d: "Asistirá a las reuniones del Consejo de Administración del Ente con voz y sin voto."
    },
    respuesta_correcta: "d"
  },
  {
    id: 91,
    enunciado: "Corresponde a la organización central de administración y gestión corporativa del ente público Osakidetza-Servicio Vasco de Salud, en materia de gestión asistencial (señálese la respuesta incorrecta):",
    opciones: {
      a: "Supervisar el cumplimiento de las políticas generales de calidad y realizar auditorías.",
      b: "Definir criterios generales y proponer la política de precios correspondiente a la prestación de servicios sanitarios incluida en la cobertura pública.",
      c: "Coordinar los recursos y, en su caso, proponer medidas de intervención sobre las listas de espera.",
      d: "Promover protocolos de interés general."
    },
    respuesta_correcta: "b"
  },
  {
    id: 92,
    enunciado: "Corresponde a la organización central de administración y gestión corporativa del ente público Osakidetza-Servicio Vasco de Salud, en materia de gestión de recursos humanos (señálese la respuesta incorrecta):",
    opciones: {
      a: "Supervisar, controlar y evaluar las políticas de personal del Ente.",
      b: "Promover acuerdos de cooperación con centros correspondientes a la sanidad privada.",
      c: "Dirigir el funcionamiento del registro de personal.",
      d: "Gestionar los procesos de selección y de provisión que el Consejo de Administración determine, por su carácter general, previsible número de aspirantes u otras circunstancias análogas, y, a tal fin, convocarlos, establecer sus bases, programas y contenidos, y designar a los tribunales calificadores de los mismos."
    },
    respuesta_correcta: "b"
  },
  {
    id: 93,
    enunciado: "De acuerdo con lo que señala el Decreto 255/1997, de 11 de noviembre, por el que se establecen los Estatutos Sociales del ente público Osakidetza-Servicio Vasco de Salud, cada organización de servicios sanitarios dependiente del ente público tendrá definido su objeto de actividad o ámbito de actuación sanitaria de conformidad con lo dispuesto específicamente en la:",
    opciones: {
      a: "Ley 41/2002 de Autonomía del Paciente.",
      b: "Ley 8/1997, de 26 de junio, de Ordenación sanitaria de Euskadi.",
      c: "Decreto 17/2022, de 1 de febrero, del Registro Vasco de Profesionales del ámbito sanitario.",
      d: "Ninguna de las anteriores."
    },
    respuesta_correcta: "b"
  },
  {
    id: 94,
    enunciado: "Corresponde a cada organización de servicios sanitarios del ente público Osakidetza-Servicio Vasco de Salud el ejercicio de todas las facultades de gestión y administración que se requieran para el ejercicio de la actividad de provisión de servicios sanitarios que tengan encomendada, quedando excluidas únicamente:",
    opciones: {
      a: "Aquellas facultades de gestión centralizada que los estatutos sociales del ente público Osakidetza-Servicio Vasco de Salud atribuyen expresamente a la organización central del Ente Público y las competencias propias de otras instancias de acuerdo con las Leyes y Reglamentos vigentes.",
      b: "Aquellas facultades de gestión centralizada que los estatutos sociales del ente público Osakidetza-Servicio Vasco de Salud atribuyen expresamente a la Presidencia del ente público y las competencias propias de otras instancias de acuerdo con las Leyes y Reglamentos vigentes.",
      c: "Aquellas facultades de gestión centralizada que los estatutos sociales del ente público Osakidetza-Servicio Vasco de Salud atribuyen expresamente al Consejo de Administración del ente público y las competencias propias de otras instancias de acuerdo con las Leyes y Reglamentos vigentes.",
      d: "Ninguna de las anteriores."
    },
    respuesta_correcta: "a"
  },
  {
    id: 95,
    enunciado: "El número de integrantes del equipo directivo de las organizaciones de servicios sanitarios del ente público Osakidetza-Servicio Vasco de Salud:",
    opciones: {
      a: "Oscilará entre dos y tres.",
      b: "Oscilará entre tres y cuatro.",
      c: "Oscilará entre cuatro y cinco.",
      d: "La normativa que rige su estatuto jurídico no establece un número determinado sino un máximo de cinco."
    },
    respuesta_correcta: "d"
  },
  {
    id: 96,
    enunciado: "La función de Representar al ente público Osakidetza-Servicio Vasco de Salud en la negociación colectiva del Acuerdo Marco de Condiciones de Trabajo del Personal corresponde a:",
    opciones: {
      a: "La organización central de administración y gestión corporativa del ente público Osakidetza-Servicio Vasco de Salud.",
      b: "La Presidencia del ente público Osakidetza-Servicio Vasco de Salud.",
      c: "El Consejo de Administración del ente público Osakidetza-Servicio Vasco de Salud.",
      d: "Ninguna de las anteriores."
    },
    respuesta_correcta: "a"
  },
  {
    id: 97,
    enunciado: "Para el desarrollo de funciones de propuesta y asesoramiento, así como de participación en las organizaciones de servicios sanitarios, existirá un Consejo de Dirección en cada una de ellas, integrado por:",
    opciones: {
      a: "El equipo directivo, las jefaturas de unidad que se determinen y una representación de personas vocales electas que formen parte de los Consejos Técnicos de participación profesional respectivos.",
      b: "El equipo directivo, las jefaturas de unidad que se determinen, representantes sindicales y una representación de personas vocales electas que formen parte de los Consejos Técnicos de participación profesional respectivos.",
      c: "El equipo directivo y las jefaturas de unidad que se determinen.",
      d: "Todas las anteriores son falsas."
    },
    respuesta_correcta: "a"
  },
  {
    id: 98,
    enunciado: "Las organizaciones de servicios sanitarios del ente público Osakidetza-Servicio Vasco de Salud podrán:",
    opciones: {
      a: "Descentralizar la organización y su funcionamiento operativo, delegando en quienes ostenten la responsabilidad clínica facultades de gestión, aunque solo en materia de personal y siempre de acuerdo con el marco estratégico, los planes de gestión y el compromiso del contrato-programa suscrito por la organización.",
      b: "Descentralizar la organización y su funcionamiento operativo, delegando en quienes ostenten la responsabilidad clínica facultades de gestión, pero solo en materia económica y siempre de acuerdo con el marco estratégico, los planes de gestión y el compromiso del contrato-programa suscrito por la organización.",
      c: "Descentralizar la organización y su funcionamiento operativo, delegando en quienes ostenten la responsabilidad clínica facultades de gestión tanto en materia económica como de personal, de acuerdo con el marco estratégico, los planes de gestión y el compromiso del contrato-programa suscrito por la organización.",
      d: "Todas las anteriores son falsas."
    },
    respuesta_correcta: "c"
  },
  {
    id: 99,
    enunciado: "En materia específica de inversiones, la competencia para ejecutar las compras de suministros que se consideren centralizadas, así como definir y/o ejecutar, en su caso, las consideradas integradas corresponde a:",
    opciones: {
      a: "El Consejo de Administración del ente público Osakidetza-Servicio Vasco de Salud.",
      b: "La organización central de administración y gestión corporativa del ente público Osakidetza-Servicio Vasco de Salud.",
      c: "La organización de servicios del ente público Osakidetza-Servicio Vasco de Salud.",
      d: "A quien ostente la titularidad de la Dirección-Gerencia de cada organización de servicios sanitarios del Osakidetza-Servicio Vasco de Salud."
    },
    respuesta_correcta: "b"
  },
  {
    id: 100,
    enunciado: "En el ámbito de una organización de servicios sanitarios del ente público Osakidetza-Servicio Vasco de Salud, presidir los Consejos Técnicos de participación profesional y promover su eficaz funcionamiento es una tarea que corresponde a:",
    opciones: {
      a: "La Dirección General del Ente.",
      b: "Quien ostente la titularidad de la Dirección-Gerencia del Ente.",
      c: "La Dirección Médica del Ente.",
      d: "Ninguna de las anteriores."
    },
    respuesta_correcta: "d"
  },
  {
    id: 101,
    enunciado: "¿Cuál es la fecha de aprobación del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud?",
    opciones: {
      a: "26 de junio de 1997.",
      b: "11 de julio de 2018.",
      c: "3 de julio de 2018.",
      d: "13 de diciembre de 2010."
    },
    respuesta_correcta: "c"
  },
  {
    id: 102,
    enunciado: "Según el Artículo 1 del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿qué dos niveles asistenciales se integran en las Organizaciones Sanitarias Integradas (OSI) de Osakidetza?",
    opciones: {
      a: "Atención especializada y Atención de Urgencias.",
      b: "Salud Pública y Servicios Sociosanitarios.",
      c: "Atención hospitalaria y Atención de Emergencias.",
      d: "Atención primaria y Atención hospitalaria."
    },
    respuesta_correcta: "d"
  },
  {
    id: 103,
    enunciado: "Según el Artículo 2.1 del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿qué objetivo último persigue la configuración de las OSI?",
    opciones: {
      a: "Reducir el gasto farmacéutico mediante la unificación de compras.",
      b: "Favorecer la integración clínica de manera que la atención se articule en torno a la persona.",
      c: "Centralizar los servicios de atención primaria en las sedes hospitalarias.",
      d: "Eliminar las categorías profesionales de atención primaria para unificarlas con las hospitalarias."
    },
    respuesta_correcta: "b"
  },
  {
    id: 104,
    enunciado: "Según el Artículo 1 del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿bajo qué principio fundamental actuarán las Organizaciones Sanitarias Integradas (OSI) del ente público Osakidetza-Servicio Vasco de Salud ?",
    opciones: {
      a: "Principio de coordinación territorial y sectorial.",
      b: "Principio de jerarquía funcional única.",
      c: "Principio de autonomía económico-financiera y de gestión.",
      d: "Principio de centralización de todos los recursos."
    },
    respuesta_correcta: "c"
  },
  {
    id: 105,
    enunciado: "De acuerdo con el Artículo 3 del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿cómo se define una OSI de clase \"monográfica\"?",
    opciones: {
      a: "Es aquella donde solo se integran servicios de atención hospitalaria especializada.",
      b: "Es aquella cuya actividad asistencial gira en torno a un ámbito específico, integrando sus servicios y dispositivos.",
      c: "Es una organización que solo atiende a una patología crónica específica.",
      d: "Es la organización que carece de servicios de atención primaria."
    },
    respuesta_correcta: "b"
  },
  {
    id: 106,
    enunciado: "Según el Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, las OSI de Tipo I se caracterizan, entre otros aspectos, por tener hospitales de carácter universitario y, además, por disponer de:",
    opciones: {
      a: "Una base poblacional adscrita inferior a 300.000 habitantes.",
      b: "Una Dirección de Gestión que asume todas las funciones asistenciales.",
      c: "Unidades o servicios calificados de referencia para el conjunto del sistema sanitario vasco.",
      d: "Ser organizaciones de servicios de carácter monográfico y de pequeño tamaño."
    },
    respuesta_correcta: "c"
  },
  {
    id: 107,
    enunciado: "Según el Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, para que una OSI sea clasificada como de Tipo III debe integrar, junto con servicios de atención primaria, un hospital de carácter general y tener una base poblacional atendida inferior a:",
    opciones: {
      a: "500.000 habitantes.",
      b: "200.000 habitantes.",
      c: "300.000 habitantes.",
      d: "100.000 habitantes."
    },
    respuesta_correcta: "c"
  },
  {
    id: 108,
    enunciado: "Según el Artículo 5 del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿cuáles son los tres órganos de participación que conforman la estructura organizativa de las OSI?",
    opciones: {
      a: "El Consejo de Dirección, el Comité Ejecutivo y el Comité de Ética Asistencial.",
      b: "El Consejo Clínico Asistencial, el Consejo Social y la Comisión Sociosanitaria.",
      c: "La Comisión de Seguridad, la Comisión de Docencia y la Comisión de Investigación.",
      d: "El Consejo de Dirección, el Consejo Social y el Comité de Evaluación."
    },
    respuesta_correcta: "b"
  },
  {
    id: 109,
    enunciado: "De acuerdo con el Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿qué órganos componen el equipo directivo de una OSI, según la estructura general del artículo 5.2?",
    opciones: {
      a: "Solo la Dirección Gerencia y la Dirección Médica.",
      b: "Las Direcciones Médica, de Atención Integrada, de Enfermería, de Personas, Económico-Financiera y de Gestión.",
      c: "El Consejo de Dirección y el Consejo Social exclusivamente.",
      d: "La Dirección Gerencia y las Jefaturas de Servicio de cada centro de salud."
    },
    respuesta_correcta: "b"
  },
  {
    id: 110,
    enunciado: "De acuerdo con el Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, en las OSI de Tipo IV, la Dirección Gerencia asume, con el apoyo de puestos funcionales asistenciales, las funciones que corresponden a:",
    opciones: {
      a: "La Dirección de Personas y la Dirección Económico-Financiera.",
      b: "La Dirección de Personas y la Dirección de Atención Integrada.",
      c: "La Dirección Médica y la Dirección de Enfermería.",
      d: "La Dirección de Gestión y el Consejo de Dirección."
    },
    respuesta_correcta: "c"
  },
  {
    id: 111,
    enunciado: "De acuerdo con el Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿cuál de los siguientes NO es un órgano de dirección encargado del gobierno y gestión de las OSI de Tipo I y II?",
    opciones: {
      a: "La Dirección de Personas.",
      b: "El Consejo Clínico Asistencial.",
      c: "La Dirección de Atención Integrada.",
      d: "La Dirección Económico-Financiera."
    },
    respuesta_correcta: "b"
  },
  {
    id: 112,
    enunciado: "Según el Artículo 7.3 del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿quién tiene la competencia para el nombramiento y cese de la persona titular de la Dirección Gerencia?",
    opciones: {
      a: "El Consejero o la Consejera de Salud.",
      b: "La Dirección General del Ente Público Osakidetza.",
      c: "El Consejo de Administración a propuesta de Lehendakaritza.",
      d: "La Dirección de Personas de la propia OSI."
    },
    respuesta_correcta: "b"
  },
  {
    id: 113,
    enunciado: "Según los Artículos 7 y 9 del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿cuál es un requisito obligatorio para el nombramiento de los cargos de dirección de una OSI?",
    opciones: {
      a: "Haber pertenecido al Consejo Clínico Asistencial durante al menos dos años.",
      b: "Superar un examen de oposición específico para gerencia sanitaria.",
      c: "Previa convocatoria pública donde se acredite titulación, capacidad y experiencia profesional.",
      d: "Tener la condición de personal estatutario fijo en la categoría de técnico/a superior."
    },
    respuesta_correcta: "c"
  },
  {
    id: 114,
    enunciado: "Según el Artículo 8.m del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿a qué dirección corresponde \"orientar la gestión desde una visión integradora empoderando la atención primaria\"?",
    opciones: {
      a: "Dirección de Atención Integrada.",
      b: "Dirección Gerencia.",
      c: "Dirección de Enfermería.",
      d: "Dirección Económico-Financiera."
    },
    respuesta_correcta: "b"
  },
  {
    id: 115,
    enunciado: "Según el Artículo 11.2 del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿qué dirección se encarga de impulsar el vínculo con la comunidad a través de la promoción y prevención de la salud?",
    opciones: {
      a: "Dirección Médica.",
      b: "Dirección de Personas",
      c: "Dirección de Atención Integrada.",
      d: "Dirección Gerencia."
    },
    respuesta_correcta: "c"
  },
  {
    id: 116,
    enunciado: "De acuerdo con el Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿con qué ámbito(s) adicional(es) debe coordinar su actividad la Dirección de Atención Integrada, además de con la atención primaria y hospitalaria?",
    opciones: {
      a: "Con el ámbito de Recursos Humanos y con la Universidad.",
      b: "Con el ámbito comunitario y socio-sanitario.",
      c: "Únicamente con el sociosanitario.",
      d: "Con las entidades locales y las empresas privadas de gestión."
    },
    respuesta_correcta: "b"
  },
  {
    id: 117,
    enunciado: "Según el Artículo 16 del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿con qué periodicidad mínima debe reunirse el Consejo de Dirección de la OSI?",
    opciones: {
      a: "Semanalmente.",
      b: "Mensualmente.",
      c: "Trimestralmente.",
      d: "Al menos cada dos meses."
    },
    respuesta_correcta: "d"
  },
  {
    id: 118,
    enunciado: "Según el Artículo 13.2.j del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿quién preside la Comisión de Salud Laboral en la OSI?",
    opciones: {
      a: "La Dirección Médica.",
      b: "La Dirección de Personas.",
      c: "La Dirección de Gestión.",
      d: "La representación sindical elegida por votación."
    },
    respuesta_correcta: "b"
  },
  {
    id: 119,
    enunciado: "Según el Artículo 17 del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿cómo se define el Consejo Clínico Asistencial?",
    opciones: {
      a: "Es un órgano ejecutivo que toma las decisiones presupuestarias finales.",
      b: "Es el órgano consultivo de asesoramiento técnico y participación de las y los profesionales asistenciales.",
      c: "Es un equipo multidisciplinar que investiga incidentes de seguridad sanitarios",
      d: "Es el órgano encargado de las relaciones con el ámbito sociosanitario."
    },
    respuesta_correcta: "b"
  },
  {
    id: 120,
    enunciado: "Según el Artículo 19.1 del Decreto 100/2018 de las organizaciones sanitarias integradas del ente público Osakidetza-Servicio Vasco de Salud, ¿quién ejerce la presidencia del Consejo Clínico Asistencial?",
    opciones: {
      a: "La persona titular de la Dirección Gerencia.",
      b: "La persona titular de la Dirección Médica.",
      c: "La persona titular de la Dirección de Enfermería.",
      d: "La persona de mayor antigüedad en la vocalía de Atención Primaria."
    },
    respuesta_correcta: "b"
  },
  {
    id: 121,
    enunciado: "Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, son titulares de los derechos y deberes recogidos en esta Declaración:",
    opciones: {
      a: "Todas las personas que accedan o utilicen las prestaciones y servicios sanitarios que se proporcionan por el sistema sanitario de Euskadi.",
      b: "Todas las personas nacidas en Euskadi.",
      c: "Todas las personas empadronadas en Euskadi.",
      d: "Todas las respuestas anteriores son correctas."
    },
    respuesta_correcta: "a"
  },
  {
    id: 122,
    enunciado: "Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, todos los derechos y obligaciones establecidos son exigibles:",
    opciones: {
      a: "En relación a todas las acciones de carácter sanitario, incluyendo docencia, que se desarrollen en los centros, servicios o establecimientos sanitarios de titularidad pública o privada o concertados de Euskadi. Las acciones relativas a la investigación biomédica quedan fuera de esta Declaración y se rigen por su normativa específica.",
      b: "En relación a todas las acciones de carácter sanitario, incluyendo docencia, que se desarrollen en los centros, servicios o establecimientos sanitarios de titularidad pública o concertados que integran el sistema sanitario de Euskadi. Las acciones relativas a la investigación biomédica quedan fuera de esta Declaración y se rigen por su normativa específica.",
      c: "En relación a todas las acciones de carácter sanitario, incluyendo investigación y docencia, que se desarrollen en los centros, servicios o establecimientos sanitarios de titularidad pública o privada o concertados de Euskadi.",
      d: "En relación a todas las acciones de carácter sanitario, incluyendo investigación y docencia, que se desarrollen en los centros, servicios o establecimientos sanitarios de titularidad pública o concertados que integran el sistema sanitario de Euskadi."
    },
    respuesta_correcta: "d"
  },
  {
    id: 123,
    enunciado: "Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, los principios que informan e inspiran el conjunto de acciones de carácter sanitario que se desarrollen en el sistema sanitario de Euskadi son:",
    opciones: {
      a: "El respeto a la libertad de la persona, a su dignidad y a la autonomía en las decisiones que afecten a su salud.",
      b: "El respeto a todo el personal profesional que integra el sistema sanitario de Euskadi.",
      c: "La promoción de la investigación científica en el marco del sistema sanitario de Euskadi.",
      d: "Todas las respuestas anteriores son correctas."
    },
    respuesta_correcta: "a"
  },
  {
    id: 124,
    enunciado: "El Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, distingue bloques de derechos relacionados con los siguientes ámbitos:",
    opciones: {
      a: "Relaciones asistenciales; participación responsable en la gestión de la propia salud; organización y gestión del sistema sanitario de Euskadi; políticas sanitarias específicas; asistencia sanitaria específica vinculada a la infancia y adolescencia; asistencia sanitaria específica referida a la salud sexual y reproductiva; asistencia sanitaria específica referida a las personas mayores; asistencia sanitaria específica referida al final de la vida; participación en la investigación biomédica; obtención de la Tarjeta Individual Sanitaria.",
      b: "Relaciones asistenciales; participación responsable en la gestión de la propia salud; organización y gestión del sistema sanitario de Euskadi; políticas sanitarias específicas; asistencia sanitaria específica vinculada a la infancia y adolescencia; asistencia sanitaria específica referida a la salud sexual y reproductiva; asistencia sanitaria específica referida a las personas mayores; asistencia sanitaria específica referida al final de la vida; derechos en relación con la docencia del personal sanitario, obtención de la Tarjeta Individual Sanitaria.",
      c: "Relaciones asistenciales; participación responsable en la gestión de la propia salud; organización y gestión del sistema sanitario de Euskadi; políticas sanitarias específicas; asistencia sanitaria específica vinculada a la infancia y adolescencia; asistencia sanitaria específica referida a la salud sexual y reproductiva; asistencia sanitaria específica referida a las personas mayores; asistencia sanitaria específica referida al final de la vida; medidas de salud pública; obtención de la Tarjeta Individual Sanitaria.",
      d: "Relaciones asistenciales; participación responsable en la gestión de la propia salud; organización y gestión del sistema sanitario de Euskadi; políticas sanitarias específicas; asistencia sanitaria específica vinculada a la infancia y adolescencia; asistencia sanitaria específica referida a la salud sexual y reproductiva; asistencia sanitaria específica referida a las personas mayores; asistencia sanitaria específica referida al final de la vida; obtención de la Tarjeta Individual Sanitaria."
    },
    respuesta_correcta: "d"
  },
  {
    id: 125,
    enunciado: "Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, corresponde a la persona paciente o usuaria del sistema sanitario de Euskadi:",
    opciones: {
      a: "El derecho a que se empleen recursos razonables para garantizar la traducción de la información clínica a su idioma de manera que se garantice su comprensión.",
      b: "El derecho a recibir información sobre las vías a utilizar para la formulación de quejas, reclamaciones y sugerencias.",
      c: "El derecho a recibir información, tanto la madre como el padre, con carácter previo al parto, sobre aquellas intervenciones no necesarias desde el punto de vista clínico y cuya omisión no suponga un riesgo para la salud del niño o niña que vaya a nacer.",
      d: "El derecho a la elección de profesional facultativo general, pediatra y de atención especializada."
    },
    respuesta_correcta: "b"
  },
  {
    id: 126,
    enunciado: "Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, la persona paciente o usuaria tiene derecho:",
    opciones: {
      a: "A recibir información sobre los recursos sanitarios y socio-sanitarios disponibles, actuaciones y prestaciones del sistema sanitario de Euskadi, su calidad y requisitos de acceso a los mismos.",
      b: "A recibir información sobre los recursos sanitarios y socio-sanitarios disponibles, actuaciones y prestaciones del sistema sanitario de Euskadi, su calidad y requisitos de acceso a los mismos, de manera individualizada o a través de medios que garanticen su accesibilidad a toda la ciudadanía.",
      c: "A recibir información sobre los recursos sanitarios y socio-sanitarios disponibles, actuaciones y prestaciones del sistema sanitario de Euskadi, su calidad y requisitos de acceso a los mismos, así como los disponibles en otros sistemas sanitarios para facilitar que pueda optar por solicitarlos también fuera del sistema sanitario de Euskadi.",
      d: "A recibir información sobre los recursos sanitarios y socio-sanitarios disponibles, actuaciones y prestaciones del sistema sanitario de Euskadi, su calidad, coste y requisitos de acceso a los mismos."
    },
    respuesta_correcta: "a"
  },
  {
    id: 127,
    enunciado: "El derecho a la participación de forma activa en las actuaciones del sistema sanitario de Euskadi:",
    opciones: {
      a: "No está reconocido en el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi.",
      b: "Está reconocido en el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, como derecho colectivo que se ejerce a través de organizaciones.",
      c: "Está reconocido en el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, que lo contempla tanto en su modalidad de participación directa como a través de organizaciones.",
      d: "Está reconocido en el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, que lo contempla tanto en su modalidad de participación directa como a través de organizaciones y sindicatos."
    },
    respuesta_correcta: "c"
  },
  {
    id: 128,
    enunciado: "A los efectos de la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi recogida en el Decreto 147/2015, de 21 de julio, se configuran las siguientes fases de la vida en las que se concretan necesidades específicas:",
    opciones: {
      a: "1. Neonatología, infancia y adolescencia. 2. Salud sexual y reproductiva, embarazo y parto. 3. Salud laboral. 4. Personas mayores y final de la vida.",
      b: "1. Infancia y adolescencia. 2. Salud sexual y reproductiva. 3. Salud laboral. 4. Personas mayores.",
      c: "1. Infancia. 2. Adolescencia, salud sexual y reproductiva. 3. Personas mayores. 4. Final de la vida.",
      d: "1. Infancia y adolescencia. 2. Salud sexual y reproductiva. 3. Personas mayores. 4. Final de la vida."
    },
    respuesta_correcta: "d"
  },
  {
    id: 129,
    enunciado: "Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, los niños y niñas y las personas adolescentes, en su condición de pacientes y personas usuarias del Sistema Sanitario de Euskadi, tienen derecho:",
    opciones: {
      a: "A la seguridad de recibir los cuidados que necesita, incluso en el caso de que fuese necesaria la intervención de la justicia, salvo oposición de los padres o madres, o la persona sustituta, en ejercicio del derecho fundamental a la libertad religiosa.",
      b: "A la seguridad de recibir los cuidados que necesita, incluso en el caso de que fuese necesaria la intervención de la Consejería de Sanidad, salvo que la actuación sea contraria al entorno religioso y cultural del niño, niña o persona adolescente y, por lo tanto, también a su voluntad presunta.",
      c: "A la seguridad de recibir los cuidados que necesita, incluso en el caso de que fuese necesaria la intervención de la justicia, si los padres o madres, o la persona sustituta, se los negaran por razones religiosas, culturales o cualquiera otras.",
      d: "A la seguridad de recibir los cuidados que necesita, incluso en el caso de que fuese necesaria la intervención de la Consejería de Sanidad, si los padres o madres, o la persona sustituta, se los negaran por razones religiosas, culturales o cualquiera otras."
    },
    respuesta_correcta: "c"
  },
  {
    id: 130,
    enunciado: "Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, las personas pacientes y usuarias del Sistema Sanitario de Euskadi, en relación con la asistencia sanitaria específica referida al final de la vida, tienen derecho a:",
    opciones: {
      a: "Obtener información veraz sobre las opciones terapéuticas y a que se respete y acate su voluntad de aceptación o rechazo de cualquiera de ellas, siempre que se exprese de forma directa o en forma de voluntades anticipadas.",
      b: "Obtener información veraz sobre las opciones terapéuticas y a que se respete y acate su voluntad de aceptación o rechazo de cualquiera de ellas, tanto si se hace saber de forma directa como en forma de voluntades anticipadas o mediante una persona que la represente.",
      c: "Obtener información veraz sobre las opciones terapéuticas, y a que se respete y acate su voluntad de aceptación o rechazo de cualquiera de ellas, siempre que se exprese de forma directa, en forma de voluntades anticipadas o a través de familiares o personas allegadas.",
      d: "Obtener información veraz sobre las opciones terapéuticas, y a que se respete y acate su voluntad de aceptación o rechazo de cualquiera de ellas, siempre que se exprese de forma directa, en forma de voluntades anticipadas, mediante una persona que la represente o a través de familiares o personas allegadas."
    },
    respuesta_correcta: "b"
  },
  {
    id: 131,
    enunciado: "Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, las personas pacientes y usuarias del Sistema Sanitario de Euskadi, en relation con la asistencia sanitaria específica referida al final de la vida, tienen derecho a:",
    opciones: {
      a: "Al acompañamiento de familiares y personas allegadas en los procesos con hospitalización.",
      b: "Al uso, con carácter general, de habitación individual.",
      c: "Al acompañamiento espiritual.",
      d: "Todas las respuestas anteriores son correctas."
    },
    respuesta_correcta: "d"
  },
  {
    id: 132,
    enunciado: "El Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi establece deberes en relación con los siguientes ámbitos:",
    opciones: {
      a: "Organización y gestión del sistema sanitario de Euskadi; políticas sanitarias específicas; participación responsable en la gestión de la propia salud; y relaciones asistenciales en el sistema sanitario de Euskadi.",
      b: "Organización y gestión del sistema sanitario de Euskadi; políticas sanitarias específicas; participación responsable en la gestión de la propia salud; relaciones asistenciales en el sistema sanitario de Euskadi; y salud pública.",
      c: "Organización y gestión del sistema sanitario de Euskadi; políticas sanitarias específicas; participación responsable en la gestión de la propia salud; relaciones asistenciales en el sistema sanitario de Euskadi; salud pública; y participación en la investigación científica en el sistema sanitario de Euskadi.",
      d: "Organización y gestión del sistema sanitario de Euskadi; políticas sanitarias específicas; participación responsable en la gestión de la propia salud; relaciones asistenciales en el sistema sanitario de Euskadi; salud pública; participación en la investigación científica en el sistema sanitario de Euskadi; y colaboración con la Administración Sanitaria."
    },
    respuesta_correcta: "a"
  },
  {
    id: 133,
    enunciado: "Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, la persona paciente o usuaria:",
    opciones: {
      a: "Debe dejar por escrito las decisiones cuando sea legalmente exigible o recomendable.",
      b: "Debe dejar por escrito las decisiones cuando se lo solicite el personal profesional que le atienda.",
      c: "Debe dejar por escrito las decisiones cuando la política del centro sanitario así lo establezca.",
      d: "Debe dejar por escrito las decisiones cuando puedan tener relevancia a efectos de responsabilidad legal."
    },
    respuesta_correcta: "a"
  },
  {
    id: 134,
    enunciado: "Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, la persona paciente o usuaria deberá de cumplir los siguientes deberes:",
    opciones: {
      a: "Facilitar de forma veraz sus datos de identificación y los referentes a su estado físico o de salud, así como colaborar en su obtención, especialmente cuando sean necesarios para el episodio asistencial o por razones de interés público debidamente motivadas, siempre que quede avalado por una orden judicial.",
      b: "Facilitar de forma veraz sus datos de identificación y los referentes a su estado físico o de salud, así como colaborar en su obtención, especialmente cuando sean necesarios para el episodio asistencial o por razones de interés público debidamente motivadas, siempre se solicite por escrito.",
      c: "Facilitar de forma veraz sus datos de identificación y los referentes a su estado físico o de salud, así como colaborar en su obtención, especialmente cuando sean necesarios para el episodio asistencial o por razones de interés público debidamente motivadas, siempre que se informe por escrito de las garantías implementadas en relación con la protección de la información.",
      d: "Facilitar de forma veraz sus datos de identificación y los referentes a su estado físico o su salud, así como colaborar en su obtención, especialmente cuando sean necesarios para el episodio asistencial o por razones de interés público debidamente motivadas."
    },
    respuesta_correcta: "d"
  },
  {
    id: 135,
    enunciado: "Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, los Servicios de Atención a Pacientes y personas Usuarias:",
    opciones: {
      a: "Estarán disponibles en las Organizaciones de Servicios Sanitarios de OsakidetzaServicio Vasco de Salud, los centros sanitarios concertados, los centros privados y el departamento competente en materia de sanidad.",
      b: "Estarán disponibles en las Organizaciones de Servicios Sanitarios de OsakidetzaServicio Vasco de Salud, los centros sanitarios concertados y el departamento competente en materia de sanidad, pero no existe previsión en relación con los centros privados.",
      c: "Estarán disponibles en las Organizaciones de Servicios Sanitarios de OsakidetzaServicio Vasco de Salud, pero no existe previsión en relación con los centros concertados, ni con los privados ni con el departamento competente en materia de sanidad.",
      d: "Estarán disponibles en las Organizaciones de Servicios Sanitarios de OsakidetzaServicio Vasco de Salud y en los centros sanitarios concertados y privados, pero no existe previsión en relación con el departamento competente en materia de sanidad."
    },
    respuesta_correcta: "b"
  },
  {
    id: 136,
    enunciado: "Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, son funciones de los Servicios de Atención a Pacientes y personas Usuarias:",
    opciones: {
      a: "Tramitar y responder a las iniciativas y sugerencias que formulen las personas usuarias y sus familiares.",
      b: "Formular propuestas de mediación cuando la naturaleza del tema sobre el que verse la reclamación lo permita.",
      c: "Comunicar a la dirección del centro, servicio o establecimiento sanitario la posible comisión de hechos o conductas que supongan el incumplimiento de los derechos y deberes de las personas usuarias.",
      d: "Todas las respuestas anteriores son correctas."
    },
    respuesta_correcta: "d"
  },
  {
    id: 137,
    enunciado: "Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, los Servicios de Atención a Pacientes y personas Usuarias:",
    opciones: {
      a: "Registrarán todas las reclamaciones y solicitudes que se presenten ante ellos, con independencia del centro, servicio o establecimiento sanitario destinatario de las mismas.",
      b: "Registrarán todas las reclamaciones y solicitudes que se presenten ante ellos, si es que el destinatario de las mismas es el centro, servicio o establecimiento del que dependan.",
      c: "Registrarán todas las solicitudes que se presenten ante ellos, con independencia del centro, servicio o establecimiento sanitario destinatario de las mismas; y todas las reclamaciones, si es que el destinatario de las mismas es el centro, servicio o establecimiento del que dependan.",
      d: "Registrarán todas las reclamaciones que se presenten ante ellos, con independencia del centro, servicio o establecimiento sanitario destinatario de las mismas; y todas las solicitudes si es que el destinatario de las mismas es el centro, servicio o establecimiento del que dependan."
    },
    respuesta_correcta: "a"
  },
  {
    id: 138,
    enunciado: "Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, las reclamaciones contra las personas usuarias de los centros, servicios y establecimientos sanitarios se tramitarán:",
    opciones: {
      a: "Por el procedimiento que elija la persona que interpone la reclamación.",
      b: "Por el procedimiento vigente para ello.",
      c: "Por el mismo procedimiento previsto para las reclamaciones contra actuaciones del personal.",
      d: "El enunciado de la pregunta es incorrecto porque la norma citada no prevé reclamaciones contra las personas usuarias, aunque sí contra el personal profesional sanitario."
    },
    respuesta_correcta: "b"
  },
  {
    id: 139,
    enunciado: "Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, las reclamaciones contra actuaciones del personal:",
    opciones: {
      a: "Se resolverán atendiendo a las normas disciplinarias específicas previa apertura, en su caso, del expediente informativo correspondiente, sin perjuicio de las responsabilidades que de los hechos pudieran derivarse.",
      b: "Se resolverán atendiendo a las normas disciplinarias generales previa apertura, en su caso, del expediente informativo correspondiente, sin perjuicio de las responsabilidades que de los hechos pudieran derivarse.",
      c: "Se resolverán atendiendo a las normas disciplinarias específicas previa apertura, en su caso, del expediente informativo y de expediente de mediación, sin perjuicio de las responsabilidades que de los hechos pudieran derivarse.",
      d: "Se resolverán atendiendo a las normas disciplinarias generales previa apertura, en su caso, del expediente informativo y de expediente de mediación, sin perjuicio de las responsabilidades que de los hechos pudieran derivarse."
    },
    respuesta_correcta: "a"
  },
  {
    id: 140,
    enunciado: "Según el Decreto 147/2015, de 21 de julio, por el que se aprueba la Declaración sobre Derechos y Deberes de las personas en el sistema sanitario de Euskadi, a las personas usuarias de los centros, servicios y establecimientos sanitarios citados en los apartados anteriores:",
    opciones: {
      a: "No les serán exigibles los deberes previstos en los artículos 14 a 17.",
      b: "Les serán exigibles los deberes previstos en los artículos 14 a 17.",
      c: "Les serán exigibles los deberes previstos en los artículos 16 y 17 en relación con la participación responsable en la gestión de la propia salud, así como en las relaciones asistenciales.",
      d: "Les serán exigibles los deberes previstos en los artículos 15, 16 y 17 en relación con las políticas sanitarias, la participación responsable en la gestión de la propia salud, así como en las relaciones asistenciales."
    },
    respuesta_correcta: "c"
  },
  {
    id: 141,
    enunciado: "Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, la documentación clínica es:",
    opciones: {
      a: "La información contenida en la historia clínica.",
      b: "El soporte de cualquier tipo o clase que contiene un conjunto de datos e informaciones de carácter asistencial y la documentación relativa a las voluntades anticipadas.",
      c: "El soporte de cualquier tipo o clase que contiene un conjunto de datos e informaciones de carácter asistencial y de investigación biomédica.",
      d: "El soporte de cualquier tipo o clase que contiene un conjunto de datos e informaciones de carácter asistencial."
    },
    respuesta_correcta: "d"
  },
  {
    id: 142,
    enunciado: "Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, es persona usuaria:",
    opciones: {
      a: "La persona que requiere asistencia sanitaria y está sometida a cuidados profesionales para el mantenimiento o recuperación de su salud.",
      b: "La persona que requiere asistencia sanitaria y está sometida a cuidados profesionales para el mantenimiento o recuperación de su salud en el sistema público de salud.",
      c: "La persona que utiliza los servicios sanitarios de educación y promoción de la salud, de prevención de enfermedades y de información sanitaria.",
      d: "La persona que utiliza los servicios sanitarios de educación y promoción de la salud, de prevención de enfermedades y de información sanitaria en el sistema público de salud."
    },
    respuesta_correcta: "c"
  },
  {
    id: 143,
    enunciado: "Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, la información asistencial:",
    opciones: {
      a: "Como regla general se proporcionará verbalmente.",
      b: "Como regla general se proporcionará por escrito.",
      c: "Como regla general se proporcionará verbalmente y por escrito.",
      d: "Como regla general se proporcionará por escrito cuando se trate de pacientes menores de edad."
    },
    respuesta_correcta: "a"
  },
  {
    id: 144,
    enunciado: "Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, la información asistencial contiene, como mínimo:",
    opciones: {
      a: "La finalidad y la naturaleza de cada intervención.",
      b: "La finalidad y la naturaleza de cada intervención y sus riesgos.",
      c: "La finalidad y la naturaleza de cada intervención, sus riesgos y sus consecuencias.",
      d: "La finalidad y la naturaleza de cada intervención, sus riesgos, sus consecuencias y los derechos de las personas pacientes."
    },
    respuesta_correcta: "c"
  },
  {
    id: 145,
    enunciado: "Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, garantiza el cumplimiento del derecho a la información asistencial:",
    opciones: {
      a: "La persona facultativa responsable de la persona paciente",
      b: "La persona facultativa responsable de la persona paciente y el personal profesional que le atienda durante el proceso asistencial o le aplique una técnica o un procedimiento concreto.",
      c: "La persona facultativa responsable de la persona paciente y el personal de enfermería.",
      d: "El centro sanitario."
    },
    respuesta_correcta: "b"
  },
  {
    id: 146,
    enunciado: "Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, la persona titular del derecho a la información asistencial es:",
    opciones: {
      a: "La persona paciente. También serán informadas las personas vinculadas a ella, por razones familiares o de hecho, en la medida que la persona paciente lo permita de manera expresa o tácita.",
      b: "La persona paciente. También serán informadas las personas vinculadas a ella, por razones familiares o de hecho, en la medida que la persona paciente lo permita de manera expresa.",
      c: "La persona paciente. También serán informadas las personas vinculadas a ella, por razones familiares o de hecho, en la medida que la persona paciente lo permita por escrito.",
      d: "La persona paciente. También serán informadas las personas vinculadas a ella, por razones familiares o de hecho."
    },
    respuesta_correcta: "a"
  },
  {
    id: 147,
    enunciado: "Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, cuando la persona paciente, según el criterio del personal facultativo que le asiste, carezca de capacidad para entender la información a causa de su estado físico o psíquico:",
    opciones: {
      a: "La información se pondrá en conocimiento de las personas vinculadas a la persona paciente por razones familiares o de hecho si así lo dispone la autoridad judicial.",
      b: "La información se pondrá en conocimiento de las personas vinculadas a la persona paciente por razones familiares o de hecho, después de haber consultado al Comité de Ética Asistencial de Centro.",
      c: "La información se pondrá en conocimiento de las personas vinculadas a la persona paciente por razones familiares o de hecho después de haber consultado con la dirección del centro.",
      d: "La información se pondrá en conocimiento de las personas vinculadas a la persona paciente por razones familiares o de hecho."
    },
    respuesta_correcta: "d"
  },
  {
    id: 148,
    enunciado: "Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, cuando existe riesgo inmediato grave para la integridad física o psíquica de la persona enferma y no es posible conseguir su autorización:",
    opciones: {
      a: "El personal facultativo podrá llevar a cabo las intervenciones clínicas indispensables en favor de la salud de la persona paciente, con el consentimiento de sus familiares.",
      b: "El personal facultativo podrá llevar a cabo las intervenciones clínicas indispensables en favor de la salud de la persona paciente, con el consentimiento de quien ostente la representación legal.",
      c: "El personal facultativo podrá llevar a cabo las intervenciones clínicas indispensables en favor de la salud de la persona paciente, con autorización judicial.",
      d: "El personal facultativo podrá llevar a cabo las intervenciones clínicas indispensables en favor de la salud de la persona paciente, sin necesidad de contar con su consentimiento."
    },
    respuesta_correcta: "d"
  },
  {
    id: 149,
    enunciado: "Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, se otorgará el consentimiento por representación:",
    opciones: {
      a: "Como regla general, cuando la persona paciente sea menor de edad, salvo que no sea capaz intelectual ni emocionalmente de comprender el alcance de la intervención.",
      b: "Como regla general, cuando la persona paciente sea menor de dieseis años, salvo que no sea capaz intelectual ni emocionalmente de comprender el alcance de la intervención.",
      c: "Como regla general, cuando la persona paciente sea menor de edad.",
      d: "Como regla general, cuando la persona paciente sea menor de dieciséis años."
    },
    respuesta_correcta: "d"
  },
  {
    id: 150,
    enunciado: "Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, el personal facultativo proporcionará a la persona paciente, antes de recabar su consentimiento escrito, la información básica siguiente:",
    opciones: {
      a: "Todos los riesgos en condiciones normales, conforme a la experiencia y al estado de la ciencia o directamente relacionados con el tipo de intervención.",
      b: "Todos los riesgos, siempre que sean graves, en condiciones normales, conforme a la experiencia y al estado de la ciencia o directamente relacionados con el tipo de intervención.",
      c: "Todos los riesgos probables en condiciones normales, conforme a la experiencia y al estado de la ciencia o directamente relacionados con el tipo de intervención.",
      d: "Todos los riesgos, siempre que sean probables y graves, en condiciones normales, conforme a la experiencia y al estado de la ciencia o directamente relacionados con el tipo de intervención."
    },
    respuesta_correcta: "c"
  },
  {
    id: 151,
    enunciado: "Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, la historia clínica será archivada por:",
    opciones: {
      a: "Cada centro.",
      b: "Cada servicio.",
      c: "Cada sistema de salud.",
      d: "Cada centro, servicio y sistema de salud."
    },
    respuesta_correcta: "a"
  },
  {
    id: 152,
    enunciado: "Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, el acceso a la historia clínica con fines judiciales, epidemiológicos, de salud pública, de investigación o de docencia:",
    opciones: {
      a: "Obliga a preservar los datos de identificación personal de la persona paciente, separados de los de carácter clinicoasistencial, de manera que, como regla general, quede asegurado el anonimato, salvo que quien sea titular de dichos datos haya dado su consentimiento para no separarlos o exista autorización judicial.",
      b: "Obliga a solicitar el consentimiento de la persona paciente y a preservar sus datos de identificación personal separados de los de carácter clinicoasistencial, de manera que, como regla general, quede asegurado el anonimato.",
      c: "Obliga a preservar los datos de identificación personal de la persona paciente, separados de los de carácter clinicoasistencial, de manera que, como regla general, quede asegurado el anonimato, salvo que el Comité de Ética haya otorgado su autorización para no separarlos.",
      d: "Obliga a preservar los datos de identificación personal de la persona paciente, separados de los de carácter clinicoasistencial, de manera que, como regla general, quede asegurado el anonimato, salvo que quien sea titular de dichos datos haya dado su consentimiento para no separarlos, si bien existen excepciones a esta regla."
    },
    respuesta_correcta: "d"
  },
  {
    id: 153,
    enunciado: "Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, la documentación clínica se conservará:",
    opciones: {
      a: "Como mínimo, tres años contados desde la fecha del alta de cada proceso asistencial.",
      b: "Como mínimo, cinco años contados desde la fecha del alta de cada proceso asistencial.",
      c: "Como mínimo, diez años contados desde la fecha del alta de cada proceso asistencial..",
      d: "Como mínimo, quince años contados desde la fecha del alta de cada proceso asistencial."
    },
    respuesta_correcta: "b"
  },
  {
    id: 154,
    enunciado: "Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, el acceso a la historia clínica de personas fallecidas:",
    opciones: {
      a: "No se facilitará a terceros, salvo que se trate de familiares de la persona fallecida.",
      b: "Se facilitará a familiares salvo que la persona fallecida lo hubiese prohibido expresamente.",
      c: "Se facilitará a familiares hasta el segundo grado, salvo que la persona fallecida lo hubiese prohibido expresamente.",
      d: "Se facilitará a familiares hasta el tercer grado, salvo que la persona fallecida lo hubiese prohibido expresamente."
    },
    respuesta_correcta: "b"
  },
  {
    id: 155,
    enunciado: "Según dispone la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, en caso de que la persona paciente no acepte el alta:",
    opciones: {
      a: "El personal facultativo, previa comprobación del informe clínico correspondiente, oirá a la persona paciente y, si persiste en su negativa, lo pondrá en conocimiento de la dirección del centro para que confirme o revoque la decisión.",
      b: "El personal facultativo, previa comprobación del informe clínico correspondiente, oirá a la persona paciente y, si persiste en su negativa, lo pondrá en conocimiento de la autoridad judicial para que confirme o revoque la decisión.",
      c: "La dirección del centro, previa comprobación del informe clínico correspondiente, oirá a la persona paciente y, si persiste en su negativa, lo pondrá en conocimiento de la autoridad judicial para que confirme o revoque la decisión.",
      d: "La dirección del centro, previa comprobación del informe clínico correspondiente, oirá a la persona paciente y, si persiste en su negativa, lo pondrá en conocimiento de la autoridad administrativa competente para que confirme o revoque la decisión."
    },
    respuesta_correcta: "c"
  },
  {
    id: 156,
    enunciado: "El objeto de la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad es:",
    opciones: {
      a: "Hacer efectivo en la Comunidad Autónoma del País Vasco el derecho de las personas a la expresión anticipada de sus deseos con respecto a ciertas intervenciones médicas, mediante la regulación del documento de voluntades anticipadas en el ámbito de la sanidad.",
      b: "Regular en la Comunidad Autónoma del País Vasco el derecho de las personas a la expresión anticipada de sus deseos con respecto a ciertas intervenciones médicas, mediante la regulación del documento de voluntades anticipadas en el ámbito de la sanidad.",
      c: "Regular las particularidades en la Comunidad Autónoma del País Vasco del derecho de las personas a la expresión anticipada de sus deseos con respecto a ciertas intervenciones médicas.",
      d: "Crear el Registro de Voluntades Anticipadas en la Comunidad Autónoma del País Vasco para hacer efectivo el derecho de las personas a la expresión anticipada de sus deseos con respecto a ciertas intervenciones médicas."
    },
    respuesta_correcta: "a"
  },
  {
    id: 157,
    enunciado: "Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, tiene derecho a manifestar sus objetivos vitales y valores personales, así como las instrucciones sobre su tratamiento:",
    opciones: {
      a: "Cualquier persona mayor de dieciséis años que no haya sido judicialmente incapacitada para ello y actúe libremente.",
      b: "Cualquier persona mayor de edad que no haya sido judicialmente incapacitada para ello y actúe libremente.",
      c: "Cualquier persona mayor de edad y que actúe libremente, así como quienes ostenten la representación legal de aquellas que hayan sido judicialmente incapacitadas para ello.",
      d: "Cualquier persona mayor de dieciséis años y que actúe libremente, así como quienes ostenten la representación legal de aquellas que hayan sido judicialmente incapacitadas para ello."
    },
    respuesta_correcta: "b"
  },
  {
    id: 158,
    enunciado: "Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, la expresión de los objetivos vitales y valores personales tiene como fin:",
    opciones: {
      a: "Conocer la voluntad de la persona paciente en relación con la administración de sedación.",
      b: "Conocer la voluntad de la persona paciente en relación con la finalización de tratamientos de soporte vital.",
      c: "Ayudar a interpretar las instrucciones y servir de orientación para la toma de decisiones clínicas.",
      d: "Documentar la actuación del personal profesional sanitario a efectos de responsabilidad legal en situaciones donde la persona paciente no puede expresar su voluntad por sí misma."
    },
    respuesta_correcta: "c"
  },
  {
    id: 159,
    enunciado: "Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, en el documento de voluntades anticipadas:",
    opciones: {
      a: "Se podrá designar una o varias personas representantes para que sean las interlocutoras válidas del personal facultativo o del equipo sanitario.",
      b: "Se podrá designar exclusivamente una persona representante para que sea la interlocutora válida del personal facultativo o del equipo sanitario.",
      c: "Se podrá designar una o varias personas representantes para que sean las interlocutoras válidas del personal facultativo o del equipo sanitario, si la persona paciente es menor de edad.",
      d: "Se podrá designar una o varias personas representantes para que sean las interlocutoras válidas del personal facultativo o del equipo sanitario y facultarles para interpretar sus valores e instrucciones, si la persona paciente está incapacitada judicialmente."
    },
    respuesta_correcta: "a"
  },
  {
    id: 160,
    enunciado: "Según la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, si el nombramiento de representante en el documento de instrucciones previas ha recaído en favor de la persona cónyuge o pareja de hecho de la persona otorgante:",
    opciones: {
      a: "Se extingue a partir, bien de la interposición de la demanda de nulidad, separación matrimonial o divorcio, bien de la extinción formalizada de la pareja de hecho o unión libre. Para el mantenimiento de la designación será necesario, en caso de nulidad, separación matrimonial o divorcio, que conste expresamente en la resolución judicial dictada al efecto.",
      b: "Se extingue a partir bien de la nulidad, separación matrimonial o divorcio, bien de la extinción formalizada de la pareja de hecho o unión libre. Para el mantenimiento de la designación será necesario, en caso de nulidad, separación matrimonial o divorcio, que conste expresamente en la resolución judicial dictada al efecto.",
      c: "Se extingue a partir, bien de la interposición de la demanda de nulidad, separación matrimonial o divorcio, bien de la extinción formalizada de la pareja de hecho o unión libre. Para el mantenimiento de la designación será necesario, en caso de nulidad, separación matrimonial o divorcio, que conste expresamente en el documento de instrucciones previas.",
      d: "Se extingue bien a partir de la nulidad, separación matrimonial o divorcio, bien de la extinción formalizada de la pareja de hecho o unión libre. Para el mantenimiento de la designación será necesario, en caso de nulidad, separación matrimonial o divorcio, que conste expresamente en el documento de instrucciones previas."
    },
    respuesta_correcta: "a"
  },
  {
    id: 161,
    enunciado: "Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, las instrucciones sobre el tratamiento pueden referirse:",
    opciones: {
      a: "A una enfermedad o lesión que la persona otorgante ya padece o a las que eventualmente podría padecer en un futuro.",
      b: "Exclusivamente a una enfermedad o lesión que la persona otorgante ya padece.",
      c: "Exclusivamente a una enfermedad o lesión que la persona otorgante eventualmente podría padecer en un futuro",
      d: "Exclusivamente a una enfermedad o lesión que la persona otorgante eventualmente podría padecer en un futuro, siempre que sea de carácter grave."
    },
    respuesta_correcta: "a"
  },
  {
    id: 162,
    enunciado: "Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, el documento de voluntades anticipadas:",
    opciones: {
      a: "Se formaliza por escrito y mediante uno de los siguientes procedimientos a elección de la persona que lo otorga: ante una notaría; ante la persona funcionaria o empleada pública encargada del Registro Vasco de Voluntades Anticipadas; o ante dos testigos.",
      b: "Se formaliza por escrito y mediante uno de los siguientes procedimientos a elección de la persona que lo otorga: ante una notaría; ante la persona funcionaria o empleada pública encargada del Registro Vasco de Voluntades Anticipadas; o ante tres testigos.",
      c: "Se formaliza por escrito y mediante uno de los siguientes procedimientos a elección de la persona que lo otorga: ante una notaría; ante la persona funcionaria o empleada pública encargada del Registro Vasco de Voluntades Anticipadas o del servicio de documentación de un centro sanitario de la Comunidad Autónoma del País Vasco; o ante dos testigos.",
      d: "Se formaliza por escrito y mediante uno de los siguientes procedimientos a elección de la persona que lo otorga: ante una notaría; ante la persona funcionaria o empleada pública encargada del Registro Vasco de Voluntades Anticipadas o del servicio de documentación de un centro sanitario de la Comunidad Autónoma del País Vasco; o ante tres testigos."
    },
    respuesta_correcta: "b"
  },
  {
    id: 163,
    enunciado: "Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, las personas que actúen como testigos:",
    opciones: {
      a: "Serán personas mayores de dieciséis años, con plena capacidad de obrar y no vinculadas con la persona otorgante por matrimonio, unión libre o pareja de hecho, parentesco hasta el segundo grado de consanguinidad o afinidad o relación patrimonial alguna.",
      b: "Serán personas mayores de dieciséis años, con plena capacidad de obrar y no vinculadas con la persona otorgante por matrimonio, unión libre o pareja de hecho, parentesco hasta el tercer grado de consanguinidad o afinidad o relación patrimonial alguna.",
      c: "Serán personas mayores de edad, con plena capacidad de obrar y no vinculadas con la persona otorgante por matrimonio, unión libre o pareja de hecho, parentesco hasta el segundo grado de consanguinidad o afinidad o relación patrimonial alguna",
      d: "Serán personas mayores de edad, con plena capacidad de obrar y no vinculadas con la persona otorgante por matrimonio o pareja de hecho, parentesco hasta el tercer grado de consanguinidad o relación patrimonial alguna."
    },
    respuesta_correcta: "c"
  },
  {
    id: 164,
    enunciado: "Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, el documento de voluntades anticipadas puede ser modificado, sustituido por otro o revocado en cualquier momento por la persona otorgante:",
    opciones: {
      a: "Siempre que conserve la capacidad o actúe con la asistencia de su representante legal y actúe libremente.",
      b: "Siempre que conserve la capacidad o exista autorización judicial.",
      c: "Siempre que actúe libremente.",
      d: "Siempre que conserve la capacidad y actúe libremente."
    },
    respuesta_correcta: "d"
  },
  {
    id: 165,
    enunciado: "Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, la modificación, sustitución o revocación del documento de voluntades anticipadas se formaliza:",
    opciones: {
      a: "Por escrito o verbalmente, y ante una notaría o ante la persona funcionaria o empleada pública encargada del Registro Vasco de Voluntades Anticipadas o ante tres testigos.",
      b: "Por escrito y ante una notaría o ante la persona funcionaria o empleada pública encargada del Registro Vasco de Voluntades Anticipadas o ante tres testigos.",
      c: "Por escrito o verbalmente, y ante la persona funcionaria o empleada pública encargada del Registro Vasco de Voluntades donde se encuentra registrado el documento inicial.",
      d: "Por escrito y ante la persona funcionaria o empleada pública encargada del Registro Vasco de Voluntades donde se encuentra registrado el documento inicial."
    },
    respuesta_correcta: "b"
  },
  {
    id: 166,
    enunciado: "Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, la voluntad de la persona prevalece sobre las instrucciones contenidas en el documento de voluntades anticipadas ante cualquier intervención clínica siempre que:",
    opciones: {
      a: "La persona otorgante conserve su capacidad y su libertad de actuación.",
      b: "La persona otorgante conserve su capacidad, su libertad de actuación y la posibilidad de expresarse.",
      c: "La persona otorgante conserve su capacidad, su libertad de actuación y la posibilidad de expresarse de manera inequívoca.",
      d: "La persona otorgante conserve su capacidad, su libertad de actuación y la posibilidad de expresarse de manera inequívoca o a través de la persona interlocutora designada al efecto."
    },
    respuesta_correcta: "b"
  },
  {
    id: 167,
    enunciado: "Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, en el documento de voluntades anticipadas se tendrán por no puestas:",
    opciones: {
      a: "Las instrucciones que en el momento de ser aplicadas resulten contrarias al ordenamiento jurídico.",
      b: "Las instrucciones que en el momento de ser otorgadas resulten contrarias al ordenamiento jurídico.",
      c: "Las respuestas a) y b) son correctas.",
      d: "Las instrucciones que en el momento de ser aplicadas no se aprueben por el comité de ética del centro."
    },
    respuesta_correcta: "a"
  },
  {
    id: 168,
    enunciado: "Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, en el documento de voluntades anticipadas se tendrán por no puestas:",
    opciones: {
      a: "Las instrucciones que resulten contraindicadas para su patología.",
      b: "Las instrucciones que en el momento de ser aplicadas resulten contrarias al ordenamiento jurídico.",
      c: "Las instrucciones que no se correspondan con los tipos de supuestos previstos por la persona otorgante al formalizar el documento de voluntades anticipadas.",
      d: "Todas las respuestas anteriores son correctas."
    },
    respuesta_correcta: "d"
  },
  {
    id: 169,
    enunciado: "Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, la interconexión prevista para el Registro Vasco de Voluntades Anticipadas:",
    opciones: {
      a: "Precisará el consentimiento de la persona otorgante en el momento del registro del documento, y de la persona interlocutora designada para la comunicación efectiva de los datos.",
      b: "Precisará el consentimiento de la persona otorgante para la comunicación de los datos.",
      c: "No precisará el consentimiento de la persona otorgante para la comunicación de los datos.",
      d: "No precisará el consentimiento de la persona otorgante para la comunicación de los datos pero sí autorización de la Agencia Vasca de Protección de Datos."
    },
    respuesta_correcta: "c"
  },
  {
    id: 170,
    enunciado: "Según dispone la Ley 7/2002, de 12 de diciembre, de las voluntades anticipadas en el ámbito de la sanidad, el documento de voluntades anticipadas que no haya sido inscrito en el Registro Vasco de Voluntades Anticipadas:",
    opciones: {
      a: "Debe entregarse en el centro sanitario donde la persona otorgante sea atendida.",
      b: "Debe entregarse en el centro sanitario donde la persona otorgante sea atendida y contar con la validación de la autoridad judicial.",
      c: "Carece de eficacia.",
      d: "Carece de eficacia si la persona otorgante no puede validarlo por sí misma en ese momento."
    },
    respuesta_correcta: "a"
  },
  {
    id: 171,
    enunciado: "Según dispone la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, podrán tener acceso a los datos personales de las personas fallecidas:",
    opciones: {
      a: "Las personas vinculadas a la persona fallecida por razones familiares o de hecho así como quienes ostenten la condición de herederas, en todo caso.",
      b: "Solo las personas vinculadas a la persona fallecida por razones familiares siempre que lo hubiera autorizado expresamente la persona fallecida.",
      c: "Las personas vinculadas a la persona fallecida por razones familiares o de hecho así como quienes ostenten la condición de herederas, salvo que la persona fallecida lo hubiese prohibido expresamente.",
      d: "En caso de que la persona fallecida fuera menor de edad, el acceso podrá ejercerse también por sus representantes legales o por el Ministerio Fiscal que siempre actuará de oficio."
    },
    respuesta_correcta: "c"
  },
  {
    id: 172,
    enunciado: "Señale la respuesta que no es correcta. Según la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales a efectos del tratamiento de los datos, el consentimiento de la persona afectada tiene que ser una manifestación de voluntad que cumpla las siguientes características:",
    opciones: {
      a: "Libre.",
      b: "Verbal.",
      c: "Específica.",
      d: "Informada."
    },
    respuesta_correcta: "b"
  },
  {
    id: 173,
    enunciado: "Con relación al tratamiento de los datos personales de una persona menor de edad, señale la respuesta correcta:",
    opciones: {
      a: "Únicamente podrá fundarse en su consentimiento cuando sea mayor de dieciséis años.",
      b: "La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales no prevé que las personas menores de edad puedan dar su consentimiento válidamente a estos efectos.",
      c: "Únicamente podrá fundarse en su consentimiento cuando sea mayor de catorce años.",
      d: "El tratamiento de los datos de las personas menores de dieciséis años, fundado en el consentimiento, solo será lícito si consta el consentimiento de quienes ejercen la patria potestad o tutela, con el alcance que dichas personas determinen."
    },
    respuesta_correcta: "c"
  },
  {
    id: 174,
    enunciado: "La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, en su artículo 9 considera categorías especiales de datos aquellos que permitan, respecto a la persona afectada, identificar:",
    opciones: {
      a: "Su ideología y afiliación sindical.",
      b: "Su religión y orientación sexual .",
      c: "Sus creencias u origen racial o étnico.",
      d: "Todas las respuestas son correctas."
    },
    respuesta_correcta: "d"
  },
  {
    id: 175,
    enunciado: "La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales establece que el tratamiento de datos de naturaleza penal podrá llevarse a cabo:",
    opciones: {
      a: "Solo por profesionales de la abogacía y cuando tengan por objeto recoger la información facilitada por quienes les contraten para el ejercicio de sus funciones.",
      b: "Por profesionales de la abogacía y de la procura, cuando tengan por objeto recoger la información facilitada por quienes les contraten para el ejercicio de sus funciones.",
      c: "En los casos previstos por la propia Ley Orgánica 3/2018 y en otras normas de rango reglamentario.",
      d: "Exclusivamente en los supuestos amparados en una norma de Derecho de la Unión y en la propia Ley Orgánica 2/2018."
    },
    respuesta_correcta: "b"
  },
  {
    id: 176,
    enunciado: "Respecto al derecho de rectificación que regula la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, señale la respuesta correcta:",
    opciones: {
      a: "La persona afectada deberá indicar en su solicitud a qué datos se refiere y deberá acompañar, en todo caso, la documentación justificativa de la inexactitud de los datos.",
      b: "La persona afectada deberá indicar en su solicitud a qué datos se refiere y la corrección que haya de realizarse, y cuando sea preciso, deberá acompañar la documentación justificativa de la inexactitud o carácter incompleto de los datos objeto de tratamiento.",
      c: "La persona afectada deberá indicar en su solicitud solo la corrección que haya de realizarse y debe siempre acompañar la documentación justificativa de la inexactitud de los datos.",
      d: "No es necesario que la persona afectada indique expresamente en su solicitud qué datos deben rectificarse."
    },
    respuesta_correcta: "b"
  },
  {
    id: 177,
    enunciado: "Con relación al tratamiento de datos con fines de videovigilancia, señale la respuesta correcta:",
    opciones: {
      a: "Solo las personas físicas podrán llevar a cabo el tratamiento de imágenes a través de sistemas de cámaras o videocámaras con la finalidad de preservar la seguridad de las personas y bienes, así como sus instalaciones.",
      b: "Los datos serán suprimidos, en todo caso, en el plazo máximo de un mes desde su captación.",
      c: "Los datos serán suprimidos en el plazo máximo de un mes desde su captación, salvo cuando hubieran de ser conservados para acreditar la comisión de actos que atenten contra la integridad de personas, bienes o instalaciones.",
      d: "En el caso de que los datos hubieran de ser conservados más allá del plazo de un mes desde su captación para acreditar la comisión de actos que atenten contra la integridad de personas, bienes o instalaciones, deberán ser puestas a disposición de la autoridad competente en un plazo máximo de cuarenta y ocho horas desde que se tuviera conocimiento de la existencia de la grabación."
    },
    respuesta_correcta: "c"
  },
  {
    id: 178,
    enunciado: "Respecto a los sistemas de información de denuncias internas que contempla la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, es correcta la siguiente afirmación:",
    opciones: {
      a: "En todo caso, transcurridos tres meses desde la introducción de los datos, deberá procederse a su supresión del sistema de denuncias, salvo que la finalidad de la conservación sea dejar evidencia del funcionamiento del modelo de prevención de la comisión de delitos.",
      b: "En todo caso, transcurridos seis meses desde la introducción de los datos, deberá procederse a su supresión del sistema de denuncias, salvo que la finalidad de la conservación sea dejar evidencia del funcionamiento del modelo de prevención de la comisión de delitos.",
      c: "En todo caso, y sin excepción, transcurridos seis meses desde la introducción de los datos, deberá procederse a su supresión del sistema de denuncias.",
      d: "La Ley no prevé plazo temporal alguno para la supresión de los datos del sistema de denuncias."
    },
    respuesta_correcta: "a"
  },
  {
    id: 179,
    enunciado: "Señale la respuesta correcta respecto a la Agencia Española de Protección de Datos:",
    opciones: {
      a: "Su denominación oficial es “Agencia Española de Protección de Datos, Autoridad Administrativa Independiente”.",
      b: "Es una entidad administrativa de ámbito estatal sin personalidad jurídica propia.",
      c: "Su denominación oficial es “Agencia Española de Protección de Datos”.",
      d: "Se relaciona con el Gobierno a través de la Presidencia del Gobierno."
    },
    respuesta_correcta: "a"
  },
  {
    id: 180,
    enunciado: "Respecto al procedimiento de nombramiento de la Presidencia de la Agencia Española de Protección de Datos, señale la respuesta correcta:",
    opciones: {
      a: "Será nombrada por el Gobierno, a propuesta del Ministerio de Justicia, y estará auxiliada por dos personas adjuntas.",
      b: "Su nombramiento debe ser ratificado por la Comisión de Justicia del Congreso de los Diputados por mayoría absoluta de sus integrantes en primera votación.",
      c: "Su nombramiento debe ser ratificado por la Comisión de Justicia del Congreso de los Diputados por mayoría de tres quintos de sus integrantes en primera votación.",
      d: "Será nombrada por el Parlamento mediante Ley."
    },
    respuesta_correcta: "c"
  },
  {
    id: 181,
    enunciado: "Según el Decreto Legislativo 1/2023, de 16 de marzo, por el que se aprueba el texto refundido de la Ley para la Igualdad de Mujeres y Hombres y Vidas Libres de Violencia Machista contra las Mujeres, respecto a la legitimidad para presentar una queja ante Emakunde-Instituto Vasco de la Mujer, señale la respuesta correcta:",
    opciones: {
      a: "La legitimidad se reconoce a cualquier persona o grupo de personas que se considere discriminada por razón de sexo, o quienes legítimamente les representen",
      b: "La legitimidad se reconoce solo a quien ostente nacionalidad española.",
      c: "Las personas jurídicas no están legitimadas para iniciar y tomar parte en el procedimiento en nombre o en apoyo de la persona que se considere discriminada.",
      d: "Las asociaciones y organizaciones que tengan entre sus fines velar por el cumplimiento del principio de igualdad de trato de mujeres y hombres siempre están legitimadas para iniciar y tomar parte en el procedimiento en nombre o en apoyo de la persona que se considere discriminada."
    },
    respuesta_correcta: "a"
  },
  {
    id: 182,
    enunciado: "El artículo 1 del Decreto Legislativo 1/2023, de 16 de marzo, por el que se aprueba el texto refundido de la Ley para la Igualdad de Mujeres y Hombres y Vidas Libres de Violencia Machista contra las Mujeres, añade un concepto específico al objeto de la ley que refuerza el fin último de la norma, ¿cuál es?",
    opciones: {
      a: "La igualdad de oportunidades.",
      b: "El empoderamiento de las mujeres.",
      c: "Lograr una sociedad libre de violencia machista.",
      d: "La eliminación de roles tradicionales."
    },
    respuesta_correcta: "c"
  },
  {
    id: 183,
    enunciado: "Según el artículo 2 del Decreto Legislativo 1/2023, de 16 de marzo, por el que se aprueba el texto refundido de la Ley para la Igualdad de Mujeres y Hombres y Vidas Libres de Violencia Machista contra las Mujeres, ¿a qué entidades privadas les es exigible el cumplimiento de los principios generales de esta ley durante su relación con la administración?",
    opciones: {
      a: "Solo a las que tengan una plantilla superior a 250 personas.",
      b: "A todas las empresas con sede en Euskadi.",
      c: "A las que suscriban contratos o convenios, estén participadas por poderes públicos o sean beneficiarias de ayudas.",
      d: "Ninguna entidad privada está sujeta a los principios de la ley."
    },
    respuesta_correcta: "c"
  },
  {
    id: 184,
    enunciado: "Según el Decreto Legislativo 1/2023, de 16 de marzo, por el que se aprueba el texto refundido de la Ley para la Igualdad de Mujeres y Hombres y Vidas Libres de Violencia Machista contra las Mujeres, ¿cuál de estos es un principio general de actuación de los poderes públicos vascos incorporado en la nueva redacción del artículo 3?",
    opciones: {
      a: "El principio de jerarquía administrativa.",
      b: "La integración de la perspectiva interseccional.",
      c: "El principio de celeridad procesal.",
      d: "La centralización de recursos de acogida."
    },
    respuesta_correcta: "b"
  },
  {
    id: 185,
    enunciado: "Según el Decreto Legislativo 1/2023, de 16 de marzo, por el que se aprueba el texto refundido de la Ley para la Igualdad de Mujeres y Hombres y Vidas Libres de Violencia Machista contra las Mujeres, respecto al principio de representación equilibrada, ¿en qué caso se permite excepcionalmente una presencia de mujeres superior al 60%?",
    opciones: {
      a: "En ningún caso.",
      b: "Solo si no hay hombres capacitados en el sector.",
      c: "Cuando sea acorde al objetivo de corregir la histórica situación de infrarrepresentación de las mujeres.",
      d: "Si el órgano tiene menos de cuatro integrantes."
    },
    respuesta_correcta: "c"
  },
  {
    id: 186,
    enunciado: "Según el Decreto Legislativo 1/2023, de 16 de marzo, por el que se aprueba el texto refundido de la Ley para la Igualdad de Mujeres y Hombres y Vidas Libres de Violencia Machista contra las Mujeres, ¿qué planes específicos deben someterse ahora, obligatoriamente, a una evaluación previa de impacto en función del género?",
    opciones: {
      a: "Solo los planes de formación interna.",
      b: "Los planes territoriales y urbanísticos.",
      c: "Los planes de marketing de empresas públicas.",
      d: "Ningún plan, solo los proyectos de ley."
    },
    respuesta_correcta: "b"
  },
  {
    id: 187,
    enunciado: "Según el Decreto Legislativo 1/2023, de 16 de marzo, por el que se aprueba el texto refundido de la Ley para la Igualdad de Mujeres y Hombres y Vidas Libres de Violencia Machista contra las Mujeres, ¿qué requisito nuevo deben cumplir las empresas de más de 50 personas trabajadoras para poder recibir subvenciones públicas?",
    opciones: {
      a: "Tener paridad total en su directiva.",
      b: "Acreditar haber establecido medidas para prevenir y combatir el acoso sexual y las violencias sexuales.",
      c: "Tener un departamento exclusivo de igualdad.",
      d: "Estar inscritas en un registro internacional de igualdad."
    },
    respuesta_correcta: "b"
  },
  {
    id: 188,
    enunciado: "De acuerdo con lo establecido en el artículo 54 del texto refundido de la Ley para la Igualdad de Mujeres y Hombres y Vidas Libres de Violencia Machista contra las Mujeres, aprobado por el Decreto Legislativo 1/2023, de 16 de marzo, ¿cómo se define la \"violencia machista contra las mujeres\"?",
    opciones: {
      a: "Solo la violencia física en el hogar.",
      b: "Una violación de los derechos humanos y un problema de salud pública de primer orden.",
      c: "Únicamente los delitos contra la libertad sexual.",
      d: "Un conflicto de convivencia familiar."
    },
    respuesta_correcta: "b"
  },
  {
    id: 189,
    enunciado: "De acuerdo con lo establecido en el artículo 54.3 del texto refundido de la Ley para la Igualdad de Mujeres y Hombres y Vidas Libres de Violencia Machista contra las Mujeres, aprobado por el Decreto Legislativo 1/2023, de 16 de marzo, ¿qué formas de violencia se incorporan como casos constitutivos de violencia machista por estar específicamente recogidos en dicho apartado?",
    opciones: {
      a: "Solo la violencia física y psicológica.",
      b: "La violencia obstétrica, la política de género y la violencia digital.",
      c: "Únicamente el acoso laboral.",
      d: "No se detallan formas, se remite al Código Penal."
    },
    respuesta_correcta: "b"
  },
  {
    id: 190,
    enunciado: "De acuerdo con el Decreto Legislativo 1/2023, de 16 de marzo, por el que se aprueba el texto refundido de la Ley para la Igualdad de Mujeres y Hombres y Vidas Libres de Violencia Machista contra las Mujeres, ¿qué derecho se reconoce expresamente a las víctimas en el marco de las competencias de la Comunidad Autónoma de Euskadi?",
    opciones: {
      a: "Derecho a la inmunidad procesal.",
      b: "Derecho a la reparación conforme al Convenio de Estambul",
      c: "Derecho a la jubilación anticipada.",
      d: "Derecho a la residencia gratuita permanente."
    },
    respuesta_correcta: "b"
  },
  {
    id: 191,
    enunciado: "¿Cuántos Objetivos Generales, clasificados como finalistas e instrumentales, se definen en la estructura del Plan de Salud Euskadi 2030?",
    opciones: {
      a: "Cinco Objetivos Generales.",
      b: "Seis Objetivos Generales.",
      c: "Siete Objetivos Generales.",
      d: "Ocho Objetivos Generales."
    },
    respuesta_correcta: "c"
  },
  {
    id: 192,
    enunciado: "Según el Plan de Salud Euskadi 2030, la VISIÓN que se aspira a lograr como país es:",
    opciones: {
      a: "Convertirnos en el sistema de salud pública más sólido y resiliente de Europa.",
      b: "Liderar una Euskadi más saludable.",
      c: "Reducir la morbimortalidad evitable y disminuir las desigualdades en salud antes de 2030.",
      d: "Lograr la sostenibilidad y excelencia en los sistemas asistenciales sanitarios y sociosanitarios."
    },
    respuesta_correcta: "b"
  },
  {
    id: 193,
    enunciado: "¿Cuál de los siguientes NO es un principio rector en los que se apoya el Plan de Salud Euskadi 2030?",
    opciones: {
      a: "La necesaria coordinación y colaboración interinstitucional, entre agentes y en todos los niveles.",
      b: "Enfoque de Salud en Todas las Políticas y 'Una Sola Salud' ('One Health').",
      c: "La autosuficiencia presupuestaria del Sistema Sanitario Público.",
      d: "Contribución al Desarrollo Sostenible."
    },
    respuesta_correcta: "c"
  },
  {
    id: 194,
    enunciado: "El Objetivo General 1 (OG1) del Plan de Salud Euskadi 2030 se enfoca en:",
    opciones: {
      a: "Promover la salud de las mujeres y la salud reproductiva en la edad adulta.",
      b: "Lograr que niñas, niños y adolescentes nazcan, crezcan y se desarrollen con todo su potencial de salud.",
      c: "Mejorar la salud mental y reducir la morbimortalidad asociada a trastornos mentales.",
      d: "La prevención y el control de las enfermedades no transmisibles (ENT)."
    },
    respuesta_correcta: "b"
  },
  {
    id: 195,
    enunciado: "El Objetivo General 4 (OG4) del Plan de Salud Euskadi 2030 se define como: “lograr la sostenibilidad y excelencia en los sistemas asistenciales sanitarios y sociosanitarios de Euskadi”, ¿en términos de qué tres conceptos clave?",
    opciones: {
      a: "Eficiencia, accesibilidad e innovación.",
      b: "Calidad, humanización y seguridad.",
      c: "Equidad, intersectorialidad y coordinación.",
      d: "Investigación, formación y evaluación."
    },
    respuesta_correcta: "b"
  },
  {
    id: 196,
    enunciado: "¿Cuál de los siguientes enfoques es uno de los fundamentos estratégicos detallados en el Plan de Salud Euskadi 2030, además de la reducción de las desigualdades en salud y la Salud en Todas las Políticas?",
    opciones: {
      a: "El enfoque de 'Un Mundo, Una Solución' ('One World, One Solution').",
      b: "El enfoque del Marco de Resultados en Salud (MRS).",
      c: "El enfoque de 'Una Sola Salud' ('One Health').",
      d: "El enfoque de Centralidad del Sistema Sanitario."
    },
    respuesta_correcta: "c"
  },
  {
    id: 197,
    enunciado: "¿A qué hace referencia el acrónimo AVAD en el Plan de Salud Euskadi 2030?",
    opciones: {
      a: "Áreas de Valoración de la Atención al Dependiente.",
      b: "Años de Vida Activa Desaprovechados.",
      c: "Atención Vasca a la Adicción a Drogas.",
      d: "Años de Vida sana perdidos Ajustados por Discapacidad."
    },
    respuesta_correcta: "d"
  },
  {
    id: 198,
    enunciado: "¿Cuántas personas aproximadamente, entre expertas, profesionales, entidades y ciudadanía, contribuyeron en la elaboración del Plan de Salud Euskadi 2030?",
    opciones: {
      a: "Cerca de 50 personas.",
      b: "Menos de 100 personas.",
      c: "Cerca de 200 personas.",
      d: "Más de 300 personas."
    },
    respuesta_correcta: "c"
  },
  {
    id: 199,
    enunciado: "La MISIÓN del Plan de Salud Euskadi 2030 se define como:",
    opciones: {
      a: "Garantizar la cobertura universal y el acceso equitativo a los servicios de Osakidetza.",
      b: "Generar valor a la ciudadanía vasca en términos de una mayor esperanza de vida y menos dependencia.",
      c: "Definir un horizonte de Salud y facilitar la orientación y el diseño de políticas eficaces que lleven a conseguirlo.",
      d: "Superar la Ley de Salud Pública de Euskadi y el Plan Estratégico de Osakidetza en impacto sobre la salud."
    },
    respuesta_correcta: "c"
  },
  {
    id: 200,
    enunciado: "¿Cuál es uno de los objetivos clave del Plan de Salud Euskadi 2030, reiterado en varias secciones, respecto a la equidad y la gestión de la enfermedad?",
    opciones: {
      a: "Garantizar la participación de la empresa privada en la gestión de servicios hospitalarios.",
      b: "Aumentar la esperanza de vida en 5 años en todos los colectivos sociales.",
      c: "Reducir la morbimortalidad evitable y disminuir las desigualdades en salud.",
      d: "Implementar un programa de cribado universal para todos los tipos de cáncer."
    },
    respuesta_correcta: "c"
  },
  {
    id: 201,
    enunciado: "¿Qué órganos fueron responsables de la dirección y elaboración del Plan de Salud Euskadi 2030, según el documento?",
    opciones: {
      a: "El Consejo de Gobierno y el Departamento de Hacienda.",
      b: "Un Comité de Dirección y un Comité Estratégico.",
      c: "La Dirección General de Osakidetza y Lehendakaritza.",
      d: "El Observatorio de Salud y la consultora LKS S Coop."
    },
    respuesta_correcta: "b"
  },
  {
    id: 202,
    enunciado: "Dentro del Objetivo General 5 del Plan de Salud Euskadi 2030, ¿cuáles son las características que deben definir al sistema de salud pública para responder a los nuevos retos?",
    opciones: {
      a: "Estratégico, descentralizado, participativo y eficiente.",
      b: "Flexible, sólido, ágil y escalable.",
      c: "Universal, equitativo, transparente y tecnológico.",
      d: "Resiliente, preventivo, comunitario e integral."
    },
    respuesta_correcta: "b"
  },
  {
    id: 203,
    enunciado: "¿Qué enfoque de investigación prioriza el Plan de Salud Euskadi 2030 para asegurar que los avances científicos lleguen de forma efectiva a la práctica clínica y la salud de la población?",
    opciones: {
      a: "Enfoque de investigación básica y fundamental.",
      b: "Enfoque de investigación traslacional.",
      c: "Enfoque de investigación puramente epidemiológica.",
      d: "Enfoque de investigación competitiva internacional."
    },
    respuesta_correcta: "b"
  },
  {
    id: 204,
    enunciado: "Según el modelo de evaluación del Plan de Salud Euskadi 2030, ¿cuáles son los cuatro criterios fundamentales para determinar el éxito de las intervenciones?",
    opciones: {
      a: "Impacto, cobertura, equidad y transparencia.",
      b: "Relevancia, efectividad, eficiencia y sostenibilidad.",
      c: "Rentabilidad, participación, innovación y prestigio.",
      d: "Calidad, calidez, rapidez y ahorro presupuestario."
    },
    respuesta_correcta: "b"
  },
  {
    id: 205,
    enunciado: "En la lucha contra las desigualdades, ¿qué tipo de soluciones habitacionales promueve el Plan de Salud Euskadi 2030 para las diferentes etapas de la vida?",
    opciones: {
      a: "Construcción de viviendas de protección oficial exclusivamente rurales.",
      b: "Soluciones habitacionales asequibles, accesibles y adaptadas al ciclo vital.",
      c: "Ayudas directas al alquiler únicamente para personas menores de 30 años",
      d: "Fomento de grandes centros residenciales para todas las personas con enfermedades crónicas."
    },
    respuesta_correcta: "b"
  },
  {
    id: 206,
    enunciado: "Según la comparativa de la Memoria Económica del Plan de Salud Euskadi 2030, ¿cuál es el programa presupuestario (fuera del gasto general de Osakidetza) con mayor dotación?",
    opciones: {
      a: "Programa de Salud Pública.",
      b: "Programa de Farmacia.",
      c: "Programa de Adicciones.",
      d: "Programa de Investigación y Planificación."
    },
    respuesta_correcta: "b"
  },
  {
    id: 207,
    enunciado: "El Plan de Salud Euskadi 2030 busca lograr \"comunidades amigables\" para las personas mayores. ¿Cuál es la finalidad última de esta estrategia?",
    opciones: {
      a: "Segregar los espacios públicos por franjas de edad.",
      b: "Adaptar el entorno físico y social para fomentar un envejecimiento activo y con sentido.",
      c: "Aumentar el número de plazas en residencias geriátricas de alta especialización.",
      d: "Limitar el acceso de vehículos a las zonas cercanas a los centros de salud."
    },
    respuesta_correcta: "b"
  },
  {
    id: 208,
    enunciado: "En el ámbito de la salud digital, ¿qué concepto destaca el Plan de Salud Euskadi 2030 para transformar la atención personalizada?",
    opciones: {
      a: "La teleasistencia robótica obligatoria en todos los domicilios.",
      b: "La medicina de precisión y la integración de datos genómicos.",
      c: "La eliminación definitiva de la historia clínica en papel en favor del PDF.",
      d: "La creación de una red social exclusiva para pacientes crónicos/as."
    },
    respuesta_correcta: "b"
  },
  {
    id: 209,
    enunciado: "¿Cómo define el Plan de Salud Euskadi 2030 el concepto de \"Intersectorialidad\" en la gestión de la salud?",
    opciones: {
      a: "La competencia entre diferentes sectores para obtener fondos públicos.",
      b: "La colaboración entre departamentos del Gobierno para que la salud esté en todas las políticas.",
      c: "La privatización de sectores sanitarios no críticos.",
      d: "La creación de un único departamento que gestione salud, educación y vivienda."
    },
    respuesta_correcta: "b"
  },
  {
    id: 210,
    enunciado: "¿Cuál es la visión del Plan de Salud Euskadi 2030 sobre el uso de la evidencia científica en la toma de decisiones políticas?",
    opciones: {
      a: "Es un elemento opcional supeditado a la oportunidad política.",
      b: "Es la base fundamental para el diseño, implementación y evaluación de las políticas de salud.",
      c: "Solo se debe aplicar en casos de alertas sanitarias internacionales.",
      d: "Se reserva exclusivamente para el ámbito académico, no para el legislativo."
    },
    respuesta_correcta: "b"
  },
  {
    id: 211,
    enunciado: "Según el análisis del contexto social del documento de Diagnóstico del Pacto Vasco de Salud de Euskadi, ¿qué factor se identifica como un motor clave para que la ciudadanía del siglo XXI demande un papel más activo en su salud?",
    opciones: {
      a: "El incremento exclusivo de la esperanza de vida al nacer.",
      b: "El acceso generalizado a la información y un mayor nivel educativo en la CAPV.",
      c: "La reducción drástica de las listas de espera en consultas externas.",
      d: "La implementación de la receta electrónica en todas las farmacias."
    },
    respuesta_correcta: "b"
  },
  {
    id: 212,
    enunciado: "El documento de Diagnóstico del Pacto Vasco de Salud de Euskadi señala que los flujos migratorios actuales en Euskadi:",
    opciones: {
      a: "No tienen impacto relevante en el perfil epidemiológico de la comunidad.",
      b: "Revelan patologías anteriormente poco conocidas en nuestro entorno, pero prevalentes en otras latitudes.",
      c: "Se limitan exclusivamente a personas en edad laboral con excelente estado de salud inicial.",
      d: "Han provocado la saturación irreversible de los servicios de urgencias hospitalarias."
    },
    respuesta_correcta: "b"
  },
  {
    id: 213,
    enunciado: "¿Cuál es uno de los principales desafíos identificados en el documento de Diagnóstico del Pacto Vasco de Salud de Euskadi respecto a la formación y relevo del personal sanitario?",
    opciones: {
      a: "La excesiva oferta de plazas MIR en todas las especialidades médicas.",
      b: "La falta de interés de las nuevas generaciones por las profesiones biosanitarias.",
      c: "La necesidad de planificar el relevo ante la jubilación de cohortes numerosas de profesionales.",
      d: "La prohibición de la formación continua dentro del horario laboral."
    },
    respuesta_correcta: "c"
  },
  {
    id: 214,
    enunciado: "Sobre el impacto del cambio global y climático, el documento de Diagnóstico del Pacto Vasco de Salud de Euskadi advierte de la aparición de:",
    opciones: {
      a: "Patologías ligadas exclusivamente al consumo de alimentos ultraprocesados.",
      b: "Nuevos vectores y virus anteriormente inexistentes en nuestro entorno, como el virus del Nilo.",
      c: "Una disminución natural de las enfermedades respiratorias debido al aumento de temperaturas.",
      d: "La erradicación total de las enfermedades infecciosas estacionales."
    },
    respuesta_correcta: "b"
  },
  {
    id: 215,
    enunciado: "El documento de Diagnóstico del Pacto Vasco de Salud de Euskadi propone que los indicadores sanitarios para evaluar el sistema deben:",
    opciones: {
      a: "Basarse exclusivamente en mediciones de actividad (número de consultas y cirugías).",
      b: "Ser confidenciales y accesibles únicamente para la alta dirección del Departamento de Salud.",
      c: "Ignorar la perspectiva de género para simplificar la toma de datos estadísticos.",
      d: "Reflejar resultados en salud y sostenibilidad, y no solo volumen de actividad."
    },
    respuesta_correcta: "d"
  },
  {
    id: 216,
    enunciado: "¿Cuál es la finalidad principal de los Valores Fundamentales del Pacto Vasco de Salud, según el Libro de Valores y principios?",
    opciones: {
      a: "Ser la base para la elaboración del futuro Plan Estratégico de Osakidetza.",
      b: "Establecer la estructura financiera y la autonomía de gestión del sistema de salud.",
      c: "Ser el fundamento ético y social que soporta la actividad del Sistema Público de Salud de Euskadi.",
      d: "Garantizar la cobertura universal únicamente a la ciudadanía vasca empadronada."
    },
    respuesta_correcta: "c"
  },
  {
    id: 217,
    enunciado: "¿Cuál de los siguientes es un Valor Fundamental explícito del Pacto Vasco de Salud, además de la Universalidad y la Equidad?",
    opciones: {
      a: "La Sostenibilidad del sistema.",
      b: "La Eficiencia en el gasto.",
      c: "La Corresponsabilidad.",
      d: "El Plurilingüismo como eje central de la atención."
    },
    respuesta_correcta: "c"
  },
  {
    id: 218,
    enunciado: "El principio rector de la Salud en Todas las Políticas (STP) en el Pacto Vasco de Salud tiene como alcance la necesidad de:",
    opciones: {
      a: "Incorporar la perspectiva de salud en todas las decisiones y políticas públicas, fuera del ámbito sanitario.",
      b: "Priorizar el presupuesto del Departamento de Salud sobre el resto de las carteras del Gobierno Vasco.",
      c: "Centralizar toda la toma de decisiones en el Consejo Asesor del Departamento de Salud.",
      d: "Desarrollar un plan de choque específico para la Atención Primaria, desvinculado de la hospitalaria."
    },
    respuesta_correcta: "a"
  },
  {
    id: 219,
    enunciado: "El principio de Innovación en el Pacto Vasco de Salud se aplica a:",
    opciones: {
      a: "Exclusivamente a la aplicación de nuevas tecnologías de imagen médica.",
      b: "La I+D+i en todas las fases y dimensiones de la salud, incluyendo la organizativa y la asistencial.",
      c: "La importación de modelos de éxito de otros sistemas sanitarios europeos.",
      d: "La digitalización de la historia clínica en Osakidetza."
    },
    respuesta_correcta: "b"
  },
  {
    id: 220,
    enunciado: "En el marco del Pacto Vasco de Salud, el principio rector de la Transparencia y Rendición de Cuentas tiene como objetivo principal:",
    opciones: {
      a: "Garantizar la confidencialidad absoluta de los datos de salud de las personas pacientes.",
      b: "Asegurar que las personas gestoras tengan acceso a todos los cuadros de mando de la OSI.",
      c: "Comunicar regularmente los resultados y progresos del sistema a todas las partes involucradas, fortaleciendo la confianza.",
      d: "Permitir auditorías externas del gasto sanitario cada cinco años."
    },
    respuesta_correcta: "c"
  },
  {
    id: 221,
    enunciado: "En el marco del Pacto Vasco de Salud, dentro de los principios rectores, la \"Orientación al Valor\" significa que el sistema debe priorizar:",
    opciones: {
      a: "Las intervenciones que generen los mejores resultados relevantes para la persona al menor coste posible.",
      b: "El valor de mercado de las acciones de las empresas proveedoras de tecnología.",
      c: "El incremento constante de las infraestructuras físicas sobre la inversión en personal.",
      d: "La compra masiva de medicamentos de marca sobre los genéricos."
    },
    respuesta_correcta: "a"
  },
  {
    id: 222,
    enunciado: "¿En qué grandes ámbitos se estructuran las Líneas Estratégicas del Pacto Vasco de Salud?",
    opciones: {
      a: "Cinco Líneas Estratégicas. prevención y promoción de la salud; atención a la enfermedad; calidad, innovación y sostenibilidad; desarrollo de las y los profesionales; y Gobernanza.",
      b: "Seis Líneas Estratégicas: prevención y promoción de la salud; atención a la enfermedad; áreas prioritarias de salud; calidad, innovación y sostenibilidad; desarrollo de las y los profesionales; y transparencia y participación ciudadana.",
      c: "Seis Líneas Estratégicas: prevención y promoción de la salud; atención a la enfermedad; áreas prioritarias de salud; calidad, innovación y sostenibilidad; desarrollo de las y los profesionales; y gobernanza.",
      d: "Seis Líneas Estratégicas: prevención y promoción de la salud; atención sociosanitaria; áreas prioritarias de salud; calidad, innovación y sostenibilidad; desarrollo de las y los profesionales; y gobernanza."
    },
    respuesta_correcta: "c"
  },
  {
    id: 223,
    enunciado: "La Línea Estratégica I del Pacto Vasco de Salud, centrada en el enfoque \"One Health\" (Una Sola Salud), propone:",
    opciones: {
      a: "Centralizar todos los hospitales en una única gerencia provincial.",
      b: "Crear un seguro de salud único para todas las mascotas de la CAPV.",
      c: "Centrarse exclusivamente en la salud humana, delegando la ambiental a otros departamentos.",
      d: "Integrar la salud humana, animal y ambiental en la planificación y vigilancia sanitaria."
    },
    respuesta_correcta: "d"
  },
  {
    id: 224,
    enunciado: "¿Cuál es el papel de la Atención Primaria y Comunitaria dentro de las Líneas Estratégicas del Pacto Vasco de Salud?",
    opciones: {
      a: "Actuar como un servicio de triaje rápido para derivar todos los casos al hospital.",
      b: "Ser un servicio opcional para quienes no dispongan de seguro privado.",
      c: "Limitarse a la atención administrativa y la gestión de bajas laborales.",
      d: "Ser la base estratégica que cohesione y sustente todo el sistema de salud vasco."
    },
    respuesta_correcta: "d"
  },
  {
    id: 225,
    enunciado: "En relación con la Línea Estratégica 06 sobre \"Cronicidad\" del Pacto Vasco de Salud, ¿qué objetivo se persigue primordialmente?",
    opciones: {
      a: "Institucionalizar a todas las personas con enfermedades crónicas en centros especializados.",
      b: "Reforzar la autonomía y corresponsabilidad de las personas con enfermedades crónicas.",
      c: "Sustituir las consultas médicas presenciales por seguimiento telefónico automático.",
      d: "Reducir la cobertura de medicamentos para patologías de larga duración."
    },
    respuesta_correcta: "b"
  },
  {
    id: 226,
    enunciado: "La Línea Estratégica 07 sobre \"Atención Sociosanitaria\" del Pacto Vasco de Salud subraya la necesidad de:",
    opciones: {
      a: "Separar definitivamente las competencias de Salud de las de Servicios Sociales.",
      b: "Mejorar la coordinación y el tránsito de las personas entre el sistema sanitario y el social.",
      c: "Eliminar las ayudas a la dependencia para fomentar el ahorro público.",
      d: "Obligar a las personas pacientes a elegir entre atención médica o apoyo social."
    },
    respuesta_correcta: "b"
  },
  {
    id: 227,
    enunciado: "Respecto a la \"Salud Mental\" (Línea 11), el Pacto Vasco de Salud pone el foco en:",
    opciones: {
      a: "La promoción del bienestar emocional y la detección precoz, especialmente en jóvenes.",
      b: "El aislamiento preventivo de las personas con trastornos mentales graves.",
      c: "La medicalización sistemática de cualquier malestar emocional de la ciudadanía.",
      d: "La reducción de la plantilla de psicología en los centros de salud primaria."
    },
    respuesta_correcta: "a"
  },
  {
    id: 228,
    enunciado: "La Línea Estratégica 18 sobre \"Digitalización en Salud\" del Pacto Vasco de Salud busca la transformación digital para:",
    opciones: {
      a: "Reemplazar al personal sanitario por sistemas de inteligencia artificial autónomos.",
      b: "Eliminar el papel de todos los archivos históricos sin digitalizar previamente.",
      c: "Facilitar la accesibilidad, la personalización de la atención y la eficiencia organizativa.",
      d: "Crear una base de datos pública con el historial clínico de toda la ciudadanía."
    },
    respuesta_correcta: "c"
  },
  {
    id: 229,
    enunciado: "En la \"Política de Personas\" (Línea 21) del Pacto Vasco de Salud, se establece como prioridad:",
    opciones: {
      a: "Facilitar la jubilación forzosa a los 60 años para reducir costes laborales.",
      b: "Fortalecer la atracción, fidelización, desarrollo y liderazgo de las y los profesionales.",
      c: "Sustituir al personal fijo por contratos temporales para ganar flexibilidad.",
      d: "Prohibir la participación de los sindicatos en la toma de decisiones estratégicas."
    },
    respuesta_correcta: "b"
  },
  {
    id: 230,
    enunciado: "La Línea Estratégica 24 sobre \"Derechos Lingüísticos\" del Pacto Vasco de Salud tiene como fin:",
    opciones: {
      a: "Garantizar que las personas pacientes puedan ser atendidas en la lengua oficial de su elección.",
      b: "Obligar a toda la ciudadanía a realizar sus consultas médicas exclusivamente en euskera.",
      c: "Eliminar el uso de lenguas extranjeras en la formación médica especializada.",
      d: "Centralizar los servicios de traducción en una única sede en Vitoria-Gasteiz."
    },
    respuesta_correcta: "a"
  },
  {
    id: 231,
    enunciado: "¿Cuál es el periodo de vigencia indicado en el título de la “Estrategia de Seguridad del Paciente” de Osakidetza, y en qué mes y año se publicó su primera edición?",
    opciones: {
      a: "Vigencia 2021-2030, editada en enero de 2023.",
      b: "Vigencia 2020-2024, editada en diciembre de 2022.",
      c: "Vigencia 2020-2030, editada en abril de 2023.",
      d: "Vigencia 2023-2030, editada en julio de 2023."
    },
    respuesta_correcta: "c"
  },
  {
    id: 232,
    enunciado: "¿Cuál es el Objetivo General establecido para la “Estrategia de Seguridad del Paciente 20-30”?",
    opciones: {
      a: "Reducir a cero los eventos adversos mediante la incorporación de tecnología robótica.",
      b: "Mejorar la calidad asistencial del sistema sanitario vasco.",
      c: "Promover el máximo nivel de seguridad posible, minimizando la probabilidad de ocurrencia de incidentes de seguridad en el transcurso de la asistencia sanitaria.",
      d: "Centralizar la gestión de riesgos en un único organismo fuera de Osakidetza."
    },
    respuesta_correcta: "c"
  },
  {
    id: 233,
    enunciado: "El principio hipocrático al que se hace referencia en la “Estrategia de Seguridad del Paciente 20-30”, y que la ciudadanía asume que se verifica en el transcurso de la actividad asistencial, es:",
    opciones: {
      a: "Salus populi suprema lex esto (la salud del pueblo es la ley suprema).",
      b: "Corpus sanum in mente sana (mente sana en cuerpo sano).",
      c: "Lex artis ad hoc (ley del arte para el caso).",
      d: "Primum non nocere (primero no hacer daño)."
    },
    respuesta_correcta: "d"
  },
  {
    id: 234,
    enunciado: "¿A qué periodos correspondieron las dos estrategias previas de seguridad de paciente publicadas en Euskadi, de las cuales esta Estrategia 20-30 es la tercera?",
    opciones: {
      a: "2008-2012 y 2013-2017.",
      b: "2010-2015 y 2016-2020.",
      c: "2013-2016 y 2017-2020.",
      d: "2018-2021 y 2022-2025."
    },
    respuesta_correcta: "c"
  },
  {
    id: 235,
    enunciado: "¿Cuáles son las dos nuevas Líneas de Acción incorporadas en la “Estrategia de Seguridad del Paciente 20-30” que responden a una necesidad percibida por las personas expertas?",
    opciones: {
      a: "Seguridad en Pediatría y Buenas Prácticas en el Uso de Biológicos.",
      b: "Atención en Cuidados Paliativos y Seguridad Domiciliaria.",
      c: "La Seguridad de Paciente en Emergencias y la Prevención del Suicidio.",
      d: "Seguridad en Salud Mental y Prevención de las Úlceras por Presión."
    },
    respuesta_correcta: "c"
  },
  {
    id: 236,
    enunciado: "De acuerdo con la “Estrategia de Seguridad de Paciente 20-30”, ¿cómo se denomina al incidente de seguridad que, a diferencia del incidente sin daño, sí ocasiona algún tipo de daño a las personas atendidas?",
    opciones: {
      a: "Error no evitable.",
      b: "Circunstancia notificable.",
      c: "Fallo latente.",
      d: "Evento Adverso."
    },
    respuesta_correcta: "d"
  },
  {
    id: 237,
    enunciado: "¿Cuál es el enfoque principal de la Línea de Acción Corporativa L2 de la “Estrategia de Seguridad del Paciente 20-30”?",
    opciones: {
      a: "Implicación de pacientes en su seguridad.",
      b: "Conciliación de la medicación.",
      c: "Atención a las segundas y terceras víctimas.",
      d: "Gestión de los incidentes de seguridad."
    },
    respuesta_correcta: "c"
  },
  {
    id: 238,
    enunciado: "¿Cuál de los siguientes es el Objetivo Específico número 1 de la “Estrategia de Seguridad del Paciente 20-30”, enfocado en el cambio interno?",
    opciones: {
      a: "Garantizar la continuidad de las líneas de acción y proyectos previamente implantados.",
      b: "Impulsar la cultura de seguridad de paciente en las organizaciones de servicios de Osakidetza, promoviendo la formación y sensibilización como aspectos clave.",
      c: "Optimizar la prescripción de pruebas diagnósticas que utilizan radiación ionizante.",
      d: "Implantar un sistema de identificación inequívoca de pacientes en todas las fases del proceso asistencial."
    },
    respuesta_correcta: "b"
  },
  {
    id: 239,
    enunciado: "Según la “Estrategia de Seguridad del Paciente 20-30”, el Objetivo General de la Línea de Acción L4 \"Implicación de pacientes en su seguridad\" es:",
    opciones: {
      a: "Garantizar que todas las personas pacientes reciban un plan de acogida con información de seguridad.",
      b: "Potenciar las capacidades de las personas pacientes para actuar como personal de apoyo en las unidades de enfermería.",
      c: "Promover la participación de pacientes, familiares y personas cuidadoras para mejorar la seguridad del sistema sanitario.",
      d: "Establecer un sistema de recompensas económicas para pacientes que notifiquen incidentes."
    },
    respuesta_correcta: "c"
  },
  {
    id: 240,
    enunciado: "La Línea de Acción Corporativa L8 de la “Estrategia de Seguridad del Paciente 20-30” está dedicada a:",
    opciones: {
      a: "Conciliación de la medicación.",
      b: "Prevención y control de las infecciones relacionadas con la asistencia sanitaria.",
      c: "Seguridad en el proceso asistencial gestación-parto-puerperio.",
      d: "Seguridad transfusional."
    },
    respuesta_correcta: "b"
  },
  {
    id: 241,
    enunciado: "¿A qué se refiere la Línea de Acción Corporativa L10 de la “Estrategia de Seguridad del Paciente 20-30”, cuyo objetivo es reducir los eventos adversos específicos de un proceso asistencial?",
    opciones: {
      a: "Cirugía Segura.",
      b: "Atención Primaria.",
      c: "Seguridad en el proceso asistencial gestación-parto-puerperio.",
      d: "Seguridad de las personas pacientes en los servicios de urgencias."
    },
    respuesta_correcta: "c"
  },
  {
    id: 242,
    enunciado: "¿Qué documento se menciona en la “Estrategia de Seguridad del Paciente 20-30” como el que determinó que las personas atendidas por un sistema medicalizado (tipo 061/112) presentan un mayor porcentaje de incidentes de seguridad en el entorno de Emergencias?",
    opciones: {
      a: "Estudio Nacional de Efectos Adversos en centros hospitalarios (ENEAS).",
      b: "Estudio APEAS.",
      c: "Estudio EVADUR.",
      d: "Informe del Instituto de Medicina de los Estados Unidos (IOM)."
    },
    respuesta_correcta: "c"
  },
  {
    id: 243,
    enunciado: "El capítulo de Formación de la “Estrategia de Seguridad del Paciente 20-30” señala que, además de impulsar el desarrollo de prácticas seguras, las organizaciones comprometidas orientan sus esfuerzos a aumentar la formación en los llamados:",
    opciones: {
      a: "Factores humanos o factores no técnicos.",
      b: "Factores biomédicos y patofisiológicos.",
      c: "Factores económicos y de sostenibilidad.",
      d: "Factores organizativos de Osakidetza."
    },
    respuesta_correcta: "a"
  },
  {
    id: 244,
    enunciado: "¿Cuál de las siguientes Líneas de Acción de la “Estrategia de Seguridad del Paciente 20-30” NO está relacionada con el sistema de utilización del medicamento?",
    opciones: {
      a: "L5. Conciliación de la medicación.",
      b: "L14. Buenas prácticas asociadas a la utilización de medicación.",
      c: "L6. Optimización en la prescripción de pruebas diagnósticas que utilizan radiación ionizante.",
      d: "L7. Seguridad transfusional (Nota: la seguridad transfusional se considera una línea separada, aunque implica la administración de productos sanguíneos)."
    },
    respuesta_correcta: "c"
  },
  {
    id: 245,
    enunciado: "¿Cuántas Líneas de Acción Corporativas (L1 a L...) se definen en la Estrategia de Seguridad del Paciente 20-30?",
    opciones: {
      a: "14 líneas de acción.",
      b: "15 líneas de acción.",
      c: "16 líneas de acción.",
      d: "17 líneas de acción."
    },
    respuesta_correcta: "d"
  },
  {
    id: 246,
    enunciado: "Según el diagnóstico del II Plan para la Igualdad de Mujeres y Hombres en Osakidetza, ¿qué porcentaje de mujeres y hombres, respectivamente, componía la plantilla total de Osakidetza en enero de 2025?",
    opciones: {
      a: "60% mujeres y 40% hombres",
      b: "75% mujeres y 25% hombres",
      c: "80% mujeres y 20% hombres",
      d: "90% mujeres y 10% hombres"
    },
    respuesta_correcta: "c"
  },
  {
    id: 247,
    enunciado: "Una de las metas del II Plan para la Igualdad de Mujeres y Hombres en Osakidetza es la “CAPACITACIÓN EN IGUALDAD”. ¿Cuál es su objetivo principal?",
    opciones: {
      a: "Reducir la brecha de género en investigación en un 4%.",
      b: "Conseguir que todas las personas trabajadoras de Osakidetza conozcan el Plan y el Protocolo de Acoso.",
      c: "Reducir a la mitad las categorías con brecha retributiva superior al 5%.",
      d: "Garantizar la formación básica, progresiva, permanente y obligatoria de todo el personal de Osakidetza."
    },
    respuesta_correcta: "d"
  },
  {
    id: 248,
    enunciado: "¿Qué institución aprueba el II Plan para la Igualdad de Mujeres y Hombres en Osakidetza (2025-2028)?",
    opciones: {
      a: "Mesa Sectorial de Sanidad.",
      b: "Emakunde.",
      c: "Consejo de Administración de Osakidetza.",
      d: "Dirección General de Osakidetza."
    },
    respuesta_correcta: "c"
  },
  {
    id: 249,
    enunciado: "De acuerdo con el II Plan para la Igualdad de Mujeres y Hombres en Osakidetza (2025-2028), ¿qué concepto define, dentro del diagnóstico de la organización, la dificultad invisible que encuentran las mujeres para acceder a puestos de mayor responsabilidad y toma de decisiones?",
    opciones: {
      a: "Segregación horizontal.",
      b: "Suelo pegajoso.",
      c: "Brecha salarial técnica",
      d: "Techo de cristal."
    },
    respuesta_correcta: "d"
  },
  {
    id: 250,
    enunciado: "Una de las Metas del II Plan para la Igualdad de Mujeres y Hombres en Osakidetza (2025-2028) es “CORRESPONSABILIDAD”. ¿Cuál es el objetivo específico asociado a esta meta?",
    opciones: {
      a: "Reducir el porcentaje de hombres en puestos de dirección.",
      b: "Reducir a la mitad la brecha de género en investigación.",
      c: "Reducir, al menos, en un 2% la brecha de género existente en las medidas de conciliación para cuidados.",
      d: "Aumentar el número de investigaciones con perspectiva de género interseccional en un 4%."
    },
    respuesta_correcta: "c"
  },
  {
    id: 251,
    enunciado: "¿Cuál fue el objetivo del I Plan de Igualdad, teniendo en cuenta su condición de primer plan estratégico de Osakidetza en esta materia?",
    opciones: {
      a: "Consolidar los avances logrados y profundizar el proceso transformador.",
      b: "Establecer unos cimientos sólidos para garantizar el cumplimiento de la legislación y la alineación a los marcos estratégicos.",
      c: "Reducir la brecha salarial a la mitad en todas las categorías profesionales.",
      d: "Lograr la aprobación por parte del Consejo de Dirección de Osakidetza en julio de 2025."
    },
    respuesta_correcta: "b"
  },
  {
    id: 252,
    enunciado: "¿Cuál es la Meta 5 establecida en el II Plan para la Igualdad de Mujeres y Hombres en Osakidetza (2025-2028)?",
    opciones: {
      a: "Reducir la brecha de género existente en las medidas de conciliación para cuidados.",
      b: "Capacitación en Igualdad, garantizando la formación progresiva del personal.",
      c: "Igualdad Salarial, con el objetivo de reducir a la mitad las categorías que tienen una brecha retributiva > 5%.",
      d: "Investigación, aumentando el número de investigaciones con perspectiva de género."
    },
    respuesta_correcta: "c"
  },
  {
    id: 253,
    enunciado: "¿Cuál es el carácter y el propósito fundamental del II Plan para la Igualdad de Mujeres y Hombres en Osakidetza (2025-2028)?",
    opciones: {
      a: "Es un documento informativo sobre la normativa europea en materia de igualdad sin aplicación directa en la asistencia sanitaria.",
      b: "Se define como una guía de recomendaciones de adhesión voluntaria para las diferentes Organizaciones de Servicios.",
      c: "Se trata de un reglamento técnico dirigido exclusivamente al personal con funciones de gestión y dirección.",
      d: "Es un instrumento estratégico de planificación que busca integrar de forma transversal la perspectiva de género en la cultura y gestión de la organización."
    },
    respuesta_correcta: "d"
  },
  {
    id: 254,
    enunciado: "El enfoque de \"interseccionalidad\" mencionado en los fundamentos del II Plan para la Igualdad de Mujeres y Hombres en Osakidetza (2025-2028) implica:",
    opciones: {
      a: "Analizar cómo el género interactúa con otros factores (edad, origen, discapacidad, orientación sexual, etc.) para identificar formas específicas de discriminación.",
      b: "Tratar todas las desigualdades de forma aislada para evitar confusiones estadísticas.",
      c: "Fomentar el intercambio de personal entre diferentes centros hospitalarios para equilibrar la plantilla.",
      d: "Priorizar la atención sanitaria en las intersecciones de las grandes áreas metropolitanas."
    },
    respuesta_correcta: "a"
  },
  {
    id: 255,
    enunciado: "En relación con la violencia machista contra las mujeres, el II Plan para la Igualdad de Mujeres y Hombres en Osakidetza (2025-2028) establece como línea de actuación prioritaria:",
    opciones: {
      a: "El refuerzo de la prevención, la detección precoz y la mejora de la respuesta asistencial integrada desde el sistema de salud.",
      b: "La derivación inmediata de cualquier caso detectado a servicios jurídicos externos, sin intervención del personal sanitario.",
      c: "La creación de un registro anónimo donde las personas profesionales puedan denunciar conductas sin seguimiento posterior.",
      d: "La limitación de la atención asistencial únicamente a las consecuencias físicas derivadas de la violencia."
    },
    respuesta_correcta: "a"
  },
  {
    id: 256,
    enunciado: "Tal y como dispone el III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028:",
    opciones: {
      a: "La rotulación fija, tanto interna como externa, en general ha de estar en las dos lenguas oficiales dando prioridad al euskera.",
      b: "Solo la rotulación fija externa en general ha de estar en las dos lenguas oficiales dando prioridad al euskera.",
      c: "Solo la rotulación fija interna en general ha de estar en las dos lenguas oficiales dando prioridad al euskera.",
      d: "La rotulación fija, tanto interna como externa, debe aparecer únicamente en euskera."
    },
    respuesta_correcta: "a"
  },
  {
    id: 257,
    enunciado: "El III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028 establece respecto a los mensajes audiovisuales que:",
    opciones: {
      a: "Deben emitirse en la lengua que decidan las personas responsable de las unidades que utilizan estos sistemas audiovisuales.",
      b: "Deben emitirse en las dos lenguas oficiales, primero en castellano y luego en euskera.",
      c: "Deben emitirse en las dos lenguas oficiales, primero en euskera y luego en castellano.",
      d: "Deben emitirse en una de las dos lenguas oficiales."
    },
    respuesta_correcta: "c"
  },
  {
    id: 258,
    enunciado: "Conforme al III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028, respecto a las páginas Web de Osakidetza señale cuál de las siguientes repuestas no es correcta:",
    opciones: {
      a: "En las intranet, extranet y otros sitios web de Osakidetza las personas usuarias deben tener garantizada la navegación y el acceso a toda la información en las dos lenguas oficiales.",
      b: "El personal administrador de los sitios web nunca publicará textos o contenidos que no estén en las dos lenguas oficiales.",
      c: "Al acceder por primera vez a una página web de Osakidetza, la página de inicio se mostrará por defecto en euskera.",
      d: "Las personas usuarias de los sitios web de Osakidetza deberán tener fácil acceso a los apartados sobre normalización del euskera en la entidad."
    },
    respuesta_correcta: "b"
  },
  {
    id: 259,
    enunciado: "De acuerdo con el III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028, señale la respuesta correcta:",
    opciones: {
      a: "Por aplicación de la Ley Orgánica de Protección de Datos Personales y garantía de los derechos digitales no puede constar en los datos personales de cada paciente de Osakidetza su idioma de preferencia para las comunicaciones con Osakidetza.",
      b: "El signo azul con la letra e indica que la persona paciente no tiene competencia para comunicarse en un idioma que no sea el euskera para las comunicaciones orales con Osakidetza.",
      c: "En los datos personales de cada paciente, se registrará su idioma de preferencia para las comunicaciones orales con Osakidetza .",
      d: "A las personas que elijan el euskera como lengua prioritaria en sus comunicaciones con Osakidetza solo se les deberá ofrecer servicios en euskera."
    },
    respuesta_correcta: "c"
  },
  {
    id: 260,
    enunciado: "En atención al III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028, señale la respuesta correcta:",
    opciones: {
      a: "“Aukeratu zeure hizkuntza/Elige tu lengua” es el lema de la campaña de activación del registro de la lengua preferente de cada paciente llevada a cabo en 2017.",
      b: "Se atribuye a todas las direcciones y gerencias de Osakidetza la responsabilidad de realizar la campaña con el lema “Aukeratu zeure hizkuntza/Elige tu lengua”.",
      c: "“Aukeratu zeure hizkuntza/Elige tu lengua” es el lema de la campaña de activación del registro de la lengua preferente de cada paciente que realizará Osakidetza durante el primer año de planificación.",
      d: "“Aukeratu zeure hizkuntza/Elige tu lengua” es el lema de la campaña de activación del registro de la lengua preferente de cada paciente que realizará Osakidetza durante el tercer año de planificación."
    },
    respuesta_correcta: "a"
  },
  {
    id: 261,
    enunciado: "El III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028 contempla que tanto en los servicios de recepción y admisión, como en las unidades asistenciales y administrativas a toda la ciudadanía vascohablante debe garantizarse:",
    opciones: {
      a: "La recepción en euskera.",
      b: "La recepción en euskera solo cuando la comunicación oral con pacientes y personas usuarias sea de modo presencial.",
      c: "La recepción en euskera solo cuando la comunicación con pacientes y personas usuarias sea telefónicamente.",
      d: "La recepción en euskera solo por las y los empleados que sepan en euskera."
    },
    respuesta_correcta: "a"
  },
  {
    id: 262,
    enunciado: "El III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028 establece que, en los escritos individualizados de respuesta a solicitudes y reclamaciones de pacientes o personas usuarias de Osakidetza se utilizará:",
    opciones: {
      a: "La lengua utilizada por cada ciudadano o ciudadana.",
      b: "Siempre el euskera como lengua preferente.",
      c: "Siempre las dos lenguas oficiales independientemente de la lengua utilizada por cada ciudadano o ciudadana.",
      d: "Ambas lenguas oficiales, siendo los escritos contestados primero en euskera y luego en castellano."
    },
    respuesta_correcta: "a"
  },
  {
    id: 263,
    enunciado: "Siguiendo lo previsto en el III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028, señale la respuesta que no es correcta:",
    opciones: {
      a: "Se pondrá a disposición del personal bilingüe que lo desee diferentes elementos identificativos portadores del circulo azul con la letra e, signo que invita a relacionarse en euskera.",
      b: "El signo azul y la letra e solo se utilizará para la identificación individual del personal bilingüe.",
      c: "En los centros de salud, consultorios y unidades hospitalarias, deberá estar colocado, de modo visible, el cartel que explica a las personas usuarias el significado del signo identificativo con la letra e.",
      d: "Se estudiará introducir una variante del círculo azul con la letra e para el personal dispuesto a que le hablen en euskera pero que muestra dificultades para expresarse en ciertas situaciones."
    },
    respuesta_correcta: "b"
  },
  {
    id: 264,
    enunciado: "En atención a lo previsto en el III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028, en todos los centros de atención primaria ha de ponerse en marcha un procedimiento para que, en la medida de las posibilidades, se propongan servicios en euskera a las personas pacientes que hayan registrado esta lengua como preferente y que aún reciban los citados servicios en castellano. Señale a qué servicios se refiere el citado Plan:",
    opciones: {
      a: "Medicina familiar, pediatría, enfermería y salud mental.",
      b: "Pediatría, medicina familiar y salud mental.",
      c: "Medicina familiar, pediatría, enfermería y matrona.",
      d: "Todas las anteriores respuestas son correctas."
    },
    respuesta_correcta: "c"
  },
  {
    id: 265,
    enunciado: "Conforme al III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028, con relación a las quejas relacionadas con el uso de las lenguas oficiales en Osakidetza, señale la respuesta que no es correcta:",
    opciones: {
      a: "La dirección responsable de las acciones previstas con relación a las quejas relaciones con el uso de las lenguas oficiales en Osakidetza es la Dirección de Recursos Humanos.",
      b: "En los Servicios de Atención a Pacientes y personas Usuarias (SAPU) quedarán registradas las quejas relacionadas con el uso de las lenguas oficiales.",
      c: "Las quejas relacionadas con el uso de las lenguas oficiales serán gestionadas por el SAPU y por la persona o personas responsables del servicio objeto de la queja.",
      d: "Para mejorar la gestión y seguimiento de las quejas, Osakidetza acordará un protocolo con las entidades que trabajan en el ámbito de los derechos lingüísticos."
    },
    respuesta_correcta: "a"
  },
  {
    id: 266,
    enunciado: "Conforme al III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028, en las relaciones con empresas proveedoras, entidades financieras y organismos privados:",
    opciones: {
      a: "Se designarán interlocutores o interlocutoras vasco-hablantes y se notificará el deseo de Osakidetza de relacionarse en euskera.",
      b: "En la comunicación escrita siempre debe utilizarse las dos lenguas oficiales.",
      c: "Osakidetza solicitará a las entidades proveedoras que sus productos que tengan como personas destinatarias a profesionales de Osakidetza estén en euskera .",
      d: "Ninguna de las anteriores respuestas es correcta."
    },
    respuesta_correcta: "a"
  },
  {
    id: 267,
    enunciado: "Conforme al III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028, la Dirección General de Osakidetza realizará una comunicación interna de cara a conocer el registro de la lengua preferente de cada profesional, explicar el modo de registrar la lengua preferente y animar al personal vascohablante a optar por el euskera:",
    opciones: {
      a: "Una vez cada seis meses.",
      b: "Una vez al año.",
      c: "Cada vez que haya una nueva contratación.",
      d: "El III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2018 no contempla esta acción."
    },
    respuesta_correcta: "b"
  },
  {
    id: 268,
    enunciado: "Conforme al III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028:",
    opciones: {
      a: "En los casos de los mensajes SMS que se envían a los teléfonos móviles de personas trabajadoras o candidatas, estarán escritos en las dos lenguas oficiales, primero en castellano y luego en euskera.",
      b: "Los escritos individualizados de respuesta a solicitudes y reclamaciones de las personas trabajadoras deberán redactarse en las dos lenguas oficiales.",
      c: "Osakidetza ha de garantizar que la información y los servicios ofrecidos tanto al personal empleado como a personas candidatas a través de las tecnologías de la comunicación estén en las dos lenguas oficiales, con el fin de que cada persona haga uso de la lengua de su preferencia.",
      d: "Las informaciones y comunicaciones no personalizadas dirigidas al personal deberán redactarse en las dos lenguas oficiales y se dará prioridad al castellano."
    },
    respuesta_correcta: "c"
  },
  {
    id: 269,
    enunciado: "Como contempla el III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028:",
    opciones: {
      a: "En puestos de Jefatura y responsabilidad, en los servicios de prioridad 2, se asignará fecha de preceptividad siempre que el porcentaje de fechas mínimas del servicio sea el 40% o superior.",
      b: "En puestos de Jefatura y responsabilidad, en los servicios de prioridad 2, se asignará fecha de preceptividad siempre que el porcentaje de fechas mínimas del servicio sea el 50% o superior.",
      c: "En los servicios de prioridad 2 se asignará fecha de preceptividad a los puestos vacantes por jubilación, incapacidad absoluta o fallecimiento de la persona titular cuando el porcentaje mínimo de fechas de preceptividad que corresponde al servicio sea el 50% o superior.",
      d: "Osakidetza realizará al menos una convocatoria anual de acreditación de perfiles lingüísticos de acuerdo a lo establecido en el Decreto 67/2003."
    },
    respuesta_correcta: "b"
  },
  {
    id: 270,
    enunciado: "De acuerdo con el III Plan de Normalización del Uso del Euskera en Osakidetza 2022-2028, Osakidetza realizará dos evaluaciones generales del plan de euskera:",
    opciones: {
      a: "La primera el tercer año del período de planificación y la segunda el sexto año.",
      b: "La primera el segunda año del período de planificación y la segunda el sexto año.",
      c: "La primera el tercer año del período de planificación y la segunda el sexto año, y será una evaluación cualitativa.",
      d: "La primera el segunda año del período de planificación y la segunda el sexto año, y será una evaluación cuantitativa fundamentada en los indicadores del plan."
    },
    respuesta_correcta: "a"
  },
  {
    id: 271,
    enunciado: "¿Cuál es la vigencia temporal del Plan Oncológico Integral de Euskadi (POIE) al que se refiere el documento?",
    opciones: {
      a: "2024-2028",
      b: "2025-2030",
      c: "2023-2027",
      d: "2020-2025"
    },
    respuesta_correcta: "b"
  },
  {
    id: 272,
    enunciado: "Según el Resumen Ejecutivo del Plan Oncológico Integral de Euskadi (POIE) 2025-2030, ¿de qué porcentaje de los fallecimientos en Euskadi fue responsable el cáncer en el año 2023?",
    opciones: {
      a: "22,3%",
      b: "Menos del 15%",
      c: "33,8%",
      d: "28%"
    },
    respuesta_correcta: "d"
  },
  {
    id: 273,
    enunciado: "Según el Resumen Ejecutivo del Plan Oncológico Integral de Euskadi (POIE) 2025-2030, ¿cuáles fueron las dos localizaciones de cáncer más frecuentes en Euskadi en el periodo 2015-2019, consideradas separadamente por sexo?",
    opciones: {
      a: "Cáncer colorrectal y cáncer de pulmón.",
      b: "Cáncer de mama en mujeres y cáncer de próstata en hombres.",
      c: "Cáncer de páncreas y cáncer de pulmón.",
      d: "Leucemia y Linfoma de Hodgkin."
    },
    respuesta_correcta: "b"
  },
  {
    id: 274,
    enunciado: "¿Cuál de las siguientes es una de las aspiraciones definidas en la VISIÓN del Plan Oncológico Integral de Euskadi (POIE) 2025-2030?",
    opciones: {
      a: "Mejorar la calidad de vida de las personas: de pacientes, supervivientes y de sus familiares y personas cuidadoras.",
      b: "Aumentar la cuota de mercado de Osakidetza en el sector oncológico privado.",
      c: "Garantizar la presencia equilibrada de ambos sexos en los órganos de gestión sanitaria.",
      d: "Establecer la telemedicina como la única forma de seguimiento oncológico."
    },
    respuesta_correcta: "a"
  },
  {
    id: 275,
    enunciado: "La Misión del Plan Oncológico Integral de Euskadi (POIE) 2025-2030 busca generar valor a la ciudadanía vasca en términos de:",
    opciones: {
      a: "Mayor financiación externa para I+D.",
      b: "Menores listas de espera y más personal asistencial.",
      c: "Mejores resultados en salud.",
      d: "Una mayor supervivencia a los 10 años en todos los tumores."
    },
    respuesta_correcta: "c"
  },
  {
    id: 276,
    enunciado: "En el Plan Oncológico Integral de Euskadi (POIE) 2025-2030, la “Centralidad de la persona y humanización” como Principio Rector incluye la incorporación de la perspectiva de género y la atención a:",
    opciones: {
      a: "La telemonitorización avanzada.",
      b: "La diversidad.",
      c: "El personal profesional no implicado directamente.",
      d: "Las redes sociales."
    },
    respuesta_correcta: "b"
  },
  {
    id: 277,
    enunciado: "Teniendo en cuenta la introducción y el contexto del Plan Oncológico Integral de Euskadi 2025-2030. ¿Cuál fue una de las principales áreas de mejora identificadas en la evaluación del Plan Oncológico de Euskadi (POE) 2018-2023?",
    opciones: {
      a: "La excesiva visibilidad del plan entre profesionales sin implicación.",
      b: "La necesidad de aumentar el número de Comités de Tumores.",
      c: "La necesidad de reforzar la atención a colectivos específicos (infancia, mayores, personas largas supervivientes).",
      d: "La ausencia total de un modelo asistencial común."
    },
    respuesta_correcta: "c"
  },
  {
    id: 278,
    enunciado: "¿Cuántas Áreas Prioritarias de actuación componen el nuevo Plan Oncológico Integral de Euskadi (POIE) 2025-2030, después de la actualización de la estructura?",
    opciones: {
      a: "Cinco (5) Áreas Prioritarias.",
      b: "Seis (6) Áreas Prioritarias.",
      c: "Siete (7) Áreas Prioritarias.",
      d: "Ocho (8) Áreas Prioritarias."
    },
    respuesta_correcta: "c"
  },
  {
    id: 279,
    enunciado: "Según el listado de acrónimos del Plan Oncológico Integral de Euskadi (POIE) 2025-2030, ¿a qué hacen referencia las siglas PROMs?",
    opciones: {
      a: "Plan de Resultados Oncológicos y Metodología de Seguimiento.",
      b: "Plan de Riesgos Ocupacionales en Medicina Sanitaria.",
      c: "Programa de Rehabilitación Oncológica y Mejora de la Supervivencia.",
      d: "Medidas de Resultados Reportadas por los y las Pacientes."
    },
    respuesta_correcta: "d"
  },
  {
    id: 280,
    enunciado: "El Plan Oncológico Integral de Euskadi (POIE) 2025-2030 se alinea con el Plan de Salud de Euskadi 2030. ¿Cuál de las siguientes es una de las prioridades estratégicas de dicho Plan de Salud mencionadas en el documento?",
    opciones: {
      a: "Creación de una red de servicios privados de salud.",
      b: "Aumentar la esperanza de vida a 90 años.",
      c: "Reducir la morbimortalidad evitable y disminuir las desigualdades en salud",
      d: "Eliminación total del cáncer infantil antes de 2030."
    },
    respuesta_correcta: "c"
  },
  {
    id: 281,
    enunciado: "¿Cuál es el objeto fundamental de la Ley Orgánica 3/2021, de 24 de marzo, de regulación de la eutanasia, según su Artículo 1?",
    opciones: {
      a: "Regular los cuidados paliativos avanzados en el Sistema Nacional de Salud.",
      b: "Modificar el Código Penal para despenalizar la asistencia al suicidio.",
      c: "Regular el derecho de toda persona a solicitar y recibir la prestación de ayuda para morir y la obligación de las Administraciones de garantizarla.",
      d: "Establecer el registro de las voluntades anticipadas y testamentos vitales."
    },
    respuesta_correcta: "c"
  },
  {
    id: 282,
    enunciado: "Conforme al Artículo 5 de la Ley Orgánica 3/2021, de 24 de marzo, de regulación de la eutanasia, ¿qué requisito de nacionalidad se exige para poder recibir la prestación de ayuda para morir?",
    opciones: {
      a: "Tener la ciudadanía española con residencia legal ininterrumpida de al menos 10 años.",
      b: "Tener la nacionalidad española o tener residencia legal en España de al menos 5 años.",
      c: "Ser mayor de edad y tener la nacionalidad española, residencia legal o certificado de empadronamiento que acredite un tiempo de permanencia superior a 12 meses en territorio español.",
      d: "Tener la nacionalidad española y residencia en el mismo municipio durante los últimos 2 años."
    },
    respuesta_correcta: "c"
  },
  {
    id: 283,
    enunciado: "Según la Ley Orgánica 3/2021, de 24 de marzo, de regulación de la eutanasia, ¿qué concepto define la ley como la \"administración directa a la persona paciente de una sustancia por parte del personal sanitario competente\"?",
    opciones: {
      a: "Suicidio médicamente asistido.",
      b: "Sedación paliativa profunda.",
      c: "Eutanasia.",
      d: "Asistencia para morir."
    },
    respuesta_correcta: "d"
  },
  {
    id: 284,
    enunciado: "Según el Artículo 5 de la Ley Orgánica 3/2021, de 24 de marzo, de regulación de la eutanasia, ¿cuál es la condición que debe padecer la persona paciente para solicitar la prestación de ayuda para morir?",
    opciones: {
      a: "Padecer una enfermedad incurable en fase terminal o un deterioro funcional grave.",
      b: "Sufrir una enfermedad que limite gravemente su autonomía.",
      c: "Padecer una enfermedad grave e incurable o un padecimiento grave, crónico e imposibilitante, causantes de un sufrimiento intolerable.",
      d: "Sufrir un dolor físico o psíquico que no puede ser tratado con paliativos."
    },
    respuesta_correcta: "c"
  },
  {
    id: 285,
    enunciado: "Según la Ley Orgánica 3/2021, de 24 de marzo, de regulación de la eutanasia, ¿cuál debe ser la periodicidad mínima con la que el personal facultativo responsable debe consultar a la persona paciente, una vez presentada la solicitud, para confirmar si mantiene su deseo?",
    opciones: {
      a: "Al menos cada 7 días.",
      b: "Al menos cada 15 días, debiendo dejarse constancia en la historia clínica.",
      c: "Al menos cada 30 días, si el procedimiento se extiende.",
      d: "Una única vez antes de la prestación."
    },
    respuesta_correcta: "b"
  },
  {
    id: 286,
    enunciado: "Según la Ley Orgánica 3/2021, de 24 de marzo, de regulación de la eutanasia, ¿qué órgano tiene la función de verificar en cada caso el cumplimiento de los requisitos establecidos en dicha Ley, con carácter previo a la realización de la prestación de ayuda para morir?",
    opciones: {
      a: "El Comité de Ética Asistencial del centro sanitario.",
      b: "El Consejo Interterritorial del Sistema Nacional de Salud.",
      c: "La Comisión de Garantía y Evaluación.",
      d: "La Inspección Sanitaria de la comunidad autónoma."
    },
    respuesta_correcta: "c"
  },
  {
    id: 287,
    enunciado: "Según la Ley Orgánica 3/2021, de 24 de marzo, de regulación de la eutanasia, si la persona paciente se encuentra en situación de incapacidad de hecho en el momento de solicitar la prestación, ¿quién puede presentar la solicitud en su nombre?",
    opciones: {
      a: "Únicamente sus familiares directos o cónyuge.",
      b: "Una persona facultativa o del trabajo social del equipo asistencial, siempre que la persona paciente hubiera suscrito con anterioridad un documento de instrucciones previas, testamento vital o documento equivalente.",
      c: "La persona legalmente habilitada por la autoridad judicial.",
      d: "No se puede solicitar la prestación si la persona paciente está en situación de incapacidad de hecho."
    },
    respuesta_correcta: "b"
  },
  {
    id: 288,
    enunciado: "Según la Ley Orgánica 3/2021, de 24 de marzo, de regulación de la eutanasia, ¿cuál es el derecho que asiste al personal sanitario directamente implicado en la prestación de ayuda para morir?",
    opciones: {
      a: "Derecho a la reubicación en un puesto de trabajo diferente.",
      b: "Derecho a un incremento salarial por la complejidad de la prestación.",
      c: "Derecho a la objeción de conciencia.",
      d: "Derecho a recibir asistencia jurídica de oficio."
    },
    respuesta_correcta: "c"
  },
  {
    id: 289,
    enunciado: "Según la Ley Orgánica 3/2021, de 24 de marzo, de regulación de la eutanasia, ¿qué define como \"padecimiento grave, crónico e imposibilitante\"?",
    opciones: {
      a: "Aquel que implica la existencia de sufrimiento físico o psíquico constante.",
      b: "Aquel que genera una limitación que incide directamente sobre la autonomía física y capacidad de expresar su voluntad de la persona paciente.",
      c: "La dependencia de otra persona para la realización de al menos dos actividades básicas de la vida diaria.",
      d: "Una dolencia que ha sido declarada irreversible y con un pronóstico de vida inferior a seis meses."
    },
    respuesta_correcta: "a"
  },
  {
    id: 290,
    enunciado: "Según la Ley Orgánica 3/2021, de 24 de marzo, de regulación de la eutanasia, ¿cuál es el plazo que tiene la persona facultativa responsable para comunicar la resolución favorable a la Comisión de Garantía y Evaluación para su posterior verificación?",
    opciones: {
      a: "Dentro de las 24 horas siguientes a la resolución.",
      b: "Dentro del día siguiente natural a la resolución.",
      c: "7 días desde la resolución favorable.",
      d: "No existe un plazo establecido para esta comunicación."
    },
    respuesta_correcta: "d"
  },
  {
    id: 291,
    enunciado: "¿Cuál es el principio general que establece la Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas?",
    opciones: {
      a: "La libre acumulación de empleos públicos.",
      b: "La incompatibilidad para desempeñar más de un puesto en el sector público, salvo excepciones.",
      c: "La compatibilidad automática entre empleo público y privado.",
      d: "La compatibilidad solo en el ámbito sanitario."
    },
    respuesta_correcta: "b"
  },
  {
    id: 292,
    enunciado: "Según la Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas, ¿qué se considera “sector público”?",
    opciones: {
      a: "Solo la Administración General del Estado.",
      b: "Solo las Comunidades Autónomas.",
      c: "Las Administraciones Públicas y entidades vinculadas o dependientes de ellas.",
      d: "Únicamente los organismos autónomos."
    },
    respuesta_correcta: "c"
  },
  {
    id: 293,
    enunciado: "Con carácter general, el personal comprendido en la Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas, podrá desempeñar:",
    opciones: {
      a: "Dos puestos públicos si uno es a tiempo parcial.",
      b: "Un segundo puesto público únicamente con autorización previa y en los supuestos previstos por la Ley.",
      c: "Cualquier actividad privada sin limitación.",
      d: "Dos puestos públicos si pertenecen a distinta Administración."
    },
    respuesta_correcta: "b"
  },
  {
    id: 294,
    enunciado: "Según la Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas, ¿qué requisito es imprescindible para autorizar la compatibilidad con una actividad privada?",
    opciones: {
      a: "Que la actividad sea sanitaria.",
      b: "Que no se supere la jornada ordinaria establecida.",
      c: "Que no se comprometa la imparcialidad o independencia del personal público.",
      d: "Que lo autorice la jefatura inmediata sin más trámites."
    },
    respuesta_correcta: "c"
  },
  {
    id: 295,
    enunciado: "Según la Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas, ¿puede percibirse más de una remuneración con cargo a los presupuestos públicos?",
    opciones: {
      a: "Sí, siempre que no superen el salario mínimo.",
      b: "No, salvo en los casos expresamente previstos en la Ley.",
      c: "Sí, sin limitación alguna.",
      d: "Solo si se trata de diferentes Administraciones autonómicas."
    },
    respuesta_correcta: "b"
  },
  {
    id: 296,
    enunciado: "¿La Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas, es aplicable al personal estatutario de los servicios de salud?",
    opciones: {
      a: "No, porque se rige por normativa específica exclusivamente.",
      b: "Sí, como personal al servicio de las Administraciones Públicas.",
      c: "Solo si tienen plaza en propiedad.",
      d: "Solo al personal directivo."
    },
    respuesta_correcta: "b"
  },
  {
    id: 297,
    enunciado: "Según la Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas, ¿qué ocurre si se desempeña una actividad incompatible sin autorización?",
    opciones: {
      a: "No ocurre nada si es fuera del horario laboral.",
      b: "Se considera falta leve.",
      c: "Puede dar lugar a responsabilidad disciplinaria.",
      d: "Solo se devuelve la remuneración percibida."
    },
    respuesta_correcta: "c"
  },
  {
    id: 298,
    enunciado: "Según la Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas, ¿qué actividades están exceptuadas del régimen general de incompatibilidades?",
    opciones: {
      a: "Las actividades docentes o de investigación en determinados supuestos.",
      b: "Cualquier actividad privada.",
      c: "Solo actividades artísticas.",
      d: "Actividades comerciales propias sin límite."
    },
    respuesta_correcta: "a"
  },
  {
    id: 299,
    enunciado: "Según la Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas, para que se autorice la compatibilidad para un segundo puesto público es necesario que:",
    opciones: {
      a: "Sea en el mismo centro de trabajo.",
      b: "Sea la jornada completa.",
      c: "Sea en los supuestos tasados y no se modifique la jornada y horario del puesto principal.",
      d: "Lo aprobara el personal de la junta de personal."
    },
    respuesta_correcta: "c"
  },
  {
    id: 300,
    enunciado: "La finalidad principal de la Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas, es:",
    opciones: {
      a: "Incrementar los ingresos del personal público.",
      b: "Garantizar la dedicación y la imparcialidad en el servicio público.",
      c: "Permitir la pluriactividad generalizada.",
      d: "Reducir el número de personal público."
    },
    respuesta_correcta: "b"
  },
  {
    id: 301,
    enunciado: "De los siguientes ordenadores personales, ¿cuál fue el que logró un éxito realmente notable en el mercado?",
    opciones: {
      a: "El PC Wozniak.",
      b: "IBM PC.",
      c: "Motorola PC 68K.",
      d: "Zilog Z c80."
    },
    respuesta_correcta: "b"
  },
  {
    id: 302,
    enunciado: "¿Qué material se emplea para fabricar un microprocesador?",
    opciones: {
      a: "Aluminio.",
      b: "Galenio.",
      c: "Silicio.",
      d: "Todas las anteriores son correctas."
    },
    respuesta_correcta: "c"
  },
  {
    id: 303,
    enunciado: "¿Qué son FPM y BEDO?",
    opciones: {
      a: "Tipos de memoria RAM.",
      b: "Tipos de zócalo para microprocesador.",
      c: "Ranuras de memoria.",
      d: "Tipos de disco duro."
    },
    respuesta_correcta: "a"
  },
  {
    id: 304,
    enunciado: "Seleccione la afirmación correcta acerca de los sistemas de firmware BIOS y UEFI utilizados en las placas base modernas:",
    opciones: {
      a: "Tipos de firmware que están incorporados en un chip de la placa base.",
      b: "Se encargan de arrancar el PC y de dar soporte para manejar ciertos dispositivos de entrada/salida.",
      c: "Ofrecen una interfaz gráfica para configurar parámetros básicos.",
      d: "Todas las anteriores son correctas."
    },
    respuesta_correcta: "d"
  },
  {
    id: 305,
    enunciado: "¿Qué dispositivo del ordenador realiza el procesamiento necesario para representar gráficos en pantalla?",
    opciones: {
      a: "La CPU.",
      b: "La GPU.",
      c: "La TFPU.",
      d: "NINGUNA de las anteriores es correcta."
    },
    respuesta_correcta: "b"
  },
  {
    id: 306,
    enunciado: "¿Qué se entiende por \"resolución\" de una pantalla?",
    opciones: {
      a: "La relación entre el tamaño horizontal y el tamaño vertical de la pantalla.",
      b: "El número de pulgadas que hay en la diagonal de la pantalla.",
      c: "El número de puntos individuales (pixel) que puede representar el monitor en forma de puntos horizontales por puntos verticales.",
      d: "NINGUNA de las anteriores es correcta."
    },
    respuesta_correcta: "c"
  },
  {
    id: 307,
    enunciado: "¿Qué son SATA, SAS y PCIe?",
    opciones: {
      a: "Conectores de discos duros.",
      b: "Interfaces de almacenamiento internas.",
      c: "Ranuras de extensión para los discos duros.",
      d: "Buses de datos."
    },
    respuesta_correcta: "b"
  },
  {
    id: 308,
    enunciado: "¿Qué tecnología realiza una grabación magnética asistida por calor?",
    opciones: {
      a: "HAMR.",
      b: "SMR.",
      c: "PMR.",
      d: "HGST."
    },
    respuesta_correcta: "a"
  },
  {
    id: 309,
    enunciado: "¿Cuál de los siguientes se considera un formato de tarjeta de memoria?",
    opciones: {
      a: "SDHC.",
      b: "QFast.",
      c: "XQD.",
      d: "La a) y c) son correctas."
    },
    respuesta_correcta: "d"
  },
  {
    id: 310,
    enunciado: "¿Cuáles de estos componentes incluyen los netbooks?",
    opciones: {
      a: "Sistemas operativos Chrome OS o Windows 10.",
      b: "Microprocesadores sencillos, tipo atom, Celeron o algún ARM, pero mejorados y de hasta 4 núcleos.",
      c: "Pantallas de como mínimo 11.6 pulgadas, LED y resolución \"HD Ready\" al menos.",
      d: "Todas las anteriores son correctas."
    },
    respuesta_correcta: "d"
  },
  {
    id: 311,
    enunciado: "¿De qué se encarga la ALU?",
    opciones: {
      a: "Se encarga de ejecutar numerosos cálculos, como los realizados sobre números enteros o las operaciones lógicas.",
      b: "Se encarga de realizar operaciones con números flotantes, así como de otras operaciones como la división de enteros.",
      c: "Es el camino para los datos, que comunican las diversas partes del microprocesador.",
      d: "De ella depende el tamaño máximo de memoria que puede manejar el microprocesador."
    },
    respuesta_correcta: "a"
  },
  {
    id: 312,
    enunciado: "¿Qué es la velocidad de acceso a memoria (ns)?",
    opciones: {
      a: "Es el número que expresa la velocidad de reloj del bus máximo que puede soportar de forma fiable.",
      b: "Es el tiempo mínimo para realizar un ciclo mínimo de acceso a la memoria.",
      c: "Es el tiempo de latencia, retraso o retardo en el acceso a memoria.",
      d: "Es la máxima cantidad de memoria que podría trasladarse por segundo."
    },
    respuesta_correcta: "b"
  },
  {
    id: 313,
    enunciado: "¿Cuáles son los tipos de ranuras de memoria más comunes hoy en día?",
    opciones: {
      a: "FM2+ y LGA.",
      b: "DIMM y SO-DIMM.",
      c: "DDR2 y DDR3.",
      d: "DIMM y DD2."
    },
    respuesta_correcta: "b"
  },
  {
    id: 314,
    enunciado: "¿Qué es la frecuencia de refresco en pantalla?",
    opciones: {
      a: "La memoria dedicada exclusivamente al uso de la GPU.",
      b: "El número de colores que pueden representarse.",
      c: "El número de veces que puede dibujarse la pantalla por segundo.",
      d: "NINGUNA de las anteriores es correcta."
    },
    respuesta_correcta: "c"
  },
  {
    id: 315,
    enunciado: "¿Cuál de estas afirmaciones NO es una ventaja de las pantallas OLED/AMOLED?",
    opciones: {
      a: "Excelentes ángulos de visión.",
      b: "Bajo consumo.",
      c: "Fabricación costosa.",
      d: "Elevado refresco y tiempo de respuesta."
    },
    respuesta_correcta: "c"
  },
  {
    id: 316,
    enunciado: "¿Con cuál de estas formas podría implementarse un sistema tipo RAID?",
    opciones: {
      a: "RAID software.",
      b: "RAID hardware.",
      c: "RAID firmware.",
      d: "Todas las anteriores son correctas."
    },
    respuesta_correcta: "d"
  },
  {
    id: 317,
    enunciado: "¿Cuál de estas afirmaciones sobre los discos duros SSD es correcta?",
    opciones: {
      a: "El nivel de ruido de un disco SSD es muy elevado.",
      b: "Un disco SSD tiene alta resistencia a impactos y vibraciones.",
      c: "No es resistente a las condiciones climatológicas adversas.",
      d: "Si no existe fragmentación los discos duros de alta velocidad de rotaciones son más rápidos que los discos duros SSD."
    },
    respuesta_correcta: "b"
  },
  {
    id: 318,
    enunciado: "¿Cuál de estos medios utiliza la tecnología del almacenamiento óptico?",
    opciones: {
      a: "MicroSD.",
      b: "CD.",
      c: "eSATA.",
      d: "Disquete."
    },
    respuesta_correcta: "b"
  },
  {
    id: 319,
    enunciado: "¿En qué generación el tipo de sistema operativo era por procesamiento por lotes o batch?",
    opciones: {
      a: "2º Generación.",
      b: "3º Generación.",
      c: "4º Generación.",
      d: "5º Generación."
    },
    respuesta_correcta: "a"
  },
  {
    id: 320,
    enunciado: "¿Cuál de los siguientes sistemas operativos es multiusuario y multitarea?",
    opciones: {
      a: "CTSS.",
      b: "OS/360.",
      c: "UNIX.",
      d: "EXEC II."
    },
    respuesta_correcta: "c"
  },
  {
    id: 321,
    enunciado: "¿En qué tipos de sistemas operativos se utiliza la técnica que se conoce como tiempo compartido (time sharing)?",
    opciones: {
      a: "Sistemas operativos monousuario.",
      b: "Sistemas operativos en tiempo real.",
      c: "Sistemas operativos multiprogramación.",
      d: "Sistemas operativos interactivos."
    },
    respuesta_correcta: "d"
  },
  {
    id: 322,
    enunciado: "Si en un superordenador se instala un sistema operativo monotarea...",
    opciones: {
      a: "Ejecutará más de un proceso cada vez.",
      b: "Solo ejecutará un proceso cada vez.",
      c: "Dividirá en diferentes hebras (threads) el proceso.",
      d: "Seleccionará los demás procesos para distribuir el trabajo."
    },
    respuesta_correcta: "b"
  },
  {
    id: 323,
    enunciado: "¿En qué tipos de sistemas el equipo informático NO comparte recursos?",
    opciones: {
      a: "En los sistemas centralizados.",
      b: "En los sistemas en red.",
      c: "En los sistemas distribuidos.",
      d: "NINGUNA de las anteriores es correcta."
    },
    respuesta_correcta: "d"
  },
  {
    id: 324,
    enunciado: "¿En cuántos niveles se dividía el sistema operativo THE (Technische Hogeschool Eindhoven)?",
    opciones: {
      a: "En 4 niveles: del 0 al 3.",
      b: "En 4 niveles: del 1 al 4.",
      c: "En 5 niveles: del 0 al 4.",
      d: "En 6 niveles: del 0 al 5."
    },
    respuesta_correcta: "d"
  },
  {
    id: 325,
    enunciado: "¿Qué son los procesos de usuario/a?",
    opciones: {
      a: "Son los procesos que generalmente se ejecutan al iniciar el sistema.",
      b: "Son los procesos que manda ejecutar el/la usuario/a que entre en el sistema.",
      c: "Son los procesos que el sistema operativo ejecuta en segundo plano.",
      d: "Son los procesos que cada usuario necesita para un correcto funcionamiento del sistema operativo."
    },
    respuesta_correcta: "b"
  },
  {
    id: 326,
    enunciado: "¿Cómo se ejecutan los procesos en el algoritmo FIFO (first input first output)?",
    opciones: {
      a: "Los procesos se ejecutan en orden de llegada. El primero que llega empieza a ejecutar.",
      b: "Se ejecuta el proceso más corto de los que están esperando para ejecutar la CPU.",
      c: "El proceso se ejecuta en orden de prioridad de cada proceso.",
      d: "Este algoritmo va dando tiempo de ejecución a cada proceso que esté en espera."
    },
    respuesta_correcta: "a"
  },
  {
    id: 327,
    enunciado: "La técnica de gestión de memoria principal del sistema operativo por particionamiento ...",
    opciones: {
      a: "Consiste en particionar la memoria en particiones de tamaño fijo o particiones de tamaño variable.",
      b: "Solamente se pueden particionar a tamaño fijo.",
      c: "Sirve para ejecutar programas que no están cargados totalmente en memoria.",
      d: "Protege la zona de memoria asignada a cada proceso."
    },
    respuesta_correcta: "a"
  },
  {
    id: 328,
    enunciado: "¿Qué sistema de archivos son soportados por la mayoría de distribuciones de linux?",
    opciones: {
      a: "NTFS.",
      b: "FAT32.",
      c: "EXT2, EXT3, EXT4.",
      d: "HFS."
    },
    respuesta_correcta: "c"
  },
  {
    id: 229,
    enunciado: "¿Cuál es la diferencia fundamental entre el modelo OSI y TCP/IP?",
    opciones: {
      a: "OSI tiene 4 capas prácticas; TCP/IP tiene 7 teóricas.",
      b: "OSI es modelo teórico de referencia con 7 capas; TCP/IP es práctico de implementación con 4 capas.",
      c: "TCP/IP define solo 3 capas físicas; OSI define 7 lógicas.",
      d: "OSI se usa solo en LAN; TCP/IP en WAN."
    },
    respuesta_correcta: "b"
  },
  {
    id: 330,
    enunciado: "Analizando las ventajas del uso de redes, la compartición de recursos software y de datos implica un cambio significativo en la gestión administrativa frente a sistemas aislados. ¿Cuál de los siguientes efectos es una consecuencia directa y positiva de esta centralización en un entorno LAN?",
    opciones: {
      a: "La eliminación total de la necesidad de realizar copias de seguridad debido a la redundancia del medio.",
      b: "La capacidad de administrar centralizadamente los recursos compartidos. Lo que permite mantener la integridad de los datos mediante mecanismos de control de acceso y asegurar la coherencia de versiones de software mediante actualizaciones desplegadas desde el servidor.",
      c: "El aumento exponencial del tráfico de red independientemente del número de personas usuarias que accedan al recurso.",
      d: "La necesidad de replicar manualmente los archivos de datos en cada estación de trabajo para garantizar su disponibilidad, incrementando la probabilidad de inconsistencias y duplicidad de información."
    },
    respuesta_correcta: "b"
  },
  {
    id: 331,
    enunciado: "En una red con tecnología de transmisión por difusión (broadcast), ¿qué característica es definitoria?",
    opciones: {
      a: "Cada enlace conecta exclusivamente dos nodos punto a punto.",
      b: "Un único canal de comunicación es compartido por todos los dispositivos.",
      c: "Requiere obligatoriamente conmutación de circuitos.",
      d: "Solo permite transmisión en modo full-dúplex."
    },
    respuesta_correcta: "b"
  },
  {
    id: 332,
    enunciado: "¿Qué topología física de red ofrece mayor tolerancia a fallos en un enlace individual?",
    opciones: {
      a: "Topología en bus.",
      b: "Topología en estrella.",
      c: "Topología en anillo.",
      d: "Topología en malla."
    },
    respuesta_correcta: "d"
  },
  {
    id: 333,
    enunciado: "¿Qué estándar IEEE 802 define específicamente la tecnología Ethernet para redes cableadas?",
    opciones: {
      a: "IEEE 802.11",
      b: "IEEE 802.5",
      c: "IEEE 802.3",
      d: "IEEE 802.4"
    },
    respuesta_correcta: "c"
  },
  {
    id: 334,
    enunciado: "En transmisión de datos, ¿qué relación existe entre ancho de banda y velocidad de transmisión?",
    opciones: {
      a: "Son conceptos idénticos y completamente sinónimos.",
      b: "La velocidad de transmisión determina el ancho de banda disponible.",
      c: "No guardan relación directa en medios de transmisión digitales.",
      d: "El ancho de banda limita la velocidad máxima teórica de transmisión."
    },
    respuesta_correcta: "d"
  },
  {
    id: 335,
    enunciado: "¿Qué medio de transmisión ofrece mayor inmunidad a interferencias electromagnéticas y permite mayores distancias sin necesidad de repetidores?",
    opciones: {
      a: "Par trenzado UTP Categoría 6.",
      b: "Cable coaxial RG-6.",
      c: "Fibra óptica monomodo.",
      d: "Medio inalámbrico en banda de 5 GHz."
    },
    respuesta_correcta: "c"
  },
  {
    id: 336,
    enunciado: "¿Qué protocolo del nivel de internet en TCP/IP se encarga de la resolución de direcciones IP a direcciones MAC en una red local?",
    opciones: {
      a: "ICMP (Internet Control Message Protocol).",
      b: "UDP (User Datagram Protocol).",
      c: "ARP (Address Resolution Protocol).",
      d: "DNS (Domain Name System)."
    },
    respuesta_correcta: "c"
  },
  {
    id: 337,
    enunciado: "¿Cuál es la forma más comprimida posible de la siguiente dirección IPv6? 2001:db8:0:0:0:1:2:3",
    opciones: {
      a: "2001:db8::1:2:3",
      b: "2001:db8:0::0:1:2:3",
      c: "2001:db8:0:0::1:2:3",
      d: "2001:db8:::1:2:3"
    },
    respuesta_correcta: "a"
  },
  {
    id: 338,
    enunciado: "¿Qué dispositivo de interconexión opera principalmente en el nivel físico y repite la señal a todos sus puertos sin filtrar tramas?",
    opciones: {
      a: "Switch (conmutador).",
      b: "Router (encaminador).",
      c: "Hub (concentrador).",
      d: "Bridge (puente)."
    },
    respuesta_correcta: "c"
  },
  {
    id: 339,
    enunciado: "Se tiene la dirección IPv4 192.168.10.0/26. ¿Cuál de las siguientes afirmaciones es correcta respecto a esta subred?",
    opciones: {
      a: "El rango de hosts va de 192.168.10.0 a 192.168.10.63.",
      b: "La dirección de broadcast es 192.168.10.63.",
      c: "Se pueden crear 64 subredes a partir de esta máscara.",
      d: "Cada subred tiene 128 hosts utilizables."
    },
    respuesta_correcta: "b"
  },
  {
    id: 340,
    enunciado: "Se tiene la dirección IPv4 10.20.30.0/27. ¿Cuál de las siguientes afirmaciones es correcta?",
    opciones: {
      a: "Cada subred tiene 32 direcciones totales y 30 hosts utilizables.",
      b: "La dirección de broadcast de la primera subred es 10.20.30.32.",
      c: "La segunda subred comienza en 10.20.30.33.",
      d: "La máscara de subred es 255.255.255.128."
    },
    respuesta_correcta: "a"
  },
  {
    id: 341,
    enunciado: "En la configuración básica de un router para interconectar redes, ¿qué tabla es esencial para la toma de decisiones de encaminamiento?",
    opciones: {
      a: "Tabla ARP (Address Resolution Protocol).",
      b: "Tabla de conmutación MAC.",
      c: "Tabla de enrutamiento (routing table).",
      d: "Tabla de sesiones TCP activas."
    },
    respuesta_correcta: "c"
  },
  {
    id: 342,
    enunciado: "¿Cuál es la razón técnica principal por la que Zigbee resulta especialmente adecuado para despliegues IoT con gran número de dispositivos distribuidos?",
    opciones: {
      a: "Porque ofrece altas velocidades de transmisión comparables a Wi-Fi.",
      b: "Porque combina bajo consumo energético, topologías en malla y buena escalabilidad.",
      c: "Porque requiere infraestructuras cableadas dedicadas.",
      d: "Porque está diseñado exclusivamente para comunicaciones multimedia."
    },
    respuesta_correcta: "b"
  },
  {
    id: 343,
    enunciado: "¿Qué características comparten los tres tipos de conexiones (M2M, M2P y P2P) que existen entre los elementos IoT?",
    opciones: {
      a: "Solo pueden iniciarse desde una máquina.",
      b: "Solo pueden iniciarse desde una persona.",
      c: "Son unidireccionales.",
      d: "Son bidireccionales y cualquiera de los elementos puede iniciar la comunicación."
    },
    respuesta_correcta: "d"
  },
  {
    id: 344,
    enunciado: "¿Qué ocurre cuando evoluciona de forma drástica un elemento de una capa del modelo OSI?",
    opciones: {
      a: "Todas las demás capas deben modificarse para adaptarse.",
      b: "Las capas inferiores dejan de funcionar.",
      c: "Las demás capas no necesitan conocer el cambio ni modificar su comportamiento.",
      d: "Se altera la estructura completa del modelo."
    },
    respuesta_correcta: "c"
  },
  {
    id: 345,
    enunciado: "¿Qué combinación de características explica la creciente adopción de Bluetooth Low Energy (BLE) en aplicaciones IoT?",
    opciones: {
      a: "Conexión punto a punto y transmisión de vídeo y audio en tiempo real.",
      b: "Incorporación de topologías Broadcast y Mesh junto con mayor distancia de comunicación en la versión 5.",
      c: "Uso de cableado estructurado y dependencia de infraestructura física dedicada.",
      d: "Mayor velocidad de transferencia que WiFi y compatibilidad exclusiva con redes metropolitanas."
    },
    respuesta_correcta: "b"
  },
  {
    id: 346,
    enunciado: "Un sensor instalado en los neumáticos de un vehículo mide de forma constante la presión y transmite automáticamente ese valor al panel de control del automóvil para su supervisión. ¿Qué tipo de comunicación representa este caso?",
    opciones: {
      a: "Comunicación P2P (persona a persona).",
      b: "Communication M2P (máquina a persona).",
      c: "Comunicación M2M (máquina a máquina).",
      d: "Comunicación WAN (red de área amplia)."
    },
    respuesta_correcta: "b"
  },
  {
    id: 347,
    enunciado: "¿Qué situación NO es un ejemplo de comunicación P2P (persona a persona)?",
    opciones: {
      a: "Telemetría.",
      b: "Redes Sociales.",
      c: "Servicios de salud.",
      d: "Call centers."
    },
    respuesta_correcta: "a"
  },
  {
    id: 348,
    enunciado: "¿Cuál es la diferencia más importante entre las etiquetas RFID activas y pasivas?",
    opciones: {
      a: "Las activas requieren que lector y etiqueta se \"vean\", mientras que las pasivas NO.",
      b: "Las activas NO disponen de fuente de alimentación, mientras que las pasivas SÍ.",
      c: "La diferencia más importante es el uso de una fuente de energía.",
      d: "Las pasivas permiten mayores distancias de lectura que las activas."
    },
    respuesta_correcta: "c"
  },
  {
    id: 349,
    enunciado: "¿Qué estándar de Ethernet permite transmisión a 10 Gbps exclusivamente en full dúplex utilizando par trenzado (UTP) (Cat5e, 6 o 7) con una distancia máxima de 100 metros?",
    opciones: {
      a: "1000BaseSX.",
      b: "10GBaseT.",
      c: "10GBaseSR.",
      d: "100BaseTX."
    },
    respuesta_correcta: "b"
  },
  {
    id: 350,
    enunciado: "¿Cuáles son los cuatro elementos que permiten que el Internet de todo (Internet of Everything (IoE)) se convierta en una realidad?",
    opciones: {
      a: "Dispositivos, redes, protocolos y servicios.",
      b: "Objetos, datos, procesos y personas.",
      c: "Sensores, actuadores, nube y aplicaciones.",
      d: "Hardware, software, conectividad y seguridad."
    },
    respuesta_correcta: "b"
  },
  {
    id: 351,
    enunciado: "¿Qué combinación de características describe correctamente a LoRaWAN?",
    opciones: {
      a: "Utiliza frecuencias por debajo de 1 GHz, permite alcances de hasta 20 km y está orientada a bajo consumo energético.",
      b: "Opera por encima de 2,4 GHz, ofrece altas tasas de Mbps y está orientada a comunicaciones de corto alcance.",
      c: "Funciona exclusivamente en entornos urbanos, con alcances máximos de 2 km y alto consumo de energía.",
      d: "Requiere licencia propietaria y ofrece velocidades comparables a WiFi."
    },
    respuesta_correcta: "a"
  },
  {
    id: 352,
    enunciado: "¿Cuál de las siguientes opciones NO corresponde a una necesidad típicamente cubierta por las tecnologías NFC y RFID?",
    opciones: {
      a: "Sistemas de prepago con tarjeta en transporte público.",
      b: "Control de acceso mediante tarjetas de identificación.",
      c: "Logística y transporte.",
      d: "Redes de área amplia para comunicaciones de largo alcance."
    },
    respuesta_correcta: "d"
  },
  {
    id: 353,
    enunciado: "Si pensamos en el riego automático del césped de un jardín, ¿cuál es la secuencia correcta del flujo de funcionamiento de un sistema IoT?",
    opciones: {
      a: "El actuador analiza los datos el sensor decide la acción el sistema central ejecuta la orden.",
      b: "El actuador mide la humedad el sensor ejecuta la acción el sistema central almacena los datos.",
      c: "El sistema de predicción meteorológica habilita el actuador para que éste mida la humedad.",
      d: "El sensor mide la humedad los datos se envían a un sistema de control se activa el actuador si es necesario."
    },
    respuesta_correcta: "d"
  },
  {
    id: 354,
    enunciado: "¿Cuáles son las fases en el proceso de desarrollo de software?",
    opciones: {
      a: "Análisis, diseño, codificación, integración y mantenimiento.",
      b: "Análisis, diseño, codificación, pruebas y mantenimiento.",
      c: "Análisis, codificación, integración y mantenimiento.",
      d: "Diseño, codificación, integración, pruebas y mantenimiento."
    },
    respuesta_correcta: "b"
  },
  {
    id: 355,
    enunciado: "¿En qué consiste la fase de análisis en el ciclo de vida del software?",
    opciones: {
      a: "En esta fase se elabora un diseño donde se contemplan los elementos necesarios para que el sistema funcione.",
      b: "En esta fase se procede a analizar las necesidades que tienen los/las usuarios/as del futuro sistema y que deben quedar satisfechas mediante el funcionamiento del mismo.",
      c: "Esta fase no forma parte del ciclo de desarrollo aunque sí influye en el resto de fases.",
      d: "Esta fase permite la optimización de los recursos en la producción del mismo."
    },
    respuesta_correcta: "b"
  },
  {
    id: 356,
    enunciado: "¿En cuántos documentos se describen los trabajos realizados en cada una de las fases del ciclo de vida del software?",
    opciones: {
      a: "En 5 documentos: requisitos del software, diseño del software, código fuente, documento de pruebas y documento de cambios.",
      b: "En 3 documentos: requisitos del software, diseño del software, documento de cambios.",
      c: "En 5 documentos: requisitos del software, diseño del software, código fuente, sistema de software y documento de cambios.",
      d: "En 3 documentos: requisitos del software, documento de pruebas, documento de cambios."
    },
    respuesta_correcta: "a"
  },
  {
    id: 357,
    enunciado: "¿En qué consiste el ciclo de vida de software en V?",
    opciones: {
      a: "Se basa en la secuenciación de las distintas fases de la producción del software que se han descrito.",
      b: "Se basa en una secuencia de fases análoga a la del modo en cascada pero se da especial importancia a la visión jerarquizada que se va teniendo de las distintas partes del sistema a medida que se avanza en el desarrollo.",
      c: "Se basa en una forma de desarrollo lineal, en la que cada fase tiene una duración limitada en el tiempo.",
      d: "Se basa en un sistema auxiliar que permite probar experimentalmente ciertas soluciones parciales a las necesidades de la persona usuaria."
    },
    respuesta_correcta: "b"
  },
  {
    id: 358,
    enunciado: "La revisión de la fase de codificación en el ciclo de vida en cascada se realiza sobre...",
    opciones: {
      a: "El documento de análisis.",
      b: "El documento de diseño.",
      c: "El código fuente.",
      d: "El sistema de explotación."
    },
    respuesta_correcta: "c"
  },
  {
    id: 359,
    enunciado: "¿Qué elemento distintivo introduce el modelo en espiral respecto a otros modelos de ciclo de vida?",
    opciones: {
      a: "El análisis intermedio.",
      b: "El análisis de prueba.",
      c: "El análisis de riesgo.",
      d: "El análisis inicial."
    },
    respuesta_correcta: "c"
  },
  {
    id: 360,
    enunciado: "¿En qué cuatro valores se basa la Programación Extrema (XP) según Beck?",
    opciones: {
      a: "Sencillez, Comunicación, Retroalimentación y Valentía.",
      b: "Planificación, Comunicación, Análisis y Evaluación.",
      c: "Rapidez, Análisis, Comunicación y Retroalimentación.",
      d: "Análisis, Codificación, Comunicación y Retroalimentación."
    },
    respuesta_correcta: "a"
  },
  {
    id: 361,
    enunciado: "¿Cuál de estos aspectos debe contemplar el Plan de Garantía de Calidad de software?",
    opciones: {
      a: "Organización de equipos de personas y la dirección y seguimiento del desarrollo.",
      b: "Modelo de ciclo de vida a seguir, con detalle de sus fases and actividades.",
      c: "Revisiones y auditorías que se llevarán a cabo durante el desarrollo, para garantizar que las actividades y documentos son correctos y aceptables.",
      d: "Todas las anteriores son correctas."
    },
    respuesta_correcta: "d"
  },
  {
    id: 362,
    enunciado: "¿En qué consiste el control de cambios?",
    opciones: {
      a: "Consiste en almacenar de forma organizada las sucesivas versiones de cada elemento de la configuración.",
      b: "Consiste en garantizar que las diferentes configuraciones del software se componen de elementos compatibles entre sí, y que constituyen un conjunto coherente.",
      c: "Consiste en diseñar y almacenar de forma organizada los archivos de registro (.log) correspondientes a las distintas versiones de la configuración.",
      d: "NINGUNA de las anteriores es correcta."
    },
    respuesta_correcta: "b"
  },
  {
    id: 363,
    enunciado: "¿Cuál de las siguientes NO es una norma estándar del desarrollo del software?",
    opciones: {
      a: "DoD.",
      b: "ESA.",
      c: "ISO.",
      d: "IDEE."
    },
    respuesta_correcta: "d"
  },
  {
    id: 364,
    enunciado: "Según el estándar ISO 12207, de Procesos del Ciclo de vida del software [ISO, IEC,2017] se establece que:",
    opciones: {
      a: "El mantenimiento de software es la modificación de un producto software después de haber sido entregado.",
      b: "El propósito del proceso de mantenimiento es conservar la capacidad del sistema de proporcionar un servicio.",
      c: "La fase de mantenimiento se centra en el cambio que va asociado a la corrección de errores, a las adaptaciones requeridas a medida que evoluciona el entorno del software, y a cambios debidos a las mejoras producidas por los requisitos cambiantes del cliente.",
      d: "Hay 4 tipos de mantenimiento del software: correctivo, adaptativo, perfectivo y preventivo."
    },
    respuesta_correcta: "b"
  },
  {
    id: 365,
    enunciado: "¿En qué consiste el mantenimiento perfectivo?",
    opciones: {
      a: "El mantenimiento perfectivo incluye cambios en la especificación, normalmente debidos a cambios en los requisitos de un producto software.",
      b: "El mantenimiento perfectivo consiste en la modificación del software para mejorar sus propiedades.",
      c: "El mantenimiento perfectivo consiste en la modificación de un programa debido a cambios en el entorno.",
      d: "El mantenimiento perfectivo consiste en localizar y eliminar posibles defectos de los programas."
    },
    respuesta_correcta: "b"
  },
  {
    id: 366,
    enunciado: "¿De qué dos clases pueden ser los cambios en el entorno a los que se refiere el mantenimiento adaptativo?",
    opciones: {
      a: "Entorno de los datos y el entorno de la programación.",
      b: "Entorno de los procesos y el entorno del sistema operativo.",
      c: "Entorno del hardware y el entorno del software.",
      d: "Entorno de los datos y el entorno de los procesos."
    },
    respuesta_correcta: "c"
  },
  {
    id: 367,
    enunciado: "¿Cuál de estas afirmaciones sobre el coste del mantenimiento del software es correcta?",
    opciones: {
      a: "El mantenimiento es la fase más costosa del ciclo de vida del software.",
      b: "Detectar y corregir un error es más barato en las fases iniciales que en las finales.",
      c: "El mantenimiento puede costar más del doble que el desarrollo.",
      d: "Todas las anteriores son correctas."
    },
    respuesta_correcta: "d"
  },
  {
    id: 368,
    enunciado: "Según las Leyes de Lehman sobre el mantenimiento del software, la Ley de Continuidad del Cambio establece que:",
    opciones: {
      a: "Que tan pronto como un programa ha sido escrito, está ya desfasado.",
      b: "Que cuando hay cambios en un programa la estructura se hace más compleja.",
      c: "Que la evolución de un programa es un proceso autorregulado.",
      d: "Que a lo largo del tiempo de vida de un programa, la carga que supone el desarrollo del programa es constante."
    },
    respuesta_correcta: "a"
  },
  {
    id: 369,
    enunciado: "¿Cuáles de los siguientes son métodos empleados en el mantenimiento del software?",
    opciones: {
      a: "Ingeniería Inversa.",
      b: "Modernización.",
      c: "Reestructuración.",
      d: "Todas las anteriores son correctas."
    },
    respuesta_correcta: "d"
  },
  {
    id: 370,
    enunciado: "Según la norma ISO/IEC 12207 ¿Cuáles son las principales actividades que agrupan los procesos de ciclo de vida del software?",
    opciones: {
      a: "Procesos de software, procesos de hardware y procesos de colaboración.",
      b: "Procesos de colaboración, procesos organizacionales y procesos de gestión técnica.",
      c: "Procesos de acuerdo, procesos organizacionales de proyecto, procesos de gestión técnica, y procesos técnicos.",
      d: "NINGUNA de las anteriores es correcta."
    },
    respuesta_correcta: "c"
  },
  {
    id: 371,
    enunciado: "¿Cuál es el propósito del proceso de adquisición?",
    opciones: {
      a: "Obtener el producto o servicio de acuerdo a los requisitos de la persona compradora.",
      b: "Proveer un producto o servicio a la persona compradora, que cumpla con los requisitos acordados.",
      c: "Proveer la infraestructura y los servicios de los proyectos.",
      d: "a) y b) son correctas."
    },
    respuesta_correcta: "a"
  },
  {
    id: 372,
    enunciado: "¿Cuál de estas tareas pertenece a la fase de implementación del proceso de la estructura de mantenimiento que propone la norma ISO/IЕС 14764?",
    opciones: {
      a: "Desarrollar, documentar y ejecutar planes y procedimientos para dirigir las actividades y tareas del proceso de mantenimiento.",
      b: "Definir procedimiento para recibir, almacenar y controlar los informes de problemas y solicitudes de modificación de las personas usuarias, y proporcionar a éstas retroalimentación.",
      c: "Implementar o establecer una interfaz con el proceso de gestión de configuración, para gestionar las modificaciones del sistema existente.",
      d: "Todas las anteriores son correctas."
    },
    respuesta_correcta: "d"
  },
  {
    id: 373,
    enunciado: "¿Cuál de las siguientes tareas forma parte del proceso de planificación de proyectos?",
    opciones: {
      a: "Proporcionar un marco analítico y estructurado para identificar alternativas.",
      b: "Producir y coordinar planes realistas y efectivos.",
      c: "Monitorizar de manera continua los riesgos.",
      d: "Controlar los elementos y las configuraciones del sistema."
    },
    respuesta_correcta: "b"
  },
  {
    id: 374,
    enunciado: "¿Qué actividad se encarga de obtener los recursos necesarios para soportar el sistema de software durante todo su ciclo de vida?",
    opciones: {
      a: "Preparación del mantenimiento.",
      b: "Ejecución del mantenimiento.",
      c: "Soporte logístico.",
      d: "Gestión de resultados del mantenimiento."
    },
    respuesta_correcta: "c"
  },
  {
    id: 375,
    enunciado: "Al preparar una imagen de referencia de Windows 11 para su posterior despliegue masivo en una red corporativa, ¿cuál es la finalidad principal de ejecutar la herramienta Sysprep con el parámetro /generalize?",
    opciones: {
      a: "Eliminar toda la información específica del sistema, incluyendo el identificador de seguridad (SID) único y los controladores de hardware específicos del equipo de origen.",
      b: "Instalar automáticamente las últimas actualizaciones críticas acumulativas desde los servidores de WSUS.",
      c: "Comprimir el volumen del sistema en un archivo de formato .WIM o .ESD para ahorrar espacio en el servidor de despliegue.",
      d: "Configurar de forma permanente las políticas de grupo locales (GPO) antes de unir el equipo al dominio."
    },
    respuesta_correcta: "a"
  },
  {
    id: 376,
    enunciado: "Dentro de la estructura jerárquica de un servicio de directorio basado en Active Directory Domain Services (AD DS), ¿qué objeto actúa como el contenedor lógico de menor nivel sobre el cual un administrador puede vincular directamente Directivas de Grupo (GPO) y delegar facultades administrativas?",
    opciones: {
      a: "El Bosque (Forest).",
      b: "El Árbol (Tree).",
      c: "El Dominio (Domain).",
      d: "La Unidad Organizativa (OU)."
    },
    respuesta_correcta: "d"
  },
  {
    id: 377,
    enunciado: "En un entorno de red administrado por Active Directory, ¿cuál es el orden estándar de precedencia y procesamiento de las directivas de grupo (GPO) cuando un usuario inicia sesión en una estación de trabajo Windows 11?",
    opciones: {
      a: "1. Sitio, 2. Dominio, 3. Unidad Organizativa, 4. Local.",
      b: "1. Local, 2. Sitio, 3. Dominio, 4. Unidad Organizativa.",
      c: "1. Unidad Organizativa, 2. Dominio, 3. Sitio, 4. Local.",
      d: "1. Local, 2. Unidad Organizativa, 3. Dominio, 4. Sitio."
    },
    respuesta_correcta: "b"
  },
  {
    id: 378,
    enunciado: "En el Registro de Windows de un sistema corporativo Windows 11, ¿en qué clave principal (hive) se almacenan las configuraciones específicas del usuario que tiene la sesión activa en ese instante, cargándose a partir del archivo NTUSER.DAT?",
    opciones: {
      a: "HKEY_LOCAL_MACHINE (HKLM).",
      b: "HKEY_CLASSES_ROOT (HKCR).",
      c: "HKEY_CURRENT_USER (HKCU).",
      d: "HKEY_USERS (HKU)."
    },
    respuesta_correcta: "c"
  },
  {
    id: 379,
    enunciado: "Al realizar un despliegue de sistemas operativos a gran escala mediante Windows Deployment Services (WDS), ¿qué protocolo de red permite que las estaciones de trabajo cliente arranquen directamente desde la tarjeta de red (PXE) sin necesidad de disponer de un sistema operativo local previo?",
    opciones: {
      a: "DHCP combinado con TFTP.",
      b: "HTTP combinado con SSH.",
      c: "FTP combinado con SNMP.",
      d: "DNS combinado con SMB."
    },
    respuesta_correcta: "a"
  },
  {
    id: 380,
    enunciado: "¿Qué tipo de perfil de usuario de Windows se almacena en un servidor central, se descarga localmente al iniciar sesión y se caracteriza porque cualquier cambio realizado por el usuario se pierde por completo al cerrar sesión debido a que el archivo de configuración tiene la extensión .man?",
    opciones: {
      a: "Perfil Móvil (Roaming Profile).",
      b: "Perfil Obligatorio (Mandatory Profile).",
      c: "Perfil Local Estándar (Local Profile).",
      d: "Perfil Temporal (Temporary Profile)."
    },
    respuesta_correcta: "b"
  },
  {
    id: 381,
    enunciado: "Para gestionar de forma centralizada la aprobación y distribución de actualizaciones de seguridad en una infraestructura corporativa de Windows 11 sin depender de la conexión a Internet individual de cada puesto, ¿qué solución interna de Microsoft es la más recomendada?",
    opciones: {
      a: "Windows Update for Business (WUfB).",
      b: "Windows Server Update Services (WSUS).",
      c: "Microsoft Store for Business.",
      d: "Windows Assessment and Deployment Kit (ADK)."
    },
    respuesta_correcta: "b"
  },
  {
    id: 382,
    enunciado: "Al implementar el cifrado de unidades BitLocker en equipos corporativos portátiles con Windows 11, ¿qué componente de hardware de la placa base es fundamental para almacenar de forma segura las claves de cifrado y verificar la integridad del proceso de arranque?",
    opciones: {
      a: "El microprocesador principal (CPU).",
      b: "El chip TPM (Trusted Platform Module) versión 2.0.",
      c: "La controladora de almacenamiento NVMe.",
      d: "El firmware UEFI clásico sin arranque seguro."
    },
    respuesta_correcta: "b"
  },
  {
    id: 383,
    enunciado: "En la administración remota de sistemas mediante Windows PowerShell, ¿qué cmdlet se debe utilizar si deseamos obtener un listado detallado de todos los servicios del sistema instalados en el equipo local y conocer su estado actual (Running/Stopped)?",
    opciones: {
      a: "Get-Process.",
      b: "Get-Service.",
      c: "Show-Service.",
      d: "List-SystemServices."
    },
    respuesta_correcta: "b"
  },
  {
    id: 384,
    enunciado: "¿Cuál es el propósito primordial de la característica de Seguridad basada en la virtualización (VBS) incorporada de forma nativa e integrada en las directivas corporativas de Windows 11?",
    opciones: {
      a: "Permitir que los usuarios ejecuten juegos de alto rendimiento en entornos virtuales aislados.",
      b: "Crear una región de memoria aislada y segura del sistema operativo para proteger procesos críticos frente a malware y exploits de kernel.",
      c: "Sustituir por completo las soluciones tradicionales de antivirus por contenedores Docker.",
      d: "Automatizar la partición del disco duro en volúmenes lógicos dinámicos."
    },
    respuesta_correcta: "b"
  },
  {
    id: 385,
    enunciado: "Si un usuario accede a una carpeta compartida a través de la red y dicha carpeta tiene asignados permisos NTFS de 'Lectura' y permisos de Compartición (Share Permissions) de 'Control Total', ¿cuál será el permiso efectivo real del usuario sobre los archivos?",
    opciones: {
      a: "Control Total.",
      b: "Modificación.",
      c: "Lectura (se aplica el permiso más restrictivo entre ambos).",
      d: "Ninguno, se genera un conflicto de acceso y se bloquea la carpeta."
    },
    respuesta_correcta: "c"
  },
  {
    id: 386,
    enunciado: "En la gestión de seguridad de Windows 11, ¿qué función cumple el Control de cuentas de usuario (UAC)?",
    opciones: {
      a: "Registrar las contraseñas de todos los usuarios del dominio en un archivo local seguro.",
      b: "Impedir que aplicaciones no autorizadas realicen cambios en el sistema con privilegios administrativos sin la confirmación o el consentimiento explícito de un administrador.",
      c: "Controlar el número de horas que un usuario puede mantener abierta su sesión de red de forma continuada.",
      d: "Cifrar de forma automática los archivos temporales de navegación web del usuario."
    },
    respuesta_correcta: "b"
  },
  {
    id: 387,
    enunciado: "Un administrador de sistemas detecta que una estación de trabajo con Windows 11 experimenta picos de uso de CPU aleatorios. ¿Qué herramienta nativa avanzada permite programar conjuntos de recopiladores de datos (Data Collector Sets) para monitorizar contadores de rendimiento específicos durante horas y guardarlos en un archivo de registro para su análisis posterior?",
    opciones: {
      a: "El Administrador de tareas (Task Manager).",
      b: "El Monitor de rendimiento (Perfmon).",
      c: "El Visor de eventos (Event Viewer).",
      d: "El Programador de tareas (Task Scheduler)."
    },
    respuesta_correcta: "b"
  },
  {
    id: 388,
    enunciado: "Microsoft introdujo el formato de empaquetado MSIX en Windows. ¿Cuál es una de las principales ventajas de MSIX frente a los instaladores tradicionales basados en archivos .MSI o .EXE?",
    opciones: {
      a: "Permite la modificación directa del código binario del kernel de Windows durante la instalación.",
      b: "Desinstala las aplicaciones de forma limpia sin dejar archivos residuales ni entradas huérfanas en el registro del sistema gracias a que se ejecuta en un contenedor ligero aislado.",
      c: "Elimina la necesidad de disponer de firmas digitales válidas para desplegar software corporativo.",
      d: "Está diseñado exclusivamente para aplicaciones que no requieren interfaz gráfica."
    },
    respuesta_correcta: "b"
  },
  {
    id: 389,
    enunciado: "Qué característica integrada en Windows 11 Enterprise permite ejecutar aplicaciones sospechosas o no deseadas en un entorno de escritorio aislado, temporal y de un solo uso que se destruye por completo al cerrar la aplicación?",
    opciones: {
      a: "Hyper-V Manager.",
      b: "El Espacio aislado de Windows (Windows Sandbox).",
      c: "Windows Virtual Desktop.",
      d: "Modo de compatibilidad de aplicaciones."
    },
    respuesta_correcta: "b"
  },
  {
    id: 390,
    enunciado: "En un servidor de archivos Linux, se desea configurar un directorio compartido de manera que todos los usuarios del sistema puedan crear e introducir archivos en él, pero garantizando que solo el propietario de un archivo específico pueda borrarlo o modificarlo. ¿Qué permiso especial se debe aplicar al directorio?",
    opciones: {
      a: "SUID (Set Owner User ID).",
      b: "Sticky Bit (permiso +t, o valor octal 1000).",
      c: "SGID (Set Group ID).",
      d: "Permiso de ejecución global (chmod 777)."
    },
    respuesta_correcta: "b"
  },
  {
    id: 391,
    enunciado: "En los sistemas operativos Linux modernos basados en el gestor de sistema y servicios systemd, ¿cuál es el comando correcto para habilitar un servicio (por ejemplo, sshd) de modo que se inicie de forma automática durante el arranque del sistema?",
    opciones: {
      a: "systemctl enable sshd",
      b: "systemctl start sshd",
      c: "service sshd automatic",
      d: "chkconfig sshd on"
    },
    respuesta_correcta: "a"
  },
  {
    id: 392,
    enunciado: "El comando 'ip' ha sustituido por completo a las herramientas clásicas de red en Linux. Si un administrador desea asignar de forma inmediata la dirección IP 192.168.1.50 con máscara de subred 255.255.255.0 a la interfaz física 'eth0', ¿cuál es la sintaxis correcta?",
    opciones: {
      a: "ip config eth0 192.168.1.50 netmask 255.255.255.0",
      b: "ip interface add 192.168.1.50/24 dev eth0",
      c: "ip addr add 192.168.1.50/24 dev eth0",
      d: "ip address set eth0 192.168.1.50 mask 24"
    },
    respuesta_correcta: "c"
  },
  {
    id: 393,
    enunciado: "¿Cuál es el subsistema moderno del kernel de Linux que sustituye al clásico framework 'iptables' para el filtrado de paquetes, NAT y clasificación de tráfico, ofreciendo un rendimiento superior y una sintaxis unificada?",
    opciones: {
      a: "UFW (Uncomplicated Firewall).",
      b: "nftables.",
      c: "Firewalld.",
      d: "AppArmor."
    },
    respuesta_correcta: "b"
  },
  {
    id: 394,
    enunciado: "Para robustecer la seguridad perimetral y el acceso remoto SSH a un servidor crítico Linux, ¿qué directiva específica del archivo '/etc/ssh/sshd_config' debe configurarse para impedir de forma absoluta que se inicien sesiones directas con la cuenta de superusuario?",
    opciones: {
      a: "PermitRootLogin no",
      b: "AllowRootAccess false",
      c: "DenyUser root",
      d: "RootLogin Disabled"
    },
    respuesta_correcta: "a"
  },
  {
    id: 395,
    enunciado: "En la gestión de almacenamiento avanzado mediante LVM (Logical Volume Manager) en entornos Linux, ¿cuál es el orden jerárquico correcto de creación de componentes para configurar un espacio de almacenamiento flexible?",
    opciones: {
      a: "1. Volume Groups (VG), 2. Physical Volumes (PV), 3. Logical Volumes (LV).",
      b: "1. Logical Volumes (LV), 2. Volume Groups (VG), 3. Physical Volumes (PV).",
      c: "1. Physical Volumes (PV), 2. Logical Volumes (LV), 3. Volume Groups (VG).",
      d: "1. Physical Volumes (PV), 2. Volume Groups (VG), 3. Logical Volumes (LV)."
    },
    respuesta_correcta: "d"
  },
  {
    id: 396,
    enunciado: "Al auditar un servidor Linux en busca de un posible incidente de seguridad, ¿qué comando de la utilidad 'journalctl' permite visualizar en tiempo real (modo seguimiento) las trazas de registro filtrando exclusivamente por un servicio del sistema, como por ejemplo 'apache2'?",
    opciones: {
      a: "journalctl --show apache2 -live",
      b: "journalctl -u apache2 -f",
      c: "journalctl --log-service=apache2 --tail",
      d: "cat /var/log/syslog | grep apache2"
    },
    respuesta_correcta: "b"
  },
  {
    id: 397,
    enunciado: "Dentro del diseño de una infraestructura de red corporativa segura, ¿cuál es la finalidad primordial de implementar una Zona Desmilitarizada (DMZ)?",
    opciones: {
      a: "Permitir que los empleados internos naveguen por internet sin pasar por el cortafuegos.",
      b: "Cifrar todo el tráfico de la red de área local (LAN) de forma transparente.",
      c: "Alojar los servidores de la organización que prestan servicios hacia el exterior (como servidores web o de correo), aislándolos mediante cortafuegos tanto de internet como de la red interna privada.",
      d: "Duplicar la velocidad de transmisión de datos en los servidores de bases de datos."
    },
    respuesta_correcta: "c"
  },
  {
    id: 398,
    enunciado: "¿Qué archivo de texto del sistema operativo Linux se encarga de especificar las direcciones IP de los servidores DNS a los que la máquina debe dirigir las consultas locales para resolver nombres de dominio?",
    opciones: {
      a: "/etc/resolv.conf",
      b: "/etc/hosts",
      c: "/etc/dns.conf",
      d: "/etc/networks"
    },
    respuesta_correcta: "a"
  },
  {
    id: 399,
    enunciado: "En las distribuciones empresariales de Linux modernas pertenecientes a la familia Red Hat (como RHEL o Rocky Linux), ¿cuál es el gestor de paquetes por defecto que sustituyó al clásico 'yum', encargándose de resolver dependencias de forma eficiente?",
    opciones: {
      a: "apt-get.",
      b: "pacman.",
      c: "dnf.",
      d: "zypper."
    },
    respuesta_correcta: "c"
  },
  {
    id: 400,
    enunciado: "En la administración de servicios web corporativos, ¿en qué consiste la técnica de configurar un servidor web (como Nginx o Apache) para que actúe como Proxy Inverso (Reverse Proxy)?",
    opciones: {
      a: "En interceptar las peticiones de los clientes internos hacia internet para acelerar la navegación mediante caché.",
      b: "En recibir todas las peticiones entrantes desde internet dirigidas a los puertos estándar (80/443) y redirigirlas internamente hacia uno o varios servidores de aplicaciones o backends que escuchan en puertos locales o direcciones distintas.",
      c: "En realizar un escaneo automatizado de vulnerabilidades en el código de las aplicaciones web antes de cargarlas.",
      d: "En denegar las conexiones que provengan de rangos de direcciones IP extranjeras de forma dinámica."
    },
    respuesta_correcta: "b"
  },
  {
    id: 401,
    enunciado: "La tecnología de contenedores en Linux (como Docker) se apoya directamente en primitivas integradas en el kernel. ¿Qué característica del kernel de Linux se encarga específicamente de limitar, medir y aislar el uso de los recursos de hardware (como CPU, memoria, E/S de disco y red) aplicados a un grupo de procesos?",
    opciones: {
      a: "Namespaces (Espacios de nombres).",
      b: "cgroups (Control Groups).",
      c: "Seccomp (Secure Computing Mode).",
      d: "Chroot jail."
    },
    respuesta_correcta: "b"
  },
  {
    id: 402,
    enunciado: "¿Qué moderno protocolo de Redes Privadas Virtuales (VPN) destaca por estar integrado directamente en el espacio de kernel de Linux, ofreciendo una implementación extremadamente ligera, segura y con velocidades de transmisión muy superiores a las soluciones clásicas como OpenVPN o IPsec?",
    opciones: {
      a: "L2TP/IPsec.",
      b: "PPTP.",
      c: "WireGuard.",
      d: "SSL/TLS Tunneling."
    },
    respuesta_correcta: "c"
  },
  {
    id: 403,
    enunciado: "Para realizar tareas de respaldo masivo de información en Linux de forma eficiente, ¿qué herramienta de consola destaca por sincronizar archivos de forma local o remota transmitiendo exclusivamente los bloques de datos modificados (delta transfer) en lugar del archivo completo?",
    opciones: {
      a: "rsync",
      b: "tar",
      c: "cp -r",
      d: "dd"
    },
    respuesta_correcta: "a"
  },
  {
    id: 404,
    enunciado: "En Linux, las variables y parámetros de configuración del kernel en tiempo de ejecución se mapean de forma dinámica bajo el sistema de archivos virtual '/proc/sys/'. ¿Qué comando nativo del sistema permite leer o modificar de forma inmediata y permanente estos parámetros?",
    opciones: {
      a: "sysctl",
      b: "setenforce",
      c: "modprobe",
      d: "kernelconfig"
    },
    respuesta_correcta: "a"
  },
  {
    id: 405,
    enunciado: "En la administración de bases de datos relacionales (RDBMS), ¿qué estructura de datos se utiliza de forma predominante para implementar índices, garantizando búsquedas, inserciones y borrados en tiempo logarítmico O(log n)?",
    opciones: {
      a: "Tablas Hash.",
      b: "Árboles B+ (B+ Trees).",
      c: "Listas enlazadas circulares.",
      d: "Árboles binarios de búsqueda desequilibrados."
    },
    respuesta_correcta: "b"
  },
  {
    id: 406,
    enunciado: "Dentro de las propiedades ACID que garantizan la integridad de las transacciones en una base de datos relacional, ¿cuál de ellas asegura que una operación se ejecute por completo o no se ejecute en absoluto, revirtiendo cualquier cambio intermedio en caso de fallo (rollback)?",
    opciones: {
      a: "Consistencia (Consistency).",
      b: "Aislamiento (Isolation).",
      c: "Atomicidad (Atomicity).",
      d: "Durabilidad (Durability)."
    },
    respuesta_correcta: "c"
  },
  {
    id: 407,
    enunciado: "Si un administrador ejecuta una consulta SQL que realiza un 'LEFT JOIN' entre la Tabla A (izquierda) y la Tabla B (derecha), ¿cuál será el resultado obtenido?",
    opciones: {
      a: "Solo las filas que tengan una coincidencia exacta en ambas tablas.",
      b: "Todas las filas de la Tabla B y solo las filas coincidentes de la Tabla A.",
      c: "Todas las filas de la Tabla A, y los valores de las columnas de la Tabla B se rellenarán con NULL en aquellas filas donde no exista coincidencia.",
      d: "La unión de todas las filas excluyendo los registros duplicados entre ambas tablas."
    },
    respuesta_correcta: "c"
  },
  {
    id: 408,
    enunciado: "Al diseñar el esquema de una base de datos, deseamos que al borrar un registro de la tabla principal 'Pacientes' se eliminen automáticamente todos los registros asociados en la tabla dependiente 'Citas'. ¿Qué cláusula de integridad referencial se debe aplicar a la Clave Foránea (Foreign Key)?",
    opciones: {
      a: "ON DELETE RESTRICT",
      b: "ON DELETE SET NULL",
      c: "ON DELETE CASCADE",
      d: "ON DELETE NO ACTION"
    },
    respuesta_correcta: "c"
  },
  {
    id: 409,
    enunciado: "El Teorema de CAP postula que un sistema de datos distribuido no puede garantizar simultáneamente más de dos de tres propiedades fundamentales. ¿Cuáles son estas tres propiedades?",
    opciones: {
      a: "Consistencia, Disponibilidad y Tolerancia a Particiones (Consistency, Availability, Partition tolerance).",
      b: "Concurrencia, Almacenamiento y Rendimiento (Concurrency, Storage, Performance).",
      c: "Atomicidad, Consistencia y Durabilidad.",
      d: "Cifrado, Autenticación y Privacidad."
    },
    respuesta_correcta: "a"
  },
  {
    id: 410,
    enunciado: "Para mitigar de forma efectiva la vulnerabilidad de Inyección SQL (SQLi) en el desarrollo de aplicaciones que interactúan con la base de datos corporativa, ¿qué técnica de programación es la más segura y recomendada?",
    opciones: {
      a: "Sanitizar las entradas de texto eliminando manualmente las comillas simples.",
      b: "Utilizar consultas preparadas con parámetros vinculados (Prepared Statements o Parameterized Queries).",
      c: "Cifrar la cadena de conexión SQL en el código fuente de la aplicación.",
      d: "Ofuscar el código JavaScript que se ejecuta en el navegador del cliente."
    },
    respuesta_correcta: "b"
  },
  {
    id: 411,
    enunciado: "¿Cuál es la diferencia fundamental a nivel arquitectónico entre un sistema de almacenamiento NAS (Network Attached Storage) y una SAN (Storage Area Network)?",
    opciones: {
      a: "NAS opera a nivel de bloques mediante Fibre Channel; SAN opera a nivel de archivos de red.",
      b: "NAS proporciona acceso a nivel de archivos a través de protocolos como NFS o SMB; SAN proporciona acceso a nivel de bloques nativos simulando discos locales mediante Fibre Channel o iSCSI.",
      c: "SAN es una solución basada exclusivamente en la nube; NAS requiere hardware local cableado.",
      d: "NAS no soporta discos duros SSD de alta velocidad, mientras que SAN sí."
    },
    respuesta_correcta: "b"
  },
  {
    id: 412,
    enunciado: "En una estrategia de copias de seguridad corporativa, si se realiza un backup completo el domingo y backups diferenciales de lunes a viernes, ¿qué se necesita exactamente para restaurar el sistema por completo si ocurre un desastre el jueves?",
    opciones: {
      a: "El backup completo del domingo y todos los backups de lunes, martes y miércoles.",
      b: "Únicamente el backup diferencial generado el miércoles por la noche.",
      c: "El backup completo del domingo y únicamente el backup diferencial del miércoles.",
      d: "La norma exige disponer de las copias completas de las últimas cuatro semanas."
    },
    respuesta_correcta: "c"
  },
  {
    id: 413,
    enunciado: "¿Qué configuración de almacenamiento RAID destaca por utilizar una arquitectura de doble paridad distribuida, tolerando la pérdida simultánea de hasta dos unidades de disco físico sin comprometer los datos?",
    opciones: {
      a: "RAID 1.",
      b: "RAID 5.",
      c: "RAID 6.",
      d: "RAID 10."
    },
    respuesta_correcta: "c"
  },
  {
    id: 414,
    enunciado: "En el proceso de normalización de bases de datos, ¿qué condición formal define que una tabla se encuentra en Tercera Forma Normal (3NF)?",
    opciones: {
      a: "Que esté en 1NF y no existan atributos con múltiples valores.",
      b: "Que esté en 2NF y ningún atributo que no sea clave dependa de forma transitiva de la clave primaria.",
      c: "Que todos los determinantes de la tabla sean claves candidatas obligatoriamente.",
      d: "Que se eliminen todas las dependencias multivalor."
    },
    respuesta_correcta: "b"
  },
  {
    id: 415,
    enunciado: "En la gestión de transacciones concurrentes, ¿cuál es el nivel de aislamiento (Isolation Level) más estricto que previene de forma absoluta anomalías como las lecturas sucias (dirty reads), lecturas no repetibles y lecturas fantasma (phantom reads)?",
    opciones: {
      a: "Read Committed.",
      b: "Read Uncommitted.",
      c: "Repeatable Read.",
      d: "Serializable."
    },
    respuesta_correcta: "d"
  },
  {
    id: 416,
    enunciado: "Al asignar espacio de almacenamiento para máquinas virtuales en un entorno de hipervisor corporativo, ¿qué característica define al aprovisionamiento dinámico o 'Thin Provisioning'?",
    opciones: {
      a: "Bloquear y reservar inmediatamente todo el espacio físico asignado en la SAN.",
      b: "Consumir espacio físico de la cabina de almacenamiento bajo demanda, a medida que los datos se escriben realmente en el disco virtual de la máquina.",
      c: "Cifrar el volumen en tiempo real utilizando algoritmos de hardware simétricos.",
      d: "Limitar la velocidad de lectura y escritura (Iops) de la máquina virtual de forma fija."
    },
    respuesta_correcta: "b"
  },
  {
    id: 417,
    enunciado: "En arquitecturas de alta disponibilidad para motores de bases de datos, ¿cuál es el principal riesgo asociado a la replicación asíncrona entre un nodo principal y un nodo réplica o espejo?",
    opciones: {
      a: "La caída drástica del rendimiento de las escrituras en el nodo principal.",
      b: "La posibilidad de experimentar pérdida de datos reciente (Data Loss) si el nodo principal falla antes de que los cambios se transmitan a la réplica.",
      c: "El bloqueo de todas las consultas de lectura en el nodo principal.",
      d: "La obligatoriedad de que ambos servidores compartan el mismo espacio físico de almacenamiento."
    },
    respuesta_correcta: "b"
  },
  {
    id: 418,
    enunciado: "Cuando un motor de base de datos relacional recibe una consulta SQL compleja, ¿qué componente interno se encarga de analizar las estadísticas de las tablas para determinar la estrategia más eficiente de acceso a los datos (por ejemplo, decidiendo si usar un Index Scan o un Sequential Scan)?",
    opciones: {
      a: "El Optimizador de Consultas (Query Optimizer).",
      b: "El Gestor de Bloqueos (Lock Manager).",
      c: "El Motor de Almacenamiento (Storage Engine).",
      d: "El Buffer Pool Handler."
    },
    respuesta_correcta: "a"
  },
  {
    id: 419,
    enunciado: "¿Cuál es una de las principales ventajas arquitectónicas de las bases de datos NoSQL orientadas a documentos o clave-valor frente a las relacionales tradicionales?",
    opciones: {
      a: "Garantizan de forma nativa e inflexible el cumplimiento estricto de las propiedades ACID en transacciones distribuidas complejas.",
      b: "Su capacidad de escalabilidad horizontal nativa (sharding), permitiendo distribuir la carga de datos entre múltiples servidores económicos de manera más eficiente que el escalado vertical.",
      c: "La obligatoriedad de definir un esquema rígido y fijo antes de insertar cualquier dato.",
      d: "La eliminación por completo del uso de memoria caché en el servidor."
    },
    respuesta_correcta: "b"
  },
  {
    id: 420,
    enunciado: "En el ámbito de la virtualización de sistemas, ¿cuál es la característica definitoria que distingue a un hipervisor de Tipo 1 (Bare-Metal) frente a un hipervisor de Tipo 2 (Hosted)?",
    opciones: {
      a: "El de Tipo 1 se ejecuta directamente sobre el hardware físico del servidor sin necesidad de un sistema operativo anfitrión previo.",
      b: "El de Tipo 1 requiere obligatoriamente un sistema operativo Windows Server con el rol de Active Directory.",
      c: "El de Tipo 2 ofrece un rendimiento drásticamente superior al interactuar directamente con la CPU.",
      d: "El de Tipo 2 no permite la ejecución de máquinas virtuales con sistemas operativos Linux."
    },
    respuesta_correcta: "a"
  },
  {
    id: 421,
    enunciado: "Una organización decide migrar su infraestructura web a la nube, optando por un modelo de servicio donde el proveedor se encarga de administrar los servidores, el almacenamiento, las redes y el sistema operativo, mientras que la organización solo gestiona el despliegue de sus aplicaciones y datos. ¿A qué modelo de computación en la nube corresponde esta descripción?",
    opciones: {
      a: "IaaS (Infrastructure as a Service).",
      b: "PaaS (Platform as a Service).",
      c: "SaaS (Software as a Service).",
      d: "On-Premises clásico."
    },
    respuesta_correcta: "b"
  },
  {
    id: 422,
    enunciado: "Al trabajar con la tecnología de contenedores Docker, ¿cuál es la relación e interacción exacta entre una Imagen y un Contenedor?",
    opciones: {
      a: "La imagen es una instancia volátil en ejecución creada a partir de un contenedor estático.",
      b: "La imagen es una plantilla inmutable de solo lectura que empaqueta la aplicación y sus dependencias; el contenedor es una instancia ejecutable, viva y con una capa de escritura creada a partir de dicha imagen.",
      c: "No existe diferencia, ambos términos se utilizan como sinónimos en entornos nativos de Linux.",
      d: "Las imágenes solo contienen el código fuente y los contenedores contienen únicamente el sistema operativo base."
    },
    respuesta_correcta: "b"
  },
  {
    id: 423,
    enunciado: "En la arquitectura de un clúster administrado por Kubernetes para la orquestación de contenedores, ¿qué es un 'Pod'?",
    opciones: {
      a: "El servidor físico o nodo maestro que controla todo el clúster.",
      b: "La unidad de almacenamiento persistente compartida de forma global.",
      c: "La unidad de despliegue más pequeña y básica que representa un único proceso en ejecución, la cual puede contener uno o más contenedores estrechamente acoplados compartiendo red y almacenamiento local.",
      d: "Un script de automatización encargado del balanceo de carga externo."
    },
    respuesta_correcta: "c"
  },
  {
    id: 424,
    enunciado: "Dentro de los principios de diseño que rigen a las arquitecturas web basadas en servicios y APIs RESTful, ¿qué implicación directa tiene la restricción de 'Falta de estado' o 'Statelessness'?",
    opciones: {
      a: "El servidor debe almacenar la sesión del usuario en una base de datos relacional local para validar accesos futuros.",
      b: "Cada petición del cliente al servidor debe contener de forma obligatoria e independiente toda la información y contexto necesarios para comprender y procesar dicha solicitud, sin que el servidor dependa de un contexto guardado en su memoria.",
      c: "Las comunicaciones deben realizarse exclusivamente utilizando conexiones UDP para agilizar el tráfico.",
      d: "Se prohíbe el uso de tokens de autenticación como JWT (JSON Web Tokens)."
    },
    respuesta_correcta: "b"
  },
  {
    id: 425,
    enunciado: "Al desarrollar integraciones e intercambio de datos entre sistemas de salud interoperables, ¿cuál es una de las principales ventajas técnicas del formato JSON frente al clásico XML?",
    opciones: {
      a: "JSON admite de forma nativa esquemas de validación criptográficos de hardware complejos.",
      b: "Su sintaxis es más ligera y compacta, reduciendo el consumo de ancho de banda y ofreciendo un procesamiento y parseo de datos más rápido y eficiente mediante estructuras nativas de clave-valor.",
      c: "JSON requiere la apertura obligatoria de etiquetas de cierre complejas en cada nodo.",
      d: "Es inmune de forma absoluta a los ataques de denegación de servicio."
    },
    respuesta_correcta: "b"
  },
  {
    id: 426,
    enunciado: "Al auditar el comportamiento de una aplicación web, un desarrollador recibe una respuesta del servidor HTTP con el código de estado '403 Forbidden'. ¿Qué significa exactamente este código?",
    opciones: {
      a: "Que el recurso solicitado no existe o no ha sido encontrado en el servidor.",
      b: "Que la petición requiere autenticación previa del usuario y las credenciales no se han proporcionado.",
      c: "Que el servidor ha comprendido la solicitud, pero el usuario autenticado carece de los permisos o privilegios necesarios para acceder al recurso específico.",
      d: "Que el servidor web ha experimentado un error interno crítico en su backend."
    },
    respuesta_correcta: "c"
  },
  {
    id: 427,
    enunciado: "Al establecer una conexión segura HTTPS mediante el protocolo TLS (Transport Layer Security), ¿cómo interactúan la criptografía simétrica y asimétrica durante el proceso?",
    opciones: {
      a: "Se utiliza exclusivamente criptografía asimétrica durante toda la sesión web para garantizar la seguridad.",
      b: "La criptografía asimétrica se emplea únicamente al inicio (Handshake) para autenticar al servidor y acordar o intercambiar de forma segura una clave secreta; una vez establecida, se utiliza criptografía simétrica para cifrar el flujo masivo de datos debido a su alta velocidad.",
      c: "La criptografía simétrica autentica los certificados digitales de la entidad certificadora y la asimétrica cifra los paquetes.",
      d: "Ambas se ejecutan de manera simultánea e idéntica duplicando los recursos de procesamiento."
    },
    respuesta_correcta: "b"
  },
  {
    id: 428,
    enunciado: "En la seguridad de sistemas, ¿cuáles son las dos características fundamentales que definen a una función hash criptográfica de un solo sentido (como SHA-256)?",
    opciones: {
      a: "Permite recuperar el texto original aplicando la clave privada del administrador y genera salidas de tamaño variable.",
      b: "Es matemáticamente inviable obtener el texto de entrada original a partir de su valor hash (irreversibilidad) y es altamente improbable que dos entradas distintas generen el mismo hash (resistencia a colisiones), produciendo siempre una salida de longitud fija.",
      c: "Cifra los datos utilizando algoritmos simétricos basados en bloques cíclicos.",
      d: "Se utiliza exclusivamente para comprimir archivos pesados en formato binario estructurado."
    },
    respuesta_correcta: "b"
  },
  {
    id: 429,
    enunciado: "Si un administrador desea implementar un sistema de Firma Digital asimétrica para garantizar la autenticidad e integridad de una directiva técnica enviada por correo electrónico, ¿qué clave debe utilizar para firmar el documento y cuál debe usar el receptor para verificarlo?",
    opciones: {
      a: "El emisor firma con la clave pública del receptor; el receptor verifica con su propia clave privada.",
      b: "El emisor firma con su propia clave privada; el receptor verifica utilizando la clave pública del emisor.",
      c: "Ambos deben compartir una clave secreta simétrica previamente distribuida de forma manual.",
      d: "La firma digital no requiere el uso de claves simétricas ni asimétricas."
    },
    respuesta_correcta: "b"
  },
  {
    id: 430,
    enunciado: "Dentro de las vulnerabilidades críticas de seguridad en aplicaciones web catalogadas por OWASP, ¿en qué consiste exactamente un ataque de Cross-Site Scripting (XSS)?",
    opciones: {
      a: "En saturar el servidor con múltiples peticiones concurrentes para agotar los recursos de memoria y provocar una denegación de servicio.",
      b: "En inyectar scripts maliciosos (generalmente JavaScript) en sitios web de confianza para que se ejecuten directamente en el navegador de la víctima que visualiza dicha página, permitiendo el robo de cookies de sesión o secuestro de cuentas.",
      c: "En modificar las cabeceras de los paquetes IP para suplantar la identidad de un servidor interno.",
      d: "En forzar al navegador a realizar peticiones no deseadas en una aplicación web en la que el usuario ya está autenticado."
    },
    respuesta_correcta: "b"
  },
  {
    id: 431,
    enunciado: "En el diseño de políticas de respaldo y planes de recuperación ante desastres en la infraestructura de TI corporativa, ¿qué establece formalmente la conocida regla de copias de seguridad 3-2-1?",
    opciones: {
      a: "Disponer de 3 copias completas en el mismo servidor, actualizadas 2 veces al día y usando 1 algoritmo de compresión.",
      b: "Mantener al menos 3 copias de los datos (la original y 2 copias de seguridad), almacenar los respaldos en 2 tipos de soportes o medios físicos diferentes, y conservar al menos 1 de esas copias fuera de las instalaciones físicas de la organización (offsite o en la nube).",
      c: "Realizar copias cada 3 semanas, retenerlas por 2 meses y verificarlas en 1 único nodo central de control.",
      d: "Tener 3 administradores autorizados, 2 claves simétricas de acceso y 1 servidor espejo."
    },
    respuesta_correcta: "b"
  },
  {
    id: 432,
    enunciado: "¿Cuál es la diferencia operativa y arquitectónica fundamental entre un sistema de detección de intrusos (IDS) y un sistema de prevención de intrusos (IPS) desplegados en una red corporativa?",
    opciones: {
      a: "El IDS solo analiza el tráfico HTTP; el IPS analiza todo el modelo TCP/IP de forma exclusiva.",
      b: "El IDS opera de forma pasiva analizando una copia del tráfico (modo escucha) para generar alertas ante actividades sospechosas; el IPS se posiciona en línea (inline) en el flujo de la red, lo que le permite bloquear, descartar o mitigar el tráfico malicioso en tiempo real.",
      c: "El IPS requiere hardware dedicado propietario y el IDS es una solución basada únicamente en software libre.",
      d: "El IDS cifra las conexiones internas y el IPS bloquea los puertos USB locales."
    },
    respuesta_correcta: "b"
  },
  {
    id: 433,
    enunciado: "Al implementar soluciones avanzadas de Control de Acceso y Gestión de Identidades en entornos corporativos modernos, ¿cuál es el caso de uso principal del estándar OAuth 2.0 frente a SAML 2.0?",
    opciones: {
      a: "OAuth 2.0 es un marco diseñado específicamente para la Autorización delegada (permitiendo que aplicaciones terceras accedan a recursos en nombre de un usuario sin conocer su contraseña); SAML 2.0 se centra en la Autenticación federada y Single Sign-On (SSO) empresarial basándose en XML.",
      b: "SAML 2.0 se utiliza exclusivamente en aplicaciones móviles y OAuth 2.0 solo en servidores de bases de datos relacionales.",
      c: "OAuth 2.0 reemplaza por completo el uso de contraseñas locales mediante tokens simétricos de hardware.",
      d: "No existe diferencia operativa, ambos son protocolos idénticos desarrollados por la IETF."
    },
    respuesta_correcta: "a"
  },
  {
    id: 434,
    enunciado: "Al migrar el diseño de un sistema centralizado de software hacia una arquitectura basada en Microservicios, ¿cuál de los siguientes patrones arquitectónicos es un requisito fundamental para garantizar el desacoplamiento real y la escalabilidad independiente de cada componente?",
    opciones: {
      a: "Que todos los microservicios compartan e impacten obligatoriamente una única base de datos relacional monolítica central.",
      b: "El patrón de Base de datos por Microservicio (Database-per-service), donde cada microservicio gestiona y posee de forma exclusiva su propio almacén de datos aislado, comunicándose con otros mediante APIs estructuradas.",
      c: "Eliminar el uso de protocolos HTTP y depender únicamente de llamadas remotas RPC síncronas bloqueantes.",
      d: "Desplegar todos los binarios consolidados dentro del mismo sistema operativo de forma centralizada."
    },
    respuesta_correcta: "b"
  },
  {
    id: 435,
    enunciado: "En el contexto del ciclo de desarrollo de software, ¿cuál es el propósito primordial de realizar Pruebas Unitarias (Unit Testing) y quién es tradicionalmente el responsable de ejecutarlas?",
    opciones: {
      a: "Validar que el sistema completo cumple con los requisitos del cliente; las ejecuta el equipo de control de calidad (QA).",
      b: "Verificar de forma aislada el correcto funcionamiento de un módulo, función o clase específica de código; las diseña y ejecuta el propio desarrollador.",
      c: "Evaluar el rendimiento del servidor bajo una carga extrema de usuarios concurrentes; las ejecuta el administrador de sistemas.",
      d: "Garantizar que el software es inmune a ataques de inyección de código; las ejecuta un auditor de seguridad externo."
    },
    respuesta_correcta: "b"
  },
  {
    id: 436,
    enunciado: "Al planificar la fase de validación de un software, ¿cuál es la diferencia conceptual y operativa fundamental entre las Técnicas de Prueba de Caja Negra y las de Caja Blanca?",
    opciones: {
      a: "Caja negra analiza la infraestructura de red; caja blanca analiza la base de datos.",
      b: "Caja negra se ejecuta exclusivamente en sistemas operativos Linux; caja blanca se reserva para entornos de servidores Windows.",
      c: "Caja negra evalúa el comportamiento del software basándose únicamente en las especificaciones funcionales y entradas/salidas sin conocer el código interno; caja blanca examina la estructura interna, los flujos lógicos y las rutas de ejecución del código fuente.",
      d: "Caja negra se realiza de forma manual por usuarios finales; caja blanca es un proceso completamente automatizado mediante inteligencia artificial."
    },
    respuesta_correcta: "c"
  },
  {
    id: 437,
    enunciado: "Después de corregir un conjunto de errores críticos en un módulo de software, el equipo decide ejecutar Pruebas de Regresión (Regression Testing). ¿Qué objetivo se persigue específicamente con esta práctica?",
    opciones: {
      a: "Comprobar que las modificaciones del código o las correcciones de errores no han introducido nuevos fallos ni han alterado negativamente el funcionamiento de los componentes existentes que previamente eran estables.",
      b: "Medir el tiempo exacto que tarda el sistema en recuperarse tras una caída crítica del servidor de bases de datos.",
      c: "Revertir de forma automática el código a una versión anterior almacenada en el repositorio de Git.",
      d: "Evaluar el grado de usabilidad y accesibilidad de la interfaz gráfica del usuario."
    },
    respuesta_correcta: "a"
  },
  {
    id: 438,
    enunciado: "En la ingeniería de calidad de software, ¿qué mide formalmente la Complejidad Ciclomática de McCabe aplicada a un fragmento de código fuente?",
    opciones: {
      a: "El número total de líneas de código y comentarios presentes en un archivo fuente.",
      b: "La cantidad de memoria RAM que consumirá el programa durante su ejecución en producción.",
      c: "La cantidad de rutas lineales e independientes a través del código (determinada por los puntos de decisión o estructuras condicionales), sirviendo de métrica para evaluar la mantenibilidad y el número mínimo de pruebas necesarias.",
      d: "El tiempo en milisegundos que tarda el compilador en generar el binario ejecutable."
    },
    respuesta_correcta: "c"
  },
  {
    id: 439,
    enunciado: "La familia de normas internacionales ISO/IEC 25000, también conocida como SQuaRE (Software Product Quality Requirements and Evaluation), tiene como finalidad principal:",
    opciones: {
      a: "Establecer las directrices de cableado estructurado para centros de datos empresariales.",
      b: "Proporcionar un marco estandarizado unificado para evaluar la calidad del producto de software a través de características como fiabilidad, usabilidad, eficiencia de rendimiento y seguridad.",
      c: "Regular los contratos de licencias de software propietario entre administraciones públicas y proveedores de tecnología.",
      d: "Definir los niveles de privilegios de acceso para la administración de bases de datos relacionales."
    },
    respuesta_correcta: "b"
  },
  {
    id: 440,
    enunciado: "Al avanzar en los niveles de pruebas del software, las Pruebas de Integración (Integration Testing) se sitúan inmediatamente después de las unitarias. ¿Cuál es su objetivo técnico principal?",
    opciones: {
      a: "Validar que la aplicación web se renderiza correctamente en dispositivos móviles.",
      b: "Verificar las interfaces, la comunicación y la correcta interacción entre las distintas unidades o módulos de software una vez que se combinan o integran.",
      c: "Evaluar la tolerancia a fallos del sistema eléctrico del centro de datos.",
      d: "Comprobar que la sintaxis del código cumple con las reglas del linter del proyecto."
    },
    respuesta_correcta: "b"
  },
  {
    id: 441,
    enunciado: "Dentro del marco de gestión de servicios TI (como ITIL), ¿cuál es la diferencia operativa y conceptual fundamental entre la Gestión de Incidentes y la Gestión de Problemas?",
    opciones: {
      a: "La Gestión de Incidentes trata exclusivamente fallos de hardware; la de Problemas trata fallos de software.",
      b: "La Gestión de Incidentes se enfoca en restaurar la operación normal del servicio lo antes posible minimizando el impacto adverso; la Gestión de Problemas busca identificar y resolver la causa raíz subyacente para prevenir incidentes recurrentes.",
      c: "La Gestión de Problemas solo interviene si el fallo afecta a más de cincuenta usuarios simultáneos.",
      d: "Incidentes es un proceso puramente automatizado, mientras que Problemas es un proceso manual obligatorio."
    },
    respuesta_correcta: "b"
  },
  {
    id: 442,
    enunciado: "En la gestión de niveles de servicio de ITIL, ¿qué distingue formalmente a un Acuerdo de Nivel de Servicio (SLA) de un Acuerdo de Nivel Operativo (OLA)?",
    opciones: {
      a: "El SLA es un compromiso firmado entre el proveedor de servicios de TI y un cliente externo/negocio; el OLA es un acuerdo interno entre departamentos o equipos técnicos de la propia organización de TI para dar soporte al SLA.",
      b: "El OLA tiene validez legal ante tribunales de justicia y el SLA es una recomendación interna no vinculante.",
      c: "El SLA solo mide la disponibilidad de las redes inalámbricas y el OLA el rendimiento de los discos duros.",
      d: "No existe diferencia, ambos términos son sinónimos absolutos dentro del catálogo de servicios."
    },
    respuesta_correcta: "a"
  },
  {
    id: 443,
    enunciado: "Al diseñar la monitorización de una infraestructura de servidores corporativos, ¿cuál es la característica de una estrategia de Monitorización Activa frente a una Monitorización Pasiva?",
    opciones: {
      a: "La activa requiere apagar los servidores una vez al día para realizar comprobaciones en caliente.",
      b: "La activa genera tráfico o peticiones simuladas de forma periódica (transacciones sintéticas) para verificar la disponibilidad del servicio; la pasiva recopila y analiza métricas del tráfico o del comportamiento real de los usuarios en producción sin intervenir.",
      c: "La pasiva solo envía alertas por correo electrónico cuando el disco duro se llena al 100%.",
      d: "La monitorización activa se ejecuta exclusivamente en el cortafuegos perimetral."
    },
    respuesta_correcta: "b"
  },
  {
    id: 444,
    enunciado: "El protocolo SNMP (Simple Network Management Protocol) es un estándar en la monitorización de dispositivos de red. ¿Qué componente de su arquitectura actúa como el almacén jerárquico y estructurado de datos que define los objetos y variables (OIDs) que pueden ser consultados en un dispositivo?",
    opciones: {
      a: "El Agente SNMP (SNMP Agent).",
      b: "El Administrador SNMP (SNMP Manager).",
      c: "La Base de Información de Gestión (MIB - Management Information Base).",
      d: "El trap de alerta asíncrona."
    },
    respuesta_correcta: "c"
  },
  {
    id: 445,
    enunciado: "En el ámbito de las pruebas de rendimiento (Performance Testing), ¿cuál es la diferencia clave entre una Prueba de Carga (Load Testing) y una Prueba de Estrés (Stress Testing)?",
    opciones: {
      a: "La prueba de carga analiza la base de datos; la de estrés analiza la CPU de los servidores.",
      b: "La prueba de carga evalúa el comportamiento del sistema bajo un volumen de peticiones esperado o pico normal de producción; la prueba de estrés lleva al sistema más allá de sus límites operativos especificados para identificar su punto de rotura y cómo se recupera del fallo.",
      c: "La prueba de estrés dura un máximo de cinco minutos de forma obligatoria.",
      d: "Las pruebas de carga solo se realizan de forma manual simulando clicks reales en ratones físicos."
    },
    respuesta_correcta: "b"
  },
  {
    id: 446,
    enunciado: "En las metodologías de desarrollo modernas basadas en la cultura DevOps, ¿cuál es el principio operativo fundamental de la Integración Continua (CI)?",
    opciones: {
      a: "Subir el código a producción de forma manual una vez al mes por motivos de seguridad.",
      b: "Automatizar la compilación (build) y la ejecución de pruebas cada vez que un desarrollador sube o integra cambios de código al repositorio central, detectando fallos de forma temprana.",
      c: "Sustituir el uso de repositorios como Git por servidores de archivos compartidos en la red local.",
      d: "Eliminar la fase de análisis de requisitos en el desarrollo ágil."
    },
    respuesta_correcta: "b"
  },
  {
    id: 447,
    enunciado: "Dentro de la Transición del Servicio en ITIL, ¿qué función tiene la Base de Datos de la Gestión de la Configuración (CMDB)?",
    opciones: {
      a: "Almacenar de forma centralizada todas las contraseñas de los administradores de sistemas del dominio.",
      b: "Registrar y mantener la información detallada sobre todos los Elementos de Configuración (CI), así como las relaciones y dependencias lógicas y físicas existentes entre ellos dentro de la infraestructura de TI.",
      c: "Monitorear en tiempo real los picos de temperatura de los racks del data center.",
      d: "Servir como pasarela de pago para la adquisición de software corporativo."
    },
    respuesta_correcta: "b"
  },
  {
    id: 448,
    enunciado: "Al implementar una solución de observabilidad en un clúster de servidores, ¿cuál es la diferencia principal entre los casos de uso de un sistema basado en métricas (como Prometheus) frente a uno basado en agregación de logs (como la suite ELK - Elasticsearch, Logstash, Kibana)?",
    opciones: {
      a: "Prometheus solo funciona en entornos Windows; ELK se reserva para sistemas operativos de la familia Unix.",
      b: "Prometheus está optimizado para recopilar, almacenar y alertar sobre datos numéricos estructurados en series temporales (rendimiento del sistema); la suite ELK está diseñada para indexar, buscar y analizar registros de texto detallados (logs) para auditorías profundas y resolución de errores.",
      c: "ELK no permite la visualización de datos mediante gráficos informativos.",
      d: "Prometheus es un software propietario de pago y ELK es una arquitectura de hardware dedicado."
    },
    respuesta_correcta: "b"
  },
  {
    id: 449,
    enunciado: "En el desarrollo y mantenimiento del software, ¿qué se entiende formalmente por el proceso de Refactorización de Código (Code Refactoring)?",
    opciones: {
      a: "Reescribir el software en un lenguaje de programación completamente diferente para modernizar el sistema.",
      b: "Modificar la estructura interna del código fuente para mejorar su legibilidad, mantenibilidad o rendimiento sin alterar en absoluto su comportamiento externo ni sus funcionalidades funcionales.",
      c: "Añadir nuevas características y menús interactivos solicitados a última hora por el usuario final.",
      d: "Cifrar el código binario ejecutable para impedir técnicas de ingeniería inversa no autorizadas."
    },
    respuesta_correcta: "b"
  },
  {
    id: 450,
    enunciado: "Al implementar mecanismos de autenticación basados en tokens utilizando el estándar JWT (JSON Web Token) en una API corporativa, ¿cuál es la estructura interna exacta de este token y cómo se separan sus componentes?",
    opciones: {
      a: "Consta de dos partes (Payload y Firma) separadas por un guion medio (-).",
      b: "Consta de tres partes (Header, Payload y Signature) codificadas en Base64Url y separadas por puntos (.).",
      c: "Se compone de cuatro secciones cifradas secuencialmente con un algoritmo simétrico AES de 256 bits.",
      d: "Es un archivo XML estructurado que requiere cabeceras SOAP obligatorias."
    },
    respuesta_correcta: "b"
  },
  {
    id: 451,
    enunciado: "En la administración de servidores DNS (Domain Name System), ¿qué tipo de registro de recurso se encarga específicamente de mapear un nombre de dominio hacia una dirección IPv6 nativa de 128 bits?",
    opciones: {
      a: "Registro A.",
      b: "Registro CNAME.",
      c: "Registro MX.",
      d: "Registro AAAA."
    },
    respuesta_correcta: "d"
  },
  {
    id: 452,
    enunciado: "En el ámbito de la interoperabilidad de sistemas de información sanitaria, el estándar moderno HL7 FHIR (Fast Healthcare Interoperability Resources) se diferencia de las versiones clásicas de HL7 v2 en que FHIR fundamenta su arquitectura nativa en:",
    opciones: {
      a: "El intercambio masivo de archivos de texto plano estructurados por delimitadores de tuberías (pipes).",
      b: "Una arquitectura basada en recursos web accesibles mediante una API REST utilizando formatos ligeros como JSON o XML y protocolos estándar de internet.",
      c: "Conexiones socket TCP directas y propietarias que exigen hardware dedicado.",
      d: "El uso exclusivo de bases de datos relacionales monolíticas centralizadas."
    },
    respuesta_correcta: "b"
  },
  {
    id: 453,
    enunciado: "Al diseñar una aplicación siguiendo el patrón arquitectónico clásico MVC (Modelo-Vista-Controlador), ¿cuál es la responsabilidad exclusiva asignada al componente 'Modelo'?",
    opciones: {
      a: "Renderizar la interfaz gráfica y mostrar los datos directamente en la pantalla de la persona usuaria.",
      b: "Capturar los eventos del teclado y ratón del cliente para redirigir el flujo de ejecución de la red.",
      c: "Gestionar los datos, las reglas de negocio, la lógica interna del sistema y las interacciones con el mecanismo de persistencia o base de datos.",
      d: "Validar las cabeceras de seguridad criptográfica de las peticiones HTTP entrantes."
    },
    respuesta_correcta: "c"
  },
  {
    id: 454,
    enunciado: "Dentro de la capa de transporte del modelo TCP/IP, ¿cuál es la diferencia de comportamiento e implementación fundamental entre los protocolos TCP y UDP?",
    opciones: {
      a: "TCP opera en el nivel físico de la red y UDP en la capa de aplicación.",
      b: "TCP es un protocolo orientado a la conexión que garantiza la entrega ordenada y libre de errores de los datos mediante acuses de recibo y control de flujo; UDP es un protocolo no orientado a la conexión, más rápido y ligero, pero que no asegura la entrega ni el orden de los paquetes.",
      c: "UDP cifra los paquetes de forma obligatoria por hardware y TCP transmite siempre en texto plano.",
      d: "TCP se limita al uso en redes metropolitanas WAN y UDP a redes locales cableadas."
    },
    respuesta_correcta: "b"
  },
  {
    id: 455,
    enunciado: "Para optimizar el rendimiento y reducir los tiempos de latencia en la carga de una aplicación web corporativa distribuida geográficamente, ¿cuál es el principio operativo de una red CDN (Content Delivery Network)?",
    opciones: {
      a: "Incrementar la capacidad de procesamiento (CPU) del servidor web central de la organización.",
      b: "Almacenar en caché copias de los contenidos estáticos de la aplicación en una red de servidores distribuidos geográficamente (nodos de borde), sirviendo los datos desde el servidor más cercano físicamente a la persona usuaria.",
      c: "Obligar al navegador del cliente a comprimir su disco duro local antes de iniciar la conexión.",
      d: "Migrar todas las bases de datos relacionales hacia sistemas de almacenamiento óptico."
    },
    respuesta_correcta: "b"
  },
  {
    id: 456,
    enunciado: "Al gestionar el almacenamiento seguro de contraseñas de usuarios en un sistema de autenticación, ¿cuál es la finalidad técnica de aplicar un valor aleatorio conocido como 'Sal' (Salt) antes de calcular el hash criptográfico de la contraseña?",
    opciones: {
      a: "Acelerar el tiempo de respuesta del motor de bases de datos al verificar las credenciales.",
      b: "Garantizar que dos contraseñas idénticas generen hashes completamente diferentes, mitigando de forma efectiva ataques basados en tablas precalculadas como las Tablas de Arcoíris (Rainbow Tables).",
      c: "Cifrar la contraseña de manera reversible para que el administrador pueda recuperarla si el usuario la olvida.",
      d: "Limitar el número máximo de caracteres que puede contener la clave del usuario."
    },
    respuesta_correcta: "b"
  },
  {
    id: 457,
    enunciado: "En el desarrollo de aplicaciones web de servidor, ¿cuál es la diferencia operativa entre la gestión de sesiones basada en Cookies de Sesión clásicas frente a la autenticación basada en Tokens (Token-based auth)?",
    opciones: {
      a: "Las cookies de sesión guardan todo el historial clínico del paciente en el terminal del cliente.",
      b: "Las cookies de sesión requieren que el servidor mantenga un registro del estado de la sesión en su memoria o base de datos (con estado); la autenticación por tokens encapsula la información en el propio token del cliente, permitiendo un diseño sin estado (stateless) óptimo para escalar horizontalmente.",
      c: "Los tokens no permiten cifrar la información de tránsito mediante HTTPS.",
      d: "Las cookies solo funcionan en navegadores web de escritorio y los tokens solo en dispositivos móviles."
    },
    respuesta_correcta: "b"
  },
  {
    id: 458,
    enunciado: "Al utilizar herramientas de mapeo objeto-relacional (ORM) para interactuar con bases de datos relacionales, ¿en qué consiste la anomalía de rendimiento conocida como el problema de consulta N+1?",
    opciones: {
      a: "En que el sistema operativo se bloquea al recibir más de N peticiones concurrentes en el puerto SQL.",
      b: "En que la aplicación ejecuta una consulta inicial para obtener una lista de N registros y, posteriormente, realiza de forma ineficiente N consultas individuales adicionales para traer los datos relacionados de cada uno de ellos, degradando el rendimiento de la red.",
      c: "En un fallo de desbordamiento de búfer al superar el límite de claves foráneas de una tabla.",
      d: "En la duplicación automatizada de los índices primarios durante una transacción."
    },
    respuesta_correcta: "b"
  },
  {
    id: 459,
    enunciado: "El protocolo HTTP/2 introdujo mejoras sustanciales de rendimiento frente a la versión tradicional HTTP/1.1. ¿Cuál de las siguientes es una de sus características técnicas más revolucionarias?",
    opciones: {
      a: "El uso obligatorio de conexiones de fibra óptica monomodo punto a punto.",
      b: "La multiplexación completa, que permite enviar y recibir múltiples peticiones y respuestas de forma simultánea e independiente sobre una única conexión TCP, evitando el bloqueo de cabecera de línea.",
      c: "La eliminación del uso de cabeceras en los paquetes de datos para simplificar el tráfico.",
      d: "La obligatoriedad de codificar todo el contenido en archivos con formato JSON dinámico."
    },
    respuesta_correcta: "b"
  },
  {
    id: 460,
    enunciado: "Al configurar un balanceador de carga para distribuir el tráfico web de forma equitativa entre un grupo de servidores backend, ¿cómo actúa el algoritmo de balanceo conocido como 'Least Connections'?",
    opciones: {
      a: "Distribuye las peticiones entrantes de forma estrictamente secuencial y cíclica siguiendo una lista fija.",
      b: "Dirige la nueva petición entrante de la persona usuaria hacia el servidor que presenta el menor número de conexiones activas o sesiones simultáneas en ese preciso instante.",
      c: "Asigna las peticiones basándose en un cálculo hash derivado de la dirección IP de origen del cliente de forma permanente.",
      d: "Selecciona el servidor que tiene el disco duro con mayor espacio libre de almacenamiento."
    },
    respuesta_correcta: "b"
  },
  {
    id: 461,
    enunciado: "En la infraestructura de seguridad perimetral de un centro de datos, ¿cuál es la diferencia operativa fundamental entre un Cortafuegos de red tradicional (Network Firewall) y un Cortafuegos de Aplicaciones Web (WAF)?",
    opciones: {
      a: "El WAF solo funciona en modo pasivo y el cortafuegos tradicional actúa bloqueando puertos.",
      b: "El cortafuegos tradicional filtra el tráfico basándose en direcciones IP, protocolos y puertos (Capas 3 y 4 del modelo OSI); el WAF opera a nivel de aplicación (Capa 7), analizando el contenido de las peticiones HTTP/HTTPS para detectar y bloquear amenazas específicas como inyecciones SQL o XSS.",
      c: "El cortafuegos tradicional cifra de forma automática el disco duro de los servidores periféricos.",
      d: "El WAF reemplaza por completo el uso de certificados digitales SSL/TLS en la zona DMZ."
    },
    respuesta_correcta: "b"
  },
  {
    id: 462,
    enunciado: "Al evaluar arquitecturas de integración de sistemas, ¿cuál es una diferencia metodológica y técnica clave entre los servicios web basados en SOAP frente a los basados en REST?",
    opciones: {
      a: "SOAP es exclusivo para redes inalámbricas y REST para conexiones por cable estruturado.",
      b: "SOAP es un protocolo estricto basado de forma obligatoria en esquemas XML con un alto nivel de estandarización y seguridad integrada (WS-Security); REST es un estilo arquitectónico más flexible, centrado en recursos y optimizado para el uso de HTTP nativo y múltiples formatos de datos como JSON.",
      c: "REST no permite la implementación de mecanismos de autenticación cifrados en sus conexiones.",
      d: "SOAP utiliza únicamente transmisiones asíncronas no bloqueantes a través de UDP."
    },
    respuesta_correcta: "b"
  },
  {
    id: 463,
    enunciado: "Dentro de los principios de diseño de software orientado a objetos conocidos como SOLID, ¿qué postula formalmente el Principio de Inversión de Dependencias (Dependency Inversion Principle)?",
    opciones: {
      a: "Que los módulos de alto nivel no deben depender de los módulos de bajo nivel; ambos deben depender de abstracciones. Asimismo, las abstracciones no deben depender de los detalles, sino los detalles de las abstracciones.",
      b: "Que una clase debe tener una, y solo una, razón para cambiar a lo largo del ciclo de vida.",
      c: "Que las clases derivadas deben ser completamente sustituibles por sus clases base sin alterar el comportamiento.",
      d: "Que las interfaces de software deben ser lo más grandes y centralizadas posibles para unificar métodos."
    },
    respuesta_correcta: "a"
  },
  {
    id: 464,
    enunciado: "Al implementar la estrategia de control de versiones GitFlow en un equipo de desarrollo de software, ¿cuál es el propósito de la rama denominada 'develop'?",
    opciones: {
      a: "Almacenar exclusivamente el código binario compilado listo para desplegar en el servidor de producción final.",
      b: "Servir como la rama de integración central donde se consolidan todas las funciones y características completadas para las pruebas antes de preparar un lanzamiento oficial.",
      c: "Solucionar de forma urgente un error crítico detectado directamente en el entorno de producción (hotfix).",
      d: "Contener de forma exclusiva el código fuente inicial o histórico del proyecto sin modificaciones."
    },
    respuesta_correcta: "b"
  },
  {
    id: 465,
    enunciado: "Al configurar la infraestructura de red en un entorno de contenedores Docker distribuidos en varios servidores físicos o nodos diferentes, ¿qué driver de red nativo permite la comunicación segura entre contenedores saltando las fronteras del host sin necesidad de mapear puertos físicos?",
    opciones: {
      a: "Driver Bridge.",
      b: "Driver Host.",
      c: "Driver Overlay.",
      d: "Driver Macvlan."
    },
    respuesta_correcta: "c"
  },
  {
    id: 466,
    enunciado: "En las estrategias de despliegue continuo (CD), ¿en qué consiste exactamente la estrategia de despliegue conocida como 'Blue-Green Deployment'?",
    opciones: {
      a: "En actualizar de forma progresiva y escalonada un único entorno de producción reduciendo la capacidad del servidor de bases de datos temporalmente.",
      b: "En mantener dos entornos de producción idénticos (uno activo 'Blue' recibiendo tráfico y otro inactivo 'Green' donde se despliega la nueva versión); una vez validada la nueva versión en 'Green', el enrutador cambia el tráfico de inmediato hacia este último.",
      c: "En liberar las nuevas características exclusivamente para un grupo reducido y aleatorio de usuarios finales con fines estadísticos.",
      d: "En realizar un rollback automático borrando los archivos temporales si se supera el 80% de CPU."
    },
    respuesta_correcta: "b"
  },
  {
    id: 467,
    enunciado: "Dentro de los marcos normativos e infraestructuras de seguridad en redes corporativas, ¿cuáles son los tres componentes funcionales que definen al modelo o arquitectura conceptual AAA?",
    opciones: {
      a: "Atomicidad, Aislamiento y Autenticación.",
      b: "Autenticación, Autorización y Auditoría o Contabilización (Authentication, Authorization, Accounting).",
      c: "Algoritmos Simétricos, Algoritmos Asimétricos y Alertas perimetrales.",
      d: "Acceso local, Acceso remoto y Almacenamiento protegido."
    },
    respuesta_correcta: "b"
  },
  {
    id: 468,
    enunciado: "Un administrador de sistemas Linux recibe una alerta de disco duro lleno. Al ejecutar el comando 'df -h' observa que el volumen dispone de un 40% de espacio de almacenamiento libre en gigabytes, pero el sistema no permite crear ningún archivo nuevo. ¿A qué se debe esta anomalía operativa?",
    opciones: {
      a: "A que el parámetro de swap dinámico se ha bloqueado en el espacio de kernel.",
      b: "A un agotamiento completo de la tabla de inodos (Index Nodes) del sistema de archivos, impidiendo registrar metadatos de nuevos elementos a pesar de tener bloques de espacio físico libre.",
      c: "A que los archivos están cifrados mediante un algoritmo simétrico AES no autorizado.",
      d: "A un fallo físico permanente en la controladora de discos NVMe de la cabina de almacenamiento."
    },
    respuesta_correcta: "b"
  },
  {
    id: 469,
    enunciado: "Al implementar estrategias avanzadas de almacenamiento en caché en memoria intermedia (como Redis) para optimizar consultas de base de datos de alta frecuencia, ¿cómo actúa la directiva o política de desalojo conocida como LRU (Least Recently Used)?",
    opciones: {
      a: "Elimina de forma aleatoria cualquier clave del almacenamiento para liberar espacio.",
      b: "Expulsa en primer lugar los elementos que han sido accedidos con menor frecuencia a lo largo del tiempo acumulado.",
      c: "Elimina de forma automática el registro de datos que ha permanecido guardado durante más tiempo sin importar sus accesos.",
      d: "Elimina la clave o elemento que lleva más tiempo sin ser consultado o accedido por ninguna petición, asumiendo que es el menos relevante en el contexto actual."
    },
    respuesta_correcta: "d"
  },
  {
    id: 470,
    enunciado: "En la seguridad de aplicaciones web basadas en APIs que reciben peticiones desde diferentes dominios externos, ¿qué cabecera de respuesta HTTP es obligatoria para habilitar el mecanismo CORS (Cross-Origin Resource Sharing) y autorizar el acceso del cliente?",
    opciones: {
      a: "X-Frame-Options",
      b: "Access-Control-Allow-Origin",
      c: "Content-Security-Policy",
      d: "Strict-Transport-Security"
    },
    respuesta_correcta: "b"
  },
  {
    id: 471,
    enunciado: "En la metodología de desarrollo de software guiado por pruebas o TDD (Test-Driven Development), ¿cuál es la secuencia o ciclo de fases obligatoria que debe seguir de forma iterativa el programador?",
    opciones: {
      a: "1. Codificar la funcionalidad, 2. Diseñar las pruebas de caja negra, 3. Realizar el despliegue.",
      b: "1. Escribir una prueba que falle (Red), 2. Implementar el código mínimo para que la prueba pase (Green), 3. Refactorizar y optimizar el código manteniendo las pruebas estables (Refactor).",
      c: "1. Analizar requisitos, 2. Generar el diagrama MVC, 3. Ejecutar pruebas unitarias de regresión.",
      d: "1. Crear el esquema SQL de datos, 2. Validar las interfaces REST, 3. Documentar las excepciones de red."
    },
    respuesta_correcta: "b"
  },
  {
    id: 472,
    enunciado: "Al administrar la infraestructura de encaminamiento en redes WAN de gran escala o internet, ¿cuál es la clasificación y diferencia fundamental entre los protocolos OSPF y BGP?",
    opciones: {
      a: "OSPF es un protocolo de capa física y BGP opera exclusivamente en la capa de aplicación.",
      b: "OSPF es un Protocolo de Pasarela Interior (IGP) basado en el estado del enlace utilizado dentro de un mismo Sistema Autónomo; BGP es un Protocolo de Pasarela Exterior (EGP) basado en vector de rutas utilizado para interconectar diferentes Sistemas Autónomos.",
      c: "BGP es un protocolo propietario e inflexible diseñado por Microsoft y OSPF es un estándar de software libre.",
      d: "OSPF se restringe al uso de direcciones IPv4 fijas y BGP se creó de forma exclusiva para rangos IPv6 comprimidos."
    },
    respuesta_correcta: "b"
  },
  {
    id: 473,
    enunciado: "En un entorno de dominio de Active Directory con múltiples controladores de dominio distribuidos, ¿qué rol FSMO (Flexible Single Master Operations) se encarga de centralizar la sincronización de la hora en toda la red, procesar los cambios de contraseñas de cuentas y gestionar los bloqueos de cuentas de forma prioritaria?",
    opciones: {
      a: "Schema Master.",
      b: "RID Master.",
      c: "PDC Emulator (Emulador de Controlador de Dominio Principal).",
      d: "Infrastructure Master."
    },
    respuesta_correcta: "c"
  },
  {
    id: 474,
    enunciado: "En arquitecturas distribuidas basadas en microservicios, ¿cuál es el propósito técnico primordial de implementar el patrón de diseño conocido como 'Circuit Breaker' (Disyuntor)?",
    opciones: {
      a: "Cifrar el canal de tránsito de datos mediante claves asimétricas de hardware.",
      b: "Evitar fallos en cascada impidiendo que un microservicio intente realizar peticiones repetidas a otro servicio que se encuentra caído o experimentando alta latencia, devolviendo una respuesta de error controlada de forma inmediata.",
      c: "Duplicar la velocidad de transferencia de las APIs REST en entornos web JSON.",
      d: "Automatizar el particionamiento de la base de datos distribuida siguiendo el teorema de CAP."
    },
    respuesta_correcta: "b"
  },
  {
    id: 475,
    enunciado: "Al configurar los algoritmos de cifrado de una sesión TLS en un servidor web seguro, ¿qué propiedad garantiza el secreto perfecto hacia adelante o 'Perfect Forward Secrecy' (PFS)?",
    opciones: {
      a: "Que la clave privada a largo plazo del servidor se utiliza directamente para cifrar todos los datos de flujo de forma simétrica.",
      b: "Que se genera una clave de sesión única, efímera e independiente para cada conexión individual, garantizando que si un atacante compromete la clave privada del servidor en el futuro, no podrá descifrar las sesiones de tráfico históricas capturadas previamente.",
      c: "La imposibilidad de experimentar inyecciones SQL en las bases de datos de backend.",
      d: "La obligatoriedad de cambiar las contraseñas de todos los usuarios administradores del sistema cada 24 horas."
    },
    respuesta_correcta: "b"
  },
  {
    id: 476,
    enunciado: "El kernel de Linux expone el parámetro 'vm.swappiness' para ajustar la gestión de la memoria virtual. ¿Qué comportamiento adopta el sistema operativo si un administrador configura este parámetro con un valor cercano o igual a 0?",
    opciones: {
      a: "El sistema desactiva por completo la RAM física y trabaja de forma exclusiva sobre el disco.",
      b: "El kernel evitará de forma agresiva el uso del espacio de intercambio (Swap), manteniendo los datos e instrucciones en la memoria RAM física todo lo posible y usándola solo como último recurso para prevenir un escenario Out-Of-Memory (OOM).",
      c: "Forzar al procesador (CPU) a liberar de forma inmediata las hebras de ejecución secundarias.",
      d: "Provocar la supresión automática de los archivos .log de los servidores web."
    },
    respuesta_correcta: "b"
  },
  {
    id: 477,
    enunciado: "¿Cuál es la ventaja arquitectónica en el uso de recursos que ofrece la virtualización basada en contenedores (como LXC o Docker) frente a la virtualización tradicional basada en hipervisores (como VMware o Hyper-V)?",
    opciones: {
      a: "Los contenedores incluyen un kernel completo e independiente dentro de cada instancia aislada.",
      b: "Los contenedores comparten el mismo kernel del sistema operativo anfitrión (host), evitando la sobrecarga de emular hardware virtualizado y ejecutar múltiples sistemas operativos completos e independientes.",
      c: "Los contenedores eliminan la necesidad de utilizar interfaces de red y protocolos TCP/IP.",
      d: "Soportan de forma nativa la ejecución de microprocesadores analógicos de silicio."
    },
    respuesta_correcta: "b"
  },
  {
    id: 478,
    enunciado: "Dentro del marco de trabajo ágil Scrum, ¿cuáles son los tres artefactos formales unificados que sirven para dar transparencia y medir el progreso del desarrollo de software?",
    opciones: {
      a: "El Scrum Master, el Product Owner y el Developers Team.",
      b: "El Product Backlog, el Sprint Backlog y el Incremento (Increment).",
      c: "La Sprint Planning, el Daily Scrum y la Sprint Retrospective.",
      d: "El Diagrama de Gantt, los Casos de Uso y la Especificación de Requisitos de Software (ERS)."
    },
    respuesta_correcta: "b"
  },
  {
    id: 479,
    enunciado: "Al diseñar sistemas de gestión de accesos corporativos federados, ¿qué capa funcional aporta el estándar OIDC (OpenID Connect) cuando se implementa directamente por encima del marco OAuth 2.0?",
    opciones: {
      a: "Una capa estricta de base de datos distribuida NoSQL basada en objetos clave-valor.",
      b: "Mecanismos de control de ancho de banda físicos para conexiones de fibra óptica perimetrales.",
      c: "Una capa estricta de Autenticación e Identidad de usuarios basada en tokens de formato JWT, complementando las funciones nativas de autorización delegada que posee OAuth 2.0.",
      d: "La detección y bloqueo automatizado de vulnerabilidades catalogadas en el top 10 de OWASP."
    },
    respuesta_correcta: "c"
  },
  {
    id: 480,
    enunciado: "Al diseñar la comunicación síncrona de alto rendimiento entre microservicios internos en un centro de datos, ¿cuál es la ventaja técnica principal de utilizar gRPC frente a las llamadas REST clásicas basadas en HTTP/1.1 y JSON?",
    opciones: {
      a: "gRPC elimina la necesidad de utilizar interfaces programáticas basadas en código fuente.",
      b: "gRPC utiliza HTTP/2 de forma nativa para la multiplexación de peticiones y Protocol Buffers (Protobuf) para la serialización binaria de los datos, reduciendo la latencia.",
      c: "gRPC está diseñado de forma exclusiva para interactuar con bases de datos relacionales NoSQL.",
      d: "gRPC restringe el acceso de red impidiendo ataques de denegación de servicio por hardware."
    },
    respuesta_correcta: "b"
  },
  {
    id: 481,
    enunciado: "En el ámbito de DevOps y la gestión de infraestructuras en la nube, ¿qué característica define formalmente a un enfoque Declarativo de Infraestructura como Código (IaC), como el utilizado por Terraform, frente a un enfoque Imperativo?",
    opciones: {
      a: "El administrador debe programar paso a paso y de forma secuencial cada comando necesario para aprovisionar los recursos.",
      b: "El administrador define el estado final deseado de la infraestructura en los archivos de configuración, y la herramienta calcula las acciones para alcanzarlo de forma automatizada.",
      c: "Se requiere obligatoriamente la ejecución de scripts manuales en el nodo cliente.",
      d: "Impide que los servidores virtuales modifiquen su dirección IP privada una vez desplegados."
    },
    respuesta_correcta: "b"
  },
  {
    id: 482,
    enunciado: "¿Cuál es el axioma operativo principal que rige el modelo de seguridad perimetral conocido como Arquitectura Zero Trust (Confianza Cero)?",
    opciones: {
      a: "No confiar en nadie por defecto, ni dentro ni fuera del perímetro de la red; verificar siempre de forma explícita la identidad y el estado del dispositivo en cada petición.",
      b: "Eliminar por completo el uso de cortafuegos y delegar la seguridad en el aislamiento físico de los servidores.",
      c: "Otorgar acceso total ilimitado a cualquier usuario que se conecte mediante una VPN corporativa.",
      d: "Cifrar la base de datos local utilizando claves públicas de un solo uso."
    },
    respuesta_correcta: "a"
  },
  {
    id: 483,
    enunciado: "En los sistemas de análisis de datos masivos (Data Warehousing), ¿por qué las bases de datos columnares (OLAP) son preferibles frente a las relacionales de filas tradicionales (OLTP)?",
    opciones: {
      a: "Garantizan transacciones ACID más veloces en operaciones de inserción individual de registros.",
      b: "Permiten almacenar archivos multimedia pesados directamente en el esquema principal.",
      c: "Están optimizadas para leer de forma extremadamente eficiente grandes volúmenes de datos sobre un subconjunto específico de columnas, acelerando las funciones de agregación.",
      d: "No requieren el uso de memoria RAM en el servidor de consultas."
    },
    respuesta_correcta: "c"
  },
  {
    id: 484,
    enunciado: "Dentro de una arquitectura de microservicios, ¿cuál es la función principal de implementar una Malla de Servicios (Service Mesh) como Istio o Linkerd?",
    opciones: {
      a: "Centralizar la lógica de negocio y las consultas SQL de todos los contenedores de la red.",
      b: "Gestionar de forma transparente la comunicación entre servicios (descubrimiento, enrutamiento, mTLS, telemetría) mediante proxies sidecar acoplados a cada instancia.",
      c: "Sustituir el uso de orquestadores de contenedores como Kubernetes.",
      d: "Cifrar de forma simétrica los discos duros virtuales donde se almacenan las imágenes de Docker."
    },
    respuesta_correcta: "b"
  },
  {
    id: 485,
    enunciado: "En la administración de infraestructuras globales y sistemas de nombres de dominio, ¿cómo funciona el enrutamiento de red de tipo Anycast?",
    opciones: {
      a: "Asigna una dirección IP única y exclusiva en el mundo a un solo servidor físico central.",
      b: "Permite asignar la misma dirección IP a múltiples servidores distribuidos geográficamente, utilizando BGP para dirigir el tráfico del usuario al nodo más cercano.",
      c: "Fuerza la transmisión de todos los paquetes de datos utilizando exclusivamente protocolos de difusión (broadcast).",
      d: "Divide la carga de tráfico de manera equitativa alternando de forma estrictamente cíclica entre todos los hosts."
    },
    respuesta_correcta: "b"
  },
  {
    id: 486,
    enunciado: "Al modelar sistemas altamente concurrentes utilizando el patrón de persistencia Event Sourcing, el estado actual de una entidad de negocio se determina mediante:",
    opciones: {
      a: "La última fila actualizada en una tabla relacional mediante una sentencia UPDATE clásica.",
      b: "La reconstrucción secuencial a partir del historial completo de eventos inmutables almacenados en un registro de datos (event store).",
      c: "Un archivo JSON volátil alojado temporalmente en la memoria caché del balanceador de carga.",
      d: "La consulta directa a los archivos de registro (logs) del sistema operativo del servidor."
    },
    respuesta_correcta: "b"
  },
  {
    id: 487,
    enunciado: "Para robustecer la seguridad en flujos de autorización OAuth 2.0 en aplicaciones móviles o Single Page Applications (SPA), ¿por qué se exige la extensión PKCE (Proof Key for Code Exchange)?",
    opciones: {
      a: "Porque reemplaza por completo el uso de tokens JWT utilizando cifrado simétrico por hardware.",
      b: "Porque automatiza el cambio periódico de contraseñas de los usuarios del dominio.",
      c: "Porque introduce un secreto dinámico verificado en el servidor para mitigar el ataque de interceptación del código de autorización en clientes públicos.",
      d: "Porque restringe el acceso web únicamente a dispositivos con un chip TPM 2.0 integrado."
    },
    respuesta_correcta: "c"
  },
  {
    id: 488,
    enunciado: "La tecnología de contenedores en Linux se fundamenta en primitivas del kernel. ¿Qué función exacta cumplen los Namespaces (Espacios de nombres) en este contexto?",
    opciones: {
      a: "Aislar la visibilidad que tiene un grupo de procesos sobre recursos del sistema (como red, procesos PID, usuarios o sistemas de archivos).",
      b: "Limitar y medir el consumo de hardware como memoria RAM y ciclos de CPU de un contenedor.",
      c: "Cifrar las imágenes base del sistema operativo para evitar la ingeniería inversa.",
      d: "Sincronizar el reloj del hardware perimetral con los servidores NTP corporativos."
    },
    respuesta_correcta: "a"
  },
  {
    id: 489,
    enunciado: "Al desarrollar APIs siguiendo el patrón de diseño CQRS (Command Query Responsibility Segregation), el principio fundamental consiste en:",
    opciones: {
      a: "Obligar a que todas las funciones de software se ejecuten de manera estrictamente síncrona.",
      b: "Separar de forma absoluta las operaciones de modificación de datos (Commands) de las operaciones de lectura de datos (Queries), pudiendo usar modelos independientes.",
      c: "Centralizar toda la lógica del frontend y el backend dentro del mismo servidor web de Nginx.",
      d: "Desactivar de forma temporal los índices de las tablas SQL para acelerar las búsquedas."
    },
    respuesta_correcta: "b"
  },
  {
    id: 490,
    enunciado: "En las estrategias modernas de entrega de software (Continuous Delivery), ¿qué caracteriza a un despliegue de tipo Canary (Canary Deployment)?",
    opciones: {
      a: "Actualizar todos los servidores de producción de manera simultánea durante el horario nocturno.",
      b: "Mantener un servidor espejo inactivo que solo almacena copias de seguridad de la base de datos.",
      c: "Desplegar la nueva versión del software inicialmente para un porcentaje muy reducido de usuarios reales para validar estabilidad antes de expandirlo.",
      d: "Revertir los cambios automáticamente si la CPU supera un pico de uso aleatorio."
    },
    respuesta_correcta: "c"
  },
  {
    id: 491,
    enunciado: "En el tratamiento avanzado y confidencial de datos de salud, ¿cuál es la principal ventaja operativa que ofrece el uso de la Criptografía Homomórfica?",
    opciones: {
      a: "Permite realizar operaciones matemáticas y procesar los datos directamente en su estado cifrado sin necesidad de descifrarlos previamente.",
      b: "Garantiza que el tamaño de los datos cifrados se reduzca a la mitad, optimizando el ancho de banda.",
      c: "Elimina la necesidad de utilizar claves públicas o privadas en los procesos asimétricos.",
      d: "Impide de forma absoluta los ataques de denegación de servicio distribuidos (DDoS)."
    },
    respuesta_correcta: "a"
  },
  {
    id: 492,
    enunciado: "Dentro del top 10 de riesgos de seguridad en aplicaciones web según OWASP, ¿en qué consiste la vulnerabilidad conocida como SSRF (Server-Side Request Forgery)?",
    opciones: {
      a: "En secuestrar la sesión activa de un administrador mediante scripts inyectados en su navegador.",
      b: "En inducir al servidor web vulnerable a realizar peticiones HTTP arbitrarias hacia recursos internos o externos a los que el atacante no tiene acceso directo.",
      c: "En saturar el búfer de memoria de la CPU enviando paquetes con cabeceras de red malformadas.",
      d: "En adivinar contraseñas débiles mediante ataques de fuerza bruta estructurados."
    },
    respuesta_correcta: "b"
  },
  {
    id: 493,
    enunciado: "Al diseñar una arquitectura de software siguiendo el modelo Hexagonal (o patrón de Puertos y Adaptadores), el principal objetivo técnico es:",
    opciones: {
      a: "Aislar el núcleo de lógica de negocio (Core) de las tecnologías externas (bases de datos, frameworks web, interfaces), interactuando solo mediante interfaces.",
      b: "Garantizar que todas las tablas de la base de datos tengan exactamente seis claves foráneas asociadas.",
      c: "Obligar al servidor de aplicaciones a utilizar únicamente conexiones de red simétricas en malla.",
      d: "Desplegar el software exclusivamente en sistemas en la nube de tipo SaaS."
    },
    respuesta_correcta: "a"
  },
  {
    id: 494,
    enunciado: "En la ingeniería de fiabilidad de sitios web (SRE), ¿cuál es la finalidad primordial de implementar la metodología de Chaos Engineering (Ingeniería del Caos)?",
    opciones: {
      a: "Introducir errores de sintaxis en el código fuente de producción de forma aleatoria para probar a los desarrolladores.",
      b: "Inyectar fallos de forma controlada en entornos de producción (como caídas de servidores o latencia) para validar y mejorar la resiliencia del sistema.",
      c: "Desactivar los sistemas de monitorización activa para ahorrar recursos de red durante picos de carga.",
      d: "Eliminar el control de versiones en los despliegues de infraestructura como código."
    },
    respuesta_correcta: "b"
  },
  {
    id: 495,
    enunciado: "Al implementar políticas de limitación de tasa (Rate Limiting) en un API Gateway corporativo para prevenir abusos y ataques de fuerza bruta, ¿cómo actúa el algoritmo Token Bucket?",
    opciones: {
      a: "Asigna un único token fijo por dirección IP que se destruye tras el primer acceso diario.",
      b: "El cubo acumula tokens a un ritmo constante hasta un límite máximo; cada petición consume un token, y si el cubo está vacío, la petición se rechaza inmediatamente.",
      c: "Bloquea de forma permanente a cualquier usuario que intente realizar más de diez peticiones síncronas concurrentes.",
      d: "Alterna de forma cíclica el tráfico entre los servidores de la red local basándose en el tamaño de las cabeceras HTTP."
    },
    respuesta_correcta: "b"
  },
  {
    id: 496,
    enunciado: "El estándar criptográfico TLS 1.3 introdujo mejoras drásticas en la velocidad y la seguridad de las conexiones HTTPS frente a TLS 1.2. ¿Cuál fue uno de los principales cambios arquitectónicos?",
    opciones: {
      a: "La obligatoriedad de utilizar claves simétricas distribuidas de forma manual por el administrador de red.",
      b: "La reducción del protocolo de enlace (Handshake) a un solo viaje de ida y vuelta (1-RTT) y la eliminación de algoritmos de cifrado obsoletos e inseguros.",
      c: "La supresión por completo del uso de certificados digitales de clave pública de la entidad emisora.",
      d: "Forzar a que todo el tráfico web se transmita exclusivamente utilizando tramas de difusión UDP."
    },
    respuesta_correcta: "b"
  },
  {
    id: 497,
    enunciado: "En el desarrollo de servidores de red de alto rendimiento en Linux, ¿cuál es la ventaja operativa principal de utilizar la llamada al sistema epoll en lugar de los métodos tradicionales select o poll?",
    opciones: {
      a: "epoll cifra los sockets de red utilizando un algoritmo simétrico AES integrado en el kernel.",
      b: "epoll tiene una complejidad O(1) respecto al número de descriptores de archivo activos, ya que devuelve únicamente los sockets listos para E/S, evitando recorrer secuencialmente toda la lista.",
      c: "epoll restringe el acceso web impidiendo inyecciones SQL a nivel de capa física.",
      d: "epoll duplica automáticamente la memoria RAM asignada al proceso del servidor web."
    },
    respuesta_correcta: "b"
  },
  {
    id: 498,
    enunciado: "Al evaluar arquitecturas de computación en la nube bajo el enfoque sin servidor o Serverless (FaaS - Function as a Service), ¿qué implica el fenómeno conocido como 'Arranque en frío' (Cold Start)?",
    opciones: {
      a: "El tiempo de inactividad que experimenta un servidor físico debido a picos de temperatura baja en el centro de datos.",
      b: "La latencia inicial que ocurre cuando se invoca una función que no tiene una instancia de contenedor activa y el proveedor debe aprovisionar y arrancar el entorno desde cero.",
      c: "El bloqueo permanente de la base de datos distribuida tras un fallo eléctrico en el nodo maestro.",
      d: "El proceso de revertir el código fuente a una versión estable anterior almacenada en Git."
    },
    respuesta_correcta: "b"
  },
  {
    id: 499,
    enunciado: "En la escalabilidad horizontal de bases de datos distribuidas de gran volumen, ¿en qué consiste la técnica de particionamiento conocida como Sharding?",
    opciones: {
      a: "En realizar copias de seguridad incrementales cada hora en discos ópticos dentro de la zona DMZ.",
      b: "En dividir un conjunto de datos masivo en fragmentos lógicos independientes (shards) y distribuirlos a lo largo de múltiples servidores físicos o nodos, donde cada uno almacena solo una parte del total.",
      c: "En obligar a que todas las tablas del esquema mantengan un esquema rígido e inalterable basado exclusivamente en cadenas de texto.",
      d: "En monitorizar de forma pasiva el tráfico de red utilizando agentes SNMP jerárquicos."
    },
    respuesta_correcta: "b"
  },
  {
    id: 500,
    enunciado: "Para proteger los respaldos de datos críticos frente a ataques de malware de tipo Ransomware que intentan destruir o cifrar las copias de seguridad de la organización, ¿qué estrategia de almacenamiento es la más efectiva?",
    opciones: {
      a: "Guardar los respaldos en el mismo disco local del servidor de producción para agilizar los accesos.",
      b: "Utilizar repositorios de almacenamiento inmutable con políticas WORM (Write Once, Read Many), que impiden que los archivos de backup sean modificados, sobrescritos o eliminados durante un periodo de retención fijado.",
      c: "Ofuscar los nombres de las extensiones de los archivos de registro utilizando codificaciones en Base64Url.",
      d: "Desactivar temporalmente las políticas de directivas de grupo locales (GPO) del controlador de dominio."
    },
    respuesta_correcta: "b"
  }
];