import { defineStore } from "pinia";
import { ContactInterface } from "@/interfaces/contacts";

interface State {
  contacts: ContactInterface[];
  contact: ContactInterface | Record<string, never>;
  contactId: number;
  createdItemId: number;
  search: string;
  createDialog: boolean;
  updateDialog: boolean;
  deleteDialog: boolean;
}

export const contactsModel = defineStore("contacts", {
  state: (): State => ({
    contacts: JSON.parse(localStorage.getItem('contacts') || ''),
    contact: {},
    contactId: 0,
    createdItemId: 0,
    search: "",
    createDialog: false,
    updateDialog: false,
    deleteDialog: false,
  }),

  actions: {
    post(contactForm: ContactInterface) {
      this.contacts.push(contactForm);
      this.createdItemId = contactForm.id;
      localStorage.setItem("contacts", JSON.stringify(this.contacts));
    },

    put(contactForm: ContactInterface) {
      const updatedContacts = this.contacts.map((contact) => {
        if (contact.id === contactForm.id) contact = contactForm;

        return contact;
      });

      this.contacts = updatedContacts;
      localStorage.setItem("contacts", JSON.stringify(this.contacts));
    },

    delete(id: number) {
      const index = this.contacts.map((contact) => contact.id).indexOf(id);
      const countRemovedItems = 1;
      this.contacts.splice(index, countRemovedItems);
      localStorage.setItem("contacts", JSON.stringify(this.contacts));
    },

    setById(id: number) {
      const contact = this.contacts.find((contact) => contact.id === id);
      this.contact = contact || {};
    },
  },
});
