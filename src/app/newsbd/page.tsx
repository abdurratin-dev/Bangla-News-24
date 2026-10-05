import NewsCard from '@/components/Cards/NewsCard';
import { IHomePageDataType, IHomePageSectionDataType } from '@/types/type';
import React from 'react';


const CategoryPage = async() => {
    const getCategoryData = await fetch(`https://news-api-v2.vercel.app/api/news/sections`, {next: {revalidate:10}});
    const  data =await getCategoryData.json();
    const categoryData: IHomePageSectionDataType[] = data.data;
    const filterdData = categoryData.filter(item => item.title === "বাংলাদেশ")
    return (
        <div className='mt-3'>
            <h2 className="text-lg font-semibold py-3 border-b-2 border-red-700">
                  বাংলাদেশ
                </h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-5'>
            {
                filterdData.map((newsData) => newsData.articles.map((newsData2, id) => <NewsCard key={id} news={newsData2} />))
                
            }
            </div>
        </div>
    );
};

export default CategoryPage;