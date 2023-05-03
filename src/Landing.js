import about from './about.jpg';
import book1 from './book1.jpg';
import book2 from './book2.jpg';
import book3 from './book3.jpg';
import book4 from './book4.jpg';
import book5 from './book5.jpg';
import { Link } from 'react-router-dom';

const Landing = () => {
    return ( 
        <main>
            {/* Hero Section */}
            <div className="hero-section landing"></div>
            {/* End of Hero Section */}

            {/* About Section */}
            <div className="about-section">
                <div className='about-img'>
                    <img src={about} alt="about us" />
                </div>
                <div className='about-info'>
                    <h2>About Us</h2>
                    <h4>We will help you acquire knowledge that will bring the best of you.</h4>
                    <p>
                        IRead is a virtual library that offers a wide collection of books across various genres and categories, 
                        including fiction, non-fiction, biographies, self-help, health and wellness, business, and many more. 
                        It provides affordable membership plans for readers to access the best books from best-selling authors 
                        on any device. The platform is user-friendly, regularly updated with new releases and best-sellers, and 
                        supported by experienced librarians providing exceptional customer service.
                    </p>
                </div>
            </div>
            {/* End of About Section */}

            {/* Books Cover Section */}
            <div className='books-cover-section'>
                <div className='books-cover-heading'>
                    <div className='bch-left'>
                        <h2>Let's see the best selling books of all time</h2>
                        <Link to='/books' className='bch-link'>Explore</Link>
                    </div>
                    <div className='bch-right'>
                        <p>
                            The best-selling books of all time include literary classics, religious texts, and modern-day bestsellers, 
                            reflecting the diversity of human experiences and the power of storytelling to captivate and inspire. 
                            They have captured the hearts of readers across generations and continue to be widely read and loved today. 
                            The list includes timeless classics like "Don Quixote" and "The Little Prince," religious texts like the 
                            Bible and Quran, and modern-day bestsellers like "Harry Potter" and "The Hunger Games." These books remind 
                            us that literature has the ability to transcend time, language, and cultural barriers and can stay with us 
                            for a lifetime.
                        </p>
                    </div>
                </div>
                <div className='books-cover-imgs'>
                    <img src={book1} alt='Psychology book' />
                    <img src={book2} alt='The Chalk Man' />
                    <img src={book3} alt='The Woman King' />
                    <img src={book4} alt='Personality' />
                    <img src={book5} alt='Become Smart' />
                </div>
                <div className='books-cover-footer'>
                    <h2>Read our wonderful books by well-known authors for everyone</h2>
                    <p>
                        "As long as you are living, never put an end to learning"
                    </p>
                </div>
            </div>
            {/* End of Books Cover Section */}

        </main>
    );
}
 
export default Landing;