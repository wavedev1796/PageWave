// type SectionProps = {
//   id: string;
//   title: string;
//   content: string;
//   bgColor?: string; // bgColor es opcional
//   textAlignment: "left" | "right" | "center"; // textAlignment solo puede ser uno de estos valores
// };

// const Section = ({ id, title, content, bgColor, textAlignment }: SectionProps) => {
//   return (
//     <section id={id} className={`py-12 md:py-20 ${bgColor}`}>
//       <div className={`container mx-auto text-${textAlignment} px-4`}>
//         <h2 className="text-2xl md:text-6xl font-bold font-Lora">{title}</h2>
//         <p className="mt-4 text-gray-600 text-base md:text-2xl font-Lora font-regular">
//           {content}
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Section;