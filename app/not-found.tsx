export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="px-2 w-full h-[100dvh] bg-[url(/not-found.jpg)] bg-cover bg-center mx-auto py-4 flex flex-col justify-center items-center gap-2">
      <h1 className="text-6xl">&#58;&#40;</h1>
      <h2 className="text-2xl">Page Not Found</h2>
    </div>
  );
}
