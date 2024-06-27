<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1(data-aos="fade-right") Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.mb-5
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/images/introduccion/img_1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El siguiente componente formativo denominado “Riego y drenaje”, desarrolla las temáticas enfocadas al diseño e implementación del sistema de riego y drenaje del cultivo; se puede explorar más en profundidad en el siguiente video:
      figure.mb-5(data-aos="fade-right")
        img.img-t.m-auto(src='@/assets/curso/images/introduccion/img_2.svg', alt='')
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
