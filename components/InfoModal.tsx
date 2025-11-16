
import React from 'react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: (key: string) => string;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose, t }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="info-modal-title"
    >
      <div 
        className="bg-gray-800 text-white rounded-lg shadow-2xl border-2 border-yellow-400 w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl font-bold leading-none"
          aria-label={t('close')}
        >
          &times;
        </button>
        
        <h2 id="info-modal-title" className="font-bungee text-3xl sm:text-4xl text-yellow-400 mb-6 text-center" style={{ textShadow: '2px 2px 0px #ef4444' }}>
          {t('geeWiz')}
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-bungee text-2xl text-yellow-300 mb-3">{t('howToPlayTitle')}</h3>
            <ul className="space-y-2 list-inside text-gray-300">
              <li>{t('howToPlayStep1')}</li>
              <li>{t('howToPlayStep2')}</li>
              <li>{t('howToPlayStep3')}</li>
              <li>{t('howToPlayStep4')}</li>
              <li>{t('howToPlayStep5')}</li>
              <li>{t('howToPlayStep6')}</li>
            </ul>
          </div>

          <div className="border-t border-gray-600 my-4"></div>

          <div>
            <h3 className="font-bungee text-2xl text-yellow-300 mb-3">{t('aboutTheGameTitle')}</h3>
            <p className="text-gray-300">{t('aboutTheGameContent')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
