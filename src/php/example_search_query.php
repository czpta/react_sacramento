<?php
// Allow access to react test build (local host 3000)
header("Access-Control-Allow-Origin: *");
// Form the connection
$servername = 'servername';
$username = 'username';
$password = 'password';
$dbname = 'sacramento';

// Create the connection
$link = mysqli_connect($servername, $username, $password, $dbname);
// Check link connection status
if (!$link) {
    echo "Error: Unable to connect to MySQL." . PHP_EOL;
    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
    exit;
}

// Search query
$query = mysqli_query($link, "SELECT * FROM `sacramento` WHERE `street` LIKE '%" . mysql_escape_string($_POST['name']) . "%';");
$rows = array();
while($row = mysqli_fetch_assoc($query)) {
    $rows[] = $row;
}

// Convert data to JSON
echo json_encode($rows);
?>
