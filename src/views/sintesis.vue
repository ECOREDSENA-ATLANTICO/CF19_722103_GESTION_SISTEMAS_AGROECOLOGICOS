<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-3 La producción agrícola depende de una buena productividad y la obtención de productos de buena calidad, para el logro de estos objetivos es clave analizar las variables climáticas (lluvia, sequía), físicas, químicas y biológicas del suelo, además de la topografía del terreno, facilidad de abastecimiento de agua entre otros, esto con el fin de lograr las condiciones óptimas para el crecimiento y desarrollo del cultivo.

    p.mb-3 Sin lugar a dudas uno de los retos más grandes es vincular tecnología apropiada o técnicas de manejo cultural que permitan realizar un uso y manejo adecuado del agua de riego, de tal manera que suministre el requerimiento hídrico necesario para el cultivo, mediante el sistema de riego apropiado, facilitando el control y aplicación del agua, reducción de costos, y asegurando el correcto desarrollo de la planta.

    p.mb-5 Así pues, un resumen de lo visto en el presente componente, a continuación, la síntesis del mapa conceptual:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/images/tema2/sintesis.svg", alt="La grafica muestra la síntesis del riesgo y drenaje del cultivo, donde involucra potencial hídrico, propiedades del suelo y agua, Relación agua-suelo -planta y clima, Sistema de riesgo, Drenaje y Normatividad.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
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
