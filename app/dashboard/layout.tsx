"use client";
import {
  BarChart,
  Bot,
  File,
  Home,
  LinkedinIcon,
  Mail,
  Menu,
  Newspaper,
  Search,
  Speech,
  TableProperties,
  Timer,
  Text,
} from "lucide-react";

import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { PROJECT_NAME } from "@/shared";

const inter = Space_Grotesk({ subsets: ["latin"] });

export default function DashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const paths = pathname.split("/")[2];
  const pathArray = [
    {
      name: "Dashboard",
      icon: <Home size={16} />,
      link: "/dashboard",
    },
    {
      name: "Content",
      icon: <BarChart size={16} />,
      link: "/dashboard/content",
    },
    {
      name: "Resume",
      icon: <File size={16} />,
      link: "/dashboard/resume",
    },
    {
      name: "Assistant",
      icon: <Bot size={16} />,
      link: "/dashboard/assistant",
    },
    // {
    //   name: "Chatbot",
    //   icon: <Text size={16} />,
    //   link: "/dashboard/chatbot",
    // },
    {
      name: "History",
      icon: <Timer size={16} />,
      link: "/dashboard/history",
    },
    // {
    //   name: "emailer",
    //   icon: <Mail size={16} />,
    //   link: "/dashboard/emailer",
    // },
    // {
    //   name: "toplinkedin",
    //   icon: <LinkedinIcon size={16} />,
    //   link: "/dashboard/toplinkedin",
    // },
    // {
    //   name: "Headlines",
    //   icon: <Newspaper size={16} />,
    //   link: "/dashboard/headlines",
    // },
    // {
    //   name: "interview",
    //   icon: <Speech size={16} />,
    //   link: "/dashboard/interview",
    // },
    // {
    //   name: "forms",
    //   icon: <TableProperties size={16} />,
    //   link: "/dashboard/forms",
    // },
  ];

  const activePath = paths;

  const [openNav, setOpenNav] = useState(true);
  const toggleNav = () => setOpenNav(!openNav);

  return (
    <div className="flex h-screen overflow-hidden w-full">
      <div
        className={`hidden border-r bg-muted/40 md:block ${
          openNav ? "w-full md:w-[220px] lg:w-[280px]" : "w-fit"
        }`}
      >
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px]">
            <Link href="/" className="flex items-center font-semibold">
              <Image
                src={"/logo-black-256x256.png"}
                width={32}
                height={32}
                alt="Logo"
              />
              <span
                className={`text-lg font-semibold tracking-tight ml-[3px] ${
                  openNav ? "block" : "hidden"
                }`}
              >
                {PROJECT_NAME}
              </span>
            </Link>
          </div>
          <div className="flex-1">
            <nav
              className={
                inter.className +
                " grid items-start px-2 text-base font-medium lg:px-4"
              }
            >
              {pathArray.map((path, index) => (
                <Link
                  key={index}
                  href={path.link}
                  className={cn(
                    "flex items-center gap-2 rounded-xl hover:pl-4 transition-all duration-300 px-3 h-10 text-muted-foreground hover:text-foreground hover:shadow active:shadow-sm",
                    path.link.split("/")[2] === activePath
                      ? "bg-secondary text-primary border pointer-events-none"
                      : ""
                  )}
                >
                  <span>{path.icon}</span>
                  <span className={openNav ? "block" : "hidden"}>
                    {path.name}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
          <div className="p-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={toggleNav}
            >
              <Text size={16} />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col overflow-hidden w-full">
        <header className="flex h-14 items-center gap-4 border-b bg-transparent px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <span className="sr-only">{PROJECT_NAME}</span>
                </Link>
                {pathArray.map((path, index) => (
                  <a
                    key={index}
                    href={path.link}
                    className={
                      "flex items-center gap-2 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground " +
                      (path.link.split("/")[2] === activePath
                        ? "bg-secondary text-primary border pointer-events-none"
                        : "")
                    }
                  >
                    {path.icon}
                    {path.name}.
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <div className="ml-auto">
          <UserButton />
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 lg:gap-6 max-h-screen overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
