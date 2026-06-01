import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const filePath = path.join(process.cwd(), "data", "submissions.json");

    let existing = [];

    try {
      if (fs.existsSync(filePath)) {
        existing = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      }
    } catch {
      existing = [];
    }

    const newSubmission = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
    };

    existing.push(newSubmission);

    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));

    return NextResponse.json({
      success: true,
      data: newSubmission,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: "Submission failed" },
      { status: 500 }
    );
  }
}