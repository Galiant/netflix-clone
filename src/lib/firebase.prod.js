import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyCmxkRYknDCfoCkNXcqi9NH-ttYq6SoHQI',
  authDomain: 'netflix-clone-11b58.firebaseapp.com',
  databaseURL: 'https://netflix-clone-11b58.firebaseio.com',
  projectId: 'netflix-clone-11b58',
  storageBucket: 'netflix-clone-11b58.appspot.com',
  messagingSenderId: '906107339704',
  appId: '1:906107339704:web:a1d995aa71ad3e5e01054d',
};

const firebase = Firebase.initializeApp(config);

// after calling once need to be commented because we
// want to avoid duplication of data in firebase

// seedDatabase(firebase);

export { firebase };
