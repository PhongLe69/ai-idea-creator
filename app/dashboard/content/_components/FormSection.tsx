"use client";
import React, { useState } from "react";
import { TEMPLATE } from "@/components/content/TemplateListSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2Icon, Check, ChevronsUpDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: any;
  loading: boolean;
}

interface Option {
  label: string;
  value: string;
}

function FormSection({ selectedTemplate, userFormInput, loading }: PROPS) {
  const [formData, setFormData] = useState<any>({});
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});
  const [values, setValues] = useState<{ [key: string]: string }>({});
  const [currentParam, setCurrentParam] = useState<string>("");

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleComboboxChange = (fieldName: string, selectedValue: string) => {
    setValues({ ...values, [fieldName]: selectedValue });
    setFormData({ ...formData, [fieldName]: selectedValue });
    setOpen({ ...open, [fieldName]: false });
    if (selectedValue === "unicode" || selectedValue === "latex") {
      setCurrentParam(selectedValue);
    }
  };

  const router = useRouter();
  const params = useSearchParams();

  const onSubmit = (e: any) => {
    e.preventDefault();
    userFormInput(formData);

    const newParams = new URLSearchParams(params?.toString());
    newParams.set("type", currentParam);
    router.push(`?${newParams.toString()}`);
  };

  return (
    <div className="p-5 shadow-md border rounded-lg bg-white">
      <div className="flex items-center gap-4">
        {/* @ts-ignore */}
        <Image src={selectedTemplate?.icon} alt="icon" width={50} height={50} />
        <h2 className="font-bold text-2xl text-primary">
          {selectedTemplate?.name}
        </h2>
      </div>
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>

      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item: any, index: number) => (
          <div key={index} className="my-2 flex flex-col gap-2 mb-7">
            <label className="font-bold">{item.label}</label>
            {item.field === "input" ? (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : item.field === "textarea" ? (
              <>
                <Textarea
                  name={item.name}
                  required={item?.required}
                  rows={5}
                  maxLength={2000}
                  onChange={handleInputChange}
                />
                <label className="text-xs text-gray-400">
                  Note: Max 2000 Words
                </label>
              </>
            ) : item.field === "select" ? (
              <Popover
                open={open[item.name] || false}
                onOpenChange={(state) =>
                  setOpen({ ...open, [item.name]: state })
                }
              >
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open[item.name] || false}
                    className="w-full justify-between"
                  >
                    {values[item.name]
                      ? item.options.find(
                          (option: Option) => option.value === values[item.name]
                        )?.label
                      : item.label + "..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[465px] p-0">
                  <div className="p-2">
                    {item.options.map((option: Option) => (
                      <div
                        key={option.value}
                        className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() =>
                          handleComboboxChange(item.name, option.value)
                        }
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            values[item.name] === option.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {option.label}
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            ) : null}
          </div>
        ))}
        <Button type="submit" className="w-full py-6" disabled={loading}>
          {loading && <Loader2Icon className="animate-spin" />}
          Generate Content
        </Button>
      </form>
    </div>
  );
}

export default FormSection;
