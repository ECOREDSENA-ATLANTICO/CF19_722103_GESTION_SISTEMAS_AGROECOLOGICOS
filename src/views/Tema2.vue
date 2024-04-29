<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 2
      h1 Propiedades del suelo 

    .row.align-items-center.justify-content-center.mb-2
      .col-7.col-lg-5(data-aos="fade-right")
        img.mt-3(src='@/assets/curso/images/tema2/img_4.png'  alt='')
      .col-lg-7(data-aos="fade-left") 
        .col-lg-10.bg-color-1.px-5.py-2
          .h3.mx-2.mb-0 El suelo:
        p.mb-3 Recurso natural no renovable, el cual está compuesto por sustancias sólidas (materia orgánica, organismos y minerales), agua y aire. No obstante, la cantidad en la que se encuentran estos componentes en el suelo son los que le confieren las propiedades físicas, químicas y biológicas.
        
        .col-lg-10.bg-color-1.px-5.py-2
          .h3.mx-2.mb-0 Productividad del suelo:
        p.mb-3 Depende del contenido de nutrientes disponibles y del conjunto de otras características físicas, pues el crecimiento de las partes aéreas necesita en gran medida del desarrollo de la raíz, el cual está influenciado por el balance de humedad, y aireación del suelo.
        
        .col-lg-10.bg-color-1.px-5.py-2
          .h3.mx-2.mb-0 Las propiedades físicas del suelo:
        p.mb-3 Son el resultado de la interacción entre las distintas fases (suelo, agua y aire) y la cantidad en que se encuentran cada una de ellas, pues la condición física del suelo determina la capacidad de sostenimiento, habilidad para penetrar las raíces, circulación de aire, almacenamiento de agua, drenaje, retención de nutrientes (macro y micro nutrientes).
      
    Separador
    
    #t_2_1.titulo-segundo
      .h2 2.1  Textura y estructura
    
    .row.justify-content-center.align-items-center.mb-5
      .titulo-sexto.color-acento-contenido.mb-5
        h5 Tabla 1.
        span Clasificación de las partículas del suelo por su tamaño

      .tabla-a.color-acento-botones.mb-5 
        table.text-center
          caption Nota. Tomada de Mori (2008). 
          tr
            td TIPO
            td Arena gruesa
            td Arena fina
            td Limo
            td Arcilla
          tr
            td DIAMETRO
            td 2.000 - 0.200 mm
            td 0.200 - 0.020 mm
            td 0.200 - 0.020 mm
            td Inferior a 0.002 mm

    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .col-lg-10.bg-color-1.px-3.py-2
        .h3.mx-5.mb-0 Triangulo textural
        
    p.mb-3 El cual clasifica la textura del suelo en doce clases dependiendo su porcentaje de arena, limo y arcilla.
      
    .row.justify-content-center.align-items-center.mb-5
      .titulo-sexto.color-acento-contenido.mb-5
        h5 Figura 3.
        span Triángulo textural
      .col-lg-12(data-aos="fade-right") 
        img(src='@/assets/curso/images/tema1/img_1.png'  alt='')

    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .col-lg-10.bg-color-1.px-3.py-2
        .h3.mx-5.mb-0 Forma manual
    
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right") 
        p.mb-3 Para determinar la textura de forma manual, se modifica el triángulo textural, el cual queda constituido por suelos con textura arcillosa, franco-arcillosa y franca. 
        p.mb-3 Para realizar el proceso se debe tomar una porción de suelo y formar una pelota humedeciéndola hasta llegar al punto pegajoso, el cual se logra cuando la pelota de suelo no está tan húmeda y se quiebra pegada en la mano, pero tampoco tan seca que no se sienta pegajosa. Cuando el suelo está en su punto, se debe presionar entre el dedo pulgar y el índice y se forme una pasta, lo más larga posible. 
      .col-12.col-lg-4.mb-5(data-aos="fade-left")
        img(src='@/assets/curso/images/tema1/img_19.png'  alt='')
    
    .row.justify-content-center.align-items-center.mb-5
      .titulo-sexto.color-acento-contenido.mb-5
        h5 Figura 4.
        span Triángulo textural modificado
      .col-lg-12(data-aos="fade-right") 
        img(src='@/assets/curso/images/tema1/img_1.png'  alt='')

    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .col-lg-10.bg-color-1.px-3.py-2
        .h3.mx-5.mb-0 Estructura
   
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema1/img_1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El término de estructura hace referencia al tipo de agrupamiento de las partículas del suelo; por lo cual se encuentra de tipo laminar, de bloques, prismáticas, masivas o sin estructura.

    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .col-lg-10.bg-color-1.px-3.py-2
        .h3.mx-5.mb-0 Infiltración y capacidad de retención
        
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right") 
        p.mb-3 Como infiltración se conoce el paso del agua a través de la superficie de la tierra, por lo cual a medida que el agua desciende a niveles bajos (inferiores), el volumen de espacio poroso disminuye y a su vez la velocidad con la que el agua penetra en el suelo.
        p.mb-3 Es importante tener en cuenta que en suelos arenosos el agua infiltra con una velocidad mayor que en los suelos arcillosos, por lo cual se deben tener en cuenta a la hora de establecer el sistema de riego para un cultivo.
        p.mb-3 También es importante resaltar que en suelos arcillosos o arenosos (de partículas finas) su retención del agua es mayor, mientras que en suelos arenosos (partículas gruesas) la retención del agua es menor.
        p.mb-3 Teniendo en cuenta la información anterior se puede inferir que, para efectos del sistema de riego en un cultivo, si el terreno es arcilloso el tiempo de riego es mayor y la frecuencia de riego también, mientras que en suelo arenoso, el tiempo de riego será menor, pero la frecuencia de riego mayor. Siendo así que cobra gran importancia la capacidad de infiltración y retención del agua en un cultivo.
      .col-12.col-lg-4.mb-5(data-aos="fade-left")
        img(src='@/assets/curso/images/tema1/img_19.png'  alt='')

      
    Separador
    
    #t_2_2.titulo-segundo
      .h2 2.2  Agua en el suelo y estados de humedad
   
    .row.align-items-center.justify-content-center.mb-5
      p.mb-4 La variabilidad de la humedad del suelo afecta directamente el crecimiento de las plantas, con una baja absorción de agua se reduce también la absorción de nutrientes y el cultivo lo expresa en una menor tasa de crecimiento y por ende menor rendimiento.
      p.mb-4 En el suelo se encuentran diferentes tipos de agua, los cuales juegan un papel trascendental en el desarrollo de la planta, a continuación:

      .tarjeta.bg_grad-01.p-3.mb-5(data-aos="zoom-in-up")
        SlyderA(tipo="b")

          .row.justify-content-center.align-items-star.p-3
            .col-md-5.mb-4.mb-md-0
              h4 Bovinos y bufalinos
              p.mb-4 Se caracterizan por ser rumiantes y duran entre 9 y 11 horas en pastoreo continúo organizados en grupos en donde predomina la jerarquía y cualquier cambio los altera. Su comportamiento depende de la edad, etapa sexual, crías o lugar de estadía pues en hacinamiento el estrés produce cambios de conducta. 
              p.mb-4 Su audición es aguda y sensible por ello se recomienda evitar ruidos a no ser que se utilice música que oculte cualquier ruido extraño dentro de las áreas de trabajo. Tienen una visión frontal binocular de 360º y su compartimiento es rutinario.

            .col-md-7
              figure
                img(src='@/assets/curso/images/tema1/img_1.png', alt='Texto que describa la imagen')

          .row.justify-content-center.align-items-star.p-3
            .col-md-5.mb-4.mb-md-0
              h4 Equinos
              p.mb-4 Se caracterizan por una vista aguda y visión amplia, es animal de manada y súper activo al medio donde su conformación está regida por macho alfa y subordinados. La alimentación es selectiva y solo duermen un promedio de 3 horas, en estado confinado por lo que se recomiendan los corrales en forma redonda. 
              p.mb-4 En altos niveles de estrés el animal tiende a presentar desmayos entonces no se recomienda su manejo con animales como perros ni tábanos. Quien lo maneje no se le recomienda hacer movimientos repentinos pues alerta al animal por lo que lo mejor es vendar los ojos o transportarlo con la manada.

            .col-md-7
              figure
                img(src='@/assets/curso/images/tema1/img_1.png', alt='Texto que describa la imagen')

          .row.justify-content-center.align-items-star.p-3
            .col-md-5.mb-4.mb-md-0
              h4 Porcinos
              p.mb-3 Muy sensible a los sonidos, tienen vista deficiente y las temperaturas altas provocan altos niveles de estrés, muy agresivos cuando se mezclan con animales de otros grupos, por motivos de hacinamientos muestran comportamientos de canibalismo y se recomienda buena luz en los lugares de alojamiento.

            .col-md-7
              figure
                img(src='@/assets/curso/images/tema1/img_1.png', alt='Texto que describa la imagen')
                
          .row.justify-content-center.align-items-star.p-3
            .col-md-5.mb-4.mb-md-0
              h4 Ovinos/caprinos y aves de corral
              p.mb-3 Los primero son poligástricos, animales sociables, pero son muy territoriales y pueden reconocer rostros, olores y sabores durante años, en el caso de las aves son jerárquicas, en hacinamiento tienen a ser caníbales y se caracterizan por ser mono gástrico y carecer de olfato y gusto siendo animales diurnos dependientes del fotoperiodo (luz).

            .col-md-7
              figure
                img(src='@/assets/curso/images/tema1/img_1.png', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({}),
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
