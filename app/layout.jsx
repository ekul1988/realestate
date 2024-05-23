import React from "react";
import "@/assets/styles/globals.css";

export const metadata = {
  title: "Mass Subsidized Housing Rental Listings",
  description: "Find The Perfect Rental Property",
  keywords:'Section 8, Rentals, Section 8 Apartments, find section 8 apartments '
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
