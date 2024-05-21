import React from 'react';

const LoadingDriver = ({ large }) => {
  return (
    <div className={`border border-blue-300 shadow rounded-md p-4 max-w-2xl w-full mx-auto ${large ? 'h-auto' : 'h-36'}`}>
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-700 rounded w-36"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2 w-12"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1 w-12"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded w-36"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingDriver;
