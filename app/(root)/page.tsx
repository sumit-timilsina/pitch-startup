import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { title } from "process";

export default async function Home({searchParams} : {
  searchParams : Promise<{query? : string}>
}) {

    const query = (await searchParams).query;

    const posts =[{
      _createdAt: new Date(),
      _id : 1,
      views: 50,
      author : {_id: 1 , name: 'Sumit',},
      description : 'This is post description',
      title : 'Post Title',
      categoey : 'Tech',
     image:'https://placehold.co/48x48',
    },];

  return (
    <>
      <section className="pink_container">
          <h1 className="heading">
            PITCH YOUR STARTUP <br className="hidden md:block" />
            CONNECT WITH ENTREPRENEUR
          </h1>
          <p className="sub-heading">
            Post ideas, vote on pitches, and get noticed in virtual competitions.
          </p>
      <SearchForm query={query}/>
      </section>

      <section className="section_container">
      <p className="text-30-semibold">
        { query ? `Search Results for "${query}"` : "All StartUps"}
      </p>
      <ul className="mt-7 card_grid">
        {posts?.length > 0 ? (
            posts.map((post : StartupCardType , index : Number) => (
              <StartupCard key={post?._id} post={post}/>
            ))
        ) : (
          <p className="no-results">No Stratups Found</p>
        )}
      </ul>
      </section>
    </>
  );
}
