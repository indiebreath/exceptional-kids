const template = document.createElement('template');

template.innerHTML = `
    <div>
      <div id="upper-display">
        <p><a href="mailto:hello@exceptionalkidz.com.au">hello@exceptionalkidz.com.au</a> | <a href="tel:+610409166407">0409 166 407</a></p>
      </div>

      <div id="navbar">
        <ul>
          <li id="home"><a href="./index.html"><img src="images/logo.png" width="75px"><p>Exceptional Kidz</p></a></li>
          <li><a class="not-home" href="about.html"><p>About Us</p></a></li>
          <li><a class="not-home" href="services.html"><p>Services</p></a></li>
        </ul>
      </div>
    </div>
`;

document.body.appendChild(template.connect);
