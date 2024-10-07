import { Carousel } from 'flowbite-react';
import Link from 'next/link';

const slides = [
  {
    imageUrl: '/images/hero-banner-1.jpg', // Thay thế bằng đường dẫn ảnh của bạn
    title: 'Bảo Vệ Vững Chắc, An Tâm Tận Hưởng',
    buttonText: 'Khám phá ngay',
    link: '/dich-vu',
  },
  {
    imageUrl: '/images/hero-banner-2.jpg', // Thay thế bằng đường dẫn ảnh của bạn
    title: 'Tương Lai Tươi Sáng, Bắt Đầu Từ Hôm Nay',
    buttonText: 'Tìm hiểu thêm',
    link: '/dich-vu/bhxh-tu-nguyen',
  },
  // Thêm slide khác nếu cần
];

const HeroBanner = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-full">
            <img
              src={slide.imageUrl}
              alt={`Banner ${index + 1}`}
              className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center">
              <div>
                <h2 className="text-3xl sm:text-5xl font-bold">{slide.title}</h2>
                <Link href={slide.link} passHref legacyBehavior>
                  <a>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
                      {slide.buttonText}
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroBanner;