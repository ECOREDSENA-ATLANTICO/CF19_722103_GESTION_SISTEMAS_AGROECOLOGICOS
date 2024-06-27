<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 3
      h1(data-aos="fade-right") Relación agua-suelo-planta y clima

    .row.align-items-center.justify-content-center.mb-5
      p.mb-3 De la porción de agua absorbida por la planta, una fracción es la que suministra el hidrógeno necesario para la planta y la otra parte se utiliza en la transpiración (paso de agua a la atmósfera). Para que dicho intercambio de gases sea posible existen estomas (pequeños orificios), los cuales se encuentran abiertos en presencia de agua, por lo cual cuando hay escasez de agua la planta los cierra como mecanismo de defensa. La escasez de agua puede generar marchitez de la planta y a su vez generar estrés hídrico, lo que puede ocasionar reducción de productividad y hasta muerte de la planta.

    .row.justify-content-center.align-items-center.mb-2
      .titulo-sexto.color-acento-contenido.mb-2
        h5 Figura 5.
        span  Esquema de utilización del agua
    
    .row.justify-content-center.align-items-center.p-3.mb-3  
      .col-lg-12(data-aos="fade-right") 
        img(src='@/assets/curso/images/tema3/img_1.png'  alt='Muestra el esquemas de utilización del agua, teniendo en cuenta la energía, oxigeno, azúcar y dióxido de carbono.')
        figcaption Nota. Fotosíntesis (2022). 

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-secundario.p-4.ps-5.bg_18.mb-4.mb-lg-0
          p.m-0 El suelo provee el agua y nutrientes y la atmósfera suministra la luz y el dióxido de carbono y a su vez la planta desprende el oxígeno y el agua, actuando como medio de paso desde el suelo hacia la atmósfera, quedando poca agua en la planta.

    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .col-lg-10.bg-color-1.px-3.py-2.mb-4
        .h3.mx-5.mb-0.mt-4 Ciclo hídrico:
    
    p.mb-3 Se refiere al movimiento general del agua que va ascendiendo por procesos de evaporación y desciende de igual manera por precipitación sobre la superficie de la tierra y también subterránea. A continuación, se ampliará más sobre cada una de estas etapas:

    .bg--img_03
      .row.justify-content-center.mb-1
        .col-lg-12
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Evaporación:")
              .col-lg-3
                img(src='@/assets/curso/images/tema3/img_2.png'  alt='')
              .col-lg-9
                p.mb-0.mt-2 Proceso mediante el cual un líquido es convertido en vapor de agua y removido a la superficie a través de la evaporación. Dicho proceso sucede cuando el agua se evapora de las fuentes superficiales (ríos, lagunas, lagos, suelos, vegetación humedad) con ayuda de la energía solar, quien ayuda al cambiar de estado líquidos a estado gaseoso las moléculas de agua. En dicho proceso interviene la radiación solar, la temperatura del aire, la humedad relativa u la velocidad del viento.
                p.mb-0 <br> No obstante, cuando la superficie de evaporación es la superficie del suelo, el nivel de sombreado que proporciona el follaje del cultivo y la cantidad de agua son otras variables a tener en cuenta.

            .row(titulo="Transpiración")
              .col-lg-3
                img(src='@/assets/curso/images/tema3/img_3.png'  alt='')
              .col-lg-9
                p.mb-0.mt-2 Cuando se habla de transpiración, se hace referencia a la vaporización del agua líquida contenida en el tejido vegetal y a su vez la remoción de este vapor a la atmósfera. En los cultivos este vapor de agua se pierde a través de estomas, pues la planta toma el agua y los nutrientes a través de las raíces y la vaporización ocurre en las hojas, en donde los estomas regulan el intercambio gaseoso, por lo cual la mayoría del agua que ingresa a la planta es transportada y otra pequeña parte utilizada por la planta.
                p.mb-0 <br> La transpiración depende de la disponibilidad de energía, el gradiente de presión y el viento, por lo cual, las variables como radiación solar, temperatura del aire, humedad relativa y velocidad del viento deben considerarse dentro del cultivo.

            .row(titulo="Evapotranspiración")
              .col-lg-3
                img(src='@/assets/curso/images/tema3/img_4.png'  alt='')
              .col-lg-9
                p.mb-0.mt-2 La evapotranspiración hace referencia a la pérdida de humedad de una superficie, generada por evaporación directa, junto con la pérdida de agua por transpiración. Los procesos de evaporación y transpiración ocurren de manera simultánea, por lo cual la evaporación del suelo con establecimiento de cultivo depende de la radiación solar sobre la superficie, la cual disminuye a medida que el cultivo va desarrollando follaje, el cual sombrea la superficie del suelo.

    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .col-lg-10.bg-color-1.px-3.py-2.mb-4
        .h3.mx-5.mb-0.mt-4 Influencia del clima
    
    p.mb-3 Los factores climáticos afectan directamente la producción de los cultivos. La temperatura, la radiación solar y el agua en el suelo son los tres principales factores meteorológicos que regulan los procesos ecofisiológicos y metabólicos en las plantas.
    p.mb-3 Siendo así, la influencia del clima está dada por variables como:
    
    ImagenInfografica.color-acento-botones
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/images/tema3/img_5.svg'  alt='')

      .tarjeta.color-acento-botones.p-3(x="16.6%" y="52%" numero="1")
        .h5.mb-2 Temperatura
        p La temperatura alta hace que la planta absorba más agua del suelo, debido a que la transpiración en su interior se incrementa.

      .tarjeta.color-acento-botones.p-3(x="43.6%" y="75%" numero="2")
        .h5.mb-2 Humedad Relativa
        p Es la cantidad de vapor de agua presente en el aire, así pues la forma absoluta se expresa en humedad absoluta y la forma relativa en humedad relativa, es la relación porcentual entre la cantidad de vapor de agua real que contiene el aire y la que necesita contener para saturarse a la misma temperatura.

      .tarjeta.color-acento-botones.p-3(x="73%" y="63.5%" numero="3")
        .h5.mb-2 El Viento
        p Esta variable es importante a la hora de realizar el proceso de riego del cultivo, pues en días de fuertes vientos, el cultivo puede perder más agua y además el suelo se puede secar más rápido, en días con velocidad de viento alto.

</template>

<script>
export default {
  name: 'Tema3',
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
