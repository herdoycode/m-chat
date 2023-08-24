import "./Avatar.scss";

interface Props {
  src: string;
  isActive: boolean;
}

const Avatar = ({ isActive, src }: Props) => {
  return (
    <div className="avatar">
      <img src={src} alt="user" />
      {isActive && <div className="active-dot"></div>}
    </div>
  );
};

export default Avatar;
