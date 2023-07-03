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
        <v-card-text class="pa-0">
          <v-row class="align-center">
            <v-col cols="12" v-for="member in team" :key="member.name">
              <v-card tile class="pb-3">
                <v-row class="ma-0">
                  <v-col
                    cols="8"
                    offset="2"
                    sm="3"
                    offset-sm="0"
                    align-self="center"
                    class="mt-9 mt-sm-0"
                  >
                    <v-img :src="member.image" contain />
                  </v-col>
                  <v-col cols="12" sm="9" align-self="center">
                    <v-card-title :class="classBundle.headline">
                      {{ member.name }}
                    </v-card-title>

                    <v-card-text
                      :class="classBundle.body1Italic"
                      v-if="member.quote"
                    >
                      {{ member.quote }}
                    </v-card-text>
                    <v-card-text
                      :class="classBundle.body1"
                      v-if="member.specialty"
                    >
                      {{ member.specialty }}
                    </v-card-text>
                    <v-card-text
                      :class="classBundle.subtitle1Italic"
                      v-if="member.products"
                    >
                      {{ member.products }}
                    </v-card-text>
                    <v-card-text :class="classBundle.body1">
                      {{ member.contact.line1 }}
                      <a
                        style="text-decoration: none"
                        class="primary--text font-weight-bold"
                        :href="`tel:+1-${member.contact.phone}`"
                      >
                        {{ member.contact.phone }}
                      </a>
                      {{ member.contact.line2 }}
                    </v-card-text>

                    <v-card-text
                      class="d-flex flex-column flex-md-row justify-center align-center"
                    >
                      <v-btn
                        v-if="member.facebook"
                        outlined
                        color="accent"
                        class="mr-md-2 mb-2 mb-md-0 elevation-4"
                        :href="member.facebook.link"
                        target="_blank"
                      >
                        <v-icon class="mr-1"> mdi-facebook </v-icon>
                        {{ member.facebook.title }}
                      </v-btn>

                      <v-btn
                        v-if="member.instagram"
                        class="elevation-4"
                        outlined
                        color="accent"
                        :href="member.instagram.link"
                        target="_blank"
                      >
                        <v-icon class="mr-1"> mdi-instagram </v-icon>
                        {{ member.instagram.title }}
                      </v-btn>
                    </v-card-text>
                    <v-card-text
                      v-if="member.contact.qr"
                      :class="classBundle.body1"
                      class="d-flex flex-row justify-center"
                    >
                      <v-btn
                        :href="member.contact.qr.link"
                        target="_blank"
                        height="140px"
                        width="140px"
                        class="elevation-8"
                        outlined
                        color="accent"
                      >
                        <v-img
                          :src="member.contact.qr.image"
                          height="132px"
                          width="132px"
                          contain
                        />
                      </v-btn>
                    </v-card-text>
                  </v-col>
                </v-row>
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
  data: function () {
    return {
      team: [
        {
          image: '/img/team1.png',
          name: 'Dyan Carol Reckner',
          quote: '"When you look good, you perform better" - Anonymous',
          specialty:
            'My specialty is to take today’s trends and adjust them to the individual’s age, face shape, and physical stature.',
          products:
            'Products: Davines Specialty Salon, WOW Hair Care inn store and/or online, anything from the Manoco Blue professional hair care supplier.',
          contact: {
            line1: 'Call or text',
            phone: '614-464-7117',
            line2:
              'for appointments and/or pricing. Complimentary consults offered.',
          },
          facebook: {
            title: 'Dyan Carol Hair Designs',
            link: 'https://www.facebook.com/profile.php?id=100063718350154',
          },
        },
        {
          image: '/img/team2.png',
          name: 'Kristie Kirkpatrick',
          quote:
            '"With thorough one on one consultations, along with my creativity and versatility, my goal is to create the perfect cut, color and style for each and every guest. Life is not perfect, but your hair can be!"',
          products: 'Products: Lanza, Alterna, Moroccan Oil',
          contact: {
            line1: 'Call or text',
            phone: '614-464-7117',
            line2:
              'for appointments and/or pricing. Complimentary consults offered.',
          },
        },
        {
          image: '/img/team3.png',
          name: 'Abbey Winter',
          quote:
            '"I think the most important thing a woman can have is her hairdresser" - Dolly Parton',
          products: "Products: Redken, Unite, L'anza, Davines",
          facebook: {
            title: 'Abbey Alison - Stylist',
            link: 'https://www.facebook.com/StyledbyAbbeyy',
          },
          instagram: {
            title: '@stylebyabbeyy',
            link: 'https://www.instagram.com/styledbyabbeyy/',
          },
          contact: {
            line1: 'Call',
            phone: '614-260-5855',
            line2:
              'or tap/scan the QR code below for appointments and pricing.',
            qr: {
              image: '/img/team3QR.png',
              link: 'https://salon-103134.square.site/',
            },
          },
        },
      ],
    }
  },
}
</script>
