export function LoginHeader() {
  return (
    <div className="flex w-full max-w-[36rem] flex-col gap-2">
      <h1 className="text-[2rem] leading-[1.5] font-bold tracking-[-0.04em] text-dark">
        Welcome back to <span className="text-primary">cozy bakes admin.</span>
      </h1>
      <p className="text-lg leading-[1.5] font-medium text-muted-text">
        Your management dashboard is ready. Sign in to oversee orders, track
        inventory, and manage your bakery&apos;s operations with ease
      </p>
    </div>
  );
}
