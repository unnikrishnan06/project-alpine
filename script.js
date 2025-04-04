document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("header").innerHTML = `
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html"></a>about</li>
                <li><a href="product.html">product</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    `;
    document.getElementById("footer").innerHTML = `
        <p>&copy; <span id="year"></span> Renault Alpine A310 Enthusiasts. All rights reserved.</p>
    `;

});