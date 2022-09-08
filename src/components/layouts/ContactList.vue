<template>
    <v-table class="mt-10">
        <thead>
            <tr>
                <th style="width: 10px"></th>
                <th class="text-left text-custom">
                    Contatos
                </th>
                <th class="text-left text-custom">
                    Email
                </th>
                <th class="text-left text-custom">
                    Telefone
                </th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="contact in contactsAscendingOrdered"
                :key="contact.id"
                :class="{'highlight': highlighted(contact.id)}"
            >
            <td>
                <v-avatar color="red" class="mr-2" size="small">
                    <span class="text-white">{{ contact.name[0].toUpperCase() }}</span>
                </v-avatar>
            </td>
            <td class="text-custom-td">
                {{ contact.name }}
            </td>
            <td>{{ contact.email }}</td>
            <td>{{ contact.phone }}</td>
            <td class="aligh-right">
                <v-icon class="icon-custom" @click="updateContact(contact.id)" icon="mdi-pencil-outline"/>
                <v-icon class="icon-custom-del" @click="deleteContact(contact.id)" icon="mdi-delete"/>
            </td>
            </tr>
        </tbody>
    </v-table>

    <v-dialog v-model="contactsStore.updateDialog" max-width="400">
        <UpdateContact />
    </v-dialog>

    <v-dialog v-model="contactsStore.deleteDialog" max-width="400">
        <DeleteContact />
    </v-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { contactsModel } from '@/models/contacts'
import UpdateContact from '@/components/forms/UpdateContact.vue'
import DeleteContact from '@/components/forms/DeleteContact.vue'

const contactsStore = contactsModel()
const highlighted = (contactId: number) => contactsStore.createdItemId === contactId

function updateContact(id: any){
    contactsStore.setById(id)
    contactsStore.updateDialog = !contactsStore.updateDialog
}

function deleteContact(id: any){
    contactsStore.contactId = id
    contactsStore.deleteDialog = !contactsStore.deleteDialog
}

const contactsAscendingOrdered = computed(() => { 
    if (contactsStore.search !== '') return filterContactsBySearchedName()
    return getOrderedContacts()
})

const getOrderedContacts = () => {
    const contactsOrdered = contactsStore.contacts.sort((a, b) => {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    })
    return contactsOrdered
}

const filterContactsBySearchedName = () => {
    const cloneContacts = Object.assign(getOrderedContacts(), [])
    return cloneContacts.filter(contact => contact.name.startsWith(contactsStore.search))
}
</script>

<style scoped>
.v-table .v-table__wrapper > table > tbody > tr:hover { background-color: #fff3f2; }

@keyframes highlight {
    0% { background-color: #fff3f2; }
    100% { background-color: #fff3f2; }
}

.highlight {
    animation-name: highlight;
    animation-duration: 10s;
}

.text-custom{
    color: #9198af;
    font-size: 0.813rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
}

.text-custom-td{
    color: #2a2d3b;
    font-size: 0.875rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
}

.icon-custom{
    color: #9198af
}

.icon-custom-del{
    color: #9198af;
    margin-left: 10px;
}

.aligh-right{
    display: flex; 
    justify-content: flex-end;
    margin-top: 20px;
}
</style>