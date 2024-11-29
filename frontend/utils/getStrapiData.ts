export async function getStrapiData<T>(
  endpoint: string,
  query: Record<string, unknown> = {},
): Promise<T> {
  const queryString = Object.entries(query)
    .map(([key, value]) => {
      if (typeof value === "object") {
        return Object.entries(value as Record<string, unknown>)
          .map(
            ([nestedKey, nestedValue]) => `${key}[${nestedKey}]=${nestedValue}`,
          )
          .join("&");
      }
      return `${key}=${value}`;
    })
    .join("&");

  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/${endpoint}?${queryString}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      const errorData = await res.json();
      console.error("Strapi Error:", errorData);
    }
    return res.json();
  } catch (error) {
    console.error("Fetch Error:", error);
    throw error;
  }
}
