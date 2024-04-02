import Image from "next/image";
import {redirect} from "next/navigation";

async function Page() {
  redirect("/dashboard");
}

export default Page;