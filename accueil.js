let liked = false;
let likeCount = 0;

function initializeLikeCount() {
    const likeStatus = document.getElementById('like-status');
    likeStatus.textContent = likeCount;
}

function toggleLike() {
    liked = !liked;
    likeCount = liked ? likeCount + 1 : likeCount - 1;

    const likeButton = document.getElementById('like-button');
    const likeStatus = document.getElementById('like-status');

    likeButton.classList.toggle('liked', liked);
    likeStatus.textContent = likeCount;

    // Vous pourriez également envoyer une requête au serveur pour enregistrer le statut "J'aime" ici.
}

// Utilisation de l'événement 'DOMContentLoaded' pour s'assurer que le DOM est chargé avant d'attacher les gestionnaires d'événements
document.addEventListener('DOMContentLoaded', function () {
    initializeLikeCount();

    const likeButton = document.getElementById('like-button');
    likeButton.addEventListener('click', toggleLike);
});




let commenter = false;
let commentCount = 0;

function initializeCommentCount() {
    const commentCountElement = document.getElementById('comment-count');
    commentCountElement.textContent = commentCount;
}

function toggleComment() {
    commenter = !commenter;
    commentCount = commenter ? commentCount + 1 : commentCount - 1;

    const commentButton = document.getElementById('comment-button');
    const commentCountElement = document.getElementById('comment-count');
    const commentSection = document.getElementById('comment-section');

    commentButton.classList.toggle('commented', commenter);
    commentCountElement.textContent = commentCount;

    if (commenter) {
        const newComment = document.createElement('div');
        newComment.textContent = 'Nouveau commentaire!';
        commentSection.appendChild(newComment);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initializeCommentCount();

    const commentButton = document.getElementById('comment-button');
    commentButton.addEventListener('click', toggleComment);
});




let partager = false;
let partagerCount = 0;

function initializePartagerCount() {
    const partagerCountElement = document.getElementById('partager-count');
    partagerCountElement.textContent = partagerCount;
}

function togglePartager() {
    partager = !partager;
    partagerCount = partager ? partagerCount + 1 : partagerCount - 1;

    const partagerButton = document.getElementById('partager-button');
    const partagerCountElement = document.getElementById('partager-count');
    const partagerSection = document.getElementById('partager-section');

    partagerButton.classList.toggle('partagee', partager);
    partagerCountElement.textContent = partagerCount;

    if (partager) {
        const newPartage = document.createElement('div');
        newPartage.textContent = 'Partagée!';
        partagerSection.appendChild(newPartage);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initializePartagerCount();

    const partagerButton = document.getElementById('partager-button');
    partagerButton.addEventListener('click', togglePartager);
});


function displayImage() {
    const fileInput = document.getElementById('fileInput');
    const imageContainer = document.getElementById('imageContainer');

    // Vérifier s'il y a des fichiers sélectionnés
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const image = new Image();
            image.src = e.target.result;

            // Redimensionner l'image automatiquement
            const maxWidth = 300; // Largeur souhaitée
            const maxHeight = 200; // Hauteur souhaitée

            const width = image.width;
            const height = image.height;

            let newWidth, newHeight;

            if (width > height) {
                // Si l'image est plus large que haute
                newWidth = maxWidth;
                newHeight = (height / width) * maxWidth;
            } else {
                // Si l'image est plus haute que large
                newHeight = maxHeight;
                newWidth = (width / height) * maxHeight;
            }

            // Créer un élément <canvas> pour redimensionner l'image
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = newWidth;
            canvas.height = newHeight;
            ctx.drawImage(image, 0, 0, newWidth, newHeight);

            // Afficher l'image redimensionnée dans un élément img ou autre
            const resizedImageElement = document.createElement('img');
            resizedImageElement.src = canvas.toDataURL('image/jpeg'); // Vous pouvez choisir un autre format si nécessaire
            imageContainer.innerHTML = ''; // Supprimer le contenu précédent
            imageContainer.appendChild(resizedImageElement);
        };

        // Lire le contenu du fichier en tant que Data URL
        reader.readAsDataURL(fileInput.files[0]);
    }
}


function toggleCommentForm() {
    var commentForm = document.getElementById('comment-form');
    commentForm.style.display = (commentForm.style.display === 'none' || commentForm.style.display === '') ? 'block' : 'none';
}

function postComment() {
    var commentInput = document.getElementById('comment-input');
    var commentSection = document.querySelector('.comment-section');

    if (commentInput.value.trim() !== '') {
        var newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.textContent = 'User: ' + commentInput.value;
        commentSection.appendChild(newComment);

        // Effacer le champ de commentaire après avoir posté
        commentInput.value = '';
    }
}


