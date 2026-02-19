function Contact() {
  try {
    const [language, setLanguage] = React.useState(localStorage.getItem('language') || 'et');

    React.useEffect(() => {
      const handleLanguageChange = (e) => {
        setLanguage(e.detail);
      };
      window.addEventListener('languageChange', handleLanguageChange);
      return () => window.removeEventListener('languageChange', handleLanguageChange);
    }, []);

    const t = translations[language].contact;

    return (
      <section id="contact" className="py-20 bg-[var(--secondary-color)]" data-name="contact" data-file="components/Contact.js">
        <div className="container mx-auto px-6">
          <h2 className="section-title">{t.title}</h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-center text-[var(--text-secondary)] mb-8">
              {t.intro}
            </p>
            
            <form 
              action="https://formspree.io/f/xeelljbw" 
              method="POST"
              encType="multipart/form-data"
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">{t.nameLabel}</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--primary-color)]"
                  placeholder={t.namePlaceholder}
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">{t.emailLabel}</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--primary-color)]"
                  placeholder={t.emailPlaceholder}
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">{t.messageLabel}</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--primary-color)]"
                  placeholder={t.messagePlaceholder}
                ></textarea>
              </div>
              
              <button type="submit" className="w-full btn btn-primary">
                {t.sendButton}
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}