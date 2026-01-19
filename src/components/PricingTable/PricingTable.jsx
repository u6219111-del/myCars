import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './PricingTable.css';

const PricingTable = () => {
  const { t } = useTranslation();
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      id: 'economy',
      name: t('economy_plan', 'Economy'),
      price: billingCycle === 'yearly' ? 29 : 39,
      period: billingCycle === 'yearly' ? t('per_year', '/year') : t('per_month', '/month'),
      description: t('economy_desc', 'Perfect for everyday use'),
      features: [
        t('unlimited_miles', 'Unlimited Miles'),
        t('basic_insurance', 'Basic Insurance'),
        t('twenty_four_seven_support', '24/7 Support'),
        t('free_cancellation', 'Free Cancellation')
      ],
      popular: false
    },
    {
      id: 'premium',
      name: t('premium_plan', 'Premium'),
      price: billingCycle === 'yearly' ? 59 : 79,
      period: billingCycle === 'yearly' ? t('per_year', '/year') : t('per_month', '/month'),
      description: t('premium_desc', 'Best for frequent travelers'),
      features: [
        t('luxury_vehicles', 'Luxury Vehicles'),
        t('premium_insurance', 'Premium Insurance'),
        t('priority_support', 'Priority Support'),
        t('free_cancellation', 'Free Cancellation'),
        t('upgrade_discount', '20% Upgrade Discount')
      ],
      popular: true
    },
    {
      id: 'business',
      name: t('business_plan', 'Business'),
      price: billingCycle === 'yearly' ? 99 : 129,
      period: billingCycle === 'yearly' ? t('per_year', '/year') : t('per_month', '/month'),
      description: t('business_desc', 'For business travelers'),
      features: [
        t('multiple_vehicles', 'Multiple Vehicles'),
        t('dedicated_manager', 'Dedicated Manager'),
        t('concierge_service', 'Concierge Service'),
        t('free_cancellation', 'Free Cancellation'),
        t('unlimited_upgrades', 'Unlimited Upgrades'),
        t('expense_reporting', 'Expense Reporting')
      ],
      popular: false
    }
  ];

  return (
    <div className="pricing-table-container">
      <div className="pricing-header">
        <h2 className="pricing-title">{t('pricing_plans', 'Pricing Plans')}</h2>
        <p className="pricing-subtitle">{t('choose_perfect_plan', 'Choose the perfect plan for your needs')}</p>
        
        <div className="billing-toggle">
          <span className={billingCycle === 'monthly' ? 'active' : ''}>{t('monthly', 'Monthly')}</span>
          <div className="toggle-switch" onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}>
            <div className={`toggle-slider ${billingCycle === 'yearly' ? 'yearly' : 'monthly'}`}></div>
          </div>
          <span className={billingCycle === 'yearly' ? 'active' : ''}>
            {t('yearly', 'Yearly')} <span className="save-badge">{t('save_20', 'Save 20%')}</span>
          </span>
        </div>
      </div>

      <div className="pricing-cards">
        {plans.map((plan) => (
          <div key={plan.id} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
            {plan.popular && (
              <div className="popular-badge">
                {t('most_popular', 'Most Popular')}
              </div>
            )}
            
            <div className="plan-header">
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              
              <div className="plan-price">
                <span className="price-amount">${plan.price}</span>
                <span className="price-period">{plan.period}</span>
              </div>
            </div>
            
            <ul className="plan-features">
              {plan.features.map((feature, index) => (
                <li key={index} className="feature-itemm">
                  <i className="feature-iconn">✓</i>
                  {feature}
                </li>
              ))}
            </ul>
            
          </div>
        ))}
      </div>
      
      <div className="pricing-footer">
        <p className="money-back">{t('money_back_guarantee', '30-Day Money-Back Guarantee')}</p>
        <p className="need_help">{t('need_help', 'Need help choosing a plan?')} <a href="/contactus">{t('contact_sales', 'Contact our sales team')}</a></p>
      </div>
    </div>
  );
};

export default PricingTable;