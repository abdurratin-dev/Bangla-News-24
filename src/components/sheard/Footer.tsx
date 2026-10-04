import React from 'react';

const Footer = () => {
    return (
        <div className='bg-white border-t mt-5'>
        <div className='flex justify-between items-center py-5 container mx-auto sm:px-10 px-4'>
            <p className='text-neutral-500 sm:text-md text-sm'><a href='https://github.com/abdurratin-dev'
            target='blank'>© 2026 Abdur Ratin</a></p>
            <p className='text-neutral-500 sm:text-md text-sm'><a href='https://www.bbc.com/bengali' target='blank'>Source: BBC Bangla</a></p>
        </div>
        </div>
    );
};

export default Footer;