import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 py-10 px-2">
      {/* Profile Section */}
      <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-10 border">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* 프로필 사진 */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-2 border-gray-400">
              {/* public/profile.jpg 파일을 사용하세요 */}
              <Image src="/profile.jpg" alt="프로필 사진" width={160} height={160} className="object-cover w-full h-full" />
            </div>
          </div>
          {/* 프로필 정보 */}
          <div className="flex-1 w-full">
            <div className="mb-4">
              <div className="font-bold text-lg mb-1">_I AM</div>
              <div className="mb-1">이름 : <span className="font-semibold">이프로</span></div>
              <div>포지션: PM 서비스 기획 / FE Developer(jr)</div>
            </div>
            <hr className="my-3" />
            <div className="mb-4">
              <div className="font-bold text-lg mb-1">_Contact</div>
              <div>Email : <a href="mailto:leepro@naver.com" className="underline">leepro@naver.com</a></div>
              <div>Phone : +082 - 1234-5678</div>
            </div>
            <hr className="my-3" />
            <div className="mb-2">
              <div className="font-bold text-lg mb-1">_Channel</div>
              <div className="flex flex-col gap-1">
                <div>SNS : <input type="text" className="border rounded px-2 py-1 w-48" placeholder="SNS 주소" /></div>
                <div>GitHub : <input type="text" className="border rounded px-2 py-1 w-48" placeholder="GitHub 주소" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduce Section */}
      <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-10 border">
        <div className="mb-2 font-bold text-lg border-b pb-2">Introduce</div>
        <div className="p-4 bg-gray-100 rounded-xl text-center text-lg">
          간단한 자기소개 및 인사말
        </div>
      </section>

      {/* Tech Skill Section */}
      <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 border">
        <div className="mb-2 font-bold text-lg border-b pb-2">Tech Skill</div>
        <div className="flex flex-wrap gap-4 p-4 bg-gray-100 rounded-xl justify-center">
          <span className="px-4 py-2 bg-gray-200 rounded-lg font-semibold">JS</span>
          <span className="px-4 py-2 bg-gray-200 rounded-lg font-semibold">TS</span>
          <span className="px-4 py-2 bg-gray-200 rounded-lg font-semibold">React</span>
          <span className="px-4 py-2 bg-gray-200 rounded-lg font-semibold">Tailwindcss</span>
          <span className="px-4 py-2 bg-gray-200 rounded-lg font-semibold">Premierepro</span>
        </div>
      </section>
    </main>
  );
}
