import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css';

interface BlogCard {
  id: number;
  title: string;
  imageUrl: string;
  articleUrl: string;
}

export const Blog: React.FC = () => {
  const navigate = useNavigate();

    const blogCards: BlogCard[] = [
        {
      id: 1,
      title: 'Mental Health Day',
      imageUrl: 'https://www.who.int/ResourcePackages/WHO/assets/dist/images/logos/en/h-logo-blue.svg', 
      articleUrl: 'https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response',
    },
    {
      id: 2,
      title: 'Kako da brineš o svom mentalnom zdravlju?',
      imageUrl: 'https://aiesec.org.rs/wp-content/uploads/2023/12/UNICEF.png',
      articleUrl: 'https://www.unicef.org/serbia/kako-da-brine%C5%A1-o-svom-mentalnom-zdravlju',
    },
    {
      id: 3,
      title: 'A-Z Topics',
      imageUrl: 'https://www.mentalhealth.org.uk/themes/custom/mhf_theme/logo.svg',
      articleUrl: 'https://www.mentalhealth.org.uk/explore-mental-health/a-z-topics',
    },
    {
      id: 4,
      title: 'Anksioznost i horoskop',
      imageUrl: 'https://anksioznioptimista.com/wp-content/uploads/2024/07/anksiozni-logo.png', 
      articleUrl: 'https://anksioznioptimista.com/anksioznost-i-horoskop/', 
    },
  ];

  return (
  <div className="blog-container">
    
    
    <main className="main-content">
      <h1 className="page-title">Blog</h1>

      <div className="blog-grid">
        {blogCards.map((card) => (
          <div key={card.id} className="blog-item">
            <h3 className="card-title">{card.title}</h3>
            <a href={card.articleUrl} target="_blank" rel="noopener noreferrer" className="image-link">
              <div className="image-wrapper">
                <img src={card.imageUrl} alt={card.title} />
              </div>
            </a>
          </div>
        ))}
      </div>

      <div className="button-container">
        <button className="blog-dugme" onClick={() => navigate('/Pisanje_Bloga')}>
          Napiši blog
        </button>
      </div>
    </main>
  </div>
);
};

export default Blog;
