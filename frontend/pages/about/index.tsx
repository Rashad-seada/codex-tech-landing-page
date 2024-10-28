import LineDivider from 'components/atoms/LineDivider'
import TeamCard from 'components/molecules/Card/TeamCard'
import PageSentence from 'components/molecules/PageSentence'
import SectionSentence from 'components/molecules/SectionSentence'
import LogoList from 'components/organisms/LogoList'
import StatisticList from 'components/organisms/StatisticList'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <PageTemplate title="About - Codex-Tech">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
        <aside className="w-full" data-aos="fade-down-right">
          <div className="w-full h-[480px] relative ">
            <Image
              src={'/images/whitelogo.png'}
              layout="fill"
              objectFit="contain"
              quality={80}
              alt="المبرمجون أثناء البرمجة على حواسيبهم المحمولة"
              className='rounded-3xl'
            />
          </div>
        </aside>
        <aside
          className="text-center sm:w-10/12 md:w-8/12 lg:w-full lg:text-right"
          data-aos="fade-up-left"
        >
          {/* About section to description Our Compony */}
          <PageSentence
            badge="عن الشركة"
            title="نحن مجموعة من الأشخاص المبدعين والذكيين والمجتهدين."
            description={"Codex Tech هي شركة برمجة عبر الإنترنت قيد الإنشاء حاليًا. تتخصص في إنشاء المواقع الإلكترونية، وتطبيقات الهواتف المحمولة، وتقنية Web 3.0. لقد عملنا مع العديد من العملاء داخل مصر وخارجها، ونتطلع لإطلاق موقعنا الرسمي قريبًا."}  />
        </aside>
      </section>
      <LineDivider />
      <section className="grid place-items-center gap-16">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos="zoom-in-up"
        >
          {/* Section which description  */}
          <SectionSentence
            badge="الإحصائيات"
            title="في 3 سنوات، وصلنا إلى 8 دول، و193 عميلًا، وحققنا إيرادات قدرها 100,000 دولار أمريكي."
          />
        </div>
        <div className="w-full grid gap-14">
          <div data-aos="fade-right">
            <StatisticList />
          </div>
          <LogoList />
        </div>
      </section>
      <section className="grid place-items-center gap-16">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos="zoom-in-up"
        >
          {/*  */}
          <SectionSentence
            badge="فريقنا"
            title="تعرف على الفريق! كل الأشخاص المبدعين هنا."
          />
        </div>
        {/* Team images  */}
        <div className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/IbrahimShoeib.png"
              job="Project Manager"
              name="Ibrahum Shoeib "
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/RashadSeada.webp"
              job="Team Leader"
              name="Rashad Seada"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/codex.PNG"
              job="Mern Stack Dev"
              name="Zeyad Atef"
            />
          </div>
          {/* <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/codex.PNG"
              job="Software Engineer"
              name="Marvin McKinney"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/codex.PNG"
              job="System Analyst"
              name="Floyd Miles"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/codex.PNG"
              job="Project Manager"
              name="Annette Black"
            />
          </div> */}
        </div>
      </section>
    </PageTemplate>
  )
}

export default About
