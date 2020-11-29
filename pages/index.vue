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
  <!-- This website had a single page design, so several components are loaded in. -->
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
/* These css properties are passed down to the components */
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
  export default {
    data () {
      return {
        // This is a series of strings which are dynamically bound to the classes for divs. The classes are provided by the Vuetify framework and I bundled together the ones I used commonly.
        classBundle: {
          divider: 'primary mx-auto dividerWidth',
          menuDivider: 'primary mx-2',
          backgroundImage: 'align-center backgroundImage',
          backgroundCard: 'secondary elevation-0',
          display1: 'display-1 primary--text justify-center text-center',
          headline: 'headline primary--text justify-center text-center',
          title: 'title primary--text justify-center text-center',
          subtitle1Italic: 'subtitle-1 primary--text text-center font-weight-light font-italic',
          body1: 'body-1 primary--text text-center font-weight-light',
          body1Italic: 'body-1 primary--text text-center font-weight-light font-italic',
        },
      }
    },
  }
</script>
