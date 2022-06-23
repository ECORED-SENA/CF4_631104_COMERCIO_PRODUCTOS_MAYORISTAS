<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info.colr
      h1 Introducción

    p.mb-5 Las ventas constituyen el objetivo comercial de una empresa, vender es la única forma en la que se garantiza que los bienes y servicios que ofrece una organización lleguen a manos de los clientes y, para que esto sea una realidad las empresas requieren de vendedores que tengan las competencias necesarias para satisfacer las necesidades de los clientes y garantizar la rentabilidad que espera la compañía con la venta de sus productos. 

    figure.mb-5(data-aos="zoom-in-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/jtClREk9TY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
