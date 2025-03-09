"use client";
import React, { useState } from "react";
import SearchSection from "@/app/dashboard/content/_components/SearchSection";
import TemplateListSection from "@/components/content/TemplateListSection";

function Dashboard() {
  const [userSearchInput, setUserSearchInput] = useState<string>();
  return (
    <div>
      <SearchSection
        onSearchInput={(value: string) => setUserSearchInput(value)}
      />
      <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  );
}

export default Dashboard;
