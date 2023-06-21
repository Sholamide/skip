"use client";

import { User } from "@prisma/client";
import UserItem from "./UserItem";

interface usersListProps {
  users: User[];
}

const UsersList: React.FC<usersListProps> = ({ users }) => {
  return (
    <aside
      className="
    fixed
    inset-y-0
    pb-20
    lg:pb-0
    lg:left-20
    lg:w-80
    lg:block
    overflow-y-auto border-r border-gray-200 block w-full left-0 
     "
    >
      <div className="px-4">
        <div className="flex flex-col">
          <div className="text-2xl font-bold text-neutral-800 py-4">
            Skippers
          </div>
        </div>
        {users.map((user) => (
          <UserItem key={user.id} userData={user} />
        ))}
      </div>
    </aside>
  );
};

export default UsersList;
