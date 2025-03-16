"use client";

import React, { useEffect, useRef, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Copy, Download, ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import jsPDF from "jspdf";
import { useSearchParams } from "next/navigation";

interface Props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: Props) {
  const editorRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useSearchParams();
  const queryType = searchParams?.get("type");

  const removeMarkdownSyntax = (text: string): string => {
    return text
      .replace(/^```latex\s*/, "")
      .replace(/\s*```$/, "")
      .replace(/^```json\s*/, "");
  };

  const handleDownloadPDF = () => {
    if (!aiOutput.trim()) {
      alert("No content to download!");
      return;
    }

    try {
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const margin = 15;

      pdf.setFontSize(11);
      pdf.setFont("helvetica", "normal");

      const lines = pdf.splitTextToSize(aiOutput, pageWidth - margin * 2);
      pdf.text(lines, margin, margin, { align: "left" });

      pdf.save("latex-content.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    }
  };

  const handleOpenInOverleaf = () => {
    if (!aiOutput.trim()) {
      alert("No content to open in Overleaf!");
      return;
    }

    setIsLoading(true);

    try {
      const cleanedOutput = removeMarkdownSyntax(aiOutput);

      const base64Content = btoa(unescape(encodeURIComponent(cleanedOutput)));
      const dataUrl = `data:application/x-tex;base64,${base64Content}`;

      const overleafUrl = `https://www.overleaf.com/docs?snip_uri=${encodeURIComponent(
        dataUrl
      )}`;
      window.open(overleafUrl, "_blank");
    } catch (error) {
      console.error("Error opening in Overleaf:", error);
      alert("Error opening in Overleaf. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput]);

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        <div className="flex gap-2">
          {queryType === "latex" ? (
            <Button
              variant="outline"
              className="flex gap-2"
              onClick={handleOpenInOverleaf}
              disabled={isLoading}
            >
              {isLoading ? (
                "Loading..."
              ) : (
                <>
                  <ExternalLink className="w-4 h-4" /> Open in Overleaf
                </>
              )}
            </Button>
          ) : null}

          <Button
            variant="outline"
            className="flex gap-2"
            onClick={handleDownloadPDF}
          >
            <Download className="w-4 h-4" /> Download PDF
          </Button>

          <Button
            variant="outline"
            className="flex gap-2"
            onClick={() => navigator.clipboard.writeText(aiOutput)}
          >
            <Copy className="w-4 h-4" /> Copy
          </Button>
        </div>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
        onChange={() =>
          console.log(editorRef.current.getInstance().getMarkdown())
        }
      />
    </div>
  );
}

export default OutputSection;
