<template>
  <v-row id="contact">
    <v-col cols="12">
      <v-card :class="classBundle.backgroundCard">
        <v-card-title :class="classBundle.display1">
          Contact
        </v-card-title>
        <v-divider :class="classBundle.divider" />
        <v-card-subtitle :class="classBundle.title">
          To schedule an appointment, please call or text
          <br>
          614-813-8625
        </v-card-subtitle>
        <v-card-subtitle
          :class="classBundle.body1"
          class="pt-0"
        >
          We believe that each individual’s needs are unique and requires a personal phone call or message.
          <br>
          We will try our best to return your call by the day’s end.
          <br>
          If for some reason we cannot, we will be sure to reach you by the next morning.
        </v-card-subtitle>
        <v-card-text>
          <v-row>
            <v-col
              md="6"
              sm="12"
            >
              <v-col
                cols="12"
                class="outlineBorder pa-0 ma-0 ma-sm-2"
              >
                <v-card tile>
                  <v-card-title :class="classBundle.headline">
                    Hours
                  </v-card-title>
                  <v-divider :class="classBundle.divider" />
                  <v-card-subtitle :class="classBundle.body1Italic">
                    Each designer will work custom hours.
                    <br>
                    Please check with your designer for their particular schedule.
                  </v-card-subtitle>
                  <v-card-text :class="classBundle.title">
                    Monday: Closed
                    <br>
                    Tuesday: 10 AM - 7 PM
                    <br>
                    Wednesday: 10 AM - 7 PM
                    <br>
                    Thursday: 10 AM - 7 PM
                    <br>
                    Friday: 9 AM - 3 PM
                    <br>
                    Saturday: 9 AM - 2 PM
                    <br>
                    Sunday: Closed
                  </v-card-text>
                </v-card>
              </v-col>
            </v-col>
            <v-col
              md="6"
              sm="12"
            >
              <v-col
                cols="12"
                class="outlineBorder pa-0 ma-0 ma-sm-2"
              >
                <v-card tile>
                  <v-card-title :class="classBundle.headline">
                    Address and Parking
                  </v-card-title>
                  <v-divider :class="classBundle.divider" />
                  <v-card-subtitle :class="classBundle.title">
                    119 South High Street
                    <br>
                    Dublin, Ohio 43017
                  </v-card-subtitle>
                  <v-card-text :class="classBundle.body1">
                    There is plenty of private parking in the back of the salon and public parking on the street in front.
                    <br>
                    In respect to our neighboring businesses, we ask that you park in front of The Magnolia or in the back.
                    <br>
                    Thank you!
                  </v-card-text>
                </v-card>
              </v-col>
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
