import { BgImage } from "../components/ui/BgImage";
import { useReveal } from "../lib/useReveal";

const founderStatementLines = [
  "Founded in 2019",
  "by Abi Roshan and Faheem Razi,",
  "THE Oglas is a borderless creative agency shaping culture through iconic, value-driven",
  "brand PLATEFORMS.",
];

export default function People() {
  const pageRef = useReveal<HTMLDivElement>();

  return (
    <div className="bg-dark text-white" ref={pageRef}>
      <section className="px-5 pt-28 sm:px-8 sm:pt-32 lg:px-[2.45vw] lg:pt-36">
        <div
          className="relative mx-auto aspect-[1826/1199] max-w-[1826px] overflow-hidden bg-black"
          data-reveal
        >
          <BgImage
            alt="Portrait grid of The Oglas Agency team members"
            fill
            src="/assets/people/portraits.jpg"
          />
        </div>
      </section>

      <section className="flex min-h-[560px] items-center px-5 py-24 text-center sm:px-8 lg:min-h-[760px] lg:px-[4.15vw] lg:py-36">
        <div className="mx-auto w-full max-w-[1500px]">
          <h1
            className="mx-auto font-display text-[clamp(2.2rem,4.6vw,5.6rem)] leading-[1.06] font-extrabold tracking-[-0.045em] uppercase"
            data-reveal
          >
            {founderStatementLines.map((line, index) => (
              <span className="block" key={line}>
                {line}
                {index < founderStatementLines.length - 1 ? " " : ""}
              </span>
            ))}
          </h1>
        </div>
      </section>
    </div>
  );
}
