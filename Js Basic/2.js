<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p id="demo"></p>
    <script>
        const person = new Object();
        person.firstName = "sajit";
        person.lastName = "maharjan";
        person.age = 21;

        document.getElementById("demo").innerHTML = person.firstName + " is " + person.age + " years old."
    </script>
</body>
</html>