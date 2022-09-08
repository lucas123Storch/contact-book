<template>
    <v-card rounded="lg" class="contact__card">
        <v-card-header>
            <v-card-header-text>
                <v-card-title class="contact__title font-weight-regular">Excluir contato</v-card-title>
            </v-card-header-text>
        </v-card-header>

        <v-divider />

        <v-card-text>
            Deseja realmente excluir o contato?
        </v-card-text>

        <v-divider />

        <v-card-actions class="d-flex justify-end">
            <v-btn color="#fa7268" variant="text" size="small" rounded="pill" @click.prevent="cancel">Cancelar</v-btn>
            <v-btn class="exl-btn" color="#fa7268" variant="elevated" size="small" rounded="pill" @click.prevent="deleteContact">Excluir</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import { contactsModel } from '@/models/contacts'

const contactsStore = contactsModel()

const cancel = () => contactsStore.deleteDialog = !contactsStore.deleteDialog

const deleteContact = () => {
    contactsStore.delete(contactsStore.contactId)
    contactsStore.deleteDialog = !contactsStore.deleteDialog
}

</script>

<style lang="scss" scoped>
.contact {
    &__card {
        width: 27rem;
    }

    &__title {
        font-size: 1rem;
        color: #2a2d3b;
    }
}

.exl-btn{
    color: #fff;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16), 0 0 0 0.5px rgba(0, 0, 0, 0.08), inset 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 2px 4px 0.5px rgba(0, 0, 0, 0.16);
}
</style>