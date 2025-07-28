'use client'

import FileDragDropZone from '@/components/file-dragdropzone';
import Logo from '../components/logo'
import SearchComponent from "../components/search-component";
import DroboxImageList from '@/components/dropbox-image-list';

import { useState } from "react";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <main className="w-full p-2 flex flex-col gap-4">
      <Logo />

      <SearchComponent
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <FileDragDropZone />

      <DroboxImageList searchInput={searchInput}/>
    </main>
  );
}
