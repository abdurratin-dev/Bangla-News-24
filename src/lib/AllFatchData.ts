export const getNavLinksData = async() =>{
    const res = await fetch("https://news-api-v2.vercel.app/api/categories");
    const data = await res.json();
    return data.data;
}

export const getHeadlinesData = async() =>{
    const res = await fetch("https://news-api-v2.vercel.app/api/news");
    const data = await res.json();
    return data.data;
}

export const getHomePageData = async() =>{
    const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
    const data = await res.json();
    return data.data;
}

export const getMostReadNews = async() => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read');
    const data = await res.json();
    return data.data;
}