<template>
  <v-row id="team">
    <v-col sm="12" xl="8" offset-xl="2">
      <v-card tile :class="classBundle.backgroundCard">
        <v-card-title :class="classBundle.display1"> Our Team </v-card-title>
        <v-divider :class="classBundle.divider" />
        <v-card-subtitle :class="classBundle.subtitle1Italic">
          Please check back frequently, as we are growing our team of talented
          cosmetologists.
        </v-card-subtitle>
        <v-card-text>
          <v-row class="align-center">
            <v-col cols="12" sm="3" class="outlineBorder pa-0 elevation-2 my-4">
              <v-card tile>
                <v-card-text>
                  <v-img src="/img/team1.png" contain />
                </v-card-text>
              </v-card>
            </v-col>
            <v-col
              cols="12"
              sm="8"
              offset-sm="1"
              class="outlineBorder pa-0 elevation-2"
            >
              <v-card tile class="pb-3">
                <v-card-title :class="classBundle.headline">
                  Dyan Carol Reckner
                </v-card-title>

                <v-card-text :class="classBundle.body1Italic">
                  "When you look good, you perform better" - Anonymous
                </v-card-text>
                <v-card-text :class="classBundle.body1">
                  My specialty is to take today’s trends and adjust them to the
                  individual’s age, face shape and physical stature,
                </v-card-text>
                <v-card-text :class="classBundle.subtitle1Italic">
                  Products: Davines Specialty Salon, WOW Hair Care inn store
                  and/or online, anything from the Manoco Blue professional hair
                  care supplier.
                </v-card-text>
                <v-card-text :class="classBundle.body1">
                  Call or text
                  <a
                    style="text-decoration: none"
                    class="primary--text font-weight-bold"
                    href="tel:+1-614-560-5327"
                  >
                    614-560-5327
                  </a>
                  for appointments and/or pricing. Complimentary consults
                  offered.
                </v-card-text>
                <v-card-text
                  class="d-flex flex-column flex-md-row justify-center align-center"
                >
                  <v-btn
                    outlined
                    color="accent"
                    class="mr-md-2 mb-2 mb-md-0 elevation-4"
                  >
                    <v-icon class="mr-1"> mdi-facebook </v-icon>
                    Dyan Carol Hair Designs
                  </v-btn>

                  <v-btn
                    class="elevation-4"
                    outlined
                    color="accent"
                    href="https://www.instagram.com/magnoliasalonboutique/"
                    target="_blank"
                  >
                    <v-icon class="mr-1"> mdi-instagram </v-icon>
                    The Magnolia Salon Boutique
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col
              cols="12"
              sm="3"
              class="outlineBorder pa-0 elevation-2 my-4 mt-4"
            >
              <v-card tile>
                <v-card-text>
                  <v-img src="/img/team2.png" contain />
                </v-card-text>
              </v-card>
            </v-col>
            <v-col
              cols="12"
              sm="8"
              offset-sm="1"
              class="outlineBorder pa-0 elevation-2"
            >
              <v-card tile class="pb-3">
                <v-card-title :class="classBundle.headline">
                  Kristie Kirkpatrick
                </v-card-title>
                <v-card-text :class="classBundle.body1Italic">
                  "With thorough one on one consultations, along with my
                  creativity and versatility, my goal is to create the perfect
                  cut, color and style for each and every guest. Life is not
                  perfect, but your hair can be!"
                </v-card-text>
                <v-card-text :class="classBundle.body1">
                  My specialty is to take today’s trends and adjust them to the
                  individual’s age, face shape and physical stature,
                </v-card-text>
                <v-card-text :class="classBundle.subtitle1Italic">
                  Products: Lanza, Alterna, Moroccan Oil
                </v-card-text>
                <v-card-text :class="classBundle.body1">
                  Call or text
                  <a
                    style="text-decoration: none"
                    class="primary--text font-weight-bold"
                    href="tel:+1-614-464-7117"
                  >
                    614-464-7117
                  </a>
                  for appointments and/or pricing. Complimentary consults
                  offered.
                </v-card-text>
              </v-card>
            </v-col>
            <v-col
              cols="12"
              sm="3"
              class="outlineBorder pa-0 elevation-2 my-4 mt-4"
            >
              <v-card tile>
                <v-card-text>
                  <v-img src="/img/team3.png" contain />
                </v-card-text>
              </v-card>
            </v-col>
            <v-col
              cols="12"
              sm="8"
              offset-sm="1"
              class="outlineBorder pa-0 elevation-2"
            >
              <v-card tile class="pb-3">
                <v-card-title :class="classBundle.headline">
                  Abbey Winter
                </v-card-title>
                <v-card-text :class="classBundle.body1Italic">
                  "I think the most important thing a woman can have is her
                  hairdresser" - Dolly Parton
                </v-card-text>
                <v-card-text :class="classBundle.subtitle1Italic">
                  Products: Redken, Unite, L'anza, Davines
                </v-card-text>
                <v-card-text
                  class="d-flex flex-column flex-md-row justify-center align-center"
                >
                  <v-btn
                    outlined
                    color="accent"
                    class="mr-md-2 mb-2 mb-md-0 elevation-4"
                  >
                    <v-icon class="mr-1"> mdi-facebook </v-icon>
                    Abbey Alison
                  </v-btn>

                  <v-btn
                    class="elevation-4"
                    outlined
                    color="accent"
                    href="https://www.instagram.com/styledbyabbey/"
                    target="_blank"
                  >
                    <v-icon class="mr-1"> mdi-instagram </v-icon>
                    @styledbyabbey
                  </v-btn>
                </v-card-text>
                <v-card-text :class="classBundle.body1">
                  Call
                  <a
                    style="text-decoration: none"
                    class="primary--text font-weight-bold"
                    href="tel:+1-614-260-5855"
                  >
                    614-260-5855
                  </a>
                  or tap/scan the QR code below for appointments and pricing.
                </v-card-text>
                <v-card-text
                  :class="classBundle.body1"
                  class="d-flex flex-row justify-center"
                >
                  <v-btn
                    href="https://salon-103134.square.site/"
                    target="_blank"
                    height="140px"
                    width="140px"
                    class="elevation-8"
                    outlined
                    color="accent"
                  >
                    <v-img
                      src="/img/team3QR.png"
                      height="132px"
                      width="132px"
                      contain
                    />
                  </v-btn>
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
