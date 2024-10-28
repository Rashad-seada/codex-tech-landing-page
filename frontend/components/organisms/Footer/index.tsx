import NavBrand from 'components/atoms/NavBrand'
import NavLink from 'components/atoms/NavLink'
import Text from 'components/atoms/Text'
import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="mt-32 pb-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-16 xl:gap-20">
          <div className="space-y-5">
            <NavBrand />
            <div className="">
              <Text
                value={`${new Date().getFullYear()} © حقوق الطبع والنشر   `}
                textStyle="SectionParagraph"
              />
              <Text
                value={`Codex Tech تم التطوير بواسطه شركه `}
                textStyle="SectionParagraph"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16 xl:gap-20">
            <div className="space-y-5">
              <Text value="الخدمات " textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[10px]">
                <NavLink
                  value="تطوير الويب"
                  href="/service/detail"
                />
                <NavLink
                  value="تطوير التطبيقات "
                  href="/service/detail"
                />
                <NavLink value="تصميم واجهه المستخدم" href="/service/detail" />
                {/* <NavLink value="استشارة" href="/service/detail" /> */}
                <NavLink value="صيانة" href="/service/detail" />
                <NavLink value="التسعير" href="/pricing" />
              </div>
            </div>
            <div className="space-y-5">
              <Text value="الشركة" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[10px]">
                <NavLink value="عن الشركه" href="/about" />
                <NavLink value="تواصل" href="/contact" />
                <NavLink value="إرسال عرض سعر" href="/quote" />
                {/* <NavLink value=" سياسة الخصوصية" href="/privacy-policy" /> */}
                <NavLink value="شروط الخدمة" href="/term-of-service" />
                {/* <NavLink value="الوظائف" href="/jobs" /> */}
                {/* <NavLink value="المدونات" href="/blog" /> */}
              </div>
            </div>
            <div className="space-y-5">
              <Text value="الموارد" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[10px]">
                <NavLink value="الدعم" href="/faq" />
                {/* <NavLink value="الوثائق" href="/documentation" /> */}
                {/* <NavLink value="الرخصة" href="/license" /> */}
                {/* <NavLink value="خريطة الموقع" href="/sitemap" /> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
