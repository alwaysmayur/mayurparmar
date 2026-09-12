"use client";

import { useState } from "react";

export default function CodeBlock({
  code,
  language = "ts",
}: {
  code: string;
  language?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable — ignore
    }
  };

  return (
    <div className="overflow-hidden rounded-lg border border-code-border bg-code">
      <div className="flex items-center justify-between border-b border-code-border px-4 py-2">
        <span className="font-mono text-[12px] text-subtle-foreground">{language}</span>
        <button
          type="button"
          onClick={copy}
          className="font-mono text-[12px] text-subtle-foreground transition-colors hover:text-foreground"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-[1.65] text-code-foreground">
        <code>{code}</code>
      </pre>
    </div>
  );
}
