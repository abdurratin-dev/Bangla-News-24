import { getNavLinksData } from '@/lib/AllFatchData';
import { INavLinksDataType } from '@/types/type';
import Link from 'next/link';
import React from 'react';


const Navlinks = async () => {
    const navLinks: INavLinksDataType[] = await getNavLinksData();
    const inprtentLinks = navLinks.filter(link => link.scrapable);
    return (
        <div className="flex justify-center items-center w-full gap-5">
            <Link href="/" className="hover:text-red-700 text-sm text-neutral-700 font-semibold">
                হোম
            </Link>
            {
                inprtentLinks.map((link) => (
                    <Link key={link.slug} href={`/category/${link.slug}`} className="hover:text-red-700 text-sm text-neutral-700 font-semibold">
                        {link.title}
                    </Link>
                ))
            }
        </div>
    );
};

export default Navlinks;