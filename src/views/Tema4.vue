<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 4
      h1(data-aos="fade-right") Sistemas de riego
    
    .row.align-items-center.justify-content-center.mb-0
      .col-lg-7(data-aos="fade-right") 
        p.mb-3 El riego del cultivo consiste en aportar agua al suelo para que las plantas tengan el suministro necesario para su desarrollo. En el riego el elemento más importante es el emisor (estructuras), quien reduce la presión a cero, pudiendo aplicar el agua en forma de gotas a la superficie del suelo o por aspersión en finas gotas.
        p.mb-3 Los emisores varían según tipo y modelo, desde los tubos perforados o microtubos a grandes diseños, por lo cual los sistemas de riego se basan en el tipo de emisor utilizado.
      .col-12.col-lg-5.mb-2(data-aos="fade-left")
        img(src='@/assets/curso/images/tema4/img_1.png'  alt='')
    
    Separador

    #t_4_1.titulo-segundo
      .h2(data-aos="fade-right") 4.1   Métodos de riego
      
    .row.align-items-center.justify-content-center.mb-0
      .col-12.col-lg-6.mb-2(data-aos="fade-left")
        img(src='@/assets/curso/images/tema4/img_2.png'  alt='')
      .col-lg-6(data-aos="fade-right") 
        p.mb-3 La clasificación de los métodos de riego, está dada por la forma como el agua es distribuida sobre el suelo, teniendo en cuenta características topográficas, tipo de cultivo, disponibilidad de agua, costos y tecnologías.
        p.mb-3 Los métodos superficiales, involucran que el agua penetre desde la superficie a intervalos de tiempo, hasta que la lámina de agua alcance un espesor adecuado para su manejo, permitiendo que el agua penetre en el suelo a medida que ésta escurre sobre el terreno.

    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .col-lg-10.bg-color-1.px-3.py-2.mb-2
        .h3.mx-5.mb-0.mt-4 Método por surcos

    p.mb-3 A continuación, se plantea cómo es este método: 

    .row.align-items-center.justify-content-center
      .col-12.col-lg-12.mb-5(data-aos="fade-left")
        img.ocultar(src='@/assets/curso/images/tema4/img_3.png'  alt='La imagen muestra los dos métodos de riesgo, según su primer nivel y segundo nivel.')
        img.mostrar(src='@/assets/curso/images/tema4/img_3_1.png'  alt='La imagen muestra los dos métodos de riesgo, según su primer nivel y segundo nivel.')
        
    .row.justify-content-justify.align-items-justify.mb-5
      p.mb-3 Denominado también pro desborde o anegamiento, el cual consiste en dejar escurrir el agua desde canales, los cuales se trazan por los sectores más altos. Se humedece el suelo al tiempo que el agua cubre la superficie.
      p.mb-5 Las diferencias en las características topográficas configuran las variables de trazado y las dimensiones de las melgas (faja de terreno delimitada por bordes) (ver figura 6).
      
      .col-lg-12.mb-3
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 6.
          span  Riego por inundación
        
        img(src='@/assets/curso/images/tema4/img_4.png'  alt='La imagen muestra las características topográficas que tiene un riego por inundación.')
        figcaption Nota. Manual – métodos de riego (2012). https://fundacionsuna.org/wp-content/uploads/PDF/Jaime-Lamo/MANUAL-M%C3%89TODOS-DE-SISTEMAS-DE-RIEGO.pdf

    p.mb-3 Un sistema de riego por superficie, se componen de:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/images/tema4/img_111.png", alt="alt")
          .crd_hover_txt--body.text-center
            h4.mb-3 a. Distribución del agua
            p.mb-0 Compuesto por obras de instalación que transportan el agua desde la captación hasta el cultivo, por lo cual contempla, la captación, red principal, red de distribución, red terciaria, red de avenamiento y drenaje.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/images/tema4/img_222.png", alt="alt")
          .crd_hover_txt--body.text-center
            h4.mb-3 b. Sistema de aforo
            p.mb-0 Permite el control exacto del caudal de agua para aplicar por el sistema de riego.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/images/tema4/img_333.png", alt="alt")
          .crd_hover_txt--body.text-center
            h4.mb-3 c. Sistemas de aplicación
            p.mb-0 Sistemas de aplicación, que involucra sifoncillos, caños, compuertas o acequias, válvulas de alfalfa, tuberías con compuertas, mangueras de polietileno.

    
    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .col-lg-10.bg-color-1.px-3.py-2.mb-3
        .h3.mx-5.mb-0.mt-4 Métodos por aspersión

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right") 
        p.mb-3 Implica la aplicación del agua en forma de lluvia más o menos intensa y uniforme sobre la parcela, con el fin de que el agua se infiltre en el mismo punto donde cae. El agua es asperjada; es decir, el caudal es suministrado en innumerables gotas pequeñas de agua, las cuales penetran el suelo, al tiempo que se aplica.
        p.mb-3 El agua se suministra al cultivo por medio de tuberías y aspersores, en condiciones de presión determinadas, por lo cual el agua se eleva para posteriormente caiga pulverizada o pequeñas gotas sobre el área a regar.
        p.mb-3 Los sistemas de riego por aspersión se pueden clasificar según el tipo de red de tuberías:
      
      .col-12.col-lg-4.mb-2(data-aos="fade-left")
        img(src='@/assets/curso/images/tema4/img_6.png'  alt='')
      
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-12  
        .titulo-sexto.color-acento-contenido.mb-5
          h5 Figura 7.
          span Sistemas de riego por aspersión

        .tarjeta.color-acento-contenido-tarjeta.p-4.mb-5
          .row.justify-content-center.align-items-center.p-3  

            .col-lg-4(data-aos="fade-left")
              span.text-bold Portátiles 
              p.mb-3 La tubería y la unidad de bombeo se puede mover dentro del área a regar. <br> Ej. Cañones, de brazo oscilante, de turbina.
              
              span.text-bold Semiportátiles 
              p.mb-3 Las tuberías laterales son móviles y portátiles, mientras que la unidad de bombeo permanece en un sitio determinado. <br> Ej. Pivote central.
              
              span.text-bold Fijos 
              p.mb-3 Tanto la unidad de bombeo como la tubería están localizadas en sitios determinados por el diseño.
            
            .col-lg-8(data-aos="fade-right") 
              img(src='@/assets/curso/images/tema4/img_7.png'  alt='La imagen muestra un Sistemas de riego por aspersión, según el tipo de red de tuberías.')

        .tarjeta.tarjeta--gris.p-4
          .row.justify-content-center.align-items-center.p-3  
            .col-lg-5(data-aos="fade-left")
              span.text-bold Un sistema de riego por aspersión se componen de: 
              ul.lista-ul
                li
                  i.lista-ul__vineta
                  | Fuente de energía (motobombas). 
                li
                  i.lista-ul__vineta
                  | Tuberías, entrega el agua al aspersor.
                li
                  i.lista-ul__vineta
                  | Accesorios, encontrando derivaciones reducciones, control de presión, entre otros. 
                li
                  i.lista-ul__vineta
                  | Elevadores, tubos que conectan la tubería lateral y el aspersor, la cual ayuda a romper la turbulencia del agua. 
                li
                  i.lista-ul__vineta
                  | Aspersores, responsables de la entrega del agua.
              
            .col-lg-7(data-aos="fade-right") 
              img(src='@/assets/curso/images/tema4/img_8.png'  alt='')

    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .col-lg-10.bg-color-1.px-3.py-2.mb-3
        .h3.mx-5.mb-0.mt-4 Método por goteo

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-5(data-aos="fade-right") 
        p.mb-3 Consiste en aplicar el agua en gotas, directamente en el área de plantación. El agua se infiltra al mismo tiempo que se aplica, de manera continua o a intervalos. Mediante este método el agua se aplica según los requerimientos del cultivo; sin embargo, requiere de tecnología que permita determinar la frecuencia y cantidad de agua que se debe aplicar.
        
      .col-12.col-lg-7.mb-2(data-aos="fade-left")
        img(src='@/assets/curso/images/tema4/img_21.png'  alt='')
      
    Separador

    #t_4_2.titulo-segundo
      .h2(data-aos="fade-right") 4.2  . Criterios de Selección

    .row.align-items-center.justify-content-center.mb-5
      p.mb-4 La selección del método de riego depende del tipo de cultivo, tipo de suelo, topografía, economía, el clima, la mano de obra, así como el manejo del riego y parcela. Además del grado de sistematización del terreno, pues seleccionar el método de riego implica la toma de decisiones de acuerdo a las condiciones del predio donde se encuentra la plantación y sistematización del proceso. A continuación, se pueden consultar los criterios de selección con más detalle:
      
      .tarjeta.bg_grad-02.p-3.mb-5(data-aos="zoom-in-up")
        SlyderA(tipo="b")

          .row.justify-content-center.align-items-star
            .col-md-5.mb-4.mb-md-0.p-5.h-auto
              h4 Tipo de cultivo
              p Este parámetro determina el tipo de riego, pues no todos los sistemas de riego funcionan para todos los cultivos.

            .col-md-7
              figure
                img(src='@/assets/curso/images/tema4/img_9.png', alt='Texto que describa la imagen')

          .row.justify-content-center.align-items-star
            .col-md-5.mb-4.mb-md-0.p-5
              h4 Topografía
              p Dependiendo si el terreno y las características físicas, geográficas y geológicas del terreno, y sus variaciones y alteraciones, si es plano, inclinado o muy inclinado, el sistema de riego debe optimizar el desarrollo de la planta.

            .col-md-7
              figure
                img(src='@/assets/curso/images/tema4/img_10.png', alt='Texto que describa la imagen')

          .row.justify-content-center.align-items-star
            .col-md-5.mb-4.mb-md-0.p-5
              h4 Disponibilidad del agua
              p Involucra el caudal, tiempo e intervalo de entregas. Para calcular la disponibilidad del agua es necesario obtener el tiempo disponible, como resta entre el tiempo total, el tiempo por paradas de mantenimiento programado y el tiempo por parada no programada.

            .col-md-7
              figure
                img(src='@/assets/curso/images/tema4/img_11.png', alt='Texto que describa la imagen')
                
          .row.justify-content-center.align-items-star
            .col-md-5.mb-4.mb-md-0.p-5
              h4 Suelo
              p Comprende la profundidad, textura, estructura, drenaje, relación agua-suelo, capacidad de almacenaje de agua y velocidad de penetración del agua.

            .col-md-7
              figure
                img(src='@/assets/curso/images/tema4/img_12.png', alt='Texto que describa la imagen')
                
          .row.justify-content-center.align-items-star
            .col-md-5.mb-4.mb-md-0.p-5
              h4 Costos
              p Involucra costos de construcción y operación del sistema.

            .col-md-7
              figure
                img(src='@/assets/curso/images/tema4/img_13.png', alt='Texto que describa la imagen')                

    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .col-lg-10.bg-color-1.px-3.py-2.mb-3
        .h3.mx-5.mb-0.mt-4 Equipos de medición y control

    SlyderF.custom(columnas="col-lg-6 col-xl-4")

      .tarjeta-avatar-b.mb-3
        .tarjeta-avatar-b__img
          img.img-t.m-auto(src='@/assets/curso/images/tema4/img_14.svg', alt='')
        .tarjeta.tarjeta--gris.shadow-sm
          .p-2
            p.mt-3 
              span.text-bold Tuberías, 
              | sistema de conducción del agua para riego.

    
      .tarjeta-avatar-b.mb-3
        .tarjeta-avatar-b__img
          img.img-t.m-auto(src='@/assets/curso/images/tema4/img_14.svg', alt='')
        .tarjeta.tarjeta--gris.shadow-sm
          .p-2
            p.mt-3 
              span.text-bold Válvulas de aire,
              | que permiten eliminar el aire del sistema de riego.
    
      .tarjeta-avatar-b.mb-3
        .tarjeta-avatar-b__img
          img.img-t.m-auto(src='@/assets/curso/images/tema4/img_14.svg', alt='')
        .tarjeta.tarjeta--gris.shadow-sm
          .p-2
            p.mt-3 
              span.text-bold Filtros,
              | son equipos que se instalan en el sistema de riego para eliminar impurezas del agua que puedan obstruir la salida del agua a través del emisor.
    
      .tarjeta-avatar-b.mb-3
        .tarjeta-avatar-b__img
          img.img-t.m-auto(src='@/assets/curso/images/tema4/img_14.svg', alt='')
        .tarjeta.tarjeta--gris.shadow-sm
          .p-2
            p.mt-3 
              span.text-bold Accesorios en PVC, 
              | codos, T, adaptador (macho y hembra), roscas, uniones.
    
      .tarjeta-avatar-b.mb-3
        .tarjeta-avatar-b__img
          img.img-t.m-auto(src='@/assets/curso/images/tema4/img_14.svg', alt='')
        .tarjeta.tarjeta--gris.shadow-sm
          .p-2
            p.mt-3 
              span.text-bold Válvulas de paso, 
              | utilizadas para sectorizar el sistema de riego.
    
      .tarjeta-avatar-b.mb-3
        .tarjeta-avatar-b__img
          img.img-t.m-auto(src='@/assets/curso/images/tema4/img_14.svg', alt='')
        .tarjeta.tarjeta--gris.shadow-sm
          .p-2
            p.mt-3 
              span.text-bold Inyectores de agroquímicos, 
              | se utilizan cuando se va a aplicar fertilizantes o agroquímicos mediante sistema de riego.
    
      .tarjeta-avatar-b.mb-3
        .tarjeta-avatar-b__img
          img.img-t.m-auto(src='@/assets/curso/images/tema4/img_14.svg', alt='')
        .tarjeta.tarjeta--gris.shadow-sm
          .p-2
            p.mt-3 
              span.text-bold Bombas, 
              | equipo de bombeo compuesto por motor (combustión o eléctrico) y bomba.
        
      .tarjeta-avatar-b.mb-3
        .tarjeta-avatar-b__img
          img.img-t.m-auto(src='@/assets/curso/images/tema4/img_14.svg', alt='')
        .tarjeta.tarjeta--gris.shadow-sm
          .p-2
            p.mt-3 
              span.text-bold Válvulas de alivio, 
              | sirve para expulsar la presión para proteger el sistema de rupturas de la tubería o daño de la bomba.    
      
      .tarjeta-avatar-b.mb-3
        .tarjeta-avatar-b__img
          img.img-t.m-auto(src='@/assets/curso/images/tema4/img_14.svg', alt='')
        .tarjeta.tarjeta--gris.shadow-sm
          .p-2
            p.mt-3 
              span.text-bold Reductor de presión, 
              | son instalados en las tuberías secundarias, para reducir presiones altas.    
      
      .tarjeta-avatar-b.mb-3
        .tarjeta-avatar-b__img
          img.img-t.m-auto(src='@/assets/curso/images/tema4/img_14.svg', alt='')
        .tarjeta.tarjeta--gris.shadow-sm
          .p-2
            p.mt-3 
              span.text-bold Manómetros, 
              | aparatos que ayudan a medir la presión en diferentes puntos y así poder controlar el funcionamiento del sistema.
              

    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .col-lg-10.bg-color-1.px-3.py-2.mb-3
        .h3.mx-5.mb-0.mt-4 Variables de medición
    
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-6
        figure
          img(src='@/assets/curso/images/tema4/img_15.png', alt='Texto que describa la imagen')         

      .col-lg-6
        p.mb-2 Dentro de las variables del sistema de riego de cultivos se tiene:

        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img.img-t.m-auto(src='@/assets/curso/images/tema4/img_16.svg', alt='')
          .tarjeta.tarjeta--gris.shadow-sm
            .p-2
              p.mt-3 
                span.text-bold Caudal, 
                | cantidad de agua en litros que proporciona la fuente de abastecimiento en una unidad de tiempo L/s, es determinado medianteaforos, ya que permite medir la cantidad de agua que pasa en un tiempo determinado.
        
        .row.align-items-center.justify-content-center
          .col-lg-4 
            .tarjeta-avatar-b.mb-2
              .tarjeta-avatar-b__img
                img.img-t.m-auto(src='@/assets/curso/images/tema4/img_17.svg', alt='')
              .tarjeta.tarjeta--gris.shadow-sm
                .p-2
                  p.text-center.mt-3
                    span.text-bold Humedad. 
                    
          .col-lg-4 
            .tarjeta-avatar-b.mb-2
              .tarjeta-avatar-b__img
                img.img-t.m-auto(src='@/assets/curso/images/tema4/img_18.svg', alt='')
              .tarjeta.tarjeta--gris.shadow-sm
                .p-2
                  p.text-center.mt-3
                    span.text-bold pH. 
                              
          .col-lg-4 
            .tarjeta-avatar-b.mb-2
              .tarjeta-avatar-b__img
                img.img-t.m-auto(src='@/assets/curso/images/tema4/img_19.svg', alt='')
              .tarjeta.tarjeta--gris.shadow-sm
                .p-2
                  p.text-center.mt-3
                    span.text-bold CE. 


    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .col-lg-10.bg-color-1.px-3.py-2.mb-3
        .h3.mx-5.mb-0.mt-4 Requerimientos de riego

    p.mb-3 El requerimiento de riego representa la cantidad de agua que requiere el cultivo, la cual se satisface a través de un sistema de riego, a fin de garantizar las condiciones óptimas para el desarrollo de la plantación.
    p.mb-5 Es necesario reconocer la demanda hídrica del cultivo y la relación con la pluviometría natural, con el fin de establecer la necesidad de riego complementario, con el que se debe satisfacer la máxima evapotranspiración del cultivo y así mismo lograr una productividad alta y estable, con calidad de cosechas.
      
    //- .bg10.pt-5.mb-4
    .row.justify-content-end.align-items-center.bg10
      .col-lg-10.align-self-center.mb-4.mb-lg-0
        p.ps-5 Los datos iniciales a tener en cuenta son el consumo del cultivo durante todo el ciclo, consumo diario en periodos críticos, cuantificación del déficit, probabilidad de ocurrencia del déficit y estimación de pérdidas.
        p.ps-5 La necesidad de agua del cultivo se refiere a la cantidad del recurso hídrico requerido para compensar la pérdida de agua por evaporación y transpiración (evapotranspiración). Por ende, un cultivo alcanza el potencial cuando obtiene el agua necesaria para el desarrollo en las condiciones óptimas de manejo.
      .col-lg-2(data-aos="fade-left")
        figure
          img.img-t(src='@/assets/curso/images/tema4/img_20.png', alt='').mx-auto 
    
</template>

<script>
export default {
  name: 'Tema4',
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
