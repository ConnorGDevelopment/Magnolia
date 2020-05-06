<template>
  <v-row
    id="hero"
    :style="{'background-image' : 'url(/hero.png)'}"
    :class="classBundle.backgroundImage"
  >
    <v-col>
      <v-img
        max-width="90%"
        src="/logo.svg"
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
