import WantedLogo from "./components/WantedLogo";

export default function Home() {
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

      {/* CTA Section */}
      <section
        className="py-20 px-6 text-center bg-bg"
        style={{ borderTop: "1px solid var(--semantic-line-solid-alternative)" }}
      >
        <h2
          className="font-semibold text-text mb-3"
          style={{ fontSize: "22px", lineHeight: "30px", letterSpacing: "-0.0194em" }}
        >
          궁금한 점이 있으신가요?
        </h2>
        <p
          className="mb-8"
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "0.0057em",
            color: "var(--semantic-label-alternative)",
          }}
        >
          팀 업무나 협업에 대해 언제든지 문의해 주세요.
        </p>
        <a
          href="mailto:chaehyun.kim@wantedlab.com"
          className="inline-block text-white font-semibold rounded-lg transition-colors duration-100"
          style={{
            background: "var(--semantic-primary-normal)",
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "0.0145em",
            padding: "12px 24px",
          }}
          onMouseEnter={undefined}
        >
          문의하기
        </a>
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
