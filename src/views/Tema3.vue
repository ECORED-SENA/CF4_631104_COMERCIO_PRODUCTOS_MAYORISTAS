<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero.colr_1
        span 3
      h1 Propuesta comercial

    .row.mb-5
      .col-12.col-md-9.d-flex.align-items-center.bg_grad-03
        div.p-4
          p Es el documento que entrega un vendedor a un cliente realizando la presentación de la empresa, se referencia la información relevante del producto y se definen las características y condiciones (en caso de que aplique) que tiene la compañía para la venta de sus bienes/servicios. Es importante aclarar que las propuestas comerciales son muy utilizadas en ventas mayoristas y en ventas empresariales/ institucionales, ya que en ventas al cliente final o al detal (por unidades) el proceso es un poco más informal dado que no suele mediar una propuesta, puesto que el vendedor presenta su portafolio esperando una aceptación rápida por parte del cliente.
          p.mb-0 La propuesta comercial es importante por varias razones: <b>formaliza el proceso comercial</b>, es decir, muestra estructura por parte de la empresa y el vendedor; <b>sirve de soporte</b> para cada una de las partes (empresa- cliente) en el momento de tener inquietudes respecto a lo ofrecido/adquirido y permite ser una <b>herramienta de comparación</b> entre alternativas por parte del cliente.
      .col-12.col-md-3
        figure
          img(src='@/assets/curso/tema3/t3-1.png', alt='Texto que describa la imagen')
    
    .row.mb-5.justify-content-center(data-aos="flip-up")
      .col-12.col-md-8
        .cajon.bgr_23.p-4
          p.mb-0 Respecto a la propuesta comercial es importante referenciar que el rol (cargo) responsable de realizarla es el vendedor, no obstante, en algunas empresas muy organizadas cuentan con <em>templates</em> (plantillas) o proformas, las cuales se crean para estandarizar y facilitar la labor comercial.
    
    p.mb-5 A continuación vea los  elementos sugeridos para una propuesta comercial:

    .row.justify-content-center(data-aos="flip-left")
      .col-12.col-md-6
        figure
          img(src='@/assets/curso/tema3/t3-2.svg', alt='Texto que describa la imagen')
      .col-12.col-md-10
        .tarjeta.bgr_19.p-2.p-md-4.mb-5
          SlyderA(tipo="b")
            .row.p-3
              .col-md-12.px-4
                p.mb-0.text-bold Portada 
                p Incluir la ciudad, fecha, nombre y cargo de la persona a la cual va dirigida la propuesta comercial.
            .row.p-3
              .col-md-12.px-4
                p.mb-0.text-bold Presentación de la empresa 
                p Es importante hacer mención a la empresa, experiencia, casos exitosos, clientes actuales.
            .row.p-3
              .col-md-12.px-4
                p.mb-0.text-bold Detalle
                p En este apartado se centrará el análisis del cliente, por tanto, se debe referenciar las características del producto, el precio (en ventas mayoristas, se sugiere incorporar la tabla de descuentos o precios de lista según la cantidad adquirida por el cliente), tiempos de entrega y forma de pago. En este punto, es importante tener en cuenta que cuando el producto tiene componentes técnicos altos se debe detallar en este punto haciendo uso de planos, topologías, flujos, imágenes o aquello que permita un mejor entendimiento del bien.
                p.mb-0 Asimismo, es importante, en caso que sea viable exponer varias opciones, asociadas al tamaño, cantidades o componentes, con el fin de que el cliente pueda analizar varios escenarios para la adquisición del producto.
            .row.p-3
              .col-md-12.px-4
                p.mb-0.text-bold Vigencia de la propuesta 
                p Siempre se debe referenciar cuál es la vigencia por la cual se sostienen las condiciones indicadas, usualmente se especifican en días calendario, por ejemplo, propuesta válida por 60 días.

            .row.p-3
              .col-md-12.px-4
                p.mb-0.text-bold Datos de contacto del vendedor 
                p Especificar nombres y apellidos completos, cargo, número telefónico de contacto y email corporativo (es decir, no el personal sino aquel de la empresa).
    
    .row.justify-content-center(data-aos="flip-up")
      .col-12.col-md-10
        .row.mb-5.bgr_7.p-3
          .col-12.col-md-2
            figure.d-flex.justify-content-center
              img.img100(src='@/assets/curso/tema1/t1-8.svg', alt='Texto que describa la imagen')
          .col-12.col-md-10
            p.mb-0.text-bold Para recordar
            p.mb-0 Como consejos adicionales se sugiere firmar la propuesta, numerar las páginas de la propuesta, incorporar el logo de la empresa como encabezado (en caso que la empresa no tenga papel membrete, revisar muy bien la ortografía). 




</template>

<script>
export default {
  name: 'Tema3',
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
