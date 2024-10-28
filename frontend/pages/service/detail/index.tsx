import LineDivider from 'components/atoms/LineDivider';
import Text from 'components/atoms/Text';
import FeatureCard, { FeatureCardProps } from 'components/molecules/Card/FeatureCard';
import PageSentence from 'components/molecules/PageSentence';
import PageTemplate from 'components/templates/PageTemplate';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiClock, FiCode, FiFigma, FiLayout, FiTrendingUp, FiZap } from 'react-icons/fi';
import randomString from 'utils/randomString';

const ServiceDetail = () => {
	interface Faq {
		title: string;
		description: string;
	}
	const faqs: Faq[] = [
		{
			title: ` نظام الدفع؟`,
			description: `إذا تم الاتفاق على المشروع، ستدفع دفعة مقدمة، وعندما يصل التقدم إلى 50% ستقوم بالدفع الثاني، وعند اكتمال المشروع بنسبة 100% ستدفع المبلغ المتبقي`
		},
		{
			title: `هل يمكنني الاستشارة أولاً؟`,
			description: `بالطبع يمكنك استشارتنا أولاً. نحن سعداء جداً بمساعدتك في مشاكلك وتقديم أفضل الحلول. يمكنك التواصل معنا عبر صفحة التواصل.`
		},
		{
			title: `ماذا يحدث إذا توقف المشروع في منتصف الطريق؟`,
			description: ` نعد دائماً بإكمال المشروع في الوقت المحدد، وإذا حدثت مشكلة (بسبب خطأنا)، فسيتم رد جميع المدفوعات. وسيتم إنهاء المشروع`
		},
		{
			title: `هل يشمل الخوادم والنطاقات؟`,
			description: `لا داعي للقلق بشأن أي شيء آخر، لقد قمنا بإعداد كل شيء. عليك فقط متابعة تقدم المشروع والتأكد من أن الميزات التي تريدها هي الصحيحة.`
		},
		{
			title: `هل سأحصل على الكود المصدري`,
			description: `عند اكتمال المشروع بنسبة 100%، سيتم تزويدك بجميع الموارد مثل ملفات التصميم، الرسوم البيانية التحليلية، الكود المصدري، وما إلى ذلك. لا داعي للقلق بشأن هذ`
		},
		{
			title: `هل هناك ضمان؟`,
			description: `ضمان لمدة سنة على أخطائنا أو أي خلل ناتج عننا. إذا كنت ترغب في إضافة ميزة غير مشمولة في الضمان، فهناك رسوم إضافية لكل ميزة، ويعتمد السعر على مدى صعوبة الميزة.`
		}
	];
	const features: FeatureCardProps[] = [
		{
			title: 'ملفات التصميم',
			description: 'تم تصميم المشاريع بشكل جيد باستخدام Figma. ستحصل على ملف التصميم.',
			icon: <FiFigma />
		},
		{
			title: 'في نفس اليوم',
			description: `لا نريدك أن تنتظر طويلاً. سيتم الانتهاء من كل شيء في نفس اليوم.`,
			icon: <FiClock />
		},
		{
			title: 'كود بجودة عالية',
			description: `الكود المكتوب وفقًا لأفضل الممارسات سهل الصيانة للغاية.`,
			icon: <FiCode />
		},
		{
			title: 'تحسين محركات البحث (SEO)',
			description: 'سيظهر الموقع في الصفحة الأولى من محرك البحث.',
			icon: <FiTrendingUp />
		},
		{
			title: 'تصميم متجاوب',
			description: `يمكنك الوصول إلى الموقع من أي جهاز، لا تحد من زوارك.`,
			icon: <FiLayout />
		},
		{
			title: 'سرعة فائقة',
			description: 'الموقع السريع لن يخيب آمال العملاء المحتملين.',
			icon: <FiZap />
		}
	];
	return (
		<PageTemplate title="Service Detail - Collosal">
			<section className="grid place-items-center">
				<div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
					<PageSentence badge="التطوير" title="حل مشاكل شركتك المتكررة عن طريق تصميم التطبيقات." />
				</div>
			</section>
			<LineDivider />
			<section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
				<aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
					<figure className="w-full h-[450px] relative">
						<Image
							src={'/images/development-illustration.svg'}
							layout="fill"
							objectFit="fill"
							alt="IDE that connect to Desktop, Mobile and Web mean multiple platform"
						/>
					</figure>
				</aside>
				<aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
					<div className="sm:w-10/12 md:w-8/12 lg:w-full lg:text-right grid gap-10">
						<div className="grid gap-8">
							<Text
								value={`أخبرنا فقط بمشكلتك المتكررة أو الطريقة البدائية المستخدمة اليوم، وسنقوم بإنشاء حل رقمي.
يمكننا بناء موقع إلكتروني، تطبيق جوال، وتطبيق لسطح المكتب لك. جميع أنواع التطبيقات تتمتع بنظام أمان جيد، وسهولة في الصيانة، وسرعة عالية. `}
								textStyle={'SectionParagraph'}
							/>
						</div>
						<ul className=" text-white text-base font-medium pl-5 grid gap-2.5">
							<li>تجنب الأخطاء المحتملة باستخدام الاختبارات الوحدوية *</li>
							<li>إزالة الأكواد غير المستخدمة ستسرع التطبيق *</li>
							<li>التصميم العصري يرضي المستخدمين *</li>
							<li>تجربة المستخدم الجيدة لن تخيب آمال المستخدمين *</li>
						</ul>
					</div>
					<div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full" />
				</aside>
			</section>
			<section className="grid place-items-center gap-16">
				<div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
					<PageSentence badge=" الميزات" title="إليك ما ستحصل عليه عند شراء هذه الخدمة" />
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:text-right">
					{features.map((feature) => {
						return (
							<div key={randomString(64)} data-aos="fade-up" >
								<FeatureCard
									title={feature.title}
									description={feature.description}
									icon={feature.icon}
									isNaked={true}
								/>
							</div>
						);
					})}
				</div>
			</section>
			<section className="grid place-items-center gap-16">
				<div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
					<PageSentence badge="الأسئلة الشائعة" title="الأسئلة المتكررة، قد تكون نفس أسئلتك." />
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-7 lg:text-right">
					{faqs.map((faq) => {
						return (
							<div className="grid gap-2.5" key={randomString(64)} data-aos="fade-right">
								<Text textStyle="FAQTitle" value={faq.title} />
								<Text textStyle="FAQDescription" value={faq.description} />
							</div>
						);
					})}
				</div>
				<div className="text-white text-base font-medium">
        <div className="sm:hidden" />
					<div className="text-primary inline">
						<Link href={'/quote'}>لا تتردد في السؤال </Link>
					</div>
					{`لم تجد إجابة؟ `}
					
				</div>
			</section>
		</PageTemplate>
	);
};

export default ServiceDetail;
