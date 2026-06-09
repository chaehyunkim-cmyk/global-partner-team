"use server";

import { initDb, sql } from "@/app/lib/db";

export type ConsultationState = {
  success?: boolean;
  error?: string;
};

export async function submitConsultation(
  _prevState: ConsultationState,
  formData: FormData
): Promise<ConsultationState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const company = (formData.get("company") as string)?.trim() || null;
  const phone = (formData.get("phone") as string)?.trim() || null;
  const inquiryType = formData.get("inquiry_type") as string;
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !inquiryType || !message) {
    return { error: "필수 항목을 모두 입력해 주세요." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "올바른 이메일 주소를 입력해 주세요." };
  }

  try {
    await initDb();
    await sql`
      INSERT INTO consultations (name, email, company, phone, inquiry_type, message)
      VALUES (${name}, ${email}, ${company}, ${phone}, ${inquiryType}, ${message})
    `;
    return { success: true };
  } catch (err) {
    console.error("consultation insert error:", err);
    return { error: "저장 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." };
  }
}
