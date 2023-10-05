<?php
header('Content-Type: application/json');

require_once('../includes/db_connect.php'); // Inclua o arquivo de conexão

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Verifica se os campos obrigatórios foram enviados
    if (isset($_POST['lead-name']) && isset($_POST['emailInput']) && isset($_POST['whatsappInput'])) {
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
