export async function recupData(url) {
    const fetchPromise = await fetch(url);
    const data = await fetchPromise.json();
    return data;
} 