// Convert the data from the SQL dump into JavaScript objects
const orders = [
    {
        id: 21,
        order_number: '62886',
        total_items: 1,
        total_price: 21500.00,
        status_order: 'Новый',
        payment_status: 'Не оплачен',
        discount: 1600.00,
        promo_code: null,
        final_total: 10000.00,
        created_at: '2024-10-30 22:58:13',
        user_id: 1
    }
];

const products = [
    {
        id: 3,
        name: 'Передние тормозные диски для Honda Civic',
        article: 'BR9.0366',
        image_url: 'https://ro-sa.ru/netcat_files/multifile/2118/708c3423234b11edb011f4034357ec9f_3442dcad2dbf11edb011f4034357ec9f.jpg',
        original_price: 23100.00,
        discounted_price: 21500.00,
        currency: '₽',
        stock: 9,
        created_at: '2024-10-27 00:06:05'
    }
];

const services = [
    {
        id: 1,
        name: 'Установка оборудования',
        description: 'Монтаж и установка промышленного оборудования',
        price: 5000.00,
        created_at: '2024-10-30 13:52:35'
    },
    {
        id: 2,
        name: 'Консультация инженера',
        description: 'Консультация по вопросам оборудования и его работы',
        price: 1500.00,
        created_at: '2024-10-30 13:52:35'
    },
    {
        id: 3,
        name: 'Плановое обслуживание',
        description: 'Регулярное обслуживание оборудования для предотвращения поломок',
        price: 3000.00,
        created_at: '2024-10-30 13:52:35'
    }
];

const users = [
    {
        id: 4,
        name: 'user',
        last_name: 'user',
        surname: 'userovich',
        phone: '777777777',
        email: 'ivonov@gmail.com',
        password: '$2y$10$WAv4c39KHEPBDkerNEfDV.inhG/WleO85WUOzNGbHYpv.6R8xpZly',
        role: 'user'
    },
    {
        id: 5,
        name: '',
        last_name: null,
        surname: null,
        phone: null,
        email: 'admin@gmail.com',
        password: '$2y$10$Sk86YReF4K6cGAqarkMauuEAQzCQGNy9ZOUTG66jORuAq/JOZ/W7W',
        role: 'admin'
    }
];

// Save data to localStorage
localStorage.setItem('orders', JSON.stringify(orders));
localStorage.setItem('products', JSON.stringify(products));
localStorage.setItem('services', JSON.stringify(services));
localStorage.setItem('users', JSON.stringify(users));

// Retrieve and display data from localStorage
console.log(JSON.parse(localStorage.getItem('orders')));
console.log(JSON.parse(localStorage.getItem('products')));
console.log(JSON.parse(localStorage.getItem('services')));
console.log(JSON.parse(localStorage.getItem('users')));