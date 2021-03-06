const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      console.log(await listContacts());
      break;

    case "get":
      console.log(await getContactById(id));
      break;

    case "remove":
      console.log(await removeContact(id));
      break;

    case "add":
      console.log(await addContact(name, email, phone));
      break;
        
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
