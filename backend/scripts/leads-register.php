<?php
header('Content-Type: application/json');

// Configurações de conexão com o banco de dados
$servername = "62.72.9.231";
$username = "root";
$password = "TWY99831@x";
$dbname = "leads_ecommerce";

// Conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Verifica se os campos obrigatórios foram enviados
    if (isset($_POST['nameInput']) && isset($_POST['emailInput']) && isset($_POST['whatsappInput'])) {
        // Obtém os dados do formulário
        $name = $_POST['nameInput'];
        $email = $_POST['emailInput'];
        $whatsapp = $_POST['whatsappInput'];

        // Validação dos dados
        if (empty($name) || empty($email) || empty($whatsapp) || !filter_var($email, FILTER_VALIDATE_EMAIL) || !preg_match('/^\+[1-9]\d{1,14}$/', $whatsapp)) {
            http_response_code(400);
            echo json_encode(["error" => "Dados de entrada inválidos"]);
            exit;
        }

        // Insere os dados no banco de dados (substitua com sua própria tabela)
        $sql = "INSERT INTO leads (name, email, whatsapp) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql);

        if (!$stmt->bind_param("sss", $name, $email, $whatsapp) || !$stmt->execute()) {
            http_response_code(500);
            echo json_encode(["error" => "Erro ao inserir dados no banco de dados"]);
            exit;
        }

        http_response_code(201);
        echo json_encode(["message" => "Dados inseridos com sucesso"]);
        exit;
    } else {
        http_response_code(400);
        echo json_encode(["error" => "Campos obrigatórios não foram preenchidos"]);
        exit;
    }
} else {
    http_response_code(405);
    echo json_encode(["error" => "Método não permitido"]);
    exit;
}
?>
