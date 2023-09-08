import React from "react";

interface ListProps {
  user: {id: number, name: string};
  chooseUser: (user: {id: number, name: string}) => void;
}

const List: React.FC<ListProps> = ({ user, chooseUser }) => {
  return (
    <div className="user" id={user.id} onClick={() => chooseUser(user)}>
      {user.name}
    </div>
  );
}

export default List;
