import React from 'react'
import Title from "../common/Title";
import SubTitle from '../common/SubTitle';
import FeatureCard from '../common/FeatureCard';
const WhyChoose = () => {
    return (
        <section className='pt-200'>
            <div className="container">
                <SubTitle subTitle="Features" />

                <Title
                    title='Why <span class="inline-block text-gradient">choose</span> us'
                    className="text-center block "
                    description="We are the only service that provides all 3 services as a packaged service"
                />
                <FeatureCard/>
            </div>
        </section>
    )
}

export default WhyChoose
