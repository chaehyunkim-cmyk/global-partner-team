import WantedLogo from "./components/WantedLogo";
import ConsultationForm from "./components/ConsultationForm";

export default function Home() {
  const teamMembers = {
    leader: { name: "카리나", role: "팀장" },
    globalBiz: [
      { name: "심은경" },
      { name: "브라보" },
      { name: "한소희" },
      { name: "박지민" },
      { name: "손흥민" },
    ],
    hrBiz: [
      { name: "박시연" },
      { name: "양파쿵야" },
    ],
  };

  const teamTasks = [
    {
      icon: "🌏",
      title: "Global Biz",
      description:
        "글로벌 시장을 대상으로 비즈니스 기회를 발굴하고 파트너십을 구축합니다. 해외 기업과의 협력을 통해 새로운 성장 동력을 만들어 나갑니다.",
    },
    {
      icon: "👥",
      title: "HR Biz",
      description:
        "기업의 채용 니즈에 맞는 인재 솔루션을 제공합니다. HR 파트너로서 고객사의 인재 확보와 조직 성장을 함께 지원합니다.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col" style={{ background: "var(--semantic-background-alternative)" }}>

      {/* Header */}
      <header
        className="py-24 px-6 text-center"
        style={{
          background: "linear-gradient(160deg, rgba(0,102,255,0.07) 0%, rgba(0,102,255,0.03) 50%, #ffffff 100%)",
          borderBottom: "1px solid var(--semantic-line-solid-alternative)",
        }}
      >
        <div className="flex justify-center mb-8">
          <WantedLogo className="text-[#171719]" />
        </div>
        <span
          className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-6"
          style={{
            background: "rgba(0, 102, 255, 0.08)",
            color: "var(--semantic-primary-normal)",
            letterSpacing: "0.0252em",
          }}
        >
          Wanted Lab
        </span>
        <h1
          className="font-bold text-text mb-4"
          style={{ fontSize: "40px", lineHeight: "52px", letterSpacing: "-0.0282em" }}
        >
          글로벌파트너팀
        </h1>
        <p
          className="mx-auto max-w-md"
          style={{
            fontSize: "16px",
            lineHeight: "26px",
            letterSpacing: "0.0057em",
            color: "var(--semantic-label-alternative)",
          }}
        >
          글로벌 시장과 HR 비즈니스를 연결하는 파트너십 전문 팀입니다.
        </p>
      </header>

      {/* Mission Section */}
      <section
        className="py-20 px-6 bg-bg"
        style={{ borderBottom: "1px solid var(--semantic-line-solid-alternative)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-semibold text-text mb-4"
            style={{ fontSize: "22px", lineHeight: "30px", letterSpacing: "-0.0194em" }}
          >
            팀 미션
          </h2>
          <p
            className="mx-auto max-w-xl mb-14"
            style={{ fontSize: "16px", lineHeight: "26px", letterSpacing: "0.0057em", color: "var(--semantic-label-alternative)" }}
          >
            글로벌 시장과 최고의 인재를 연결해 기업의 성장을 가속합니다.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { icon: "🌐", title: "글로벌 시각", desc: "세계 시장의 흐름을 읽고 새로운 비즈니스 기회를 먼저 발굴합니다." },
              { icon: "🤝", title: "파트너십", desc: "고객사의 성공을 우리의 성공으로 여기는 진정한 파트너가 됩니다." },
              { icon: "⚡", title: "실행력", desc: "빠르게 시도하고 데이터로 검증하며 결과로 증명합니다." },
            ].map((v) => (
              <div
                key={v.title}
                className="rounded-xl p-6 text-left"
                style={{ border: "1px solid var(--semantic-line-solid-normal)", boxShadow: "var(--semantic-shadow-xsmall)" }}
              >
                <div className="text-2xl mb-3">{v.icon}</div>
                <p
                  className="font-semibold text-text mb-2"
                  style={{ fontSize: "15px", letterSpacing: "0.0096em" }}
                >
                  {v.title}
                </p>
                <p style={{ fontSize: "13px", lineHeight: "20px", letterSpacing: "0.0194em", color: "var(--semantic-label-alternative)" }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tasks Section */}
      <section className="flex-1 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-center font-semibold text-text mb-10"
            style={{ fontSize: "22px", lineHeight: "30px", letterSpacing: "-0.0194em" }}
          >
            우리 팀이 하는 일
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {teamTasks.map((task, index) => (
              <div
                key={index}
                className="bg-bg rounded-xl p-8 transition-shadow duration-150 hover:shadow-md"
                style={{
                  border: "1px solid var(--semantic-line-solid-normal)",
                  boxShadow: "var(--semantic-shadow-xsmall)",
                }}
              >
                <div className="text-3xl mb-5">{task.icon}</div>
                <h3
                  className="font-semibold text-text mb-3"
                  style={{ fontSize: "18px", lineHeight: "26px", letterSpacing: "-0.002em" }}
                >
                  {task.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "22px",
                    letterSpacing: "0.0145em",
                    color: "var(--semantic-label-alternative)",
                  }}
                >
                  {task.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 px-6 bg-bg" style={{ borderBottom: "1px solid var(--semantic-line-solid-alternative)" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-center font-semibold text-text mb-10"
            style={{ fontSize: "22px", lineHeight: "30px", letterSpacing: "-0.0194em" }}
          >
            팀 멤버
          </h2>

          {/* 팀장 */}
          <div className="flex justify-center mb-8">
            <div
              className="flex items-center gap-4 rounded-xl px-8 py-5"
              style={{
                background: "rgba(0,102,255,0.05)",
                border: "1px solid rgba(0,102,255,0.2)",
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                style={{ background: "var(--semantic-primary-normal)" }}
              >
                {teamMembers.leader.name[0]}
              </div>
              <div>
                <p
                  className="font-semibold text-text"
                  style={{ fontSize: "16px", letterSpacing: "0.0057em" }}
                >
                  {teamMembers.leader.name}
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    letterSpacing: "0.0252em",
                    color: "var(--semantic-primary-normal)",
                    fontWeight: 600,
                  }}
                >
                  {teamMembers.leader.role}
                </p>
              </div>
            </div>
          </div>

          {/* 팀원 그룹 */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Global Biz */}
            <div
              className="rounded-xl p-6"
              style={{ border: "1px solid var(--semantic-line-solid-normal)", boxShadow: "var(--semantic-shadow-xsmall)" }}
            >
              <p
                className="font-semibold mb-4"
                style={{ fontSize: "13px", letterSpacing: "0.0194em", color: "var(--semantic-primary-normal)" }}
              >
                🌏 Global Biz
              </p>
              <div className="flex flex-col gap-3">
                {teamMembers.globalBiz.map((m) => (
                  <div key={m.name} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0"
                      style={{ background: "var(--semantic-fill-normal)", color: "var(--semantic-label-normal)" }}
                    >
                      {m.name[0]}
                    </div>
                    <span style={{ fontSize: "14px", letterSpacing: "0.0145em", color: "var(--semantic-label-normal)" }}>
                      {m.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* HR Biz */}
            <div
              className="rounded-xl p-6"
              style={{ border: "1px solid var(--semantic-line-solid-normal)", boxShadow: "var(--semantic-shadow-xsmall)" }}
            >
              <p
                className="font-semibold mb-4"
                style={{ fontSize: "13px", letterSpacing: "0.0194em", color: "var(--semantic-primary-normal)" }}
              >
                👥 HR Biz
              </p>
              <div className="flex flex-col gap-3">
                {teamMembers.hrBiz.map((m) => (
                  <div key={m.name} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0"
                      style={{ background: "var(--semantic-fill-normal)", color: "var(--semantic-label-normal)" }}
                    >
                      {m.name[0]}
                    </div>
                    <span style={{ fontSize: "14px", letterSpacing: "0.0145em", color: "var(--semantic-label-normal)" }}>
                      {m.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section
        className="py-20 px-6 bg-bg"
        style={{ borderBottom: "1px solid var(--semantic-line-solid-alternative)" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-semibold text-text mb-3 text-center"
            style={{ fontSize: "22px", lineHeight: "30px", letterSpacing: "-0.0194em" }}
          >
            협업 안내
          </h2>
          <p
            className="text-center mb-10"
            style={{ fontSize: "16px", lineHeight: "26px", letterSpacing: "0.0057em", color: "var(--semantic-label-alternative)" }}
          >
            이런 경우 글로벌파트너팀에 연락해 주세요.
          </p>

          <div className="grid gap-3 md:grid-cols-2">
            {[
              { icon: "🌍", text: "해외 사업 기회 탐색 또는 글로벌 파트너십이 필요할 때" },
              { icon: "🧑‍💼", text: "채용 및 HR 솔루션 도입을 검토하고 있을 때" },
              { icon: "🔗", text: "타 팀과의 글로벌 협업 창구가 필요할 때" },
              { icon: "💬", text: "해외 시장 정보나 파트너사 레퍼런스가 필요할 때" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-4 rounded-xl p-5"
                style={{ background: "var(--semantic-background-alternative)", border: "1px solid var(--semantic-line-solid-alternative)" }}
              >
                <span className="text-xl mt-0.5 flex-shrink-0">{item.icon}</span>
                <p style={{ fontSize: "14px", lineHeight: "22px", letterSpacing: "0.0145em", color: "var(--semantic-label-normal)" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section
        className="py-20 px-6 bg-bg"
        style={{ borderTop: "1px solid var(--semantic-line-solid-alternative)" }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-center font-semibold text-text mb-3"
            style={{ fontSize: "22px", lineHeight: "30px", letterSpacing: "-0.0194em" }}
          >
            상담 신청
          </h2>
          <p
            className="text-center mb-10"
            style={{
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "0.0057em",
              color: "var(--semantic-label-alternative)",
            }}
          >
            팀 업무나 협업에 대해 궁금한 점을 남겨 주세요.
          </p>
          <ConsultationForm />
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-5 text-center"
        style={{
          borderTop: "1px solid var(--semantic-line-solid-alternative)",
          fontSize: "12px",
          lineHeight: "16px",
          letterSpacing: "0.0252em",
          color: "var(--semantic-label-assistive)",
        }}
      >
        © 2026 Wanted Lab. All rights reserved.
      </footer>
    </main>
  );
}
