import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen items-center  justify-center p:8 md:12 xl:p-24">
      {children}
    </main>
  );
};
