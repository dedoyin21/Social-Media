import React from 'react';

const infoData = [
  { username: 'nathanf', followers: '1987', today: '12', type: 'Followers', icon: 'icon-facebook.svg', statusIcon: 'icon-up.svg', borderColor: 'border-blue-500', status: 'up' },
  { username: 'nathanf', followers: '1044', today: '99', type: 'Followers', icon: 'icon-twitter.svg', statusIcon: 'icon-up.svg', borderColor: 'border-blue-400', status: 'up' },
  { username: 'realnathanf', followers: '11k', today: '1099', type: 'Followers', icon: 'icon-instagram.svg', statusIcon: 'icon-up.svg', borderColor: 'border-pink-500', status: 'up' },
  { username: 'Nathan F.', followers: '8239', today: '144', type: 'Subscribers', icon: 'icon-youtube.svg', statusIcon: 'icon-down.svg', borderColor: 'border-red-500', status: 'down' },
];

const InfoCardContainer: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-6 p-4 justify-center">
      {infoData.map((info, index) => (
        <div
          key={index}
          className={`w-80 h-64 md:w-60 md:h-60 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center border-t-4 ${info.borderColor}`}
        >
          <div className="flex mb-4 items-center mt-4">
            <img src={`/images/${info.icon}`} alt={`${info.username} icon`} width={25} height={25} />
            <h2 className="text-sm font-bold text-gray-800 dark:text-blue-300 ml-2">
              @{info.username}
            </h2>
          </div>
          <p className="text-6xl font-semibold text-gray-700 dark:text-white mt-2 justify-center">
            {info.followers}
          </p>
          <p className="follow info text-sm text-gray-500 dark:text-gray-400 items-center">
            {info.type}
          </p>
          <p
            className={`flex items-center text-sm mt-8 pb-3 ${info.status === 'up' ? 'text-[hsl(146,68%,55%)]' : 'text-rose-700'}`}
          >
            <img src={`/images/${info.statusIcon}`} alt={`${info.username} status icon`} width={12} height={12} className="mr-1" />
            {info.today} Today
          </p>
        </div>
      ))}
    </div>
  );
};

export default InfoCardContainer;
