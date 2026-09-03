"use client";

import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";

const MultiSelect = ({
  options = [],
  value = [],
  onChange,
  placeholder = "Select...",
  showAddButton = false,
  addButton,
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Select only ONE option
  const handleSelect = (option) => {
    const alreadySelected = value.includes(option.value);

    if (alreadySelected) {
      // Unselect
      onChange([]);
    } else {
      // Replace previous selection with new selection
      onChange([option.value]);
    }

    // Close dropdown after selection
    setOpen(false);
  };

  const removeItem = (item, e) => {
    e.stopPropagation();

    onChange(value.filter((valueItem) => valueItem !== item));
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Select Box */}
      <div
        onClick={() => setOpen(!open)}
        className={`min-h-[40px] w-full cursor-pointer rounded-[8px] border border-[#E5E5E5] bg-[#F5F5F5] px-[10px] py-[5px] flex items-center gap-[6px] ${
          open ? "ring-1 ring-[#D9D9D9]" : ""
        }`}
      >
        {/* Selected Item */}
        <div className="flex flex-1 flex-wrap items-center gap-[6px]">
          {value.length === 0 ? (
            <span className="text-[14px] text-[#666]">
              {placeholder}
            </span>
          ) : (
            value.map((selectedValue) => {
              const selectedOption = options.find(
                (option) => option.value === selectedValue
              );

              return (
                <span
                  key={selectedValue}
                  className="inline-flex h-[28px] items-center gap-[5px] rounded-full border border-[#D9D9D9] bg-white px-[10px] text-[13px] text-[#333]"
                >
                  {selectedOption?.label}

                  <button
                    type="button"
                    onClick={(e) => removeItem(selectedValue, e)}
                    className="flex h-[16px] w-[16px] items-center justify-center rounded-full text-[#777] hover:text-[#222]"
                  >
                    <Icon
                      icon="heroicons:x-mark-20-solid"
                      className="h-[14px] w-[14px]"
                    />
                  </button>
                </span>
              );
            })
          )}
        </div>

        {/* Arrow */}
        <Icon
          icon="heroicons:chevron-down-20-solid"
          className={`h-[16px] w-[16px] shrink-0 text-[#666] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 top-[calc(100%+4px)] z-[50] w-full overflow-hidden rounded-[6px] border border-[#E5E5E5] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
          {options.map((option) => {
            const selected = value.includes(option.value);

            return (
              <div
                key={option.value}
                onClick={() => handleSelect(option)}
                className="flex cursor-pointer items-center justify-between px-[10px] py-[11px] text-[14px] text-[#333] hover:bg-[#F5F5F5]"
              >
                <span>{option.label}</span>

                {selected && (
                  <Icon
                    icon="heroicons:check-20-solid"
                    className="h-[16px] w-[16px] text-[#333]"
                  />
                )}
              </div>
            );
          })}

          {/* Add New Button */}
          {showAddButton && addButton && (
            <div className="border-t border-[#E5E5E5]">
              {addButton}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;