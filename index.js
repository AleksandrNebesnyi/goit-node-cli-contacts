const argv = require('yargs').argv;
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require('./contacts.js');

// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const contacts = await listContacts();
      return console.table(contacts);

    case 'get':
      const contact = await getContactById(id);
      return console.table(contact);

    case 'add':
      const newContact = await addContact(name, email, phone);
      return console.table(newContact);

    case 'remove':
      const deleteContact = await removeContact(id);
      return console.table(deleteContact);

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

// const { Command } = require('commander');
// const program = new Command();
// program
//   .option('-a, --action <type>', 'choose action')
//   .option('-i, --id <type>', 'user id')
//   .option('-n, --name <type>', 'user name')
//   .option('-e, --email <type>', 'user email')
//   .option('-p, --phone <type>', 'user phone');

// program.parse(process.argv);

// const argv = program.opts();

// // TODO: рефакторить
// function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case 'list':
//       listContacts();
//       break;

//     case 'get':
//       getContactById(id);
//       break;

//     case 'add':
//       addContact(name, email, phone);
//       break;

//     case 'remove':
//       removeContact(id);
//       break;

//     default:
//       console.warn('\x1B[31m Unknown action type!');
//   }
// }
invokeAction(argv);
