import { cn } from "../lib/utils";

type ShellProps = React.HTMLAttributes<HTMLDivElement>;

function Shell({ children, className }: ShellProps) {
  return (
    <div className={cn("w-full backdrop-blur-[2px]", className)}>
      {children}
    </div>
  );
}

export { Shell };
