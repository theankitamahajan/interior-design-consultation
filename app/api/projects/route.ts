import projects from "@/data/projects.json";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  return new Response(JSON.stringify(projects), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });
}
