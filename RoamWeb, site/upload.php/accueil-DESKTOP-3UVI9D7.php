<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["files"])) {
    $uploadsDirectory = 'uploads/';

    // Vérifier s'il y a des erreurs lors du téléchargement
    if ($_FILES["files"]["error"][0] > 0) {
        echo "Erreur lors du téléchargement du fichier.";
    } else {
        // Boucler à travers les fichiers téléchargés
        for ($i = 0; $i < count($_FILES["files"]["name"]); $i++) {
            $fileName = $_FILES["files"]["name"][$i];
            $fileTmpName = $_FILES["files"]["tmp_name"][$i];
            $fileType = $_FILES["files"]["type"][$i];

            // Construire le chemin de destination
            $destinationPath = $uploadsDirectory . $fileName;

            // Déplacer le fichier téléchargé vers le répertoire de destination
            if (move_uploaded_file($fileTmpName, $destinationPath)) {
                echo "Le fichier $fileName a été téléchargé avec succès.";
            } else {
                echo "Erreur lors du déplacement du fichier $fileName vers le répertoire de destination.";
            }
        }
    }
} else {
    echo "Aucun fichier téléchargé.";
}
?>
