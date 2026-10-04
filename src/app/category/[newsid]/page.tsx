import NewsCard from '@/components/Cards/NewsCard';
import { IHomePageDataType } from '@/types/type';
import React from 'react';

interface CategoryPageProps{
    params: {
        newsid: string
    }
}
const CategoryPage = async({params}: CategoryPageProps) => {
    const {newsid} = await params;
    const getCategoryData = await fetch(`https://news-api-v2.vercel.app/api/category/${newsid}`);
    const  data =await getCategoryData.json();
    const categoryData: IHomePageDataType[] = data.data;
    return (
        <div className='grid grid-cols-4 gap-4 mt-5'>
            {
                categoryData.map(newsData => <NewsCard key={newsData.id} news={newsData} />)
            }
        </div>
    );
};

export default CategoryPage;