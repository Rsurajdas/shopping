export default function Home() {
  return (
    <div className="flex">
      <div className="w-1/2">
        <h1 className="text-xl text-indigo-700 font-semibold">
          Home page left
        </h1>
      </div>
      <div className="w-1/5">
        <h1 className="text-xl text-indigo-700 font-semibold">
          Home page right
        </h1>
      </div>
    </div>
  );
}
