Essa aplicação funciona como um CRUD simples com chamadas REST, Adicionando, editando, lendo e deletando alunos.

Para rodar a aplicação, deve-se realizar alguns comandos primeiramente, 
tendo em vista que o backend da aplicação, nesse caso, é um json-server.


1- É importante que o seu aparelho mobile, seja ele um dispositivo físico, seja
ele um dispositivo emulado, compreenda que o back-end está rodando na maquina no
localhost:3000, para isso, incerir em um CMD ou PowerShell, os seguintes comandos.


	1.1- adb devices 
	(Exibi uma lista de dispositivos)

	1.2- adb -s <APARELHO DE ESCOLHA> reverse tcp:3000 tcp:3000
	(Converte o localhost do dispositivo para o localhost da maquina)

OBS.1 - Caso tenha duvidas, visualizar imagem: 'list of devices.png'


2- Inicie o json-server. em um PowerShell ou CMD com o comando abaixo.

json-server --watch db.json


3- rode o aplicativo com o comando 'expo start' ou 'npx expo start'