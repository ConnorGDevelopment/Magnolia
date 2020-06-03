<template>
  <v-container
    fluid
    class="secondary"
  >
    <v-row>
      <v-col
        lg="10"
        offset-lg="1"
      >
        <v-card
          v-for="post in blog"
          :key="post.title"
          tile
        >
          <v-card-title :class="classBundleBlog.display1">
            {{ post.title }}
          </v-card-title>
          <v-divider :class="classBundleBlog.divider" />
          <v-card-subtitle
            :class="classBundleBlog.body1Italic"
            class="text-center"
          >
            {{ post.date }}
          </v-card-subtitle>
          <v-card-text>
            <v-img
              contain
              :src="post.image"
              :style="{'max-height' : '75vh'}"
            />
          </v-card-text>
          <v-card-text :class="classBundleBlog.body1">
            <nuxt-content :document="post" />
          </v-card-text>
          <v-card-text :class="classBundleBlog.body1Italic">
            {{ post.closing }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    async asyncData ({ $content }) {
      const blog = await $content().fetch()
      return {
        blog,
      }
    },
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
