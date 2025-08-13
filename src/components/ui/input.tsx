import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn("rounded-lg border-2 border-gray-300 px-4 py-2", className)}
      {...props}
    />
  );
}

export { Input };
