<?php

// EN LA VERSION 8.0 DE PHP TE PIDE CREAR UN USUARIO Y 
// DARLE LOS PERMISOS EN CASO DE TENER ALGUN ERROR DE SERVIDOR

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "person";

//  CREA LA CONEXION A LA BD
$conn = new mysqli($servername, $username, $password, $dbname);

// VAIDA LA CONEXION A LA BD 
if ($conn->connect_error) {
   die("Connection failed: " . $conn->connect_error);
}


?>