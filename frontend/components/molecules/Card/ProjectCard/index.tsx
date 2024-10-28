// import Button from 'components/atoms/Button'
import ButtonLink from 'components/atoms/Button/ButtonLink';
// import LazyCard, { LazyCardProps } from 'components/atoms/LazyCard'
// import Text from 'components/atoms/Text'
// interface ProjectCardProps extends LazyCardProps {
//   title: string
//   description: string
//   image:string
// }
// const ProjectCard = ({
//   title,
//   description,
//   image,
//   bottomSquareSize = 'small',
//   height = 450,
// }: ProjectCardProps) => {
//   return (
//     <div classNameName="w-full">
//       <LazyCard bottomSquareSize={bottomSquareSize} height={height} />
//       <div classNameName="flex flex-col place-items-center text-center mt-10">
//         <div classNameName="mb-2.5">
//           <Text value={title} textStyle="ProjectTitle" />
//         </div>
//         <div classNameName="mb-9">
//           <Text value={description} textStyle="ProjectDescription" />
//         </div>
//         <div classNameName="">
//           <ButtonLink
//             value="Detail"
//             color="white"
//             radius="pill"
//             style="outline"
//             href="/project/detail"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProjectCard
import Button from 'components/atoms/Button';
import React from 'react';
 
type TypeProps = {
	title: string;
	description: string;
	image: string;
	alt: string;
};
 

const ProjectCard = (props: TypeProps) => {

	return (
		<div className="flex justify-center  p-3   ">
			<div className="  max-w-sm rounded-3xl overflow-hidden shadow-lg">
				<img className="w-full" src={props.image} alt={props.alt} />
				<div className="flex flex-col place-items-center text-center mt-10">
					<div className="mb-2.5">
						<div className="font-bold text-xl mb-2 text-primary">{props.title}</div>
						<p className="text-white text-base">{props.description} </p>
					</div>
					<div className="  ">
						<ButtonLink
							value="عرض التفاصيل "
							color="white"
							radius="pill"
							style="outline"
							href="/project/detail"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
