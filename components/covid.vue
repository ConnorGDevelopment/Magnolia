<template>
  <v-row class="secondary text-center elevation-2">
    <v-col cols="12">
      <v-card
        tile
        :class="classBundle.backgroundCard"
      >
        <v-card-title :class="classBundle.headline">
          Covid-19 Update
        </v-card-title>
        <v-divider :class="classBundle.divider" />
        <v-card-text :class="classBundle.body1">
          Please know that at The Magnolia, we promise to utilize strict sanitary precautions and will adhere to all safe practices suggested by the Ohio governor, Mike DeWine and medical advisor, Dr. Amy Acton.
          <br>
          In addition, our work stations are spaced six to ten feet apart and we will be working on one client at a time. During this unprecedented time and always, it is very important that everyone stays safe.
        </v-card-text>
      </v-card>
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
