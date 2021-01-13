<template>
  <v-row id="team">
    <v-col
      sm="12"
      xl="8"
      offset-xl="2"
    >
      <v-card
        tile
        :class="classBundle.backgroundCard"
      >
        <v-card-title :class="classBundle.display1">
          Our Team
        </v-card-title>
        <v-divider :class="classBundle.divider" />
        <v-card-subtitle :class="classBundle.subtitle1Italic">
          Please check back frequently, as we are growing our team of talented cosmetologists.
        </v-card-subtitle>
        <v-card-text>
          <v-row class="align-center">
            <v-col
              cols="12"
              sm="4"
            >
              <v-img src="/img/team1.png" />
            </v-col>
            <v-col
              cols="12"
              sm="8"
              class="outlineBorder pa-0 elevation-2"
            >
              <v-card
                tile
                class="pb-3"
              >
                <v-card-title :class="classBundle.headline">
                  Dyan Carol Reckner
                </v-card-title>
                <v-card-subtitle :class="classBundle.title">
                  Hair Designer and Color Artist
                </v-card-subtitle>
                <v-card-text :class="classBundle.body1Italic">
                  "When you look good, you perform better" - Anonymous
                </v-card-text>
                <v-card-text :class="classBundle.body1">
                  With the correct hair shape and color, I believe every woman and man can look beautiful and handsome respectively.
                  <br>
                  My specialty is to take today’s trends and adjust them to the individual’s face shape, physical stature, along with their style and ability to maintain those looks.
                  <br>
                  As a stylist, my goal is to not only accentuate each client’s best features, enhancing their look, but to add to their confidence by helping them look and feel their best.
                </v-card-text>
              </v-card>
            </v-col>
            <v-col
              cols="12"
              sm="4"
            >
              <v-img src="/img/team2.png" />
            </v-col>
            <v-col
              cols="12"
              sm="8"
              class="outlineBorder pa-0 elevation-2"
            >
              <v-card
                tile
                class="pb-3"
              >
                <v-card-title :class="classBundle.headline">
                  Mariah Furniss
                </v-card-title>
                <v-card-subtitle :class="classBundle.title">
                  Hair Designer
                </v-card-subtitle>
                <v-card-text :class="classBundle.body1">
                  I love connecting with my guests, not only on a professional level, but personal as well.
                  <br>
                  This assists my ability to envision and create the perfect hair design unique to them.
                  <br>
                  My passion for fashion and trends fuels my desire to create those Pinterest perfect techniques that are high in demand.
                  <br>
                  Because every highlight is meticulously placed, the grow out is seamless and ideal for busy schedules!
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
