

export const getHeadlinesData = async() =>{
    const res = await fetch("https://news-api-v2.vercel.app/api/news",{next:{revalidate:10}});
    const data = await res.json();
    return data.data;
}

export const getHomePageData = async() =>{
    const res = await fetch("https://news-api-v2.vercel.app/api/news/sections",{next:{revalidate:10}});
    const data = await res.json();
    return data.data;
}

export const getMostReadNews = async() => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read',{next:{revalidate:10}});
    const data = await res.json();
    return data.data;
}