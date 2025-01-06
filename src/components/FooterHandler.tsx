"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer";

<<<<<<< HEAD

=======
>>>>>>> a7519b108b369aac18848dc1718d99266fad7b80
export default function FooterHandler() {
  const pathname = usePathname();

  // Paths where footer should not appear
  const noFooterPaths = ["/adminCar"];

  if (noFooterPaths.includes(pathname)) {
    return null; // Do not render Footer
  }

  return <Footer />;
}