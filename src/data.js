import pic1 from './assets/onboard1.png';
import pic2 from './assets/onboard2.png';
import pic3 from './assets/onboard3.png';
import pic4 from './assets/onboard4.png';
import image from './assets/line-graph.png';

const data =  [
    {
        id: 1,
        pic: pic1,
        desc: 'We ensure that honesty pays'
    },
    {
        id: 2,
        pic: pic2,
        desc: 'Customise your assessment and proctoring needs'
    },
    {
        id: 3,
        pic: pic3,
        desc: 'Say no to false reports'
    },
    {
        id: 4,
        pic: pic4,
        desc: 'Protecting rights, respecting privacy'
    },
];

const classes = [
    {
      id: 1,
      classname: 'Neural Networks and Fuzzy Control',
      classcode: 'CSE3013',
      exam1: {
                id: 11,
                name: 'CAT1',
                date: '22nd Dec 2020',
                time: '9:00 am - 12:00 pm',
                status: 'Completed'
            },
    exam2: {
                id: 12,
                name: 'CAT2',
                date: '12th Jan 2021',
                time: '9:00 am - 12:00 pm',
                status: 'Join Exam'
            },
    exam3: {
                id: 13,
                name: 'Lab FAT',
                date: '22nd Mar 2021',
                time: '9:00 am - 12:00 pm',
                status: 'Yet to start'
            }
    },
    {
      id: 2,
      classname: 'IOT System Architecture',
      classcode: 'ECE1029',
      exam1: {
                id: 21,
                name: 'CAT1',
                date: '22nd Dec 2020',
                time: '9:00 am - 12:00 pm',
                status: 'Completed'
            },
     exam2: {
                id: 22,
                name: 'CAT2',
                date: '12th Jan 2021',
                time: '9:00 am - 12:00 pm',
                status: 'Join Exam'
            },
    exam3: {
                id: 23,
                name: 'Lab FAT',
                date: '22nd Mar 2021',
                time: '9:00 am - 12:00 pm',
                status: 'Yet to start'
            }
    },
]

