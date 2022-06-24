export default {
  global: {
    componenteFormativo: 'Cierre de ventas de productos mayoristas',
    descripcionCurso:
      'A los vendedores se les evalúa usualmente por sus ventas efectivas, no por sus intenciones o gestiones, en este sentido, el “cierre de venta de productos mayoristas”, entendido como el momento en el que el cliente acepta de manera formal la propuesta comercial, representa el resultado tangible del buen desempeño de un vendedor.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Mezcla de mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Producto',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Precio',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3 ',
            titulo: 'Plaza',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Promoción',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Etiqueta empresarial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Propuesta comercial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Atención al cliente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Inclusión',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Discapacidad',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Normativa',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: ' Ventas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Tipos',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Técnicas',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Objeciones',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: ' Formalización de la venta',
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
      tema: 'Mezcla de mercadeo',
      referencia:
        'Kotler, P. & Armstrong, G. (2007). Marketing, versión para Latinoamérica. Decimoprimera edición. Pearson Educación.',
      tipo: 'Libro impreso',
      link: '',
    },
    {
      tema: 'Etiqueta empresarial',
      referencia:
        'Secretaria Distrital de Desarrollo Económico de Bogotá – Cámara de Comercio de Bogotá. (2010). Cartilla práctica Etiqueta empresarial. Editorial Kimpres. ',
      tipo: 'Cartilla',
      descarga: '/downloads/cartilla_etiquetaempresarial.pdf',
    },
    {
      tema: 'Técnicas',
      referencia: 'Navarro, M. (2012). Técnicas de ventas. Red Tercer Milenio.',
      tipo: 'Libro digital',
      link:
        'https://www.academia.edu/22896902/T%C3%A9cnicas_de_ventas_MARIANA_ELIZABETH_NAVARRO_MEJIA',
    },
    {
      tema: 'Objeciones',
      referencia:
        'Diccionario de la Real Academia de la Lengua Española. (s.f.). Objeción. RAE.',
      tipo: 'Diccionario en línea',
      link: 'https://dle.rae.es/objeci%C3%B3n',
    },
    {
      tema: 'Objeciones',
      referencia: 'Navarro, M. (2012). Técnicas de ventas. Red Tercer Milenio.',
      tipo: 'Libro digital',
      link:
        'https://www.academia.edu/22896902/T%C3%A9cnicas_de_ventas_MARIANA_ELIZABETH_NAVARRO_MEJIA',
    },
  ],
  glosario: [
    {
      termino: 'Cliente',
      significado:
        'Es la razón de ser de la empresa. Es la persona o empresa que paga por los productos de la empresa.',
    },
    {
      termino: 'Cliente potencial',
      significado:
        'Son aquellos clientes potenciales que tienen como características necesitar el producto que ofrece la empresa y tener la capacidad adquisitiva para adquirirlo.',
    },
    {
      termino: 'Contrato',
      significado:
        'Documento que formaliza una operación comercial entre empresas o personas. Tiene validez jurídica y siempre lleva asociado un objeto.',
    },
    {
      termino: 'Mercadeo',
      significado:
        'Es el proceso responsable de diseñar y operar las estrategias para que los clientes adquieran los productos de la empresa de una forma rentable.',
    },
    {
      termino: 'Mezcla de mercadeo',
      significado:
        'Hace alusión a las cuatro P del mercadeo. Son las cuatro variables básicas en el mercadeo: producto, precio, plaza, promoción.',
    },
    {
      termino: 'Precio',
      significado:
        'Es el valor de intercambio entre oferentes y demandantes. Es la única variable de la mezcla de mercadeo que genera ingresos para la compañía.',
    },
    {
      termino: 'Producto',
      significado:
        'Es el objeto de la transacción. En el mercadeo moderno un producto puede ser un tangible, un intangible, una marca, una persona o un lugar.',
    },
    {
      termino: 'Prospectar',
      significado:
        'Ejercicio que realizan las empresas para seleccionar sus posibles clientes.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ardila, E. y Sastoque, F. (1984) Técnica de ventas: el producto.  SENA.',
      link: 'https://repositorio.sena.edu.co/handle/11404/1896',
    },
    {
      referencia:
        'Kotler, P. & Armstrong, G. (2007). Marketing, versión para Latinoamérica. Decimoprimera edición. Pearson Educación.',
      link: '',
    },
    {
      referencia: 'Navarro, M. (2012). Técnicas de ventas. Red Tercer Milenio.',
      link:
        'https://www.academia.edu/22896902/T%C3%A9cnicas_de_ventas_MARIANA_ELIZABETH_NAVARRO_MEJIA',
    },
    {
      referencia:
        'Secretaria Distrital de Desarrollo Económico de Bogotá – Cámara de Comercio de Bogotá. (2010). Cartilla práctica Etiqueta empresarial. Editorial Kimpres.',
      link:
        'https://bibliotecadigital.ccb.org.co/bitstream/handle/11520/1172/4614_cartilla_etiquetaempresarial.pdf?sequence=1&isAllowed=y',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diana Carolina Jaramillo Rojas',
        cargo: 'Experta temática',
        centro: 'Centro de Comercio y Servicios Regional - Cauca',
      },
      {
        nombre: 'Diego Acevedo',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología Regional - Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Centro de Diseño y Metrología Regional - Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Ándres Díaz Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
