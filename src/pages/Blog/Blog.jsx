import React from "react";
import "./Blog.css";
import { useTranslation } from 'react-i18next';

function Blog() {
  const { t } = useTranslation();
  
  const blogPosts = [
    {
      id: 1,
      title: t('blog_post1_title'),
      excerpt: t('blog_post1_excerpt'),
      date: t('blog_post1_date'),
      author: t('blog_post1_author'),
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=1308&q=80"
    },
    {
      id: 2,
      title: t('blog_post2_title'),
      excerpt: t('blog_post2_excerpt'),
      date: t('blog_post2_date'),
      author: t('blog_post2_author'),
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1308&q=80"
    },
    {
      id: 3,
      title: t('blog_post3_title'),
      excerpt: t('blog_post3_excerpt'),
      date: t('blog_post3_date'),
      author: t('blog_post3_author'),
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1308&q=80"
    }
  ];

  return (
    <div className="blog-container">
      <div className="blog-wrapper">
        <div className="blog-header">
          <h1>{t('car_rental_blog')}</h1>
          <p>{t('blog_subtitle')}</p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <div key={post.id} className="blog-card" style={{ animationDelay: `${0.2 * index}s` }}>
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-content">
                <p className="blog-category">{t('article')}</p>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-author">
                  <div className="author-avatar">
                    {post.author.charAt(0)}
                  </div>
                  <div className="author-info">
                    <p className="author-name">{post.author}</p>
                    <p className="author-date">{post.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="blog-cta">
          <button>{t('load_more_articles')}</button>
        </div>
      </div>
    </div>
  );
}

export default Blog;