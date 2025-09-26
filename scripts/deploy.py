#!/usr/bin/env python3
"""
Script de deploy para Landing Page Mikrotik
Servidor HTTP simples para servir arquivos estáticos
"""

import http.server
import socketserver
import os
import sys
from pathlib import Path

# Configurações
PORT = 3001
HOST = '0.0.0.0'

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory='dist', **kwargs)
    
    def end_headers(self):
        # Adicionar headers CORS se necessário
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

def main():
    # Verificar se o diretório dist existe
    if not os.path.exists('dist'):
        print("❌ Diretório 'dist' não encontrado!")
        print("Execute 'npm run build' primeiro.")
        sys.exit(1)
    
    # Mudar para o diretório dist
    os.chdir('dist')
    
    print(f"🚀 Iniciando servidor na porta {PORT}")
    print(f"🌐 Acesse: http://localhost:{PORT}")
    print(f"📁 Servindo arquivos de: {os.getcwd()}")
    
    try:
        with socketserver.TCPServer((HOST, PORT), CustomHTTPRequestHandler) as httpd:
            print(f"✅ Servidor rodando em http://{HOST}:{PORT}")
            print("Pressione Ctrl+C para parar")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n🛑 Servidor parado")
    except OSError as e:
        if e.errno == 98:  # Address already in use
            print(f"❌ Porta {PORT} já está em uso!")
            print(f"Tente uma porta diferente ou pare o processo que está usando a porta {PORT}")
        else:
            print(f"❌ Erro: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
