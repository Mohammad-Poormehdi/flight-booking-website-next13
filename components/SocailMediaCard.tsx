import { BsInstagram } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { IconType } from "react-icons/lib/esm/iconBase";
import Link from "next/link";
interface SocailMediaCardProps {
  icon: IconType;
  link: string;
}
const SocialMediaCard: React.FC<SocailMediaCardProps> = ({
  icon: Icon,
  link,
}) => {
  return (
    <Link href={link}>
      <div className="w-[200px] h-[200px] bg-cyan-300 flex items-center justify-center rounded-full">
        <Icon size={100} />
      </div>
    </Link>
  );
};
export default SocialMediaCard;
