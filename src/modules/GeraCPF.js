import ValidaCPF from "./validaCPF";

export default class GeraCPF {
    rand(min = "100000000", max = "999999999") {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    cpfFormatado(cpf) {
        return (
            cpf.slice(0, 3) +
            "." +
            cpf.slice(3, 6) +
            "." +
            cpf.slice(6, 9) +
            "-" +
            cpf.slice(9, 11)
        );
    }

    geraNovoCpf() {
        const cpfSemDigito = this.rand();
        const digitoUm = ValidaCPF.geraDigito(cpfSemDigito);
        const digitoDois = ValidaCPF.geraDigito(cpfSemDigito + digitoUm);
        const novoCpf = cpfSemDigito + digitoUm + digitoDois;
        console.log(novoCpf.length);
        if (novoCpf.length < 11) {
            return this.geraNovoCpf();
        }

        return this.cpfFormatado(novoCpf);
    }
}
