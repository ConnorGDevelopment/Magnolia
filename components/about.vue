<template>
  <v-row id="about">
    <v-col
      cols="12"
    >
      <v-card tile>
        <v-card-title :class="classBundle.display1">
          Welcome to the Magnolia
        </v-card-title>
        <v-divider :class="classBundle.divider" />
        <v-card-text>
          <v-row>
            <!--
            <v-col cols="4">
              <v-img
                src="/about.jpg"
                class="elevation-4"
              />
            </v-col>
            -->
            <v-col
              cols="12"
              :class="classBundle.body1"
            >
              Check your busy lives at the door while our professional stylists give you and your hair the individual attention it deserves.
              <br>
              From our comprehensive consultations that pinpoint your exact needs, to delighting your senses through scents and sounds, we at The Magnolia Salon Boutique, want you to leave not only loving your hair, but also feeling refreshed and relaxed.
              <br>
              We invite you to come in for a visit! We’ll make you feel welcomed and comfortable!
            </v-col>
          </v-row>
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
