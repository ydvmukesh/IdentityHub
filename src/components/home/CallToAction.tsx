import React from 'react'
import Title from '../common/Title'
import Button from '../common/Button'

const CallToAction = () => {
  return (
    <section> <div className="container text-center">
    <Title
      title='<span class="block">Be part of the future of</span> <span class=" inline-block line-large">IdentityHub</span>' sectionClass="gap-3 md:gap-4 lg:gap-6 "
      className="text-center block  text-2xlxl md:text-4xl lg:text-6xl "
      description="Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app." classDes="max-w-lg mx-auto text-md lg:text-xl"
    />
    <Button className="btn-secondary inline-flex  mt-4 md:mt-6 lg:mt-8 " title="Start free trail" />
  </div>
</section>
  )
}

export default CallToAction