import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '37188665-acb3321e0243d96308bf1f96a';
const PER_PAGE = 40;

async function fetchQuery(query, page) {
  const params = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: PER_PAGE,
    page,
  });
  return await axios.get(`${BASE_URL}?key=${KEY}&q=${query}&${params}`);
}

export { fetchQuery, PER_PAGE };
