export const runtime = 'edge';

const FORMSPARK_URL = "https://submit-form.com/kQr8f17hi";
const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // In development, just log and return success to avoid external network calls
    if (IS_DEVELOPMENT) {
      console.log("Development form submission:", body);
      return new Response(JSON.stringify({ success: true, message: "Form submitted (dev mode)" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    const res = await fetch(FORMSPARK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(body),
    });

    const text = await res.text();

    return new Response(text, {
      status: res.status,
      headers: { "Content-Type": res.headers.get("content-type") || "application/json" },
    });
  } catch (err) {
    console.error("Form API error:", err);
    return new Response(JSON.stringify({ success: false, error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
