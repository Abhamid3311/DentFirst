import Image from 'next/image';
import React from 'react';
// import style from '/styles/globals.css';

const Legacy = () => {
    return (
        <div className='bg-[#fafafa] flex flex-col lg:flex-row items-center justify-between  px-14 pt-[320px]   '>
            <div className={"legacy_dentist_bg  flex-1"}>
                <Image src={'/assets/Dentist 1.png'} alt="dentist" width={500} height={300} className="mt-[-348px] ml-20" />
            </div>

            <div className='flex-1'>
                <h2 className='text-5xl leading-[68px] font-semibold'>DentFirst Clinic <span className='text-[#64A665]'>Legacy <br /> Continues</span></h2>

                <p className='mt-4 text-[#666A7B]'>
                    Dr. Arun Chamria&apos;s immense contribution to the Indian Dental Fraternity will be cherished as a man of many parts. In April of 2021, Dr. Arun Chamria, one of India&apos;s most illustrious Dentist, succumbed to Covid-19 complications leaving the Dental Fraternity poorer. He advocated for &apos;Dental Implants in One Day&apos; way ahead of his time. Speaking of a few characteristics of succession planning, he would say, &quot;One should seed in the right principles, ethics, and morals at a young age. This is </p>
            </div>

        </div>
    );
};

export default Legacy;