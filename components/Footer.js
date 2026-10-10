function Footer() {
  try {
    return (
      <footer className="bg-gray-900 text-white py-12" data-name="footer" data-file="components/Footer.js">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Portfoolio</h3>
              <p className="text-gray-400">
                Loon ilusaid ja funktsionaalseid digitaalseid kogemusi.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Kiirlingid</h3>
              <ul className="space-y-2">
                <li><a href="index.html#home" className="text-gray-400 hover:text-white transition-colors">Avaleht</a></li>
                <li><a href="index.html#about" className="text-gray-400 hover:text-white transition-colors">Minust</a></li>
                <li><a href="index.html#contact" className="text-gray-400 hover:text-white transition-colors">Kontakt</a></li>
              </ul>
            </div>
            
            
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Portfoolio. Kõik õigused kaitstud.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}