// pages/api/posts.js

import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      
      const { data, error } = await supabase
        .from('Posts')
        .select('*'); // Fetch all columns

      if (error) {
        console.error('Supabase error:', error);
        return res.status(500).json({ error: error.message });
      }

      return res.status(200).json(data); // Send data as response

    } catch (error) {
      console.error('Error in handler:', error);
      res.status(500).json({ error: error.message });
    }
  } else {
    // Handle unsupported methods
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
