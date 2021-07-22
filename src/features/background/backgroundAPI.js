const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_CLIENT_ID;
const API_URL = `https://api.unsplash.com/photos/random?query=nature&client_id=${ACCESS_KEY}`;

export const getImage = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();

  return json;
};
