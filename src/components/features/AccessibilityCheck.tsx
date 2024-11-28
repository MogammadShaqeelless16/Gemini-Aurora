import React, { useState } from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';

const AccessibilityCheck = () => {
  const [scanning, setScanning] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const startScan = () => {
    setScanning(true);
    // Simulated scan results
    setTimeout(() => {
      setResults([
        { type: 'error', message: 'Missing alt text on images', element: 'img' },
        { type: 'warning', message: 'Low contrast text detected', element: 'p' }
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
        {scanning ? 'Scanning...' : 'Start Accessibility Scan'}
      </button>

      {results.length > 0 && (
        <div className="space-y-2">
          {results.map((result, index) => (
            <div
              key={index}
              className={`p-3 rounded-md ${
                result.type === 'error' ? 'bg-red-50' : 'bg-yellow-50'
              }`}
            >
              {result.type === 'error' ? (
                <AlertTriangle className="inline-block w-4 h-4 text-red-500 mr-2" />
              ) : (
                <CheckCircle className="inline-block w-4 h-4 text-yellow-500 mr-2" />
              )}
              {result.message}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AccessibilityCheck;