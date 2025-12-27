import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function TeamMembers() {
  const { t } = useTranslation();
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: t('team_member_1_name'),
      position: t('team_member_1_position'),
      bio: t('team_member_1_bio'),
      image: '/src/assets/images/team-member-1.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 2,
      name: t('team_member_2_name'),
      position: t('team_member_2_position'),
      bio: t('team_member_2_bio'),
      image: '/src/assets/images/team-member-2.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 3,
      name: t('team_member_3_name'),
      position: t('team_member_3_position'),
      bio: t('team_member_3_bio'),
      image: '/src/assets/images/team-member-3.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 4,
      name: t('team_member_4_name'),
      position: t('team_member_4_position'),
      bio: t('team_member_4_bio'),
      image: '/src/assets/images/team-member-4.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    }
  ];

  const openMemberModal = (member) => {
    setSelectedMember(member);
  };

  const closeMemberModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="team-members-container">
      <div className="team-members-wrapper">
        <h2 className="team-members-title">{t('our_team')}</h2>
        <p className="team-members-subtitle">{t('team_subtitle')}</p>
        
        <div className="team-members-grid">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="team-member-card"
              onClick={() => openMemberModal(member)}
            >
              <div className="team-member-image">
                <img 
                  src={member.image} 
                  alt={member.name}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x300/3498db/ffffff?text=' + encodeURIComponent(member.name.charAt(0));
                  }}
                />
              </div>
              <div className="team-member-info">
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-position">{member.position}</p>
              </div>
              <div className="team-member-overlay">
                <p className="team-member-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for detailed view */}
      {selectedMember && (
        <div className="team-member-modal" onClick={closeMemberModal}>
          <div className="team-member-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="team-member-modal-close" onClick={closeMemberModal}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="team-member-modal-body">
              <div className="team-member-modal-image">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400/3498db/ffffff?text=' + encodeURIComponent(selectedMember.name.charAt(0));
                  }}
                />
              </div>
              
              <div className="team-member-modal-info">
                <h3 className="team-member-modal-name">{selectedMember.name}</h3>
                <p className="team-member-modal-position">{selectedMember.position}</p>
                <p className="team-member-modal-bio">{selectedMember.bio}</p>
                
                <div className="team-member-modal-social">
                  <a href={selectedMember.social.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href={selectedMember.social.twitter} className="social-link" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href={selectedMember.social.instagram} className="social-link" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TeamMembers;