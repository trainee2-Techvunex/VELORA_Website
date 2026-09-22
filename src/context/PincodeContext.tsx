import React, { createContext, useContext, useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/storage';
import { getEstimatedDeliveryDate } from '../utils/formatters';

interface PincodeData {
  pincode: string;
  city: string;
  state: string;
  estimatedDays: number;
}

const PINCODE_DIRECTORY: Record<string, { city: string; state: string; days: number }> = {
  '110001': { city: 'New Delhi', state: 'Delhi', days: 2 },
  '110020': { city: 'South Delhi', state: 'Delhi', days: 2 },
  '400001': { city: 'Mumbai', state: 'Maharashtra', days: 2 },
  '400050': { city: 'Bandra Mumbai', state: 'Maharashtra', days: 2 },
  '560001': { city: 'Bengaluru', state: 'Karnataka', days: 2 },
  '560034': { city: 'Koramangala Bengaluru', state: 'Karnataka', days: 2 },
  '500001': { city: 'Hyderabad', state: 'Telangana', days: 3 },
  '600001': { city: 'Chennai', state: 'Tamil Nadu', days: 3 },
  '700001': { city: 'Kolkata', state: 'West Bengal', days: 3 },
  '411001': { city: 'Pune', state: 'Maharashtra', days: 2 },
  '380001': { city: 'Ahmedabad', state: 'Gujarat', days: 3 },
  '302001': { city: 'Jaipur', state: 'Rajasthan', days: 3 },
  '682001': { city: 'Kochi', state: 'Kerala', days: 3 },
  '201301': { city: 'Noida', state: 'Uttar Pradesh', days: 2 },
  '122001': { city: 'Gurugram', state: 'Haryana', days: 2 },
  '400703': { city: 'Navi Mumbai', state: 'Maharashtra', days: 2 },
};

interface PincodeContextType {
  pincode: string;
  city: string;
  state: string;
  estimatedDelivery: string;
  isPincodeModalOpen: boolean;
  openPincodeModal: () => void;
  closePincodeModal: () => void;
  updatePincode: (newPincode: string) => { success: boolean; message: string };
  popularPincodes: { code: string; city: string }[];
}

const PincodeContext = createContext<PincodeContextType | undefined>(undefined);

export const PincodeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pincode, setPincode] = useState<string>(() => getLocalStorage('velora_pincode', '110001'));
  const [city, setCity] = useState<string>(() => getLocalStorage('velora_city', 'New Delhi'));
  const [state, setState] = useState<string>(() => getLocalStorage('velora_state', 'Delhi'));
  const [isPincodeModalOpen, setIsPincodeModalOpen] = useState(false);

  useEffect(() => {
    setLocalStorage('velora_pincode', pincode);
    setLocalStorage('velora_city', city);
    setLocalStorage('velora_state', state);
  }, [pincode, city, state]);

  const updatePincode = (newPincode: string) => {
    const trimmed = newPincode.trim();
    if (!/^\d{6}$/.test(trimmed)) {
      return { success: false, message: 'Please enter a valid 6-digit Indian pincode' };
    }

    if (PINCODE_DIRECTORY[trimmed]) {
      const match = PINCODE_DIRECTORY[trimmed];
      setPincode(trimmed);
      setCity(match.city);
      setState(match.state);
      return { success: true, message: `Delivering to ${match.city}, ${match.state} (${trimmed})` };
    } else {
      // Fallback for any other valid 6-digit pincode
      setPincode(trimmed);
      setCity('India');
      setState('Standard Zone');
      return { success: true, message: `Delivering to Pincode ${trimmed}` };
    }
  };

  const estimatedDays = PINCODE_DIRECTORY[pincode]?.days || 3;
  const estimatedDelivery = getEstimatedDeliveryDate(estimatedDays);

  const popularPincodes = [
    { code: '110001', city: 'New Delhi' },
    { code: '400001', city: 'Mumbai' },
    { code: '560001', city: 'Bengaluru' },
    { code: '500001', city: 'Hyderabad' },
    { code: '600001', city: 'Chennai' },
    { code: '700001', city: 'Kolkata' },
  ];

  return (
    <PincodeContext.Provider
      value={{
        pincode,
        city,
        state,
        estimatedDelivery,
        isPincodeModalOpen,
        openPincodeModal: () => setIsPincodeModalOpen(true),
        closePincodeModal: () => setIsPincodeModalOpen(false),
        updatePincode,
        popularPincodes,
      }}
    >
      {children}
    </PincodeContext.Provider>
  );
};

export const usePincode = () => {
  const context = useContext(PincodeContext);
  if (!context) {
    throw new Error('usePincode must be used within a PincodeProvider');
  }
  return context;
};
