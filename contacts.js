const path = require('path');
// const fs = require('fs/promises');
const fs = require('fs').promises;

const { customAlphabet } = require('nanoid');
const newId = customAlphabet('1234567890', 4);

//   Раскомментируй и запиши значение
// Полный путь к папке с текущим модулем / папка / файл
const contactsPath = path.join(__dirname, 'db', 'contacts.json');

// TODO: задокументировать каждую функцию
async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    const contactList = JSON.parse(data);
    return contactList;
  } catch (error) {
    console.log(error.massage);
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const result = contacts.find(contact => contact.id == contactId);
    if (!result) {
      return null;
    }
    return result;
  } catch (error) {
    console.log(error.massage);
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    // const idx = contacts.findIndex(contact => contact.id === contactId);
    // if (idx === -1) {
    //   return null;
    // }
    // console.log('idx', idx);
    // const filteredContacts = contacts.splice(idx, 1);
    const filteredContacts = contacts.filter(
      contact => contact.id != contactId,
    );
    const contactsStr = JSON.stringify(filteredContacts, null, 2);

    await fs.writeFile(contactsPath, contactsStr);

    console.log('\x1b[32m Successfully deleted');
    return filteredContacts;
  } catch (error) {
    console.log(error.massage);
  }
}

async function addContact(name, email, phone) {
  const newContact = {
    id: Number(newId()),
    name,
    email,
    phone,
  };
  try {
    const contacts = await listContacts();
    const updateContacts = [...contacts, newContact];
    await fs.writeFile(contactsPath, JSON.stringify(updateContacts, null, 2));
    console.table(updateContacts);
    console.log('\x1b[32m Successfully added');
    return newContact;
  } catch (error) {
    console.log(error.massage);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
