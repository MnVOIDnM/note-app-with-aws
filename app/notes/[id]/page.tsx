import Link from "next/link";
import Note from "./Note";
import { getNoteDetail, getNotesList } from "@/lib/client";

export async function generateStaticParams() {
  const { contents } = await getNotesList();
  return contents.map((note) => ({
    id: note.id,
  }));
}

const page = async ({ params }: { params: { id: string } }) => {
  const note = await getNoteDetail(params.id);

  return (
    <main className="mx-2 sm:mx-4 py-4">
      <Link
        className="bg-slate-400 rounded-md px-2 py-1"
        href="/notes"
      >
        ←back
      </Link>
      <h2 className="my-4 text-gray-400 text-xs">note</h2>
      <Note note={note} />
    </main>
  );
};

export default page;
