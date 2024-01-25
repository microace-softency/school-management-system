import { createContext, useContext, useEffect, useState } from 'react';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from 'firebase/auth'; // Make sure createUserWithEmailAndPassword is imported from 'firebase/auth'
import { auth, db } from '../utils/firebase';
import {collections} from '../config/Index'
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [tenant, setTenant] = useState(JSON.parse(localStorage.getItem('tenant')) || null);
  const [hotel, setHotel] = useState(null);
  const [token, setToken] = useState(sessionStorage.getItem('token') || null);

  const clearState = () => {
    localStorage.removeItem('tenant');
    setTenant(null);
  }

  const getUserTenantIdByEmail = async (email) => {
    const userRef = collection(db, collections.TENANTS);
    const q = query(userRef, where("email", "==", email));
    const fetchData = await getDocs(q);
    const results = [];
    fetchData.forEach((doc) => {
      const abc = { id: doc.id, ...doc.data() };
      results.push(abc);
    });
    if (results[0]) {
      const t = results;
      setTenant(...t);
      localStorage.setItem('tenant', JSON.stringify(...t))
      console.log(results, '2');
      return results;
    } else {
      
      logout()
      return false
    }
  };


  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password); // Corrected function name to signUp
  };

    const signIn = async (email, password) => {

      try {
        const signInResult = await signInWithEmailAndPassword(auth, email, password);
        if (signInResult.user.accessToken) {

          const res = await getUserTenantIdByEmail(email);
    
          if (res === false) {
            clearState()
            throw new Error('Tenant ID not found');
          }
          // console.log(res);
          return res;
        }
      } catch (error) {
        // clearState()
        console.error('Error signing in:', error.message);
        throw error;
      }
    }
      const logout = () => {
        clearState()
        return signOut(auth)
      };

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
        console.log(currentUser);
        setToken(currentUser?.accessToken);
        currentUser?.accessToken
          ? sessionStorage.setItem('token', currentUser.accessToken)
          : sessionStorage.removeItem('token');
        if (currentUser) {
          const userDocRef = doc(db, 'users', currentUser.email);
          const userDocSnapshot = await getDoc(userDocRef);
          if (userDocSnapshot.exists()) {
            setUser({
              ...currentUser,
              ...userDocSnapshot.data()
            });
            return
          }
        }
        setUser(currentUser);
        return
      });
      return unsubscribe;
    }, []);


    useEffect(() => {
      const getMyHotel = async () => {
        const docRef = doc(db, 'hotel', user.hotelId);
        const hotelDocSnapshot = await getDoc(docRef);
        if (hotelDocSnapshot.exists()) {
          setHotel({
            id: user.hotelId,
            ...hotelDocSnapshot.data()
          });
          return
        }
      }
      if (user?.hotelId) {
        getMyHotel()
      }
    }, [user])

    const myCollection = (cname) => {
      const tenantId = tenant?.tenant_id || 'ERR';
      const tenantsCollection = collection(db, 'TenantsDb');
      const tenantDocRef = doc(tenantsCollection, tenantId);
    
      if (tenantId && cname) {
        const ref = collection(tenantDocRef, cname);
        return ref;
      } else {
        console.error('Invalid tenant ID');
        return null;
      }
    };


    return (
      <UserContext.Provider value={{ user, hotel, token, logout, signIn, signUp, myCollection }}>
        {children}
      </UserContext.Provider>
    );
   }
export const useAuth = () => useContext(UserContext);
