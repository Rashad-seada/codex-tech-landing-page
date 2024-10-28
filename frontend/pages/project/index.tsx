import Button from 'components/atoms/Button'
import Select from 'components/atoms/Form/Select'
import LineDivider from 'components/atoms/LineDivider'
import PageSentence from 'components/molecules/PageSentence'
import ProjectCard from 'components/molecules/Card/ProjectCard'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'
import randomString from 'utils/randomString'
// import projectList from './data';
// const Project = () => {
//   interface Project {
//     title: string
//     description: string
//   }
//   const projectList: Project[] = [
//     {
//       title: 'The Mobile App E-commerce',
//       description: 'E-commerce for mobile app',
//     },
//     {
//       title: 'The  Mobile App Live Streem ',
//       description: 'Hulk live Streem for Mobile App',
//     },
//     {
//       title: 'The  Mobile App search job',
//       description: 'A Mobile App To Get job',
//     },
//     {
//       title: 'Faria Website',
//       description: 'A website App',
//     },
//     {
//       title: '(investing in real-state) seamless',
//       description: 'A UI design for realtime chat app',
//     },
//     {
//       title: 'Saifi Stable',
//       description: 'A website App',
//     },
//     {
//       title: 'jobque (job finder)',
//       description: 'A website App',
//     },
//   ]
//   return (
    // <PageTemplate title="Project - Collosal">
    //   <section className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
    //     <aside
    //       className="w-full sm:w-10/12 grid grid-cols-1 place-items-center gap-12 md:place-items-start md:w-8/12 lg:w-6/12"
    //       data-aos="fade-right"
    //     >
    //       <div className="text-center md:text-right">
    //         <PageSentence
    //           badge="المشاريع "
    //           title="لقد أنجزنا العديد من المشاريع المذهلة التي لن تصدقها."
    //         />
    //       </div>
    //     </aside>
    //     <aside className="w-full min-w-[175px] md:w-fit" data-aos="fade-left">
    //       <Select
    //         options={[
    //           { label: 'تطبيقات الهاتف', value: 'تطبيقات الهاتف' },
    //           { label: 'المواقع الالكترونيه ', value: 'المواقع الالكترونيه' },
    //           { label: 'تصميم المواقع', value: 'تصميم المواقع' },
    //           { label: 'اخري', value: 'اخري' },
    //         ]}
    //       />
    //     </aside>
    //   </section>
    //   <LineDivider />
    //   <section className="grid place-items-center gap-16">
    //     <div className="w-full grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-5">
    //       {projectList.map((project) => {
    //         return (
    //           <div className="basis-full lg:basis-1/2" key={randomString(64)} data-aos="zoom-in-up">
    //             <ProjectCard
    //               title={project.title}
    //               description={project.description}
    //             />
    //           </div>
    //         )
    //       })}
    //     </div>
    //     <Button value="عرض المزيد" color="white" style="light" />
    //   </section>
    // </PageTemplate>
//   )
// }

// export default Project

interface Project {
  title: string
  description: string,
  image:string,
  alt :string,
  id:number
}


export const projectList: Project[] = [
  {
    title: 'The Mobile App E-commerce',
    description: 'E-commerce for mobile app',
    image: '/images/projects/E-commerce.webp',
    alt: 'The Mobile App E-commerce image',
    id:1
  },
  {
    title: 'The  Mobile App Live Streem ',
    description: 'Hulk live Streem for Mobile App',
    image: '/images/projects/Hulk.webp',
    alt: 'The  Mobile App search job iimage',
    id:2


  },
  {
    title: 'The  Mobile App search job',
    description: 'A Mobile App To Get job',
    image: '/images/projects/jobs.webp',
    alt: 'The  Mobile App search job image',
    id:3


  },
  {
    title: 'Faria Website',
    description: 'A website App',
    image: '/images/projects/faria.webp',
    alt: 'Faria Website image',
    id:4


  },
  {
    title: '(investing in real-state) seamless',
    description: 'A UI design for realtime chat app',
    image: '/images/projects/wallet.webp',
    alt: 'seamless image',
    id:5


  },
  {
    title: 'Saifi Stable',
    description: 'A website App',
    image: '/images/projects/saifi.webp',
    alt: 'Saifi Stable image',
    id:6
  },
  {
    title: 'jobque (job finder)',
    description: 'A website App',
    image: '/images/projects/faria.webp',
    alt: 'jobque (job finder) image',
    id:7


  },
]


const Project = () => {
  return (
    <PageTemplate title="Project - Collosal">
    <section className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
      <aside
        className="w-full sm:w-10/12 grid grid-cols-1 place-items-center gap-12 md:place-items-start md:w-8/12 lg:w-6/12"
        data-aos="fade-right"
      >
        <div className="text-center md:text-right">
          <PageSentence
            badge="المشاريع "
            title="لقد أنجزنا العديد من المشاريع المذهلة التي لن تصدقها."
          />
        </div>
      </aside>
      <aside className="w-full min-w-[175px] md:w-fit" data-aos="fade-left">
        <Select
          options={[
            { label: 'تطبيقات الهاتف', value: 'تطبيقات الهاتف' },
            { label: 'المواقع الالكترونيه ', value: 'المواقع الالكترونيه' },
            { label: 'تصميم المواقع', value: 'تصميم المواقع' },
            { label: 'اخري', value: 'اخري' },
          ]}
        />
      </aside>
    </section>
    <LineDivider />
    <section className="grid place-items-center gap-16">
      <div className="w-full grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-5">
        {projectList.map((project) => {
          return (
            <div className="basis-full lg:basis-1/2" key={randomString(64)} data-aos="zoom-in-up">
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                alt ={project.alt}
              />
            </div>
          )
        })}
      </div>
      <Button value="عرض المزيد" color="white" style="light" />
    </section>
  </PageTemplate>
  );
}

export default Project;

