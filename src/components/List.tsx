import { Sub } from '../types';

interface Props {
  subs: Array<Sub>;
}

function List(props: Props) {
  const { subs } = props;
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
