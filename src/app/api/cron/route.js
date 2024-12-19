// src/app/api/cron/route.js
import fetch from 'node-fetch';

export async function GET(req) {
  try {
    // Fetch data from the external API
    const response = await fetch('https://api-hearmify.vercel.app/api/songs/AddTesting');
    
    // Check if the response is successful
    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: `Failed to fetch data, status: ${response.status}` }),
        { status: response.status }
      );
    }

    // Parse the response as JSON
    const data = await response.json();

    // Return the data fetched from the external API
    return new Response(JSON.stringify(data), { status: 200 });

  } catch (error) {
    console.error('Error fetching data:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
  }
}
