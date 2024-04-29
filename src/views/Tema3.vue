<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 3
      h1 Relación agua-suelo-planta y clima

    .row.align-items-center.justify-content-center.mb-5
      p.mb-3 De la porción de agua absorbida por la planta, una fracción es la que suministra el hidrógeno necesario para la planta y la otra parte se utiliza en la transpiración (paso de agua a la atmósfera). Para que dicho intercambio de gases sea posible existen estomas (pequeños orificios), los cuales se encuentran abiertos en presencia de agua, por lo cual cuando hay escasez de agua la planta los cierra como mecanismo de defensa. La escasez de agua puede generar marchitez de la planta y a su vez generar estrés hídrico, lo que puede ocasionar reducción de productividad y hasta muerte de la planta.

    .row.justify-content-center.align-items-center.mb-5
      .titulo-sexto.color-acento-contenido.mb-5
        h5 Figura 5.
        span  Esquema de utilización del agua
        
      .tarjeta.tarjeta--gris.p-4
        .row.justify-content-center.align-items-center.p-3  
          .col-lg-12(data-aos="fade-right") 
            img(src='@/assets/curso/images/tema1/img_1.png'  alt='')

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-secundario.p-4.ps-5.bg_18.mb-4.mb-lg-0
          p.m-0 El suelo provee el agua y nutrientes y la atmósfera suministra la luz y el dióxido de carbono y a su vez la planta desprende el oxígeno y el agua, actuando como medio de paso desde el suelo hacia la atmósfera, quedando poca agua en la planta.

    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .col-lg-10.bg-color-1.px-3.py-2
        .h3.mx-5.mb-0 Ciclo hídrico:
    
    p.mb-3 Se refiere al movimiento general del agua que va ascendiendo por procesos de evaporación y desciende de igual manera por precipitación sobre la superficie de la tierra y también subterránea. A continuación, se ampliará más sobre cada una de estas etapas:

    .bg--img_03
      .row.justify-content-center.mb-1
        .col-lg-12
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Estomatitis vesicular:")
              .col-12
                p.mb-0 causada por un virus y presentada en todas las especies. Es endémica, epidémica y esporádica en todo el territorio nacional. Su contaminación es por medio de la saliva donde el virus penetra por pequeñas heridas o excoriaciones que se presentan en la mucosa de boca o faringe. Los síntomas son unas vesículas en la boca.

            .row(titulo="Leptospirosis")
              .col-12
                p.mb-0 producida por la leptospira, de la cual existen varias especies, que atacan a los animales y al hombre. Se presenta en equinos, bovinos, ovinos, caprinos y porcinos donde suele presentarse en todo el país y es endémica. <br> Los animales contaminados eliminan permanentemente el virus por la orina y si se contamina el agua de charcas permanece viva y puede ser ingerida por otros animales, atravesando la pared intestinal y llegando a la sangre. <br> Fiebre aftosa o glosopeda Se caracteriza por la presencia de estomatitis, problemas vesiculares en pezuñas y glándula mamaria, por ser de alta morbilidad. Es causada por virus en especies como bovinos, porcinos, ovinos y caprinos. Se presenta en todo el país en forma endémica, epidémica y esporádica. Cuando el virus penetra, presentando fiebre, por la presencia del virus en la sangre, (viremia), llegando a todo el organismo, afectando el miocardio, inflamación y degeneración que puede ocasionar la muerte. Brucelosis o aborto infeccioso. <br>La produce la Brucella, que es una enfermedad Zoonótica, de la cual hay varias especies: B. abortus, B. Bovis, B. melitensis, y B. suis. Se presenta en todas las especies, es endémica. Son portadores, los animales sanos se contaminan por vía oral y la sintomatología es fiebre e inflamación en algunas partes en la especie equina (mal de la cruz)

            .row(titulo="Salmonelosis")
              .col-12
                p.mb-0 se producen enfermedades en los animales y en las personas. Es una enfermedad infecciosa caracterizada por síntomas gastroentéricos, causada por varias especies de Salmonella atacando los bovinos, equinos, porcinos y aves. Se presenta en forma endémica y esporádica. <br> En bovinos, la salmonelosis se puede presentar en forma septicémica o sobreaguda, fiebre, depresión, postración y muerte en equinos, se caracteriza por diarrea en potros, artritis y aborto en adultos y en porcinos por artritis y diarrea.

    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .col-lg-10.bg-color-1.px-3.py-2
        .h3.mx-5.mb-0 Influencia del clima
    
    p.mb-3 Los factores climáticos afectan directamente la producción de los cultivos. La temperatura, la radiación solar y el agua en el suelo son los tres principales factores meteorológicos que regulan los procesos ecofisiológicos y metabólicos en las plantas.
   
    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .col-12.col-lg-5.mb-5(data-aos="fade-left")
        img(src='@/assets/curso/images/tema1/img_19.png'  alt='')
    
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
