import { useState } from "react";

const questions = [
  // SECTION 1: PERFORMANCE BASELINE
  {
    id: "p1",
    section: "PERFORMANCE BASELINE",
    sectionDesc: "How your system performs under load",
    maps_to: "recovery_capacity",
    text: "During a round of golf, how would you describe your physical performance from the front nine to the back nine?",
    type: "single",
    options: [
      { label: "Consistent throughout — I finish as strong as I start", value: 1 },
      { label: "Slight drop in sharpness or power by holes 14-18", value: 2 },
      { label: "Noticeable fatigue in my swing by the back nine", value: 3 },
      { label: "I'm fighting my body by the end of most rounds", value: 4 },
    ],
  },
  {
    id: "p2",
    section: "PERFORMANCE BASELINE",
    sectionDesc: "How your system performs under load",
    maps_to: "inflammation_musculoskeletal",
    text: "After a heavy training day followed by 18 holes, your body the next morning feels:",
    type: "single",
    options: [
      { label: "Fine — recovered and ready", value: 1 },
      { label: "A little stiff but loosens up within an hour", value: 2 },
      { label: "Noticeably sore, takes most of the morning", value: 3 },
      { label: "Beat up — I'm modifying what I planned to do", value: 4 },
    ],
  },
  {
    id: "p3",
    section: "PERFORMANCE BASELINE",
    sectionDesc: "How your system performs under load",
    maps_to: "posterior_chain_glute",
    text: "Where in your body do you most commonly feel fatigue or tightness during or after golf?",
    type: "multi",
    options: [
      { label: "Lower back", value: "lower_back" },
      { label: "Hips / glutes", value: "hips" },
      { label: "Shoulders / upper back", value: "shoulders" },
      { label: "Knees", value: "knees" },
      { label: "Neck", value: "neck" },
      { label: "I don't notice specific areas", value: "none" },
    ],
  },
  {
    id: "p4",
    section: "PERFORMANCE BASELINE",
    sectionDesc: "How your system performs under load",
    maps_to: "cortisol_recovery",
    text: "How many days per week does your body feel genuinely recovered — meaning you'd describe yourself as 'fresh'?",
    type: "single",
    options: [
      { label: "5-7 days — I recover well", value: 1 },
      { label: "3-4 days", value: 2 },
      { label: "1-2 days", value: 3 },
      { label: "Rarely — I'm always running on something", value: 4 },
    ],
  },

  // SECTION 2: ENERGY ARCHITECTURE
  {
    id: "e1",
    section: "ENERGY ARCHITECTURE",
    sectionDesc: "How your fuel system runs across the day",
    maps_to: "adrenal_cortisol",
    text: "Describe your natural energy arc on a typical day:",
    type: "single",
    options: [
      { label: "Strong in the morning, steady through the day, winds down naturally at night", value: 1 },
      { label: "Slow start, builds through the morning, solid midday, fades by evening", value: 2 },
      { label: "Good morning energy, noticeable dip mid-afternoon, second wind at night", value: 3 },
      { label: "Inconsistent — hard to predict day to day", value: 4 },
    ],
  },
  {
    id: "e2",
    section: "ENERGY ARCHITECTURE",
    sectionDesc: "How your fuel system runs across the day",
    maps_to: "adrenal_load",
    text: "Without caffeine, how would you rate your baseline morning energy?",
    type: "single",
    options: [
      { label: "Solid — I could function well without it", value: 1 },
      { label: "Manageable but noticeably duller", value: 2 },
      { label: "Significantly lower — caffeine is load-bearing for my mornings", value: 3 },
      { label: "I don't go there", value: 4 },
    ],
  },
  {
    id: "e3",
    section: "ENERGY ARCHITECTURE",
    sectionDesc: "How your fuel system runs across the day",
    maps_to: "blood_sugar_adrenal",
    text: "At the end of a hard work day, before you've had a drink or decompressed, your body feels:",
    type: "single",
    options: [
      { label: "Tired but neutral — ready to shift gears", value: 1 },
      { label: "A low hum of tension that takes an hour to shake", value: 2 },
      { label: "Wired and tired at the same time — mentally on, physically depleted", value: 3 },
      { label: "I don't really notice a transition — I just keep going", value: 4 },
    ],
  },
  {
    id: "e4",
    section: "ENERGY ARCHITECTURE",
    sectionDesc: "How your fuel system runs across the day",
    maps_to: "testosterone_vitality",
    text: "Compared to 5 years ago, your drive — physical, mental, competitive — feels:",
    type: "single",
    options: [
      { label: "The same or stronger", value: 1 },
      { label: "Mostly the same with occasional dips I notice", value: 2 },
      { label: "Subtly but consistently lower than it used to be", value: 3 },
      { label: "Noticeably different — I'm aware of it", value: 4 },
    ],
  },

  // SECTION 3: SLEEP & RECOVERY QUALITY
  {
    id: "s1",
    section: "SLEEP & RECOVERY QUALITY",
    sectionDesc: "What happens when the body is supposed to rebuild",
    maps_to: "cortisol_sleep",
    text: "When you get into bed, how long does it typically take your mind to actually stop running?",
    type: "single",
    options: [
      { label: "Relatively quickly — I'm out within 15-20 minutes", value: 1 },
      { label: "30-45 minutes of mental activity before I drop off", value: 2 },
      { label: "An hour or more — my brain stays active for a while", value: 3 },
      { label: "I usually need something — phone, TV, a drink — to get there", value: 4 },
    ],
  },
  {
    id: "s2",
    section: "SLEEP & RECOVERY QUALITY",
    sectionDesc: "What happens when the body is supposed to rebuild",
    maps_to: "sleep_architecture",
    text: "How often do you wake up during the night?",
    type: "single",
    options: [
      { label: "Rarely — I sleep straight through", value: 1 },
      { label: "Once, usually to use the bathroom", value: 2 },
      { label: "2-3 times — light sleep most nights", value: 3 },
      { label: "Frequently — I don't think I sleep deeply", value: 4 },
    ],
  },
  {
    id: "s3",
    section: "SLEEP & RECOVERY QUALITY",
    sectionDesc: "What happens when the body is supposed to rebuild",
    maps_to: "hpa_axis",
    text: "On a night when you get more sleep than usual — say 7-8 hours — the next day you feel:",
    type: "single",
    options: [
      { label: "Noticeably sharper, better physically — a clear difference", value: 1 },
      { label: "Slightly better but not dramatically different", value: 2 },
      { label: "About the same — I don't notice a major change", value: 3 },
      { label: "That doesn't really happen", value: 4 },
    ],
  },
  {
    id: "s4",
    section: "SLEEP & RECOVERY QUALITY",
    sectionDesc: "What happens when the body is supposed to rebuild",
    maps_to: "liver_alcohol_sleep",
    text: "On nights when you've had drinks, compared to nights you haven't, your sleep feels:",
    type: "single",
    options: [
      { label: "About the same", value: 1 },
      { label: "I fall asleep faster but wake up earlier or lighter", value: 2 },
      { label: "Noticeably worse — less rested regardless of hours", value: 3 },
      { label: "I haven't paid attention to a difference", value: 4 },
    ],
  },

  // SECTION 4: SYSTEM LOAD & COGNITIVE
  {
    id: "c1",
    section: "COGNITIVE & SYSTEM LOAD",
    sectionDesc: "How your processing and bandwidth holds up",
    maps_to: "anxiety_nervous_system",
    text: "When you have nothing scheduled — a genuinely free hour with no obligations — you typically:",
    type: "single",
    options: [
      { label: "Relax into it easily — I can be still", value: 1 },
      { label: "Unwind eventually but it takes a bit", value: 2 },
      { label: "Find something to do — stillness feels unproductive", value: 3 },
      { label: "I'm not sure I experience that — there's always something", value: 4 },
    ],
  },
  {
    id: "c2",
    section: "COGNITIVE & SYSTEM LOAD",
    sectionDesc: "How your processing and bandwidth holds up",
    maps_to: "cortisol_cognitive",
    text: "How would you describe your mental sharpness and focus across a demanding workday?",
    type: "single",
    options: [
      { label: "Consistent — I can lock in and stay there", value: 1 },
      { label: "Strong but I need to reset mid-day to maintain it", value: 2 },
      { label: "Variable — some windows are sharp, others I'm running on fumes", value: 3 },
      { label: "I power through but it costs me", value: 4 },
    ],
  },
  {
    id: "c3",
    section: "COGNITIVE & SYSTEM LOAD",
    sectionDesc: "How your processing and bandwidth holds up",
    maps_to: "b12_cognitive",
    text: "When you're on the course in a competitive or high-stakes round, your mental game feels:",
    type: "single",
    options: [
      { label: "Clean — I can access the right headspace when I need it", value: 1 },
      { label: "Good most of the time, occasional intrusive thinking under pressure", value: 2 },
      { label: "I have to actively manage my mental state throughout", value: 3 },
      { label: "The mental side is where I lose the most ground", value: 4 },
    ],
  },
  {
    id: "c4",
    section: "COGNITIVE & SYSTEM LOAD",
    sectionDesc: "How your processing and bandwidth holds up",
    maps_to: "nervous_system_baseline",
    text: "When something unexpected and frustrating happens — a bad break, a work problem — how long until you're fully back to baseline?",
    type: "single",
    options: [
      { label: "Quickly — I shake it off and move on", value: 1 },
      { label: "A little while, but I don't carry it long", value: 2 },
      { label: "It sits with me longer than I'd like", value: 3 },
      { label: "I process it internally for a while before it clears", value: 4 },
    ],
  },

  // SECTION 5: BODY SIGNALS
  {
    id: "b1",
    section: "BODY SIGNALS",
    sectionDesc: "What your system is telling you below the surface",
    maps_to: "gut_liver",
    text: "How would you describe your digestion on a typical day?",
    type: "single",
    options: [
      { label: "No issues — works well consistently", value: 1 },
      { label: "Occasional bloating or sluggishness, especially after certain meals", value: 2 },
      { label: "Noticeable irregularity or discomfort fairly often", value: 3 },
      { label: "I just don't pay much attention to it", value: 4 },
    ],
  },
  {
    id: "b2",
    section: "BODY SIGNALS",
    sectionDesc: "What your system is telling you below the surface",
    maps_to: "inflammation_joint",
    text: "Outside of your lower back, do you notice stiffness or aching in other joints — knees, hips, shoulders — that lingers after activity?",
    type: "single",
    options: [
      { label: "No — my joints feel good", value: 1 },
      { label: "Occasionally after heavy training or back-to-back golf", value: 2 },
      { label: "More often than I'd expect for my age and fitness level", value: 3 },
      { label: "It's become part of the background noise", value: 4 },
    ],
  },
  {
    id: "b3",
    section: "BODY SIGNALS",
    sectionDesc: "What your system is telling you below the surface",
    maps_to: "hydration_electrolyte",
    text: "During and after heavy activity — a long round, a hard lift — how often do you experience cramping, tightness, or muscle fatigue beyond what the effort should explain?",
    type: "single",
    options: [
      { label: "Rarely — my muscles respond proportionally to the work", value: 1 },
      { label: "Occasionally, usually when I haven't slept well or eaten well", value: 2 },
      { label: "More than I think I should", value: 3 },
      { label: "Cramping or tightness is just part of my experience", value: 4 },
    ],
  },
  {
    id: "b4",
    section: "BODY SIGNALS",
    sectionDesc: "What your system is telling you below the surface",
    maps_to: "testosterone_mood",
    text: "On your best days — physically and mentally firing — how often does that version of you show up?",
    type: "single",
    options: [
      { label: "Most days — that's my baseline", value: 1 },
      { label: "Several times a week, not every day", value: 2 },
      { label: "Once or twice a week if I'm lucky", value: 3 },
      { label: "It's the exception, not the rule lately", value: 4 },
    ],
  },

  // SECTION 6: LIFESTYLE LOAD
  {
    id: "l1",
    section: "LIFESTYLE & LOAD MANAGEMENT",
    sectionDesc: "The inputs and outputs of your daily operating system",
    maps_to: "alcohol_recovery",
    text: "After a night of social drinking — good food, good company, several drinks — the next morning's training session:",
    type: "single",
    options: [
      { label: "Not really affected — I can perform close to normal", value: 1 },
      { label: "A bit off but I push through", value: 2 },
      { label: "Noticeably degraded — strength, focus, or motivation is lower", value: 3 },
      { label: "I modify or skip — it's not worth the quality of the session", value: 4 },
    ],
  },
  {
    id: "l2",
    section: "LIFESTYLE & LOAD MANAGEMENT",
    sectionDesc: "The inputs and outputs of your daily operating system",
    maps_to: "cortisol_work",
    text: "How often do you finish the workday feeling like you've genuinely discharged the load — clear head, ready to be present?",
    type: "single",
    options: [
      { label: "Most days — I can leave work at work", value: 1 },
      { label: "Sometimes — depends on what's happening", value: 2 },
      { label: "Rarely — it follows me into the evening", value: 3 },
      { label: "Work is always running in the background", value: 4 },
    ],
  },
  {
    id: "l3",
    section: "LIFESTYLE & LOAD MANAGEMENT",
    sectionDesc: "The inputs and outputs of your daily operating system",
    maps_to: "parasympathetic_access",
    text: "What does genuine decompression look like for you — the thing that actually resets you?",
    type: "multi",
    options: [
      { label: "Golf", value: "golf" },
      { label: "A drink or two", value: "alcohol" },
      { label: "Physical training", value: "training" },
      { label: "Being around people I love", value: "connection" },
      { label: "Quiet / alone time", value: "quiet" },
      { label: "Food / a good meal", value: "food" },
      { label: "I don't have a reliable reset", value: "none" },
    ],
  },
  {
    id: "l4",
    section: "LIFESTYLE & LOAD MANAGEMENT",
    sectionDesc: "The inputs and outputs of your daily operating system",
    maps_to: "longevity_self_awareness",
    text: "When you imagine yourself at 60 — still competing, still strong, still sharp — what feels like the biggest variable between that version of you and now?",
    type: "open",
    placeholder: "No right answer here. Just what comes to mind first.",
  },
];

