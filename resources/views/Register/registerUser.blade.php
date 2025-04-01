<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Register User</title>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/register.css') }}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Playfair+Display:wght@400..900&family=Plus+Jakarta+Sans:wght@200..800&display=swap" rel="stylesheet">
</head>
<body>
    <header class="logo-and-navbar">
        <div class="enviro-logo">
            <img src="images/logoEnviro.png" alt="Website Logo">
        </div>
        <nav>
            <a href="">Learn With Us</a>
            <a href="">Challenge</a>
            <a href="">About Us</a>
        </nav>
        <div class="login-signup">
            <a href="" class="login">Masuk</a>
            <a href="" class="signup">Sign Up</a>
        </div>
    </header>
    <main>
        <div class="register-user">
            <div class="register-form">
                <header>
                    <div class="logoEnviro">
                        <img src="images/logoEnviro.png" alt="Website Logo">
                    </div>
                    <h2>Buat Akun Baru</h2>
                </header>   
                <form id="form">
                    <div class="inputgroup">
                        <input type="text" id="name" placeholder="Nama Anda" required>
                    </div>
                    <div class="inputgroup">
                        <input type="email" id="email" placeholder="Email" required>
                    </div>
                    <div class="inputgroup">
                        <input type="password" id="password" placeholder="Password" required>
                    </div>
                    <div class="inputgroup">
                        <input type="password" id="confirm-password" placeholder="Konfirmasi Password" required>
                    </div>
                    <input type="submit" id="register" value="Sign Up">
                </form>
                <div class="login-link">
                    <p>Sudah punya akun? <a href="" class="highlight">Log In</a></p>
                </div>
            </div>
            <div class="imageRegister">
                <h1> image disini</h1>
            </div>       
        </div> 
    </main>
    <footer>
    </footer>
</body>
</html>
