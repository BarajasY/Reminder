export const articleService = async() => {
    const data = await fetch("http://localhost:5000/articles/")
    const json = data.json();
    return json;
}
