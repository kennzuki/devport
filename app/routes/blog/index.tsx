import type { StrapiPost, StrapiResponse, PostMeta} from '~/types';
import type { Route } from './+types/index';
import PostCard from '~/components/PostCard';
import { useState } from 'react';
import Pagination from '~/components/Pagination';
import PostFilter from '~/components/PostFilter';


export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ posts: PostMeta[] }> {
    const res = await fetch(
    `${import.meta.env.VITE_API_URL}/posts?populate=image&sort=date:desc`
  );

  if (!res.ok) throw new Error('Failed to fetch data');

  const json: StrapiResponse<StrapiPost> = await res.json();

  const posts = json.data.map((item) => ({
    id: item.id,
    title: item.title,
    excerpt: item.excerpt,
    slug: item.slug,
    date: item.date,
    body: item.body,
    image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
  }));

  return { posts };
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const postPerPage = 3;
    const { posts } = loaderData;
    const filteredPosts = posts.filter((post: PostMeta) => {
        const query = searchQuery.toLowerCase();
        return post.title.toLowerCase().includes(query)||post.excerpt.toLowerCase().includes(query);
})

    const totalPages = Math.ceil(filteredPosts.length / postPerPage);
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);


  return (
    <>
      <div className='max-w-3xl mx-auto mt-10 px-6 py-6 bg-gray-900'>
              <h2 className='text-3xl text-white font-bold mb-8'>📝 Blog</h2>
              <PostFilter searchQuery={searchQuery} onSearchange={(query) => { setSearchQuery(query); setCurrentPage(1); }} />
              <div className="space-y-8">
                  {currentPosts.length === 0 ? (<p className="text-gray-400 text-center">No post found</p>
                  
                  ) : (
                      currentPosts.map((post: PostMeta) => (
                          <PostCard key={post.slug} post={post} />
                      ))
                  )}
              </div>
       
              {totalPages > 1 && <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={(page)=>setCurrentPage(page)}/>}
      </div>
    </>
  );
};

export default BlogPage;
