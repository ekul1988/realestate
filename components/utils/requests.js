const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

//fetch all props

async function fetchProperties() {
  try {
    // handel case where domain is not avail yet.
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(`${apiDomain}/properties`, { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

//Fetch single property
async function fetchProperty(id) {
  try {
    // handel case where domain is not avail yet.
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/properties/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}
export { fetchProperties, fetchProperty };
