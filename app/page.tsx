import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { dark } from "@clerk/themes";

const HomePage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  return (
    <div className="flex w-screen flex-col items-center justify-center font-bold">
      <h1 className="p-5">Hello World</h1>
      <UserButton
        showName
        appearance={{
          baseTheme: dark,
        }}
      />
    </div>
  );
};

export default HomePage;
