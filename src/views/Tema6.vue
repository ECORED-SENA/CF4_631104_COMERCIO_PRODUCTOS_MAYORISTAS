<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero.colr_1
        span 6
      h1 Ventas
    
    p.mb-5 <b>La venta en sí misma es una transacción entre dos agentes económicos, es un proceso voluntario donde una empresa o persona ofrece de manera legal productos a otra denominada cliente potencial</b>, buscando que esta pague el precio esperado. De acuerdo con esto, para que se realice una venta debe asegurarse: i. la participación de dos roles (comprador y vendedor), ii. un producto y iii. un valor de intercambio (precio); sin embargo, para realizarla de manera adecuada e influenciar el éxito de la misma, las ventas deben verse de forma integral. Por ello, se han definido tres momentos secuenciales: preventa, venta y postventa, en los cuales se desarrolla el ciclo comercial:

    .row.mb-5.justify-content-center
      .col-12.col-md-3.mb-3.mb-md-0
        figure
          img(src='@/assets/curso/tema6/t6-1.svg', alt='Texto que describa la imagen')
      .col-12.col-md-7.d-flex.align-items-center
        .tarjeta.bgr_19.p-2.p-md-4.mb-5
          SlyderA(tipo="b")
            .row
              .col-md-12.px-4
                span.mb-0.text-bold Venta
                p Es el más grande momento de verdad, es decir, allí se tiene el contacto con el cliente (a través de cualquier medio presencial o virtual), se realiza la presentación del portafolio a ofrecer, se resuelve sus inquietudes y se espera que el vendedor llegue al objetivo de esta etapa: el cierre de la venta, es decir, cuando el cliente acepta adquirir el bien/servicio. En la venta se aplican las técnicas de ventas, se debaten objeciones se implementan modelos de negociación según como se vaya desarrollando el proceso y se realizan todos los esfuerzos comerciales para que el prospecto diga “sí” voy a comprar el producto.
            .row
              .col-md-12.px-4
                span.mb-0.text-bold Preventa
                p Es el momento previo a la venta. En esta etapa el vendedor define quiénes son sus clientes potenciales, de allí extrae aquellos con mayor probabilidad de éxito (llamados clientes prospectos), los contacta, genera el acercamiento, detecta su necesidad y prepara el tipo de oferta (portafolio) a presentar. Una buena preventa tiene gran componente de trabajo previo al contacto con el cliente prospecto, dado que se debe tener buen conocimiento del portafolio de productos, se debe investigar sobre el perfil del cliente y se debe propender por generar un acercamiento muy asertivo y respetuoso.
            .row
              .col-md-12.px-4
                span.mb-0.text-bold Postventa
                p Es la última etapa del proceso comercial, pero no la menos importante. En este momento del ciclo es donde se crean verdaderos vínculos con el cliente, fidelizarlo e incluso convertirlo en apóstol de la empresa (es decir, aspirar a que el cliente que no solo compre, sino que también recomiende a terceros la marca o producto. Si bien esta fase ha estado atribuida más al proceso de servicio al cliente, todos los puntos de contactos son importantes para generar una experiencia positiva con el cliente después de haber realizado la compra.

    p De acuerdo con lo anterior, a continuación se describen cada una de las fases que conforman el ciclo de venta y que de acuerdo con la estructura deben darse secuencialmente: preventa (primer momento), venta (segundo momento) y postventa (tercer momento).

    separador

    #t_6_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 6.1  Tipos

    .row.mb-5
      .col-12.col-md-8.mb-3.mb-md-0
        p Existen diferentes tipos de ventas; sin embargo, para un vendedor de ventas mayoristas es importante conocer dos tipologías, la clasificación asociada al medio por el cual se realizan y las ventas según el tipo de cliente al cual se realiza la venta.
        p.mb-0.text-bold Tipos de ventas según el medio
        p.mb-0 según el medio a través del cual se realice la venta se encuentran: las ventas presenciales, que son aquellas que se realizan con presencia física del vendedor, son las llamadas ventas tradicionales; ventas telefónicas, son aquellas que se hacen a través de los call center (centros de llamadas) y las ventas en canales digitales, que son aquellas que se realizan a través de plataformas tecnológicas, tales como redes sociales, <em>marketplace</em> (tiendas virtuales) o <em>bot</em> (robots).
      .col-12.col-md-4
        figure
          img(src='@/assets/curso/tema6/t6-2.png', alt='Texto que describa la imagen')
      
    .row.justify-content-center(data-aos="zoom-out-down")
      .col-12.col-md-10
        .titulo-sexto.color-acento-contenido.mb-5
          h5 Tabla 2
          span Ventajas y desventajas de las ventas según el medio 
        .tabla-a.color-acento-contenido.mb-5.modif_24
          table.bgr_11   
            thead
              tr
                th(style="width:24%") Medio a través del cual se realiza la venta
                th(style="width:40%")  Ventaja
                th(style="width:40%")  Desventaja
            tbody
              tr
                td.bgr_12.text-bold.text-center 
                  p.mb-0.text-bold Venta presencial
                td.ps-3.ps-md-4.bgr_13 Generar mayor cercanía con el cliente
                td.bgr_14.text-bold.text-center 
                  p.mb-0 Representan mayores costos para la empresa
              tr
                td.bgr_12.text-bold.text-center 
                  p.mb-0.text-bold Venta telefónica
                td.ps-3.ps-md-4.bgr_13 Tienen un tiempo rápido de cierre
                td.bgr_14.text-bold.text-center 
                  p.mb-0 En ocasiones generan desconfianza entre los clientes
              tr
                td.bgr_12.text-bold.text-center 
                  p.mb-0.text-bold Venta en canales digitales
                td.ps-3.ps-md-4.bgr_13 Tienen los menores costos frente a las ventas presenciales y telefónicas
                td.bgr_14.text-bold.text-center 
                  p.mb-0 No aplican para todo tipo de clientes, dada la brecha digital (clientes que no tienen el conocimiento o la confianza para comprar en medios digitales)

    p.text-bold Tipos de ventas según el cliente al cual se dirigen los productos 
    p Este concepto de tipos de ventas según el tipo de cliente comenzó con fuerza en el comercio electrónico; sin embargo, actualmente es utilizado también en el contexto offline. Las ventas Business to Business (conocidas como B2B) son aquellas que realiza una empresa a otra empresa, las ventas Business to Consumer (conocidas como B2C) son las que realiza una empresa al consumidor final, las ventas Business to Government (B2G) son aquellas en las que una empresa vende sus productos al gobierno o a entidades públicas. 
    p.mb-5 A modo de ejemplo, se tienen las siguiente situaciones, una empresa de telecomunicaciones vende sus productos a los clientes hogares y a las empresas, en este caso, se indica que dicha compañía vende bajo tipos de ventas B2C y B2B; en un segundo caso, una empresa importadora vende al por mayor equipos de cómputo a distribuidores, por tanto, esta empresa realiza ventas exclusivamente B2B; en un tercer caso, una empresa constructora está dedicada a la construcción de vías, por lo que su cliente es el Estado, en este sentido realiza ventas B2G. 

    figure.mb-5(data-aos="zoom-in-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    separador

    #t_6_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 6.2 Técnicas

    .row.mb-5
      .col-12.col-md-8.mb-3.mb-md-0
        p Existen muchos tipos de técnicas de ventas, no hay una mejor que otra, ya que la selección de la más idónea a utilizar debe realizarse teniendo en cuenta cómo es el modelo comercial de la empresa, con qué tipo de clientes se está tratando y cuál es el tipo de portafolio a ofrecer. Las técnicas con mayor usabilidad en el mercado son:
        p.mb-0.text-bold Técnica de características, beneficios y ventajas
        p.mb-0 Este modelo conocido como CBV en español o FAB (features, advantages and benefits en inglés), es conocido por ser una de las técnicas más sencillas y más prácticas. Dicho modelo consiste en aplicar con el cliente cada una de las variables del acrónimo, ya que de esta manera podrá dar el vendedor un panorama muy amplio, iniciando con el producto y terminando con la descripción de las necesidades que satisface, a continuación se muestran algunos elementos importantes en este modelo.
      .col-12.col-md-4 
        figure
          img(src='@/assets/curso/tema6/t6-3.png', alt='Texto que describa la imagen')
  
    .row.mb-5.justify-content-center(data-aos="zoom-in-up")
      .col-12.col-md-10
        .row
          hr.modif_11
          .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
             figure.d-flex.justify-content-center
              img.img90(src='@/assets/curso/tema6/t6-4.svg' alt='AvatarTop')
          .col-12.col-lg-11.d-flex.align-items-center
            p.mb-0 En las características se describe el bien o servicio que se está ofreciendo, aquí se da respuesta al qué.
        .row
          hr.modif_11
          .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
             figure.d-flex.justify-content-center
              img.img90(src='@/assets/curso/tema6/t6-5.svg' alt='AvatarTop')
          .col-12.col-lg-11.d-flex.align-items-center
            p.mb-0 En las ventajas, consiste en narrar (o demostrar si es posible), siempre desde preceptos éticos, porque el producto que se está ofreciendo es mejor que otras opciones que existen en el mercado, se responde al “por qué es mejor”.
        .row
          hr.modif_11
          .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
             figure.d-flex.justify-content-center
              img.img90(src='@/assets/curso/tema6/t6-6.svg' alt='AvatarTop')
          .col-12.col-lg-11.d-flex.align-items-center
            p.mb-0 En beneficios, el interrogante a resolver es el para qué, es decir, qué es aquello (tangible o intangible) que obtendrá la persona o empresa que adquiera el producto .

    .row.mb-5.justify-content-center
      .col-12.col-md-3.mb-3.mb-md-0
        figure
          img(src='@/assets/curso/tema6/t6-7.svg' alt='AvatarTop')
      .col-12.col-md-7
        p La técnica de ventas de características, ventajas y beneficios se sugiere que sea utilizada en situaciones donde el producto que se está ofreciendo tiene mucha competencia en el mercado. Asimismo, el uso de este modelo implica que el vendedor tenga un conocimiento detallado del portafolio de la empresa, conocer lo que ofrece la competencia y lograr identificar cuáles son las necesidades del cliente.
        p.text-bold.mb-0 A continuación se plantea un ejemplo de la aplicación del modelo. El vendedor tiene por fin venderle un celular a un cliente aplicando el modelo CVB, entonces tendría:

    .row.mb-5.justify-content-center
      .col-12.col-md-4.mb-5.mb-md-0
        .bgr_37.p-4.h-100
          p.text-bold Características
          p.mb-0 Es un celular de la marca XXX, de 14 pulgadas, con dos cámaras de 10 megapíxeles cada una, almacenamiento de 5 gigas y conexión WI-FI.
      .col-12.col-md-4.mb-5.mb-md-0
        .bgr_37.p-4.h-100
          p.text-bold Ventajas
          p.mb-0 Tiene la cámara con mayor resolución del mercado, tiene garantía de un año (que otros no tienen), tiene un seguro antirrobo por seis meses, tiene aplicaciones de chat y música incluidas sin costo adicional.
      .col-12.col-md-4
        .bgr_37.p-4.h-100
          p.text-bold Beneficios
          p.mb-0 podrá tomar las mejores fotos que se pueda imaginar, tiene tanta memoria que no tendrá que borrar fotos, podrá reproducir la música de sus cantantes favoritos y tener acceso al <em>chat</em> cuando quiera.

    .row.justify-center.mb-5(data-aos="zoom-out-up").justify-content-center
      .col-12.col-lg-10
        .bloque-texto-g.bgr_27.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema6/t6-8.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-4.modif_12
            p.mb-0.text-bold Atención, interés, deseo, acción
            br
            p.mb-0 El modelo conocido como AIDA en español o (attention, interest, desire and action en inglés), también se ha denominado la técnica de los “estados mentales”, ya que acude a la emocionalidad en su discurso. Al igual que en el modelo anterior, el acróstico define cuál es la estructura del modelo, a continuación se describe cada uno de ellos. 
    
    .row.mb-5.justify-content-center(data-aos="zoom-in-up")
      .col-12.col-md-10
        .row
          hr.modif_11
          .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
             figure.d-flex.justify-content-center
              img.img90(src='@/assets/curso/tema6/t6-9.svg' alt='AvatarTop')
          .col-12.col-lg-11.d-flex.align-items-center
            p.mb-0 En la atención se deben realizar las tácticas o actividades necesarias para lograr que la marca y el producto sean visibles para el cliente potencial. Acá, la clave es la comunicación, es decir, sentar las condiciones para que se cree el canal con el prospecto.
        .row
          hr.modif_11
          .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
             figure.d-flex.justify-content-center
              img.img90(src='@/assets/curso/tema6/t6-10.svg' alt='AvatarTop')
          .col-12.col-lg-11.d-flex.align-items-center
            p.mb-0 En el interés, el objetivo es despertar en el cliente potencial la conciencia sobre el producto que se está ofreciendo, que él quiera saber más.
        .row
          hr.modif_11
          .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
             figure.d-flex.justify-content-center
              img.img90(src='@/assets/curso/tema6/t6-11.svg' alt='AvatarTop')
          .col-12.col-lg-11.d-flex.align-items-center
            p.mb-0 En el deseo, el reto del vendedor se centra en convertir en necesario y/o aspiracional el producto, alentar al cliente a que quiera adquirir el portafolio que se está ofreciendo.
        .row
          hr.modif_11
          .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
             figure.d-flex.justify-content-center
              img.img90(src='@/assets/curso/tema6/t6-12.svg' alt='AvatarTop')
          .col-12.col-lg-11.d-flex.align-items-center
            p.mb-0 En la acción, es concretar el proceso, es decir, lograr el cierre de la venta, hacer que el receptor del mensaje (nuestro cliente prospecto) haga lo que espera el vendedor, que no es má s que comprar el producto.
    
    .row.mb-5.justify-content-center
      .col-12.col-md-10
        p Ahora, con un ejemplo se analizará cómo el vendedor debe realizar la venta de un seguro de vida, aplicando el modelo AIDA se plantea el siguiente discurso de ventas:

    .row.mb-5.justify-content-center
      .col-12.col-md-8
        .tarjeta.bgr_31.p-2.p-md-4.mb-5  
          SlyderA(tipo="b")
            .row.p-4
              .col-md-12.p-3
                p.mb-0.text-bold Atención
                p.mb-0 Señor ¿se ha preguntado si en vez de comprar cada mes sus insumos de cafetería comprará de forma mensual sus elementos?
            .row.p-4
              .col-md-12.p-3
                p.mb-0.text-bold Interés
                p.mb-0 Podría generar ahorros importantes para su empresa, si realiza esta compra al por mayor.
            .row.p-4
              .col-md-12.p-3
                p.mb-0.text-bold Deseo
                p.mb-0 Y ¿si le digo que además del ahorro que representa comprar al por mayor, le podría dar 30 días de pago?
            .row.p-4
              .col-md-12.p-3
                p.mb-0.text-bold Acción
                p.mb-0 Indíqueme si está de acuerdo con esta oferta y si a partir del próximo pedido lo dimensionamos como una compra al por mayor para que genere los ahorros que le e stoy mencionando.

    .row.justify-content-center
      .col-12.col-md-10
        .row.mb-5.bgr_7.p-3
          .col-12.col-md-2
            figure.d-flex.justify-content-center
              img.img100(src='@/assets/componentes/calendario.svg', alt='Texto que describa la imagen')
          .col-12.col-md-10
            p.mb-0.text-bold Para recordar
            p.mb-0 En el ejemplo anterior se evidencia cómo el vendedor logró captar la atención del cliente potencial con una pregunta que lo puso a pensar y a partir de ahí establece un discurso de interés, deseo y acción centrada en los ahorros que le supone comprar al por mayor de forma mensual, en vez de comprar semanal. 

    .row.mb-5(data-aos="zoom-out-up").justify-content-center
      .col-12.col-lg-10
        .bloque-texto-g.bgr_35.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.modif(
            :style="{'background-image': `url(${require('@/assets/curso/tema6/t6-13.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-4.modif_1
            p.mb-0.text-bold Situación, problema, implicación, necesidad
            br
            p.mb-0 El modelo más conocido como SPIN (o de situation, problem, implication y need pay off por sus siglas en inglés) es una táctica de ventas interesante porque se basa en la resolución de problemas al cliente, y esto es bastante lógico si se parte del concepto que las necesidades están creadas y que justamente el rol del mercadeo y las ventas es satisfacerlas. Nuevamente, las preguntas aparecen como la clave para la buena aplicación del modelo, conozca a continuación la descripción de cada una de las etapas.

    .row.mb-5.justify-content-center(data-aos="zoom-in-up")
      .col-12.col-md-10
        .row
          hr.modif_11
          .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
             figure.d-flex.justify-content-center
              img.img90(src='@/assets/curso/tema6/t6-14.svg' alt='AvatarTop')
          .col-12.col-lg-11.d-flex.align-items-center
            p.mb-0 <b>En la situación:</b> se debe obtener información del cliente para determinar las condiciones que lo rodean.
        .row
          hr.modif_11
          .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
             figure.d-flex.justify-content-center
              img.img90(src='@/assets/curso/tema6/t6-15.svg' alt='AvatarTop')
          .col-12.col-lg-11.d-flex.align-items-center
            p.mb-0 <b>En el problema:</b> el centro de este momento es identificar cuál es la dificultad que el cliente afronta, es decir, cuál es la situación que está presentando.
        .row
          hr.modif_11
          .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
             figure.d-flex.justify-content-center
              img.img90(src='@/assets/curso/tema6/t6-16.svg' alt='AvatarTop')
          .col-12.col-lg-11.d-flex.align-items-center
            p.mb-0 <b>En la implicación:</b> el foco de este momento es indagar sobre la importancia que tiene para el cliente este acontecimiento, qué pasa si se resuelve y qué efectos tendría si no se da respuesta al problema que enfrenta. Un buen tip para este momento es preguntar por las consecuencias, esta palabra llevará al cliente a pensar con detenimiento sobre la necesidad de dar solución.
        .row
          hr.modif_11
          .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
             figure.d-flex.justify-content-center
              img.img90(src='@/assets/curso/tema6/t6-17.svg' alt='AvatarTop')
          .col-12.col-lg-11.d-flex.align-items-center
            p.mb-0 <b>Necesidad de solución:</b> se deberán formular preguntas que sugieran al cliente cómo el producto que se está ofreciendo puede satisfacer la necesidad que se tiene en el momento. Se  debe presentar el producto como la solución.

    .row.mb-5.justify-content-center
      .col-12.col-md-10
        p Para dar más claridad al tema se analizará un caso hipotético y se aplicará el modelo SPIN. Este ejercicio se orienta en el caso de un vendedor, cuyo servicio a ofrecer es un servicio de Internet en fibra óptica para conectar todas las sedes de la empresa.

    .row.mb-5.justify-content-center
      .col-12.col-md-8
        .tarjeta.bgr_38.p-2.p-md-4.mb-5  
          SlyderA(tipo="b")
            .row.p-4
              .col-md-12.p-3
                p.mb-0 En la situación actual, el cliente tiene un servicio de internet en cobre en cada sede, una tecnología un tanto obsoleta y que no ofrece anchos de banda superiores a 30 Mbps. Preguntas que haría el vendedor... observe cómo utiliza las preguntas para conocer al cliente, ¿cómo mejorar Internet en las sedes de la empresa?
            .row.p-4
              .col-md-12.p-3
                p.mb-0 El problema es que actualmente el servicio presenta lentitud según los colaboradores de varias sedes. Preguntas que haría el vendedor: ¿ha fallado su servicio de Internet con frecuencia?, ¿cree que la poca disponibilidad del servicio de Internet impacta negativamente la productividad?
            .row.p-4
              .col-md-12.p-3
                p.mb-0 La implicación es que si el señor no resuelve su situación, imagínese ¿qué pasaría si no tuvieran Internet un día en la empresa?, ¿cómo se vería impactado el servicio al cliente?, ¿qué harían los colaboradores todo el día sin conectividad?
            .row.p-4
              .col-md-12.p-3
                p.mb-0 La necesidad para solucionar está enfocada en adquirir un servicio de Internet en fibra óptica que le ofrezca mayor estabilidad en el servicio, a través de mayores anchos de banda. ¿Y si adquiere el servicio de Internet en fibra, con el que no volverá a tener caídas del servicio de forma inesperada? 
    
    .row.justify-center.mb-5(data-aos="zoom-out-up").justify-content-center
      .col-12.col-lg-10
        .bloque-texto-g.bgr_10.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema6/t6-18.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-4
            p.mb-0.text-bold Simple, invaluable, alineado con sus intereses, de prioridad 
            p.mb-0 la técnica de ventas más conocida como SNAP (en inglés simple, invaluable, align and priority) es un modelo que se enfoca en la efectividad, ya que se centra en “ponerse en la camiseta del cliente” y está dirigido principalmente a las personas que tienen la facultad de decidir si hacen la compra, observe a continuación los elementos importantes: 
    
    .row.mb-5.justify-content-center(data-aos="zoom-in-up")
      .col-12.col-md-10
        .row
          hr.modif_11
          .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
             figure.d-flex.justify-content-center
              img.img90(src='@/assets/curso/tema6/t6-19.svg' alt='AvatarTop')
          .col-12.col-lg-11.d-flex.align-items-center
            p.mb-0 <b>Simple:</b> hace referencia a buscar la forma de que todos los procesos asociados a la venta sean claros y fáciles.
        .row
          hr.modif_11
          .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
             figure.d-flex.justify-content-center
              img.img90(src='@/assets/curso/tema6/t6-20.svg' alt='AvatarTop')
          .col-12.col-lg-11.d-flex.align-items-center
            p.mb-0 <b>Invaluable:</b> entregarles algo que los clientes valoran mucho, puede ser el servicio o los procesos.
        .row
          hr.modif_11
          .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
             figure.d-flex.justify-content-center
              img.img90(src='@/assets/curso/tema6/t6-21.svg' alt='AvatarTop')
          .col-12.col-lg-11.d-flex.align-items-center
            p.mb-0 <b>Alineado con sus intereses:</b> este punto debe asegurar un claro conocimiento del cliente y de sus necesidades, saber que lo que se está ofreciendo es lo que el cliente necesita.
        .row
          hr.modif_11
          .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
             figure.d-flex.justify-content-center
              img.img90(src='@/assets/curso/tema6/t6-22.svg' alt='AvatarTop')
          .col-12.col-lg-11.d-flex.align-items-center
            p.mb-0 <b>Prioridad:</b> consiste en hacer comparaciones con el cliente, ayudarle a diferenciar entre lo importante y lo prioritario asociado a las características que requiere y que necesita del servicio. En este proceso se valoran la sinceridad y la flexibilidad del vendedor. 
    
    .row.mb-5.justify-content-center
      .col-12.col-md-10
        p A partir del siguiente ejemplo quedará más clara la comprensión del modelo SNAP, un vendedor vende tarjetas de crédito y desea aplicar la técnica.
    
    .row.justify-content-center
      .col-12.col-md-8
        .tarjeta.bgr_8.p-2.p-md-4.mb-5  
          SlyderA(tipo="b")
            .row.p-4
              .col-md-12.p-3
                p.mb-0 Relacionado con lo simple: el vendedor le pregunta al cliente potencial ¿cuál es su profesión?, al escuchar que es docente de música plantea cómo abordar la venta, sin centrarse en los temas financieros y enfocándose en los beneficios que para esta persona traerá tener una tarjeta de crédito.
            .row.p-4
              .col-md-12.p-3
                p.mb-0 Descuentos: en este sentido, para hacerlo invaluable, el vendedor le comenta al prospecto que con esa tarjeta puede acceder a descuentos preferenciales a la mayoría de los eventos artísticos y musicales que se realizan en su ciudad, por lo que este argumento sensibiliza bastante al cliente.
            .row.p-4
              .col-md-12.p-3
                p.mb-0 Alineado con los intereses: el vendedor le indica que tendrá débito automático de su cuota de manejo y que tendrá filas preferenciales en los bancos de la entidad.
            .row.p-4
              .col-md-12.p-3
                p.mb-0 Prioridad: el vendedor le indica al cliente que la mejor opción para él es la tarjeta clásica donde el cupo es bajito, por lo que no le afectará mucho su capacidad de endeudamiento. Además, como entiende los horarios debido a su labor docente le informa que le recogerán los documentos donde él indique para gestionar el proceso de adquisición .
    
    separador

    #t_6_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 6.3 Objeciones

    .row.mb-5
      .col-12.col-md-9.d-flex.align-items-center 
        div
          p Para un vendedor es muy importante conocer sobre objeciones, dado que al interactuar con el cliente este probablemente manifieste no entender lo que se le está explicando, tener dudas o incluso, requerir más información, es por ello que surgen las objeciones. Existen muchas interpretaciones de lo que es una objeción en ventas. Algunos autores consideran que hacen parte del proceso normal de ventas; sin embargo, hay otros que indican que la presencia de objeciones puede denotar desconocimiento por parte de alguno de los dos agentes (vendedor o cliente); a pesar de no existir consenso en por qué se dan, sí es claro que es un tema clave que un vendedor debe conocer.
          p.mb-0 A continuación se enuncian dos definiciones de objeciones de autores y una propia:
      .col-12.col-md-3
        figure
          img(src='@/assets/curso/tema6/t6-23.png' alt='AvatarTop')
    
    .row.mb-5
      .col-12.col-md-4
        .tarjeta-avatar.modif_14
          img.modif_13.img100(src='@/assets/curso/tema6/t6-24.svg' alt='AvatarTop')
          .tarjeta.bgr_39
            .p-5
              p.mb-0 La Real Academia de la Lengua Española (2021), referencia que la objeción es la “razón que se propone o dificultad que se presenta en contra de una opinión o designio, o para impugnar una proposición”.
      .col-12.col-md-4
        .tarjeta-avatar.modif_14
          img.modif_13.img100(src='@/assets/curso/tema6/t6-25.svg' alt='AvatarTop')
          .tarjeta.bgr_39
            .p-5
              p.mb-0 Según Ardila (1984), “las objeciones son cualquier acto del comprador que de forma real o aparente interrumpe la labor del vendedor” (p. 9).
      .col-12.col-md-4
        .tarjeta-avatar.modif_14
          img.modif_13.img100(src='@/assets/curso/tema6/t6-26.svg' alt='AvatarTop')
          .tarjeta.bgr_39
            .p-5
              p.mb-0 En sentido práctico, son los “peros” que expone el cliente potencial al vendedor durante el proceso de la venta.
    
    p.mb-5 Las objeciones desde la perspectiva de ventas no tienen una única orientación; sin embargo, hay consenso en que existen a nivel general dos tipos, los cuales se describen a continuación:

    .row.mb-5.justify-content-center
      .col-12.col-md-6
        ImagenInfografica.color-acento-botones.mb-5.modif_16
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema6/t6-27.svg', alt='Texto que describa la imagen')
          .tarjeta.bgr_40.p-3(x="42%" y="63%" numero="")
            p <b>Objeciones verdaderas:</b> Se presentan cuando el cliente está realmente interesado en el tema a tratar; sin embargo, manifiesta inquietudes o dudas respecto a la información que se le está suministrando y si las respuestas realmente satisfacen las necesidades que él tiene, por lo que busca canalizarlas a través del vendedor.
            p.mb-0 <b>Ejemplo:</b> un cliente desea adquirir un lote de computadores portátiles; sin embargo, le comenta a su vendedor de productos mayoristas que no está seguro de cerrar la negociación porque le preocupan los tiempos de entrega dado que el producto es importado. Esta es una objeción verdadera porque muestra conocimiento del proceso por parte del cliente y porque está haciendo relación a una variable crítica (entrega del producto).
          .tarjeta.bgr_40.p-3(x="92%" y="63%" numero="")
            p <b>Objeciones falsas:</b> se dan cuando el cliente no está interesado en la información o en el producto, y por ende basa la comunicación en pretextos o cuestionamientos sin racionalidad, con el fin de dispersar la conversación o no manifestar la razón real por la que no desea adquirir los productos de la empresa o no desea tener relación comercial con ella.
            p <b>Ejemplo:</b> un cliente le informa a su vendedor de ventas mayoristas que desea comprarle el lote de mascarillas faciales, pero que no tiene claro si realmente las necesita en su farmacia, esta es una objeción falsa, dado que este es un producto del cual requieren tener inventario este tipo de establecimientos.

    p.mb-5 Asociado al manejo de objeciones es claro mencionar que, si bien existe la teoría, las clasificaciones y los ejemplos, hay dos factores que influyen en la gestión de las mismas: i. la personalidad del vendedor, dado que la esencia de la persona influye mucho en el trato con las demás personas, y ii. la experiencia, cada vez que se tiene mayor contacto con los clientes se van adquiriendo más destrezas para interactuar y manejar situaciones que a simple vista incluso pueden ser inmanejables.

    .row.justify-center.mb-5(data-aos="zoom-out-up").justify-content-center
      .col-12.col-lg-10
        p.text-bold Resolución de objeciones
        .bloque-texto-g.bgr.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema6/t6-28.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-5
            p.mb-0 Navarro (2012) en su libro Técnicas de ventas propone un esquema interesante para el manejo de objeciones, comenzando por la escucha como el principio básico de la comunicación, luego a partir de la asertividad anticiparse a posibles alternativas de respuesta o solución, posteriormente a través de un ejercicio de empatía comprender la situación y finalmente si el cliente aún tiene inquietudes y refuta lo expuesto, exponer con argumentos claros y respetuosos la alternativa de solución. Véalo con más detalle a continuación:
    
    .row.mb-5.justify-content-center
      .col-12.col-md-10
        p.text-bold.mb-5 Manejo exitoso de la objeción
        .row.justify-content-center
          .col-12.col-md-2.mb-3.mb-md-0
            p.mb-5 <b>Escuchar:</b> no emitir juicios apresurados y prestar completa atención a lo que dice.
            figure.d-flex.justify-content-center
              img.img180(src='@/assets/curso/tema6/t6-29.svg' alt='AvatarTop')
          .col-12.col-md-2.mb-3.mb-md-0
            p.mb-5 <b>Anticiparse:</b> se puede ganar tiempo, si se anticipan las posibles objeciones.
            figure.d-flex.justify-content-center
              img.img180(src='@/assets/curso/tema6/t6-30.svg' alt='AvatarTop')
          .col-12.col-md-2.mb-3.mb-md-0
            p.mb-5 <b>Comprender:</b> si el cliente percibe empatía por parte del vendedor, sentirá confianza para continuar el proceso de negociación.
            figure.d-flex.justify-content-center
              img.img180(src='@/assets/curso/tema6/t6-31.svg' alt='AvatarTop')
          .col-12.col-md-2
            p.mb-5 <b>Refutar:</b> respeto, paciencia, inteligencia y argumentos son la clave para responder objeciones.
            figure.d-flex.justify-content-center
              img.img180(src='@/assets/curso/tema6/t6-32.svg' alt='AvatarTop')

    .row.justify-content-center
      .col-12.col-md-10
        .row.mb-5.bgr_30.p-3
          .col-12.col-md-2
            figure.d-flex.justify-content-center
              img.img100(src='@/assets/curso/tema6/t6-33.svg', alt='Texto que describa la imagen')
          .col-12.col-md-10
            p Con base en el manejo de objeciones planteado por Navarro, M. (2012) en su libro Técnicas de ventas, p. 63.
            a.boton.me-3.indicador__container.bgr_41(
              :href="obtenerLink('downloads/prueba.pdf')"
              target="_blank"
              type="application/pdf"
              @mouseover="mostrarIndicador = false"
            )
              span Ver más
              i.fas.fa-file-pdf
              .indicador--click(v-if="mostrarIndicador")
    
    p.mb-5 A nivel general, las objeciones más frecuentes que los clientes manifiestan a los vendedores están relacionadas con:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").bgr_2(data-aos="zoom-out-down")
      .row.px-4(titulo="Precio")
        .col-md-4.mb-3.mb-md-0
          figure
            img(src='@/assets/curso/tema6/t6-34.png', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Será siempre la variable de objeción por excelencia, dado que los clientes siempre querrán pagar menos para obtener los bienes y servicios de la empresa. En algunos casos, la cultura también impacta este tipo de objeciones, lo que comúnmente se llama “regatear”. El manejo de esta objeción se da principalmente en contrarrestar con argumentos desde las características, beneficios y ventajas del producto, así se tratará de mostrar una relación costo - beneficio positiva; en otras ocasiones, cuando el vendedor tiene el perfil de negociar también puede acudir a los descuentos comerciales o financieros para tratar de cerrar la venta.
      .row.px-4(titulo="Comparación con la competencia")
        .col-md-4.mb-3.mb-md-0
          figure
            img(src='@/assets/curso/tema6/t6-35.png', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Es frecuente que los clientes acudan a comparar la empresa con los competidores, indicando que ellos hacen las cosas mejor, para ello el mecanismo de argumento frente a esto es conocer muy bien la empresa y su oferta de valor (su diferencial en el mercado), con la finalidad de hacer visible porqué la compañía también tiene muchos puntos a favor.
      .row.px-4(titulo="Tiempos de entrega")
        .col-md-4.mb-3.mb-md-0
          figure
            img(src='@/assets/curso/tema6/t6-36.png', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Esta es una variable crítica para los clientes porque estos esperan tener sus productos a la mayor brevedad posible; sin embargo, en las ventas mayoristas donde el volumen es una característica común, se deben tener muy claro cuáles son los tiempos y las alternativas que se tienen con este tema, dado que siempre va a ser más conveniente informar con claridad desde el comienzo de la negociación cómo es el manejo de las entregas por parte de la empresa, por ejemplo, si se pueden realizar entregas parciales, si se tienen limitaciones en días u horas entre otros aspectos.


        
                
        

</template>

<script>
export default {
  name: 'Tema6',
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
