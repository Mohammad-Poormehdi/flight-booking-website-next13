import SocialMediaCard from "./SocailMediaCard";
import { BsInstagram } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
interface ContactProps {
  className?: string;
}
const Contact: React.FC<ContactProps> = ({ className }) => {
  return (
    <section
      className={`contact bg-gray-200 space-y-10 py-[50px] w-full flex justify-center items-center ${className}`}
    >
      <div className="space-y-10">
        <h1 className="text-center font-bold text-4xl">
          با ما در ارتباط باشید
        </h1>
        <div className="flex justify-center items-center gap-10 max-md:flex-col">
          <SocialMediaCard icon={BsInstagram} link={process.env.INSTAGRAM!} />
          <SocialMediaCard
            icon={MdAlternateEmail}
            link={`mailto:${process.env.EMAIL}`}
          />
        </div>
      </div>
    </section>
  );
};
export default Contact;
