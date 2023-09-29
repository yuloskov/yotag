import dynamic from "next/dynamic";
import { KeywordsBarChart } from "~/components/dashboard/KeywordsBarChart";
import { Post, PostData } from "~/components/dashboard/Post";
import { Card, CardHeader, CardTitle } from "~/components/ui/card";
import { MainLayout } from "~/layouts/MainLayout";

const ContentTypeChart = dynamic(
  () => import("../components/dashboard/ContentTypeChart"),
  { ssr: false, loading: () => <div>Loading...</div> },
);

import { api } from "~/utils/api";

export const posts: PostData[] = [
  {
    title: "The Best of Mozart",
    cover:
      "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
  },
  {
    title: "The Best of Mozart",
    cover:
      "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
  },
  {
    title: "The Best of Mozart",
    cover:
      "https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80",
  },
  {
    title: "The Best of Mozart",
    cover:
      "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
  },
];

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <MainLayout title="Home">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <Card className="w-2/3 px-5 py-4">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Most popular tags</CardTitle>
            </CardHeader>
            <KeywordsBarChart />
          </Card>

          <Card className="px-5 py-4">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Content type</CardTitle>
              <ContentTypeChart />
            </CardHeader>
          </Card>
        </div>

        <Card className="px-5 py-4">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Most popular posts</CardTitle>
          </CardHeader>
          <div className="flex flex-row flex-wrap gap-4">
            {posts.map((post, i) => (
              <Post
                key={i}
                data={post}
                className="w-[250px]"
                aspectRatio="portrait"
                width={250}
                height={330}
              />
            ))}
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}
