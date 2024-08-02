"use client";

const Form = ({
  children,
  onSubmit,
}: {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <form
      className="bg-muted p-4 rounded-md flex flex-col gap-2"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

const FormDivider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-2 items-center [&>hr]:flex-1 [&>hr]:w-full [&>hr]:border-white/10">
      <hr />
      {children}
      <hr />
    </div>
  );
};

export { Form, FormDivider };
