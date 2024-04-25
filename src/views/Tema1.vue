<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 1
      h1 Potencial hídrico

    .row.align-items-center.justify-content-center.mb-5
      p.mb-3 El agua posee un carácter multisectorial, la diversidad de usos la convierte en un recurso limitado,
        |  haciendo indispensable el uso eficiente del mismo, en el sector agrícola se han realizado adelantos
        | tecnológicos que facilitan el manejo del recurso hídrico en el cultivo, generando alternativas de riego,
        | aplicación de fertilizantes, control de drenaje del terreno y supervisión del estado de la planta,
        | resaltando la importancia del agua.

    .row.justify-content-center.align-items-center
      .titulo-sexto.color-acento-contenido.mb-5
        h5 Figura 1.
        span  Conducción de animales  
        
      .tarjeta.tarjeta--gris.p-4
        .row.justify-content-center.align-items-center.p-3  
          .col-lg-5(data-aos="fade-right") 
            img(src='@/assets/curso/images/tema1/img_1.png'  alt='')

          .col-lg-7(data-aos="fade-left")
            ul.lista-ul
              li
                i.lista-ul__vineta
                | Sustancia cuya molécula se encuentra compuesta por dos átomos de hidrógeno y uno de oxígeno, los cuales se unen mediante enlace covalente.
              li
                i.lista-ul__vineta
                | Normalmente el término agua hace referencia a la sustancia en estado líquido, no obstante, la misma se puede encontrar en estado sólido (hielo) y gaseoso (vapor).
              li
                i.lista-ul__vineta
                | El agua cubre el 71 % de la superficie terrestre, localizándose principalmente en los océanos, donde se encuentra el 96.55% del agua total.
              li
                i.lista-ul__vineta
                | Los glaciares y casquetes polares poseen el 1.74 %
              li
                i.lista-ul__vineta
                | Los depósitos subterráneos (acuíferos), los permafrost y los glaciares continentales suponen el 1.72 %,
              li
                i.lista-ul__vineta
                | El 0.04% se distribuye en orden decreciente entre lagos, humedad del suelo, atmósfera, embalses, ríos y seres vivos.
              li
                i.lista-ul__vineta
                | El agua juega un papel fundamental para el ser humano, los animales y el sistema agrícola, pues sin importar su origen (lluvia o fuentes naturales), requiere de un uso y manejo sostenible del recurso, pues la escasez del recurso, genera problemas de salud, migración y conflictos sociales.


    .row.align-items-center.justify-content-star.mb-5.ps-2(data-aos="zoom-in-down")
      .col-lg-10.bg-color-1.px-5.py-2
        .h3.mx-2.mb-0 Condiciones del terreno

    p.mb-3 Para la siembra de un cultivo, se requiere de algunos estudios, cálculos, entre otros que permitan determinar las condiciones adecuadas del terreno para su establecimiento, allí encontramos: planimetría, altimetría, diseño de drenajes y diseño de áreas de siembra. En el siguiente recurso se puede profundizar en estos aspectos: 

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .tarjeta.bg_grad-01.p-3.mb-5(data-aos="zoom-in-up")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-star.p-3
              .col-12.col-lg-4
                h4 Planimetría del terreno
                p.mb-3 Es la manera gráfica de identificar la información de un terreno, para lo cual se elabora un plano antes de establecer el cultivo, donde se establezca la cantidad de área del terreno, según su uso, además de linderos, fuentes hídricas, zonas de reserva, carreteras, redes eléctricas, construcciones, entre otros.

                .jumbotron
                  .row.justify-content-center.align-items-center.p-2
                    .col-3.col-lg-3
                      img(src="@/assets/curso/images/tema1/ico_1.svg")
                    .col-lg-9
                      h5.mb-0 Casas
                  .row.justify-content-center.align-items-center.p-2
                    .col-3.col-lg-3
                      img(src="@/assets/curso/images/tema1/ico_2.svg")
                    .col-lg-9
                      h5.mb-0 Ríos
                  .row.justify-content-center.align-items-center.p-2
                    .col-3.col-lg-3
                      img(src="@/assets/curso/images/tema1/ico_3.svg")
                    .col-lg-9
                      h5.mb-0 Cercas

              .col-12.col-lg-6
                img.mt-3(src="@/assets/curso/images/tema1/img_2.png").mb-3
           
            .row.justify-content-center.align-items-star.p-3
              .col-12.col-lg-10
                p.mb-5 Para poder realizar actividades de planimetría se requiere de equipo con tecnología especializada como es el caso del teodolito y GPS, además se requiere de elementos de interpretación  como:
                img(src="@/assets/curso/images/tema1/fig_1_1.svg").mb-3
           
            .row.justify-content-center.align-items-star.p-3
              .col-12.col-lg-4
                h4 Altimetría del terreno
                p.mb-3 Resulta importante, que una vez conocido el perímetro y  el área de la superficie se determine las variaciones de nivel del suelo, por lo cual se debe tener en cuenta las curvas de nivel, que son líneas que unen a todos los puntos que están a la misma altura en un terreno, por lo cual delimitan las variaciones del nivel del suelo, siendo indispensable para el diseño del sistema de riego y drenaje de un cultivo.
              .col-12.col-lg-6
                img(src="@/assets/curso/images/tema1/img_3.svg").mb-3
           
            .row.justify-content-center.align-items-star.p-3
              .col-12.col-lg-4
                h4 Diseño de áreas de siembra
                p.mb-3 El diseño de áreas de siembra permite el establecimiento de plantaciones, diseñan la red de canales de riego o drenaje, vías, el tamaño y forma de los lotes, entre otros.
              .col-12.col-lg-6
                img(src="@/assets/curso/images/tema1/img_4.png").mb-3

            .row.justify-content-center.align-items-star.p-3
              .col-12.col-lg-10
                p.mb-3 Un plano de diseño de siembra establece y delimita los lotes en los cuales se realizará la plantación, lo cual se conoce como nomenclatura de lotes, la cual incluye:
                .row.justify-content-center.mb-0
                  .col-8.col-lg-3.mb-3(data-aos="fade-right")
                    .jumbotron-1.p-2.mb-1.h-100
                      .row.justify-content-center.align-items-center
                        .col-5.col-lg-4.lg-0
                          img.mt-3(src='@/assets/curso/images/tema1/ico_4.svg' alt='AvatarTop')
                        .col-6.col-lg-8.lg-0
                          p.mb-0 Año de siembra.

                  .col-8.col-lg-3.mb-3(data-aos="fade-right")
                    .jumbotron-1.p-2.mb-1.h-100
                      .row.justify-content-center.align-items-center
                        .col-5.col-lg-4.lg-0
                          img(src='@/assets/curso/images/tema1/ico_5.svg' alt='AvatarTop')
                        .col-6.col-lg-8.lg-0
                          p.mb-0.mt-2  Tipo de material genético.

                  .col-8.col-lg-3.mb-3(data-aos="fade-right")
                    .jumbotron-1.p-2.mb-1.h-100
                      .row.justify-content-center.align-items-center
                        .col-5.col-lg-4.lg-0
                          img(src='@/assets/curso/images/tema1/ico_6.svg' alt='AvatarTop')
                        .col-6.col-lg-8.lg-0
                          p.mb-0.mt-2  Área del lote en hectáreas.

                .row.justify-content-center.mb-4
                  .col-8.col-lg-5.mb-3(data-aos="fade-right")
                    .jumbotron-1.p-2.mb-0.h-100
                      .row.justify-content-center.align-items-center
                        .col-5.col-lg-3.lg-0
                          img(src='@/assets/curso/images/tema1/ico_7.svg' alt='AvatarTop')
                        .col-6.col-lg-8.lg-0
                          p.mb-0.mt-2  Número de especies sembradas.

                  .col-8.col-lg-3.mb-3(data-aos="fade-right")
                    .jumbotron-1.p-2.mb-1.h-100
                      .row.justify-content-center.align-items-center
                        .col-5.col-lg-4.lg-0
                          img(src='@/assets/curso/images/tema1/ico_8.svg' alt='AvatarTop')
                        .col-6.col-lg-8
                          p.mb-0 Fecha de siembra.
            .row.justify-content-center.align-items-star.p-3
              .col-12.col-lg-12
                h4.mb-3 Características del suelo
                p.mb-3 El suelo está compuesto por:
                  .row.justify-content-center.align-items-star
                    .col-12.col-lg-12
                      img(src="@/assets/curso/images/tema1/fig_3.svg").mb-3
                    
            .row.justify-content-center.align-items-star.p-3
              .col-12.col-lg-10
                h4 Características del suelo
                .row.justify-content-center.align-items-star.p-3
                  p.mb-3 <b style='color:#0B481E'>Morfológicas  </b>   
                  .row.justify-content-center.align-items-center.mb-4
                    .col-lg-12(data-aos="fade-right")
                      .jumbotron-2.px-3.mb-3(data-aos="fade-right")
                        .row.justify-content-center.align-items-center
                          .col-8.col-lg-2.lg-0
                            img.mt-3(src='@/assets/curso/images/tema1/img_5.png' alt='AvatarTop').mb-3
                          .col-10.col-lg-10.lg-0
                            p.mb-2 <b style='color:#0B481E'>TEXTURA</b>  
                            p.mb-0 Se encarga de dar propiedades particulares al suelo, puede ser arenas, limos y arcillas, depende del tamaño de la partícula en la porción de suelo.

                      .jumbotron-2.px-3.mb-3(data-aos="fade-right")
                        .row.justify-content-center.align-items-center
                          .col-8.col-lg-2.lg-0
                            img.mt-3(src='@/assets/curso/images/tema1/img_6.svg' alt='AvatarTop').mb-3
                          .col-10.col-lg-10.lg-0
                            p.mb-2 <b style='color:#0B481E'>ESTRUCTURA </b>  
                            p.mb-0  De gran importancia en la permeabilidad del suelo, resistencia a la erosión y facilidad de trabajo, por lo cual puede ser laminar, prismática, columnar, granular y amorfa.

                      .jumbotron-2.px-3.mb-3(data-aos="fade-right")
                        .row.justify-content-center.align-items-center
                          .col-8.col-lg-2.lg-0
                            img.mt-3(src='@/assets/curso/images/tema1/img_7.png' alt='AvatarTop').mb-3
                          .col-10.col-lg-10.lg-0
                            p.mb-2 <b style='color:#0B481E'>COLOR</b> 
                            p.mb-0 En términos generales, el color negro indica alto contenido de materia orgánica, el color rojo indica abundancia de compuestos de hierro y con buen drenaje, el color gris  con poco drenaje.

            .row.justify-content-center.align-items-star.p-3
              .col-12.col-lg-10
                h4 Características del suelo
                p.mb-3 <b style='color:#0B481E'>Físicas</b>   
                .row.justify-content-center.align-items-stretch.mb-4
                  .col-lg-4.lg-0.mb-3
                    .jumbotron-3-1.p-4.mb-3(data-aos="fade-right")
                      .row.justify-content-center.align-items-star
                        .col-8.col-lg-8.lg-0
                          img(src='@/assets/curso/images/tema1/img_8.svg' alt='AvatarTop').mb-3
                      .row.justify-content-center.align-items-center
                        .col-12.col-lg-12.lg-0
                          p.mb-2.text-center <b style='color:#0B481E'>PROFUNDIDAD </b>  
                          p.mb-3 Este factor puede favorecer o perjudicar el crecimiento de las raíces, pues entre más profundo más probabilidad para que la raíz busque agua y nutrientes. Encontramos horizonte A, horizonte B y horizonte C.
                  .col-lg-4.lg-0.mb-3
                    .jumbotron-3-1.p-4.mb-3(data-aos="fade-right")
                      .row.justify-content-center.align-items-center
                        .col-8.col-lg-8.lg-0
                          img(src='@/assets/curso/images/tema1/img_9.svg' alt='AvatarTop').mb-4
                      .row.justify-content-center.align-items-center
                        .col-12.col-lg-12.lg-0
                          p.mb-3.text-center  <b style='color:#0B481E'>PERMEABILIDAD</b>  
                          p.mb-5  Facilidad de circulación del agua y aire en el suelo, lo cual depende de la cantidad y tamaño de los poros existentes.
                  .col-lg-4.lg-0
                    .jumbotron-3-1.p-4.mb-3(data-aos="fade-right")
                      .row.justify-content-center.align-items-center
                        .col-8.col-lg-8.lg-0
                          img(src='@/assets/curso/images/tema1/img_10.svg' alt='AvatarTop').mb-2
                      .row.justify-content-center.align-items-center
                        .col-12.col-lg-12.lg-0
                          p.mb-2.text-center <b style='color:#0B481E'>DRENAJE</b> 
                          p.mb-0 Capacidad que tiene el suelo de liberar el exceso de agua, a nivel interno es la velocidad con la que pasa el agua por el perfil del suelo, mientras a nivel externo, es el movimiento del agua en la superficie, la cual depende de la topografía del terreno.


            .row.justify-content-center.align-items-star.p-3
              .col-12.col-lg-10
                h4.mb-3 Características del suelo
                  p.my-3 <b style='color:#0B481E'>Químicas</b>   
                  .row.justify-content-center.align-items-stretch.mb-3
                    .col-lg-6.lg-0
                      .jumbotron-3.p-3.mb-3.h-100(data-aos="fade-right")
                        .row.justify-content-center.align-items-star
                          .col-8.col-lg-3.lg-0
                            img(src='@/assets/curso/images/tema1/img_11.png' alt='AvatarTop').mb-3
                          .col-10.col-lg-9.lg-0
                            p.mb-2 <b style='color:#0B481E'>ACIDEZ</b>  
                            p.mb-0 Para determinar la acidez de un suelo se expresa en pH, siendo 0 a 6.5 ácido, 7 neutro y 7.5 a 14 alcalino, y cuando se debe corregir se aplican enmiendas capaces de neutralizar.
                    .col-lg-6.lg-0
                      .jumbotron-4.p-3.mb-3.h-100(data-aos="fade-right")
                        .row.justify-content-center.align-items-star
                          .col-8.col-lg-3.lg-0
                            img(src='@/assets/curso/images/tema1/img_12.png' alt='AvatarTop').mb-3
                          .col-10.col-lg-9.lg-0
                            p.mb-3 <b style='color:#0B481E'>FERTILIDAD</b>  
                            p.mb-5 Hace referencia a la cantidad y calidad de los elementos de tipo nutricional para la planta.
                  .row.justify-content-center.align-items-stretch.mb-3   
                    p.mb-3 <b style='color:#0B481E'> Biológicas</b>  
                    .row.justify-content-center.mb-4
                      .col-lg-6.lg-0
                        .jumbotron-3.p-3.mb-3.h-100(data-aos="fade-right")
                          .row.justify-content-center.align-items-star
                            .col-8.col-lg-3.lg-0
                              img(src='@/assets/curso/images/tema1/img_13.png' alt='AvatarTop').mb-3
                            .col-10.col-lg-9.lg-0
                              p.mb-0 El suelo presenta un componente orgánico, el cual se conforma de organismos y microorganismos vivos, muertos y en estado de descomposición.
                      .col-lg-6.lg-0
                        .jumbotron-4.p-3.mb-3.h-100(data-aos="fade-right")
                          .row.justify-content-center.align-items-star
                            .col-8.col-lg-3.lg-0
                              img(src='@/assets/curso/images/tema1/img_14.png' alt='AvatarTop').mb-3
                            .col-10.col-lg-9.lg-0
                              p.mb-5 Genética del material de siembra.
              
    Separador

    #t_1_1.titulo-segundo
      .h2 1.1 Condiciones ambientales

    p.mb-3 La mayor importancia para los productores agrícolas son los factores del medio ambiente; estos, se presentan y manifiestan en épocas, fechas determinadas, y lugares diversos. Tanto para los cultivos tradicionales, como para las plantas de cualquier tipo que se cultiven bajo techo o, estructura de invernadero. En el siguiente video se pueden conocer estos factores: 

    figure.mb-5(data-aos="fade-right")
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Pe689Y5Mcu8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    p.mb-3 Requiere de algunas actividades de labranza que involucra:

    .row.justify-content-center.align-items-center.mb-5 
      .jumbotron-14.px-3.mb-3
        .row.justify-content-center.align-items-center.mb-3  
          .col-12.col-lg-3
            img.mt-3(src='@/assets/curso/images/tema1/img_15_2.png').mb-1
          .col-lg-9
            p.mb-0 <b>Control de malezas:</b> es necesario despejar por completo el terreno para la preparación, tratado y posterior siembra, estas actividades dependen del origen del terreno (rastrojo grueso o mediano, ganadería, cultivos semestrales), por lo cual incluye equipos especiales que permitan realizar la limpieza adecuada, aunque en algunos casos se requiere de ultimación de control químico de malezas, cuya prescripción está dada por personal especializado en el área.

      .jumbotron-14.px-3.mb-3
        .row.justify-content-center.align-items-center.mb-3  
          .col-12.col-lg-3
            img.mt-3(src='@/assets/curso/images/tema1/img_16_2.png').mb-1
          .col-lg-9
            p.mb-0 <b>Control de plagas:</b>  es importante identificar las posibles plagas que pueden afectar el cultivo, e identificar las condiciones para su desarrollo y de este modo poder inhibir los escenarios propicios que puedan afectar la plantación. Para contrarrestar este fenómeno se puede utilizar productos químicos o naturales, que estén supervisados por personal idóneo de tal modo que no se afecte el desarrollo adecuado de la plantación.

      .jumbotron-14.px-3.mb-3
        .row.justify-content-center.align-items-center.mb-3  
          .col-12.col-lg-3
            img.mt-3(src='@/assets/curso/images/tema1/img_17_2.png').mb-1
          .col-lg-9
            p.mb-0 <b>Humedad:</b>  los terrenos son preparados cuando han adquirido cierto grado de humedad que permita el desarrollo de actividades de labranza.

      .jumbotron-14.px-3.mb-3
        .row.justify-content-center.align-items-center.mb-3  
          .col-12.col-lg-3
            img.mt-3(src='@/assets/curso/images/tema1/img_18_2.png').mb-1
          .col-lg-9
            p.mb-0 <b>Compactación:</b> este fenómeno restringe el intercambio gaseoso, el drenaje y desarrollo de las raíces, por ende indispensable realizar labores de remoción del suelo que permitan mejorar sus condiciones.
  
    
    .row.align-items-center.justify-content-star.mb-5.ps-2(data-aos="zoom-in-down")
      .col-lg-10.bg-color-1.px-3.py-2
        .h3.mx-5.mb-0 Zonas de vida


    p.mb-5 Las zonas de vida son regiones biogeográficas que están delimitadas por parámetros climáticos (temperatura y precipitación), las cuales establecen características específicas para el crecimiento y desarrollo de la vegetación, jugando un papel fundamental en la protección del suelo, así como la regulación del caudal de las fuentes hídricas, es por ello que la planificación adecuada del establecimiento de las especies vegetales, es imprescindible para que no solo se genere un desarrollo y/o beneficio para el hombre, sino que también se contribuya al cuidado del entorno.  En la siguiente galería se pueden conocer las diferentes zonas de vida: 

    .row.justify-content-center.align-items-center.my-3
      .col-12.col-lg-12
        SlyderF.slyder-color.mb-5(columnas="col-lg-12 col-xl-12")(data-aos="zoom-in-down")
          .row.justify-content-center(data-aos="fade-up-right")
            .col-lg-6.mb-3
              .crd_hover_txt
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/images/tema1/img_tj1.png")
                .crd_hover_txt--body.text-center
                  h3.mb-0 <b>Bosque seco tropical</b>
            .col-lg-6.mb-3
              .crd_hover_txt
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/images/tema1/img_tj2.png")
                .crd_hover_txt--body.text-center
                  h3.mb-0 <b>Bosque húmedo tropical</b>
          .row.justify-content-center
            .col-lg-6.mb-3
              .crd_hover_txt
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/images/tema1/img_tj3.png")
                .crd_hover_txt--body.text-center
                  h3.mb-0 <b>Bosque húmedo premontano</b>

            .col-lg-6.mb-3
              .crd_hover_txt
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/images/tema1/img_tj1.png")
                .crd_hover_txt--body.text-center
                  h3.mb-0 <b>Bosque seco montano bajo</b>
          .row.justify-content-center
            .col-lg-6.mb-3
              .crd_hover_txt
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/images/tema1/img_tj2.png")
                .crd_hover_txt--body.text-center
                  h3.mb-0 <b>Bosque húmedo montano</b>
            .col-lg-6
              .crd_hover_txt
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/images/tema1/img_tj6.png")
                .crd_hover_txt--body.text-center
                  h3.mb-0 <b>Páramo</b>

          
      
    .row.align-items-center.justify-content-star.mb-5.ps-2(data-aos="zoom-in-down")
      .col-lg-10.bg-color-1.px-3.py-3
        .h3.mx-5.mb-0 Monitoreo de las condiciones ambientales

    p.mb-3 Conocer las condiciones ambientales, permitirá realizar un manejo adecuado del cultivo, ya que permite evitar pérdidas, mejorar las condiciones para la producción agrícola, llevar un calendario de las actividades de producción (siembra, desarrollo, cosecha) optimizar los recursos (aguas, nutrientes, insecticidas, fungicidas, entre otros) realizar un manejo adecuado de plagas y enfermedades y de este modo comprender las limitaciones o condiciones óptimas para el crecimiento y desarrollo de la planta.


    Separador

    #t_1_2.titulo-segundo
      .h2 1.2  Manejo de semillas y material de propagación

    .jumbotron-5.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items-stretch.mb-4
        .col-6.col-lg-4.lg-0
          img.mt-3(src='@/assets/curso/images/tema1/img_19.svg')
        .col-lg-8.lg-0
          p.mt-5 La semilla es una parte de la planta con flores, que habitualmente se encuentra dentro del fruto, en cuyo interior se encuentra el embrión, el cual bajo unas condiciones adecuadas da lugar a una nueva planta. Está formada por tres partes, siendo estas, <b style='color:#0B481E'>el embrión, los tejidos de almacenamiento y las cubiertas protectoras; a su vez la germinación se da por absorción de agua (remojo), la cual causa el hinchamiento de la misma y finalmente se da ruptura de la cubierta protectora,</b> seguido se da el inicio a la actividad enzimática y el metabolismo respiratorio, con la asimilación de las reservas que estimulan el embrión, terminando con el crecimiento, evidenciándose de esta manera que emerge la raíz y posteriormente el tallo. Para que dichas etapas sucedan de una manera exitosa se requiere que en el proceso de germinación se seleccione un buen sustrato y manejen adecuadamente la humedad, el oxígeno y la temperatura.

    p.mb-5 Existe variedad de semillas, las cuales cumplen distintas funciones y usos, a continuación, se presentan como:

    h3.mb-5.text-center #[span.color-text Tipos de Semillas]

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-down")
      .col-10.col-lg-3.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/images/tema1/tj1_1.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              p.text-center.mb-0 <b>Nativas:</b> hace referencia a aquellas que tiene su origen en la misma región donde se cultivan.
      .col-10.col-lg-3.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/images/tema1/tj2_2.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              p.text-center.mb-0 <b>Mejoradas:</b> son aquellas semillas que han pasado por procesos y técnicas  (polinización controlada), con el fin de perfeccionar determinadas características (resistencia a enfermedades y plagas, alta productividad, precocidad, fácil adaptación a otras regiones).

      .col-10.col-lg-3.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/images/tema1/tj3_3.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              p.text-center.mb-0 <b>Hibridas:</b> semillas que resultan de cruzar dos variedades puras distintas; las encontramos hibridas de crecimiento determinado (su tallo delimita la formación de nudos y altura de planta), e hibridas de crecimiento libre (la producción de nudos continua por encima del tallo y la altura aumenta).
      .col-10.col-lg-3.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/images/tema1/tj4_4.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              p.text-center.mb-0 <b>Criollas:</b> son aquellas que han logrado adaptarse a unas determinadas condiciones del entorno, de modo natural o por intervención antrópica.

    .row.align-items-center.justify-content-star.mb-5.ps-2(data-aos="zoom-in-down")
      .col-lg-10.bg-color-1.px-3.py-2
        .h3.mx-5.mb-0 Tratamientos de la semilla antes de la siembra


    .row.align-items-center.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right") 
        p.mb-3 Para obtener los beneficios que acarrea el establecimiento de coberturas vegetales, se debe garantizar una germinación rápida y uniforme de las semillas, pues en algunos casos las semillas de especies arbóreas germinan rápidamente cuando se someten a ciertas condiciones de humedad y temperatura, sin embargo, las semillas de otras especies presentan cierto grado de latencia, razón por la cual deben ser sometidas a algún tratamiento previo a la siembra con el fin de lograr una buena germinación. 

        p.mb-3 Existen algunos tratamientos que se realizan a la semilla con fin de proveer una sanidad óptima para evitar que virus, plagas o enfermedades puedan afectar su germinación y a su vez la productividad, de modo tal que no genere retrasos u otro impacto en el cultivo. Por lo cual encontramos:
      .col-12.col-lg-5(data-aos="fade-left")
        img(src='@/assets/curso/images/tema1/img_19.png'  alt='')


    .row.justify-content-center.align-items-star.mb-5
      .col-lg-12(data-aos="fade-right") 
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in-down")
          .row.justify-content-center.align-items-center.mb-5(titulo="Desinfección")
            .col-lg-11
              p.mb-3 Es el proceso que se realiza a la semilla antes de sembrarla, con el fin de evitar que sea afectada por insectos del suelo antes de que ocurra la germinación, o para que no desarrollen enfermedades, una vez se haya generado el proceso de germinación de la plántula. Este proceso puede realizarse mediante la utilización de productos fitosanitarios de origen químico como fungicidas o insecticidas, o utilizando desinfectantes ecológicos.
              .row.justify-content-center.align-items-center.mb-5
                .col-12.col-md-6.col-lg-4.mb-5.mb-lg-0
                  img.mt-4(src='@/assets/curso/images/tema1/img_20.png')
                  .jumbotron-6.p-2
                    p.my-4 <b>Químicos:</b> Productos químicos utilizados para la desinfección de la semilla como:  carboxina, mancozeb, maneb, metalaxil, malation, tiram tabendazol, entre otros.
                .col-12.col-md-6.col-lg-4.mb-5.mb-lg-0 
                  img.mt-4(src='@/assets/curso/images/tema1/img_21.png')
                  .jumbotron-6.p-2
                    p.mt-2 <b>Ecológicos:</b> Métodos naturales para controlar las plagas. Ortiga (decocción durante 10 minutos de 2 litros de agua con un puñado de ortiga). Ajo (decocción durante 10 minutos de 4 cabezas de ajo por un litro de agua).
            
            .col-lg-11
              .row.justify-content-center.align-items-star.my-3
                .jumbotron-7.p-3(data-aos="fade-left") 
                  .row.justify-content-around.align-items-center
                    .col-lg-2.col-6.d-flex.justify-content-center
                      img.mt-4(src='@/assets/curso/images/tema1/ico_9.svg',  alt='', style="width:120px; display:block; margin:auto 0 ;").mb-3
                    .col-lg-10
                      p.mb-0 Es importante que cuando se realice el proceso de desinfección, esté guiado por un experto en el área, con el fin de aplicar la dosis necesaria del desinfectante de tal modo que no se generen efectos adversos para la salud.

          .row.justify-content-center.mb-3.p-4(titulo="Escarificación")
              p.mb-3 Es el proceso de desgaste de la cubierta de la semilla con el fin de permitir el paso del agua y oxígeno necesarios para iniciar la germinación. Esta se puede dar de manera:
              .col-sm-6.col-lg-3.mb-4.mb-xl-0
                .jumbotron-8.h-100
                  .row.justify-content-center.align-items-center.p-3
                      h4.text-white.m-top-1 Manual:
                      p.mb-0 Involucra frotar la semilla manualmente sobre una superficie abrasiva, quemar la cubierta, perforar los bordes de la cubierta y colocar en remojo con agua tibia (60°C), hasta que se permita el ingreso de agua y oxígeno al interior.
              
              .col-sm-6.col-lg-3.mb-4.mb-xl-0
                .jumbotron-8.h-100
                  .row.justify-content-center.align-items-center.p-3
                    h4.text-white.m-top-1  Mecánica:
                    p.mt-4 Requiere de equipos o herramientas para realizar el proceso (abrasión con material, abrasión contra superficies, por percusión).
              
              .col-sm-6.col-lg-3.mb-4.mb-xl-0
                .jumbotron-8.h-100
                  .row.justify-content-center.align-items-center.p-3
                    h4.text-white.m-top-1 Química:
                    p.mb--0 Se remoja la semilla en hipoclorito de sodio al 5% por 20, 30 o 60 minutos, posteriormente se lava con agua limpia hasta que desaparezca todo el hipoclorito y se verifica el nivel de reblandeo de la semilla.

          .row.justify-content-center.align-items-center(titulo="Estratificación")
            .col-lg-11
              p.mb-3 Es un tratamiento pregerminativo para semillas en letargo, en el cual las semillas embebidas de agua son sometidas a un periodo de enfriamiento para que se efectuara la post maduración del embrión y así eliminar esta latencia. La estratificación se puede hacer en:
              img(src='@/assets/curso/images/tema1/fig_4.svg'  alt='')
            
          .row.justify-content-center.align-items-star(titulo="Inoculación")
            .col-12.col-lg-6
              p.mb-3 Es una técnica que consiste en adherir de manera efectiva de bacterias fijadoras de nitrógeno (<i>Rhizobium o Bradyrhizobium</i>) en la superficie de la semilla de leguminosas previo a la siembra, de esta manera las bacterias se fijan en las raíces cuando la semilla germina, formándose los nódulos, estructuras en donde se posicionan las bacterias fijadoras de nitrógeno haciéndolo aprovechable para la planta.
            .col-8.col-lg-5
              img(src="@/assets/curso/images/tema1/img_22.png").mb-3

          .row.justify-content-center.align-items-star(titulo="Fitomejoramiento")
            .col-12.col-lg-6
              p.mb-3 Con el fin de realizar actividades de mejoramiento de las especies vegetales, es una práctica que permite aumentar la productividad, calidad, resistencia a patógenos, eficiencia nutricional y algunas propiedades del cultivo. Mediante el mejoramiento genético: se pueden obtener variedades más productivas, resistentes a variables climáticas y con mayor eficiencia en los procesos productivos.  
            .col-8.col-lg-5
              img(src="@/assets/curso/images/tema1/img_23.png").mb-3


    Separador

    #t_1_3.titulo-segundo
      .h2 1.3  Arreglos topológicos
    
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right") 
        p.mb-3 La preparación del terreno involucra diferentes actividades con el fin de asegurar un buen lugar de siembra, que garantice la germinación y emergencia de la semilla, no obstante, esto también depende de las características físicas y genéticas de la semilla, y la manera en que se siembre.

        p.mb-3 La siembra, sencillamente consiste en buscar alternativas para colocar semillas en el suelo o en algún sustrato adecuado, con el fin de que germinen y emerjan nuevas plantas, acompañado de otras actividades como riego, fertilización y prácticas culturales.

        p.mb-3 Para lograr un óptimo proceso de siembra es necesario tener en cuenta el tamaño de la semilla, para poder establecer la profundidad en que se debe hacer la siembra, además de las necesidades de espacio, agua, nutrientes, aire y distanciamiento.
  
      .col-12.col-lg-5(data-aos="fade-left")
        img(src='@/assets/curso/images/tema1/img_24.png'  alt='')

    p.mb-3 La preparación del terreno para la siembra depende de la profundidad, distancia, época, tipo de siembra (directa o indirecta), humedad, aireación densidad poblacional, con el fin de que la semilla logre germinar y emerger, por lo tanto, es importante tener en cuenta:

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        .tarjeta.bg_grad-01.p-3.mb-5(data-aos="zoom-in-up")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-star.p-3
              .col-12.col-lg-4
                h4 Profundidad
                p.mb-3 Es la distancia a la cual va a ser enterrada la semilla, está condicionada al tipo de siembra, humedad del suelo, tipo de semilla, y tiempo en que se va a realizar la siembra. Ej. Suelo húmedo (siembra no tan profunda) suelo ligero (siembra profunda) y suelo pesado (siembra superficial).
             
              .col-10.col-lg-6
                img(src="@/assets/curso/images/tema1/img_25.png").mb-3
           
            .row.justify-content-center.align-items-star.p-3
              .col-12.col-lg-4
                h4 Época de siembra
                p.mb-5 Juega un papel importante, ya que la climatología establece parámetros claves para la germinación según el tipo de semilla, por lo cual se pueden implementar soluciones antes de la siembra como escarificación, estratificación u otro procedimiento que optimice el proceso productivo, además de establecimiento del sistema de riego, fertilización, entre otros.
              .col-10.col-lg-6
                img(src="@/assets/curso/images/tema1/img_26.png").mb-3
           
            .row.justify-content-center.align-items-star.p-3
              .col-12.col-lg-4
                h4 Tipo de siembra
                p.mb-3 Dependen de los equipos, herramientas y demás con que se cuente para el proceso, pues esta puede ser manual (se coloca la semilla con la mano en el suelo o sustrato) o mecánica (se utiliza maquinaria mecánica para el desarrollo de la actividad de siembra) además puede ser directa en el suelo o indirecta en semilleros y luego realizar el trasplante al campo.
              .col-10.col-lg-6
                img(src="@/assets/curso/images/tema1/img_27.png").mb-3
           
            .row.justify-content-center.align-items-star.p-3
              .col-12.col-lg-4
                h4 Densidad de siembra
                p.mb-3 La densidad óptima debe estar enfocada a evitar una baja densidad o una alta densidad, debido a que con una baja densidad poblacional el suelo está más propenso a la evaporación, además debido al espacio entre el cultivo, se puede dar el crecimiento de las malezas, mientras que con una alta densidad se va a generar una competencia por nutrientes, luz, agua, entre otros, por lo cual crecen débiles o también puede que no crezcan los que se espera.

                p.mb-3 Para establecer la densidad poblacional es importante tener en cuenta el espacio entre surcos, distancia entre plantas y el área del terreno a sembrar, ej. Se tiene como datos:

                ul.lista-ul--color
                  li 
                    i.fas.fa-circle.th-4
                    | Espacio entre surcos 80 cm
                  li 
                    i.fas.fa-circle.th-4
                    | Espacio entre plantas 19 cm
                  li 
                    i.fas.fa-circle.th-4
                    | Área del terreno para siembra: 1 Ha

              .col-10.col-lg-6
                img(src="@/assets/curso/images/tema1/img_28.svg").mb-3

    p.mb-5  Los arreglos topológicos en la siembra se definen como la distribución de las plantas en la superficie sembrada, cantidad y disposición de estas en un terreno. Por lo cual en agricultura se utilizan dichas técnicas con el fin de establecer la distribución de las plantas en un área determinada, considerando la distancia entre las plantas y el ancho de los surcos, dando un orden a la siembra. Estos pueden ser: 

    TabsB.color-acento-contenido.mb-5.color_img-tab(data-aos="fade-right")
      .py-4.py-md-5(titulo="Al voleo" :icono="require('@/assets/curso/images/tema1/ico_10.svg')")
        .row.justify-content-center.align-items-star
          .col-md-6.mb-4.mb-md-0
            h4 Al voleo
            p.mb-3 las semillas son distribuidas y colocadas en forma dispersa, no alineada, por ejemplo, cilantro y algunos pastos.

            p.mb-3 Cuando se realiza siembra al voleo manual, quien va a realizar la siembra, lleva las semillas debidamente almacenadas y las distribuye con la mano en todo el terreno de manera uniforme, quedando en la superficie del suelo, razón por la cual deben ser incorporadas mediante una herramienta (rastrillo), dejando una capa fina de suelo de 0.5 cm a 1.5 cm, dependiendo esto del tamaño de la semilla.

            p.mb-0 En cambio, cuando se realiza la siembra al voleo de manera mecánica se utiliza maquinaria para distribución y para realizar la incorporación se debe acoplar una rastra de dientes a la maquinaria utilizada para la distribución.
        
          .col-md-4
            figure
              img(src='@/assets/curso/images/tema1/img_29.png')

      .py-4.py-md-5(titulo="En surcos" :icono="require('@/assets/curso/images/tema1/ico_11_1.svg')")
        .row.justify-content-center.align-items-star
          .col-md-6.mb-4.mb-md-0
            h4 En surcos
            p.mb-0 esta técnica depende del tamaño de la semilla, la cual consiste en distribuir las semillas en hileras, y a una distancia de dos o tres centímetros de separación. Ej. Sorgo, frijol, entre otros. 
        
          .col-md-4
            figure
              img(src='@/assets/curso/images/tema1/img_30.png')
      
    p.mb-3 <b>En surcos</b>, esta técnica depende del tamaño de la semilla, la cual consiste en distribuir las semillas en hileras, y a una distancia de dos o tres centímetros de separación. Ej. Sorgo, frijol, entre otros. 
    p.mb-3.text-center Cuando la siembra se realiza de manera directa y en surcos, se puede hacer

    ImagenInfografica.color-secundario.mb-5(data-aos="fade-right")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/images/tema1/img_31.png', alt='Texto que describa la imagen')

      .tarjeta.color-acento-contenido.p-3(x="30%" y="70%" numero="")
        .h5.mb-3 Camellón del surco
          .row.justify-content-center.align-items-center
            .col-4.col-lg-3
              img(src='@/assets/curso/images/tema1/ico_12.svg')
            .col-md-9.mb-4.mb-md-0
              p.mb-0 Las semillas son colocadas en el camellón del surco debido a las características propias del cultivo y para tener un buen manejo de las labores culturales (ejemplo: frijol, melón).

      .tarjeta.color-acento-contenido.p-3(x="50%" y="80%" numero="")
        .h5.mb-3 Al fondo del surco
          .row.justify-content-center.align-items-center
            .col-4.col-lg-3
              img(src='@/assets/curso/images/tema1/ico_12.svg')
            .col-md-9.mb-4.mb-md-0
              p.mb-0 La semilla se deposita al fondo del surco con el fin de lograr un mayor aprovechamiento del agua de lluvia, o bien, para facilitar el riego después de la siembra (ejemplo: maíz, ajonjolí).

      .tarjeta.color-acento-contenido.p-3(x="70%" y="70%" numero="")
        .h5.mb-3 El talud del surco
          .row.justify-content-center.align-items-center
            .col-4.col-lg-3
              img(src='@/assets/curso/images/tema1/ico_12.svg')
            .col-md-9.mb-4.mb-md-0
              p.mb-0  Las semillas se siembran en el talud porque el cultivo así lo exige, debido a algunas características ambientales o la susceptibilidad del cultivo con la humedad del suelo (ejemplo: tomate).



    .row.align-items-center.justify-content-star.mb-5.ps-2(data-aos="zoom-in-down")
      .col-lg-10.bg-color-1.px-3.py-2
        .h3.mx-5.mb-0 Diseño de arreglos productivos

    p.mb-5 Los sistemas de producción agrícola cambian según las necesidades y condiciones de producción, por ejemplo, el clima, el suelo, la tenencia de la tierra, los niveles de formación, la tecnología disponible, los mercados, entre otros, por lo cual encontramos algunas estrategias que permiten mantener o mejorar los procesos productivos, como:

    .row.align-items-center.justify-content-center.mb-5
      .col-10.col-lg-3.mb-3
        .tarjeta.tarjeta-foto-hover.borde
          .tarjeta-foto-hover__img: img(src='@/assets/curso/images/tema1/tj_1_1.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              h4.text-center.mb-3 Sistemas agroforestales
              p.text-center.mb-0 Los cuales combinan la siembra de cultivos y árboles forestales secuencialmente.

      .col-10.col-lg-3.mb-3
        .tarjeta.tarjeta-foto-hover.borde
          .tarjeta-foto-hover__img: img(src='@/assets/curso/images/tema1/tj_2_2.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              h4.text-center.mb-3 Sistemas silvopastoriles
              p.text-center.mb-0 Los cuales combinan especies forestales o frutales y animales, sin la presencia de cultivos.

      .col-10.col-lg-3.mb-3
        .tarjeta.tarjeta-foto-hover.borde
          .tarjeta-foto-hover__img: img(src='@/assets/curso/images/tema1/tj_3_3.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              h4.text-center.mb-3 Rotación de cultivos
              p.text-center.mb-0 Busca alternar cultivos en un mismo suelo, con el fin de preservar los nutrientes disponibles en el suelo.

      .col-10.col-lg-3.mb-3
        .tarjeta.tarjeta-foto-hover.borde
          .tarjeta-foto-hover__img: img(src='@/assets/curso/images/tema1/tj_4_4.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              h4.text-center.mb-3 Asociación de cultivos
              p.text-center.mb-0 Se combinan en un mismo terreno y al tiempo, dos o más cultivos, ayudando a inhibir plagas, debido al olor que generan algunas plantas (ajo, romero, manzanilla, cebolla), o por el contrario atracción de insectos beneficiosos que sirven como control biológico, además de optimización de recursos como agua y nutrientes.
      
    p.mb-3 Los arreglos productivos se relacionan directamente con las necesidades que requiera el cultivo, esto depende del tipo de siembra que se ejecute, los diferentes sistemas que se suelen emplear en el ámbito de la agricultura se presentan a continuación: 

    figure.mb-5(data-aos="fade-right")
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Pe689Y5Mcu8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>









</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass"></style>
