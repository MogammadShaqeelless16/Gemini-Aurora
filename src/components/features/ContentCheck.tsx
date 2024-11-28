import React, { useState } from 'react';
import { Shield, AlertCircle } from 'lucide-react';

const ContentCheck = () => {
  const [scanning, setScanning] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const startScan = () => {
    setScanning(true);
    // Simulated content check results
    setTimeout(() => {
      setResults([
        { severity: 'high', message: 'Inappropriate language detected' },
        { severity: 'medium', message: 'External links present' }
      ]);
      setScanning(false);
    }, 1500);
  };

  return (
    <div className="space-y-4">
      <button
        onClick={startScan}
        disabled={scanning}
        className="w-full py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50"
      >
        {scanning ? 'Analyzing Content...' : 'Check Content Safety'}
      </button>

      {results.length > 0 && (
        <div className="space-y-2">
          {results.map((result, index) => (
            <div
              key={index}
              className={`p-3 rounded-md ${
                result.severity === 'high' ? 'bg-red-50' : 'bg-orange-50'
              }`}
            >
              {result.severity === 'high' ? (
                <AlertCircle className="inline-block w-4 h-4 text-red-500 mr-2" />
              ) : (
                <Shield className="inline-block w-4 h-4 text-orange-500 mr-2" />
              )}
              {result.message}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ContentCheck;