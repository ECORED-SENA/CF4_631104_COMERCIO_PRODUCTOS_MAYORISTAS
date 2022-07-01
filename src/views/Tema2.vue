<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero.colr_1
        span 2
      h1 Etiqueta empresarial

    .row.justify-center.mb-5(data-aos="zoom-out-up").justify-content-center
      .col-12.col-lg-10
        .bloque-texto-g.bgr.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/t2-1.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-5
            p.mb-0 Se interpreta como un conjunto de normas que define la empresa, con el fin de actuar de manera correcta en los diferentes ámbitos de actuación de la compañía. Es una de las herramientas de comunicación y relacionamiento prácticas más poderosas que tiene una empresa, dado que la aplicación de esta permitirá una diferenciación positiva frente a otras empresas. En términos prácticos, la etiqueta empresarial no solo es un tema personal (de los colaboradores), sino organizacional, por lo que la aplicación de esta transmite confianza, tranquilidad y genera muy buena imagen. 
    
    p.mb-5 Las normas básicas de etiqueta empresarial están asociadas a:  

    .tarjeta.bgr_8.p-4.mb-5(data-aos="zoom-out-up")
      SlyderA(tipo="b")
        .row
          .col-md-7.p-4
            h4.mb-5 Presentación personal 
            p En algunas empresas se utilizan los uniformes, en este caso, deben llevarse de manera correcta, en las empresas o en los cargos en donde no aplica el uso de uniforme la organización define un “código de vestuario” que define los lineamientos en la forma de vestir para los colaboradores. En el contexto de los vendedores, el código de vestuario está asociado principalmente al tipo de portafolio que comercializan, a la empresa que representan y al tipo de cliente con el que interactúan.
            p.mb-0.text-bold Por ejemplo, en ventas TaT (tienda a tienda), el vestuario con uniforme es lo usual, ya que permite identificación de la marca; sin embargo, en ventas empresariales el vestuario es más formal y propio de cada vendedor.
          .col-md-5.p-4
            figure
              img(src='@/assets/curso/tema2/t2-2.png', alt='Texto que describa la imagen')
        .row
          .col-md-7.p-4
            h4.mb-5 Forma de presentarse con el cliente
            p La empresa debe definir cómo se deben presentar los colaboradores cuando van a tener interacción con un cliente. Sin embargo, lo mínimo que se debe asegurar es saludar, indicar el nombre con apellidos y el cargo.
          .col-md-5.p-4
            figure
              img(src='@/assets/curso/tema2/t2-3.png', alt='Texto que describa la imagen')
        .row
          .col-md-7.p-4
            h4.mb-5 Normas de cortesía 
            p Deben hacer parte de cada individuo; sin embargo, es importante resaltar que con los clientes siempre deben estar presentes, saludar, despedirse, dar las gracias, solicitar.
          .col-md-5.p-4
            figure
              img(src='@/assets/curso/tema2/t2-4.png', alt='Texto que describa la imagen')
     
    p.mb-5 A modo de referente, Bogotá Emprende (Secretaría de Desarrollo Económico de Bogotá- Cámara de Comercio de Bogotá, 2010) plantea las reglas de oro en materia de etiqueta empresarial, las cuales tienen por fin dar algunas pautas para los equipos de trabajo, las cuales se muestran en la siguiente figura:

    .row.justify-content-center(data-aos="zoom-out-down")
      .col-12.col-md-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          span Reglas de oro en la etiqueta empresarial
        .tabla-b.color-acento-contenido.mb-5.modif_24
          table.bgr_24 
            tr
              th.bgr_25.text-bold.text-center Honestidad
              td.ps-3.ps-md-4.bgr_26 Quien no actúa correctamente, no inspira confianza.
            tr
              th.bgr_25.text-bold.text-center Respeto
              td.ps-3.ps-md-4.bgr_26 Hace alusión a reconocer al individuo como entidad única.
            tr
              th.bgr_25.text-bold.text-center Puntualidad
              td.ps-3.ps-md-4.bgr_26 Cumplir a la hora acordada y aplicar este criterio en todo (reuniones, eventos, entregas).
            tr
              th.bgr_25.text-bold.text-center Discreción
              td.ps-3.ps-md-4.bgr_26 Implica saber guardar la información de la empresa e incluso temas de orden personal.
            tr
              th.bgr_25.text-bold.text-center Amabilidad
              td.ps-3.ps-md-4.bgr_26 Ser cortés y optimista. Una sonrisa siempre es bien recibida.
            tr
              th.bgr_25.text-bold.text-center Actitud positiva
              td.ps-3.ps-md-4.bgr_26 Es definitivo a la hora de interactuar con clientes.
            tr
              th.bgr_25.text-bold.text-center Imagen
              td.ps-3.ps-md-4.bgr_26 La imagen de la empresa depende en gran medida de la buena impresión que causen los colaboradores en los clientes.
            tr
              th.bgr_25.text-bold.text-center Comunicación
              td.ps-3.ps-md-4.bgr_26 Buena comunicación conlleva aplicarla en todas sus manifestaciones: escrita, oral e interpersonal.
            tr
              th.bgr_25.text-bold.text-center Elegancia
              td.ps-3.ps-md-4.bgr_26 La clave de la elegancia es adaptar las tendencias de la moda al estilo personal, incluyendo el comportamiento en diferentes escenarios.
            tr
              th.bgr_25.text-bold.text-center Coherencia
              td.ps-3.ps-md-4.bgr_26 Reflejar el comportamiento la filosofía de la organización para ofrecer credibilidad y potenciar la imagen corporativa.

             

</template>

<script>
export default {
  name: 'Tema2',
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
