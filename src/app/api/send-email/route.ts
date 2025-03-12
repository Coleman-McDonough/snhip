import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message, phone, captchaToken } = await request.json();

    // Verify hCaptcha token
    const captchaResponse = await fetch(`https://api.hcaptcha.com/siteverify`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.HCAPTCHA_SECRET_KEY!,
        response: captchaToken,
      }).toString(),
    });

    const captchaData = await captchaResponse.json();
    console.log("🔍 hCaptcha Verification Response:", captchaData);

    if (!captchaData.success) {
      return NextResponse.json(
        { error: "CAPTCHA verification failed", details: captchaData },
        { status: 400 },
      );
    }

    // (Your existing email sending logic stays here)
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Error verifying CAPTCHA:", error);
    return NextResponse.json(
      { error: "Server error", details: error.message },
      { status: 500 },
    );
  }
}
