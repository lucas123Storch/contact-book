<template>
    <ContactList v-if="contactsModel().contacts.length > 0"/>
    <EmptySchedule v-else />
</template>

<script setup lang="ts">
import { contactsModel } from '@/models/contacts'
import EmptySchedule from './EmptySchedule.vue';
import ContactList from './ContactList.vue';

</script>
