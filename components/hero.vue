<template>
  <v-row
    id="hero"
    :style="{'background-image' : 'url(/img/hero.png)'}"
    :class="classBundle.backgroundImage"
  >
    <v-col>
      <v-img
        max-width="90%"
        src="/img/logo.svg"
        class="mx-auto"
      />
    </v-col>
  </v-row>
</template>

<script>
  export default {
    props: {
      classBundle: Object,
    },
  }
</script>
