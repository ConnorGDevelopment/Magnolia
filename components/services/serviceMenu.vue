<template>
  <v-col

    cols="12"
    class="outlineBorder pa-0 ma-2"
  >
    <v-card tile>
      <v-btn
        v-show="$vuetify.breakpoint.xs"
        block
        tile
        large
        :class="classBundle.headline"
        :service="service"
        @click="showService = !showService"
      >
        {{ service.title }}
      </v-btn>
      <v-card-title
        v-show="$vuetify.breakpoint.smAndUp"
        :class="classBundle.headline"
      >
        {{ service.title }}
      </v-card-title>
      <v-divider
        v-show="$vuetify.breakpoint.xs && showService === true"
        class="primary"
      />
      <v-divider
        v-show="$vuetify.breakpoint.smAndUp"
        :class="classBundle.divider"
      />
      <div v-show="$vuetify.breakpoint.smAndUp === true || showService === true">
        <v-card-subtitle
          v-for="subtitle in service.subtitle"
          :key="subtitle.index"
          :class="classBundle.body1Italic"
        >
          {{ subtitle.text }}
        </v-card-subtitle>
        <v-card-text>
          <v-col cols="12">
            <v-row
              v-for="item in service.items"
              :key="item.title"
              class="align-center my-5 my-sm-0"
              :class="classBundle.title"
            >
              <v-col
                cols="12"
                sm="5"
                class="py-1 py-sm-3"
              >
                {{ item.title }}
              </v-col>
              <v-col
                sm="2"
                cols="4"
                class="pa-0 pa-sm-2"
              >
                <v-divider :class="classBundle.menuDivider" />
              </v-col>
              <v-col
                cols="12"
                sm="5"
                class="py-1 py-sm-3"
              >
                {{ item.price }}
              </v-col>
            </v-row>
          </v-col>
        </v-card-text>
      </div>
    </v-card>
  </v-col>
</template>

<script>
  export default {
    props: {
      classBundle: Object,
      service: Object,
    },
    data () {
      return {
        showService: false,
      }
    },
  }
</script>
