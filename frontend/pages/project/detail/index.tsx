import LazyCard from 'components/atoms/LazyCard'
import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import PageSentence from 'components/molecules/PageSentence'
import ProjectCard from 'components/molecules/Card/ProjectCard'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'
import randomString from 'utils/randomString'

// import { description } from '../description'
const ProjectDetail = () => {


  interface Project {
    title: string
    description: string
    image :string
    alt:string
  }
  const projectList: Project[] = [
    {
      title: 'Simple Mobile Blog App',
      description: 'A blog app on mobile platform',
      alt:"",
      image:""
    },
    {
      title: 'Realtime Chat App UI Design',
      description: 'A UI design for realtime chat app',
      alt:"",
      image:""
    },
  ]

  return (
    <PageTemplate title='Project Detail - Collosal'>
      <section className="grid place-items-center" data-aos="zoom-in-up">
        <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12">
          <PageSentence
            badge="PROJECT DETAIL"
            title="The Desktop App Landing Page"
          />
        </div>
      </section>
      <LineDivider />
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <aside data-aos="fade-up-right">
          <LazyCard bottomSquareSize="big" height={400} />
        </aside>
        <aside className="grid gap-12 place-content-center" data-aos="fade-up-left">
          <Text
            textStyle="SectionParagraph"
            value= "I developed an innovative software platform using modern technologies such as Node.js and React.js, in addition to blockchain technology. The project aims to streamline the process of submitting bids for tenders and improve the overall efficiency of the process The platform allows companies, suppliers, and contractors to register on the network and submit bids and tenders in a transparent and secure manner using blockchain technology. It offers a simple and smooth user interface, enabling users to create accounts and submit bids quickly and easily.By using blockchain technologies, the security and transparency of the bidding and financial transactions are guaranteed. Every bid and financial transaction is recorded on the blockchain, making it secure and reliable for all parties involved.With the use of modern web technologies like React.js, the user interface is designed to be attractive and user-friendly, making it easy for users to interact with the platform and submit their bids efficiently In short, my new project is a leading platform in the field of bid submission for tenders, combining advanced modern technologies to ensure a smooth and secure process"  />
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Text value="CATEGORY" textStyle="ProjectDetailLabel" />
              <Text value="Development" textStyle="ProjectDetailValue" />
            </div>
            <div className="grid gap-2">
              <Text value="CLIENT" textStyle="ProjectDetailLabel" />
              <Text value="Acme, Inc" textStyle="ProjectDetailValue" />
            </div>
            <div className="grid gap-2">
              <Text value="TECHNOLOGY" textStyle="ProjectDetailLabel" />
              <Text
                value="JavaScript, HTML, CSS,Tailwind, Reactjs ,Eherume"
                textStyle="ProjectDetailValue"
              />
            </div>
          </div>
        </aside>
      </section>
      <LineDivider />
      <section className="grid gap-16 place-items-center">
        <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12" data-aos="zoom-in-up">
          <PageSentence
            badge="PROJECT DETAIL"
            title="The Desktop App Landing Page"
          />
        </div>
        <div className="w-full grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-5">
          {projectList.map((project) => {
            return (
              <div
                className="basis-full lg:basis-1/2"
                key={randomString(64)}
                data-aos="zoom-in-up"
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  alt={project.alt}
                  image ={project.image}
                />
              </div>
            )
          })}
        </div>
      </section>
    </PageTemplate>
  )
}

export default ProjectDetail
