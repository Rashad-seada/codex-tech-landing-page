import React from 'react'
import PageTemplate from 'components/templates/PageTemplate'
import PageSentence from 'components/molecules/PageSentence'
import LineDivider from 'components/atoms/LineDivider'
import Image from 'next/image'
import SectionSentence from 'components/molecules/SectionSentence'
import {
  FiArrowUp,
  FiCheckCircle,
  FiDownload,
  FiGlobe,
  FiLayout,
  FiMonitor,
  FiRefreshCcw,
  FiSmartphone,
} from 'react-icons/fi'
import SmallCardIcon from 'components/molecules/Card/SmallCardIcon'
import CardListIcon from 'components/molecules/Card/CardListIcon'
import TextArrowLink from 'components/molecules/TextArrowLink'
import IconListItem from 'components/molecules/IconListItem'
const Services = () => {
  return (
    <>
      <PageTemplate title='Service - Collosal'>
        <section className="grid place-items-center" data-aos="zoom-in-up">
          <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12">
            <PageSentence
              badge="الخدمات"
              title="نحن هنا للمساعدة في حل مشكلات شركتك"
            />
          </div>
        </section>
        <LineDivider />
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
            <figure className="w-full h-[315px] relative">
              <Image
                src={'/images/ui-design-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt='تصميم واجهة المستخدم'
              />
            </figure>
          </aside>
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-right">
              <SectionSentence
                badge="تصميم واجهة المستخدم"
                title="لا تدع فكرتك تُلتقط من قبل الآخرين، صمم نموذجًا أوليًا لفكرتك."
                paragraph="انقل أفكارك بأسرع وقت ممكن، واصنع تصاميم جميلة ونماذج أولية حية."
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
                <SmallCardIcon
                  title="تصميم جميل"
                  description="اصنع تصميمًا عصريًا لفكرتك."
                  icon={<FiLayout />}
                />
                <SmallCardIcon
                  title="نموذج أولي"
                  description="اصنع نماذج أولية حية لتصميماتك."
                  icon={<FiLayout />}
                />
              </aside>
              <TextArrowLink label="تفاصيل الخدمات" href="/service/detail" />
            </div>
          </aside>
        </section>
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-right">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-right">
              <SectionSentence
                badge="التطوير"
                title="ابتكر حلولًا للمشكلات المتكررة، وصمم تطبيقات يمكن الوصول إليها من أي مكان!"
                paragraph="أخبرنا فقط بمشكلتك المتكررة أو الطريقة البدائية المستخدمة اليوم، وسنقوم بإنشاء حل رقمي."
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="w-full grid grid-cols-1 gap-5">
                <CardListIcon
                  icon={<FiSmartphone />}
                  title="تطوير تطبيقات الهاتف المحمول"
                />
                <CardListIcon
                  icon={<FiMonitor />}
                  title="تطوير تطبيقات سطح المكتب"
                />
                <CardListIcon icon={<FiGlobe />} title="تطوير مواقع الويب" />
              </aside>
              <TextArrowLink label="تفاصيل الخدمه" href="/service/detail" />
            </div>
          </aside>
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-left">
            <figure className="w-full h-[450px] relative">
              <Image
                src={'/images/development-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt='بيئة تطوير متكاملة'
              />
            </figure>
          </aside>
        </section>
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
            <figure className="w-full h-[545px] relative">
              <Image
                src={'/images/maintenance-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt='صيانة الخادم'
              />
            </figure>
          </aside>
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-right">
              <SectionSentence
                badge="الصيانة"
                title="فكر في خادمك وكأنه طفلك الخاص، اعتنِ به كل يوم."
                paragraph="سنقوم بعمل نسخة احتياطية لخوادمك كل يوم، وتنظيفها كل أسبوع، وترقيتها عند وجود تحديث."
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                <IconListItem icon={<FiDownload />} value='نسخ احتياطي يومي' />
                <IconListItem icon={<FiArrowUp />} value='ترقية' />
                <IconListItem icon={<FiRefreshCcw />} value='تنظيف أسبوعي' />
                <IconListItem icon={<FiCheckCircle />} value='إصلاح الأخطاء' />
              </aside>
              <TextArrowLink label="تفاصيل الخدمه" href="/service/detail" />
            </div>
          </aside>
        </section>
      </PageTemplate>
    </>
  )
}

export default Services
