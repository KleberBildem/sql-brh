import java.time.LocalDate;
public class Exercicio7 {

    public class ObterAnoAtual {
        public static void main(String[] args) {
            LocalDate dataAtual = LocalDate.now();
            int anoAtual = dataAtual.getYear();
            System.out.println("Ano atual: " + anoAtual);
        }
    }
    public static void main(String[] args) {
        int idadeCliente1 = 35;

        String categoria = "";
        String datadenascimento1 = "";
        String anoatual = "";

        String nomeCliente1 = "Romero";
        int idade1 = 17;
        String nomeCliente2 = "Jorge";
        int idade2 = 45;

        // ainda não consegui corrigir o texto para aceitar as outras categorias além do ADULTO.
        if (idadeCliente1 <= 17) {
            categoria = "ADOLESCENTE";
        } else if (idadeCliente1 >= 18 && idadeCliente1 <= 29) {
            categoria = "JOVEM";
        } else if (idadeCliente1 >= 30 && idadeCliente1 <= 59) {
            categoria = "ADULTO";
        } else {
            categoria = "IDOSO";
        }
        System.out.println(">>> Listagem dos Clientes");
        System.out.println("Ano atual: " + anoatual);
        System.out.println("________________________");

        System.out.println("Nome:" + nomeCliente1);
        System.out.println("Data de Nascimento1:" + datadenascimento1);
        System.out.println("Idade:" + idade1);
        System.out.println("Caracteristica Etária: " + categoria);

        System.out.println("________________________");
        System.out.println("Nome:" + nomeCliente2);
        System.out.println("idade: " + idade2);

        System.out.println("Caracteristica Etária: " + categoria);
    }
}