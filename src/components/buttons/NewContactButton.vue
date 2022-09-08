<template>
    <v-btn class="create-button" rounded="pill" color="#dbff90" size="small" @click.prevent="toggleDialog">
        <v-icon start icon="mdi-plus"/>
        <span class="create-btn-text"></span>Criar contato
    </v-btn>

    <v-dialog v-model="contactsStore.createDialog" max-width="400">
       <CreateContact />
    </v-dialog>
</template>

<script setup lang="ts">
import CreateContact from '@/components/forms/CreateContact.vue'
import { contactsModel } from '@/models/contacts'

const contactsStore = contactsModel()
const toggleDialog = () => {
    contactsStore.createDialog = !contactsStore.createDialog
}
</script>

<style scoped>
.create-button {
    color: #fa7268 !important;
    width: 11rem;
    height: 2.5rem;
    padding: 0.75rem 1.375rem 0.75rem 1rem;
    border-radius: 20px;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16), 0 0 0 0.5px rgba(0, 0, 0, 0.08), inset 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 2px 4px 0.5px rgba(0, 0, 0, 0.16);
    background-color: #dbff90;
}


.create-btn-text{
    height: 1rem;
    font-family: Roboto;
    font-size: 0.875rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #fa7268;
}
</style>