<?php 
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept, Authorization, X-Requested-With, X-Auth-Token, Origin, Application");

$req_body = file_get_contents('php://input');
$data = json_decode($req_body, true);
$calcul = (STRING) $data['calc'];
$result = $data['res'];

var_dump($calcul);
var_dump($result);

define("DBHOST", "localhost");
define("DBUSER", "root");
define("DBPASS", "root");
define("DBNAME", "calculator9000");

$dsn = "mysql:dbname=" . DBNAME . ";host=" . DBHOST;
try {
    //on va instancie PDO
    $bdd = new PDO($dsn, DBUSER, DBPASS);

    //On s'assure d'envoyer les données en utf8
    $bdd->exec("SET NAMES utf8");

    //on definit le mode de fetch par defaut
    $bdd->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,  PDO::FETCH_ASSOC);
    $bdd->setAttribute(PDO::ATTR_ERRMODE , PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur de connexion a la base: " . $e->getMessage());
}

$req = "INSERT INTO `calculs`( `calcul`, `resultat`) VALUES (:calc, :res)";
$requete_res = $bdd->prepare($req);
$requete_res -> execute([
    ":calc" => $calcul,
    ":res" => $result
]);

?>