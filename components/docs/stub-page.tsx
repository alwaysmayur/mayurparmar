import Breadcrumbs, { type Crumb } from "@/components/docs/breadcrumbs";

export default function StubPage({
  breadcrumbs,
  title,
  description,
}: {
  breadcrumbs: Crumb[];
  title: string;
  description: string;
}) {
  return (
    <div>
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="text-[34px] font-bold tracking-tight text-foreground sm:text-[40px]">{title}</h1>
      <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-muted-foreground">{description}</p>
    </div>
  );
}
