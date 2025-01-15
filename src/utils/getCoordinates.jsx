export const getCoordinates = async (address) => {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
    address
  )}&format=json&limit=1`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.length > 0) {
      const { lat, lon } = data[0];
      return { latitude: lat, longitude: lon };
    } else {
      throw new Error("No results found for the given address.");
    }
  } catch (error) {
    throw new Error(`Error fetching coordinates: ${error.message}`);
  }
};
