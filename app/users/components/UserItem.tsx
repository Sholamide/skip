"use client";

import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import axios from "axios";
import { data } from "autoprefixer";
import Avatar from "@/app/components/Avatar";
import LoadingModal from "@/app/components/LoadingModal";
interface usersProps {
  userData: User;
}

const UserItem: React.FC<usersProps> = ({ userData }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleCLick = useCallback(() => {
    setIsLoading(true);

    axios
      .post("/api/conversations", {
        userId: userData.id,
      })
      .then((data) => {
        router.push(`/conversations/${data.data.id}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [userData, router]);
  return (
    <>
      {isLoading && <LoadingModal />}

      <div
        onClick={handleCLick}
        className="w-full relative flex items-center space-x-3 bg-white p-3 hover:bg-neutral-100 rounded-lg cursor-pointer transition"
      >
        <Avatar user={userData} />
        <div className=" min-w-0 flex-1">
          <div className="focus:outline-none">
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm font-medium text-gray-900">
                {userData.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserItem;
