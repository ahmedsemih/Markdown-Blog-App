import { allPosts } from 'contentlayer/generated';
import { FeatureSection, PostSection, WelcomeSection } from '@/components';

const Home = () => {
  const posts = allPosts;
  const featuredPosts = posts.filter(post => post.featured == true);

  return (
    <main className="container" >
      <WelcomeSection />
      <FeatureSection posts={featuredPosts} />
      <PostSection posts={posts} />
    </main>
  )
}

export default Home