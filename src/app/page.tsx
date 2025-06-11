import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Vũ trụ Vật lý Hiện đại</h1>
        <p className="text-lg mb-10">
          Khám phá các hướng nghiên cứu vật lý tiên tiến trên thế giới — từ vật lý hạt, thiên văn học, đến vật lý chất ngưng tụ.
        </p>
        <div className="flex flex-col gap-4 items-center">
          <Link href="/huong-nghien-cuu/vat-ly-hat" className="text-blue-400 hover:underline text-xl">Vật lý Hạt</Link>
          <Link href="/huong-nghien-cuu/thien-van-hoc" className="text-blue-400 hover:underline text-xl">Thiên văn học</Link>
          <Link href="/huong-nghien-cuu/chat-ngung-tu" className="text-blue-400 hover:underline text-xl">Vật lý Chất ngưng tụ</Link>
        </div>
      </div>
    </main>
  );
}
