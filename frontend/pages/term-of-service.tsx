import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'

const TermOfService = () => {
  return (
    <PageTemplate>
      <section className="space-y-6 text-center" data-aos="zoom-in-up">
        <PageSentence badge="الشروط " title={`الشروط والأحكام`} />
        <Text textStyle="BlogMeta" value="اخر تحديث في 2024" />
      </section>
      <LineDivider />
      <section className="grid place-items-center" data-aos="fade-up">
        <div className="w-full sm:w-10/12 md:w-8/12 space-y-10 ">
          <Text
            textStyle="PageContent"
            value={`
من خلال الوصول إلى موقع codex tech إجراء طلب، فإنك تؤكد موافقتك على الالتزام بشروط الخدمة الواردة في الشروط والأحكام الموضحة أدناه. تنطبق هذه الشروط على الموقع بأكمله وأي بريد إلكتروني أو نوع آخر من الاتصالات بينك وبين codex tech.
              <br> <br>
لا تتحمل شركة Codex Tech تحت أي ظرف من الظروف أي مسؤولية عن الأضرار المباشرة أو غير المباشرة أو الخاصة أو العرضية أو التبعية، بما في ذلك، على سبيل المثال لا الحصر، فقدان البيانات أو الأرباح الناشئة عن استخدام المواد على هذا الموقع أو عدم القدرة على استخدامها، حتى إذا تم إخطار فريق Codex Tech أو ممثل معتمد بإمكانية حدوث مثل هذه الأضرار. إذا أدى استخدامك للمواد من هذا الموقع إلى الحاجة إلى صيانة أو إصلاح أو تصحيح المعدات أو البيانات، فإنك تتحمل أي تكاليف تنجم عن ذلك.

              <br> <br>
لن تكون Codex Tech مسؤولة عن أي نتائج قد تحدث أثناء استخدامك لمواردنا. نحن نحتفظ بالحق في تغيير الأسعار وتعديل سياسة استخدام الموارد في أي وقت.

              `}
          />
          <div className="space-y-2.5">
            <Text textStyle="PageSubtitle" value=" : الرخصة" />
            <Text
              textStyle="PageContent"
              value={`
تمنحك Codex Tech رخصة قابلة للإلغاء وغير حصرية وغير قابلة للتحويل ومحدودة لتنزيل الموقع وتثبيته واستخدامه بدقة وفقًا لشروط هذا الاتفاق.

              <br> <br>
تمثل هذه الشروط والأحكام عقدًا بينك وبين Codex Tech ("نحن" أو "لنا" أو "خاصتنا") وتمنحك رخصة قابلة للإلغاء وغير حصرية وغير قابلة للتحويل ومحدودة لتنزيل الموقع وتثبيته واستخدامه بدقة وفقًا لشروط هذا الاتفاق.

              `}
            />
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default TermOfService
