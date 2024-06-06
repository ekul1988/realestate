import React from "react";
import Link from "next/link";
import Property from "@/models/Property";
import { fetchProperties } from "@/components/utils/requests";
import PropertyCard from "@/components/PropertyCard";

const Properties = async () => {
  const properties = await fetchProperties();

  //Sort props by date
  properties.sort((a, b) => Date(b.createdAt));
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p>No Properties Found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
