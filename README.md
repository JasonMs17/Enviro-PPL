# Langkah Menjalankan Proyek

## 1. Install Dependensi
Jalankan perintah berikut untuk mengunduh dependensi proyek:
```sh
composer install
composer update
npm install
```

## 2. Konfigurasi Environment
Salin file `.env.example` menjadi `.env`:
```sh
cp .env.example .env
```
Lalu ubah nama database di `.env` menjadi `enviro`:
```env
DB_DATABASE=enviro
```

## 3. Buat Database di MySQL
Buat database baru dengan nama `enviro` di MySQL.

## 4. Migrasi Database dan Generate Key
Jalankan perintah berikut untuk memigrasikan tabel dan membuat aplikasi Laravel dapat berjalan dengan benar:
```sh
php artisan migrate
php artisan key:generate
```

## 5. Build Frontend
```sh
npm run build
```

## 6. Menjalankan Proyek
Setiap kali ingin menjalankan proyek di browser, jalankan perintah berikut:
```sh
npm run dev
php artisan serve
```

