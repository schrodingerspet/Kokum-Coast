import React, { ReactNode } from 'react';
import { MemberContext, MemberContextType } from './MemberContext';

interface MemberProviderProps {
  children: ReactNode;
}

export const MemberProvider: React.FC<MemberProviderProps> = ({ children }) => {
  const contextValue: MemberContextType = {
    member: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
    actions: {
      loadCurrentMember: async () => {},
      login: () => {},
      logout: () => {},
      clearMember: () => {},
    },
  };

  return (
    <MemberContext.Provider value={contextValue}>
      {children}
    </MemberContext.Provider>
  );
};
