import GeraCPF from "./modules/GeraCPF";

import "./assets/css/style.css";

//  IIFE (Immediately Invoked Function Expression)
(function () {
    const div = document.querySelector("#cpf-gerado");
    const geradorCPF = new GeraCPF();
    const cpf = geradorCPF.geraNovoCpf();
    const element = document.createElement("h1");
    element.textContent = cpf;
    div.append(element);
})();
