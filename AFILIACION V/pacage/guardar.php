<html>
<body>
    <?php

include("conexion.php");

    $numero=$_POST['numero'];
    $nombre=$_POST['nombre'];
    $estado=$_POST['estado'];
    $telefono=$_POST['telefono'];
    $direccion=$_POST['direccion'];
    $nacionalidad=$_POST['nacionalidad'];
    $ocupacion=$_POST['ocupacion'];
    $gradoe=$_POST['gradoe'];
    $inputEdad=$_POST['inputEdad'];
    $mes=$_POST['mes'];
    $year=$_POST['year'];
    $uploadDir='../fotos/';
    $fileName=$_FILES['foto']['name'];
    $tmpName=$_FILES['foto']['tmp_name'];
    $url=$uploadDir.$fileName;
    move_uploaded_file($tmpName,$url);
   

    $sql="INSERT INTO tarjet
                (numero,nombre,estado,telefono,direccion,nacionalidad,ocupacion,gradoe,inputEdad,mes,year,image) 
                VALUES('$numero','$nombre','$estado','$telefono','$direccion','$nacionalidad','$ocupacion','$gradoe','$inputEdad','$mes','$year','$url')";
    
   


        if (mysqli_query($conn, $sql)) {
           echo "Registro ingresado correctamente";
        } else {
           echo "Error: " . $sql . "" . mysqli_error($conn);
        }
        $conn->close();
   


?>

      </body>
</html>