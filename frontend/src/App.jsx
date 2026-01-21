import { useState } from 'react'
import './App.css'

const catalogItems = [
  {
    id: 0,
    name: 'לק ג\'ל',
    price: '140 ש"ח',
    image: '/images/nails3.jpeg',
    description: 'לק ג\'ל מקצועי ואיכותי'
  },
  {
    id: 1,
    name: 'פול גל',
    price: '250 ש"ח',
    image: '/images/פול גל.jpeg',
    description: 'פול גל מקצועי ואיכותי'
  },
  {
    id: 2,
    name: 'בלדר גל',
    price: '250 ש"ח',
    image: '/images/builder gel.jpeg',
    description: ' בלדר גל מקצועי ואיכותי'
  },
  {
    id: 3,
    name: 'מילוי פול גל/בלדר גל',
    price: '150 ש"ח',
    image: '/images/gel.jpeg',
    description: 'מילוי מקצועי ואיכותי'
  },
  {
    id: 4,
    name: 'תיקון ציפורן שבורה',
    price: '10 ש"ח',
    image: '/images/nails.jpeg',
    description: 'תיקון מהיר ונוח'
  },
  {
    id: 5,
    name: 'פרנש',
    price: '30₪',
    image: '/images/frensh nails.jpeg',
    description: 'עיצוב פרנש קלאסי ואלגנטי'
  }
]

function App() {
  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null)

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1 className="logo">Kareen Nails</h1>
          <p className="subtitle">קטלוג עיצובים מקצועיים</p>
        </div>
      </header>

      <main className="main-content">
        <section className="video-section">
          <div className="video-wrapper">
            <video
              className="hero-video"
              src="/images/store nails video.mp4"
              autoPlay
              loop
              muted
              playsInline
            >
              הדפדפן שלך לא תומך בוידיאו.
            </video>
            <div className="video-overlay">
              <h2 className="video-title">ברוכים הבאים ל-Kareen Nails</h2>
              <p className="video-subtitle">איכות, מקצועיות ויופי</p>
            </div>
          </div>
        </section>

        <section className="gallery-section">
         
          <div className="gallery-grid">
            <div className="gallery-item" onClick={() => setSelectedGalleryImage('/images/nail manger.jpeg')}>
              <img src="/images/nail manger.jpeg" alt="מנהלת הסלון" className="gallery-image gallery-image-top" />
            </div>
            <div className="gallery-item" onClick={() => setSelectedGalleryImage('/images/store.jpeg')}>
              <img src="/images/store1.jpeg" alt="הסלון" className="gallery-image gallery-image-top" />
            </div>
            <div className="gallery-item" onClick={() => setSelectedGalleryImage('/images/store2.jpeg')}>
              <img src="/images/store2.jpeg" alt="הסלון" className="gallery-image gallery-image-top" />
            </div>
            
          </div>
        </section>

        <div className="catalog-container">
          {catalogItems.map((item, index) => (
            <div
              key={item.id}
              className="catalog-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedItem(item)}
            >
              <div className={`card-image-wrapper ${item.id === 1 || item.id === 3 ? 'card-image-wrapper-special' : ''}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={`card-image ${item.id === 1 || item.id === 3 ? 'card-image-special' : ''}`}
                  onError={(e) => {
                    e.target.src = '/images/nails.jpeg'
                  }}
                />
                <div className="card-overlay">
                  <span className="view-details">לחץ לפרטים</span>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{item.name}</h3>
                <p className="card-price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedItem(null)}>
              ×
            </button>
            <div className={`modal-image-wrapper ${selectedItem.id === 0 ? 'modal-image-wrapper-top' : ''}`}>
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className={`modal-image ${selectedItem.id === 0 ? 'modal-image-top' : ''}`}
                onError={(e) => {
                  e.target.src = '/images/nails.jpeg'
                }}
              />
            </div>
            <div className="modal-info">
              <h2 className="modal-title">{selectedItem.name}</h2>
              <p className="modal-description">{selectedItem.description}</p>
              <p className="modal-price-large">{selectedItem.price}</p>
            </div>
          </div>
        </div>
      )}

      {selectedGalleryImage && (
        <div className="modal-overlay" onClick={() => setSelectedGalleryImage(null)}>
          <div className="modal-content modal-content-gallery" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedGalleryImage(null)}>
              ×
            </button>
            <div className="modal-image-wrapper">
              <img
                src={selectedGalleryImage}
                alt="גלריה"
                className="modal-image"
                onError={(e) => {
                  e.target.src = '/images/nails.jpeg'
                }}
              />
            </div>
          </div>
        </div>
      )}

      <footer className="footer" dir="ltr">
        <p>© Designed and developed by Zaheya Kdmany, 2026</p>
      </footer>
    </div>
  )
}

export default App
