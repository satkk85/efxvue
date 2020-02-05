<template>
    <div>
        <template v-for="(event,index) in events">
            <EventCard :event="event" :seq="index"></EventCard>
        </template>
    </div>

</template>

<script>
    import EventCard from "../components/EventCard";
    import EventService from "../EventService";

    export default {
        name: "EventList",
        components: {
            EventCard
        },
        data(){
          return {
              events: []
          }
        },
        created() {
            EventService.getEvents()
                .then(response => {
                    this.events = EventService.getData(response);
                })
                .catch(error => {
                    console.log(error);
                })
        }

    }
</script>

<style scoped>

    .event-link {
        color: black;
        text-decoration: none;
        font-weight: 100;
    }

    .event-card {
        padding: 20px;
        margin-bottom: 24px;
        transition: all 0.2s linear;
        cursor: pointer;
    }

    .event-card:hover {
        transform: scale(1.01);
        box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
    }

    .event-card > .title {
        margin: 0;
    }

    .eyebrow {
        font-size: 20px;
    }
</style>