"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useLogoutMutation } from '@/redux/features/apis/auth-api';

const AUTO_LOGOUT_TIME = 120000; // 30 seconds in milliseconds

const AutoLogout = () => {
const [logout] = useLogoutMutation();
  const [logoutTimer, setLogoutTimer] = useState<NodeJS.Timeout | null>(null); // Define type for logoutTimer

  // Function to handle user activity
  const handleUserActivity = () => {
    if (logoutTimer) clearTimeout(logoutTimer as NodeJS.Timeout);
    setLogoutTimer(setTimeout(logPageOut, AUTO_LOGOUT_TIME)); // Set new timer
  };

  // Function to logout the user
  const logPageOut = () => {
    logout();
  };

  // Set up event listeners for user activity
  useEffect(() => {
    const events = ['mousedown', 'keydown', 'touchstart'];
    events.forEach(event => {
      document.addEventListener(event, handleUserActivity);
    });

    // Start the initial logout timer
    setLogoutTimer(setTimeout(logPageOut, AUTO_LOGOUT_TIME));

    // Clean up event listeners on component unmount
    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleUserActivity);
      });
      if (logoutTimer) clearTimeout(logoutTimer as NodeJS.Timeout);
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default AutoLogout;
