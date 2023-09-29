import { TagsTable } from "~/components/search/Data/TagsTable";
import { SelectorFilter } from "~/components/search/filters/SelectorFilter";
import { Input } from "~/components/ui/input";
import { MainLayout } from "~/layouts/MainLayout";

const filtersConfig = [
  {
    label: "Country",
    placeholder: "Select country",
    options: ["United States", "United Kingdom", "Canada", "Australia"],
  },
  {
    label: "Age",
    placeholder: "Select age",
    options: ["0-17", "18-34", "35-51", "52-70", "71+"],
  },
  {
    label: "Topics",
    placeholder: "Select topics",
    options: ["Crypto", "Fashion", "Food", "Travel", "Fitness"],
  },
  {
    label: "Content type",
    placeholder: "Select content type",
    options: ["Photo", "Video", "Carousel", "Story", "Reels"],
  },
];

const tagsData = [
  {
    id: "1",
    tag: "#yolo",
    mentions: 100,
    isTrending: true,
  },
  {
    id: "2",
    tag: "#adventure",
    mentions: 95,
    isTrending: true,
  },
  {
    id: "3",
    tag: "#sunset",
    mentions: 85,
    isTrending: false,
  },
  {
    id: "4",
    tag: "#foodie",
    mentions: 120,
    isTrending: true,
  },
  {
    id: "5",
    tag: "#lifestyle",
    mentions: 65,
    isTrending: false,
  },
  {
    id: "6",
    tag: "#wanderlust",
    mentions: 110,
    isTrending: true,
  },
  {
    id: "7",
    tag: "#workout",
    mentions: 70,
    isTrending: false,
  },
  {
    id: "8",
    tag: "#family",
    mentions: 90,
    isTrending: true,
  },
  {
    id: "9",
    tag: "#motivation",
    mentions: 105,
    isTrending: true,
  },
  {
    id: "10",
    tag: "#music",
    mentions: 80,
    isTrending: false,
  },
  {
    id: "11",
    tag: "#throwback",
    mentions: 75,
    isTrending: true,
  },
];

export default function Search() {
  return (
    <MainLayout title="Search">
      <div className="flex flex-row items-center gap-4">
        <Input placeholder="Enter hashtag" className="max-w-[300px]" />
        {filtersConfig.map((filter) => (
          <SelectorFilter {...filter} key={filter.label} />
        ))}
      </div>

      <div className="mt-5">
        <TagsTable items={tagsData} />
      </div>
    </MainLayout>
  );
}
