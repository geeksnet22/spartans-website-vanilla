
var currentImageSrc = ""

function handleClick(clickedImage) {
    currentImageSrc = clickedImage.src.split("//")[1]
    const imagesGallery = document.getElementsByClassName("imagesGallery")[0]
    const footer = document.getElementsByClassName("footer")[0]
    const imagePopupContainer = document.getElementsByClassName("imagePopupContainer")[0]
    const popupImage = document.getElementById("imagePopup")

    imagesGallery.style.display = "none"
    footer.style.display = "none"
    imagePopupContainer.style.display = "flex"
    popupImage.src = currentImageSrc
}

function closePopup() {
    const imagesGallery = document.getElementsByClassName("imagesGallery")[0]
    const footer = document.getElementsByClassName("footer")[0]
    const imagePopupContainer = document.getElementsByClassName("imagePopupContainer")[0]
    
    imagesGallery.style.display = "block"
    imagePopupContainer.style.display = "none"
    footer.style.display = "block"
}

function prevImage() {
    const currentImageIndex = parseInt(currentImageSrc.split("/")[currentImageSrc.split("/").length-1]
                .replace(".png", "").replace(".jpeg", ""))
    var newImageIndex = 0
    if (currentImageIndex === 1) {
        newImageIndex = 21
    }
    else {
        newImageIndex = currentImageIndex - 1
    }
    currentImageSrc = currentImageSrc.replace("/"+currentImageIndex+".", "/"+newImageIndex+".")
    const popupImage = document.getElementById("imagePopup")
    popupImage.src = currentImageSrc
}

function nextImage(currentImage) {
    const currentImageIndex = parseInt(currentImageSrc.split("/")[currentImageSrc.split("/").length-1]
                .replace(".png", "").replace(".jpeg", ""))
    var newImageIndex = 0
    if (currentImageIndex === 21) {
        newImageIndex = 1
    }
    else {
        newImageIndex = currentImageIndex + 1
    }
    currentImageSrc = currentImageSrc.replace("/"+currentImageIndex+".", "/"+newImageIndex+".")
    const popupImage = document.getElementById("imagePopup")
    popupImage.src = currentImageSrc
}