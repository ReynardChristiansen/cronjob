import fetch from 'node-fetch';

export async function GET(req) {
  try {
    const response = await fetch('https://api-hearmify.vercel.app/api/songs/AddTesting');
    
    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: `Failed to fetch data, status: ${response.status}` }),
        { status: response.status }
      );
    }

    const data = await response.json();

    return new Response(JSON.stringify(data), { status: 200 });

  } catch (error) {
    console.error('Error fetching data:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
  }
}
