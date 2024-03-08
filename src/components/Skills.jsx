export default function Skills() {
  return (
    <div
      id="skills"
      className="flex w-full flex-col items-center bg-gradient-to-r from-green-200 to-amber-50 p-12"
    >
      <div className="flex w-full max-w-[1280px] flex-col items-center pb-8">
        <h2 className="py-8 text-2xl font-bold">My Skills</h2>
        <div className="grid w-full  justify-items-center gap-6  py-4  md:grid-cols-2 lg:grid-cols-4">
          <div className="image-shadow flex h-[150px] w-full flex-col items-center justify-center  rounded-xl bg-white">
            <p className="font-semibold">IoT Development</p>
            <ul className=" list-inside list-disc">
              <li>Arduino</li>
              <li>Raspberry Pi</li>
            </ul>
          </div>
          <div className="image-shadow flex h-[150px] w-full flex-col items-center justify-center rounded-xl bg-white">
            <p className="font-semibold">UI/Ux Design</p>
            <ul className=" list-inside list-disc">
              <li>Canva</li>
              <li>Photoshop</li>
            </ul>
          </div>
          <div className="image-shadow flex h-[150px] w-full flex-col items-center justify-center rounded-xl bg-white">
            <p className="font-semibold">Programming</p>
            <ul className=" list-inside list-disc">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>C++</li>
            </ul>
          </div>
          <div className="image-shadow flex h-[150px] w-full flex-col items-center justify-center rounded-xl bg-white">
            <p className="font-semibold">Soft Skills</p>
            <ul className="list-inside list-disc">
              <li>Leadership</li>
              <li>Motivator</li>
              <li>Team Player</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
