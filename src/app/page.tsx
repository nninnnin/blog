import clsx from "clsx";

export default function Home() {
  return (
    <div
      className={clsx(
        "w-screen h-[100dvh]",
        "text-[5vw] bg-black text-white",
        "flex items-center justify-center"
      )}
    >
      무엇이 옳은지는, 나도 모른다.
      <br />
      너라고 알까, 싶다마는.
    </div>
  );
}
