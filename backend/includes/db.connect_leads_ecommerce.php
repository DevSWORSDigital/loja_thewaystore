<?php
// Configurações de conexão com o banco de dados
$servername = "62.72.9.231";
$username = "root";
$password = "TWY99831@x";
$dbname = "leads_ecommerce";

// Conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
} else {
    echo "Sucesso na conexão com o banco de dados";
}
?>
