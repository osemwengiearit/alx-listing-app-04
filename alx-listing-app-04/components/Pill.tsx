import React from "react";

interface PillProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1 rounded-full border text-sm transition-all ${
        selected
          ? "bg-blue-600 text-white border-blue-600"
          : "bg-gray-100 text-gray-800 hover:bg-blue-100"
      }`}
    >
      {label}
    </button>
  );
};

// constants/filters
export const FILTER_LABELS = [
  "Top Villa",
  "Self Checkin",
  "Pet Friendly",
  "Free Parking",
  "Private Pool",
  "Mountain View",
];

export default Pill;
