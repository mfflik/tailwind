import React from 'react';

const CustomButton = ({ color, size, icon, children }) => {
  // Membuat kelas CSS dinamis berdasarkan properti yang diberikan
  const getColorClass = () => {
    switch (color) {
      case 'primary':
        return 'bg-blue-500 text-white';
      case 'secondary':
        return 'bg-gray-500 text-white';
      case 'success':
        return 'bg-green-500 text-white';
      case 'danger':
        return 'bg-red-500 text-white';
      default:
        return 'bg-blue-500 text-white';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'px-2 py-1 text-sm';
      case 'md':
        return 'px-4 py-2 text-base';
      case 'lg':
        return 'px-6 py-3 text-lg';
      default:
        return 'px-4 py-2 text-base';
    }
  };

  return (
    <button
      className={`flex items-center justify-center ${getColorClass()} ${getSizeClass()} rounded-md`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default CustomButton;