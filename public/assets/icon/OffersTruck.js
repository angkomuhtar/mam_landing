import React from "react";

const OffersTruck = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox='0 0 64 64'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M40.3014 45.9999V42.6666H33.736L33.9974 43.1893C34.4374 44.0693 34.6667 45.0373 34.6667 46.0213V46.6666H39.6347C39.8115 46.6666 39.9811 46.5963 40.1061 46.4713C40.2311 46.3463 40.3014 46.1767 40.3014 45.9999ZM40.3014 38.6666H31.736L31.264 37.7226C30.8704 36.9341 30.3163 36.2365 29.6374 35.6746V34.6666H39.6374C39.8142 34.6666 39.9837 34.7368 40.1088 34.8618C40.2338 34.9869 40.304 35.1564 40.304 35.3333V38.6666H40.3014ZM34.6667 53.9999V50.6666H39.6347C40.8724 50.6666 42.0593 50.1749 42.9345 49.2998C43.8097 48.4246 44.3014 47.2376 44.3014 45.9999V35.3333C44.3014 34.0956 43.8097 32.9086 42.9345 32.0334C42.0593 31.1583 40.8724 30.6666 39.6347 30.6666H24.4827C23.336 29.8293 21.92 29.3333 20.3894 29.3333H9.63469V10.6666C9.63469 9.2521 10.1966 7.89554 11.1968 6.89535C12.197 5.89515 13.5535 5.33325 14.968 5.33325H30.968V21.3333C30.968 22.7477 31.5299 24.1043 32.5301 25.1045C33.5303 26.1047 34.8869 26.6666 36.3014 26.6666H52.3014V53.3333C52.3014 54.7477 51.7395 56.1043 50.7393 57.1045C49.7391 58.1047 48.3825 58.6666 46.968 58.6666H32.616C33.2635 58.0741 33.7803 57.353 34.1334 56.5495C34.4865 55.7459 34.6681 54.8776 34.6667 53.9999ZM34.968 21.3333V6.66659L50.968 22.6666H36.3014C35.9477 22.6666 35.6086 22.5261 35.3585 22.2761C35.1085 22.026 34.968 21.6869 34.968 21.3333ZM2.66669 36.2773C2.66669 33.9146 4.58135 31.9999 6.94402 31.9999H20.3894C22.752 31.9999 24.6667 33.9146 24.6667 36.2773V36.8906H25.6C26.9867 36.8906 28.2587 37.6746 28.88 38.9173L31.6134 44.3839C31.8667 44.8906 32 45.4506 32 46.0213V53.9999C32 56.0266 30.3574 57.6666 28.3334 57.6666H26.9574C26.6858 58.7158 26.0735 59.6451 25.2165 60.3085C24.3595 60.9719 23.3064 61.3319 22.2227 61.3319C21.1389 61.3319 20.0859 60.9719 19.2289 60.3085C18.3719 59.6451 17.7596 58.7158 17.488 57.6666H14.736C14.4564 58.7482 13.8148 59.7015 12.9181 60.3679C12.0214 61.0342 10.9236 61.3735 9.80732 61.3292C8.69101 61.285 7.62349 60.8599 6.78236 60.1246C5.94122 59.3894 5.37716 58.3883 5.18402 57.2879C4.43397 56.9489 3.79757 56.4009 3.35108 55.7094C2.9046 55.0179 2.66698 54.2124 2.66669 53.3893V36.2773ZM24.6667 39.3333V44.2213H28.8L26.6934 40.0079C26.5918 39.805 26.4357 39.6344 26.2426 39.5152C26.0494 39.396 25.8269 39.333 25.6 39.3333H24.6667ZM10 53.9999C9.67228 53.9891 9.3457 54.0443 9.03973 54.1622C8.73375 54.2802 8.45463 54.4585 8.21895 54.6865C7.98328 54.9145 7.79588 55.1876 7.66789 55.4895C7.5399 55.7914 7.47395 56.116 7.47395 56.4439C7.47395 56.7718 7.5399 57.0964 7.66789 57.3983C7.79588 57.7002 7.98328 57.9733 8.21895 58.2013C8.45463 58.4294 8.73375 58.6077 9.03973 58.7256C9.3457 58.8435 9.67228 58.8987 10 58.8879C10.6342 58.867 11.2355 58.6003 11.6767 58.1442C12.1179 57.6882 12.3646 57.0785 12.3646 56.4439C12.3646 55.8094 12.1179 55.1996 11.6767 54.7436C11.2355 54.2875 10.6342 54.0209 10 53.9999ZM19.7787 56.4453C19.7679 56.773 19.8231 57.0996 19.941 57.4055C20.059 57.7115 20.2372 57.9906 20.4653 58.2263C20.6933 58.462 20.9664 58.6494 21.2683 58.7774C21.5702 58.9054 21.8948 58.9713 22.2227 58.9713C22.5506 58.9713 22.8752 58.9054 23.1771 58.7774C23.479 58.6494 23.7521 58.462 23.9801 58.2263C24.2081 57.9906 24.3864 57.7115 24.5044 57.4055C24.6223 57.0996 24.6775 56.773 24.6667 56.4453C24.6457 55.811 24.3791 55.2098 23.923 54.7686C23.467 54.3273 22.8573 54.0807 22.2227 54.0807C21.5881 54.0807 20.9784 54.3273 20.5224 54.7686C20.0663 55.2098 19.7996 55.811 19.7787 56.4453Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default OffersTruck;