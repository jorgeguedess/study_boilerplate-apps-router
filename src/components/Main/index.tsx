import Image from "next/image"

export default function Main({
  title = "React Avançado",
  description = "TypeScript, ReactJS, NextJS e Styled Components"
}) {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center bg-[#06092b] p-7 text-center text-white">
      <Image
        src={"/img/logo.svg"}
        alt="Imagem de um átomo e React Avançado escrito ao lado."
        width={0}
        height={0}
        sizes="100vw"
        className="mb-5 w-64"
      />
      <h1 className="text-2xl">{title}</h1>
      <h2 className="text-xl font-normal">{description}</h2>
      <Image
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código."
        width={0}
        height={0}
        sizes="100vw"
        className="mt-8 w-full max-w-72"
      />
    </main>
  )
}
