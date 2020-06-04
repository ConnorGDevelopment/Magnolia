<template>
  <v-row id="career">
    <v-col>
      <v-card tile>
        <v-card-title :class="classBundle.display1">
          Career Paths
        </v-card-title>
        <v-divider
          :class="classBundle.divider"
        />
        <v-card-text :class="classBundle.body1">
          Our team of professionals is growing!
          <br>
          If you’d like the opportunity to visit and talk with us, please send your resume to:
        </v-card-text>
        <v-card-subtitle
          :class="classBundle.body1Italic"
          class="pt-0"
        >
          dcr@magnoliasalonboutique.com
        </v-card-subtitle>
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
