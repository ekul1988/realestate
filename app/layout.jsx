import React from "react";
import "@/assets/styles/globals.css";
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
export const metadata = {
  title: "Mass Subsidized Housing Rental Listings",
  description: "Find The Perfect Rental Property",
  keywords:'Section 8, Rentals, Section 8 Apartments, find section 8 apartments '
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
    </AuthProvider>
  );
};

export default MainLayout;
