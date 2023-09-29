import { type FC } from "react";
import { type TagData } from "./TagsTable";
import { Button } from "~/components/ui/button";

export const TagItem: FC<TagData> = ({ id, tag, mentions, isTrending }) => {
  return (
    <div className="grid w-full grid-cols-4">
      <p>{tag}</p>
      <p>{mentions}</p>
      <p>{isTrending ? "Yes" : "No"}</p>
      <Button variant="default" className="max-w-[120px]">Open Report</Button>
    </div>
  );
};
