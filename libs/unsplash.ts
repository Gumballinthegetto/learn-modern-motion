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

export async function getImages(count: number) {
  const res = await fetch(`https://api.unsplash.com/photos/random?count=${count}`, {
    headers: {
      Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
    },
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch images');
  }

  return res.json();
}