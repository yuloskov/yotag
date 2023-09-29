import { type FC } from "react";
import { TagItem } from "./TagItem";
import { Card } from "~/components/ui/card"

export interface TagData {
  id: string;
  tag: string;
  mentions: number;
  isTrending: boolean;
}

interface TagsTableProps {
  items: TagData[];
}


export const TagsTable: FC<TagsTableProps> = ({ items }) => {
  return (
    <Card className="flex flex-col gap-4 px-4 py-3">
      <div className="grid grid-cols-4 w-full border-b border-primary py-2">
        <p>Hash Tag</p>
        <p>Mentions</p>
        <p>Is Trending</p>
        <p>Open Report</p>
      </div>

      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <TagItem key={item.id} {...item} />
        ))}
      </div>
    </Card>
  );
};
