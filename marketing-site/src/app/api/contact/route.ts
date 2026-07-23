import { NextResponse } from "next/server";
import { GoogleAuth } from "google-auth-library";

import { contactFormSchema, type ContactFormValues } from "@/lib/schemas/contact";

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_RANGE = process.env.GOOGLE_SHEET_RANGE ?? "Sheet1!A:H";
const SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

async function appendLeadToSheet(data: ContactFormValues) {
  if (!SHEET_ID || !SERVICE_ACCOUNT_EMAIL || !PRIVATE_KEY) {
    console.warn(
      "[contact] Google Sheets is not configured (missing GOOGLE_SHEET_ID, " +
        "GOOGLE_SERVICE_ACCOUNT_EMAIL, or GOOGLE_PRIVATE_KEY); skipping sheet write."
    );
    return;
  }

  const auth = new GoogleAuth({
    credentials: {
      client_email: SERVICE_ACCOUNT_EMAIL,
      private_key: PRIVATE_KEY,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const client = await auth.getClient();
  const accessToken = (await client.getAccessToken()).token;

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(
    SHEET_RANGE
  )}:append?valueInputOption=USER_ENTERED`;

  const row = [
    new Date().toISOString(),
    data.name,
    data.email,
    data.phone ?? "",
    data.businessName,
    data.storeCount,
    data.plan,
    data.message ?? "",
  ];

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ values: [row] }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Google Sheets append failed: ${response.status} ${text}`);
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  const result = contactFormSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { ok: false, error: result.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  console.log("[contact] new lead:", result.data);

  try {
    await appendLeadToSheet(result.data);
  } catch (error) {
    // Don't fail the visitor's submission just because the sheet write failed.
    // The console log above still captures the lead so it isn't lost outright.
    console.error("[contact] failed to write lead to Google Sheet:", error);
  }

  return NextResponse.json({ ok: true });
}
