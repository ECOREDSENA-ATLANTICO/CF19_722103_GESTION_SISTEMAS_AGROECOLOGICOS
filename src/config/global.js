export default {
  global: {
    componenteFormativo: 'Riego y drenaje',
    descripcionCurso:
      'En este componente formativo se abordan temas que permitirán diseñar e implementar un sistema de riego para cultivos, teniendo en cuenta el tipo de agua y sistemas de abastecimiento, propiedades del suelo, relación del agua-suelo-planta y clima, tipos de sistemas de riego, métodos de riego y drenaje y la normatividad asociada.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Potencial hídrico',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Propiedades del suelo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Textura y estructura',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Agua en el suelo y estados de humedad',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Relación agua-suelo-planta y clima',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Sistemas de riego',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Métodos de riego',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Criterios de selección',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Drenaje',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '4. Sistemas de riego',
      referencia:
        'Briceño, M.; F. Álvarez; U. Barahona (2012). Manual de Riego y Drenaje. Programa de Manejo Integrado de Plagas en América Central. Carrera de Ciencia y Producción Agropecuaria. Escuela Agrícola Panamericana.',
      tipo: 'Documento',
      link:
        'https://www.se.gob.hn/media/files/media/Modulo_5_Manual_de_Riego_y_Drenaje..pdf',
    },
    {
      tema: '4. Sistemas de riego',
      referencia:
        'Jiménez, J. L. (2020). Manual Métodos de Riego. Universidad Nacional Experimental Politécnica de la Fuerza Armada Nacional (UNEFA).',
      tipo: 'Documento',
      link:
        'https://fundacionsuna.org/wp-content/uploads/PDF/Jaime-Lamo/MANUAL-M%C3%89TODOS-DE-SISTEMAS-DE-RIEGO.pdf',
    },
    {
      tema: '4. Sistemas de riego',
      referencia:
        'TvAgro por Juan Gonzalo Ángel. (2016). Tipos de sistemas de riego. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/AzNhZdEEWfc',
    },
  ],
  glosario: [
    {
      termino: 'Agua',
      significado:
        'el término agua, generalmente, se refiere a la sustancia en su estado líquido, pero la misma puede hallarse en su forma sólida llamada hielo, y en forma gaseosa denominada vapor.',
    },
    {
      termino: 'Drenaje',
      significado:
        'eliminación natural o artificial del agua superficial y del agua subterránea de un área con exceso de agua.',
    },
    {
      termino: 'Sistema de riego',
      significado: 'permiten suministrar el agua necesaria al cultivo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Jiménez, J. L. (2020). Manual Métodos de Riego. Universidad Nacional Experimental Politécnica de la Fuerza Armada Nacional (UNEFA).',
      link:
        'https://fundacionsuna.org/wp-content/uploads/PDF/Jaime-Lamo/MANUAL-M%C3%89TODOS-DE-SISTEMAS-DE-RIEGO.pdf',
    },
    {
      referencia:
        'Briceño, M.; F. Álvarez; U. Barahona (2012). Manual de Riego y Drenaje. Programa de Manejo Integrado de Plagas en América Central. Carrera de Ciencia y Producción Agropecuaria. Escuela Agrícola Panamericana. ',
      link:
        'https://www.se.gob.hn/media/files/media/Modulo_5_Manual_de_Riego_y_Drenaje..pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Desarrollo Curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Diana Julieth Núñez Ortegón',
          cargo: 'Experto Temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego E. Acevedo Guevara',
          cargo: 'Diseñador instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor Metodológico',
          centro: 'Centro de Diseño y Metrología  - Distrito Capital',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología - Distrito Capital',
        },
      ],
    },
    // {
    //   titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
    //   autores: [
    //     {
    //       nombre: 'Nombre responsable',
    //       cargo: 'Diseñador de Contenidos Digitales',
    //       centro: 'Centro de Servicios de Salud - Regional Antioquia',
    //     },
    //     {
    //       nombre: 'Nombre responsable',
    //       cargo: 'Desarrollador Fullstack',
    //       centro: 'Centro de Servicios de Salud - Regional Antioquia',
    //     },
    //     {
    //       nombre: 'Nombre',
    //       cargo: 'Animador y Producción audiovisual',
    //       centro: 'Centro de Servicios de Salud - Regional Antioquia',
    //     },
    //     {
    //       nombre: 'Nombre',
    //       cargo: 'Actividad Didáctica',
    //       centro: 'Centro de Servicios de Salud - Regional Antioquia',
    //     },
    //   ],
    // },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernan Tejada',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
