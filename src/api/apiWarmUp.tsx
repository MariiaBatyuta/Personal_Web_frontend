import axios from 'axios';

export async function warmUpServer() {
  try {
    await axios.get(
      'https://personal-web-backend-1wxz.onrender.com/api/warm-up'
    );
  } catch (error) {
    console.error('Failed to warm up server:', error);
  }
}
