document.addEventListener("DOMContentLoaded", function () {
    // قائمة بعناوين الصور
    const imageUrls = [
        "1.jpg",
        "2.jpg",
        "3.jpg",
         "4.jpg",
        "5.jpg",
        "6.jpg",
          "7.jpg",
        "8.jpg",
        "9.jpg",
    "10.jpg",
        "11.jpg",
        "12.jpg",
    "13.jpg",
        "14.jpg",
        "15.jpg",
    "16.jpg",
        "17.jpg",
        "18.jpg",
        // أضف عناوين الصور الأخرى هنا
    ];

    // احصل على عنوان صورة عشوائية
    const randomImageUrl = getRandomElement(imageUrls);

    // قم بتعيين عنوان الصورة لعنصر الصورة في الصفحة
    document.getElementById("randomImage").src = randomImageUrl;
});

// دالة للحصول على عنصر عشوائي من قائمة
function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
