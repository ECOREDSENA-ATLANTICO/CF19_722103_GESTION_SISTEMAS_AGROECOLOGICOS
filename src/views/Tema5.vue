<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 5
      h1(data-aos="fade-right") Drenaje
    
    .row.align-items-center.justify-content-center.mb-0
      .col-12.col-lg-5.mb-2(data-aos="fade-left")
        img(src='@/assets/curso/images/tema5/img_1.png'  alt='')
      .col-lg-7(data-aos="fade-right") 
        p.mb-3 El suelo está constituido por una fase sólida (partículas del suelo), líquida (agua) y gaseosa (aire), para que las semillas germinen, las plantas logren desarrollar y generen buena cosecha, es necesario que dichas fases se encuentren equilibradas.
        p.mb-3 El drenaje tiene como objetivo, disminuir el exceso de agua acumulada, tanto en la superficie como en el interior del suelo, y de esta manera mantener las condiciones óptimas de aireación y actividad biológica, indispensable para el desarrollo y crecimiento de la raíz de la planta.
     
    
    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .col-lg-10.bg-color-1.px-3.py-2.mb-3
        .h3.mx-5.mb-0.mt-4 Clases de drenaje
    
    p.mb-4 Dentro de estas clases se pueden encontrar las siguientes:

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12        
        .tarjeta.mb-3(data-aos="zoom-in-up")
          .row.justify-content-center.align-items-star
            .col-md-12.mb-3.mb-md-0
              h4.mb-3.text-white.bg-c1.py-2.px-3 Drenaje superficial
              p.mb-3 Se utiliza para eliminar el exceso de agua lluvia o de riego de la superficie radicular, implementando canales o zanjas de poca profundidad. Este depende de la intensidad y duración de la precipitación, del tipo de suelo, la topografía, la cubierta vegetal y el uso de la tierra. Los drenajes superficiales deben ser diseñados para manejar caudales con periodos de retorno de cinco (5) a veinticinco (25) años.
            
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12  
        .titulo-sexto.color-acento-contenido.mb-5
          h5 Figura 8.
          span Drenaje superficial
        
        img(src='@/assets/curso/images/tema5/img_2.png'  alt='La imagen muestra el diseño de un Drenaje superficial, para el manejo de la topografía, la cubierta vegetal y el uso de la tierra.')

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12        
        .tarjeta.mb-3(data-aos="zoom-in-up")
          .row.justify-content-center.align-items-star
            .col-md-12.mb-3.mb-md-0
              h4.mb-3.text-white.bg-c1.py-2.px-3 Drenaje subterráneo
              p.mb-3 Este método es utilizado para remoción de agua subterránea, así como para lixiviación de sales. Se utilizan zanjas abiertas o tubos perforados enterrados.
              p.mb-3 La conductividad hidráulica del suelo (K), es la medida de la capacidad para desalojar el agua existente en su seno y proporciona un criterio base para el diseño de los sistemas de drenaje.
              p.mb-3 El rendimiento específico del agua (S), es el volumen de agua que puede ser drenado de un suelo saturado por acción de la gravedad, respecto al descenso del nivel freático (ver figura 9).

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12  
        .titulo-sexto.color-acento-contenido.mb-5
          h5 Figura 9.
          span Sistema de drenaje combinado (zanja abierta y tubo enterrado)
        
        img(src='@/assets/curso/images/tema5/img_3.png'  alt='La imagen nuestra el terreno de un Sistema de drenaje combinado (zanja abierta y tubo enterrado), para la remoción de agua subterránea').mb-3
        figcaption Nota. Nota. EcuRed. (2012). Riego y Drenaje. 
        
    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .col-lg-10.bg-color-1.px-3.py-2.mb-3
        .h3.mx-5.mb-0.mt-4 Tipos de drene
    
    p.mb-3 Es importante poder identificar que existen los siguientes:
    
    .row.justify-content-center.align-items-center.mb-3
      .col-md-8
        .row
          .col-lg-6
            .tarjeta-avatar-b.mb-2
              .tarjeta-avatar-b__img
                img.img-t.m-auto(src='@/assets/curso/images/tema5/img_4.svg', alt='')
              .tarjeta.tarjeta--gris.shadow-sm
                .p-4
                  p 
                    span.text-bold Zanjas abiertas,
                    |  sirven para remover grandes volúmenes de agua y además drenar suelos arcillosos y pesados, con pendiente plana.
            
            .tarjeta-avatar-b.mb-2
              .tarjeta-avatar-b__img
                img.img-t.m-auto(src='@/assets/curso/images/tema5/img_5.svg', alt='')
              .tarjeta.tarjeta--gris.shadow-sm
                .p-4
                  p 
                    span.text-bold Drenes de concreto y barro,
                    |  generalmente son de 30 a 60 centímetros de longitud y de 10 a 25 centímetros de diámetro. 
            
          .col-lg-6
            .tarjeta-avatar-b.mb-2
              .tarjeta-avatar-b__img
                img.img-t.m-auto(src='@/assets/curso/images/tema5/img_6.svg', alt='')
              .tarjeta.tarjeta--gris.shadow-sm
                .p-4
                  p 
                    span.text-bold Drenes topo,
                    |  son canales circulares subterráneos no revestidos, son usados para drenaje poco profundo y suelo arcillosos pesados. 
          
            .tarjeta-avatar-b.mb-2
              .tarjeta-avatar-b__img
                img.img-t.m-auto(src='@/assets/curso/images/tema5/img_7.svg', alt='')
              .tarjeta.tarjeta--gris.shadow-sm
                .p-4
                  p 
                    span.text-bold Tubería de plástico corrugado,
                    |  utilizado para drenaje subterráneo.
    
    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .col-lg-10.bg-color-1.px-3.py-2.mb-3
        .h3.mx-5.mb-0.mt-4 Beneficios del drenaje
    
    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .col-lg-6.jumbotron-12
        p.mb-1.p-2 Dentro de los muchos beneficios que genera el drenaje adecuado del suelo del cultivo se encuentran:
        ul.lista-ul.p-4
          li
            i.lista-ul__vineta
            | En suelos saturados, la falta de oxígeno evita la creación de formas utilizables de nitrógeno y azufre, debido al desarrollo limitado de bacterias aeróbicas, generando bajos rendimiento en el cultivo.
          li
            i.lista-ul__vineta
            |	Incremento de la cantidad de oxígeno disponible en el perfil del suelo.
          li
            i.lista-ul__vineta
            |	El favorecimiento del intercambio gaseoso. 
          li
            i.lista-ul__vineta
            |	El mejoramiento del desarrollo radicular de la planta (aumento y disponibilidad de agua y nutrientes).  
          li
            i.lista-ul__vineta
            |	Fácil acceso y movilización de la maquinaria para labores de manejo cultural del cultivo.
          li
            i.lista-ul__vineta
            |	Mejoramiento de condiciones de salubridad del área, evitando acumulación de agua y propagación de vectores y enfermedades.
              
      .col-lg-6(data-aos="fade-right") 
          img(src='@/assets/curso/images/tema5/img_8.png'  alt='')

    
    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .col-lg-10.bg-color-1.px-3.py-2.mb-3
        .h3.mx-5.mb-0.mt-4 Normatividad

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.mb-4
        .bloque-texto-g.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema5/img_9.png')})`, 'width': '100%', 'height':'249px'}"
          )
      .col-lg-9.mb-5
        .bloque-texto-g__texto.p-4.jumbotron-15(
          :style="{'top': '80px', 'position': 'relative', 'width':'100%'}"
        )
          p.mb-0 Por último y no menos importante sobre esta temática relacionada con el riego y el drenaje, dentro de la normatividad establecida para el riego de cultivos se tiene (ver tabla 2):
          
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12  
        .titulo-sexto.color-acento-contenido.mb-5
          h5 Tabla 2.
          span Normatividad relacionada con el riego de cultivos
    
    .tabla.mb-5 
      table.text-center
        caption Nota. Nota. SENA (2022).
        thead
          tr
            th.td-color-secundario Norma
            th.td-color-acento-contenido Campo de aplicación
        tbody
          tr
            td Decreto 182 de 1968
            td Por el cual se reglamenta el uso de aguas, operación, conservación y mantenimiento de los distritos de riego y avenamiento.
          tr
            td Decreto 2314 de 1986
            td Concesión de aguas. 
          tr
            td Decreto 79 de 1986
            td Conservación y protección del recurso agua.
          tr
            td Resolución 000132 de 2021
            td Por la cual se adopta el manual de normas técnicas para sistemas de riego y drenaje a nivel predial. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.mb-4           
        .tarjeta-avatar-b.mb-2
          .tarjeta-avatar-b__img
            img.img-t.m-auto(src='@/assets/curso/images/tema5/img_10.svg', alt='')
          .tarjeta.jumbotron-12.shadow-sm
            .p-4
              p 
                span.text-bold Recuerde… 
                <br> Si desea conocer en detalle esta reglamentación, a través de la web puede consultar dichas normatividades.
            
</template>

<script>
export default {
  name: 'Tema5',
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
