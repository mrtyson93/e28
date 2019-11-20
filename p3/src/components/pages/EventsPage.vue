<template>
  <div>
    <br>
    <div v-if="jsonResponseBool">
      <div v-if="hasEvents">
        <v-card>
          <v-card-title>Events</v-card-title>
        </v-card>
        <v-card
          class="ma-4"
          dark
          v-for="event in events"
          :key=event.id
          :raised="trueBool"
        >
          <v-card-title>{{ event.name }}</v-card-title>
          <v-card-subtitle class="text-left">Event Type: {{event.classifications[0].segment.name}}<span v-if="event.classifications[0].genre">, {{ event.classifications[0].genre.name }}</span></v-card-subtitle>
          <v-card-text>
            <div class="body-1 text-left">Date &#38; Time: {{ event.dates.start.localDate }}, {{ event.dates.start.localTime }}</div>
            <div class="body-1 text-left">Website: <a
                :href="event.url"
                target="_blank"
              >{{ event.url }}</a></div>
          </v-card-text>
        </v-card>
      </div>
      <v-card
        v-else
        dark
      >
        <v-card-title>No Events</v-card-title>
      </v-card>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "EventsPage",
  data: function() {
    return {
      events: null,
      jsonResponseBool: false,
      trueBool: true,
      hasEvents: false
    };
  },
  mounted() {
    this.events = axios
      .get(
        "https://app.ticketmaster.com/discovery/v2/events.json?postalCode=02139&radius=3&apikey=yVOXVXgMX7DMiA9It9NTYN48i9jBbwrB&sort=date,asc"
      )
      .then(response => {
        if (response.data.page.totalElements != 0) {
          this.events = response.data._embedded.events;
          this.hasEvents = true;
        }
        this.jsonResponseBool = true;
      });
  }
};
</script>
