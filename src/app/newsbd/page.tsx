import NewsCard from '@/components/Cards/NewsCard';
import { IHomePageDataType } from '@/types/type';
import React from 'react';


const CategoryPage = async() => {
    const getCategoryData = await fetch(`https://news-api-v2.vercel.app/api/news/sections`, {next: {revalidate:10}});
    const  data =await getCategoryData.json();
    const categoryData: IHomePageDataType[] = data.data;
    const filterdData = categoryData.filter(item => item.title === "বাংলাদেশ")
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-5'>
            {
                filterdData.map(newsData => <NewsCard key={newsData.id} news={newsData} />)
            }
        </div>
    );
};

export default CategoryPage;