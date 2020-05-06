<template>
  <v-col
    cols="12"
    class="outlineBorder pa-0 ma-2"
  >
    <v-card tile>
      <v-card-title :class="classBundle.headline">
        {{ service.title }}
      </v-card-title>
      <v-divider :class="classBundle.divider" />
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
            class="align-center"
            :class="classBundle.title"
          >
            <v-col cols="5">
              {{ item.title }}
            </v-col>
            <v-col cols="2">
              <v-divider :class="classBundle.menuDivider" />
            </v-col>
            <v-col cols="5">
              {{ item.price }}
            </v-col>
          </v-row>
        </v-col>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
  export default {
    props: {
      classBundle: Object,
      service: Object,
    },
  }
</script>
