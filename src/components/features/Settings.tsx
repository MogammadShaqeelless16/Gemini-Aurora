import React from 'react';
import { Bell, Globe, Shield, Eye } from 'lucide-react';

const Settings = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Preferences</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bell className="w-5 h-5 text-gray-500" />
              <span>Notifications</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-gray-500" />
              <span>Language</span>
            </div>
            <select className="rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-gray-500" />
              <span>Content Filter Level</span>
            </div>
            <select className="rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500">
              <option>Strict</option>
              <option>Moderate</option>
              <option>Low</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Eye className="w-5 h-5 text-gray-500" />
              <span>High Contrast Mode</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
          </div>
        </div>
      </div>

      <button className="w-full py-2 px-4 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
        Reset to Defaults
      </button>
    </div>
  );
}

export default Settings;