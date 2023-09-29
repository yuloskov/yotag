import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { UserNav } from "~/components/layout/header/UserNav";

interface MainLayoutProps {
  children: React.ReactNode;
  title: string;
}

const links = [
  {
    name: "Overview",
    href: "/",
  },
  {
    name: "Search",
    href: "/search/instagram",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
];

export const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
  const router = useRouter();
  const currentLink = router.pathname;

  console.log(currentLink);

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
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                currentLink === link.href
                  ? ""
                  : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
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
