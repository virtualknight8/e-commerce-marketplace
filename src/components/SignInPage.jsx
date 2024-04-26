import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from './AuthContext'; // Assuming AuthContext is defined
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig'; // Import Firebase auth instance

export default function SignInPage() {
  const [user, setUser] = useState(null);
  const { isUserSignedIn, handleSignIn, handleSignOut } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = async (action) => {
    setIsLoading(true);
    setError(null);

    try {
      if (action === 'signIn') {
        await handleSignIn();
      } else {
        await handleSignOut();
      }
    } catch (err) {
      console.error('Authentication error:', err);
      setError(err.message || 'An error occurred during authentication.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe; // Cleanup function to prevent memory leaks
  }, [auth]);

  // Conditionally render buttons based on user state
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-4 items-center justify-center p-8 bg-white rounded-lg shadow-md">
        {user && (
          <>
            <h1 className="text-xl font-bold text-gray-800">{user.displayName}</h1>
            <p className="text-gray-600">
              Email: <span className="font-medium">{user.email}</span>
            </p>
            {/* Your other user info display logic */}
          </>
        )}
        {isUserSignedIn ? (
          <button
            className={
              isLoading ? 'bg-gray-400 opacity-50 rounded-md text-white p-3 cursor-not-allowed' : 'bg-red-600 rounded-md text-white p-3'
            }
            onClick={() => handleClick('signOut')}
            disabled={isLoading}
          >
            {isLoading ? 'Signing Out...' : 'Sign Out'}
          </button>
        ) : (
          <button
            className={
              isLoading ? 'bg-black opacity-50 rounded-md text-white p-3 cursor-not-allowed' : 'bg-black rounded-md text-white p-3'
            }
            onClick={() => handleClick('signIn')}
            disabled={isLoading}
          >
            {isLoading ? 'Signing In...' : 'Sign In With Google'}
          </button>
        )}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
}