const sectionOrder = [
  "PERFORMANCE BASELINE",
  "ENERGY ARCHITECTURE",
  "SLEEP & RECOVERY QUALITY",
  "COGNITIVE & SYSTEM LOAD",
  "BODY SIGNALS",
  "LIFESTYLE & LOAD MANAGEMENT",
];

export default function WellnessAssessment() {
  const [started, setStarted] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);
  const [copied, setCopied] = useState(false);

  const sectionQuestions = questions.filter(
    (q) => q.section === sectionOrder[currentSection]
  );

  const totalSections = sectionOrder.length;

  const handleAnswer = (id, value, type) => {
    if (type === "multi") {
      const current = answers[id] || [];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      setAnswers({ ...answers, [id]: updated });
    } else {
      setAnswers({ ...answers, [id]: value });
    }
  };

  const sectionComplete = sectionQuestions.every((q) => {
    if (q.type === "open") return (answers[q.id] || "").trim().length > 0;
    if (q.type === "multi") return (answers[q.id] || []).length > 0;
    return answers[q.id] !== undefined;
  });

  const handleNext = () => {
    if (currentSection < totalSections - 1) {
      setCurrentSection(currentSection + 1);
      window.scrollTo(0, 0);
    } else {
      setCompleted(true);
    }
  };

  const formatResults = () => {
    let output = "=== JJB PERFORMANCE ASSESSMENT RESULTS ===\n\n";
    sectionOrder.forEach((section) => {
      output += `--- ${section} ---\n`;
      questions
        .filter((q) => q.section === section)
        .forEach((q) => {
          const ans = answers[q.id];
          output += `\nQ: ${q.text}\n`;
          if (q.type === "open") {
            output += `A: ${ans || "No response"}\n`;
          } else if (q.type === "multi") {
            const labels = (ans || []).map(
              (v) => q.options.find((o) => o.value === v)?.label || v
            );
            output += `A: ${labels.join(", ") || "No response"}\n`;
            output += `[maps_to: ${q.maps_to}]\n`;
          } else {
            const label = q.options.find((o) => o.value === ans)?.label;
            output += `A (score ${ans}): ${label || "No response"}\n`;
            output += `[maps_to: ${q.maps_to}]\n`;
          }
        });
      output += "\n";
    });
    return output;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formatResults()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const progress = ((currentSection) / totalSections) * 100;

  if (!started) {
    return (
      <div style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Georgia', serif",
        padding: "40px 20px",
      }}>
        <div style={{ maxWidth: 620, width: "100%", textAlign: "center" }}>
          <div style={{
            display: "inline-block",
            border: "1px solid #333",
            padding: "6px 18px",
            marginBottom: 40,
            letterSpacing: "0.2em",
            fontSize: 11,
            color: "#666",
            fontFamily: "monospace",
            textTransform: "uppercase",
          }}>
            PERFORMANCE DIAGNOSTIC — CONFIDENTIAL
          </div>

          <h1 style={{
            fontSize: "clamp(32px, 6vw, 52px)",
            fontWeight: 400,
            color: "#f0ede6",
            lineHeight: 1.15,
            marginBottom: 24,
            letterSpacing: "-0.02em",
          }}>
            System Evaluation<br />
            <span style={{ color: "#8a7a5a", fontStyle: "italic" }}>Birdwell, J.</span>
          </h1>

          <p style={{
            color: "#888",
            fontSize: 16,
            lineHeight: 1.8,
            marginBottom: 48,
            maxWidth: 480,
            margin: "0 auto 48px",
          }}>
            This assessment evaluates how your body performs, recovers, and sustains output across the demands you place on it. There are no right answers — only accurate ones.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 1,
            background: "#1a1a1a",
            border: "1px solid #222",
            marginBottom: 48,
          }}>
            {[
              ["6", "Sections"],
              ["22", "Questions"],
              ["~8 min", "Duration"],
            ].map(([val, label]) => (
              <div key={label} style={{ padding: "20px 16px", background: "#0a0a0a", textAlign: "center" }}>
                <div style={{ fontSize: 24, color: "#c8b882", fontFamily: "monospace", marginBottom: 4 }}>{val}</div>
                <div style={{ fontSize: 11, color: "#555", letterSpacing: "0.15em", textTransform: "uppercase" }}>{label}</div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setStarted(true)}
            style={{
              background: "transparent",
              border: "1px solid #c8b882",
              color: "#c8b882",
              padding: "16px 48px",
              fontSize: 13,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
              fontFamily: "monospace",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              e.target.style.background = "#c8b882";
              e.target.style.color = "#0a0a0a";
            }}
            onMouseLeave={e => {
              e.target.style.background = "transparent";
              e.target.style.color = "#c8b882";
            }}
          >
            Begin Assessment
          </button>
        </div>
      </div>
    );
  }

  if (completed) {
    return (
      <div style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Georgia', serif",
        padding: "40px 20px",
      }}>
        <div style={{ maxWidth: 580, width: "100%", textAlign: "center" }}>
          <div style={{
            width: 64,
            height: 1,
            background: "#c8b882",
            margin: "0 auto 40px",
          }} />
          <h2 style={{
            fontSize: 36,
            fontWeight: 400,
            color: "#f0ede6",
            marginBottom: 16,
            letterSpacing: "-0.02em",
          }}>
            Assessment Complete
          </h2>
          <p style={{
            color: "#666",
            fontSize: 15,
            lineHeight: 1.8,
            marginBottom: 48,
          }}>
            Your responses have been recorded. Copy the results below and send them to Hannah for analysis and protocol development.
          </p>

          <div style={{
            background: "#111",
            border: "1px solid #222",
            padding: "24px",
            textAlign: "left",
            marginBottom: 32,
            maxHeight: 280,
            overflowY: "auto",
          }}>
            <pre style={{
              color: "#666",
              fontSize: 12,
              fontFamily: "monospace",
              lineHeight: 1.7,
              whiteSpace: "pre-wrap",
              margin: 0,
            }}>
              {formatResults()}
            </pre>
          </div>

          <button
            onClick={handleCopy}
            style={{
              background: copied ? "#c8b882" : "transparent",
              border: "1px solid #c8b882",
              color: copied ? "#0a0a0a" : "#c8b882",
              padding: "16px 48px",
              fontSize: 13,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
              fontFamily: "monospace",
              transition: "all 0.2s",
              width: "100%",
            }}
          >
            {copied ? "✓ Copied to Clipboard" : "Copy Results"}
          </button>
        </div>
      </div>
    );
  }

  const section = sectionOrder[currentSection];
  const sectionMeta = sectionQuestions[0];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0a",
      fontFamily: "'Georgia', serif",
      padding: "0",
    }}>
      {/* Progress bar */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 2, background: "#1a1a1a", zIndex: 100 }}>
        <div style={{
          height: "100%",
          width: `${progress}%`,
          background: "#c8b882",
          transition: "width 0.5s ease",
        }} />
      </div>

      <div style={{ maxWidth: 680, margin: "0 auto", padding: "80px 24px 60px" }}>
        {/* Section header */}
        <div style={{ marginBottom: 56 }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 20,
          }}>
            <span style={{
              fontFamily: "monospace",
              fontSize: 11,
              color: "#444",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}>
              {currentSection + 1} / {totalSections}
            </span>
            <div style={{ flex: 1, height: 1, background: "#1a1a1a" }} />
          </div>
          <h2 style={{
            fontSize: "clamp(22px, 4vw, 32px)",
            fontWeight: 400,
            color: "#f0ede6",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            marginBottom: 8,
          }}>
            {section}
          </h2>
          <p style={{ color: "#555", fontSize: 14, fontStyle: "italic" }}>
            {sectionMeta?.sectionDesc}
          </p>
        </div>

        {/* Questions */}
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {sectionQuestions.map((q, qi) => (
            <div key={q.id}>
              <p style={{
                color: "#c8c0b0",
                fontSize: "clamp(15px, 2.5vw, 18px)",
                lineHeight: 1.65,
                marginBottom: 24,
                fontWeight: 400,
              }}>
                <span style={{
                  color: "#444",
                  fontFamily: "monospace",
                  fontSize: 12,
                  marginRight: 12,
                }}>
                  {String(qi + 1).padStart(2, "0")}
                </span>
                {q.text}
              </p>

              {q.type === "open" ? (
                <textarea
                  value={answers[q.id] || ""}
                  onChange={(e) => handleAnswer(q.id, e.target.value, "open")}
                  placeholder={q.placeholder}
                  rows={4}
                  style={{
                    width: "100%",
                    background: "#111",
                    border: "1px solid #222",
                    borderRadius: 0,
                    color: "#c8c0b0",
                    fontSize: 15,
                    padding: "16px",
                    fontFamily: "'Georgia', serif",
                    resize: "vertical",
                    outline: "none",
                    lineHeight: 1.7,
                    boxSizing: "border-box",
                  }}
                  onFocus={e => e.target.style.borderColor = "#444"}
                  onBlur={e => e.target.style.borderColor = "#222"}
                />
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {q.options.map((opt) => {
                    const isSelected = q.type === "multi"
                      ? (answers[q.id] || []).includes(opt.value)
                      : answers[q.id] === opt.value;

                    return (
                      <button
                        key={opt.value}
                        onClick={() => handleAnswer(q.id, opt.value, q.type)}
                        style={{
                          background: isSelected ? "#1a1812" : "transparent",
                          border: `1px solid ${isSelected ? "#c8b882" : "#222"}`,
                          color: isSelected ? "#c8b882" : "#777",
                          padding: "14px 20px",
                          textAlign: "left",
                          cursor: "pointer",
                          fontSize: 14,
                          lineHeight: 1.5,
                          fontFamily: "'Georgia', serif",
                          transition: "all 0.15s",
                          display: "flex",
                          alignItems: "center",
                          gap: 14,
                        }}
                        onMouseEnter={e => {
                          if (!isSelected) {
                            e.currentTarget.style.borderColor = "#444";
                            e.currentTarget.style.color = "#aaa";
                          }
                        }}
                        onMouseLeave={e => {
                          if (!isSelected) {
                            e.currentTarget.style.borderColor = "#222";
                            e.currentTarget.style.color = "#777";
                          }
                        }}
                      >
                        <span style={{
                          width: 18,
                          height: 18,
                          border: `1px solid ${isSelected ? "#c8b882" : "#333"}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          fontSize: 10,
                          color: "#c8b882",
                        }}>
                          {isSelected ? "✓" : ""}
                        </span>
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Next button */}
        <div style={{ marginTop: 64, display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={handleNext}
            disabled={!sectionComplete}
            style={{
              background: sectionComplete ? "transparent" : "transparent",
              border: `1px solid ${sectionComplete ? "#c8b882" : "#2a2a2a"}`,
              color: sectionComplete ? "#c8b882" : "#333",
              padding: "14px 40px",
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: sectionComplete ? "pointer" : "not-allowed",
              fontFamily: "monospace",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              if (sectionComplete) {
                e.target.style.background = "#c8b882";
                e.target.style.color = "#0a0a0a";
              }
            }}
            onMouseLeave={e => {
              if (sectionComplete) {
                e.target.style.background = "transparent";
                e.target.style.color = "#c8b882";
              }
            }}
          >
            {currentSection === totalSections - 1 ? "Complete Assessment" : "Next Section →"}
          </button>
        </div>
      </div>
    </div>
  );
}
