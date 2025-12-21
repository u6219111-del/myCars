import React from 'react';
import { useTranslation } from 'react-i18next';
import './Block.css'; // импортируем CSS

function Block() {
  const { t } = useTranslation();

  const steps = [
    { number: 1, title: t('step1_title'), desc: t('step1_desc') },
    { number: 2, title: t('step2_title'), desc: t('step2_desc') },
    { number: 3, title: t('step3_title'), desc: t('step3_desc') },
    { number: 4, title: t('step4_title'), desc: t('step4_desc') },
  ];

  return (
    <div className="block-container">
      <div className="block-image">
        <img
          src="https://a.d-cd.net/f2a1d4cs-960.jpg"
          alt="Illustration"
        />
      </div>

      <div className="block-steps">
        {steps.map((step) => (
          <div key={step.number} className="block-step">
            <div className="step-header">
              <span className="step-number">{step.number}</span>
              <h2 className="step-title">{step.title}</h2>
            </div>
            <p className="step-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Block;
