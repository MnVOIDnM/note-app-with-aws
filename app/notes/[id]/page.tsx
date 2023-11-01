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
    <main className="mx-2 sm:mx-4">
      <Link href="/notes">back</Link>
      <h2 className="my-4 text-gray-400 text-xs">View note</h2>
      <Note note={note} />
    </main>
  );
};

export default page;
