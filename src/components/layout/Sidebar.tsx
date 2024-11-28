import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs';
import AccessibilityCheck from '../features/AccessibilityCheck';
import ContentCheck from '../features/ContentCheck';
import Settings from '../features/Settings';
import { Settings2, Shield, Accessibility } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-80 h-screen bg-white border-l border-gray-200 shadow-lg">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg" />
          <h1 className="text-xl font-semibold text-gray-900">Gemini Aurora</h1>
        </div>
      </div>
      
      <Tabs defaultValue="accessibility" className="w-full">
        <TabsList className="w-full flex justify-between p-2 bg-gray-50">
          <TabsTrigger value="accessibility" className="flex items-center gap-2">
            <Accessibility className="w-4 h-4" />
            <span>Accessibility</span>
          </TabsTrigger>
          <TabsTrigger value="content" className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>Content</span>
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings2 className="w-4 h-4" />
            <span>Settings</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="accessibility">
          <AccessibilityCheck />
        </TabsContent>
        
        <TabsContent value="content">
          <ContentCheck />
        </TabsContent>
        
        <TabsContent value="settings">
          <Settings />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Sidebar;