export async function fetchFromStrapi<T>(endpoint: string, query = {}): Promise<T> {
    const queryString = new URLSearchParams(query as Record<string, string>).toString();
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/${endpoint}?${queryString}`;

    try {
        const res = await fetch(url);
        if (!res.ok) {
            const errorData = await res.json();
            console.error("Strapi Error:", errorData);
            throw new Error(`Failed to fetch data: ${res.statusText}`);
        }
        return res.json();
    } catch (error) {
        console.error("Fetch Error:", error);
        throw error;
    }
}