const questions = [
    {
       id: 1,
       Question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
       img: image,
       optiona: 'Lorem ipsum dolor',
       optionb: 'Lorem ipsum dolor',
       optionc: 'Lorem ipsum dolor',
       optiond: 'Lorem ipsum dolor'
    },
    {
       id: 2,
       Question: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
       img: image,
       optiona: 'Lorem ipsum dolor',
       optionb: 'Lorem ipsum dolor',
       optionc: 'Lorem ipsum dolor',
       optiond: 'Lorem ipsum dolor'
    },
    {
       id: 3,
       Question: ' sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
       optiona: 'Lorem ipsum dolor',
       optionb: 'Lorem ipsum dolor',
       optionc: 'Lorem ipsum dolor',
       optiond: 'Lorem ipsum dolor'
    },
    {
       id: 4,
       Question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
       img: image,
       optiona: 'Lorem ipsum dolor',
       optionb: 'Lorem ipsum dolor',
       optionc: 'Lorem ipsum dolor',
       optiond: 'Lorem ipsum dolor'
    },
    {
       id: 5,
       Question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
       img: image,
       optiona: 'Lorem ipsum dolor',
       optionb: 'Lorem ipsum dolor',
       optionc: 'Lorem ipsum dolor',
       optiond: 'Lorem ipsum dolor'
    },
    {
       id: 6,
       Question: 'Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
       img: image,
       optiona: 'Lorem ipsum dolor',
       optionb: 'Lorem ipsum dolor',
       optionc: 'Lorem ipsum dolor',
       optiond: 'Lorem ipsum dolor'
    },
    {
       id: 7,
       Question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
       img: image,
       optiona: 'Lorem ipsum dolor',
       optionb: 'Lorem ipsum dolor',
       optionc: 'Lorem ipsum dolor',
       optiond: 'Lorem ipsum dolor'
    },
    {
       id: 8,
       Question: 'ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
       optiona: 'Lorem ipsum dolor',
       optionb: 'Lorem ipsum dolor',
       optionc: 'Lorem ipsum dolor',
       optiond: 'Lorem ipsum dolor'
    },
    {
       id: 9,
       Question: 'dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
       img: image,
       optiona: 'Lorem ipsum dolor',
       optionb: 'Lorem ipsum dolor',
       optionc: 'Lorem ipsum dolor',
       optiond: 'Lorem ipsum dolor'
    },
    {
       id: 10,
       Question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
       img: image,
       optiona: 'Lorem ipsum dolor',
       optionb: 'Lorem ipsum dolor',
       optionc: 'Lorem ipsum dolor',
       optiond: 'Lorem ipsum dolor'
    },
    {
       id: 11,
       Question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
       img: image,
       optiona: 'Lorem ipsum dolor',
       optionb: 'Lorem ipsum dolor',
       optionc: 'Lorem ipsum dolor',
       optiond: 'Lorem ipsum dolor'
    },
    {
       id: 12,
       Question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
       img: image,
       optiona: 'Lorem ipsum dolor',
       optionb: 'Lorem ipsum dolor',
       optionc: 'Lorem ipsum dolor',
       optiond: 'Lorem ipsum dolor'
    },
    {
       id: 13,
       Question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
       img: image,
       optiona: 'Lorem ipsum dolor',
       optionb: 'Lorem ipsum dolor',
       optionc: 'Lorem ipsum dolor',
       optiond: 'Lorem ipsum dolor'
    },
    {
       id: 14,
       Question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
       img: image,
       optiona: 'Lorem ipsum dolor',
       optionb: 'Lorem ipsum dolor',
       optionc: 'Lorem ipsum dolor',
       optiond: 'Lorem ipsum dolor'
    },
    {
       id: 15,
       Question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
       img: image,
       optiona: 'Lorem ipsum dolor',
       optionb: 'Lorem ipsum dolor',
       optionc: 'Lorem ipsum dolor',
       optiond: 'Lorem ipsum dolor'
    },
    {
       id: 16,
       Question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
       img: image,
       optiona: 'Lorem ipsum dolor',
       optionb: 'Lorem ipsum dolor',
       optionc: 'Lorem ipsum dolor',
       optiond: 'Lorem ipsum dolor'
    },
    {
       id: 17,
       Question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
       img: image,
       optiona: 'Lorem ipsum dolor',
       optionb: 'Lorem ipsum dolor',
       optionc: 'Lorem ipsum dolor',
       optiond: 'Lorem ipsum dolor'
    },
    {
       id: 18,
       Question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
       img: image,
       optiona: 'Lorem ipsum dolor',
       optionb: 'Lorem ipsum dolor',
       optionc: 'Lorem ipsum dolor',
       optiond: 'Lorem ipsum dolor'
    },
    {
       id: 19,
       Question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
       optiona: 'Lorem ipsum dolor',
       optionb: 'Lorem ipsum dolor',
       optionc: 'Lorem ipsum dolor',
       optiond: 'Lorem ipsum dolor'
    },
    {
       id: 20,
       Question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
       img: image,
       optiona: 'Lorem ipsum dolor',
       optionb: 'Lorem ipsum dolor',
       optionc: 'Lorem ipsum dolor',
       optiond: 'Lorem ipsum dolor'
    },
]

const numbers = [
   {
      idd: 1,
      num1: '1',
      num2: '2',
      num3: '3',
   },
   {
      idd: 2,
      num1: '4',
      num2: '5',
      num3: '6',
   },
   {
      idd: 3,
      num1: '7',
      num2: '8',
      num3: '9',
   },
   {
      idd: 4,
      num1: '10',
      num2: '11',
      num3: '12',
   },
   {
      idd: 5,
      num1: '13',
      num2: '14',
      num3: '15',
   },
   {
      idd: 6,
      num1: '16',
      num2: '17',
      num3: '18',
   },
   {
      idd: 7,
      num1: '19',
      num2: '20',
   }

]

export {data, classes, questions, numbers};