import { useEffect, useRef, useState } from "react";

const Searchbar = ({ setSearchValue, searchValue }) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState("");

  // Focus search box on CTRL/CMD + /
  useEffect(() => {
    const handleShortcut = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "/") {
        e.preventDefault();
        setIsFocused(true);
        if (inputRef.current) {
          inputRef.current.focus(); // Focus the input element using ref
        }
      }
    };

    window.addEventListener("keydown", handleShortcut);

    return () => {
      window.removeEventListener("keydown", handleShortcut);
    };
  }, []);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search-box-container">
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={handleSearch}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyUp={(e) => {
          if (e.key === "Enter" || e?.code === 13) {
            setSearchValue(e.target.value);
          }
        }}
        placeholder="Search places..."
        disabled={false} // Change to true to see disabled state
        className={`search-box ${isFocused ? "focused" : ""} ${
          searchValue ? "filled" : ""
        }`}
      />
    </div>
  );
};

export default Searchbar;
