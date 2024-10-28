import ButtonLink from 'components/atoms/Button/ButtonLink'
import LineDivider from 'components/atoms/LineDivider'
import FeatureCard from 'components/molecules/Card/FeatureCard'
import PageSentence from 'components/molecules/PageSentence'
import PricingCard from 'components/molecules/Card/PricingCard'
import ProjectCard from 'components/molecules/Card/ProjectCard'
import SectionSentence from 'components/molecules/SectionSentence'
import LogoList from 'components/organisms/LogoList'
import TestimonialList from 'components/organisms/TestimonialList'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'
import { FiFigma, FiCode, FiBox } from 'react-icons/fi'
const Home = ( ) => {
  return (
    <>
      <PageTemplate title="Home - Codex-Tech">
        {/* Banner Section */}
        <section
          className="flex flex-col gap-10 items-center"
          data-aos="fade-up"
        >
          <div className="w-10/12 md:w-8/12 text-center">
            <PageSentence
              title="احصل علي تطبيقك في 4 اسابيع"
              description="نحن ملتزمون بعدم جعل العملاء ينتظرون. سنسلم العمل بأسرع وقت ممكن. حتى في نفس اليوم. ومع ذلك، لا نقلل من جودة عملنا."
              badge="CLIENT-DEVELOPMENT-DRIVEN"
            />
          </div>
          <div className="flex flex-col gap-6 sm:flex-row w-full sm:w-fit">
            <ButtonLink value="ارسل شكوتك" href="/quote" />
            <ButtonLink
              value="المزيد"
              color="white"
              style="light"
              href="/about"
            />
          </div>
        </section>
        {/* Feature List */}
        <section className="grid grid-cols-1 gap-5 md:grid-cols-3 mb-16">
      
        <div data-aos="fade-up">
            <FeatureCard
              title="التسليم"
              description="بعد إتمام العمل، سنرسل لك المشروع وجميع ملفاته."
              icon={<FiBox />}
            />
          </div>

          <div data-aos="fade-up">
            <FeatureCard
              title="التطوير"
              description="تحويل التصميم وكتابة المنطق التجاري هنا. اختر التقنية التي تفضلها.

"
              icon={<FiCode />}
            />
          </div>

        
          <div data-aos="fade-up">
            <FeatureCard
              title="التصميم "
              description="التصميم

سيتم تصميم واجهة المشروع أولاً، وأداتنا المفضلة هي Figma."
              icon={<FiFigma />}
            />
          </div>
        </section>
        {/* Logo List */}
        <LogoList />
        {/* How We Work */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="w-full h-[400px] relative" data-aos="fade-right">
            <Image
              src={'/images/how-we-work-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt="Structured plan"
            />
          </aside>
          <aside
            className="text-center sm:w-10/12 lg:text-right lg:w-full"
            data-aos="fade-left"
          >
            <SectionSentence
              title="كل شيء مخطط بعناية، مصمم جيداً ويتم تطويره بكل إخلاص."
              paragraph="التخطيط الدقيق يجعلنا واثقين، ويتم التطوير بأفضل الممارسات لضمان سهولة صيانة المشروع. نحن دائماً نختبر المشاريع قبل تسليمها.."
              badge="كيف نعمل"
            />
          </aside>
        </section>
        {/* Our Teams */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="text-center sm:w-10/12 lg:text-right lg:w-full">
            <div className="space-y-12" data-aos="fade-right">
              <SectionSentence
                title="نحن فريق من المصممين والمهندسين والمحللين."
                paragraph="يتألف فريقنا من العديد من الأشخاص المبدعين. نحن ملتزمون بالحفاظ على جودة العمل وكذلك السرعة. يعمل هؤلاء المبدعون معًا لتحقيق أقصى نتائج في العمل.."
                badge="فريقنا"
              />
              <ButtonLink
                value="فريقنا "
                href="/teams"
                size="small"
                color="white"
                style="light"
                
              />
            </div>
          </aside>
          <aside
            className="w-full h-[400px] relative sm:w-8/12 lg:w-full"
            data-aos="fade-left"
          >
            <Image
              src={'/images/team-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt="Code editor and UI Editing popup"
            />
          </aside>
        </section>
        <LineDivider />
        {/* Our Projects */}
        <section className="flex flex-col gap-16 items-center">
          <div
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
            data-aos="zoom-in-up"
          >
            <SectionSentence
              title="لقد أنجزنا العديد من المشاريع المذهلة التي لن تصدقها."
              badge="المشاريع"
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5">
            <div data-aos="flip-left">
              <ProjectCard
                title="The  Mobile App Live Streem"
                description="/images/projects/Hulk.webp"
                image ="/images/projects/faria.webp"
                alt ="The  Mobile App search job iimage"
              />
            </div>
            <div data-aos="flip-right">
              <ProjectCard
                title="Saifi Stable"
                description="A website Dashboard"
                image ="/images/projects/saifi.webp"
                alt ="Saifi Stable image"
              />
            </div>
          </div>
        </section>
        {/* Prices */}
        <section className="flex flex-col gap-16 items-center">
          <div
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
            data-aos="zoom-in-up"
          >
            <SectionSentence
              title="ماذا تحتاج؟ اختر الخدمة التي يمكن أن تساعدك"
              badge="!لنبدأ "
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            <div data-aos="fade-up-right">
              <PricingCard
                price="$2000 "
                title="باقه البدايه   "
                features={[
                  'تطوير تطبيق مخصص للهاتف المحمول أو موقع إلكتروني -',
                  'حتى تعديلين - ',
                  'ميزات وتصميم أساسيين -',
                  'مدة التسليم من 2 إلى 4 أسابيع -',
                  'دعم لمدة أسبوعين بعد الإطلاق -',
                  '(SEO) تحسين محركات البحث الأساسي -',
                ]}
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
            <PricingCard
                price="$15,000+ "
                title="حزمة المؤسسات"
                features={[
                  'تطبيق مخصص للهاتف المحمول، أو منصة، أو حل للتجارة الإلكترونية مع ميزات متقدمة (مثل التعلم الآلي، الذكاء الاصطناعي، التحليلات)',
                  'تعديلات غير محدودة ضمن النطاق',
                  'تكاملات API شاملة وإعداد بنية تحتية سحابية',
                  'مدة تطوير من 3 إلى 6 أشهر',
                  'دعم وصيانة لأكثر من 6 أشهر بعد الإطلاق',
                  'تحسين شامل لمحركات البحث (SEO) والأداء',
                  'إعداد استضافة مخصصة وبنية تحتية سحابية',
                ]}

                
              />
            </div>
            <div data-aos="fade-up-left">
              

            <PricingCard
                price="$5000"
                title="حزمة النمو"
                features={[
                  'تطبيق مخصص للهاتف المحمول أو موقع إلكتروني متكامل بالكامل مع تكامل API (مثل بوابات الدفع، CRM)',
                  'تصميم واجهة مستخدم وتجربة مستخدم مخصص',
                  'حتى 4 تعديلات',
                  'مدة تطوير من 1 إلى 2 شهر',
                  'دعم لمدة 1-2 شهر بعد الإطلاق',
                  'تحسين محركات البحث (SEO) والأداء',
                  'إعداد الاستضافة'
                ]}
              />
            </div>
          </div>
        </section>
        {/* Testimonial */}
        <section className="flex flex-col gap-16 items-center">
          <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12" data-aos="zoom-in-up">
            <SectionSentence
              title="ماذا يقول عملاؤنا عنا أننا لم نخيب ظنهم أبداً؟"
              badge="اراء عملائنا"
            />
          </div>
          <div className="w-full" data-aos="fade-up">
            <TestimonialList />
          </div>
        </section>
      </PageTemplate>
    </>
  )
}

export default Home
