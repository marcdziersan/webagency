<?php
$width = isset($_GET['width']) ? intval($_GET['width']) : 400;
$height = isset($_GET['height']) ? intval($_GET['height']) : 300;
$text = isset($_GET['text']) ? urldecode($_GET['text']) : "PLACEHOLDER";
$image = imagecreatetruecolor($width, $height);
$backgroundColor = imagecolorallocate($image, 204, 204, 204);
$textColor = imagecolorallocate($image, 0, 0, 0);
imagefilledrectangle($image, 0, 0, $width, $height, $backgroundColor);
$fontSize = 20;
$font = __DIR__ . '/arial.ttf';
if (!file_exists($font)) {
    die("Schriftartdatei 'arial.ttf' wurde nicht gefunden.");
}
$textBoundingBox = imagettfbbox($fontSize, 0, $font, $text);
$textWidth = $textBoundingBox[2] - $textBoundingBox[0];
$textHeight = $textBoundingBox[1] - $textBoundingBox[7];
$x = ($width - $textWidth) / 2;
$y = ($height - $textHeight) / 2 + $textHeight;
imagettftext($image, $fontSize, 0, $x, $y, $textColor, $font, $text);
header('Content-Type: image/png');
imagepng($image);
imagedestroy($image);
?>