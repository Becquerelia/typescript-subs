interface Props {
  subs: Array<{
    nick: string;
    avatar: string;
    subMonths: number;
    description?: string;
  }>;
}

function List({subs}: Props) {
  return (
    <ul>
      {subs.map((eachSub) => {
        return (
          <li key={eachSub.nick}>
            <img src={eachSub.avatar} alt={`Avatar for ${eachSub.nick}`} />
            <h4>
              {eachSub.nick} (<small>{eachSub.subMonths} months</small>){" "}
            </h4>
            <p>{eachSub.description?.substring(0, 100)} </p>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
