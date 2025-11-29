import React, { useState, useRef } from "react";
import {
  Search,
  Rss,
  Type,
  Briefcase,
  Package,
  Award,
  FileText,
  CircleUser,
} from "lucide-react";

export default function ProfessionalCommandModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef(null);

  const menuItems = [
    {
      icon: <div className="w-4 h-4 bg-gray-600 rounded" />,
      label: "Daifolio",
      group: "Menu",
    },
    { icon: <Rss className="w-4 h-4" />, label: "Blog", group: "Menu" },
    {
      icon: <div className="w-4 h-4 bg-blue-600 rounded" />,
      label: "Components",
      group: "Menu",
    },
  ];

  const portfolioItems = [
    { icon: <Type className="w-4 h-4" />, label: "About", group: "Daifolio" },
    {
      icon: <div className="w-4 h-4 bg-orange-600 rounded" />,
      label: "Tech Stack",
      group: "Daifolio",
    },
    {
      icon: <Briefcase className="w-4 h-4" />,
      label: "Experience",
      group: "Daifolio",
      selected: true,
    },
    {
      icon: <Package className="w-4 h-4" />,
      label: "Projects",
      group: "Daifolio",
    },
    {
      icon: <Award className="w-4 h-4" />,
      label: "Honors & Awards",
      group: "Daifolio",
    },
    {
      icon: <FileText className="w-4 h-4" />,
      label: "Certifications",
      group: "Daifolio",
    },
    {
      icon: <CircleUser className="w-4 h-4" />,
      label: "Download vCard",
      group: "Daifolio",
    },
  ];

  const allItems = [...menuItems, ...portfolioItems];

  const filteredItems = allItems.filter((item) =>
    item.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  const groupedItems = filteredItems.reduce((groups, item) => {
    if (!groups[item.group]) groups[item.group] = [];
    groups[item.group].push(item);
    return groups;
  }, {});

  const handleItemClick = (item) => {
    console.log(`Selected: ${item.label}`);
    setIsOpen(false);
  };

  const handleClose = () => setIsOpen(false);

  const handleInputChange = (e) => setSearchValue(e.target.value);

  if (!isOpen) return null;

  return (
    <div className="fixed top-40 right-50 flex items-center justify-center z-50">
      <div className="relative w-[400px] h-[400px] bg-black/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200/20 overflow-hidden">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 transition-colors z-10"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            ref={inputRef}
            value={searchValue}
            onChange={handleInputChange}
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 outline-none font-mono"
            autoFocus
          />
        </div>

        {/* Content */}
        <div className="p-2 overflow-y-auto max-h-[300px] custom-scrollbar">
          {Object.entries(groupedItems).map(([groupName, items]) => (
            <div key={groupName} className="mb-2">
              <div className="px-2 py-1 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                {groupName}
              </div>
              <div className="space-y-0.5">
                {items.map((item, idx) => (
                  <div
                    key={`${groupName}-${idx}`}
                    className={`flex items-center gap-2 px-2 py-1 rounded-lg text-sm cursor-pointer transition-all duration-150 ${
                      item.selected
                        ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => handleItemClick(item)}
                  >
                    <div className="text-gray-500 dark:text-gray-400">{item.icon}</div>
                    <span className="truncate">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center px-4 py-2 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
          <span>Go to Page: ↵</span>
          <span>Exit: Esc</span>
        </div>
      </div>
    </div>
  );
}
