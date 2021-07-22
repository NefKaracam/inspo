const API_URL = "https://quotes.rest/qod?category=inspire";

const getQuote = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();
  const quote = json.contents.quotes[0].quote;
  const author = json.contents.quotes[0].author;

  return {
    quote,
    author,
  };
};

export default getQuote;
