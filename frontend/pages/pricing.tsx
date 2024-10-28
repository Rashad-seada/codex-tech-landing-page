import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import PricingCard from 'components/molecules/Card/PricingCard'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import Link from 'next/link'
import React from 'react'
import randomString from 'utils/randomString'

const Pricing = () => {
  interface Faq {
    title: string
    description: string
  }
  const faqs: Faq[] = [
    {
      title: `كيف يتم نظام الدفع؟`,
      description: `إذا تم الاتفاق على المشروع، ستقوم بدفع مقدم، وعندما يصل التقدم إلى 50% ستقوم بعمل دفعة ثانية، وعندما يكتمل التقدم 100% ستقوم بسداد المبلغ المتبقي.`,
    },
    {
      title: `هل يمكنني الاستشارة أولاً؟`,
      description: `بالطبع يمكنك استشارتنا أولاً. نحن سعداء جدًا لمساعدتك في مشاكلك وتقديم أفضل الحلول. يمكنك الاتصال بنا عبر صفحة الاتصال.`,
    },
    {
      title: `ماذا لو توقف المشروع في منتصف الطريق؟`,
      description: `نعدك بأن نكمل المشروع في الوقت المحدد، إذا حدثت مشكلة (بسبب خطأ منا)، سيتم استرداد جميع المدفوعات. وسيتم إنهاء المشروع.`,
    },
    {
      title: `هل يشمل ذلك الخوادم والنطاقات؟`,
      description: `لا تحتاج إلى التفكير في أي شيء آخر، فنحن لدينا كل شيء جاهز. كل ما تحتاجه هو التحقق من تقدمك والتأكد من أن الميزات التي تريدها صحيحة.`,
    },
    {
      title: `هل سأحصل على كود المصدر؟`,
      description: `عند اكتمال المشروع بنسبة 100%، سيتم تزويدك بجميع الموارد، مثل ملفات التصميم، ورسوم التحليل، وكود المصدر، إلخ. لا تحتاج إلى القلق بشأن هذا.`,
    },
    {
      title: 'هل هناك ضمان؟',
      description: `ضمان لمدة سنة واحدة لأخطائنا أو أخطاء. إذا كنت ترغب في إضافة ميزة غير مشمولة في الضمان، فسيكون هناك رسوم إضافية لكل ميزة، ويعتمد السعر على الصعوبة.`,
    },
  ]

  return (
    <PageTemplate>
      <section className="grid grid-cols-1 place-items-center">
        <div
          className="sm:w-10/12 md:8/12 lg:w-6/12 text-center"
          data-aos="zoom-in-up"
        >
          <PageSentence
            badge="التسعير"
            title="ماذا تحتاج؟ اختر الخدمة التي يمكن أن تساعدك."
          />
        </div>
      </section>
      <LineDivider />
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
      <section className="grid place-items-center gap-16">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="الأسئلة المتكررة"
            title="أسئلة شائعة، ربما تكون مثل أسئلتك"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-7">
          {faqs.map((faq) => {
            return (
              <div className="grid gap-2.5" key={randomString(64)} data-aos="fade-right">
                <Text textStyle="FAQTitle" value={faq.title} />
                <Text textStyle="FAQDescription" value={faq.description} />
              </div>
            )
          })}
        </div>
        <div className=" text-primary text-base font-medium text-center ">
                <Link href={'/quote'}>لا تتردد في السؤال </Link>

          <div className="sm:hidden"></div>
          <div className="text-white inline select-none">
          {`لم تجد الاجابه ؟ `}     
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default Pricing
