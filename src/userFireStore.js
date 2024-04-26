import { collection, addDoc, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig'; // Assuming firebaseConfig.js stores Firestore instance

// Add a new user
export const addUser = async (userData) => {
  try {
    const userRef = collection(db, 'users');
    await addDoc(userRef, userData);
    console.log('User added successfully!');
  } catch (err) {
    console.error('Error adding user:', err);
  }
};