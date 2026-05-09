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
    console.warn("UNSPLASH_ACCESS_KEY is missing. Using fallback images.");
    return MOCK_IMAGES.slice(0, count);
  }

  try {
    const res = await fetch(`https://api.unsplash.com/photos/random?count=${count}`, {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error(`Unsplash API error: ${res.statusText}. Using fallback images.`);
      return MOCK_IMAGES.slice(0, count);
    }

    return res.json();
  } catch (error) {
    console.error("Failed to fetch from Unsplash. Using fallback images.", error);
    return MOCK_IMAGES.slice(0, count);
  }
}