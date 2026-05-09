export interface UnsplashImage {
  id: string;
  alt_description: string | null;
  urls: {
    regular: string;
    small: string;
  };
  user: {
    name: string;
  };
};

const MOCK_IMAGES: UnsplashImage[] = Array.from({ length: 10 }).map((_, i) => ({
  id: `mock-${i}`,
  alt_description: "Fallback Image",
  urls: {
    regular: `https://images.unsplash.com/photo-1715006020120-00824029497e?q=80&w=2070&auto=format&fit=crop`,
    small: `https://images.unsplash.com/photo-1715006020120-00824029497e?q=80&w=1000&auto=format&fit=crop`,
  },
  user: {
    name: "Nanas Lab",
  },
}));

export async function getImages(count: number): Promise<UnsplashImage[]> {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;

  if (!accessKey) {
    console.error("❌ UNSPLASH_ACCESS_KEY is missing in environment variables.");
    return MOCK_IMAGES.slice(0, count).map(img => ({
      ...img,
      alt_description: "Error: Missing API Key"
    }));
  }

  try {
    const res = await fetch(`https://api.unsplash.com/photos/random?count=${count}`, {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      const errorMessage = errorData.errors?.[0] || res.statusText;
      console.error(`❌ Unsplash API error (${res.status}): ${errorMessage}`);
      
      return MOCK_IMAGES.slice(0, count).map(img => ({
        ...img,
        alt_description: `Error ${res.status}: ${errorMessage}`
      }));
    }

    return res.json();
  } catch (error) {
    console.error("❌ Network error fetching from Unsplash:", error);
    return MOCK_IMAGES.slice(0, count).map(img => ({
      ...img,
      alt_description: "Error: Network/Fetch Failure"
    }));
  }
}