import type { PostMeta } from '~/types';
import { Link } from 'react-router';

type LatestPostsProps = {
  posts: PostMeta[];
  limit?: number;
};

const LatestPost = ({ posts, limit = 3 }: LatestPostsProps) => {
  const sorted = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const latest = sorted.slice(0, limit);
  return (
    <div className='max-w-6xl mx-auto py-12 px-6 '>
      <h2 className='text-3xl font-bold text-white mb-6'>Latest Posts</h2>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {latest.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className='text-blue-300 text-sm hover:underline bg-gray-900 p-4 rounded'
          >
            <h3 className='text-lg font-semibold text-white'>{post.title}</h3>
            <p className='text-sm text-gray-400'>{post.excerpt}</p>
            <span className='block text-xs'>
              {new Date(post.date).toDateString()}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestPost;
