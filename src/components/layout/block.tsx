// Utilities
import { cn } from "@/lib/utils";

const Block = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn("bg-muted p-4 rounded-md flex flex-col gap-2", className)}
    >
      {children}
    </div>
  );
};

const BlockDivider = ({ className }: { className?: string }) => {
  return <hr className={cn("border-white/10", className)} />;
};

export { Block, BlockDivider };
