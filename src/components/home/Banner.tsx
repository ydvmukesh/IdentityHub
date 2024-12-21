import React from 'react';
import SubTitle from '../common/SubTitle';
import Button from '../common/Button';
import Link from 'next/link';
import Image from 'next/image';
import BannerImg from '/public/images/productivity.png';

const Banner = () => {
    return (
        <section className='banner'>
            <div className="container ">
                <div className="lg:max-w-[992px] lg:mt-[85px] 2xl:mt-[75px] mx-auto lg:px-[67px]">
                <SubTitle subTitle="Secure your data" />
                <div className="flex flex-col gap-3 md:gap-5 lg:gap-7">

                    <div className="section-head  mx-auto">
                        <h1 className='section-title  section-title-gredient text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl font-semibold'>
                            <span className='block'>Identity-hub is a better way </span> to achieve<span className='line-large'> privacy</span>
                        </h1>
                    </div>

                    <p className='text-lg lg:text-xl 2xl:text-2xl max-w-[807px] mx-auto text-center'>
                        Make your data invisible by generating unlimited identities. The next-level in privacy protection for online and travel.
                    </p>
                    <div className="flex gap-2 md:gap-4 items-center justify-center">
                        <Button className='btn-primary px-4' title='Start free trial' />
                        <Button className='btn-secondary' title='Use it Now' />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row  justify-center flex-wrap  mt-6 sm:mt-8 lg:mt-24 2xl:mt-16 	 ">
                    <div className='flex lg:flex-col justify-between gap-3'>
                        <Card subTitle='One-time passcode' title='Kas3345-r32' />
                        <Card subTitle='Credit card' title='123 456 789 1243' />
                    </div>
                    <div className="flex-1">
                    <Image src={BannerImg} alt='bannerimg' width={486} height={437} className='mx-auto' />

                    </div>
                    <div className='flex lg:flex-col justify-between gap-3'>
                        <Card subTitle='Phone numbers' href='tel:+1456453-3456' title='+1 (456) 453-3456' />
                        <Card subTitle='Email address' href='mailto:davidjx@gmail.com' title='davidjx@gmail.com' />
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;




interface CardProps {
    className?: string; // Optional className prop
    href?: string; // Optional href prop
    subTitle: string;
    title: string;

}
const Card: React.FC<CardProps> = ({ href, subTitle, title, }) => {


    return (
        <>
            <div className="contact-card">
                <div className="contact-card-icon"></div>
                <div>
                    <p className='text-[10px] sm:text-sm'>{subTitle}</p>
                    {href ? (
                        <Link href={href} className='text-sm sm:text-base text-slate-300'>{title}</Link>
                    ) : (
                        <p className='text-xs sm:text-base text-slate-300'>{title}</p>
                    )}

                </div>
            </div>
        </>
    );
}
