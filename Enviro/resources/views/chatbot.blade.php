<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chatbot Gemini Test</title>
    <style>
        body {
            font-family: sans-serif;
        }
        #chat-container {
            width: 400px;
            margin: 20px auto;
            border: 1px solid #ccc;
            padding: 10px;
        }
        #chat-log {
            margin-bottom: 10px;
            padding: 10px;
            border: 1px solid #eee;
            background-color: #f9f9f9;
            height: 200px;
            overflow-y: scroll;
        }
        #user-input {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            box-sizing: border-box;
        }
        button {
            padding: 8px 15px;
            cursor: pointer;
        }
        #response {
            margin-top: 10px;
            padding: 10px;
            border: 1px solid #eee;
            background-color: #f9f9f9;
        }
    </style>
</head>
<body>
    <div id="chat-container">
        <h2>Uji Chatbot Gemini</h2>
        <div id="chat-log">
            </div>
        <div>
            <input type="text" id="user-input" placeholder="Ketik pesan Anda...">
            <button onclick="sendMessage()">Kirim</button>
        </div>
        <div id="response">
            </div>
    </div>

    <script>
        function sendMessage() {
            const userInput = document.getElementById('user-input').value;
            document.getElementById('user-input').value = '';

            console.log(userInput);
            
            fetch('/chat', { // Pastikan ini sesuai dengan prefix rute API Anda
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ pesan: userInput })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Response from server:', data); // Log the response
                document.getElementById('response').innerText = 'Jawaban: ' + data.balasan;
                const chatLog = document.getElementById('chat-log');
                chatLog.innerHTML += `<p>Anda: ${userInput}</p>`;
                chatLog.innerHTML += `<p>Chatbot: ${data.balasan}</p>`;
                chatLog.scrollTop = chatLog.scrollHeight; // Scroll ke bawah
            })
            .catch(error => {
                console.error('Terjadi kesalahan:', error);
                document.getElementById('response').innerText = 'Terjadi kesalahan saat menghubungi server.';
            });
        }
    </script>
    <input type="hidden" name="_token" id="csrf-token" value="{{ csrf_token() }}">
</body>
</html>