import { NextResponse } from "next/server";

import { contactFormSchema } from "@/lib/schemas/contact";

export async function POST(request: Request) {
  const body = await request.json();
  const result = contactFormSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { ok: false, error: result.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  // TODO(phase-2): wire to real lead-capture backend/email service
  console.log("[contact] new lead:", result.data);

  return NextResponse.json({ ok: true });
}
