import LineDivider from 'components/atoms/LineDivider'
import FaqTabbar from 'components/molecules/FaqTabbar'
import PageSentence from 'components/molecules/PageSentence'
import FaqList from 'components/organisms/FaqList'
import PageTemplate from 'components/templates/PageTemplate'
import React, { useEffect, useState } from 'react'
import getRandomItemsFromArray from 'utils/getRandomItemsFromArray'

const Faq = () => {
  const faqs = [
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
  const [randomFaqs, setRandomFaqs] = useState([faqs, faqs, faqs, faqs])
  const [activeFaq, setActiveFaq] = useState(faqs)
  useEffect(() => {
    const faqs = [
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
    setRandomFaqs([
      faqs,
      getRandomItemsFromArray(faqs, 5),
      getRandomItemsFromArray(faqs, 4),
      getRandomItemsFromArray(faqs, 3),
    ])
  }, [])
  return (
    <PageTemplate>
      <section className="grid grid-cols-1 place-items-center">
        <div className="sm:w-10/12 md:8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="الاسئله الشائعه"
            title="الاسئله الشائعه, ربما تكون الاسئله اللتي تخطر في ذهنك"
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row gap-5">
        <div className="basis-12/12 md:basis-4/12" data-aos="fade-up">
          <FaqTabbar
            tabs={[
              {
                name: 'عام',
                onClick: () => {
                  setActiveFaq(randomFaqs[0])
                },
              },
              {
                name: 'التحويلات',
                onClick: () => {
                  setActiveFaq(randomFaqs[1])
                },
              },
              {
                name: 'الصيانة',
                onClick: () => {
                  setActiveFaq(randomFaqs[2])
                },
              },
              {
                name: 'التكنولوجيا',
                onClick: () => {
                  setActiveFaq(randomFaqs[3])
                },
              },
            ]}
          />
        </div>
        <div className="basis-12/12 md:basis-8/12">
          <FaqList faqs={activeFaq} />
        </div>
      </section>
      <LineDivider />
    </PageTemplate>
  )
}

export default Faq
