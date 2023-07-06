export async function get(data) {
    const url = new URL(data.request.url);
    const params = new URLSearchParams(url.search);
    const searchValue = params.get('q').replace(/ /g, "_")
    const request = await fetch(`https://pb.proxybay.ca/api.php?url=/q.php?q=${searchValue}`)
    const response = await request.json();
    return {
        body: JSON.stringify(response),
    }
}