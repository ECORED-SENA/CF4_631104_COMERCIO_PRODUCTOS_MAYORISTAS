<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero.colr_1
        span 7
      h1 Formalización de la venta
    
    .row.mb-5(data-aos="zoom-out-up").justify-content-center
      .col-12.col-lg-10
        .bloque-texto-g.bgr_35.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.modif(
            :style="{'background-image': `url(${require('@/assets/curso/tema7/t7-1.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-4.modif_1
            p.mb-0 Se da generalmente a través de documentos que soporten la aceptación del cliente de la propuesta comercial. En este sentido, existen los documentos comerciales que son todos aquellos soportes que quedan para la empresa para formalizar las transacciones comerciales; siempre las operaciones comerciales deben estar respaldadas en formatos, los cuales sirven de soporte contable, comercial y legal, además tienen como característica desde el punto de vista de mercadeo, que los datos que contienen son fuente de información fundamental para conocer cómo se comporta un cliente.
    
    p.text-bold Tipos de documentos comerciales
    
    p.mb-5 Tradicionalmente, los soportes se han clasificado en documentos negociables y documentos no negociables, clasificación que guarda estrecha relación con la perspectiva contable. Los primeros hacen relación a aquellos que son susceptibles de negociación a través de traspasos, descuentos o endosos en una entidad financiera antes que se venzan y los segundos son aquellos que sirven de soporte para la contabilidad, y pueden considerarse de validez jurídica, por tanto, son obligatorios para todas aquellas empresas que operen legalmente.

    .row.mb-5.justify-content-center
      .col-12.col-md-10.p-4.bg_grad-05
        p.mb-0.text-bold Documentos negociables 
        p A continuación se listan los principales documentos clasificados como documentos negociables, recordando que suelen usarse de forma frecuente por las empresas en Colombia, dado que facilitan las operaciones comerciales, son de uso diario y pueden ser utilizados como respaldo, ya que pueden convertirse en medios de pago. Los más usados en el medio son los siguientes:
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").bgr_2(data-aos="zoom-out-down")
      .row(titulo="El cheque")
        .col-md-8.mb-4.mb-md-0.px-5
          p Es un documento a través del cual quien lo emite y firma (llamado girador) le solicita a su entidad financiera (llamada girado) que le entregue al beneficiario (o tomador) el valor específico referenciado, lo que significa que este soporte representa una forma de pagar sin necesidad de tener efectivo. Para que un cheque sea válido debe tener logo del banco, número o consecutivo, la palabra cheque, suma que está representando y la firma de quien lo expide.
        .col-md-4
          figure
            img(src='@/assets/curso/tema7/t7-5.png', alt='Texto que describa la imagen')
      .row(titulo="Los pagarés")
        .col-md-8.mb-4.mb-md-0.px-5
          p Son documentos que se firman a favor de un tercero como respaldo de una acreencia, en donde quien contrae la deuda (deudor) se compromete a pagar cierta cantidad de dinero en una fecha específica y usualmente implicando un pago de una tasa de interés aceptada por el firmante. Con el auge del crédito, los pagarés han tomado cada vez más fuerza, ya que las entidades formalizan los compromisos de sus clientes a través de este soporte. Las partes que suelen conformar un pagaré son: la palabra pagaré, fecha de vencimiento, nombre de la persona natural o jurídica propietaria del pagaré y a quien debe cancelarse el dinero adeudado, el importe (valor a pagar) y la firma del deudor.
        .col-md-4
          figure
            img(src='@/assets/curso/tema7/t7-2.png', alt='Texto que describa la imagen')
      .row(titulo="Las letras de cambio")
        .col-md-8.mb-4.mb-md-0.px-5
          p Son un soporte de cobro que tiene por fin referenciar un valor a pagar en una fecha determinada, la diferencia con el pagaré es que acá intervienen tres agentes en vez de dos como en el caso anterior. En una letra de cambio debe existir el librador (la empresa que emite la deuda), un librado (quien tiene la obligación de pagar) y el tomador (quien se beneficiará del pago). Como característica de este tipo de documento se tiene que usualmente no implica el pago de tasas de interés sino el pago del valor adeudado, lo que quizá haya llevado a que hoy en día no sea tan usado en comparación con los pagarés.
        .col-md-4
          figure
            img(src='@/assets/curso/tema7/t7-6.png', alt='Texto que describa la imagen')

    .row.mb-5.justify-content-center
      .col-12.col-md-10.p-4.bg_grad-06
        p.mb-0.text-bold Documentos no negociables 
        p Son aquellos documentos comerciales que tienen por fin demostrar la validez contable, legal y comercial de una transacción, por lo tanto, constituye el documento que entrega el vendedor al cliente como constancia de que se ha entregado el bien o se ha prestado el servicio (según sea el caso) y la recepción de la misma por parte del comprador se vuelve a su vez constancia de aceptación. Los documentos de este tipo más utilizados en el medio son:
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").bgr_2(data-aos="zoom-out-down")
      .row(titulo="Las facturas")
        .col-md-12.mb-4.mb-md-0.px-5
          p Se detalla de manera formal la relación de los productos adquiridos por el cliente, relacionando datos de quién vende, información básica de quién compra, la relación de la cantidad de bienes/servicios adquiridos y el precio pagado por ellos. La utilidad de la factura es que sirve para demostrar que en efecto la transacción ha sido realizada y también es soporte tributario (es decir, para constatar qué tipo y cuantía de impuestos se han pagado). En Colombia para personas jurídicas (empresas) la existencia de la factura es lo que demuestra que efectivamente la operación se ha realizado y por ello siempre genera un efecto contable. 
          p.mb-0 En el año 1995 se le dio la misma validez a la facturación electrónica que a la facturación en papel, en 2005 se dio otro paso con el Decreto 2242 de 2015 donde decía que “la factura electrónica podrá expedirse, aceptarse, archivarse usando cualquier tipo de tecnología disponible, garantizando la autenticidad e integridad desde su expedición y durante todo el tiempo de conservación”. Años más tarde y con el auge de la tecnología, en 2020 a través del Decreto 358 se regulan aspectos en esta materia, estableciendo como obligatorio para todos aquellos que facturan IVA el uso de la facturación electrónica.
      .row(titulo="Las cotizaciones")
        .col-md-12.mb-4.mb-md-0.px-5
          p Son un documento que entrega una empresa a un cliente para realizar la propuesta económica asociada a un requerimiento, por tanto, adicional a contemplar los datos de la organización y el interesado, se relacionan las cantidades, precios unitarios, impuestos y precios totales. Además, se especifica la validez de la misma, es decir, por cuánto tiempo serán reconocidos esos valores para una negociación; sin embargo, dado que toda cotización no termina en venta, este documento es informativo y no genera registro contable.
      .row(titulo="Las órdenes de compra")
        .col-md-12.mb-4.mb-md-0.px-5
          p También conocidas como orden de pedido u orden a cotización, son de suma utilidad, aunque no se utilizan en todas las empresas, dado que en ocasiones se omite este documento y se procede a emitir factura; sin embargo, cuando el producto debe mandarse a producir, a traer de otra zona geográfica o se debe tramitar con un tercero, es importante la utilización de este documento para formalizar que ya el pedido se encuentra en gestión. Asimismo, en las empresas con procesos muy estructurados o en el sector público se suelen utilizar este tipo de formatos para generar trazabilidad en las solicitudes de bienes o servicios. Aquí, se debe detallar las especificaciones, cantidad y precio de cada producto solicitado, así mismo, la fecha, el lugar estimado de entrega y la forma de pago.
      .row(titulo="Las notas débito y crédito")
        .col-md-12.mb-4.mb-md-0.px-5
          p En términos contables, las notas débito o crédito son documentos comerciales con carácter legal que constituyen ajustes contables de la empresa con el cliente, ya sea por un error previo o por una variación en las condiciones, lo que en unos casos generará mayores cobros y en otros menores. La nota débito es emitida para aumentar un valor a pagar por el cliente sobre una factura emitida previamente, por tanto, esto genera un mayor valor a cobrar en el saldo que esté pendiente. Por su parte, la nota crédito puede en términos sencillos entenderse como un saldo a favor del cliente, el cual puede ser consecuencia de una garantía, un producto no entregado o un faltante en cantidades; también se usan para anular una factura. Tanto en la nota débito como en la nota crédito se debe especificar los datos completos de la empresa y el cliente, el consecutivo del documento, el concepto que da lugar a la transacción (relacionando detalle, cantidad y precio/valor), el número de la factura que se corrige, la fecha de emisión y por supuesto el valor total de la nota.

    p.text-bold Los contratos en Colombia
    p.mb-5 Los contratos son documentos de formalización que aplican cuando se adquiere un bien o servicio que tenga asociados pagos recurrentes o cuando se van a generar relaciones comerciales entre dos agentes. Tienen como características que:

    .row.mb-5
      .col-12.col-md-4.mb-3.mb-md-0
        figure
          img(src='@/assets/curso/tema7/t7-3.png', alt='Texto que describa la imagen')
      .col-12.col-md-8
        ul.lista-ul--color
          li.mb-2
            i.fas.fa-paper-plane.colr_4
            | Deben quedar por escrito (salvo que la venta se realice de forma telefónica y el cliente manifieste estar de acuerdo con las condiciones referenciadas por la empresa).
          li.mb-2
            i.fas.fa-paper-plane.colr_4
            | Deben ser firmados y/o aceptados por cada una de las partes participantes en el mismo.
          li.mb-2
            i.fas.fa-paper-plane.colr_4
            | Tienen validez jurídica.
          li.mb-2
            i.fas.fa-paper-plane.colr_4
            | Se realizan de forma consensuada, es decir, debe existir la voluntad de cada una de las partes.
          li.mb-2
            i.fas.fa-paper-plane.colr_4
            | El objeto del contrato debe ser lícito (legal).
          li.mb-2
            i.fas.fa-paper-plane.colr_4
            | Se debe especificar claramente el objeto del contrato, duración, obligaciones de las partes, tiempos de entrega, sanciones. 
 
    p.text-bold Diligenciamiento del contrato

    .bgr_36.p-4.mb-5
      p.text-bold.mb-0 Para recordar
      p.mb-0 Antes de entrar a revisar los aspectos a considerar en el diligenciamiento de un contrato es importante mencionar que con el auge de las transacciones digitales, en muchos casos ya no se requiere la impresión de los documentos, ya que este proceso puede realizarse utilizando diferentes canales tecnológicos; sin embargo, cabe referenciar algunas consideraciones respecto a la firma de contratos impresos. 
 
    .row.mb-5
      .col-12.col-md-8.mb-3.mb-md-0
        p.mb-0.text-bold Documentos impresos: 
        p se sugiere sean generados a computador (para mayor claridad) y entregados para firma en dos tenores (es decir, un ejemplar para cada una de las partes). Asimismo, que sean diligenciados en letra negra, referenciando muy bien la fecha en que se celebra y sin dejar espacios en blanco. Es importante realizar la validación sobre si quien firma realmente tiene facultades (poder) para hacerlo, en el caso de personas naturales quien lo firma es quien está aceptando las condiciones del servicio y en términos generales deben ser personas mayores de 18 años. En el caso de personas jurídicas (empresas) debe ser el representante legal (gerente) o un apoderado (una persona a la cual legalmente se le ha concedido esa autorización).
        p.mb-0 Para documentos no impresos se debe tener en cuenta que en Colombia existen tres tipos de firmas, y que dependiendo del tipo de soporte o de la empresa con la que se realice la transacción se solicitará una u otra, véalas a continuación:
      .col-12.col-md-4.d-flex.align-items-center
        figure
          img(src='@/assets/curso/tema7/t7-4.png', alt='Texto que describa la imagen')
    
    figure.mb-5(data-aos="zoom-in-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/MgNyjRdgJWw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.justify-content-center(data-aos="flip-up")
      .col-12.col-md-10
        .row.mb-5.bgr_7.p-3
          .col-12.col-md-2
            figure.d-flex.justify-content-center
              img.img100(src='@/assets/componentes/calendario.svg', alt='Texto que describa la imagen')
          .col-12.col-md-10.d-flex.align-items-center
            p.mb-0 En ventas en canales digitales se suele hacer mención a los términos y condiciones (conocidos como T y C), el cual es un documento proforma que el cliente debe leer y aceptar en la plataforma tecnológica antes de realizar la compra del producto. 







</template>

<script>
export default {
  name: 'Tema7',
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
