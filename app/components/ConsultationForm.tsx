"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitConsultation, type ConsultationState } from "@/app/actions/consultation";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full text-white font-semibold rounded-lg transition-opacity duration-100"
      style={{
        background: "var(--semantic-primary-normal)",
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "0.0145em",
        padding: "13px 24px",
        opacity: pending ? 0.6 : 1,
        cursor: pending ? "not-allowed" : "pointer",
      }}
    >
      {pending ? "전송 중..." : "상담 신청하기"}
    </button>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 14px",
  borderRadius: "8px",
  border: "1px solid var(--semantic-line-solid-normal)",
  fontSize: "14px",
  lineHeight: "22px",
  letterSpacing: "0.0145em",
  color: "var(--semantic-label-normal)",
  background: "var(--semantic-background-normal)",
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "13px",
  fontWeight: 600,
  letterSpacing: "0.0194em",
  color: "var(--semantic-label-normal)",
  marginBottom: "6px",
};

export default function ConsultationForm() {
  const [state, formAction] = useActionState<ConsultationState, FormData>(
    submitConsultation,
    {}
  );

  if (state.success) {
    return (
      <div
        className="text-center py-12 px-8 rounded-2xl"
        style={{ border: "1px solid var(--semantic-line-solid-normal)", background: "rgba(0,102,255,0.03)" }}
      >
        <div className="text-4xl mb-4">✅</div>
        <p
          className="font-semibold text-text mb-2"
          style={{ fontSize: "18px", letterSpacing: "-0.002em" }}
        >
          상담 신청이 완료되었습니다
        </p>
        <p style={{ fontSize: "14px", lineHeight: "22px", color: "var(--semantic-label-alternative)" }}>
          글로벌파트너팀에서 빠르게 연락드리겠습니다.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5">
      {/* 이름 + 이메일 */}
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" style={labelStyle}>
            이름 <span style={{ color: "var(--semantic-primary-normal)" }}>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="홍길동"
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>
            이메일 <span style={{ color: "var(--semantic-primary-normal)" }}>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="email@company.com"
            style={inputStyle}
          />
        </div>
      </div>

      {/* 회사명 + 연락처 */}
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="company" style={labelStyle}>회사명</label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="(주)원티드랩"
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="phone" style={labelStyle}>연락처</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="010-0000-0000"
            style={inputStyle}
          />
        </div>
      </div>

      {/* 문의 유형 */}
      <div>
        <label style={labelStyle}>
          문의 유형 <span style={{ color: "var(--semantic-primary-normal)" }}>*</span>
        </label>
        <div className="flex gap-3">
          {(["Global Biz", "HR Biz"] as const).map((type) => (
            <label
              key={type}
              className="flex items-center gap-2 cursor-pointer"
              style={{ fontSize: "14px", letterSpacing: "0.0145em", color: "var(--semantic-label-normal)" }}
            >
              <input
                type="radio"
                name="inquiry_type"
                value={type}
                required
                style={{ accentColor: "var(--semantic-primary-normal)" }}
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      {/* 문의 내용 */}
      <div>
        <label htmlFor="message" style={labelStyle}>
          문의 내용 <span style={{ color: "var(--semantic-primary-normal)" }}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="문의하실 내용을 자유롭게 작성해 주세요."
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </div>

      {state.error && (
        <p
          style={{
            fontSize: "13px",
            letterSpacing: "0.0194em",
            color: "#e5213e",
            padding: "10px 14px",
            background: "rgba(229,33,62,0.06)",
            borderRadius: "8px",
          }}
        >
          {state.error}
        </p>
      )}

      <SubmitButton />
    </form>
  );
}
