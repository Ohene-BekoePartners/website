import { redirect } from "next/navigation";

/** Default insights landing: first subsection (same pattern as Our Team → Attorneys). */
export default function InsightsIndexPage() {
  redirect("/insights/firm-news");
}
