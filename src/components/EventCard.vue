<template>
    <router-link class="event-link" :to="{ name: 'eventShow', params: { id: event.id, sequence:seq } }">
        <div>
            <div class="event-card -shadow">
                <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
                <h4 class="title">{{ event.title }}</h4>
                <BaseIcon name="users">{{event.attendees != undefined ? event.attendees.length : 0}} attending</BaseIcon>
                <br>
                <BaseIcon name="map">{{ event.location }}</BaseIcon>
            </div>
        </div>
    </router-link>
</template>

<script>
    import EventService from "../EventService";

    export default {
        name: "EventCard",
        props: {
            event: Object,
            seq:Number
        }
    }
</script>

<style scoped>
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