"use client";

import { FormEvent, useState } from "react";

interface SearchFormProps {
  onSearch: (query: string) => void;
}

export default function SearchForm({
  onSearch,
}: SearchFormProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        maxWidth: "650px",
        margin: "0 auto",
        flexWrap: "wrap",
      }}
    >
      <input
        type="search"
        value={query}
        onChange={handleChange}
        placeholder="Search heritage sites..."
        aria-label="Search heritage sites"
        style={{
          flex: "1",
          minWidth: "250px",
          padding: "14px 18px",
          borderRadius: "10px",
          border: "1px solid #D1D5DB",
          fontSize: "16px",
          outline: "none",
        }}
      />

      <button
        type="submit"
        style={{
          padding: "14px 24px",
          borderRadius: "10px",
          border: "none",
          backgroundColor: "#168C8C",
          color: "#FFFFFF",
          fontSize: "16px",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </form>
  );
}