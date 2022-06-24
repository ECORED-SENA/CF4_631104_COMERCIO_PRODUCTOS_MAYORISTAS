<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero.colr_1
        span 4
      h1 Atención al cliente
    
    p.mb-5 En el siguiente video se hablará en qué consiste la atención al cliente:

    figure.mb-5(data-aos="zoom-in-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.mb-5
      .col-12.col-md-8
        p.mb-0.text-bold Protocolos de atención al cliente
        p De acuerdo con lo expuesto previamente es importante tener en cuenta que los protocolos hacen parte de la gestión integral al cliente, ya que son la herramienta principal para que cada colaborador conozca el grado de responsabilidad que tiene al momento de interactuar con cada cliente. 
        p Los protocolos de servicio al cliente reflejan el conjunto de reglas que debe seguir un colaborador de la empresa en el momento de interactuar con un cliente, en cuanto a la forma de comunicación que debe mantener, los procesos de interacción, dependiendo de la necesidad del cliente y el trato que debe mantener durante la interacción. 
      .col-12.col-md-4 
        figure
          img(src='@/assets/curso/tema4/t4-1.png', alt='Texto que describa la imagen')
    
    .row.justify-center.mb-5(data-aos="zoom-out-up").justify-content-center
      .col-12.col-lg-10
        .bloque-texto-g.bgr_27.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/t4-2.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-4.modif_12
            p.mb-0 En pocas palabras, la función principal del protocolo es actuar como un manual de proceso, el cual le va a permitir a la compañía propender por una estandarización en la forma cómo se relaciona con los clientes, porque garantizará un trato coherente, efectivo y cordial. Usualmente, estos protocolos son elaborados por las áreas de servicio al cliente o mercadeo y son socializados con todos los empleados, propiciando su apropiación y aplicación constante; sin embargo, hay algunas características que deberían considerar los colaboradores cuando interactúan con los clientes para lograr una buena atención al cliente. 
    
    p.mb-5 A continuación se mencionan algunas tácticas para tener una buena atención al cliente, ya no con alcance en las personas como previamente se realizó, sino desde la perspectiva del proceso:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").bgr_2(data-aos="zoom-out-down")
      .row(titulo="Responder rápidamente")
        .col-md-8.mb-4.mb-md-0.px-5
          p El tiempo es algo que es cada vez más valorado por los clientes, por tanto, se debe tratar de optimizar el uso del mismo, para ello hay dos claves: el conocimiento de los procesos de la organización y el apoyo de la tecnología.
        .col-md-4
          figure
            img(src='@/assets/curso/tema4/t4-3.png', alt='Texto que describa la imagen')
      .row(titulo="Cumplir lo que se promete ")
        .col-md-8.mb-4.mb-md-0.px-5
          p Esto se basa en la premisa “prometa menos y entregue más”, aunque en cualquier escenario siempre la empresa deberá garantizar a los clientes desde todas las perspectivas (producto, personal, tiempo, etc) que aquello que ofrece es lo que realmente entrega.
        .col-md-4
          figure
            img(src='@/assets/curso/tema4/t4-4.png', alt='Texto que describa la imagen')
      .row(titulo="Facilitar las interacciones ")
        .col-md-8.mb-4.mb-md-0.px-5 
          p Es aconsejable proporcionar las interacciones entre canales de forma consistente e integrada, que no parezca que la empresa está creando barreras para que los clientes generen contacto.

        .col-md-4
          figure
            img(src='@/assets/curso/tema4/t4-5.png', alt='Texto que describa la imagen')
      .row(titulo="Contactos proactivos ")
        .col-md-8.mb-4.mb-md-0.px-5 
          p Los clientes valoran positivamente cuando la empresa está pendiente de ellos, indaga sobre sus experiencias con la marca y sus productos, eso sí, en su justa medida, para no caer en lo opuesto y es generar antipatía.
        .col-md-4
          figure
            img(src='@/assets/curso/tema4/t4-6.png', alt='Texto que describa la imagen')
  
    .bgr_7.p-4
      p.mb-0.text-bold Protocolos de atención al cliente
      p.mb-0 En resumen, una buena atención al cliente está enfocada en ir más allá en cada una de las interacciones con el cliente, independiente del canal por donde se realice (presencial, teléfono, medios electrónicos), lo verdaderamente importante es que el personal de la empresa logre generar en el cliente experiencias memorables, para que sienta mayor cercanía con la marca, con el producto y se convierta en un cliente fiel a la organización y siempre la prefiera por encima de otras del mismo ramo. 

    



</template>

<script>
export default {
  name: 'Tema4',
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
