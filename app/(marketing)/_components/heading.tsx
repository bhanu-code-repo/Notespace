"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, & Plans. Unified. Welcome to{" "}
        <span className="underline">Notespace</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Notespace is the connected workspace where <br />
        better, faster, smarter ideas come to life.
      </h3>
      <Button>
        Enter Notespace <ArrowRight className="ml-2" />
      </Button>
    </div>
  );
};
