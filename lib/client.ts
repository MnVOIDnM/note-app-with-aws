import { Note } from "@/app/notes/type";
import { MicroCMSQueries, createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN || "",
  apiKey: process.env.NEXT_PUBLIC_API_KEY || "",
});

export const getNotesList = async () => {
  const notesList = await client.getList<Note[]>({
    endpoint: "notes",
  });
  return notesList;
};

export const getNoteDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const noteDetail = await client.getListDetail<Note>({
    endpoint: "notes",
    contentId,
    queries,
  });
  return noteDetail;
};
