<!DOCTYPE html>
<html>
   
	<head>
	<link rel="stylesheet" type="text/css" href="total/css_table/main.css">
    <style>
	.content {
  	max-width: auto;
  	margin: auto;
			 }
	</style>
           
	</head>   
<center>
		<body>
        <div class="content"> 
		<div class="container">
        <div class='wrap-table100'>  
        <div class='table100 ver1 m-b-110'>    
        <table data-vertable='ver1'>
          					<br>
              				<h2>TABLA DE REGISTROS</h2>
          					<br>
                        	<thead>
							<tr class='row100 head'>
							<th align="center" style='width:50px'>ID</th> 
							<th class='column100 column2' data-column='column2'><center>ID </center></th>
							<th class='column100 column3' data-column='column3'><center>NOMBRE</center></th>
							<th class='column100 column4' data-column='column4'><center>NUMERO</center></th>
                            <th class='column100 column4' data-column='column4'><center>EDIT</center></th>
           					</tr>
							</thead>   
              <tbody>
				

<?php
require('../pacage/conexion.php');
?>
						                      


<?php
$tabla = $_POST['tarjet'];
$sql = "SELECT * from `".$tabla."` order by fechaing DESC";
$result = mysqli_query($conn, $sql);
while($crow = mysqli_fetch_assoc($result))
            			{	
?>
<tr class='row100'>
<td style='width:10px'><center> <?php echo $crow['id'];?> </center></td>
<td> <center><?php echo $crow['nombre']; ?>  </center> </td>
<td> <center><?php echo $crow['numero']; ?></center></td>
<td> <center><?php echo $crow['estado']; ?></center></td>
<td><center><a href="editar_registro.php?EDITAME=<?php echo $crow['id']; ?>" class="edit_btn" >Edita</a></center></td>
</tr>
<?php
  	    	}		
?>

          	</tbody>
	    	</table>             
        	    
	</div>
	</div>
	<div>
	</div>
	</div>
	</div>
	</body>
  	</center>
	</html>