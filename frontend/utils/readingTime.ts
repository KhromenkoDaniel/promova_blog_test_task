export function calculateReadingTime(content: string): number {

    const wordCount = content
        .replace(/[#\*\_\!\(\)\[\]\-]/g, "")
        .replace(/\s+/g, " ")
        .split(" ").length;

    const wordsPerMinute = 180;
    return Math.ceil(wordCount / wordsPerMinute);
}
