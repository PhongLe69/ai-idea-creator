import { db } from "@/lib/utils/db";
import { AIOutput } from "@/lib/utils/schema";
import { currentUser } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import Image from "next/image";
import React from "react";
import { TEMPLATE } from "@/components/content/TemplateListSection";
import CopyButton from "./_components/CopyButton";
import { Prompts } from "@/shared/prompts";

export interface HISTORY {
  id: Number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}
async function History() {
  const user = await currentUser();

  const HistoryList: HISTORY[] | any = await db
    .select()
    .from(AIOutput)
    .where(
      eq(AIOutput?.createdBy as any, user?.primaryEmailAddress?.emailAddress)
    )
    .orderBy(desc(AIOutput.id));
  const GetTemplateName = (slug: string) => {
    const template: TEMPLATE | any = Prompts?.find((item) => item.slug == slug);
    return template;
  };
  return (
    <div className="w-full flex flex-col gap-8 md:p-5">
      <h2 className="font-bold text-3xl">History</h2>
      <p className="text-gray-500">
        Search your previously generate AI content
      </p>
      <div className="grid grid-cols-7 font-bold bg-secondary mt-5 py-3 px-3">
        <h2 className="col-span-2">TEMPLATE</h2>
        <h2 className="col-span-2">AI RESP</h2>
        <h2>DATE</h2>
        <h2>WORDS</h2>
        <h2>COPY</h2>
      </div>
      {HistoryList.map((item: HISTORY, index: number) => (
        <>
          <div className="grid grid-cols-7 my-5 py-3 px-3">
            <h2 className="col-span-2 flex gap-2 items-center">
              <Image
                src={GetTemplateName(item?.templateSlug)?.icon}
                width={25}
                height={25}
                alt="icon"
              />
              {GetTemplateName(item.templateSlug)?.name}
            </h2>
            <h2 className="col-span-2 line-clamp-3 mr-3">{item?.aiResponse}</h2>
            <h2>{item.createdAt}</h2>
            <h2>{item?.aiResponse.length}</h2>
            <h2>
              <CopyButton aiResponse={item.aiResponse} />
            </h2>
          </div>
          <hr />
        </>
      ))}
    </div>
  );
}

export default History;
