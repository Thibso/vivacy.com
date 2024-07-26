type Props = {
  title: string;
  path: string;
  content: string;
  items: Array<String>;
};

export default function NavItem(props: Props) {
  return (
    <li className="group">
      <span className="uppercase cursor-pointer">{props.title}</span>
      <div className="hidden group-hover:block absolute left-0 w-full rounded-b-3xl pt-5">
        <div className="grid grid-cols-3 bg-background text-blue px-20 py-12">
          <div>
            <span className="uppercase">{props.title}</span>
            <p className="mt-8">{props.content}</p>
          </div>

          <div></div>
        </div>
      </div>
    </li>
  );
}
