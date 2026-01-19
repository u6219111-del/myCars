import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Employees.css';
import { supabase } from '../../api/supabaseClient';

function Employees() {
  const { t } = useTranslation();
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      
      // Fetch from Supabase
      const { data, error } = await supabase
        .from('employees')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching employees:', error);
        console.error('Error details:', error.message, error.details);
        setEmployees([]); // Показываем пустой массив если ошибка
      } else {
        console.log('Successfully fetched employees:', data);
        setEmployees(data || []);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredEmployees = filter === 'all' 
    ? employees 
    : employees.filter(emp => emp.position.toLowerCase().includes(filter));

  const getPositionColor = (position) => {
    const positions = {
      'генеральный директор': 'director',
      'директор': 'director',
      'менеджер': 'manager',
      'технический специалист': 'tech',
      'бухгалтер': 'finance',
      'администратор': 'admin'
    };
    
    const key = Object.keys(positions).find(pos => 
      position.toLowerCase().includes(pos)
    );
    
    return key ? positions[key] : 'default';
  };

  if (loading) {
    return (
      <div className="employees-page">
        <div className="loading-container">
          <div className="spinner"></div>
          <p>{t('loading_employees', 'Загрузка сотрудников...')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="employees-page">
     
      <section className="employees-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-titlee">{t('our_team', 'Наша команда')}</h1>
          </div>
        </div>
      </section>

      <section className="team-stats">
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-number">{employees.length}+</div>
            <div className="stat-label">{t('team_members', 'Сотрудников')}</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">15+</div>
            <div className="stat-label">{t('experience_years', 'Лет опыта')}</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">{t('customer_satisfaction', 'Довольных клиентов')}</div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="filter-container">
          <h2 className="section-title">{t('meet_our_team', 'Познакомьтесь с нашей командой')}</h2>
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              {t('all', 'Все')}
            </button>
            <button 
              className={`filter-btn ${filter === 'менеджер' ? 'active' : ''}`}
              onClick={() => setFilter('менеджер')}
            >
              {t('managers', 'Менеджеры')}
            </button>
            <button 
              className={`filter-btn ${filter === 'технический' ? 'active' : ''}`}
              onClick={() => setFilter('технический')}
            >
              {t('technicians', 'Техники')}
            </button>
          </div>
        </div>
      </section>

      {/* Employees Grid */}
      <section className="employees-grid-section">
        <div className="grid-container">
          {filteredEmployees.length > 0 ? (
            <div className="employees-grid">
              {filteredEmployees.map((employee) => (
                <div key={employee.id} className="employee-card">
                  <div className="employee-image">
                    <img 
                      src={employee.avatar_url || '/src/assets/svg/car.svg'} 
                      alt={employee.full_name}
                      onError={(e) => {
                        e.target.src = '/src/assets/svg/car.svg';
                      }}
                    />
                    <div className={`position-badge ${getPositionColor(employee.position)}`}>
                      {employee.position}
                    </div>
                  </div>
                  
                  <div className="employee-info">
                    <h3 className="employee-name">{employee.full_name}</h3>
                    <p className="employee-position">{employee.position}</p>
                    
                    {employee.description && (
                      <p className="employee-description">{employee.description}</p>
                    )}
                    
                    <div className="employee-contact">
                      <div className="contact-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                        </svg>
                        <span>{employee.email}</span>
                      </div>
                      
                      {employee.phone && (
                        <div className="contact-item">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.821.643.906 1.82.225 2.501l-1.034 1.034a.678.678 0 0 0 .063 1.015l1.034 1.034a.678.678 0 0 0 1.015-.063l1.034-1.034a1.745 1.745 0 0 1 2.501-.225l1.794 2.306c.681.681 1.858.596 2.501-.225L14.98 13.5a.678.678 0 0 0-.063-1.015l-1.034-1.034a1.745 1.745 0 0 1-.225-2.501l2.306-1.794c.681-.681.596-1.858-.225-2.501L13.5.98a.678.678 0 0 0-1.015.063L11.45 2.079a1.745 1.745 0 0 1-1.494-.315l-2.19-.547a.678.678 0 0 0-.58.122L5.98 3.5a1.745 1.745 0 0 1-1.657.459L2.3 2.174a.678.678 0 0 0-.58-.122L.511 1.884a1.745 1.745 0 0 1-.163-2.612l.547-2.306z"/>
                          </svg>
                          <span>{employee.phone}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-employees">
              <div className="no-employees-icon">👥</div>
              <h3>{t('no_employees_found', 'Сотрудники не найдены')}</h3>
              <p>{employees.length === 0 
                ? t('no_employees_in_database', 'В базе данных пока нет сотрудников') 
                : t('try_different_filter', 'Попробуйте другой фильтр')}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Employees;