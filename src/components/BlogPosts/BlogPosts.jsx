import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function BlogPosts() {
  const { t } = useTranslation();

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: t('blog_post_1_title'),
      excerpt: t('blog_post_1_excerpt'),
      date: '2024-01-15',
      author: t('blog_author_1'),
      image: '/src/assets/images/blog-1.jpg',
      category: t('travel'),
      readTime: '5 min read'
    },
    {
      id: 2,
      title: t('blog_post_2_title'),
      excerpt: t('blog_post_2_excerpt'),
      date: '2024-01-10',
      author: t('blog_author_2'),
      image: '/src/assets/images/blog-2.jpg',
      category: t('tips'),
      readTime: '3 min read'
    },
    {
      id: 3,
      title: t('blog_post_3_title'),
      excerpt: t('blog_post_3_excerpt'),
      date: '2024-01-05',
      author: t('blog_author_3'),
      image: '/src/assets/images/blog-3.jpg',
      category: t('car_rental'),
      readTime: '4 min read'
    }
  ];

  return (
    <div className="blog-posts-container">
      <div className="blog-posts-wrapper">
        <h2 className="blog-posts-title">{t('latest_blog_posts')}</h2>
        <p className="blog-posts-subtitle">{t('blog_posts_subtitle')}</p>
        
        <div className="blog-posts-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-post-card">
              <div className="blog-post-image">
                <img 
                  src={post.image} 
                  alt={post.title}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x250/3498db/ffffff?text=' + encodeURIComponent(post.title);
                  }}
                />
                <div className="blog-post-category">
                  {post.category}
                </div>
              </div>
              
              <div className="blog-post-content">
                <div className="blog-post-meta">
                  <span className="blog-post-date">{post.date}</span>
                  <span className="blog-post-author">{post.author}</span>
                  <span className="blog-post-read-time">{post.readTime}</span>
                </div>
                
                <h3 className="blog-post-title">{post.title}</h3>
                <p className="blog-post-excerpt">{post.excerpt}</p>
                
                <Link to={`/blog/${post.id}`} className="blog-post-read-more">
                  {t('read_more')}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="blog-posts-cta">
          <Link to="/blog" className="blog-posts-view-all">
            {t('view_all_posts')}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogPosts;