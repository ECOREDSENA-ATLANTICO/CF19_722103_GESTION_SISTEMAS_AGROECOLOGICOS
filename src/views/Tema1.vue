<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 1
      h1 Potencial hídrico

    .row.align-items-center.justify-content-center.mb-4
      p.mb-3 El agua posee un carácter multisectorial, la diversidad de usos la convierte en un recurso limitado,
        |  haciendo indispensable el uso eficiente del mismo, en el sector agrícola se han realizado adelantos
        | tecnológicos que facilitan el manejo del recurso hídrico en el cultivo, generando alternativas de riego,
        | aplicación de fertilizantes, control de drenaje del terreno y supervisión del estado de la planta,
        | resaltando la importancia del agua.

    .row.justify-content-center.align-items-center.mb-4
      .titulo-sexto.color-acento-contenido.mb-4
        h5 Figura 1.
        span  El agua
        
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

    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .col-lg-10.bg-color-1.px-3.py-2
        .h3.mx-5.mb-0.mt-4 Cuenca hidrográfica

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right") 
        p.mb-3 Área topográfica establecida naturalmente, la cual cuenta con un sistema interconectado de cursos de agua, con efluente de salida, que involucra procesos ecológicos y sociales, que demandan actividades de planeación, implementación y manejo, teniendo en cuenta todos los actores involucrados. Dentro del proceso de monitoreo de la cuenca hidrográfica, es importante entender la dinámica hidrológica y el funcionamiento ecosistémico, cultural, social e institucional de la misma, con fines a realizar un manejo integral de la misma.
        p.mb-3 A continuación, se describen los elementos y partes geográficas de una cuenca hidrográfica:
      .col-12.col-lg-5.mb-5(data-aos="fade-left")
        img(src='@/assets/curso/images/tema1/img_2.svg'  alt='')
      .col-12.col-lg-12(data-aos="fade-left")
        img(src='@/assets/curso/images/tema1/img_3.svg'  alt='')

    .row.justify-content-center.align-items-center.mb-5
      .titulo-sexto.color-acento-contenido.mb-5
        h5 Figura 2.
        span Ciclo del agua
      .col-lg-12(data-aos="fade-right") 
        img(src='@/assets/curso/images/tema1/img_4.svg'  alt='')

    .row.align-items-center.justify-content-star.mb-3.ps-2(data-aos="zoom-in-down")
      .col-lg-10.bg-color-1.px-5.py-2.mb-4
        .h3.mx-2.mb-0.mt-4 Captación de agua
       
      .col-lg-12.mb-4
        p.mb-3 La captación de aguas superficiales (ríos, lagos y embalses), consiste en una estructura a nivel de terreno, mediante la cual se hace uso y aprovechamiento del agua de una fuente hídrica, la cual se puede hacer de dos maneras, ya sea por gravedad (cuando la fuente hídrica se encuentra por encima del punto de aprovechamiento) o por bombeo (cuando la fuente se encuentra por debajo del nivel donde se encuentra el usuario), con fines a garantizar el suministro de agua, independiente de su uso.
        p.mb-3 La captación de agua es el proceso mediante el cual se recolecta y almacena el recurso hídrico proveniente de diversas fuentes para darle un uso, es un recurso finito; es decir, su pérdida y degradación no son reversibles en el tiempo de una vida humana.

    ImagenInfografica.color-acento-botones
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/images/tema1/img_5.svg'  alt='')

      .tarjeta.color-acento-botones.p-3(x="23.4%" y="55%" numero="1")
        .h5.mb-2 Cuenca
        p Es toda el área de terreno que contribuye al flujo de agua en un río o quebrada.

      .tarjeta.color-acento-botones.p-3(x="18.6%" y="39%" numero="2")
        .h5.mb-2 Subcuenca
        p Superficie de terreno cuya escorrentía superficial fluye en su totalidad a través de una serie de corrientes, ríos y eventualmente, lagos.

      .tarjeta.color-acento-botones.p-3(x="32.3%" y="23.1%" numero="3")
        .h5.mb-2 Microcuenca
        p Pequeña unidad geográfica donde vive una cantidad de familias que utiliza y maneja los recursos disponibles, principalmente suelo, agua y vegetación.

      .tarjeta.color-acento-botones.p-3(x="40.2%" y="20%" numero="4")
        .h5.mb-2 Divisoria de Aguas
        p También denominada parteaguas, que es una línea imaginaria que limita las vertientes hidrográficas y la separa de otras cuencas.

      .tarjeta.color-acento-botones.p-3(x="46.1%" y="11%" numero="5")
        .h5.mb-2 Río Principal
        p Curso con mayor caudal y longitud, el cual cuenta con una parte alta, media y baja.

      .tarjeta.color-acento-botones.p-3(x="53.4%" y="39%" numero="6")
        .h5.mb-2 Cauce
        p Canal natural por donde corre una corriente de agua.

      .tarjeta.color-acento-botones.p-3(x="46.7%" y="70.1%" numero="7")
        .h5.mb-2 Vertiente
        p Áreas receptoras de agua, las cuales se ubican a lado y lado del cauce.

      .tarjeta.color-acento-botones.p-3(x="64.4%" y="22.8%" numero="8")
        .h5.mb-2 Afluente
        p También denominado tributario, son ríos secundarios que vierten sus aguas al río principal.

      .tarjeta.color-acento-botones.p-3(x="62.4%" y="52.1%" numero="9")
        .h5.mb-2 Zona de cabecera
        p También denomina de zona captación o cuenca alta, debido a que allí se encuentran los nacimientos de las corrientes de agua, corresponde a ecosistemas de páramo, limitada por la líneas divisorias de agua.

      .tarjeta.color-acento-botones.p-3(x="70.8%" y="37.5%" numero="10")
        .h5.mb-2 Zona de Almacenamiento
        p También denominada cuenca media, allí confluyen y se almacenan la mayor cantidad de aguas provenientes de la cuenca alta, aportando distintos caudales con diferentes características físico- químicas y microbiológicas.

      .tarjeta.color-acento-botones.p-3(x="79.4%" y="28%" numero="11")
        .h5.mb-2 Zona de Descarga
        p También denominada cuenca baja, en donde se descargan las aguas a una corriente con mayor caudal (rio mayor, mar o lago). Es el curso con mayor caudal de agua y longitud.

    
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
