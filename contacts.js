const path = require("path");
const fs = require("fs").promises;

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  try {
const contacts = await fs.readFile(contactsPath, "utf8");
return JSON.parse(contacts)
  } catch (error) {
    console.error(error)
  }
};

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    return contacts.find((contact) => contact.id === Number(contactId))
      } catch (error) {
        console.error(error)
      }
    };

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const updateContacts = JSON.stringify(contacts.filter((contact) => contact.id !== contactId));
    return fs.writeFile(contactsPath, updateContacts, "utf8")

      } catch (error) {
        console.error(error)
      }
    };


async function addContact(name, email, phone) {
  try {
  const contacts = await listContacts();
  const newContact = { name, email, phone };
  contacts.push(newContact);
  return await  fs.writeFile(contactsPath, JSON.stringify(contacts), "utf8")

      } catch (error) {
        console.error(error)
      }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};