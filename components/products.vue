<template>
  <v-row id="products">
    <v-col>
      <v-card tile>
        <v-card-title :class="classBundle.display1">
          Products
        </v-card-title>
        <v-divider
          :class="classBundle.divider"
        />
        <v-card-text>
          <v-row class="align-center px-4 py-2">
            <v-col
              md="6"
              cols="12"
              :class="classBundle.body1"
            >
              We at The Magnolia Salon Boutique, believe that taking care of our health and environment is as important as taking care of our hair.
              <br>
              That’s why we use product lines that are safe for all aspects. Part of wellness and self-care starts with using high performing professional products that uses ingredients that protect your hair and color.
              <br>
              Please check back often as we continue our research into new clean and safe product lines.
            </v-col>
            <v-col
              md="6"
              cols="12"
              class="outlineBorder"
            >
              <v-card
                tile
                class="elevation-0"
              >
                <v-card-title :class="classBundle.title">
                  Davines
                </v-card-title>
                <v-divider :class="classBundle.divider" />
                <v-card-text :class="classBundle.body1">
                  Essential hair care where high performance and sustainable practices come together.
                  <br>
                  Each product is infused with natural compounds such as rou-cou oil, lentils, almonds and caper blossoms.
                  <br>
                  You’ll love their performance and calming scents. Let our professional stylists choose a regimen perfect for your hair!
                </v-card-text>
              </v-card>
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
