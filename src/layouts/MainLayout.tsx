import Head from "next/head";
import Link from "next/link";
import { UserNav } from "~/components/layout/header/UserNav"

interface MainLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{`YoTag | ${title}`}</title>
        <meta
          name="description"
          content="A platform for finding your perfect social network tag"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="border-gray-7 fixed z-[10] flex w-full items-center justify-between border-b bg-white px-[20px] py-[15px] md:px-[74px] md:py-[30px] xl:px-[140px]">
        <nav className={"flex items-center space-x-4 lg:space-x-6"}>
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Overview
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Pricing
          </Link>
        </nav>

        <UserNav />
      </header>

      <div className="flex h-screen flex-col justify-between">
        <main className="px-[20px] py-[70px] md:px-[74px] md:py-[120px] xl:px-[140px]">
          {children}
        </main>
      </div>
    </>
  );
};
