<template>
  <v-app>
    <!-- The Header Bar, using the Vuetify App Bar Component -->
    <v-app-bar
      app
      class="secondary"
    >
      <!-- Here, the logo is being used as the title for the toolbar -->
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
      <!-- The items within this toolbar are buttons that navigate to anchor links within the site. -->
      <v-toolbar-items v-show="$vuetify.breakpoint.lgAndUp">
        <!-- Instead of coding each button, I use some template syntax to say 'create an instance of this button for each item in links' -->
        <v-btn
          v-for="link in links"
          :key="link.url"
          v-ripple="{ 'class' : 'accent--text'}"
          v-bind="links"
          text
          nuxt
          class="title text-capitalize px-2 primary--text"
          :[link.binding]="link.url"
        >
          {{ link.text }}
        </v-btn>
      </v-toolbar-items>
      <!-- This is the code for the mobile menu, which works similarly except has a hamburger menu that show the navigation links when clicked on -->
      <v-menu
        v-show="$vuetify.breakpoint.mdAndDown"
        offset-y
        nudge-bottom="6"
      >
        <template v-slot:activator="{on}">
          <v-btn
            v-show="$vuetify.breakpoint.mdAndDown"
            v-ripple="{ 'class' : 'accent--text'}"
            icon
            v-on="on"
          >
            <v-icon>
              mdi-menu
            </v-icon>
          </v-btn>
        </template>
        <v-list class="secondary">
          <v-list-item
            v-for="link in links"
            :key="link.url"
            v-bind="links"
          >
            <v-btn
              v-ripple="{ 'class' : 'accent--text'}"
              text
              nuxt
              :[link.binding]="link.url"
              class="title text-capitalize px-2 primary--text"
            >
              {{ link.text }}
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <!-- Here is where the Nuxt component is placed, which is where the page file is inserted -->
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
        class="body-1 primary--text text-center font-weight-light"
      >
        <v-img
          max-width="30%"
          src="/img/logo.svg"
          class="mx-auto mb-2 hidden-xs-only"
        />
        <v-img
          max-width="60%"
          src="/img/logo.svg"
          class="mx-auto mb-2 hidden-sm-and-up"
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
        // This is an array of links which are objects with a url, text and binding.
        // The url is either an anchor link or an outside url, the text is what is displayed on the button, and the binding specifies whether it should treat the button as an anchor link or href.
        links: [
          {
            url: '/#hero',
            text: 'Home',
            binding: 'to',
          },
          {
            url: '/#about',
            text: 'About',
            binding: 'to',
          },
          {
            url: '/#team',
            text: 'Our Team',
            binding: 'to',
          },
          {
            url: '/#products',
            text: 'Products',
            binding: 'to',
          },
          {
            url: '/#services',
            text: 'Services',
            binding: 'to',
          },
          {
            url: '/#contact',
            text: 'Contact',
            binding: 'to',
          },
          {
            url: '/#career',
            text: 'Career Paths',
            binding: 'to',
          },
          {
            url: 'https://www.instagram.com/magnoliasalonboutique/',
            text: 'Instagram',
            binding: 'href',
          },
          {
            url: '/blog',
            text: 'Blog',
            binding: 'to',
          },
        ],
      }
    },
  }
</script>
