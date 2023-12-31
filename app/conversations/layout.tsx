import { getConversations } from "../actions/getConversations";
import { getAllUsers } from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationsList from "./components/ConversationsList";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  const users = await getAllUsers();

  return (
     //@ts-ignore Server Component
     <Sidebar>
      <div className="h-full">
        <ConversationsList title="Messages" users={users!} initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
}

