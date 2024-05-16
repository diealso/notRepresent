import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <SignIn path="/sign-in" />
    </div>
  );
}
