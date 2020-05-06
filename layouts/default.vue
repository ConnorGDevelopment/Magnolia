<template>
  <v-app>
    <v-app-bar
      app
      class="secondary"
    >
      <v-toolbar-title
        :style="{'max-height' : '100%'}"
        class="d-flex px-2"
      >
        <v-img
          contain
          max-height="100%"
          src="/img/logo.svg"
        />
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn
          v-for="link in links"
          :key="link.url"
          v-ripple="{ 'class' : 'accent--text'}"
          v-bind="links"
          text
          nuxt
          class="title text-capitalize px-2 text--primary"
          :to="link.url"
        >
          {{ link.text }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content class="secondary">
      <v-container
        fluid
        class="pa-0"
      >
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      class="secondary"
    >
      <v-col
        cols="12"
        class="body-1 text--primary text-center font-weight-light"
      >
        <v-img
          max-width="30%"
          src="/img/logo.svg"
          class="mx-auto mb-2"
        />
        614-813-8625
        <br>
        119 South High
        <br>
        Dublin, OH 43017
        <br>
        <v-btn
          icon
          large
          color="accent"
        >
          <v-icon>
            mdi-facebook
          </v-icon>
        </v-btn>
        <v-btn
          icon
          large
          color="accent"
          href="https://www.instagram.com/magnoliasalonboutique/"
          target="_blank"
        >
          <v-icon>
            mdi-instagram
          </v-icon>
        </v-btn>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Vuetify.js',
        links: [
          {
            url: '/#hero',
            text: 'Home',
          },
          {
            url: '/#about',
            text: 'About',
          },
          {
            url: '/#team',
            text: 'Our Team',
          },
          {
            url: '/#products',
            text: 'Products',
          },
          {
            url: '/#services',
            text: 'Services',
          },
          {
            url: '/#contact',
            text: 'Contact',
          },
          {
            url: '/#career',
            text: 'Career Paths',
          },
          {
            url: '/#instagram',
            text: 'Instagram',
          },
          {
            url: '/blog',
            text: 'Blog',
          },
        ],
      }
    },
  }
</script>
