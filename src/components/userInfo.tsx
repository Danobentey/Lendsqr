interface UserInfoProps {
  title: string;
  info: string;
}

export const UserInfo :React.FC<UserInfoProps> = ({ title, info }) => {
  return (
    <div>
      <span>{title}</span>
      <p>{info}</p>
    </div>
  );
};
