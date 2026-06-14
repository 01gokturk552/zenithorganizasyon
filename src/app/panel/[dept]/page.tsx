import DeptPanel from "./DeptPanel";

export async function generateStaticParams() {
  return ["pr", "saha", "press", "guvenlik", "ik", "finans", "it"].map((dept) => ({ dept }));
}

export default function DeptPanelPage({ params }: { params: { dept: string } }) {
  return <DeptPanel dept={params.dept} />;
}
