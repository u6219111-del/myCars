import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translation resources
const resources = {
  en: {
    translation: {
      // Header
      home: "Home",
      vehicles: "Vehicles",
      services: "Services",
      about_us: "About Us",
      contact: "Contact",
      blog: "Blog",
      favorites: "Favorites",
      cart: "Cart",
      login: "Login",
      register: "Register",
      logout: "Logout",
      hi: "Hi",
      testimonials: "Testimonials",

      newsletter_title: "Subscribe to our newsletter",
      newsletter_subtitle: "Get the latest updates straight to your inbox",
      email_placeholder: "Enter your email",
      subscribe: "Subscribe",
      subscribing: "Subscribing...",
      newsletter_disclaimer: "We respect your privacy",
      email_required: "Email is required",
      invalid_email: "Invalid email",
      subscription_success: "Subscription successful!",
      subscription_error: "Something went wrong. Try again later.",

      our_partners: "Our Partners",
      partners_subtitle: "We collaborate with the best companies",
      partner_1_name: "TechCorp",
      partner_1_description: "Innovative solutions for modern businesses.",
      partner_2_name: "EcoEnergy",
      partner_2_description: "Sustainable energy solutions worldwide.",
      partner_3_name: "HealthPlus",
      partner_3_description: "Leading healthcare services provider.",
      partner_4_name: "SmartHome",
      partner_4_description: "Smart home devices for a connected life.",
      partner_5_name: "AutoDrive",
      partner_5_description: "Revolutionizing autonomous vehicle technology.",
      partner_6_name: "FinWise",
      partner_6_description: "Financial services and consulting experts.",
      become_partner: "Become a Partner",

      // Home page
      premium_car_rentals: "Premium Car Rentals",
      discover_freedom:
        "Discover the freedom of driving with our premium fleet. From city cars to luxury SUVs, we have the perfect vehicle for every journey.",
      rent_a_car: "Rent a Car",
      our_services: "Our Services",
      download_app: "Download mobile app",
      app_store: "Downoload on the App Store",
      google_play: "GET IT ON Google Play",
      rent_a_premium_car:
        "Rent a premium car and enjoy comfort, style and power with every kilometer.",
      // Vehicles page
      select_vehicle_group: "Select a vehicle group",
      all_vehicles: "All Vehicles",
      minivan: "Minivan",
      sport: "Sport",
      suv: "SUV",
      sedan: "Sedan",
      cabriolet: "Cabriolet",
      automatic: "Automatic",
      manual: "Manual",
      air_conditioner: "Air Conditioner",
      no_ac: "No AC",
      view_details: "View Details",
      add_to_cart: "Add to Cart",
      add_to_favorites: "Add to Favorites",
      in_favorites: "In Favorites",

      // Cart page
      shopping_cart: "Shopping Cart",
      your_cart_is_empty: "Your cart is empty",
      start_adding_cars: "Start adding some cars to your cart",
      browse_vehicles: "Browse Vehicles",
      subtotal: "Subtotal",
      shipping_taxes: "Shipping and taxes calculated at checkout.",
      checkout: "Checkout",
      continue_shopping: "Continue Shopping",
      qty: "Qty",
      remove: "Remove",
      total: "Total",

      cta_title: "Ready to Get Started?",
      cta_subtitle:
        "Browse our vehicles or contact us to find the perfect option for you.",
      browse_cars: "Browse Cars",
      contact_us: "Contact Us",

      our_features: "Our Features",
      features_subtitle: "Key advantages and features of our product",

      feature_1_title: "Easy to Use",
      feature_1_description:
        "An intuitive interface that is easy to learn from the first use.",

      feature_2_title: "Modern Technologies",
      feature_2_description:
        "We use cutting-edge solutions for high performance and reliability.",

      feature_3_title: "Cross-Platform",
      feature_3_description:
        "Works seamlessly on desktops, tablets, and mobile devices.",

      feature_4_title: "Flexible Settings",
      feature_4_description:
        "Customize the functionality to suit your individual needs.",

      feature_5_title: "Data Security",
      feature_5_description:
        "Your data is protected with modern encryption methods.",

      feature_6_title: "High Performance",
      feature_6_description:
        "Fast and stable performance even under heavy load.",

      // Favorites page
      your_favorites: "Your Favorites",
      favorites_list_empty: "Your favorites list is empty",
      start_adding_favorites: "Start adding some cars to your favorites",

      // Checkout success page
      order_placed_successfully: "Order Placed Successfully!",
      thank_you_purchase:
        "Thank you for your purchase. Your order has been confirmed and will be processed shortly.",
      what_happens_next: "What happens next?",
      confirmation_email: "We'll send you a confirmation email shortly",
      prepare_rental: "Our team will prepare your rental agreement",
      pickup_instructions: "You'll receive pickup instructions via email",
      return_home: "Return to Home",
      browse_more_vehicles: "Browse More Vehicles",

      // Login page
      sign_in: "Sign In",
      login_success: "You have logged in successfully!",
      logged_in_successfully: "You have logged in successfully!",
      registration_success: "Registration successful!",
      email_address: "Email Address",
      password: "Password",
      remember_me: "Remember me",
      forgot_password: "Forgot password?",
      sign_in_button: "Sign in",
      dont_have_account: "Don't have an account?",
      sign_up: "Sign up",
      failed_sign_in: "Failed to sign in",

      // Register page
      passwords_do_not_match: "Passwords do not match",
      failed_create_account: "Failed to create an account",

      // Register page
      create_account: "Create Account",
      register_success_msg: "Registration successful!",
      confirm_password: "Confirm Password",
      already_have_account: "Already have an account?",
      sign_in_link: "Sign in",

      // Services page
      our_services_title: "Our Services",
      services_subtitle:
        "Explore our range of services designed to make your car rental experience seamless and enjoyable.",
      premium_fleet: "Premium Fleet",
      competitive_pricing: "Competitive Pricing",
      easy_booking: "Easy Booking",
      customer_support: "24/7 Customer Support",
      one_way_rentals: "One-Way Rentals",
      long_term_deals: "Long-Term Deals",
      car_rental_desc:
        "Our car rental service offers you the best vehicles for every need.",
      chauffeur_service_desc:
        "Professional chauffeur services for a comfortable and stress-free ride.",
      long_term_leasing_desc:
        "Flexible long-term rental options for personal and business needs.",
      roadside_assistance_desc:
        "Reliable roadside assistance available 24/7 to keep you safe on the road.",
      gps_navigation_desc:
        "GPS navigation for easy and efficient directions on the go.",
      child_safety_seats_desc:
        "Child safety seats for a secure and comfortable ride.",
      why_choose_our_services: "Why Choose Our Services?",
      // Footer
      address: "Address",
      email: "Email",
      phone: "Phone",
      useful_links: "Useful links",
      gallery: "Gallery",
      faq: "F.A.Q",
      download_app_footer: "Download App",
      app_store_footer: "Downoload on the App Store",
      google_play_footer: "GET IT ON Google Play",
      copyright: "© Copyright Car Rental 2024. Design by Figma.guru",

      // Additional components
      step1_title: "Erat at semper",
      step1_desc:
        "Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum",
      step2_title: "Urna nec vivamus risus duis arcu",
      step2_desc:
        "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper",
      step3_title: "Lobortis euismod imperdiet tempus",
      step3_desc:
        "Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc luctus viverra nisi",
      step4_title: "Cras nulla aliquet nam eleifend amet et",
      step4_desc:
        "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt vulputate libero",

      experience_road: "Experience the road like never before",
      book_description:
        "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper.",
      view_all_cars: "View all cars",
      book_your_car: "Book your car",
      car_type: "Car type",
      sports: "Sports",
      place_of_rental: "Place of rental",
      place_of_return: "Place of return",
      downtown_office: "Downtown Office",
      hotel_district: "Hotel District",
      shopping_center: "Shopping Center",
      airport_terminal: "Airport Terminal",
      central_station: "Central Station",
      harbor_point: "Harbor Point",
      book_now: "Book now",
      successfully_booked: "Successfully booked",

      cars: "Cars",
      customers: "Customers",
      years: "Years",
      miles: "Miles",
      facts_in_numbers: "Facts In Numbers",
      facts_description:
        "Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper fermentum.",

      choose_car_suits: "Choose the car that suits you",
      view_all: "View All",
      loading_cars: "Loading cars...",
      failed_load_cars: "Failed to load cars",
      no_cars_found: "No cars found.",

      availability: "Availability",
      availability_desc:
        "Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis",
      comfort: "Comfort",
      comfort_desc:
        "Gravida auctor fermentum morbi vulputate ac egestas orcietium convallis",
      savings: "Savings",
      savings_desc:
        "Pretium convallis id diam sed commodo vestibulum lobortis volutpat",

      enjoy_every_mile: "Enjoy every mile with adorable companionship.",
      enjoy_description:
        "Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in. Diam tincidunt tincidunt erat",
      enter_city: "Enter city:",
      search: "Search",

      drive_feels_extraordinary: "Where every drive feels extraordinary",
      variety_brands: "Variety Brands",
      variety_brands_desc:
        "Platea non auctor fermentum sollicitudin. Eget adipiscing augue sit quam natoque ornare cursus viverra odio.",
      awesome_support: "Awesome Support",
      awesome_support_desc:
        "Eget adipiscing augue sit quam natoque ornare cursus viverra odio. Diam quam gravida ultricies velit.",
      maximum_freedom: "Maximum Freedom",
      maximum_freedom_desc:
        "Diam quam gravida ultricies velit duis consequat integer. Est aliquam posuere vel rhoncus massa volutpat in.",
      flexibility_on_go: "Flexibility On The Go",
      flexibility_on_go_desc:
        "Vitae pretium nulla sed quam id nisl semper. Vel non in proin egestas dis faucibus rhoncus. Iaculis dignissim aenean pellentesque nisl.",

      happy_customers: "Happy customers",
      count_of_cars: "Count of cars",
      years_of_experience: "Years of experience",

      unlock_unforgettable_memories:
        "Unlock unforgettable memories on the road",
      memories_description:
        "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper",
      memories_item1:
        "Velit semper morbi. Purus non eu cursus porttitor tristique et gravida...",
      memories_item2:
        "Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum",
      memories_item3:
        "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor",
      memories_item4: "Quis nunc interdum gravida ullamcorper",

      download_our_app: "Download our app",
      phone_description:
        "Turpis morbi enim nisi pulvinar leo dui tellus. Faucibus egestas semper diam rutrum dictumst ut donec. Nisi nisi morbi vel in vulputate. Nulla nam eget urna fusce vulputate at risus",
      app_store_download: "Downoload on the",
      google_play_download: "GET IT ON",

      reviews_from_customers: "Reviews from our customers",
      review1_text:
        "Et aliquet netus at sapien pellentesque mollis nec dignissim maecenas. Amet erat volutpat quisque odio purus feugiat. In gravida neque",
      review2_text:
        "Purus consectetur varius quis urna phasellus enim mattis. Sem tincidunt tortor nunc egestas amet adipiscing ligula",
      review3_text:
        "Quam neque odio urna euismod felis. Sit egestas magna in quisque famesdapibus quis sapien magna. Nisl non eget sit pellentesque tristique et",

      car_rental_blog: "Car Rental Blog",
      blog_subtitle: "Tips, guides, and insights for your next journey",
      article: "Article",
      load_more_articles: "Load More Articles",
      blog_post1_title: "Top 10 Road Trip Destinations for 2024",
      blog_post1_excerpt:
        "Discover the most scenic and exciting road trip destinations for your next adventure. From coastal highways to mountain passes, we've got you covered.",
      blog_post1_date: "March 15, 2024",
      blog_post1_author: "Alex Morgan",
      blog_post2_title: "Essential Car Maintenance Tips for Long Journeys",
      blog_post2_excerpt:
        "Learn how to prepare your vehicle for extended trips with our comprehensive maintenance checklist. Stay safe and avoid breakdowns on the road.",
      blog_post2_date: "February 28, 2024",
      blog_post2_author: "Jamie Smith",
      blog_post3_title: "Choosing the Right Vehicle for Your Family Vacation",
      blog_post3_excerpt:
        "Not sure which car is best for your family's needs? Our guide helps you select the perfect vehicle based on size, comfort and features.",
      blog_post3_date: "February 10, 2024",
      blog_post3_author: "Taylor Johnson",

      customer_testimonials: "Customer Testimonials",
      testimonials_subtitle:
        "Hear what our satisfied customers have to say about their experiences",
      testimonial1_name: "Sarah Johnson",
      testimonial1_company: "Tech Innovations Inc.",
      testimonial1_text:
        "The car rental service was exceptional! The vehicle was clean, well-maintained, and exactly what we needed for our family vacation. The booking process was seamless and the staff was incredibly helpful.",
      testimonial2_name: "Michael Chen",
      testimonial2_company: "Global Solutions Ltd.",
      testimonial2_text:
        "As a business traveler, I appreciate the reliability and professionalism of this car rental company. Their premium fleet and excellent customer service make every trip stress-free. Highly recommended!",
      testimonial3_name: "Emily Rodriguez",
      testimonial3_company: "Creative Designs Co.",
      testimonial3_text:
        "I've been using their services for over two years now, and they consistently exceed my expectations. The variety of vehicles, competitive pricing, and 24/7 support make them my go-to choice for all transportation needs.",
      ready_experience_excellence: "Ready to Experience Excellence?",
      join_satisfied_customers:
        "Join thousands of satisfied customers who trust us for their transportation needs.",
      book_ride_today: "Book Your Ride Today",

      frequently_asked_questions: "Frequently Asked Questions",
      faq_subtitle:
        "Find answers to common questions about our car rental services",
      faq1_question: "What documents do I need to rent a car?",
      faq1_answer:
        "You'll need a valid driver's license, proof of insurance, and a credit card in your name. For international renters, a passport is also required.",
      faq2_question: "What is your cancellation policy?",
      faq2_answer:
        "You can cancel your reservation up to 24 hours before the scheduled pickup time for a full refund. Cancellations made less than 24 hours in advance may incur a fee.",
      faq3_question: "Do you offer one-way rentals?",
      faq3_answer:
        "Yes, we offer one-way rentals between select locations. Additional fees may apply depending on the route and availability.",
      faq4_question: "What is included in the rental price?",
      faq4_answer:
        "Our rental prices include the vehicle rental, basic insurance coverage, and taxes. Additional services like GPS, child seats, and premium insurance are available for an extra fee.",
      faq5_question: "Can I modify my reservation?",
      faq5_answer:
        "Yes, you can modify your reservation by contacting our customer service team. Changes to pickup/drop-off dates, vehicle type, or location may affect the rental rate.",
      faq6_question: "What happens if I return the car late?",
      faq6_answer:
        "Late returns may incur additional charges. We recommend contacting us as soon as possible if you anticipate returning the vehicle after the agreed-upon time.",
      still_have_questions: "Still have questions?",
      contact_support_description:
        "Can't find the answer you're looking for? Contact our customer support team for personalized assistance.",
      contact_support: "Contact Support",

      our_locations: "Our Locations",
      locations_subtitle: "Conveniently located offices to serve you better",
      downtown_address: "123 Main Street, Downtown",
      downtown_hours: "Mon-Sun: 7:00 AM - 10:00 PM",
      hotel_address: "789 Luxury Hotel District, Downtown",
      hotel_hours: "Mon-Sun: 8:00 AM - 11:00 PM",
      shopping_address: "101 Premium Shopping Center, Business District",
      shopping_hours: "Mon-Sun: 9:00 AM - 10:00 PM",
      airport_address: "International Airport, Terminal 2",
      airport_hours: "24/7 - Open All Year Round",
      central_address: "456 Central Avenue, City Center",
      central_hours: "Mon-Sun: 6:00 AM - 11:00 PM",
      get_directions: "Get Directions",
      looking_specific_location: "Looking for a specific location?",
      location_contact_description:
        "Can't find the location you're looking for? Contact us for information about our additional service points.",
      contact_us: "Contact Us",

      bmw_center: "BMW Center",
      bmw_address: "BMW Group Headquarters, Munich, Germany",

      mercedes_center: "Mercedes-Benz Center",
      mercedes_address: "Mercedes-Benz Group AG, Stuttgart, Germany",

      audi_center: "Audi Center",
      audi_address: "Audi AG Headquarters, Ingolstadt, Germany",

      working_hours: "Mon–Fri: 9:00 – 18:00",

      contact_subtitle:
        "We'd love to hear from you! Send us a message and we'll respond as soon as possible.",
      get_in_touch: "Get in touch",
      contact_description:
        "Have questions about our services or need assistance with a reservation? Reach out to our friendly team and we'll be happy to help.",
      name: "Name",
      subject: "Subject",
      message: "Message",
      send_message: "Send Message",
      loading: "Loading",
      subscribe_to_newsletter: "Subscribe to Newsletter",
      enter_email_placeholder: "Enter your email",
      subscribe: "Subscribe",
      privacy_policy: "Privacy Policy",
      terms_of_service: "Terms of Service",
      cookie_policy: "Cookie Policy",
      access_denied: "Access Denied",
      admin_access_restricted: "Administrator access is restricted.",
      admin_login_required: "Admin Login Required",
      please_login_to_access_admin: "Please log in to access the admin panel.",
      my_account: "My Account",
      admin_panel: "Admin Panel",
      total_users: "Total Users",
      manage_users: "Manage Users",
      user_role: "User Role",
      update_role: "Update Role",
      please_login_to_view_account: "Please log in to view your account",
      login_to_access_your_account:
        "Please log in to access your account information",
      user_avatar: "User Avatar",
      full_name: "Full Name",
      avatar_url: "Avatar URL",
      save: "Save",
      cancel: "Cancel",
      edit_profile: "Edit Profile",
      role: "Role",
      member_since: "Member Since",
      not_provided: "Not provided",
      unknown: "Unknown",
    },
  },
  ru: {
    translation: {
      // Header
      home: "Главная",
      vehicles: "Автомобили",
      services: "Услуги",
      about_us: "О нас",
      contact: "Контакты",
      blog: "Блог",
      favorites: "Избранное",
      cart: "Корзина",
      login: "Вход",
      register: "Регистрация",
      logout: "Выход",
      hi: "Привет",
      testimonials: "Отзывы",

      newsletter_title: "Подпишитесь на нашу рассылку",
      newsletter_subtitle: "Получайте последние новости прямо на вашу почту",
      email_placeholder: "Введите ваш email",
      subscribe: "Подписаться",
      subscribing: "Подписка...",
      newsletter_disclaimer: "Мы уважаем вашу конфиденциальность",
      email_required: "Требуется электронная почта",
      invalid_email: "Неверный адрес электронной почты",
      subscription_success: "Подписка успешна!",
      subscription_error: "Что-то пошло не так. Попробуйте позже.",
      our_partners: "Наши партнеры",
      partners_subtitle: "Мы сотрудничаем с лучшими компаниями",
      partner_1_name: "TechCorp",
      partner_1_description: "Инновационные решения для современных бизнесов.",
      partner_2_name: "EcoEnergy",
      partner_2_description: "Устойчивые энергетические решения по всему миру.",
      partner_3_name: "HealthPlus",
      partner_3_description: "Ведущий поставщик медицинских услуг.",
      partner_4_description: "Умные домашние устройства для связанной жизни.",
      partner_4_name: "SmartHome",
      partner_5_name: "AutoDrive",
      partner_5_description:
        "Революция в технологии автономных транспортных средств.",
      partner_6_name: "FinWise",
      partner_6_description:
        "Эксперты в области финансовых услуг и консалтинга.",
      become_partner: "Стать партнером",

      // Home page
      premium_car_rentals: "Премиальная аренда автомобилей",
      discover_freedom:
        "Откройте для себя свободу вождения с нашим премиальным автопарком. От городских автомобилей до роскошных внедорожников - у нас есть идеальный автомобиль для каждого путешествия.",
      rent_a_car: "Арендовать авто",
      our_services: "Наши услуги",
      download_app: "Скачать мобильное приложение",
      app_store: "Скачать в App Store",
      google_play: "Доступно в Google Play",
      rent_a_premium_car:
        "Арендуйте премиальный автомобиль и наслаждайтесь комфортом, стилем и мощью на каждом километре.",
      // Vehicles page
      select_vehicle_group: "Выберите группу автомобилей",
      all_vehicles: "Все автомобили",
      minivan: "Минивэн",
      sport: "Спорт",
      suv: "Внедорожник",
      sedan: "Седан",
      cabriolet: "Кабриолет",
      automatic: "Автоматическая",
      manual: "Механическая",
      air_conditioner: "Кондиционер",
      no_ac: "Нет кондиционера",
      view_details: "Подробнее",
      add_to_cart: "В корзину",
      add_to_favorites: "В избранное",
      in_favorites: "В избранном",

      cta_title: "Готовы начать?",
      cta_subtitle:
        "Просмотрите наш автопарк или свяжитесь с нами, чтобы подобрать идеальный вариант.",
      browse_cars: "Посмотреть автомобили",
      contact_us: "Связаться с нами",

      // Cart page
      shopping_cart: "Корзина",
      your_cart_is_empty: "Ваша корзина пуста",
      start_adding_cars: "Начните добавлять автомобили в корзину",
      browse_vehicles: "Просмотреть автомобили",
      subtotal: "Промежуточный итог",
      shipping_taxes: "Доставка и налоги рассчитываются при оформлении заказа.",
      checkout: "Оформить заказ",
      continue_shopping: "Продолжить покупки",
      qty: "Кол-во",
      remove: "Удалить",
      total: "Итого",

      our_features: "Наши возможности",
      features_subtitle: "Основные преимущества и функции нашего продукта",

      feature_1_title: "Простота использования",
      feature_1_description:
        "Интуитивно понятный интерфейс, который легко освоить с первого раза.",

      feature_2_title: "Современные технологии",
      feature_2_description:
        "Используем передовые решения для высокой производительности и надежности.",

      feature_3_title: "Кроссплатформенность",
      feature_3_description:
        "Работает одинаково хорошо на компьютерах, планшетах и смартфонах.",

      feature_4_title: "Гибкие настройки",
      feature_4_description:
        "Настраивайте функциональность под свои индивидуальные потребности.",

      feature_5_title: "Безопасность данных",
      feature_5_description:
        "Ваши данные надежно защищены современными методами шифрования.",

      feature_6_title: "Высокая производительность",
      feature_6_description: "Быстрая работа даже при высокой нагрузке.",

      // Favorites page
      your_favorites: "Ваше избранное",
      favorites_list_empty: "Ваш список избранного пуст",
      start_adding_favorites: "Начните добавлять автомобили в избранное",

      // Checkout success page
      order_placed_successfully: "Заказ успешно оформлен!",
      thank_you_purchase:
        "Спасибо за покупку. Ваш заказ подтвержден и будет обработан в ближайшее время.",
      what_happens_next: "Что дальше?",
      confirmation_email:
        "Мы вскоре отправим вам электронное письмо с подтверждением",
      prepare_rental: "Наша команда подготовит договор аренды",
      pickup_instructions:
        "Вы получите инструкции по получению по электронной почте",
      return_home: "Вернуться на главную",
      browse_more_vehicles: "Просмотреть другие автомобили",

      // Login page
      sign_in: "Войти",
      login_success: "Вы вошли в систему!",
      logged_in_successfully: "Вы вошли в систему!",
      registration_success: "Регистрация успешна!",
      email_address: "Адрес электронной почты",
      password: "Пароль",
      remember_me: "Запомнить меня",
      forgot_password: "Забыли пароль?",
      sign_in_button: "Войти",
      dont_have_account: "Нет аккаунта?",
      sign_up: "Зарегистрироваться",
      failed_sign_in: "Не удалось войти",

      // Register page
      passwords_do_not_match: "Пароли не совпадают",
      failed_create_account: "Не удалось создать аккаунт",

      // Register page
      create_account: "Создать аккаунт",
      register_success_msg: "Регистрация успешна!",
      confirm_password: "Подтвердите пароль",
      already_have_account: "Уже есть аккаунт?",
      sign_in_link: "Войти",

      // Services page
      our_services_title: "Наши услуги",
      services_subtitle:
        "Изучите наш ассортимент услуг, разработанных для того, чтобы сделать ваш опыт аренды автомобиля беспроблемным и приятным.",
      premium_fleet: "Премиальный автопарк",
      competitive_pricing: "Конкурентные цены",
      easy_booking: "Простое бронирование",
      customer_support: "Круглосуточная поддержка",
      one_way_rentals: "Односторонняя аренда",
      long_term_deals: "Долгосрочные сделки",
      car_rental_desc:
        "Наш сервис аренды автомобилей предлагает вам лучшие транспортные средства для любых нужд.",
      chauffeur_service_desc:
        "Профессиональные услуги водителя для комфортной и беззаботной поездки.",
      long_term_leasing_desc:
        "Гибкие долгосрочные варианты аренды для личных и деловых нужд.",
      roadside_assistance_desc:
        "Надежная помощь на дороге доступна круглосуточно, чтобы обеспечить вашу безопасность на дороге.",
      gps_navigation_desc:
        "Жолдо оңой жана натыйжалуу багыттоо үчүн GPS навигациясы.",
      child_safety_seats_desc:
        "Детские автокресла для безопасной и комфортной поездки.",
      why_choose_our_services: "Почему выбирают наши услуги?",
      // Footer
      address: "Адрес",
      email: "Электронная почта",
      phone: "Телефон",
      useful_links: "Полезные ссылки",
      gallery: "Галерея",
      faq: "Часто задаваемые вопросы",
      download_app_footer: "Скачать приложение",
      app_store_footer: "Скачать в App Store",
      google_play_footer: "Доступно в Google Play",
      copyright: "© Авторские права Car Rental 2024. Дизайн от Figma.guru",

      step1_title: "Эрат ат семпер",
      step1_desc:
        "Нон амет ферментум ест ин эним ат сит улламкорпер. Сит элементум рhonкус нуллам феугиат. Рисус сем ферментум",
      step2_title: "Урна нец вивамус рисус дуис арку",
      step2_desc:
        "Аликуам адиписцинг велит семпер морби. Пурус нон эу курсус порттитор триistique эт гравида. Куис нунц интердум гравида улламкорпер",
      step3_title: "Лобортис эуисмод импердиет темпус",
      step3_desc:
        "Виверра сцелерискуэ маурис эт нуллам молестиэ эт. Аугуэ адиписцинг праэсент нисл црас нунц луцтус виверра ниси",
      step4_title: "Црас нулла алиquet нам элеифенд амет эт",
      step4_desc:
        "Аликуам адиписцинг велит семпер морби. Пурус нон эу курсус порттитор триistique эт гравида. Куис нунц интердум гравида улламкорпер сед интэгер. Куиске элеифенд тинцидунт вулпутатэ либеро",

      experience_road: "Испытайте дорогу как никогда раньше",
      book_description:
        "Аликуам адиписцинг велит семпер морби. Пурус нон эу курсус порттитор триistique эт гравида. Куис нунц интердум гравида улламкорпер.",
      view_all_cars: "Просмотреть все автомобили",
      book_your_car: "Забронируйте свой автомобиль",
      car_type: "Тип автомобиля",
      sports: "Спорт",
      place_of_rental: "Место аренды",
      place_of_return: "Место возврата",
      downtown_office: "Центральный офис",
      hotel_district: "Гостиничный район",
      shopping_center: "Торговый центр",
      airport_terminal: "Терминал аэропорта",
      central_station: "Центральный вокзал",
      harbor_point: "Порт",
      book_now: "Забронировать сейчас",
      successfully_booked: "Успешно забронировано",

      cars: "Автомобили",
      customers: "Клиенты",
      years: "Лет",
      miles: "Миль",
      facts_in_numbers: "Факты в цифрах",
      facts_description:
        "Амет црас хац орци лацус. Фауцибус ипсум арку лецтус нихб сапиен бибендум улламкорпер ин. Диам тинцидунт тинцидунт эрат ат семпер ферментум.",

      choose_car_suits: "Выберите автомобиль, который подходит вам",
      view_all: "Просмотреть все",
      loading_cars: "Загрузка автомобилей...",
      failed_load_cars: "Не удалось загрузить автомобили",
      no_cars_found: "Автомобили не найдены.",

      availability: "Доступность",
      availability_desc:
        "Диам тинцидунт тинцидунт эрат ат семпер ферментум. Ид ултрициэс квис",
      comfort: "Комфорт",
      comfort_desc:
        "Гравида ауцтор ферментум морби вулпутатэ ац эгэстас орциэтиум цонваллис",
      savings: "Экономия",
      savings_desc:
        "Прэтиум цонваллис ид диам сед цоммодо вестибулум лобортис волутпат",

      enjoy_every_mile: "Наслаждайтесь каждой милей с приятным компаньоном.",
      enjoy_description:
        "Амет црас хац орци лацус. Фауцибус ипсум арку лецтус нихб сапиен бибендум улламкорпер ин. Диам тинцидунт тинцидунт эрат",
      enter_city: "Введите город:",
      search: "Поиск",

      drive_feels_extraordinary: "Где каждая поездка кажется экстраординарной",
      variety_brands: "Разнообразие брендов",
      variety_brands_desc:
        "Платеа нон ауцтор ферментум соллицитудин. Эгет адиписцинг аугуэ сит квам натокве орнаре курсус виверра одио.",
      awesome_support: "Отличная поддержка",
      awesome_support_desc:
        "Эгет адиписцинг аугуэ сит квам натокве орнаре курсус виверра одио. Диам квам гравида ултрициэс велит.",
      maximum_freedom: "Максимальная свобода",
      maximum_freedom_desc:
        "Диам квам гравида ултрициэс велит дуис цонсекват интэгер. Эст аликуам посуэре вел рhonкус масса волутпат ин.",
      flexibility_on_go: "Гибкость в движении",
      flexibility_on_go_desc:
        "Витаэ прэтиум нулла сед квам ид нисл семпер. Вел нон ин пробин эгэстас дис фауцибус rhoncus. Иацулис дигниссим аэнэан пэллентэсквэ нисл.",

      happy_customers: "Довольных клиентов",
      count_of_cars: "Количество автомобилей",
      years_of_experience: "Лет опыта",

      unlock_unforgettable_memories:
        "Разблокируйте незабываемые воспоминания на дороге",
      memories_description:
        "Аликуам адиписцинг велит семпер морби. Пурус нон эу курсус порттитор триistique эт гравида. Куис нунц интердум гравида улламкорпер",
      memories_item1:
        "Велит семпер морби. Пурус нон эу курсус порттитор триistique эт гравида...",
      memories_item2:
        "Пурус нон эу курсус порттитор триistique эт гравида. Куис нунц интердум",
      memories_item3:
        "Аликуам адиписцинг велит семпер морби. Пурус нон эу курсус порттитор",
      memories_item4: "Куис нунц интердум гравида улламкорпер",

      download_our_app: "Скачайте наше приложение",
      phone_description:
        "Турпис морби эним nisi пулвинar лео дуи тэллус. Фауцибус эгэстас семпер диам рутрум дицтумст ут донец. Ниси nisi морби вэл ин вулпутатэ. Нулла нам эгет урна фусце вулпутатэ ат рисус",
      app_store_download: "Скачать в",
      google_play_download: "ДОСТУПНО В",

      reviews_from_customers: "Отзывы наших клиентов",
      review1_text:
        "Эт алиquet нетус ат сапиен пэллентэсквэ моллис нец дигниссим маэценас. Амет эрат волутпат квисквэ одио пурус фэугиат. Ин гравида неkвэ",
      review2_text:
        "Пурус цонсэцтетур вариус квис урна пhасэллус эним маттис. Сэм тинцидунт тортор нунц эгэстас амет адиписцинг лигула",
      review3_text:
        "Квам неkвэ одио урна эуисмод фэлис. Сит эгэстас магна ин kвисkвэ фамэсдапибус квис сапиен магна. Нисл нон эгет сит пэллентэсквэ триistique эт",

      car_rental_blog: "Блог по аренде автомобилей",
      blog_subtitle:
        "Советы, руководства и идеи для вашего следующего путешествия",
      article: "Статья",
      load_more_articles: "Загрузить больше статей",
      blog_post1_title:
        "Топ-10 направлений для путешествий на автомобиле в 2024 году",
      blog_post1_excerpt:
        "Откройте для себя самые живописные и захватывающие направления для поездок на автомобиле в вашем следующем приключении. От прибрежных автомагистралей до горных перевалов - мы позаботились о вас.",
      blog_post1_date: "15 марта 2024",
      blog_post1_author: "Алекс Морган",
      blog_post2_title:
        "Основные советы по техническому обслуживанию автомобилей для длительных поездок",
      blog_post2_excerpt:
        "Узнайте, как подготовить свой автомобиль к длительным поездкам с помощью нашего комплексного контрольного списка по техническому обслуживанию. Оставайтесь в безопасности и избегайте поломок на дороге.",
      blog_post2_date: "28 февраля 2024",
      blog_post2_author: "Джейми Смит",
      blog_post3_title:
        "Как выбрать подходящий автомобиль для семейного отдыха",
      blog_post3_excerpt:
        "Не уверены, какой автомобиль лучше подходит для нужд вашей семьи? Наше руководство поможет вам выбрать идеальный автомобиль в зависимости от размера, комфорта и особенностей.",
      blog_post3_date: "10 февраля 2024",
      blog_post3_author: "Тейлор Джонсон",

      customer_testimonials: "Отзывы клиентов",
      testimonials_subtitle:
        "Узнайте, что довольные клиенты говорят о своем опыте",
      testimonial1_name: "Сара Джонсон",
      testimonial1_company: "Tech Innovations Inc.",
      testimonial1_text:
        "Услуги проката автомобилей были исключительными! Автомобиль был чистым, хорошо обслуживаемым и именно тем, что нам нужно было для семейного отпуска. Процесс бронирования прошел безупречно, а персонал был невероятно helpful.",
      testimonial2_name: "Майкл Чен",
      testimonial2_company: "Global Solutions Ltd.",
      testimonial2_text:
        "Как деловой путешественник, я ценю надежность и профессионализм этой компании по аренде автомобилей. Их премиальный автопарк и отличное обслуживание клиентов делают каждую поездку без стресса. Настоятельно рекомендую!",
      testimonial3_name: "Эмили Родригес",
      testimonial3_company: "Creative Designs Co.",
      testimonial3_text:
        "Я пользуюсь их услугами уже более двух лет, и они постоянно превосходят мои ожидания. Разнообразие автомобилей, конкурентные цены и круглосуточная поддержка делают их моим первым выбором для всех транспортных потребностей.",
      ready_experience_excellence: "Готовы испытать совершенство?",
      join_satisfied_customers:
        "Присоединяйтесь к тысячам довольных клиентов, которые доверяют нам свои транспортные потребности.",
      book_ride_today: "Забронируйте поездку сегодня",

      frequently_asked_questions: "Часто задаваемые вопросы",
      faq_subtitle:
        "Найдите ответы на распространенные вопросы о наших услугах по аренде автомобилей",
      faq1_question: "Какие документы мне нужны для аренды автомобиля?",
      faq1_answer:
        "Вам понадобятся действующие водительские права, подтверждение страхования и кредитная карта на ваше имя. Для международных арендаторов также требуется паспорт.",
      faq2_question: "Какова ваша политика отмены?",
      faq2_answer:
        "Вы можете отменить бронирование до 24 часов до запланированного времени получения автомобиля и получить полный возврат средств. Отмена менее чем за 24 часа может повлечь дополнительную плату.",
      faq3_question: "Предлагаете ли вы одностороннюю аренду?",
      faq3_answer:
        "Да, мы предлагаем одностороннюю аренду между выбранными местоположениями. В зависимости от маршрута и доступности могут взиматься дополнительные сборы.",
      faq4_question: "Что включено в стоимость аренды?",
      faq4_answer:
        "Наши цены на аренду включают аренду автомобиля, базовое страховое покрытие и налоги. Дополнительные услуги, такие как GPS, детские автокресла и премиальное страхование, доступны за дополнительную плату.",
      faq5_question: "Могу ли я изменить свое бронирование?",
      faq5_answer:
        "Да, вы можете изменить бронирование, связавшись с нашей службой поддержки клиентов. Изменения дат получения/возврата, типа автомобиля или местоположения могут повлиять на стоимость аренды.",
      faq6_question: "Что произойдет, если я верну автомобиль с опозданием?",
      faq6_answer:
        "За поздний возврат могут взиматься дополнительные сборы. Мы рекомендуем связаться с нами как можно скорее, если вы предполагаете вернуть автомобиль после согласованного времени.",
      still_have_questions: "Остались вопросы?",
      contact_support_description:
        "Не можете найти ответ, который ищете? Свяжитесь с нашей службой поддержки клиентов для персональной помощи.",
      contact_support: "Связаться с поддержкой",

      our_locations: "Наши местоположения",
      locations_subtitle: "Удобно расположенные офисы для лучшего обслуживания",
      downtown_address: "123 Главная улица, Центр города",
      downtown_hours: "Пн-Вс: 7:00 AM - 10:00 PM",
      hotel_address: "789 Район отелей, Центр города",
      hotel_hours: "Пн-Вс: 8:00 AM - 11:00 PM",
      shopping_address: "101 Торговый центр, Бизнес-район",
      shopping_hours: "Пн-Вс: 9:00 AM - 10:00 PM",
      airport_address: "Международный аэропорт, Терминал 2",
      airport_hours: "24/7 - Открыто круглый год",
      central_address: "456 Центральный проспект, Центр города",
      central_hours: "Пн-Вс: 6:00 AM - 11:00 PM",
      get_directions: "Получить направления",
      looking_specific_location: "Ищете конкретное местоположение?",
      location_contact_description:
        "Не можете найти нужное местоположение? Свяжитесь с нами для получения информации о наших дополнительных пунктах обслуживания.",
      contact_us: "Связаться с нами",

      bmw_center: "Центр BMW",
      bmw_address: "Штаб-квартира BMW Group, Мюнхен, Германия",

      mercedes_center: "Центр Mercedes-Benz",
      mercedes_address: "Штаб-квартира Mercedes-Benz Group, Штутгарт, Германия",

      audi_center: "Центр Audi",
      audi_address: "Штаб-квартира Audi AG, Ингольштадт, Германия",

      working_hours: "Пн–Пт: 9:00 – 18:00",

      contact_subtitle:
        "Мы будем рады услышать вас! Отправьте нам сообщение, и мы ответим как можно скорее.",
      get_in_touch: "Связаться с нами",
      contact_description:
        "Есть вопросы о наших услугах или нужна помощь с бронированием? Обратитесь к нашей дружелюбной команде, и мы будем рады помочь.",
      name: "Имя",
      subject: "Тема",
      message: "Сообщение",
      send_message: "Отправить сообщение",
      loading: "Загрузка",
      subscribe_to_newsletter: "Подписаться на рассылку",
      enter_email_placeholder: "Введите ваш email",
      subscribe: "Подписаться",
      privacy_policy: "Политика конфиденциальности",
      terms_of_service: "Условия предоставления услуг",
      cookie_policy: "Политика использования файлов cookie",
      access_denied: "Доступ запрещен",
      admin_access_restricted: "Доступ к администратору ограничен.",
      admin_login_required: "Требуется вход в систему администратора",
      please_login_to_access_admin:
        "Пожалуйста, войдите для доступа к панели администратора.",
      my_account: "Мой аккаунт",
      admin_panel: "Панель администратора",
      total_users: "Всего пользователей",
      manage_users: "Управление пользователями",
      user_role: "Роль пользователя",
      update_role: "Обновить роль",
      please_login_to_view_account:
        "Пожалуйста, войдите, чтобы посмотреть ваш аккаунт",
      login_to_access_your_account:
        "Пожалуйста, войдите для доступа к информации вашего аккаунта",
      user_avatar: "Аватар пользователя",
      full_name: "Полное имя",
      avatar_url: "URL-адрес аватара",
      save: "Сохранить",
      cancel: "Отмена",
      edit_profile: "Редактировать профиль",
      role: "Роль",
      member_since: "Участник с",
      not_provided: "Не указано",
      unknown: "Неизвестно",
    },
  },
  ky: {
    translation: {
      loading: "Жүктөлүүдө",
      subscribe_to_newsletter: "Жаңылыктарга жазылуу",
      enter_email_placeholder: "Email дарегиңизди киргизиңиз",
      subscribe: "Жазылуу",
      privacy_policy: "Купуялык саясаты",
      terms_of_service: "Кызмат көрсөтүү шарттары",
      cookie_policy: "Cookie файлдары боюнча саясат",
      access_denied: "Кирүүгө тыю салынган",
      admin_access_restricted: "Админке кирүү чектелген.",
      admin_login_required: "Админ кирүү талап кылынат",
      please_login_to_access_admin: "Админ панелине кирүү үчүн кириниз.",
      my_account: "Менин аккаунтум",
      admin_panel: "Админ панели",
      total_users: "Жалпы колдонуучулар",
      manage_users: "Колдонуучуларды башкаруу",
      user_role: "Колдонуучу ролу",
      update_role: "Ролду жаңыртуу",
      please_login_to_view_account: "Аккаунтуңузду көрүү үчүн кириңиз",
      login_to_access_your_account: "Аккаунт маалыматыңызга кирүү үчүн кириңиз",
      user_avatar: "Колдонуучу аватары",
      full_name: "Толук аты",
      avatar_url: "Аватар URL",
      save: "Сактоо",
      cancel: "Жокко чыгаруу",
      edit_profile: "Профильди түзөтүү",
      role: "Рөлү",
      member_since: "Катталган датасы",
      not_provided: "Белгиленген жок",
      unknown: "Белгисиз",
      home: "Башкы бет",
      vehicles: "Автоунаа",
      services: "Кызматтар",
      about_us: "Биз жөнүндө",
      contact: "Байланыш",
      blog: "Блог",
      favorites: "Сүйүктүүлөр",
      cart: "Себет",
      login: "Кирүү",
      register: "Катталуу",
      logout: "Чыгуу",
      hi: "Салам",
      testimonials: "Пикирлер",
      newsletter_title: "Биздин жаңылыктарга жазылыңыз",
      newsletter_subtitle: "Акыркы жаңылыктарды түз почтаңызга алыңыз",
      email_placeholder: "Email дарегиңизди киргизиңиз",
      subscribing: "Жазылуу...",
      newsletter_disclaimer: "Биз сиздин купуялыгыңызды урматтайбыз",
      email_required: "Email талап кылынат",
      invalid_email: "Жарамсыз электрондук почта дареги",
      subscription_success: "Жазылуу ийгиликтүү болду!",
      subscription_error:
        "Бир нерсе туура эмес болду. Кийинчерээк аракет кылыңыз.",
      our_partners: "Биздин өнөктөштөр",
      partners_subtitle: "Биз мыкты компаниялар менен кызматташабыз",
      partner_1_name: "TechCorp",
      partner_1_description: "Заманбап бизнес үчүн инновациялык чечимдер.",
      partner_2_name: "EcoEnergy",
      partner_2_description:
        "Дүйнө жүзү боюнча туруктуу энергетикалык чечимдер.",
      partner_3_name: "HealthPlus",
      partner_3_description: "Медициналык кызматтардын алдыңкы провайдери.",
      partner_4_description: "Байланыштуу жашоо үчүн акылдуу үй шаймандары.",
      partner_4_name: "SmartHome",
      partner_5_name: "AutoDrive",
      partner_5_description: "Автономдуу унаа технологиясындагы революция.",
      partner_6_name: "FinWise",
      partner_6_description: "Каржы кызматтары жана консалтинг боюнча адистер.",
      become_partner: "Өнөктөш болуу",

      premium_car_rentals: "Премиум автоаренда",
      discover_freedom:
        "Биздин премиум автопарк менен жүрүү эркиндин таап көрүңүз. Шаардагы машинадан люкс SUV чейин, биздин ар бир саякат үчүн туура келген унаа бар.",
      rent_a_car: "Автоаренда",
      our_services: "Биздин кызматтар",
      download_app: "Мобилдик колдонмону жүктөп алуу",
      app_store: "App Store дүкөнүнөн жүктөп алыңыз",
      google_play: "Google Play дүкөнүнөн жүктөп алыңыз",
      rent_a_premium_car:
        "Премиум автоунааны ижарага алып, ар бир километрде ыңгайлуулукту, стилди жана күчтү сезиңиз.",

      select_vehicle_group: "Авто тобун тандаңыз",
      all_vehicles: "Бардык авто",
      minivan: "Минивэн",
      sport: "Спорт",
      suv: "SUV",
      sedan: "Седан",
      cabriolet: "Кабриолет",
      automatic: "Автоматтык",
      manual: "Механикалык",
      air_conditioner: "Кондиционер",
      no_ac: "Кондиционер жок",
      view_details: "Толук маалымат",
      add_to_cart: "Себетке кошуу",
      add_to_favorites: "Сүйүктүүгө кошуу",
      in_favorites: "Сүйүктүүдө",

      our_features: "Биздин мүмкүнчүлүктөр",
      features_subtitle:
        "Биздин продукттун негизги артыкчылыктары жана функциялары",

      feature_1_title: "Колдонууга оңой",
      feature_1_description:
        "Алгачкы колдонууда эле түшүнүктүү жана жеңил интерфейс.",

      feature_2_title: "Заманбап технологиялар",
      feature_2_description:
        "Жогорку өндүрүмдүүлүк жана ишенимдүүлүк үчүн алдыңкы технологияларды колдонобуз.",

      feature_3_title: "Көп платформалуу",
      feature_3_description:
        "Компьютерде, планшетте жана смартфондо бирдей иштейт.",

      feature_4_title: "Ийкемдүү жөндөөлөр",
      feature_4_description:
        "Функцияларды өз муктаждыгыңызга жараша ыңгайлаштырыңыз.",

      feature_5_title: "Маалыматтардын коопсуздугу",
      feature_5_description:
        "Сиздин маалыматтар заманбап шифрлөө ыкмалары менен корголот.",

      feature_6_title: "Жогорку өндүрүмдүүлүк",
      feature_6_description: "Жогорку жүктөмдө да ыкчам жана туруктуу иштөө.",

      // Cart page
      shopping_cart: "Себет",
      your_cart_is_empty: "Себетиңиз бош",
      start_adding_cars: "Себетке машиналарды кошуудан баштаңыз",
      browse_vehicles: "Машиналарды караңыз",
      subtotal: "Жалпы сумма",
      shipping_taxes: "Жеткирүү жана салык эсептелет.",
      checkout: "Заказ берүү",
      continue_shopping: "Сатып алууну улантуу",
      qty: "Саны",
      remove: "Өчүрүү",
      total: "Бардыгы болуп",

      // Favorites page
      your_favorites: "Сүйүктүүлөрүңүз",
      favorites_list_empty: "Сүйүктүүлөр тизмеси бош",
      start_adding_favorites: "Сүйүктүүлөргө машиналарды кошуудан баштаңыз",

      // Checkout success page
      order_placed_successfully: "Заказ ийгиликтүү берилди!",
      thank_you_purchase:
        "Сатып алганыңыз үчүн алкыш. Сиздин заказыңыз ырасталды жана жакын арада иштетилет.",
      what_happens_next: "Эмир не болот?",
      confirmation_email: "Биз сизге ырастоо катын жөнөтөбүз",
      prepare_rental: "Биздин команда жалдоо келишимин даярдайт",
      pickup_instructions:
        "Сиз электрондук почта аркылуу алуу нускамаларын аласыз",
      return_home: "Башкы бетке кайтуу",
      browse_more_vehicles: "Дагы машиналарды караңыз",

      // Login page
      sign_in: "Кирүү",
      login_success: "Системага кирдиңиз!",
      logged_in_successfully: "Системага кирдиңиз!",
      registration_success: "Каттоо ийгиликтүү өттү!",
      email_address: "Электрондук почта дареги",
      password: "Сырсөз",
      remember_me: "Эсиңде сакта",
      forgot_password: "Сырсөзүңүздү унутуп калдыңызбы?",
      sign_in_button: "Кирүү",
      dont_have_account: "Аккаунтуңуз жокпу?",
      sign_up: "Катталуу",
      failed_sign_in: "Кирүү ишке ашкан жок",

      // Register page
      passwords_do_not_match: "Сырсөздөр дал келбейт",
      failed_create_account: "Аккаунт түзүү ишке ашкан жок",

      // Register page
      create_account: "Аккаунт түзүү",
      register_success_msg: "Каттоо ийгиликтүү өттү!",
      confirm_password: "Сырсөздү ырастаңыз",
      already_have_account: "Эчак аккаунтуңуз барбы?",
      sign_in_link: "Кирүү",

      // Services page
      our_services_title: "Биздин кызматтар",
      services_subtitle:
        "Сиздин автоаренда тажрыйбаңызды жеңил жана жагымдуу кылуу үчүн иштелип чыккан кызматтардын ассортиментин изилдеңиз.",
      premium_fleet: "Премиум автопарк",
      competitive_pricing: "Бәс тартыштык баа",
      easy_booking: "Оңой брондоо",
      customer_support: "24/7 кардарларга колдоо көрсөтүү",
      one_way_rentals: "Бир жолдуу жалдоо",
      long_term_deals: "Узак мөөнөттүү шарттар",
      car_rental_desc:
        "Биздин автоунаа ижарасы кызматы сизге эң мыкты унааларды сунуштайт.",
      chauffeur_service_desc:
        "Ыңгайлуу жана тынч саякат үчүн кесипкөй айдоочу кызматтары.",
      long_term_leasing_desc:
        "Узак мөөнөттүү ижара үчүн ийкемдүү шарттар менен.",
      roadside_assistance_desc:
        "Жолдо сиздин коопсуздугуңузду камсыз кылуу үчүн ишенимдүү жол жардамчысы 24/7 жеткиликтүү.",
      gps_navigation_desc:
        "Жолдо оңой жана натыйжалуу багыттоо үчүн GPS навигациясы.",
      child_safety_seats_desc:
        "Балдардын коопсуз жана ыңгайлуу саякаты үчүн балдар отургучтары.",
      why_choose_our_services: "Эмне үчүн биздин кызматтарды тандаш керек?",
      // Footer
      address: "Дареги",
      email: "Электрондук почта",
      phone: "Телефон",
      useful_links: "Пайдалуу шилтемелер",
      gallery: "Галерея",
      faq: "КБС",
      download_app_footer: "Колдонмону жүктөп алуу",
      app_store_footer: "App Store дүкөнүнөн жүктөп алыңыз",
      google_play_footer: "Google Play дүкөнүнөн жүктөп алыңыз",
      copyright:
        "© Car Rental 2024 автордук укуктары. Дизайн Figma.guru тарабынан",

      // Additional components
      step1_title: "Эрат ат семпер",
      step1_desc:
        "Нон амет ферментум эст ин эним ат сит улламкорпер. Сит элементум рhonкус нуллам феугиат. Рисус сем ферментум",
      step2_title: "Урна нец вивамус рисус дуис арку",
      step2_desc:
        "Аликуам адиписцинг велит семпер морби. Пурус нон эу курсус порттитор триistique эт гравида. Куис нунц интердум гравида улламкорпер",
      step3_title: "Лобортис эуисмод импердиет темпус",
      step3_desc:
        "Виверра сцелерискуэ маурис эт нуллам молестиэ эт. Аугуэ адиписцинг праэсент нисл црас нунц луцтус виверра ниси",
      step4_title: "Црас нулла аликуэт нам элеифенд амет эт",
      step4_desc:
        "Аликуам адиписцинг велит семпер морби. Пурус нон эу курсус порттитор триistique эт гравида. Куис нунц интердум гравида улламкорпер сед интэгер. Куиске элеифенд тинцидунт вулпутатэ либеро",

      experience_road: "Жолду мурункудай көрбөгөн тажрыйба кылыңыз",
      book_description:
        "Аликуам адиписцинг велит семпер морби. Пурус нон эу курсус порттитор триistique эт гравида. Куис нунц интердум гравида улламкорпер.",
      view_all_cars: "Бардык машиналарды караңыз",
      book_your_car: "Машинаңызды брондоңуз",
      car_type: "Машина түрү",
      sports: "Спорт",
      place_of_rental: "Жалдоо жери",
      place_of_return: "Кайтаруу жери",
      downtown_office: "Шаардагы офис",
      hotel_district: "Готель району",
      shopping_center: "Сатуу жайы",
      airport_terminal: "Аэропорттун терминалы",
      central_station: "Борбордук станция",
      harbor_point: "Порт",
      book_now: "Азыр брондоңуз",
      successfully_booked: "Ийгиликтүү брондолду",

      cta_title: "Баштоого даярсызбы?",
      cta_subtitle:
        "Унааларыбызды карап чыгыңыз же биз менен байланышып, сизге ылайыктуу вариантты табыңыз.",
      browse_cars: "Унааларды көрүү",
      contact_us: "Биз менен байланышуу",

      cars: "Машиналар",
      customers: "Кардарлар",
      years: "Жыл",
      miles: "Миль",
      facts_in_numbers: "Факттар сандар менен",
      facts_description:
        "Амет црас хац орци лацус. Фауцибус ипсум арку лецтус нихб сапиен бибендум улламкорпер ин. Диам тинцидунт тинцидунт эрат ат семпер ферментум.",

      choose_car_suits: "Сизге туура келген машинаны тандаңыз",
      view_all: "Баарын караңыз",
      loading_cars: "Машиналар жүктөлүүдө...",
      failed_load_cars: "Машиналарды жүктөө ишке ашкан жок",
      no_cars_found: "Машиналар табылган жок.",

      availability: "Жеткиликтүүлүк",
      availability_desc:
        "Диам тинцидунт тинцидунт эрат ат семпер ферментум. Ид ултрициэс квис",
      comfort: "Ыңгайлуулук",
      comfort_desc:
        "Гравида ауцтор ферментум морби вулпутатэ ац эгэстас орциэтиум цонваллис",
      savings: "Түүмө",
      savings_desc:
        "Прэтиум цонваллис ид диам сед цоммодо вестибулум лобортис волутпат",

      enjoy_every_mile: "Ар бир миль менен жакты жүрүңүз.",
      enjoy_description:
        "Амет црас хац орци лацус. Фауцибус ипсум арку лецтус нихб сапиен бибендум улламкорпер ин. Диам тинцидунт тинцидунт эрат",
      enter_city: "Шаарды киргизиңиз:",
      search: "Издөө",

      drive_feels_extraordinary: "Ар бир жүрүү эрекше сезимиңиз болот",
      variety_brands: "Түрдүү бренддер",
      variety_brands_desc:
        "Платеа нон ауцтор ферментум соллицитудин. Эгет адиписцинг аугуэ сит квам натокве орнаре курсус виверра одио.",
      awesome_support: "Керемет колдоо",
      awesome_support_desc:
        "Эгет адиписцинг аугуэ сит квам натокве орнаре курсус виверра одио. Диам квам гравида ултрициэс велит.",
      maximum_freedom: "Максималдуу эркиндик",
      maximum_freedom_desc:
        "Диам квам гравида ултрициэс велит дуис цонсекват интэгер. Эст аликуам посуэре вел рhonкус масса волутпат ин.",
      flexibility_on_go: "Жүрүүдөгү ийгилик",
      flexibility_on_go_desc:
        "Витаэ прэтиум нулла сед квам ид нисл семпер. Вел нон ин пробин эгэстас дис фауцибус rhoncus. Иацулис дигниссим аэнэан пэллентэсквэ нисл.",

      happy_customers: "Бактылуу кардарлар",
      count_of_cars: "Машиналардын саны",
      years_of_experience: "Тажрыйба жылдары",

      unlock_unforgettable_memories: "Унутулбас эстеликтерди ачыңыз",
      memories_description:
        "Аликуам адиписцинг велит семпер морби. Пурус нон эу курсус порттитор триistique эт гравида. Куис нунц интердум гравида улламкорпер",
      memories_item1:
        "Велит семпер морби. Пурус нон эу курсус порттитор триistique эт гравида...",
      memories_item2:
        "Пурус нон эу курсус порттитор триistique эт гравида. Куис нунц интердум",
      memories_item3:
        "Аликуам адиписцинг велит семпер морби. Пурус нон эу курсус порттитор",
      memories_item4: "Куис нунц интердум гравида улламкорпер",

      download_our_app: "Биздин колдонмону жүктөп алыңыз",
      phone_description:
        "Турпис морби эним nisi пулвинar лео дуи тэллус. Фауцибус эгэстас семпер диам рутрум дицтумст ут донец. Ниси nisi морби вэл ин вулпутатэ. Нулла нам эгет урна фусце вулпутатэ ат рисус",
      app_store_download: "Түбөндөн жүктөп алыңыз",
      google_play_download: "МОНДО ЖҮКТӨҢҮЗ",

      reviews_from_customers: "Кардарлардан пикирлер",
      review1_text:
        "Эт аликуэт нетус ат сапиен пэллентэсквэ моллис нец дигниссим маэценас. Амет эрат волутпат квисквэ одио пурус фэугиат. Ин гравида неквэ",
      review2_text:
        "Пурус цонсэцтетур вариус квис урна пhасэллус эним маттис. Сэм тинцидунт тортор нунц эгэстас амет адиписцинг лигула",
      review3_text:
        "Квам неквэ одио урна эуисмод фэлис. Сит эгэстас магна ин квисквэ фамэсдапибус квис сапиен магна. Нисл нон эгет сит пэллентэсквэ триistique эт",

      car_rental_blog: "Автоаренда блогу",
      blog_subtitle:
        "Кийинки саякатыңыз үчүн кеңештер, колдонмалар жана пикирлер",
      article: "Макала",
      load_more_articles: "Дагы макалаларды жүктөңүз",
      blog_post1_title: "2024-жылгы топ 10 жүрүү жолдору",
      blog_post1_excerpt:
        "Кийинки саякатыңыз үчүн эң сонун жана кызыктуу жүрүү жолдорун ачыңыз. Жээк жолдордон баштап, тоо жолдоруна чейин, биз сиз үчүн бардыгын камсыздайбыз.",
      blog_post1_date: "2024-жылдын мартынын 15-күнү",
      blog_post1_author: "Алекс Морган",
      blog_post2_title:
        "Узун саякаттар үчүн машиналарды кароо боюнча негизги кеңештер",
      blog_post2_excerpt:
        "Узун саякаттар үчүн машинаңызды кантип даярдап алуу керектигин биздин камтылуучу текшерүү тизмеси менен үйрөнүңүз. Жолдо коопсуздукту камсыз кылыңыз жана поломка болбогондо болуңуз.",
      blog_post2_date: "2024-жылдын февралынын 28-күнү",
      blog_post2_author: "Джейми Смит",
      blog_post3_title: "Семейлик дем алыш үчүн туура машина тандоо",
      blog_post3_excerpt:
        "Семеңиздин талабына ылайык кайсы машина туура экенин билбегениңиз келеби? Биздин колдонмо өлчөмү, ыңгайлуулугу жана өзгөчөлүктөрү боюнча сизге туура машина тандап берет.",
      blog_post3_date: "2024-жылдын февралынын 10-күнү",
      blog_post3_author: "Тейлор Джонсон",

      customer_testimonials: "Кардарлардын пикирлери",
      testimonials_subtitle:
        "Кантыкты кардарлар биздин кызматтар тууралуу эмне дейт экенин угуңуз",
      testimonial1_name: "Сара Джонсон",
      testimonial1_company: "Tech Innovations Inc.",
      testimonial1_text:
        "Автоаренда кызматтары керемет болду! Машина таза, жакшы каралган жана семеялык дем алыш үчүн керек болгон машина эле. Брондоо процесси оңой болду жана кызматкерлер керемет болду.",
      testimonial2_name: "Майкл Чен",
      testimonial2_company: "Global Solutions Ltd.",
      testimonial2_text:
        "Ишкер саякатчы катары, бул автоаренда компаниясынын ишенимдүүлүгүн жана профессионализмин баалайм. Алардын премиум автопаркы жана керемет кардарга колдоо көрсөтүү ар бир саякатты стрессти түшүрөт. Катуу сунуштайбыз!",
      testimonial3_name: "Эмили Родригес",
      testimonial3_company: "Creative Designs Co.",
      testimonial3_text:
        "Мен алардын кызматтарын эки жылдан ашык пайдаланып жүрөм жана алар ар дайым күтүүмдөн ашып келет. Машиналардын түрдүүлүгү, бәс тартыштык баасы жана 24/7 колдоо - бул бардык транспорт талабы үчүн менин тандоом.",
      ready_experience_excellence: "Кереметти тажрыйба кылууга даярсызбы?",
      join_satisfied_customers:
        "Бизге ишенген миңдеген кантыкты кардарларга кошулуңуз.",
      book_ride_today: "Саякатты бүгүн брондоңуз",

      frequently_asked_questions: "Көп берилүүчү суроолор",
      faq_subtitle:
        "Автоаренда кызматтары тууралуу жалпы суроолорго жооп табыңыз",
      faq1_question: "Машина жалдоо үчүн кандай документтер керек?",
      faq1_answer:
        "Сизге жарактуу айдоочуну күбөлүгү, страховка тууралуу күбөлүк жана сиздин атыңызга катталган кредиттик карта керек. Эл аралык жалдагычтар үчүн паспорт да керек.",
      faq2_question: "Жок кылуу саясатыңыз кандай?",
      faq2_answer:
        "Сиз жоспарланган убакыттан 24 саат мурун брондоп коюуну жок кылып, толук кайтарып ала аласыз. 24 сааттан аз убакытта жок кылсаңыз, акы төлөшүңүз керек болушу мүмкүн.",
      faq3_question: "Бир жолдуу жалдоо сунуштайсызбы?",
      faq3_answer:
        "Ооба, биз белгилүү бир жерлердин ортосунда бир жолдуу жалдоо сунуштайбыз. Маршрут жана жеткиликтүүлүккө жараша кошумча акы төлөшүңүз керек болушу мүмкүн.",
      faq4_question: "Жалдоо баасына эмне кирет?",
      faq4_answer:
        "Биздин жалдоо баалары машина жалдоо, негизги страховка жана салыктарды камтыйт. GPS, балдар үчүн отургуч жана премиум страховка сыяктуу кошумча кызматтар кошумча акы менен жеткиликтүү.",
      faq5_question: "Брондоп коюуну өзгөртө аламбы?",
      faq5_answer:
        "Ооба, сиз биздин кардарга тейлөө тобу менен байланышып брондоп коюуну өзгөртө аласыз. Алуу/кайтаруу күндөрүн, машина түрүн же жайын өзгөртүү жалдоо баасына таасир кылуушу мүмкүн.",
      faq6_question: "Эгер мен машина кечигип кайтарсам эмне болот?",
      faq6_answer:
        "Кечигип кайтаруу кошумча акы төлөшүңүз керек болушу мүмкүн. Машина келишимдүү убакыттан кийин кайтарылат деп ойлосоңуз, биз менен байланышыңыз.",
      still_have_questions: "Дагы деле суроолоруңуз барбы?",
      contact_support_description:
        "Сиз издеп жүргөн жоопту таба албай жатасызбы? Жеке колдоо үчүн биздин кардарга тейлөө тобу менен байланышыңыз.",
      contact_support: "Колдоо менен байланышуу",

      our_locations: "Биздин жайлоштуулар",
      locations_subtitle:
        "Сизге жакшыраак кызмат көрсөтүү үчүн ыңгайлуу жерлерде офисор",
      downtown_address: "123 Башкы көчө, Шаардын борбору",
      downtown_hours: "Дш-Жк: 7:00 AM - 10:00 PM",
      hotel_address: "789 Готель району, Шаардын борбору",
      hotel_hours: "Дш-Жк: 8:00 AM - 11:00 PM",
      shopping_address: "101 Сатуу жайы, Бизнес району",
      shopping_hours: "Дш-Жк: 9:00 AM - 10:00 PM",
      airport_address: "Эл аралык аэропорт, 2-терминал",
      airport_hours: "24/7 - Жыл бою ачык",
      central_address: "456 Борбордук проспект, Шаардын борбору",
      central_hours: "Дш-Жк: 6:00 AM - 11:00 PM",
      get_directions: "Багыттарды алуу",
      looking_specific_location: "Белгилүү бир жерди издеп жатасызбы?",
      location_contact_description:
        "Керектүү жерди тапа албай жатасызбы? Кошумча кызмат көрсөтүү пункттары тууралуу маалымат үчүн биз менен байланышыңыз.",
      contact_us: "Биз менен байланышуу",

      bmw_center: "BMW борбору",
      bmw_address: "BMW Group башкы кеңсеси, Мюнхен, Германия",

      mercedes_center: "Mercedes-Benz борбору",
      mercedes_address: "Mercedes-Benz Group башкы кеңсеси, Штутгарт, Германия",

      audi_center: "Audi борбору",
      audi_address: "Audi AG башкы кеңсеси, Ингольштадт, Германия",

      working_hours: "Дүйш–Жума: 9:00 – 18:00",

      contact_subtitle:
        "Сиз менен байланышууга абдан кубанабыз! Бизге билдирүү жөнөтүңүз, биз аны мүмкүнчүлүгүнчө жооп берем.",
      get_in_touch: "Байланышуу",
      contact_description:
        "Кызматтар тууралуу суроолоруңуз барбы же брондоо боюнча жардам керекпи? Дост бул топ менен байланышыңыз, биз жардам берүүгө абдан кубанабыз.",
      name: "Аты",
      subject: "Тема",
      message: "Билдирүү",
      send_message: "Билдирүү жөнөтүү",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
