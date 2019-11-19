<template>
  <div class="column">
    <FullCalendar
        defaultView="dayGridMonth"
        :plugins="calendarPlugins"
        :header="{
          left: 'title',
          center: '',
          right: ''
        }"
        :footer="{
          left: 'prev',
          center: 'today',
          right: 'next'
        }"
        :contentHeight="calendarHeight"
        :locale="locale"
        :firstDay=1
        :buttonText="{
          today: '||'
        }"
        :events="events"
      />
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import localeFi from "@fullcalendar/core/locales/fi";

export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarPlugins: [ dayGridPlugin ],
      calendarHeight: "auto",
      locale: "fi",
      events: [
        {
          title: "Event 1",
          date: "2019-11-15"
        },
        {
          title: "Event 2",
          date: "2019-11-17"
        }
      ]
    };
  },
}
</script>