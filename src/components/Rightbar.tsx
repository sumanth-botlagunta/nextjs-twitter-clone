import React from 'react';
import { trendingOn } from '@/assets/trendingData';
import { trendingData } from '@home/nexttypes';

const Rightbar = () => {
  return (
    <div className="flex h-full items-center px-3">
      <div className="flex flex-col p-4 bg-slate-300 dark:bg-white/10 rounded-2xl">
        <div className="text-xl font-bold">What&apos;s happening</div>
        <div className="mt-4">
          {trendingOn.map((item: trendingData, index) => (
            <div key={index} className="flex flex-col p-2">
              <div className="flex gap-1 text-sm">
                <div>{item.category}</div>
                <div>.</div>
                <div>{item.location}</div>
              </div>
              <div className="text-lg font-bold">#{item.hashTag}</div>
              <div>{item.tweets} tweets</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
