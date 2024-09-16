import React from 'react';


const statsData = [
    { label: 'Page Views', count: '87', change: '3%', icon: 'icon-facebook.svg', statusIcon: 'icon-up.svg', status: 'up' },
    { label: 'Likes', count: '52', change: '2%', icon: 'icon-facebook.svg', statusIcon: 'icon-down.svg', status: 'down' },
    { label: 'Likes', count: '5462', change: '2257%', icon: 'icon-instagram.svg', statusIcon: 'icon-up.svg', status: 'up' },
    { label: 'Profile Views', count: '52k', change: '1375%', icon: 'icon-instagram.svg', statusIcon: 'icon-up.svg', status: 'up' },
    { label: 'Retweets', count: '117', change: '303%', icon: 'icon-twitter.svg', statusIcon: 'icon-up.svg', status: 'up' },
    { label: 'Likes', count: '507', change: '553%', icon: 'icon-twitter.svg', statusIcon: 'icon-up.svg', status: 'up' },
    { label: 'Likes', count: '107', change: '19%', icon: 'icon-youtube.svg', statusIcon: 'icon-down.svg', status: 'down' },
    { label: 'Total Views', count: '1407', change: '12%', icon: 'icon-youtube.svg', statusIcon: 'icon-down.svg', status: 'down' },
  ];

const OverviewCardContainer: React.FC = () => {
  return (
    <div className="md:px-28 pb-8 px-8">
      <p className="text-xl pl-4 pt-10 pb-3 dark:text-white text-gray-950">Overview - Today</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 justify-center">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="w-full h-36 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md p-4 pt-8 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-800 dark:text-blue-300">
                {stat.label}
              </span>
              <img src={`/images/${stat.icon}`} alt={`${stat.label} icon`} width={24} height={24} />
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-4xl font-bold text-gray-900 dark:text-[hsl(0,0%,100%)]">
                {stat.count}
              </p>
              <div className="flex items-center">
                <img
                  src={`/images/${stat.statusIcon}`}
                  alt={`${stat.label} status icon`}
                  className="mr-1"
                  width={12}
                  height={12}
                />
                <span
                  className={`text-sm font-medium ${stat.status === 'up' ? 'text-[hsl(146,68%,55%)]' : 'text-rose-700'}`}
                >
                  {stat.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewCardContainer;
