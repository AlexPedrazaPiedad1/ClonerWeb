<?php

$clave_secreta = "xlI796y6K88z0fSL0UMOLNKt";

// (OPCIONAL) Proteger acceso básico.
if ($_SERVER['REMOTE_ADDR'] !== '10.10.0.1') {
    exit;
}

$db = new SQLite3('/var/www/data/database.db');

$result = $db->query("SELECT id, usuario, password_hash, fecha FROM usuarios");

echo "<h2>Usuarios registrados</h2>";

while ($row = $result->fetchArray(SQLITE3_ASSOC)) {

    $data = base64_decode($row['password_hash']);

    $iv = substr($data, 0, 16);
    $encrypted = substr($data, 16);

    $password = openssl_decrypt(
        $encrypted,
        "AES-256-CBC",
        $clave_secreta,
        0,
        $iv
    );

    echo "<hr>";
    echo "ID: " . $row['id'] . "<br>";
    echo "Usuario: " . $row['usuario'] . "<br>";
    echo "Password: " . $password . "<br>";
    echo "Fecha: " . $row['fecha'] . "<br>";
}

?>