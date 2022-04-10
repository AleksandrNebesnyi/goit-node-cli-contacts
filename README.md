# Получаем и выводим весь список контактов в виде таблицы (console.table)

pk@WIN-98QR2V1LP1L MINGW64 /d/Project/GitHub/goit-node-cli-contacts (main)

<!-- $ node index.js --action list
┌─────────┬──────┬─────────────────┬─────────────────────────────────────────────────┬──────────────────┐
│ (index) │  id  │      name       │                      email                      │      phone       │
├─────────┼──────┼─────────────────┼─────────────────────────────────────────────────┼──────────────────┤
│    0    │ '1'  │ 'Allen Raymond' │           'nulla.ante@vestibul.co.uk'           │ '(992) 914-3792' │
│    1    │ '2'  │  'Chaim Lewis'  │              'dui.in@egetlacus.ca'              │ '(294) 840-6685' │
│    2    │ '3'  │ 'Kennedy Lane'  │         'mattis.Cras@nonenimMauris.net'         │ '(542) 451-7038' │
│    3    │ '4'  │  'Wylie Pope'   │               'est@utquamvel.net'               │ '(692) 802-2949' │
│    4    │ '5'  │ 'Cyrus Jackson' │            'nibh@semsempererat.com'             │ '(501) 472-5218' │
│    5    │ '6'  │ 'Abbot Franks'  │            'scelerisque@magnis.org'             │ '(186) 568-3720' │
│    6    │ '7'  │ 'Reuben Henry'  │           'pharetra.ut@dictum.co.uk'            │ '(715) 598-5792' │
│    7    │ '8'  │ 'Simon Morton'  │           'dui.Fusce.diam@Donec.com'            │ '(233) 738-2360' │
│    8    │ '9'  │ 'Thomas Lucas'  │                 'nec@Nulla.com'                 │ '(704) 398-7993' │
│    9    │ '10' │  'Alec Howard'  │ 'Donec.elementum@scelerisquescelerisquedui.net' │ '(748) 206-2688' │
└─────────┴──────┴─────────────────┴─────────────────────────────────────────────────┴──────────────────┘ -->

pk@WIN-98QR2V1LP1L MINGW64 /d/Project/GitHub/goit-node-cli-contacts (main) $

# Получаем контакт по id

node index.js --action get --id

pk@WIN-98QR2V1LP1L MINGW64 /d/Project/GitHub/goit-node-cli-contacts (main)

<!-- $ node index.js --action get --id 5
┌─────────┬──────────────────────────┐
│ (index) │          Values          │
├─────────┼──────────────────────────┤
│   id    │           '5'            │
│  name   │     'Cyrus Jackson'      │
│  email  │ 'nibh@semsempererat.com' │
│  phone  │     '(501) 472-5218'     │
└─────────┴──────────────────────────┘ -->

# Добавялем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone
322-22-22

<!-- ┌─────────┬──────┬─────────────────┬─────────────────────────────────────────────────┬──────────────────┐
│ (index) │  id  │      name       │                      email                      │      phone       │
├─────────┼──────┼─────────────────┼─────────────────────────────────────────────────┼──────────────────┤
│    0    │ '1'  │ 'Allen Raymond' │           'nulla.ante@vestibul.co.uk'           │ '(992) 914-3792' │
│    1    │ '2'  │  'Chaim Lewis'  │              'dui.in@egetlacus.ca'              │ '(294) 840-6685' │
│    2    │ '3'  │ 'Kennedy Lane'  │         'mattis.Cras@nonenimMauris.net'         │ '(542) 451-7038' │
│    3    │ '4'  │  'Wylie Pope'   │               'est@utquamvel.net'               │ '(692) 802-2949' │
│    4    │ '5'  │ 'Cyrus Jackson' │            'nibh@semsempererat.com'             │ '(501) 472-5218' │
│    5    │ '6'  │ 'Abbot Franks'  │            'scelerisque@magnis.org'             │ '(186) 568-3720' │
│    6    │ '7'  │ 'Reuben Henry'  │           'pharetra.ut@dictum.co.uk'            │ '(715) 598-5792' │
│    7    │ '8'  │ 'Simon Morton'  │           'dui.Fusce.diam@Donec.com'            │ '(233) 738-2360' │
│    8    │ '9'  │ 'Thomas Lucas'  │                 'nec@Nulla.com'                 │ '(704) 398-7993' │
│    9    │ '10' │  'Alec Howard'  │ 'Donec.elementum@scelerisquescelerisquedui.net' │ '(748) 206-2688' │
│   10    │ 700  │     'Mango'     │                'mango@gmail.com'                │       true       │
└─────────┴──────┴─────────────────┴─────────────────────────────────────────────────┴──────────────────┘
 Successfully added
┌─────────┬───────────────────┐
│ (index) │      Values       │
├─────────┼───────────────────┤
│   id    │        700        │
│  name   │      'Mango'      │
│  email  │ 'mango@gmail.com' │
│  phone  │       true        │
└─────────┴───────────────────┘ -->

pk@WIN-98QR2V1LP1L MINGW64 /d/Project/GitHub/goit-node-cli-contacts (main)

# Удаляем контакт

node index.js --action remove --id=3

 <!-- Successfully deleted
┌─────────┬──────┬─────────────────┬─────────────────────────────────────────────────┬──────────────────┐
│ (index) │  id  │      name       │                      email                      │      phone       │
├─────────┼──────┼─────────────────┼─────────────────────────────────────────────────┼──────────────────┤
│    0    │ '1'  │ 'Allen Raymond' │           'nulla.ante@vestibul.co.uk'           │ '(992) 914-3792' │
│    1    │ '2'  │  'Chaim Lewis'  │              'dui.in@egetlacus.ca'              │ '(294) 840-6685' │
│    2    │ '4'  │  'Wylie Pope'   │               'est@utquamvel.net'               │ '(692) 802-2949' │
│    3    │ '5'  │ 'Cyrus Jackson' │            'nibh@semsempererat.com'             │ '(501) 472-5218' │
│    4    │ '6'  │ 'Abbot Franks'  │            'scelerisque@magnis.org'             │ '(186) 568-3720' │
│    5    │ '7'  │ 'Reuben Henry'  │           'pharetra.ut@dictum.co.uk'            │ '(715) 598-5792' │
│    6    │ '8'  │ 'Simon Morton'  │           'dui.Fusce.diam@Donec.com'            │ '(233) 738-2360' │
│    7    │ '9'  │ 'Thomas Lucas'  │                 'nec@Nulla.com'                 │ '(704) 398-7993' │
│    8    │ '10' │  'Alec Howard'  │ 'Donec.elementum@scelerisquescelerisquedui.net' │ '(748) 206-2688' │
│    9    │ 700  │     'Mango'     │                'mango@gmail.com'                │       true       │
└─────────┴──────┴─────────────────┴─────────────────────────────────────────────────┴──────────────────┘ -->
