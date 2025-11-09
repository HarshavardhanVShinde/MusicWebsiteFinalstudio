export const runtime = 'edge';

import { NextResponse } from "next/server";

const FORMSPARK_URL = "https://submit-form.com/kQr8f17hi";
const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("📧 Form Submission Received:", {
      timestamp: new Date().toISOString(),
      data: body,
    });

    // In development, just log and return success (DNS issue on local network)
    if (IS_DEVELOPMENT) {
      console.log("✅ Development mode: Form data logged successfully");
      console.log("Note: In production, this will be sent to Formspark");
      return NextResponse.json({ success: true, message: "Form submitted (dev mode)" });
    }

    // In production, send to Formspark
    try {
      const res = await fetch(FORMSPARK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error(`Formspark error: ${res.status}`);
      }

      console.log("✅ Form submitted to Formspark successfully");
      return NextResponse.json({ success: true, message: "Form submitted successfully" });
    } catch (fetchErr: any) {
      console.error("❌ Formspark submission failed:", fetchErr);
      return NextResponse.json(
        { success: false, error: "Failed to submit form" },
        { status: 502 }
      );
    }
  } catch (err: any) {
    console.error("❌ API error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
