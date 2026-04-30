/**
 * Dynamic circuit-style frame inspired by PrimeNode banner aesthetics.
 */
export default function CircuitDecor() {
  return (
    <>
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-[min(42vw,420px)] select-none"
        aria-hidden
      >
        <svg
          className="h-full w-full text-brand-blue"
          viewBox="0 0 260 900"
          preserveAspectRatio="xMinYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.82}
          >
            <path d="M -40 140 L 110 140 Q 132 140 132 162 L 132 320 Q 132 342 154 342 L 280 342" />
            <path d="M 48 -20 L 48 200 Q 48 222 70 222 L 190 222 Q 212 222 212 244 L 212 460" />
            <path d="M -24 540 L 96 540 Q 118 540 118 562 L 118 720 Q 118 742 148 742 L 300 742" />
            <path d="M 72 620 L 72 780 Q 72 802 96 802 L 220 802" />
          </g>
          <g fill="currentColor" opacity={0.85}>
            <circle cx="132" cy="320" r="10">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="70" cy="222" r="9">
              <animate attributeName="opacity" values="1;0.2;1" dur="2.4s" repeatCount="indefinite" />
            </circle>
            <circle cx="118" cy="562" r="9">
              <animate attributeName="opacity" values="0.2;1;0.2" dur="2.8s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>
      </div>
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-[min(38vw,380px)] select-none"
        aria-hidden
      >
        <svg
          className="h-full w-full text-brand-blue"
          viewBox="0 0 260 900"
          preserveAspectRatio="xMaxYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.82}
          >
            <path d="M 300 880 L 300 620 L 160 620 L 160 420 L 240 420 L 240 200 L 180 200 L 180 40" />
            <path d="M 200 880 L 200 700 L 100 700 L 100 520 L 40 520" />
            <path d="M 260 320 L 200 320 L 200 140" />
          </g>
          <g fill="currentColor" opacity={0.85}>
            <circle cx="160" cy="620" r="9">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="3.4s" repeatCount="indefinite" />
            </circle>
            <circle cx="240" cy="420" r="9">
              <animate attributeName="opacity" values="1;0.3;1" dur="2.6s" repeatCount="indefinite" />
            </circle>
            <circle cx="100" cy="520" r="8">
              <animate attributeName="opacity" values="0.2;1;0.2" dur="2.2s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>
      </div>
    </>
  );
}
