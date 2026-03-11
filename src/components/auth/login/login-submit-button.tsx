import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";

type LoginSubmitButtonProps = {
  isPending?: boolean;
};

export function LoginSubmitButton({
  isPending = false,
}: LoginSubmitButtonProps) {
  return (
    <Button
      type="submit"
      disabled={isPending}
      className="h-15 w-full rounded-lg bg-primary font-medium text-white hover:bg-primary/90"
    >
      {isPending ? <Loader /> : "Login"}
    </Button>
  );
}
