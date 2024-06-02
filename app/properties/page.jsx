import React from "react";
import Link from "next/link";
import Property from "@/models/Property";

import PropertyCard from "@/components/PropertyCard";

async function fetchProperties() {
  try {
    const res = await fetch(
      `${process.env.local.NEXT_PUCLIC_API_DOMAIN}/properties`,
      { cache: "no-store" }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
const Properties = async () => {
  const properties = await fetchProperties();
  return (
    <section class="px-4 py-6">
      <div class="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p>No Properties Found</p>
        ) : (
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Properties;
