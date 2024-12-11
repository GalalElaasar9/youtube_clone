import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': '9f7d4ad297mshb5cbf40ec761028p176fd8jsne316735420ce',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}