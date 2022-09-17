<?php 
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept, Authorization, X-Requested-With, X-Auth-Token, Origin, Application");

define("DBHOST", "localhost");
define("DBUSER", "root");
define("DBPASS", "root");
define("DBNAME", "calculator9000");

//DSN de connexion (data source name)
$dsn = "mysql:dbname=" . DBNAME . ";host=" . DBHOST;

// on va se connecter a la base a travers un try catch pour gerer l'exeption levé par pdo
try {
    //on va instancie PDO
    $bdd = new PDO($dsn, DBUSER, DBPASS);

    //On s'assure d'envoyer les données en utf8
    $bdd->exec("SET NAMES utf8");

    //on definit le mode de fetch par defaut
    $bdd->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,  PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    die("Erreur de connexion a la base: " . $e->getMessage());
}


// ON PREPARE LA REQUETE
$stmt = $bdd->prepare('SELECT * FROM `calculs`');

// ON EXECUTE LA REQUETE
$stmt->execute();
$results = $stmt->fetchAll();
echo json_encode($results);
?>