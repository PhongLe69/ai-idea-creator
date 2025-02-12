"use client";

import React, { useEffect, useRef, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Copy, Download, ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import jsPDF from "jspdf";

interface Props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: Props) {
  const editorRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  // PDF Download Function
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

  // Function to open LaTeX code in Overleaf using Base64 Data URL
  const handleOpenInOverleaf = () => {
    if (!aiOutput.trim()) {
      alert("No content to open in Overleaf!");
      return;
    }

    setIsLoading(true);

    try {
      // Convert LaTeX code to Base64
      const base64Content = btoa(unescape(encodeURIComponent(aiOutput)));
      const dataUrl = `data:application/x-tex;base64,${base64Content}`;

      // Open Overleaf with Base64 Data URL
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

  const [viewText, setViewText] = useState("PDF");
  const [latexCode, setLatexCode] = useState("");

  const convertTo = () => {
    if (viewText === "PDF") {
      setViewText("Latex");
      const base64Content = btoa(unescape(encodeURIComponent(aiOutput)));
      const dataUrl = `data:application/x-tex;base64,${base64Content}`;
      setLatexCode(
        `https://www.overleaf.com/docs?snip_uri=${encodeURIComponent(dataUrl)}`
      );
    } else {
      setViewText("PDF");
      setLatexCode("");
    }
  };

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        <div className="flex gap-2">
          <Button variant="outline" className="flex gap-2" onClick={convertTo}>
            <Eye className="w-4 h-4" /> {viewText}
          </Button>

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
          <Button
            variant="outline"
            className="flex gap-2"
            onClick={() => navigator.clipboard.writeText(aiOutput)}
          >
            <Copy className="w-4 h-4" /> Copy
          </Button>
        </div>
      </div>
      {latexCode ? (
        <iframe
          src={latexCode}
          width="100%"
          height="300"
          style={{ border: "1px solid black" }}
        ></iframe>
      ) : (
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
      )}
    </div>
  );
}

export default OutputSection;
