<template>
  <v-row id="services">
    <v-col cols="12">
      <v-card :class="classBundle.backgroundCard">
        <v-card-title :class="classBundle.display1">
          Services
        </v-card-title>
        <v-divider :class="classBundle.divider" />
        <v-card-subtitle :class="classBundle.body1">
          Not all cuts or services are created equal.
          <br>
          All prices are starting points and may be more or less depending on complexity, length and density of the hair.
          <br>
          You are welcome to schedule a fifteen minute complimentary consultation before you schedule.
          <br>
          Prices may vary within our team of stylists.
          <br>
          Please check back as our team grows.
        </v-card-subtitle>
        <v-row>
          <v-col
            md="6"
            cols="12"
            class="pb-0 pb-sm-3"
          >
            <serviceMenu
              v-for="service in servicesLeft"
              :key="service.title"
              :service="service"
              :class-bundle="classBundle"
            />
          </v-col>
          <v-col
            md="6"
            cols="12"
            class="pt-0 pt-sm-3"
          >
            <serviceMenu
              v-for="service in servicesRight"
              :key="service.title"
              :service="service"
              :class-bundle="classBundle"
              class="mt-0 mt-sm-2"
            />
          </v-col>
        </v-row>
        <v-card-title :class="classBundle.headline">
          Special Note About Children
        </v-card-title>
        <v-divider :class="classBundle.divider" />
        <v-card-subtitle :class="classBundle.body1">
          Though we love the young ones that come to us, in order to keep the integrity of the salon environment as mentioned above, we ask that all children come during their appointment only.
          <br>
          All siblings will need to be accompanied by an adult in the reception area.
          <br>
          The child must be able to sit attentively so that the designers can use extremely sharp tools without distraction.
          <br>
          We thank you in advance for your attention to these requirements.
        </v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import serviceMenu from '../services/serviceMenu.vue'
  export default {
    components: {
      serviceMenu,
    },
    props: {
      classBundle: Object,
    },
    data () {
      return {
        servicesLeft: [
          {
            title: 'Haircuts',
            subtitle: [
              {
                index: 0,
                text: 'Haircuts include a full consultation before every service, massaging shampoo, full style including training with tools, technique and products used.',
              },
            ],
            items: [
              {
                title: "Women's Haircut",
                price: '$55',
              },
              {
                title: "Men's Haircut",
                price: '$35',
              },
              {
                title: "Children's Haircut",
                price: 'To Be Determined Per Child',
              },
            ],
          },
          {
            title: 'Waxing',
            subtitle: [
              {
                index: 0,
                text: 'Facial Waxing Only. Multiple Services are discounted.',
              },
            ],
            items: [
              {
                title: 'Brow Shaping',
                price: '$19',
              },
              {
                title: 'Lip',
                price: '$10',
              },
              {
                title: 'Chin',
                price: '$10',
              },
              {
                title: 'Cheeks',
                price: '$18',
              },
              {
                title: 'Brow Coloring Using Safe Plant Derived Color',
                price: '$15',
              },
            ],
          },
          {
            title: 'Additional Services',
            items: [
              {
                title: 'Style Only',
                price: '$40',
              },
              {
                title: 'Permanent Waves',
                price: '$100 As Per Consultation',
              },
              {
                title: 'Special Occasion Styling',
                price: 'To Be Determined At Consultation',
              },
            ],
          },
        ],
        servicesRight: [
          {
            title: 'Color Services',
            subtitle: [
              {
                index: 0,
                text: 'All color services include a full consultation before each service to determine which of our fine lines of colors and formulas would best reach your goal.',
              },
              {
                index: 1,
                text: 'After each color, the hair is treated with a silkening low ph conditioner that is massaged into the scalp and hair for a relaxing finish.',

              },
              {
                index: 2,
                text: 'All services are completed with a beautiful dry style, using Davines products to achieve your desired results.',
              },
              {
                index: 3,
                text: 'Multiple services are discounted, to be determined during consultation. For each color service that requires a haircut, add $45 (A $10 Value).',
              },
              {
                index: 4,
                text: 'Extra styling or styling long or thick hair may require extra time and cost.',
              },
            ],
            items: [
              {
                title: 'Color Retouch',
                price: '$75',
              },
              {
                title: 'Full Highlights',
                price: '$120',
              },
              {
                title: 'Partial Highlights',
                price: 'To Be Determined At Consultation',
              },
              {
                title: 'Balayage',
                price: 'Starting At $120, To Be Determined At Consultation',
              },
              {
                title: 'Color Retouch and Highlights',
                price: 'Starting At $100, To Be Determined At Consultation',
              },
            ],
          },
        ],
      }
    },
  }
</script>
