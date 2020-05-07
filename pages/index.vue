<template>
  <!-- <v-container
    fluid
    class="pt-0"
    :style="{'background-image' : 'url(/texture.png)', 'background-repeat' : 'repeat'}"
  > -->
  <v-container
    fluid
    class="pt-0 secondary"
  >
    <hero :class-bundle="classBundle" />
    <covid :class-bundle="classBundle" />
    <about :class-bundle="classBundle" />
    <team :class-bundle="classBundle" />
    <products :class-bundle="classBundle" />
    <services :class-bundle="classBundle" />
    <contact :class-bundle="classBundle" />
    <career :class-bundle="classBundle" />
  </v-container>
</template>

<style>
.dividerWidth {
  width: 20%;
}
.backgroundImage {
  background-size: cover;
  background-position: center;
  min-height: 75vh;
}
.outlineBorder {
  border: 2px solid black;
}
.v-card__text, .v-card__title, .v-card__subtitle {
  word-break: normal !important;
}
</style>

<script>
  import hero from '../components/hero.vue'
  import covid from '../components/covid.vue'
  import about from '../components/about.vue'
  import team from '../components/team.vue'
  import products from '../components/products.vue'
  import services from '../components/services/services.vue'
  import contact from '../components/contact.vue'
  import career from '../components/career.vue'

  export default {
    components: {
      hero,
      covid,
      about,
      team,
      products,
      services,
      contact,
      career,
    },
    data () {
      return {
        classBundle: {
          divider: 'primary mx-auto dividerWidth',
          menuDivider: 'primary mx-2',
          backgroundImage: 'align-center backgroundImage',
          backgroundCard: 'secondary elevation-0',
          display1: 'display-1 text--primary justify-center text-center',
          headline: 'headline text--primary justify-center text-center',
          title: 'title text--primary justify-center text-center',
          subtitle1Italic: 'subtitle-1 text--primary text-center font-weight-light font-italic',
          body1: 'body-1 text--primary text-center font-weight-light',
          body1Italic: 'body-1 text--primary text-center font-weight-light font-italic',
        },
      }
    },
  }
</script>
