import events from "@/data/events.json";

export type CciEvent = {
  date: string;
  time: string;
  type: string;
  title: string;
  tone: string;
  active?: boolean;
};

export const eventArchive = events as CciEvent[];

export const latestEvents = [...eventArchive].sort((a, b) => {
  const aTime = `${a.date} ${a.time}`;
  const bTime = `${b.date} ${b.time}`;

  return bTime.localeCompare(aTime);
});

export const latestFeaturedEvents = latestEvents.slice(0, 3);
