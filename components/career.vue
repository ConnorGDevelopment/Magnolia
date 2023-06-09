<template>
  <v-row id="career">
    <v-col>
      <v-card tile>
        <v-card-title :class="classBundle.display1">
          Career Paths
        </v-card-title>
        <v-divider :class="classBundle.divider" />
        <v-card-text :class="classBundle.body1">
          Our team of professional Independent Contractors is growing and we
          invite you to visit!
          <br />
          Please contact us at
          <a
            style="text-decoration: none"
            class="primary--text font-weight-bold"
            href="mailto:dcr@magnoliasalonboutique.com"
          >
            dcr@magnoliasalonboutique.com
          </a>
          or
          <a
            style="text-decoration: none"
            class="primary--text font-weight-bold"
            href="tel:+1-614-813-8625"
          >
            614-813-8625
          </a>
        </v-card-text>
        <!-- <v-card-subtitle :class="classBundle.body1Italic" class="pt-0">
          dcr@magnoliasalonboutique.com
        </v-card-subtitle> -->
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
