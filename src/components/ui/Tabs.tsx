import React from 'react';

export const TabsContent = ({ 
  children, 
  value, 
  className = '' 
}: { 
  children: React.ReactNode; 
  value: string; 
  className?: string;
}) => (
  <div role="tabpanel" className={`p-4 ${className}`}>
    {children}
  </div>
);

export const TabsList = ({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode; 
  className?: string;
}) => (
  <div role="tablist" className={className}>
    {children}
  </div>
);

export const TabsTrigger = ({ 
  children, 
  value, 
  className = '' 
}: { 
  children: React.ReactNode; 
  value: string; 
  className?: string;
}) => (
  <button
    role="tab"
    className={`px-3 py-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
  >
    {children}
  </button>
);

export const Tabs = ({ 
  children, 
  defaultValue, 
  className = '' 
}: { 
  children: React.ReactNode; 
  defaultValue: string; 
  className?: string;
}) => (
  <div className={className}>
    {children}
  </div>
);