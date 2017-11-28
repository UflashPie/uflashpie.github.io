<?php

$recepient = "yurii.o@ukr.net";
$siteName = "Мрійники Зимовий Табір";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$child_name = trim($_POST["child_name"]);
$year = trim($_POST["year"]);
$message = "Имя: $name \nТелефон: $phone \nEmail: $email \nІм`я дитини: $child_name  \nВік: $year";

$pagetitle = "Заявка з сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>