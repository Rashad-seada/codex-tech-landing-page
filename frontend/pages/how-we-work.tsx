import LineDivider from 'components/atoms/LineDivider'
import PageSentence from 'components/molecules/PageSentence'
import SectionSentence from 'components/molecules/SectionSentence'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'

const HowWeWork = () => {
  return (
    <PageTemplate>
      <section className="grid place-items-center">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="كيف نعمل؟"
            title="لدينا خطه عمل تضمن تسليم العمل بجودة عالية"
          />
        </div>
      </section>
      <LineDivider />
      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-5">
        <aside className="w-full" data-aos="fade-up-right">
          <div className="w-full h-[410px] relative">
            <Image
              src={'/images/discuss-illustration.webp'}
              quality={100}
              layout="fill"
              objectFit="contain"
              alt='Some people discuss'
            />
          </div>
        </aside>
        <aside className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-right" data-aos="fade-up-left">
          <SectionSentence
            badge="الخطوه الاولي "
            title={`لنبدأ بمناقشة مشكلات شركتك أولاً`}
            paragraph={" في هذه الخطوة، ستناقش التطبيق الذي سيتم تطويره.بعد تقديم نموذج العرض، سنقوم بمراجعة البيانات، ثم نتواصل معك. يمكنك مناقشة مشكلتك مع فريقنا وإيجاد حل لها."}
          />
        </aside>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-5">
        <aside className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-right" data-aos="fade-up-right">
          <SectionSentence
            badge="الخطوه الثانيه"
            title={`التخطيط، التصميم، والتطوير حتى يتم إنجاز كل شيء`}
            paragraph="عندما يتم الاتفاق على كل شيء، سيقوم فريقنا بوضع خطط تتعلق بالتطبيق الذي سيتم إنشاؤه. بدءًا من التحليل، مرورًا بالتصميم، وصولاً إلى التطوير.
في هذه الخطوة، يكون التطبيق مكتملًا بنسبة 100%."
          />
        </aside>
        <aside className="w-full" data-aos="fade-up-left">
          <div className="w-full h-[410px] relative">
            <Image
              src={'/images/development-illustration-2.svg'}
              quality={100}
              layout="fill"
              objectFit="contain"
              alt='Development'
            />
          </div>
        </aside>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-5">
        <aside className="w-full" data-aos="fade-up-right">
          <div className="w-full h-[410px] relative">
            <Image
              src={'/images/project-asset-illustration.svg'}
              quality={100}
              layout="fill"
              objectFit="contain"
              alt='Project Asset'
            />
          </div>
        </aside>
        <aside className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-right" data-aos="fade-up-left">
          <SectionSentence
            badge="الخطوه الثالثه"
            title={`اكتمال المشروع وتسليم جميع أصول المشروع والوصول إلى الخادم`}
            paragraph="سنكون مسؤولين عن تسليم جميع أصول المشروع لك، فلا تقلق. تشمل هذه الأصول، ملفات التصميم، الكود المصدري، الوصول إلى الخادم، وما إلى ذلك.
في هذه الخطوة، يتم إنهاء كل شيء وينتهي العقد"
          />
        </aside>
      </section>
      <LineDivider />
    </PageTemplate>
  )
}

export default HowWeWork
