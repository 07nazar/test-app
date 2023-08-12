const API_URL = import.meta.env.VITE_API_URL;

export const fetchProductById = async (id: string) => {
  try {
    const response = await fetch(
      `${API_URL}?` + new URLSearchParams({ id }).toString()
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const fetchProducts = async () => {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
