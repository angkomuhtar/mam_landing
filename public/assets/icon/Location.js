const Location = ({ className }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      className={`${className} aspect-square`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M8 0.662781C11.31 0.662781 14 3.57464 14 7.17616C14 12.0585 8 19.2724 8 19.2724C8 19.2724 2 12.0585 2 7.17616C2 3.57464 4.69 0.662781 8 0.662781ZM8 5.04152C7.46957 5.04152 6.96086 5.27219 6.58579 5.68277C6.21071 6.09336 6 6.65023 6 7.23089C6 7.81155 6.21071 8.36842 6.58579 8.77901C6.96086 9.1896 7.46957 9.42026 8 9.42026C8.53043 9.42026 9.03914 9.1896 9.41421 8.77901C9.78929 8.36842 10 7.81155 10 7.23089C10 6.65023 9.78929 6.09336 9.41421 5.68277C9.03914 5.27219 8.53043 5.04152 8 5.04152ZM16 19.2724C16 21.6917 12.42 23.6512 8 23.6512C3.58 23.6512 0 21.6917 0 19.2724C0 17.8603 1.22 16.6014 3.11 15.8023L3.75 16.7984C2.67 17.291 2 17.9698 2 18.7251C2 20.2358 4.69 21.4618 8 21.4618C11.31 21.4618 14 20.2358 14 18.7251C14 17.9698 13.33 17.291 12.25 16.7984L12.89 15.8023C14.78 16.6014 16 17.8603 16 19.2724Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default Location;