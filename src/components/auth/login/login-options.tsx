import Link from "next/link";

export function LoginOptions() {
  return (
    <div className="flex w-full justify-end">
      <Link
        href="/forget-password"
        className="text-base leading-6 font-medium text-dark transition-colors hover:text-primary"
      >
        Forget Password ?
      </Link>
    </div>
  );
}
