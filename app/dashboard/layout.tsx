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
  Star,
  TableProperties,
  Timer,
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

const inter = Space_Grotesk({ subsets: ["latin"] });

export default function DashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const paths = pathname.split("/").reverse();
  const pathArray = [
    {
      name: "Dashboard",
      icon: <Home size={16} />,
      link: "/dashboard",
    },
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
    {
      name: "Chatbot",
      icon: <Bot size={16} />,
      link: "/dashboard/chatbot",
    },
    {
      name: "History",
      icon: <Timer size={16} />,
      link: "/dashboard/history",
    },
  ];

  const activePath = pathArray.filter((path) => path.name === paths[0])[0];

  return (
    <div className="grid h-screen overflow-hidden w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link
              href="/"
              className="flex items-center gap-[3px] font-semibold"
            >
              <Image
                src={"/logo-black-256x256.png"}
                width={32}
                height={32}
                alt="Logo"
              />
              <span className="text-lg font-semibold tracking-tight ">
                EduQuiz
              </span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Star color="#e5d70d" fill="#e5d70d" size={16} />
              <span className="sr-only">Toggle notifications</span>
            </Button>
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
                    "flex items-center gap-2 rounded-xl hover:pl-4 transition-all duration-300 px-3 py-2 text-muted-foreground hover:text-foreground hover:shadow active:shadow-sm",
                    path.name === activePath?.name
                      ? "bg-secondary text-primary border"
                      : ""
                  )}
                >
                  {path.icon}
                  {path.name}.
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col overflow-hidden">
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
                  <span className="sr-only">EduQuiz</span>
                </Link>
                {pathArray.map((path, index) => (
                  <a
                    key={index}
                    href={path.link}
                    className={
                      "flex items-center gap-2 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground " +
                      (path.name === activePath?.name
                        ? "bg-secondary text-primary border"
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
          <div className="w-full flex-1">
            <form>
              {/* s */}
            </form>
          </div>
          <UserButton />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 max-h-screen overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
