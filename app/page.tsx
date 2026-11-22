import { HomePage } from "@/components/HomePage";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("fr");

export default function Page() {
  return <HomePage locale="fr" />;
}
