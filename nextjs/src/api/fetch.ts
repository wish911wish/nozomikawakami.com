export const GET = async (url: string, headers?: {}) => {
  const res = await fetch(url, {
    headers: { ...headers },
  });
  const data = await res.json();

  return data;
};
