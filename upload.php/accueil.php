<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Vérifier si le fichier a été correctement téléchargé
    if (isset($_FILES["fileToUpload"])) {
        $file = $_FILES["fileToUpload"];

        // Vérifier s'il n'y a pas d'erreur lors du téléchargement
        if ($file["error"] === UPLOAD_ERR_OK) {
            // Définir le chemin de destination pour le fichier téléchargé
            $uploadDir = "uploads.php/";
            $uploadPath = $uploadDir . basename($file["name"]);

            // Déplacer le fichier téléchargé vers le dossier de destination
            if (move_uploaded_file($file["tmp_name"], $uploadPath)) {
                echo "Le fichier a été téléchargé avec succès.";
            } else {
                echo "Erreur lors du déplacement du fichier vers le dossier de destination.";
            }
        } else {
            echo "Erreur lors du téléchargement du fichier. Code d'erreur : " . $file["error"];
        }
    } else {
        echo "Aucun fichier téléchargé.";
    }
}
?>
