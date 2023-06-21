import { getAllUsers } from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import UsersList from "./components/UsersList";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const allUsers = await getAllUsers();

  return ( 
    //@ts-ignore Server Component
    <Sidebar> 
      <div className="h-full">
        <UsersList users={allUsers!} />
        {children}
        </div>
    </Sidebar> 
  );
}
