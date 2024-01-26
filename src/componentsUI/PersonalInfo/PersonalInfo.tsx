type Props = {
  title: string;
};

export default function PersonalInfo({ title = "" }: Props) {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
}
