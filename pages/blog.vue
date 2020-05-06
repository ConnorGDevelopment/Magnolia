<template>
  <v-container
    fluid
    class="secondary"
  >
    <v-row>
      <v-col
        cols="8"
        offset="2"
      >
        <v-card>
          <v-card-title :class="classBundleBlog.display1">
            Our Story
          </v-card-title>
          <v-divider :class="classBundleBlog.divider" />
          <v-card-subtitle
            :class="classBundleBlog.body1Italic"
            class="text-center"
          >
            May 3rd, 2020
          </v-card-subtitle>
          <v-card-text>
            <v-img src="/img/about.jpg" />
          </v-card-text>
          <v-card-text :class="classBundleBlog.body1">
            The Magnolia Salon Boutique, located in quaint historic Old Dublin, was born out of a desire to offer guests a unique experience that promotes both beauty and wellness through personal attention, the latest in top product lines, professionalism and skill.
            <br><br>
            Hi, I’m Dyan Carol Reckner and I would like to share how my dream of opening The Magnolia got started. I was extremely fortunate to be trained early in my career by the top hair artists in the world and eventually became an artistic director and educator on this team. The professionalism and client service was second to none. Above and beyond and the best became my mantra.
            <br><br>
            After raising two wonderful children, I had a strong desire to return to my roots and work with like-minded individuals again. I’ve worked in Old Dublin for fourteen years and then several years in a single studio. Sharing talent with other salon professionals and offering clients the same professional quality went from a dream to a goal.
            <br><br>
            When the charming location at 119 S. High St became available, I was excited and beyond thrilled. My dream and goal was born and The Magnolia Salon was created. The flower represents dignity, perseverance, magnificence and purity. These are all qualities that I value and wanted represented in myself and others that I work with.
            <br><br>
            I welcome you to our new location. Please stop by to say hello or to make an appointment to meet us! We’ll be delighted you did!
          </v-card-text>
          <v-card-text :class="classBundleBlog.body1Italic">
            - Dyan Reckner, Founder of The Magnolia Salon Boutique
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        classBundleBlog: {
          divider: 'primary mx-auto dividerWidth',
          menuDivider: 'primary mx-2',
          backgroundImage: 'align-center backgroundImage',
          backgroundCard: 'secondary elevation-0',
          display1: 'display-1 text--primary justify-center ',
          headline: 'headline text--primary justify-center',
          title: 'title text--primary justify-center text-center',
          subtitle1Italic: 'subtitle-1 text--primary text-center font-weight-light font-italic',
          body1: 'body-1 text--primary font-weight-light',
          body1Italic: 'body-1 text--primary font-weight-light font-italic',
        },
      }
    },
  }
</script>
