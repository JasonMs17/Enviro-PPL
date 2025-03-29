<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login User</title>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/login.css') }}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">
</head>
<body>
    <header class = "logo-and-navbar">
        <div class="enviro-logo">
            <img src="images/logoEnviro.png" alt="Website Logo">
        </div>

        <nav>
            <a href="" class="">Learn With Us</a>
            <a href="" class="">Challenge</a>
            <a href="" class="">About Us</a>
        </nav>

        <div class="login-signup">
            <a href="" class="login">Masuk</a>
            <a href="" class="signup">Sign Up</a>
        </div>
        
    </header>

    <main>

        <div class="login-user">
            <div class = "login-form">
                <header>
                    <div class = "logoEnviro">
                        <img src="images/logoEnviro.png" alt="Website Logo">
                    </div>
                   
                    <p>Selamat Datang Kembali!</p>
                </header>   

                <form id="form">
                    <div class="inputgroup">
                        <input type="text" id="email" placeholder="Email">
                    </div> 
                    <div class="input-box">
                        <input type="password" id="password" placeholder="Password" required>
                    </div>
                    <input type="Submit" id="Login" value="Login">
                </form>

                <div class ="signup-lupapassword">
                    <div class = "signUp">
                        <p>Belum punya akun? <a href="" class="highlight">Sign Up</a></p>
                    </div>
                    <div class = "lupa-password">
                        <a href="">Lupa Password? </a>
                    </div>
                </div>
                    
            </div>

           
            
            <div class = "imageLogin">
                <h1> image disini</h1>
            </div>       
        
        </div> 
    </main>

    <footer>
        
    </footer>
</body>
</html>
