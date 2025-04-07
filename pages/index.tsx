import { Chart } from "@/components/secondary";
import { SystemLayout } from "@/layout";

export default function Home() {
  return (
    <SystemLayout>
      <div>
        Hey
      </div>
      <div className="h-lvh">
      <p className="text-4xl font-bold ">USD 120,500.00</p>
        <Chart/>
      </div>

    </SystemLayout>
  );
}
