import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import NavBar from "./Navbar";

// import NavBar from "@/components/NavBar";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <header className="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4">
        {/* <nav>
            <ul>
                <li>
                    <Link href="/" area-label = "Home Page"></Link>
                    {settings.data.name}
                </li>
            </ul>
        </nav>
    
      {settings.data.nav_item.map(({ link, label }, index) => (
        <li key={index}>
          <PrismicNextLink field={link}>{label}</PrismicNextLink>
        </li>
      ))} */}

      <NavBar settings={settings}
      />
    </header>
  );
}
