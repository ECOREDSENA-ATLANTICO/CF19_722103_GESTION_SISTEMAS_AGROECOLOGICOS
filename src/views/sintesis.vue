<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-3 Es importante tener en cuenta que existen diversas técnicas para llevar a cabo el proceso de siembra, pero que sin lugar a dudas es relevante realizar la planificación del mismo, con el fin de establecer el tipo de material a sembrar (semillas o material vegetal) las técnicas para llevarlo a cabo, la maquinaria, herramientas y equipos necesarios para su implementación, los arreglos previos del terreno, las condiciones óptimas para la germinación y crecimiento del cultivo, a fin de que  se desarrolle el proceso a cabalidad y de manera exitosa, permitiendo un beneficio no solo para el agricultor si no para las personas que hagan uso de dichos productos, sin dejar de un lado  al medio ambiente que proporciona todos los recursos naturales para que se efectué el proceso.

    p.mb-3 La planificación del proceso de siembra es la clave del éxito en el desarrollo del cultivo, pues se requiere de un análisis y diseño exhaustivo de cada una de las actividades involucradas con el fin de obtener los resultados esperados.

    p.mb-3 Dentro del proceso de siembra se deben tener en cuenta procedimientos, protocolos, cronogramas, diseño y diligenciamiento de formatos y demás elementos claves, que lo guíen, con el fin de poder obtener los resultados esperados y así mismo establecer las variables de influencia.

    p.mb-5 Así pues, un resumen de lo visto en el presente componente, podrá ser visualizado en el siguiente mapa conceptual.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/images/tema2/sintesis.svg", alt="alt")
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
