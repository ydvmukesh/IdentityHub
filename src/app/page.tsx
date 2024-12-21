import Banner from "@/components/home/Banner";
import CallToAction from "@/components/home/CallToAction";
import Service from "@/components/home/Service";
import WhyChoose from "@/components/home/WhyChoose";


export default function Home() {
  return (
    <>
      {/* // banner */}
     <div className="banner-bg ">
      <Banner />
      {/* // service  */}
      <Service />
      </div>
      {/* why choose */}
      <WhyChoose/>
      {/* call to action */}
      <CallToAction />
    </>

  );
}
