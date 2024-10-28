import Button from 'components/atoms/Button'
import ButtonLink from 'components/atoms/Button/ButtonLink'
import InputGroup from 'components/molecules/FormGroup/InputGroup'
import SelectGroup from 'components/molecules/FormGroup/SelectGroup'
import TextAreaGroup from 'components/molecules/FormGroup/TextAreaGroup'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'

const Quote = () => {
  return (
    <>
      <PageTemplate title='ارسل شكوتك  - Codex-Tech'>
        <section className="grid grid-cols-1 place-items-center gap-5 lg:grid-cols-2">
          <aside className="w-full sm:w-10/12 md:w-8/12 grid grid-cols-1 place-items-center gap-12 lg:w-full lg:place-items-start" data-aos="fade-down-right">
            <div className="text-center lg:text-left">
              <PageSentence
                title="أخبرنا عن مشكلتك وكيف يمكننا مساعدتك."
                description="نحن سعداء لمساعدتك، أخبرنا ما هي المشكلة التي تواجهها شركتك، ونحن جاهزون للإجابة على هذه المشكلات. عادةً ما يستغرق الأمر بضع دقائق للرد عليك"
                badge="ارسل شكوتك"
              />
            </div>
            <div className="w-fit">
              <ButtonLink
                value="الدعم"
                href="/faq"
                color="white"
                style="light"
              />
            </div>
          </aside>
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full lg:flex lg:justify-end" data-aos="fade-up-left">
            <div className="grid grid-cols-1 gap-7 p-6 md:p-9 bg-light rounded-md lg:w-10/12 ">
              <div className="grid grid-cols-2 gap-4">
                <InputGroup label="لاسم" />
                <InputGroup label="البريد الالكتروني" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <InputGroup label="الشركه" />
                <SelectGroup
                  label="حجم الشركه"
                  options={[
                    { label: 'صغيره', value: 'صغيره' },
                    { label: 'متوسطه', value: 'متوسطه' },
                    { label: 'كبيره', value: 'كبيره' },
                  ]}
                />
              </div>
              <TextAreaGroup label="اخبرنا عن مشكلتك" />
              <Button value="ارسل المشكله" />
            </div>
          </aside>
        </section>
      </PageTemplate>
    </>
  )
}

export default Quote
