/* eslint-disable linebreak-style */
import { useState, useEffect, useRef } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const ref = useRef(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return {
    ref,
    isOpen,
    toggleDropdown,
    selectedOption,
    selectOption,
    closeDropdown,
  };
};

export default useModal;
