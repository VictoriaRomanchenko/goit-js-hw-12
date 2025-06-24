import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '51029899-783448441a91da68c2eb1f079';

export async function fetchImages(query, page = 1) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 15,
    },
  });
  return response;
}