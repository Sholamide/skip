import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          src="/images/logo-1.png"
          alt="logo"
          height={200}
          width={200}
          className="mx-auto w-auto"
        />
        <h2 className="mt-6 text-center text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account to meet other chatters
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
